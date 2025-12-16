"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";
import Pagination from "@/components/Pagination";

export default function ForumPostPage() {
  const { id } = useParams();

  const [post, setPost] = useState<any>(null);
  const [replies, setReplies] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  async function loadData() {
    setLoading(true);

    try {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("token")
          : null;

      if (!token) return;

      // Charger le post
      const resPost = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/forum/posts/${id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      const postData = await resPost.json();
      setPost(postData);

      // Charger les réponses
      const resReplies = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/forum/posts/${id}/replies?page=${page}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      const repliesData = await resReplies.json();

      setReplies(repliesData.items || []);
      setTotalPages(repliesData.totalPages || 1);
    } catch (error) {
      console.error("Erreur chargement post forum:", error);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, [id, page]);

  if (loading) {
    return (
      <ProtectedRoute>
        <main className="p-10">
          <p>Chargement du sujet…</p>
        </main>
      </ProtectedRoute>
    );
  }

  if (!post) {
    return (
      <ProtectedRoute>
        <main className="p-10">
          <p className="text-red-600 font-semibold">Sujet introuvable.</p>
        </main>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <main className="p-10 max-w-4xl mx-auto space-y-10">
        {/* Titre du sujet */}
        <header>
          <h1 className="text-3xl font-bold text-[#166534]">{post.title}</h1>
          <p className="text-gray-600 text-sm mt-1">
            Publié par {post.author_name} — {post.created_at}
          </p>
        </header>

        {/* Contenu du post */}
        <article className="bg-white shadow rounded-lg p-6 leading-relaxed whitespace-pre-wrap">
          {post.content}
        </article>

        {/* Réponses */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-[#166534]">
            Réponses ({replies.length})
          </h2>

          {replies.length === 0 ? (
            <p>Aucune réponse pour l’instant.</p>
          ) : (
            replies.map((reply) => (
              <div key={reply.id} className="bg-white shadow rounded-lg p-4">
                <p className="font-semibold">{reply.author_name}</p>
                <p className="text-gray-600 text-sm">{reply.created_at}</p>
                <p className="mt-2 whitespace-pre-wrap leading-relaxed">
                  {reply.content}
                </p>
              </div>
            ))
          )}
        </section>

        {/* Pagination */}
        <div className="pt-6">
          <Pagination
            page={page}
            total={totalPages}
            onNext={() => page < totalPages && setPage(page + 1)}
            onPrev={() => page > 1 && setPage(page - 1)}
          />
        </div>
      </main>
    </ProtectedRoute>
  );
}
