"use client";

import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ForumTopicsPage() {
  const [topics, setTopics] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  async function loadTopics() {
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/forum/topics?page=${page}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();

      setTopics(data.items || []);
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error("Erreur chargement des sujets :", error);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadTopics();
  }, [page]);

  return (
    <ProtectedRoute>
      <main className="p-10 max-w-4xl mx-auto space-y-10">
        <header>
          <h1 className="text-3xl font-bold text-[#166534]">Sujets du Forum</h1>
          <p className="text-gray-600 mt-2">Explorez les discussions en cours.</p>
        </header>

        <section className="space-y-4">
          {loading ? (
            <p>Chargement des sujets…</p>
          ) : topics.length === 0 ? (
            <p>Aucun sujet pour l’instant.</p>
          ) : (
            topics.map((topic) => (
              <a
                key={topic.id}
                href={`/forum/sujets/${topic.id}`}
                className="block bg-white shadow rounded-lg p-4 hover:bg-gray-50 transition"
              >
                <h2 className="text-xl font-semibold">{topic.title}</h2>
                <p className="text-gray-600 text-sm mt-1">
                  Par {topic.author_name} — {topic.created_at}
                </p>
              </a>
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
