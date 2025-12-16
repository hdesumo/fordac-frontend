"use client";

import MembreTopbar from "@/components/MembreTopbar";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreatePublicationPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [message, setMessage] = useState("");

  function handleImageChange(e: any) {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    setLoadingSubmit(true);
    setMessage("");

    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      if (image) formData.append("image", image);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/publications/create`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Erreur lors de la création.");
        setLoadingSubmit(false);
        return;
      }

      setMessage("Publication créée avec succès ✔");

      setTimeout(() => {
        router.push("/membre/publications");
      }, 1200);

    } catch (error) {
      setMessage("Erreur réseau. Réessayez.");
    }

    setLoadingSubmit(false);
  }

  return (
    <>
      <MembreTopbar />

      <div className="space-y-6 p-6">

        <h1 className="text-2xl font-bold text-gray-800">
          Créer une publication
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow space-y-4 max-w-2xl"
        >
          {/* TITRE */}
          <div>
            <label className="block font-semibold mb-1">Titre *</label>
            <input
              type="text"
              value={title}
              className="w-full border p-2 rounded"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* CONTENU */}
          <div>
            <label className="block font-semibold mb-1">Contenu *</label>
            <textarea
              value={content}
              className="w-full border p-2 rounded h-40"
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          {/* IMAGE */}
          <div>
            <label className="block font-semibold mb-2">
              Illustration (optionnelle)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />

            {preview && (
              <div className="mt-4">
                <img
                  src={preview}
                  alt="Prévisualisation"
                  className="w-48 rounded shadow"
                />
              </div>
            )}
          </div>

          {message && (
            <div className="text-center text-sm text-blue-600">
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loadingSubmit}
            className="bg-[#111827] text-white px-4 py-2 rounded hover:bg-black w-full"
          >
            {loadingSubmit ? "Publication..." : "Publier"}
          </button>
        </form>
      </div>
    </>
  );
}
