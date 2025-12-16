"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function AdminPublicationDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const [loaded, setLoaded] = useState(false);
  const [publication, setPublication] = useState<any>(null);
  const [commentaires, setCommentaires] = useState<any[]>([]);

  useEffect(() => {
    // --- Publication fake
    const fakeData = {
      id: "1",
      titre: "Mobilisation pour la rentrée politique",
      image: "/galerie/photos/photo1.jpg",
      contenu:
        "La mobilisation a débuté dans plusieurs quartiers de Nkongsamba. Les coordinateurs locaux ont lancé les préparatifs pour la rentrée politique, avec une forte participation des militants...",
      auteur: "Marie Nguema",
      secteur: "Moungo Nord",
      arrondissement: "Nkongsamba 1er",
      date: "2025-02-05",
      statut: "publié", // publié | masqué | signalé
    };

    // --- Commentaires fake
    const fakeComments = [
      {
        id: 1,
        auteur: "Jean Dupont",
        date: "2025-02-05 08:12",
        texte: "Belle initiative, la mobilisation commence fort !",
        statut: "normal",
      },
      {
        id: 2,
        auteur: "Rosine Ngassa",
        date: "2025-02-05 09:01",
        texte: "On se prépare déjà du côté de Nkongsamba 2e.",
        statut: "normal",
      },
      {
        id: 3,
        auteur: "Pierre Mebongo",
        date: "2025-02-05 09:30",
        texte: "Comment participer pour la logistique ?",
        statut: "signale",
      },
    ];

    setPublication(fakeData);
    setCommentaires(fakeComments);
    setLoaded(true);
  }, [id]);

  if (!loaded) return <div className="p-6">Chargement...</div>;
  if (!publication)
    return <div className="p-6 text-red-600">Publication introuvable.</div>;

  // --- Actions ADMIN
  function masquer() {
    alert("Publication masquée");
  }

  function afficher() {
    alert("Publication réaffichée");
  }

  function signaler() {
    alert("Publication signalée");
  }

  function supprimer() {
    if (confirm("Supprimer définitivement cette publication ?")) {
      alert("Publication supprimée");
      router.push("/admin/publications");
    }
  }

  // --- Actions commentaires
  function masquerCommentaire(id: number) {
    alert("Commentaire masqué ID " + id);
  }

  function afficherCommentaire(id: number) {
    alert("Commentaire réaffiché ID " + id);
  }

  function signalerCommentaire(id: number) {
    alert("Commentaire signalé ID " + id);
  }

  function supprimerCommentaire(id: number) {
    if (confirm("Supprimer ce commentaire ?")) {
      alert("Commentaire supprimé ID " + id);
    }
  }

  return (
    <div className="space-y-10">

      {/* TITRE */}
      <h1 className="text-2xl font-bold text-gray-800">
        Publication : {publication.titre}
      </h1>

      {/* CARTE PRINCIPALE */}
      <div className="bg-white p-6 rounded-lg shadow space-y-6">

        {/* IMAGE */}
        <img
          src={publication.image}
          alt={publication.titre}
          className="w-full max-h-[400px] object-cover rounded"
        />

        {/* META */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">

          <div>
            <p><strong>Auteur :</strong> {publication.auteur}</p>
            <p><strong>Date :</strong> {publication.date}</p>
            <p><strong>Secteur :</strong> {publication.secteur}</p>
            <p><strong>Arrondissement :</strong> {publication.arrondissement}</p>
          </div>

          <div className="mt-4 md:mt-0">
            <p>
              <strong>Statut :</strong>{" "}
              <span
                className={
                  publication.statut === "publié"
                    ? "text-green-600 font-semibold"
                    : publication.statut === "masqué"
                    ? "text-gray-600 font-semibold"
                    : "text-yellow-600 font-semibold"
                }
              >
                {publication.statut}
              </span>
            </p>
          </div>

        </div>

        {/* CONTENU */}
        <div className="bg-gray-50 p-4 rounded border text-gray-800 leading-relaxed">
          {publication.contenu}
        </div>

        {/* ACTIONS ADMIN */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-4">

          {publication.statut !== "masqué" ? (
            <button
              onClick={masquer}
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Masquer
            </button>
          ) : (
            <button
              onClick={afficher}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Réafficher
            </button>
          )}

          <button
            onClick={signaler}
            className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
          >
            🚩 Signaler
          </button>

          <button
            onClick={supprimer}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            🗑 Supprimer
          </button>

        </div>

      </div>

      {/* COMMENTAIRES */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Commentaires</h2>

        <div className="space-y-4">

          {commentaires.map((c) => (
            <div
              key={c.id}
              className={`p-4 border rounded ${
                c.statut === "masque"
                  ? "bg-gray-200 text-gray-500"
                  : c.statut === "signale"
                  ? "bg-yellow-100 border-yellow-500"
                  : "bg-gray-50"
              }`}
            >
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold">{c.auteur}</p>
                  <p className="text-sm text-gray-600">{c.date}</p>
                </div>
                <p className="text-sm italic text-gray-700">
                  {c.statut === "masque" && "Masqué"}
                  {c.statut === "signale" && "⚠ Signalé"}
                </p>
              </div>

              <p className="mt-3">{c.texte}</p>

              {/* ACTIONS COMMENTAIRE */}
              <div className="flex gap-3 mt-4">

                {c.statut !== "masque" && (
                  <button
                    onClick={() => masquerCommentaire(c.id)}
                    className="text-yellow-700 hover:underline"
                  >
                    Masquer
                  </button>
                )}

                {c.statut === "masque" && (
                  <button
                    onClick={() => afficherCommentaire(c.id)}
                    className="text-green-700 hover:underline"
                  >
                    Réafficher
                  </button>
                )}

                <button
                  onClick={() => signalerCommentaire(c.id)}
                  className="text-orange-700 hover:underline"
                >
                  Signaler
                </button>

                <button
                  onClick={() => supprimerCommentaire(c.id)}
                  className="text-red-700 hover:underline"
                >
                  Supprimer
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}
