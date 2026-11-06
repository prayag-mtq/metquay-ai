import { chromium } from "@playwright/test";
const [, , url, out, w = "1280", full = "1"] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: Number(w), height: 800 } });
await p.goto(url, { waitUntil: "networkidle" });
await p.evaluate(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += 600) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 60));
  }
  window.scrollTo(0, 0);
});
await p.waitForTimeout(400);
await p.screenshot({ path: out, fullPage: full === "1" });
await b.close();
