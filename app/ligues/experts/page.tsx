"use client";

export default function LigueExpertsPage() {
  return (
    <main className="min-h-screen bg-fordacDark text-white">

      {/* HEADER HARMONISÉ */}
      <header className="relative bg-[#064C32] py-20 px-6 overflow-hidden">
        {/* texture subtile */}
        <div className="absolute inset-0 opacity-10 bg-[url('/textures/pattern-grid.svg')] bg-cover"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Ligue des Experts
          </h1>
        </div>
      </header>

      {/* CONTENU ORIGINAL (inchangé) */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-10 leading-relaxed text-white/90">

        <p className="text-lg">
          La Ligue des Experts du FORDAC regroupe des professionnels issus de divers secteurs 
          (économie, santé, technologie, ingénierie, développement territorial, droit, etc.).  
          Elle constitue la force de proposition et d’évaluation du parti.
        </p>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">Missions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Apporter une expertise technique aux organes dirigeants.</li>
            <li>Élaborer et évaluer les politiques publiques proposées par le parti.</li>
            <li>Accompagner le déploiement des projets communautaires.</li>
            <li>Former et sensibiliser les militants aux enjeux de développement.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">Organisation interne</h2>
          <p>
            La Ligue des Experts fonctionne avec des pôles thématiques :  
            économie, agriculture, santé, infrastructures, innovation, finances publiques, etc.
          </p>
        </div>

        {/* FOOTER INTERNE */}
        <div className="p-6 bg-[#064C32] text-white rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Rejoindre la Ligue des Experts</h3>
          <p className="text-sm opacity-90">
            Tout professionnel adhérent au FORDAC peut intégrer cette Ligue, à condition 
            de justifier d’une expertise dans un domaine clé du développement.
          </p>
        </div>

      </section>
    </main>
  );
}
