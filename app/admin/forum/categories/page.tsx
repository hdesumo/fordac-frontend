"use client";

import { useEffect, useState } from "react";

type Category = {
  id: number;
  name: string;
  description?: string;
  is_active: boolean;
  order?: number;
};

export default function AdminForumCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  const API = process.env.NEXT_PUBLIC_API_URL;

  const loadCategories = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/admin/forum/categories`, {
        cache: "no-store",
      });
      const data = await res.json();
      setCategories(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error("Erreur chargement catégories admin:", e);
      setCategories([]);
    }
    setLoading(false);
  };

  const toggleCategory = async (id: number, active: boolean) => {
    try {
      await fetch(`${API}/admin/forum/categories/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_active: !active }),
      });
      loadCategories();
    } catch (e) {
      console.error("Erreur toggle catégorie:", e);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <main className="space-y-6">
      <h1 className="text-3xl font-extrabold text-[#145331]">
        Catégories du forum
      </h1>

      {loading ? (
        <p className="text-gray-500">Chargement des catégories…</p>
      ) : categories.length === 0 ? (
        <div className="bg-white border rounded-xl p-8 text-center text-gray-600">
          Aucune catégorie enregistrée.
        </div>
      ) : (
        <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b text-sm font-semibold text-gray-600">
            <div className="col-span-4">Nom</div>
            <div className="col-span-4">Description</div>
            <div className="col-span-2">Statut</div>
            <div className="col-span-2 text-right">Action</div>
          </div>

          <div className="divide-y">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-gray-50"
              >
                <div className="col-span-4 font-semibold text-gray-800">
                  {cat.name}
                </div>

                <div className="col-span-4 text-gray-600">
                  {cat.description || "—"}
                </div>

                <div className="col-span-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      cat.is_active
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {cat.is_active ? "Active" : "Inactive"}
                  </span>
                </div>

                <div className="col-span-2 text-right">
                  <button
                    onClick={() => toggleCategory(cat.id, cat.is_active)}
                    className="text-sm text-[#145331] hover:underline"
                  >
                    {cat.is_active ? "Désactiver" : "Activer"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
