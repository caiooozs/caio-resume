import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { DotPattern } from "@/components/ui/dot-pattern";
import NavBar from "@/modules/components/Shared/NavBar/NavBar";
import Footer from "@/modules/components/Shared/Footer/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://caiodev-olive.vercel.app"),
  title: {
    default: "Caio Cesar Costa — Frontend Developer",
    template: "%s — Caio Cesar Costa",
  },
  description:
    "Frontend developer from Recife, PE, working with React and Next.js. I build interfaces people enjoy using, run a YouTube channel, and help lead the Hyphen Community.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://caiodev-olive.vercel.app",
    siteName: "Caio Cesar Costa",
    title: "Caio Cesar Costa — Frontend Developer",
    description:
      "Frontend developer from Recife, PE, working with React and Next.js. I build interfaces people enjoy using, run a YouTube channel, and help lead the Hyphen Community.",
    images: [
      {
        url: "/me.jpg",
        width: 1200,
        height: 630,
        alt: "Caio Cesar Costa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caio Cesar Costa — Frontend Developer",
    description:
      "Frontend developer from Recife, PE, working with React and Next.js.",
    images: ["/me.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <DotPattern />
        <header>
          <NavBar />
          <div aria-hidden className="h-(--nav-h) shrink-0" />
        </header>
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
