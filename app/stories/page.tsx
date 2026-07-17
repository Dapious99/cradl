import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Field notes from Cradl's partner clinics: mothers, midwives, and the babies they carried through the first year.",
  openGraph: {
    title: "Stories — Cradl",
    description: "Field notes from Cradl's partner clinics.",
    images: ["https://cradl.health/og-stories.jpg"],
  },
};

const stories = [
  {
    place: "Kilifi, Kenya",
    title: "The night the ward stayed warm.",
    img: "/story-1.jpg",
    body: "A power cut at 2 a.m., a premature twin, and a battery-backed warmer that had been installed two weeks earlier. Sister Ruth's account of a night that used to end differently.",
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

export default function Stories() {
  return (
    <>
      <section className="container-prose pt-16 pb-12 md:pt-24">
        <p className="mb-4 text-sm text-muted-foreground">Field notes</p>
        <h1 className="max-w-3xl text-5xl leading-tight md:text-6xl">
          The work, in the words of the people doing it.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          These aren&apos;t case studies. They&apos;re the calls, the near-misses, and the birthdays
          our partner clinics send us — often at odd hours, usually with a photo attached.
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
