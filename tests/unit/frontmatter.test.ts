import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { formatDate, rfc822 } from "@/lib/date";
import { readMdx } from "@/lib/frontmatter";

const file = (body: string) => {
  const path = join(mkdtempSync(join(tmpdir(), "mdx-")), "page.mdx");
  writeFileSync(path, body);
  return path;
};

describe("readMdx", () => {
  it("returns typed fields and normalises YAML dates to ISO strings", () => {
    const mdx = readMdx(file("---\ntitle: Hello\ndate: 2024-01-05\n---\nBody"));
    expect(mdx.string("title")).toBe("Hello");
    expect(mdx.date("date")).toBe("2024-01-05");
    expect(mdx.optionalString("author")).toBeUndefined();
    expect(mdx.optionalDate("updated")).toBeUndefined();
    expect(mdx.content.trim()).toBe("Body");
  });

  it("fails loudly when a required field is missing", () => {
    expect(() => readMdx(file("---\ndate: 2024-01-05\n---\n")).string("title")).toThrow(/page\.mdx.*title/);
  });
});

describe("date helpers", () => {
  it("formats display and RSS dates from ISO strings", () => {
    expect(formatDate("2022-12-20")).toBe("Dec 20, 2022");
    expect(rfc822("2022-12-20")).toBe("Tue, 20 Dec 2022 12:00:00 GMT");
  });
});
