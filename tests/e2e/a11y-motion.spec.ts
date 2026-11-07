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

test("testimonial carousel pauses on hover, keyboard focus and tap", async ({ browser }) => {
  const state = (page: import("@playwright/test").Page) =>
    page
      .locator("#testimonials [aria-roledescription=carousel] > div")
      .evaluate((el) => getComputedStyle(el).animationPlayState);

  const desktop = await browser.newPage();
  await desktop.goto("/");
  const carousel = desktop.getByRole("region", { name: "Customer testimonials" });
  await carousel.scrollIntoViewIfNeeded();
  await expect.poll(() => state(desktop)).toBe("running");
  await carousel.hover();
  await expect.poll(() => state(desktop)).toBe("paused");
  await desktop.mouse.move(0, 0);
  await expect.poll(() => state(desktop)).toBe("running");
  await carousel.focus();
  await expect.poll(() => state(desktop)).toBe("paused");
  await desktop.close();

  const phone = await browser.newPage({ hasTouch: true, isMobile: true, viewport: { width: 390, height: 844 } });
  await phone.goto("/");
  const mobileCarousel = phone.getByRole("region", { name: "Customer testimonials" });
  await mobileCarousel.scrollIntoViewIfNeeded();
  await mobileCarousel.tap();
  await expect.poll(() => state(phone)).toBe("paused");
  await phone.close();
});
