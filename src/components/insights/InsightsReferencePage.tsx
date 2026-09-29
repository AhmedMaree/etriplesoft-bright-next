"use client";

import { company } from "@/lib/company";
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

export type InsightCard = {
  title: string;
  summary: string;
  category: string;
  slug: string;
  image?: { src: string; alt: string; width: number; height: number };
  date: string;
  dateLabel: string;
  minutes: number;
};

const categoryIcons: Record<string, typeof Database> = {
  Odoo: Database,
  ERP: Database,
  AI: BrainCircuit,
  Web: Globe2,
  Marketing: Megaphone,
};

function Artwork({ name, alt = "", className = "" }: { name: string; alt?: string; className?: string }) {
  return <img className={className} src={`/images/insights-reference/${name}.webp`} alt={alt} loading="lazy" decoding="async" />;
}

function CardImage({ image }: { image?: InsightCard["image"] }) {
  if (!image) return null;
  return <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />;
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
      setStatus(`We could not submit your request. Please email ${company.primaryEmail}.`);
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

export default function InsightsReferencePage({ articles }: { articles: InsightCard[] }) {
  const featured = articles[0];
  const rest = articles.slice(1);
  const categories: readonly (readonly [string, string, typeof Database])[] = [
    ["All Articles", "all", Grid2X2],
    ...Array.from(new Set(articles.map((article) => article.category))).map(
      (category) => [category, category, categoryIcons[category] ?? BookOpen] as const,
    ),
  ];
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const filteredArticles = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    return rest.filter((article) => {
      const categoryMatch = activeCategory === "all" || article.category === activeCategory;
      const queryMatch = !normalized || `${article.title} ${article.summary} ${article.category}`.toLocaleLowerCase().includes(normalized);
      return categoryMatch && queryMatch;
    });
  }, [activeCategory, query, rest]);
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

        {featured && activeCategory === "all" && !query.trim() && <article className={s.featured}>
          <Link href={`/insights/${featured.slug}`} className={s.featuredImage}><CardImage image={featured.image} /></Link>
          <div className={s.featuredCopy}>
            <span className={s.featuredLabel}><span aria-hidden="true">★</span> Featured article</span>
            <h2><Link href={`/insights/${featured.slug}`}>{featured.title}</Link></h2>
            <p>{featured.summary}</p>
            <div className={s.articleMeta}>
              <span><CalendarDays aria-hidden="true" /><time dateTime={featured.date}>{featured.dateLabel}</time> · {featured.minutes} min read</span>
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
                <CardImage image={article.image} />
                <span className={`${s.categoryTag} ${s[`tag${article.category}`] ?? ""}`}>{article.category}</span>
              </Link>
              <div className={s.cardBody}>
                <h3><Link href={`/insights/${article.slug}`}>{article.title}</Link></h3>
                <p>{article.summary}</p>
                <div className={s.cardFooter}>
                  <span className={s.cardDate}><CalendarDays aria-hidden="true" /><time dateTime={article.date}>{article.dateLabel}</time> · {article.minutes} min read</span>
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
