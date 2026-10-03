import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Rocket, UsersRound } from "lucide-react";
import styles from "./DigitalMarketingHero.module.css";

type Locale = "en" | "ar";

const content = {
  en: {
    eyebrow: "Digital marketing",
    title: ["Digital", "Marketing"],
    subtitle: "More reach. Better results.",
    description:
      "Data-driven marketing to grow your brand across Egypt, the UAE and Saudi Arabia.",
    primary: "Grow My Brand",
    secondary: "See Services",
    image: "/images/digital-marketing/hero-english.webp",
    imageAlt:
      "Digital marketing analytics showing growth in leads, traffic and conversions",
    benefits: [
      ["More", "Qualified Traffic"],
      ["Higher", "Conversions"],
      ["Stronger", "Brand Presence"],
    ],
  },
  ar: {
    eyebrow: "التسويق الرقمي",
    title: ["التسويق", "الرقمي"],
    subtitle: "مزيد من الوصول. نتائج أفضل.",
    description:
      "تسويق قائم على البيانات لتنمية علامتك التجارية في مصر والإمارات العربية المتحدة والمملكة العربية السعودية.",
    primary: "نمِّ علامتك التجارية",
    secondary: "عرض الخدمات",
    image: "/images/digital-marketing/hero-arabic.webp",
    imageAlt:
      "لوحة تحليلات للتسويق الرقمي تعرض نمو العملاء المحتملين والزيارات ومعدلات التحويل",
    benefits: [
      ["مزيد من", "الزيارات المؤهلة"],
      ["معدلات تحويل", "أعلى"],
      ["حضور أقوى", "للعلامة التجارية"],
    ],
  },
} satisfies Record<Locale, {
  eyebrow: string;
  title: [string, string];
  subtitle: string;
  description: string;
  primary: string;
  secondary: string;
  image: string;
  imageAlt: string;
  benefits: [string, string][];
}>;

export function DigitalMarketingHero({ locale }: { locale: Locale }) {
  const isArabic = locale === "ar";
  const copy = content[locale];
  // The Arabic layout globally mirrors ArrowRight so it points left in RTL.
  const Arrow = ArrowRight;

  return (
    <section
      className={`${styles.hero} ${isArabic ? styles.arabic : styles.english}`}
      lang={locale}
      dir={isArabic ? "rtl" : "ltr"}
      aria-labelledby="digital-marketing-title"
    >
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>{copy.eyebrow}</span>
          <h1 className={styles.title} id="digital-marketing-title">
            <span>{copy.title[0]}</span>
            <span>{copy.title[1]}</span>
          </h1>
          <h2 className={styles.subtitle}>{copy.subtitle}</h2>
          <p className={styles.description}>{copy.description}</p>
          <div className={styles.actions}>
            <Link className={styles.primary} href={isArabic ? "/ar/contact-us?service=التسويق%20الرقمي" : "/contact?service=Digital%20Marketing"}>
              {copy.primary}
              <Arrow aria-hidden="true" />
            </Link>
            <Link className={styles.secondary} href="#solutions">
              {copy.secondary}
              <Arrow aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className={styles.visual}>
          <Image
            src={copy.image}
            alt={copy.imageAlt}
            width={1448}
            height={1086}
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 96px), (max-width: 1439px) 54vw, 650px"
            priority
          />
        </div>

        <ul className={styles.benefits}>
          {copy.benefits.map(([lineOne, lineTwo], index) => {
            const Icon = [BarChart3, UsersRound, Rocket][index];
            return (
              <li key={lineOne}>
                <Icon aria-hidden="true" />
                <span>
                  <span>{lineOne}</span>
                  <span>{lineTwo}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
