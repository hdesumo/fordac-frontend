"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { API_BASE_URL } from "@/utils/constants";

export default function MemberLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_BASE_URL}/members/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Identifiants incorrects");
        setLoading(false);
        return;
      }

      localStorage.setItem("memberToken", data.token);
      router.push("/membre/dashboard");
    } catch {
      setError("Erreur de connexion.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#052d23] flex items-center justify-center p-4">
      <form
        onSubmit={submit}
        className="bg-[#064130] w-full max-w-md p-8 rounded-lg shadow-lg text-white"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Connexion Membre
        </h2>

        {error && (
          <p className="bg-red-600 p-2 rounded mb-4 text-center">{error}</p>
        )}

        <label className="block mb-1 text-sm">Email</label>
        <input
          type="email"
          className="w-full p-3 rounded mb-4 text-black bg-white shadow-inner"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block mb-1 text-sm">Mot de passe</label>
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full p-3 rounded text-black bg-white shadow-inner"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="absolute right-3 top-3 text-black cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>

        <button
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded text-lg"
          disabled={loading}
        >
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </form>
    </main>
  );
}
