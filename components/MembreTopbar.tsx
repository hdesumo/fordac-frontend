"use client";

import useMembreAuth from "@/hooks/useMembreAuth";
import { useRouter } from "next/navigation";

export default function MembreTopbar() {
  const { membre, loaded } = useMembreAuth();
  const router = useRouter();

  if (!loaded) return null;

  // Si pas connecté → rien n'est affiché (ProtectedRoute gère déjà la redirection)
  if (!membre) return null;

  const handleLogout = () => {
    localStorage.removeItem("memberToken");
    localStorage.removeItem("memberData");
    router.push("/login");
  };

  return (
    <div className="w-full bg-[#145331] text-white py-3 px-6 flex items-center justify-end gap-6 shadow">

      {/* NOM DU MEMBRE */}
      <p className="font-semibold">
        Bonjour, {membre.prenom} {membre.nom}
      </p>

      {/* BOUTON LOGOUT */}
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm font-semibold"
      >
        Déconnexion
      </button>
    </div>
  );
}
