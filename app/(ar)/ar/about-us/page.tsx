import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "@/components/ar/ar.module.css";
import { CTA } from "@/components/site";
import { arCta } from "@/i18n/ar";
import { company } from "@/lib/company";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "من نحن: فريق أودو وحلول رقمية في مصر والخليج",
  description:
    "تعرّف على ETripleSoft: فريق متخصص في حلول البرمجيات المصممة لتحديات أعمالك، بمكاتب في القاهرة والرياض ودبي وشراكة ذهبية مع أودو.",
  path: "/ar/about-us",
});

export default function ArabicAbout() {
  return (
    <main id="main">
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <span className="eyebrow">من نحن</span>
            <h1>التكنولوجيا التي تدعم نمو أعمالك</h1>
            <p className={styles.lead}>
              نحن متخصصون في حلول البرمجيات المصممة خصيصًا لتلبية تحديات أعمالكم
              الفريدة. سواءً كان الأمر يتعلق بتطوير برمجيات مخصصة، أو دمج منصات
              متعددة، أو بناء مواقع إلكترونية أو تطبيقات جوال، فإن فريقنا ملتزم
              بتحقيق نتائج ملموسة.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="ar-vision">
        <div className="container">
          <div className={styles.split}>
            <div className={styles.panel}>
              <h2 id="ar-vision" style={{ fontSize: 24, margin: "0 0 12px" }}>
                الرسالة
              </h2>
              <p>
                نُمكّن الشركات من خلال تقديم حلول مُخصصة وتقنيات متطورة تتكامل
                بسلاسة مع جميع تفاصيل العمليات التشغيلية، مع ضمان كفاءة التكلفة
                دون أي تنازلات. الأداء. الدقة. التكلفة المعقولة.
              </p>
            </div>
            <div className={styles.panel}>
              <h2 style={{ fontSize: 24, margin: "0 0 12px" }}>الرؤية</h2>
              <p>
                لإعادة تعريف مستقبل التحول الرقمي، نقدم حلول برمجية مبتكرة
                ومصممة خصيصًا لتمكين الشركات من التفوق على المنافسة، واضعين
                معايير التميز والدقة والقيمة. الابتكار. التأثير.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.tinted}`} aria-labelledby="ar-expertise">
        <div className="container">
          <div className={`${styles.head} ${styles.prose}`}>
            <span className="eyebrow">خبرتنا</span>
            <h2 id="ar-expertise">الابتكار في كل قطاع</h2>
            <p>
              بفضل سنوات من الخبرة، نتخصص في تقديم حلول تكنولوجيا المعلومات
              المخصصة للرعاية الصحية والمالية والتجزئة والعديد من القطاعات
              الصناعية الأخرى. وتغطي خدماتنا مناطق جغرافية متعددة، ما يُمكّننا
              من تقديم جودة ثابتة وخدمة موثوقة أينما يعمل عملاؤنا.
            </p>
          </div>
          <Link className="button" href="/ar/contact-us" prefetch={false}>
            مكاتبنا وطرق التواصل
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CTA
        title="لنبنِ شيئًا يدوم"
        description="تحدث مع فريقنا عن الخطوة التالية لأعمالك."
        button={arCta.primary}
        href={arCta.primaryHref}
        secondary={{ label: arCta.whatsapp, href: company.whatsappUrl, external: true }}
        note={arCta.note}
      />
    </main>
  );
}
