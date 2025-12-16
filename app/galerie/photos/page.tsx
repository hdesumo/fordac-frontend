"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function GaleriePhotosPage() {
  const photos = [
    { src: "/galerie/photos/photo1.jpg", caption: "Cérémonie d’ouverture à Njombé-Penja" },
    { src: "/galerie/photos/photo2.jpg", caption: "Rencontre du comité exécutif" },
    { src: "/galerie/photos/photo3.jpg", caption: "Séance de sensibilisation communautaire" },
    { src: "/galerie/photos/photo4.jpg", caption: "Réunion stratégique régionale" },
    { src: "/galerie/photos/photo5.jpg", caption: "Mobilisation citoyenne à Douala" },
    { src: "/galerie/photos/photo6.jpg", caption: "Visite du président Romaric YEBCHUÉ SEMENOU" },
    { src: "/galerie/photos/photo7.jpg", caption: "Formation des jeunes militants" },
    { src: "/galerie/photos/photo8.jpg", caption: "Conférence de presse du FORDAC" },
    { src: "/galerie/photos/photo9.jpg", caption: "Cérémonie de clôture des activités 2025" },
  ];

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (currentIndex === null) return;
    if (e.key === "ArrowRight") {
      setCurrentIndex((prev) => (prev! + 1) % photos.length);
    } else if (e.key === "ArrowLeft") {
      setCurrentIndex((prev) => (prev! - 1 + photos.length) % photos.length);
    } else if (e.key === "Escape") {
      setCurrentIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-emerald-800 mb-12">
          Galerie Photos du Parti
        </h1>

        {/* Grille des photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                width={400}
                height={250}
                className="object-cover w-full h-64"
              />
              <p className="text-center text-sm mt-2 text-gray-700 dark:text-gray-300 font-medium">
                {photo.caption}
              </p>
            </div>
          ))}
        </div>

        {/* Bouton retour */}
        <div className="text-center mt-10">
          <Link
            href="/"
            className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            ← Retour à l’accueil
          </Link>
        </div>
      </div>

      {/* Modal d’aperçu */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setCurrentIndex(null)}
        >
          <div className="relative max-w-4xl w-full mx-4 text-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setCurrentIndex(null)}
              className="absolute top-3 right-3 text-white text-3xl font-bold"
            >
              ×
            </button>
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev! - 1 + photos.length) % photos.length)
              }
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold"
            >
              ‹
            </button>
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev! + 1) % photos.length)
              }
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold"
            >
              ›
            </button>
            <Image
              src={photos[currentIndex].src}
              alt={photos[currentIndex].caption}
              width={1000}
              height={700}
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <p className="mt-4 text-white text-lg font-medium">
              {photos[currentIndex].caption}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
