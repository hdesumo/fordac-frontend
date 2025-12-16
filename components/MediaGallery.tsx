"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function MediaGallery() {
  const gallery = [
    // Photos
    { id: 1, type: "photo", src: "/hero/hero1.jpeg", caption: "Mobilisation à Loum" },
    { id: 2, type: "photo", src: "/hero/hero2.jpeg", caption: "Rencontre régionale du Littoral" },
    { id: 3, type: "photo", src: "/hero/hero3.jpeg", caption: "Espoir et unité nationale" },

    // Vidéos locales (REMPLACE ou AJOUTE selon tes besoins)
    { id: 4, type: "video-local", src: "/galerie/videos/video1.mp4", caption: "Discours du Président – Séquence 1" },
    { id: 5, type: "video-local", src: "/galerie/videos/video2.mp4", caption: "Séquence régionale – Littoral" },
    { id: 6, type: "video-local", src: "/galerie/videos/video3.mp4", caption: "Mobilisation des jeunes" },

    // (Optionnel) Vidéo YouTube
    // { id: 7, type: "video-yt", src: "https://www.youtube.com/embed/XXXX", caption: "Discours public" },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % gallery.length);
  const prev = () => setIndex((i) => (i - 1 + gallery.length) % gallery.length);

  const item = gallery[index];

  return (
    <section className="relative py-20 bg-[#f5f8f6] dark:bg-[#0d1a10] text-center overflow-hidden">
      <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-12">
        Galerie photos & vidéos
      </h2>

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl shadow-xl overflow-hidden bg-white dark:bg-[#122012]"
        >
          {/* 👉 PHOTOS */}
          {item.type === "photo" && (
            <img
              src={item.src}
              alt={item.caption}
              className="w-full h-[500px] object-cover"
            />
          )}

          {/* 👉 VIDEOS LOCALES */}
          {item.type === "video-local" && (
            <video
              src={item.src}
              controls
              preload="metadata"
              className="w-full h-[500px] object-cover bg-black"
            />
          )}

          {/* 👉 VIDEOS YOUTUBE */}
          {item.type === "video-yt" && (
            <iframe
              className="w-full h-[500px]"
              src={item.src}
              title={item.caption}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </motion.div>

        <p className="mt-6 text-gray-700 dark:text-gray-300 text-base italic">
          {item.caption}
        </p>

        {/* Navigation */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={prev}
            className="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800 transition"
          >
            ◀ Précédent
          </button>
          <button
            onClick={next}
            className="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800 transition"
          >
            Suivant ▶
          </button>
        </div>
      </div>
    </section>
  );
}
