import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        <div className="pt-24">
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
