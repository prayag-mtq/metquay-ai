import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Metquay collects, uses and protects personal information across the metquay.ai website and calibration management platform.",
};

export default function PrivacyPage() {
  return <LegalPage slug="privacy" />;
}
