import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Code2,
  FileText,
  PenTool,
  Plus,
  Quote,
  Rocket,
  Search,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import s from "../mobile/MobileReferencePage.module.css";
import { featuredTestimonials } from "@/data/testimonials";

const contact = "/ar/contact-us?service=تطبيقات%20الجوال";
const testimonial = featuredTestimonials.mobile;
const asset = (name: string) => `/images/mobile/reference/${name}.webp`;

const services = [
  [
    "تطوير تطبيقات Flutter",
    "شيفرة برمجية واحدة لمنصتي iOS وAndroid، مع إطلاق أسرع في السوق.",
    "flutter",
  ],
  [
    "تطبيقات الأعمال والفرق",
    "أدوات داخلية ذكية لتبسيط العمليات وربط الموظفين الميدانيين.",
    "business",
  ],
  ["تطبيقات ممتدة لنظام أودو", "توسيع قدرات نظام أودو ERP ونقلها إلى هواتف الفرق.", "odoo"],
  ["تطبيقات العملاء التفاعلية", "تجارب رقمية ممتعة وجذابة تكسب ولاء عملائك.", "customer-apps"],
  [
    "الصيانة والدعم المستمر",
    "الحفاظ على أمان التطبيق وتحديثه وضمان أعلى أداء تشغيلي.",
    "maintenance",
  ],
  [
    "الاستشارات واستراتيجية الجوال",
    "تحويل فكرة تطبيقك إلى منتج رقمي ناجح ومنافس.",
    "consultation",
  ],
] as const;

const milestones = [
  ["الاكتشاف والتخطيط", "الأهداف، المستخدمون والمتطلبات", FileText],
  ["التصميم والنمذجة الأولية", "مسارات الاستخدام ومفاهيم الواجهة", PenTool],
  ["التطوير والاختبار", "التنفيذ وفحوصات الجودة", Code2],
  ["الإطلاق والدعم", "الإصدار والتحسين المستمر", Rocket],
] as const;

const process = [
  ["الاكتشاف", "فهم أهدافك واحتياجات المستخدمين ومتطلبات العمل.", Search],
  ["التصميم", "ابتكار تصاميم وتجارب استخدام سلسة وجذابة.", PenTool],
  ["التطوير", "برمجة التطبيق وربطه بالأنظمة واختباره بدقة.", Code2],
  ["الإطلاق", "نشر التطبيق والنمو مع الدعم الفني المستمر.", Rocket],
] as const;

const benefits = [
  ["تصميم يركز على المستخدم", "تطبيقات سهلة ومحبوبة لدى المستخدمين.", "user-centric"],
  ["بنية برمجية قابلة للتوسع", "مبنية لاستيعاب النمو المستقبلي للأعمال.", "scalable"],
  ["أمان على مستوى المؤسسات", "حماية بياناتك وبيانات عملائك أولويتنا القصوى.", "security"],
  ["سرعة في الإطلاق", "منهجية تطوير مرنة تضمن سرعة الوصول للسوق.", "faster"],
  ["دعم مستمر وموثوق", "فريقنا معك في كل خطوة بعد الإطلاق.", "support"],
  ["أثر حقيقي على الأعمال", "نتائج ملموسة وقابلة للقياس والتقييم.", "impact"],
] as const;

const questions = [
  [
    "هل تطورون تطبيقات لنظامي iOS وAndroid؟",
    "نعم، نطور تطبيقات أصلية ومتعددة المنصات لنظامي iOS وAndroid، ونختار النهج المناسب وفق مستخدميك والميزات المطلوبة وسرعة التسليم.",
  ],
  [
    "كم يستغرق بناء تطبيق جوال متكامل؟",
    "تعتمد المدة على نطاق المنتج والتكاملات ومتطلبات الاختبار. نتفق معكم على خطة المراحل والمحطات الزمنية خلال مرحلة الاكتشاف والتخطيط.",
  ],
  [
    "هل يمكن ربط التطبيق بأنظمتنا الحالية (مثل أودو)؟",
    "نعم، نربط التطبيق بواجهات برمجية معتمدة وبنظام أودو والأنظمة المحاسبية والتشغيلية الأخرى، مع تحديد الصلاحيات وحماية البيانات بدقة.",
  ],
] as const;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className={s.eyebrow}>{children}</span>;
}

function SectionTitle({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className={s.sectionTitle}>
      <Eyebrow>{label}</Eyebrow>
      <h2>{children}</h2>
    </div>
  );
}

function Action({
  children,
  href = contact,
  secondary = false,
  small = false,
}: {
  children: React.ReactNode;
  href?: string;
  secondary?: boolean;
  small?: boolean;
}) {
  return (
    <Link
      className={`${s.action} ${secondary ? s.secondary : ""} ${small ? s.small : ""}`}
      href={href}
    >
      {children}
      {!secondary && <ArrowLeft aria-hidden="true" size={17} />}
    </Link>
  );
}

function ChartIcon() {
  return (
    <span className={s.chartIcon} aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}

export function ArabicMobileReferencePage() {
  return (
    <main id="main" className={`${s.page} ar-service-page`} dir="rtl">
      <section className={s.hero}>
        <div className={`${s.container} ${s.heroContainer}`}>
          <div className={s.heroGrid}>
            <div className={s.heroCopy}>
              <Eyebrow>تطوير تطبيقات الجوال</Eyebrow>
              <h1>
                تطبيقات <em>الجوال</em>
              </h1>
              <h2>تطبيقات مفيدة. قيمة حقيقية لأعمالك.</h2>
              <p>
                نصمم ونطور تطبيقات جوال عالية الأداء لنظامي iOS وAndroid تساعدك على الوصول إلى المزيد من العملاء، وتبسيط العمليات، وتحويل الأفكار إلى نمو فعلي.
              </p>
              <div className={s.actions}>
                <Action href="/ar/book-consultation">احجز استشارة مجانية</Action>
                <Action secondary href="/ar/services">استكشف الحلول</Action>
              </div>
              <div className={s.heroBenefits}>
                <div>
                  <ChartIcon />
                  <span>
                    تقنيات
                    <br />
                    عصرية
                  </span>
                </div>
                <div>
                  <ShieldCheck aria-hidden="true" size={20} />
                  <span>
                    آمنة
                    <br />
                    وقابلة للتوسع
                  </span>
                </div>
                <div>
                  <UsersRound aria-hidden="true" size={20} />
                  <span>
                    مبنية
                    <br />
                    لنمو الأعمال
                  </span>
                </div>
              </div>
            </div>
            <img
              className={s.heroArt}
              src={asset("hero-ar")}
              width={1280}
              height={960}
              alt="هاتفان يعرضان تطبيق تسوق ولوحة معلومات للأعمال باللغة العربية"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <div className={s.container}>
        <section className={`${s.section} ${s.platforms}`} id="platforms">
          <div className={s.platformCopy}>
            <SectionTitle label="أصلية ومتعددة المنصات">
              تطبيقات iOS وAndroid
            </SectionTitle>
            <p>
              تواصل مع عملائك في كل مكان. نبني تطبيقات سريعة وعالية الكفاءة لكلا النظامين بشيفرة موحدة أو حلول أصلية.
            </p>
            <Action href="#services" small>
              معرفة المزيد
            </Action>
          </div>
          <div className={s.platformCards}>
            <article>
              <img src={asset("ios")} alt="" />
              <div>
                <h3>iOS</h3>
                <p>
                  أنيق. آمن.
                  <br />
                  ومبني للنمو.
                </p>
              </div>
            </article>
            <article>
              <img src={asset("android")} alt="" />
              <div>
                <h3>Android</h3>
                <p>
                  قوي. مرن.
                  <br />
                  وجاهز للتوسع.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className={`${s.section} ${s.services}`} id="services">
          <div className={s.sectionHeadingRow}>
            <div>
              <SectionTitle label="خدمات تطبيقات الجوال">
                من الفكرة إلى <em>الأثر الفعلي</em>
              </SectionTitle>
              <p>
                خدمات تطوير تطبيقات متكاملة تحول أفكارك إلى قيمة تجارية ملموسة.
              </p>
            </div>
            <Link className={s.outlineLink} href={contact}>
              جميع الخدمات <ArrowLeft aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className={s.serviceGrid}>
            {services.map(([title, copy, icon]) => (
              <Link
                className={s.serviceCard}
                href={`${contact}&solution=${encodeURIComponent(title)}`}
                key={title}
              >
                <span className={s.serviceIcon}>
                  <img src={asset(icon)} alt="" />
                </span>
                <span className={s.cardCopy}>
                  <strong>{title}</strong>
                  <span>{copy}</span>
                </span>
                <span className={s.cardArrow}>
                  <ArrowLeft aria-hidden="true" size={17} />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section
          className={`${s.section} ${s.timeline}`}
          aria-labelledby="delivery-timeline-title"
        >
          <div className={s.timelineHeading}>
            <div>
              <SectionTitle label="الجدول الزمني المعتاد للتسليم">
                <span
                  id="delivery-timeline-title"
                  className={s.timelineTitleLine}
                >
                  من التخطيط
                </span>{" "}
                <span className={s.timelineTitleLine}>
                  إلى <em>الإطلاق</em>
                </span>
              </SectionTitle>
              <p>عملية واضحة ومرنة لإيصال تطبيقك إلى السوق.</p>
            </div>
            <div className={s.scopeNote}>
              <span>
                <CalendarDays aria-hidden="true" size={18} />
              </span>
              <div>
                <strong>خطة محددة النطاق</strong>
                <small>معالم متفق عليها معًا</small>
              </div>
            </div>
          </div>
          <ol className={s.milestones}>
            {milestones.map(([title, copy, Glyph], index) => (
              <li key={title}>
                <span className={s.milestoneDot}>{index + 1}</span>
                <div className={s.milestoneCard}>
                  <span className={s.milestoneIcon} aria-hidden="true">
                    <Glyph />
                  </span>
                  <span className={s.milestoneCopy}>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className={`${s.section} ${s.process}`}>
          <SectionTitle label="منهجية العمل">
            بسيطة. شفافة. <em>وفعالة.</em>
          </SectionTitle>
          <p>نتبع خطوات مجربة لتسليم تطبيقات جوال استثنائية وعالية الجودة.</p>
          <ol className={s.processGrid}>
            {process.map(([title, copy, Glyph], index) => (
              <li key={title}>
                <span className={s.processIcon}>
                  <Glyph aria-hidden="true" size={20} />
                </span>
                <span>
                  <strong>
                    {index + 1}. {title}
                  </strong>
                  <small>{copy}</small>
                </span>
                {index < process.length - 1 && (
                  <ArrowLeft className={s.processArrow} aria-hidden="true" size={16} />
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className={`${s.section} ${s.why}`}>
          <div className={s.whyIntro}>
            <SectionTitle label="لماذا ETripleSoft">
              تطبيقات تصنع <em>الفارق</em>
            </SectionTitle>
            <p>
              أكثر من مجرد برمجة — نبني حلولاً تصنع قيمة حقيقية تدوم.
            </p>
          </div>
          <div className={s.benefitGrid}>
            {benefits.map(([title, copy, icon]) => (
              <article key={title}>
                <img src={asset(icon)} alt="" />
                <span>
                  <strong>{title}</strong>
                  <small>{copy}</small>
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className={`${s.section} ${s.proof}`}>
          <div className={s.testimonialBlock}>
            <SectionTitle label="آراء العملاء">
              ماذا يقول عملاؤنا عن خدماتنا
            </SectionTitle>
            <figure className={s.testimonial}>
              <Quote className={s.quoteMark} aria-hidden="true" size={32} />
              <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <figcaption>
                <span className={s.clientBadge} aria-hidden="true">
                  AE
                </span>
                <span>
                  <strong>{testimonial.name}</strong>
                  <small>{testimonial.role}</small>
                </span>
              </figcaption>
            </figure>
          </div>
          <div className={s.faq}>
            <div className={s.faqHeading}>
              <SectionTitle label="الأسئلة الشائعة">
                إجابات سريعة
              </SectionTitle>
              <Link className={s.outlineLink} href="/ar/faqs">
                جميع الأسئلة <ArrowLeft aria-hidden="true" size={16} />
              </Link>
            </div>
            <div className={s.questions}>
              {questions.map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    {question}
                    <Plus aria-hidden="true" size={18} />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={s.cta}>
          <div>
            <h2>
              هل أنت جاهز لبناء <em>تطبيقك؟</em>
            </h2>
            <p>دعنا نحول فكرتك إلى تجربة جوال قوية وناجحة.</p>
          </div>
          <div className={s.ctaActions}>
            <Action href="/ar/book-consultation">احجز استشارة مجانية</Action>
            <Action secondary href="/ar/services">استكشف الحلول</Action>
          </div>
        </section>
      </div>
    </main>
  );
}
