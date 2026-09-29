"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  CheckCircle2,
  Database,
  Grid2X2,
  Globe2,
  House,
  Lightbulb,
  Mail,
  Megaphone,
  MessageCircleMore,
  Search,
} from "lucide-react";
import s from "./InsightsReferencePage.module.css";

type Category = "Odoo" | "ERP" | "AI" | "Web" | "Marketing";
type Article = { title: string; summary: string; category: Category; slug: string; image: string; date?: string; dateLabel?: string };

const featured: Article = {
  title: "Odoo KPI Dashboards for Real-Time Business Insights",
  summary: "Explore practical ways to connect operational data with the decisions your team needs to make.",
  category: "Odoo",
  slug: "odoo-kpi-dashboard-real-time-business-insights",
  image: "featured-article",
  date: "2025-05-12",
  dateLabel: "May 12, 2025",
};

const articles: Article[] = [
  { title: "Understanding the Return on an Odoo ERP Investment", summary: "Assess a project against the workflows, handoffs and reporting it is meant to improve.", category: "Odoo", slug: "odoo-roi-return-on-investment", image: "article-odoo", date: "2025-04-28", dateLabel: "Apr 28, 2025" },
  { title: "ERP Benefits to Consider as Your Business Grows", summary: "Understand where connected workflows and shared information can help your teams.", category: "ERP", slug: "erp-benefits-for-growing-businesses", image: "article-erp" },
  { title: "5 Ways AI Can Transform Your Business Operations", summary: "Start with a specific task, clear success criteria and the right human review.", category: "AI", slug: "ai-business", image: "article-ai" },
  { title: "Why Your Business Needs a Modern, SEO-Friendly Website", summary: "Learn how clear content, responsive pages and useful customer journeys work together.", category: "Web", slug: "modern-seo-friendly-website", image: "article-web" },
  { title: "Digital Marketing Strategies for B2B Growth in the Middle East", summary: "Coordinate useful content, channel choices and measurement around your audience.", category: "Marketing", slug: "b2b-marketing-strategies-middle-east", image: "article-marketing" },
  { title: "How Odoo Helps Construction Companies Improve Efficiency", summary: "Connect project costs, procurement and inventory in a more consistent workflow.", category: "Odoo", slug: "odoo-construction", image: "article-client-success" },
  { title: "Signs Your Business Is Ready for an ERP System", summary: "Spot when disconnected tools and informal handoffs are getting difficult to manage.", category: "ERP", slug: "signs-you-need-erp-system", image: "article-erp", date: "2025-04-15", dateLabel: "Apr 15, 2025" },
  { title: "SEO Strategies for Businesses in Egypt, UAE and Saudi Arabia", summary: "Build a search plan around customer questions, language and local context.", category: "Marketing", slug: "seo-strategies", image: "article-marketing" },
  { title: "Make Marketing Reports Useful to the Whole Team", summary: "Connect campaign reporting with the questions the business needs to answer.", category: "Marketing", slug: "measure-marketing-performance", image: "article-erp" },
  { title: "Plan Digital Campaigns Around Real Customer Journeys", summary: "Give search, paid media, social and content clear, complementary roles.", category: "Marketing", slug: "integrated-digital-campaigns", image: "article-marketing" },
];

const categories = [
  ["All Articles", "all", Grid2X2],
  ["Odoo", "Odoo", Database],
  ["ERP", "ERP", Database],
  ["AI", "AI", BrainCircuit],
  ["Web", "Web", Globe2],
  ["Marketing", "Marketing", Megaphone],
] as const;

function Artwork({ name, alt = "", className = "" }: { name: string; alt?: string; className?: string }) {
  return <img className={className} src={`/images/insights-reference/${name}.webp`} alt={alt} loading="lazy" decoding="async" />;
}

function NewsletterSignup() {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setStatus("");
    const form = event.currentTarget;
    try {
      const response = await fetch("/api/inquiries", { method: "POST", body: new FormData(form) });
      const result = await response.json();
      setStatus(result.message);
      if (response.ok) form.reset();
    } catch {
      setStatus("We could not submit your request. Please email info@etriplesoft.com.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className={s.newsletterForm} onSubmit={submit}>
      <input type="hidden" name="kind" value="newsletter" />
      <label className={s.srOnly} htmlFor="insights-email">Your email address</label>
      <input id="insights-email" type="email" name="email" autoComplete="email" placeholder="Your email address" required maxLength={254} />
      <label className={s.consent}><input type="checkbox" name="consent" required /> I agree to receive occasional ETripleSoft updates.</label>
      <button type="submit" disabled={busy}><Mail aria-hidden="true" />{busy ? "Submitting…" : "Subscribe"}<ArrowRight aria-hidden="true" /></button>
      <p className={s.privacy}><CheckCircle2 aria-hidden="true" />No spam. Only useful insights.</p>
      {status && <p className={s.formStatus} role="status">{status}</p>}
    </form>
  );
}

export default function InsightsReferencePage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const filteredArticles = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    return articles.filter((article) => {
      const categoryMatch = activeCategory === "all" || article.category === activeCategory;
      const queryMatch = !normalized || `${article.title} ${article.summary} ${article.category}`.toLocaleLowerCase().includes(normalized);
      return categoryMatch && queryMatch;
    });
  }, [activeCategory, query]);
  const displayedArticles = showAll || activeCategory !== "all" || query.trim() ? filteredArticles : filteredArticles.slice(0, 6);

  function chooseCategory(category: string) {
    setActiveCategory(category);
    setShowAll(false);
  }

  return (
    <main id="main" className={s.page}>
      <div className={s.container}>
        <section className={s.hero} aria-labelledby="insights-heading">
          <div className={s.heroCopy}>
            <Link className={s.breadcrumb} href="/"><House aria-hidden="true" /><span>Blog / Insights</span></Link>
            <h1 id="insights-heading">Insights</h1>
            <p>Ideas, guides, and Odoo expertise<br className={s.desktopBreak} /> for a smarter tomorrow.</p>
            <a className={s.primaryButton} href="#articles">View All Articles<ArrowRight aria-hidden="true" /></a>
            <div className={s.heroBenefits}>
              <span><BookOpen aria-hidden="true" /><b>Practical<br />Guides</b></span>
              <span><Lightbulb aria-hidden="true" /><b>Expert<br />Insights</b></span>
              <span><ChartNoAxesColumnIncreasing aria-hidden="true" /><b>Real Business<br />Impact</b></span>
            </div>
          </div>
          <Artwork name="hero-art" alt="Illustrative Odoo screen with business app symbols" className={s.heroArt} />
        </section>

        <nav className={s.filters} aria-label="Filter insights by topic">
          <div className={s.categoryTabs} role="group" aria-label="Article categories">
            {categories.map(([label, value, Icon]) => <button key={value} type="button" className={activeCategory === value ? s.activeTab : ""} aria-pressed={activeCategory === value} onClick={() => chooseCategory(value)}><Icon aria-hidden="true" /><span>{label}</span></button>)}
          </div>
          <label className={s.searchBox}><Search aria-hidden="true" /><span className={s.srOnly}>Search articles</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search articles…" type="search" /></label>
        </nav>

        {activeCategory === "all" && !query.trim() && <article className={s.featured}>
          <Link href={`/insights/${featured.slug}`} className={s.featuredImage}><Artwork name={featured.image} alt="Illustrative business growth and dashboard artwork" /></Link>
          <div className={s.featuredCopy}>
            <span className={s.featuredLabel}><span aria-hidden="true">★</span> Featured article</span>
            <h2><Link href={`/insights/${featured.slug}`}>{featured.title}</Link></h2>
            <p>{featured.summary}</p>
            <div className={s.articleMeta}>
              <span><CalendarDays aria-hidden="true" />{featured.dateLabel}</span>
              <Link href={`/insights/${featured.slug}`}>Read Article<ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </article>}

        <section className={s.latest} id="articles" aria-labelledby="latest-heading">
          <div className={s.sectionHeading}>
            <h2 id="latest-heading">{activeCategory === "all" ? "Latest Articles" : `${activeCategory} Articles`}</h2>
            <span className={s.resultCount}>{filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}</span>
          </div>
          {displayedArticles.length ? <div className={s.articleGrid}>
            {displayedArticles.map((article) => <article className={s.articleCard} key={article.slug}>
              <Link href={`/insights/${article.slug}`} className={s.cardImage}>
                <Artwork name={article.image} alt={`Illustrative ${article.category} article artwork`} />
                <span className={`${s.categoryTag} ${s[`tag${article.category}`]}`}>{article.category}</span>
              </Link>
              <div className={s.cardBody}>
                <h3><Link href={`/insights/${article.slug}`}>{article.title}</Link></h3>
                <p>{article.summary}</p>
                <div className={s.cardFooter}>
                  {article.dateLabel ? <span className={s.cardDate}><CalendarDays aria-hidden="true" />{article.dateLabel}</span> : <span className={s.cardDate}>{article.category}</span>}
                  <Link href={`/insights/${article.slug}`}>Read More<ArrowRight aria-hidden="true" /></Link>
                </div>
              </div>
            </article>)}
          </div> : <p className={s.emptyState}>No articles match that search. Try a different title or topic.</p>}
          {activeCategory === "all" && !query.trim() && filteredArticles.length > 6 && <button type="button" className={s.moreButton} onClick={() => setShowAll((value) => !value)}>{showAll ? "Show latest articles" : "Browse all articles"}<ArrowRight aria-hidden="true" /></button>}
        </section>

        <section className={s.newsletter} aria-labelledby="newsletter-heading">
          <span className={s.newsletterIcon}><Mail aria-hidden="true" /></span>
          <div className={s.newsletterCopy}><span className={s.eyebrow}>Stay updated</span><h2 id="newsletter-heading">Join Our Insights Newsletter</h2><p>Odoo tips, ERP trends, and useful digital transformation insights.</p></div>
          <NewsletterSignup />
        </section>

        <section className={s.contactCta}>
          <span className={s.contactIcon}><MessageCircleMore aria-hidden="true" /></span>
          <div><span className={s.eyebrow}>Have a question?</span><h2>Let’s Talk About Your Next Project</h2><p>Get expert advice on Odoo, ERP or digital solutions for your business.</p></div>
          <Link className={s.contactButton} href="/contact">Get in Touch<ArrowRight aria-hidden="true" /></Link>
        </section>
      </div>
    </main>
  );
}
