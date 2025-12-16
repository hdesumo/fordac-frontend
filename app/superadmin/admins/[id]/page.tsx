"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDetailPage({ params }: any) {
  const id = params.id;
  const router = useRouter();

  const [admin, setAdmin] = useState<any>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [password, setPassword] = useState("");

  async function loadAdmin() {
    try {
      const token = localStorage.getItem("superadminToken");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/superadmin/admins/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const data = await res.json();

      setAdmin(data);
      setName(data.name);
      setEmail(data.email);
      setService(data.service || "");
    } catch (err) {
      console.error("Erreur:", err);
    }
  }

  useEffect(() => {
    loadAdmin();
  }, []);

  // ================================
  // UPDATE
  // ================================
  async function updateAdmin() {
    try {
      const token = localStorage.getItem("superadminToken");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/superadmin/admins/${id}`,
        {
          method: "PUT",
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
        return;
      }

      alert("Modifications enregistrées.");
      router.refresh();
    } catch (err) {
      console.error(err);
    }
  }

  // ================================
  // DELETE
  // ================================
  async function deleteAdmin() {
    if (!confirm("Confirmer la suppression ?")) return;

    try {
      const token = localStorage.getItem("superadminToken");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/superadmin/admins/${id}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert("Administrateur supprimé.");
      router.push("/superadmin/admins");
    } catch (err) {
      console.error(err);
    }
  }

  // ================================
  // RESET PASSWORD
  // ================================
  async function resetPassword() {
    try {
      const token = localStorage.getItem("superadminToken");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/superadmin/admins/reset-password/${id}`,
        {
          method: "PUT",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await res.json();
      alert("Nouveau mot de passe : " + data.newPassword);
    } catch (err) {
      console.error(err);
    }
  }

  if (!admin)
    return (
      <div className="p-6 text-white">
        <p>Chargement...</p>
      </div>
    );

  return (
    <div className="p-6 text-white max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">
        Administrateur — {admin.name}
      </h1>

      <div className="bg-[#145331] p-6 rounded-xl border border-gray-700">

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

        <label className="block mb-2">Nouveau mot de passe (optionnel)</label>
        <input
          type="password"
          className="w-full bg-gray-800 p-3 rounded-lg mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={updateAdmin}
          className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-bold mb-4"
        >
          Enregistrer
        </button>

        <button
          onClick={resetPassword}
          className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 rounded-lg font-bold mb-4 ml-3"
        >
          Réinitialiser le mot de passe
        </button>

        <button
          onClick={deleteAdmin}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold ml-3"
        >
          Supprimer
        </button>

      </div>
    </div>
  );
}
