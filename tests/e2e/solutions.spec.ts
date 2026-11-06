import { expect, test } from "@playwright/test";

const steps = Array.from({ length: 8 }, (_, i) => `step-0${i + 1}`);

test("every workflow step has its anchor", async ({ page }) => {
  await page.goto("/solutions");
  for (const id of steps) await expect(page.locator(`#${id}`)).toHaveCount(1);
});

test("step nav marks the step in view", async ({ page }) => {
  await page.goto("/solutions#step-04");
  const nav = page.getByRole("navigation", { name: "Workflow steps" });
  await expect(nav.locator('[aria-current="step"]')).toHaveAttribute("href", "#step-04");
});

test("deep link lands below the sticky header and step nav", async ({ page }) => {
  await page.goto("/solutions#step-05");
  const heading = page.locator("#step-05 h2");
  await expect(heading).toBeInViewport();
  const top = await heading.evaluate((el) => el.getBoundingClientRect().top);
  const navBottom = await page
    .getByRole("navigation", { name: "Workflow steps" })
    .evaluate((el) => el.getBoundingClientRect().bottom);
  expect(top).toBeGreaterThanOrEqual(navBottom);
});

test("step nav resets to the first step back at the top", async ({ page }) => {
  await page.goto("/solutions#step-08");
  await page.evaluate(() => window.scrollTo(0, 0));
  const nav = page.getByRole("navigation", { name: "Workflow steps" });
  await expect(nav.locator('[aria-current="step"]')).toHaveAttribute("href", "#step-01");
});
