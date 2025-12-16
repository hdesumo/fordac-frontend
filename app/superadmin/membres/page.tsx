"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function SuperAdminMembersList() {
  const [members, setMembers] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [secteur, setSecteur] = useState("");
  const [arrondissement, setArrondissement] = useState("");

  const [loading, setLoading] = useState(true);

  async function loadMembers() {
    setLoading(true);

    const token = localStorage.getItem("superadminToken");

    const params = new URLSearchParams({
      page: String(page),
      search,
      secteur,
      arrondissement,
    });

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/superadmin/members?${params.toString()}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const data = await res.json();
    setMembers(data.members);
    setLoading(false);
  }

  useEffect(() => {
    loadMembers();
  }, [page]);

  function handleSearch() {
    setPage(1);
    loadMembers();
  }

  return (
    <div className="p-6 text-white">

      <h1 className="text-3xl font-bold mb-6">Gestion des Membres</h1>

      <div className="flex gap-4 mb-6">

  <a
    href={`${process.env.NEXT_PUBLIC_API_URL}/api/superadmin/members/export/excel?search=${search}&secteur=${secteur}&arrondissement=${arrondissement}`}
    target="_blank"
    className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-bold"
  >
    Export Excel
  </a>

  <a
    href={`${process.env.NEXT_PUBLIC_API_URL}/api/superadmin/members/export/pdf?search=${search}&secteur=${secteur}&arrondissement=${arrondissement}`}
    target="_blank"
    className="px-4 py-2 bg-[#8b0000] hover:bg-red-700 rounded-lg font-bold"
  >
    Export PDF
  </a>
</div>


      {/* ============================================================
          FILTRES
      ============================================================ */}
      <div className="bg-[#145331] p-5 rounded-xl border border-gray-700 mb-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Recherche */}
          <div>
            <label className="block mb-2">Recherche</label>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-gray-800 p-3 rounded-lg"
              placeholder="Nom, email, téléphone"
            />
          </div>

          {/* Secteur */}
          <div>
            <label className="block mb-2">Secteur du Moungo</label>
            <select
              value={secteur}
              onChange={(e) => setSecteur(e.target.value)}
              className="w-full bg-gray-800 p-3 rounded-lg"
            >
              <option value="">Tous</option>
              <option value="Moungo Nord">Moungo Nord</option>
              <option value="Moungo Sud">Moungo Sud</option>
            </select>
          </div>

          {/* Arrondissement */}
          <div>
            <label className="block mb-2">Arrondissement</label>
            <input
              value={arrondissement}
              onChange={(e) => setArrondissement(e.target.value)}
              className="w-full bg-gray-800 p-3 rounded-lg"
              placeholder="Njombé, Penja, Loum…"
            />
          </div>

          {/* Bouton filtrer */}
          <div className="flex items-end">
            <button
              onClick={handleSearch}
              className="w-full bg-green-600 hover:bg-green-700 rounded-lg p-3 font-bold"
            >
              Filtrer
            </button>
          </div>

        </div>
      </div>

      {/* ============================================================
          TABLEAU
      ============================================================ */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700">
          <thead className="bg-[#0f3d25]">
            <tr>
              <th className="p-3 border border-gray-700">Nom</th>
              <th className="p-3 border border-gray-700">Téléphone</th>
              <th className="p-3 border border-gray-700">Secteur</th>
              <th className="p-3 border border-gray-700">Arrondissement</th>
              <th className="p-3 border border-gray-700">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} className="p-6 text-center">
                  Chargement...
                </td>
              </tr>
            ) : members.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-6 text-center">
                  Aucun membre trouvé.
                </td>
              </tr>
            ) : (
              members.map((m) => (
                <tr key={m.id} className="border border-gray-700">
                  <td className="p-3 border border-gray-700">{m.name}</td>
                  <td className="p-3 border border-gray-700">{m.phone}</td>
                  <td className="p-3 border border-gray-700">{m.secteur}</td>
                  <td className="p-3 border border-gray-700">{m.arrondissement}</td>

                  <td className="p-3 border border-gray-700">
                    <Link
                      href={`/superadmin/membres/${m.id}`}
                      className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded-lg text-sm"
                    >
                      Voir
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-gray-800 rounded-lg"
        >
          Précédent
        </button>

        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-gray-800 rounded-lg"
        >
          Suivant
        </button>
      </div>

    </div>
  );
}
