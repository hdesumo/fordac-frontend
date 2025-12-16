"use client";

export default function CellulesPage() {
  return (
    <main className="min-h-screen bg-fordacDark text-white py-28 px-6">

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Les Cellules du FORDAC
        </h1>

        <p className="text-white/80 text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
          Les Cellules constituent l’échelon le plus proche des populations, 
          au cœur des villages, quartiers, blocs et zones de vie du Moungo.
        </p>

        <p className="text-white/70 text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
          Elles assurent la mobilisation directe, le relais des informations, 
          et la continuité de l’action militante sur le terrain.
        </p>
      </section>

      {/* CARTES */}
      <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {[
          "Cellules Urbaines",
          "Cellules Rurales",
          "Cellules Communautaires",
          "Cellules Professionnelles"
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 
                       hover:bg-white/20 transition shadow-xl"
          >
            <h3 className="text-xl font-bold mb-2">{item}</h3>
            <p className="text-white/80 leading-relaxed">
              Espace de proximité, d’organisation et de mobilisation active.
            </p>
          </div>
        ))}
      </section>

    </main>
  );
}
