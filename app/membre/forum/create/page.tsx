"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProtectedRouteMembre from "@/components/ProtectedRouteMembre";
import MembreTopbar from "@/components/MembreTopbar";
import useMembreAuth from "@/hooks/useMembreAuth";
import { createSujet } from "@/lib/membreForumApi";

export default function ForumCreatePage() {
  const router = useRouter();
  const { token } = useMembreAuth();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg("");

    if (!title.trim() || !description.trim()) {
      setMsg("Veuillez remplir tous les champs.");
      return;
    }

    setLoading(true);

    try {
      const data = await createSujet(
        { title, description },
        token!
      );

      setMsg("Sujet créé avec succès ✔");

      setTimeout(() => {
        router.push(`/membre/forum/${data.id}`);
      }, 900);
    } catch (err: any) {
      setMsg(err.message || "Erreur.");
    }

    setLoading(false);
  }

  return (
    <ProtectedRouteMembre>
      <div className="min-h-screen bg-[#F7F7F7]">
        <MembreTopbar />

        <div className="space-y-6 max-w-2xl mx-auto p-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Créer un sujet
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow space-y-4"
          >
            <div>
              <label className="block font-semibold mb-1">
                Titre *
              </label>
              <input
                type="text"
                value={title}
                className="w-full border p-2 rounded"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Description *
              </label>
              <textarea
                value={description}
                className="w-full border p-2 rounded h-40"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {msg && (
              <p className="text-blue-600 font-medium">
                {msg}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-[#111827] text-white px-4 py-2 rounded hover:bg-black"
            >
              {loading ? "Publication..." : "Publier"}
            </button>
          </form>
        </div>
      </div>
    </ProtectedRouteMembre>
  );
}
