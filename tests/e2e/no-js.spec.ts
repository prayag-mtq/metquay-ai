import { expect, test } from "@playwright/test";

import { sitemapPaths } from "../support/routes";

test.use({ javaScriptEnabled: false });

test("every page renders its content without JavaScript", async ({ page, request }) => {
  test.setTimeout(120_000);
  for (const path of await sitemapPaths(request)) {
    await page.goto(path);
    await expect(page.locator("h1"), path).toBeVisible();
    const { length, hidden } = await page.evaluate(() => {
      const main = document.querySelector("main")!;
      const invisible = [...main.querySelectorAll<HTMLElement>("*")].filter(
        (el) => getComputedStyle(el).opacity === "0" && !el.closest("[hidden],[aria-hidden='true']"),
      );
      return { length: main.innerText.length, hidden: invisible.map((el) => el.tagName) };
    });
    expect(length, path).toBeGreaterThan(200);
    expect(hidden, path).toEqual([]);
  }
});
