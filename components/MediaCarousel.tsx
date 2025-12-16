"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function MediaCarousel() {
  const [active, setActive] = useState(0);
  const [type, setType] = useState<"photos" | "videos">("photos");

  // Tu peux ajuster les fichiers ici
  const photos = ["/photos/event1.jpg", "/photos/event2.jpg", "/photos/event3.jpg"];
  const videos = ["/videos/clip1.mp4", "/videos/clip2.mp4"];

  const items = type === "photos" ? photos : videos;

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [items]);

  return (
    <section className="relative bg-green-700 py-16 px-4 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Espace multimédia du FORDAC
      </h2>

      {/* Sélecteur */}
      <div className="flex justify-center gap-6 mb-6">
        <button
          onClick={() => setType("photos")}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            type === "photos" ? "bg-white text-green-800" : "bg-green-800 hover:bg-green-600"
          }`}
        >
          📸 Photos
        </button>
        <button
          onClick={() => setType("videos")}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            type === "videos" ? "bg-white text-green-800" : "bg-green-800 hover:bg-green-600"
          }`}
        >
          🎥 Vidéos
        </button>
      </div>

      {/* Carrousel */}
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-lg">
        <AnimatePresence mode="wait">
          {type === "photos" ? (
            <motion.div
              key={photos[active]}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="relative h-[480px]"
            >
              <Image
                src={photos[active]}
                alt={`Photo ${active + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ) : (
            <motion.video
              key={videos[active]}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              src={videos[active]}
              className="w-full h-[480px] object-cover rounded-2xl"
              autoPlay
              muted
              loop
            />
          )}
        </AnimatePresence>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === active ? "bg-white" : "bg-green-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
