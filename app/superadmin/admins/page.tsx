"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function SuperAdminAdminsList() {
  const [admins, setAdmins] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadAdmins() {
    try {
      const token = localStorage.getItem("superadminToken");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/superadmin/admins`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await res.json();
      setAdmins(data);
      setLoading(false);
    } catch (err) {
      console.error("Erreur:", err);
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAdmins();
  }, []);

  return (
    <div className="p-6 text-white">

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Gestion des Administrateurs</h1>

        <Link
          href="/superadmin/admins/create"
          className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-bold"
        >
          + Nouvel Admin
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 text-left">
          <thead className="bg-[#0f3d25]">
            <tr>
              <th className="p-3 border border-gray-700">Nom</th>
              <th className="p-3 border border-gray-700">Email</th>
              <th className="p-3 border border-gray-700">Service</th>
              <th className="p-3 border border-gray-700">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td className="p-6 text-center" colSpan={4}>
                  Chargement...
                </td>
              </tr>
            ) : admins.length === 0 ? (
              <tr>
                <td className="p-6 text-center" colSpan={4}>
                  Aucun administrateur trouvé.
                </td>
              </tr>
            ) : (
              admins.map((a) => (
                <tr key={a.id} className="border border-gray-700">
                  <td className="p-3 border border-gray-700">{a.name}</td>
                  <td className="p-3 border border-gray-700">{a.email}</td>
                  <td className="p-3 border border-gray-700">{a.service || "-"}</td>
                  <td className="p-3 border border-gray-700">
                    <Link
                      href={`/superadmin/admins/${a.id}`}
                      className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded-lg text-sm"
                    >
                      Gérer
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
