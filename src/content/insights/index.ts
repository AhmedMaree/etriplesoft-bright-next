import dataProtection from "./data-protection-compliance-egypt-2026";
import erpComparison from "./erp-system-comparison";
import facilityGuide from "./facility-management-software-guide";
import managedIt from "./how-to-choose-managed-it-services-provider-egypt";
import implementationCost from "./odoo-implementation-cost";
import implementationTimeline from "./odoo-implementation-timeline";
import kpiDashboard from "./odoo-kpi-dashboard-real-time-business-insights";
import roi from "./odoo-roi-return-on-investment";
import zohoQuickbooks from "./odoo-vs-zoho-vs-quickbooks";
import signsErp from "./signs-you-need-erp-system";
import imageSizes from "./image-sizes.json";
import type { ArticleSource } from "./types";

export type { ArticleSource } from "./types";

/** Published articles, newest first. Draft entries live in ./drafts.ts. */
export const articles: ArticleSource[] = [
  roi,
  signsErp,
  implementationCost,
  erpComparison,
  implementationTimeline,
  zohoQuickbooks,
  facilityGuide,
  kpiDashboard,
  managedIt,
  dataProtection,
].sort((a, b) => b.datePublished.localeCompare(a.datePublished));

export const articleBySlug = (slug: string) =>
  articles.find((article) => article.slug === slug);

const stripMarkdown = (md: string) =>
  md
    .replace(/::: cta|:::/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#*_>|`-]/g, " ");

export function articleText(article: ArticleSource): string {
  return [
    article.body,
    article.afterFaq,
    ...article.faqs.map((faq) => `${faq.question} ${faq.answer}`),
  ].join("\n");
}

export const wordCount = (article: ArticleSource) =>
  stripMarkdown(articleText(article)).split(/\s+/).filter(Boolean).length;

/** Estimated reading time in minutes, from word count at 200 wpm. */
export const readingMinutes = (article: ArticleSource) =>
  Math.max(1, Math.ceil(wordCount(article) / 200));

/** Slugs of published articles that `article` links to inside its own text. */
const linkedSlugs = (article: ArticleSource) =>
  new Set(
    [...articleText(article).matchAll(/\]\(\/insights\/([a-z0-9-]+)\)/g)].map(
      (match) => match[1],
    ),
  );

/**
 * Related articles come only from real cross-links in the source: articles this
 * one links to, and articles that link to it. Nothing is invented.
 */
export function relatedArticles(article: ArticleSource, limit = 3) {
  const outgoing = linkedSlugs(article);
  const related = articles.filter(
    (other) =>
      other.slug !== article.slug &&
      (outgoing.has(other.slug) || linkedSlugs(other).has(article.slug)),
  );
  return related.slice(0, limit);
}

export const formatDate = (iso: string) =>
  new Date(`${iso.slice(0, 10)}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

/** Card data for the /insights index: published articles only, newest first. */
export const insightCards = () =>
  articles.map((article) => {
    const size = (imageSizes as Record<string, { width: number; height: number }>)[
      article.image.src
    ];
    return {
      title: article.title,
      summary: article.description,
      category: article.category,
      slug: article.slug,
      image:
        article.image.src && size
          ? { src: article.image.src, alt: article.image.alt, ...size }
          : undefined,
      date: article.datePublished.slice(0, 10),
      dateLabel: formatDate(article.datePublished),
      minutes: readingMinutes(article),
    };
  });
