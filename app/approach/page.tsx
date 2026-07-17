import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our approach",
  description:
    "How Cradl prevents infant mortality: prenatal care, safe delivery, and the first year of life.",
  openGraph: {
    title: "Our approach — Cradl",
    description:
      "Prenatal care, safe delivery, and a supported first year — the three windows Cradl focuses on.",
    images: ["https://cradl.health/og-approach.jpg"],
  },
};

const chapters = [
  {
    tag: "Chapter 01 · Before birth",
    title: "A birth plan on paper, months before labor.",
    body: "We fund and staff four prenatal visits per pregnancy — the WHO minimum, rarely delivered in the places we work. Each visit screens for pre-eclampsia, anemia, gestational diabetes and infection. Every mother leaves with a birth plan: which clinic, which route, which nurse, and a phone number that will always answer.",
    bullets: [
      "Iron and folic acid, tetanus booster, HIV screening",
      "Ultrasound for high-risk pregnancies via a shared portable unit",
      "A trained companion identified before the third trimester",
    ],
    img: "/pillar-3.jpg",
  },
  {
    tag: "Chapter 02 · The first 24 hours",
    title: "Warm room, clean cord, first breath.",
    body: "Half of all newborn deaths happen on day one. We equip our partner clinics with a Helping Babies Breathe kit, a room that stays above 25°C, a working pulse oximeter, and chlorhexidine cord care. Every attending midwife is re-certified every six months — we pay for the course.",
    bullets: [
      "Skin-to-skin within the first minute",
      "Delayed cord clamping and early breastfeeding",
      "A neonatal transfer protocol for any baby under 2 kg",
    ],
    img: "/pillar-2.jpg",
  },
  {
    tag: "Chapter 03 · The first year",
    title: "Twelve months of quiet, consistent contact.",
    body: "A community health worker visits every family in weeks 1, 2, 4, 8, and then monthly through the first birthday. They weigh the baby, check for jaundice and dehydration, deliver vaccines on the WHO schedule, and — most importantly — know each mother by name.",
    bullets: [
      "Full immunization by month 12 for 95% of enrolled families",
      "Exclusive breastfeeding coaching through month 6",
      "A 24/7 SMS line for symptoms that shouldn't wait",
    ],
    img: "/pillar-1.jpg",
  },
];

export default function Approach() {
  return (
    <>
      <section className="container-prose pt-16 pb-8 md:pt-24">
        <p className="mb-4 text-sm text-muted-foreground">Our approach</p>
        <h1 className="max-w-4xl text-5xl leading-tight md:text-6xl">
          Not new medicine.
          <br />
          <em className="text-primary not-italic">Reliable</em> medicine.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          There is no unsolved mystery in newborn health. The interventions that keep babies alive
          have existed for decades. Cradl's job is to make sure they arrive — on time, at the
          right dose, in the right room, next to the right mother. Three chapters, one continuous
          chain of care.
        </p>
      </section>

      {chapters.map((c, i) => (
        <section key={c.tag} className="container-prose mt-24">
          <div
            className={`grid gap-10 md:grid-cols-2 md:items-center ${
              i % 2 === 1 ? "md:[&>figure]:order-2" : ""
            }`}
          >
            <figure className="overflow-hidden rounded-3xl">
              <Image
                src={c.img}
                alt={c.title}
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </figure>
            <div>
              <p className="text-sm text-primary">{c.tag}</p>
              <h2 className="mt-3 text-3xl md:text-4xl">{c.title}</h2>
              <p className="mt-4 text-muted-foreground">{c.body}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="container-prose mt-24">
        <div className="rounded-3xl border border-border p-10 md:p-14">
          <p className="text-sm text-muted-foreground">How we measure ourselves</p>
          <h2 className="mt-3 max-w-3xl text-3xl md:text-4xl">
            One number matters more than the rest: babies alive on their first birthday.
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-4">
            {[
              ["94%", "1st-birthday survival across our partner clinics"],
              ["4.1", "average prenatal visits per enrolled mother"],
              ["<8 min", "average time from labor call to trained attendant"],
              ["0", "maternal deaths in partner facilities, last 18 months"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display text-3xl text-primary md:text-4xl">{n}</p>
                <p className="mt-2 text-sm text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-prose mt-24 mb-16 text-center">
        <h2 className="mx-auto max-w-3xl text-4xl md:text-5xl">
          If this is the work you also care about — let's talk.
        </h2>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Reach the team
        </Link>
      </section>
    </>
  );
}
