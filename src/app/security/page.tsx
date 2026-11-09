import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/LegalPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Security & 21 CFR Part 11 Compliance",
  description:
    "How metquay.ai protects calibration records: AWS hosting, encryption, tenant isolation, backups, access control, audit trails and 21 CFR Part 11 controls.",
  path: "/security",
});

export default function SecurityPage() {
  return <LegalPage slug="security" />;
}
