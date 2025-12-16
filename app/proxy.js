/**
 * NEW Next.js 16 Proxy System
 * Remplace totalement le système "middleware"
 */

import { NextResponse } from "next/server";

const API_LOCAL = "http://localhost:5001";
const API_PROD = "https://api.fordac-connect.org";

export function middleware(req) {
  const url = req.nextUrl.clone();

  // Toutes les requêtes qui commencent par /api/ vont être redirigées
  if (url.pathname.startsWith("/api/")) {

    // Détection automatique environnement local vs production
    const target = process.env.NODE_ENV === "production" ? API_PROD : API_LOCAL;

    // On remplace la partie /api/... par l’URL complète backend
    url.href = url.href.replace(
      `${req.nextUrl.origin}/api`,
      `${target}/api`
    );

    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
