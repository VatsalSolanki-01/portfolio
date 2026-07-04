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
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">
              {heroContent.role}
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-[var(--foreground)] md:text-7xl">
              {heroContent.name}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-[var(--muted)] md:text-xl">
              {heroContent.intro}
            </p>

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

            <div className="mt-14">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
                Based in
              </p>
              <p className="mt-3 text-lg text-[var(--foreground)]">
                {heroContent.location}
              </p>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 mx-auto h-[390px] w-[290px] rounded-[36px] bg-[var(--foreground)]/8 blur-3xl lg:mx-0" />

            <div className="relative w-full max-w-[320px] overflow-hidden rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.14)] sm:max-w-[340px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[var(--surface-2)]">
                <Image
                  src="/myimage/image.png"
                  alt={`${heroContent.name} portrait`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 320px, 340px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}