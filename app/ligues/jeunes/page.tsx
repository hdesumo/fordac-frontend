"use client";

export default function LigueJeunesPage() {
  return (
    <main className="min-h-screen bg-fordacDark text-white">

      {/* HEADER HARMONISÉ */}
      <header className="relative bg-[#064C32] py-20 px-6 overflow-hidden">
        {/* texture subtile */}
        <div className="absolute inset-0 opacity-10 bg-[url('/textures/pattern-grid.svg')] bg-cover"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Ligue des Jeunes
          </h1>
        </div>
      </header>

      {/* CONTENU ORIGINAL (inchangé) */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-10 leading-relaxed text-white/90">

        <p className="text-lg">
          La Ligue des Jeunes du FORDAC rassemble les militants âgés de 18 à 35 ans.
          Elle constitue un espace d’engagement et de formation politique
          pour la jeunesse, pilier essentiel du développement communautaire et de l’avenir du parti.
        </p>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">Missions</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Encourager l’implication citoyenne et la participation politique des jeunes.</li>
            <li>Développer des initiatives pour la formation et l’entrepreneuriat.</li>
            <li>Renforcer les capacités des jeunes militants.</li>
            <li>Constituer une pépinière de futurs cadres du parti.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">Organisation interne</h2>
          <p>
            La Ligue des Jeunes est structurée au niveau départemental,
            communal et dans les cellules. Elle travaille en synergie avec les organes dirigeants
            et les démembrements territoriaux du parti.
          </p>
        </div>

        {/* FOOTER INTERNE */}
        <div className="p-6 bg-[#064C32] text-white rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Rejoindre la Ligue des Jeunes</h3>
          <p className="text-sm opacity-90">
            Toute personne âgée de 18 à 35 ans et adhérente au FORDAC peut intégrer la Ligue
            et contribuer aux actions menées en faveur du développement du Moungo et du Cameroun.
          </p>
        </div>

      </section>
    </main>
  );
}
