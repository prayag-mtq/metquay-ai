import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern use of metquay.ai, its customer portal, APIs, mobile and offline apps, and related services.",
};

export default function TermsPage() {
  return <LegalPage slug="terms" />;
}
