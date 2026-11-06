import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { extractText } from "../../scripts/extract-text";

const crawl = "metquay-website-assets/metquay-public-assets/pages";

describe("extractText", () => {
  it("drops scripts and collapses breakpoint duplicates", () => {
    expect(extractText("<h2>A</h2><h2>A</h2><p>B</p><script>x</script>")).toEqual(["## A", "B"]);
  });

  it("keeps the home headline once", () => {
    const blocks = extractText(readFileSync(`${crawl}/index.html`, "utf8"));
    const hits = blocks.filter((b) => b.includes("Calibration Management, built for every detail and any scale"));
    expect(hits).toHaveLength(1);
  });
});
