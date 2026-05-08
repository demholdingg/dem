import Link from "next/link";

export default function CTA() {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="rounded-3xl border border-slate-200 bg-slate-950 px-8 py-10 sm:px-10 sm:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-sky-300 uppercase text-sm font-semibold tracking-wider">
              Ready To Work Together?
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let’s build something great together
            </h2>
            <p className="mt-4 text-white/75 max-w-2xl leading-7">
              Share your scope and timeline—our team will respond with a clear plan and next steps.
            </p>
          </div>

          <Link href="/contact" className="btn btn-primary">
            Contact Us Now
          </Link>
        </div>
      </div>
    </section>
  );
}
