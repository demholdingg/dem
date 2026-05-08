import Link from "next/link";

export const metadata = {
  title: "About | Duta Energi",
  description: "Learn more about PT. Duta Energi Muliatama.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="section section-muted">
        <div className="container-custom">
          <p className="text-sky-700 font-semibold uppercase text-sm tracking-wider">
            About
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Built for industrial execution
          </h1>
          <p className="mt-6 max-w-3xl text-slate-600 leading-8">
            We help clients in energy and infrastructure deliver mechanical engineering and
            contracting work with a clear process, strong safety discipline, and reliable delivery.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/services" className="btn btn-primary">
              Explore Services
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom grid gap-6 lg:grid-cols-3">
          <div className="card">
            <p className="text-sm font-semibold text-slate-900">Our mission</p>
            <p className="mt-3 text-sm text-slate-600 leading-7">
              Deliver dependable engineering and contracting services that are safe, auditable, and
              aligned to client objectives.
            </p>
          </div>
          <div className="card">
            <p className="text-sm font-semibold text-slate-900">Our values</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Safety-first operations</li>
              <li>Quality and documentation</li>
              <li>Integrity in delivery</li>
            </ul>
          </div>
          <div className="card">
            <p className="text-sm font-semibold text-slate-900">How we deliver</p>
            <p className="mt-3 text-sm text-slate-600 leading-7">
              A structured workflow—planning, execution, inspection points, and handover—so your
              teams can track progress and outcomes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
