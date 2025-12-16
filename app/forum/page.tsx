"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ForumIntroPage() {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("memberToken");
    setIsLogged(!!token);
  }, []);

  const handleAccess = () => {
    if (!isLogged) {
      router.push("/login?redirect=forum/espace");
      return;
    }
    router.push("/forum/espace");
  };

  return (
    <div className="w-full bg-white">

      {/* HERO – Identité Forum */}
      <section className="w-full bg-[#166534] py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
          Forum des Militants
        </h1>
        <p className="text-white/90 mt-4 text-lg max-w-2xl mx-auto">
          Un espace d’échanges internes réservé aux membres engagés du FORDAC.
        </p>
      </section>

      {/* CONTENU PRINCIPAL */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* COLONNE TEXTE */}
        <div>
          <h2 className="text-3xl font-bold text-[#166534] mb-4">
            Bienvenue dans l’espace officiel de discussion du FORDAC
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            Ce forum constitue le cadre d’expression interne pour les militants.
            C’est un lieu où se construisent les idées, les analyses et les
            propositions qui nourrissent l’action politique du FORDAC sur le terrain.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            L’accès est strictement réservé aux membres connectés afin de
            garantir la confidentialité, la cohésion et la discipline militante.
          </p>

          {/* CTA PRINCIPAL */}
          <button
            onClick={handleAccess}
            className="inline-block mt-10 bg-[#166534] hover:bg-[#0f4a2c] 
                       text-white font-semibold px-8 py-3 rounded-md shadow-md transition w-full md:w-auto"
          >
            Accéder au Forum
          </button>

          {/* CTA SECONDAIRE */}
          {!isLogged && (
            <div className="mt-6">
              <Link
                href="/adhesion"
                className="inline-block bg-orange-600 hover:bg-orange-700 
                           text-white font-semibold px-8 py-3 rounded-md shadow-sm transition w-full md:w-auto"
              >
                Adhérez maintenant
              </Link>
              <p className="text-sm text-gray-600 mt-3">
                L’adhésion vous permet d’accéder automatiquement au Forum des Militants.
              </p>
            </div>
          )}
        </div>

        {/* COLONNE ILLUSTRATION */}
        <div className="w-full flex justify-center">
          <Image
            src="/forum/intro.png"
            alt="Illustration Forum des Militants"
            width={650}
            height={450}
            className="rounded-xl shadow-lg"
            priority
          />
        </div>
      </section>

      {/* SECTION INFO */}
      <section className="bg-[#E8F3EC] py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-[#166534] mb-4">
            Un espace sécurisé, responsable et constructif
          </h3>

          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Le FORDAC encourage un débat d’idées discipliné, respectueux et pleinement engagé.
            Dans cet espace, les militants collaborent, proposent, analysent, critiquent
            constructivement et participent activement à la vie interne du Parti.
            <br /><br />
            Chaque message contribue à renforcer l’unité, la cohésion et la vision
            stratégique du Mouvement sur l’ensemble du territoire.
          </p>
        </div>
      </section>

    </div>
  );
}
