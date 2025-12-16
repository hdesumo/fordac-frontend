"use client";

import Image from "next/image";

export default function MouvementPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-500">
      <section className="max-w-6xl mx-auto px-4 py-20 space-y-16">
        {/* 🟩 Titre principal */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-green-700 dark:text-green-400 mb-4">
            Le Mouvement FORDAC
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Le Front pour la Renaissance, la Dignité et l’Action Citoyenne
            (FORDAC) est un mouvement engagé pour un Cameroun plus juste,
            responsable et solidaire.
          </p>
        </header>

        {/* 🟢 Vision et mission */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-4">
              🌍 Notre Vision
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Le FORDAC aspire à un Cameroun uni, où chaque citoyen trouve sa
              place dans la construction du progrès national.  
              Nous croyons en une société fondée sur la justice, la dignité,
              l’égalité des chances et la responsabilité collective.
            </p>

            <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-4">
              🎯 Notre Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Le FORDAC s’engage à promouvoir la participation citoyenne, le
              développement inclusif et la bonne gouvernance à travers des
              initiatives concrètes au service du peuple camerounais.
            </p>
          </div>

          <div className="flex justify-center">
            <Image
              src="/hero/hero3.jpeg"
              alt="Membres du FORDAC"
              width={500}
              height={350}
              className="rounded-2xl shadow-lg border border-green-100 dark:border-green-800 object-cover"
            />
          </div>
        </section>

        {/* 🟩 Valeurs fondamentales */}
        <section className="bg-green-700/10 dark:bg-green-900/30 rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-6 text-center">
            Nos Valeurs Fondamentales
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">
                Action
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Le FORDAC croit en la force de l’engagement et de l’initiative
                citoyenne pour transformer durablement la société.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">
                Dignité
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                La dignité de chaque citoyen est au cœur de notre vision : un
                Cameroun où chacun est respecté, entendu et valorisé.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-green-700 dark:text-green-300 mb-2">
                Responsabilité
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Le progrès national repose sur la responsabilité collective et
                l’intégrité individuelle de tous les citoyens.
              </p>
            </div>
          </div>
        </section>

        {/* 🟩 Président national */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center md:justify-end">
            <Image
              src="/president.png"
              alt="Romaric Yebchue Semenou"
              width={320}
              height={320}
              className="rounded-full shadow-lg border-4 border-green-700 dark:border-green-400 object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-3">
              Romaric Yebchue Semenou
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Président national du FORDAC
            </p>
            <blockquote className="border-l-4 border-green-600 dark:border-green-400 pl-4 italic text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              “Nous croyons en un Cameroun debout, qui se relève par la
              conscience citoyenne, le travail et la solidarité. Le FORDAC
              n’est pas un rêve, c’est un engagement collectif pour un avenir
              meilleur.”
            </blockquote>
          </div>
        </section>

        {/* 🟩 Organes du mouvement */}
        <section>
          <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-6 text-center">
            Nos Organes Directeurs
          </h2>
          <ul className="max-w-3xl mx-auto space-y-4 text-gray-700 dark:text-gray-300 text-center">
            <li>🔹 Présidence nationale</li>
            <li>🔹 Bureau exécutif</li>
            <li>🔹 Secrétariat général</li>
            <li>🔹 Cellules régionales et départementales</li>
            <li>🔹 Commissions spécialisées</li>
          </ul>
        </section>
      </section>

      {/* 🟩 Footer */}
      <footer className="text-center py-8 text-sm text-gray-500 dark:text-gray-400 mt-12 border-t border-gray-200 dark:border-gray-800">
        © {new Date().getFullYear()} FORDAC Connect — Le Mouvement Citoyen pour un Cameroun Juste et Responsable.
      </footer>
    </main>
  );
}
