import Link from "next/link";
import Image from "next/image";
// Asumsi Anda punya data projects di @/data/projects
import { projects } from "@/data/projects";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-20 overflow-hidden bg-slate-900">
        <Image
          src="/images/projects/project-hero.jpg"
          alt="Duta Energi Projects"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>

        <div className="container-custom relative z-10">
          <span className="text-sky-400 font-bold tracking-widest text-xs uppercase bg-sky-400/10 px-3 py-1 rounded-full border border-sky-400/20">
            Portfolio
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            Proven <span className="text-sky-400">Engineering</span> Excellence
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
            A showcase of our commitment to safety, precision, and innovative
            solutions across various industrial sectors.
          </p>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:border-sky-100 transition-all duration-500"
              >
                {/* Image Container dengan Aspect Ratio Proposional */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image || "/images/projects/placeholder.jpg"}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Badge Category */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-lg shadow-sm">
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors duration-300 leading-tight">
                      {p.title}
                    </h2>
                    <div className="p-2 bg-slate-50 rounded-full group-hover:bg-sky-50 group-hover:text-sky-600 transition-all">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-6">
                    {p.description}
                  </p>

                  {/* Metadata - Membuat card terlihat lebih berisi/proposional */}
                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center gap-4 text-slate-400 text-xs">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-sky-500" />
                      {p.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-sky-500" />
                      {p.year}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
