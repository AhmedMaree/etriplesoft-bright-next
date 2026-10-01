import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, FileUp, MapPin, Play } from "lucide-react";
import styles from "../careers-reference.module.css";
import { mailto } from "@/lib/company";
import { CareersJobsEmbed } from "../careers-jobs-embed";

const values = [
  ["عمل يمتد عبر المنطقة", "ساهم في بناء حلول رقمية لشركات في مصر والإمارات والسعودية."],
  ["تقنيات مترابطة", "اعمل على أودو والحوسبة السحابية والذكاء الاصطناعي والويب والتسويق الرقمي."],
  ["حلول عملية للمشكلات", "ساعد الفرق على ربط عملياتها وأنظمتها وعملائها."],
  ["دعم طويل الأمد", "شارك في أعمال تمتد من التنفيذ والتدريب إلى الدعم."],
];
const locations = ["القاهرة، مصر", "الرياض، المملكة العربية السعودية", "دبي، الإمارات"];
const stats = [["250+", "مشروعاً منجزاً"], ["3", "مكاتب إقليمية"], ["8+", "سنوات من الخبرة"], ["6", "قطاعات نخدمها"]];

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
      <div className={styles.heroPhoto}><Image src="/images/careers/team-generated.webp" alt="فريق يتعاون على مشروع في مساحة عمل مضيئة" fill sizes="100vw" priority /></div>
      <div className={styles.container}><div className={styles.heroCopy}>
        <p className={styles.eyebrow}>ابنِ مستقبلاً أكثر إشراقاً مع ETripleSoft</p>
        <h1 id="careers-title">الوظائف</h1>
        <h2>أشخاص متميزون يبنون تقنيات متميزة</h2>
        <p className={styles.heroDescription}>في ETripleSoft، نحن أكثر من شركة تقنية؛ نحن فريق من أصحاب الخبرة والمبادرة يعمل على بناء حلول رقمية تُحدث أثراً عملياً.</p>
        <div className={styles.actions}><Action href={cvHref}>أرسل سيرتك الذاتية</Action><Link href="#life-at-etriplesoft" className={`${styles.button} ${styles.whiteButton}`}><span className={styles.play}><Play size={13} fill="currentColor" aria-hidden="true" /></span>الحياة في ETripleSoft</Link></div>
        <dl className={styles.stats}>{stats.map(([value, label]) => <div key={label}><dt>{value}</dt><dd>{label}</dd></div>)}</dl>
      </div></div>
    </section>

    <section className={styles.section} aria-labelledby="why-work-title"><div className={`${styles.container} ${styles.valuesLayout}`}>
      <div className={styles.intro}><p className={styles.eyebrow}>بيئة العمل</p><h2 id="why-work-title">لماذا تعمل معنا؟</h2><p>استكشف مجالات العمل في أودو والسحابة والأمن والأتمتة وتطوير الويب والجوال والتسويق الرقمي.</p><Action href="/ar/about-us" light>قصتنا</Action></div>
      <div className={styles.valuesGrid}>{values.map(([title, description], i) => <article className={styles.valueCard} key={title}><ArtworkIcon type="value" index={i} /><h3>{title}</h3><p>{description}</p></article>)}</div>
    </div></section>

    <section id="life-at-etriplesoft" className={styles.section} aria-label="الحياة في ETripleSoft"><div className={`${styles.container} ${styles.cultureGrid}`}>
      <article className={`${styles.pictureCard} ${styles.purpose}`}><Image src="/images/careers/purpose-generated.webp" alt="أحد أعضاء الفريق يعمل على مكتبه" fill sizes="(max-width: 900px) 100vw, 50vw" /><div className={styles.pictureCopy}><h2>الأشخاص. الهدف.<br />التقدم.</h2><p>تعرّف على الفريق والعمل خلف حلولنا الرقمية في المنطقة.</p><Action href="#open-positions" light>استكشف فرص العمل</Action></div></article>
      <article className={`${styles.pictureCard} ${styles.culture}`}><Image src="/images/careers/culture-generated.webp" alt="مساحة استراحة مضيئة في المكتب" fill sizes="(max-width: 900px) 100vw, 50vw" /><div className={styles.pictureCopy}><p className={styles.eyebrow}>الحياة في ETripleSoft</p><h2>ثقافتنا</h2><p>استكشف الخدمات والمواقع والأشخاص الذين يشكلون عملنا في المنطقة.</p><Action href="/ar/about-us" light>عن ETripleSoft</Action></div></article>
    </div></section>

    <CareersJobsEmbed
      eyebrow="الفرص المتاحة"
      title="ابحث عن فرصتك التالية"
      description="استعرض الوظائف المتاحة وقدّم مباشرة عبر بوابة التوظيف."
      openPortalLabel="فتح بوابة التوظيف"
      iframeTitle="الوظائف المتاحة لدى ETripleSoft"
    />

    <section className={styles.section} aria-label="طرق أخرى للانضمام إلى الفريق"><div className={`${styles.container} ${styles.opportunitiesGrid}`}>
      <article className={`${styles.pictureCard} ${styles.internships}`}><Image src="/images/careers/culture-generated.webp" alt="مساحة عمل مشتركة ومضيئة" fill sizes="(max-width: 900px) 100vw, 60vw" /><div className={styles.pictureCopy}><p className={styles.eyebrow}>تعرّف على عملنا</p><h2>تعرّف على ETripleSoft</h2><p>اكتشف الخدمات والمواقع الإقليمية خلف حلولنا الرقمية.</p><Action href="/ar/about-us" light>من نحن</Action></div></article>
      <article className={styles.cvCard}><div><p className={styles.eyebrow}>لا تجد فرصة مناسبة؟</p><h2>أرسل سيرتك الذاتية</h2><p>أرسل سيرتك الذاتية إلى فريقنا، وسنتواصل معك إذا ظهرت فرصة مناسبة.</p><Action href={cvHref} light>أرسل سيرتك الذاتية</Action></div><FileUp className={styles.cvIcon} strokeWidth={1.2} aria-hidden="true" /></article>
    </div></section>

    <section className={`${styles.section} ${styles.locationsSection}`} aria-labelledby="locations-title"><div className={`${styles.container} ${styles.locationsLayout}`}><div className={styles.intro}><p className={styles.eyebrow}>مواقع عملنا</p><h2 id="locations-title">مكاتبنا</h2><p>تقع مكاتبنا في القاهرة والرياض ودبي.</p></div><div className={styles.locationsGrid}>{locations.map((location) => <article className={styles.locationCard} key={location}><div className={styles.locationVisual}><MapPin aria-hidden="true" size={28} /></div><div><h3>{location}</h3><p>مكتب إقليمي</p></div></article>)}</div></div>
      <div className={styles.container}><div className={styles.closing}><div><p className={styles.eyebrow}>مهتم بالعمل معنا؟</p><h2>شارك سيرتك الذاتية</h2><p>أرسل سيرتك الذاتية للاستفسار عن الفرص الحالية أو المستقبلية.</p></div><Action href={cvHref} light>أرسل سيرتك الذاتية</Action></div></div>
    </section>
  </main>;
}
