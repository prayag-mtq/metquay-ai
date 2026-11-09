import "@/styles/globals.css";

import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/config/site";
import { jsonLd, OG_IMAGE, SITE_ALTERNATES } from "@/lib/seo";

const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  openGraph: { siteName: site.name, locale: "en_US", images: [OG_IMAGE] },
  twitter: { card: "summary_large_image" },
  alternates: { types: SITE_ALTERNATES },
  verification: {
    google: site.verification.google,
    other: site.verification.bing ? { "msvalidate.01": site.verification.bing } : undefined,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <JsonLd data={jsonLd.organization()} />
        <JsonLd data={jsonLd.website()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          <main id="main" className="relative isolate">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(123,104,238,0.2),transparent_70%)]"
            />
            {children}
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
