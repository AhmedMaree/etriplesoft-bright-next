import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ChartNoAxesColumnIncreasing,
  Factory,
  Hospital,
  Landmark,
  Headphones,
  LockKeyhole,
  Plus,
  RadioTower,
  ShoppingCart,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { portfolioItems } from "@/data/portfolio";
import s from "../cloud/CloudReferencePage.module.css";
import { cloudTestimonials } from "@/data/testimonials";
import { CloudTestimonialCarousel } from "../cloud/CloudTestimonialCarousel";
import { CloudClosingCta } from "../cloud/CloudClosingCta";
import { CloudSolutionsSection } from "../cloud/CloudSolutionsSection";
import { CloudProcessSection } from "../cloud/CloudProcessSection";
import { arHome } from "@/i18n/ar";

const contact = "/ar/contact-us?service=السحابة%20والأمن";
const asset = (name: string) => `/images/cloud/reference/${name}.webp`;
function localizeTestimonial<T extends { id: string; quote: string; name: string; role: string }>(
  testimonial: T,
) {
  const translation = arHome.testimonials.items.find((item) => item.id === testimonial.id);
  return {
    ...testimonial,
    quote: translation?.quote ?? testimonial.quote,
    name: translation?.name ?? testimonial.name,
    role: translation?.role ?? testimonial.role,
  };
}

const cloudTestimonialItems = cloudTestimonials.map((item) => ({
  ...localizeTestimonial(item),
  avatarSrc: item.id === "summit" ? asset("customer") : undefined,
}));
const trustLogos = portfolioItems
  .filter((item): item is typeof item & { image: string; source: string } => Boolean(item.image && item.source))
  .slice(0, 6);

const solutions = [
  ["Microsoft 365", "إنتاجية وتعاون آمن للفرق.", "microsoft"],
  ["Microsoft Azure", "أمان السحابة وحوكمة البنية التحتية.", "azure"],
  ["الهوية والوصول", "صلاحيات دقيقة وتحكم شامل في الوصول.", "identity"],
  ["حماية الأجهزة ونقاط النهاية", "أجهزة مؤمنة وفرق عمل منتجة.", "endpoint"],
  ["النسخ الاحتياطي والاستعادة", "بياناتك محمية ومتاحة دائماً.", "backup"],
  ["الامتثال والحوكمة", "تلبية متطلبات الأمان واللوائح المعمول بها.", "compliance"],
] as const;


const reasons = [
  ["خبرة موثوقة", "سنوات من الخبرة في حلول السحابة والأمن السيبراني.", "expertise"],
  ["فريق معتمد", "خبرات معتمدة من مايكروسوفت في السحابة والهوية والأمان.", "certified"],
  ["دعم سريع واستجابة فورية", "مساعدة إقليمية من فريق يمكنك الوصول إليه دائماً.", "support"],
  ["تواجد محلي وإقليمي", "فهم عميق لمتطلبات الأسواق في مصر والسعودية والإمارات.", "presence"],
  ["تركيز على أهداف الأعمال", "استراتيجيات أمنية متوافقة تماماً مع أهداف نمو شركتك.", "growth"],
] as const;

const industryCardsArabic = [
  { title: "\u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0645\u0635\u0631\u0641\u064a\u0629 \u0648\u0627\u0644\u0645\u0627\u0644\u064a\u0629", description: "\u062d\u0645\u0627\u064a\u0629 \u0627\u0644\u0639\u0645\u0644\u064a\u0627\u062a \u0648\u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u062e\u062f\u0645\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621.", image: "banking", alt: "\u0645\u0628\u0646\u0649 \u0644\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0645\u0635\u0631\u0641\u064a\u0629 \u0648\u0627\u0644\u0645\u0627\u0644\u064a\u0629", Icon: Landmark },
  { title: "\u0627\u0644\u0627\u062a\u0635\u0627\u0644\u0627\u062a", description: "\u0627\u062a\u0635\u0627\u0644 \u0645\u0648\u062b\u0648\u0642 \u0648\u0622\u0645\u0646 \u0648\u062f\u0627\u0626\u0645.", image: "telecommunications", alt: "\u0623\u0628\u0631\u0627\u062c \u0627\u0644\u0627\u062a\u0635\u0627\u0644\u0627\u062a", Icon: RadioTower },
  { title: "\u0627\u0644\u0642\u0637\u0627\u0639 \u0627\u0644\u062d\u0643\u0648\u0645\u064a \u0648\u0627\u0644\u0639\u0627\u0645", description: "\u0623\u0645\u0646 \u0645\u0648\u062b\u0648\u0642 \u0644\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u062d\u064a\u0648\u064a\u0629.", image: "government", alt: "\u0645\u0628\u0646\u0649 \u062d\u0643\u0648\u0645\u064a \u0641\u064a \u0645\u0635\u0631", Icon: Landmark },
  { title: "\u0627\u0644\u0631\u0639\u0627\u064a\u0629 \u0627\u0644\u0635\u062d\u064a\u0629", description: "\u062d\u0645\u0627\u064a\u0629 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u0631\u0636\u0649 \u0627\u0644\u062d\u0633\u0627\u0633\u0629.", image: "healthcare", alt: "\u0645\u0631\u0641\u0642 \u0635\u062d\u064a \u062d\u062f\u064a\u062b", Icon: Hospital },
  { title: "\u0627\u0644\u062a\u0635\u0646\u064a\u0639", description: "\u0639\u0645\u0644\u064a\u0627\u062a \u0622\u0645\u0646\u0629 \u0648\u0645\u0631\u0646\u0629 \u0648\u0645\u0633\u062a\u062f\u0627\u0645\u0629.", image: "manufacturing", alt: "\u0645\u0646\u0634\u0623\u0629 \u0635\u0646\u0627\u0639\u064a\u0629", Icon: Factory },
  { title: "\u062a\u062c\u0627\u0631\u0629 \u0627\u0644\u062a\u062c\u0632\u0626\u0629 \u0648\u0627\u0644\u062a\u062c\u0627\u0631\u0629 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629", description: "\u062a\u062c\u0627\u0631\u0628 \u0631\u0642\u0645\u064a\u0629 \u0622\u0645\u0646\u0629 \u0648\u0633\u0644\u0633\u0629 \u0644\u0644\u0639\u0645\u0644\u0627\u0621.", image: "retail", alt: "\u0645\u0631\u0641\u0642 \u062d\u062f\u064a\u062b \u0644\u0644\u062a\u062c\u0627\u0631\u0629 \u0648\u0627\u0644\u062a\u062c\u0632\u0626\u0629", Icon: ShoppingCart },
] as const;

const industryHeadingArabic = {
  eyebrow: "\u0627\u0644\u0642\u0637\u0627\u0639\u0627\u062a \u0648\u062d\u0627\u0644\u0627\u062a \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",
  title: "\u0623\u0645\u0646 \u0633\u062d\u0627\u0628\u064a \u0639\u0628\u0631",
  highlight: "\u062c\u0645\u064a\u0639 \u0627\u0644\u0642\u0637\u0627\u0639\u0627\u062a",
  description: "\u0646\u0633\u0627\u0639\u062f \u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062a \u0641\u064a \u0645\u0635\u0631 \u0639\u0628\u0631 \u0645\u062e\u062a\u0644\u0641 \u0627\u0644\u0642\u0637\u0627\u0639\u0627\u062a \u0639\u0644\u0649 \u062a\u0623\u0645\u064a\u0646 \u0628\u064a\u0626\u0627\u062a\u0647\u0645 \u0627\u0644\u0633\u062d\u0627\u0628\u064a\u0629 \u0648\u062a\u0633\u0631\u064a\u0639 \u0631\u062d\u0644\u062a\u0647\u0645 \u0641\u064a \u0627\u0644\u062a\u062d\u0648\u0644 \u0627\u0644\u0631\u0642\u0645\u064a.",
  cta: "\u0627\u0633\u062a\u0643\u0634\u0641 \u062c\u0645\u064a\u0639 \u0627\u0644\u0642\u0637\u0627\u0639\u0627\u062a",
} as const;

const faqs = [
  [
    '\u0643\u064a\u0641 \u062a\u0624\u0645\u0651\u0646\u0648\u0646 Microsoft 365\u061f',
    '\u0646\u0631\u0627\u062c\u0639 \u0627\u0644\u0647\u0648\u064a\u0629 \u0648\u0627\u0644\u0648\u0635\u0648\u0644 \u0648\u062d\u0645\u0627\u064a\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u0623\u0645\u0646 \u0627\u0644\u0628\u0631\u064a\u062f \u0648\u0625\u0639\u062f\u0627\u062f\u0627\u062a Teams \u0648SharePoint\u060c \u062b\u0645 \u0646\u0648\u0635\u064a \u0628\u0636\u0648\u0627\u0628\u0637 \u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0628\u064a\u0626\u062a\u0643\u0645.',
  ],
  [
    '\u0647\u0644 \u062a\u0633\u0627\u0639\u062f\u0648\u0646 \u0641\u064a \u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0627\u0645\u062a\u062b\u0627\u0644 \u0648\u0627\u0644\u062d\u0648\u0643\u0645\u0629\u061f',
    '\u0646\u0642\u064a\u0651\u0645 \u0627\u0644\u0628\u064a\u0626\u0629 \u0648\u0641\u0642 \u0627\u0644\u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0630\u0627\u062a \u0627\u0644\u0635\u0644\u0629 \u0628\u0645\u0624\u0633\u0633\u062a\u0643\u0645\u060c \u0648\u0646\u062d\u062f\u062f \u0627\u0644\u0636\u0648\u0627\u0628\u0637 \u0648\u0627\u0644\u0623\u062f\u0644\u0629 \u0627\u0644\u062a\u064a \u064a\u062d\u062a\u0627\u062c \u0641\u0631\u064a\u0642\u0643\u0645 \u0625\u0644\u0649 \u0625\u0639\u062f\u0627\u062f\u0647\u0627 \u0648\u062a\u0637\u0628\u064a\u0642\u0647\u0627.',
  ],
  [
    '\u0647\u0644 \u062a\u0634\u0645\u0644 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0645\u0633\u062a\u0645\u0631\u0629 \u0648\u0627\u0644\u0627\u0633\u062a\u062c\u0627\u0628\u0629\u061f',
    '\u064a\u0645\u0643\u0646 \u0625\u062f\u0631\u0627\u062c \u0627\u0644\u0645\u062a\u0627\u0628\u0639\u0629 \u0648\u0627\u0644\u0627\u0633\u062a\u062c\u0627\u0628\u0629 \u0644\u0644\u062d\u0648\u0627\u062f\u062b \u0636\u0645\u0646 \u0646\u0637\u0627\u0642 \u062f\u0639\u0645 \u0645\u062a\u0641\u0642 \u0639\u0644\u064a\u0647\u060c \u0648\u0641\u0642 \u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0648\u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u062a\u0634\u063a\u064a\u0644 \u0644\u062f\u064a\u0643\u0645.',
  ],
  [
    '\u0645\u0627 \u0627\u0644\u0630\u064a \u064a\u0642\u062f\u0645\u0647 \u0645\u0632\u0648\u0651\u062f \u062e\u062f\u0645\u0627\u062a \u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u064f\u062f\u0627\u0631\u0629\u061f',
    '\u064a\u062a\u0648\u0644\u0649 \u0645\u0632\u0648\u0651\u062f \u062e\u062f\u0645\u0627\u062a \u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u064f\u062f\u0627\u0631\u0629 \u0645\u0633\u0624\u0648\u0644\u064a\u0629 \u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0628\u0646\u064a\u0629 \u0627\u0644\u062a\u0642\u0646\u064a\u0629 \u0644\u0644\u0634\u0631\u0643\u0629 \u0648\u0635\u064a\u0627\u0646\u062a\u0647\u0627 \u0648\u062a\u0623\u0645\u064a\u0646\u0647\u0627\u060c \u0628\u0645\u0627 \u064a\u0634\u0645\u0644 \u0627\u0644\u062e\u0648\u0627\u062f\u0645 \u0648\u0627\u0644\u0634\u0628\u0643\u0627\u062a \u0648\u0627\u0644\u0623\u0646\u0638\u0645\u0629 \u0627\u0644\u0633\u062d\u0627\u0628\u064a\u0629 \u0648\u0627\u0644\u0623\u0645\u0646 \u0627\u0644\u0633\u064a\u0628\u0631\u0627\u0646\u064a\u060c \u0639\u0627\u062f\u0629\u064b \u0645\u0642\u0627\u0628\u0644 \u0631\u0633\u0648\u0645 \u0634\u0647\u0631\u064a\u0629 \u0645\u062a\u0648\u0642\u0639\u0629 \u0628\u062f\u0644\u0627\u064b \u0645\u0646 \u0627\u0644\u0641\u0648\u062a\u0631\u0629 \u0639\u0646\u062f \u062d\u062f\u0648\u062b \u0639\u0637\u0644 \u0641\u0642\u0637.',
  ],
  [
    '\u0645\u0627 \u0627\u0644\u0641\u0631\u0642 \u0628\u064a\u0646 \u062e\u062f\u0645\u0627\u062a \u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u064f\u062f\u0627\u0631\u0629 \u0648\u0627\u0644\u062f\u0639\u0645 \u0639\u0646\u062f \u062a\u0639\u0637\u0644 \u0627\u0644\u0623\u0646\u0638\u0645\u0629\u061f',
    '\u064a\u0639\u062a\u0645\u062f \u062f\u0639\u0645 \u0627\u0644\u0623\u0639\u0637\u0627\u0644 \u0639\u0644\u0649 \u0625\u0635\u0644\u0627\u062d \u0627\u0644\u0645\u0634\u0643\u0644\u0629 \u0628\u0639\u062f \u0648\u0642\u0648\u0639\u0647\u0627\u060c \u0645\u0627 \u064a\u062c\u0639\u0644 \u0627\u0644\u062a\u0643\u0627\u0644\u064a\u0641 \u063a\u064a\u0631 \u0645\u062a\u0648\u0642\u0639\u0629. \u0623\u0645\u0627 \u0627\u0644\u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0645\u064f\u062f\u0627\u0631\u0629 \u0641\u062a\u0639\u062a\u0645\u062f \u0639\u0644\u0649 \u0627\u0644\u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0627\u0633\u062a\u0628\u0627\u0642\u064a\u0629 \u0645\u0642\u0627\u0628\u0644 \u0631\u0633\u0648\u0645 \u0634\u0647\u0631\u064a\u0629 \u062b\u0627\u0628\u062a\u0629\u060c \u0648\u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062a \u0642\u0628\u0644 \u062a\u0633\u0628\u0628\u0647\u0627 \u0641\u064a \u062a\u0648\u0642\u0641 \u0627\u0644\u0639\u0645\u0644.',
  ],
] as const;

const architectureBenefits = [
  ["أمان أقوى", LockKeyhole],
  ["إنتاجية أعلى", ChartNoAxesColumnIncreasing],
  ["إدارة أسهل", Settings],
  ["امتثال كامل", ShieldCheck],
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
    <main id="main" className={`${s.page} ar-service-page`} dir="rtl">
      <section className={`${s.hero} ${s.heroRtl}`}>
        <div className={`${s.container} ${s.heroGrid}`}>
          <div className={s.heroCopy}>
            <Eyebrow>سحابة آمنة. أعمال أكثر قوة.</Eyebrow>
            <h1>
              حلول أمان السحابة
              <br />
              في <em>مصر</em>
            </h1>
            <p>
              احمِ السحابة والبيانات وأعمالك بحلول أمن سحابي بمستوى المؤسسات. تساعد ETripleSoft المؤسسات في مصر على تصميم بيئات السحابة الحديثة وتأمينها وإدارتها بثقة.
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
            <div className={s.partners} aria-label="منصات السحابة">
              <div className={s.partnerCard}>
                <Image src={asset("microsoft")} alt="" width={38} height={38} />
                <span>
                  <strong>مايكروسوفت 365</strong>
                  <small>الإنتاجية والأمان</small>
                </span>
                <ArrowLeft aria-hidden="true" />
              </div>
              <div className={s.partnerCard}>
                <Image src={asset("azure")} alt="" width={38} height={38} />
                <span>
                  <strong>مايكروسوفت أزور</strong>
                  <small>البنية التحتية السحابية</small>
                </span>
                <ArrowLeft aria-hidden="true" />
              </div>
            </div>
          </div>
          <Image
            className={s.heroImage}
            src={asset("hero-arabic")}
            alt="حماية السحابة ومراقبة التهديدات والامتثال فوق الخوادم"
            width={1448}
            height={1086}
            sizes="(max-width: 900px) calc(100vw - 36px), (max-width: 1240px) 48vw, 600px"
            preload
          />
        </div>
      </section>

      <section className={s.trustedSection} aria-label="عملاء السحابة وقصص النجاح">
        <div className={`${s.container} ${s.trusted}`}>
          <p>موثوق به من قبل مؤسسات رائدة في مصر</p>
          <ul className={s.clientLogos} aria-label="عملاء مختارون من قصص نجاحنا">
            {trustLogos.map((client) => (
              <li key={client.id}>
                <Image
                  src={client.image}
                  alt={client.name}
                  width={72}
                  height={72}
                  sizes="(max-width: 720px) 12vw, 48px"
                />
              </li>
            ))}
          </ul>
          <Link href="/ar/portfolio">
            عرض جميع العملاء
            <ArrowLeft aria-hidden="true" size={16} />
          </Link>
        </div>
      </section>

      <div className={s.container}>
        <CloudSolutionsSection locale="ar" />

        <CloudProcessSection locale="ar" />

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

        </section>
      </div>

      <section className={s.statsBand}>
        <div className={`${s.container} ${s.statsInner}`}>
          <h2>
            أرقام تروي
            <br />
            قصتنا
          </h2>
          <div className={s.statsList}>
            {[
              ["250+", "مشروعاً منجزاً"],
              ["3", "دول"],
              ["8+", "سنوات من الخبرة"],
            ].map(([number, label]) => (
              <div key={label}>
                <strong>{number}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className={`container ${s.architectureContainer}`}>
        <section className={`${s.section} ${s.architectureSection}`}>
          <div className={s.architectureLayout}>
            <div className={s.architecture}>
              <Eyebrow>بنية الحلول</Eyebrow>
              <h2>
                بيئة <em>سحابية</em> أكثر أماناً
              </h2>
              <p>الأشخاص والأجهزة والبيانات محمية في كل مكان.</p>
              <Image
                className={s.architectureImage}
                src="/images/cloud/reference/secure-ar-image.webp"
                alt="بنية أمنية تربط المستخدمين والأجهزة والتطبيقات والبيانات المشفرة والحماية من التهديدات والامتثال"
                width={1536}
                height={1024}
                quality={95}
                sizes="(max-width: 767px) calc(100vw - 36px), (max-width: 1279px) calc(100vw - 96px), 760px"
              />
              <ul className={s.benefitStrip} aria-label="فوائد أمن السحابة">
                {architectureBenefits.map(([label, Icon]) => (
                  <li key={label}>
                    <span className={s.benefitIcon}><Icon aria-hidden="true" /></span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={s.proof}>
              <CloudTestimonialCarousel items={cloudTestimonialItems} locale="ar" />
              <div className={s.faq}>
                <div className={s.headingRow}>
                  <h3>الأسئلة الشائعة</h3>
                  <Link href="/ar/faqs" className={s.outlineLink}>
                    عرض جميع الأسئلة
                    <ArrowLeft aria-hidden="true" size={16} />
                  </Link>
                </div>
                {faqs.map(([question, answer]) => (
                  <details key={question}>
                    <summary>
                      {question}
                      <Plus aria-hidden="true" />
                    </summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={`${s.section} ${s.industries}`} dir="rtl">
          <div className={s.industryContent}>
            <div className={s.headingRow}>
              <div className={s.industryIntro}>
                <Eyebrow>{industryHeadingArabic.eyebrow}</Eyebrow>
                <h2>
                  {industryHeadingArabic.title}
                  <br />
                  <em>{industryHeadingArabic.highlight}</em>
                </h2>
                <p>{industryHeadingArabic.description}</p>
              </div>
              <Link className={s.industryCta} href="/ar/industries">
                {industryHeadingArabic.cta}
                <ArrowLeft aria-hidden="true" size={20} />
              </Link>
            </div>
            <div className={s.industryGrid}>
              {industryCardsArabic.map(({ title, description, image, alt, Icon }) => (
                <Link
                  href={`${contact}&industry=${encodeURIComponent(title)}`}
                  className={s.industryCard}
                  key={title}
                  dir="rtl"
                >
                  <Image
                    src={`/images/industries/${image}.webp`}
                    alt={alt}
                    fill
                    quality={90}
                    sizes="(max-width: 620px) calc(100vw - 40px), (max-width: 1100px) 31vw, (max-width: 1279px) 15vw, 197px"
                  />
                  <span className={s.industryIcon}><Icon aria-hidden="true" /></span>
                  <span className={s.industryCopy}>
                    <strong>{title}</strong>
                    <span>{description}</span>
                  </span>
                  <span className={s.industryArrow} aria-hidden="true"><ArrowLeft /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      <CloudClosingCta href={contact} locale="ar" />
    </main>
  );
}
