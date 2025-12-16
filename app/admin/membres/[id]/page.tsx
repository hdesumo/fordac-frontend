"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// ======================================
// SECTEURS ET ARRONDISSEMENTS FORDAC
// ======================================
const secteurs = ["Moungo-Nord", "Moungo-Sud"];

const arrondissementsParSecteur: any = {
  "Moungo-Nord": [
    "Mbanga",
    "Manjo",
    "Loum",
    "Njombé-Penja",
    "Baré-Bakem",
  ],
  "Moungo-Sud": [
    "Nkongsamba 1er",
    "Nkongsamba 2e",
    "Nkongsamba 3e",
    "Melong",
    "Mombo",
  ],
};

export default function MembreFichePage({ params }: any) {
  const memberId = params.id;
  const router = useRouter();

  const [member, setMember] = useState<any>(null);

  // Champs du formulaire
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [secteur, setSecteur] = useState("");
  const [arrondissement, setArrondissement] = useState("");
  const [quartier, setQuartier] = useState("");

  const [status, setStatus] = useState("");

  // ================================
  // CHARGEMENT DU MEMBRE
  // ================================
  async function loadMember() {
    try {
      const token = localStorage.getItem("adminToken");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/membres/${memberId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await res.json();
      setMember(data);

      // Pré-remplissage
      setName(data.name);
      setEmail(data.email);
      setPhone(data.phone || "");

      setSecteur(data.secteur || "");
      setArrondissement(data.arrondissement || "");
      setQuartier(data.quartier || "");

      setStatus(data.status);
    } catch (err) {
      console.error("Erreur chargement membre:", err);
    }
  }

  useEffect(() => {
    loadMember();
  }, [memberId]);

  if (!member)
    return (
      <div className="p-6 text-white">
        <p>Chargement...</p>
      </div>
    );

  // ================================
  // MISE À JOUR
  // ================================
  async function updateMember() {
    try {
      const token = localStorage.getItem("adminToken");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/membres/${memberId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            secteur,
            arrondissement,
            quartier,
            status,
          }),
        }
      );

      if (res.ok) {
        alert("Membre mis à jour avec succès");
        router.refresh();
      } else {
        alert("Erreur lors de la mise à jour");
      }
    } catch (err) {
      console.error("Erreur mise à jour:", err);
    }
  }

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">
        Fiche Membre — {member.name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* =======================================
            INFORMATIONS PERSONNELLES
        ======================================== */}
        <div className="bg-[#145331] p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-bold mb-4">Informations personnelles</h2>

          <label className="block mb-2">Nom complet</label>
          <input
            className="w-full bg-gray-800 p-3 rounded-lg mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="block mb-2">Email</label>
          <input
            className="w-full bg-gray-800 p-3 rounded-lg mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="block mb-2">Téléphone</label>
          <input
            className="w-full bg-gray-800 p-3 rounded-lg mb-4"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* =======================================
            INFORMATION TERRITORIALE
        ======================================== */}
        <div className="bg-[#145331] p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-bold mb-4">Informations territoriales</h2>

          <label className="block mb-2">Département</label>
          <input
            className="w-full bg-gray-700 p-3 rounded-lg mb-4"
            value="Moungo"
            disabled
          />

          <label className="block mb-2">Secteur</label>
          <select
            className="w-full bg-gray-800 p-3 rounded-lg mb-4"
            value={secteur}
            onChange={(e) => {
              const newSecteur = e.target.value;
              setSecteur(newSecteur);

              // Réinitialiser arrondissement si secteur change
              if (!arrondissementsParSecteur[newSecteur]?.includes(arrondissement)) {
                setArrondissement("");
              }
            }}
          >
            <option value="">Sélectionner</option>
            {secteurs.map((s: any) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          <label className="block mb-2">Arrondissement</label>
          <select
            className="w-full bg-gray-800 p-3 rounded-lg mb-4"
            value={arrondissement}
            onChange={(e) => setArrondissement(e.target.value)}
          >
            <option value="">Sélectionner</option>

            {secteur &&
              arrondissementsParSecteur[secteur]?.map((a: any) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
          </select>

          <label className="block mb-2">Quartier</label>
          <input
            className="w-full bg-gray-800 p-3 rounded-lg mb-4"
            value={quartier}
            onChange={(e) => setQuartier(e.target.value)}
          />
        </div>

        {/* =======================================
            STATUT DU MEMBRE
        ======================================== */}
        <div className="bg-[#145331] p-6 rounded-xl border border-gray-700 col-span-full">
          <h2 className="text-xl font-bold mb-4">Statut du membre</h2>

          <select
            className="w-full bg-gray-800 p-3 rounded-lg mb-4"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="active">Actif</option>
            <option value="pending">En attente</option>
            <option value="suspended">Suspendu</option>
            <option value="banned">Radié</option>
          </select>

          <button
            onClick={updateMember}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-bold"
          >
            Enregistrer les modifications
          </button>
        </div>
      </div>
    </div>
  );
}
