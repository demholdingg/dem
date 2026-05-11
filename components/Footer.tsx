import Link from "next/link";
import { services } from "@/data/services";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* CTA */}
      <div className="container-custom relative pt-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-cyan-500/10" />
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom relative py-20">
        <div className="grid gap-14 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="text-2xl font-black tracking-tight">DUTA ENERGI</h2>

            <p className="mt-6 leading-8 text-white/70">
              Trusted partner in engineering, procurement, construction,
              maintenance, and industrial solutions across Indonesia.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
              >
                <FaFacebookF size={16} />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-500 hover:text-white"
              >
                <FaInstagram size={16} />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-600 hover:text-white"
              >
                <FaLinkedinIn size={16} />
              </Link>

              <Link
                href="https://youtube.com"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:bg-red-500 hover:text-white"
              >
                <FaYoutube size={16} />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[3px] text-sky-300">
              Navigation
            </h3>

            <ul className="mt-6 space-y-4">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 transition hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[3px] text-sky-300">
              Services
            </h3>

            <ul className="mt-6 space-y-4">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-white/70 transition hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[3px] text-sky-300">
              Contact
            </h3>

            <div className="mt-6 space-y-5 text-white/70">
              <p>
                Email:
                <br />
                <a
                  href="mailto:hello@dutaenergi.co.id"
                  className="transition hover:text-white"
                >
                  hello@dutaenergi.co.id
                </a>
              </p>

              <p>
                Phone:
                <br />
                <a
                  href="tel:+620000000000"
                  className="transition hover:text-white"
                >
                  +62 000-0000-0000
                </a>
              </p>

              <p className="leading-7">
                Jakarta, Indonesia
                <br />
                Industrial & Energy Solutions
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} PT. Duta Energi Muliatama. All rights
            reserved.
          </p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link href="#" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
