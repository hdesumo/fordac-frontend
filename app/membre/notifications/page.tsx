"use client";

import { useEffect, useState } from "react";

export default function MemberNotificationsPage() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadNotifications() {
    const token = localStorage.getItem("memberToken");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/members/notifications`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const data = await res.json();
    setNotifications(data);
    setLoading(false);
  }

  useEffect(() => {
    loadNotifications();
  }, []);

  return (
    <div className="p-6 text-white">

      <h1 className="text-3xl font-bold mb-6">Mes notifications</h1>

      <div className="bg-[#145331] p-6 rounded-xl border border-green-800">

        {loading ? (
          <p className="py-4 text-center">Chargement…</p>
        ) : notifications.length === 0 ? (
          <p className="py-4 text-center">Aucune notification pour le moment.</p>
        ) : (
          <div className="space-y-4">
            {notifications.map((notif, i) => (
              <div
                key={i}
                className="bg-[#0f3d24] p-4 rounded-lg border border-green-900"
              >
                <p className="text-lg font-bold">{notif.title}</p>
                <p className="text-sm text-gray-300 mt-1">
                  {notif.message}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  {new Date(notif.created_at).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
