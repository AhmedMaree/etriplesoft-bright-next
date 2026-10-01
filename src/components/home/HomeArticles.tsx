import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { articles, readingMinutes, type ArticleSource } from "@/content/insights";
import styles from "./home.module.css";

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

const homepageArticles = [
  {
    slug: "odoo-vs-zoho-vs-quickbooks",
    tone: "blue" as const,
    category: "Odoo ERP",
    date: "26 Sept 2025",
    readTime: "5 min read",
    title: "Odoo vs Zoho vs QuickBooks: Which One Actually Fits Your Business?",
    description:
      "Compare Odoo, Zoho Books and QuickBooks by workflow, integrations, regional support and total cost of ownership.",
    image: "/images/odoo/odoo-laptop-dashboard.webp",
  },
  {
    slug: "odoo-implementation-timeline",
    tone: "green" as const,
    category: "AI & Automation",
    date: "22 Sept 2025",
    readTime: "7 min read",
    title: "Odoo Implementation Timeline: How Long Does It Take?",
    description:
      "Learn how scope, data readiness, integrations and local requirements shape an Odoo project timeline.",
    image: "/images/project-ai.webp",
  },
  {
    slug: "facility-management-software-guide",
    tone: "amber" as const,
    category: "Facility Management",
    date: "18 Sept 2025",
    readTime: "6 min read",
    title: "Facility Management Software: Complete 2026 Guide for Egypt, Saudi Arabia, and the UAE",
    description:
      "Compare CAFM, CMMS and IWMS solutions and find the best fit for your organization.",
    image: "/images/insights/facility-management-software-guide/facility-management-software-guide-2026.webp",
  },
];

type HomeArticleItem = (typeof homepageArticles)[number] & {
  article?: ArticleSource;
};

const displayedArticles: HomeArticleItem[] = homepageArticles.flatMap((item) => {
  const article = articles.find((a) => a.slug === item.slug);
  return article ? [{ ...item, article }] : [];
});

export function HomeArticles({
  eyebrow = "OUR INSIGHTS",
  title = (
    <>
      Latest Articles &amp; <span>Insights</span>
    </>
  ),
  intro = "Stay updated with the latest trends, tips and success stories from our experts.",
  viewAllLabel = "View All Articles",
  viewAllHref = "/insights",
  readArticleLabel = "Read Article",
  itemsList,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: string;
  viewAllLabel?: string;
  viewAllHref?: string;
  readArticleLabel?: string;
  itemsList?: {
    slug: string;
    tone: "blue" | "green" | "amber";
    category: string;
    date: string;
    readTime: string;
    title: string;
    description: string;
    image: string;
  }[];
} = {}) {
  const listToDisplay = itemsList || displayedArticles;
  if (!listToDisplay.length) return null;

  return (
    <section className={styles.insightsSection} aria-labelledby="home-insights-title">
      <div className={styles.insightsBgGlow} aria-hidden="true" />
      <div className={styles.dotsBottomRight} aria-hidden="true" />

      <header className={styles.insightsHeader}>
        <div>
          <p className={styles.insightsEyebrow}>{eyebrow}</p>
          <h2 id="home-insights-title" className={styles.insightsTitle}>
            {title}
          </h2>
          <p className={styles.insightsIntro}>{intro}</p>
        </div>
        <div className={styles.insightsViewWrapper}>
          <Link href={viewAllHref} className={styles.insightsViewAll}>
            {viewAllLabel} <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </header>

      <div className={styles.insightsGrid}>
        {listToDisplay.map((item) => {
          const matchedArticle = articles.find((a) => a.slug === item.slug);
          const imgSrc = item.image || matchedArticle?.image.src || "/images/odoo-hero.webp";
          const imgAlt = item.title || matchedArticle?.image.alt || "";
          const dateStr = item.date || (matchedArticle ? dateFormat.format(new Date(matchedArticle.datePublished)) : "");
          const readTimeStr = item.readTime || (matchedArticle ? `${readingMinutes(matchedArticle)} min read` : "");
          const href = viewAllHref.startsWith("/ar") ? `/ar/insights/${item.slug}` : `/insights/${item.slug}`;

          return (
            <article className={styles.insightCard} key={item.slug}>
              <div className={styles.insightThumbWrapper}>
                <Image
                  className={styles.insightThumbImage}
                  src={imgSrc}
                  alt={imgAlt}
                  fill
                  sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw"
                />
                <span className={`${styles.insightTag} ${styles[`insightTag${item.tone}`]}`}>
                  {item.category}
                </span>
              </div>

              <div className={styles.insightCardBody}>
                <div className={styles.insightMetaRow}>
                  <span className={styles.insightMeta}>
                    <CalendarDays size={14} aria-hidden="true" />
                    <time dateTime={matchedArticle?.datePublished?.slice(0, 10) || ""}>
                      {dateStr}
                    </time>
                  </span>
                  <span className={styles.insightMetaDivider} aria-hidden="true">&bull;</span>
                  <span className={styles.insightMeta}>
                    <Clock3 size={14} aria-hidden="true" />
                    {readTimeStr}
                  </span>
                </div>

                <h3 className={styles.insightCardTitle}>
                  <Link href={href} className={styles.insightTitleLink}>
                    {item.title}
                  </Link>
                </h3>

                <p className={styles.insightCardDescription}>
                  {item.description}
                </p>

                <div className={styles.insightCardFoot}>
                  <span className={styles.insightReadLink}>
                    {readArticleLabel} <ArrowRight size={15} className={styles.insightReadArrow} aria-hidden="true" />
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
