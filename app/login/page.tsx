"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Redirection automatique si membre déjà connecté
  useEffect(() => {
    const existingToken = localStorage.getItem("memberToken");
    if (existingToken) {
      router.replace("/membre/dashboard");
    }
  }, [router]);

  const handleLogin = async () => {
    setErrorMsg("");

    if (!phone.trim() || !pin.trim()) {
      return setErrorMsg("Veuillez remplir tous les champs.");
    }

    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone, pin }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setLoading(false);
        return setErrorMsg(data.message || "Identifiants incorrects.");
      }

      // Stockage session membre
      localStorage.setItem("memberToken", data.token);
      localStorage.setItem("memberData", JSON.stringify(data.member));

      router.push("/membre/dashboard");
    } catch (error) {
      console.error("Erreur login :", error);
      setErrorMsg("Une erreur est survenue. Réessayez.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-[#166534] mb-6">
          Connexion Membre
        </h1>

        {errorMsg && (
          <p className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">
            {errorMsg}
          </p>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Téléphone
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border p-3 rounded-lg"
              placeholder="+237690000111"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Code PIN
            </label>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full border p-3 rounded-lg"
              placeholder="Votre code PIN"
            />
          </div>
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full mt-6 bg-[#166534] text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </div>
    </main>
  );
}
