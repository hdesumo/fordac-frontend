export async function getSujets(page: number = 1, token: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/member/forum/sujets?page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Erreur récupération des sujets");
  return res.json();
}

export async function getSujetById(id: number | string, token: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/member/forum/sujets/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Sujet introuvable");
  return res.json();
}

export async function createSujet(
  data: { title: string; description: string },
  token: string
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/member/forum/sujets`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }
  );

  const json = await res.json();
  if (!res.ok) throw new Error(json.message || "Erreur création sujet");
  return json;
}

export async function createCommentaire(
  sujetId: number | string,
  content: string,
  token: string
) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/member/forum/sujets/${sujetId}/commentaires`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ content }),
    }
  );

  const json = await res.json();
  if (!res.ok) throw new Error(json.message || "Erreur création commentaire");
  return json;
}
