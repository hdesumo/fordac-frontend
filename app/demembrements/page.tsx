"use client";

import Link from "next/link";

export default function DemembrementsPage() {
  return (
    <main className="min-h-screen bg-fordacDark text-white py-28 px-6">

      {/* HERO INTRO */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Les Démembrements du FORDAC
        </h1>

        <p className="text-white/80 text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
          Dans le département du Moungo, le FORDAC a adopté une organisation 
          territoriale moderne et efficace, structurée autour de deux grands 
          secteurs : le <strong>Moungo Nord</strong> et le <strong>Moungo Sud</strong>. 
          Chaque secteur est coordonné par une Fédération, qui supervise les 
          sections (arrondissements), les sous-sections (quartiers) et les 
          cellules (niveau local).
        </p>

        <p className="text-white/70 text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
          Ce modèle organise la mobilisation citoyenne, renforce la proximité 
          avec les populations et permet une implantation harmonieuse dans 
          l’ensemble du territoire.
        </p>
      </section>

      {/* CARTES D'ACCES */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        <Link
          href="/demembrements/federations"
          className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 
                     hover:bg-white/20 transition shadow-xl block"
        >
          <h3 className="text-2xl font-bold mb-3">Fédérations</h3>
          <p className="text-white/80 leading-relaxed text-sm">
            Les deux pôles du Moungo : Nord et Sud. Elles coordonnent l’action 
            politique et la mobilisation de l’ensemble des arrondissements.
          </p>
        </Link>

        <Link
          href="/demembrements/sections"
          className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 
                     hover:bg-white/20 transition shadow-xl block"
        >
          <h3 className="text-2xl font-bold mb-3">Sections</h3>
          <p className="text-white/80 leading-relaxed text-sm">
            Les sections correspondent aux 13 arrondissements du Moungo. 
            Elles constituent le socle territorial de l’organisation.
          </p>
        </Link>

        <Link
          href="/demembrements/sous-sections"
          className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 
                     hover:bg-white/20 transition shadow-xl block"
        >
          <h3 className="text-2xl font-bold mb-3">Sous-sections</h3>
          <p className="text-white/80 leading-relaxed text-sm">
            Elles opèrent au niveau des quartiers et assurent la cohésion 
            et l’activation des cellules locales.
          </p>
        </Link>

        <Link
          href="/demembrements/cellules"
          className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 
                     hover:bg-white/20 transition shadow-xl block"
        >
          <h3 className="text-2xl font-bold mb-3">Cellules</h3>
          <p className="text-white/80 leading-relaxed text-sm">
            Le niveau le plus proche des populations, pivot de la proximité 
            et de la participation citoyenne.
          </p>
        </Link>
      </section>
    </main>
  );
}
