"use client";

import { useEffect, useState } from "react";
import ProtectedRouteAdmin from "@/components/ProtectedRouteAdmin";

export default function AdminReportsPage() {
  const [reports, setReports] = useState<any[]>([]);
  const API = process.env.NEXT_PUBLIC_API_URL;

  const load = async () => {
    const res = await fetch(`${API}/admin/reports`);
    const data = await res.json();
    setReports(data.reports || []);
  };

  useEffect(() => {
    load();
  }, []);

  const remove = async (id: number) => {
    if (!confirm("Confirmer la suppression ?")) return;
    await fetch(`${API}/admin/reports/${id}`, { method: "DELETE" });
    load();
  };

  return (
    <ProtectedRouteAdmin>
      <main className="p-10">
        <h1 className="text-3xl font-bold text-[#166534] mb-6">
          Signalements
        </h1>

        <div className="bg-white p-8 rounded-xl shadow">
          {reports.length === 0 ? (
            <p className="text-gray-500">Aucun signalement.</p>
          ) : (
            <ul className="space-y-6">
              {reports.map((r: any) => (
                <li key={r.id} className="border rounded-xl p-5">
                  <p>
                    <strong>Message :</strong> {r.post_content}
                  </p>
                  <p>
                    <strong>Auteur :</strong> {r.post_author}
                  </p>
                  <p>
                    <strong>Signalé par :</strong> {r.reporter}
                  </p>
                  <p className="mt-2 text-gray-600 text-sm">
                    Motif : {r.reason}
                  </p>

                  <button
                    onClick={() => remove(r.id)}
                    className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Supprimer le signalement
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </ProtectedRouteAdmin>
  );
}
