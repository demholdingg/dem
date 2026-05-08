import Link from "next/link";

export const metadata = {
  title: "Contact | Duta Energi",
  description: "Get in touch with PT. Duta Energi Muliatama.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="section section-muted">
        <div className="container-custom">
          <p className="text-sky-700 font-semibold uppercase text-sm tracking-wider">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Let’s discuss your project
          </h1>
          <p className="mt-6 max-w-3xl text-slate-600 leading-8">
            Send a short scope and timeline. We’ll reply with questions, options, and the next
            steps to move forward.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom grid gap-8 lg:grid-cols-2">
          <div className="card">
            <h2 className="text-lg font-bold text-slate-900">Contact information</h2>
            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <p>
                Email:{" "}
                <a className="font-semibold text-sky-700 hover:text-sky-800" href="mailto:hello@dutaenergi.co.id">
                  hello@dutaenergi.co.id
                </a>
              </p>
              <p>
                Phone:{" "}
                <a className="font-semibold text-sky-700 hover:text-sky-800" href="tel:+620000000000">
                  +62 000-0000-0000
                </a>
              </p>
              <p>Address: Jakarta, Indonesia</p>
            </div>
            <p className="mt-6 text-sm text-slate-500 leading-7">
              You can also reach us via the button below to open your email client with a prepared
              subject.
            </p>
            <a
              className="btn btn-primary mt-6"
              href="mailto:hello@dutaenergi.co.id?subject=Request%20for%20Quote%20-%20Duta%20Energi"
            >
              Email Us
            </a>
          </div>

          <div className="card">
            <h2 className="text-lg font-bold text-slate-900">What to include</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              <li>Scope (what needs to be done)</li>
              <li>Location and site constraints</li>
              <li>Target timeline</li>
              <li>Preferred contact details</li>
            </ul>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold text-slate-900">Next steps</p>
              <p className="mt-2 text-sm text-slate-600 leading-7">
                After we receive your request, we’ll confirm requirements and propose an approach
                aligned to safety, schedule, and quality.
              </p>
              <Link href="/services" className="inline-flex items-center gap-2 mt-4 text-sky-700 font-semibold hover:text-sky-800">
                See our services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
