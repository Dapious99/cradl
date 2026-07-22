import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Results",
  description:
    "The numbers and early stories behind Nursesight's private beta with maternity clinics across Nigeria and Kenya.",
  openGraph: {
    title: "Results — Nursesight",
    description: "Numbers and early stories from Nursesight's private beta.",
    images: ["/story-1.jpg"],
  },
};

const stats = [
  { k: "5", v: "pilot clinics in private beta" },
  { k: "2", v: "countries live today" },
  { k: "43", v: "clinicians & care coordinators onboarded" },
  { k: "2,300+", v: "vitals checks logged on the platform" },
];

const stories = [
  {
    place: "Kilifi, Kenya — pilot clinic",
    title: "The alert that beat the power cut.",
    img: "/story-1.jpg",
    body: "A power cut at 2 a.m., a premature twin on the monitor, and a Nursesight alert that reached the on-call midwife's phone before the backup warmer even kicked in.",
  },
  {
    place: "Kaduna, Nigeria — pilot clinic",
    title: "One care coordinator, forty-two families.",
    img: "/pillar-1.jpg",
    body: "How Fatima's caseload dashboard turned a paper wall chart into a same-day view of every family due for a visit.",
  },
  {
    place: "Lagos, Nigeria — pilot clinic",
    title: "A pulse-ox reading that flagged in seconds.",
    img: "/pillar-2.jpg",
    body: "Screening every newborn for critical congenital heart disease used to mean a nurse remembering to check. Now Nursesight flags it automatically.",
  },
  {
    place: "Private beta",
    title: "Five minutes that mattered.",
    img: "/hero.jpg",
    body: "One beta clinic's own account of how a real-time vitals alert moved a transfer decision up by five minutes — the kind of margin the platform is built for.",
  },
];

export default function Impact() {
  return (
    <>
      <section className="container-prose pt-16 pb-8 md:pt-24">
        <p className="mb-4 text-sm text-muted-foreground">Results</p>
        <h1 className="max-w-3xl text-5xl leading-tight md:text-6xl">
          The work, in <span className="text-primary">numbers</span> and in people.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          We publish usage and outcome metrics every month, visible to every clinic on the
          platform — the same numbers your team sees, not a sanitized deck.
        </p>
      </section>

      <section className="container-prose mt-14 grid gap-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.k} className="rounded-3xl border border-border/70 bg-card p-8">
            <p className="font-display text-5xl text-primary">{s.k}</p>
            <p className="mt-3 text-sm text-muted-foreground">{s.v}</p>
          </div>
        ))}
      </section>

      <section className="container-prose mt-24">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Beta notes</p>
        <h2 className="mt-6 max-w-3xl text-4xl leading-tight md:text-5xl">
          Not case studies. The calls, the near-misses, the alerts that worked.
        </h2>
      </section>

      <section className="container-prose mt-14 grid gap-16 mb-16">
        {stories.map((s, i) => (
          <article
            key={s.title}
            className={`grid gap-10 md:grid-cols-5 md:items-center ${
              i % 2 === 1 ? "md:[&>figure]:order-2" : ""
            }`}
          >
            <figure className="overflow-hidden rounded-3xl md:col-span-3">
              <Image
                src={s.img}
                alt={s.title}
                width={1400}
                height={900}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </figure>
            <div className="md:col-span-2">
              <p className="text-sm text-primary">{s.place}</p>
              <h3 className="mt-3 text-3xl md:text-4xl">{s.title}</h3>
              <p className="mt-4 text-muted-foreground">{s.body}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
