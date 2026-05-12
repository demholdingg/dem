import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Target, Eye, Building2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About | Duta Energi",
  description: "Learn more about PT. Duta Energi Muliatama Holding.",
};

export default function AboutPage() {
  const heroSlides = [
    "/images/dem1.jpg",
    "/images/dem2.jpg",
    "/images/dem3.jpg",
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION - Animasi Slide dengan Overlay yang Lebih Kuat */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide}
              className="about-hero-slide absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url("${slide}")`,
                animationDelay: `${index * 5}s`,
              }}
            />
          ))}
          {/* Overlay Gradien Ganda untuk kontras teks */}
          <div className="absolute inset-0 bg-slate-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>

        <div className="container-custom relative z-10 pt-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.3em] text-sky-400 uppercase border border-sky-400/30 bg-sky-400/10 rounded-full">
              Established 2009
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8">
              Duta Energi <span className="text-sky-400">Muliatama</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              A premier holding company housing 5 major entities focused on
              Energy, Industry, Technology, & Innovation. We deliver excellence
              through certified quality and unwavering commitment.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-sky-900/20"
              >
                Discuss Collaboration
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION - Layout berdampingan dengan Ikon */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Vision Card */}
            <div className="relative p-10 bg-white rounded-[2rem] shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Eye size={120} />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6">
                  <Target size={32} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Our Vision
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  To be the pioneer in advancing energy technology and
                  infrastructure. We strive to create a sustainable future by
                  integrating innovative mechanical and electrical engineering
                  solutions globally.
                </p>
              </div>
            </div>

            {/* Mission List */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Our Mission
              </h2>
              <div className="space-y-6">
                {[
                  "Integrate holistic mechanical-electrical systems for robust environments.",
                  "Drive sustainable innovation in energy-efficient technologies.",
                  "Build enduring strategic alliances with global stakeholders.",
                  "Empower a skilled workforce through specialized training programs.",
                  "Exceed client expectations with uncompromising safety and quality.",
                ].map((mission, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <CheckCircle2 size={16} />
                    </div>
                    <p className="text-slate-700 font-medium">{mission}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBSIDIARIES - Corporate Logo Grid */}
      <section className="py-24 bg-white">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-widest mb-3">
              Subsidiary Company
            </h2>
            <h3 className="text-4xl font-extrabold text-slate-900">
              Our Business Units
            </h3>
            <p className="mt-4 text-slate-500">
              Synergizing various industries under DEM HOLDING to provide
              end-to-end industrial solutions.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "PT. Duta Persada Power",
                logo: "/images/dutapersadapower.png",
              },
              {
                name: "PT. Teknika Pesona Kahayan",
                logo: "/images/teknikapesonakahayan.png",
              },
              { name: "PT. Pelita Energi", logo: "/images/pelitaenergi.png" },
              {
                name: "PT. Biomass Wijaya Serayu Mandiri",
                logo: "/images/bwsm.png",
              },
              {
                name: "PT. Semburan Kreasi Teknik",
                logo: "/images/dutaenergilogo.png",
              },
              { name: "PT Ananta Trada", logo: "/images/dutaenergilogo.png" },
            ].map((company) => (
              <div
                key={company.name}
                className="group p-8 bg-white rounded-2xl border border-slate-100 hover:border-sky-200 hover:shadow-2xl hover:shadow-sky-100 transition-all duration-500"
              >
                <div className="flex h-32 w-full items-center justify-center mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <div className="relative w-40 h-20">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-50">
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {company.name}
                  </h4>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-4 text-xs font-bold text-slate-400 group-hover:text-sky-600 uppercase tracking-tighter transition-all"
                  >
                    Inquire Collaboration <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS SECTION (Replaces Final CTA) */}
      <section className="py-24 bg-sky-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-center"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-sky-400 uppercase tracking-[0.3em] mb-3">
              Trust & Partnership
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white">
              Our Valued Clients
            </h3>
            <div className="mt-4 h-1 w-20 bg-sky-500 mx-auto rounded-full"></div>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
            {[
              { name: "Client One", logo: "/images/clients/logo1.svg" },
              { name: "Client Two", logo: "/images/clients/logo2.svg" },
              { name: "Client Three", logo: "/images/clients/logo3.svg" },
              { name: "Client Four", logo: "/images/clients/logo4.svg" },
              { name: "Client Five", logo: "/images/clients/logo5.svg" },
              { name: "Client Six", logo: "/images/clients/logo6.svg" },
              { name: "Client Seven", logo: "/images/clients/logo7.svg" },
            ].map((client, idx) => (
              <div
                key={idx}
                className="group relative flex items-center justify-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-sky-400/50 hover:bg-white/10 transition-all duration-500"
              >
                <div className="relative w-full h-12">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Optional: Small Link to Contact below the grid */}
          <div className="mt-16 text-center">
            <p className="text-sky-200 text-sm mb-6">
              Ready to join our network of successful partnerships?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white font-bold hover:text-sky-400 transition-colors"
            >
              Work with us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
