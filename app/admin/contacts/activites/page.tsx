"use client";

import { useEffect, useState } from "react";

export default function AdminActivitesPage() {
  const [loaded, setLoaded] = useState(false);

  // Filtres
  const [typeAction, setTypeAction] = useState("");
  const [secteur, setSecteur] = useState("");
  const [arrondissement, setArrondissement] = useState("");
  const [adminSearch, setAdminSearch] = useState("");

  // Territoire FORDAC
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

  // Activités fake
  const [activites, setActivites] = useState<any[]>([]);

  useEffect(() => {
    const fakeActivities = [
      {
        id: 1,
        type: "validation",
        texte: "Validation de l’adhésion de Pierre M.",
        admin: "Admin Nkongsamba",
        secteur: "Moungo Nord",
        arrondissement: "Nkongsamba 1er",
        date: "2025-02-06 10:12",
      },
      {
        id: 2,
        type: "forum_fermeture",
        texte: "Fermeture du sujet 'Mobilisation régionale'",
        admin: "Admin Melong",
        secteur: "Moungo Sud",
        arrondissement: "Melong",
        date: "2025-02-06 09:50",
      },
      {
        id: 3,
        type: "publication",
        texte: "Publication signalée par un membre",
        admin: "Admin Penja",
        secteur: "Moungo Sud",
        arrondissement: "Njombé-Penja",
        date: "2025-02-05 18:22",
      },
      {
        id: 4,
        type: "blocage",
        texte: "Blocage du membre Rosine N.",
        admin: "Admin Loum",
        secteur: "Moungo Nord",
        arrondissement: "Loum",
        date: "2025-02-05 14:10",
      },
      {
        id: 5,
        type: "commentaire_suppression",
        texte: "Suppression d’un commentaire inapproprié",
        admin: "Admin Nkongsamba",
        secteur: "Moungo Nord",
        arrondissement: "Nkongsamba 3e",
        date: "2025-02-04 17:44",
      },
    ];

    setActivites(fakeActivities);
    setLoaded(true);
  }, []);

  if (!loaded) return <div className="p-6">Chargement...</div>;

  // FILTRAGE
  const filtered = activites.filter((a) => {
    const matchesType = typeAction === "" || a.type === typeAction;

    const matchesSecteur = secteur === "" || a.secteur === secteur;

    const matchesArr =
      arrondissement === "" || a.arrondissement === arrondissement;

    const matchesAdmin =
      adminSearch === "" ||
      a.admin.toLowerCase().includes(adminSearch.toLowerCase());

    return matchesType && matchesSecteur && matchesArr && matchesAdmin;
  });

  // Badges couleurs
  const badgeColor = (type: string) => {
    switch (type) {
      case "validation":
        return "bg-green-100 text-green-700";
      case "blocage":
        return "bg-red-100 text-red-700";
      case "publication":
        return "bg-blue-100 text-blue-700";
      case "forum_fermeture":
        return "bg-orange-100 text-orange-700";
      case "commentaire_suppression":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-8">

      {/* TITRE */}
      <h1 className="text-2xl font-bold text-gray-800">
        Activités administratives
      </h1>

      {/* FILTRES */}
      <div className="bg-white p-5 rounded-lg shadow space-y-4">

        {/* Ligne 1 */}
        <div className="flex flex-wrap gap-4">

          <select
            value={typeAction}
            onChange={(e) => setTypeAction(e.target.value)}
            className="border p-2 rounded min-w-[220px]"
          >
            <option value="">Type d’action</option>
            <option value="validation">Validation d’adhésion</option>
            <option value="blocage">Blocage de membre</option>
            <option value="publication">Publication</option>
            <option value="forum_fermeture">Fermeture de sujet forum</option>
            <option value="commentaire_suppression">Suppression de commentaire</option>
          </select>

          <select
            value={secteur}
            onChange={(e) => {
              setSecteur(e.target.value);
              setArrondissement("");
            }}
            className="border p-2 rounded min-w-[180px]"
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

        {/* Ligne 2 */}
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Recherche (nom Admin)"
            className="border p-2 rounded min-w-[250px] flex-1"
            value={adminSearch}
            onChange={(e) => setAdminSearch(e.target.value)}
          />
        </div>
      </div>

      {/* LISTE ACTIVITÉS */}
      <div className="bg-white rounded-lg shadow divide-y">

        {filtered.map((a) => (
          <div key={a.id} className="p-4 hover:bg-gray-50 transition">

            <div className="flex justify-between items-start">

              <div>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${badgeColor(
                    a.type
                  )}`}
                >
                  {a.type}
                </span>

                <p className="mt-2 text-gray-800 font-medium">{a.texte}</p>

                <p className="text-sm text-gray-500 mt-1">
                  👤 {a.admin} — {a.secteur}, {a.arrondissement}
                </p>
              </div>

              <p className="text-sm text-gray-500">📅 {a.date}</p>
            </div>

          </div>
        ))}

        {filtered.length === 0 && (
          <p className="p-4 text-center text-gray-500">
            Aucune activité ne correspond aux filtres.
          </p>
        )}

      </div>
    </div>
  );
}
