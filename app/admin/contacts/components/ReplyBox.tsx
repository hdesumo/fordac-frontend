"use client";

import { useState } from "react";

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  status: string;
  tags?: string[];
  notes?: string[];
}

interface ReplyBoxProps {
  message: ContactMessage;
  reload: () => void;
}

export default function ReplyBox({ message, reload }: ReplyBoxProps) {
  const [text, setText] = useState("");
  const [sent, setSent] = useState(false);

  async function sendReply() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact/reply`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: message.id, reply: text }),
    });

    if (res.ok) {
      setSent(true);
      setText("");
      reload();
      setTimeout(() => setSent(false), 3000);
    }
  }

  return (
    <div>
      <label className="font-semibold">Répondre au message</label>

      <textarea
        className="w-full bg-[#0c2e25] mt-3 rounded p-2"
        rows={5}
        placeholder="Écrire une réponse…"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={sendReply}
        className="mt-2 px-3 py-1 bg-[#c8a45d] text-[#0c2e25] rounded"
      >
        Envoyer
      </button>

      {sent && (
        <div className="text-green-400 text-sm mt-1">
          ✔ Réponse envoyée
        </div>
      )}
    </div>
  );
}
