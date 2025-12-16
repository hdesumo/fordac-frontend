"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminPublicationsPage() {
  const [loaded, setLoaded] = useState(false);

  // --- Filtres
  const [search, setSearch] = useState("");
  const [statut, setStatut] = useState("");
  const [secteur, setSecteur] = useState("");
  const [arrondissement, setArrondissement] = useState("");

  // --- Territoire FORDAC
  const secteurs = ["Moungo Nord", "Moungo Sud"];

  const arrondissementsParSecteur: any = {
    "Moungo Nord": [
      "Nkongsamba 1er",
      "Nkongsamba 2e",
      "Nkongsamba 3e",
      "Loum",
      "Manjo",
      "Baré-Bakem",
    ],
    "Moungo Sud": ["Melong", "Njombé-Penja", "Mbanga", "Santchou"],
  };

  // --- Publications (fake)
  const [publications, setPublications] = useState<any[]>([]);

  useEffect(() => {
    const fakePublications = [
      {
        id: 1,
        titre: "Mobilisation pour la rentrée politique",
        extrait:
          "La mobilisation a débuté dans plusieurs quartiers de Nkongsamba...",
        auteur: "Marie Nguema",
        secteur: "Moungo Nord",
        arrondissement: "Nkongsamba 1er",
        date: "2025-02-05",
        statut: "publié",
        image: "/galerie/photos/photo1.jpg",
      },
      {
        id: 2,
        titre: "Compte-rendu de la réunion de Melong",
        extrait:
          "Les militants du Moungo Sud ont tenu une réunion ce week-end...",
        auteur: "Pierre Mebongo",
        secteur: "Moungo Sud",
        arrondissement: "Melong",
        date: "2025-02-04",
        statut: "signalé",
        image: "/galerie/photos/photo2.jpg",
      },
      {
        id: 3,
        titre: "Formation interne des coordinateurs",
        extrait:
          "Une formation a été organisée pour les responsables locaux...",
        auteur: "Jean Dupont",
        secteur: "Moungo Sud",
        arrondissement: "Njombé-Penja",
        date: "2025-02-03",
        statut: "masqué",
        image: "/galerie/photos/photo3.jpg",
      },
    ];

    setPublications(fakePublications);
    setLoaded(true);
  }, []);

  if (!loaded) return <div className="p-6">Chargement...</div>;

  // --- FILTRAGE
  const filtered = publications.filter((p) => {
    const matchesSearch =
      search === "" ||
      p.titre.toLowerCase().includes(search.toLowerCase()) ||
      p.auteur.toLowerCase().includes(search.toLowerCase());

    const matchesStatut = statut === "" || p.statut === statut;

    const matchesSecteur = secteur === "" || p.secteur === secteur;

    const matchesArr =
      arrondissement === "" || p.arrondissement === arrondissement;

    return (
      matchesSearch &&
      matchesStatut &&
      matchesSecteur &&
      matchesArr
    );
  });

  // --- ACTIONS (placeholder)
  function masquer(id: number) {
    alert("Publication masquée ID : " + id);
  }
  function afficher(id: number) {
    alert("Publication réaffichée ID : " + id);
  }
  function signaler(id: number) {
    alert("Publication signalée ID : " + id);
  }
  function supprimer(id: number) {
    if (confirm("Supprimer cette publication ?")) {
      alert("Publication supprimée ID : " + id);
    }
  }

  return (
    <div className="space-y-8">

      {/* TITRE */}
      <h1 className="text-2xl font-bold text-gray-800">Gestion des publications</h1>

      {/* FILTRES */}
      <div className="bg-white p-5 rounded-lg shadow space-y-4">

        {/* Ligne 1 */}
        <div className="flex flex-wrap gap-4">

          <input
            type="text"
            placeholder="Recherche (titre ou auteur)"
            className="border p-2 rounded flex-1 min-w-[250px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={statut}
            onChange={(e) => setStatut(e.target.value)}
            className="border p-2 rounded min-w-[200px]"
          >
            <option value="">Statut</option>
            <option value="publié">Publié</option>
            <option value="masqué">Masqué</option>
            <option value="signalé">Signalé</option>
          </select>
        </div>

        {/* Ligne 2 */}
        <div className="flex flex-wrap gap-4">

          <select
            value={secteur}
            onChange={(e) => {
              setSecteur(e.target.value);
              setArrondissement("");
            }}
            className="border p-2 rounded min-w-[200px]"
          >
            <option value="">Secteur</option>
            {secteurs.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>

          <select
            value={arrondissement}
            onChange={(e) => setArrondissement(e.target.value)}
            className="border p-2 rounded min-w-[200px]"
            disabled={!secteur}
          >
            <option value="">Arrondissement</option>
            {secteur &&
              arrondissementsParSecteur[secteur].map((a: string) => (
                <option key={a}>{a}</option>
              ))}
          </select>

        </div>
      </div>

      {/* TABLEAU PUBLICATIONS */}
      <div className="bg-white rounded-lg shadow overflow-auto">

        <table className="w-full">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Titre</th>
              <th className="p-3 text-center">Auteur</th>
              <th className="p-3 text-center">Secteur</th>
              <th className="p-3 text-center">Arrondissement</th>
              <th className="p-3 text-center">Date</th>
              <th className="p-3 text-center">Statut</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-50">

                {/* IMAGE */}
                <td className="p-3">
                  <img
                    src={p.image}
                    alt={p.titre}
                    className="w-20 h-14 object-cover rounded"
                  />
                </td>

                {/* TITRE */}
                <td className="p-3">
                  <Link
                    href={`/admin/publications/${p.id}`}
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    {p.titre}
                  </Link>
                  <p className="text-sm text-gray-500">{p.extrait}</p>
                </td>

                {/* AUTEUR */}
                <td className="p-3 text-center">{p.auteur}</td>

                {/* SECTEUR */}
                <td className="p-3 text-center">{p.secteur}</td>

                {/* ARRONDISSEMENT */}
                <td className="p-3 text-center">{p.arrondissement}</td>

                {/* DATE */}
                <td className="p-3 text-center">{p.date}</td>

                {/* STATUT */}
                <td className="p-3 text-center">
                  {p.statut === "publié" && (
                    <span className="text-green-600 font-semibold">Publié</span>
                  )}
                  {p.statut === "masqué" && (
                    <span className="text-gray-600 font-semibold">Masqué</span>
                  )}
                  {p.statut === "signalé" && (
                    <span className="text-yellow-600 font-semibold">Signalé</span>
                  )}
                </td>

                {/* ACTIONS */}
                <td className="p-3 flex gap-2 justify-center">

                  {/* Voir */}
                  <Link
                    href={`/admin/publications/${p.id}`}
                    className="px-2 py-1 bg-blue-600 text-white rounded text-sm"
                  >
                    Voir
                  </Link>

                  {/* Masquer / Réafficher */}
                  {p.statut !== "masqué" ? (
                    <button
                      onClick={() => masquer(p.id)}
                      className="px-2 py-1 bg-gray-600 text-white rounded text-sm"
                    >
                      Masquer
                    </button>
                  ) : (
                    <button
                      onClick={() => afficher(p.id)}
                      className="px-2 py-1 bg-green-600 text-white rounded text-sm"
                    >
                      Afficher
                    </button>
                  )}

                  {/* Signaler */}
                  <button
                    onClick={() => signaler(p.id)}
                    className="px-2 py-1 bg-yellow-600 text-white rounded text-sm"
                  >
                    🚩
                  </button>

                  {/* Supprimer */}
                  <button
                    onClick={() => supprimer(p.id)}
                    className="px-2 py-1 bg-red-600 text-white rounded text-sm"
                  >
                    🗑
                  </button>

                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}
