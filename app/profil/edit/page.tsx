"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";
import { motion } from "framer-motion";

export default function EditProfilPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("fordac_user");
    if (!data) router.push("/login");
    else setUser(JSON.parse(data));
  }, [router]);

  if (!user) return null;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    profession: "",
    quartier: "",
    birthdate: "",
  });

  // Remplir les champs avec les données existantes
  useEffect(() => {
    if (user) {
      setForm({
        name: user.name,
        phone: user.phone,
        profession: user.profession || "",
        quartier: user.quartier || "",
        birthdate: user.birthdate || "",
      });
    }
  }, [user]);

  // Mise à jour des champs
  const updateField = (field: string, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      setLoading(true);

      const token = localStorage.getItem("fordac_token");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/members/${user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Erreur lors de la mise à jour.");
        setLoading(false);
        return;
      }

      // mettre à jour le localStorage
      localStorage.setItem("fordac_user", JSON.stringify(data.member));

      setSuccess("Profil mis à jour avec succès !");
      setLoading(false);

      setTimeout(() => router.push("/profil"), 1200);

    } catch (err) {
      console.error(err);
      setError("Impossible de mettre à jour le profil.");
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <main className="max-w-3xl mx-auto py-24 px-6">
        <motion.h1
          className="text-4xl font-bold text-fordacGreen text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Modifier mon profil
        </motion.h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-2xl shadow-card space-y-6"
        >
          <div>
            <label className="font-semibold">Nom complet</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="font-semibold">Téléphone</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <div>
            <label className="font-semibold">Profession</label>
            <input
              type="text"
              value={form.profession}
              onChange={(e) => updateField("profession", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="font-semibold">Quartier</label>
            <input
              type="text"
              value={form.quartier}
              onChange={(e) => updateField("quartier", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="font-semibold">Date de naissance</label>
            <input
              type="date"
              value={form.birthdate}
              onChange={(e) => updateField("birthdate", e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {error && (
            <p className="text-red-600 text-center font-semibold">{error}</p>
          )}

          {success && (
            <p className="text-green-600 text-center font-semibold">
              {success}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full py-3 text-lg"
          >
            {loading ? "Mise à jour…" : "Enregistrer les modifications"}
          </button>
        </form>
      </main>
    </ProtectedRoute>
  );
}
