"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface NewsItem {
  id: number;
  title: string;
  image?: string;
  content: string;
  created_at: string;
}

export default function ActualitesPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("https://api.fordac-connect.org/api/news");
        const data = await res.json();
        setNews(data);
      } catch (err) {
        console.error("Erreur lors du chargement des actualités:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-500">
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-10 text-green-700 dark:text-green-400">
          📰 Actualités du FORDAC
        </h1>

        {loading ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-green-600"></div>
            <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">
              Chargement des actualités...
            </span>
          </div>
        ) : news.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <article
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-48 w-full object-cover"
                  />
                )}

                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-3">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-700 dark:text-gray-300 flex-grow leading-relaxed">
                    {item.content.length > 150
                      ? item.content.slice(0, 150) + "..."
                      : item.content}
                  </p>

                  <div className="mt-5 text-right">
                    <Link
                      href={`/actualites/${item.id}`}
                      className="text-green-700 dark:text-green-400 font-semibold hover:underline"
                    >
                      Lire la suite →
                    </Link>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-gray-900 text-xs text-gray-500 dark:text-gray-400 px-6 py-3 border-t border-gray-200 dark:border-gray-700">
                  Publié le{" "}
                  {new Date(item.created_at).toLocaleDateString("fr-FR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400 italic">
            Aucune actualité publiée pour le moment.
          </p>
        )}
      </section>
    </main>
  );
}
