import { expect, test } from "@playwright/test";

test("marks the current page in the nav", async ({ page }) => {
  await page.goto("/solutions");
  const nav = page.getByRole("navigation", { name: "Main" });
  await expect(nav.getByRole("link", { name: "Solutions" })).toHaveAttribute("aria-current", "page");
  await expect(nav.locator('[aria-current="page"]')).toHaveCount(1);
});

test.fixme("keeps Blog active on a post", async ({ page }) => {
  await page.goto("/blog/what-is-the-part-of-your-work-you-would-never-let-a-machine-do");
  await expect(page.getByRole("navigation", { name: "Main" }).getByRole("link", { name: "Blog" })).toHaveAttribute(
    "aria-current",
    "page",
  );
});

test("mobile menu opens, lists every page and closes on Escape", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open menu" });
  await toggle.click();
  const dialog = page.getByRole("dialog", { name: "Menu" });
  for (const label of ["Product", "Solutions", "Ecosystem", "Resources", "Company", "Blog"]) {
    await expect(dialog.getByRole("link", { name: label, exact: true })).toBeVisible();
  }
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(toggle).toBeFocused();
});

test("footer Contact goes to the contact page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("contentinfo").getByRole("link", { name: "Contact", exact: true }).click();
  await expect(page).toHaveURL(/\/contact$/);
});

test("unknown URLs show the 404 page", async ({ page }) => {
  const res = await page.goto("/does-not-exist");
  expect(res?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Page not found");
});
