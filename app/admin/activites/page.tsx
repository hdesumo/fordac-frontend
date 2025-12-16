"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ActivitesPage() {
  const activites = [
    {
      titre: "Rencontre citoyenne à Njombé",
      image: "/images/hero1.jpeg",
      date: "5 novembre 2025",
      description:
        "Une rencontre placée sous le signe du dialogue et de la participation citoyenne, autour des valeurs du FORDAC.",
    },
    {
      titre: "Journée de solidarité dans le Moungo",
      image: "/images/hero2.jpeg",
      date: "21 octobre 2025",
      description:
        "Distribution d’aides communautaires et sensibilisation sur la cohésion sociale.",
    },
    {
      titre: "Atelier des jeunes militants à Loum",
      image: "/images/hero3.jpeg",
      date: "12 septembre 2025",
      description:
        "Formation sur le leadership politique et la gestion des projets citoyens.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20 px-4">
      <section className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-green-700 dark:text-green-400 mb-14"
        >
          Activités du Parti
        </motion.h1>

        <div className="grid md:grid-cols-3 gap-10">
          {activites.map((act, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <Image
                src={act.image}
                alt={act.titre}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-green-700 mb-2">
                  {act.titre}
                </h2>
                <p className="text-sm text-gray-500 mb-3">{act.date}</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {act.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
