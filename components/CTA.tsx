import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="section relative overflow-hidden bg-slate-950">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white px-8 py-14 shadow-[0_20px_80px_rgba(0,0,0,0.25)] sm:px-12 lg:px-16">
          {/* Soft Glow */}
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-sky-100 blur-3xl" />

          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-100 blur-3xl" />

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[5px] text-sky-700">
                Engineering • Procurement • Industrial Solutions
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight text-slate-900 sm:text-5xl">
                Powering Reliable
                <br />
                Electrical Infrastructure
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Supporting utility, industrial, and infrastructure sectors
                through trusted procurement services, mechanical & electrical
                solutions, communication systems, thermovision equipment, and
                smart distribution technologies.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-2xl bg-slate-950 px-8 py-5 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-700"
              >
                Discuss Your Project
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center rounded-2xl border border-slate-300 px-8 py-5 text-base font-semibold text-slate-700 transition hover:border-sky-700 hover:text-sky-700"
              >
                Explore Our Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
