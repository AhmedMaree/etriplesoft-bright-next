import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Check,
  ChevronDown,
  Globe2,
  Megaphone,
  Rocket,
  Search,
  Settings,
  Target,
  UsersRound,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import s from "../digital-marketing/DigitalMarketingReferencePage.module.css";
import { featuredTestimonials } from "@/data/testimonials";

const testimonial = featuredTestimonials.digitalMarketing;

const services = [
  ["تحسين محركات البحث SEO", "تصدر نتائج البحث الأولى واكتساب زيارات مجانية مستمرة.", "icon-seo"],
  ["إعلانات Google Ads", "جلب زيارات مستهدفة ومؤهلة تتحول إلى مبيعات فعلية.", "icon-ads"],
  ["التسويق عبر وسائل التواصل", "بناء علامتك التجارية والتفاعل المباشر مع جمهورك.", "icon-social"],
  ["تسويق المحتوى", "صناعة محتوى مؤثر يبني الثقة ويقود قرارات الشراء.", "icon-content"],
  ["التحليلات والتتبع المتقدم", "تحويل البيانات إلى فرص نمو واضحة وملموسة.", "icon-analytics"],
  ["التقارير ولوحات المتابعة", "تقارير شفافة ودقيقة لاتخاذ قرارات تسويقية أذكى.", "icon-reporting"],
] as const;

const offices = [
  ["مصر", "القاهرة", "country-egypt"],
  ["الإمارات العربية المتحدة", "دبي", "country-uae"],
  ["المملكة العربية السعودية", "الرياض", "country-ksa"],
] as const;

const steps = [
  ["الاستراتيجية", "فهم أهدافك والجمهور المستهدف", Target],
  ["الإطلاق", "إنشاء الحملات ونشرها عبر القنوات", Rocket],
  ["التحسين", "الاختبار والتطوير ومضاعفة النتائج", Settings],
  ["التقارير", "مشاركة الرؤى والتوصيات والخطوات التالية", BarChart3],
] as const;

const faqs = [
  ["كم يستغرق ظهور نتائج التسويق الرقمي؟", "يعتمد التوقيت على أهدافك، القنوات المختارة، وطبيعة الجمهور ونقطة البداية. نتفق على خطة قياس واضحة ونراجع التقدم أسبوعياً وشهرياً."],
  ["كم تبلغ تكلفة خدمات التسويق الرقمي؟", "يعتمد النطاق والأتعاب على عدد القنوات، حجم المحتوى، والدعم المطلوب في التقارير والتحليلات. نناقش أولوياتك بدقة قبل تقديم العرض."],
  ["هل تعملون مع الشركات الصغيرة والمتوسطة؟", "نعم، نصمم الخطة التسويقية بما يناسب حجم جمهورك وميزانيتك وأولويات نشاطك التجاري."],
  ["ما المنصات والقنوات التي تستخدمونها؟", "نختار القنوات الأنسب لجمهورك؛ وتشمل خدماتنا إعلانات جوجل، منصات التواصل الاجتماعي، محركات البحث، التسويق بالمحتوى والبريد الإلكتروني."],
  ["هل تضمنون نتائج تسويقية محددة؟", "تعتمد النتائج على عوامل سوقية متعددة، لذلك لا نعد بأرقام وهمية؛ بل نتفق على مؤشرات أداء دقيقة (KPIs)، ونقدم تقارير شفافة، ونستمر في تحسين الحملات بناءً على البيانات."],
  ["كيف أبدأ معكم؟", "أخبرنا عن نشاطك وأهدافك عبر نموذج التواصل، وسيقوم فريقنا بمراجعة متطلباتك وتنسيق جلسة عمل لوضع خطة الانطلاق."],
] as const;

function Asset({ name, alt = "", className = "", eager = false }: { name: string; alt?: string; className?: string; eager?: boolean }) {
  const src = name === "hero-dashboard" ? "/images/project-marketing.webp" : `/images/digital-marketing/${name}.webp`;
  return <img className={className} src={src} alt={alt} loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} decoding="async" />;
}

function SectionHeading({ eyebrow, title, description, href, link }: { eyebrow?: string; title: React.ReactNode; description?: string; href?: string; link?: string }) {
  return (
    <div className={s.sectionHeading}>
      <div className={s.headingCopy}>
        {eyebrow && <span className={s.eyebrow}>{eyebrow}</span>}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {href && link && <Link className={s.textLink} href={href}>{link}<ArrowLeft aria-hidden="true" size={16} /></Link>}
    </div>
  );
}

function Button({ children, href = "/ar/contact-us?service=التسويق%20الرقمي", secondary = false }: { children: React.ReactNode; href?: string; secondary?: boolean }) {
  return <Link className={`${s.button} ${secondary ? s.buttonSecondary : ""}`} href={href}>{children}<ArrowLeft aria-hidden="true" size={17} /></Link>;
}

export function ArabicDigitalMarketingReferencePage() {
  return (
    <main id="main" className={s.page} dir="rtl">
      <section className={s.hero}>
        <div className={s.heroAura} aria-hidden="true" />
        <div className={`${s.container} ${s.heroGrid}`}>
          <div className={s.heroCopy}>
            <span className={s.eyebrow}>التسويق الرقمي</span>
            <h1>التسويق<br /><em>الرقمي</em></h1>
            <h2>وصول أوسع. نتائج أفضل.</h2>
            <p>تسويق مبني على البيانات لتنمية علامتك التجارية في مصر والإمارات والمملكة العربية السعودية.</p>
            <div className={s.actions}><Button>نمِّ علامتك التجارية</Button><Button secondary href="#solutions">استكشف الخدمات</Button></div>
            <div className={s.heroBenefits}>
              <span><BarChart3 aria-hidden="true" size={20} /><b>زيارات<br />مؤهلة أكثر</b></span>
              <span><UsersRound aria-hidden="true" size={20} /><b>معدلات<br />تحويل أعلى</b></span>
              <span><Rocket aria-hidden="true" size={20} /><b>حضور أقوى<br />للعلامة التجارية</b></span>
            </div>
          </div>
          <div className={s.heroVisual}>
            <Asset name="hero-dashboard" alt="لوحة معلومات توضيحية لحملة تسويق رقمي" className={s.heroArt} eager />
            <span className={s.imageLabel}>لوحة معلومات توضيحية</span>
            <div className={s.heroBadge}><BarChart3 aria-hidden="true" size={20} /><strong>نمِّ علامتك<br />التجارية رقمياً</strong></div>
          </div>
        </div>
      </section>

      <div className={`${s.container} ${s.pageSections}`}>
        <section className={`${s.section} ${s.services}`} id="solutions">
          <SectionHeading eyebrow="خدماتنا في التسويق الرقمي" title="حلول تسويق رقمي متكاملة لتنمية نشاطك عبر الإنترنت." description="اختر القنوات وأدوات القياس التي تلائم جمهورك وأهدافك وفريق عملك." href="/ar/contact-us?service=التسويق%20الرقمي" link="عرض جميع الخدمات" />
          <div className={s.serviceGrid}>
            {services.map(([title, copy, image]) => <Link key={title} className={s.serviceCard} href={`/ar/contact-us?service=التسويق%20الرقمي&solution=${encodeURIComponent(title)}`}>
              <span className={s.serviceIcon}><Asset name={image} alt="" /></span>
              <span className={s.serviceCopy}><strong>{title}</strong><small>{copy}</small></span>
              <span className={s.cardArrow}><ArrowLeft aria-hidden="true" size={17} /></span>
            </Link>)}
          </div>
        </section>

        <section className={`${s.section} ${s.region}`}>
          <div className={s.regionCopy}>
            <SectionHeading eyebrow="خبرة محلية. أثر إقليمي." title={<>حملات بالعربية<br /><em>والإنجليزية</em></>} description="نبتكر حملات متوافقة مع الثقافة المحلية بالعربية والإنجليزية للوصول إلى الجمهور المناسب في مصر والإمارات والسعودية." />
            <Button>ابدأ حملتك التسويقية</Button>
          </div>
          <div className={s.officeCards}>{offices.map(([country, city, image]) => <article key={country}><Asset name={image} alt="" /><h3>{country}</h3><p>{city}<br />رؤية محلية.<br />امتداد إقليمي.</p></article>)}</div>
        </section>

        <section className={`${s.section} ${s.process}`} id="process">
          <div className={s.processIntro}><SectionHeading eyebrow="منهجية العمل" title="من الاستراتيجية إلى النتائج الفعلية" description="منهجية واضحة وقابلة للقياس لتنمية علامتك التجارية." /></div>
          <ol className={s.steps}>{steps.map(([title, copy, Icon], index) => <li key={title}><span className={s.stepIcon}><Icon aria-hidden="true" size={22} /></span><span className={s.stepArrow}>{index < steps.length - 1 && <ArrowLeft aria-hidden="true" size={18} />}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol>
        </section>

        <section className={`${s.section} ${s.proof}`}>
          <SectionHeading eyebrow="فريق إقليمي. سجل حافل بالنجاح." title="تسويق يرتبط بنتائج الأعمال." description="تعمل فرقنا عبر المنطقة، مقدمة سنوات من الخبرة في مجالات التحول الرقمي والتسويق." />
          <div className={s.proofGrid}>
            <article><span><Rocket aria-hidden="true" size={24} /></span><strong>250+</strong><h3>مشروعاً منجزاً</h3><p>مشاريع في التحول الرقمي وأنظمة الأعمال والتسويق.</p></article>
            <article><span><BarChart3 aria-hidden="true" size={24} /></span><strong>8+</strong><h3>سنوات من الخبرة</h3><p>خبرات عملية تدعم الشركات الطموحة في المنطقة.</p></article>
            <article><span><Globe2 aria-hidden="true" size={24} /></span><strong>3</strong><h3>أسواق رئيسية</h3><p>فرق عمل في مصر والإمارات والمملكة العربية السعودية.</p></article>
          </div>
        </section>

        <section className={`${s.section} ${s.testimonial}`}>
          <div><SectionHeading eyebrow="آراء العملاء" title={<>ماذا يقول عملاؤنا<br /><em>عن تجربتهم معنا.</em></>} /></div>
          <figure>
            <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
            <figcaption><span className={s.avatar} aria-hidden="true">WE</span><span><strong>{testimonial.name}</strong><small>{testimonial.role}، {testimonial.company}</small></span></figcaption>
          </figure>
        </section>

        <section className={s.faq}>
          <SectionHeading title="الأسئلة الشائعة" description="إجابات سريعة ومفيدة عن خدماتنا في التسويق الرقمي." href="/ar/faqs" link="عرض جميع الأسئلة" />
          <div className={s.faqGrid}>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown aria-hidden="true" size={18} /></summary><p>{answer}</p></details>)}</div>
        </section>

        <section className={s.cta} id="contact">
          <div className={s.ctaCopy}><span className={s.eyebrow}>هل أنت مستعد لنقل أعمالك للمستوى التالي؟</span><h2>نمِّ علامتك<br /><em>التجارية عبر الإنترنت.</em></h2><p>دعنا نبني استراتيجية تسويق رقمي مترابطة مع أهداف أعمالك ومبيعاتك.</p><ul><li><Check aria-hidden="true" size={17} />حملات احترافية بالعربية والإنجليزية</li><li><Check aria-hidden="true" size={17} />تقارير شفافة ومفيدة للأعمال</li><li><Check aria-hidden="true" size={17} />فهم عميق للأسواق الإقليمية</li></ul></div>
          <div className={s.form}><ContactForm locale="ar" initialService="Digital Marketing" /></div>
        </section>
      </div>
    </main>
  );
}
