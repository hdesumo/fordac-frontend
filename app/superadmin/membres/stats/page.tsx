"use client";

import { useEffect, useState } from "react";
import StatsChart from "./StatsChart";

interface MemberStats {
  total: number;
  active: number;
  pending: number;
  suspended: number;
}

export default function SuperAdminMemberStatsPage() {
  const [stats, setStats] = useState<MemberStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 👉 API BASE URL (Backend local ou production)
  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/superadmin/membres/stats`);

        if (!res.ok) throw new Error("Erreur lors du chargement des statistiques");

        const data = await res.json();
        setStats(data);
      } catch (err: any) {
        setError(err.message || "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [API_BASE_URL]);

  if (loading) {
    return (
      <div className="p-6">
        <p className="text-gray-600">Chargement des statistiques...</p>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="p-6 text-red-600">
        <p>Erreur : {error || "Impossible de charger les statistiques."}</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Statistiques des Membres</h1>

      <StatsChart
        stats={[
          { label: "Membres actifs", value: stats.active, color: "#16a34a" },
          { label: "En attente", value: stats.pending, color: "#eab308" },
          { label: "Suspendus", value: stats.suspended, color: "#dc2626" },
        ]}
      />

      <div className="bg-white rounded-lg shadow p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">Résumé</h2>

        <ul className="space-y-2 text-gray-700">
          <li>
            <strong>Total membres :</strong> {stats.total}
          </li>
          <li>
            <strong>Membres actifs :</strong> {stats.active}
          </li>
          <li>
            <strong>En attente :</strong> {stats.pending}
          </li>
          <li>
            <strong>Suspendus :</strong> {stats.suspended}
          </li>
        </ul>
      </div>
    </div>
  );
}
