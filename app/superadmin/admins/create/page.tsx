"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateAdminPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleCreate() {
    setLoading(true);

    try {
      const token = localStorage.getItem("superadminToken");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/superadmin/admins`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ name, email, service, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Erreur");
        setLoading(false);
        return;
      }

      alert("Administrateur créé avec succès.");
      router.push("/superadmin/admins");
    } catch (err) {
      console.error("Erreur:", err);
      alert("Erreur serveur");
    }

    setLoading(false);
  }

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Créer un Administrateur</h1>

      <div className="bg-[#145331] p-6 rounded-xl border border-gray-700 max-w-xl">

        <label className="block mb-2">Nom complet</label>
        <input
          className="w-full bg-gray-800 p-3 rounded-lg mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="block mb-2">Email</label>
        <input
          className="w-full bg-gray-800 p-3 rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block mb-2">Service</label>
        <input
          className="w-full bg-gray-800 p-3 rounded-lg mb-4"
          value={service}
          onChange={(e) => setService(e.target.value)}
        />

        <label className="block mb-2">Mot de passe</label>
        <input
          type="password"
          className="w-full bg-gray-800 p-3 rounded-lg mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleCreate}
          disabled={loading}
          className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-bold"
        >
          {loading ? "Veuillez patienter..." : "Créer l’administrateur"}
        </button>
      </div>
    </div>
  );
}
