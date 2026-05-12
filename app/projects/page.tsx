import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import {
  ArrowUpRight,
  Calendar,
  MapPin,
  Briefcase,
  ChevronRight,
  ArrowRightCircle,
} from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION - More Dramatic */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/project-hero.jpg"
            alt="Duta Energi Projects"
            fill
            priority
            className="object-cover opacity-30 scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-white"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight size={12} />
              <span>Our Portfolio</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
              ENGINEERING <br />
              <span className="text-sky-500">EXCELLENCE.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed font-medium">
              Transforming complex energy challenges into sustainable industrial
              realities through precision and certified expertise.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="py-24 lg:py-32">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold text-sky-600 uppercase tracking-[0.3em] mb-4">
                Case Studies
              </h2>
              <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Recent Works
              </h3>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-2 rounded-full bg-sky-600 text-white text-sm font-bold shadow-lg shadow-sky-100">
                All Projects
              </button>
              <button className="px-6 py-2 rounded-full bg-slate-50 text-slate-500 text-sm font-bold hover:bg-slate-100 transition-colors">
                Energy
              </button>
              <button className="px-6 py-2 rounded-full bg-slate-50 text-slate-500 text-sm font-bold hover:bg-slate-100 transition-colors">
                Mechanical
              </button>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group flex flex-col h-full bg-white transition-all duration-500"
              >
                {/* Image Container with Floating Badges */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-xl group-hover:shadow-sky-200/50 transition-all duration-500">
                  <Image
                    src={p.image || "/images/projects/placeholder.jpg"}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Glassmorphism Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="bg-white/20 backdrop-blur-xl border border-white/30 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-xl shadow-lg"></span>
                  </div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900/90 via-sky-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                    <span className="text-white/70 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                      View Project <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>

                {/* Content Area - Minimalist but Information-Rich */}
                <div className="pt-8 px-4 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-[2px] bg-sky-500"></div>
                    <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
                      {p.location}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors duration-300 leading-tight mb-4">
                    {p.title}
                  </h2>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {p.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-bold uppercase">
                        <Calendar size={14} className="text-sky-500" />
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-bold uppercase">
                        <Briefcase size={14} className="text-sky-500" />
                        Mechanical
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="bg-sky-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-center"></div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
              Have a project in mind?
            </h2>
            <p className="text-sky-100 mb-10 max-w-xl mx-auto relative z-10">
              Let's discuss how our engineering team can bring your industrial
              vision to life with certified safety and precision.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-white text-sky-900 font-bold rounded-2xl hover:bg-sky-50 transition-all transform hover:scale-105 relative z-10"
            >
              Start Conversation <ArrowRightCircle size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
