"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useMembreAuth from "@/hooks/useMembreAuth";

export default function ProtectedRouteMembre({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { isAuthenticated, loaded } = useMembreAuth();

  useEffect(() => {
    if (loaded && !isAuthenticated) {
      router.replace("/login");
    }
  }, [loaded, isAuthenticated, router]);

  if (!loaded) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-700">
        Vérification de votre session...
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return <>{children}</>;
}
