"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "@/utils/constants";

export default function SuperAdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/superadmin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Erreur de connexion.");
        return;
      }

      localStorage.setItem("superadminToken", data.token);
      router.replace("/superadmin/dashboard");

    } catch (err) {
      console.error(err);
      setError("Erreur serveur.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#052E2A] px-4">
      <form
        onSubmit={handleLogin}
        className="bg-[#063B33] p-8 rounded-xl shadow-xl max-w-md w-full text-white"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Connexion SuperAdmin</h1>

        {error && (
          <div className="bg-red-600 text-white p-3 rounded mb-4 text-center">
            {error}
          </div>
        )}

        <label className="block mb-3">
          <span>Email</span>
          <input
            type="email"
            className="w-full mt-2 p-3 rounded bg-white text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="block mb-6">
          <span>Mot de passe</span>
          <div className="relative mt-2">
            <input
              type={showPwd ? "text" : "password"}
              className="w-full p-3 rounded bg-white text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              onClick={() => setShowPwd(!showPwd)}
              className="absolute right-3 top-3 text-black"
            >
              {showPwd ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
        </label>

        <button
          type="submit"
          className="w-full p-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}
