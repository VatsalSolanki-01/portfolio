import { heroContent } from "@/data/portfolio";
import { siteConfig } from "@/constants/site";

export default function Hero() {
  return (
    <section className="border-b border-[var(--border)]">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center px-6 py-20">
        <div className="max-w-4xl">
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-[var(--foreground)] md:text-7xl">
            {heroContent.name}
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-[var(--foreground)]/85 md:text-2xl">
            {heroContent.role}
          </p>

          <p className="mt-8 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
            {heroContent.intro}
          </p>

          <p className="mt-4 text-sm text-[var(--muted)]">
            Based in {heroContent.location}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition hover:opacity-90"
            >
              View Projects
            </a>

            <a
              href={siteConfig.links.resume}
              download
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--surface-2)]"
            >
              Download Resume
            </a>

            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--surface-2)]"
            >
              GitHub
            </a>

            <a
              href="#contact"
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--surface-2)]"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}