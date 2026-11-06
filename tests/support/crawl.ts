import { existsSync, readFileSync } from "node:fs";

export const CRAWL = "metquay-website-assets/metquay-public-assets";
export const hasCrawl = existsSync(CRAWL);

export const readCrawl = (path: string) => readFileSync(`${CRAWL}/${path}`, "utf8");
