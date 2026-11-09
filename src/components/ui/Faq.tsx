import { Plus } from "lucide-react";
import { jsonLd } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

type FaqItem = { id: string; q: string; a: string };

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <>
      <div className="divide-y divide-border border-y border-border">
        {items.map((item) => (
          <details key={item.id} id={`faq-${item.id}`} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-h4 font-semibold [&::-webkit-details-marker]:hidden">
              {item.q}
              <Plus
                aria-hidden="true"
                className="size-5 shrink-0 text-subtle transition-transform duration-200 group-open:rotate-45"
              />
            </summary>
            <p className="pb-6 text-body text-muted">{item.a}</p>
          </details>
        ))}
      </div>
      <JsonLd data={jsonLd.faqPage(items)} />
    </>
  );
}
