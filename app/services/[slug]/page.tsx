import { services } from "@/data/services";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  return {
    title: `${service?.title} | Duta Energi`,
    description: service?.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <section className="section">
      <div className="container-custom max-w-4xl">
        <p className="text-sky-700 font-semibold uppercase text-sm tracking-wider">
          Service
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {service.title}
        </h1>

        <p className="mt-6 text-base text-slate-600 leading-8">{service.description}</p>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-semibold text-slate-900">Need this service?</p>
          <p className="mt-2 text-sm text-slate-600 leading-7">
            Send your scope and timeline. We’ll reply with clarifying questions and a suggested
            approach.
          </p>
          <a
            className="btn btn-primary mt-5"
            href="mailto:hello@dutaenergi.co.id?subject=Service%20Inquiry%20-%20Duta%20Energi"
          >
            Contact via Email
          </a>
        </div>
      </div>
    </section>
  );
}
