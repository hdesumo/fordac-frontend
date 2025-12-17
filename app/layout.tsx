import "./globals.css";
import TopNavbar from "@/components/TopNavbar";
import MainNavbar from "@/components/MainNavbar";
import MobileMenu from "@/components/MobileMenu";
import MarqueeBanner from "@/components/MarqueeBanner";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FORDAC Connect",
  description: "Plateforme officielle du FORDAC",
  generator: "FORDAC Connect",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>

        {/* ===== MOBILE MENU (smartphone only) ===== */}
        <div className="md:hidden fixed top-3 left-3 z-50">
          <MobileMenu />
        </div>

        {/* ===== HEADER GLOBAL ===== */}
        <header className="relative z-40">

          {/* Top navbar (desktop & tablet) */}
          <div className="hidden md:block">
            <TopNavbar />
          </div>

          {/* Main navbar (desktop & tablet) */}
          <div className="hidden md:block">
            <MainNavbar />
          </div>

          {/* National marquee banner */}
          <MarqueeBanner />

        </header>

        {/* ===== PAGE CONTENT ===== */}
        <main className="min-h-screen bg-[#f9fafb]">
          {children}
        </main>

        {/* ===== FOOTER ===== */}
        <Footer />

      </body>
    </html>
  );
}
