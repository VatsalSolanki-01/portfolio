import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="border-b border-[var(--border)] py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
            Certifications
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
            Cloud and platform credentials
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((certification) => (
            <article
              key={certification.title}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8"
            >
              <h3 className="text-2xl font-semibold text-[var(--foreground)]">
                {certification.title}
              </h3>
              <p className="mt-3 text-base text-[var(--muted)]">
                {certification.issuer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}