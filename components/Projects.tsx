import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section section-muted">
      <div className="container-custom">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <p className="text-sky-700 font-semibold uppercase text-sm tracking-wider">
              Our Projects
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Projects That Define Us
            </h2>
          </div>

          <Link href="/projects" className="text-sky-700 font-semibold hover:text-sky-800">
            View All Projects
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project: Project) => (
            <div
              key={project.slug}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-56 bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-8"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600">{project.location}</p>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 mt-5 text-sky-700 font-semibold hover:text-sky-800"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
