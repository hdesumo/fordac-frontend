"use client";

import { useEffect, useState } from "react";
import useAdminAuth from "@/hooks/useAdminAuth";

// =============================================
// COMPOSANT CARD STATISTIQUE
// =============================================
function StatCard({ title, value }: any) {
  return (
    <div className="bg-[#145331] p-5 rounded-xl border border-gray-700 shadow-sm">
      <p className="text-gray-300 text-sm">{title}</p>
      <h2 className="text-3xl font-bold text-white mt-1">{value}</h2>
    </div>
  );
}

// =============================================
// COMPOSANT DE SECTION
// =============================================
function Section({ title, children }: any) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
}

// =============================================
// PAGE PRINCIPALE DASHBOARD ADMIN
// =============================================
export default function AdminDashboardPage() {
  const [stats, setStats] = useState<any>(null);
  const { token } = useAdminAuth();

  async function loadStats() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/dashboard/stats`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const data = await res.json();
      setStats(data);
    } catch (e) {
      console.error("Erreur dashboard:", e);
    }
  }

  useEffect(() => {
    if (token) loadStats();
  }, [token]);

  if (!stats)
    return (
      <div className="p-6 text-white">
        <p>Chargement...</p>
      </div>
    );

  return (
    <main className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-8">Tableau de Bord — Admin</h1>

      {/* 1. Stats Membres */}
      <Section title="Statistiques des membres">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <StatCard title="Total membres" value={stats.totalMembres} />
          <StatCard title="Actifs" value={stats.actifs} />
          <StatCard title="En attente" value={stats.pending} />
          <StatCard title="Suspendus" value={stats.suspended} />
          <StatCard title="Radiés" value={stats.banned} />
        </div>
      </Section>

      {/* 2. Territoire — Moungo */}
      <Section title="Territoire — Département du Moungo">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <StatCard title="Moungo-Nord" value={stats.nord} />
          <StatCard title="Moungo-Sud" value={stats.sud} />
        </div>

        <h3 className="text-xl font-bold mb-3">Répartition par Arrondissement</h3>

        <div className="bg-[#145331] p-6 rounded-xl border border-gray-700">
          {stats.arrondissements.length === 0 ? (
            <p>Aucun arrondissement enregistré.</p>
          ) : (
            stats.arrondissements.map((arr: any, idx: number) => (
              <div
                key={idx}
                className="flex justify-between border-b border-gray-700 py-2"
              >
                <span>{arr.arrondissement}</span>
                <span className="font-bold">{arr.total}</span>
              </div>
            ))
          )}
        </div>
      </Section>

      {/* 3. Derniers inscrits */}
      <Section title="Derniers membres inscrits">
        <div className="bg-[#145331] p-6 rounded-xl border border-gray-700">
          {stats.derniers.length === 0 ? (
            <p>Aucun membre récent.</p>
          ) : (
            stats.derniers.map((m: any, idx: number) => (
              <div key={idx} className="border-b border-gray-700 py-3 flex flex-col">
                <p className="font-bold">{m.name}</p>
                <p className="text-sm text-gray-300">{m.email}</p>
                <p className="text-sm mt-1">
                  {m.secteur || "-"} / {m.arrondissement || "-"}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Inscrit le {new Date(m.created_at).toLocaleString()}
                </p>
              </div>
            ))
          )}
        </div>
      </Section>

      {/* 4. Activité Forum */}
      <Section title="Activité Forum">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <StatCard title="Posts créés" value={stats.totalPosts} />
          <StatCard title="Commentaires" value={stats.totalComments} />
        </div>

        <h3 className="text-xl font-bold mt-6 mb-3">Derniers posts</h3>
        <div className="bg-[#145331] p-6 rounded-xl border border-gray-700 mb-6">
          {stats.recentPosts.length === 0 ? (
            <p>Aucun post récent.</p>
          ) : (
            stats.recentPosts.map((p: any, idx: number) => (
              <div key={idx} className="border-b border-gray-700 py-3">
                <p className="font-bold">{p.title}</p>
                <p className="text-sm text-gray-300">Par {p.author || "—"}</p>
                <p className="text-xs text-gray-400">
                  {new Date(p.created_at).toLocaleString()}
                </p>
              </div>
            ))
          )}
        </div>

        <h3 className="text-xl font-bold mt-6 mb-3">Derniers commentaires</h3>
        <div className="bg-[#145331] p-6 rounded-xl border border-gray-700">
          {stats.recentComments.length === 0 ? (
            <p>Aucun commentaire récent.</p>
          ) : (
            stats.recentComments.map((c: any, idx: number) => (
              <div key={idx} className="border-b border-gray-700 py-3">
                <p className="text-gray-200">{c.content}</p>
                <p className="text-sm text-gray-300">
                  Sur : <span className="font-bold">{c.post}</span>
                </p>
                <p className="text-sm">Par {c.author || "—"}</p>
                <p className="text-xs text-gray-400">
                  {new Date(c.created_at).toLocaleString()}
                </p>
              </div>
            ))
          )}
        </div>
      </Section>

      {/* 5. Signalements */}
      <Section title="Signalements">
        <StatCard title="Total des signalements" value={stats.totalReports} />

        <div className="bg-[#145331] p-6 rounded-xl border border-gray-700 mt-6">
          {stats.recentReports.length === 0 ? (
            <p>Aucun signalement récent.</p>
          ) : (
            stats.recentReports.map((r: any, idx: number) => (
              <div key={idx} className="border-b border-gray-700 py-3">
                <p className="font-bold">{r.type}</p>
                <p className="text-sm text-gray-300">{r.reason}</p>
                <p className="text-xs text-gray-400">Par : {r.reporter || "—"}</p>
                <p className="text-xs text-gray-400">
                  {new Date(r.created_at).toLocaleString()}
                </p>
              </div>
            ))
          )}
        </div>
      </Section>

      {/* 6. Logs Admin */}
      <Section title="Activités des Administrateurs">
        <div className="bg-[#145331] p-6 rounded-xl border border-gray-700">
          {stats.recentActivities.length === 0 ? (
            <p>Aucune activité enregistrée.</p>
          ) : (
            stats.recentActivities.map((a: any, idx: number) => (
              <div key={idx} className="border-b border-gray-700 py-3">
                <p className="font-bold">{a.action_type}</p>
                <p className="text-gray-300 text-sm">{a.description}</p>
                <p className="text-xs text-gray-400">
                  Admin : {a.admin_name || "—"} — IP : {a.ip_address || "—"}
                </p>
                <p className="text-xs text-gray-400">
                  {new Date(a.created_at).toLocaleString()}
                </p>
              </div>
            ))
          )}
        </div>
      </Section>
    </main>
  );
}
