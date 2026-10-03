import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChartNoAxesColumnIncreasing,
  CirclePlay,
  Database,
  TrendingUp,
} from "lucide-react";
import styles from "./AiAutomationHero.module.css";

const copy = {
  en: {
    dir: "ltr" as const,
    badge: "AI-Powered Business",
    heading: <><em>AI</em> Automation</>,
    subheading: "Smarter work. Less friction.",
    paragraph: <><span>Automate processes, empower teams and unlock growth</span><span>with practical AI solutions built for business.</span></>,
    explore: "Explore AI Solutions",
    overview: "Watch a 2-Min Overview",
    alt: "AI automation connecting business systems, assistants, workflows and insights",
    benefits: [
      ["Higher", "Productivity", ChartNoAxesColumnIncreasing],
      ["Lower", "Operational Costs", Database],
      ["Scalable", "Growth", TrendingUp],
    ] as const,
  },
  ar: {
    dir: "rtl" as const,
    badge: "أعمال مدعومة بالذكاء الاصطناعي",
    heading: <>أتمتة <em>بالذكاء الاصطناعي</em></>,
    subheading: "عمل أكثر ذكاءً.. بمجهود أقل.",
    paragraph: <><span>أتمتة عملياتك، وتمكين فريقك، وتحقيق نمو أكبر من خلال</span><span>حلول الذكاء الاصطناعي العملية والمصممة خصيصاً لأعمالك.</span></>,
    explore: "استكشف حلول الذكاء الاصطناعي",
    overview: "شاهد ملخصاً خلال دقيقتين",
    alt: "الذكاء الاصطناعي يربط أنظمة الأعمال والمساعدات الذكية وسير العمل والتحليلات",
    benefits: [
      ["إنتاجية", "أعلى", ChartNoAxesColumnIncreasing],
      ["تكاليف تشغيل", "أقل", Database],
      ["نمو قابل", "للتوسع", TrendingUp],
    ] as const,
  },
};

export function AiAutomationHero({ locale }: { locale: "en" | "ar" }) {
  const isArabic = locale === "ar";
  const content = copy[locale];
  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section className={styles.hero} aria-labelledby="ai-hero-title" dir={content.dir}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={styles.badge}><span aria-hidden="true">✦</span>{content.badge}</span>
          <h1 id="ai-hero-title">{content.heading}</h1>
          <h2>{content.subheading}</h2>
          <p className={styles.description}>{content.paragraph}</p>

          <div className={styles.actions}>
            <Link href="#solutions" className={styles.primary}>
              {content.explore}<Arrow aria-hidden="true" />
            </Link>
            <Link href="#process" className={styles.secondary}>
              <CirclePlay aria-hidden="true" />{content.overview}
            </Link>
          </div>

          <ul className={styles.benefits}>
            {content.benefits.map(([top, bottom, Glyph]) => (
              <li key={top}>
                <Glyph aria-hidden="true" />
                <span>{top}<strong>{bottom}</strong></span>
              </li>
            ))}
          </ul>
        </div>

        <Image
          className={styles.illustration}
          src={isArabic ? "/images/ai/reference/hero-arabic.webp" : "/images/ai/reference/hero-english.webp"}
          alt={content.alt}
          width={isArabic ? 1448 : 1536}
          height={isArabic ? 1086 : 1024}
          sizes="(max-width: 767px) calc(100vw - 36px), (max-width: 1200px) 50vw, 680px"
          priority
        />
      </div>
    </section>
  );
}
