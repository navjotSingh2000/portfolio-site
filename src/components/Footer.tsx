import SectionHeading from "./SectionHeading";
import { Reveal } from "./motion/primitives";
import { profile } from "../data/resume";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-16">
      <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-6 md:px-10 md:py-10">
        <SectionHeading index="06" label="Contact" />

        <Reveal>
          <a
            href={`mailto:${profile.email}`}
            className="link-underline inline-block break-all font-mono text-sm text-fg-muted transition-colors duration-300 hover:text-fg"
          >
            {profile.email}
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs md:text-sm">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                e.currentTarget.href = `${profile.resumeUrl}?t=${Date.now()}`;
              }}
              className="link-underline text-fg-muted transition-colors duration-300 hover:text-fg"
            >
              Resume ↗
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="link-underline text-fg-muted transition-colors duration-300 hover:text-fg"
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="link-underline text-fg-muted transition-colors duration-300 hover:text-fg"
            >
              GitHub ↗
            </a>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-3 font-mono text-[10px] text-fg-faint sm:flex-row sm:items-center sm:justify-between sm:px-6 md:px-10">
          <p>© {new Date().getFullYear()} Navjot Singh</p>
          <a
            href="#top"
            className="transition-colors duration-300 hover:text-fg"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
