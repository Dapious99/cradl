import type { Metadata } from "next";
import Image from "next/image";
import { LinkedInIcon, XIcon } from "@/components/social-icons";

export const metadata: Metadata = {
  title: "The team",
  description: "The founders building Nursesight, now in private beta.",
  openGraph: {
    title: "The team — Nursesight",
    description: "The founders building Nursesight.",
    images: ["/team-1.jpg"],
  },
};

const people = [
  {
    name: "Emedolu Chinonso",
    role: "Chief Executive Officer",
    img: "/team-2.jpg",
    bio: "A decade spent watching preventable neonatal deaths in under-resourced maternity wards convinced them that the gap was never the medicine — it was the coordination around it. They started building Nursesight to close that gap with software.",
    place: "Lagos, Nigeria",
    socials: {
      linkedin: "https://www.linkedin.com/in/chinonso-emmanuel-083b18327/",
      twitter: "https://x.com/OCloud11",
    },
  },
  {
    name: "Hannah Richman",
    role: "Chief Technology Officer",
    img: "/team-3.jpg",
    bio: "Spent years at the intersection of clinical care and health systems, watching good outcomes fall apart when the data stopped flowing. Builds the tools that keep Nursesight's chain of care visible, measurable, and honest.",
    place: "Nairobi, Kenya",
    socials: null,
  },
];

export default function Team() {
  return (
    <>
      <section className="container-prose pt-16 pb-8 md:pt-24">
        <p className="mb-4 text-sm text-muted-foreground">The team</p>
        <h1 className="max-w-3xl text-5xl leading-tight md:text-6xl">
          Small on purpose. <em className="text-primary not-italic">Senior</em> by design.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          The same people who design the product ship it and answer your support messages
          personally. Nobody at Nursesight is more than one phone call from a birth.
        </p>
      </section>

      <section className="container-prose mt-12 grid gap-14 md:grid-cols-2">
        {people.map((p) => (
          <article key={p.name} className="group">
            <div className="overflow-hidden rounded-3xl bg-muted">
              <Image
                src={p.img}
                alt={`Portrait of ${p.name}`}
                width={900}
                height={1100}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-2xl">{p.name}</h2>
              <p className="text-xs text-muted-foreground">{p.place}</p>
            </div>
            <p className="mt-1 text-sm text-primary">{p.role}</p>
            <p className="mt-3 text-muted-foreground">{p.bio}</p>
            {p.socials && (
              <div className="mt-4 flex items-center gap-3">
                {p.socials.linkedin && (
                  <a
                    href={p.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} on LinkedIn`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <LinkedInIcon className="h-5 w-5" />
                  </a>
                )}
                {p.socials.twitter && (
                  <a
                    href={p.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} on X`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <XIcon className="h-5 w-5" />
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </section>

      <section className="container-prose mt-24 mb-16">
        <div className="rounded-3xl bg-secondary/60 p-10 md:p-14">
          <h2 className="max-w-3xl text-3xl md:text-4xl">
            Plus the engineers, clinicians, and pilot clinics doing the daily work.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            The people whose names should be on this page, really. They&apos;re the reason the
            product gets better every week of the beta.
          </p>
        </div>
      </section>
    </>
  );
}
