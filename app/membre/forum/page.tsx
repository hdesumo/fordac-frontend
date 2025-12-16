"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProtectedRouteMembre from "@/components/ProtectedRouteMembre";
import MembreTopbar from "@/components/MembreTopbar";
import useMembreAuth from "@/hooks/useMembreAuth";
import { getSujets } from "@/lib/membreForumApi";

export default function MembreForumPage() {
  const { token, loaded } = useMembreAuth();

  const [sujets, setSujets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loaded || !token) return;

    async function fetchData() {
      try {
        const data = await getSujets(1, token);
        setSujets(data);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    }

    fetchData();
  }, [loaded, token]);

  if (!loaded || loading) {
    return (
      <ProtectedRouteMembre>
        <div className="flex items-center justify-center min-h-screen text-gray-700">
          Chargement...
        </div>
      </ProtectedRouteMembre>
    );
  }

  return (
    <ProtectedRouteMembre>
      <div className="min-h-screen bg-[#F7F7F7]">
        <MembreTopbar />

        <main className="p-6 max-w-5xl mx-auto space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-[#166534]">
              Forum des membres
            </h1>

            <Link
              href="/membre/forum/create"
              className="bg-[#166534] text-white px-4 py-2 rounded hover:bg-[#145f48]"
            >
              + Nouveau sujet
            </Link>
          </div>

          {sujets.length === 0 && (
            <p className="text-gray-600">
              Aucun sujet pour le moment.
            </p>
          )}

          <div className="space-y-4">
            {sujets.map((s) => (
              <Link
                key={s.id}
                href={`/membre/forum/${s.id}`}
                className="block bg-white p-4 rounded shadow hover:bg-gray-50"
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {s.title}
                </h2>
                <p className="text-gray-600 line-clamp-2">
                  {s.description}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  📅{" "}
                  {new Date(s.created_at).toLocaleDateString()} —{" "}
                  {s.author_name}
                </p>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </ProtectedRouteMembre>
  );
}
