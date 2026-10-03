import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChartNoAxesColumnIncreasing,
  Lightbulb,
} from "lucide-react";
import s from "./InsightsHero.module.css";

type InsightsHeroProps = { locale: "en" | "ar" };

const benefits = {
  en: [
    { title: <>Practical<br />Guides</>, detail: <>Step-by-step<br />knowledge</>, Icon: BookOpen },
    { title: <>Expert<br />Insights</>, detail: <>From real<br />implementations</>, Icon: Lightbulb },
    { title: <>Real Business<br />Impact</>, detail: <>Ideas you can<br />apply</>, Icon: ChartNoAxesColumnIncreasing },
  ],
  ar: [
    { title: "أدلة عملية", detail: "معرفة خطوة بخطوة", Icon: BookOpen },
    { title: "رؤى من الخبراء", detail: "من واقع التجربة", Icon: Lightbulb },
    { title: "أثر حقيقي على الأعمال", detail: "أفكار يمكنك تطبيقها", Icon: ChartNoAxesColumnIncreasing },
  ],
} as const;

export function InsightsHero({ locale }: InsightsHeroProps) {
  const arabic = locale === "ar";
  const items = benefits[locale];
  const Arrow = arabic ? ArrowLeft : ArrowRight;
  const imageName = arabic ? "ar" : "en";

  return (
    <section className={`${s.insightsHero} ${arabic ? s.arabic : s.english}`} dir={arabic ? "rtl" : "ltr"} aria-labelledby="insights-hero-title">
      <div className={`container ${s.inner}`}>
        <div className={s.copy}>
          <span className={s.badge}><BookOpen aria-hidden="true" />{arabic ? "المقالات" : "Insights"}</span>
          <h1 id="insights-hero-title">
            {arabic ? <><span>رؤى تساعدك</span><span>على تحقيق <em>النجاح</em></span></> : <><span>Insights That</span><span>Drive <em>Success</em></span></>}
          </h1>
          <p className={s.subtitle}>
            {arabic ? <>أفكار، أدلة، وخبرة Odoo<br />لبناء مستقبل أعمال أكثر ذكاءً.</> : <>Ideas, guides, and Odoo expertise<br />for a smarter tomorrow.</>}
          </p>
          <a className={s.cta} href="#articles">
            <span>{arabic ? "عرض جميع المقالات" : "View All Articles"}</span>
            <Arrow aria-hidden="true" />
          </a>
          <ul className={s.benefits}>
            {items.map(({ title, detail, Icon }, index) => (
              <li key={index}>
                <span className={s.iconBox}><Icon aria-hidden="true" /></span>
                <span className={s.benefitCopy}><strong>{title}</strong><small>{detail}</small></span>
              </li>
            ))}
          </ul>
        </div>
        <picture className={s.artwork}>
          <Image
            src={`/images/insights-reference/hero-${imageName}-desktop.webp`}
            alt={arabic ? "لوحة أودو للأعمال على شاشة حاسوب" : "Odoo business dashboard displayed on a desktop screen"}
            width={arabic ? 1536 : 1448}
            height={arabic ? 1024 : 1086}
            sizes="(max-width: 760px) 100vw, (max-width: 1200px) 54vw, 680px"
            priority
          />
        </picture>
      </div>
      <span className={s.dots} aria-hidden="true" />
    </section>
  );
}
