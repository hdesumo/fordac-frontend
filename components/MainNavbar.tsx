"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function MainNavbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const Dropdown = ({ items }: { items: { href: string; label: string }[] }) => (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.15 }}
        className="absolute left-0 top-full mt-2 w-56 bg-white shadow-lg rounded-lg border z-20"
      >
        <ul className="py-2">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-4 py-2 hover:bg-gray-100 text-sm text-gray-700"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <nav className="hidden md:block bg-[#166534] text-white border-b border-[#14502f] relative z-30">
      <div className="mx-auto max-w-7xl flex items-center gap-8 px-4 py-3 text-sm font-medium">

        {/* DÉMEMBREMENTS */}
        <div
          className="relative"
          onMouseEnter={() => toggleMenu("demembrements")}
          onMouseLeave={() => toggleMenu("")}
        >
          <button className="hover:text-gray-200">Démembrements</button>

          {openMenu === "demembrements" && (
            <Dropdown
              items={[
                { href: "/demembrements/federations", label: "Fédérations" },
                { href: "/demembrements/sections", label: "Sections" },
                { href: "/demembrements/sous-sections", label: "Sous-sections" },
                { href: "/demembrements/cellules", label: "Cellules" },
              ]}
            />
          )}
        </div>

        {/* LIGUES */}
        <div
          className="relative"
          onMouseEnter={() => toggleMenu("ligues")}
          onMouseLeave={() => toggleMenu("")}
        >
          <button className="hover:text-gray-200">Ligues</button>

          {openMenu === "ligues" && (
            <Dropdown
              items={[
                { href: "/ligues/jeunes", label: "Jeunes" },
                { href: "/ligues/femmes", label: "Femmes" },
                { href: "/ligues/experts", label: "Experts" },
              ]}
            />
          )}
        </div>

        {/* ORGANES DIRIGEANTS */}
        <div
          className="relative"
          onMouseEnter={() => toggleMenu("organes")}
          onMouseLeave={() => toggleMenu("")}
        >
          <button className="hover:text-gray-200">Organes Dirigeants</button>

          {openMenu === "organes" && (
            <Dropdown
              items={[
                { href: "/organes-dirigeants/congres", label: "Congrès" },
                { href: "/organes-dirigeants/cps", label: "CPS" },
                { href: "/organes-dirigeants/bpn", label: "Bureau Politique National" },
                { href: "/organes-dirigeants/sen", label: "SEN" },
                { href: "/organes-dirigeants/ethique", label: "Comité d'Éthique" },
              ]}
            />
          )}
        </div>

        {/* ORGANES ASSOCIÉS */}
        <div
          className="relative"
          onMouseEnter={() => toggleMenu("associes")}
          onMouseLeave={() => toggleMenu("")}
        >
          <button className="hover:text-gray-200">Organes Associés</button>

          {openMenu === "associes" && (
            <Dropdown
              items={[
                { href: "/orgassocies/presse", label: "Presse de la Nation" },
                { href: "/orgassocies/mutuelle", label: "Mutuelle du FORDAC" },
              ]}
            />
          )}
        </div>

        {/* GALERIE */}
        <Link href="/galerie" className="hover:text-gray-200">
          Galerie
        </Link>

        {/* FORUM DES MILITANTS */}
        <Link href="/forum" className="hover:text-gray-200">
          Forum des Militants
        </Link>
      </div>
    </nav>
  );
}
