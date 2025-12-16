"use client";
import { motion } from "framer-motion";

export default function NewsSection() {
  const news = [
    {
      id: 1,
      title: "Rencontre citoyenne à Loum",
      date: "20 octobre 2025",
      summary:
        "Le président Romaric Yebchue Semenou a échangé avec les jeunes leaders du Moungo sur la participation politique locale."
    },
    {
      id: 2,
      title: "Campagne de sensibilisation à Nkongsamba",
      date: "10 octobre 2025",
      summary:
        "Une équipe FORDAC a mené une campagne sur la transparence électorale et la démocratie participative."
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">
        Actualités récentes
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {news.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{item.date}</p>
            <p className="text-dark">{item.summary}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
