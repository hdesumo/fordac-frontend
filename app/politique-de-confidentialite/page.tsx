export default function PolitiqueConfidentialitePage() {
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-green-800">
        Politique de Confidentialité
      </h1>

      <p className="mb-4">
        La présente Politique de Confidentialité explique comment FORDAC Connect
        collecte, utilise, protège et traite les données personnelles de ses
        membres, adhérents et utilisateurs du site.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Données collectées</h2>
      <p className="mb-4">
        Nous collectons les informations suivantes lors de l’adhésion ou de
        l’utilisation du site :
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Nom et prénom</li>
        <li>Adresse e-mail</li>
        <li>Numéro de téléphone</li>
        <li>Région, département, arrondissement</li>
        <li>Informations de connexion et adresse IP</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Utilisation des données</h2>
      <p className="mb-4">Les données sont utilisées pour :</p>
      <ul className="list-disc ml-6 mb-4">
        <li>Gérer les adhésions et cotisations</li>
        <li>Permettre l’accès aux services du mouvement</li>
        <li>Communiquer avec les membres</li>
        <li>Améliorer les fonctionnalités du site</li>
        <li>Assurer la sécurité des comptes</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Partage des données</h2>
      <p className="mb-4">
        Aucune donnée personnelle n’est vendue ni cédée. Elles peuvent être
        partagées uniquement avec des prestataires techniques (hébergement,
        sécurité, envoi d’e-mails) strictement nécessaires au fonctionnement du
        site.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Sécurité</h2>
      <p className="mb-4">
        Des mesures techniques et organisationnelles protègent vos données
        contre les accès non autorisés, pertes, fuites ou modifications.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Droits des utilisateurs</h2>
      <p className="mb-4">
        Vous pouvez à tout moment demander :
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>L’accès à vos informations personnelles</li>
        <li>La rectification de vos données</li>
        <li>La suppression de votre compte</li>
        <li>L’export de vos données</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Contact</h2>
      <p className="mb-4">
        Pour toute demande liée à vos données personnelles :  
        <strong>contact@fordac-connect.org</strong>
      </p>

      <p className="mt-8 italic">
        Dernière mise à jour : {new Date().getFullYear()}
      </p>
    </main>
  );
}
