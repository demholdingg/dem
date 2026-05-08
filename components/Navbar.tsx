"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about", hasSubmenu: true },
  { label: "Business Groups", href: "/esg" },
  { label: "Career", href: "/career" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showTransparent = !mobileMenu && !isScrolled;

  return (
    <header
      className={`md:bg-transparent fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showTransparent
          ? "bg-transparent"
          : "bg-white/90 backdrop-blur-md border-b border-white/40 shadow-[0_8px_30px_rgba(15,23,42,0.12)]"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-60 focus:rounded-lg focus:bg-white focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div
        className={`container-custom flex items-center justify-between gap-4 transition-all duration-300 ${
          isScrolled ? "py-1" : "py-1.5"
        }`}
      >
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Duta Energi Muliatama"
        >
          <Image
            src="/dutaenergilogo.png"
            alt="Duta Energi Muliatama"
            width={isScrolled ? 45 : 54}
            height={isScrolled ? 14 : 17}
            className="object-contain transition-all duration-300"
            priority
          />
          <p
            className={`drop-shadow-2xl drop-shadow-sky-700 ${
              isScrolled
                ? "text-sky-700 font-semibold"
                : "text-white  font-semibold"
            } `}
          >
            Duta Energi Muliatama
          </p>
        </Link>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-4 lg:gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${
                      showTransparent
                        ? isActive
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                        : isActive
                          ? "text-sky-700"
                          : "text-slate-700 hover:text-sky-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className={`hidden md:inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition ${
              showTransparent
                ? "bg-white/95 text-sky-700 hover:bg-sky-700 hover:text-white"
                : "bg-sky-600 text-white hover:bg-white hover:text-sky-700"
            }`}
          >
            Contact Me
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            className={`p-2 rounded-md border transition-colors md:hidden ${
              showTransparent
                ? "border-white/30 text-white hover:text-white/80"
                : "border-slate-300 text-slate-700 hover:text-slate-900"
            }`}
            aria-expanded={mobileMenu}
            aria-controls="mobile-nav"
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
          >
            {mobileMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-md shadow-lg"
          role="dialog"
          aria-label="Mobile menu"
        >
          <div className="container-custom py-5">
            <nav>
              <ul className="space-y-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenu(false)}
                        className={`block rounded-md px-2 py-2 text-base font-medium transition-colors ${
                          isActive
                            ? "bg-sky-50 text-sky-700"
                            : "text-slate-900 hover:bg-slate-50 hover:text-sky-700"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <Link
              href="/contact"
              onClick={() => setMobileMenu(false)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
