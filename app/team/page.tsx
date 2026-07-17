import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The team",
  description: "The clinicians, midwives and community health workers behind Cradl.",
  openGraph: {
    title: "The team — Cradl",
    description: "The clinicians, midwives and community health workers behind Cradl.",
    images: ["/team-1.jpg"],
  },
};

const people = [
  {
    name: "Dr. Amina Okafor",
    role: "Co-founder & Medical Director",
    img: "/team-1.jpg",
    bio: "Pediatrician, twenty years in neonatal care across Lagos and Abuja. Amina designs the clinical protocols every Cradl partner clinic runs on.",
    place: "Lagos, Nigeria",
  },
  {
    name: "Dr. Samuel Otieno",
    role: "Co-founder & Neonatologist",
    img: "/team-2.jpg",
    bio: "Trained in Nairobi and Cape Town. Samuel leads training for our partner clinics — Helping Babies Breathe, essential newborn care, and neonatal resuscitation.",
    place: "Nairobi, Kenya",
  },
  {
    name: "Priya Menon, CNM",
    role: "Head of Midwifery",
    img: "/team-3.jpg",
    bio: "Certified nurse-midwife with a decade at Bangalore's largest maternity hospital. Priya makes sure the birth plan on paper matches what happens in the room.",
    place: "Bangalore · Remote",
  },
  {
    name: "Fatima Bello",
    role: "Community Health Lead",
    img: "/team-4.jpg",
    bio: "Community health worker turned program lead. Fatima runs the 240-worker network that visits every enrolled family in weeks 1, 2, 4, 8 and monthly.",
    place: "Kaduna, Nigeria",
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
          The same clinicians who write our protocols also stand at the bedside.
          Nobody at Cradl is more than one phone call from a birth.
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
          </article>
        ))}
      </section>

      <section className="container-prose mt-24 mb-16">
        <div className="rounded-3xl bg-secondary/60 p-10 md:p-14">
          <h2 className="max-w-3xl text-3xl md:text-4xl">
            Plus 240 community health workers, 38 midwives, and 12 partner clinics.
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
