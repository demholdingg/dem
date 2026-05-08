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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide}
              className="about-hero-slide absolute inset-0"
              style={{
                backgroundImage: `url("${slide}")`,
                animationDelay: `${index * 6}s`,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/25 via-slate-950/60 to-slate-950/80" />

        <div className="container-custom relative py-16 sm:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sky-300 font-semibold uppercase text-sm tracking-wider">
                Tentang Kami
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Duta Energi Muliatama
              </h1>
              <p className="mt-6 max-w-3xl text-white/85 leading-8">
                Duta Energi Muliatama (DEM Holding) berdiri sejak tahun 2009 dan
                berkembang menjadi grup usaha dengan divisi berkelanjutan pada
                sektor energi, industri, teknologi, dan inovasi.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/services" className="btn btn-primary">
                  Lihat Layanan
                </Link>
                <Link
                  href="/contact"
                  className="btn border border-white/30 bg-white/10 text-white hover:bg-white/20"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 shadow-sm backdrop-blur-sm">
                <div className="relative h-40 w-full">
                  <Image
                    src="/dutaenergilogo.png"
                    alt="Logo Duta Energi Muliatama"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-wider text-white/70">
                  Berdiri sejak
                </p>
                <p className="mt-2 text-2xl font-bold text-white">2009</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-wider text-white/70">
                  Fokus
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  Energi, Industri, Teknologi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container-custom grid gap-6 lg:grid-cols-2">
          <div className="card">
            <p className="text-sky-700 font-semibold uppercase text-sm tracking-wider">
              Visi
            </p>
            <p className="mt-4 text-slate-700 leading-8">
              Menjadi grup perusahaan nasional yang unggul dan terpercaya dalam
              solusi energi, industri, teknologi, dan inovasi berkelanjutan.
            </p>
          </div>
          <div className="card">
            <p className="text-sky-700 font-semibold uppercase text-sm tracking-wider">
              Misi
            </p>
            <ul className="mt-4 space-y-3 text-slate-700 leading-7">
              <li>
                Menyediakan layanan engineering dan contracting yang aman,
                andal, dan terukur.
              </li>
              <li>
                Mengutamakan kualitas kerja, kepatuhan standar, dan kepuasan
                pelanggan.
              </li>
              <li>
                Mendorong inovasi berkelanjutan untuk mendukung pertumbuhan
                industri nasional.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <p className="text-sky-700 font-semibold uppercase text-sm tracking-wider">
            Nilai Perusahaan
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Komitmen dalam setiap proyek
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="card">
              <p className="text-sm font-semibold text-slate-900">
                Keselamatan Kerja
              </p>
              <p className="mt-3 text-sm text-slate-600 leading-7">
                Setiap pekerjaan dijalankan dengan prosedur K3 dan pengawasan
                ketat.
              </p>
            </div>
            <div className="card">
              <p className="text-sm font-semibold text-slate-900">
                Kualitas Terukur
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li>Standar kerja terdokumentasi</li>
                <li>Pemeriksaan pada tahapan penting</li>
                <li>Hasil sesuai kebutuhan klien</li>
              </ul>
            </div>
            <div className="card">
              <p className="text-sm font-semibold text-slate-900">
                Integritas Delivery
              </p>
              <p className="mt-3 text-sm text-slate-600 leading-7">
                Fokus pada ketepatan waktu, komunikasi terbuka, dan tanggung
                jawab penuh.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
