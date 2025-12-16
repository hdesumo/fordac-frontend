"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function GalerieVideosPage() {
  const videos = [
    { src: "/galerie/videos/video1.mp4", caption: "Discours du Président Romaric YEBCHUÉ SEMENOU" },
    { src: "/galerie/videos/video2.mp4", caption: "Cérémonie d’investiture régionale" },
    { src: "/galerie/videos/video3.mp4", caption: "Session de formation des cadres du parti" },
    { src: "/galerie/videos/video4.mp4", caption: "Rencontre citoyenne à Penja" },
    { src: "/galerie/videos/video5.mp4", caption: "Actions sociales et humanitaires du FORDAC" },
    { src: "/galerie/videos/video6.mp4", caption: "Assemblée générale du parti à Douala" },
  ];

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (currentIndex === null) return;
    if (e.key === "ArrowRight") {
      setCurrentIndex((prev) => (prev! + 1) % videos.length);
    } else if (e.key === "ArrowLeft") {
      setCurrentIndex((prev) => (prev! - 1 + videos.length) % videos.length);
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
          Galerie Vidéos du Parti
        </h1>

        {/* Grille de vidéos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {videos.map((video, index) => (
            <div
              key={index}
              className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
              onClick={() => setCurrentIndex(index)}
            >
              <video className="object-cover w-full h-64" preload="metadata" muted>
                <source src={`${video.src}#t=0.1`} type="video/mp4" />
              </video>
              <p className="text-center text-sm mt-2 text-gray-700 dark:text-gray-300 font-medium">
                {video.caption}
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

      {/* Modal vidéo */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setCurrentIndex(null)}
        >
          <div className="relative w-full max-w-5xl mx-4 text-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setCurrentIndex(null)}
              className="absolute top-3 right-3 text-white text-3xl font-bold"
            >
              ×
            </button>
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev! - 1 + videos.length) % videos.length)
              }
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold"
            >
              ‹
            </button>
            <button
              onClick={() =>
                setCurrentIndex((prev) => (prev! + 1) % videos.length)
              }
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold"
            >
              ›
            </button>
            <video
              src={videos[currentIndex].src}
              controls
              autoPlay
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <p className="mt-4 text-white text-lg font-medium">
              {videos[currentIndex].caption}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
