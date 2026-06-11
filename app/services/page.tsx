import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import ServiceRental from "@/components/ServiceRental";
import * as LucideIcons from "lucide-react";

export const metadata = {
  title: "Services | Duta Energi",
  description:
    "High-quality engineering solutions and operational support for demanding projects.",
};

export default function ServicesPage() {
  return (
    <div className="bg-slate-50">
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/projects/project-hero.jpg"
            alt="Engineering Services"
            fill
            priority
            className="object-cover"
          />
          {/* Overlay: Dark gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-800/40"></div>
          <div className="absolute inset-0 bg-black/20"></div>{" "}
          {/* Extra dimming */}
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <p className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-[0.2em] text-sky-400 uppercase border border-sky-400/30 bg-sky-400/10 rounded-full">
              Our Expertise
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-6">
              Practical services for <br className="hidden md:block" />
              <span className="text-sky-400">demanding projects</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl">
              Delivering high-quality engineering and contracting solutions with
              a focus on safety, workmanship, and clear communication.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="pb-24">
        <div className="container-custom -mt-20 relative z-20">
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s) => {
              const IconComponent =
                LucideIcons[s.icon] || LucideIcons.HelpCircle;
              return (
                <div
                  key={s.slug}
                  className="group flex flex-col p-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100 hover:border-sky-500/50 transition-all duration-500"
                >
                  <div className="flex-grow">
                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-700 transition-colors">
                      {s.title}
                    </h2>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {s.description}
                    </p>
                  </div>

                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 group/link"
                  >
                    View details
                    <LucideIcons.ArrowRight
                      size={16}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OPERATIONAL VEHICLE RENTAL */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Logistics & Mobility Support
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl">
              We provide reliable transportation solutions to support
              operational efficiency and mobility for PLN technical teams across
              various regions.
            </p>
          </div>
          <ServiceRental />
        </div>
      </section>
    </div>
  );
}
