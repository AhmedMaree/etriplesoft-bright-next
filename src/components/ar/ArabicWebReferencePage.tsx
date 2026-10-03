import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  PanelsTopLeft,
  Code2,
  Smartphone,
  ChartNoAxesColumnIncreasing,
  Zap,
  CirclePlay,
  Compass,
  PenTool,
  Wrench,
  Rocket,
  MapPin,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import s from "../web/WebReferencePage.module.css";
import { featuredTestimonials } from "@/data/testimonials";

const testimonial = featuredTestimonials.web;

const contact = "/ar/contact-us?service=تطوير%20المواقع";
const services = [
  ["مواقع الشركات والمؤسسات", "مواقع احترافية وواضحة مصممة حول رحلة عملائك.", "service-corporate"],
  ["صفحات الهبوط المخصصة", "صفحات مركزة للمنتجات والحملات وجذب العملاء.", "service-landing"],
  ["متاجر التجارة الإلكترونية", "متاجر إلكترونية متكاملة مع قنوات البيع والعمليات.", "service-ecommerce"],
  ["مواقع ووردبريس WordPress", "منصات نشر مرنة يمكن لفريقك إدارتها بسهولة.", "service-wordpress"],
  ["متاجر WooCommerce", "تجارة إلكترونية مبنية على منصة محتوى مألوفة ومرنة.", "service-woocommerce"],
  ["متاجر Shopify", "إعداد متجر إلكتروني متكامل مع كتالوج المنتجات والمخزون.", "service-shopify"],
] as const;

const benefits = [
  ["أداء وسرعة فائقة", "صفحات سريعة التحميل مع تحسين الأصول والشيفرة البرمجية.", "benefit-speed"],
  ["تصميم متجاوب بالكامل", "تجربة استخدام متسقة وسلسة عبر الهواتف والأجهزة اللوحية والمكتبية.", "benefit-mobile"],
  ["دعم العربية والإنجليزية", "تصميم منظم يدعم اللغتين واتجاهي القراءة RTL وLTR.", "benefit-search"],
  ["مبني لتحقيق النتائج", "مسارات واضحة تقود الزوار نحو الخطوة التالية المفيدة.", "benefit-target"],
] as const;

const steps = [
  ["التخطيط", "مواءمة الموقع مع أهدافك ومحتواك وجمهورك المستهدف.", Compass],
  ["التصميم", "هيكلة الواجهة وتجربة الاستخدام حول رحلات واقعية.", PenTool],
  ["التطوير", "بناء المنصة وربطها بالأنظمة واختبارها عبر الأجهزة.", Wrench],
  ["الإطلاق", "إطلاق الموقع والاتفاق على ترتيبات الدعم والتطوير.", Rocket],
] as const;

const projects = [
  ["موقع شركة إقليمية", "انطباع أول متميز وقوي لشركة أعمال إقليمية.", "corporate-preview"],
  ["متجر إلكتروني متكامل", "استكشاف المنتجات والشراء في رحلة واحدة سلسة.", "commerce-preview"],
  ["صفحة هبوط لحملة", "مفهوم مركز ومباشر لإطلاق منتج جديد بنجاح.", "campaign-preview"],
] as const;

const regions = [
  ["مصر", "القاهرة", "country-egypt"],
  ["الإمارات العربية المتحدة", "دبي", "country-uae"],
  ["المملكة العربية السعودية", "الرياض", "country-ksa"],
] as const;

function Action({
  children,
  secondary = false,
  href = contact,
}: {
  children: React.ReactNode;
  secondary?: boolean;
  href?: string;
}) {
  return (
    <Link href={href} className={`${s.action} ${secondary ? s.secondary : ""}`}>
      {secondary && <CirclePlay aria-hidden="true" />}
      {children}
      {!secondary && <ArrowLeft className={s.ctaArrow} aria-hidden="true" size={17} />}
    </Link>
  );
}

function Heading({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className={s.heading}>
      <span>{label}</span>
      <h2>{children}</h2>
    </div>
  );
}

function Asset({ name, alt, className = "" }: { name: string; alt: string; className?: string }) {
  return <img className={className} src={`/images/web/reference/${name}.webp`} alt={alt} loading="lazy" />;
}

export function ArabicWebReferencePage() {
  return (
    <main id="main" className={`${s.page} ar-service-page`} dir="rtl">
      <section className={s.hero}>
        <div className={`container ${s.container} ${s.heroGrid}`}>
          <div className={s.heroCopy}>
            <span className={s.pill}>
              <Code2 aria-hidden="true" size={16} />
              تصميم وتطوير المواقع
            </span>
            <h1>
              <span><em>منصات الويب</em></span>
              <span>التي تدفع أعمالك</span>
              <span>للأمام</span>
            </h1>
            <p>
              نصمم ونطور مواقع وتطبيقات ويب عالية الأداء تجمع بين التصميم الحديث، وتجربة المستخدم السلسة، والنتائج الحقيقية لنمو أعمالك.
            </p>
            <div className={s.actions}>
              <Action>ابدأ مشروعك الآن</Action>
              <Action secondary href="#work">شاهد أعمالنا</Action>
            </div>
            <div className={s.heroBenefits}>
              <div><span className={s.benefitIcon}><PanelsTopLeft aria-hidden="true" /></span><span>تصاميم<br />عصرية وحديثة</span></div>
              <div><span className={s.benefitIcon}><Zap aria-hidden="true" /></span><span>أداء عالٍ<br />وسرعة فائقة</span></div>
              <div><span className={s.benefitIcon}><Smartphone aria-hidden="true" /></span><span>مناسبة<br />لكل الأجهزة</span></div>
              <div><span className={s.benefitIcon}><ChartNoAxesColumnIncreasing aria-hidden="true" /></span><span>مصممة لنمو<br />الأعمال</span></div>
            </div>
          </div>
          <div className={s.heroVisual}>
            <Image
              src="/images/web/reference/hero-scene-ar.webp"
              alt="حاسوب محمول وهاتف يعرضان موقع شركة، تحيط بهما بطاقات توضح جودة التصميم والتطوير والنتائج"
              width={1448}
              height={1086}
              sizes="(max-width: 760px) calc(100vw - 36px), (max-width: 820px) calc(100vw - 64px), (max-width: 1200px) 50vw, 48vw"
              fetchPriority="high"
              loading="eager"
              className={s.heroArt}
            />
          </div>
        </div>
      </section>

      <section className={s.regionStrip} aria-label="مكاتبنا الإقليمية">
        <div className={`container ${s.container} ${s.regionInner}`}>
          <div className={s.regionLead}>
            <MapPin aria-hidden="true" size={24} />
            <strong>فرق عمل محلية.<br />حضور إقليمي واسع.</strong>
          </div>
          <div className={s.regionCards}>
            {regions.map(([name, city, image]) => (
              <div key={name}>
                <Asset name={image} alt="" className={s.regionIcon} />
                <span>
                  <strong>{name}</strong>
                  <small>{city}</small>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={`container ${s.container}`}>
        <section className={`${s.section} ${s.services}`} id="solutions">
          <div className={s.sectionIntro}>
            <div>
              <Heading label="حلولنا">تصميم وتطوير المواقع<br />لنمو حقيقي للأعمال</Heading>
              <p>من مواقع الشركات إلى المتاجر الإلكترونية، نبني منصات واضحة، مفيدة وسهلة الإدارة.</p>
            </div>
            <Link className={s.outlineLink} href={contact}>
              جميع الخدمات <ArrowLeft aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className={s.serviceGrid}>
            {services.map(([title, copy, image]) => (
              <Link className={s.serviceCard} href={`${contact}&solution=${encodeURIComponent(title)}`} key={title}>
                <span className={s.serviceIcon}><Asset name={image} alt="" /></span>
                <span className={s.cardCopy}><strong>{title}</strong><small>{copy}</small></span>
                <span className={s.cardArrow}><ArrowLeft aria-hidden="true" size={17} /></span>
              </Link>
            ))}
          </div>
        </section>

        <section className={`${s.section} ${s.why}`}>
          <div className={s.whyIntro}>
            <Heading label="لماذا ETripleSoft">أكثر من مجرد موقع ويب</Heading>
            <p>نجمع بين التصميم الإبداعي والتقنية المتقدمة وسياق الأعمال لبناء موقع تفخر به ويفهمه عملاؤك بسهولة.</p>
          </div>
          <div className={s.benefitGrid}>
            {benefits.map(([title, copy, image]) => (
              <article key={title}>
                <span><Asset name={image} alt="" /></span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${s.section} ${s.process}`} id="process">
          <div className={s.sectionIntro}>
            <Heading label="منهجية العمل">مسار واضح نحو الإطلاق الناجح</Heading>
            <Action>لنبدأ معاً</Action>
          </div>
          <ol className={s.steps}>
            {steps.map(([title, copy, Icon], index) => (
              <li key={title}>
                <span className={s.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
                <Icon aria-hidden="true" size={24} />
                <div><h3>{title}</h3><p>{copy}</p></div>
                {index < steps.length - 1 && <ArrowLeft className={s.stepArrow} aria-hidden="true" size={18} />}
              </li>
            ))}
          </ol>
        </section>

        <section className={`${s.section} ${s.work}`} id="work">
          <div className={s.sectionIntro}>
            <Heading label="نماذج ومفاهيم تصميمية">مواقع مصممة لرحلات عملاء واقعية</Heading>
            <Link className={s.outlineLink} href="/ar/portfolio">
              عرض جميع الأعمال <ArrowLeft aria-hidden="true" size={16} />
            </Link>
          </div>
          <div className={s.projectGrid}>
            {projects.map(([title, copy, image]) => (
              <article className={s.projectCard} key={title}>
                <Asset name={image} alt={`نموذج تصميم ${title}`} />
                <div>
                  <span>مفهوم تصميمي</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${s.section} ${s.proof}`}>
          <div className={s.proofLead}>
            <Heading label="آراء العملاء">ماذا يقول عملاؤنا عن عملنا</Heading>
          </div>
          <figure className={s.testimonial}>
            <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
            <figcaption>
              <span className={s.avatar} aria-hidden="true">TG</span>
              <span><strong>{testimonial.name}</strong><small>{testimonial.role}، {testimonial.company}</small></span>
            </figcaption>
          </figure>
        </section>

        <section className={s.cta} id="contact">
          <div className={s.ctaCopy}>
            <span>هل لديك فكرة مشروع؟</span>
            <h2>هل أنت جاهز لبناء موقعك الجديد؟</h2>
            <p>دعنا نبني موقعاً سريعاً وعالي الأداء يدعم نمو أعمالك وتحقيق أهدافك.</p>
            <div className={s.actions}>
              <Action>ابدأ مشروعك</Action>
              <Action secondary href="/ar/portfolio">استكشف أعمالنا</Action>
            </div>
            <ul>
              <li>مخطط بعناية حول أهدافك</li>
              <li>متجاوب بالكامل عبر كافة الأجهزة</li>
              <li>متصل بسلاسة مع أنظمة عملك</li>
            </ul>
          </div>
          <div className={s.form}>
            <ContactForm locale="ar" initialService="Web Development" />
          </div>
        </section>
      </div>
    </main>
  );
}
