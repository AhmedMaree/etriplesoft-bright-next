import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import articleStyles from "@/components/insights/article.module.css";
import styles from "@/components/ar/ar.module.css";
import { FaqAccordion } from "@/components/faq-accordion";
import { Markdown, tableOfContents } from "@/components/insights/markdown";
import { JsonLd } from "@/components/json-ld";
import { CTA } from "@/components/site";
import { arabicArticleBySlug, arabicArticles } from "@/content/insights-ar";
import { fullArabicArticleTranslations } from "@/content/insights-ar/full-translations";
import { arabicLegacyDrafts } from "@/content/insights-ar/legacy-drafts";
import { articleBySlug, articles, relatedArticles, wordCount } from "@/content/insights";
import { legacyDrafts } from "@/content/insights/drafts";
import { arInsightSummaries } from "@/i18n/ar-routes";
import { arCta, arDateFormat, arMinutesLabel, arReadingMinutes } from "@/i18n/ar";
import { company } from "@/lib/company";
import { articleJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

const FIGURE_NOTE = "الأرقام تقديرية وقد تختلف بحسب نطاق العمل.";

function articleWordCount(article: {
  body: string;
  afterFaq?: string;
  faqs: { question: string; answer: string }[];
}) {
  return [article.body, article.afterFaq ?? "", ...article.faqs.map((faq) => `${faq.question} ${faq.answer}`)]
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
}

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
  const source = articleBySlug(slug);
  const fullTranslation = fullArabicArticleTranslations[slug];
  if (fullTranslation && source) {
    return {
      ...fullTranslation,
      slug,
      datePublished: source.datePublished,
      image: source.image.src,
    };
  }
  const translation = arInsightSummaries.find((item) => item.slug === slug);
  if (!translation || !source) return null;
  const [lead, ...rest] = translation.body.split("\n\n");
  const body = translation.body.includes(`](${source.image.src})`)
    ? translation.body
    : [
        lead,
        `![${translation.title}](${source.image.src})`,
        ...rest,
      ].join("\n\n");
  return {
    ...translation,
    slug,
    metaTitle: translation.title,
    datePublished: source.datePublished,
    image: source.image.src,
    body,
    afterFaq: "",
    faqNote: false,
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
    image: { url: article.image, alt: article.title },
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
      <main id="main" className={articleStyles.page} dir="rtl">
        <article className={articleStyles.wrap}>
          <Link className={styles.articleIndexLink} href="/ar/insights">
            جميع المقالات
          </Link>
          <header className={articleStyles.head}>
            <span className={articleStyles.category}>{legacyDraft.category}</span>
            <h1>{legacyDraft.title}</h1>
            <p className={articleStyles.meta}><span>محتوى أرشيفي</span></p>
          </header>
          <div className={styles.cover}>
            <Image src={`/images/${legacyDraft.image}.webp`} alt="" fill sizes="800px" priority />
          </div>
          <div className={[articleStyles.body, articleStyles.rtl].join(" ")}>
            <Markdown
              source={legacyDraft.body}
              tableLabel="جدول"
              scrollableLabel="(قابل للتمرير)"
              locale="ar"
              ctaPrimaryLabel={arCta.primary}
              ctaPrimaryHref={arCta.primaryHref}
              ctaSecondaryLabel="استكشف الحلول"
              ctaSecondaryHref="/ar/services"
            />
          </div>
        </article>
        <div className={articleStyles.endCta}>
          <CTA
            title="تحدث معنا عن مشروعك"
            description="أخبرنا بما تريد تحسينه وسنساعدك في تحديد الخطوة التالية."
            button={arCta.primary}
            href={arCta.primaryHref}
            secondary={{ label: arCta.whatsapp, href: company.whatsappUrl, external: true }}
            badge="خطوتك التالية"
            perks={["استشارة مجانية", "حلول تناسب قطاعك", "دون التزام أو ضغوط"]}
            arrowDirection="left"
          />
        </div>
      </main>
    );
  }
  if (!article) notFound();
  const path = `/ar/insights/${article.slug}`;
  const minutes = arMinutesLabel(arReadingMinutes([
    article.body,
    article.afterFaq ?? "",
    ...article.faqs.map((faq) => `${faq.question} ${faq.answer}`),
  ].join(" ")));
  const englishArticle = articleBySlug(slug);
  const shouldShowToc = englishArticle
    ? wordCount(englishArticle) >= 1000
    : articleWordCount(article) >= 1000;
  const toc = shouldShowToc ? tableOfContents(article.body) : [];
  const related = englishArticle
    ? relatedArticles(englishArticle).flatMap((source) => {
        const translation = fullArabicArticleTranslations[source.slug]
          ?? arInsightSummaries.find((item) => item.slug === source.slug);
        return translation ? [{ source, translation }] : [];
      })
    : [];
  return (
    <main id="main" className={articleStyles.page} dir="rtl">
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
      <article className={articleStyles.wrap}>
        <header className={articleStyles.head}>
          <span className={articleStyles.category}>{article.category}</span>
          <h1>{article.title}</h1>
          <p className={articleStyles.meta}>
            <span>بقلم ETripleSoft</span>
            <span>
              <time dateTime={article.datePublished}>
                {arDateFormat.format(new Date(article.datePublished))}
              </time>
            </span>
            <span>قراءة {minutes}</span>
          </p>
        </header>

        {toc.length > 0 && (
          <nav className={[articleStyles.toc, articleStyles.rtl].join(" ")} aria-labelledby="ar-toc-title">
            <h2 id="ar-toc-title">في هذا المقال</h2>
            <ol>
              {toc.map((entry) => (
                <li key={entry.id}>
                  <a href={`#${entry.id}`}>{entry.text}</a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className={[articleStyles.body, articleStyles.rtl].join(" ")}>
          <Markdown
            source={article.body}
            tableLabel="جدول"
            scrollableLabel="(قابل للتمرير)"
            locale="ar"
            ctaPrimaryLabel={arCta.primary}
            ctaPrimaryHref={arCta.primaryHref}
            ctaSecondaryLabel="استكشف الحلول"
            ctaSecondaryHref="/ar/services"
          />
        </div>
        {article.faqs.length > 0 && (
          <section className={articleStyles.faq} aria-labelledby="ar-faq">
            <h2 id="ar-faq">الأسئلة الشائعة</h2>
            <FaqAccordion items={article.faqs} idPrefix="faq" />
            {article.faqNote && <p className={articleStyles.faqNote}>{FIGURE_NOTE}</p>}
          </section>
        )}
        {article.afterFaq?.trim() && (
          <div className={[articleStyles.body, articleStyles.rtl].join(" ")}>
            <Markdown
              source={article.afterFaq}
              tableLabel="جدول"
              scrollableLabel="(قابل للتمرير)"
              locale="ar"
              ctaPrimaryLabel={arCta.primary}
              ctaPrimaryHref={arCta.primaryHref}
              ctaSecondaryLabel="استكشف الحلول"
              ctaSecondaryHref="/ar/services"
            />
          </div>
        )}
        {related.length > 0 && (
          <section className={articleStyles.related} aria-labelledby="related-title">
            <h2 id="related-title">مقالات ذات صلة</h2>
            <ul className={articleStyles.relatedList}>
              {related.map(({ source, translation }) => (
                <li key={source.slug}>
                  <Link href={"/ar/insights/" + source.slug}>
                    {translation.title}
                    <span>
                      {arDateFormat.format(new Date(source.datePublished))} · قراءة{" "}
                      {arMinutesLabel(arReadingMinutes(translation.body))}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
      <div className={articleStyles.endCta}>
        <CTA
          title="تحدث معنا عن مشروعك"
          description="أخبرنا بما تريد تحسينه وسنساعدك في تحديد الخطوة التالية."
          button={arCta.primary}
          href={arCta.primaryHref}
          secondary={{ label: arCta.whatsapp, href: company.whatsappUrl, external: true }}
          badge="خطوتك التالية"
          perks={["استشارة مجانية", "حلول تناسب قطاعك", "دون التزام أو ضغوط"]}
          arrowDirection="left"
        />
      </div>
    </main>
  );
}
