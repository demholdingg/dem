import Link from "next/link";

export const metadata = {
  title: "Blog | Duta Energi",
  description: "Updates and insights from PT. Duta Energi Muliatama.",
};

export default function BlogPage() {
  return (
    <div>
      <section className="section section-muted">
        <div className="container-custom">
          <p className="text-sky-700 font-semibold uppercase text-sm tracking-wider">Blog</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Insights & updates
          </h1>
          <p className="mt-6 max-w-3xl text-slate-600 leading-8">
            This section is ready for company updates, project highlights, and engineering notes.
            You can connect it later to a CMS or static markdown posts.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom grid gap-6 lg:grid-cols-3">
          <div className="card lg:col-span-2">
            <h2 className="text-lg font-bold text-slate-900">No posts yet</h2>
            <p className="mt-3 text-sm text-slate-600 leading-7">
              When you’re ready, we can add a simple blog system (MDX) or integrate a CMS so your
              team can publish without touching code.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">
                Request Setup
              </Link>
              <Link href="/" className="btn btn-secondary">
                Back to Home
              </Link>
            </div>
          </div>

          <div className="card">
            <h2 className="text-lg font-bold text-slate-900">Suggested topics</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Safety & quality practices on site</li>
              <li>Project milestones and case studies</li>
              <li>Maintenance and reliability tips</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
