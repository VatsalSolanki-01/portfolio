"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 90,
    scale: 0.975,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-[var(--border)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 md:mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
            Projects
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
            DevOps, backend, and infrastructure projects
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
            Projects focused on CI/CD automation, Kubernetes deployments,
            observability, backend systems, and production style DevOps
            workflows.
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="space-y-10"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              className="group sticky top-28 overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--background)] shadow-[0_24px_70px_rgba(0,0,0,0.16)]"
              style={{
                zIndex: 10 + index,
              }}
            >
              <div className="absolute inset-0 bg-[var(--background)]" />

              <div className="relative z-10 grid h-[820px] lg:h-[660px] lg:grid-cols-2">
                <div className="flex h-full flex-col justify-between p-7 sm:p-8 md:p-10 lg:p-12">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                        Project {index + 1}
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold tracking-tight text-[var(--foreground)] md:text-3xl">
                      {project.title}
                    </h3>

                    <ul className="mt-6 space-y-4 text-base leading-8 text-[var(--muted)]">
                      {project.bullets.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-[11px] h-2 w-2 shrink-0 rounded-full bg-[var(--foreground)]/70" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap gap-3">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm text-[var(--foreground)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-3 pb-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-[var(--background)] transition duration-300 hover:opacity-90"
                    >
                      View GitHub
                    </a>

                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-full border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition duration-300 hover:bg-[var(--surface)]"
                      >
                        Live Preview
                      </a>
                    ) : null}
                  </div>
                </div>

                <div className="border-t border-[var(--border)] lg:border-t-0 lg:border-l">
                  <div className="flex h-full items-center justify-center bg-[var(--surface)] p-5 sm:p-6 lg:p-8">
                    <div className="relative h-[260px] w-full overflow-hidden rounded-[24px] border border-[var(--border)] bg-white shadow-[0_14px_50px_rgba(0,0,0,0.12)] sm:h-[320px] md:h-[380px] lg:h-[420px] dark:bg-[#0d0d0d]">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={`${project.title} architecture diagram`}
                          fill
                          loading={index === 0 ? "eager" : "lazy"}
                          className="object-contain p-4 transition duration-500 group-hover:scale-[1.015]"
                          sizes="(max-width: 1024px) 100vw, 50vw"
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
            </motion.article>
          ))}

          <div className="h-[52rem] lg:h-[36rem]" />
        </motion.div>
      </div>
    </section>
  );
}