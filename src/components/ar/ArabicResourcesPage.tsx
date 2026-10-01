import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon, SectionHeading } from "@/components/site";

const resources = [
  {
    id: "portfolio",
    title: "معرض المشروعات وقصص النجاح",
    description:
      "تصفح معرض المشروعات وقصص النجاح والقدرات الرقمية التي قدمتها ETripleSoft لعملائها.",
    icon: "briefcase",
    label: "استكشف الأعمال",
    href: "/ar/portfolio",
    internal: true,
  },
  {
    id: "company-profile",
    title: "الملف التعريفي للشركة",
    description:
      "تحميل الملف التعريفي الرسمي لشركة ETripleSoft بصيغة PDF للاطلاع على كافة الخدمات والخبرات.",
    icon: "file",
    label: "تحميل الملف التعريفي (PDF)",
    href: "/company-profile.pdf",
    download: true,
  },
  {
    id: "courses",
    title: "منصة الدورات والتدريب",
    description:
      "الدخول إلى منصة التعلم الإلكتروني التابعة لـ ETripleSoft لاستعراض الدورات المتاحة.",
    icon: "graduation",
    label: "تصفح الدورات التدريبية",
    href: "https://learn.etriplesoft.com/",
    external: true,
  },
  {
    id: "chart-of-accounts",
    title: "مولد دليل الحسابات في أودو",
    description:
      "أداة تفاعلية لتوليد دليل الحسابات المهيأ لأودو لمختلف القطاعات في مصر والإمارات والسعودية.",
    icon: "chart",
    label: "فتح المولد التفاعلي",
    href: "/ar/tools/chart-of-accounts",
    internal: true,
  },
];

export function ArabicResourcesPage() {
  return (
    <main id="main" className="section tinted" dir="rtl">
      <div className="container">
        <SectionHeading
          eyebrow="المصادر والأدوات"
          title="معلومات الشركة والأدوات التفاعلية"
          headingLevel={1}
          description="تصفح الملف التعريفي للشركة، ومعرض المشروعات، ومنصة التدريب، ومولد دليل الحسابات التفاعلي في مكان واحد."
        />
        <div className="card-grid cols-4 resource-grid">
          {resources.map((resource) => {
            const content = (
              <>
                <Icon name={resource.icon} />
                <h2>{resource.title}</h2>
                <p>{resource.description}</p>
                <span className="resource-card-link">
                  {resource.label}
                  {resource.external && (
                    <ArrowUpRight aria-hidden="true" size={16} />
                  )}
                </span>
              </>
            );

            return (
              <article className="service-card resource-card" key={resource.id}>
                {resource.internal ? (
                  <Link href={resource.href} prefetch={false}>
                    {content}
                  </Link>
                ) : (
                  <a
                    href={resource.href}
                    download={
                      "download" in resource ? resource.download : undefined
                    }
                    target={resource.external ? "_blank" : undefined}
                    rel={resource.external ? "noopener noreferrer" : undefined}
                  >
                    {content}
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
