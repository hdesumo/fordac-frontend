"use client";

import Link from "next/link";
import Image from "next/image";

export default function TopNavbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto max-w-7xl flex items-center justify-between py-3 px-4">

        {/* LEFT: LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Logo FORDAC"
            width={42}
            height={42}
            className="object-contain"
          />

          <div className="leading-tight text-[#166534]">
            <div className="font-semibold text-base">FORDAC</div>
            <div className="text-xs uppercase tracking-wide">
              Forces Démocratiques pour l’Action et le Changement
            </div>
          </div>
        </Link>

        {/* RIGHT: TOP MENU */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#166534]">
          <Link href="/" className="hover:text-black transition">Accueil</Link>
          <Link href="/a-propos" className="hover:text-black transition">À Propos</Link>
          <Link href="/president" className="hover:text-black transition">Le Président</Link>

          {/* CTA */}
          <Link
            href="/adhesion"
            className="bg-[#166534] text-white px-4 py-2 rounded-md text-sm shadow-sm hover:bg-[#0f4a26] transition"
          >
            Adhésion
          </Link>
          <Link
            href="/login"
            className="border border-[#166534] text-[#166534] px-4 py-2 rounded-md text-sm hover:bg-[#166534] hover:text-white transition"
          >
            Connexion
          </Link>
        </nav>

        {/* MOBILE BUTTON → main menu will handle it */}
        <div className="md:hidden">
          {/* This button is only the placeholder for mobile-UX,
              the real drawer/menu is handled in MainNavbar */}
          <span className="text-[#166534] font-bold text-xl">☰</span>
        </div>
      </div>
    </header>
  );
}
