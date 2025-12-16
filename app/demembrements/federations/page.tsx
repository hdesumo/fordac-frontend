"use client";

export default function FederationsPage() {
  return (
    <main className="min-h-screen bg-fordacDark text-white py-28 px-6">

      {/* HERO */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Les Fédérations du FORDAC
        </h1>

        <p className="text-white/80 text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
          Dans le département du Moungo, l’organisation du FORDAC repose 
          sur deux grands secteurs territoriaux : le <strong>Moungo Nord</strong>{" "}
          et le <strong>Moungo Sud</strong>.

        </p>

        <p className="text-white/70 text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
          Chaque secteur est coordonné par une Fédération, chargée de superviser 
          les sections (arrondissements), de coordonner la mobilisation, 
          et d’assurer la cohérence des actions du Parti sur l’ensemble du territoire.
        </p>
      </section>

      {/* CARTES */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 
                        hover:bg-white/20 transition shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Fédération du Moungo Nord</h3>
          <p className="text-white/80 leading-relaxed">
            Elle regroupe et coordonne les arrondissements situés dans la partie 
            septentrionale du Moungo.  
            Son rôle est de consolider la présence du FORDAC, de mobiliser 
            les structures de base et de superviser les initiatives locales.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 
                        hover:bg-white/20 transition shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Fédération du Moungo Sud</h3>
          <p className="text-white/80 leading-relaxed">
            Elle supervise les arrondissements du sud du département.  
            Elle veille à la coordination des sections, au suivi des sous-sections 
            et cellules, et à la mise en œuvre de la vision nationale du Parti 
            dans le contexte local.
          </p>
        </div>

      </section>
    </main>
  );
}
