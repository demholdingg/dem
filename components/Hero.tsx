import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0"
      >
        <source src="/videos/bg.hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-slate-950/80 z-0" />
      <div className="absolute inset-0 opacity-35 [background:radial-gradient(900px_circle_at_15%_10%,rgba(56,189,248,0.24),transparent_40%),radial-gradient(900px_circle_at_90%_0%,rgba(16,185,129,0.18),transparent_40%)] z-0" />

      <div className="container-custom relative z-10 min-h-screen flex flex-col justify-center py-20 sm:py-24 lg:py-28">
        <div className="max-w-4xl text-white mx-auto w-full text-center">
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl drop-shadow-3xl">
            Duta Energi{" "}
            <span className="text-sky-400">Contracting Services</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/80 sm:text-lg mx-auto">
            We keep things simple, putting you in control so you can make
            informed choices
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center justify-center">
            <Link href="/about" className="btn btn-primary">
              About Us
            </Link>
            <Link href="/projects" className="btn btn-outline">
              Our Projects
            </Link>
          </div>

          <dl className="mt-12 grid max-w-2xl grid-cols-1 gap-4 text-white/85 sm:grid-cols-3 sm:gap-6 mx-auto"></dl>
        </div>
      </div>
    </section>
  );
}
