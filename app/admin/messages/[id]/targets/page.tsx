"use client";

import { useEffect, useState } from "react";
import { adminFetch } from "@/lib/adminApi";
import { useParams } from "next/navigation";

export default function MessageTargetsPage() {
  const { id } = useParams();
  const [targets, setTargets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadTargets() {
    setLoading(true);
    try {
      // ✅ Appel correct : 1 seul argument
      const res = await adminFetch(`/api/admin/messages/targets/${id}`);
      const data = await res.json();

      if (Array.isArray(data)) {
        setTargets(data);
      } else {
        console.error("Format inattendu:", data);
      }
    } catch (error) {
      console.error("Erreur targets admin:", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadTargets();
  }, [id]);

  if (loading) return <p>Chargement des destinataires…</p>;

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold text-[#166534] mb-6">
        Destinataires du message #{id}
      </h1>

      {targets.length === 0 ? (
        <p>Aucun destinataire trouvé.</p>
      ) : (
        <ul className="space-y-2">
          {targets.map((t: any) => (
            <li key={t.id} className="p-3 bg-white shadow rounded">
              <p className="font-semibold">{t.name}</p>
              <p className="text-gray-600">{t.email}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
