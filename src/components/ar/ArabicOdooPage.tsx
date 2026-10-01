import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Building2,
  Check,
  Coins,
  Database,
  GraduationCap,
  HardHat,
  Headphones,
  Network,
  Rocket,
  Settings,
  ShieldCheck,
  Star,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { FaqAccordion } from "@/components/faq-accordion";
import OdooSectionNav from "@/components/odoo/OdooSectionNav";
import styles from "@/components/odoo/OdooReferencePage.module.css";
import hub from "@/components/odoo/OdooHub.module.css";
import local from "./ArabicOdooPage.module.css";
import { arFaqs } from "./LocalizedPage";
import { arIndustryHubContent, arIndustryNames, arOdooContent } from "@/i18n/ar-routes";
import { industryHubItems } from "@/data/industries/hub";

const outcomes: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "عمليات مترابطة", description: "تعمل المالية والمبيعات والمخزون والمشروعات والموظفون على منصة واحدة بدلاً من أدوات وجداول منفصلة.", icon: Network },
  { title: "إقفال مالي أكثر سلاسة", description: "يساعد ربط المحاسبة بالمبيعات والمشتريات والمخزون على تقليل المطابقة اليدوية في نهاية الفترة.", icon: Coins },
  { title: "رؤية أوضح", description: "تستند لوحات المعلومات والتقارير إلى بيانات تشغيلية حديثة لدعم القرارات.", icon: BarChart3 },
  { title: "عمل يدوي أقل", description: "تنتقل الإدخالات المتكررة والموافقات والمتابعات إلى مسارات محددة بدلاً من ملاحقتها يدوياً.", icon: Check },
  { title: "قابلية للتوسع", description: "ابدأ بالتطبيقات التي تحتاج إليها اليوم، ثم أضف الوحدات والمستخدمين مع نمو العمليات.", icon: Rocket },
];

const processSteps = [
  ["الاكتشاف", "فهم احتياجات العمل والأهداف والتحديات."],
  ["تصميم الحل", "تخطيط حل أودو وتهيئته بما يلائم الإجراءات."],
  ["التنفيذ", "إعداد النظام والتطوير وترحيل البيانات وفق النطاق المتفق عليه."],
  ["التدريب", "تمكين الفريق بتدريب عملي يناسب أدواره."],
  ["التشغيل", "إطلاق النظام ودعم الانتقال إلى بيئة العمل الفعلية."],
  ["الدعم المستمر", "متابعة وتحسينات متفق عليها لدعم تطور العمل."],
] as const;

const modules = [
  { key: "implementation", icon: Settings },
  { key: "accounting", icon: Coins },
  { key: "hr-payroll", icon: Users },
  { key: "itsm-helpdesk", icon: Headphones },
  { key: "dashboard-insights", icon: BarChart3 },
] as const;

const industryIcons: Record<string, LucideIcon> = {
  construction: HardHat,
  "real-estate": Building2,
  "facility-management": Wrench,
  restaurants: Coins,
  education: GraduationCap,
  retail: Database,
  healthcare: ShieldCheck,
  logistics: Network,
};

const integrations = [
  ["التجارة الإلكترونية", "ربط الطلبات عبر الإنترنت بالمخزون والعملاء والمحاسبة."],
  ["بوابات الدفع", "تسجيل المدفوعات الإلكترونية ومطابقتها في أودو وفق التكامل المتاح."],
  ["البنوك", "إدخال بيانات الحسابات لدعم المطابقة المحاسبية."],
  ["واجهات الأنظمة", "ربط أودو بالأدوات والبيانات التي تستخدمها فرق العمل."],
  ["ترحيل الأنظمة الحالية", "تخطيط نقل البيانات من الأنظمة القائمة واختبارها قبل التشغيل."],
];

const localizations = [
  { name: "مصر", text: "نراجع إعداد الحسابات والضرائب والفوترة الإلكترونية التي تنطبق على نشاطك، ونؤكد النطاق والتكاملات المطلوبة خلال الاكتشاف." },
  { name: "الإمارات العربية المتحدة", text: "نحدد إعداد الكيان والضرائب والعملات والتقارير المطلوبة بالتعاون مع فريقك والمختصين المحليين." },
  { name: "المملكة العربية السعودية", text: "نراجع متطلبات الكيان والضرائب والفوترة والتقارير المنطبقة قبل الاتفاق على إعداد النظام والتكاملات." },
];

const invoiceContext = [
  ["مصر", "ترتبط متطلبات الفوترة والإيصالات الإلكترونية بمتطلبات مصلحة الضرائب المصرية والفئات المنطبقة. ويُراجع نطاق الإعداد والتكامل خلال الاكتشاف."],
  ["المملكة العربية السعودية", "تُنظم الفوترة الإلكترونية في المملكة من خلال متطلبات هيئة الزكاة والضريبة والجمارك. ويُحدد مع فريقك الإعداد الملائم لمتطلبات النشاط."],
  ["الإمارات العربية المتحدة", "يجري تطبيق الفوترة الإلكترونية في الإمارات على مراحل للمعاملات المشمولة. ويشمل الاستعداد مراجعة بيانات الفاتورة والتكامل المحاسبي والجهة المعتمدة."],
] as const;

export function ArabicOdooPage() {
  const cairoCity = "القاهرة";
  return <main id="main" dir="rtl" className={`${styles.page} ${local.rtl}`}>
    <section className={styles.hero} aria-labelledby="ar-odoo-title">
      <div className={`container ${styles.heroGrid}`}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>تنفيذ أودو ودعم الأعمال</span>
          <h1 id="ar-odoo-title">أودو ERP لأعمال مترابطة</h1>
          <p>ساعد فريقك على ربط المالية والمبيعات والمخزون والمشروعات والموظفين في منصة واحدة، مع إعداد أودو وفق إجراءات العمل واحتياجات التوسع.</p>
          <ul className={styles.checks}>
            <li><Check aria-hidden="true" />تنفيذ وفق نطاق عمل واضح</li>
            <li><Check aria-hidden="true" />تدريب ودعم مستمران وفق الاتفاق</li>
          </ul>
          <div className={styles.actions}>
            <Link className={styles.button} href="/ar/book-consultation">احجز استشارة مجانية <ArrowLeft aria-hidden="true" /></Link>
            <Link className={`${styles.button} ${styles.secondary}`} href="#solutions">استكشف وحدات أودو <ArrowLeft aria-hidden="true" /></Link>
          </div>
        </div>
        <figure className={styles.heroVisual}>
          <div className={styles.dashboardFrame}><Image className={styles.heroDashboard} src="/images/odoo/odoo-laptop-dashboard.webp" width={1408} height={875} alt="لوحة معلومات أودو على جهاز محمول" sizes="(max-width: 900px) 100vw, 50vw" /></div>
          <figcaption className={styles.heroCaption}>منصة موحدة لإجراءات العمل</figcaption>
        </figure>
      </div>
    </section>

    <OdooSectionNav locale="ar" />

    <section className={styles.section} id="outcomes" aria-labelledby="ar-odoo-outcomes">
      <div className={styles.container}>
        <header className={styles.centerHeading}><span className={styles.eyebrow}>نتائج الأعمال</span><h2 id="ar-odoo-outcomes">ما الذي يتغير عندما تترابط العمليات؟</h2><p>هدف مشروع أودو ليس إضافة نظام جديد فحسب؛ بل تقليل الفجوات بين الفرق والبيانات.</p></header>
        <ul className={hub.outcomeGrid}>{outcomes.map(({ title, description, icon: Icon }) => <li key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{description}</p></li>)}</ul>
      </div>
    </section>

    <section className={`${styles.section} ${styles.process}`} id="implementation" aria-labelledby="ar-odoo-process">
      <div className={styles.processTop}><Image src="/images/odoo/reference/process.webp" width={1600} height={900} className={styles.processImage} alt="مسار تنفيذ أودو من الاكتشاف إلى التشغيل والدعم" /><div className={styles.container}><div className={styles.processCopy}><span className={styles.eyebrow}>منهجية واضحة</span><h2 id="ar-odoo-process">تنفيذ أودو خطوة بخطوة</h2><p>نخطط للإجراءات والبيانات والتدريب والدعم وفق نطاق عملك، ونراجع الجاهزية مع فريقك في كل مرحلة.</p></div></div></div>
      <ol className={`${styles.container} ${styles.steps}`}>{processSteps.map(([title, copy], index) => <li key={title}><span className={styles.stepNumber}>{index + 1}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol>
      <div className={`${styles.container} ${hub.related}`}><Link className={local.sectionLink} href="/ar/odoo/implementation">تفاصيل منهجية التنفيذ <ArrowLeft size={16} aria-hidden="true" /></Link></div>
    </section>

    <section className={`${styles.section} ${styles.modules}`} id="solutions" aria-labelledby="ar-odoo-modules">
      <div className={styles.container}>
        <header className={styles.modulesIntro}><span className={styles.modulesEyebrow}>وحدات ERP</span><h2 id="ar-odoo-modules" className={styles.modulesTitle}>قدرات أودو <span>التي نقدمها</span></h2><p>خمسة مجالات يبدأ بها كثير من العملاء، ولكل منها صفحة مستقلة. يربط أودو إجراءات العمل في منصة واحدة.</p></header>
        <ul className={hub.featuredGrid}>{modules.map(({ key, icon: Icon }) => { const item = arOdooContent[key]; return <li key={key}><Icon aria-hidden="true" /><h3>{item.title}</h3><p>{item.description}</p><Link href={`/ar/odoo/${key === "hr-payroll" ? "hr-payroll" : key}`}>معرفة المزيد <ArrowLeft size={15} aria-hidden="true" /></Link></li>; })}</ul>
      </div>
    </section>

    <section className={`${styles.section} ${styles.industrySection}`} id="industries" aria-labelledby="ar-odoo-industries">
      <div className={styles.container}><header className={styles.centerHeading}><span className={styles.eyebrow}>القطاعات</span><h2 id="ar-odoo-industries">حلول تتبع طريقة عمل قطاعك</h2><p>نراجع إجراءات القطاع واحتياجاته قبل تحديد التطبيقات والنطاق المناسبين.</p></header>
        <ul className={hub.industryGrid}>{industryHubItems.map((industry) => { const Icon = industryIcons[industry.id] ?? Building2; const detail = arIndustryHubContent[industry.id]; return <li key={industry.id}><Icon aria-hidden="true" /><h3>{arIndustryNames[industry.id]}</h3><p>{detail.capabilities[0]} · {detail.capabilities[1]}</p><Link href={`/ar/industries/${industry.id}`}>استكشف الحل <ArrowLeft size={15} aria-hidden="true" /></Link></li>; })}</ul>
        <Link className={local.sectionLink} href="/ar/industries">عرض جميع القطاعات <ArrowLeft size={16} aria-hidden="true" /></Link>
      </div>
    </section>

    <section className={styles.section} aria-labelledby="ar-odoo-solutions-title">
      <div className={styles.container}><header className={styles.centerHeading}><span className={styles.eyebrow}>تطبيقات الأعمال</span><h2 id="ar-odoo-solutions-title">ابدأ بالتطبيقات المناسبة لإجراءاتك</h2><p>يمكن جمع التطبيقات التي يحتاجها فريقك الآن، ثم توسيعها عندما تتغير الاحتياجات.</p></header>
        <div className={hub.applications}><div className={hub.priorityModules}>
          <article><Settings size={36} aria-hidden="true" /><div><h4>التصنيع</h4><p>تنسيق الإنتاج وأوامر العمل ومتابعة التكاليف ضمن نطاق العمل المحدد.</p></div></article>
          <article><Database size={36} aria-hidden="true" /><div><h4>المخزون والمشتريات</h4><p>متابعة المخزون والموردين والمستودعات وحركة إعادة التوريد.</p></div></article>
        </div><h3 className={hub.supportingHeading}>تطبيقات أخرى</h3><div className={hub.supportingModules}>
          {[["إدارة علاقات العملاء", "متابعة العملاء المحتملين وفرص البيع."], ["المبيعات", "إدارة عروض الأسعار والطلبات والفوترة."], ["المشروعات", "تنظيم تسليم المشروعات ومتابعة الوقت والتكاليف."], ["الدعم الفني", "استقبال طلبات الدعم وإسنادها ومتابعتها." ]].map(([title, copy], index) => <article key={title}>{[<Users key="crm" />, <Coins key="sales" />, <Check key="projects" />, <Headphones key="support" />][index]}<div><h4>{title}</h4><p>{copy}</p></div></article>)}
        </div></div>
      </div>
    </section>

    <section className={`${styles.section} ${hub.integrations}`} id="integrations" aria-labelledby="ar-odoo-integrations">
      <div className={styles.container}><header className={styles.centerHeading}><span className={styles.eyebrow}>التكاملات</span><h2 id="ar-odoo-integrations">اربط أودو ببقية أنظمتك</h2><p>نراجع الأنظمة الحالية والواجهات المتاحة خلال الاكتشاف، ثم نخطط للتكاملات التي تتطلبها إجراءات العمل.</p></header>
        <ul className={hub.integrationGrid}>{integrations.map(([title, copy]) => <li key={title}><h3>{title}</h3><p>{copy}</p></li>)}</ul>
      </div>
    </section>

    <section className={`${styles.section} ${styles.whySection}`} id="why-etriplesoft" aria-labelledby="ar-odoo-why">
      <div className={`${styles.container} ${styles.whyContainer}`}><header className={styles.whyHeader}><div className={styles.whyEyebrow}><span>لماذا ETripleSoft</span></div><h2 id="ar-odoo-why" className={styles.whyTitle}>حلول مبنية حول <span>عملك</span></h2><p className={styles.whySubtitle}>أكثر من تنفيذ نظام ERP؛ نخطط لحلول تناسب احتياجاتك وخبرات محلية ومتابعة مستمرة.</p></header>
        <ul className={styles.whyCards}>
          <li className={styles.whyBlue}><span className={styles.whyNumber}>01</span><span className={styles.whyIcon}><Settings /></span><h3>التخصيص والتكامل</h3><p>نهيئ أودو ليتناسب مع إجراءات عملك، ونخطط لربطه بالأنظمة والأدوات القائمة عند الحاجة.</p><Link href="/ar/odoo/implementation">معرفة المزيد <ArrowLeft size={16} aria-hidden="true" /></Link></li>
          <li className={styles.whyViolet}><span className={styles.whyNumber}>02</span><span className={styles.whyIcon}><Headphones /></span><h3>دعم محلي في مصر</h3><p>يوفر فريقنا في {cairoCity} دعماً حضورياً وعن بُعد وتدريباً واستشارات بالعربية والإنجليزية.</p><Link href="/ar/support-ticket">معرفة المزيد <ArrowLeft size={16} aria-hidden="true" /></Link></li>
          <li className={styles.whyBlue}><span className={styles.whyNumber}>03</span><span className={styles.whyIcon}><BarChart3 /></span><h3>نمو مستمر</h3><p>نواصل العمل معك بعد التشغيل عبر الدعم والترقيات والميزات الجديدة وفق احتياجات عملك.</p><Link href="/ar/odoo/implementation">معرفة المزيد <ArrowLeft size={16} aria-hidden="true" /></Link></li>
        </ul>
        <ul className={hub.whyTrust}><li><Star aria-hidden="true" />خبرة محلية في مصر</li><li><Users aria-hidden="true" />شراكة طويلة بعد التشغيل</li><li><ShieldCheck aria-hidden="true" />خبرة عبر قطاعات متعددة</li></ul>
      </div>
    </section>

    <section className={styles.section} id="localization" aria-labelledby="ar-odoo-localization">
      <div className={styles.container}><header className={styles.centerHeading}><span className={styles.eyebrow}>التوطين الإقليمي</span><h2 id="ar-odoo-localization">إعداد أودو بما يناسب سوقك</h2><p>يدعم أودو إعدادات البلدان واللغة العربية والعملات المتعددة. نراجعها وفق الكيان والضرائب والتقارير المطلوبة، وتُؤكد التفاصيل خلال الاكتشاف.</p></header>
        <div className={hub.countryGrid}>{localizations.map((country) => <article key={country.name}><h3>{country.name}</h3><p>{country.text}</p></article>)}</div>
        <p className={hub.note}>تتغير اللوائح والمتطلبات. يُراجع النطاق الساري مع فريقك ومستشارك الضريبي قبل التنفيذ.</p>
      </div>
    </section>

    <section className={`${styles.section} ${hub.einvoicing}`} aria-labelledby="ar-odoo-einvoice">
      <div className={styles.container}><span className={styles.eyebrow}>سياق الفوترة الإلكترونية</span><h2 id="ar-odoo-einvoice">الفوترة الإلكترونية في المنطقة</h2><div className={hub.einvoiceGrid}>{invoiceContext.map(([country, copy]) => <div key={country}><h3>{country}</h3><p>{copy}</p></div>)}</div><p className={hub.note}>تختلف المتطلبات حسب المكلف وتتغير بمرور الوقت. تأكد من القواعد المنطبقة على نشاطك مع مستشارك الضريبي.</p></div>
    </section>

    <section className={`${styles.section} ${hub.faqSection}`} id="faqs" aria-labelledby="ar-odoo-faqs">
      <div className={`${styles.container} ${hub.faqWrap}`}><span className={styles.eyebrow}>الأسئلة الشائعة</span><h2 id="ar-odoo-faqs">إجابات عن أودو والتنفيذ</h2><FaqAccordion items={arFaqs.slice(0, 8)} idPrefix="ar-odoo-faq" /></div>
    </section>

    <section className={`${styles.section} ${hub.relatedSection}`} aria-labelledby="ar-odoo-related">
      <div className={styles.container}><h2 id="ar-odoo-related">استكشف المزيد عن أودو</h2><ul className={hub.relatedList}><li><Link href="/ar/services">استكشف الخدمات</Link></li><li><Link href="/ar/industries">جميع القطاعات</Link></li><li><Link href="/ar/tools/chart-of-accounts">أداة دليل الحسابات</Link></li></ul></div>
    </section>

    <section className={`${styles.section} ${styles.demo}`} aria-labelledby="ar-odoo-demo">
      <div className="container"><div className={styles.demoCopy}><span className={styles.eyebrow}>خطوتك التالية</span><h2 id="ar-odoo-demo">شاهد أودو ضمن إجراءات عملك</h2><p>تحدث مع فريقنا عن الوحدات والإجراءات التي تناسب احتياجات شركتك.</p></div><div className={local.demoActions}><Link className={styles.button} href="/ar/request-demo">اطلب عرضاً توضيحياً<ArrowLeft aria-hidden="true" /></Link><Link className={`${styles.button} ${styles.secondary}`} href="/ar/book-consultation">احجز استشارة<ArrowLeft aria-hidden="true" /></Link></div></div>
    </section>
  </main>;
}
