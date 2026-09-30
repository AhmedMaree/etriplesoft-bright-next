import Image from "next/image";
import Link from "next/link";
import { arabicArticles } from "@/content/insights-ar";
import { arDateFormat, arMinutesLabel, arReadingMinutes } from "@/i18n/ar";
import styles from "./ar.module.css";

export function ArticleCards({ count }: { count?: number }) {
  const items = count ? arabicArticles.slice(0, count) : arabicArticles;
  return (
    <ul className={styles.articles}>
      {items.map((article) => (
        <li className={styles.article} key={article.slug}>
          <div className={styles.thumb}>
            <Image
              src={article.image}
              alt=""
              fill
              sizes="(max-width: 760px) 100vw, (max-width: 1000px) 50vw, 380px"
            />
          </div>
          <div className={styles.articleBody}>
            <div className={styles.meta}>
              <span className="tag">{article.category}</span>
              <span>
                {arDateFormat.format(new Date(article.datePublished))} ·{" "}
                قراءة {arMinutesLabel(arReadingMinutes(article.body))}
              </span>
            </div>
            <h3>
              <Link href={`/ar/insights/${article.slug}`} prefetch={false}>
                {article.title}
              </Link>
            </h3>
            <p>{article.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
