import { existsSync, readdirSync, statSync } from "node:fs";
import { availableParallelism } from "node:os";
import { join } from "node:path";
import sharp from "sharp";
import { IMAGE_WIDTHS, variantPath } from "../src/lib/image-loader";

const ROOTS = ["public/images", "public/blog", "public/brand"];
const SOURCE = /^(?!.*\.w\d+\.)[^/]+\.(webp|png|jpe?g)$/i;

function* sources(dir: string): Generator<string> {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* sources(path);
    else if (SOURCE.test(entry.name)) yield path;
  }
}

async function variants(file: string) {
  const { width = 0 } = await sharp(file).metadata();
  const mtime = statSync(file).mtimeMs;
  let written = 0;
  for (const target of IMAGE_WIDTHS) {
    const out = variantPath(file, target);
    if (existsSync(out) && statSync(out).mtimeMs >= mtime) continue;
    await sharp(file)
      .resize({ width: Math.min(target, width) })
      .toFile(out);
    written++;
  }
  return written;
}

const queue = ROOTS.filter(existsSync).flatMap((root) => [...sources(root)]);
let written = 0;
await Promise.all(
  Array.from({ length: availableParallelism() }, async () => {
    for (let file = queue.shift(); file; file = queue.shift()) written += await variants(file);
  }),
);
console.log(`image variants: ${written} written`);
