import { createRequire } from "node:module";
import { describe, expect, it } from "vitest";

const { handler } = createRequire(import.meta.url)("../../infra/cloudfront-function.js");

type Result = { uri?: string; statusCode?: number; headers?: { location?: { value: string } } };

const run = (uri: string, host = "www.metquay.com", querystring = {}): Result =>
  handler({ request: { uri, querystring, headers: { host: { value: host } } } });

const redirect = (result: Result) => [result.statusCode, result.headers?.location?.value];

describe("cloudfront viewer-request function", () => {
  it("redirects the apex domain to www, keeping path and query", () => {
    expect(redirect(run("/company", "metquay.com", { a: { value: "1" } }))).toEqual([
      301,
      "https://www.metquay.com/company?a=1",
    ]);
  });

  it("retires the Hindi locale", () => {
    expect(redirect(run("/hi"))).toEqual([301, "/"]);
    expect(redirect(run("/hi/company"))).toEqual([301, "/company"]);
    expect(redirect(run("/hi/blog/x"))).toEqual([301, "/blog/x"]);
  });

  it("maps legacy /post URLs to the blog", () => {
    expect(redirect(run("/post/x"))).toEqual([301, "/blog/x"]);
  });

  it("keeps the query string on every redirect", () => {
    const q = { intent: { value: "trial" } };
    expect(redirect(run("/contact/", "www.metquay.com", q))).toEqual([301, "/contact?intent=trial"]);
    expect(redirect(run("/hi/contact", "www.metquay.com", q))).toEqual([301, "/contact?intent=trial"]);
    expect(redirect(run("/post/x", "www.metquay.com", q))).toEqual([301, "/blog/x?intent=trial"]);
  });

  it("strips trailing slashes", () => {
    expect(redirect(run("/company/"))).toEqual([301, "/company"]);
  });

  it("rewrites clean URLs to exported HTML files", () => {
    expect(run("/").uri).toBe("/index.html");
    expect(run("/company").uri).toBe("/company.html");
    expect(run("/blog/x").uri).toBe("/blog/x.html");
  });

  it("maps flat router prefetch requests onto the exported segment folders", () => {
    expect(run("/company/__next.company.__PAGE__.txt").uri).toBe("/company/__next.company/__PAGE__.txt");
    expect(run("/blog/x/__next.blog.$d$slug.__PAGE__.txt").uri).toBe("/blog/x/__next.blog/$d$slug/__PAGE__.txt");
    expect(run("/company/__next._tree.txt").uri).toBe("/company/__next._tree.txt");
  });

  it("leaves real files alone", () => {
    expect(run("/llms.txt").uri).toBe("/llms.txt");
    expect(run("/_next/static/chunks/a.js").uri).toBe("/_next/static/chunks/a.js");
  });
});
