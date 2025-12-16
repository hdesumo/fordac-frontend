"use client";

import { useEffect, useState } from "react";

export default function MemberActivitiesPage() {
  const [activities, setActivities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [secteur, setSecteur] = useState("");
  const [arrondissement, setArrondissement] = useState("");
  const [action, setAction] = useState("");
  const [page, setPage] = useState(1);

  async function loadActivities() {
    setLoading(true);

    const token = localStorage.getItem("superadminToken");

    const params = new URLSearchParams({
      search,
      secteur,
      arrondissement,
      action,
      page: String(page)
    });

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/superadmin/members/activities?${params.toString()}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const data = await res.json();
    setActivities(data.activities);
    setLoading(false);
  }

  useEffect(() => {
    loadActivities();
  }, [page]);

  function applyFilters() {
    setPage(1);
    loadActivities();
  }

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Journal d’Activités des Membres</h1>

      {/* FILTRES */}
      <div className="bg-[#145331] p-6 rounded-xl border border-gray-700 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Recherche */}
          <div>
            <label className="block mb-2">Recherche</label>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-gray-800 p-3 rounded-lg"
              placeholder="Nom ou Téléphone"
            />
          </div>

          {/* Secteur */}
          <div>
            <label className="block mb-2">Secteur</label>
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
              placeholder="Njombé, Penja…"
            />
          </div>

          {/* Type d'action */}
          <div>
            <label className="block mb-2">Action</label>
            <select
              value={action}
              onChange={(e) => setAction(e.target.value)}
              className="w-full bg-gray-800 p-3 rounded-lg"
            >
              <option value="">Toutes</option>
              <option value="Inscription">Inscription</option>
              <option value="Mise à jour du profil">Mise à jour du profil</option>
              <option value="Changement de statut">Changement de statut</option>
              <option value="Changement de niveau">Changement de niveau</option>
              <option value="Suppression">Suppression</option>
            </select>
          </div>

        </div>

        <button
          className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-bold"
          onClick={applyFilters}
        >
          Appliquer les filtres
        </button>
      </div>

      {/* TABLEAU */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700">
          <thead className="bg-[#0f3d25]">
            <tr>
              <th className="p-3 border border-gray-700">Membre</th>
              <th className="p-3 border border-gray-700">Action</th>
              <th className="p-3 border border-gray-700">Description</th>
              <th className="p-3 border border-gray-700">Secteur</th>
              <th className="p-3 border border-gray-700">Arrondissement</th>
              <th className="p-3 border border-gray-700">Date</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="p-6 text-center">Chargement…</td>
              </tr>
            ) : activities.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-6 text-center">Aucune activité trouvée</td>
              </tr>
            ) : (
              activities.map((a) => (
                <tr key={a.id} className="border border-gray-700">
                  <td className="p-3 border border-gray-700">{a.name}</td>
                  <td className="p-3 border border-gray-700 text-yellow-300 font-bold">{a.action}</td>
                  <td className="p-3 border border-gray-700">{a.description}</td>
                  <td className="p-3 border border-gray-700">{a.secteur}</td>
                  <td className="p-3 border border-gray-700">{a.arrondissement}</td>
                  <td className="p-3 border border-gray-700">
                    {new Date(a.created_at).toLocaleString()}
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
