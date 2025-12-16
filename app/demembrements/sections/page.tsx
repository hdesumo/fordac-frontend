"use client";

export default function SectionsPage() {
  return (
    <main className="min-h-screen bg-fordacDark text-white py-28 px-6">

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Les Sections du FORDAC
        </h1>

        <p className="text-white/80 text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
          Les Sections correspondent aux <strong>13 arrondissements du Moungo</strong>.  
          Elles constituent l’échelle territoriale essentielle de la mobilisation 
          et de l’action politique du FORDAC.
        </p>

        <p className="text-white/70 text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
          Chaque Section anime la vie militante locale, organise les réunions, 
          coordonne les sous-sections (quartiers) et assure la transmission 
          des directives de la Fédération.
        </p>
      </section>

      {/* CARTES DES SECTIONS */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {[
          "Nkongsamba 1er",
          "Nkongsamba 2e",
          "Nkongsamba 3e",
          "Bare-Bakem",
          "Loum",
          "Manjo",
          "Melong",
          "Mbanga",
          "Mombo",
          "Mouanko",
          "Nlonako",
          "Penja",
          "Santchou"
        ].map((arr, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 
                       hover:bg-white/20 transition shadow-xl"
          >
            <h3 className="text-xl font-bold">{arr}</h3>
          </div>
        ))}

      </section>
    </main>
  );
}
