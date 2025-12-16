"use client";

import { useEffect, useState } from "react";

export default function SuperadminNotificationsPage() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const token = localStorage.getItem("superadminToken");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/superadmin/notifications`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );

    const data = await res.json();
    setNotifications(data);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Notifications SuperAdmin</h1>

      <div className="bg-white text-black rounded shadow p-6">
        {notifications.length === 0 ? (
          <p>Aucune notification.</p>
        ) : (
          notifications.map((n: any) => (
            <div
              key={n.id}
              className={`p-3 border-b ${
                !n.is_read ? "bg-blue-50" : ""
              }`}
            >
              <p className="font-bold">{n.title}</p>
              <p className="text-sm">{n.message}</p>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(n.created_at).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
