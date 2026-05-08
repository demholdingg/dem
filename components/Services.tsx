import Link from "next/link";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-custom">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <p className="text-sky-700 font-semibold uppercase text-sm tracking-wider">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              We Work With You To Achieve Your Goals
            </h2>
          </div>

          <Link href="/services" className="text-sky-700 font-semibold hover:text-sky-800">
            View All Services
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="card"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                {service.description}
              </p>

              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 mt-6 text-sky-700 font-semibold hover:text-sky-800"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
