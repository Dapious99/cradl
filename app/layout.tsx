import type { Metadata } from "next";
import { Lora, Plus_Jakarta_Sans } from "next/font/google";
import { MotionProvider } from "@/components/motion/motion-provider";
import { SiteHeader } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Nursesight — Newborn monitoring & care-coordination software",
    template: "%s — Nursesight",
  },
  description:
    "Nursesight is a B2B SaaS platform giving maternity clinics and health networks real-time vitals monitoring, care-coordination workflows, and outcomes reporting in one dashboard. Now in private beta.",
  metadataBase: new URL("https://nursesight.health"),
  openGraph: {
    siteName: "Nursesight",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${plusJakartaSans.variable}`}>
      <body>
        <MotionProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
