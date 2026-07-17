"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

// ─── Change this to the real email once Zoho is set up ───────────────────────
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/hello@cradl.health";
// ─────────────────────────────────────────────────────────────────────────────

const interests = [
  "Partner clinic inquiry",
  "Funding / grants",
  "Research collaboration",
  "Press / media",
  "Joining the team",
  "General question",
] as const;

type Fields = "name" | "email" | "organization" | "interest" | "message";

function validate(data: FormData): Partial<Record<Fields, string>> {
  const errors: Partial<Record<Fields, string>> = {};
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  if (!name) errors.name = "Name is required";
  else if (name.length > 100) errors.name = "Name is too long";

  if (!email) errors.email = "Please enter a valid email";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
    errors.email = "Please enter a valid email";

  if (!message) errors.message = "Message is required";
  else if (message.length > 2000) errors.message = "Message is too long (max 2000 characters)";

  return errors;
}

export function ContactForm() {
  const [errors, setErrors] = useState<Partial<Record<Fields, string>>>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const nextErrors = validate(fd);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setServerError(null);
    setSubmitting(true);

    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });

      if (!res.ok) throw new Error(`Server responded with ${res.status}`);

      const json = await res.json();
      // formsubmit.co returns { success: "true" } on success
      if (json?.success !== "true" && json?.success !== true) {
        throw new Error("Submission not confirmed");
      }

      setSent(true);
      form.reset();
    } catch (err) {
      console.error("Contact form error:", err);
      setServerError(
        "Something went wrong — please try again or email us directly at hello@cradl.health."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-3xl border border-border bg-card p-8 py-10 md:p-10">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
          <Check className="h-6 w-6" />
        </span>
        <h2 className="font-display text-3xl">Thanks — we'll be in touch.</h2>
        <p className="max-w-md text-muted-foreground">
          We reply to every message within two working days. In the meantime, feel free to
          explore the rest of the site.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-2 text-sm font-medium text-primary hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
      <h2 className="font-display text-3xl">Send us a message</h2>
      <p className="mt-2 text-sm text-muted-foreground">Fields marked * are required.</p>

      <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-5">
        {/* formsubmit.co config */}
        <input type="hidden" name="_subject" value="New message via Cradl website" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_replyto" value="" />

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name *" name="name" error={errors.name} />
          <Field label="Email *" name="email" type="email" error={errors.email} />
        </div>

        <Field label="Organization (optional)" name="organization" error={errors.organization} />

        <div>
          <label htmlFor="interest" className="mb-1.5 block text-sm font-medium">
            I'm reaching out about *
          </label>
          <select
            id="interest"
            name="interest"
            defaultValue={interests[0]}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
          >
            {interests.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            maxLength={2000}
            placeholder="Tell us about your clinic, project, or question. The more context the better — we'll write back with useful questions."
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/50 focus:border-primary/60 focus:ring-2 focus:ring-primary/20 resize-none"
          />
          {errors.message && (
            <p className="mt-1 text-xs text-destructive">{errors.message}</p>
          )}
        </div>

        {serverError && (
          <p className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {serverError}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
              Sending…
            </>
          ) : (
            <>
              Send message <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        maxLength={type === "email" ? 255 : 120}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
