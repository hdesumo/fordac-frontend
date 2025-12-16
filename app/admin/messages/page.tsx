"use client";

import { useEffect, useState } from "react";
import { adminFetch } from "@/lib/adminApi";

export default function MessagesPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadMessages() {
    setLoading(true);

    try {
      // ✅ Correction TS : UN SEUL argument
      const res = await adminFetch("/api/admin/messages/history");
      const data = await res.json();

      if (Array.isArray(data)) {
        setMessages(data);
      } else {
        console.error("Format inattendu:", data);
      }
    } catch (error) {
      console.error("Erreur messages admin:", error);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadMessages();
  }, []);

  if (loading) return <p>Chargement des messages…</p>;

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold text-[#166534] mb-6">
        Historique des messages
      </h1>

      {messages.length === 0 ? (
        <p>Aucun message trouvé.</p>
      ) : (
        <ul className="space-y-4">
          {messages.map((m: any) => (
            <li key={m.id} className="p-4 bg-white rounded shadow">
              <p className="font-semibold">{m.title}</p>
              <p className="text-gray-600 text-sm">{m.created_at}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
