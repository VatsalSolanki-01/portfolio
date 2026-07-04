import Image from "next/image";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-[var(--border)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 md:mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
            Experience
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
            Professional experience and practical DevOps exposure
          </h2>
        </div>

        <div className="space-y-8">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="rounded-[32px] border border-[var(--border)] bg-[var(--background)] p-8 shadow-[0_14px_50px_rgba(0,0,0,0.06)] md:p-10"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-2 dark:bg-[#111111]">
                      <Image
                        src={item.logo}
                        alt={`${item.company} logo`}
                        fill
                        className="object-contain p-2"
                        sizes="48px"
                      />
                    </div>

                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
                        Company
                      </p>
                      <h3 className="mt-1 text-2xl font-semibold text-[var(--foreground)]">
                        {item.company}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-6 text-xl font-medium text-[var(--foreground)]">
                    {item.role}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3 text-sm text-[var(--muted)]">
                    <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5">
                      {item.duration}
                    </span>
                    <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5">
                      {item.location}
                    </span>
                  </div>

                  <ul className="mt-8 space-y-4">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-base leading-8 text-[var(--muted)]"
                      >
                        <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[var(--foreground)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:max-w-sm">
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
                    Tools and areas
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm text-[var(--foreground)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}