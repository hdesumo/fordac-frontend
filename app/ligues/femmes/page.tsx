"use client";

export default function LigueFemmesPage() {
  return (
    <main className="min-h-screen bg-fordacDark text-white">

      {/* HEADER HARMONISÉ */}
      <header className="relative bg-[#064C32] py-20 px-6 overflow-hidden">
        {/* texture subtile */}
        <div className="absolute inset-0 opacity-10 bg-[url('/textures/pattern-grid.svg')] bg-cover"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Ligue des Femmes
          </h1>
        </div>
      </header>

      {/* CONTENU ORIGINAL (inchangé) */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-10 leading-relaxed text-white/90">

        <p className="text-lg">
          La Ligue des Femmes du FORDAC œuvre pour la participation accrue des femmes 
          à la vie politique, sociale et économique. Elle promeut l’égalité des chances et  
          le leadership féminin dans toutes les sphères du parti.
        </p>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">Missions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Promouvoir l’autonomisation et le leadership féminin.</li>
            <li>Encourager la participation active des femmes aux décisions politiques.</li>
            <li>Mettre en œuvre des initiatives communautaires et économiques ciblées.</li>
            <li>Représenter les préoccupations des femmes dans toutes les instances du parti.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">Organisation interne</h2>
          <p className="text-white/90">
            La Ligue des Femmes fonctionne selon la même architecture organisationnelle 
            que les autres structures du FORDAC : départementale, communale et locale.
          </p>
        </div>

        {/* FOOTER INTERNE */}
        <div className="p-6 bg-[#064C32] text-white rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Rejoindre la Ligue des Femmes</h3>
          <p className="text-sm opacity-90">
            Toute femme adhérente au FORDAC peut intégrer la Ligue des Femmes afin d’agir 
            pour la promotion du développement communautaire et du progrès social.
          </p>
        </div>

      </section>
    </main>
  );
}
