import SectionHeading from "./SectionHeading";
import { Reveal } from "./motion/primitives";
import { projects } from "../data/resume";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 py-8 md:py-10">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 md:px-10">
        <SectionHeading index="03" label="Work" />

        <div className="divide-y divide-line border-y border-line">
          {projects.map((project, i) => (
            <Reveal key={project.title}>
              <article className="group grid gap-1.5 py-4 transition-colors duration-500 hover:bg-surface md:grid-cols-[48px_1fr] md:gap-5 md:py-4">
                <p
                  aria-hidden="true"
                  className="font-mono text-xs text-fg-faint transition-colors duration-300 group-hover:text-accent"
                >
                  {String(i + 1).padStart(2, "0")}
                </p>

                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <h3 className="font-display text-base font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-1 md:text-lg">
                      {project.title}
                    </h3>
                    <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-fg-muted">
                      {project.context}
                    </span>
                  </div>

                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-fg-muted">
                    {project.description}
                  </p>

                  {project.bullets && (
                    <ul className="mt-2 space-y-1">
                      {project.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 text-sm leading-relaxed text-fg-muted"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[0.7em] h-px w-3 shrink-0 bg-accent"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <ul className="mt-2.5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-line px-2 py-0.5 font-mono text-[11px] text-fg-muted transition-colors duration-300 group-hover:border-line-strong"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
