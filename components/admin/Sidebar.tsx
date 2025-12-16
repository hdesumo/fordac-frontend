"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  Image,
  Newspaper,
  Users,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
    { name: "Forum", icon: MessageSquare, href: "/admin/forum" },
    { name: "Galerie", icon: Image, href: "/admin/galerie" },
    { name: "Actualités", icon: Newspaper, href: "/admin/actualites" },
    { name: "Membres", icon: Users, href: "/admin/membres" },
    { name: "Paramètres", icon: Settings, href: "/admin/settings" },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-[#145331] text-white min-h-screen p-6 shadow-lg">
      <h1 className="text-2xl font-bold mb-10 tracking-wide">FORDAC Admin</h1>

      <nav className="space-y-2">
        {menu.map((item, index) => {
          const active = pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                active
                  ? "bg-white text-[#145331] font-semibold shadow"
                  : "hover:bg-[#1a6a42] hover:shadow"
              }`}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
