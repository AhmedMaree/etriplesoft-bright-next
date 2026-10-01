import type { MetadataRoute } from "next";
import { articles } from "@/content/insights";
import { industryPages } from "@/data/industries";
import { pages } from "@/lib/page-seo";
import {
  odooCapabilityPages,
  odooIndustryPages,
} from "@/lib/odoo-pages";
import { absoluteUrl } from "@/lib/site";
import { localizedInsightSlugs, localizedRoutePaths } from "@/i18n/localized-paths";
import { localePairs } from "@/i18n/paths";

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
  "/tools/chart-of-accounts",
  "/request-demo",
  "/book-consultation",
];

const pairByPath = new Map<string, (typeof localePairs)[number]>(
  localePairs.flatMap((pair) => [
    [pair.en, pair],
    [pair.ar, pair],
  ]),
);

const withAlternates = (route: string) => {
  const pair = pairByPath.get(route);
  return {
    url: absoluteUrl(route),
    ...(pair
      ? {
          alternates: {
            languages: {
              en: absoluteUrl(pair.en),
              ar: absoluteUrl(pair.ar),
              "x-default": absoluteUrl(pair.en),
            },
          },
        }
      : {}),
  };
};

export default function sitemap(): MetadataRoute.Sitemap {
  const unique = [...new Set([
    ...routes,
    ...localePairs
      .filter((pair) => !pair.en.startsWith("/portfolio/") && !pair.en.startsWith("/insights/"))
      .map((pair) => pair.ar),
    ...localizedRoutePaths.map((path) => `/ar${path}`),
  ])];
  return [
    ...unique.map(withAlternates),
    ...articles.map((article) => ({
      ...withAlternates(`/insights/${article.slug}`),
      lastModified: article.datePublished.slice(0, 10),
    })),
    ...localizedInsightSlugs.map((slug) => {
      const article = articles.find((item) => item.slug === slug);
      return {
        ...withAlternates(`/ar/insights/${slug}`),
        ...(article ? { lastModified: article.datePublished.slice(0, 10) } : {}),
      };
    }),
  ];
}
