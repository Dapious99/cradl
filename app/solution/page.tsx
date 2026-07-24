import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Solution",
  description:
    "How Nursesight's platform keeps newborns alive through their first year: prenatal scheduling, real-time monitoring, and care-team coordination in one dashboard.",
  openGraph: {
    title: "Solution — Nursesight",
    description: "How Nursesight's platform keeps newborns alive through their first year.",
    images: ["/pillar-1.jpg"],
  },
};

const pillars = [
  {
    n: "01",
    title: "Before birth",
    img: "/pillar-1.jpg",
    body: "Four structured prenatal check-ins for every enrolled mother. Screening for pre-eclampsia, gestational diabetes and anemia. A birth plan and a named midwife on speed dial.",
    points: ["Named midwife", "Risk screening", "Birth plan", "Iron & folate"],
  },
  {
    n: "02",
    title: "First 24 hours",
    img: "/pillar-2.jpg",
    body: "The window that decides most of what follows. Chlorhexidine cord care, warm-chain kangaroo care, a pulse oximeter on every baby, and a resuscitation-trained clinician in the room.",
    points: ["Chlorhexidine", "Pulse oximetry", "Kangaroo care", "HBB-trained staff"],
  },
  {
    n: "03",
    title: "First year",
    img: "/pillar-3.jpg",
    body: "Home visits in weeks 1, 2, 4, 8 — then monthly through the first birthday. On-time vaccinations, growth monitoring, and one phone number for when something feels off at 3 a.m.",
    points: ["Home visits", "Immunizations", "Growth checks", "24/7 line"],
  },
];

export default function Solution() {
  return (
    <>
      <section className="container-prose pt-16 pb-8 md:pt-24">
        <p className="mb-4 text-sm text-muted-foreground">The solution</p>
        <h1 className="max-w-3xl text-5xl leading-tight md:text-6xl">
          Three windows of care. One <span className="text-primary">unbroken chain</span>.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Most infant deaths cluster in three moments: the weeks before birth, the first day of life,
          and the first year. Nursesight&apos;s platform covers all three across every clinic in your
          network — one dashboard, one reporting standard, and real-time alerts throughout, built for
          HMOs, NGOs, and ministries of health managing outcomes at scale.
        </p>
      </section>

      <section className="container-prose mt-16 space-y-24">
        {pillars.map((p, i) => (
          <article
            key={p.n}
            className={`grid gap-10 md:grid-cols-2 md:items-center ${
              i % 2 === 1 ? "md:[&>figure]:order-2" : ""
            }`}
          >
            <figure className="overflow-hidden rounded-3xl">
              <Image
                src={p.img}
                alt={p.title}
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </figure>
            <div>
              <p className="font-display text-sm text-primary">{p.n}</p>
              <h2 className="mt-2 text-4xl md:text-5xl">{p.title}</h2>
              <p className="mt-5 text-lg text-muted-foreground">{p.body}</p>
              <ul className="mt-6 flex flex-wrap gap-2 text-sm">
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    className="rounded-full border border-border px-3 py-1 text-muted-foreground"
                  >
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="container-prose mt-28 mb-16">
        <div className="rounded-3xl border border-border/70 bg-secondary/40 p-10 md:p-14">
          <h2 className="max-w-3xl text-3xl md:text-4xl">Want this across your network?</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We&apos;re onboarding HMOs, NGOs, and health ministries for private beta. Tell us how
            many facilities you cover and how many births you see in a month — we&apos;ll take it
            from there.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Start a conversation <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
