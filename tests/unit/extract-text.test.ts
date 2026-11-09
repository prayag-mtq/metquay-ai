import { describe, expect, it } from "vitest";

import { extractText } from "../../scripts/migrate/extract-text";
import { hasCrawl, readCrawl } from "../support/crawl";

describe("extractText", () => {
  it("drops scripts and collapses breakpoint duplicates", () => {
    expect(extractText("<h2>A</h2><h2>A</h2><p>B</p><script>x</script>")).toEqual(["## A", "B"]);
  });

  it.skipIf(!hasCrawl)("keeps the home headline once", () => {
    const blocks = extractText(readCrawl("pages/index.html"));
    const hits = blocks.filter((b) => b.includes("Calibration Management, built for every detail and any scale"));
    expect(hits).toHaveLength(1);
  });
});
