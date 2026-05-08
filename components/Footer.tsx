import Link from "next/link";
import { services } from "@/data/services";

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
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-custom py-14 grid gap-12 md:grid-cols-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">DUTA ENERGI</h2>

          <p className="mt-4 text-slate-600 leading-7">
            Trusted partner in mechanical engineering and contracting—focused on safety, quality,
            and reliable delivery.
          </p>

          <p className="mt-6 text-sm text-slate-500">
            © {new Date().getFullYear()} PT. Duta Energi Muliatama
          </p>
        </div>

        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider text-slate-900">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-slate-600 hover:text-sky-700">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider text-slate-900">Services</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-slate-600 hover:text-sky-700"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider text-slate-900">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <p>
              Email:{" "}
              <a className="hover:text-sky-700" href="mailto:hello@dutaenergi.co.id">
                hello@dutaenergi.co.id
              </a>
            </p>
            <p>
              Phone:{" "}
              <a className="hover:text-sky-700" href="tel:+620000000000">
                +62 000-0000-0000
              </a>
            </p>
            <p className="leading-7">
              Address: Jakarta, Indonesia
            </p>
            <Link href="/contact" className="btn btn-primary w-full mt-2">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
