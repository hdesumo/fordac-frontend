export default function CharteFordacPage() {
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-green-800">
        Charte de la Mutuelle de Solidarité FORDAC
      </h1>

      <p className="mb-4 italic">
        Version provisoire 1.0 — Document officiel du FORDAC.
      </p>

      <a
        href="/documents/charte-mutuelle.pdf"
        target="_blank"
        className="inline-block bg-green-700 text-white px-4 py-2 mb-6 rounded hover:bg-green-800 transition"
      >
        📄 Télécharger la Charte en PDF
      </a>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Préambule</h2>
      <p className="mb-4">
        Le parti des Forces Démocratiques pour l’Action et le Changement
        (FORDAC), mouvement citoyen fondé sur les valeurs de justice, d’équité
        et de solidarité, a institué la Mutuelle de Solidarité FORDAC afin
        d’offrir à ses membres un cadre d’entraide et de protection face aux
        aléas de la vie.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Article 1 – Objectifs</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Promouvoir la solidarité entre membres du mouvement</li>
        <li>
          Assurer une couverture sociale progressive en matière de santé,
          d’éducation et d’assistance
        </li>
        <li>Encourager la responsabilité individuelle et collective</li>
        <li>
          Soutenir les actions communautaires menées localement et nationalement
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Article 2 – Adhésion</h2>
      <p className="mb-4">Trois niveaux d’adhésion existent :</p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Niveau Bronze</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Cotisation annuelle de base</li>
        <li>Soins courants</li>
        <li>Assistance familiale (naissance, décès)</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">Niveau Argent</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Couverture hospitalière et maternité</li>
        <li>Contribution scolaire</li>
        <li>Accès prioritaire aux formations régionales</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">Niveau Or</h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Couverture complète santé + éducation + décès</li>
        <li>Droit de représentation nationale</li>
        <li>Accès prioritaire aux projets communautaires</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Article 3 – Gestion</h2>
      <p className="mb-4">
        La mutuelle est administrée par un Comité de Gestion élu parmi les
        membres du FORDAC, sous la supervision du Secrétariat national de la
        Solidarité.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Article 4 – Ressources
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Cotisations</li>
        <li>Contributions volontaires</li>
        <li>Subventions et partenariats</li>
        <li>Dons et legs</li>
        <li>Activités solidaires</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Article 5 – Prestations
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Prestations médicales</li>
        <li>Aides en cas de maladie grave, décès, accident</li>
        <li>Accompagnement scolaire</li>
        <li>Accès aux campagnes de prévention</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Article 6 – Engagements du membre
      </h2>
      <p className="mb-4">
        Respect des valeurs, maintien des cotisations à jour, participation
        active aux actions communautaires.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Article 7 – Transparence et Éthique
      </h2>
      <p className="mb-4">
        La mutuelle repose sur la transparence financière, l’équité et la
        participation active.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        Article 8 – Dispositions finales
      </h2>
      <p className="mb-6">
        La charte entre en vigueur après validation du Comité National du
        FORDAC. Elle peut être révisée par le Comité de Gestion avec
        approbation du Bureau National.
      </p>
    </main>
  );
}
