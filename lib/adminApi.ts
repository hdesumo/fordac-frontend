"use client";

const API = process.env.NEXT_PUBLIC_API_URL;

/**
 * Appels API Admin
 * Unifié : accepte 1 ou 2 arguments
 */
export async function adminFetch(
  endpoint: string,
  options: RequestInit = {}
) {
  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("token")
      : null;

  const headers: any = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(`${API}${endpoint}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Erreur admin API:", text);
    throw new Error(
      `Erreur API (${res.status}): ${text || "Requête échouée"}`
    );
  }

  return res;
}

/**
 * Obtenir les statistiques du tableau de bord Admin
 */
export async function getDashboardStats(token: string) {
  if (!API) {
    console.error("❌ NEXT_PUBLIC_API_URL est manquant");
    return null;
  }

  try {
    const res = await fetch(`${API}/api/admin/dashboard/stats`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      console.error("❌ Erreur API Dashboard:", res.status);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("❌ Erreur getDashboardStats:", error);
    return null;
  }
}
