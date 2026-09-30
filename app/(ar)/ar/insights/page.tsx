import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCards } from "@/components/ar/ArticleCards";
import styles from "@/components/ar/ar.module.css";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "المدونة: أدلة عن أودو والأمن السيبراني في مصر والخليج",
  description:
    "مقالات عملية من ETripleSoft عن أسعار أودو، واختيار شريك التنفيذ، وقوانين حماية البيانات في مصر والسعودية والإمارات.",
  path: "/ar/insights",
});

export default function ArabicInsights() {
  return (
    <main id="main">
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <span className="eyebrow">المدونة</span>
            <h1>أدلة عملية للشركات في مصر والخليج</h1>
            <p className={styles.lead}>
              مقالات من فريق ETripleSoft عن أودو وتخطيط الموارد وأمن البيانات،
              مكتوبة لتساعدك على اتخاذ قرار أوضح.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.section} aria-label="المقالات">
        <div className="container">
          <h2 className={styles.articlesHeading}>المقالات</h2>
          <ArticleCards />
          <p className={styles.note}>
            مقالات إضافية متاحة بالإنجليزية في{" "}
            <Link href="/insights" hrefLang="en">
              مدونة ETripleSoft
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
