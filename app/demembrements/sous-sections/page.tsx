"use client";

export default function SousSectionsPage() {
  return (
    <main className="min-h-screen bg-fordacDark text-white py-28 px-6">

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Les Sous-sections du FORDAC
        </h1>

        <p className="text-white/80 text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
          Les Sous-sections représentent l’organisation du FORDAC 
          au <strong>niveau des quartiers</strong>.  
        </p>

        <p className="text-white/70 text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
          Elles jouent un rôle essentiel : assurer la proximité, coordonner les 
          cellules, mobiliser les habitants et garantir la présence active du 
          parti dans chaque zone de vie.
        </p>
      </section>

      {/* EXEMPLES DE QUARTIERS / STRUCTURE */}
      <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

        {[
          "Quartiers urbains",
          "Bloc villages",
          "Zones périurbaines",
          "Communautés rurales"
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 
                       hover:bg-white/20 transition shadow-xl"
          >
            <h3 className="text-xl font-bold mb-2">{item}</h3>
            <p className="text-white/80 leading-relaxed">
              Organisation, mobilisation et relais des cellules locales.
            </p>
          </div>
        ))}

      </section>
    </main>
  );
}
