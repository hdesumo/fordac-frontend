"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* 🌄 Image de fond animée */}
      <motion.img
        src="/hero/hero1.jpg"
        alt="FORDAC Connect"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dégradé sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🏛️ Contenu principal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="relative z-10 text-center text-white px-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg text-glow">
          FORDAC Connect
        </h1>
        <p className="text-lg md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
          La plateforme citoyenne pour une démocratie participative,
          transparente et proche du peuple.
        </p>
      </motion.div>

      {/* ✒️ Citation présidentielle déplacée en bas à droite */}
      <motion.blockquote
        initial={{ opacity: 0, x: 50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="absolute bottom-6 right-6 bg-primary/90 text-white p-5 rounded-xl max-w-sm text-sm italic shadow-lg border-l-4 border-secondary"
      >
        « La technologie n’a de sens que lorsqu’elle sert la démocratie,
        renforce la transparence et rapproche le citoyen de l’action publique. »
        <br />
        <span className="block mt-3 text-right font-semibold text-secondary">
          — Romaric Yebchue Semenou
        </span>
        <span className="block text-right text-xs text-white/80">
          Président national
        </span>
      </motion.blockquote>
    </section>
  );
}
