import { contactContent } from "@/data/portfolio";
import { siteConfig } from "@/constants/site";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
            {contactContent.title}
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
            Let’s connect
          </h2>

          <p className="mt-6 text-base leading-8 text-[var(--muted)] md:text-lg">
            {contactContent.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${contactContent.email}`}
              className="rounded-full border border-[var(--foreground)] bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition hover:opacity-90"
            >
              Email me
            </a>

            <a
              href={siteConfig.links.resume}
              download
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--surface-2)]"
            >
              Resume
            </a>

            <a
              href={contactContent.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--surface-2)]"
            >
              GitHub
            </a>

            <a
              href={contactContent.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--surface-2)]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}