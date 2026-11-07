import { expect, test } from "@playwright/test";

const guides = [
  "/calibration-management-software",
  "/iso-17025-calibration-software",
  "/21-cfr-part-11-calibration-software",
  "/calibration-software-migration",
];

test("guide pages expose FAQ, breadcrumb and web page structured data", async ({ request }) => {
  for (const path of guides) {
    const html = await (await request.get(path)).text();
    const types = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(
      (m) => JSON.parse(m[1])["@type"],
    );
    expect(types, path).toEqual(expect.arrayContaining(["FAQPage", "BreadcrumbList", "WebPage"]));
  }
});

test("glossary terms are deep-linkable", async ({ page }) => {
  await page.goto("/glossary#tur");
  await expect(page.locator("#tur")).toBeInViewport();
});

test("post category links to its hub and the feed lists posts", async ({ page, request }) => {
  await page.goto("/blog/introduction-to-gage-r-r");
  await page.getByRole("link", { name: "Efficient Approaches" }).click();
  await expect(page).toHaveURL(/\/blog\/category\/efficient-approaches$/);
  await expect(page.locator("h1")).toHaveText("Efficient Approaches");
  const feed = await request.get("/blog/feed.xml");
  expect(feed.status()).toBe(200);
  expect(await feed.text()).toContain("<rss");
});

test("posts share their own Open Graph image", async ({ request }) => {
  const html = await (await request.get("/blog/introduction-to-gage-r-r")).text();
  expect(html).toContain('property="og:image" content="https://www.metquay.com/og/blog/introduction-to-gage-r-r.png"');
  expect((await request.get("/og/blog/introduction-to-gage-r-r.png")).status()).toBe(200);
});
