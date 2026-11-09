import { getCategories } from "./blog";
import { slugify } from "./slugify";

export const categoryFromSlug = (slug: string) => getCategories().find((c) => slugify(c) === slug) ?? null;
