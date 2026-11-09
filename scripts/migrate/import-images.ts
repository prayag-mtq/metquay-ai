import { mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";

import sharp from "sharp";

import { CRAWL } from "./crawl";

type Entry = { id: string; width: number; height?: number };

const manifest: Record<string, Entry> = JSON.parse(readFileSync("scripts/migrate/images.manifest.json", "utf8"));
const assets = readFileSync(join(CRAWL, "assets.csv"), "utf8")
  .split("\n")
  .map((line) => line.split(","));

const localPath = (id: string) => {
  const row = assets.find((cols) => cols[0]?.includes(`/${id}.`));
  if (!row) throw new Error(`No crawl asset for ${id}`);
  return join(CRAWL, row[2]);
};

for (const [dest, { id, width, height }] of Object.entries(manifest)) {
  const out = join("public/images", dest);
  mkdirSync(dirname(out), { recursive: true });
  const info = await sharp(localPath(id))
    .resize({ width, height, fit: "cover", position: "attention", withoutEnlargement: !height })
    .webp({ quality: 82 })
    .toFile(out);
  console.log(`${dest} ${info.width}x${info.height} ${Math.round(info.size / 1024)}KB`);
}
