import { expect, test } from "@playwright/test";

test("legacy and variant URLs redirect to canonical pages", async ({ request }) => {
  for (const [from, to] of [
    ["/hi", "/"],
    ["/hi/company", "/company"],
    ["/post/introduction-to-gage-r-r", "/blog/introduction-to-gage-r-r"],
    ["/company/", "/company"],
  ]) {
    const res = await request.get(from, { maxRedirects: 0 });
    expect(res.status(), from).toBe(301);
    expect(res.headers().location, from).toBe(to);
  }
});

test("unknown URLs return the 404 page with a 404 status", async ({ request }) => {
  const res = await request.get("/foo");
  expect(res.status()).toBe(404);
  expect(await res.text()).toContain("Page not found");
});

test("browsing triggers no failed requests, including router prefetches", async ({ page }) => {
  const failed: string[] = [];
  page.on("response", (res) => res.status() >= 400 && failed.push(`${res.status()} ${res.url()}`));
  for (const path of ["/", "/blog", "/blog/introduction-to-gage-r-r"]) {
    await page.goto(path, { waitUntil: "networkidle" });
    await page.waitForTimeout(500);
  }
  expect(failed).toEqual([]);
});
