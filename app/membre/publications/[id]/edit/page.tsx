"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import MembreTopbar from "@/components/MembreTopbar";

export default function EditPublicationPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const [loaded, setLoaded] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [message, setMessage] = useState("");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // ================================
  // Charger la publication existante
  // ================================
  async function loadPublication() {
    const token = localStorage.getItem("memberToken");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/members/publications/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Erreur chargement publication");
      }

      const data = await res.json();
      setTitle(data.title || "");
      setContent(data.content || "");
    } catch (err) {
      console.error(err);
      setMessage("Impossible de charger la publication.");
    }

    setLoaded(true);
  }

  useEffect(() => {
    if (id) {
      loadPublication();
    }
  }, [id]);

  // ================================
  // Soumission du formulaire
  // ================================
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoadingSubmit(true);
    setMessage("");

    try {
      const token = localStorage.getItem("memberToken");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/members/publications/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ title, content }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Erreur lors de la mise à jour.");
        setLoadingSubmit(false);
        return;
      }

      setMessage("Publication mise à jour ✔");

      setTimeout(() => {
        router.push("/membre/publications");
      }, 900);
    } catch (error) {
      setMessage("Erreur réseau.");
    }

    setLoadingSubmit(false);
  }

  if (!loaded) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        Chargement...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f2f1e] text-white">
      <MembreTopbar />

      <div className="p-6 max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">
          Modifier la publication
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-[#145331] p-6 rounded-xl border border-green-800 space-y-6"
        >
          <div>
            <label className="block mb-2 font-semibold">
              Titre
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 rounded text-black"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Contenu
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3 rounded text-black h-48"
              required
            />
          </div>

          {message && (
            <div className="text-sm font-semibold text-yellow-200">
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loadingSubmit}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded w-full font-bold"
          >
            {loadingSubmit ? "Enregistrement..." : "Enregistrer"}
          </button>
        </form>
      </div>
    </div>
  );
}
