"use client";

import { motion } from "framer-motion";

export default function AProposPage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* ===============================
          HERO SECTION
      =============================== */}
      <section className="bg-gradient-to-br from-fordacGreen to-fordacDark text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          À propos du{" "}
          <span className="text-fordacGold">
            FORDAC
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-100"
        >
          Les Forces Démocratiques pour l’Action et le Changement sont un
          mouvement politique citoyen engagé pour une gouvernance juste,
          moderne et profondément ancrée dans le progrès social.
        </motion.p>
      </section>

      {/* ===============================
          HISTOIRE / IDENTITÉ
      =============================== */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-fordacGreen text-center mb-12"
        >
          Identité & Fondements
        </motion.h2>

        <div className="bg-white rounded-xl shadow-md p-8 leading-relaxed text-lg">
          <p className="mb-6">
            Le FORDAC est un parti politique camerounais dont l’ambition est de
            reconstruire une nation fondée sur la participation citoyenne, 
            la démocratie interne, la justice sociale et l’équité territoriale.
          </p>

          <p className="mb-6">
            Inspiré par une vision moderne de la gouvernance, le FORDAC place
            l’action concrète au cœur de son projet. Il s’inscrit dans un
            mouvement national réformateur, proche des réalités des citoyens,
            engagé pour la transparence, le développement local et un État
            efficace.
          </p>
        </div>
      </section>

      {/* ===============================
          VISION & MISSION
      =============================== */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <h3 className="text-2xl font-semibold text-fordacGold mb-4">
                🌍 Vision
              </h3>
              <p className="leading-relaxed text-gray-700">
                Construire un Cameroun nouveau, démocratique et équitable, où
                chaque citoyen peut rêver, entreprendre et réussir dans un cadre
                juste, sécurisé et transparent.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <h3 className="text-2xl font-semibold text-fordacGold mb-4">
                🎯 Mission
              </h3>
              <p className="leading-relaxed text-gray-700">
                Promouvoir la participation citoyenne, renforcer la démocratie
                interne, proposer des alternatives politiques ambitieuses et 
                réalistes pour un développement durable et inclusif.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ===============================
          VALEURS
      =============================== */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-center text-fordacGreen mb-12"
        >
          Nos Valeurs Fondamentales
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {[
            {
              title: "Démocratie",
              text: "Une gouvernance transparente, participative, centrée sur le bien commun.",
            },
            {
              title: "Éthique",
              text: "L’intégrité et la responsabilité guident l’action quotidienne.",
            },
            {
              title: "Développement",
              text: "Une volonté d’investir dans l’humain, l’économie et les territoires.",
            },
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-white rounded-xl shadow-md p-8 text-center"
            >
              <h3 className="text-xl font-semibold text-fordacGold mb-3">
                {v.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{v.text}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ===============================
          SECTION FINALE — ADHÉSION
      =============================== */}
      <section className="py-16 bg-fordacGreen text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold mb-6"
        >
          Rejoignez un mouvement qui place l’action au cœur du changement
        </motion.h2>

        <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-100">
          Ensemble, construisons un Cameroun fort, juste et tourné vers
          l’avenir.
        </p>

        <a
          href="/adhesion"
          className="bg-fordacGold text-fordacDark font-semibold px-8 py-3 rounded-md hover:bg-yellow-400 transition"
        >
          Devenir Membre
        </a>
      </section>
    </div>
  );
}
