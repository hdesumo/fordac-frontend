"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Message envoyé :", formData);
    // 🚀 Future intégration : POST /contact (API backend)
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col">
      {/* ===============================
           🟩 En-tête
         =============================== */}
      <section className="bg-gradient-to-b from-fordacGreen to-fordacDark text-white py-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nous Contacter
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg text-gray-100"
        >
          Vous souhaitez en savoir plus sur le FORDAC ou rejoindre nos initiatives ?  
          Contactez-nous par ce formulaire ou via nos coordonnées officielles ci-dessous.
        </motion.p>
      </section>

      {/* ===============================
           📨 Formulaire de contact
         =============================== */}
      <main className="flex-grow flex flex-col md:flex-row items-start justify-center gap-10 py-16 px-6 md:px-12">
        {/* Bloc gauche : formulaire */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-lg"
        >
          <h2 className="text-2xl font-bold text-center text-fordacGreen mb-8">
            Envoyer un message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Nom complet
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-3 py-2 focus:ring-2 focus:ring-fordacGold"
                placeholder="Entrez votre nom"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Adresse e-mail
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-3 py-2 focus:ring-2 focus:ring-fordacGold"
                placeholder="exemple@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Sujet
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-3 py-2 focus:ring-2 focus:ring-fordacGold"
                placeholder="Sujet de votre message"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-3 py-2 focus:ring-2 focus:ring-fordacGold"
                placeholder="Écrivez votre message ici..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-fordacGold text-fordacDark font-semibold py-3 rounded-md hover:bg-yellow-400 transition-colors"
            >
              Envoyer le message
            </button>
          </form>
        </motion.div>

        {/* Bloc droit : coordonnées */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center md:text-left max-w-sm"
        >
          <h3 className="text-xl font-semibold text-fordacGold mb-4">
            Coordonnées du FORDAC
          </h3>

          <p className="flex items-center justify-center md:justify-start mb-3">
            <MapPin className="text-fordacGold w-5 h-5 mr-2" />
            <span>Siège national, Douala - Cameroun</span>
          </p>

          <p className="flex items-center justify-center md:justify-start mb-3">
            <Phone className="text-fordacGold w-5 h-5 mr-2" />
            <span>+237 6 90 00 00 00</span>
          </p>

          <p className="flex items-center justify-center md:justify-start">
            <Mail className="text-fordacGold w-5 h-5 mr-2" />
            <span>contact@fordac-connect.org</span>
          </p>

          <p className="mt-8 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Nos équipes sont disponibles pour répondre à vos préoccupations,
            recueillir vos suggestions et accompagner chaque citoyen dans sa
            démarche d’engagement.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
