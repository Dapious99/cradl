import Link from "next/link";
import Image from "next/image";

const partners = [
  { name: "WHO", label: "Essential newborn care protocols" },
  { name: "UNICEF", label: "Cold-chain vaccine logistics" },
  { name: "Gavi", label: "Immunization financing" },
  { name: "Helping Babies Breathe", label: "Neonatal resuscitation training" },
  { name: "PATH", label: "Chlorhexidine cord care" },
];

const services = [
  {
    n: "01",
    title: "Prenatal scheduling",
    body: "An automated four-visit prenatal schedule, a birth plan, and a named midwife assigned in the app — long before labor starts.",
  },
  {
    n: "02",
    title: "Vitals monitoring & alerts",
    body: "Pulse-ox and vitals data streams into Nursesight in real time, with instant alerts routed to the right clinician when something looks off.",
  },
  {
    n: "03",
    title: "Clinician workflows",
    body: "Helping Babies Breathe, essential newborn care, and resuscitation checklists built into every shift — not a laminated poster on the wall.",
  },
  {
    n: "04",
    title: "Care-team coordination",
    body: "Assign and track home visits across your care team in weeks 1, 2, 4, 8 — then monthly through the first birthday.",
  },
  {
    n: "05",
    title: "Immunization tracking",
    body: "Automated reminders and coverage tracking, synced with cold-chain status and the national immunization schedule.",
  },
  {
    n: "06",
    title: "Clinical escalation",
    body: "Any care team on Nursesight can escalate to an on-call neonatologist, day or night, from inside the app.",
  },
];

const process = [
  {
    n: "01",
    title: "We map your workflow",
    body: "Before you see a single screen, we sit with your care team to understand how patients actually move through your clinic.",
  },
  {
    n: "02",
    title: "We configure, in the open",
    body: "Short setup cycles, with usage and outcomes visible to your team as we go. No black-box onboarding.",
  },
  {
    n: "03",
    title: "We stay in the loop",
    body: "No hand-off to a support ticket queue. Once your clinic is live, you're on a direct line to the team that built the product.",
  },
];

const reasons = [
  "You talk to the people who built it, not a support queue",
  "Transparent beta pricing, no surprise invoices",
  "We say no when Nursesight isn't the right fit",
  "Long after onboarding, we're still in your inbox",
];

const team = [
  { img: "/team-1.jpg", name: "Emedolu Chinonso", role: "Chief Executive Officer", place: "Lagos" },
  { img: "/team-3.jpg", name: "Hannah Richman", role: "Chief Technology Officer", place: "Nairobi" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container-prose grid gap-12 pt-14 pb-16 md:grid-cols-2 md:items-center md:pt-24 md:pb-24">
        <div>
          <p className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            Hello, we&apos;re Nursesight.
          </p>
          <h1 className="text-5xl leading-[1.02] md:text-6xl">
            The software that keeps newborns alive through their{" "}
            <span className="text-primary">first year</span>.
          </h1>
          <p className="mt-8 max-w-lg text-lg text-muted-foreground">
            No bloated hospital software, no six-month implementations. A
            real-time monitoring and care-coordination platform built by
            clinicians — now live in private beta with maternity clinics
            across Nigeria and Kenya.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Request a demo <span aria-hidden>→</span>
            </Link>
            <Link
              href="/approach"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-muted"
            >
              See how it works
            </Link>
          </div>
          <blockquote className="mt-10 max-w-md text-sm italic text-muted-foreground">
            &quot;Most of the babies we help save are saved by a nurse who got
            the right alert at the right time. That&apos;s the whole job.&quot;
            <footer className="mt-3 not-italic text-xs uppercase tracking-[0.14em]">
              — Emedolu Chinonso, CEO, Nursesight
            </footer>
          </blockquote>
        </div>

        <div className="relative">
          <figure className="overflow-hidden rounded-3xl">
            <Image
              src="/hero.jpg"
              alt="A mother nursesighting her newborn in warm morning light"
              width={1400}
              height={1100}
              className="aspect-[5/4] w-full object-cover"
              priority
            />
          </figure>
          <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-border/60 bg-background/95 p-5 shadow-lg backdrop-blur md:left-10 md:right-10">
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              Right now
            </p>
            <p className="mt-1 font-display text-lg leading-snug">
              5 pilot clinics live. Onboarding more for private beta.
            </p>
          </div>
        </div>
      </section>

      {/* Partners strip */}
      <section className="border-y border-border/60 bg-secondary/40">
        <div className="container-prose pt-6 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground md:text-left">
          Built on established clinical protocols from
        </div>
        <div className="container-prose flex flex-wrap items-center justify-between gap-y-6 py-8 text-sm">
          {partners.map((p, i) => (
            <div key={p.name} className="flex items-center gap-4">
              <span className="font-display text-lg">{p.name}</span>
              <span className="hidden max-w-[14ch] text-xs text-muted-foreground md:inline">
                {p.label}
              </span>
              {i < partners.length - 1 && (
                <span className="ml-4 hidden text-primary md:inline">✦</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="container-prose mt-24 grid gap-12 md:grid-cols-2 md:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            The problem we solve
          </p>
          <h2 className="mt-6 text-4xl leading-tight md:text-5xl">
            Most infants who die in their first year die from things we already
            know how to prevent.
          </h2>
        </div>
        <div className="space-y-6 text-muted-foreground">
          <div>
            <p className="font-medium text-foreground">
              Preventable causes, unreliable care
            </p>
            <p className="mt-1">
              Preterm complications, infections, birth asphyxia, diarrhea. Each
              has a documented intervention. The medicine isn&apos;t the missing piece.
            </p>
          </div>
          <div>
            <p className="font-medium text-foreground">
              Care that falls apart between systems
            </p>
            <p className="mt-1">
              Paper charts, WhatsApp groups, and spreadsheets that don&apos;t talk
              to each other. The chain of care breaks in the handoffs, not
              the medicine — that&apos;s the gap Nursesight&apos;s software closes.
            </p>
          </div>
          <div>
            <p className="font-medium text-foreground">
              Mothers who don&apos;t know who to call at 3 a.m.
            </p>
            <p className="mt-1">
              A named midwife and an alert that reaches the right phone
              changes the outcome more than any single piece of hardware in
              the room.
            </p>
          </div>
        </div>
      </section>

      {/* What we actually do */}
      <section className="container-prose mt-28">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          What we actually do
        </p>
        <h2 className="mt-6 max-w-3xl text-4xl leading-tight md:text-5xl">
          A handful of things, done properly.
        </h2>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          We&apos;d rather be brilliant at six things than mediocre at sixty. If your
          clinic needs something outside this list, we&apos;ll happily point you to
          someone who does it better.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.n}
              className="rounded-3xl border border-border/70 bg-card p-8 transition-colors hover:border-primary/60"
            >
              <p className="font-display text-sm text-primary">{s.n}</p>
              <h3 className="mt-2 text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm text-foreground hover:text-primary"
              >
                Ask about this <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="container-prose mt-28">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          How we work with a clinic
        </p>
        <h2 className="mt-6 max-w-3xl text-4xl leading-tight md:text-5xl">
          Three honest stages. No theatre.
        </h2>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          You&apos;ll always know what we&apos;re doing, why, and what it costs. If
          Nursesight isn&apos;t the right fit for your clinic, we&apos;ll say so before
          you sign anything.
        </p>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {process.map((p) => (
            <div key={p.n}>
              <p className="font-display text-sm text-primary">{p.n}</p>
              <h3 className="mt-2 text-2xl">{p.title}</h3>
              <p className="mt-3 text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
        <blockquote className="mt-16 max-w-2xl">
          <p className="font-display text-2xl leading-snug md:text-3xl">
            &quot;They actually picked up the phone.&quot;
          </p>
          <footer className="mt-3 text-sm text-muted-foreground">
            — paraphrasing every pilot clinic we&apos;ve onboarded so far, after
            switching from a bigger vendor.
          </footer>
        </blockquote>
      </section>

      {/* Why bother with us */}
      <section className="container-prose mt-28 grid gap-12 md:grid-cols-2 md:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Why bother with us
          </p>
          <h2 className="mt-6 text-4xl leading-tight md:text-5xl">
            We&apos;re small on purpose.
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            The same people who design the product ship it and answer your
            messages. There&apos;s no account manager translating between you
            and the engineer in another time zone. It&apos;s just us.
          </p>
        </div>
        <ul className="divide-y divide-border/60">
          {reasons.map((r) => (
            <li key={r} className="flex items-start gap-4 py-5">
              <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span className="text-lg">{r}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* The team */}
      <section className="container-prose mt-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              The team
            </p>
            <h2 className="mt-6 max-w-3xl text-4xl leading-tight md:text-5xl">
              The people you&apos;re actually working with.
            </h2>
            <p className="mt-6 max-w-2xl text-muted-foreground">
              A small clinical and engineering team who ship the product and
              answer your messages personally. No account managers relaying
              between you and the people who build it.
            </p>
          </div>
          <Link
            href="/about"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted"
          >
            Meet the whole team →
          </Link>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {team.map((p) => (
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
              <h3 className="mt-5 text-xl">{p.name}</h3>
              <p className="mt-1 text-sm text-primary">{p.role}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {p.place}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-prose mt-28 mb-16">
        <div className="rounded-3xl border border-border/70 bg-secondary/40 p-10 md:p-16">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Still reading? Nice.
          </p>
          <h2 className="mt-6 max-w-3xl text-4xl leading-tight md:text-5xl">
            Send us a rambling email. We read every one.
          </h2>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            No forms with twenty fields. Just tell us what clinic or health
            network you run, and we&apos;ll write back within a day — usually
            with questions, and a pilot proposal.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Request a demo <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
