import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Metquay collects, uses and protects personal information across the metquay.ai website and calibration management platform.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalPage slug="privacy" />;
}
