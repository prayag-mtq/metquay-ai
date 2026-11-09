import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { ContactForm } from "@/components/contact/ContactForm";

const fill = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.type(screen.getByLabelText("Full name"), "Ada Lovelace");
  await user.type(screen.getByLabelText("Work email"), "ada@lab.com");
  await user.type(screen.getByLabelText("How can we help?"), "We run 2 labs.");
};

afterEach(() => vi.unstubAllGlobals());

describe("ContactForm", () => {
  it("falls back to email when no endpoint is configured", async () => {
    const fetch = vi.fn();
    vi.stubGlobal("fetch", fetch);
    const user = userEvent.setup();
    render(<ContactForm endpoint={null} />);
    await fill(user);
    await user.click(screen.getByRole("button", { name: "Send message" }));
    expect(fetch).not.toHaveBeenCalled();
    const link = await screen.findByRole("link", { name: /consulting@metquay\.com/ });
    expect(link.getAttribute("href")).toMatch(/^mailto:consulting@metquay\.com\?subject=.+&body=.*Ada%20Lovelace/);
  });

  it("posts JSON to the endpoint and confirms", async () => {
    const fetch = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetch);
    const user = userEvent.setup();
    render(<ContactForm endpoint="https://forms.example/submit" defaultIntent="expert" />);
    await fill(user);
    await user.click(screen.getByRole("button", { name: "Send message" }));
    expect(fetch).toHaveBeenCalledWith(
      "https://forms.example/submit",
      expect.objectContaining({ method: "POST", headers: { "Content-Type": "application/json" } }),
    );
    expect(JSON.parse(fetch.mock.calls[0][1].body)).toEqual({
      name: "Ada Lovelace",
      email: "ada@lab.com",
      phone: "",
      topic: "expert",
      message: "We run 2 labs.",
    });
    expect(await screen.findByRole("status")).toHaveTextContent(/thanks/i);
  });

  it("shows an error when the endpoint fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false }));
    const user = userEvent.setup();
    render(<ContactForm endpoint="https://forms.example/submit" />);
    await fill(user);
    await user.click(screen.getByRole("button", { name: "Send message" }));
    expect(await screen.findByRole("alert")).toHaveTextContent(/consulting@metquay\.com/);
  });

  it("silently drops submissions that fill the honeypot", async () => {
    const fetch = vi.fn();
    vi.stubGlobal("fetch", fetch);
    const user = userEvent.setup();
    const { container } = render(<ContactForm endpoint="https://forms.example/submit" />);
    await fill(user);
    await user.type(container.querySelector('input[name="company_website"]')!, "spam.biz");
    await user.click(screen.getByRole("button", { name: "Send message" }));
    expect(fetch).not.toHaveBeenCalled();
  });

  it("announces missing required fields", async () => {
    const user = userEvent.setup();
    render(<ContactForm endpoint={null} />);
    await user.click(screen.getByRole("button", { name: "Send message" }));
    const name = screen.getByLabelText("Full name");
    expect(name).toHaveAttribute("aria-invalid", "true");
    expect(document.getElementById(name.getAttribute("aria-describedby")!)).toHaveTextContent(/enter your name/i);
  });

  it("preselects the topic from the intent", () => {
    render(<ContactForm endpoint={null} defaultIntent="playbook" />);
    expect(screen.getByLabelText("Topic")).toHaveValue("playbook");
  });
});

describe("isIntent", () => {
  it("accepts only real topics, not inherited object keys", async () => {
    const { isIntent } = await import("@/components/contact/ContactForm");
    expect(isIntent("trial")).toBe(true);
    expect(isIntent("constructor")).toBe(false);
    expect(isIntent("toString")).toBe(false);
    expect(isIntent(null)).toBe(false);
  });
});
