"use client";

import { useEffect, useState } from "react";
import { getDashboardStats } from "@/lib/adminApi";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  async function loadStats() {
    setLoading(true);

    try {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("token")
          : null;

      const data = await getDashboardStats(token || "");
      setStats(data || {});
    } catch (e) {
      console.error("Erreur chargement stats:", e);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadStats();
  }, []);

  if (loading) return <p>Chargement du tableau de bord…</p>;

  return (
    <main className="p-10 space-y-8">
      <h1 className="text-3xl font-bold text-[#166534]">
        Tableau de bord Administrateur
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold">Total Membres</h2>
          <p className="text-3xl font-bold mt-2">
            {stats?.total_members ?? 0}
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold">Messages envoyés</h2>
          <p className="text-3xl font-bold mt-2">
            {stats?.messages_sent ?? 0}
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold">Signalements</h2>
          <p className="text-3xl font-bold mt-2">
            {stats?.reports ?? 0}
          </p>
        </div>
      </div>
    </main>
  );
}
