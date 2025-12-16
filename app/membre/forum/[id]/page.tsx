"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProtectedRouteMembre from "@/components/ProtectedRouteMembre";
import useMembreAuth from "@/hooks/useMembreAuth";
import MembreTopbar from "@/components/MembreTopbar";
import { getSujetById, createCommentaire } from "@/lib/membreForumApi";

export default function ForumSujetPage() {
  const params = useParams();
  const id = params?.id as string;

  const { token, loaded } = useMembreAuth();

  const [loading, setLoading] = useState(true);
  const [sujet, setSujet] = useState<any>(null);
  const [commentaires, setCommentaires] = useState<any[]>([]);

  const [commentText, setCommentText] = useState("");
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (!loaded || !token) return;

    async function fetchData() {
      try {
        const data = await getSujetById(id, token);
        setSujet(data.sujet);
        setCommentaires(data.commentaires);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    }

    fetchData();
  }, [loaded, token, id]);

  async function handleSend(e: any) {
    e.preventDefault();
    setMsg("");

    if (!commentText.trim()) {
      setMsg("Veuillez écrire un commentaire.");
      return;
    }

    setSending(true);

    try {
      const newComment = await createCommentaire(id, commentText, token!);
      setCommentaires([newComment, ...commentaires]);
      setCommentText("");
      setMsg("Commentaire ajouté ✔");
    } catch (err: any) {
      setMsg(err.message || "Erreur lors de l'envoi.");
    }

    setSending(false);
  }

  if (!loaded || loading) {
    return (
      <ProtectedRouteMembre>
        <div className="flex items-center justify-center min-h-screen text-gray-700">
          Chargement...
        </div>
      </ProtectedRouteMembre>
    );
  }

  if (!sujet) {
    return (
      <ProtectedRouteMembre>
        <div className="p-6 text-red-600">Sujet introuvable.</div>
      </ProtectedRouteMembre>
    );
  }

  return (
    <ProtectedRouteMembre>
      <div className="min-h-screen bg-[#F7F7F7]">
        <MembreTopbar />

        <div className="p-6 space-y-8 max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800">{sujet.title}</h1>

          {/* SUJET */}
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 whitespace-pre-line">
              {sujet.description}
            </p>

            <div className="mt-4 text-sm text-gray-500">
              📅{" "}
              {new Date(sujet.created_at).toLocaleDateString()} — par{" "}
              {sujet.author_name}
            </div>
          </div>

          {/* FORMULAIRE COMMENTAIRE */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">
              Ajouter un commentaire
            </h2>

            <form onSubmit={handleSend} className="space-y-4">
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="w-full border p-3 rounded h-32"
                placeholder="Votre commentaire..."
              />

              {msg && <p className="text-blue-600 text-sm">{msg}</p>}

              <button
                type="submit"
                disabled={sending}
                className="bg-[#111827] text-white px-4 py-2 rounded hover:bg-black"
              >
                {sending ? "Publication..." : "Publier le commentaire"}
              </button>
            </form>
          </div>

          {/* COMMENTAIRES */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Commentaires</h2>

            {commentaires.length === 0 && (
              <p className="text-gray-600">
                Aucun commentaire pour l'instant.
              </p>
            )}

            <div className="space-y-4">
              {commentaires.map((c: any) => (
                <div key={c.id} className="border-b pb-3">
                  <p className="font-semibold">{c.author_name}</p>
                  <p className="text-gray-700">{c.content}</p>
                  <p className="text-sm text-gray-500">
                    📅{" "}
                    {new Date(c.created_at).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRouteMembre>
  );
}
