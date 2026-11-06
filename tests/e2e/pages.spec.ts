import { expect, test } from "@playwright/test";

test("contact preselects the topic from ?intent", async ({ page }) => {
  await page.goto("/contact?intent=expert");
  await expect(page.getByLabel("Topic")).toHaveValue("expert");
});

test("contact form submit is above the fold on desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/contact");
  await expect(page.getByRole("button", { name: "Send message" })).toBeInViewport();
});

test("contact has the FAQ anchor used by old blog links", async ({ page }) => {
  await page.goto("/contact#faq");
  await expect(page.locator("#faq")).toBeVisible();
});

test("security page has its own title and no template leftovers", async ({ page }) => {
  await page.goto("/security");
  await expect(page).toHaveTitle(/Security/);
  await expect(page).not.toHaveTitle(/Terms of Service/);
  const description = await page.locator('meta[name="description"]').getAttribute("content");
  expect(description).not.toMatch(/Clario/);
  await expect(page.locator("main table")).toHaveCount(2);
});

test("company keeps the about anchor and lists the team", async ({ page }) => {
  await page.goto("/company#about");
  await expect(page.locator("#about")).toHaveCount(1);
  await expect(page.getByText("Sandeep Nair")).toBeVisible();
});

test("legal pages render one h1 each", async ({ page }) => {
  for (const path of ["/privacy", "/terms", "/security"]) {
    await page.goto(path);
    await expect(page.locator("h1")).toHaveCount(1);
  }
});

test("playbook requests prefill the playbook title", async ({ page }) => {
  await page.goto("/contact?intent=playbook&playbook=6-audit");
  await expect(page.getByLabel("How can we help?")).toHaveValue(
    "Please send me the ISO/IEC 17025:2017 Audit Prep Playbook.",
  );
});
