import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Contact | Duta Energi",
  description: "Get in touch with PT. Duta Energi Muliatama.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* HERO SECTION - Konsisten dengan halaman lain agar Navbar terlihat */}
      <section className="relative bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('/grid.svg')] bg-center"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <p className="text-sky-400 font-bold uppercase text-xs tracking-widest mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Let’s discuss your{" "}
              <span className="text-sky-400">next project</span>
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              Have a complex engineering challenge? Send us your scope and
              timeline. Our team will provide the technical expertise you need.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT SECTION */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid gap-16 lg:grid-cols-12 items-start">
            {/* LEFT COLUMN: Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-8">
                  {/* Item 1: Email */}
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                        Email Us
                      </p>
                      <a
                        href="mailto:hello@dutaenergi.co.id"
                        className="text-lg text-slate-600 hover:text-sky-700 transition-colors"
                      >
                        admin@dutaenergi.co.id
                      </a>
                    </div>
                  </div>

                  {/* Item 2: Phone */}
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                        Call Us
                      </p>
                      <a
                        href="tel:+6285693922994"
                        className="text-lg text-slate-600 hover:text-sky-700 transition-colors"
                      >
                        +62 856 9392 2994
                      </a>
                    </div>
                  </div>

                  {/* Item 3: Address */}
                  <div className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                        Our Office
                      </p>
                      <p className="text-lg text-slate-600">
                        Alamanda Tower, 25th Floor, Jl. T.B. Simatupang Kav.
                        23-24 Jakarta 12430, Cilandak Bar., Kec. Cilandak, Kota
                        Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12450
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="flex items-center gap-3 mb-4 text-slate-900 font-bold">
                  <Clock size={20} className="text-sky-600" />
                  <h3>Business Hours</h3>
                </div>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex justify-between border-b border-slate-200 pb-2">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">08:00 - 17:00</span>
                  </li>
                  <li className="flex justify-between pt-2">
                    <span>Saturday - Sunday</span>
                    <span className="text-slate-400 italic">Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT COLUMN: Instruction Card */}
            <div className="lg:col-span-7">
              <div className="relative bg-white p-8 lg:p-12 rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">
                  What to include in your request
                </h2>

                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                  {[
                    "Project Scope & Goals",
                    "Location & Site Constraints",
                    "Target Timeline",
                    "Estimated Budget Range",
                    "Preferred Contact Details",
                    "Technical Requirements",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2
                        className="text-sky-500 flex-shrink-0"
                        size={20}
                      />
                      <span className="text-slate-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-8 bg-sky-900 rounded-2xl text-white">
                  <h3 className="text-lg font-bold mb-3">Ready to start?</h3>
                  <p className="text-sky-100 text-sm leading-relaxed mb-6">
                    After we receive your request, our engineering team will
                    review it and get back to you within 24-48 hours.
                  </p>
                  <a
                    href="mailto:info@dutaenergi.co.id?subject=Request%20for%20Quote%20-%20Duta%20Energi"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-sky-900/20"
                  >
                    Email Our Team <Mail size={18} />
                  </a>
                </div>

                <div className="mt-8 text-center">
                  <Link
                    href="/services"
                    className="text-sm font-bold text-slate-400 hover:text-sky-600 transition-colors inline-flex items-center gap-2"
                  >
                    Browse our capabilities first <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
