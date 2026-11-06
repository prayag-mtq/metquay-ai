import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = join(process.cwd(), "out");
const port = Number(process.env.PORT ?? 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
};

const rewrite = (uri) => {
  if (uri === "/") return "/index.html";
  if (!extname(uri)) return `${uri}.html`;
  return uri;
};

const exists = (path) => stat(path).then((s) => s.isFile(), () => false);

createServer(async (req, res) => {
  const { pathname } = new URL(req.url ?? "/", "http://localhost");
  const file = join(root, normalize(decodeURIComponent(rewrite(pathname))));
  const found = file.startsWith(root) && (await exists(file));
  const target = found ? file : join(root, "404.html");
  res.writeHead(found ? 200 : 404, { "content-type": types[extname(target)] ?? "application/octet-stream" });
  res.end(await readFile(target));
}).listen(port, () => console.log(`serving out/ on http://localhost:${port}`));
