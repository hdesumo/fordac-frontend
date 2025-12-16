"use client";

export default function BPNPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">
      <div className="max-w-5xl w-full">

        {/* Titre principal */}
        <h1 className="text-4xl font-bold text-gray-900 mb-10">
          Bureau Politique National (BPN)
        </h1>

        {/* Introduction */}
        <p className="text-lg text-gray-800 leading-relaxed mb-10">
          Le Bureau Politique National (BPN) constitue l’un des organes exécutifs
          majeurs du FORDAC. Il assure la mise en œuvre des orientations politiques
          et stratégiques définies par le Congrès et le Comité Politique Stratégique (CPS), 
          et pilote la vie politique quotidienne du parti.
        </p>

        {/* Rôle */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Rôle du Bureau Politique National
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Le BPN assure la direction opérationnelle du FORDAC. 
            Il coordonne les actions politiques et veille à l’application cohérente
            des décisions issues des instances supérieures. 
            C’est l’organe qui transforme les orientations en actions concrètes.
          </p>
        </section>

        {/* Attributions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Attributions du BPN
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-800 leading-relaxed">
            <li>Exécuter les décisions du Congrès et du Comité Politique Stratégique.</li>
            <li>Conduire l’action politique du parti à l’échelle nationale et territoriale.</li>
            <li>Coordonner et superviser les fédérations, sections, sous-sections et cellules.</li>
            <li>Proposer des initiatives politiques, des campagnes et des stratégies d’adhésion.</li>
            <li>Assurer la communication politique générale et le positionnement public du parti.</li>
            <li>Statuer sur les questions administratives, organisationnelles et disciplinaires.</li>
          </ul>
        </section>

        {/* Composition */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Composition
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-3">
            Le Bureau Politique National rassemble des cadres politiques issus de différentes
            structures et ligues du FORDAC. Sa composition est définie dans les statuts et 
            peut inclure :
          </p>

          <ul className="list-disc pl-6 space-y-3 text-lg text-gray-800 leading-relaxed">
            <li>Membres du Comité Politique Stratégique</li>
            <li>Représentants des Ligues (Jeunes, Femmes, Experts)</li>
            <li>Responsables nationaux thématiques</li>
            <li>Représentants territoriaux selon les critères statutaires</li>
          </ul>
        </section>

        {/* Fonctionnement */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Fonctionnement
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Le BPN se réunit régulièrement selon un calendrier statutaire ou sur
            convocation du Président National. Ses décisions prennent la forme de 
            résolutions ou de directives, qui sont ensuite appliquées par le 
            Secrétariat Exécutif National (SEN) et les démembrements territoriaux.
          </p>
        </section>

        {/* Footer interne */}
        <div className="mt-8 p-6 bg-green-700 text-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">
            FORDAC — Forces Démocratiques pour l’Action et le Changement
          </h3>
          <p className="text-sm opacity-90 leading-relaxed">
            Le Bureau Politique National est le moteur opérationnel du FORDAC,
            garant d’une action cohérente et structurée.
          </p>
        </div>
      
      </div>
    </div>
  );
}
