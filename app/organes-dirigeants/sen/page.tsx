"use client";

export default function SENPage() {
  return (
    <main className="min-h-screen bg-fordacDark text-white">

      {/* HEADER HARMONISÉ */}
      <header className="relative bg-[#064C32] py-20 px-6 overflow-hidden">
        {/* texture subtile */}
        <div className="absolute inset-0 opacity-10 bg-[url('/textures/pattern-grid.svg')] bg-cover"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Secrétariat Exécutif National (SEN)
          </h1>
        </div>
      </header>

      {/* CONTENU ORIGINAL — STRICTEMENT RESPECTÉ */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-12 leading-relaxed text-white/90">

        {/* Intro */}
        <p className="text-lg">
          Le Secrétariat Exécutif National (SEN) est l’organe chargé de l’exécution
          quotidienne des décisions, résolutions et orientations politiques du
          Bureau Politique National (BPN) et du Comité Politique Stratégique (CPS).
          Il constitue le moteur administratif et opérationnel du FORDAC.
        </p>

        {/* Mission */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Mission du Secrétariat Exécutif National
          </h2>
          <p>
            Le SEN assure la gestion administrative, politique et organisationnelle
            du parti.  
            Il met en œuvre les décisions des instances supérieures et coordonne les
            activités des différentes structures nationales et territoriales.
          </p>
        </section>

        {/* Attributions */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Attributions du SEN</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Assurer l’application des résolutions et directives du BPN et du CPS.</li>
            <li>Assurer la gestion quotidienne des affaires du parti au niveau national.</li>
            <li>Coordonner techniquement les actions des Démembrements Territoriaux.</li>
            <li>Superviser les commissions, comités, ligues et services internes.</li>
            <li>
              Préparer les rapports administratifs, politiques et stratégiques pour
              les organes dirigeants.
            </li>
            <li>
              Organiser le calendrier politique, les réunions, les missions et les
              manifestations officielles du parti.
            </li>
          </ul>
        </section>

        {/* Structure */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Structure du SEN</h2>

          <p className="mb-3">
            Le Secrétariat Exécutif National est composé de plusieurs
            Secrétaires Nationaux, chacun responsable d’un domaine spécifique, tel
            que :
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Organisation & Mobilisation</li>
            <li>Communication & Porte-parole adjoint</li>
            <li>Affaires Électorales</li>
            <li>Formation Politique & Éducation Citoyenne</li>
            <li>Relations Extérieures & Coopération</li>
            <li>Affaires Juridiques & Droits Humains</li>
            <li>Économie, Finances et Développement Local</li>
            <li>Affaires Sociales & Société Civile</li>
          </ul>

          <p className="mt-4">
            La structure exacte est définie et mise à jour par les statuts et les
            résolutions internes du parti.
          </p>
        </section>

        {/* Fonctionnement */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Fonctionnement</h2>
          <p>
            Le SEN se réunit selon un calendrier défini ou sur convocation du
            Président National.  
            Il travaille de manière permanente pour garantir l’efficacité de
            l’action politique, la coordination des structures territoriales et la
            gestion harmonieuse du parti.
          </p>
        </section>

        {/* FOOTER INTERNE HARMONISÉ */}
        <div className="p-6 bg-[#064C32] text-white rounded-lg mt-10">
          <h3 className="text-xl font-semibold mb-2">
            FORDAC — Forces Démocratiques pour l’Action et le Changement
          </h3>
          <p className="text-sm opacity-90">
            Le Secrétariat Exécutif National assure la vitalité quotidienne de
            l’action politique du parti.
          </p>
        </div>

      </section>
    </main>
  );
}
