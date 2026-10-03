import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./CloudSolutionsSection.module.css";

type Locale = "en" | "ar";

const content = {
  en: {
    eyebrow: "Our solutions",
    title: "Complete Cloud Security for a Stronger Tomorrow",
    description:
      "Modern security for modern businesses. Integrated, scalable and built for growth.",
    consultation: "Book a Free Consultation",
    consultationHref: "/book-consultation",
    more: "Learn More",
    contact: "/contact?service=Cloud%20Security",
    cards: [
      ["Microsoft 365", "Secure collaboration and productivity.", "microsoft"],
      ["Azure", "Cloud security and governance.", "azure"],
      ["Identity & Access", "Right access, greater control.", "identity"],
      ["Endpoint Protection", "Devices secure. Teams productive.", "endpoint"],
      ["Backup & Recovery", "Your data. Always available.", "backup"],
      ["Compliance", "Meet today’s requirements.", "compliance"],
    ],
  },
  ar: {
    eyebrow: "حلولنا",
    title: "أمن سحابي متكامل من أجل غد أكثر قوة",
    description:
      "حماية عصرية للشركات العصرية. حلول متكاملة وقابلة للتوسع ومصممة لنمو أعمالك.",
    consultation: "احجز استشارة مجانية",
    consultationHref: "/ar/book-consultation",
    more: "اعرف المزيد",
    contact: "/ar/contact-us?service=السحابة%20والأمن",
    cards: [
      ["Microsoft 365", "تعاون آمن وإنتاجية أعلى لفريقك.", "microsoft"],
      ["Azure", "أمان سحابي وحوكمة متقدمة.", "azure"],
      ["الهوية وإدارة الوصول", "الوصول الصحيح لمن يستحقه، وتحكم أكبر.", "identity"],
      ["حماية الأجهزة الطرفية", "أجهزة أكثر أمانًا. فرق أكثر إنتاجية.", "endpoint"],
      ["النسخ الاحتياطي والتعافي", "بياناتك دائمًا متاحة وآمنة.", "backup"],
      ["الامتثال والحوكمة", "تلبية متطلبات اليوم بكل ثقة.", "compliance"],
    ],
  },
} as const;

export function CloudSolutionsSection({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const isArabic = locale === "ar";
  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section
      className={styles.section}
      id="solutions"
      aria-labelledby={`cloud-solutions-title-${locale}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className={styles.shield} aria-hidden="true">
        <svg viewBox="0 0 180 210">
          <path d="M90 8c21 15 45 25 72 29v54c0 50-25 86-72 111C43 177 18 141 18 91V37C45 33 69 23 90 8Z" />
          <path d="M90 27c17 12 35 20 55 24v41c0 39-18 68-55 90-37-22-55-51-55-90V51c20-4 38-12 55-24Z" />
          <path className={styles.cloud} d="M61 105c0-11 9-20 20-20 4-14 24-17 33-6 13-2 24 8 24 21 0 12-9 21-21 21H80c-11 0-19-7-19-16Z" />
        </svg>
      </div>
      <div className={styles.dots} aria-hidden="true" />

      <header className={styles.header}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>{copy.eyebrow}</span>
          <h2 id={`cloud-solutions-title-${locale}`}>
            {isArabic ? copy.title : <>Complete Cloud Security for<br />a Stronger Tomorrow</>}
          </h2>
          <p>{copy.description}</p>
        </div>
        <Link className={styles.consultation} href={copy.consultationHref}>
          <span>{copy.consultation}</span>
          <Arrow aria-hidden="true" />
        </Link>
      </header>

      <div className={styles.grid}>
        {copy.cards.map(([title, description, icon], index) => (
          <Link
            className={styles.card}
            key={title}
            href={`${copy.contact}&solution=${encodeURIComponent(title)}`}
          >
            <div className={`${styles.icon} ${styles[`icon${index + 1}`]}`}>
              <Image
                src={`/images/cloud/reference/${icon}.webp`}
                alt=""
                width={72}
                height={72}
              />
            </div>
            <div className={styles.cardCopy}>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className={styles.cardActions}>
                <span className={styles.more} aria-hidden="true">
                  <span>{copy.more}</span>
                  <Arrow aria-hidden="true" />
                </span>
                <span className={styles.arrowButton} aria-hidden="true">
                  <Arrow aria-hidden="true" />
                </span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
