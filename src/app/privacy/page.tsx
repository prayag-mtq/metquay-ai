import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Metquay collects, uses and protects personal information across the metquay.ai website and calibration management platform.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalPage slug="privacy" />;
}
