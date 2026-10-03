import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  FileSearch2,
  Layers3,
  Settings,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import s from "./CloudReferencePage.module.css";

type Locale = "en" | "ar";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const content: Record<Locale, {
  eyebrow: string;
  heading: string;
  description: string;
  featureHeading: string;
  featureBody: string;
  imageAlt: string;
  steps: ProcessStep[];
}> = {
  en: {
    eyebrow: "Our process",
    heading: "A Clear Path to a More Secure Cloud",
    description:
      "We follow a proven, structured approach to ensure your cloud environment is secure, compliant and optimized for your business.",
    featureHeading: "From Strategy to a Safer Tomorrow",
    featureBody:
      "We don’t just secure your cloud. We help you unlock its full potential.",
    imageAlt: "Protected cloud infrastructure with a security shield",
    steps: [
      { number: "01", title: "Assess", description: "Understand your current environment and risks.", icon: FileSearch2 },
      { number: "02", title: "Design", description: "Create a tailored security architecture.", icon: Layers3 },
      { number: "03", title: "Implement", description: "Deploy and integrate security solutions.", icon: Settings },
      { number: "04", title: "Monitor", description: "Detect threats and coordinate response.", icon: ShieldCheck },
      { number: "05", title: "Optimize", description: "Improve controls and compliance.", icon: BarChart3 },
    ],
  },
  ar: {
    eyebrow: "آلية العمل",
    heading: "مسار واضح نحو سحابة أكثر أماناً",
    description:
      "نتبع منهجية واضحة ومنظمة لضمان أن تكون بيئة السحابة لديك آمنة ومتوافقة ومحسّنة لدعم أعمالك.",
    featureHeading: "من الاستراتيجية إلى غدٍ أكثر أماناً",
    featureBody:
      "نحن لا نؤمّن سحابتك فقط، بل نساعدك على إطلاق كامل إمكاناتها.",
    imageAlt: "بنية سحابية محمية بدرع أمني",
    steps: [
      { number: "٠١", title: "التقييم", description: "فهم بيئتك الحالية والمخاطر.", icon: FileSearch2 },
      { number: "٠٢", title: "التصميم", description: "تصميم بنية أمنية مخصصة.", icon: Layers3 },
      { number: "٠٣", title: "التنفيذ", description: "نشر ودمج الحلول الأمنية.", icon: Settings },
      { number: "٠٤", title: "المراقبة", description: "اكتشاف التهديدات وتنسيق الاستجابة.", icon: ShieldCheck },
      { number: "٠٥", title: "التحسين", description: "تحسين الضوابط والامتثال.", icon: BarChart3 },
    ],
  },
};

export function CloudProcessSection({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const isArabic = locale === "ar";
  const Arrow = isArabic ? ArrowLeft : ArrowRight;

  return (
    <section
      className={`${s.processShowcase} ${isArabic ? s.processShowcaseRtl : ""}`}
      id="process"
      dir={isArabic ? "rtl" : "ltr"}
      aria-labelledby={`cloud-process-title-${locale}`}
    >
      <div className={s.processBackdrop} aria-hidden="true" />
      <div className={s.processLayoutNew}>
        <div className={s.processMain}>
          <header className={s.processHeader}>
            <span className={s.processEyebrow}>{copy.eyebrow}</span>
            <h2 id={`cloud-process-title-${locale}`}>{copy.heading}</h2>
            <p>{copy.description}</p>
          </header>

          <ol className={s.processSteps}>
            {copy.steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li className={s.processStep} key={step.number} style={{ "--step-index": index } as React.CSSProperties}>
                  <span className={s.processNumber} aria-hidden="true">{step.number}</span>
                  <div className={s.processStepCard}>
                    <span className={s.processIcon} aria-hidden="true"><Icon /></span>
                    <div className={s.processStepCopy}>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                  {index < copy.steps.length - 1 && (
                    <span className={s.processConnector} aria-hidden="true"><Arrow /></span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>

        <article className={s.processFeature}>
          <div className={s.processFeatureArt}>
            <Image
              src="/images/cloud/reference/strategy.webp"
              alt={copy.imageAlt}
              fill
              sizes="(max-width: 767px) calc(100vw - 48px), 390px"
            />
            <span className={s.processFeatureShield} aria-hidden="true"><ShieldCheck /></span>
          </div>
          <div className={s.processFeatureCopy}>
            <h3>{copy.featureHeading}</h3>
            <p>{copy.featureBody}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
