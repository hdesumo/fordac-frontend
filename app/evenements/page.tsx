"use client";

import { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import api from "../../lib/api";

// Initialisation du calendrier avec moment.js (langue FR)
const localizer = momentLocalizer(moment);
moment.locale("fr");

// Définition du type d'événement
interface EventItem {
  id: number;
  title: string;
  description?: string;
  start: Date;
  end: Date;
  location?: string;
}

export default function EvenementsPage() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/events`
        );

        if (!res.ok)
          throw new Error("Erreur lors du chargement des événements");

        const data = await res.json();

        // Conversion des dates au format Date
        const formatted = data.map((event: any) => ({
          id: event.id,
          title: event.title,
          description: event.description,
          start: new Date(event.start_date),
          end: new Date(event.end_date),
          location: event.location,
        }));

        setEvents(formatted);
      } catch (err: any) {
        setError(err.message || "Erreur inconnue");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
          Agenda & Événements à venir
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          Retrouvez ici les activités officielles, conférences, rencontres et mobilisations
          organisées par le <strong>FORDAC</strong> (Forces Démocratiques pour l’Action et le
          Changement) à travers le pays.
        </p>

        {loading && (
          <p className="text-center text-gray-500">Chargement du calendrier...</p>
        )}
        {error && (
          <p className="text-center text-red-600 font-medium">{error}</p>
        )}

        {!loading && !error && (
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-inner">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 600 }}
              views={["month", "agenda"]}
              messages={{
                next: "Suivant",
                previous: "Précédent",
                today: "Aujourd’hui",
                month: "Mois",
                agenda: "Agenda",
                noEventsInRange: "Aucun événement prévu sur cette période.",
              }}
              eventPropGetter={() => ({
                style: {
                  backgroundColor: "#007A33",
                  color: "#fff",
                  borderRadius: "8px",
                  border: "none",
                  padding: "4px",
                },
              })}
              tooltipAccessor={(event: EventItem) =>
                `${event.title} – ${event.location || ""}\n${event.description || ""}`
              }
            />
          </div>
        )}
      </div>
    </section>
  );
}
