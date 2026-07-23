import Link from "next/link";
import Image from "next/image";
import { LinkedInIcon, XIcon } from "@/components/social-icons";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="container-prose grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-mark.png"
              alt="Nursesight logo"
              width={36}
              height={36}
              className="h-9 w-9"
            />
            <span className="font-display text-xl tracking-tight">
              NURSESIGHT<span className="text-primary">.</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Monitoring and care-coordination software dedicated to ending
            preventable infant deaths, one birth at a time.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/136106910/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nursesight on LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/Nursesight"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nursesight on X"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <XIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="text-sm">
          <p className="mb-3 font-medium">Explore</p>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link href="/solution" className="hover:text-foreground transition-colors">Solution</Link></li>
            <li><Link href="/technology" className="hover:text-foreground transition-colors">Tech stack</Link></li>
            <li><Link href="/impact" className="hover:text-foreground transition-colors">Results</Link></li>
            <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
            <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link></li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="mb-3 font-medium">Get in touch</p>
          <a
            href="mailto:nonso@nursesight.site"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            nonso@nursesight.site
          </a>
          <a
            href="tel:+2348109227529"
            className="mt-1 block text-muted-foreground hover:text-foreground transition-colors"
          >
            +234 810 922 7529
          </a>
          <p className="mt-1 text-muted-foreground">
            No 3 Abalukwu Street, Achara Layout, Enugu State
          </p>
        </div>
      </div>

      <div className="border-t border-border/60 py-5">
        <div className="container-prose flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Nursesight. All rights reserved.</p>
          <p>Every baby, a full first year.</p>
        </div>
      </div>
    </footer>
  );
}
