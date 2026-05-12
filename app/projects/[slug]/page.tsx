import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, ArrowLeft, Mail, ChevronRight } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: `${project?.title} | Duta Energi`,
    description: project?.location,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className="bg-white min-h-screen">
      {/* --- TOP SECTION: DARK HERO --- */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        {/* Dekorasi Background */}
        <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')] bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

        <div className="container-custom relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-widest hover:text-white transition-all mb-8 group"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Projects
          </Link>

          <div className="max-w-4xl">
            <span className="text-sky-400 font-bold tracking-widest text-xs uppercase bg-sky-400/10 px-3 py-1 rounded-full border border-sky-400/20">
              Project Case Study
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT SECTION --- */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* KOLOM KIRI: Image & Description */}
            <div className="lg:col-span-8">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl mb-10 bg-slate-100">
                <Image
                  src={project.image || "/images/projects/placeholder.jpg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Overview
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  {project.description ||
                    "Detailed information about the engineering processes and solutions provided by Duta Energi for this project. We focus on delivering high-quality mechanical and electrical services with a core emphasis on safety and long-term reliability."}
                </p>
              </div>
            </div>

            {/* KOLOM KANAN: Detail Sidebar (Sesuai gaya yang Anda sukai) */}
            <div className="lg:col-span-4">
              <div className="space-y-8 sticky top-32">
                {/* Information Box */}
                <div className="p-8 rounded-3xl border border-slate-100 bg-slate-50">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
                    Project Info
                  </h3>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <MapPin
                        className="text-sky-600 shrink-0 mt-1"
                        size={20}
                      />
                      <div>
                        <p className="text-xs text-slate-400 font-medium uppercase">
                          Location
                        </p>
                        <p className="text-slate-900 font-bold">
                          {project.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Calendar
                        className="text-sky-600 shrink-0 mt-1"
                        size={20}
                      />
                      <div>
                        <p className="text-xs text-slate-400 font-medium uppercase">
                          Completed
                        </p>
                        <p className="text-slate-900 font-bold"></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact/CTA Box */}
                <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <p className="text-sm font-bold text-slate-900">
                    Want a similar delivery?
                  </p>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    Tell us what you’re building and the schedule. We’ll help
                    outline a safe, practical execution plan.
                  </p>
                  <a
                    href="mailto:hello@dutaenergi.co.id?subject=Project%20Inquiry"
                    className="mt-6 flex items-center justify-center gap-2 w-full py-4 bg-sky-600 text-white font-bold rounded-2xl hover:bg-sky-700 transition-all shadow-lg shadow-sky-100"
                  >
                    <Mail size={18} /> Contact via Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
