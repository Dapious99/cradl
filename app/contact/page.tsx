import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get started with Nursesight or write to us. We answer every message, usually within a day.",
  openGraph: {
    title: "Contact — Nursesight",
    description: "Get started with Nursesight or write to us. We answer every message.",
  },
};

export default function Contact() {
  return (
    <section className="container-prose py-20 md:py-28">
      <p className="mb-4 text-sm text-muted-foreground">Get in touch</p>
      <h1 className="max-w-3xl text-5xl leading-tight md:text-6xl">
        Send us a rambling email. We read every one.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        Tell us who you are — an HMO, an NGO, a ministry of health, a hospital network, a
        journalist — and what you&apos;re trying to do. We usually write back within a day, often
        with questions.
      </p>

      {/* Quick contact links */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">General</p>
          <a
            href="mailto:nonso@nursesight.site"
            className="mt-1 block text-lg font-medium text-primary hover:underline"
          >
            nonso@nursesight.site
          </a>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">HMOs &amp; NGOs</p>
          <a
            href="mailto:nonso@nursesight.site"
            className="mt-1 block text-lg font-medium hover:text-primary transition-colors"
          >
            nonso@nursesight.site
          </a>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Partnerships</p>
          <a
            href="mailto:nonso@nursesight.site"
            className="mt-1 block text-lg font-medium hover:text-primary transition-colors"
          >
            nonso@nursesight.site
          </a>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">Phone</p>
          <a
            href="tel:+2348109227529"
            className="mt-1 block text-lg font-medium hover:text-primary transition-colors"
          >
            +234 810 922 7529
          </a>
        </div>
      </div>

      {/* Contact form */}
      <div className="mt-16 grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
        <aside className="lg:col-span-2 space-y-8">
          <div className="rounded-3xl border border-border/60 bg-secondary/40 p-8">
            <p className="font-display text-xl leading-snug">
              &quot;The best emails we get start with &apos;this is probably a stupid question, but…&apos;.&quot;
            </p>
            <p className="mt-3 text-sm text-muted-foreground">— The Nursesight team</p>
          </div>
          <div className="rounded-3xl border border-border/60 bg-secondary/40 p-8 text-sm text-muted-foreground space-y-3">
            <p className="font-medium text-foreground">Our office</p>
            <p>No 3 Abalukwu Street, Achara Layout, Enugu State</p>
            <p className="pt-2 border-t border-border/60">
              We reply within one working day. For urgent clinical matters, call the clinic
              directly — we are not an emergency service.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
