"use client";

import { useEffect, useState } from "react";

export default function ActivitiesPage() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const token = localStorage.getItem("superadminToken");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/superadmin/activities`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );

    const data = await res.json();
    setActivities(data);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Activités des Administrateurs</h1>

      <div className="bg-white text-black rounded shadow p-6">
        {activities.length === 0 ? (
          <p>Aucune activité trouvée.</p>
        ) : (
          activities.map((act: any) => (
            <div key={act.id} className="border-b p-4">
              <p className="font-bold">{act.action}</p>
              <p className="text-sm">
                {act.description}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Admin : {act.admin_name}
              </p>

              <p className="text-xs text-gray-500">
                IP : {act.ip_address} — {act.user_agent}
              </p>

              <p className="text-xs text-gray-500">
                {new Date(act.created_at).toLocaleString()}
              </p>

              {act.link && (
                <a
                  className="text-blue-600 text-sm hover:underline"
                  href={act.link}
                >
                  Ouvrir →
                </a>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
