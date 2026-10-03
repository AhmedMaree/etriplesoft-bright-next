import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  UsersRound,
} from "lucide-react";
import styles from "./PortfolioHero.module.css";

type Locale = "en" | "ar";

const content = {
  en: {
    eyebrow: "SUCCESS STORIES",
    firstLine: "Real Businesses.",
    secondLine: "Real Results.",
    description:
      "See how we help companies transform with Odoo ERP, cloud solutions, AI automation, and digital growth. Explore real projects, challenges, and measurable outcomes.",
    discuss: "Discuss Your Project",
    explore: "Explore Case Studies",
    stats: ["Projects Delivered", "Happy Clients", "Client Satisfaction"],
    imageAlt: "Odoo sales dashboard showing business growth and results",
    contact: "/contact?service=Project%20enquiry",
  },
  ar: {
    eyebrow: "قصص النجاح",
    firstLine: "شركات حقيقية.",
    secondLine: "نتائج حقيقية.",
    description:
      "تعرف على كيف ساعدنا الشركات على التحول باستخدام Odoo ERP وحلول السحابة والذكاء الاصطناعي والتسويق الرقمي، واستكشف مشاريع حقيقية وتحديات تم تجاوزها ونتائج قابلة للقياس.",
    discuss: "ناقش مشروعك معنا",
    explore: "استكشف دراسات الحالة",
    stats: ["مشروع تم تنفيذه", "عميل سعيد", "معدل رضا العملاء"],
    imageAlt: "لوحة مبيعات أودو تعرض نمو الأعمال والنتائج",
    contact: "/ar/contact-us?service=استفسار%20عن%20مشروع",
  },
} as const;

export function PortfolioHero({ locale }: { locale: Locale }) {
  const isArabic = locale === "ar";
  const copy = content[locale];
  const Arrow = isArabic ? ArrowLeft : ArrowRight;
  const stats = [
    { value: "200+", label: copy.stats[0], Icon: BriefcaseBusiness },
    { value: "100+", label: copy.stats[1], Icon: UsersRound },
    { value: "98%", label: copy.stats[2], Icon: ChartNoAxesCombined },
  ];

  return (
    <section className={styles.hero} dir={isArabic ? "rtl" : "ltr"} aria-labelledby="success-hero-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>{copy.eyebrow}</span>
          <h1 id="success-hero-title">
            <span>{copy.firstLine}</span>
            <span className={styles.accent}>{copy.secondLine}</span>
          </h1>
          <p className={styles.description}>{copy.description}</p>
          <div className={styles.actions}>
            <Link className={styles.primary} href={copy.contact}>
              <span>{copy.discuss}</span>
              <Arrow aria-hidden="true" />
            </Link>
            <a className={styles.secondary} href="#selected-work">
              <span>{copy.explore}</span>
              <Arrow aria-hidden="true" />
            </a>
          </div>
          <div className={styles.stats} role="group" aria-label={isArabic ? "إنجازاتنا" : "Our results"}>
            {stats.map(({ value, label, Icon }) => (
              <div className={styles.stat} key={value}>
                <span className={styles.statIcon}><Icon aria-hidden="true" /></span>
                <span className={styles.statCopy}>
                  <strong><bdi dir="ltr">{value}</bdi></strong>
                  <span>{label}</span>
                  <i aria-hidden="true" />
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.artwork}>
          <Image
            src={isArabic ? "/images/success/hero-ar.webp" : "/images/success/hero-en.webp"}
            alt={copy.imageAlt}
            width={1536}
            height={1024}
            sizes="(max-width: 900px) 100vw, 58vw"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
