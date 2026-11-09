import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <div className="min-h-[60vh]">
      <PageHero title="Page not found" lead="The page you're looking for has moved or doesn't exist.">
        <Button href="/">Go to homepage</Button>
        <Button href="/blog" variant="secondary">
          Read the blog
        </Button>
      </PageHero>
    </div>
  );
}
