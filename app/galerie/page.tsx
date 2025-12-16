import Link from "next/link";

export default function GalerieIndex() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Titre principal */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-emerald-800 dark:text-emerald-400 mb-12">
          Galerie du FORDAC
        </h1>

        <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
          Retrouvez toutes les images et vidéos illustrant les activités,
          mobilisations, actions citoyennes et moments forts du FORDAC.
        </p>

        {/* Cartes vers Photos et Vidéos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Carte Photos */}
          <Link
            href="/galerie/photos"
            className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition p-8 cursor-pointer border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">
              📸 Galerie Photos
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Parcourez les photos des évènements, réunions, mobilisations et
              actions sociales menées par le FORDAC à travers le pays.
            </p>
          </Link>

          {/* Carte Vidéos */}
          <Link
            href="/galerie/videos"
            className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition p-8 cursor-pointer border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">
              🎥 Galerie Vidéos
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Retrouvez les discours, interventions, reportages et moments forts
              capturés en vidéo.
            </p>
          </Link>

        </div>

        {/* Bouton retour */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            ← Retour à l’accueil
          </Link>
        </div>

      </div>
    </main>
  );
}
