import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarCheck, ClipboardList, MonitorPlay, Route } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FaqAccordion } from "@/components/faq-accordion";
import { ClientLogos } from "@/components/home/ClientLogos";
import { company, primaryPhone } from "@/lib/company";
import { arOdooContent } from "@/i18n/ar-routes";
import styles from "@/components/demo/demo.module.css";

const steps = [
  { icon: ClipboardList, title: "أخبرنا عن نشاطك", text: "شاركنا مجال عملك وطريقة العمل الحالية وما ترغب في استكشافه." },
  { icon: CalendarCheck, title: "ننسق موعداً مناسباً", text: "يتواصل معك أحد أعضاء الفريق للاتفاق على موعد يناسبك ويناسب المشاركين." },
  { icon: MonitorPlay, title: "استكشف أودو ضمن إجراءاتك", text: "نستعرض التطبيقات الأقرب لاحتياجاتك بأمثلة مرتبطة بسير عملك، لا بعرض عام." },
  { icon: Route, title: "حدد الخطوة التالية", text: "تخرج بصورة أوضح عن الملاءمة ونطاق المشروع المحتمل، دون التزام." },
];

const faqs = [
  { question: "هل العرض التوضيحي مجاني؟", answer: "نعم، العرض التوضيحي مجاني ولا يلزمك بمتابعة المشروع." },
  { question: "ما الفرق بين العرض التوضيحي والاستشارة؟", answer: "يعرض التوضيحي أودو ضمن إجراءات شبيهة بإجراءاتك، بينما تناقش الاستشارة أهدافك ونطاق العمل وطريقة تنفيذ المشروع. يمكنك البدء بأي منهما." },
  { question: "من الأفضل أن يشارك في العرض؟", answer: "من المفيد مشاركة ممثلين عن الفرق التي ستستخدم النظام يومياً، مثل المالية أو العمليات أو الموارد البشرية، إلى جانب أصحاب القرار." },
  { question: "هل يمكن تخصيص العرض لقطاعي؟", answer: "نهيئ العرض وفق المعلومات التي تشاركها معنا. اختر المجال الأقرب لاهتمامك في النموذج واشرح طبيعة نشاطك." },
];

const areas = ["implementation", "accounting", "hr-payroll", "itsm-helpdesk", "dashboard-insights"] as const;

export function ArabicDemoPage() {
  return <main id="main" dir="rtl">
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.copy}>
            <span className="eyebrow">عرض توضيحي مجاني لأودو</span>
            <h1>شاهد أودو ضمن إجراءات عملك</h1>
            <p className={styles.lead}>جولة إرشادية تناسب نشاطك، يقدمها فريق تنفيذ أودو في مصر والسعودية والإمارات.</p>
            <h2 className={styles.stepsHeading}>كيف يسير العرض؟</h2>
            <ol className={styles.steps}>{steps.map(({ icon: Icon, title, text }, index) => <li key={title}>
              <span className={styles.stepIcon} aria-hidden="true"><Icon size={20} /></span>
              <div><h3 className={styles.stepTitle}><span className={styles.stepNumber}>{index + 1}.</span> {title}</h3><p>{text}</p></div>
            </li>)}</ol>
            <div className={styles.trust}>
              <Image src="/images/odoo/odoo-gold-partner.webp" alt="شريك أودو الذهبي" width={435} height={218} sizes="112px" />
              <p>تفضل الحديث أولاً؟ اتصل بنا على <a href={primaryPhone.href} dir="ltr">{primaryPhone.display}</a> أو <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer">راسلنا عبر واتساب</a>.</p>
            </div>
          </div>
          <div className={styles.formCol}><ContactForm locale="ar" demo /></div>
        </div>
      </div>
    </section>

    <section className={styles.section} aria-labelledby="ar-demo-showcase">
      <div className="container">
        <div className={styles.head}><span className="eyebrow">مجالات العرض</span><h2 id="ar-demo-showcase">اختر المجال الأهم لعملك</h2><p>نبدأ من الإجراء الذي تريد تحسينه، ثم نوضح كيف ترتبط به بقية تطبيقات أودو.</p></div>
        <ul className={styles.showcase}>{areas.map((key) => <li key={key}><Link href={`/ar/odoo/${key}`}>{arOdooContent[key].title}<ArrowLeft size={16} aria-hidden="true" /></Link></li>)}</ul>
      </div>
    </section>
    <ClientLogos title="شركات تثق بخبراتنا" />
    <section className={`${styles.section} ${styles.tinted}`} aria-labelledby="ar-demo-faq">
      <div className="container"><div className={styles.faqWrap}><h2 id="ar-demo-faq">أسئلة عن العرض التوضيحي</h2><FaqAccordion items={faqs} idPrefix="ar-demo-faq" /></div></div>
    </section>
  </main>;
}
