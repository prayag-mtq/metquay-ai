import { readFileSync } from "node:fs";

const KEY = "564872327ffdaa6d38b2fdcac0370488";
const HOST = "www.metquay.com";

const sitemap = readFileSync("out/sitemap.xml", "utf8");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urls }),
});
console.log(`IndexNow: ${res.status} for ${urls.length} URLs`);
process.exit(res.ok ? 0 : 1);
