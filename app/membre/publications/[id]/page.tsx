"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import MembreTopbar from "@/components/MembreTopbar";

export default function PublicationPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const [publication, setPublication] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadPublication() {
    const token = localStorage.getItem("memberToken");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/members/publications/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error("Erreur chargement publication");
      }

      const data = await res.json();
      setPublication(data);
    } catch (err) {
      console.error(err);
      setError("Impossible de charger la publication.");
    }

    setLoading(false);
  }

  useEffect(() => {
    if (id) {
      loadPublication();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        Chargement...
      </div>
    );
  }

  if (error || !publication) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-400">
        {error || "Publication introuvable"}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f2f1e] text-white">
      <MembreTopbar />

      <div className="p-6 max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">
          {publication.title}
        </h1>

        <div className="bg-[#145331] p-6 rounded-xl border border-green-800 whitespace-pre-line">
          {publication.content}
        </div>

        <div className="flex gap-4">
          <Link
            href={`/membre/publications/${id}/edit`}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-bold"
          >
            Modifier
          </Link>

          <button
            onClick={() => router.push("/membre/publications")}
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
          >
            Retour
          </button>
        </div>
      </div>
    </div>
  );
}
