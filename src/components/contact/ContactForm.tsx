"use client";

import { useId, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { site } from "@/config/site";
import { cn } from "@/lib/cn";

export const topics = {
  trial: "Start a free trial",
  expert: "Talk to an expert",
  playbook: "Request a playbook",
  partner: "Become a partner",
  general: "General question",
} as const;

type Intent = keyof typeof topics;

export const isIntent = (value: string | null): value is Intent => value !== null && Object.hasOwn(topics, value);

type Fields = { name: string; email: string; phone: string; topic: Intent; message: string };
type Status =
  { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error" } | { kind: "mail"; href: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(fields: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (!fields.name.trim()) errors.name = "Enter your name.";
  if (!EMAIL.test(fields.email.trim())) errors.email = "Enter a valid work email.";
  if (!fields.message.trim()) errors.message = "Tell us a little about what you need.";
  return errors;
}

const mailtoHref = (fields: Fields) => {
  const subject = encodeURIComponent(`${topics[fields.topic]} — ${fields.name}`);
  const body = encodeURIComponent(
    `${fields.message}\n\n${fields.name}\n${fields.email}${fields.phone ? `\n${fields.phone}` : ""}`,
  );
  return `mailto:${site.contactEmail}?subject=${subject}&body=${body}`;
};

const inputClass =
  "mt-2 w-full rounded-xl border border-border bg-surface px-4 py-3 text-body text-text placeholder:text-subtle focus:border-purple focus:outline-none aria-[invalid=true]:border-red-400";

type ContactFormProps = { endpoint: string | null; defaultIntent?: Intent; defaultMessage?: string };

export function ContactForm({ endpoint, defaultIntent = "general", defaultMessage = "" }: ContactFormProps) {
  const id = useId();
  const [fields, setFields] = useState<Fields>({
    name: "",
    email: "",
    phone: "",
    topic: defaultIntent,
    message: defaultMessage,
  });
  const [errors, setErrors] = useState<ReturnType<typeof validate>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const set = (key: keyof Fields) => (event: { target: { value: string } }) =>
    setFields((prev) => ({ ...prev, [key]: event.target.value }));

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (form.get("company_website")) return;

    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length) return;

    if (!endpoint) {
      setStatus({ kind: "mail", href: mailtoHref(fields) });
      return;
    }
    setStatus({ kind: "sending" });
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      setStatus({ kind: res.ok ? "sent" : "error" });
    } catch {
      setStatus({ kind: "error" });
    }
  };

  if (status.kind === "sent") {
    return (
      <p role="status" className="rounded-2xl border border-lime/40 bg-lime-deep/40 p-6 text-body text-text">
        Thanks — your message is with our team.
      </p>
    );
  }

  const field = (key: "name" | "email" | "phone", label: string, type: string, autoComplete: string) => (
    <div>
      <label htmlFor={`${id}-${key}`} className="text-small font-semibold text-muted">
        {label}
        {key === "phone" && <span className="font-normal text-subtle"> (optional)</span>}
      </label>
      <input
        id={`${id}-${key}`}
        name={key}
        type={type}
        autoComplete={autoComplete}
        value={fields[key]}
        onChange={set(key)}
        aria-invalid={errors[key] ? true : undefined}
        aria-describedby={errors[key] ? `${id}-${key}-error` : undefined}
        className={inputClass}
      />
      {errors[key] && (
        <p id={`${id}-${key}-error`} className="mt-1.5 text-small text-red-400">
          {errors[key]}
        </p>
      )}
    </div>
  );

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {field("name", "Full name", "text", "name")}
        {field("email", "Work email", "email", "email")}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {field("phone", "Phone number", "tel", "tel")}
        <div>
          <label htmlFor={`${id}-topic`} className="text-small font-semibold text-muted">
            Topic
          </label>
          <select id={`${id}-topic`} name="topic" value={fields.topic} onChange={set("topic")} className={inputClass}>
            {Object.entries(topics).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor={`${id}-message`} className="text-small font-semibold text-muted">
          How can we help?
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={4}
          value={fields.message}
          onChange={set("message")}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? `${id}-message-error` : undefined}
          className={cn(inputClass, "resize-y")}
        />
        {errors.message && (
          <p id={`${id}-message-error`} className="mt-1.5 text-small text-red-400">
            {errors.message}
          </p>
        )}
      </div>
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${id}-hp`}>Company website</label>
        <input id={`${id}-hp`} name="company_website" tabIndex={-1} autoComplete="off" />
      </div>
      <Button type="submit" disabled={status.kind === "sending"}>
        {status.kind === "sending" ? "Sending…" : "Send message"}
      </Button>
      {status.kind === "mail" && (
        <p role="status" className="rounded-xl border border-border bg-card p-4 text-small text-muted">
          Your message is ready. Send it from your email app to{" "}
          <a href={status.href} className="font-semibold text-lime underline underline-offset-4">
            {site.contactEmail}
          </a>
          .
        </p>
      )}
      {status.kind === "error" && (
        <p role="alert" className="rounded-xl border border-red-400/40 p-4 text-small text-muted">
          We couldn’t send your message. Email us at{" "}
          <a href={`mailto:${site.contactEmail}`} className="font-semibold text-lime underline underline-offset-4">
            {site.contactEmail}
          </a>{" "}
          instead.
        </p>
      )}
    </form>
  );
}
