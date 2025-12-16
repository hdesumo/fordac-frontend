"use client";

export default function CPSPage() {
  return (
    <main className="min-h-screen bg-fordacDark text-white">

      {/* HEADER HARMONISÉ */}
      <header className="relative bg-[#064C32] py-20 px-6 overflow-hidden">
        {/* texture subtile */}
        <div className="absolute inset-0 opacity-10 bg-[url('/textures/pattern-grid.svg')] bg-cover"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Comité Politique Stratégique (CPS)
          </h1>
        </div>
      </header>

      {/* CONTENU ORIGINAL — strictement respecté */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-12 leading-relaxed text-white/90">

        {/* Intro */}
        <p className="text-lg">
          Le Comité Politique Stratégique (CPS) est l’organe d’orientation et de 
          pilotage stratégique du FORDAC. 
          Il veille à la cohérence de l’action politique, 
          supervise la mise en œuvre des résolutions du Congrès 
          et assure la continuité du projet global du parti.
        </p>

        {/* Section : Rôle et mission */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">
            Rôle et Mission du CPS
          </h2>
          <p className="mb-3">
            Le CPS joue un rôle déterminant dans la vie du parti. 
            Il élabore les grandes orientations stratégiques et 
            veille à leur exécution par les organes exécutifs et territoriaux.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Traduire en actions les résolutions du Congrès.</li>
            <li>Superviser l’activité politique générale du parti.</li>
            <li>Garantir la cohérence de la vision et du discours politique.</li>
            <li>Coordonner les organes centraux et territoriaux.</li>
            <li>Décider des grandes positions du parti sur les enjeux nationaux.</li>
          </ul>
        </section>

        {/* Section : Composition */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Composition</h2>

          <p className="mb-3">
            Le CPS regroupe des cadres expérimentés, choisis pour leur compétence, 
            leur loyauté et leur engagement pour l’action et le changement. 
            Il est composé de :
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Membres du Bureau Politique National (BPN)</li>
            <li>Représentants des Fédérations</li>
            <li>Cadres experts issus de la Ligue des Experts</li>
            <li>Membres désignés selon les textes internes</li>
          </ul>
        </section>

        {/* Section : Fonctionnement */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-3">Fonctionnement</h2>

          <p className="mb-3">
            Le CPS se réunit périodiquement pour évaluer l’action du parti 
            et prendre les décisions nécessaires à l’adaptation de la stratégie. 
            Il peut être convoqué en session extraordinaire lors d’enjeux majeurs.
          </p>

          <p>
            Ses décisions s’imposent au Secrétariat Exécutif National 
            et aux organes territoriaux du FORDAC.
          </p>
        </section>

        {/* FOOTER INTERNE */}
        <div className="p-6 bg-[#064C32] text-white rounded-lg mt-10">
          <h3 className="text-xl font-semibold mb-2">
            Un organe au cœur de la vision du FORDAC
          </h3>
          <p className="text-sm opacity-90">
            Le CPS assure la continuité stratégique du parti, 
            garantissant l'unité, la cohérence et la pertinence 
            de l’action politique du FORDAC.
          </p>
        </div>

      </section>
    </main>
  );
}
