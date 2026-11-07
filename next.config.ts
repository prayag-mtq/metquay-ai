import type { NextConfig } from "next";
import { DEVICE_SIZES, IMAGE_SIZES } from "./src/lib/image-loader";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: DEVICE_SIZES,
    imageSizes: IMAGE_SIZES,
  },
  experimental: {
    inlineCss: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
