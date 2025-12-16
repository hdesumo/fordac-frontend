"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Territoire FORDAC
const secteurs = ["Moungo-Nord", "Moungo-Sud"];

const arrondissementsParSecteur: any = {
  "Moungo-Nord": ["Mbanga", "Manjo", "Loum", "Njombé-Penja", "Baré-Bakem"],
  "Moungo-Sud": [
    "Nkongsamba 1er",
    "Nkongsamba 2e",
    "Nkongsamba 3e",
    "Melong",
    "Mombo",
  ],
};

export default function ListeMembresPage() {
  const [members, setMembers] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);

  // Recherches et filtres
  const [search, setSearch] = useState("");
  const [secteur, setSecteur] = useState("");
  const [arrondissement, setArrondissement] = useState("");

  // =========================
  // CHARGEMENT DES MEMBRES
  // =========================
  async function loadMembers() {
    try {
      const token = localStorage.getItem("adminToken");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/membres`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await res.json();
      setMembers(data);
      setFiltered(data);
    } catch (err) {
      console.error("Erreur chargement membres:", err);
    }
  }

  useEffect(() => {
    loadMembers();
  }, []);

  // =========================
  // FILTRAGE EN DIRECT
  // =========================
  useEffect(() => {
    let results = [...members];

    // Recherche texte
    if (search.trim() !== "") {
      const term = search.toLowerCase();
      results = results.filter(
        (m) =>
          m.name.toLowerCase().includes(term) ||
          m.email.toLowerCase().includes(term)
      );
    }

    // Filtre secteur
    if (secteur !== "") {
      results = results.filter((m) => m.secteur === secteur);
    }

    // Filtre arrondissement
    if (arrondissement !== "") {
      results = results.filter((m) => m.arrondissement === arrondissement);
    }

    setFiltered(results);
  }, [search, secteur, arrondissement, members]);

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Liste des Membres</h1>

      {/* =====================================================
          BARRE DE RECHERCHE ET FILTRES
      ===================================================== */}
      <div className="bg-[#145331] p-6 rounded-xl border border-gray-700 mb-8">

        {/* Rechercher */}
        <input
          type="text"
          placeholder="Recherche par nom ou email..."
          className="w-full bg-gray-800 p-3 rounded-lg mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Filtres secteur / arrondissement */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Secteur */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">Secteur</label>
            <select
              className="w-full bg-gray-800 p-3 rounded-lg"
              value={secteur}
              onChange={(e) => {
                const newSecteur = e.target.value;
                setSecteur(newSecteur);

                // Réinitialisation dynamique
                if (
                  arrondissement &&
                  !arrondissementsParSecteur[newSecteur]?.includes(
                    arrondissement
                  )
                ) {
                  setArrondissement("");
                }
              }}
            >
              <option value="">Tous</option>
              {secteurs.map((s, idx) => (
                <option key={idx} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Arrondissement */}
          <div>
            <label className="block mb-1 text-sm text-gray-300">
              Arrondissement
            </label>
            <select
              className="w-full bg-gray-800 p-3 rounded-lg"
              value={arrondissement}
              onChange={(e) => setArrondissement(e.target.value)}
            >
              <option value="">Tous</option>
              {secteur &&
                arrondissementsParSecteur[secteur]?.map((a: any) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>

      {/* =====================================================
          TABLEAU DES MEMBRES
      ===================================================== */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-gray-700">
          <thead className="bg-[#0f3d25]">
            <tr>
              <th className="p-3 border border-gray-700">Nom</th>
              <th className="p-3 border border-gray-700">Email</th>
              <th className="p-3 border border-gray-700">Secteur</th>
              <th className="p-3 border border-gray-700">Arrondissement</th>
              <th className="p-3 border border-gray-700">Quartier</th>
              <th className="p-3 border border-gray-700">Statut</th>
              <th className="p-3 border border-gray-700">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center p-5 text-gray-300">
                  Aucun membre trouvé.
                </td>
              </tr>
            ) : (
              filtered.map((m) => (
                <tr
                  key={m.id}
                  className="border border-gray-700 hover:bg-gray-800/40"
                >
                  <td className="p-3 border border-gray-700">{m.name}</td>
                  <td className="p-3 border border-gray-700">{m.email}</td>
                  <td className="p-3 border border-gray-700">
                    {m.secteur || "-"}
                  </td>
                  <td className="p-3 border border-gray-700">
                    {m.arrondissement || "-"}
                  </td>
                  <td className="p-3 border border-gray-700">
                    {m.quartier || "-"}
                  </td>
                  <td className="p-3 border border-gray-700">{m.status}</td>
                  <td className="p-3 border border-gray-700">
                    <Link
                      href={`/admin/membres/${m.id}`}
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
    </div>
  );
}
