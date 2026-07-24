import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech stack",
  description:
    "The tech stack behind Nursesight: real-time monitoring, care-coordination workflows, and the cloud and device integrations that power them.",
  openGraph: {
    title: "Tech stack — Nursesight",
    description: "The tech stack behind Nursesight's monitoring and care-coordination platform.",
  },
};

const stack = [
  {
    name: "Real-time vitals monitoring",
    label:
      "Ingests pulse-oximetry and vitals data from bedside devices and flags danger signs to care teams within seconds.",
  },
  {
    name: "Care-coordination engine",
    label:
      "Automates prenatal-to-first-year visit scheduling, task assignment, and follow-up reminders for care teams.",
  },
  {
    name: "Outcomes dashboard",
    label:
      "Real-time reporting built for HMO risk teams, NGO programme managers, and ministry administrators, exportable to the health information systems your network already uses.",
  },
  {
    name: "Device integrations",
    label:
      "Works with the pulse oximeters, neonatal warmers, and cold-chain equipment a clinic already has — no hardware lock-in.",
  },
  {
    name: "Offline-first mobile app",
    label:
      "Built for low-connectivity settings. Every check-in syncs the moment a device reconnects.",
  },
  {
    name: "Cloud infrastructure",
    label:
      "Encrypted data pipelines and GPU-accelerated machine learning models power real-time alerts, hosted on enterprise-grade cloud infrastructure.",
  },
];

const principles = [
  {
    t: "Reliability over hype",
    b: "We choose proven, battle-tested components over bleeding-edge tech anywhere the software touches patient safety.",
  },
  {
    t: "Offline by default",
    b: "Every screen a nurse touches works with no signal. Sync is a bonus, not a dependency.",
  },
  {
    t: "Data flows to health systems, not away from them",
    b: "Nursesight exports into the health information systems HMOs, NGOs, and ministries already report to — no parallel reporting, no data silos.",
  },
];

export default function Technology() {
  return (
    <>
      <section className="container-prose pt-16 pb-8 md:pt-24">
        <p className="mb-4 text-sm text-muted-foreground">Tech stack</p>
        <h1 className="max-w-3xl text-5xl leading-tight md:text-6xl">
          Reliable software. <span className="text-primary">No bells, no whistles</span>.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Nursesight is a technology company, built by clinicians for the room where a delayed
          alert costs a life. Here&apos;s the tech stack behind the product, currently live in
          private beta.
        </p>
      </section>

      <section className="container-prose mt-16">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          The platform
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
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">How we build</p>
        <h2 className="mt-6 max-w-3xl text-4xl leading-tight md:text-5xl">
          Three principles that decide what ships.
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
            &quot;The best piece of technology in the ward is a pulse oximeter that a nurse
            actually trusts and reaches for. Nursesight&apos;s job is to make sure the software
            behind it is just as reliable.&quot;
          </p>
          <footer className="mt-4 text-sm text-muted-foreground">
            — Hannah Richman, co-founder &amp; CTO
          </footer>
        </blockquote>
      </section>
    </>
  );
}
