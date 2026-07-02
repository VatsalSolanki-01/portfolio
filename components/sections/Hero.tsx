import { heroContent } from "@/data/portfolio";
import { siteConfig } from "@/constants/site";

export default function Hero() {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center px-6 py-20">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/50">
            Portfolio 2026
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-white md:text-7xl">
            {heroContent.name}
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/75 md:text-2xl">
            {heroContent.role}
          </p>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/60 md:text-lg">
            {heroContent.intro}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full border border-white bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              View Projects
            </a>

            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
            >
              GitHub
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}