import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, Mail, MessageSquare } from "lucide-react";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Duta Energi`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <div className="bg-white min-h-screen">
      {/* HEADER SECTION - Modern Clean Look */}
      <div className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/grid.svg')] bg-center"></div>
        <div className="container-custom relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sky-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-sm font-bold uppercase tracking-widest">
              Back to Services
            </span>
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="mt-6 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Professional engineering solutions tailored for high-scale
              industrial and commercial environments.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* LEFT COLUMN - Main Content */}
            <div className="lg:col-span-7">
              <div className="prose prose-slate lg:prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Service Overview
                </h2>
                <p className="text-slate-600 leading-8 mb-8 text-lg">
                  {service.description}
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  What We Deliver
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 mb-12">
                  {[
                    "Technical Site Survey & Analysis",
                    "Engineering Design & Consultation",
                    "Installation & System Integration",
                    "Quality Assurance & Testing",
                    "Post-Project Maintenance",
                    "Safety Compliance Certification",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-3 items-start p-4 rounded-xl bg-slate-50 border border-slate-100 group hover:border-sky-200 hover:bg-white transition-all"
                    >
                      <CheckCircle2 className="text-sky-600 mt-1" size={20} />
                      <span className="font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Sidebar / Inquiry Card */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 p-8 rounded-[2rem] bg-slate-900 text-white shadow-2xl shadow-sky-900/20 overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10">
                  <MessageSquare size={120} />
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">
                    Request Project Inquiry
                  </h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    Have a specific requirement for {service.title}? Our
                    engineering team is ready to assist you with a detailed
                    technical proposal.
                  </p>

                  <div className="space-y-4">
                    <a
                      href={`mailto:hello@dutaenergi.co.id?subject=Inquiry: ${service.title}`}
                      className="flex items-center justify-center gap-3 w-full py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl transition-all"
                    >
                      <Mail size={20} />
                      Send Email Proposal
                    </a>

                    <a
                      href="https://wa.me/628123456789" // Ganti dengan nomor asli
                      target="_blank"
                      className="flex items-center justify-center gap-3 w-full py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white font-bold rounded-xl transition-all"
                    >
                      <MessageSquare size={20} />
                      Consult via WhatsApp
                    </a>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/10">
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-4">
                      Why choose us?
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={14} className="text-sky-500" /> ISO
                        Certified Standards
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={14} className="text-sky-500" />{" "}
                        Experienced Engineering Team
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 size={14} className="text-sky-500" />{" "}
                        On-time Project Delivery
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
