import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles, readingMinutes } from "@/content/insights";
import styles from "./home.module.css";

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export function HomeArticles({ count = 3 }: { count?: number }) {
  return (
    <div className={styles.articles}>
      {articles.slice(0, count).map((article) => (
        <article className={styles.article} key={article.slug}>
          <div className={styles.articleThumb}>
            <Image
              src={article.image.src}
              alt=""
              fill
              sizes="(max-width: 760px) 100vw, (max-width: 1000px) 50vw, 380px"
            />
          </div>
          <div className={styles.articleBody}>
            <div className={styles.articleMeta}>
              <span className="tag">{article.category}</span>
              <small>
                {dateFormat.format(new Date(article.datePublished))} ·{" "}
                {readingMinutes(article)} min read
              </small>
            </div>
            <h3>
              <Link
                href={`/insights/${article.slug}`}
                className={styles.articleLink}
              >
                {article.title}
              </Link>
            </h3>
            <p>{article.description}</p>
            <ArrowRight
              className={styles.appArrow}
              size={18}
              aria-hidden="true"
            />
          </div>
        </article>
      ))}
    </div>
  );
}
