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
    title: "Prenatal enrollment",
    body: "Every mother in our catchment gets four structured check-ins, a birth plan, and a named midwife — long before labor starts.",
  },
  {
    n: "02",
    title: "Safe-birth kits",
    body: "Chlorhexidine, a clean-delivery kit and a working pulse oximeter in every partner clinic. Small equipment, huge difference.",
  },
  {
    n: "03",
    title: "Clinician training",
    body: "Helping Babies Breathe, essential newborn care, neonatal resuscitation. Refreshed on-site, every quarter, by our own doctors.",
  },
  {
    n: "04",
    title: "Community health workers",
    body: "A 240-person network that visits every enrolled family in weeks 1, 2, 4, 8 — then monthly through the first birthday.",
  },
  {
    n: "05",
    title: "Immunization on time",
    body: "Cold chain, reminders, and a real human who shows up when a mother misses a dose. Coverage above 95% in every partner clinic.",
  },
  {
    n: "06",
    title: "A second opinion",
    body: "Any partner clinic can call a Cradl neonatologist, day or night. Because sometimes the whole thing turns on one phone call.",
  },
];

const process = [
  {
    n: "01",
    title: "We listen (a lot)",
    body: "Weeks of sitting in the maternity ward before we suggest a single change. Every clinic is different, and the answers usually come from the nurses.",
  },
  {
    n: "02",
    title: "We build, in the open",
    body: "Short cycles, monthly outcomes shared with clinic staff and funders. You'll never wonder what a Cradl dollar bought.",
  },
  {
    n: "03",
    title: "We stay, quietly",
    body: "No ribbon-cuttings and no exit strategy. Once a clinic joins Cradl we're on the WhatsApp group for good.",
  },
];

const reasons = [
  "You talk to clinicians, not fundraisers",
  "Fixed program budgets, no surprise asks",
  "We say no when a project isn't the right fit",
  "Long after the launch photo, we're still there",
];

const team = [
  { img: "/team-1.jpg", name: "Dr. Amina Okafor", role: "Co-founder & Medical Director", place: "Lagos" },
  { img: "/team-2.jpg", name: "Dr. Samuel Otieno", role: "Co-founder & Neonatologist", place: "Nairobi" },
  { img: "/team-3.jpg", name: "Priya Menon, CNM", role: "Head of Midwifery", place: "Bangalore" },
  { img: "/team-4.jpg", name: "Fatima Bello", role: "Community Health Lead", place: "Kaduna" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="container-prose grid gap-12 pt-14 pb-16 md:grid-cols-2 md:items-center md:pt-24 md:pb-24">
        <div>
          <p className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            Hello, we&apos;re Cradl.
          </p>
          <h1 className="text-5xl leading-[1.02] md:text-6xl">
            We keep newborns alive through their{" "}
            <span className="text-primary">first year</span>.
          </h1>
          <p className="mt-8 max-w-lg text-lg text-muted-foreground">
            No fundraising theatre, no fifty-person field visits. Just a small,
            senior team of clinicians who work with maternity clinics across
            Africa to end preventable infant deaths — one birth at a time.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Say hi <span aria-hidden>→</span>
            </Link>
            <Link
              href="/approach"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-muted"
            >
              See what we do
            </Link>
          </div>
          <blockquote className="mt-10 max-w-md text-sm italic text-muted-foreground">
            &quot;Honestly, most of the babies we save are saved by a nurse who had
            the right kit within arm&apos;s reach. That&apos;s the whole job.&quot;
            <footer className="mt-3 not-italic text-xs uppercase tracking-[0.14em]">
              — Dr. Amina Okafor, co-founder
            </footer>
          </blockquote>
        </div>

        <div className="relative">
          <figure className="overflow-hidden rounded-3xl">
            <Image
              src="/hero.jpg"
              alt="A mother cradling her newborn in warm morning light"
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
              Enrolling 2 new partner clinics this quarter.
            </p>
          </div>
        </div>
      </section>

      {/* Partners strip */}
      <section className="border-y border-border/60 bg-secondary/40">
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
              Clinics that vanish after donor cycles end
            </p>
            <p className="mt-1">
              Programs launch, funding runs out, equipment breaks. We stay on so
              the chain of care doesn&apos;t quietly fall apart in year two.
            </p>
          </div>
          <div>
            <p className="font-medium text-foreground">
              Mothers who don&apos;t know who to call at 3 a.m.
            </p>
            <p className="mt-1">
              A named midwife and a working phone number changes the outcome
              more than any single piece of hardware we install.
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
              <a
                href="mailto:hello@cradl.health"
                className="mt-6 inline-flex items-center gap-2 text-sm text-foreground hover:text-primary"
              >
                Tell us about it <span aria-hidden>→</span>
              </a>
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
          You&apos;ll always know what we&apos;re doing, why, and what it costs. If a
          program isn&apos;t worth running, we&apos;ll say so before a single dollar moves.
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
            — paraphrasing every clinic manager we&apos;ve onboarded after switching
            from a bigger NGO.
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
            The same people who design a program run it in the field and answer
            your messages. There&apos;s no country director translating between you
            and a nurse in another time zone. It&apos;s just us.
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
              A small clinical leadership plus the midwives and community health
              workers who show up at every birth. No country directors, no juniors
              learning on a mother&apos;s timeline.
            </p>
          </div>
          <Link
            href="/about"
            className="rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted"
          >
            Meet the whole team →
          </Link>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
            No forms with twenty fields. Just tell us what clinic you run — or
            what program you&apos;re trying to fund — and we&apos;ll write back within a
            day, usually with questions.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Say hi <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
