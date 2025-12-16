"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MembreTopbar from "@/components/MembreTopbar";

export default function ProfilPage() {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  async function fetchProfile() {
    const token = localStorage.getItem("memberToken");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/members/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Erreur chargement profil");
      }

      const data = await res.json();
      setProfile(data);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        Chargement...
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-400">
        Profil introuvable
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f2f1e] text-white">
      <MembreTopbar />

      <div className="p-6 max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Mon profil</h1>

        <div className="bg-[#145331] p-6 rounded-xl border border-green-800 space-y-4">
          <div>
            <span className="font-semibold">Nom :</span>{" "}
            {profile.name}
          </div>

          <div>
            <span className="font-semibold">Email :</span>{" "}
            {profile.email}
          </div>

          <div>
            <span className="font-semibold">Téléphone :</span>{" "}
            {profile.phone}
          </div>

          {profile.quartier && (
            <div>
              <span className="font-semibold">Quartier :</span>{" "}
              {profile.quartier}
            </div>
          )}

          {profile.secteur && (
            <div>
              <span className="font-semibold">Secteur :</span>{" "}
              {profile.secteur}
            </div>
          )}

          {profile.arrondissement && (
            <div>
              <span className="font-semibold">
                Arrondissement :
              </span>{" "}
              {profile.arrondissement}
            </div>
          )}
        </div>

        <Link
          href="/membre/profil/edit"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-bold"
        >
          Modifier mon profil
        </Link>
      </div>
    </div>
  );
}
