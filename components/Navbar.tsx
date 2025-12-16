"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ FONCTION LOCALE (PAS D'EXPORT)
  function logoutMembre() {
    localStorage.removeItem("memberToken");
    localStorage.removeItem("memberData");
    localStorage.removeItem("token_militant");
    setIsLoggedIn(false);
    router.push("/login");
  }

  // Vérification du token pour Forum des Militants
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token_militant");
      setIsLoggedIn(!!token);
    }
  }, []);

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen);

  return (
    <nav className="bg-[#062b26] text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <img
            src="/logo.png"
            alt="FORDAC"
            className="h-12 cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center font-medium">

          <li><Link href="/" className="hover:text-yellow-400">Accueil</Link></li>
          <li><Link href="/a-propos" className="hover:text-yellow-400">À propos</Link></li>
          <li><Link href="/president" className="hover:text-yellow-400">Le Président</Link></li>

          {/* Forum */}
          <li>
            <Link
              href={isLoggedIn ? "/forum" : "/login"}
              className="hover:text-yellow-400"
            >
              Forum des Militants
            </Link>
          </li>

          {/* Boutons */}
          <li>
            <Link
              href="/adhesion"
              className="bg-yellow-600 px-4 py-2 rounded hover:bg-yellow-700"
            >
              Adhésion
            </Link>
          </li>

          {!isLoggedIn ? (
            <li>
              <Link
                href="/login"
                className="border border-yellow-600 px-4 py-2 rounded hover:bg-yellow-600 hover:text-black"
              >
                Connexion
              </Link>
            </li>
          ) : (
            <li>
              <button
                onClick={logoutMembre}
                className="border border-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white"
              >
                Déconnexion
              </button>
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-[#083a34] px-6 py-4 space-y-4">

          <Link href="/" onClick={toggleMobileMenu}>Accueil</Link>
          <Link href="/a-propos" onClick={toggleMobileMenu}>À propos</Link>
          <Link href="/president" onClick={toggleMobileMenu}>Le Président</Link>

          <Link
            href={isLoggedIn ? "/forum" : "/login"}
            onClick={toggleMobileMenu}
          >
            Forum des Militants
          </Link>

          <Link
            href="/adhesion"
            onClick={toggleMobileMenu}
            className="block bg-yellow-600 px-4 py-2 rounded text-center"
          >
            Adhésion
          </Link>

          {!isLoggedIn ? (
            <Link
              href="/login"
              onClick={toggleMobileMenu}
              className="block border border-yellow-600 px-4 py-2 rounded text-center"
            >
              Connexion
            </Link>
          ) : (
            <button
              onClick={() => {
                logoutMembre();
                toggleMobileMenu();
              }}
              className="block border border-red-500 px-4 py-2 rounded text-center w-full"
            >
              Déconnexion
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
