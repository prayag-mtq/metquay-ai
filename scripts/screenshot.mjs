import { chromium } from "@playwright/test";

const [, , url, output, width = "1280", fullPage = "1"] = process.argv;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: Number(width), height: 800 } });
await page.goto(url, { waitUntil: "networkidle" });
await page.evaluate(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += 600) {
    window.scrollTo(0, y);
    await new Promise((resolve) => setTimeout(resolve, 60));
  }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(400);
await page.screenshot({ path: output, fullPage: fullPage === "1" });
await browser.close();
