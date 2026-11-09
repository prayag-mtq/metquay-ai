export type LandingSection = {
  heading: string;
  body: string[];
  points?: string[];
  link?: { label: string; href: string };
};

export const GUIDE_GROUPS = ["Platform", "Workflow", "Compliance", "Integrations & migration"] as const;

export type LandingPage = {
  slug: string;
  keyword: string;
  group: (typeof GUIDE_GROUPS)[number];
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  updated: string;
  sections: LandingSection[];
  faq: { id: string; q: string; a: string }[];
  related: { label: string; href: string }[];
};
