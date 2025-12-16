"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MemberGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("memberToken")
        : null;

    if (!token) {
      router.replace("/membre/login");
    }
  }, [router]);

  return <>{children}</>;
}
