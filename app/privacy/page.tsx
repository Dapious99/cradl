import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Nursesight handles personal and clinical data for the clinics, care teams, and families using the platform.",
  openGraph: {
    title: "Privacy — Nursesight",
    description: "How Nursesight handles personal and clinical data.",
  },
};

export default function Privacy() {
  return (
    <section className="container-prose max-w-3xl py-20 md:py-28">
      <p className="mb-4 text-sm text-muted-foreground">Privacy policy</p>
      <h1 className="text-5xl leading-tight md:text-6xl">The short version.</h1>
      <p className="mt-8 text-lg text-muted-foreground">
        We collect the minimum data we need to keep a baby alive through their first year, we
        never sell it, and clinical records stay with the clinic using Nursesight and the
        national health system they already report into. Last updated July 2026.
      </p>

      <div className="mt-14 space-y-10 text-muted-foreground">
        <div>
          <h2 className="text-2xl text-foreground">What we collect</h2>
          <p className="mt-3">
            Names, contact numbers and clinical records for enrolled mothers and infants —
            collected by clinic staff during routine care and by community health workers during
            home visits.
          </p>
        </div>
        <div>
          <h2 className="text-2xl text-foreground">Where it lives</h2>
          <p className="mt-3">
            Clinical data stays inside each clinic&apos;s Nursesight workspace and is reported into
            national health information systems. Nursesight only sees de-identified, aggregated
            usage data unless a clinic explicitly grants case-level access for a specific
            clinical review.
          </p>
        </div>
        <div>
          <h2 className="text-2xl text-foreground">Website analytics</h2>
          <p className="mt-3">
            The Nursesight website uses privacy-respecting analytics with no cross-site tracking,
            no advertising cookies, and no personal identifiers stored.
          </p>
        </div>
        <div>
          <h2 className="text-2xl text-foreground">Your rights</h2>
          <p className="mt-3">
            Any enrolled family may request a copy, correction or deletion of their records through
            the clinic using Nursesight. Email{" "}
            <a href="mailto:privacy@nursesight.health" className="text-primary hover:underline">
              privacy@nursesight.health
            </a>{" "}
            for anything else.
          </p>
        </div>
      </div>
    </section>
  );
}
