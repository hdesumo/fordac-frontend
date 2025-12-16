"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";
import EditorBox from "@/components/EditorBox";

export default function NouveauPostPage() {
  const { id } = useParams();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const submitPost = async () => {
    if (!title.trim() || content.trim().length < 10) {
      return alert("Veuillez entrer un titre et un contenu plus complet.");
    }

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/forum/posts/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        topic_id: id,
        title,
        content,
      }),
    });

    router.push(`/forum/sujets/${id}`);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-4xl mx-auto px-6 py-14">
        <h1 className="text-3xl font-bold text-[#166534] mb-6">
          Nouvelle publication
        </h1>

        <input
          type="text"
          placeholder="Titre du message"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-md p-3 mb-6"
        />

        <EditorBox
          value={content}
          onChange={setContent}
          placeholder="Exprimez votre idée..."
        />

        <button
          onClick={submitPost}
          className="mt-6 bg-[#166534] text-white px-6 py-3 rounded-md font-semibold"
        >
          Publier
        </button>
      </div>
    </ProtectedRoute>
  );
}
