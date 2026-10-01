import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CTA, Hero } from "@/components/site";
import { portfolioItems } from "@/data/portfolio";
import { arRouteContent } from "@/i18n/ar-routes";
import { company } from "@/lib/company";
import styles from "@/components/portfolio/portfolio.module.css";

const galleryItems = portfolioItems.filter(
  (item) => item.image && item.source,
);

const capabilities = [
  {
    title: "تنفيذ أودو ERP",
    text: "ربط وتوحيد عمليات الأعمال المحاسبية والتجارية وسلاسل الإمداد في منصة واحدة.",
    href: "/ar/odoo",
  },
  {
    title: "السحابة والأمن السيبراني",
    text: arRouteContent["/cloud"]?.description || "بنية تحتية سحابية آمنة وموثوقة وقابلة للتوسع.",
    href: "/ar/cloud",
  },
  {
    title: "الذكاء الاصطناعي والأتمتة",
    text: arRouteContent["/ai"]?.description || "أتمتة الأعمال الروتينية لرفع الإنتاجية والكفاءة.",
    href: "/ar/ai",
  },
  {
    title: "تطوير المواقع والمنصات",
    text: arRouteContent["/web"]?.description || "مواقع إلكترونية وبوابات سريعة ومهيأة للتحويل.",
    href: "/ar/web",
  },
  {
    title: "تطبيقات الجوال الذكية",
    text: arRouteContent["/mobile"]?.description || "تطبيقات هواتف ذكية متطورة لنظامي iOS وAndroid.",
    href: "/ar/mobile",
  },
  {
    title: "التسويق الرقمي",
    text: arRouteContent["/digital-marketing"]?.description || "حملات تسويقية مبنية على البيانات وتحسين محركات البحث.",
    href: "/ar/digital-marketing",
  },
];

export function ArabicPortfolioPage() {
  return (
    <main id="main" dir="rtl">
      <Hero
        eyebrow="قصص النجاح"
        title="قصص"
        accent="النجاح"
        description="تعرّف على القدرات التقنية خلف مشروعاتنا، من أودو ERP إلى الحوسبة السحابية والذكاء الاصطناعي وتطوير الويب وتطبيقات الجوال والتسويق الرقمي، وابدأ حواراً مثمراً حول مشروعك."
        image="portfolio-hero"
        primary="ناقش مشروعك"
        primaryHref="/ar/contact-us?service=استفسار%20عن%20مشروع"
        secondary="استكشف خدماتنا"
        secondaryHref="/ar/services"
      />

      <section className={styles.intro} aria-labelledby="portfolio-intro">
        <div className="container">
          <h2 id="portfolio-intro">المشروعات والقدرات التي تدعمها</h2>
          <p>
            تقدم ETripleSoft حلول أنظمة أودو ERP، والسحابة والأمن، والذكاء
            الاصطناعي والأتمتة، والويب والجوال والتسويق الرقمي.
            {galleryItems.length > 0
              ? " نعرض أدناه نماذج مختارة من المشروعات، تليها القدرات التقنية التي جعلت إنجازها ممكناً."
              : " استكشف القدرات الكامنة خلف مشروعاتنا وتحدث معنا عن متطلبات عملك."}
          </p>
        </div>
      </section>

      {galleryItems.length > 0 && (
        <section
          className={styles.work}
          id="selected-work"
          aria-labelledby="portfolio-work"
        >
          <div className="container">
            <h2 id="portfolio-work">أعمال ومشروعات مختارة</h2>
            <ul className={styles.grid}>
              {galleryItems.map((item) => (
                <li key={item.id}>
                  <article className={styles.card}>
                    {item.image && (
                      <div className={styles.media}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={480}
                          height={480}
                          sizes="(min-width: 1000px) 240px, (min-width: 520px) 33vw, 100vw"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <h3>{item.name}</h3>
                    <dl className={styles.meta}>
                      {item.industry && (
                        <div>
                          <dt>القطاع</dt>
                          <dd>{item.industry}</dd>
                        </div>
                      )}
                      {item.servicesDelivered &&
                        item.servicesDelivered.length > 0 && (
                          <div>
                            <dt>الخدمات</dt>
                            <dd>{item.servicesDelivered.join("، ")}</dd>
                          </div>
                        )}
                      {item.technology && item.technology.length > 0 && (
                        <div>
                          <dt>التقنيات</dt>
                          <dd>{item.technology.join("، ")}</dd>
                        </div>
                      )}
                    </dl>
                    {item.approvedOutcome && (
                      <p className={styles.outcome}>{item.approvedOutcome}</p>
                    )}
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section
        className={styles.capabilities}
        id="capabilities"
        aria-labelledby="portfolio-capabilities"
      >
        <div className="container">
          <h2 id="portfolio-capabilities">
            القدرات التقنية التي نقدمها في كل مشروع
          </h2>
          <ul className={styles.capGrid}>
            {capabilities.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-label={`معرفة المزيد عن ${item.title}`}
                >
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span>
                    معرفة المزيد <ArrowLeft size={14} aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA
        title="تحدث معنا عن مشروعك القادم"
        description="أخبرنا بما تسعى إلى تطويره، وسنساعدك على رسم الخطوة القادمة وتحقيق أهدافك بكفاءة."
        button="ابدأ الحوار الآن"
        href="/ar/contact-us"
        secondary={{
          label: "تواصل عبر واتساب",
          href: company.whatsappUrl,
          external: true,
        }}
        badge="خطوتك القادمة"
        perks={[
          "استشارة مجانية",
          "حلول مخصصة لقطاعك",
          "دون التزام أو ضغوط",
        ]}
      />
    </main>
  );
}
