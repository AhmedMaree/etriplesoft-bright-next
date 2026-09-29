// Typed source for a migrated Insights article. `body` and `afterFaq` are a
// small Markdown subset (## / ### headings, paragraphs, - and 1. lists, pipe
// tables, images, > quotes, **bold**, _italic_, [links](/path) and
// "::: cta" call-out blocks), rendered by src/components/insights/markdown.tsx.

export type ArticleFaq = { question: string; answer: string };

export type ArticleSource = {
  slug: string;
  title: string;
  /** SEO title, without the site suffix. */
  metaTitle: string;
  description: string;
  /** ISO 8601 publication date (from wp:post_date or the live article). */
  datePublished: string;
  category: string;
  /** Card / Open Graph image (self-hosted). */
  image: { src: string; alt: string };
  /** Where the copy was recovered from (documentation only, never rendered). */
  source: { kind: string; url: string };
  /** Show the "figures are estimates" line under the FAQ (answers contain figures). */
  faqNote: boolean;
  body: string;
  /** Markdown that follows the FAQ (for example a conclusion). */
  afterFaq: string;
  faqs: ArticleFaq[];
};
