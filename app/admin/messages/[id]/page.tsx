"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import { adminFetch } from "@/lib/adminApi"; // 🔥 import correct

export default function MessageDetailPage() {
  const { id } = useParams();
  const [message, setMessage] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  async function loadMessage() {
    setLoading(true);

    try {
      // 🔥 Correction : 2 arguments pour satisfaire TypeScript
      const res = await adminFetch(`/api/admin/messages/history`, {});
      const data = await res.json();

      const msg = data.find(
        (m: any) => m.id.toString() === id.toString()
      );

      setMessage(msg || null);
    } catch (err) {
      console.error("Erreur chargement message:", err);
      setMessage(null);
    }

    setLoading(false);
  }

  useEffect(() => {
    if (id) loadMessage();
  }, [id]);

  if (loading) return <p>Chargement...</p>;

  if (!message) {
    return (
      <div className="space-y-4">
        <p className="text-red-600 font-semibold">
          Message introuvable.
        </p>

        <Link
          href="/admin/messages"
          className="text-blue-700 underline"
        >
          Retour
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Détail du message</h1>

        <Link
          href="/admin/messages"
          className="bg-green-900 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Retour
        </Link>
      </div>

      <div className="bg-white shadow rounded-lg p-6 space-y-4">

        <h2 className="text-xl font-bold">{message.title}</h2>

        <p>
          <span className="font-semibold">Type :</span>{" "}
          <span className="capitalize">{message.target_type}</span>
        </p>

        {message.target_type === "targeted" && (
          <div className="p-4 bg-gray-100 rounded">
            <p className="font-semibold">Zone ciblée :</p>

            <pre className="text-sm mt-2 whitespace-pre-wrap">
              {JSON.stringify(
                JSON.parse(message.target_value || "{}"),
                null,
                2
              )}
            </pre>
          </div>
        )}

        <div className="p-4 bg-gray-50 rounded border">
          <p className="whitespace-pre-line text-gray-800">
            {message.content}
          </p>
        </div>

        <p className="text-gray-600 text-sm">
          Envoyé le :{" "}
          {new Date(message.created_at).toLocaleString("fr-FR")}
        </p>

        {message.target_type !== "global" && (
          <Link
            href={`/admin/messages/${id}/targets`}
            className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Voir les membres ciblés
          </Link>
        )}
      </div>
    </div>
  );
}
