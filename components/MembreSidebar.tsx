"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutMembre } from "@/lib/logoutMembre";
import useMembreAuth from "@/hooks/useMembreAuth";

export default function MembreSidebar() {
  const pathname = usePathname();
  const { membre } = useMembreAuth();

  const links = [
    { name: "Dashboard", href: "/membre/dashboard", icon: "📊" },
    { name: "Forum", href: "/membre/forum", icon: "💬" },
    { name: "Créer un sujet", href: "/membre/forum/create", icon: "📝" },
    { name: "Notifications", href: "/membre/notifications", icon: "🔔" },
    { name: "Mon Profil", href: "/membre/profil", icon: "👤" },
  ];

  return (
    <div className="bg-[#145331] text-white w-64 min-h-screen p-6 space-y-8 shadow-lg">

      {/* Profil rapide */}
      <div>
        <p className="font-semibold text-lg">
          {membre?.prenom} {membre?.nom}
        </p>
        <p className="text-sm opacity-70">{membre?.phone}</p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {links.map((l) => {
          const active = pathname.startsWith(l.href);
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`block px-4 py-2 rounded-lg transition ${
                active
                  ? "bg-white text-[#145331] font-semibold"
                  : "hover:bg-[#1c6d41]"
              }`}
            >
              <span className="mr-2">{l.icon}</span>
              {l.name}
            </Link>
          );
        })}
      </nav>

      {/* Déconnexion */}
      <button
        onClick={() => {
          logoutMembre();
          window.location.href = "/login";
        }}
        className="w-full mt-10 bg-red-600 hover:bg-red-700 py-2 rounded-lg font-semibold"
      >
        Déconnexion
      </button>
    </div>
  );
}
