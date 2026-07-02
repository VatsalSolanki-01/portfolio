import Image from "next/image";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-[var(--border)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
            Projects
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
            Selected work and engineering focused builds
          </h2>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] transition duration-300 hover:-translate-y-1 hover:bg-[var(--surface-2)]"
            >
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-8 lg:p-10">
                  <h3 className="text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-[var(--muted)]">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--foreground)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full border border-[var(--border)] px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-[var(--surface-2)]"
                    >
                      GitHub
                    </a>

                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-full border border-[var(--border)] px-5 py-2.5 text-sm text-[var(--foreground)] transition hover:bg-[var(--surface-2)]"
                      >
                        Live
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="border-t border-[var(--border)] lg:border-t-0 lg:border-l">
                  <div className="flex h-full items-center justify-center bg-[var(--surface-2)] p-4 sm:p-5 lg:min-h-[380px]">
                    <div className="relative h-[240px] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-white sm:h-[300px] lg:h-[340px]">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={`${project.title} architecture diagram`}
                          fill
                          className="object-contain p-3"
                          sizes="(max-width: 1024px) 100vw, 40vw"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center p-6 text-center">
                          <p className="text-sm text-[var(--muted)]">
                            Architecture diagram coming soon
                          </p>
                        </div>
                      )}
                    </div>
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