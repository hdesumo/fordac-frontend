"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

interface NewsItem {
  id: number;
  title: string;
  image?: string;
  content: string;
  created_at: string;
}

export default function NewsDetail() {
  const { id } = useParams();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchArticle = async () => {
      try {
        const res = await fetch(`https://api.fordac-connect.org/api/news/${id}`);
        const data = await res.json();
        setNews(data);
      } catch (err) {
        console.error("Erreur chargement article:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-500">
      <section className="max-w-4xl mx-auto px-4 py-16">
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-green-600"></div>
            <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">
              Chargement de l’article...
            </span>
          </div>
        ) : news ? (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-green-700 dark:text-green-400 mb-6">
              {news.title}
            </h1>

            {news.image && (
              <img
                src={news.image}
                alt={news.title}
                className="rounded-xl shadow-lg mb-8 w-full max-h-[400px] object-cover"
              />
            )}

            <div
              className="prose dark:prose-invert max-w-none leading-relaxed text-lg"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />

            <div className="mt-10 border-t pt-6 text-sm text-gray-500 dark:text-gray-400">
              Publié le{" "}
              {new Date(news.created_at).toLocaleDateString("fr-FR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/actualites"
                className="inline-block text-green-700 dark:text-green-400 font-semibold hover:underline"
              >
                ← Retour aux actualités
              </Link>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400 italic">
            Article introuvable ou supprimé.
          </p>
        )}
      </section>
    </main>
  );
}
