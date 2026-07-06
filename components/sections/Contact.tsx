import Image from "next/image";
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
              Let’s connect, learn and grow together.
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${contactContent.email}`}
              aria-label="Send email"
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)]"
            >
              <Image
                src="/contact/gmail.svg"
                alt="Mail"
                width={24}
                height={24}
                className="object-contain"
              />
            </a>

            <a
              href={contactContent.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)]"
            >
              <Image
                src="/contact/github.svg"
                alt="GitHub"
                width={24}
                height={24}
                className="object-contain"
              />
            </a>

            <a
              href={contactContent.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)]"
            >
              <Image
                src="/contact/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}