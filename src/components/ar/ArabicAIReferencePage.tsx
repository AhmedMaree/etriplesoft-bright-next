import Link from "next/link";
import {
  ArrowLeft,
  MessageCircle,
  Plus,
  CheckSquare,
  ChartNoAxesColumnIncreasing,
  Database,
  TrendingUp,
} from "lucide-react";
import s from "../ai/AIReferencePage.module.css";
import { featuredTestimonials } from "@/data/testimonials";

const contact = "/ar/contact-us?service=الذكاء%20الاصطناعي%20والأتمتة";
const testimonial = featuredTestimonials.ai;

const solutions = [
  [
    "أتمتة سير العمل",
    "أتمتة المهام والموافقات المتكررة لرفع الكفاءة.",
    "workflow",
  ],
  ["المساعدات الذكية للفرق", "مساعدون أذكياء لتمكين فريقك وتسريع العمل.", "copilot"],
  ["تكامل أودو مع الذكاء الاصطناعي", "دمج قدرات الذكاء الاصطناعي مباشرة في نظام أودو ERP.", "odoo"],
  ["أتمتة إدارة علاقات العملاء CRM", "جذب العملاء المحتملين ومتابعتهم وتحويلهم بسرعة أكبر.", "crm"],
  ["التقارير والتحليلات بالذكاء الاصطناعي", "تحويل البيانات المعقدة إلى رؤى وقرارات واضحة.", "reporting"],
  [
    "تحسين العمليات التشغيلية",
    "اكتشاف نقاط الاختناق والتحسين المستمر للأداء.",
    "optimization",
  ],
];

const useCases = [
  ["معالجة الفواتير آلياً", "من البريد الإلكتروني إلى نظام ERP تلقائياً دون إدخال يدوي.", "invoice"],
  ["تأهيل العملاء المحتملين", "تقييم وتوجيه الاستفسارات باستخدام الذكاء الاصطناعي.", "lead"],
  ["خدمة ودعم العملاء", "مساعدات ذكية لتقديم ردود فورية وموثوقة على مدار الساعة.", "chat"],
  [
    "تحسين وإدارة المخزون",
    "توقع الطلب وتقليل نفاد المخزون بدقة عالية.",
    "inventory",
  ],
  ["الموارد البشرية وشؤون الموظفين", "أتمتة المهام الروتينية مثل تهيئة الموظفين الجدد والطلبات.", "people"],
  ["حلول ذكاء اصطناعي مخصصة", "مصممة وفق الاحتياجات الفريدة لقطاع عملك.", "custom"],
];

const benefits = [
  [
    "إنتاجية أعلى",
    "أتمتة المهام الروتينية وتمكين الفرق من التركيز على القيمة الفعلية.",
    "reporting",
  ],
  ["خفض التكاليف التشغيلية", "تقليل العمل اليدوي والأخطاء المكلفة.", "saving"],
  ["دقة استثنائية", "تقليل الأخطاء البشرية بفضل دقة معالجة البيانات بالذكاء الاصطناعي.", "accuracy"],
  [
    "حلول قابلة للتوسع",
    "توسيع نطاق الأتمتة بسلاسة مع نمو حجم أعمالك.",
    "scalable",
  ],
];

const questions = [
  [
    "كيف يمكن لأتمتة الذكاء الاصطناعي مساعدة شركتي؟",
    "يقلل الذكاء الاصطناعي الأعمال المتكررة مثل معالجة الفواتير، وتأهيل العملاء المحتملين، وإعداد التقارير. نبدأ بفهم إجراءات عملك، وتحديد الفرص العملية ذات العائد الأعلى، والاتفاق على طريقة قياس النتائج.",
  ],
  [
    "هل تدمجون الذكاء الاصطناعي مع نظام أودو؟",
    "نعم، يمكننا ربط مسارات العمل والمساعدات الذكية بنظام أودو ERP، باستخدام التطبيقات والبيانات والصلاحيات المناسبة لعملياتكم.",
  ],
  [
    "هل الأتمتة آمنة ومتوافقة مع حماية البيانات؟",
    "نراجع الوصول إلى البيانات، ومتطلبات الخصوصية، وصلاحيات الأنظمة خلال مرحلة الاكتشاف. كما نصمم نقاط المراجعة البشرية وضوابط الأمان وفق حالة الاستخدام المحددة.",
  ],
  [
    "كم يستغرق ظهور نتائج الأتمتة؟",
    "يعتمد التوقيت على طبيعة الإجراء، وجاهزية البيانات، والتكاملات المطلوبة. نتفق على النطاق والمراحل مسبقاً، ثم نقيس نتائج التنفيذ الأولي قبل التوسع.",
  ],
];

function Asset({
  name,
  className = "",
  alt = "",
}: {
  name: string;
  className?: string;
  alt?: string;
}) {
  return (
    <img
      src={`/images/ai/reference/${name}.webp`}
      className={className}
      alt={alt}
      loading="lazy"
    />
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
      href={href}
      className={`${s.button} ${secondary ? s.secondary : ""} ${small ? s.small : ""}`}
    >
      {secondary && <MessageCircle aria-hidden="true" size={17} />}
      {children}
      {!secondary && <ArrowLeft aria-hidden="true" size={17} />}
    </Link>
  );
}

function Heading({
  label,
  children,
  plain = false,
}: {
  label: string;
  children: React.ReactNode;
  plain?: boolean;
}) {
  return (
    <div className={`${s.heading} ${plain ? s.plainHeading : ""}`}>
      <span className={s.label}>{label}</span>
      <h2>{children}</h2>
    </div>
  );
}

export function ArabicAIReferencePage() {
  return (
    <main id="main" className={`${s.page} ar-service-page`} dir="rtl">
      <section className={s.hero}>
        <div className={`${s.container} ${s.heroGrid}`}>
          <div className={s.heroCopy}>
            <span className={s.pill}>
              <i />
              أعمال مدعومة بالذكاء الاصطناعي
            </span>
            <h1>
              أتمتة <em>الذكاء الاصطناعي</em>
            </h1>
            <h2>عمل أكثر ذكاءً. احتكاك أقل.</h2>
            <p>
              أتمت الإجراءات، ومكّن فرقك، وحقق نمواً متسارعاً مع حلول ذكاء اصطناعي عملية ومصممة للأعمال.
            </p>
            <div className={s.actions}>
              <Action href="#solutions">استكشف حلول الذكاء الاصطناعي</Action>
              <Action href="/ar/book-consultation" secondary>احجز استشارة مجانية</Action>
            </div>
            <div className={s.heroBenefits}>
              {[
                ["إنتاجية", "أعلى بكثير", ChartNoAxesColumnIncreasing],
                ["تكاليف", "تشغيلية أقل", Database],
                ["نمو", "قابل للتوسع", TrendingUp],
              ].map(([title, text, Glyph]) => {
                const Icon = Glyph as typeof Database;
                return (
                  <div key={String(title)}>
                    <Icon aria-hidden="true" size={20} />
                    <span>
                      <strong>{String(title)}</strong>
                      {String(text)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <img
            className={s.heroArt}
            src="/images/ai/reference/hero.webp"
            alt="الذكاء الاصطناعي يربط أنظمة الأعمال ومسارات العمل الآلية والمساعدين الذكيين والتقارير"
            fetchPriority="high"
          />
        </div>
      </section>

      <div className={s.container}>
        <nav className={s.capabilities} aria-label="الخدمات المترابطة">
          {[
            ["المواقع", "سير عمل حديث", "web", "/ar/web"],
            ["الجوال", "العمل من أي مكان", "mobile", "/ar/mobile"],
            ["الذكاء الاصطناعي", "عمليات أكثر ذكاءً", "brain", "#solutions"],
            ["التكاملات", "أودو + الذكاء الاصطناعي", "integrations", "/ar/odoo"],
            ["الدعم", "فريق حقيقي معك", "support", "/ar/support-ticket"],
          ].map(([title, copy, asset, href]) => (
            <Link href={href} key={title}>
              <Asset name={asset} />
              <span>
                <strong>{title}</strong>
                <small>{copy}</small>
              </span>
            </Link>
          ))}
        </nav>

        <section className={`${s.section} ${s.solutions}`} id="solutions">
          <div>
            <Heading label="حلولنا في الذكاء الاصطناعي">
              من أداء المهام إلى
              <br />
              <em>التحول الرقمي الشامل</em>
            </Heading>
            <p>
              أتمتة ذكية وعملية تلائم طبيعة أعمالك. صُممت لتوفير الوقت، وتقليل العمل اليدوي، ومساعدتك على إنجاز المزيد بكفاءة أعلى.
            </p>
            <Action href={`${contact}&subject=استكشاف%20حلول%20الذكاء%20الاصطناعي`}>
              استكشف حلول الذكاء الاصطناعي
            </Action>
          </div>
          <div className={s.solutionGrid}>
            {solutions.map(([title, copy, icon]) => (
              <Link
                href={`/ar/contact-us?service=${encodeURIComponent(title)}`}
                className={s.solutionCard}
                key={title}
              >
                <Asset name={icon} />
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
                <ArrowLeft className={s.cardArrow} aria-hidden="true" size={18} />
              </Link>
            ))}
          </div>
        </section>

        <section className={s.section} id="process">
          <Heading label="مسار واضح نحو الأثر الفعلي">
            حلّل. أتمت. <em>وحسّن النتائج.</em>
          </Heading>
          <ol className={s.process}>
            {[
              [
                "التحليل",
                "تحديد فرص الأتمتة وقياس الأثر المتوقع على العمليات.",
                "analyze",
              ],
              ["الأتمتة", "نشر مسارات العمل والمساعدين الأذكياء بدقة.", "workflow"],
              ["التحسين", "متابعة النتائج وتوسيع نطاق الحلول الناجحة.", "improve"],
            ].map(([title, copy, icon], i) => (
              <li key={title}>
                <span className={s.step}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <Asset name={icon} />
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </div>
                {i < 2 && (
                  <ArrowLeft className={s.processArrow} aria-hidden="true" size={18} />
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className={s.section} id="use-cases">
          <div className={s.headingRow}>
            <Heading label="حالات استخدام واقعية">
              ذكاء اصطناعي يحقق نتائج ملموسة
            </Heading>
            <Link
              href={`${contact}&subject=حالات%20استخدام%20الذكاء%20الاصطناعي`}
              className={s.outlineLink}
            >
              عرض جميع الحالات <ArrowLeft aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className={s.useCases}>
            {useCases.map(([title, copy, icon]) => (
              <Link
                href={`/ar/contact-us?service=${encodeURIComponent(`الذكاء الاصطناعي: ${title}`)}`}
                key={title}
              >
                <div>
                  <Asset name={icon} />
                  <h3>{title}</h3>
                </div>
                <p>{copy}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className={`${s.section} ${s.outcomes}`}>
          <div>
            <div className={s.outcomeIntro}>
              <Heading label="نتائج أعمال ملموسة" plain>
                لماذا تختار ETripleSoft للأتمتة؟
              </Heading>
              <p>
                نجمع بين الخبرة التقنية العميقة والفهم الواقعي لاحتياجات الأعمال لتقديم حلول أتمتة تصنع قيمة حقيقية وقابلة للقياس.
              </p>
            </div>
            <div className={s.benefits}>
              {benefits.map(([title, copy, icon]) => (
                <article key={title}>
                  <Asset name={icon} />
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className={s.human}>
            <div className={s.humanCopy}>
              <span className={s.label}>عمل أكثر ذكاءً وسرعة معاً</span>
              <h2>
                الذكاء الاصطناعي + الخبرة البشرية
                <br />= إمكانات لا محدودة
              </h2>
              <p>
                نساعدك على تحديد الفرص المناسبة، وتنفيذ الحلول بدقة، وتحقيق نتائج تدوم.
              </p>
              <Action href={`${contact}&subject=مناقشة%20حالة%20الاستخدام`}>
                ناقش احتياجات شركتك
              </Action>
            </div>
            <Asset
              name="robot"
              className={s.robot}
              alt="روبوت ذكاء اصطناعي يوضح خطوات التحليل والأتمتة والتكامل والنمو"
            />
          </div>
        </section>

        <section className={s.section}>
          <Heading label="خبراتنا في المنطقة">سجل حافل في الشرق الأوسط</Heading>
          <div className={s.metrics}>
            {[
              ["250+", "مشروعاً منجزاً", "clients"],
              ["8+", "سنوات من الخبرة", "clock"],
              ["3", "مكاتب إقليمية", "web"],
              ["6", "قطاعات رئيسية", "clients"],
            ].map(([number, label, asset]) => (
              <div key={label}>
                <Asset name={asset} />
                <div>
                  <strong>{number}</strong>
                  <p>{label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={`${s.section} ${s.proof}`}>
          <div>
            <span className={s.label}>آراء عملائنا</span>
            <figure className={s.testimonial}>
              <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <figcaption>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}، {testimonial.company}</span>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className={s.faq}>
            <div className={s.headingRow}>
              <h2 className={s.label}>الأسئلة الشائعة</h2>
              <Link href="/ar/faqs" className={s.outlineLink}>
                عرض جميع الأسئلة <ArrowLeft aria-hidden="true" size={16} />
              </Link>
            </div>
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
        </section>

        <section className={s.cta}>
          <div>
            <h2>هل أنت مستعد للأتمتة؟</h2>
            <p>دعنا نستكشف معاً كيف يمكن للذكاء الاصطناعي صناعة أثر حقيقي في عملياتك.</p>
            <div className={s.actions}>
              <Action href="#solutions" small>
                استكشف الحلول
              </Action>
              <Action href="/ar/book-consultation" secondary small>
                احجز استشارة مجانية
              </Action>
            </div>
          </div>
          <ul>
            {[
              "حلول مخصصة لاحتياجاتك",
              "تكامل سلس مع أودو ERP",
              "نتائج عملية وقابلة للقياس",
            ].map((text) => (
              <li key={text}>
                <CheckSquare aria-hidden="true" size={18} />
                {text}
              </li>
            ))}
          </ul>
          <p className={s.signoff}>
            أعمال
            <br />
            <strong>أكثر ذكاءً</strong>
            <br />
            لمستقبل مشرق
          </p>
        </section>
      </div>
    </main>
  );
}
