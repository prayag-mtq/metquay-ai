import { expect, test } from "@playwright/test";

const HEADLINE = "Calibration Management, built for every detail and any scale";

test("headline is the only h1 in the static HTML", async ({ request }) => {
  const html = (await (await request.get("/")).text()).replace(/<script[\s\S]*?<\/script>/g, "");
  expect(html.split(HEADLINE)).toHaveLength(2);
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)];
  expect(h1s).toHaveLength(1);
  expect(h1s[0][1]).toContain(HEADLINE);
});

test("every workflow tile links to its solutions step", async ({ page }) => {
  await page.goto("/");
  const tiles = page.getByRole("list", { name: "Calibration workflow" }).getByRole("link");
  await expect(tiles).toHaveCount(7);
  for (const tile of await tiles.all()) {
    await expect(tile).toHaveAttribute("href", /^\/solutions#step-0[1-8]$/);
    await expect(tile).not.toHaveAttribute("aria-current");
  }
});

test("hero CTAs go to real destinations", async ({ page }) => {
  await page.goto("/");
  const hero = page.locator("#hero");
  await expect(hero.getByRole("link", { name: "Start Free Trial" })).toHaveAttribute("href", "/contact?intent=trial");
  await expect(hero.getByRole("link", { name: "Talk to an Expert" })).toHaveAttribute("href", "/contact?intent=expert");
});

test("role tabs switch panels", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("tab", { name: "Technicians" }).click();
  await expect(page.getByRole("tabpanel")).toContainText("Capture readings anywhere");
});
