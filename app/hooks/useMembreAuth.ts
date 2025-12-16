"use client";

import { useEffect, useState } from "react";

export interface MembreData {
  id: number;
  phone: string;
  nom?: string;
  prenom?: string;
}

export default function useMembreAuth() {
  const [token, setToken] = useState<string | null>(null);
  const [membre, setMembre] = useState<MembreData | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("memberToken");
    const storedUser = localStorage.getItem("memberData");

    if (storedToken) setToken(storedToken);

    if (storedUser) {
      try {
        setMembre(JSON.parse(storedUser));
      } catch {
        console.warn("Erreur JSON memberData");
      }
    }

    setLoaded(true);
  }, []);

  return {
    token,
    membre,
    isAuthenticated: !!token,
    loaded,
  };
}
