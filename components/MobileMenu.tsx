"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [accordion, setAccordion] = useState<string | null>(null);

  const toggleAccordion = (key: string) => {
    setAccordion(accordion === key ? null : key);
  };

  return (
    <>
      {/* BUTTON TO OPEN MENU */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-[#166534] text-2xl px-3 py-2"
      >
        <Menu size={28} />
      </button>

      {/* OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* DRAWER */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-0 left-0 w-[85%] max-w-sm h-full bg-white z-50 shadow-xl flex flex-col"
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            {/* HEADER WITH LOGO */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-3">
                <img
                  src="/images/logo.png"
                  alt="FORDAC"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-lg font-semibold text-[#166534]">
                  FORDAC
                </span>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-[#166534]"
              >
                <X size={26} />
              </button>
            </div>

            {/* MENU CONTENT */}
            <div className="flex-1 overflow-y-auto">
              <nav className="px-4 pb-20 pt-6 space-y-3 text-[#166534] font-medium">

                {/* ACCUEIL */}
                <Link href="/" onClick={() => setOpen(false)} className="block py-2">
                  Accueil
                </Link>

                {/* À PROPOS */}
                <Link href="/a-propos" onClick={() => setOpen(false)} className="block py-2">
                  À Propos
                </Link>

                {/* PRÉSIDENT */}
                <Link href="/president" onClick={() => setOpen(false)} className="block py-2">
                  Le Président
                </Link>

                {/* ORGANES DIRIGEANTS */}
                <div>
                  <button
                    className="w-full flex justify-between items-center py-2"
                    onClick={() => toggleAccordion("organes")}
                  >
                    Organes Dirigeants
                    <ChevronDown
                      className={`transition-transform ${
                        accordion === "organes" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {accordion === "organes" && (
                      <motion.ul
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="ml-4 space-y-2 text-sm"
                      >
                        <li><Link href="/organes-dirigeants/congres" onClick={() => setOpen(false)}>Congrès</Link></li>
                        <li><Link href="/organes-dirigeants/cps" onClick={() => setOpen(false)}>CPS</Link></li>
                        <li><Link href="/organes-dirigeants/bpn" onClick={() => setOpen(false)}>BPN</Link></li>
                        <li><Link href="/organes-dirigeants/sen" onClick={() => setOpen(false)}>SEN</Link></li>
                        <li><Link href="/organes-dirigeants/ethique" onClick={() => setOpen(false)}>Comité d'Éthique</Link></li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                {/* DÉMEMBREMENTS */}
                <div>
                  <button
                    className="w-full flex justify-between items-center py-2"
                    onClick={() => toggleAccordion("demembrements")}
                  >
                    Démembrements
                    <ChevronDown
                      className={`transition-transform ${
                        accordion === "demembrements" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {accordion === "demembrements" && (
                      <motion.ul
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="ml-4 space-y-2 text-sm"
                      >
                        <li><Link href="/demembrements/federations" onClick={() => setOpen(false)}>Fédérations</Link></li>
                        <li><Link href="/demembrements/sections" onClick={() => setOpen(false)}>Sections</Link></li>
                        <li><Link href="/demembrements/sous-sections" onClick={() => setOpen(false)}>Sous-sections</Link></li>
                        <li><Link href="/demembrements/cellules" onClick={() => setOpen(false)}>Cellules</Link></li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                {/* LIGUES */}
                <div>
                  <button
                    className="w-full flex justify-between items-center py-2"
                    onClick={() => toggleAccordion("ligues")}
                  >
                    Ligues
                    <ChevronDown
                      className={`transition-transform ${
                        accordion === "ligues" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {accordion === "ligues" && (
                      <motion.ul
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="ml-4 space-y-2 text-sm"
                      >
                        <li><Link href="/ligues/jeunes" onClick={() => setOpen(false)}>Jeunes</Link></li>
                        <li><Link href="/ligues/femmes" onClick={() => setOpen(false)}>Femmes</Link></li>
                        <li><Link href="/ligues/experts" onClick={() => setOpen(false)}>Experts</Link></li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                {/* ORGANES ASSOCIÉS */}
                <div>
                  <button
                    className="w-full flex justify-between items-center py-2"
                    onClick={() => toggleAccordion("associes")}
                  >
                    Organes Associés
                    <ChevronDown
                      className={`transition-transform ${
                        accordion === "associes" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {accordion === "associes" && (
                      <motion.ul
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="ml-4 space-y-2 text-sm"
                      >
                        <li><Link href="/orgassocies/presse" onClick={() => setOpen(false)}>Presse de la Nation</Link></li>
                        <li><Link href="/orgassocies/mutuelle" onClick={() => setOpen(false)}>Mutuelle</Link></li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>

                {/* GALERIE */}
                <Link href="/galerie" onClick={() => setOpen(false)} className="block py-2">
                  Galerie
                </Link>

                {/* FORUM */}
                <Link href="/forum" onClick={() => setOpen(false)} className="block py-2">
                  Forum des Militants
                </Link>

              </nav>
            </div>

            {/* CTA SECTION */}
            <div className="border-t p-4 space-y-3 bg-gray-50">
              <Link
                href="/adhesion"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-[#166534] text-white py-2 rounded-md font-semibold"
              >
                Adhésion
              </Link>

              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="block w-full text-center border border-[#166534] text-[#166534] py-2 rounded-md font-semibold"
              >
                Connexion
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
