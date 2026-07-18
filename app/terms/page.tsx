import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms of use for the Nursesight website and partnership commitments to clinics and funders.",
  openGraph: {
    title: "Terms — Nursesight",
    description: "Terms of use for the Nursesight website and partnerships.",
  },
};

export default function Terms() {
  return (
    <section className="container-prose max-w-3xl py-20 md:py-28">
      <p className="mb-4 text-sm text-muted-foreground">Terms of use</p>
      <h1 className="text-5xl leading-tight md:text-6xl">The plain-language version.</h1>
      <p className="mt-8 text-lg text-muted-foreground">
        Nothing on this website is medical advice. Nursesight programs are delivered by licensed
        clinicians inside accredited partner clinics. Last updated July 2026.
      </p>

      <div className="mt-14 space-y-10 text-muted-foreground">
        <div>
          <h2 className="text-2xl text-foreground">Not medical advice</h2>
          <p className="mt-3">
            Content published on nursesight.health is for informational and educational purposes
            only and is not a substitute for clinical care. If you or your baby need medical
            attention, contact your local clinic or emergency service.
          </p>
        </div>
        <div>
          <h2 className="text-2xl text-foreground">Partnership commitments</h2>
          <p className="mt-3">
            Partner clinics operate under a written memorandum of understanding covering scope,
            equipment ownership, data sharing and duration. This website is not itself a contract;
            specific terms are agreed in writing per partnership.
          </p>
        </div>
        <div>
          <h2 className="text-2xl text-foreground">Content and imagery</h2>
          <p className="mt-3">
            Portraits and clinical scenes on this site may include composite or illustrative
            imagery. Named individuals appear with their written consent. Do not reuse Nursesight
            photography without permission.
          </p>
        </div>
        <div>
          <h2 className="text-2xl text-foreground">Contact</h2>
          <p className="mt-3">
            Questions about these terms:{" "}
            <a href="mailto:hello@nursesight.health" className="text-primary hover:underline">
              hello@nursesight.health
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
