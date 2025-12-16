"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import moungoData from "@/data/moungoData";
import { motion } from "framer-motion";

export default function AdhesionPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    birthdate: "",
    profession: "",
    quartier: "",
    departement: moungoData.departement,
    secteur: "",
    arrondissement: "",
    terms_accepted: false,
    resignation_commitment: false,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const updateField = (field: string, value: any) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.birthdate ||
      !form.profession ||
      !form.quartier ||
      !form.secteur ||
      !form.arrondissement
    ) {
      setError("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    if (!form.terms_accepted || !form.resignation_commitment) {
      setError(
        "Veuillez accepter les statuts et confirmer votre engagement envers le FORDAC."
      );
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/members/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setLoading(false);
        setError(data.error || "Erreur lors de l’envoi du formulaire.");
        return;
      }

      router.push("/adhesion/success");
    } catch (err) {
      setLoading(false);
      setError("Une erreur est survenue. Vérifiez votre connexion internet.");
    }
  };

  const secteurs = Object.keys(moungoData.secteurs);
  const arrondissements = form.secteur
    ? (moungoData.secteurs as any)[form.secteur]
    : [];

  return (
    <div className="min-h-screen w-full bg-[#0f3e20] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">

        {/* TITRE */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Formulaire d’adhésion au FORDAC
        </motion.h1>

        {/* FORMULAIRE */}
        <form
          onSubmit={handleSubmit}
          className="
            w-full
            bg-white/10 backdrop-blur-xl
            border border-white/10
            shadow-2xl
            rounded-2xl
            p-8 md:p-10
            mx-auto
            max-w-3xl
            space-y-6
          "
        >
          {/* NOM */}
          <div>
            <label className="font-semibold">Nom complet</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 outline-none focus:ring-2 focus:ring-[#4ade80]"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
              placeholder="Votre nom complet"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="font-semibold">Adresse e-mail</label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 outline-none focus:ring-2 focus:ring-[#4ade80]"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="exemple@mail.com"
            />
          </div>

          {/* TÉLÉPHONE */}
          <div>
            <label className="font-semibold">Téléphone</label>
            <input
              type="tel"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 outline-none focus:ring-2 focus:ring-[#4ade80]"
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              placeholder="+237..."
            />
          </div>

          {/* DATE */}
          <div>
            <label className="font-semibold">Date de naissance</label>
            <input
              type="date"
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 outline-none focus:ring-2 focus:ring-[#4ade80]"
              value={form.birthdate}
              onChange={(e) => updateField("birthdate", e.target.value)}
            />
          </div>

          {/* PROFESSION */}
          <div>
            <label className="font-semibold">Profession</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 outline-none focus:ring-2 focus:ring-[#4ade80]"
              value={form.profession}
              onChange={(e) => updateField("profession", e.target.value)}
              placeholder="Votre profession"
            />
          </div>

          {/* QUARTIER */}
          <div>
            <label className="font-semibold">Quartier</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 outline-none focus:ring-2 focus:ring-[#4ade80]"
              value={form.quartier}
              onChange={(e) => updateField("quartier", e.target.value)}
              placeholder="Votre quartier"
            />
          </div>

          {/* DÉPARTEMENT */}
          <div>
            <label className="font-semibold">Département</label>
            <input
              type="text"
              disabled
              value={form.departement}
              className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/30"
            />
          </div>

          {/* SECTEUR */}
          <div>
            <label className="font-semibold">Secteur</label>
            <select
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 outline-none focus:ring-2 focus:ring-[#4ade80]"
              value={form.secteur}
              onChange={(e) => updateField("secteur", e.target.value)}
            >
              <option value="">Sélectionner…</option>
              {secteurs.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* ARRONDISSEMENT */}
          <div>
            <label className="font-semibold">Arrondissement / Commune</label>
            <select
              disabled={!form.secteur}
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 outline-none focus:ring-2 focus:ring-[#4ade80]"
              value={form.arrondissement}
              onChange={(e) => updateField("arrondissement", e.target.value)}
            >
              <option value="">Sélectionner…</option>
              {arrondissements.map((a: string) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
          </div>

          {/* PARAGRAPHE : Gratuité des cartes */}
          <p className="text-white/80 text-sm leading-relaxed bg-white/10 p-3 rounded-lg border border-white/20">
            Je reconnais que la carte de membre est délivrée
            <span className="font-semibold text-white"> gratuitement </span>
            conformément à la décision du Président National, et ce
            <span className="font-semibold text-white"> jusqu’à nouvel ordre</span>.
          </p>

          {/* ACCEPTATION DES STATUTS */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={form.terms_accepted}
              onChange={(e) => updateField("terms_accepted", e.target.checked)}
              className="accent-[#4ade80]"
            />
            <span>
              J’ai lu et j’accepte les{" "}
              <a
                href="/statuts.pdf"
                target="_blank"
                className="text-[#4ade80] underline"
              >
                Statuts du FORDAC
              </a>.
            </span>
          </div>

          {/* ENGAGEMENT DE DÉMISSION D'UN AUTRE PARTI */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={form.resignation_commitment}
              onChange={(e) =>
                updateField("resignation_commitment", e.target.checked)
              }
              className="accent-[#4ade80]"
            />
            <span>
              Si je suis membre d’un autre parti politique, je m’engage à y
              démissionner et à transmettre une preuve officielle. Mon adhésion
              ne deviendra définitive qu’après réception et validation de cette
              preuve.
            </span>
          </div>

          {/* ERRORS */}
          {error && (
            <p className="text-red-400 text-center font-semibold">{error}</p>
          )}

          {/* BOUTON */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full py-3 rounded-lg text-lg
              bg-[#4ade80] text-[#0f3e20]
              hover:bg-[#4ade80]/80 transition font-semibold
            "
          >
            {loading ? "Envoi en cours…" : "Envoyer ma demande"}
          </button>
        </form>
      </div>
    </div>
  );
}
