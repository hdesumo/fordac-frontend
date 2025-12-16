"use client";
import { motion } from "framer-motion";
import { Lightbulb, Users, ShieldCheck } from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      icon: <Lightbulb size={40} className="text-secondary mb-4" />,
      title: "Innovation citoyenne",
      text: "FORDAC Connect s’appuie sur la technologie pour rapprocher le citoyen de l’action publique et promouvoir une gouvernance ouverte."
    },
    {
      icon: <Users size={40} className="text-secondary mb-4" />,
      title: "Engagement collectif",
      text: "Nous croyons à la force du dialogue, de la participation locale et du travail en réseau pour construire le changement."
    },
    {
      icon: <ShieldCheck size={40} className="text-secondary mb-4" />,
      title: "Intégrité et transparence",
      text: "Nos actions reposent sur des valeurs morales fortes : honnêteté, responsabilité et service de l’intérêt général."
    }
  ];

  return (
    <section className="py-20 bg-neutral">
      <h2 className="text-3xl font-bold text-primary mb-12 text-center">
        Nos valeurs & objectifs
      </h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {values.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition"
          >
            <div className="flex flex-col items-center">
              {v.icon}
              <h3 className="text-xl font-semibold mb-3 text-primary">{v.title}</h3>
              <p className="text-dark leading-relaxed">{v.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
