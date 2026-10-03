import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./careers-reference.module.css";

type CareersFeatureCardsProps = { locale: "en" | "ar" };

function FeatureLink({ href, children, locale }: { href: string; children: React.ReactNode; locale: "en" | "ar" }) {
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <Link href={href} className={styles.featureButton}>
      <span>{children}</span>
      <Arrow className={styles.featureArrow} size={20} aria-hidden="true" />
    </Link>
  );
}

function CareersCard({ locale }: CareersFeatureCardsProps) {
  const isArabic = locale === "ar";

  return (
    <article className={`${styles.featureCard} ${styles.featureCareer}`}>
      <div className={styles.featureArtwork} aria-hidden="true">
        <Image
          src={isArabic ? "/images/careers/02-image-ar-right.webp" : "/images/careers/02-image-en-left.webp"}
          alt=""
          fill
          sizes="(max-width: 760px) 65vw, (max-width: 900px) 62vw, 32vw"
        />
      </div>
      <div className={styles.featureCopy}>
        <p className={styles.featureEyebrow}>{isArabic ? "فرص العمل في إي تريبل سوفت" : "Careers at ETripleSoft"}</p>
        <h2 className={styles.featureCareerTitle}>
          {isArabic ? <><span>أشخاص.</span><span>هدف.</span><span className={styles.gradientText}>تقدّم.</span></> : <><span>People.</span><span>Purpose.</span><span className={styles.gradientText}>Progress.</span></>}
        </h2>
        <p className={styles.featureDescription}>
          {isArabic
            ? "تعرّف على الفريق وبيئة العمل التي تقف وراء حلولنا الرقمية في المنطقة."
            : "Learn about the team and the work behind our regional digital solutions."}
        </p>
        <FeatureLink href="#open-positions" locale={locale}>
          {isArabic ? "استعرض الوظائف المتاحة" : "See Open Roles"}
        </FeatureLink>
      </div>
    </article>
  );
}

function CultureCard({ locale }: CareersFeatureCardsProps) {
  const isArabic = locale === "ar";

  return (
    <article className={`${styles.featureCard} ${styles.featureCulture}`}>
      <div className={styles.featureArtwork} aria-hidden="true">
        <Image
          src={isArabic ? "/images/careers/02-image-ar-left.webp" : "/images/careers/02-image-en-right.webp"}
          alt=""
          fill
          sizes="(max-width: 760px) 65vw, (max-width: 900px) 62vw, 32vw"
        />
      </div>
      <div className={styles.featureCopy}>
        <p className={styles.featureEyebrow}>{isArabic ? "الحياة في إي تريبل سوفت" : "Life at ETripleSoft"}</p>
        <h2 className={styles.featureCultureTitle}>
          {isArabic ? "ثقافتنا" : <>Our <span className={styles.gradientText}>Culture</span></>}
        </h2>
        <p className={styles.featureDescription}>
          {isArabic
            ? "اكتشف الخدمات والمواقع والأشخاص الذين يشكلون عملنا في جميع أنحاء المنطقة."
            : "Explore the services, locations and people that shape our work across the region."}
        </p>
        <FeatureLink href={isArabic ? "/ar/about-us" : "/about"} locale={locale}>
          {isArabic ? "تعرّف على إي تريبل سوفت" : "About ETripleSoft"}
        </FeatureLink>
      </div>
    </article>
  );
}

export function CareersFeatureCards({ locale }: CareersFeatureCardsProps) {
  const cards = locale === "ar"
    ? <><CultureCard locale={locale} /><CareersCard locale={locale} /></>
    : <><CareersCard locale={locale} /><CultureCard locale={locale} /></>;

  return (
    <section id="life-at-etriplesoft" className={styles.featureSection} aria-label={locale === "ar" ? "الحياة في إي تريبل سوفت" : "Life at ETripleSoft"}>
      <div className={styles.featureGrid} dir={locale === "ar" ? "rtl" : "ltr"}>
        {cards}
      </div>
    </section>
  );
}
