"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Topic = {
  id: number;
  title: string;
  author?: string;
  created_at?: string;
  posts_count?: number;
  status?: "open" | "closed";
};

export default function AdminForumSujetsPage() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);

  const API = process.env.NEXT_PUBLIC_API_URL;

  const loadTopics = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/admin/forum/topics`, {
        cache: "no-store",
      });
      const data = await res.json();
      setTopics(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error("Erreur chargement sujets admin:", e);
      setTopics([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadTopics();
  }, []);

  return (
    <main className="space-y-6">

      {/* Retour */}
      <Link
        href="/admin/forum"
        className="text-[#145331] hover:underline text-sm font-medium"
      >
        ← Retour au module forum
      </Link>

      {/* Titre */}
      <h1 className="text-3xl font-extrabold text-[#145331]">
        Sujets du forum
      </h1>

      {/* Etat de chargement */}
      {loading ? (
        <p className="text-gray-500">Chargement des sujets…</p>
      ) : topics.length === 0 ? (
        <div className="bg-white border rounded-xl p-8 text-center text-gray-600">
          Aucun sujet enregistré.
        </div>
      ) : (
        <div className="bg-white border rounded-xl shadow-sm overflow-hidden">

          {/* En-tête tableau */}
          <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b text-sm font-semibold text-gray-600">
            <div className="col-span-5">Sujet</div>
            <div className="col-span-2">Auteur</div>
            <div className="col-span-2">Messages</div>
            <div className="col-span-2">Statut</div>
            <div className="col-span-1 text-right">Action</div>
          </div>

          {/* Lignes */}
          <div className="divide-y">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-gray-50 transition"
              >
                <div className="col-span-5">
                  <p className="font-semibold text-gray-800">
                    {topic.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    {topic.created_at
                      ? new Date(topic.created_at).toLocaleString("fr-FR")
                      : "—"}
                  </p>
                </div>

                <div className="col-span-2 text-gray-700">
                  {topic.author || "—"}
                </div>

                <div className="col-span-2 text-gray-700">
                  {topic.posts_count ?? 0}
                </div>

                <div className="col-span-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      topic.status === "closed"
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {topic.status === "closed" ? "Fermé" : "Ouvert"}
                  </span>
                </div>

                <div className="col-span-1 text-right">
                  <Link
                    href={`/admin/forum/sujets/${topic.id}`}
                    className="text-[#145331] hover:underline font-medium text-sm"
                  >
                    Voir
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
