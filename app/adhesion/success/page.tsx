"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AdhesionSuccessPage() {
  return (
    <div className="min-h-screen w-full bg-[#0f3e20] text-white flex items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          max-w-2xl w-full 
          bg-white/10 backdrop-blur-xl
          border border-white/10 
          rounded-2xl 
          shadow-2xl 
          p-10 
          text-center
        "
      >
        {/* ICÔNE */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-6"
        >
          <div className="w-20 h-20 bg-[#4ade80] text-[#0f3e20] rounded-full flex items-center justify-center text-5xl font-bold shadow-lg">
            ✓
          </div>
        </motion.div>

        {/* TITRE */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Votre demande a été envoyée !
        </h1>

        {/* MESSAGE PRINCIPAL */}
        <p className="text-white/90 text-lg leading-relaxed mb-6">  
          Votre demande d’adhésion a bien été enregistrée et sera examinée par les instances compétentes.
        </p>

        {/* RAPPEL SUR LA DÉMISSION (SI MEMBRE D’UN AUTRE PARTI) */}
        <p className="text-white/80 text-sm leading-relaxed mb-6 bg-white/10 p-4 rounded-lg border border-white/20">
          <span className="font-semibold text-white">Important :</span><br />
          Si vous êtes actuellement membre d’un autre parti politique,  
          nous vous rappelons que votre adhésion au FORDAC ne sera <span className="font-semibold">définitive</span> 
          qu’après la transmission d’une preuve officielle de votre démission.
          <br />
          Nous vous invitons à effectuer cette démarche dans les meilleurs délais.
        </p>

        {/* MESSAGE SUPPLÉMENTAIRE */}
        <p className="text-white/70 text-sm leading-relaxed mb-8">
          Vous recevrez une notification dès la validation de votre adhésion
          et l’émission de votre carte de membre.
        </p>

        {/* BOUTON */}
        <Link
          href="/"
          className="
            inline-block 
            bg-[#4ade80] text-[#0f3e20]
            px-6 py-3 rounded-lg 
            font-semibold text-lg 
            hover:bg-[#4ade80]/80 
            transition
          "
        >
          Retour à l’accueil
        </Link>
      </motion.div>
    </div>
  );
}
