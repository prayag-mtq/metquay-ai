import { expect, test } from "@playwright/test";

test("reduced-motion visitors get no hydration errors and a static testimonial list", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (err) => errors.push(err.message));
  page.on("console", (msg) => msg.type() === "error" && errors.push(msg.text()));
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.locator("#testimonials").scrollIntoViewIfNeeded();
  await expect(page.locator("#testimonials [data-track]:visible")).toHaveCount(1);
  expect(errors).toEqual([]);
});

for (const [path, id] of [
  ["/ecosystem", "fluke"],
  ["/company", "about"],
  ["/glossary", "tur"],
]) {
  test(`deep link ${path}#${id} lands just below the header`, async ({ page }) => {
    await page.goto(`${path}#${id}`);
    const top = await page.locator(`#${id}`).evaluate((el) => el.getBoundingClientRect().top);
    const header = await page.getByRole("banner").evaluate((el) => el.getBoundingClientRect().bottom);
    expect(top).toBeGreaterThanOrEqual(header);
    expect(top - header).toBeLessThanOrEqual(32);
  });
}
