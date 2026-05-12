import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Duta Energi Muliatama",
  description:
    "Mechanical Engineering Solutions and Dynamic Contracting Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ScrollReveal />
        <div className="pt-0">
          <main id="main">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
