import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The terms that govern use of metquay.ai, its customer portal, APIs, mobile and offline apps, and related services.",
  path: "/terms",
});

export default function TermsPage() {
  return <LegalPage slug="terms" />;
}
