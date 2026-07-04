import Image from "next/image";
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

          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
            Credentials that reflect my foundation in cloud concepts, platform services, and practical engineering workflows.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {certifications.map((certification) => (
            <article
              key={certification.title}
              className="overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--background)] shadow-[0_14px_50px_rgba(0,0,0,0.06)]"
            >
              <div className="border-b border-[var(--border)] bg-[var(--surface)] p-5">
                <div className="relative h-[240px] w-full overflow-hidden rounded-[24px] border border-[var(--border)] bg-white dark:bg-[#0d0d0d]">
                  <Image
                    src={certification.image}
                    alt={certification.title}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                    {certification.issuer}
                  </span>

                  <span className="text-sm text-[var(--muted)]">
                    {certification.year}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-[var(--foreground)]">
                  {certification.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}