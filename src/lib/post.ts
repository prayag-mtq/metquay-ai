export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  category: string;
  author?: string;
  cover?: string;
  readingMinutes: number;
  body: string;
};

export type PostSummary = Pick<Post, "slug" | "title" | "description" | "date" | "category" | "readingMinutes">;

export const toSummary = ({ slug, title, description, date, category, readingMinutes }: Post): PostSummary => ({
  slug,
  title,
  description,
  date,
  category,
  readingMinutes,
});

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
