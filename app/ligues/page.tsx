"use client";

import Link from "next/link";

export default function LiguesPage() {
  return (
    <main className="min-h-screen bg-fordacDark text-white py-28 px-6">

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Les Ligues du FORDAC
        </h1>

        <p className="text-white/80 text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
          Les Ligues regroupent les forces vives du FORDAC : jeunesse, femmes,
          professionnels et experts du développement. Elles dynamisent
          la participation politique et renforcent la cohésion interne du Parti.
        </p>
      </section>

      {/* LISTE DES LIGUES – Sous-menus réels */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {[
          {
            title: "Ligue des Jeunes",
            link: "/ligues/jeunes",
            desc: "Mobilisation citoyenne, formation civique et leadership politique de la jeunesse.",
          },
          {
            title: "Ligue des Femmes",
            link: "/ligues/femmes",
            desc: "Engagement féminin, représentation, promotion des droits et leadership des femmes.",
          },
          {
            title: "Ligue des Experts",
            link: "/ligues/experts",
            desc: "Professionnels de divers secteurs apportant analyse, stratégie et expertise politique.",
          },
        ].map((item, i) => (
          <Link
            key={i}
            href={item.link}
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 
                       hover:bg-white/20 transition shadow-xl block"
          >
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-white/80 leading-relaxed mb-6">{item.desc}</p>

            <span className="text-fordacLight font-semibold">
              En savoir plus →
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
