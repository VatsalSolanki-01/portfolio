import { contactContent } from "@/data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            {contactContent.title}
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            Let’s connect
          </h2>

          <p className="mt-6 text-base leading-8 text-white/65 md:text-lg">
            {contactContent.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${contactContent.email}`}
              className="rounded-full border border-white bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              Email me
            </a>

            <a
              href={contactContent.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
            >
              GitHub
            </a>

            <a
              href={contactContent.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}