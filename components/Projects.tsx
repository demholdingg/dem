import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects, Project } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[4px] text-sky-300">
              Our Projects
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Electrical Infrastructure & Utility Solutions
            </h2>

            <p className="mt-5 text-white/70 leading-8">
              Procurement projects supporting PT PLN (Persero) and regional
              entities through advanced utility, communication, testing,
              thermovision, and smart distribution systems.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sky-300 font-semibold transition hover:text-white"
          >
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project: Project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative overflow-hidden rounded-3xl"
            >
              {/* Image */}
              <div className="relative h-[520px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-sky-500/0 transition duration-500 group-hover:bg-sky-500/10" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-xs uppercase tracking-[4px] text-sky-300">
                  {project.location}
                </p>

                <h3 className="mt-3 text-3xl font-bold leading-tight">
                  {project.title}
                </h3>

                <p className="mt-4 line-clamp-4 text-sm leading-7 text-white/70">
                  {project.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  View Project
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>

              {/* Border */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 transition duration-500 group-hover:border-sky-400/40" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
