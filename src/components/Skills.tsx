import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";
import { Reveal, staggerChild, staggerParent } from "./motion/primitives";
import { skillGroups } from "../data/resume";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 py-8 md:py-10">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 md:px-10">
        <SectionHeading index="04" label="Skills" />

        <div className="divide-y divide-line border-y border-line">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="grid gap-1.5 py-3 md:grid-cols-[160px_1fr] md:items-center md:gap-8 md:py-3.5"
            >
              <Reveal>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-faint md:text-[11px]">
                  {group.label}
                </h3>
              </Reveal>
              <motion.ul
                variants={staggerParent}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px 0px" }}
                className="flex flex-wrap gap-1.5"
              >
                {group.items.map((item) => (
                  <motion.li key={item} variants={staggerChild}>
                    <span className="inline-block border border-line px-2 py-1 text-xs text-fg-muted transition-colors duration-300 hover:border-accent/60 hover:text-fg">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
