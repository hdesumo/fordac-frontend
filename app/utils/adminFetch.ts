// app/utils/adminFetch.ts
export async function adminFetch(endpoint: string, token: string) {
  const API_BASE = process.env.NEXT_PUBLIC_API_URL;

  const url = `${API_BASE}/api/admin${endpoint}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    console.error("❌ adminFetch error:", {
      url,
      status: response.status,
      statusText: response.statusText,
    });
    return null;
  }

  return response.json();
}
