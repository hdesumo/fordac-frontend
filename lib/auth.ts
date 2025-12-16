export function setAdminToken(token: string) {
  localStorage.setItem("adminToken", token);
}

export function getAdminToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("adminToken");
}

export function removeAdminToken() {
  localStorage.removeItem("adminToken");
}
