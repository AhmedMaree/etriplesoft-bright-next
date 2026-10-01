import { JsonLd } from "@/components/json-ld";
import { faqJsonLd } from "@/lib/seo";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { CTA } from "@/components/site";
import { company } from "@/lib/company";
import { arIndustryData } from "@/data/industries-ar";
import type { IndustryPageData, IndustrySlug } from "@/data/industries/types";
import { industryHubItems } from "@/data/industries/hub";
import { arIndustryHubContent, arIndustryNames } from "@/i18n/ar-routes";
import styles from "@/components/industries/industries.module.css";

const arModuleLinks: Record<string, string> = {
  "المشروعات (Project)": "/ar/odoo",
  "المحاسبة (Accounting)": "/ar/odoo/accounting",
  "المشتريات (Purchase)": "/ar/odoo",
  "المخزون (Inventory)": "/ar/odoo",
  "المبيعات (Sales)": "/ar/odoo",
  "إدارة علاقات العملاء (CRM)": "/ar/odoo",
  "نقاط البيع (POS)": "/ar/odoo",
  "نقاط البيع والمطاعم (POS)": "/ar/odoo",
  "خدمة العملاء والدعم (Helpdesk)": "/ar/odoo/itsm-helpdesk",
  "الدعم الفني والخدمة (Helpdesk)": "/ar/odoo/itsm-helpdesk",
  "الدعم والخدمة (Helpdesk)": "/ar/odoo/itsm-helpdesk",
  "الموارد البشرية والرواتب (HR)": "/ar/odoo/hr-payroll",
  "الموارد البشرية (HR)": "/ar/odoo/hr-payroll",
  "لوحات المعلومات (Dashboard)": "/ar/odoo/dashboard-insights",
  "الخدمة الميدانية (Field Service)": "/ar/odoo",
  "الصيانة (Maintenance)": "/ar/odoo",
  "التصنيع (Manufacturing)": "/ar/odoo",
};

function SectionIntro({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.sectionIntro}>
      <span>{label}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export function ArabicIndustriesPage() {
  return (
    <main id="main" className={`${styles.page} ${styles.hubPage}`} dir="rtl">
      <section className={styles.hubHero} aria-labelledby="ar-industries-title">
        <div className="container">
          <span className={styles.eyebrow}>القطاعات</span>
          <h1 id="ar-industries-title">أودو مصمم وفق طريقة عمل قطاعك</h1>
          <p>
            تصبح التكنولوجيا مفيدة عندما تراعي نقاط التسليم الفعلية بين الفرق.
            استكشف التحديات التشغيلية وقدرات أودو ومسارات العمل التي نراجعها عبر
            قطاعات متعددة.
          </p>
        </div>
      </section>

      <section className={styles.hubIntro} aria-labelledby="ar-hub-intro-title">
        <div className="container">
          <div>
            <h2 id="ar-hub-intro-title">ابدأ بسير العمل، ثم اختر التطبيقات</h2>
            <p>
              يبدأ كل تنفيذ برسم السجلات والقرارات والموافقات والاستثناءات.
              قائمة التطبيقات نقطة بداية؛ ويحدد الاكتشاف الإعدادات والتكاملات
              وأي إضافات مبررة بعناية.
            </p>
          </div>
          <nav className={styles.quickNav} aria-label="القطاعات في هذه الصفحة">
            {industryHubItems.map((industry) => (
              <a key={industry.id} href={`#${industry.id}`}>
                {arIndustryNames[industry.id] || industry.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className={styles.hubIndustries}>
        {industryHubItems.map((industry, index) => {
          const copy = arIndustryHubContent[industry.id] || {
            challenge: industry.challenge,
            capabilities: industry.capabilities,
            improvement: industry.improvement,
            modules: industry.modules,
          };
          const name = arIndustryNames[industry.id] || industry.name;
          return (
            <section
              id={industry.id}
              className={styles.hubIndustry}
              key={industry.id}
            >
              <div className={`container ${styles.hubIndustryGrid}`}>
                <div className={styles.hubIndustryTitle}>
                  <span aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2>{name}</h2>
                </div>
                <div className={styles.hubIndustryBody}>
                  <div className={styles.challenge}>
                    <h3>التحدي التشغيلي</h3>
                    <p>{copy.challenge}</p>
                  </div>
                  <div className={styles.capabilityBlock}>
                    <h3>قدرات أودو ذات الصلة</h3>
                    <ul>
                      {copy.capabilities.map((capability) => (
                        <li key={capability}>
                          <Check aria-hidden="true" size={17} />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.improvement}>
                    <h3>كيف يصبح سير العمل</h3>
                    <p>{copy.improvement}</p>
                  </div>
                  <div className={styles.hubModules}>
                    <h3>تطبيقات أودو ذات الصلة</h3>
                    <ul>
                      {copy.modules.map((module) => (
                        <li key={module}>{module}</li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    className={styles.industryLink}
                    href={`/ar/industries/${industry.id}`}
                  >
                    استكشف حلول {name}
                    <ArrowLeft aria-hidden="true" size={17} />
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className={styles.notListed}>
        <div className="container">
          <div>
            <span className={styles.eyebrow}>نشاطك</span>
            <h2>هل يختلف نموذج عملك؟</h2>
          </div>
          <p>
            شاركنا سير العمل الذي ترغب في تحسينه. سنراجع ملاءمة تطبيقات أودو
            القياسية، ومواضع التكامل المناسبة، وما ينبغي أن يبقى ضمن نظام متخصص.
          </p>
          <Link className={styles.secondaryButton} href="/ar/contact-us">
            ناقش احتياجات قطاعك <ArrowLeft aria-hidden="true" size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export function ArabicIndustryDetailPage({ slug }: { slug: string }) {
  const data: IndustryPageData | undefined =
    arIndustryData[slug as IndustrySlug];

  if (!data) {
    const fallbackItem = industryHubItems.find((item) => item.id === slug);
    if (!fallbackItem) return null;
    const name = arIndustryNames[slug] || fallbackItem.name;
    const copy = arIndustryHubContent[slug];

    return (
      <main id="main" className={styles.page} dir="rtl">
        <section className={styles.hero} aria-labelledby="industry-title">
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <span className={styles.eyebrow}>حلول أودو حسب القطاع</span>
                <h1 id="industry-title">أودو لقطاع {name}</h1>
                <p>{copy?.challenge || fallbackItem.challenge}</p>
                <div className={styles.heroActions}>
                  <Link
                    className={styles.primaryButton}
                    href={`/ar/contact-us?service=${encodeURIComponent(`${name} أودو`)}`}
                  >
                    ناقش سير العمل <ArrowLeft aria-hidden="true" size={18} />
                  </Link>
                  <Link className={styles.secondaryButton} href="#problems">
                    استكشف النهج
                  </Link>
                </div>
              </div>
              <aside
                className={styles.heroPanel}
                aria-label={`أولويات قطاع ${name}`}
              >
                <span>محاور تشغيلية</span>
                <ul>
                  {(copy?.capabilities || fallbackItem.capabilities).map(
                    (item) => (
                      <li key={item}>
                        <Check aria-hidden="true" size={18} />
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </aside>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main id="main" className={styles.page} dir="rtl">
      <JsonLd data={faqJsonLd(data.faqs)} />

      {/* Hero Section */}
      <section className={styles.hero} aria-labelledby="industry-title">
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className={styles.eyebrow}>{data.eyebrow}</span>
              <h1 id="industry-title">{data.heroTitle}</h1>
              <p>{data.heroDescription}</p>
              <div className={styles.heroActions}>
                <Link
                  className={styles.primaryButton}
                  href={`/ar/contact-us?service=${encodeURIComponent(`${data.name} أودو`)}`}
                >
                  ناقش مسار عملك <ArrowLeft aria-hidden="true" size={18} />
                </Link>
                <Link className={styles.secondaryButton} href="#problems">
                  استكشف النهج
                </Link>
              </div>
            </div>
            <aside
              className={styles.heroPanel}
              aria-label={`أولويات ${data.name}`}
            >
              <span>التركيز التشغيلي</span>
              <ul>
                {data.heroHighlights.map((highlight) => (
                  <li key={highlight}>
                    <Check aria-hidden="true" size={18} />
                    {highlight}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className={styles.section}>
        <div className="container">
          <SectionIntro
            label="تحديات القطاع"
            title={`أين تفقد عمليات ${data.name} ترابطها واستمراريتها`}
            description={data.problemsIntro}
          />
          <div className={styles.problemGrid}>
            {data.problems.map((item) => (
              <article key={item.title} className={styles.problemItem}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className={`${styles.section} ${styles.softSection}`}>
        <div className="container">
          <SectionIntro
            label="كيف تعالج ETripleSoft وأودو هذه التحديات"
            title="ربط نقاط التسليم والسجلات ومسارات الموافقة"
            description={data.solutionIntro}
          />
          <div className={styles.solutionGrid}>
            {data.solutions.map((item) => (
              <article key={item.title} className={styles.solutionCard}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Modules Section */}
      <section className={`${styles.section} ${styles.compactSection}`}>
        <div className={`container ${styles.moduleLayout}`}>
          <SectionIntro
            label="التطبيقات ذات الصلة"
            title="تطبيقات أودو القياسية المختارة لسير العمل"
            description="تُحدد الحزمة النهائية بعد جلسات الاكتشاف؛ نقوم بتهيئة التطبيقات التي تدعم نموذج التشغيل المتفق عليه فقط."
          />
          <ul
            className={styles.moduleList}
            aria-label={`تطبيقات أودو ذات الصلة بقطاع ${data.name}`}
          >
            {data.modules.map((module) => {
              const href = module.href ?? arModuleLinks[module.name];
              return (
                <li key={module.name}>
                  {href ? <Link href={href}>{module.name}</Link> : module.name}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Workflow Section */}
      <section className={`${styles.section} ${styles.workflowSection}`}>
        <div className="container">
          <SectionIntro
            label="سير العمل النموذجي"
            title="مسار تشغيلي مترابط"
            description={data.workflowIntro}
          />
          <ol className={styles.workflow}>
            {data.workflow.map((step, index) => (
              <li key={step.title}>
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Integrations Section */}
      <section className={styles.section}>
        <div className="container">
          <SectionIntro
            label="التكاملات"
            title="ربط الأنظمة المحيطة ببيئة أودو"
            description={data.integrationsIntro}
          />
          <div className={styles.openGrid}>
            {data.integrations.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Considerations Section */}
      <section className={`${styles.section} ${styles.softSection}`}>
        <div className="container">
          <SectionIntro
            label="المتطلبات الإقليمية"
            title="مهيأ للعمل في مصر والمملكة العربية السعودية والإمارات"
            description={data.regionalIntro}
          />
          <div className={styles.openGrid}>
            {data.regionalConsiderations.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Approach Section */}
      <section className={styles.section}>
        <div className="container">
          <SectionIntro
            label="منهجية التنفيذ"
            title="الانتقال من مرحلة الاكتشاف إلى التشغيل المدعوم"
            description={data.implementationIntro}
          />
          <ol className={styles.implementation}>
            {data.implementation.map((step, index) => (
              <li key={step.title}>
                <span>{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${styles.section} ${styles.faqSection}`}>
        <div className={`container ${styles.faqLayout}`}>
          <SectionIntro
            label="الأسئلة الشائعة"
            title={`أسئلة شائعة حول أودو لقطاع ${data.name}`}
            description="تعتمد الإجابات على النطاق والأنظمة القائمة ونموذج التشغيل؛ وتُراجع هذه النقاط وتتضح بالتفصيل أثناء مرحلة الاكتشاف."
          />
          <div className={styles.faqList}>
            {data.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CTA
        title={data.cta.title}
        description={data.cta.description}
        button={data.cta.button}
        href={`/ar/contact-us?service=${encodeURIComponent(`${data.name} أودو`)}`}
        secondary={{
          label: "تواصل عبر واتساب",
          href: company.whatsappUrl,
          external: true,
        }}
        badge="جاهز للانطلاق؟"
        perks={[
          "استشارة مجانية",
          "حلول مخصصة لقطاعك",
          "دون التزام أو ضغوط",
        ]}
      />
    </main>
  );
}
