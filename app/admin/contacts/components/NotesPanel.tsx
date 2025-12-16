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

interface NotesPanelProps {
  message: ContactMessage;
  reload: () => void;
}

export default function NotesPanel({ message, reload }: NotesPanelProps) {
  const [note, setNote] = useState("");

  async function addNote() {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact/add-note`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: message.id, note }),
    });

    setNote("");
    reload();
  }

  return (
    <div>
      <label className="font-semibold">Notes internes</label>

      <ul className="text-sm mt-2 space-y-1">
        {message.notes?.map((n, i) => (
          <li key={i} className="opacity-80">– {n}</li>
        ))}
      </ul>

      <textarea
        className="w-full bg-[#0c2e25] mt-3 rounded p-2"
        rows={3}
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button
        onClick={addNote}
        className="mt-2 px-3 py-1 bg-[#c8a45d] text-[#0c2e25] rounded"
      >
        Ajouter
      </button>
    </div>
  );
}
