"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Report = {
  id: number;
  type: "post" | "comment";
  reason: string;
  content: string;
  reported_by?: string;
  created_at?: string;
  topic_id?: number;
};

export default function AdminForumModerationPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);

  const API = process.env.NEXT_PUBLIC_API_URL;

  const loadReports = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/admin/forum/reports`, {
        cache: "no-store",
      });
      const data = await res.json();
      setReports(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error("Erreur chargement signalements:", e);
      setReports([]);
    }
    setLoading(false);
  };

  const deleteReportedContent = async (id: number) => {
    if (!confirm("Supprimer le contenu signalé ?")) return;

    try {
      await fetch(`${API}/admin/forum/reports/${id}`, {
        method: "DELETE",
      });
      loadReports();
    } catch (e) {
      console.error("Erreur suppression signalement:", e);
    }
  };

  useEffect(() => {
    loadReports();
  }, []);

  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-extrabold text-[#145331]">
        Modération & signalements
      </h1>

      {loading ? (
        <p className="text-gray-500">Chargement des signalements…</p>
      ) : reports.length === 0 ? (
        <div className="bg-white border rounded-xl p-8 text-center text-gray-600">
          Aucun signalement enregistré.
        </div>
      ) : (
        <div className="space-y-6">
          {reports.map((r) => (
            <div
              key={r.id}
              className="bg-white border rounded-xl p-6 shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-medium px-2 py-1 rounded bg-red-100 text-red-700">
                  Signalement
                </span>
                <span className="text-sm text-gray-500">
                  {r.created_at
                    ? new Date(r.created_at).toLocaleString("fr-FR")
                    : "—"}
                </span>
              </div>

              <p className="text-sm text-gray-700 mb-2">
                <strong>Motif :</strong> {r.reason}
              </p>

              <div className="bg-gray-50 p-4 rounded border text-gray-800">
                {r.content}
              </div>

              <div className="flex justify-between items-center mt-4">
                {r.topic_id && (
                  <Link
                    href={`/admin/forum/sujets/${r.topic_id}`}
                    className="text-sm text-[#145331] hover:underline"
                  >
                    Voir le sujet
                  </Link>
                )}

                <button
                  onClick={() => deleteReportedContent(r.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm"
                >
                  Supprimer le contenu
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
