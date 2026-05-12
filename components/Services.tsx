import Link from "next/link";
import {
  ArrowRight,
  Factory,
  Wrench,
  Cable,
  ShieldCheck,
  Radio,
  Cpu,
} from "lucide-react";

import { services } from "@/data/services";

const icons = [Factory, Wrench, Cable, ShieldCheck, Radio, Cpu];

export default function Services() {
  return (
    <section
      id="services"
      className="section relative overflow-hidden bg-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-sky-100 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-100 blur-3xl" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[4px] text-sky-700">
              Our Services
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Engineering & Industrial Solutions
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Delivering integrated engineering, procurement, maintenance,
              electrical systems, and industrial infrastructure solutions with
              high standards of quality and safety.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-semibold text-sky-700 transition hover:text-sky-900"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[index % icons.length];

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-sky-200 hover:shadow-2xl"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 via-sky-500/0 to-sky-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 transition-all duration-500 group-hover:bg-sky-600 group-hover:text-white">
                  <Icon size={30} />
                </div>

                {/* Content */}
                <div className="relative mt-8">
                  <h3 className="text-2xl font-bold text-slate-900 transition group-hover:text-sky-700">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-8 inline-flex items-center gap-2 font-semibold text-sky-700">
                    Learn More
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>

                {/* Top Border */}
                <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-sky-500 to-cyan-400 transition-transform duration-500 group-hover:scale-x-100" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
