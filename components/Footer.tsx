import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/5 relative z-10">
      <div className="container-custom">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/dutaenergilogo.png"
                  alt="Duta Energi Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Duta Energi
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Established in 2009, DEM HOLDING provides high-quality engineering
              solutions and sustainable energy infrastructure across Indonesia.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="hover:text-sky-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="hover:text-sky-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="hover:text-sky-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-sky-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-sky-400 transition-colors"
                >
                  About Company
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-sky-400 transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-sky-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <Mail className="text-sky-500 shrink-0" size={18} />
                <a
                  href="mailto:admin@dutaenergi.co.id"
                  className="hover:text-white transition-colors"
                >
                  admin@dutaenergi.co.id
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="text-sky-500 shrink-0" size={18} />
                <a
                  href="tel:+6285693922994"
                  className="hover:text-white transition-colors"
                >
                  +62 856 9392 2994
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg">Headquarters</h3>
            <div className="flex gap-3 text-sm leading-relaxed">
              <MapPin className="text-sky-500 shrink-0" size={18} />
              <p>
                Alamanda Tower, 25th Floor,
                <br />
                Jl. T.B. Simatupang Kav. 23-24
                <br />
                Jakarta Selatan 12430, Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest text-slate-500">
          <p>© {currentYear} PT. Duta Energi Muliatama. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
