"use client";

import { useEffect, useState } from "react";

export interface AdminData {
  id: number;
  email: string;
  nom?: string;
  prenom?: string;
  role?: string;
}

export default function useAdminAuth() {
  const [admin, setAdmin] = useState<AdminData | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("adminToken");
    const storedAdmin = localStorage.getItem("adminData");

    if (storedToken) setToken(storedToken);

    if (storedAdmin) {
      try {
        setAdmin(JSON.parse(storedAdmin));
      } catch {
        console.warn("Erreur解析 adminData");
      }
    }

    setLoaded(true);
  }, []);

  return {
    admin,
    token,
    isAuthenticated: !!token,
    loaded,
  };
}
