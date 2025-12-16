"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useRouter } from "next/navigation";

export default function NouvellePublicationPage() {
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!content.trim()) return;
    alert("✅ Publication envoyée !");
    router.push("/mes-publications");
  };

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20 px-4">
        <section className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-green-700 dark:text-green-400 text-center mb-10"
          >
            Nouvelle publication
          </motion.h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700"
          >
            <textarea
              placeholder="Exprimez-vous sur les actions du FORDAC..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-4 rounded-lg border dark:bg-gray-900 h-48 resize-none"
            ></textarea>
            <button
              type="submit"
              className="mt-6 w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg"
            >
              Publier
            </button>
          </form>
        </section>
      </main>
    </ProtectedRoute>
  );
}
