"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function SuperAdminDashboard() {
  const [stats, setStats] = useState<any>(null);
  const [activities, setActivities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadDashboard() {
    try {
      const token = localStorage.getItem("superadminToken");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/superadmin/dashboard`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await res.json();
      setStats(data.stats);
      setActivities(data.activities || []);
      setLoading(false);
    } catch (err) {
      console.error("Erreur:", err);
      setLoading(false);
    }
  }

  useEffect(() => {
    loadDashboard();
  }, []);

  if (loading || !stats) {
    return (
      <div className="p-6 text-white">
        <p>Chargement du tableau de bord...</p>
      </div>
    );
  }

  return (
    <div className="p-6 text-white">

      <h1 className="text-4xl font-bold mb-8">Tableau de Bord SuperAdmin</h1>

      {/* ===========================================
          SECTION 1 — CARTES STATISTIQUES
      ============================================ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-[#145331] p-6 rounded-xl border border-gray-700 shadow-xl">
          <h2 className="text-xl font-bold mb-2">Administrateurs</h2>
          <p className="text-4xl font-bold">{stats.admins}</p>
        </div>

        <div className="bg-[#145331] p-6 rounded-xl border border-gray-700 shadow-xl">
          <h2 className="text-xl font-bold mb-2">Membres Actifs</h2>
          <p className="text-4xl font-bold">{stats.members.active}</p>
        </div>

        <div className="bg-[#145331] p-6 rounded-xl border border-gray-700 shadow-xl">
          <h2 className="text-xl font-bold mb-2">Nouvelles Inscriptions</h2>
          <p className="text-4xl font-bold">{stats.members.today}</p>
        </div>
      </div>

      {/* ===========================================
          SECTION 2 — RÉPARTITION TERRITORIALE
      ============================================ */}
      <h2 className="text-2xl font-bold mb-4">Répartition par Secteurs & Arrondissements</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

        <div className="bg-[#145331] p-6 rounded-xl border border-gray-700 shadow-xl">
          <h3 className="text-xl mb-3 font-bold">Secteurs du Moungo</h3>

          {Object.keys(stats.secteurs || {}).map((secteur) => (
            <div key={secteur} className="flex justify-between py-2 border-b border-gray-700">
              <span>{secteur}</span>
              <span className="font-bold">{stats.secteurs[secteur]}</span>
            </div>
          ))}
        </div>

        <div className="bg-[#145331] p-6 rounded-xl border border-gray-700 shadow-xl">
          <h3 className="text-xl mb-3 font-bold">Arrondissements</h3>

          {Object.keys(stats.arrondissements || {}).map((a) => (
            <div key={a} className="flex justify-between py-2 border-b border-gray-700">
              <span>{a}</span>
              <span className="font-bold">{stats.arrondissements[a]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ===========================================
          SECTION 3 — ACTIVITÉS DES ADMINS
      ============================================ */}
      <h2 className="text-2xl font-bold mb-4">Activités Récentes des Administrateurs</h2>

      <div className="bg-[#145331] p-6 rounded-xl border border-gray-700 shadow-xl mb-10">

        {activities.length === 0 ? (
          <p className="text-gray-300">Aucune activité enregistrée.</p>
        ) : (
          <ul className="space-y-3">
            {activities.map((act) => (
              <li
                key={act.id}
                className="border-b border-gray-700 pb-3 flex justify-between"
              >
                <div>
                  <span className="font-bold text-green-300">{act.admin_name}</span>{" "}
                  a effectué une action :  
                  <span className="text-yellow-300 font-semibold"> {act.action}</span>
                  <br />
                  <span className="text-sm text-gray-300">
                    {new Date(act.created_at).toLocaleString()}
                  </span>
                </div>

                <Link
                  href={`/superadmin/admins/${act.admin_id}`}
                  className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded-lg text-sm"
                >
                  Voir Admin
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ===========================================
          SECTION 4 — BOUTONS RAPIDES
      ============================================ */}
      <h2 className="text-2xl font-bold mb-4">Actions Rapides</h2>

      <div className="flex gap-6">

        <Link
          href="/superadmin/admins"
          className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-bold"
        >
          Gérer les Administrateurs
        </Link>

        <Link
          href="/superadmin/membres"
          className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-bold"
        >
          Gérer les Membres
        </Link>

      </div>
    </div>
  );
}
