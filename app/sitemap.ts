import type { MetadataRoute } from "next";
import { articles } from "@/content/insights";
import { industryPages } from "@/data/industries";
import { pages } from "@/lib/page-seo";
import {
  odooCapabilityPages,
  odooIndustryPages,
} from "@/lib/odoo-pages";
import { absoluteUrl } from "@/lib/site";

// Built from the same sources that render the pages, so a page appears here
// only when it exists and is indexable. Redirect sources, drafts (noindex),
// the illustrative /portfolio/<project> pages and API routes are excluded.
// `lastModified` is set only for articles, from their real publication date;
// no other page has a trustworthy modification date.
const routes = [
  "/",
  "/services",
  "/industries",
  ...Object.keys(pages).map((slug) => `/${slug}`),
  ...[...odooCapabilityPages, ...odooIndustryPages]
    .filter((page) => page.exists)
    .map((page) => page.path),
  ...Object.keys(industryPages).map((slug) => `/industries/${slug}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const unique = [...new Set(routes)];
  return [
    ...unique.map((route) => ({ url: absoluteUrl(route) })),
    ...articles.map((article) => ({
      url: absoluteUrl(`/insights/${article.slug}`),
      lastModified: article.datePublished.slice(0, 10),
    })),
  ];
}
