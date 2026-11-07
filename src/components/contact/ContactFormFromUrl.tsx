"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { playbooks } from "@/content/pages/resources";
import { ContactForm, isIntent } from "./ContactForm";

type Props = { endpoint: string | null };

function FormWithParams({ endpoint }: Props) {
  const params = useSearchParams();
  const intent = params.get("intent");
  const playbook = playbooks.find((p) => p.id === params.get("playbook"));
  return (
    <ContactForm
      key={params.toString()}
      endpoint={endpoint}
      defaultIntent={isIntent(intent) ? intent : undefined}
      defaultMessage={playbook ? `Please send me the ${playbook.title}.` : ""}
    />
  );
}

export function ContactFormFromUrl({ endpoint }: Props) {
  return (
    <Suspense fallback={<ContactForm endpoint={endpoint} />}>
      <FormWithParams endpoint={endpoint} />
    </Suspense>
  );
}
