import { expect, test } from "@playwright/test";

const TABLE_POST = "/blog/linear-interpolation-made-simple-with-metquay";

test("blog index links every post in the static HTML", async ({ request }) => {
  const html = await (await request.get("/blog")).text();
  const links = new Set([...html.matchAll(/href="\/blog\/([a-z0-9-]+)"/g)].map((m) => m[1]));
  expect(links.size).toBe(97);
});

test("clicking a card's cover opens the post", async ({ page }) => {
  await page.goto("/blog");
  const card = page.getByRole("main").getByRole("listitem").first().getByRole("link");
  const href = await card.getAttribute("href");
  await card.locator('[aria-hidden="true"]').first().click();
  await expect(page).toHaveURL(href!);
});

test("category filter narrows the list and updates the URL", async ({ page }) => {
  await page.goto("/blog");
  await page.getByRole("button", { name: "ERP Integrations" }).click();
  await expect(page).toHaveURL(/category=ERP\+Integrations|category=ERP%20Integrations/);
  const cards = page.locator("main li:not([hidden]) h2");
  await expect(cards).toHaveCount(3);
});

test("post page has one h1 matching the title", async ({ page }) => {
  await page.goto(TABLE_POST);
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator("h1")).toHaveText("Linear Interpolation Made Simple With Metquay 2023 update");
});

test("no horizontal page overflow at 360px on a post with a table", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto(TABLE_POST);
  await expect(page.locator(".prose table")).toBeVisible();
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(0);
});
