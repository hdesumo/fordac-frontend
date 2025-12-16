"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function JoinUsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-primary text-light rounded-2xl shadow-xl p-10 text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Rejoignez le FORDAC aujourd’hui</h2>
      <p className="mb-6 text-secondary">
        Ensemble, construisons un avenir fondé sur la démocratie, la transparence et l’action
        citoyenne.
      </p>
      <Link
        href="/adherer"
        className="inline-block bg-light text-primary font-semibold px-6 py-3 rounded-xl hover:bg-secondary transition"
      >
        Adhérer maintenant
      </Link>
    </motion.div>
  );
}
