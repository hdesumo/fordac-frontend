"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function Topbar() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("adminToken");
    router.replace("/admin-login");
  };

  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6 sticky top-0 z-40">
      <h2 className="text-xl font-bold text-[#145331]">Espace Administration</h2>

      <button
        onClick={logout}
        className="flex items-center gap-2 text-red-600 hover:text-red-800 transition"
      >
        <LogOut size={18} />
        <span className="font-medium">Déconnexion</span>
      </button>
    </header>
  );
}
