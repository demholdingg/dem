"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showTransparent = !mobileMenu && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showTransparent
          ? "bg-transparent py-6 shadow-none"
          : mobileMenu
            ? "bg-black/90 backdrop-blur shadow-lg py-4"
            : "bg-transparent backdrop-blur shadow-sm shadow-black/20 border-b border-white/10 py-4"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-60 focus:rounded-lg focus:bg-white focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors text-white`}
          aria-label="Duta Energi Muliatama"
        >
          DUTA ENERGI
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-sky-300" : "text-white/85 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="btn bg-white text-slate-900 hover:bg-white/90"
          >
            Get In Touch
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden p-2 rounded-lg border border-white/20 text-white transition-colors"
          aria-expanded={mobileMenu}
          aria-controls="mobile-nav"
          aria-label={mobileMenu ? "Close menu" : "Open menu"}
        >
          {mobileMenu ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur"
          role="dialog"
          aria-label="Mobile menu"
        >
          <div className="container-custom py-5 flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className={`font-medium transition ${
                    isActive ? "text-sky-300" : "text-white hover:text-sky-300"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setMobileMenu(false)}
              className="btn bg-white text-slate-900 hover:bg-white/90 w-full mt-1"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
