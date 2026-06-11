import Image from "next/image";

export const metadata = {
  title: "About Us | Duta Energi",
  description:
    "Learn more about PT. Duta Energi Muliatama, our mission, vision, and commitment to excellence in engineering and contracting.",
  openGraph: {
    title: "About Us | Duta Energi",
    description:
      "Discover the story behind Duta Energi Muliatama and our dedication to providing high-quality engineering solutions.",
    images: ["/images/opengraph-default.jpg"], // Ganti dengan gambar OG yang relevan
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/grid.svg')] bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <p className="text-sky-400 font-bold uppercase text-xs tracking-widest mb-4">
            Our Story
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            About <span className="text-sky-400">Duta Energi</span>
          </h1>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
            Established in 2009, PT. Duta Energi Muliatama is a leading provider
            of engineering solutions and contracting services in Indonesia.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-20 lg:py-32">
        <div className="container-custom max-w-3xl mx-auto prose prose-lg text-slate-700">
          <h2>Our Mission</h2>
          <p>
            To deliver innovative, reliable, and sustainable engineering
            solutions that empower our clients and contribute to national
            development.
          </p>
          <h2>Our Vision</h2>
          <p>
            To be the most trusted and preferred partner in the energy and
            infrastructure sector, recognized for our excellence and integrity.
          </p>
          {/* Tambahkan konten lain tentang perusahaan di sini */}
        </div>
      </section>
    </div>
  );
}
