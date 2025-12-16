"use client";

import Link from "next/link";

export default function AdminForumPage() {
  return (
    <main className="min-h-screen p-10 bg-[#F7F7F7]">

      <h1 className="text-4xl font-extrabold text-[#145331] mb-10">
        Forum — Administration
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <Link
          href="/admin/forum/sujets"
          className="bg-white shadow p-6 rounded-xl hover:shadow-lg border border-gray-200 transition"
        >
          <h2 className="text-2xl font-bold text-[#145331] mb-2">
            Sujets
          </h2>
          <p className="text-gray-600">
            Voir, modifier et supprimer les sujets du forum
          </p>
        </Link>

        <Link
          href="/admin/forum/categories"
          className="bg-white shadow p-6 rounded-xl hover:shadow-lg border border-gray-200 transition"
        >
          <h2 className="text-2xl font-bold text-[#145331] mb-2">
            Catégories
          </h2>
          <p className="text-gray-600">
            Organiser et structurer les catégories du forum
          </p>
        </Link>

        <Link
          href="/admin/forum/moderation"
          className="bg-white shadow p-6 rounded-xl hover:shadow-lg border border-gray-200 transition"
        >
          <h2 className="text-2xl font-bold text-[#145331] mb-2">
            Modération
          </h2>
          <p className="text-gray-600">
            Gérer les signalements et actions disciplinaires
          </p>
        </Link>

      </div>
    </main>
  );
}
