import Link from "next/link";
import styles from "./03.InsightsSection.module.css";

const articles = [
  {
    slug: "odoo-vs-zoho-vs-quickbooks",
    category: "Odoo ERP",
    tone: "blue",
    date: "26 Sept 2025",
    read: "5 min read",
    title: "Odoo vs Zoho vs QuickBooks: Which One Actually Fits Your Business?",
    excerpt:
      "Compare Odoo, Zoho Books and QuickBooks by workflow, integrations, regional support and total cost of ownership.",
    image: "/images/odoo/odoo-laptop-dashboard.webp",
  },
  {
    slug: "odoo-implementation-timeline",
    category: "AI & Automation",
    tone: "green",
    date: "22 Sept 2025",
    read: "7 min read",
    title: "Odoo Implementation Timeline: How Long Does It Take?",
    excerpt:
      "Learn how scope, data readiness, integrations and local requirements shape an Odoo project timeline.",
    image: "/images/project-ai.webp",
  },
  {
    slug: "facility-management-software-guide",
    category: "Facility Management",
    tone: "amber",
    date: "18 Sept 2025",
    read: "6 min read",
    title: "Facility Management Software: Complete 2026 Guide for Egypt, Saudi Arabia, and the UAE",
    excerpt:
      "Compare CAFM, CMMS and IWMS solutions and find the best fit for your organization.",
    image: "/images/insights/facility-management-software-guide/facility-management-software-guide-2026.webp",
  },
];

const p = {
  arrow: "M5 12h14M13 6l6 6-6 6",
  cal: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4",
  clock: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 2",
};

function Icon({ d }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

function Meta({ a }) {
  return (
    <div className={styles.metaRow}>
      <span className={`${styles.tag} ${styles[a.tone]}`}>{a.category}</span>
      <span className={styles.meta}>
        <Icon d={p.cal} />
        {a.date}
      </span>
      <span className={styles.meta}>
        <Icon d={p.clock} />
        {a.read}
      </span>
    </div>
  );
}

export default function InsightsSection() {
  const [featured, ...rest] = articles;

  return (
    <section className={styles.section} aria-labelledby="insights-title">
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={styles.dotsBottomRight} aria-hidden="true" />

      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>OUR INSIGHTS</p>
          <h2 id="insights-title" className={styles.title}>
            Latest Articles &amp; <span>Insights</span>
          </h2>
          <p className={styles.sub}>
            Stay updated with the latest trends, tips and success stories from our experts.
          </p>
        </div>
        <div className={styles.viewWrapper}>
          <svg
            className={styles.sparkle}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <line x1="4" y1="19" x2="1" y2="16" />
            <line x1="8" y1="12" x2="6" y2="4" />
            <line x1="15" y1="16" x2="20" y2="13" />
          </svg>
          <Link href="/insights" className={styles.viewAll}>
            View All Articles <Icon d={p.arrow} />
          </Link>
        </div>
      </header>

      <div className={styles.grid}>
        {/* Left featured card */}
        <article className={styles.featured}>
          <div
            className={styles.media}
            style={{ backgroundImage: `url(${featured.image})` }}
            aria-hidden="true"
          >
            <div className={styles.dotsTopRight} aria-hidden="true" />
          </div>

          <span className={`${styles.badge} ${styles.odoo}`} aria-hidden="true">
            odoo
          </span>
          <span className={`${styles.badge} ${styles.zoho}`} aria-hidden="true">
            <span style={{ color: "#e42527" }}>Z</span>
            <span style={{ color: "#229f42" }}>O</span>
            <span style={{ color: "#0078bd" }}>H</span>
            <span style={{ color: "#f8b11b" }}>O</span>
          </span>
          <span className={`${styles.badge} ${styles.qb}`} aria-hidden="true">
            qb
          </span>

          <div className={styles.featuredCopy}>
            <Meta a={featured} />
            <h3>{featured.title}</h3>
            <p>{featured.excerpt}</p>
            <Link href={`/insights/${featured.slug}`} className={styles.readFeatured}>
              <span className={styles.readIconFeatured}>
                <Icon d={p.arrow} />
              </span>
              Read Article
            </Link>
          </div>
        </article>

        {/* Right side stack */}
        <div className={styles.side}>
          {rest.map((a) => (
            <article key={a.slug} className={styles.card}>
              <div
                className={styles.thumb}
                style={{ backgroundImage: `url(${a.image})` }}
              />
              <div className={styles.cardBody}>
                <Meta a={a} />
                <h3>{a.title}</h3>
                <div className={styles.foot}>
                  <p>{a.excerpt}</p>
                  <Link
                    href={`/insights/${a.slug}`}
                    className={styles.go}
                    aria-label={`Read article: ${a.title}`}
                  >
                    <Icon d={p.arrow} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

