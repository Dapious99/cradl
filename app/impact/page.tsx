import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "The numbers, the stories, and the birthdays behind Cradl's work across partner clinics in Africa.",
  openGraph: {
    title: "Impact — Cradl",
    description: "Numbers, stories and birthdays from Cradl's partner clinics.",
    images: ["/story-1.jpg"],
  },
};

const stats = [
  { k: "94%", v: "of enrolled babies see their first birthday" },
  { k: "12", v: "partner clinics across four countries" },
  { k: "240", v: "community health workers in the network" },
  { k: "8,400+", v: "babies enrolled since 2021" },
];

const stories = [
  {
    place: "Kilifi, Kenya",
    title: "The night the ward stayed warm.",
    img: "/story-1.jpg",
    body: "A power cut at 2 a.m., a premature twin, and a battery-backed warmer installed two weeks earlier. Sister Ruth's account of a night that used to end differently.",
  },
  {
    place: "Kaduna, Nigeria",
    title: "One community health worker, forty-two babies.",
    img: "/pillar-1.jpg",
    body: "How Fatima's weekly rounds — and a laminated wall chart — took her village from four infant deaths a year to zero.",
  },
  {
    place: "Accra, Ghana",
    title: "A pulse oximeter that cost less than dinner.",
    img: "/pillar-2.jpg",
    body: "Screening every newborn for critical congenital heart disease used to be a rich-country ritual. We made it a Tuesday morning.",
  },
  {
    place: "Blantyre, Malawi",
    title: "Grace's first birthday.",
    img: "/hero.jpg",
    body: "Born at 34 weeks and 1.8 kg, Grace turned one last month. Her mother sent us the photo of the cake.",
  },
];

export default function Impact() {
  return (
    <>
      <section className="container-prose pt-16 pb-8 md:pt-24">
        <p className="mb-4 text-sm text-muted-foreground">Impact</p>
        <h1 className="max-w-3xl text-5xl leading-tight md:text-6xl">
          The work, in <span className="text-primary">numbers</span> and in people.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          We publish our outcomes every quarter, shared with clinic staff and funders in the same
          document. No dashboards for donors, spreadsheets for nurses.
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
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Field notes</p>
        <h2 className="mt-6 max-w-3xl text-4xl leading-tight md:text-5xl">
          Not case studies. The calls, the near-misses, the birthdays.
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
