import SectionHeading from "./SectionHeading";
import { Reveal } from "./motion/primitives";
import { experience } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 py-8 md:py-10">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 md:px-10">
        <SectionHeading index="02" label="Experience" />

        {experience.map((job) => (
          <div
            key={job.company}
            className="grid gap-3 md:grid-cols-[180px_1fr] md:gap-8"
          >
            <Reveal>
              <div className="font-mono text-xs md:text-sm">
                <p className="text-accent">{job.period}</p>
                <p className="mt-0.5 text-fg-faint">{job.location}</p>
              </div>
            </Reveal>

            <div>
              <Reveal delay={0.05}>
                <h3 className="font-display text-lg font-semibold tracking-tight md:text-xl">
                  {job.role}
                </h3>
                <p className="mt-0.5 text-sm text-fg-muted">
                  <span className="text-fg-faint">at</span> {job.company}
                </p>
              </Reveal>

              <ul className="mt-3 space-y-2">
                {job.bullets.map((bullet, i) => (
                  <li key={bullet}>
                    <Reveal
                      delay={0.08 + 0.05 * i}
                      className="flex gap-3 text-sm leading-relaxed text-fg-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.7em] h-px w-3.5 shrink-0 bg-accent"
                      />
                      <span>{bullet}</span>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
