import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Cradl handles personal and clinical data from mothers, families and partner clinics.",
  openGraph: {
    title: "Privacy — Cradl",
    description: "How Cradl handles personal and clinical data.",
  },
};

export default function Privacy() {
  return (
    <section className="container-prose max-w-3xl py-20 md:py-28">
      <p className="mb-4 text-sm text-muted-foreground">Privacy policy</p>
      <h1 className="text-5xl leading-tight md:text-6xl">The short version.</h1>
      <p className="mt-8 text-lg text-muted-foreground">
        We collect the minimum data we need to keep a baby alive through their first year, we
        never sell it, and clinical records stay with the partner clinic and the national health
        system they already report into. Last updated July 2026.
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
            Clinical data stays inside partner-clinic systems and is reported into national DHIS2
            instances. Cradl only sees de-identified, aggregated outcome data unless a partner
            clinic explicitly grants case-level access for a specific clinical review.
          </p>
        </div>
        <div>
          <h2 className="text-2xl text-foreground">Website analytics</h2>
          <p className="mt-3">
            The Cradl website uses privacy-respecting analytics with no cross-site tracking,
            no advertising cookies, and no personal identifiers stored.
          </p>
        </div>
        <div>
          <h2 className="text-2xl text-foreground">Your rights</h2>
          <p className="mt-3">
            Any enrolled family may request a copy, correction or deletion of their records through
            their partner clinic. Email{" "}
            <a href="mailto:privacy@cradl.health" className="text-primary hover:underline">
              privacy@cradl.health
            </a>{" "}
            for anything else.
          </p>
        </div>
      </div>
    </section>
  );
}
