"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const certifications = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management System",
    image: "/images/ISO/ISO 9001-2015.png",
  },
  {
    name: "ISO 14001:2015",
    description: "Environmental Management System",
    image: "/images/ISO/ISO 14001-2015.png",
  },
  {
    name: "ISO 45001:2018",
    description: "Occupational Health and Safety Management System",
    image: "/images/ISO/ISO 45001-2018.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Iso() {
  return (
    <section id="iso" className="section section-muted">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-sky-600">
            Certified Standards
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Our ISO Certifications
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Our management systems support consistent quality, environmental
            responsibility, and occupational health and safety.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {certifications.map((certification) => (
            <motion.article
              key={certification.name}
              variants={itemVariants}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="relative aspect-[3/4] bg-white p-4 sm:p-6">
                <Image
                  src={certification.image}
                  alt={`${certification.name} certificate`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-4"
                />
              </div>
              <div className="border-t border-slate-100 px-5 py-4">
                <h3 className="font-bold text-slate-900">
                  {certification.name}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {certification.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
