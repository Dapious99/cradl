import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";

export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
}) {
  return (
    <section className="border-b border-border">
      <div className="container-prose py-20 md:py-28">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="max-w-4xl font-display text-5xl leading-[1.05] md:text-6xl">{title}</h1>
        </Reveal>
        {lede && (
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{lede}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
