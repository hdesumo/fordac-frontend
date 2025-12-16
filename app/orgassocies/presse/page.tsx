"use client";

export default function PressePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Presse de la Nation – Édition du Moungo
        </h1>

        <p className="text-lg leading-relaxed text-gray-800 mb-6">
          Le FORDAC dispose d’un journal dénommé <strong>Presse de la Nation</strong>, 
          organe d’informations générales, Édition du Moungo, dans sa déclinaison départementale.
        </p>

        <p className="text-lg leading-relaxed text-gray-800 mb-10">
          Cet organe remplit les missions suivantes :
        </p>

        <div className="space-y-8 text-gray-800">
          <div>
            <h2 className="text-2xl font-semibold mb-2">1. Communication institutionnelle</h2>
            <p className="text-lg leading-relaxed">
              Il assure la diffusion des positions officielles du parti au niveau départemental.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">2. Promotion de la citoyenneté</h2>
            <p className="text-lg leading-relaxed">
              Il contribue à informer, éduquer et sensibiliser les populations du Moungo 
              sur les valeurs de civisme, d’éthique, d’unité et de développement prônées par le FORDAC.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">3. Valorisation des actions locales</h2>
            <p className="text-lg leading-relaxed">
              Il relaie l’actualité économique, sociale et culturelle dans le département du Moungo.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Neutralité, responsabilité et éthique</h2>
            <p className="text-lg leading-relaxed">
              Sa ligne éditoriale est fondée sur la responsabilité, la courtoisie, 
              le respect des institutions de la République et des valeurs humaines défendues par le parti.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">5. Gouvernance</h2>
            <p className="text-lg leading-relaxed">
              Il est supervisé par le Président national, qui nomme :
            </p>
            <ul className="list-disc ml-8 text-lg leading-relaxed">
              <li>un Directeur de Publication ;</li>
              <li>un Rédacteur en Chef ;</li>
            </ul>
            <p className="text-lg leading-relaxed mt-2">
              lesquels mettent en place une équipe rédactionnelle.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Son mode d’organisation, ses ressources, ses obligations et son fonctionnement interne 
              sont précisés dans le Règlement intérieur et dans les textes applicables à la presse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
