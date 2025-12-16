"use client";

export default function EthiquePage() {
  return (
    <main className="min-h-screen bg-fordacDark text-white">

      {/* HEADER HARMONISÉ */}
      <header className="relative bg-[#064C32] py-20 px-6 overflow-hidden">
        {/* Texture subtile */}
        <div className="absolute inset-0 opacity-10 bg-[url('/textures/pattern-grid.svg')] bg-cover"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Comité d’Éthique
          </h1>
        </div>
      </header>

      {/* CONTENU ORIGINAL — strictement inchangé */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-12 leading-relaxed text-white/90">

        {/* Introduction */}
        <p className="text-lg">
          Le Comité d’Éthique est l’organe chargé de veiller au respect des
          valeurs fondamentales du FORDAC.
        </p>

        {/* Rôle */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Rôle du Comité d’Éthique
          </h2>
          <p>
            Il veille à ce que toutes les actions du parti soient conformes à ses
            à ses statuts et à la morale politique républicaine.
            Le Comité d’Éthique s’assure également que les droits et devoirs des
            militants sont respectés et que la vie du parti demeure juste et disciplinée.
          </p>
        </section>

        {/* Attributions */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Attributions du Comité d’Éthique
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Veiller au respect des statuts, règlements et principes fondateurs du parti.
            </li>
            <li>
              Examiner les comportements individuels ou collectifs contraires à l’éthique
              et proposer les mesures appropriées.
            </li>
            <li>
              Arbitrer les litiges internes en privilégiant la cohésion et l’unité du parti.
            </li>
            <li>
              Conseiller les organes dirigeants sur les bonnes pratiques politiques,
              morales et organisationnelles.
            </li>
            <li>
              Promouvoir l’intégrité et la discipline dans la vie militante.
            </li>
          </ul>
        </section>

        {/* Composition */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Composition</h2>
          <p>
            Le Comité d’Éthique est composé de membres expérimentés, reconnus pour
            leur intégrité morale, leur impartialité et leur engagement au service
            du parti.  
            Sa composition exacte est déterminée conformément aux statuts et peut
            être ajustée par les organes dirigeants.
          </p>
        </section>

        {/* Fonctionnement */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Fonctionnement</h2>
          <p>
            Le Comité d’Éthique se réunit en session ordinaire ou extraordinaire,
            selon les situations à trancher.  
            Ses décisions sont consignées dans des rapports transmis aux organes
            supérieurs du parti pour mise en œuvre ou délibération finale.
          </p>
        </section>

        {/* FOOTER INTERNE */}
        <div className="p-6 bg-[#064C32] text-white rounded-lg mt-10">
          <h3 className="text-xl font-semibold mb-2">
            FORDAC — Forces Démocratiques pour l’Action et le Changement
          </h3>
          <p className="text-sm opacity-90">
            Le Comité d’Éthique garantit l’intégrité et la moralité
            dans la vie interne du parti.
          </p>
        </div>

      </section>
    </main>
  );
}
