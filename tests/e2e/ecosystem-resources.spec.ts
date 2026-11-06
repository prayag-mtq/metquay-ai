import { expect, test } from "@playwright/test";

test("ecosystem keeps the footer anchors", async ({ page }) => {
  await page.goto("/ecosystem");
  for (const id of ["integrations", "fluke", "api"]) await expect(page.locator(`#${id}`)).toHaveCount(1);
});

test("sync tables are real tables with column headers", async ({ page }) => {
  await page.goto("/ecosystem");
  const tables = page.locator("main table");
  await expect(tables).toHaveCount(2);
  await expect(tables.first().locator('th[scope="col"]')).toHaveCount(2);
});

test("integration directory filters by category", async ({ page }) => {
  await page.goto("/ecosystem");
  const directory = page.locator("#directory");
  await expect(directory.locator("li:not([hidden])")).toHaveCount(18);
  await directory.getByRole("button", { name: "Hardware" }).click();
  await expect(directory.locator("li:not([hidden])")).toHaveCount(4);
});

test("resources lists seven playbooks, each with a working action", async ({ page }) => {
  await page.goto("/resources");
  const cards = page.locator("[data-playbook]");
  await expect(cards).toHaveCount(7);
  for (const card of await cards.all()) {
    await expect(card.getByRole("link")).toHaveAttribute("href", /^\/contact\?intent=playbook&playbook=/);
  }
  await expect(page.getByRole("link", { name: "Book a Free Consultation" })).toHaveAttribute(
    "href",
    "https://meetings-na2.hubspot.com/sandeep-nair/metquay-presentation",
  );
});

for (const path of ["/resources", "/ecosystem"]) {
  test(`${path} keeps type and buttons within the scale`, async ({ page }) => {
    await page.goto(path);
    const { maxFont, maxButton } = await page.evaluate(() => {
      const fonts = [...document.querySelectorAll("main *")].map((el) => parseFloat(getComputedStyle(el).fontSize));
      const buttons = [...document.querySelectorAll("main a[class*='rounded-full'], main button")].map(
        (el) => (el as HTMLElement).offsetHeight,
      );
      return { maxFont: Math.max(...fonts), maxButton: Math.max(...buttons) };
    });
    expect(maxFont).toBeLessThanOrEqual(56);
    expect(maxButton).toBeLessThanOrEqual(44);
  });
}
