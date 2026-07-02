import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-white/10 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            Projects
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            Selected work and ongoing builds
          </h2>
        </div>

        <div className="grid gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-white/65">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/75"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full border border-white/15 px-5 py-2.5 text-sm text-white transition hover:border-white/35 hover:bg-white/5"
                    >
                      View
                    </a>
                  ) : (
                    <span className="inline-flex rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/40">
                      Private / In progress
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}