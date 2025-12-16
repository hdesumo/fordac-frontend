"use client";

export default function ControleAuditPage() {
  return (
    <main className="min-h-screen bg-fordacDark text-white">

      {/* HEADER HARMONISÉ */}
      <header className="relative bg-[#064C32] py-20 px-6 overflow-hidden">
        {/* texture subtile */}
        <div className="absolute inset-0 opacity-10 bg-[url('/textures/pattern-grid.svg')] bg-cover"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Comité de Contrôle & Audit
          </h1>
        </div>
      </header>

      {/* CONTENU ORIGINAL — inchangé */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-12 leading-relaxed text-white/90">

        {/* Introduction */}
        <p className="text-lg">
          Le Comité de Contrôle & Audit est l’organe chargé de vérifier la
          gestion financière et patrimoniale du FORDAC.  
          Il garantit la transparence, la conformité et la bonne gouvernance
          dans toutes les activités du parti.
        </p>

        {/* Mission générale */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Mission Générale
          </h2>
          <p>
            Cet organe indépendant évalue régulièrement les pratiques internes,
            contrôle les opérations financières, examine les comptes et s’assure
            que la gestion du parti respecte les règles en vigueur ainsi que les
            orientations stratégiques définies par les instances dirigeantes.
          </p>
        </section>

        {/* Attributions */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Attributions du Comité
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Examiner la gestion financière du parti et contrôler la conformité
              des dépenses.
            </li>
            <li>
              Analyser les rapports comptables et vérifier la tenue des documents
              administratifs et financiers.
            </li>
            <li>
              Auditer les différentes structures territoriales ou sectorielles.
            </li>
            <li>
              Détecter les irrégularités, les risques et les dysfonctionnements
              internes.
            </li>
            <li>
              Proposer des mesures correctives pour améliorer la gouvernance.
            </li>
            <li>
              Présenter des rapports périodiques aux organes dirigeants pour
              délibération.
            </li>
          </ul>
        </section>

        {/* Composition */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Composition
          </h2>
          <p>
            Le Comité de Contrôle & Audit est composé de membres ayant une forte
            expérience dans les domaines de la gestion, des finances, du droit,
            de l’administration ou de l’audit.  
            Leur sélection repose sur le professionnalisme, la rigueur et
            l’indépendance.
          </p>
        </section>

        {/* Fonctionnement */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Fonctionnement
          </h2>
          <p>
            Le Comité se réunit selon un calendrier fixé par ses membres ou sur
            convocation des organes dirigeants.  
            Il peut diligenter des missions de vérification, demander des
            explications, consulter des documents financiers et mener des audits
            internes.  
            Ses conclusions sont consignées dans des rapports transmis aux
            autorités compétentes du FORDAC.
          </p>
        </section>

        {/* FOOTER INTERNE HARMONISÉ */}
        <div className="p-6 bg-[#064C32] text-white rounded-lg mt-10">
          <h3 className="text-xl font-semibold mb-2">
            FORDAC — Forces Démocratiques pour l’Action et le Changement
          </h3>
          <p className="text-sm opacity-90">
            Le Comité de Contrôle & Audit garantit la transparence et la bonne
            gouvernance au sein du parti.
          </p>
        </div>

      </section>
    </main>
  );
}
