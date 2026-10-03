import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Building2, FileText, FileUp, MapPin, Play, Users } from "lucide-react";
import styles from "../careers-reference.module.css";
import { mailto } from "@/lib/company";
import { CareersJobsEmbed } from "../careers-jobs-embed";
import { CareersFeatureCards } from "../careers-feature-cards";
import { CareersLocations } from "../careers-locations";

const values = [
  ["عمل يمتد عبر المنطقة", "ساهم في بناء حلول رقمية لشركات في مصر والإمارات والسعودية."],
  ["تقنيات مترابطة", "اعمل على أودو والحوسبة السحابية والذكاء الاصطناعي والويب والتسويق الرقمي."],
  ["حلول عملية للمشكلات", "ساعد الفرق على ربط عملياتها وأنظمتها وعملائها."],
  ["دعم طويل الأمد", "شارك في أعمال تمتد من التنفيذ والتدريب إلى الدعم."],
];
const stats = [
  { value: "250+", label: "مشروع مكتمل", Icon: FileText, tone: "blue" },
  { value: "3", label: "مكاتب إقليمية", Icon: MapPin, tone: "violet" },
  { value: "8+", label: "سنوات من الخبرة", Icon: Users, tone: "green" },
  { value: "6", label: "قطاعات نخدمها", Icon: Building2, tone: "orange" },
];

function Action({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return <Link href={href} className={`${styles.button} ${light ? styles.lightButton : ""}`}>{children}<ArrowLeft size={19} aria-hidden="true" /></Link>;
}

function ArtworkIcon({ type, index }: { type: string; index: number }) {
  return <Image src={`/images/careers/${type}-${index}.webp`} alt="" width={128} height={128} className={styles.artworkIcon} sizes="80px" />;
}

export function ArabicCareersPage() {
  const cvHref = mailto("طلب توظيف");

  return <main id="main" className={styles.page} dir="rtl">
    <section className={styles.hero} aria-labelledby="careers-title">
      <div className={styles.container + " " + styles.heroInner}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>ابنِ مستقبلاً أكثر إشراقاً مع إي تريبل سوفت</p>
          <h1 id="careers-title" className={styles.careerTitle}>الوظائف</h1>
          <h2 className={styles.heroStatement}><span>أشخاص مميزون يصنعون</span><span>تقنية عظيمة.</span></h2>
          <p className={styles.heroDescription}>في إي تريبل سوفت، نحن أكثر من مجرد شركة تقنية — نحن فريق من أصحاب الحلول، والمبتكرين، وصناع الأثر الذين يبنون حلولاً رقمية تحدث فرقاً حقيقياً.</p>
          <div className={styles.actions}><Action href={cvHref}>أرسل سيرتك الذاتية</Action><Link href="#life-at-etriplesoft" className={styles.button + " " + styles.whiteButton}><span className={styles.play}><Play size={13} fill="currentColor" aria-hidden="true" /></span>الحياة في إي تريبل سوفت</Link></div>
          <dl className={styles.stats + " " + styles.heroStats}>{stats.map(({ value, label, Icon, tone }) => <div className={styles.statCard} key={label}>
            <span className={styles.statIcon} data-tone={tone}><Icon size={23} strokeWidth={2.2} aria-hidden="true" /></span>
            <span className={styles.statCopy}><dt>{value}</dt><dd>{label}</dd></span>
          </div>)}</dl>
        </div>
        <div className={styles.heroPhoto}><Image src="/images/careers/careers-hero-ar.webp" alt="فريق إي تريبل سوفت يتعاون حول حاسوب محمول في مكتب مضيء" fill sizes="(max-width: 760px) calc(100vw - 36px), (max-width: 1240px) 48vw, 600px" priority /></div>
      </div>
    </section>

    <section className={styles.section} aria-labelledby="why-work-title"><div className={`${styles.container} ${styles.valuesLayout}`}>
      <div className={styles.intro}><p className={styles.eyebrow}>بيئة العمل</p><h2 id="why-work-title">لماذا تعمل معنا؟</h2><p>استكشف مجالات العمل في أودو والسحابة والأمن والأتمتة وتطوير الويب والجوال والتسويق الرقمي.</p><Action href="/ar/about-us" light>قصتنا</Action></div>
      <div className={styles.valuesGrid}>{values.map(([title, description], i) => <article className={styles.valueCard} key={title}><ArtworkIcon type="value" index={i} /><h3>{title}</h3><p>{description}</p></article>)}</div>
    </div></section>

    <CareersFeatureCards locale="ar" />

    <CareersJobsEmbed
      eyebrow="الفرص المتاحة"
      title="ابحث عن فرصتك التالية"
      description="استعرض الوظائف المتاحة وقدّم مباشرة عبر بوابة التوظيف."
      openPortalLabel="فتح بوابة التوظيف"
      iframeTitle="الوظائف المتاحة لدى ETripleSoft"
    />

    <section className={styles.section} aria-label="طرق أخرى للانضمام إلى الفريق"><div className={`${styles.container} ${styles.opportunitiesGrid}`}>
      <article className={`${styles.pictureCard} ${styles.internships}`}><Image src="/images/careers/02-image-ar-left.webp" alt="ردهة مكتب ETripleSoft مع شعار الشركة ورسالتها باللغة العربية" fill sizes="(max-width: 900px) 100vw, 60vw" /><div className={styles.pictureCopy}><p className={styles.eyebrow}>تعرّف على عملنا</p><h2>تعرّف على ETripleSoft</h2><p>اكتشف الخدمات والمواقع الإقليمية خلف حلولنا الرقمية.</p><Action href="/ar/about-us" light>من نحن</Action></div></article>
      <article className={styles.cvCard}><div><p className={styles.eyebrow}>لا تجد فرصة مناسبة؟</p><h2>أرسل سيرتك الذاتية</h2><p>أرسل سيرتك الذاتية إلى فريقنا، وسنتواصل معك إذا ظهرت فرصة مناسبة.</p><Action href={cvHref} light>أرسل سيرتك الذاتية</Action></div><FileUp className={styles.cvIcon} strokeWidth={1.2} aria-hidden="true" /></article>
    </div></section>

    <section className={`${styles.section} ${styles.locationsSection}`} aria-labelledby="locations-title"><CareersLocations locale="ar" />
      <div className="container"><div className={styles.closing}><div><p className={styles.eyebrow}>مهتم بالعمل معنا؟</p><h2>شارك سيرتك الذاتية</h2><p>أرسل سيرتك الذاتية للاستفسار عن الفرص الحالية أو المستقبلية.</p></div><Action href={cvHref} light>أرسل سيرتك الذاتية</Action></div></div>
    </section>
  </main>;
}
