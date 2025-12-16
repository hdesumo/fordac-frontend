"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PresidentSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-900 via-green-800 to-green-700 py-20 text-white">
      <div className="absolute inset-0 bg-[url('/textures/pattern.svg')] opacity-10"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Photo du président */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <Image
            src="/president.png"
            alt="Président du FORDAC"
            width={380}
            height={380}
            className="rounded-2xl shadow-2xl border-4 border-white object-cover"
            priority
          />
        </motion.div>

        {/* Citation */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed mb-8">
            “Servir le peuple, c’est croire en sa force et agir pour son avenir.”
          </blockquote>
          <p className="text-lg font-semibold tracking-wide uppercase">
            — Président du FORDAC
          </p>
        </motion.div>
      </div>
    </section>
  );
}
