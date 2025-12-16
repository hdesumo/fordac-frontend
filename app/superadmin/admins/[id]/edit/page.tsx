"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditAdmin() {
  const router = useRouter();
  const params = useParams();

  const id = params?.id;

  const [admin, setAdmin] = useState<any>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadAdmin();
  }, []);

  async function loadAdmin() {
    const token = localStorage.getItem("superadminToken");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/superadmin/admins/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const data = await res.json();
    setAdmin(data);
  }

  async function handleSubmit(e: any) {
    e.preventDefault();

    const token = localStorage.getItem("superadminToken");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/superadmin/admins/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(admin),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.message);
      return;
    }

    router.push("/superadmin/admins");
  }

  if (!admin) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="bg-white text-black p-6 rounded shadow max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Modifier l'Administrateur</h1>

      {message && <p className="text-red-600 mb-4">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label>Nom</label>
          <input
            className="w-full border p-2 mt-1 rounded"
            value={admin.name}
            onChange={(e) => setAdmin({ ...admin, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label>Email</label>
          <input
            className="w-full border p-2 mt-1 rounded"
            value={admin.email}
            onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
            required
          />
        </div>

        <div>
          <label>Service</label>
          <input
            className="w-full border p-2 mt-1 rounded"
            value={admin.service}
            onChange={(e) => setAdmin({ ...admin, service: e.target.value })}
          />
        </div>

        <div>
          <label>Nouveau mot de passe (facultatif)</label>
          <input
            type="password"
            className="w-full border p-2 mt-1 rounded"
            onChange={(e) =>
              setAdmin({ ...admin, password: e.target.value })
            }
          />
        </div>

        <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
          Enregistrer
        </button>
      </form>
    </div>
  );
}
