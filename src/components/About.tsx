import SectionHeading from "./SectionHeading";
import { Reveal } from "./motion/primitives";
import { about, highlights } from "../data/resume";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 py-8 md:py-10">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 md:px-10">
        <SectionHeading index="01" label="About" />

        <div className="grid gap-4 md:grid-cols-[1fr_1.5fr] md:gap-10">
          <Reveal>
            <h2 className="font-display text-xl font-semibold leading-tight tracking-tight md:text-2xl">
              Software for{" "}
              <span className="text-accent">regulated industries</span>.
            </h2>
          </Reveal>
          <div className="space-y-2.5">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={0.06 * i}>
                <p className="text-sm leading-relaxed text-fg-muted">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 border-t border-line pt-4 sm:grid-cols-3 md:mt-7 md:gap-6">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={0.08 * i}>
              <div>
                <p className="font-display text-lg font-semibold tracking-tight md:text-xl">
                  {item.title}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-fg-faint md:text-[11px]">
                  {item.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
