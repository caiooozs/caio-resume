import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DotPattern } from "@/components/ui/dot-pattern";
import NavBar from "@/modules/components/Shared/NavBar/NavBar";
import Footer from "@/modules/components/Shared/Footer/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import { themeScript } from "@/lib/theme-script";
import { getI18n } from "@/lib/i18n/server";
import { I18nProvider } from "@/lib/i18n/client";
import { htmlLang } from "@/lib/i18n/config";
import { RevealObserver } from "@/components/ui/reveal-observer";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return {
    metadataBase: new URL("https://caiodev-olive.vercel.app"),
    title: {
      default: t.meta.title,
      template: "%s — Caio Cesar Costa",
    },
    description: t.meta.description,
    openGraph: {
      type: "website",
      locale: t.meta.ogLocale,
      url: "https://caiodev-olive.vercel.app",
      siteName: "Caio Cesar Costa",
      title: t.meta.title,
      description: t.meta.description,
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
      title: t.meta.title,
      description: t.meta.shortDescription,
      images: ["/me.jpg"],
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const { locale, t } = await getI18n();

  return (
    <html
      lang={htmlLang[locale]}
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* tema antes da primeira pintura: sem flash claro/escuro */}
        <script
          type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <I18nProvider locale={locale} t={t}>
          <DotPattern />
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
          <RevealObserver />
        </I18nProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
