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

  it("strips trailing slashes", () => {
    expect(redirect(run("/company/"))).toEqual([301, "/company"]);
  });

  it("rewrites clean URLs to exported HTML files", () => {
    expect(run("/").uri).toBe("/index.html");
    expect(run("/company").uri).toBe("/company.html");
    expect(run("/blog/x").uri).toBe("/blog/x.html");
  });

  it("leaves real files alone", () => {
    expect(run("/llms.txt").uri).toBe("/llms.txt");
    expect(run("/_next/static/chunks/a.js").uri).toBe("/_next/static/chunks/a.js");
  });
});
