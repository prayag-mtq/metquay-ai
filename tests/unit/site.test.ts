import { describe, expect, it } from "vitest";
import { site } from "@/config/site";

const routes = [
  "/",
  "/solutions",
  "/ecosystem",
  "/resources",
  "/company",
  "/contact",
  "/security",
  "/privacy",
  "/terms",
  "/blog",
];
const pathOf = (href: string) => href.split(/[?#]/)[0] || "/";
const footerLinks = site.footer.flatMap((col) => col.links);

describe("site config", () => {
  it("uses the canonical www origin", () => {
    expect(site.url).toBe("https://www.metquay.com");
  });

  it("points every internal footer link at an existing route", () => {
    for (const link of footerLinks.filter((l) => l.href.startsWith("/"))) {
      expect(routes).toContain(pathOf(link.href));
    }
  });

  it("sends footer Contact and Blog to their own pages", () => {
    expect(footerLinks.find((l) => l.label === "Contact")?.href).toMatch(/^\/contact/);
    expect(footerLinks.find((l) => l.label === "Blog")?.href).toMatch(/^\/blog/);
  });
});
