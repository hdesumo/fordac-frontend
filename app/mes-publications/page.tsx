"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Post = {
  id: number;
  author: string;
  content: string;
  date: string;
};

export default function MesPublicationsPage() {
  const [posts] = useState<Post[]>([
    {
      id: 1,
      author: "Clarisse Nguimfack",
      content:
        "Ravie de voir les jeunes s’impliquer activement dans la vie citoyenne à travers le FORDAC 💚",
      date: "12 novembre 2025",
    },
    {
      id: 2,
      author: "Jean-Paul Kalla",
      content:
        "La solidarité est notre force. Merci au FORDAC pour cette belle initiative dans le Moungo.",
      date: "10 novembre 2025",
    },
    {
      id: 3,
      author: "Blaise Mbarga",
      content:
        "Ensemble, construisons le changement que nous voulons voir dans notre pays 🇨🇲",
      date: "9 novembre 2025",
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 px-4">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 dark:text-green-400 text-center mb-10">
          Mes publications
        </h1>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-green-700 dark:text-green-300">
                  {post.author}
                </h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-200">{post.content}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
