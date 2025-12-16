"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-gradient-to-br from-green-900 via-green-700 to-yellow-400 flex flex-col justify-center items-center text-center text-white">
      {/* Voile léger pour lisibilité */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Contenu du Hero */}
      <div className="relative z-10 px-6 max-w-4xl">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
        >
          OSEZ AGIR POUR LE CHANGEMENT
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-green-50 drop-shadow-md"
        >
          Ensemble, bâtissons une gouvernance juste, moderne et responsable.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link
            href="/adhesion"
            className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Adhérer au FORDAC
          </Link>
        </motion.div>
      </div>

      {/* Motif subtil en fond */}
      <div className="absolute inset-0 opacity-10 bg-[url('/textures/pattern.svg')] bg-repeat"></div>
    </section>
  );
}
