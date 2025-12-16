"use client";

import { useEffect, useState } from "react";

export default function SuperAdminDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("fordac_token");

    if (!token) {
      setErrorMsg("Token manquant. Veuillez vous reconnecter.");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const res = await fetch("/api/superadmin/dashboard/overview", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        });

        if (!res.ok) {
          const err = await res.json();
          setErrorMsg(err.message || "Impossible de charger les données.");
          setLoading(false);
          return;
        }

        const json = await res.json();
        setData(json);
      } catch (err) {
        setErrorMsg("Erreur interne du serveur.");
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <div className="p-5 text-center">Chargement...</div>;
  if (errorMsg)
    return (
      <div className="p-5 bg-red-100 text-red-700 rounded text-center">
        {errorMsg}
      </div>
    );
  if (!data)
    return (
      <div className="p-5 bg-yellow-100 text-yellow-700 rounded text-center">
        Aucune donnée disponible.
      </div>
    );

  const { kpi, regions, recentActivity, lastMembers } = data;

  return (
    <div className="space-y-10">
      
      <h1 className="text-3xl font-bold text-green-900 text-center md:text-left">
        Tableau de bord SuperAdmin
      </h1>

      {/* KPI — Responsive grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
        {[
          { label: "Membres", value: kpi.totalMembers },
          { label: "Admins", value: kpi.totalAdmins },
          { label: "SuperAdmins", value: kpi.totalSuperadmins },
          { label: "Validés", value: kpi.validatedMemberships },
          { label: "En attente", value: kpi.pendingMemberships },
          { label: "Notif. non lues", value: kpi.unreadNotifications },
          { label: "Nouveaux (7j)", value: kpi.newMembers7days }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white shadow p-4 rounded-lg text-center hover:shadow-md transition"
          >
            <p className="text-sm text-gray-600">{item.label}</p>
            <p className="text-2xl font-bold text-green-700">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Regions */}
      <div className="bg-white shadow p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-4 text-green-800">Répartition par région</h2>

        <div className="space-y-3">
          {regions.map((r, i) => (
            <div key={i} className="flex justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-semibold">{r.name}</span>
              <span>{r.members} membres • {r.admins} admins</span>
            </div>
          ))}
        </div>
      </div>

      {/* Activity logs */}
      <div className="bg-white shadow p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-4 text-green-800">Activité récente</h2>

        <ul className="space-y-3">
          {recentActivity.map((a, i) => (
            <li key={i} className="p-3 bg-gray-50 rounded">
              <p className="font-semibold">{a.action}</p>
              <p className="text-sm text-gray-600">
                {a.user} — <span>{a.time}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Last Registered Members */}
      <div className="bg-white shadow p-6 rounded-xl">
        <h2 className="text-xl font-bold mb-4 text-green-800">Derniers inscrits</h2>

        <div className="space-y-3">
          {lastMembers.map((m, i) => (
            <div key={i} className="p-3 bg-gray-50 rounded flex justify-between">
              <div>
                <p className="font-semibold">{m.name}</p>
                <p className="text-sm text-gray-600">{m.region}</p>
              </div>
              <div className="text-right">
                <p className="text-sm">{m.date}</p>
                <span
                  className={
                    "text-xs px-2 py-1 rounded " +
                    (m.status === "validé"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700")
                  }
                >
                  {m.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
