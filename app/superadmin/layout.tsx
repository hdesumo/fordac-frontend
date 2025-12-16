"use client";

import "../globals.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SuperAdminLayout({ children }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("fordac_token");
    const role = localStorage.getItem("fordac_role");

    if (!token) {
      router.push("/login");
      return;
    }

    if (role !== "superadmin") {
      router.push("/login");
      return;
    }

    setLoading(false);
  }, []);

  if (loading) return <div className="p-10">Chargement...</div>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* SIDEBAR SUPERADMIN */}
      <aside className="w-64 bg-green-900 text-white p-5">
        <h2 className="text-xl font-bold mb-6">SuperAdmin</h2>

        <ul className="space-y-3">
          <li><a href="/superadmin" className="hover:underline">Dashboard</a></li>
          <li><a href="/superadmin/admins" className="hover:underline">Admins</a></li>
          <li><a href="/superadmin/membres" className="hover:underline">Membres</a></li>
          <li><a href="/superadmin/settings" className="hover:underline">Paramètres</a></li>
        </ul>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
