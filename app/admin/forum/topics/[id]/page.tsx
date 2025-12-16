"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import ProtectedRouteAdmin from "@/components/ProtectedRouteAdmin";

interface Topic {
  id: number;
  title: string;
  description: string;
  created_at: string;
}

export default function AdminForumTopicPage() {
  const params = useParams();
  const router = useRouter();
  const topicId = params?.id as string;

  const [topic, setTopic] = useState<Topic | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!topicId) return;

    const fetchTopic = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        if (!token) {
          router.push("/admin-login");
          return;
        }

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/forum/topics/${topicId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error("Impossible de charger le sujet");
        }

        const data = await res.json();
        setTopic(data.topic || data);
      } catch (err: any) {
        setError(err.message || "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    };

    fetchTopic();
  }, [topicId, router]);

  if (loading) {
    return (
      <ProtectedRouteAdmin>
        <main className="p-10 bg-[#F7F7F7] min-h-screen">
          <p className="text-gray-600 italic">Chargement…</p>
        </main>
      </ProtectedRouteAdmin>
    );
  }

  if (error) {
    return (
      <ProtectedRouteAdmin>
        <main className="p-10 bg-[#F7F7F7] min-h-screen">
          <p className="text-red-600 font-semibold">{error}</p>
        </main>
      </ProtectedRouteAdmin>
    );
  }

  if (!topic) {
    return (
      <ProtectedRouteAdmin>
        <main className="p-10 bg-[#F7F7F7] min-h-screen">
          <p className="text-gray-600">Sujet introuvable.</p>
        </main>
      </ProtectedRouteAdmin>
    );
  }

  return (
    <ProtectedRouteAdmin>
      <main className="p-10 bg-[#F7F7F7] min-h-screen">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-card p-6">
          <h1 className="text-3xl font-bold text-[#166534] mb-4">
            {topic.title}
          </h1>

          <p className="text-gray-700 mb-6 whitespace-pre-line">
            {topic.description}
          </p>

          <p className="text-sm text-gray-500">
            Créé le{" "}
            {new Date(topic.created_at).toLocaleDateString("fr-FR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>

          <div className="mt-8">
            <button
              onClick={() => router.back()}
              className="btn btn-secondary"
            >
              ← Retour
            </button>
          </div>
        </div>
      </main>
    </ProtectedRouteAdmin>
  );
}
