"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import MembreTopbar from "@/components/MembreTopbar";

export default function EditProfilPage() {
  const router = useRouter();

  const [profile, setProfile] = useState<any>(null);
  const [loaded, setLoaded] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [quartier, setQuartier] = useState("");
  const [secteur, setSecteur] = useState("");
  const [arrondissement, setArrondissement] = useState("");

  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [message, setMessage] = useState("");

  // ================================
  // Charger le profil existant
  // ================================
  async function loadProfile() {
    const token = localStorage.getItem("memberToken");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/members/profile`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const data = await res.json();
    setProfile(data);

    setName(data.name || "");
    setPhone(data.phone || "");
    setEmail(data.email || "");
    setQuartier(data.quartier || "");
    setSecteur(data.secteur || "");
    setArrondissement(data.arrondissement || "");

    setLoaded(true);
  }

  useEffect(() => {
    loadProfile();
  }, []);

  if (!loaded) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        Chargement...
      </div>
    );
  }

  // ================================
  // Soumission du formulaire
  // ================================
  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoadingSubmit(true);
    setMessage("");

    try {
      const token = localStorage.getItem("memberToken");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/members/profile`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name,
            phone,
            email,
            quartier,
            secteur,
            arrondissement,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Erreur lors de la mise à jour.");
        setLoadingSubmit(false);
        return;
      }

      setMessage("Profil mis à jour avec succès ✔");

      setTimeout(() => {
        router.push("/membre/profil");
      }, 1000);
    } catch (error) {
      setMessage("Erreur réseau. Réessayez.");
    }

    setLoadingSubmit(false);
  }

  return (
    <div className="min-h-screen bg-[#0f2f1e]">
      <MembreTopbar />

      <div className="p-6 text-white space-y-6">
        <h1 className="text-3xl font-bold mb-4">
          Modifier mon profil
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-[#145331] p-6 rounded-xl border border-green-800 space-y-6 max-w-xl"
        >
          {/* NOM */}
          <div>
            <label className="block mb-2 font-semibold">Nom complet</label>
            <input
              type="text"
              value={name}
              className="w-full p-3 rounded text-black"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* TÉLÉPHONE */}
          <div>
            <label className="block mb-2 font-semibold">Téléphone</label>
            <input
              type="text"
              value={phone}
              className="w-full p-3 rounded text-black"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              className="w-full p-3 rounded text-black"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* QUARTIER */}
          <div>
            <label className="block mb-2 font-semibold">Quartier</label>
            <input
              type="text"
              value={quartier}
              className="w-full p-3 rounded text-black"
              onChange={(e) => setQuartier(e.target.value)}
            />
          </div>

          {/* SECTEUR */}
          <div>
            <label className="block mb-2 font-semibold">Secteur</label>
            <select
              value={secteur}
              onChange={(e) => setSecteur(e.target.value)}
              className="w-full p-3 rounded text-black"
            >
              <option value="">-- Choisir un secteur --</option>
              <option value="Moungo Nord">Moungo Nord</option>
              <option value="Moungo Sud">Moungo Sud</option>
            </select>
          </div>

          {/* ARRONDISSEMENT */}
          <div>
            <label className="block mb-2 font-semibold">Arrondissement</label>
            <input
              type="text"
              value={arrondissement}
              className="w-full p-3 rounded text-black"
              onChange={(e) => setArrondissement(e.target.value)}
              placeholder="Njombé, Penja, etc."
            />
          </div>

          {/* MESSAGE */}
          {message && (
            <div className="text-center text-sm font-semibold text-yellow-200">
              {message}
            </div>
          )}

          {/* BOUTON */}
          <button
            type="submit"
            disabled={loadingSubmit}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded w-full font-bold"
          >
            {loadingSubmit ? "Enregistrement..." : "Enregistrer"}
          </button>
        </form>
      </div>
    </div>
  );
}
