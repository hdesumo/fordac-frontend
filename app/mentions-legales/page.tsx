"use client";

import { motion } from "framer-motion";

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-16 px-6">
      <section className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-fordacGreen mb-8 text-center"
        >
          Mentions légales
        </motion.h1>

        <div className="space-y-6 text-justify leading-relaxed">
          <p>
            Le présent site <strong>fordac-connect.org</strong> est édité par le parti
            <strong> FORDAC — Forces Démocratiques pour l’Action et le Changement</strong>.
          </p>

          <h2 className="text-2xl font-semibold text-fordacGold mt-8 mb-3">
            Éditeur du site
          </h2>
          <p>
            <strong>FORDAC</strong> – Parti politique camerounais reconnu légalement.  
            Siège national : Yaoundé, Cameroun  
            Email : contact@fordac-connect.org
          </p>

          <h2 className="text-2xl font-semibold text-fordacGold mt-8 mb-3">
            Hébergement
          </h2>
          <p>
            Ce site est hébergé par <strong>Vercel Inc.</strong>  
            Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis  
            Site web : <a href="https://vercel.com" className="text-fordacGold hover:underline">https://vercel.com</a>
          </p>

          <h2 className="text-2xl font-semibold text-fordacGold mt-8 mb-3">
            Propriété intellectuelle
          </h2>
          <p>
            L’ensemble des contenus présents sur ce site (textes, images, logos, documents)
            sont la propriété exclusive du FORDAC, sauf mention contraire.
            Toute reproduction, modification ou diffusion sans autorisation est strictement interdite.
          </p>

          <h2 className="text-2xl font-semibold text-fordacGold mt-8 mb-3">
            Responsabilité
          </h2>
          <p>
            Le FORDAC s’efforce d’assurer l’exactitude et la mise à jour régulière
            des informations diffusées sur ce site. Toutefois, il ne saurait être tenu
            responsable des erreurs, omissions ou indisponibilités du site.
          </p>

          <h2 className="text-2xl font-semibold text-fordacGold mt-8 mb-3">
            Données personnelles
          </h2>
          <p>
            Conformément à la loi sur la protection des données personnelles,
            les informations recueillies via les formulaires (adhésion, contact, forum)
            sont strictement confidentielles et utilisées uniquement à des fins internes.
          </p>

          <p className="text-center mt-12 text-sm text-gray-500">
            © {new Date().getFullYear()} FORDAC — Tous droits réservés.
          </p>
        </div>
      </section>
    </main>
  );
}
