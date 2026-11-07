import { absoluteUrl, site } from "@/config/site";
import { getAllPosts } from "./blog";

const escapeXml = (text: string) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const rfc822 = (iso: string) => new Date(`${iso}T12:00:00Z`).toUTCString();

export function buildRssFeed() {
  const posts = getAllPosts();
  const items = posts
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.slug}`);
      return [
        "<item>",
        `<title>${escapeXml(post.title)}</title>`,
        `<link>${url}</link>`,
        `<guid isPermaLink="true">${url}</guid>`,
        `<pubDate>${rfc822(post.date)}</pubDate>`,
        `<category>${escapeXml(post.category)}</category>`,
        `<description>${escapeXml(post.description)}</description>`,
        "</item>",
      ].join("");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${escapeXml(`${site.name} blog`)}</title>
<link>${absoluteUrl("/blog")}</link>
<atom:link href="${absoluteUrl("/blog/feed.xml")}" rel="self" type="application/rss+xml"/>
<description>Practical guidance for calibration teams, metrology leaders, and quality operations.</description>
<language>en-us</language>
<lastBuildDate>${rfc822(posts[0].date)}</lastBuildDate>
${items}
</channel>
</rss>
`;
}
