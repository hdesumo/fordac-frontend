"use client";

import { useEffect, useState } from "react";

interface Event {
  id: number;
  title: string;
  description?: string;
  location?: string;
  start_date: string;
  end_date?: string;
}

export default function Agenda() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("https://api.fordac-connect.org/api/events");
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error("Erreur chargement événements:", error);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-green-600"></div>
        <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
          Chargement de l’agenda...
        </span>
      </div>
    );
  }

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-400 flex items-center">
        📅 Agenda / Événements à venir
      </h2>

      {events.length > 0 ? (
        <ul className="space-y-4">
          {events.map((event) => (
            <li
              key={event.id}
              className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-lg font-bold text-green-700 dark:text-green-300">
                {event.title}
              </h3>
              {event.location && (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  📍 {event.location}
                </p>
              )}
              <p className="text-sm text-gray-600 dark:text-gray-400">
                🗓️{" "}
                {new Date(event.start_date).toLocaleDateString("fr-FR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              {event.description && (
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-snug">
                  {event.description.length > 120
                    ? event.description.slice(0, 120) + "..."
                    : event.description}
                </p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 dark:text-gray-400 italic">
          Aucun événement à venir pour le moment.
        </p>
      )}
    </section>
  );
}
