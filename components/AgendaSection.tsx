"use client";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

export default function AgendaSection() {
  const events = [
    {
      id: 1,
      date: "15 novembre 2025",
      title: "Rencontre régionale du Littoral",
      location: "Nkongsamba",
      description:
        "Réunion stratégique sur la mobilisation locale et la formation des jeunes militants."
    },
    {
      id: 2,
      date: "25 novembre 2025",
      title: "Atelier numérique citoyen",
      location: "Douala",
      description:
        "Présentation de la plateforme FORDAC Connect et formation sur la transparence numérique."
    },
    {
      id: 3,
      date: "10 décembre 2025",
      title: "Journée nationale de la démocratie participative",
      location: "Yaoundé",
      description:
        "Forum national réunissant acteurs politiques, société civile et citoyens engagés."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-primary mb-12 text-center flex items-center justify-center gap-3">
        <CalendarDays className="text-secondary" size={36} /> Agenda / Événements à venir
      </h2>

      <div className="max-w-6xl mx-auto px-6 space-y-8">
        {events.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-neutral rounded-2xl p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-primary">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{event.date} • {event.location}</p>
                <p className="text-dark leading-relaxed">{event.description}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="inline-block bg-secondary text-white text-sm font-medium px-4 py-2 rounded-xl shadow-md">
                  À venir
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
