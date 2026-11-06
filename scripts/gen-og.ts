import { mkdirSync } from "node:fs";
import sharp from "sharp";

const WIDTH = 1200;
const HEIGHT = 630;

const background = Buffer.from(`
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="80%" cy="0%" r="70%">
      <stop offset="0%" stop-color="#7b68ee" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#050505" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="#ffffff" stroke-opacity="0.05"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="#050505"/>
  <rect width="100%" height="100%" fill="url(#grid)"/>
  <rect width="100%" height="100%" fill="url(#glow)"/>
  <rect x="80" y="470" width="64" height="6" rx="3" fill="#8cff2e"/>
  <text x="80" y="300" font-family="Manrope, Segoe UI, Arial, sans-serif" font-size="64" font-weight="700" fill="#ffffff">Calibration Management,</text>
  <text x="80" y="380" font-family="Manrope, Segoe UI, Arial, sans-serif" font-size="64" font-weight="700" fill="#ffffff">built for every detail and any scale</text>
  <text x="80" y="530" font-family="Manrope, Segoe UI, Arial, sans-serif" font-size="28" fill="#cccccc">ISO/IEC 17025 · 21 CFR Part 11 · Offline-first · AI built in</text>
</svg>`);

mkdirSync("public/og", { recursive: true });
const logo = await sharp("public/brand/logo.png").resize({ height: 48 }).toBuffer();
await sharp(background)
  .composite([{ input: logo, left: 80, top: 90 }])
  .png({ compressionLevel: 9 })
  .toFile("public/og/default.png");
console.log("wrote public/og/default.png");
