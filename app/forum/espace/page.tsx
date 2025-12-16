"use client";

import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import Link from "next/link";

export default function ForumEspacePage() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics();
  }, []);

  const fetchTopics = async () => {
    try {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("token")
          : null;

      if (!token) return;

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/forum/topics`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
      setTopics(data || []);
    } catch (error) {
      console.error("Erreur lors du chargement des topics:", error);
    }
  };

  return (
    <ProtectedRoute>
      <div className="bg-white w-full">

        {/* HERO TOP */}
        <section className="bg-[#166534] py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Espace Forum
          </h1>
          <p className="text-white/80 text-lg mt-3">
            Choisissez un thème et entrez dans les échanges internes du FORDAC.
          </p>
        </section>

        {/* CONTENU */}
        <section className="max-w-6xl mx-auto px-6 py-14">
          <h2 className="text-2xl font-bold text-[#166534] mb-6">
            Thématiques du Forum
          </h2>

          {topics.length === 0 ? (
            <p className="text-gray-600">Aucune thématique disponible pour le moment.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {topics.map((topic: any) => (
                <Link
                  key={topic.id}
                  href={`/forum/sujets/${topic.id}`}
                  className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition hover:bg-green-50"
                >
                  <h3 className="text-xl font-semibold text-[#166534]">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    {topic.description ?? "Section de discussion interne"}
                  </p>
                  <div className="mt-4 text-sm text-gray-500">
                    {topic.total_posts ?? 0} publications
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* RÈGLES DU FORUM */}
        <section className="bg-[#E8F3EC] py-14">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-2xl font-bold text-[#166534] mb-4">
              Règles du Forum
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700 leading-relaxed">
              <li>Respect strict entre militants — aucun propos déplacé.</li>
              <li>Contributions constructives en lien avec les objectifs du Parti.</li>
              <li>Interdiction des insultes, dénigrements ou incitations à la division.</li>
              <li>Pas de diffusion d’informations internes sensibles hors du cadre autorisé.</li>
              <li>Les administrateurs peuvent approuver, masquer ou supprimer les messages.</li>
              <li>Les membres peuvent éditer un message pendant 30 minutes après publication.</li>
            </ul>
          </div>
        </section>

      </div>
    </ProtectedRoute>
  );
}
