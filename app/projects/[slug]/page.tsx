import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

// Fungsi ini memungkinkan Next.js membuat halaman statis saat build
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  return {
    title: `${project?.title} | Duta Energi`,
    description: project?.location,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <section className="section">
      <div className="container-custom max-w-4xl">
        <p className="text-sky-700 font-semibold uppercase text-sm tracking-wider">
          Project
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {project.title}
        </h1>

        <p className="mt-6 text-base text-slate-600 leading-8">
          Location: <span className="font-semibold text-slate-900">{project.location}</span>
        </p>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-semibold text-slate-900">Want a similar delivery?</p>
          <p className="mt-2 text-sm text-slate-600 leading-7">
            Tell us what you’re building and the schedule. We’ll help outline a safe, practical
            execution plan.
          </p>
          <a
            className="btn btn-primary mt-5"
            href="mailto:hello@dutaenergi.co.id?subject=Project%20Inquiry%20-%20Duta%20Energi"
          >
            Contact via Email
          </a>
        </div>
      </div>
    </section>
  );
}
