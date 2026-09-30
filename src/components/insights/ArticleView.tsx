import Link from "next/link";
import { FaqAccordion } from "@/components/faq-accordion";
import { JsonLd } from "@/components/json-ld";
import { CTA } from "@/components/site";
import {
  formatDate,
  readingMinutes,
  relatedArticles,
  wordCount,
  type ArticleSource,
} from "@/content/insights";
import { articleJsonLd, faqJsonLd } from "@/lib/seo";
import { Markdown, tableOfContents } from "./markdown";
import styles from "./article.module.css";

const FIGURE_NOTE = "Figures are indicative estimates and vary by scope.";

export function ArticleView({ article }: { article: ArticleSource }) {
  const path = `/insights/${article.slug}`;
  const toc = wordCount(article) >= 1000 ? tableOfContents(article.body) : [];
  const related = relatedArticles(article);
  return (
    <main id="main" className={styles.page}>
      <JsonLd
        data={articleJsonLd({
          path,
          headline: article.title,
          description: article.description,
          datePublished: article.datePublished,
          image: article.image.src || undefined,
        })}
      />
      {article.faqs.length > 0 && <JsonLd data={faqJsonLd(article.faqs)} />}

      <article className={styles.wrap}>
        <header className={styles.head}>
          <span className={styles.category}>{article.category}</span>
          <h1>{article.title}</h1>
          <p className={styles.meta}>
            <span>By ETripleSoft</span>
            <span>
              <time dateTime={article.datePublished.slice(0, 10)}>
                {formatDate(article.datePublished)}
              </time>
            </span>
            <span>{readingMinutes(article)} min read</span>
          </p>
        </header>

        {toc.length > 0 && (
          <nav className={styles.toc} aria-labelledby="toc-title">
            <h2 id="toc-title">On this page</h2>
            <ol>
              {toc.map((entry) => (
                <li key={entry.id}>
                  <a href={`#${entry.id}`}>{entry.text}</a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className={styles.body}>
          <Markdown source={article.body} />
        </div>

        {article.faqs.length > 0 && (
          <section className={styles.faq} aria-labelledby="article-faq">
            <h2 id="article-faq">Frequently asked questions</h2>
            <FaqAccordion items={article.faqs} idPrefix="faq" />
            {article.faqNote && <p className={styles.faqNote}>{FIGURE_NOTE}</p>}
          </section>
        )}

        {article.afterFaq.trim() && (
          <div className={styles.body}>
            <Markdown source={article.afterFaq} />
          </div>
        )}

        {related.length > 0 && (
          <section className={styles.related} aria-labelledby="related-title">
            <h2 id="related-title">Related articles</h2>
            <ul className={styles.relatedList}>
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/insights/${item.slug}`}>
                    {item.title}
                    <span>
                      {formatDate(item.datePublished)} · {readingMinutes(item)} min read
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>

      <div className={styles.endCta}>
        <CTA
          title="Talk to us about your project"
          description="Tell us what you want to improve and we will help you frame the next step."
          button="Book a Free Consultation"
        />
      </div>
    </main>
  );
}
