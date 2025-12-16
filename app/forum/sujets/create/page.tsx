"use client";

import { useState, useEffect } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import IntranetHeader from "@/components/IntranetHeader";
import ForumNav from "@/components/ForumNav";

export default function CreateTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState<any>(null);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    const u = localStorage.getItem("user");
    if (u) setUser(JSON.parse(u));
  }, []);

  const handleSubmit = async () => {
    if (!title.trim() || !description.trim()) {
      return alert("Veuillez remplir tous les champs.");
    }

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/forum/topics/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ title, description }),
    });

    alert("Sujet créé !");
    window.location.href = "/forum/sujets";
  };

  return (
    <ProtectedRoute>
      <IntranetHeader userName={user?.name || "Utilisateur"} />
      <ForumNav />

      <main className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl text-[#166534] font-extrabold mb-8">
          Créer un sujet
        </h1>

        <div className="bg-white p-8 rounded-xl shadow border">
          <input
            type="text"
            placeholder="Titre du sujet"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-4 border rounded-lg mb-4"
          />

          <textarea
            placeholder="Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-4 border rounded-lg"
            rows={5}
          ></textarea>

          <button
            onClick={handleSubmit}
            className="mt-6 bg-[#166534] text-white px-8 py-3 rounded-lg"
          >
            Publier
          </button>
        </div>
      </main>
    </ProtectedRoute>
  );
}
