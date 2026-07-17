import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="container-prose grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display text-xl">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
            Cradl
          </div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            A health initiative dedicated to ending preventable infant deaths,
            one birth at a time.
          </p>
        </div>
        <div className="text-sm">
          <p className="mb-3 font-medium">Explore</p>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link href="/solution" className="hover:text-foreground">Solution</Link></li>
            <li><Link href="/technology" className="hover:text-foreground">Technology</Link></li>
            <li><Link href="/impact" className="hover:text-foreground">Impact</Link></li>
            <li><Link href="/about" className="hover:text-foreground">About</Link></li>
            <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-foreground">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-foreground">Terms</Link></li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="mb-3 font-medium">Get in touch</p>
          <p className="text-muted-foreground">hello@cradl.health</p>
          <p className="mt-1 text-muted-foreground">Lagos · Nairobi · Accra</p>
        </div>
      </div>
      <div className="border-t border-border/60 py-5">
        <div className="container-prose flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Cradl Initiative. All rights reserved.</p>
          <p>Every baby, a full first year.</p>
        </div>
      </div>
    </footer>
  );
}
