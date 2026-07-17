import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to Cradl. We answer every message, usually within a day.",
  openGraph: {
    title: "Contact — Cradl",
    description: "Write to Cradl. We answer every message.",
  },
};

export default function Contact() {
  return (
    <section className="container-prose py-20 md:py-28">
      <p className="mb-4 text-sm text-muted-foreground">Get in touch</p>
      <h1 className="max-w-3xl text-5xl leading-tight md:text-6xl">
        Send us a rambling email. We read every one.
      </h1>
      <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
        No twenty-field form. Tell us who you are — a clinic, a funder, a mother, a
        journalist — and what you're trying to do. We usually write back within a day,
        often with questions.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-3">
        <div>
          <p className="text-sm text-muted-foreground">Email</p>
          <a
            href="mailto:hello@cradl.health"
            className="mt-1 block font-display text-2xl text-primary hover:underline"
          >
            hello@cradl.health
          </a>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">For clinics</p>
          <a
            href="mailto:clinics@cradl.health"
            className="mt-1 block font-display text-2xl hover:underline"
          >
            clinics@cradl.health
          </a>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">For funders</p>
          <a
            href="mailto:partners@cradl.health"
            className="mt-1 block font-display text-2xl hover:underline"
          >
            partners@cradl.health
          </a>
        </div>
      </div>

      <div className="mt-16 rounded-3xl border border-border p-10">
        <p className="font-display text-2xl leading-snug md:text-3xl">
          "The best emails we get are the ones that start 'this is probably a stupid
          question, but…'. Those are never stupid questions."
        </p>
        <p className="mt-4 text-sm text-muted-foreground">— The Cradl team</p>
      </div>
    </section>
  );
}
