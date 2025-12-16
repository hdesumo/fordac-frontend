"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ProtectedRouteAdmin from "@/components/ProtectedRouteAdmin";

export default function AdminPostDetailPage() {
  const { id } = useParams();

  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const API = process.env.NEXT_PUBLIC_API_URL;

  const load = async () => {
    try {
      const res = await fetch(`${API}/admin/forum/posts/${id}`);
      const data = await res.json();

      setPost(data.post || null);
      setLoading(false);
    } catch (e) {
      console.error("Erreur chargement post admin:", e);
      setPost(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, [id]);

  if (loading)
    return (
      <ProtectedRouteAdmin>
        <main className="p-10 bg-[#F7F7F7] min-h-screen">
          <p className="text-gray-600 italic">Chargement…</p>
        </main>
      </ProtectedRouteAdmin>
    );

  return (
    <ProtectedRouteAdmin>
      <main className="p-10 bg-[#F7F7F7] min-h-screen">

        <Link
          href="/admin/forum/posts"
          className="text-[#166534] hover:underline text-lg"
        >
          ← Retour aux messages
        </Link>

        {post ? (
          <div className="bg-white shadow rounded-xl p-8 mt-6 border border-gray-200">
            <h1 className="text-3xl font-bold text-[#166534] mb-4">
              Message #{post.id}
            </h1>

            <p className="text-gray-700 text-lg mb-6">{post.content}</p>

            <div className="text-sm text-gray-500">
              Posté par : {post.author || "Membre inconnu"}  
              <br />
              Le :{" "}
              {post.created_at
                ? new Date(post.created_at).toLocaleString("fr-FR")
                : "—"}
            </div>
          </div>
        ) : (
          <p className="text-gray-600 italic mt-10">Message introuvable.</p>
        )}

      </main>
    </ProtectedRouteAdmin>
  );
}
