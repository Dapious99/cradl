import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "The clinical equipment, cold-chain logistics and data systems Nursesight runs in every partner clinic.",
  openGraph: {
    title: "Technology — Nursesight",
    description: "The equipment and systems behind Nursesight's care.",
  },
};

const stack = [
  {
    name: "Masimo Rad-G",
    label:
      "Handheld pulse oximeters in every partner clinic — the single most cost-effective piece of hardware we deploy.",
  },
  {
    name: "GE Lullaby warmers",
    label:
      "Battery-backed neonatal warmers that outlast a five-hour power cut, standard in every maternity room.",
  },
  {
    name: "Chlorhexidine 7.1%",
    label:
      "Umbilical cord antiseptic. Cuts newborn sepsis by roughly a third when applied within 24 hours of birth.",
  },
  {
    name: "CommCare",
    label:
      "Offline-first mobile platform for our 240 community health workers. Every home visit syncs when they're back on data.",
  },
  {
    name: "DHIS2",
    label:
      "The standard health information system across ministries of health. All our outcome data flows here — no parallel reporting.",
  },
  {
    name: "Cold-chain fridges",
    label:
      "Solar direct-drive vaccine refrigerators from B Medical Systems. They keep the immunization schedule honest.",
  },
];

const principles = [
  {
    t: "Boring beats novel",
    b: "We deploy hardware that's been in the field for a decade and has a repair economy around it. Nothing bleeding-edge in a birth room.",
  },
  {
    t: "Offline by default",
    b: "Everything a nurse touches works with no signal. Sync is a bonus, not a dependency.",
  },
  {
    t: "Data flows to ministries, not away from them",
    b: "We report into national systems (DHIS2) so our clinics stay legible to the health system they're part of.",
  },
];

export default function Technology() {
  return (
    <>
      <section className="container-prose pt-16 pb-8 md:pt-24">
        <p className="mb-4 text-sm text-muted-foreground">Technology &amp; equipment</p>
        <h1 className="max-w-3xl text-5xl leading-tight md:text-6xl">
          Unfashionable equipment. <span className="text-primary">Boringly reliable</span>.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Nursesight isn&apos;t a technology company. But the right gear, in the right room, at 3 a.m.,
          is often the difference between a birthday and a funeral. Here&apos;s what we standardise on.
        </p>
      </section>

      <section className="container-prose mt-16">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          The clinical stack
        </p>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stack.map((s) => (
            <article key={s.name} className="rounded-3xl border border-border/70 bg-card p-8">
              <h3 className="font-display text-2xl">{s.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-prose mt-24">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">How we choose</p>
        <h2 className="mt-6 max-w-3xl text-4xl leading-tight md:text-5xl">
          Three principles that decide what gets bought.
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {principles.map((p) => (
            <div key={p.t}>
              <h3 className="text-2xl">{p.t}</h3>
              <p className="mt-3 text-muted-foreground">{p.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-prose mt-24 mb-16">
        <blockquote className="rounded-3xl border border-border p-10 md:p-14">
          <p className="font-display text-2xl leading-snug md:text-3xl">
            &quot;The best piece of technology in the ward is a pulse oximeter that a nurse actually
            trusts and reaches for. Everything else is downstream of that.&quot;
          </p>
          <footer className="mt-4 text-sm text-muted-foreground">
            — Dr. Samuel Otieno, co-founder
          </footer>
        </blockquote>
      </section>
    </>
  );
}
