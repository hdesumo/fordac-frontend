"use client";

import { useEffect, useState } from "react";

export default function AdminNotificationsPage() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadNotifications() {
    setLoading(true);

    try {
      const token = localStorage.getItem("adminToken");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/notifications`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      setNotifications(data.notifications || []);
    } catch (err) {
      console.error("Erreur chargement notifications", err);
    }

    setLoading(false);
  }

  async function markAsRead(id: number) {
    try {
      const token = localStorage.getItem("adminToken");

      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/notifications/mark-read/${id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      loadNotifications();
    } catch (err) {
      console.error("Erreur markAsRead", err);
    }
  }

  async function deleteNotification(id: number) {
    if (!confirm("Supprimer cette notification ?")) return;

    try {
      const token = localStorage.getItem("adminToken");

      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/notifications/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      loadNotifications();
    } catch (err) {
      console.error("Erreur suppression", err);
    }
  }

  useEffect(() => {
    loadNotifications();
  }, []);

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Notifications</h1>

      {loading ? (
        <p>Chargement des notifications...</p>
      ) : notifications.length === 0 ? (
        <p>Aucune notification.</p>
      ) : (
        <div className="space-y-4">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`p-4 rounded-xl border border-gray-700 shadow bg-[#145331]`}
            >
              <div className="flex justify-between">
                <h2 className="font-bold text-white">{n.title}</h2>

                {!n.is_read && (
                  <span className="px-2 py-1 rounded bg-yellow-600 text-xs text-white">
                    Nouveau
                  </span>
                )}
              </div>

              <p className="text-gray-300 mt-2">{n.message}</p>

              <p className="text-gray-400 text-xs mt-2">
                {new Date(n.created_at).toLocaleString()}
              </p>

              <div className="flex gap-3 mt-4">
                {!n.is_read && (
                  <button
                    onClick={() => markAsRead(n.id)}
                    className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded text-sm"
                  >
                    Marquer comme lu
                  </button>
                )}

                <button
                  onClick={() => deleteNotification(n.id)}
                  className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded text-sm"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
