import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  Building2,
  ChartNoAxesColumnIncreasing,
  Code2,
  Heart,
  Layers3,
  MapPin,
  MessageCircleMore,
  Quote,
  Settings,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";
import { Button, PartnerBadges } from "@/components/site";
import s from "@/components/about-reference.module.css";
import { featuredTestimonials } from "@/data/testimonials";

const principles = [
  [
    "النتائج قبل الساعات",
    "نركز على مخرجات الأعمال المفيدة والقابلة للقياس، لا على عدد الساعات المحتسبة.",
    Target,
  ],
  [
    "الوضوح من اليوم الأول",
    "تواصل شفاف وجداول زمنية واقعية دون وعود غير قابلة للتنفيذ.",
    MessageCircleMore,
  ],
  [
    "حلول تُبنى لتمتلكها",
    "أنظمة يستطيع فريقك تشغيلها وإدارتها وتطويرها بكل استقلالية.",
    Layers3,
  ],
  [
    "شراكة طويلة الأمد",
    "دعم ومتابعة مستمرة تتجاوز مرحلة الإطلاق لتضمن استدامة نجاحك.",
    Heart,
  ],
] as const;

const reasons = [
  [
    "تواجد إقليمي مباشر",
    "فرق عمل محلية تخدم الشركات في مصر والمملكة العربية السعودية والإمارات.",
    MapPin,
  ],
  [
    "تسليم شامل ومتكامل",
    "من التخطيط والاستكشاف والتنفيذ إلى التدريب والدعم المستمر.",
    Layers3,
  ],
  [
    "خبرة معتمدة في أودو",
    "شريك أودو الذهبي بخبرات تنفيذية عملية عبر مئات المشروعات الناجحة.",
    Settings,
  ],
  [
    "شراكات تقنية عالمية",
    "قدرات وشراكات معتمدة مع مايكروسوفت تدعم الحلول التي نقدمها.",
    BadgeCheck,
  ],
] as const;

const capabilities = [
  [
    "استشاريون وظيفيون",
    "فهم إجراءات عملك وصياغة حلول عملية تلائم متطلباتك بدقة.",
    ChartNoAxesColumnIncreasing,
  ],
  [
    "مهندسو ومطورو أودو",
    "تهيئة وتخصيص وربط أنظمة الأعمال بأعلى معايير الكفاءة والجودة.",
    Code2,
  ],
  [
    "الدعم ونجاح العملاء",
    "مساعدة مستمرة لضمان سلاسة واستقرار عملياتك التشغيلية اليومية.",
    ShieldCheck,
  ],
  [
    "التدريب والتمكين",
    "تأهيل فريقك للعمل بثقة واحترافية على أدواته الرقمية الحديثة.",
    UsersRound,
  ],
] as const;

const locations = [
  ["القاهرة", "مصر", "cairo"],
  ["الرياض", "المملكة العربية السعودية", "riyadh"],
  ["دبي", "الإمارات العربية المتحدة", "dubai"],
] as const;

const realPartners = [
  { name: "Hyper-One", image: "/images/portfolio/hyper-one.webp", href: "/ar/portfolio" },
  { name: "Mazaya", image: "/images/portfolio/mazaya.webp", href: "/ar/portfolio" },
  { name: "ITQ", image: "/images/portfolio/itq.webp", href: "/ar/portfolio" },
  { name: "Mapy", image: "/images/portfolio/mapy.webp", href: "/ar/portfolio" },
  { name: "Meat-Bun", image: "/images/portfolio/meat-bun.webp", href: "/ar/portfolio" },
  { name: "OneStack", image: "/images/portfolio/onestack.webp", href: "/ar/portfolio" },
];

function Heading({
  label,
  title,
  children,
  className = "",
}: {
  label: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`${s.heading} ${className}`}>
      <span className={s.label}>{label}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

export function ArabicAboutPage() {
  return (
    <main id="main" className={s.page} dir="rtl">
      {/* Hero Section */}
      <section className={s.hero}>
        <div className={s.heroImage}>
          <Image
            src="/images/about/hero.webp"
            alt="أفق دبي المائي ومباني الأعمال"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 72vw"
          />
        </div>
        <div className={`${s.container} ${s.heroInner}`}>
          <div className={s.heroCopy}>
            <span className={s.label}>عن ETripleSoft</span>
            <h1>
              تكنولوجيا تدفع <em>أعمالك نحو الأمام.</em>
            </h1>
            <p>
              نساعد الشركات في مصر والإمارات والمملكة العربية السعودية على
              التحول والنمو والريادة عبر أنظمة أودو ERP وحلول رقمية صُممت للعمل
              الفعلي.
            </p>
            <div className={s.heroActions}>
              <Button gradient href="/ar/book-consultation">
                احجز استشارة مجانية
              </Button>
              <Button secondary href="#purpose">
                استكشف قصتنا
              </Button>
            </div>
            <div
              className={s.heroPartners}
              aria-label="الشراكات التقنية المعتمدة"
            >
              <PartnerBadges />
            </div>
          </div>
          <aside className={s.regionCard}>
            <div className={s.countryList}>
              <span>
                <i className={`${s.flag} ${s.egypt}`} />
                مصر
              </span>
              <span>
                <i className={`${s.flag} ${s.uae}`} />
                الإمارات
              </span>
              <span>
                <i className={`${s.flag} ${s.saudi}`} />
                السعودية
              </span>
            </div>
            <p>
              <MapPin aria-hidden="true" /> فرق محلية. خبرة إقليمية.
              <br />
              أثر حقيقي وملموس على الأعمال.
            </p>
          </aside>
        </div>
      </section>

      {/* Purpose Section */}
      <section className={`${s.section} ${s.purposeSection}`} id="purpose">
        <div className={`${s.container} ${s.purpose}`}>
          <div className={s.purposeCopy}>
            <Heading
              label="هدفنا ورؤيتنا"
              title={
                <>
                  بُنيت حول
                  <br />
                  <em>ما يحدث في الخطوة التالية.</em>
                </>
              }
            >
              نظل حاضرين معك من مرحلة الاستراتيجية والتخطيط حتى الإطلاق والدعم
              المستمر طويل الأمد، لنساعدك على تحويل قرارات اليوم إلى فرص الغد.
            </Heading>
          </div>
          <div className={s.purposeVisual}>
            <Image
              src="/images/about/purpose.webp"
              alt="قيادي في قطاع الأعمال ينظر نحو أفق دبي"
              fill
              sizes="(max-width: 760px) 100vw, 54vw"
            />
            <blockquote>
              <Quote aria-hidden="true" />
              <strong>
                هل لا يزال النظام موثوقاً ودقيقاً ومفيداً بعد عام من الإطلاق؟
              </strong>
              <span>هذا هو السؤال الجوهري الذي نصمم كل أعمالنا للإجابة عنه.</span>
            </blockquote>
          </div>
        </div>
        <div className={`${s.container} ${s.impact}`}>
          <Heading
            label="أثرنا الملموس"
            title={
              <>
                صناعة فارق حقيقي
                <br />
                في مختلف أسواق المنطقة
              </>
            }
          />
          <div className={s.impactGrid}>
            {[
              ["+250", "مشروعاً منجزاً", UsersRound],
              ["3", "دول ومكاتب إقليمية", Building2],
              ["+8", "سنوات من الخبرة العملية", Sparkles],
              ["6", "قطاعات رئيسية نخدمها", ChartNoAxesColumnIncreasing],
            ].map(([value, label, Glyph]) => {
              const Icon = Glyph as typeof UsersRound;
              return (
                <article key={String(label)}>
                  <span>
                    <Icon aria-hidden="true" />
                  </span>
                  <strong>{String(value)}</strong>
                  <b>{String(label)}</b>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className={`${s.section} ${s.valuesSection}`}>
        <div className={s.container}>
          <Heading
            label="مبادئنا الأساسية"
            title="القيم الراسخة التي توجه كل ما نقوم به."
          />
          <div className={s.valueGrid}>
            {principles.map(([title, copy, Glyph]) => (
              <article key={title}>
                <span>
                  <Glyph aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className={`${s.section} ${s.partnerSection}`}>
        <div className={`${s.container} ${s.partnerBand}`}>
          <Heading
            label="شركاء التكنولوجيا الموثوقون"
            title={
              <>
                حلول حقيقية.
                <br />
                شراكات مستدامة.
              </>
            }
          />
          <PartnerBadges />
        </div>
      </section>

      {/* Why ETripleSoft Section */}
      <section className={`${s.section} ${s.reasonsSection}`}>
        <div className={`${s.container} ${s.reasons}`}>
          <div className={s.reasonIntro}>
            <Heading
              label="لماذا ETripleSoft"
              title={
                <>
                  أكثر من مجرد مزود تقني..
                  <br />
                  <em>شريك حقيقي لنجاحك.</em>
                </>
              }
            >
              نجمع بين الفهم العميق لبيئة الأعمال الإقليمية والتميز التقني
              والالتزام الصادق بنجاحك المستمر. من الفكرة حتى التنفيذ، نبقى بجانبك
              كشريك طويل الأمد.
            </Heading>
            <Button gradient href="/ar/book-consultation">
              احجز استشارة مجانية
            </Button>
          </div>
          <div className={s.reasonGrid}>
            {reasons.map(([title, copy, Glyph], i) => (
              <article key={title}>
                <span className={s.index}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={s.reasonIcon}>
                  <Glyph aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Capabilities Section */}
      <section className={`${s.section} ${s.teamSection}`}>
        <div className={s.container}>
          <div className={s.teamFeature}>
            <div className={s.teamCopy}>
              <Heading
                label="الفريق والقدرات"
                title={
                  <>
                    فريق واحد..
                    <br />
                    <em>بتخصصات متعددة ومتكاملة.</em>
                  </>
                }
              >
                استشاريون ومطورون وخبراء دعم يعملون معاً لتحويل أهدافك التجارية
                إلى حلول تقنية عملية وناجحة.
              </Heading>
            </div>
            <Image
              src="/images/team.webp"
              alt="فريق العمل يتعاون حول شاشة حاسوب في المكتب"
              fill
              sizes="(max-width: 760px) 100vw, 70vw"
            />
          </div>
          <div className={s.capabilityGrid}>
            {capabilities.map(([title, copy, Glyph]) => (
              <article key={title}>
                <span>
                  <Glyph aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Presence Section */}
      <section className={`${s.section} ${s.locationsSection}`}>
        <div className={`${s.container} ${s.locations}`}>
          <div className={s.locationsHead}>
            <Heading
              label="تواجدنا الإقليمي"
              title={
                <>
                  حضور راسخ ومباشر
                  <br />
                  <em>عبر أهم عواصم المنطقة.</em>
                </>
              }
            >
              فرق عمل محلية مع وصول إقليمي شامل. نخدم عملاءنا من القاهرة
              والرياض ودبي.
            </Heading>
            <MapPin aria-hidden="true" />
          </div>
          <div className={s.officeGrid}>
            {locations.map(([city, country, image]) => (
              <article className={s.office} key={city}>
                <Image
                  src={`/images/about/${image}.webp`}
                  alt={`أفق مدينة ${city}`}
                  width={900}
                  height={500}
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
                <div>
                  <MapPin aria-hidden="true" />
                  <span>
                    <strong>{city}</strong>
                    <b>{country}</b>
                    <small>فريق محلي. وصول إقليمي.</small>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className={`${s.section} ${s.journeySection}`}>
        <div className={`${s.container} ${s.journey}`}>
          <Heading
            label="مسيرة نمونا"
            title={
              <>
                رحلة مستمرة من التطور
                <br />
                وصناعة أثر أكبر.
              </>
            }
          >
            من انطلاقة مركزة في القاهرة إلى دعم وتمكين كبرى الشركات عبر المنطقة،
            نواصل البناء والتطوير لما هو قادم.
          </Heading>
          <ol className={s.timeline}>
            <li>
              <span>
                <Target aria-hidden="true" />
              </span>
              <strong>الانطلاقة في القاهرة</strong>
              <p>تركيز خالص على تقديم تكنولوجيا عملية تخدم متطلبات الأعمال.</p>
            </li>
            <li>
              <span>
                <Building2 aria-hidden="true" />
              </span>
              <strong>التوسع الإقليمي</strong>
              <p>مكاتب وفرق متخصصة في مصر والمملكة العربية السعودية والإمارات.</p>
            </li>
            <li>
              <span>
                <ArrowLeft aria-hidden="true" />
              </span>
              <strong>حاضرنا اليوم</strong>
              <p>أكثر من 250 مشروعاً ناجحاً مع استمرار التوسع والنمو.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* Client Success Section with Real Portfolio Partners */}
      <section className={`${s.section} ${s.successSection}`}>
        <div className={`${s.container} ${s.success}`}>
          <div className={s.successCopy}>
            <Heading
              label="نجاح العملاء"
              title={
                <>
                  قصص حقيقية..
                  <br />
                  <em>وأثر مستدام.</em>
                </>
              }
            >
              محل ثقة كبرى المؤسسات والشركات في المنطقة. إليك ما يقوله عملاؤنا
              عن شراكتهم مع ETripleSoft.
            </Heading>
          </div>
          <blockquote className={s.testimonial}>
            <Quote aria-hidden="true" />
            <div>
              <p>
                «أحدث حل أودو ERP الخاص بهم تحولاً نوعياً في إدارة المخزون
                والمبيعات لدينا بكفاءة عالية.»
              </p>
              <cite>
                <strong>{featuredTestimonials.about.name}</strong>
                <span>
                  {featuredTestimonials.about.role}،{" "}
                  {featuredTestimonials.about.company}
                </span>
              </cite>
            </div>
          </blockquote>
          
          <div className={s.realPartnersShowcase}>
            <div className={s.realPartnersHead}>
              <span>شركاء النجاح ونماذج من مشروعاتنا المنجزة</span>
              <Link href="/ar/portfolio">
                استكشف جميع قصص النجاح <ArrowLeft size={14} aria-hidden="true" style={{ display: "inline-block", verticalAlign: "middle" }} />
              </Link>
            </div>
            <div className={s.realPartnersGrid}>
              {realPartners.map((partner) => (
                <Link
                  href={partner.href}
                  key={partner.name}
                  className={s.partnerCard}
                  title={partner.name}
                >
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={180}
                    height={80}
                    sizes="(max-width: 760px) 33vw, 150px"
                  />
                  <span>{partner.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className={s.cta}>
        <div className={s.container}>
          <div>
            <span>لنعمل معاً</span>
            <h2>لنبنِ معاً حلاً يدوم ويصنع الفارق.</h2>
            <p>تحدث مع فريقنا اليوم عن الخطوة القادمة لتطوير أعمالك.</p>
          </div>
          <div className={s.ctaActions}>
            <Button white href="/ar/book-consultation">
              احجز استشارة مجانية
            </Button>
            <a className={s.profileLink} href="/company-profile.pdf" download>
              تحميل الملف التعريفي للشركة (PDF)
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
