"use client";

import { playbooks } from "@/content/pages/resources";
import { useHasMounted } from "@/lib/use-has-mounted";
import { ContactForm, isIntent } from "./ContactForm";

const readIntent = () => {
  const params = new URLSearchParams(window.location.search);
  const intent = params.get("intent");
  const playbook = params.get("playbook");
  return {
    defaultIntent: isIntent(intent) ? intent : undefined,
    defaultMessage: playbook
      ? `Please send me the ${playbooks.find((p) => p.id === playbook)?.title ?? "playbook"}.`
      : "",
  };
};

export function ContactFormFromUrl({ endpoint }: { endpoint: string | null }) {
  const mounted = useHasMounted();
  return mounted ? (
    <ContactForm key="url" endpoint={endpoint} {...readIntent()} />
  ) : (
    <ContactForm endpoint={endpoint} />
  );
}
