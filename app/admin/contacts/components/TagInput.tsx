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

interface TagInputProps {
  message: ContactMessage;
  reload: () => void;
}

export default function TagInput({ message, reload }: TagInputProps) {
  const [tag, setTag] = useState("");

  async function addTag() {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact/add-tag`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: message.id, tag }),
    });

    setTag("");
    reload();
  }

  return (
    <div>
      <label className="font-semibold">Tags</label>
      <div className="flex flex-wrap gap-2 mt-2">
        {message.tags?.map((tagItem) => (
          <span
            key={tagItem}
            className="bg-[#14533f] px-3 py-1 rounded text-xs"
          >
            {tagItem}
          </span>
        ))}
      </div>

      <div className="flex mt-3">
        <input
          className="flex-1 px-3 py-2 bg-[#0c2e25] rounded"
          placeholder="Ajouter un tag…"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        <button
          className="ml-2 px-3 bg-[#c8a45d] text-[#0c2e25] rounded"
          onClick={addTag}
        >
          +
        </button>
      </div>
    </div>
  );
}
