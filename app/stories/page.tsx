import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Beta notes from Nursesight's pilot clinics: care teams, mothers, and the babies they carried through the first year.",
  openGraph: {
    title: "Stories — Nursesight",
    description: "Beta notes from Nursesight's pilot clinics.",
    images: ["https://nursesight.health/og-stories.jpg"],
  },
};

const stories = [
  {
    place: "Kilifi, Kenya",
    title: "The alert that beat the power cut.",
    img: "/story-1.jpg",
    body: "A power cut at 2 a.m., a premature twin on the monitor, and a Nursesight alert that reached the on-call midwife's phone before the backup warmer even kicked in.",
  },
  {
    place: "Kaduna, Nigeria",
    title: "One care coordinator, forty-two families.",
    img: "/pillar-1.jpg",
    body: "How Fatima's caseload dashboard turned a paper wall chart into a same-day view of every family due for a visit.",
  },
  {
    place: "Lagos, Nigeria",
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

export default function Stories() {
  return (
    <>
      <section className="container-prose pt-16 pb-12 md:pt-24">
        <p className="mb-4 text-sm text-muted-foreground">Field notes</p>
        <h1 className="max-w-3xl text-5xl leading-tight md:text-6xl">
          The work, in the words of the people doing it.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          These aren&apos;t case studies. They&apos;re the calls, the near-misses, and the alerts
          our pilot clinics send us — often at odd hours, usually with a photo attached.
        </p>
      </section>

      <section className="container-prose grid gap-16 mb-16">
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
              <h2 className="mt-3 text-3xl md:text-4xl">{s.title}</h2>
              <p className="mt-4 text-muted-foreground">{s.body}</p>
              <p className="mt-6 text-sm text-muted-foreground">Read the full note →</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
