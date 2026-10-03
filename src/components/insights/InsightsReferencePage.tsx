"use client";

import { company } from "@/lib/company";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  Clock,
  Database,
  Grid2X2,
  Globe2,
  Mail,
  Megaphone,
  MessageCircleMore,
  Search,
  Star,
} from "lucide-react";
import Image from "next/image";
import s from "./InsightsReferencePage.module.css";
import { InsightsHero } from "./InsightsHero";
import { arMinutesLabel } from "@/i18n/ar";

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

function CardImage({ image }: { image?: InsightCard["image"] }) {
  if (!image) return null;
  return <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />;
}

function arabicArticleCount(count: number) {
  const number = count.toLocaleString("ar-EG-u-nu-latn");
  if (count === 1) return "مقال واحد";
  if (count === 2) return "مقالان";
  const remainder = count % 100;
  return `${number} ${remainder >= 3 && remainder <= 10 ? "مقالات" : "مقالاً"}`;
}

function NewsletterSignup({ arabic, Arrow }: { arabic: boolean; Arrow: typeof ArrowRight }) {
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
      setStatus(arabic ? (response.ok ? "تم الاشتراك بنجاح." : "تعذر إكمال الاشتراك. حاول مرة أخرى.") : result.message);
      if (response.ok) form.reset();
    } catch {
      setStatus(arabic ? `تعذر إرسال طلبك. راسلنا على ${company.primaryEmail}.` : `We could not submit your request. Please email ${company.primaryEmail}.`);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className={s.newsletterForm} onSubmit={submit}>
      <input type="hidden" name="kind" value="newsletter" />
      <label className={s.srOnly} htmlFor="insights-email">{arabic ? "بريدك الإلكتروني" : "Your email address"}</label>
      <input id="insights-email" type="email" name="email" autoComplete="email" placeholder={arabic ? "بريدك الإلكتروني" : "Your email address"} required maxLength={254} />
      <label className={s.consent}><input type="checkbox" name="consent" required /> {arabic ? "أوافق على تلقي تحديثات ETripleSoft من حين لآخر." : "I agree to receive occasional ETripleSoft updates."}</label>
      <button type="submit" disabled={busy}><Mail aria-hidden="true" />{busy ? (arabic ? "جارٍ الاشتراك…" : "Submitting…") : (arabic ? "اشترك" : "Subscribe")}<Arrow aria-hidden="true" /></button>
      <p className={s.privacy}><CheckCircle2 aria-hidden="true" />{arabic ? "رسائل مفيدة فقط، بلا إزعاج." : "No spam. Only useful insights."}</p>
      {status && <p className={s.formStatus} role="status">{status}</p>}
    </form>
  );
}

export default function InsightsReferencePage({ articles, locale = "en" }: { articles: InsightCard[]; locale?: "en" | "ar" }) {
  const arabic = locale === "ar";
  const Arrow = arabic ? ArrowLeft : ArrowRight;
  const featured = articles.find((article) => article.slug === "odoo-vs-zoho-vs-quickbooks") ?? articles[0];
  const rest = articles.filter((article) => article.slug !== featured?.slug);
  const categories: readonly (readonly [string, string, typeof Database])[] = [
    [arabic ? "كل المقالات" : "All Articles", "all", Grid2X2],
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

  const articlePath = (slug: string) => `${arabic ? "/ar" : ""}/insights/${slug}`;
  return (
    <main id="main" className={`${s.page} ${arabic ? s.rtlPage : ""}`} dir={arabic ? "rtl" : "ltr"} lang={arabic ? "ar" : "en"}>
      <InsightsHero locale={locale} />
      <div className={`container ${arabic ? s.arabicContent : ""}`}>
        <nav className={s.filters} aria-label={arabic ? "تصفية المقالات حسب الموضوع" : "Filter insights by topic"}>
          <div className={s.categoryTabs} role="group" aria-label={arabic ? "تصنيفات المقالات" : "Article categories"}>
            {categories.map(([label, value, Icon]) => <button key={value} type="button" className={activeCategory === value ? s.activeTab : ""} aria-pressed={activeCategory === value} onClick={() => chooseCategory(value)}><Icon aria-hidden="true" /><span>{label}</span></button>)}
          </div>
          <label className={s.searchBox}><Search aria-hidden="true" /><span className={s.srOnly}>{arabic ? "ابحث في المقالات" : "Search articles"}</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={arabic ? "ابحث في المقالات…" : "Search articles…"} type="search" /></label>
        </nav>

        {featured && activeCategory === "all" && !query.trim() && <Link
          href={articlePath(featured.slug)}
          className={`${s.featured} ${arabic ? s.featuredArabic : ""}`}
          aria-label={arabic ? "اقرأ المقال المميز: أودو أم زوهو أم كويك بوكس؟ أيهما يناسب أعمالك فعلاً؟" : `Read featured article: ${featured.title}`}
        >
          <div className={s.featuredImage}>
            <Image
              src={arabic ? "/images/insights-reference/02-article-ar-image.webp" : "/images/insights-reference/02-article-en-image.webp"}
              alt={arabic ? "لوحة أودو لإدارة الأعمال على شاشة حاسوب محمول" : "Odoo business dashboard displayed on a laptop"}
              width={arabic ? 1448 : 1672}
              height={arabic ? 1086 : 941}
              sizes="(max-width: 760px) calc(100vw - 48px), (max-width: 1200px) 52vw, 620px"
              priority
            />
          </div>
          <div className={s.featuredCopy} dir={arabic ? "rtl" : "ltr"}>
            <span className={s.featuredLabel}><Star aria-hidden="true" />{arabic ? "مقال مميز" : "Featured Article"}</span>
            {arabic ? <h2>
              <span><bdi dir="ltr">Odoo</bdi> أم <bdi dir="ltr">Zoho</bdi> أم <bdi dir="ltr">QuickBooks</bdi>؟</span>
              <br />
              <span className={s.featuredAccent}>أيهم يناسب أعمالك فعلاً؟</span>
            </h2> : <h2>
              <span>Odoo vs Zoho vs</span>
              <br />
              <span>QuickBooks: Which One</span>
              <br />
              <span>Actually Fits <span className={s.featuredAccent}>Your Business?</span></span>
            </h2>}
            {arabic ? <p>
              مقارنة شاملة بين <bdi dir="ltr">Odoo</bdi> و<bdi dir="ltr">Zoho</bdi> و<bdi dir="ltr">QuickBooks</bdi> من حيث سير العمل، التكاملات، المتطلبات الإقليمية، والتكلفة الإجمالية للملكية.
            </p> : <p>Compare Odoo, Zoho Books and QuickBooks by workflow, integrations, regional requirements and total cost of ownership.</p>}
            <div className={s.articleMeta}>
              <span className={s.featuredDetails} dir={arabic ? "rtl" : "ltr"}>
                <span><CalendarDays aria-hidden="true" /><time dateTime="2024-09-12">{arabic ? "12 سبتمبر 2024" : "12 September 2024"}</time></span>
                <span className={s.metaDivider} aria-hidden="true" />
                <span><Clock aria-hidden="true" />{arabic ? `${arMinutesLabel(5)} قراءة` : "5 min read"}</span>
              </span>
              <span className={s.readArticle}>
                {arabic ? "قراءة المقال" : "Read Article"}<Arrow aria-hidden="true" />
              </span>
            </div>
          </div>
        </Link>}

        <section className={s.latest} id="articles" aria-labelledby="latest-heading">
          <div className={s.sectionHeading}>
            <h2 id="latest-heading">{activeCategory === "all" ? (arabic ? "أحدث المقالات" : "Latest Articles") : (arabic ? `مقالات ${activeCategory}` : `${activeCategory} Articles`)}</h2>
            <span className={s.resultCount}>{arabic ? arabicArticleCount(filteredArticles.length) : `${filteredArticles.length} ${filteredArticles.length === 1 ? "article" : "articles"}`}</span>
          </div>
          {displayedArticles.length ? <div className={s.articleGrid}>
            {displayedArticles.map((article) => <Link href={articlePath(article.slug)} className={s.articleCard} key={article.slug}>
              <span className={s.cardImage}>
                <CardImage image={article.image} />
                <span className={`${s.categoryTag} ${s[`tag${article.category}`] ?? ""}`}>{article.category}</span>
              </span>
              <div className={s.cardBody}>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                <div className={s.cardFooter}>
                  <span className={s.cardDate}><CalendarDays aria-hidden="true" /><time dateTime={article.date}>{article.dateLabel}</time> · {arabic ? `قراءة ${arMinutesLabel(article.minutes)}` : `${article.minutes} min read`}</span>
                  <span className={s.readMore}>{arabic ? "اقرأ المزيد" : "Read More"}<Arrow aria-hidden="true" /></span>
                </div>
              </div>
            </Link>)}
          </div> : <p className={s.emptyState}>{arabic ? "لا توجد مقالات تطابق بحثك. جرّب عنواناً أو موضوعاً آخر." : "No articles match that search. Try a different title or topic."}</p>}
          {activeCategory === "all" && !query.trim() && filteredArticles.length > 6 && <button type="button" className={s.moreButton} onClick={() => setShowAll((value) => !value)}>{showAll ? (arabic ? "عرض أحدث المقالات" : "Show latest articles") : (arabic ? "عرض جميع المقالات" : "Browse all articles")}<Arrow aria-hidden="true" /></button>}
        </section>

        <section className={s.newsletter} aria-labelledby="newsletter-heading">
          <span className={s.newsletterIcon}><Mail aria-hidden="true" /></span>
          <div className={s.newsletterCopy}><span className={s.eyebrow}>{arabic ? "ابقَ على اطلاع" : "Stay updated"}</span><h2 id="newsletter-heading">{arabic ? "انضم إلى نشرتنا للمقالات" : "Join Our Insights Newsletter"}</h2><p>{arabic ? "نصائح أودو واتجاهات ERP ورؤى عملية للتحول الرقمي." : "Odoo tips, ERP trends, and useful digital transformation insights."}</p></div>
          <NewsletterSignup arabic={arabic} Arrow={Arrow} />
        </section>

        <section className={s.contactCta}>
          <span className={s.contactIcon}><MessageCircleMore aria-hidden="true" /></span>
          <div><span className={s.eyebrow}>{arabic ? "هل لديك سؤال؟" : "Have a question?"}</span><h2>{arabic ? "لنتحدث عن مشروعك القادم" : "Let’s Talk About Your Next Project"}</h2><p>{arabic ? "احصل على مشورة الخبراء في أودو وERP والحلول الرقمية لأعمالك." : "Get expert advice on Odoo, ERP or digital solutions for your business."}</p></div>
          <Link className={s.contactButton} href={arabic ? "/ar/contact-us" : "/contact"}>{arabic ? "تواصل معنا" : "Get in Touch"}<Arrow aria-hidden="true" /></Link>
        </section>
        {arabic && <p className={s.englishLink}>للاطلاع على مقالات إضافية، انتقل إلى <Link href="/insights" hrefLang="en">المدونة الإنجليزية<ArrowLeft aria-hidden="true" /></Link>.</p>}
      </div>
    </main>
  );
}
