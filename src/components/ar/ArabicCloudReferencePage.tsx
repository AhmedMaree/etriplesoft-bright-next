import Link from "next/link";
import { ArrowLeft, Headphones } from "lucide-react";
import s from "../cloud/CloudReferencePage.module.css";
import { featuredTestimonials } from "@/data/testimonials";

const contact = "/ar/contact-us?service=السحابة%20والأمن";
const asset = (name: string) => `/images/cloud/reference/${name}.webp`;
const cloudTestimonial = featuredTestimonials.cloud;

const solutions = [
  ["Microsoft 365", "إنتاجية وتعاون آمن للفرق.", "microsoft"],
  ["Microsoft Azure", "أمان السحابة وحوكمة البنية التحتية.", "azure"],
  ["الهوية والوصول", "صلاحيات دقيقة وتحكم شامل في الوصول.", "identity"],
  ["حماية الأجهزة ونقاط النهاية", "أجهزة مؤمنة وفرق عمل منتجة.", "endpoint"],
  ["النسخ الاحتياطي والاستعادة", "بياناتك محمية ومتاحة دائماً.", "backup"],
  ["الامتثال والحوكمة", "تلبية متطلبات الأمان واللوائح المعمول بها.", "compliance"],
] as const;

const process = [
  ["التقييم", "فهم البيئة الحالية وتحديد المخاطر والاعتماديات."],
  ["التصميم", "بناء بنية أمنية سحابية مخصصة لاحتياجات أعمالك."],
  ["التنفيذ", "نشر الحلول الأمنية وتكاملها بسلاسة."],
  ["المراقبة", "رصد التهديدات وتنسيق الاستجابة السريعة."],
  ["التحسين", "تطوير الضوابط والامتثال بشكل مستمر."],
] as const;

const reasons = [
  ["خبرة موثوقة", "سنوات من الخبرة في حلول السحابة والأمن السيبراني.", "expertise"],
  ["فريق معتمد", "خبرات معتمدة من مايكروسوفت في السحابة والهوية والأمان.", "certified"],
  ["دعم سريع واستجابة فورية", "مساعدة إقليمية من فريق يمكنك الوصول إليه دائماً.", "support"],
  ["تواجد محلي وإقليمي", "فهم عميق لمتطلبات الأسواق في مصر والسعودية والإمارات.", "presence"],
  ["تركيز على أهداف الأعمال", "استراتيجيات أمنية متوافقة تماماً مع أهداف نمو شركتك.", "growth"],
] as const;

const industries = [
  ["البنوك والخدمات المالية", "banking"],
  ["الاتصالات وتقنية المعلومات", "telecom"],
  ["القطاع الحكومي والعام", "government"],
  ["الرعاية الصحية", "healthcare"],
  ["التصنيع والإنتاج", "manufacturing"],
  ["التجارة والتجزئة الإلكترونية", "retail"],
] as const;

const faqs = [
  [
    "كيف تؤمّنون Microsoft 365؟",
    "نراجع الهوية والوصول وحماية البيانات وأمن البريد وإعدادات Teams وSharePoint، ثم نوصي بضوابط مناسبة لبيئتكم.",
  ],
  [
    "هل تساعدون في متطلبات الامتثال والحوكمة؟",
    "نقيّم البيئة وفق المتطلبات ذات الصلة بمؤسستكم، ونحدد الضوابط والأدلة التي يحتاج فريقكم إلى إعدادها وتطبيقها.",
  ],
  [
    "هل تشمل الخدمات المراقبة المستمرة والاستجابة؟",
    "يمكن إدراج المتابعة والاستجابة للحوادث ضمن نطاق دعم متفق عليه، وفق الأنظمة ومتطلبات التشغيل لديكم.",
  ],
] as const;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className={s.eyebrow}>{children}</span>;
}

function More({ subject, children = "معرفة المزيد" }: { subject: string; children?: React.ReactNode }) {
  return (
    <Link className={s.learnMore} href={`${contact}&solution=${encodeURIComponent(subject)}`}>
      {children}
      <ArrowLeft aria-hidden="true" size={16} />
    </Link>
  );
}

export function ArabicCloudReferencePage() {
  return (
    <main id="main" className={s.page} dir="rtl">
      <section className={s.hero}>
        <div className={`${s.container} ${s.heroGrid}`}>
          <div className={s.heroCopy}>
            <Eyebrow>سحابة آمنة. أعمال أكثر قوة.</Eyebrow>
            <h1>
              حلول أمان السحابة
              <br />
              في مصر والخليج
            </h1>
            <p>
              احمِ سحابتك وبياناتك وأعمالك بحلول أمنية متقدمة للمؤسسات. تساعد ETripleSoft الشركات في مصر والسعودية والإمارات على تصميم البيئات السحابية وتأمينها وإدارتها بثقة تامة.
            </p>
            <div className={s.actions}>
              <Link className={s.button} href={`${contact}&subject=تقييم%20أمني%20مجاني`}>
                احصل على تقييم أمني مجاني
                <ArrowLeft aria-hidden="true" size={17} />
              </Link>
              <Link className={`${s.button} ${s.secondary}`} href="/ar/book-consultation">
                <Headphones aria-hidden="true" size={17} />
                احجز استشارة مجانية
              </Link>
            </div>
            <div className={s.partners} aria-label="منصات وشراكات السحابة">
              <img src={asset("microsoft-partner")} alt="شريك حلول مايكروسوفت" />
              <div>
                <strong>Microsoft 365</strong>
                <span>الإنتاجية والأمان المتكامل</span>
              </div>
              <div>
                <strong>Microsoft Azure</strong>
                <span>البنية التحتية السحابية</span>
              </div>
            </div>
          </div>
          <img
            className={s.heroImage}
            src={asset("hero")}
            alt="سحابة آمنة ومحمية فوق خوادم المؤسسة"
            fetchPriority="high"
          />
        </div>
      </section>

      <section className={s.trustedSection}>
        <div className={`${s.container} ${s.trusted}`}>
          <p>موثوق به من كبرى المؤسسات في المنطقة</p>
          <img
            className={s.clientLogos}
            src={asset("clients")}
            alt="أوراسكوم للإنشاءات، السويدي إليكتريك، البنك التجاري الدولي، فودافون، سامسونج، اتصالات"
          />
          <Link href="/ar/portfolio">
            عرض جميع العملاء
            <ArrowLeft aria-hidden="true" size={16} />
          </Link>
        </div>
      </section>

      <div className={s.container}>
        <section className={`${s.section} ${s.solutions}`} id="solutions">
          <div className={s.headingRow}>
            <div>
              <Eyebrow>حلولنا</Eyebrow>
              <h2>أمان سحابي شامل لغدٍ أكثر قوة</h2>
              <p>حماية حديثة للأعمال المعاصرة. متكاملة، قابلة للتوسع ومبنية للنمو المستمر.</p>
            </div>
            <Link className={s.learnMore} href="/ar/book-consultation">
              احجز استشارة مجانية <ArrowLeft aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className={s.solutionGrid}>
            {solutions.map(([title, copy, icon]) => (
              <article className={s.solutionCard} key={title}>
                <img src={asset(icon)} alt="" />
                <h3>{title}</h3>
                <p>{copy}</p>
                <More subject={title} />
              </article>
            ))}
          </div>
        </section>

        <section className={`${s.section} ${s.process}`} id="process">
          <div className={s.processLayout}>
            <div className={s.processCopy}>
              <Eyebrow>منهجية العمل</Eyebrow>
              <h2>مسار واضح نحو بيئة سحابية أكثر أماناً</h2>
              <p>نتبع منهجية منظمة ومجربة لضمان أمان بيئتك السحابية وامتثالها وجاهزيتها لأعمالك.</p>
              <ol className={s.steps}>
                {process.map(([title, copy], index) => (
                  <li key={title}>
                    <span className={s.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                    {index < process.length - 1 && (
                      <ArrowLeft className={s.stepArrow} aria-hidden="true" size={16} />
                    )}
                  </li>
                ))}
              </ol>
            </div>
            <article className={s.processCard}>
              <img src={asset("strategy")} alt="توضيح استراتيجية السحابة" />
              <h3>من الاستراتيجية<br />إلى بيئة أكثر أماناً</h3>
              <p>لا نقتصر على تأمين سحابتك فقط، بل نساعدك على الاستفادة القصوى من إمكاناتها الكاملة.</p>
            </article>
          </div>
        </section>

        <section className={`${s.section} ${s.why}`}>
          <Eyebrow>لماذا ETripleSoft</Eyebrow>
          <h2>شريكك الموثوق في أمان السحابة</h2>
          <p>تقنيات عالمية. خبرات محلية. نتائج أعمال ملموسة.</p>
          <div className={s.whyGrid}>
            {reasons.map(([title, copy, icon]) => (
              <article key={title}>
                <img src={asset(icon)} alt="" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>

          <aside className={s.testimonial}>
            <p className={s.quoteText}>
              &ldquo;ساعدتنا ETripleSoft على تأمين بيئتنا السحابية وترحيل بياناتنا بسلاسة تامة، مع ضمان استمرارية الأعمال وحماية المعلومات الحساسة.&rdquo;
            </p>
            <div className={s.testimonialAuthor}>
              <strong>{cloudTestimonial.name}</strong>
              <span>{cloudTestimonial.role}، {cloudTestimonial.company}</span>
            </div>
          </aside>
        </section>

        <section className={`${s.section} ${s.industries}`}>
          <Eyebrow>القطاعات</Eyebrow>
          <h2>حلول مصممة خصيصاً لقطاع أعمالك</h2>
          <p>نوفر حلول أمان سحابية متخصصة تلبي المتطلبات الفريدة لكل قطاع.</p>
          <div className={s.industryGrid}>
            {industries.map(([name, icon]) => (
              <article key={name}>
                <img src={asset(icon)} alt="" />
                <h3>{name}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className={`${s.section} ${s.faqs}`}>
          <Eyebrow>الأسئلة الشائعة</Eyebrow>
          <h2>إجابات عن أمان السحابة وخدماتنا</h2>
          <div className={s.faqList}>
            {faqs.map(([question, answer]) => (
              <details className={s.faqItem} key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={`${s.section} ${s.cta}`}>
          <div className={s.ctaInner}>
            <h2>هل أنت جاهز لتأمين سحابتك وتطوير أعمالك؟</h2>
            <p>تحدث مع خبرائنا اليوم واحصل على خطة واضحة ومخصصة لحماية بيئتك الرقمية.</p>
            <div className={s.actions}>
              <Link className={s.button} href={contact}>
                تواصل معنا الآن
                <ArrowLeft aria-hidden="true" size={17} />
              </Link>
              <Link className={`${s.button} ${s.secondary}`} href="/ar/book-consultation">
                احجز استشارة مجانية
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
