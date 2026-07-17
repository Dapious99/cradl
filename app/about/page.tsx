import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Cradl exists, how it started, and the small clinical team behind every partner clinic.",
  openGraph: {
    title: "About — Cradl",
    description: "Why Cradl exists and the team behind it.",
    images: ["/team-1.jpg"],
  },
};

const people = [
  { name: "Dr. Amina Okafor", role: "Co-founder & Medical Director", img: "/team-1.jpg", place: "Lagos, Nigeria" },
  { name: "Dr. Samuel Otieno", role: "Co-founder & Neonatologist", img: "/team-2.jpg", place: "Nairobi, Kenya" },
  { name: "Priya Menon, CNM", role: "Head of Midwifery", img: "/team-3.jpg", place: "Bangalore · Remote" },
  { name: "Fatima Bello", role: "Community Health Lead", img: "/team-4.jpg", place: "Kaduna, Nigeria" },
];

export default function About() {
  return (
    <>
      <section className="container-prose pt-16 pb-8 md:pt-24">
        <p className="mb-4 text-sm text-muted-foreground">About us</p>
        <h1 className="max-w-3xl text-5xl leading-tight md:text-6xl">
          A small clinical team, allergic to{" "}
          <span className="text-primary">fundraising theatre</span>.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Cradl started in 2021 when two clinicians got tired of watching newborns die of
          things the medical literature had solved decades earlier. We built the initiative we
          wished had shown up in our own wards.
        </p>
      </section>

      <section className="container-prose mt-16 grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Our story</p>
          <h2 className="mt-6 text-3xl md:text-4xl">Two clinicians, one shared frustration.</h2>
        </div>
        <div className="space-y-5 text-muted-foreground">
          <p>
            Amina and Samuel met at a WHO working group on essential newborn care in 2019. Both had
            spent a decade watching preventable neonatal deaths in otherwise well-resourced hospitals.
          </p>
          <p>
            The problem wasn&apos;t the medicine. The problem was that the chain of care kept breaking —
            between prenatal and delivery, between delivery and home, between home and the
            immunization schedule.
          </p>
          <p>
            Cradl is the answer to a question they kept asking: what if one small team owned
            the whole chain, for a small number of clinics, for a long time?
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
            </article>
          ))}
        </div>
      </section>

      <section className="container-prose mt-24 mb-16">
        <div className="rounded-3xl bg-secondary/60 p-10 md:p-14">
          <h2 className="max-w-3xl text-3xl md:text-4xl">
            Plus 240 community health workers, 38 midwives, and 12 partner clinics.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            The people whose names should be on this page, really. They are the reason 94% of the
            babies born into our program see their first birthday.
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
