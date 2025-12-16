"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0f3e20] text-white pt-10 pb-6 mt-12 border-t border-[#0c331a]">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/logo.png"
              width={45}
              height={45}
              alt="FORDAC Logo"
              className="object-contain"
            />
            <div className="leading-tight">
              <h3 className="text-lg font-semibold">FORDAC</h3>
              <p className="text-xs tracking-wide">
                Forces Démocratiques pour l’Action et le Changement
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-200">
            Un mouvement engagé pour le développement communautaire,
            la justice sociale et l’action publique.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 text-[#4ade80]">
            Liens utiles
          </h4>

          <ul className="space-y-2 text-sm">
            <li><Link href="/adhesion" className="hover:text-[#4ade80]">Adhésion</Link></li>
            <li><Link href="/login" className="hover:text-[#4ade80]">Connexion (Membres)</Link></li>
            <li><Link href="/contact" className="hover:text-[#4ade80]">Contact</Link></li>
            <li><Link href="/mentions-legales" className="hover:text-[#4ade80]">Mentions légales</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 text-[#4ade80]">
            Administration
          </h4>

          <ul className="space-y-2 text-sm">
            <li><Link href="/superadmin-login" className="hover:text-[#4ade80]">Connexion SuperAdmin</Link></li>
            <li><Link href="/admin-login" className="hover:text-[#4ade80]">Connexion Admin</Link></li>
            <li className="mt-4 text-gray-200 text-sm">Email : contact@fordac.org</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-300 mt-10 pt-4 border-t border-[#14502f]">
        © {new Date().getFullYear()} FORDAC — Tous droits réservés.
      </div>
    </footer>
  );
}
