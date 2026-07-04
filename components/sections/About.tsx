import Image from "next/image";
import { aboutContent, foundations, techStack } from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-[var(--border)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-[0.95fr_1.25fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--muted)]">
              About
            </p>

            <h2 className="mt-5 max-w-sm text-3xl font-semibold leading-tight tracking-tight text-[var(--foreground)] md:text-4xl">
              Building reliable infrastructure with automation and visibility in mind
            </h2>
          </div>

          <div>
            <div className="space-y-6">
              {aboutContent.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg md:leading-9"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[var(--muted)]">
                Tech Stack
              </p>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--foreground)] md:text-3xl">
                Tools and technologies I work with
              </h3>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
              My core stack spans cloud infrastructure, CI/CD automation, observability,
              and backend engineering, with an emphasis on practical DevOps workflows.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {techStack.map((group) => (
              <article
                key={group.category}
                className="rounded-[30px] border border-[var(--border)] bg-[var(--background)] p-7 shadow-[0_14px_50px_rgba(0,0,0,0.06)] md:p-8"
              >
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted)]">
                    {group.category}
                  </p>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex min-h-[112px] flex-col items-center justify-center rounded-[24px] border border-[var(--border)] bg-[var(--surface)] px-4 py-5 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)]"
                    >
                      <div className="relative h-10 w-10">
                        <Image
                          src={item.logo}
                          alt={item.name}
                          fill
                          className="object-contain"
                          sizes="40px"
                        />
                      </div>

                      <p className="mt-4 text-sm font-medium text-[var(--foreground)]">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-7 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="md:max-w-xs">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--muted)]">
                  Foundations & Supporting Tools
                </p>
              </div>

              <div className="flex flex-wrap gap-3 md:max-w-3xl">
                {foundations.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-sm text-[var(--foreground)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}