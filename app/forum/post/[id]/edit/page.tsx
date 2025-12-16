"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";
import EditorBox from "@/components/EditorBox";

export default function EditPostPage() {
  const { id } = useParams();
  const router = useRouter();
  const [content, setContent] = useState("");

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null;

  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/forum/posts/${id}`,
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    setContent(data.post?.content || "");
  };

  const savePost = async () => {
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/forum/posts/${id}/edit`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ content }),
      }
    );

    router.push(`/forum/post/${id}`);
  };

  return (
    <ProtectedRoute>
      <div className="max-w-4xl mx-auto px-6 py-14">
        <h1 className="text-3xl font-bold text-[#166534] mb-6">
          Modifier votre publication
        </h1>

        <EditorBox value={content} onChange={setContent} />

        <button
          onClick={savePost}
          className="mt-6 bg-[#166534] text-white px-6 py-3 rounded-md font-semibold"
        >
          Enregistrer
        </button>
      </div>
    </ProtectedRoute>
  );
}
