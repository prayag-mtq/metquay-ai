import { absoluteUrl } from "@/config/site";

export const toMarkdown = (mdx: string) =>
  mdx
    .replace(
      /<Figure\s+src="([^"]+)"\s+alt="([^"]*)"\s*\/>/g,
      (_, src: string, alt: string) => `![${alt}](${absoluteUrl(src)})`,
    )
    .replace(/<YouTube\s+id="([^"]+)"\s*\/>/g, "[Watch on YouTube](https://www.youtube.com/watch?v=$1)")
    .trim();
