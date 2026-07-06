"use client";

import Image from "next/image";
import { heroContent } from "@/data/portfolio";
import { getLenisInstance } from "@/lib/lenis";

export default function Hero() {
  const handleProjectsScroll = () => {
    const lenis = getLenisInstance();
    const element = document.querySelector("#projects");

    if (lenis && element instanceof HTMLElement) {
      lenis.scrollTo(element, {
        duration: 1.5,
        offset: -20,
      });
      return;
    }

    if (element instanceof HTMLElement) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[var(--border)] pt-36 pb-24 md:pt-44 md:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-[-220px] h-[500px] w-[980px] -translate-x-1/2 rounded-full hero-glow-primary blur-3xl md:top-[-240px] md:h-[620px] md:w-[1200px]" />
        <div className="absolute left-1/2 top-[10px] h-[280px] w-[620px] -translate-x-1/2 rounded-full hero-glow-secondary blur-3xl md:top-[40px] md:h-[360px] md:w-[760px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">
          <div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              Hello, I am Vatsal Solanki
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-[var(--muted)] md:text-xl">
              DevOps Engineer with hands on experience in containerization using
              Docker and Docker Compose, CI/CD automation with Jenkins,
              container orchestration with Kubernetes, AWS cloud infrastructure,
              and monitoring with Prometheus and Grafana, focused on building
              reliable and production ready DevOps workflows.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-base md:text-lg">
              <div className="flex items-center gap-3">
                <span className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
                  Email:
                </span>
                <a
                  href={`mailto:${heroContent.email}`}
                  className="font-medium text-[var(--foreground)] transition hover:opacity-75"
                >
                  {heroContent.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
                  LinkedIn:
                </span>
                <a
                  href={heroContent.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-[var(--foreground)] transition hover:opacity-75"
                >
                  View Profile
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
                  GitHub:
                </span>
                <a
                  href={heroContent.github}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-[var(--foreground)] transition hover:opacity-75"
                >
                  View Repositories
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
                  Based in:
                </span>
                <span className="font-medium text-[var(--foreground)]">
                  Ahmedabad
                </span>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleProjectsScroll}
                className="inline-flex rounded-full border border-[var(--border)] bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition hover:opacity-90"
              >
                View Projects
              </button>

              <a
                href="/resume/VatsalSolanki.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--surface-2)]"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[260px] w-[220px] overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_18px_60px_rgba(0,0,0,0.18)] sm:h-[320px] sm:w-[270px] md:h-[360px] md:w-[300px]">
              <Image
                src="/myimage/image.png"
                alt="Vatsal Solanki portrait"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}