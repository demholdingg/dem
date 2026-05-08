import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="section section-muted">
      <div className="container-custom grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sky-700 font-semibold uppercase text-sm tracking-wider">
            About Us
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Committed to quality, reliability, and safety
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            PT. Duta Energi Muliatama provides mechanical engineering and contracting solutions
            with a practical approach—clear scope, strong supervision, and disciplined execution.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/about" className="btn btn-secondary">
              Learn More
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Talk to Our Team
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-sky-50">
              <Image src="/window.svg" alt="" width={22} height={22} className="opacity-80" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">How we work</p>
              <p className="text-sm text-slate-600">Structured process, measurable results</p>
            </div>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            <li className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-slate-900">Planning</p>
              <p className="mt-2 text-sm text-slate-600">
                Define scope, schedule, and constraints upfront.
              </p>
            </li>
            <li className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-slate-900">Execution</p>
              <p className="mt-2 text-sm text-slate-600">
                Safe work practices with disciplined supervision.
              </p>
            </li>
            <li className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-slate-900">Quality</p>
              <p className="mt-2 text-sm text-slate-600">
                Inspection points and documentation you can audit.
              </p>
            </li>
            <li className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-slate-900">Delivery</p>
              <p className="mt-2 text-sm text-slate-600">
                Handover aligned to spec and operational readiness.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
