import { mkdirSync } from "node:fs";
import sharp from "sharp";
import { getAllPosts } from "../src/lib/blog";

const WIDTH = 1200;
const HEIGHT = 630;
const FONT = "Manrope, Segoe UI, DejaVu Sans, Arial, sans-serif";

const escapeXml = (text: string) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function wrap(text: string, maxChars: number, maxLines: number) {
  const lines: string[] = [];
  for (const word of text.split(/\s+/)) {
    const last = lines.at(-1);
    if (last !== undefined && `${last} ${word}`.length <= maxChars) lines[lines.length - 1] = `${last} ${word}`;
    else lines.push(word);
  }
  if (lines.length <= maxLines) return lines;
  const kept = lines.slice(0, maxLines);
  kept[maxLines - 1] = `${kept[maxLines - 1].replace(/[,.:;!?]?$/, "")}…`;
  return kept;
}

function card(title: string, footer: string, fontSize: number) {
  const lines = wrap(title, Math.floor(1040 / (fontSize * 0.62)), 4);
  const lineHeight = fontSize * 1.18;
  const top = 360 - ((lines.length - 1) * lineHeight) / 2;
  const text = lines.map((line, i) => `<tspan x="80" y="${top + i * lineHeight}">${escapeXml(line)}</tspan>`).join("");
  return Buffer.from(`
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
  <text font-family="${FONT}" font-size="${fontSize}" font-weight="700" fill="#ffffff">${text}</text>
  <rect x="80" y="510" width="64" height="6" rx="3" fill="#8cff2e"/>
  <text x="80" y="566" font-family="${FONT}" font-size="28" fill="#cccccc">${escapeXml(footer)}</text>
</svg>`);
}

async function render(svg: Buffer, out: string, logo: Buffer) {
  await sharp(svg)
    .composite([{ input: logo, left: 80, top: 80 }])
    .png({ compressionLevel: 9 })
    .toFile(out);
}

async function main() {
  mkdirSync("public/og/blog", { recursive: true });
  const logo = await sharp("public/brand/logo.png").resize({ height: 44 }).toBuffer();
  await render(
    card(
      "Calibration Management, built for every detail and any scale",
      "ISO/IEC 17025 · 21 CFR Part 11 · Offline-first · AI built in",
      62,
    ),
    "public/og/default.png",
    logo,
  );
  const posts = getAllPosts();
  for (const post of posts) {
    await render(card(post.title, `${post.category} · metquay.ai blog`, 56), `public/og/blog/${post.slug}.png`, logo);
  }
  console.log(`wrote default + ${posts.length} post OG images`);
}

await main();
