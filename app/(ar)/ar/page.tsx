import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArticleCards } from "@/components/ar/ArticleCards";
import styles from "@/components/ar/ar.module.css";
import { ClientLogos } from "@/components/home/ClientLogos";
import { JsonLd } from "@/components/json-ld";
import { CTA } from "@/components/site";
import { arCta } from "@/i18n/ar";
import { company } from "@/lib/company";
import { organizationGraphJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "شريك أودو الذهبي في مصر والإمارات والسعودية | ETripleSoft",
  absoluteTitle: true,
  description:
    "ETripleSoft شريك أودو الذهبي: حلول ERP والسحابة والذكاء الاصطناعي وتطوير المواقع والتطبيقات والتسويق الرقمي للشركات في مصر والإمارات والسعودية.",
  path: "/ar",
});

const services = [
  {
    title: "أنظمة إدارة الموارد (ERP)",
    text: "إدارة متكاملة لكافة عملياتك الإدارية والمالية.",
    href: "/odoo",
  },
  {
    title: "الحلول السحابية والأمن السيبراني",
    text: "حماية بياناتك وضمان استمرارية أعمالك في بيئة سحابية آمنة.",
    href: "/cloud",
  },
  {
    title: "أتمتة العمليات والذكاء الاصطناعي",
    text: "رفع كفاءة التشغيل عبر حلول الأتمتة الذكية.",
    href: "/ai",
  },
  {
    title: "خدمات التسويق الرقمي",
    text: "تعزيز تواجدك الرقمي والوصول بفعالية لجمهورك المستهدف.",
    href: "/digital-marketing",
  },
  {
    title: "خدمات المواقع الإلكترونية",
    text: "تطوير واجهات رقمية احترافية تعكس هوية مؤسستك.",
    href: "/web",
  },
  {
    title: "خدمات تطبيقات الجوال",
    text: "حلول برمجية مبتكرة لتطبيقات الهواتف الذكية.",
    href: "/mobile",
  },
];

export default function ArabicHome() {
  return (
    <main id="main">
      <JsonLd data={organizationGraphJsonLd()} />
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <span className="eyebrow">شريك أودو الذهبي · مصر · الإمارات · السعودية</span>
            <h1>التكنولوجيا التي تدعم نمو أعمالك</h1>
            <p className={styles.lead}>
              نحن متخصصون في حلول البرمجيات المصممة خصيصًا لمعالجة تحديات أعمالك
              الفريدة.
            </p>
            <div className={styles.actions}>
              <Link className="button gradient" href={arCta.primaryHref} prefetch={false}>
                {arCta.primary}
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link className="button secondary" href="/ar/about-us" prefetch={false}>
                تعرّف علينا
              </Link>
            </div>
            <div className={styles.badges}>
              <Image
                src="/images/odoo/odoo-gold-partner.webp"
                alt="شريك أودو الذهبي"
                width={435}
                height={218}
                sizes="112px"
              />
              <Image
                src="/images/odoo/microsoft-certified-partner.webp"
                alt="شريك مايكروسوفت"
                width={960}
                height={231}
                sizes="180px"
              />
            </div>
          </div>
        </div>
      </section>

      <ClientLogos title="العلامات التجارية الرائدة تثق بنا" />

      <section className={`${styles.section} ${styles.tinted}`} aria-labelledby="ar-services">
        <div className="container">
          <div className={styles.head}>
            <span className="eyebrow">خدماتنا</span>
            <h2 id="ar-services">حلول رقمية متكاملة تمكّن أعمالك</h2>
            <p>
              نقدم مجموعة شاملة من الحلول الرقمية المصممة لتمكين أعمالك، من أنظمة
              تخطيط موارد المؤسسات إلى المواقع والتطبيقات والتسويق الرقمي. صفحات
              الخدمات التفصيلية متاحة حاليًا بالإنجليزية.
            </p>
          </div>
          <ul className={styles.cards}>
            {services.map((service) => (
              <li className={styles.card} key={service.href}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a className={styles.cardLink} href={service.href} hrefLang="en">
                  معرفة المزيد (بالإنجليزية)
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="ar-why">
        <div className="container">
          <div className={styles.split}>
            <div className={styles.panel}>
              <h3 id="ar-why">تحويل رؤيتكم إلى واقع رقمي</h3>
              <p>
                نحن لا نكتفي بإنشاء البرامج فحسب، بل نتشارك معك لفهم رؤيتك
                وتحويلها إلى واقع. ستحصل على أكثر من مجرد حل، ستحصل على شريك
                موثوق به ملتزم بنقل أعمالك إلى آفاق جديدة.
              </p>
            </div>
            <div className={styles.panel}>
              <h3>شريك أودو الذهبي</h3>
              <p>
                نقدم حلول تخطيط موارد المؤسسات (ERP) ذكية وقابلة للتطوير مصممة
                خصيصًا لنجاح أعمالك، مع فريق في القاهرة والرياض ودبي.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.tinted}`} aria-labelledby="ar-blog">
        <div className="container">
          <div className={styles.head}>
            <span className="eyebrow">المدونة</span>
            <h2 id="ar-blog">أحدث المقالات</h2>
            <p>أدلة عملية عن أودو والأمن السيبراني للشركات في مصر والخليج.</p>
          </div>
          <ArticleCards />
        </div>
      </section>

      <CTA
        title="جاهز لتطوير أعمالك؟"
        description="أخبرنا أين تبطئك عملياتك اليوم، وسنحدد معك الخطوات الأولى دون التزام."
        button={arCta.primary}
        href={arCta.primaryHref}
        secondary={{ label: arCta.whatsapp, href: company.whatsappUrl, external: true }}
        note={arCta.note}
      />
    </main>
  );
}
