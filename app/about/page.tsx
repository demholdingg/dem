import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About | Duta Energi",
  description: "Learn more about PT. Duta Energi Muliatama.",
};

export default function AboutPage() {
  const heroSlides = [
    "/images/dem1.jpg",
    "/images/dem2.jpg",
    "/images/dem3.jpg",
  ];

  return (
    <div>
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide}
              className="about-hero-slide absolute inset-0"
              style={{
                backgroundImage: `url("${slide}")`,
                animationDelay: `${index * 5}s`,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-slate-800/65" />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/25 via-slate-950/60 to-slate-950/80" />

        <div className="container-custom relative mt-36 sm:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sky-300 font-semibold uppercase text-sm tracking-wider">
                About Us
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Duta Energi Muliatama
              </h1>
              <p className="mt-6 max-w-3xl text-white/85 leading-8">
                Duta Energi Muliatama or DEM HOLDING was established in 2009 and
                has grown into a holding company that houses 5 large companies
                with various sustainable business divisions with the Latest
                Energy, Industry, Technology, & Innovation. By upholding trust,
                satisfaction, commitment, quality, full responsibility, &
                certified.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/services" className="btn btn-primary">
                  Our Services
                </Link>
                <Link
                  href="/contact"
                  className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container-custom grid gap-6 lg:grid-cols-2">
          <div className="card">
            <p className="text-sky-700 font-semibold uppercase text-sm tracking-wider">
              Vision
            </p>
            <p className="mt-4 text-slate-700 leading-8">
              Taking the Lead in Developing Energy and Infrastructure
              Technologies, Creating a Sustainable Future with Innovative
              Mechanical and Electrical Construction Solutions. Our goal is to
              play a significant role in advancing the energy technology and
              infrastructure industries. Our dedication lies in utilizing
              state-of-the-art technologies in the sectors of mechanical and
              electrical building to create a sustainable future. Our objective
              is to be innovators and pioneers in the creation of
              technologically advanced, sustainable, and efficient built
              environments by merging our knowledge in both fields. Our vision
              entails a constructive shift in the construction and management of
              energy, contributing significantly to global development.{" "}
            </p>
          </div>
          <div className="card">
            <p className="text-sky-700 font-semibold uppercase text-sm tracking-wider">
              Mission
            </p>
            <ul className="mt-4 space-y-3 text-slate-700 leading-7">
              <li>
                Integrate mechanical-electrical systems and construction using a
                holistic approach to produce robust, effective, and functional
                built environments. - Encourage ongoing sustainable innovation
                in mechanical and electrical technology and construction to
                develop systems that are both energy- and
                environmentally-efficient. - Create enduring strategic alliances
                with stakeholders, business partners, and clients in order to
                develop and put into practice solutions that can handle upcoming
                difficulties. - To ensure a workforce that is aware and skilled,
                offer education and training programs that are designed to
                improve understanding of the mechanicalelectrical and
                construction sectors. - Provide creative and sustainable energy
                solutions to meet changing energy needs while reducing the
                negative effects on the environment. - Make quality and safety
                the first priorities in every project so that the results not
                only meet but also surpass the expectations of your clients. -
                Actively contribute to the community by undertaking projects
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <p className="text-sky-700 font-semibold uppercase text-sm tracking-wider">
            Subsidiary Company
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Business Units
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "PT. Duta Persada Power",
                logo: "/images/dutapersadapower.png",
              },
              {
                name: "PT. Teknika Pesona Kahayan",
                logo: "/images/teknikapesonakahayan.png",
              },
              {
                name: "PT. Pelita Energi",
                logo: "/images/pelitaenergi.png",
              },
              {
                name: "PT. Biomass Wijaya Serayu Mandiri",
                logo: "/images/bwsm.png",
              },
              {
                name: "PT. Semburan Kreasi Teknik",
                logo: "/images/dutaenergilogo.png",
              },
              {
                name: "PT Ananta Trada",
                logo: "/images/dutaenergilogo.png",
              },
            ].map((company) => (
              <div
                key={company.name}
                className="card flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-slate-100 p-4">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={70}
                    height={70}
                    className="object-contain"
                  />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {company.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
