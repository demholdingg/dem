import Link from "next/link";
import { services } from "@/data/services";

export const metadata = {
  title: "Services | Duta Energi",
  description: "Our engineering and contracting services.",
};

export default function ServicesPage() {
  return (
    <div>
      <section className="section section-muted">
        <div className="container-custom">
          <p className="text-sky-700 font-semibold uppercase text-sm tracking-wider">
            Services
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Practical services for demanding projects
          </h1>
          <p className="mt-6 max-w-3xl text-slate-600 leading-8">
            Choose the capability you need. Each service is delivered with a focus on safety,
            workmanship, and clear communication.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.slug} className="card">
              <h2 className="text-lg font-bold text-slate-900">{s.title}</h2>
              <p className="mt-3 text-sm text-slate-600 leading-7">{s.description}</p>
              <Link
                href={`/services/${s.slug}`}
                className="inline-flex items-center gap-2 mt-6 text-sky-700 font-semibold hover:text-sky-800"
              >
                View details
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
