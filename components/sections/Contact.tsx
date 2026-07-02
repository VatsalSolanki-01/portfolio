import { contactContent } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
              Contact
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-[var(--foreground)] md:text-4xl">
              {contactContent.heading}
            </h2>

            <p className="mt-6 text-base leading-8 text-[var(--muted)] md:text-lg">
              {contactContent.description}
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 md:flex-row md:flex-wrap">
            <a
              href={`mailto:${contactContent.email}`}
              className="inline-flex w-fit items-center rounded-full border border-[var(--border)] bg-[var(--background)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition hover:opacity-80"
            >
              {contactContent.email}
            </a>

            <a
              href={contactContent.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center rounded-full border border-[var(--border)] bg-[var(--background)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition hover:opacity-80"
            >
              GitHub
            </a>

            <a
              href={contactContent.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center rounded-full border border-[var(--border)] bg-[var(--background)] px-5 py-3 text-sm font-medium text-[var(--foreground)] transition hover:opacity-80"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}