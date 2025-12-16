"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import Pagination from "@/components/Pagination";

export default function AdminTopicModerationPage() {
  const { id } = useParams();

  const [topic, setTopic] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const perPage = 10;

  const API = process.env.NEXT_PUBLIC_API_URL;

  const loadData = async () => {
    try {
      const res = await fetch(`${API}/topics/${id}`, {
        cache: "no-store",
      });

      const data = await res.json();

      setTopic(data.topic || null);
      setPosts(Array.isArray(data.posts) ? data.posts : []);
    } catch (e) {
      console.error("Erreur chargement moderation sujet admin:", e);
      setTopic(null);
      setPosts([]);
    }
  };

  useEffect(() => {
    if (id) loadData();
  }, [id]);

  const paginated = posts.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(posts.length / perPage);

  const deletePost = async (postId: number) => {
    if (!confirm("Supprimer ce message ?")) return;

    try {
      await fetch(`${API}/admin/forum/posts/${postId}`, {
        method: "DELETE",
      });

      loadData();
    } catch (e) {
      console.error("Erreur suppression message admin:", e);
    }
  };

  return (
    <main className="space-y-6">

      <Link
        href="/admin/forum"
        className="text-[#145331] hover:underline text-sm font-medium"
      >
        ← Retour au module forum
      </Link>

      {topic ? (
        <h1 className="text-3xl font-extrabold text-[#145331]">
          Sujet : {topic.title}
        </h1>
      ) : (
        <h1 className="text-xl text-gray-500">Sujet introuvable</h1>
      )}

      <p className="text-gray-600">
        Messages : {posts.length}
      </p>

      <div className="bg-white p-8 rounded-xl border shadow-sm">
        {paginated.length === 0 ? (
          <p className="text-gray-600 text-center">Aucun message.</p>
        ) : (
          <div className="space-y-8">
            {paginated.map((post) => (
              <div
                key={post.id}
                className="border rounded-xl p-6 bg-white shadow-sm"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-[#145331]">
                    {post.author || "Membre"}
                  </h3>

                  <span className="text-sm text-gray-500">
                    {post.created_at
                      ? new Date(post.created_at).toLocaleString("fr-FR")
                      : "—"}
                  </span>
                </div>

                <p className="mt-3 text-gray-800">
                  {post.content}
                </p>

                {post.edited_by_user && (
                  <p className="text-sm text-gray-500 mt-2 italic">
                    (Message modifié par l'utilisateur)
                  </p>
                )}

                <div className="mt-4 flex gap-4">
                  <button
                    onClick={() => deletePost(post.id)}
                    className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 text-sm"
                  >
                    Supprimer le message
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10">
          <Pagination
            page={page}
            total={totalPages}
            onNext={() => page < totalPages && setPage(page + 1)}
            onPrev={() => page > 1 && setPage(page - 1)}
          />
        </div>
      </div>
    </main>
  );
}
