import { existsSync, readFileSync } from "node:fs";

import { CRAWL } from "../../scripts/migrate/crawl";

export { CRAWL };
export const hasCrawl = existsSync(CRAWL);

export const readCrawl = (path: string) => readFileSync(`${CRAWL}/${path}`, "utf8");
