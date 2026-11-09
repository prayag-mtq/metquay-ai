import { describe, expect, it } from "vitest";

import imageLoader, { IMAGE_WIDTHS, variantPath } from "@/lib/image-loader";

describe("image loader", () => {
  it("points local raster images at their pre-built width variant", () => {
    expect(imageLoader({ src: "/images/home/dashboard.webp", width: 640 })).toBe("/images/home/dashboard.w640.webp");
    expect(imageLoader({ src: "/brand/logo.png", width: 960 })).toBe("/brand/logo.w960.png");
  });

  it("leaves external and vector images untouched", () => {
    expect(imageLoader({ src: "https://example.com/a.webp", width: 640 })).toBe("https://example.com/a.webp");
    expect(imageLoader({ src: "/icons/a.svg", width: 640 })).toBe("/icons/a.svg");
  });

  it("covers every width next/image can request", () => {
    expect(IMAGE_WIDTHS).toEqual([256, 384, 640, 960, 1280, 1600, 2048]);
    expect(variantPath("/blog/x/1.webp", 384)).toBe("/blog/x/1.w384.webp");
  });
});
