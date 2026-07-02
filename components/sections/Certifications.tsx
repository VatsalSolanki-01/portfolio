import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="border-b border-[var(--border)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 md:mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
            Certifications
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
            Certifications and cloud learning milestones
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((certification) => (
            <article
              key={certification}
              className="rounded-[28px] border border-[var(--border)] bg-[var(--background)] p-8 shadow-[0_14px_50px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
                    Certification
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--foreground)]">
                    {certification}
                  </h3>
                </div>

                <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  Verified
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}