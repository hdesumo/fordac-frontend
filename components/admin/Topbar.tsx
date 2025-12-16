"use client";

import { useRouter } from "next/navigation";

export default function Topbar() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  return (
    <header className="h-16 bg-white border-b flex items-center justify-end px-6">
      <button
        onClick={logout}
        className="text-sm bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Déconnexion
      </button>
    </header>
  );
}
