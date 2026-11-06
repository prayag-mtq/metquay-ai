import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Security",
  description:
    "How metquay.ai protects calibration records: AWS hosting, encryption, tenant isolation, backups, access control, audit trails and 21 CFR Part 11 controls.",
};

export default function SecurityPage() {
  return <LegalPage slug="security" />;
}
