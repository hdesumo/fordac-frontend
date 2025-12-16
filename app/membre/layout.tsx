"use client";

import "../globals.css";
import MembreSidebar from "@/components/MembreSidebar";
import MembreTopbar from "@/components/MembreTopbar";
import ProtectedRouteMembre from "@/components/ProtectedRouteMembre";

export default function MembreLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRouteMembre>
      <div className="flex min-h-screen bg-gray-100">

        {/* SIDEBAR */}
        <MembreSidebar />

        {/* CONTENU */}
        <div className="flex-1">
          <MembreTopbar />
          <div className="p-6">{children}</div>
        </div>
      </div>
    </ProtectedRouteMembre>
  );
}
