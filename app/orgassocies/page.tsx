"use client";

export default function OrganesAssociesPage() {
  return (
    <main className="min-h-screen bg-fordacDark text-white py-28 px-6">

      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Organes Associés du FORDAC
        </h1>

        <p className="text-white/80 text-lg md:text-xl mt-6 max-w-3xl mx-auto leading-relaxed">
          Les organes associés complètent l’action du FORDAC 
          par des initiatives citoyennes, sociales, éducatives et médias.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {[
          { title: "Presse de la Nation", desc: "L’organe médiatique officiel du FORDAC." },
          { title: "Mutuelle du FORDAC", desc: "Solidarité, entraide et appui social." },
          { title: "Académie Politique", desc: "Formation civique et leadership politique." },
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
