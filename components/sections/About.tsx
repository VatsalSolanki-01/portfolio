import { aboutContent } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="border-b border-[var(--border)] py-24">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">
            {aboutContent.title}
          </p>
        </div>

        <div>
          <div className="space-y-6">
            {aboutContent.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-8 text-[var(--muted)] md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="mb-5 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
              Core Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              {aboutContent.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--foreground)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}