"use client";

import { useState } from "react";
import Image from "next/image";
import MediaModal from "@/components/MediaModal";

export default function HomePage() {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  return (
    <main className="w-full overflow-x-hidden">

      {/* ===========================
          HERO PRINCIPAL — Vert Foncé
      ============================ */}
      <section className="w-full bg-fordacDark text-white pt-40 md:pt-40 pb-28 md:pb-36 text-center px-4 flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          FORDAC Connect
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
          Forces Démocratiques pour l’Action et le Changement —
          un parti citoyen engagé pour une gouvernance centrée sur l’action,
          la justice sociale, l'intégrité et le respect de notre bien commun
          qui est notre cher pays le Cameroun.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="/adhesion"
            className="px-8 py-4 bg-white text-fordacDark rounded-xl text-lg font-semibold 
              hover:bg-fordacLight transition border border-white/20 shadow-lg"
          >
            Adhérez maintenant
          </a>
        </div>
      </section>

      {/* ===========================
          SECTION PRÉSIDENT
      ============================ */}
      <section className="py-24 bg-[#E8F3EC] px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <Image
            src="/images/president.png"
            alt="Président du FORDAC"
            width={520}
            height={520}
            className="rounded-xl shadow-xl object-cover w-full h-auto max-h-[320px] md:max-h-none"
          />

          <div>
            <h2 className="text-4xl font-extrabold text-fordacGreen">
              Le Président du FORDAC
            </h2>

            <h3 className="text-2xl font-semibold text-gray-800 mt-4">
              Romaric YEPCHUÉ SEMENOU
            </h3>

            <p className="mt-6 text-gray-700 leading-relaxed text-lg">
              Sous l’impulsion du président Romaric Yebchue Semenou,
              le FORDAC incarne une vision tournée vers le progrès, la solidarité,
              la responsabilité collective, le respect mutuel, le bien-être pour tous
              et la dignité citoyenne...
            </p>
          </div>
        </div>
      </section>

      {/* ===========================
          MESSAGE DU PRÉSIDENT
      ============================ */}
      <section className="py-24 bg-[#F7F7F7] border-t border-gray-200 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-fordacGreen">
            Message du Président
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mt-8">
            Chers frères et sœurs du Moungo et du Cameroun...
          </p>

          <a
            href="/message-president"
            className="inline-block mt-10 px-6 py-3 text-fordacGreen border border-fordacGreen 
              rounded-lg font-medium hover:bg-fordacGreen hover:text-white transition"
          >
            Lire le message complet
          </a>
        </div>
      </section>

      {/* ===========================
          LEÇON #1
      ============================ */}
      <section className="py-24 bg-[#E8F3EC] px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <Image
            src="/images/hero1.jpeg"
            width={500}
            height={600}
            alt="Leçon du Sage KD2"
            className="rounded-xl shadow-xl object-cover w-full h-auto max-h-[320px] md:max-h-none"
          />

          <div>
            <h3 className="text-3xl font-extrabold text-fordacGreen">
              Leçon du Sage KD2
            </h3>

            <p className="mt-6 text-gray-700 leading-relaxed text-lg">
              Le Sage KD2 n’enseignait pas par les mots mais par l’exemple...
            </p>
          </div>
        </div>
      </section>

      {/* ===========================
          LEÇON #2
      ============================ */}
      <section className="py-24 bg-[#F7F7F7] px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <h3 className="text-3xl font-extrabold text-fordacGreen">
              Célébrez vos victoires
            </h3>

            <p className="mt-6 text-gray-700 leading-relaxed text-lg">
              La vie est faite de petites conquêtes...
            </p>
          </div>

          <Image
            src="/images/hero2.jpeg"
            width={500}
            height={600}
            alt="Célébration"
            className="rounded-xl shadow-xl object-cover w-full h-auto max-h-[320px] md:max-h-none"
          />
        </div>
      </section>

      {/* ===========================
          LEÇON #3
      ============================ */}
      <section className="py-24 bg-[#E8F3EC] px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <Image
            src="/images/hero3.jpeg"
            width={500}
            height={600}
            alt="Osez penser, osez agir"
            className="rounded-xl shadow-xl object-cover w-full h-auto max-h-[320px] md:max-h-none"
          />

          <div>
            <h3 className="text-3xl font-extrabold text-fordacGreen">
              Osez penser. Osez agir.
            </h3>

            <p className="mt-6 text-gray-700 leading-relaxed text-lg">
              La pensée sans action n’est qu’un rêve...
            </p>
          </div>
        </div>
      </section>

      {/* ===========================
          GALERIE PHOTOS
      ============================ */}
      <section className="py-24 bg-[#F7F7F7] px-4">
        <h2 className="text-4xl font-extrabold text-center text-fordacGreen mb-16">
          Galerie d’images
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["photo1.jpg", "photo2.jpg", "photo3.jpg"].map((photo) => (
            <div
              key={photo}
              className="cursor-pointer rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition"
              onClick={() =>
                setSelectedMedia({ type: "image", src: `/galerie/photos/${photo}` })
              }
            >
              <Image
                src={`/galerie/photos/${photo}`}
                alt="Galerie FORDAC"
                width={600}
                height={400}
                className="object-cover w-full h-auto max-h-[260px] md:max-h-none"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ===========================
          GALERIE VIDEOS
      ============================ */}
      <section className="py-24 bg-[#E8F3EC] px-4">
        <h2 className="text-4xl font-extrabold text-center text-fordacGreen mb-16">
          Galerie vidéos
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="cursor-pointer rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition"
              onClick={() =>
                setSelectedMedia({
                  type: "video",
                  src: `/galerie/videos/video${i}.mp4`,
                })
              }
            >
              <video
                src={`/galerie/videos/video${i}.mp4`}
                className="object-cover w-full h-auto max-h-[260px] md:max-h-none"
                muted
                controls
                preload="metadata"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ===========================
          SECTION ADHESION
      ============================ */}
      <section className="py-20 md:py-28 bg-fordacDark text-white text-center px-4">
        <h2 className="text-4xl font-extrabold mb-6">
          Rejoignez le FORDAC
        </h2>

        <p className="text-xl max-w-3xl mx-auto mb-12 leading-relaxed opacity-90">
          Votre engagement compte. Ensemble, bâtissons une organisation responsable...
        </p>

        <a
          href="/adhesion"
          className="px-10 py-4 bg-white text-fordacDark rounded-lg text-lg font-semibold 
            hover:bg-fordacLight transition border border-white/20 shadow-lg"
        >
          Formulaire d’adhésion
        </a>
      </section>

      {selectedMedia && (
        <MediaModal media={selectedMedia} onClose={() => setSelectedMedia(null)} />
      )}
    </main>
  );
}
