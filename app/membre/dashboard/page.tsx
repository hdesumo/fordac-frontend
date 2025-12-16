"use client";

import { useEffect, useState } from "react";
import ProtectedRouteMembre from "@/components/ProtectedRouteMembre";
import useMembreAuth from "@/hooks/useMembreAuth";
import MembreTopbar from "@/components/MembreTopbar";

export default function MemberDashboard() {
  const { token } = useMembreAuth();

  const [profile, setProfile] = useState<any>(null);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadData() {
    try {
      const p = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/member/profile`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const profileJson = await p.json();
      setProfile(profileJson);

      const n = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/member/notifications`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const notifJson = await n.json();
      setNotifications(notifJson);
    } catch (error) {
      console.error("Erreur chargement dashboard:", error);
    }

    setLoading(false);
  }

  useEffect(() => {
    if (token) loadData();
  }, [token]);

  if (loading)
    return (
      <ProtectedRouteMembre>
        <div className="p-6">Chargement...</div>
      </ProtectedRouteMembre>
    );

  if (!profile)
    return (
      <ProtectedRouteMembre>
        <div className="p-6 text-red-600">
          Impossible de charger le profil.
        </div>
      </ProtectedRouteMembre>
    );

  return (
    <ProtectedRouteMembre>
      <div className="min-h-screen bg-[#F7F7F7]">
        <MembreTopbar />

        <div className="p-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Bienvenue, {profile.prenom} {profile.nom}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* PROFIL */}
            <div className="bg-white p-6 rounded-xl shadow border">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                Mes informations
              </h2>

              <p>
                <b>Téléphone :</b> {profile.phone}
              </p>
              <p>
                <b>Email :</b> {profile.email || "—"}
              </p>
              <p>
                <b>Quartier :</b> {profile.quartier || "—"}
              </p>
              <p>
                <b>Secteur :</b> {profile.secteur || "—"}
              </p>
              <p>
                <b>Arrondissement :</b> {profile.arrondissement || "—"}
              </p>
              <p>
                <b>Niveau :</b> {profile.membership_level || "—"}
              </p>
            </div>

            {/* NOTIFICATIONS */}
            <div className="bg-white p-6 rounded-xl shadow border">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                Notifications
              </h2>

              {notifications.length === 0 && (
                <p className="text-gray-600">Aucune notification.</p>
              )}

              {notifications.map((n: any, i: number) => (
                <div key={i} className="border-b py-2">
                  <p className="font-bold text-gray-800">{n.title}</p>
                  <p className="text-sm text-gray-600">{n.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRouteMembre>
  );
}
