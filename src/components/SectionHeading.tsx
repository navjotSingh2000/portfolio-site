import { Reveal } from "./motion/primitives";

export default function SectionHeading({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <Reveal className="mb-4 md:mb-5">
      <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase">
        <span className="text-accent">{index}</span>
        <span className="text-fg-faint">/</span>
        <span className="text-fg-muted">{label}</span>
        <span aria-hidden="true" className="h-px flex-1 bg-line" />
      </div>
    </Reveal>
  );
}
