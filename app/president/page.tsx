import Image from "next/image";

export default function PresidentPage() {
  return (
    <main className="bg-[#0c2e25] min-h-screen text-white pt-24 pb-16">
      <section className="max-w-6xl mx-auto px-6">
        {/* TITRE */}
        <h1 className="text-4xl font-bold mb-8 text-center text-[#c8a45d]">
          Le Président National du FORDAC
        </h1>

        {/* CONTENU PRINCIPAL */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* TEXTE */}
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Le Président National du <strong>FORDAC</strong>, 
              <span className="font-semibold"> Romaric YEPCHUE SEMENOU</span>, 
              incarne la vision et la dynamique 
              d’un parti engagé pour le changement durable.
            </p>

            <p>
              Porteur d’une ambition profondément ancrée dans les réalités 
              sociales de notre pays, il œuvre à fédérer les énergies, 
              et à impulser une gouvernance 
              moderne fondée sur la responsabilité et l’action concrète.
            </p>

            <p>
              Sa philosophie repose sur un principe simple mais essentiel :  
              <br />
              <span className="block mt-2 italic text-[#c8a45d] font-semibold">
                « Le développement est une œuvre collective qui exige discipline
                et engagement citoyen. »
              </span>
            </p>

            <p>
              Sous sa direction, le FORDAC se positionne comme un acteur 
              majeur de l’innovation politique
             et du développement communautaire.
            </p>
          </div>

          {/* PHOTO */}
          <div className="flex justify-center">
            <Image
              src="/images/president.png"
              alt="Président National du FORDAC"
              width={450}
              height={450}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
