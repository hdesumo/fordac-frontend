"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProtectedRouteAdmin from "@/components/ProtectedRouteAdmin";

interface Topic {
  id: number;
  title: string;
  created_at: string;
}

export default function AdminForumTopicsPage() {
  const router = useRouter();

  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        if (!token) {
          router.push("/admin-login");
          return;
        }

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/admin/forum/topics`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error("Impossible de charger les sujets");
        }

        const data = await res.json();
        setTopics(data.topics || data);
      } catch (err: any) {
        setError(err.message || "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, [router]);

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

  return (
    <ProtectedRouteAdmin>
      <main className="p-10 bg-[#F7F7F7] min-h-screen">
        <h1 className="text-4xl font-extrabold text-[#166534] mb-8">
          Gestion des Sujets du Forum
        </h1>

        <div className="bg-white rounded-xl shadow-card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-sm uppercase">
                <th className="p-4">Titre</th>
                <th className="p-4">Date de création</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {topics.map((topic) => (
                <tr key={topic.id} className="border-t">
                  <td className="p-4 font-medium text-gray-800">
                    {topic.title}
                  </td>
                  <td className="p-4 text-gray-600">
                    {new Date(topic.created_at).toLocaleDateString("fr-FR")}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() =>
                        router.push(`/admin/forum/topics/${topic.id}`)
                      }
                      className="btn btn-secondary"
                    >
                      Voir
                    </button>
                  </td>
                </tr>
              ))}
              {topics.length === 0 && (
                <tr>
                  <td
                    colSpan={3}
                    className="p-6 text-center text-gray-500 italic"
                  >
                    Aucun sujet trouvé.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </ProtectedRouteAdmin>
  );
}
