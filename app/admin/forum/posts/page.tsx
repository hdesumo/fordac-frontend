"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProtectedRouteAdmin from "@/components/ProtectedRouteAdmin";

export default function AdminPostsPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const API = process.env.NEXT_PUBLIC_API_URL;

  const load = async () => {
    try {
      const res = await fetch(`${API}/admin/forum/posts`, {
        cache: "no-store",
      });
      const data = await res.json();
      setPosts(data.posts || []);
    } catch (e) {
      console.error("Erreur chargement posts admin:", e);
      setPosts([]);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <ProtectedRouteAdmin>
      <main className="min-h-screen p-10 bg-[#F7F7F7]">

        <h1 className="text-4xl font-extrabold text-[#166534] mb-8">
          Messages du Forum
        </h1>

        <p className="text-gray-600 mb-6">
          Total des messages : {posts.length}
        </p>

        <div className="bg-white rounded-xl shadow border p-6">
          {posts.length === 0 ? (
            <p className="text-gray-600 italic">Aucun message pour le moment.</p>
          ) : (
            <ul className="space-y-6">
              {posts.map((post) => (
                <li
                  key={post.id}
                  className="border rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition"
                >
                  <Link
                    href={`/admin/forum/posts/${post.id}`}
                    className="text-xl font-semibold text-[#166534] hover:underline"
                  >
                    Message #{post.id}
                  </Link>

                  <p className="text-gray-700 mt-2">
                    {post.content?.substring(0, 120)}…
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    Posté par : {post.author || "Membre inconnu"}<br />
                    Le :{" "}
                    {post.created_at
                      ? new Date(post.created_at).toLocaleString("fr-FR")
                      : "—"}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </ProtectedRouteAdmin>
  );
}
