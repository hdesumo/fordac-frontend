"use client";

import { useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("token") || sessionStorage.getItem("token")
          : null;

      // ❌ Aucun token → redirection
      if (!token) {
        setIsAuthorized(false);
        router.push("/login");
        return;
      }

      // ✔ Token présent → accès autorisé
      setIsAuthorized(true);
    } catch (error) {
      console.error("Erreur dans ProtectedRoute :", error);
      setIsAuthorized(false);
      router.push("/login");
    }
  }, [router]);

  if (isAuthorized === null) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0c2e25] text-white">
        <div className="animate-pulse text-center">
          <p className="text-2xl font-semibold text-[#c8a45d]">
            Vérification de votre session...
          </p>
          <div className="mt-4 w-16 h-16 border-4 border-t-[#c8a45d] border-gray-600 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!isAuthorized) return null;

  return <>{children}</>;
}
