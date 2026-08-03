import { useRef, type MouseEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { EASE, MaskReveal } from "./motion/primitives";
import { profile } from "../data/resume";

const spotlightMask =
  "radial-gradient(280px circle at var(--mx, -999px) var(--my, -999px), black 0%, transparent 75%)";

export default function Hero() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const el = spotlightRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grid-dots opacity-60 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,black,transparent)]"
      />
      <div
        ref={spotlightRef}
        aria-hidden="true"
        className="absolute inset-0 hidden bg-grid-dots opacity-90 md:block"
        style={{ WebkitMaskImage: spotlightMask, maskImage: spotlightMask }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-8 pt-20 sm:px-6 md:px-10 md:pb-10 md:pt-24">
        <MaskReveal delay={0.1}>
          <p className="inline-flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.18em] md:text-xs">
            <span className="inline-flex items-center gap-2 text-accent">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-accent"
              />
              Currently at {profile.company}
            </span>
            <span className="text-fg-faint">·</span>
            <span className="text-fg-muted">{profile.location}</span>
          </p>
        </MaskReveal>

        <h1 className="mt-3 font-display text-[clamp(2rem,6.5vw,3.75rem)] font-bold leading-[0.98] tracking-tight">
          <MaskReveal delay={0.25}>Navjot Singh</MaskReveal>
          <MaskReveal delay={0.38}>
            <span className="text-outline">Software Developer</span>
          </MaskReveal>
        </h1>

        <MaskReveal delay={0.55}>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-fg-muted md:text-[15px]">
            {profile.tagline}
          </p>
        </MaskReveal>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
          className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3"
        >
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 border border-line-strong px-3.5 py-2 font-mono text-xs transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-ink md:text-sm"
          >
            View Resume
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </a>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs md:text-sm">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="link-underline text-fg-muted transition-colors duration-300 hover:text-fg"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="link-underline text-fg-muted transition-colors duration-300 hover:text-fg"
            >
              GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="link-underline break-all text-fg-muted transition-colors duration-300 hover:text-fg"
            >
              {profile.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
