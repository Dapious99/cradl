import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { LinkedInIcon, XIcon } from "@/components/social-icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Nursesight exists, how it started, and the founding team building it — now in private beta with pilot clinics.",
  openGraph: {
    title: "About — Nursesight",
    description: "Why Nursesight exists and the team behind it.",
    images: ["/team-1.jpg"],
  },
};

const people = [
  {
    name: "Emedolu Chinonso",
    role: "Chief Executive Officer",
    img: "/team-1.jpg",
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
    place: "Nairobi, Kenya",
    socials: null,
  },
];

export default function About() {
  return (
    <>
      <section className="container-prose pt-16 pb-8 md:pt-24">
        <p className="mb-4 text-sm text-muted-foreground">About us</p>
        <h1 className="max-w-3xl text-5xl leading-tight md:text-6xl">
          A small clinical and engineering team, obsessed with{" "}
          <span className="text-primary">reliability</span>.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Chinonso and Hannah spent a decade watching newborns die of things the medical
          literature had solved decades earlier. In 2025 they started building the software they
          wished had existed in their own wards. Nursesight is now in private beta with maternity
          clinics across Nigeria and Kenya.
        </p>
      </section>

      <section className="container-prose mt-16 grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Our story</p>
          <h2 className="mt-6 text-3xl md:text-4xl">Two clinicians, one shared frustration.</h2>
        </div>
        <div className="space-y-5 text-muted-foreground">
          <p>
            Chinonso and Hannah met at a WHO working group on essential newborn care in 2019. Both had
            spent a decade watching preventable neonatal deaths in otherwise well-resourced hospitals.
          </p>
          <p>
            The problem wasn&apos;t the medicine. The problem was that the chain of care kept breaking —
            between prenatal and delivery, between delivery and home, between home and the
            immunization schedule.
          </p>
          <p>
            Nursesight is the answer to a question they kept asking: what if the software owned
            the handoffs, so no family fell through the cracks between visits?
          </p>
        </div>
      </section>

      <section className="container-prose mt-24">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">The team</p>
        <h2 className="mt-6 max-w-3xl text-4xl leading-tight md:text-5xl">
          The people you&apos;ll actually work with.
        </h2>
        <div className="mt-14 grid gap-14 md:grid-cols-2">
          {people.map((p) => (
            <article key={p.name}>
              <div className="overflow-hidden rounded-3xl bg-muted">
                <Image
                  src={p.img}
                  alt={`Portrait of ${p.name}`}
                  width={900}
                  height={1100}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="mt-6 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-2xl">{p.name}</h3>
                <p className="text-xs text-muted-foreground">{p.place}</p>
              </div>
              <p className="mt-1 text-sm text-primary">{p.role}</p>
              {p.socials && (
                <div className="mt-3 flex items-center gap-3">
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
        </div>
      </section>

      <section className="container-prose mt-24 mb-16">
        <div className="rounded-3xl bg-secondary/60 p-10 md:p-14">
          <h2 className="max-w-3xl text-3xl md:text-4xl">
            Plus a growing beta cohort of clinicians and care coordinators across Nigeria and Kenya.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            The people whose names should be on this page, really. Every pilot clinic that trusts
            us with their care team&apos;s workflow makes the product better.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Get in touch <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
