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
  description: "Portail officiel du FORDAC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>

        {/* ===== MOBILE MENU (visible only on smartphone) ===== */}
        <div className="md:hidden fixed top-3 left-3 z-50">
          <MobileMenu />
        </div>

        {/* ===== TOP NAVBAR (desktop/tablet) ===== */}
        <div className="hidden md:block">
          <TopNavbar />
        </div>

        {/* ===== MAIN NAVBAR (desktop/tablet) ===== */}
        <div className="hidden md:block">
          <MainNavbar />
        </div>

        {/* ===== MARQUEE NATIONAL ===== */}
        <MarqueeBanner />

        {/* ===== PAGE CONTENT ===== */}
        <main className="min-h-screen pt-4">
          {children}
        </main>

        {/* ===== FOOTER ===== */}
        <Footer />

      </body>
    </html>
  );
}
