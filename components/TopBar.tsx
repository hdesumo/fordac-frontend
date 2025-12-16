"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Import dynamique du menu utilisateur
const UserProfileMenu = dynamic(() => import("./UserProfileMenu"), { ssr: false });

export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo FORDAC */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="FORDAC Logo"
            width={45}
            height={45}
            className="rounded-full"
          />
          <span className="text-green-800 font-extrabold text-xl tracking-tight">
            FORDAC
          </span>
        </Link>

        {/* Menu principal (bureau) */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="text-gray-700 hover:text-green-700">
            Accueil
          </Link>
          <Link href="/president" className="text-gray-700 hover:text-green-700">
            Président
          </Link>
          <Link href="/actualites" className="text-gray-700 hover:text-green-700">
            Actualités
          </Link>
          <Link href="/forum" className="text-gray-700 hover:text-green-700">
            Forum des Militants
          </Link>
          <Link href="/adhesion" className="text-gray-700 hover:text-green-700">
            Adhésion
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-green-700">
            Contact
          </Link>
        </nav>

        {/* Zone droite : Connexion ou Profil */}
        <div className="flex items-center space-x-4">
          <UserProfileMenu />
          <Link
            href="/login"
            className="hidden md:inline-block bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-full text-sm font-semibold"
          >
            Connexion
          </Link>
        </div>

        {/* Menu mobile */}
        <button
          className="md:hidden text-green-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t border-gray-200 shadow-inner flex flex-col space-y-4 p-4 text-sm"
        >
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Accueil
          </Link>
          <Link href="/president" onClick={() => setMenuOpen(false)}>
            Président
          </Link>
          <Link href="/actualites" onClick={() => setMenuOpen(false)}>
            Actualités
          </Link>
          <Link href="/forum" onClick={() => setMenuOpen(false)}>
            Forum des Militants
          </Link>
          <Link href="/adhesion" onClick={() => setMenuOpen(false)}>
            Adhésion
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="bg-green-700 text-white px-4 py-2 rounded-full text-center font-semibold"
          >
            Connexion
          </Link>
        </motion.nav>
      )}
    </header>
  );
}
