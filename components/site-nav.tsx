import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/solution", label: "Solution" },
  { href: "/technology", label: "Tech stack" },
  { href: "/impact", label: "Results" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-prose flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-mark.png"
            alt="Nursesight logo"
            width={44}
            height={44}
            className="h-11 w-11"
            priority
          />
          <span className="font-display text-xl tracking-tight">
            NURSESIGHT<span className="text-primary">.</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-muted-foreground lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="transition-colors hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 md:inline-flex"
        >
          Get Started <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}
