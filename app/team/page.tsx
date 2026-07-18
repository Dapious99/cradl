import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The team",
  description: "The founders behind Nursesight.",
  openGraph: {
    title: "The team — Nursesight",
    description: "The founders behind Nursesight.",
    images: ["/team-1.jpg"],
  },
};

const people = [
  {
    name: "Dr. Amina Okafor",
    role: "Chief Executive Officer",
    img: "/team-1.jpg",
    bio: "A decade spent watching preventable neonatal deaths in under-resourced maternity wards convinced her that the gap was never the medicine — it was the chain of care around it. She built Nursesight to close that gap.",
    place: "Lagos, Nigeria",
    socials: {
      linkedin: "https://www.linkedin.com/in/chinonso-emmanuel-083b18327/",
      twitter: "https://x.com/OCloud11",
    },
  },
  {
    name: "Dr. Samuel Otieno",
    role: "Chief Technology Officer",
    img: "/team-2.jpg",
    bio: "Spent years at the intersection of clinical care and health systems, watching good outcomes fall apart when the data stopped flowing. Builds the tools that keep Nursesight's chain of care visible, measurable, and honest.",
    place: "Nairobi, Kenya",
    socials: null,
  },
];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Team() {
  return (
    <>
      <section className="container-prose pt-16 pb-8 md:pt-24">
        <p className="mb-4 text-sm text-muted-foreground">The team</p>
        <h1 className="max-w-3xl text-5xl leading-tight md:text-6xl">
          Small on purpose. <em className="text-primary not-italic">Senior</em> by design.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          The same people who design the program run it in the field and answer your messages.
          Nobody at Nursesight is more than one phone call from a birth.
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
            Plus the midwives, community health workers, and partner clinics doing the daily work.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            The people whose names should be on this page, really. They are the reason
            94% of the babies born into our program see their first birthday.
          </p>
        </div>
      </section>
    </>
  );
}
