import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import styles from "@/components/ar/ar.module.css";
import { Breadcrumb } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { arOffices } from "@/i18n/ar";
import { company, mailto } from "@/lib/company";
import { officesJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "تواصل معنا: مكاتب في القاهرة والرياض ودبي",
  description:
    "تواصل مع ETripleSoft عبر الهاتف أو واتساب أو البريد الإلكتروني. مكاتبنا في القاهرة والرياض ودبي جاهزة لمناقشة حلول أودو والحلول الرقمية لأعمالك.",
  path: "/ar/contact-us",
});

export default function ArabicContact() {
  return (
    <main id="main">
      {officesJsonLd().map((office) => (
        <JsonLd key={office["@id"]} data={office} />
      ))}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <Breadcrumb
              label="مسار التنقل"
              items={[{ label: "الرئيسية", href: "/ar" }, { label: "تواصل معنا" }]}
            />
            <span className="eyebrow">تواصل معنا</span>
            <h1>حلولك التقنية تبدأ من هنا</h1>
            <p className={styles.lead}>
              حيث تلتقي التكنولوجيا بالخبرة. نقدم خدمات تكنولوجيا معلومات موثوقة
              وقابلة للتطوير ومبتكرة مصممة لمساعدة أعمالك على النمو والأداء
              والحفاظ على أمانها في عالم رقمي سريع التغير.
            </p>
            <div className={styles.channels}>
              <a className="button gradient" href={company.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={17} aria-hidden="true" />
                تواصل عبر واتساب
              </a>
              <a className="button secondary" href={mailto()}>
                <Mail size={17} aria-hidden="true" />
                <span dir="ltr">{company.primaryEmail}</span>
              </a>
            </div>
            <p className={styles.note}>
              لإرسال رسالة عبر النموذج، استخدم{" "}
              <a href="/contact" hrefLang="en">
                نموذج التواصل (بالإنجليزية)
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section} id="offices" aria-labelledby="ar-offices">
        <div className="container">
          <div className={styles.head}>
            <h2 id="ar-offices">مكاتبنا</h2>
          </div>
          <div className={styles.contactGrid}>
            {company.offices.map((office) => {
              const ar = arOffices[office.id];
              return (
                <article className={`${styles.panel} ${styles.office}`} key={office.id}>
                  <h3>{ar.country}</h3>
                  <address>{ar.address}</address>
                  {office.phones.map((phone) => (
                    <a href={phone.href} key={phone.href} aria-label={`اتصل بمكتب ${ar.city}: ${phone.display}`}>
                      <Phone size={16} aria-hidden="true" />
                      <span dir="ltr">{phone.display}</span>
                    </a>
                  ))}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
