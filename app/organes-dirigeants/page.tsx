"use client";

export default function OrganesDirigeantsPage() {
  return (
    <main className="min-h-screen bg-fordacDark text-white py-28 px-6">

      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Organes Dirigeants du FORDAC
        </h1>

        <p className="text-white/80 text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
          Les organes dirigeants du FORDAC assurent la vision, 
          l’orientation stratégique et la gouvernance globale du parti.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {[
          { title: "Présidence du Parti", desc: "Direction générale et vision stratégique." },
          { title: "Bureau Politique", desc: "Décisions politiques majeures et suivi des actions." },
          { title: "Comité Exécutif", desc: "Application des résolutions et coordination opérationnelle." },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20
                       hover:bg-white/20 transition shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-white/80 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
