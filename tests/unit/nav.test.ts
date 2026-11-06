import { describe, expect, it } from "vitest";
import { isActive } from "@/lib/nav";

describe("isActive", () => {
  it.each([
    ["/", "/", true],
    ["/blog", "/", false],
    ["/blog/foo", "/blog", true],
    ["/blogger", "/blog", false],
    ["/solutions", "/solutions", true],
  ])("isActive(%s, %s) is %s", (pathname, href, expected) => {
    expect(isActive(pathname, href)).toBe(expected);
  });
});
