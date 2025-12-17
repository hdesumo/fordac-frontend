"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[75vh] min-h-[520px] overflow-hidden">

      {/* IMAGE DE FOND */}
      <Image
        src="/images/president.png"
        alt="Président du FORDAC"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY POUR LISIBILITÉ */}
      <div className="absolute inset-0 bg-[#0f3e20]/70"></div>

      {/* CONTENU */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="max-w-4xl text-center text-white">

          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
          >
            FORDAC Connect
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-white/90"
          >
            Forces Démocratiques pour l’Action et le Changement —  
            un parti citoyen engagé pour une gouvernance centrée sur l’action,
            la justice sociale, l’intégrité et le respect de notre bien commun :
            le Cameroun.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex justify-center gap-4"
          >
            <Link
              href="/adhesion"
              className="px-8 py-4 bg-white text-[#0f3e20] rounded-xl text-lg font-semibold
                         hover:bg-[#4ade80] transition shadow-lg"
            >
              Adhérez maintenant
            </Link>

            <Link
              href="/message-president"
              className="px-8 py-4 border border-white/70 text-white rounded-xl text-lg font-semibold
                         hover:bg-white/10 transition"
            >
              Message du Président
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
