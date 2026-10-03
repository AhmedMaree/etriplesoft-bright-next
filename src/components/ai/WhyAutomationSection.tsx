import Image from "next/image";
import {
  BarChart3,
  CircleDollarSign,
  Settings,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import styles from "./WhyAutomationSection.module.css";

type Locale = "en" | "ar";

const copy = {
  en: {
    badge: "REAL BUSINESS OUTCOMES",
    headingFirst: "Why Automate",
    description: [
      "We combine deep technical expertise with real business",
      "understanding to deliver AI automation solutions that",
      "create measurable value.",
    ],
    mobileDescription: [
      "We combine deep technical expertise with real",
      "business understanding to deliver AI automation",
      "solutions that create measurable value.",
    ],
    alt: "AI automation helping businesses improve productivity, accuracy and growth",
    benefits: [
      ["Higher Productivity", "Automate repetitive tasks and empower your teams."],
      ["Cost Reduction", "Minimize manual work and operational costs."],
      ["Improved Accuracy", "Reduce human error with AI precision."],
      ["Scalable Solutions", "Grow your automation as your business grows."],
    ],
  },
  ar: {
    badge: "نتائج حقيقية للأعمال",
    headingFirst: "لماذا تعتمد الأتمتة",
    description: [
      "نجمع بين الخبرة التقنية العميقة والفهم الحقيقي للأعمال",
      "لنقدم حلول أتمتة ذكية تحقق قيمة قابلة للقياس.",
    ],
    mobileDescription: [
      "نجمع بين الخبرة التقنية العميقة والفهم الحقيقي للأعمال",
      "لنقدم حلول أتمتة ذكية تحقق قيمة قابلة للقياس.",
    ],
    alt: "الأتمتة بالذكاء الاصطناعي لتحسين الإنتاجية والدقة ونمو الأعمال",
    benefits: [
      ["إنتاجية أعلى", "أتمتة المهام المتكررة وتمكين فريقك."],
      ["تقليل التكاليف", "تقليل الأعمال اليدوية والتكاليف التشغيلية."],
      ["دقة أفضل", "تقليل الأخطاء البشرية بدقة الذكاء الاصطناعي."],
      ["حلول قابلة للتوسع", "تنمو أتمتتك مع نمو أعمالك."],
    ],
  },
} satisfies Record<Locale, {
  badge: string;
  headingFirst: string;
  description: string[];
  mobileDescription: string[];
  alt: string;
  benefits: readonly (readonly [string, string])[];
}>;

const benefitIcons: LucideIcon[] = [
  BarChart3,
  CircleDollarSign,
  Settings,
  UsersRound,
];

export function WhyAutomationSection({ locale }: { locale: Locale }) {
  const isArabic = locale === "ar";
  const text = copy[locale];

  return (
    <section
      className={styles.section}
      dir={isArabic ? "rtl" : "ltr"}
      aria-labelledby={`why-automation-title-${locale}`}
    >
      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <div className={styles.intro}>
            <span className={styles.badge}>
              <BarChart3 aria-hidden="true" size={18} />
              {text.badge}
            </span>
            <h2 id={`why-automation-title-${locale}`}>
              <span>{text.headingFirst}</span>
              <span>
                {isArabic ? (
                  <>
                    مع <bdi className={styles.brand} dir="ltr">ETripleSoft</bdi>؟
                  </>
                ) : (
                  <>with <em className={styles.brand}>ETripleSoft?</em></>
                )}
              </span>
            </h2>
            <p className={styles.description}>
              <span className={styles.desktopDescription}>
                {text.description.map((line) => <span key={line}>{line}</span>)}
              </span>
              <span className={styles.mobileDescription}>
                {text.mobileDescription.map((line) => <span key={line}>{line}</span>)}
              </span>
            </p>
          </div>

          <div className={styles.benefits} dir={isArabic ? "rtl" : "ltr"}>
            {text.benefits.map(([title, description], index) => {
              const Icon = benefitIcons[index];
              return (
                <article className={styles.benefit} key={title}>
                  <span className={styles.iconBox}>
                    <Icon aria-hidden="true" size={29} strokeWidth={2.4} />
                  </span>
                  <div className={styles.benefitText}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className={styles.visual}>
          <Image
            src={isArabic ? "/images/ai/why-ar.webp" : "/images/ai/why-en.webp"}
            alt={text.alt}
            width={isArabic ? 1536 : 1448}
            height={isArabic ? 1024 : 1086}
            sizes="(max-width: 900px) calc(100vw - 36px), 52vw"
            className={styles.illustration}
          />
        </div>
      </div>
    </section>
  );
}
