"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Pagination from "@/components/Pagination";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ForumTopicPage() {
  const { id } = useParams();
  const router = useRouter();

  const [topic, setTopic] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  async function loadData() {
    setLoading(true);

    try {
      // Charger le sujet
      const topicRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/forum/topics/${id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      const topicData = await topicRes.json();
      setTopic(topicData);

      // Charger les posts du sujet
      const postsRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/forum/topics/${id}/posts?page=${page}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      const postsData = await postsRes.json();
      setPosts(postsData.items || []);
      setTotalPages(postsData.totalPages || 1);
    } catch (error) {
      console.error("Erreur chargement sujet:", error);
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
          <p>Chargement…</p>
        </main>
      </ProtectedRoute>
    );
  }

  if (!topic) {
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

        {/* Header du sujet */}
        <header>
          <h1 className="text-3xl font-bold text-[#166534]">{topic.title}</h1>
          <p className="text-gray-600 text-sm mt-1">
            Publié par {topic.author_name} — {topic.created_at}
          </p>

          {/* Bouton : créer un nouveau post */}
          <button
            onClick={() => router.push(`/forum/sujets/${id}/nouveau`)}
            className="mt-4 bg-[#166534] text-white px-6 py-3 rounded-md"
          >
            Nouvelle publication
          </button>
        </header>

        {/* Posts */}
        <section className="space-y-4">
          {posts.length === 0 ? (
            <p>Aucune publication pour le moment.</p>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow rounded-lg p-4 cursor-pointer hover:bg-gray-50"
                onClick={() => router.push(`/forum/post/${post.id}`)}
              >
                <h3 className="font-bold text-lg">{post.title}</h3>
                <p className="text-gray-600 text-sm">
                  Par {post.author_name} — {post.created_at}
                </p>
                <p className="mt-2 text-gray-700">
                  {post.content?.substring(0, 120)}…
                </p>
              </div>
            ))
          )}
        </section>

        {/* Pagination */}
        <Pagination
          page={page}
          total={totalPages}
          onNext={() => page < totalPages && setPage(page + 1)}
          onPrev={() => page > 1 && setPage(page - 1)}
        />
      </main>
    </ProtectedRoute>
  );
}
