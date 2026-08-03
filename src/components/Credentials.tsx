import SectionHeading from "./SectionHeading";
import { Reveal } from "./motion/primitives";
import { certifications, education } from "../data/resume";

export default function Credentials() {
  return (
    <section id="credentials" className="scroll-mt-16 py-8 md:py-10">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 md:px-10">
        <SectionHeading index="05" label="Credentials" />

        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          <div>
            <Reveal>
              <h3 className="font-display text-base font-semibold tracking-tight">
                Certifications
              </h3>
            </Reveal>
            <ul className="mt-3 divide-y divide-line border-t border-line">
              {certifications.map((cert, i) => (
                <li key={cert.name}>
                  <Reveal
                    delay={0.05 * i}
                    className="flex items-baseline justify-between gap-4 py-2.5"
                  >
                    <div>
                      {cert.url ? (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noreferrer"
                          className="link-underline text-sm transition-colors duration-300 hover:text-accent"
                        >
                          {cert.name} ↗
                        </a>
                      ) : (
                        <p className="text-sm">{cert.name}</p>
                      )}
                      <p className="mt-0.5 font-mono text-[10px] text-fg-faint">
                        {cert.issuer}
                      </p>
                    </div>
                    {cert.date && (
                      <span className="shrink-0 font-mono text-[10px] text-fg-muted">
                        {cert.date}
                      </span>
                    )}
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Reveal>
              <h3 className="font-display text-base font-semibold tracking-tight">
                Education
              </h3>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="mt-3 border-t border-line py-2.5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p className="text-sm">{education.school}</p>
                  <span className="font-mono text-[10px] text-fg-muted">
                    {education.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-fg-muted">
                  {education.credential}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-fg-faint">
                  {education.description}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
