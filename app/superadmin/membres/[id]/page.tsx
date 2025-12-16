"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MemberDetailPage({ params }: any) {
  const id = params.id;
  const router = useRouter();

  const [member, setMember] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Champs modifiables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [quartier, setQuartier] = useState("");
  const [secteur, setSecteur] = useState("");
  const [arrondissement, setArrondissement] = useState("");
  const [membershipLevel, setMembershipLevel] = useState("");
  const [status, setStatus] = useState("");

  async function loadMember() {
    setLoading(true);

    try {
      const token = localStorage.getItem("superadminToken");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/superadmin/members/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const data = await res.json();
      setMember(data);

      // Remplissage des champs
      setName(data.name);
      setEmail(data.email);
      setPhone(data.phone);
      setQuartier(data.quartier || "");
      setSecteur(data.secteur || "");
      setArrondissement(data.arrondissement || "");
      setMembershipLevel(data.membership_level || "");
      setStatus(data.status || "");

      setLoading(false);
    } catch (err) {
      console.error("Erreur:", err);
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMember();
  }, []);

  // ===========================================================
  // UPDATE MEMBER
  // ===========================================================
  async function updateMember() {
    try {
      const token = localStorage.getItem("superadminToken");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/superadmin/members/${id}`,
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
            quartier,
            secteur,
            arrondissement,
            membership_level: membershipLevel,
            status,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Erreur lors de la mise à jour");
        return;
      }

      alert("Modifications enregistrées.");
      router.refresh();
    } catch (err) {
      console.error(err);
    }
  }

  // ===========================================================
  // DELETE MEMBER
  // ===========================================================
  async function deleteMember() {
    if (!confirm("Voulez-vous vraiment supprimer ce membre ?")) return;

    try {
      const token = localStorage.getItem("superadminToken");

      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/superadmin/members/${id}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert("Membre supprimé.");
      router.push("/superadmin/membres");
    } catch (err) {
      console.error(err);
    }
  }

  // ===========================================================
  // LOADING
  // ===========================================================
  if (loading || !member) {
    return (
      <div className="p-6 text-white">
        <p>Chargement...</p>
      </div>
    );
  }

  // ===========================================================
  // PAGE
  // ===========================================================
  return (
    <div className="p-6 text-white max-w-2xl">

      <h1 className="text-3xl font-bold mb-6">
        Membre — {member.name}
      </h1>

      <div className="bg-[#145331] p-6 rounded-xl border border-gray-700">

        {/* Nom */}
        <label className="block mb-2">Nom complet</label>
        <input
          className="w-full bg-gray-800 p-3 rounded-lg mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Email */}
        <label className="block mb-2">Email</label>
        <input
          className="w-full bg-gray-800 p-3 rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Téléphone */}
        <label className="block mb-2">Téléphone</label>
        <input
          className="w-full bg-gray-800 p-3 rounded-lg mb-4"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        {/* Quartier */}
        <label className="block mb-2">Quartier</label>
        <input
          className="w-full bg-gray-800 p-3 rounded-lg mb-4"
          value={quartier}
          onChange={(e) => setQuartier(e.target.value)}
        />

        {/* Secteur */}
        <label className="block mb-2">Secteur du Moungo</label>
        <select
          className="w-full bg-gray-800 p-3 rounded-lg mb-4"
          value={secteur}
          onChange={(e) => setSecteur(e.target.value)}
        >
          <option value="">Non défini</option>
          <option value="Moungo Nord">Moungo Nord</option>
          <option value="Moungo Sud">Moungo Sud</option>
        </select>

        {/* Arrondissement */}
        <label className="block mb-2">Arrondissement</label>
        <input
          className="w-full bg-gray-800 p-3 rounded-lg mb-4"
          value={arrondissement}
          onChange={(e) => setArrondissement(e.target.value)}
        />

        {/* Niveau d’adhésion */}
        <label className="block mb-2">Niveau d'adhésion</label>
        <select
          className="w-full bg-gray-800 p-3 rounded-lg mb-4"
          value={membershipLevel}
          onChange={(e) => setMembershipLevel(e.target.value)}
        >
          <option value="Bronze">Bronze</option>
          <option value="Argent">Argent</option>
          <option value="Or">Or</option>
        </select>

        {/* Statut */}
        <label className="block mb-2">Statut</label>
        <select
          className="w-full bg-gray-800 p-3 rounded-lg mb-6"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="active">Actif</option>
          <option value="inactive">Inactif</option>
        </select>

        {/* Boutons */}
        <button
          onClick={updateMember}
          className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-bold"
        >
          Enregistrer
        </button>

        <button
          onClick={deleteMember}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold ml-4"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}
