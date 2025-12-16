"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ForumNav() {
  const path = usePathname();

  const isActive = (href: string) =>
    path === href || path.startsWith(href);

  return (
    <nav className="max-w-6xl mx-auto px-6 py-4 flex gap-8 border-b border-gray-200 bg-white sticky top-0 z-40">
      <Link
        href="/forum/espace"
        className={`pb-2 font-semibold ${
          isActive("/forum/espace")
            ? "text-[#166534] border-b-2 border-[#166534]"
            : "text-gray-600 hover:text-[#166534]"
        }`}
      >
        Espace des militants
      </Link>

      <Link
        href="/forum/sujets"
        className={`pb-2 font-semibold ${
          isActive("/forum/sujets")
            ? "text-[#166534] border-b-2 border-[#166534]"
            : "text-gray-600 hover:text-[#166534]"
        }`}
      >
        Sujets
      </Link>

      <Link
        href="/forum/sujets/create"
        className={`pb-2 font-semibold ${
          isActive("/forum/sujets/create")
            ? "text-[#166534] border-b-2 border-[#166534]"
            : "text-gray-600 hover:text-[#166534]"
        }`}
      >
        Créer un sujet
      </Link>
    </nav>
  );
}
