import axios from "axios";

export const API_BASE_URL = "https://api.fordac-connect.org/api";

// ✅ Création d'une instance Axios avec baseURL
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ======================================
// 🔐 AUTHENTIFICATION
// ======================================

// 🔹 Connexion SuperAdmin
export async function loginSuperAdmin(credentials: {
  email: string;
  password: string;
}) {
  try {
    const response = await api.post("/superadmin/login", credentials);

    if (response.data?.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("superadmin", JSON.stringify(response.data.superadmin));
    }

    return { success: true, data: response.data };
  } catch (error: any) {
    console.error("Erreur de connexion SuperAdmin :", error);
    return { success: false, message: "Erreur de connexion au serveur" };
  }
}

// 🔹 Connexion Admin (si utilisée)
export async function loginAdmin(credentials: {
  email: string;
  password: string;
}) {
  try {
    const response = await api.post("/admins/login", credentials);

    if (response.data?.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("admin", JSON.stringify(response.data.admin));
    }

    return { success: true, data: response.data };
  } catch (error: any) {
    console.error("Erreur de connexion Admin :", error);
    return { success: false, message: "Erreur de connexion au serveur" };
  }
}

// ======================================
// 🧭 GESTION DU TOKEN
// ======================================

// Récupération du token depuis le stockage local
export function getAuthToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token");
}

// Vérifie si l'utilisateur est connecté
export function isAuthenticated() {
  return typeof window !== "undefined" && !!localStorage.getItem("token");
}

// Déconnexion
export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    localStorage.removeItem("superadmin");
    localStorage.removeItem("admin");
    window.location.href = "/login";
  }
}

// ======================================
// 🔄 Requête API avec Token
// ======================================

// Exemple d'appel authentifié (à titre de modèle)
export async function fetchProtectedData(endpoint: string) {
  const token = getAuthToken();
  if (!token) {
    return { success: false, message: "Utilisateur non authentifié" };
  }

  try {
    const response = await api.get(endpoint, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return { success: true, data: response.data };
  } catch (error: any) {
    console.error("Erreur lors de la récupération :", error);
    return { success: false, message: "Erreur lors de la récupération des données" };
  }
}

export default api;
