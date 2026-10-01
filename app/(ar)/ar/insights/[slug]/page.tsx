import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import articleStyles from "@/components/insights/article.module.css";
import styles from "@/components/ar/ar.module.css";
import { FaqAccordion } from "@/components/faq-accordion";
import { Markdown } from "@/components/insights/markdown";
import { JsonLd } from "@/components/json-ld";
import { CTA } from "@/components/site";
import { arabicArticleBySlug, arabicArticles } from "@/content/insights-ar";
import { arabicLegacyDrafts } from "@/content/insights-ar/legacy-drafts";
import { articleBySlug, articles } from "@/content/insights";
import { legacyDrafts } from "@/content/insights/drafts";
import { arInsightSummaries } from "@/i18n/ar-routes";
import { arCta, arDateFormat, arMinutesLabel, arReadingMinutes } from "@/i18n/ar";
import { company } from "@/lib/company";
import { articleJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return [...new Set([
    ...arabicArticles.map((article) => article.slug),
    ...articles.map((article) => article.slug),
    ...Object.keys(legacyDrafts),
  ])].map((slug) => ({ slug }));
}

function legacyDraftForSlug(slug: string) {
  return legacyDrafts[slug] && arabicLegacyDrafts[slug] ? arabicLegacyDrafts[slug] : null;
}

function articleForSlug(slug: string) {
  const existing = arabicArticleBySlug(slug);
  if (existing) return existing;
  const translation = arInsightSummaries.find((item) => item.slug === slug);
  const source = articleBySlug(slug);
  if (!translation || !source) return null;
  return {
    ...translation,
    metaTitle: translation.title,
    datePublished: source.datePublished,
    image: source.image.src,
    faqs: [] as { question: string; answer: string }[],
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articleForSlug(slug);
  const legacyDraft = legacyDraftForSlug(slug);
  if (!article && legacyDraft) {
    return {
      ...pageMetadata({
        title: legacyDraft.title,
        description: legacyDraft.description,
        path: `/ar/insights/${slug}`,
        type: "article",
      }),
      robots: { index: false, follow: false },
    };
  }
  if (!article) return { title: "غير موجود", robots: { index: false } };
  return pageMetadata({
    title: article.metaTitle ?? article.title,
    description: article.description,
    path: `/ar/insights/${article.slug}`,
    type: "article",
    publishedTime: article.datePublished,
  });
}

export default async function ArabicArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article = articleForSlug(slug);
  const legacyDraft = legacyDraftForSlug(slug);
  if (!article && legacyDraft) {
    return (
      <main id="main" className={styles.page} dir="rtl">
        <article className={`container ${styles.wrap}`}>
          <span className={styles.category}>{legacyDraft.category}</span>
          <h1>{legacyDraft.title}</h1>
          <p className={styles.meta}><span>محتوى أرشيفي</span></p>
          <div className={styles.cover}>
            <Image src={`/images/${legacyDraft.image}.webp`} alt="" fill sizes="800px" priority />
          </div>
          <div className={articleStyles.body}>
            <Markdown source={legacyDraft.body} tableLabel="جدول" scrollableLabel="(قابل للتمرير)" />
          </div>
        </article>
        <CTA
          title="تحدث معنا عن مشروعك"
          description="أخبرنا بما تريد تحسينه وسنساعدك في تحديد الخطوة التالية."
          button={arCta.primary}
          href={arCta.primaryHref}
          secondary={{ label: arCta.whatsapp, href: company.whatsappUrl, external: true }}
          note={arCta.note}
          badge="خطوتك التالية"
          perks={["استشارة مجانية", "حلول تراعي قطاعك", "دون التزام أو ضغوط"]}
        />
      </main>
    );
  }
  if (!article) notFound();
  const path = `/ar/insights/${article.slug}`;
  const minutes = arMinutesLabel(arReadingMinutes(article.body));
  return (
    <main id="main" className={styles.page}>
      <JsonLd
        data={articleJsonLd({
          path,
          headline: article.title,
          description: article.description,
          datePublished: article.datePublished,
          image: article.image,
        })}
      />
      {article.faqs.length > 0 && <JsonLd data={faqJsonLd(article.faqs)} />}
      <article className={`container ${styles.wrap}`}>
        <span className={styles.category}>{article.category}</span>
        <h1>{article.title}</h1>
        <p className={styles.meta}>
          <span>بقلم ETripleSoft</span>
          <span>
            <time dateTime={article.datePublished}>
              {arDateFormat.format(new Date(article.datePublished))}
            </time>
          </span>
          <span>قراءة {minutes}</span>
        </p>
        <div className={styles.cover}>
          <Image src={article.image} alt="" fill sizes="800px" priority />
        </div>
        <div className={articleStyles.body}>
          <Markdown
            source={article.body}
            tableLabel="جدول"
            scrollableLabel="(قابل للتمرير)"
          />
        </div>
        {article.faqs.length > 0 && (
          <section className={styles.faq} aria-labelledby="ar-faq">
            <h2 id="ar-faq">أسئلة شائعة</h2>
            <FaqAccordion items={article.faqs} idPrefix="faq" />
          </section>
        )}
      </article>
      <CTA
        title="تحدث معنا عن مشروعك"
        description="أخبرنا بما تريد تحسينه وسنساعدك في تحديد الخطوة التالية."
        button={arCta.primary}
        href={arCta.primaryHref}
        secondary={{ label: arCta.whatsapp, href: company.whatsappUrl, external: true }}
        note={arCta.note}
        badge="خطوتك التالية"
        perks={["استشارة مجانية", "حلول تراعي قطاعك", "دون التزام أو ضغوط"]}
      />
    </main>
  );
}
