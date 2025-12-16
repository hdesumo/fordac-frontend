"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { User, LogOut, Edit, Settings } from "lucide-react";
import { useRouter } from "next/navigation";

export default function UserProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("fordac_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // ✅ Fermer le menu au clic extérieur
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("fordac_user");
    router.push("/login");
  };

  if (!user) return null;

  return (
    <div className="relative" ref={menuRef}>
      {/* Avatar rond avec initiale */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-green-700 text-white font-semibold hover:bg-green-800 transition-colors"
      >
        {user.name ? user.name.charAt(0).toUpperCase() : "U"}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              {user.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {user.email}
            </p>
          </div>

          <ul className="py-2">
            <li>
              <Link
                href="/profil"
                className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <User className="w-4 h-4 mr-2" />
                Mon profil
              </Link>
            </li>
            <li>
              <Link
                href="/profil/edit"
                className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <Edit className="w-4 h-4 mr-2" />
                Modifier le profil
              </Link>
            </li>
            <li>
              <Link
                href="/parametres"
                className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <Settings className="w-4 h-4 mr-2" />
                Paramètres
              </Link>
            </li>
          </ul>

          <div className="border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Déconnexion
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
