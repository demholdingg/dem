import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Duta Energi",
  description: "Selected projects delivered by PT. Duta Energi Muliatama.",
};

export default function ProjectsPage() {
  return (
    <div>
      <section className="section section-muted">
        <div className="container-custom">
          <p className="text-sky-700 font-semibold uppercase text-sm tracking-wider">
            Projects
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Work that demonstrates capability
          </h1>
          <p className="mt-6 max-w-3xl text-slate-600 leading-8">
            A selection of projects across regions. Each engagement is approached with disciplined
            planning, safe execution, and measurable outcomes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.slug}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-52 bg-slate-100">
                <Image src={p.image} alt={p.title} fill className="object-contain p-10" />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-bold text-slate-900">{p.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{p.location}</p>
                <Link
                  href={`/projects/${p.slug}`}
                  className="inline-flex items-center gap-2 mt-5 text-sky-700 font-semibold hover:text-sky-800"
                >
                  View project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
