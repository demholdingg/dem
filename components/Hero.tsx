import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/bg.hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-slate-950/65" />
      <div className="absolute inset-0 opacity-35 [background:radial-gradient(900px_circle_at_15%_10%,rgba(56,189,248,0.24),transparent_40%),radial-gradient(900px_circle_at_90%_0%,rgba(16,185,129,0.18),transparent_40%)]" />

      <div className="container-custom relative z-10 py-20 sm:py-24 lg:py-28">
        <div className="max-w-4xl text-white">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/90">
            Mitra terpercaya untuk engineering dan contracting
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Solusi Mechanical Engineering dan Layanan Contracting yang Andal
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/80 sm:text-lg">
            Kami menghadirkan layanan mechanical engineering dan contracting yang mendukung
            sektor energi serta infrastruktur Indonesia dengan fokus pada keselamatan, presisi,
            dan kualitas kerja.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/services" className="btn btn-primary">
              Layanan Kami
            </Link>
            <Link href="/projects" className="btn btn-outline">
              Lihat Proyek
            </Link>
          </div>

          <dl className="mt-12 grid max-w-2xl grid-cols-1 gap-4 text-white/85 sm:grid-cols-3 sm:gap-6">
            <div>
              <dt className="text-xs uppercase tracking-wider text-white/60">Fokus</dt>
              <dd className="mt-2 text-sm font-semibold">Industri & Energi</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-white/60">Komitmen</dt>
              <dd className="mt-2 text-sm font-semibold">Safety & Quality</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-white/60">Delivery</dt>
              <dd className="mt-2 text-sm font-semibold">Tepat Waktu</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
