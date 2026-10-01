import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button, Hero, Icon, SectionHeading, TextLink } from "@/components/site";
import { ContactForm } from "@/components/contact-form";
import { services } from "@/lib/data";
import { company, mailto, primaryPhone } from "@/lib/company";
import { arRouteContent } from "@/i18n/ar-routes";

const requestPaths = [
  { icon: "headphones", title: "دعم العملاء الحاليين", text: "تستخدم خدمات ETripleSoft بالفعل وتحتاج إلى مساعدة بشأن مشكلة.", href: "#customer-support", link: "اطلب الدعم" },
  { icon: "handshake", title: "استفسارات المبيعات", text: "تستكشف خدمات أودو أو الذكاء الاصطناعي أو السحابة أو الويب أو الجوال أو التسويق.", href: "#sales", link: "تواصل مع المبيعات" },
  { icon: "message", title: "استفسارات عامة", text: "لديك سؤال لا يتعلق بطلب دعم أو استفسار عن خدمة جديدة.", href: "#general", link: "تواصل معنا" },
];

const serviceLabels: Record<string, { title: string; href: string }> = {
  odoo: { title: "أودو ERP", href: "/ar/odoo" },
  cloud: { title: arRouteContent["/cloud"].eyebrow, href: "/ar/cloud" },
  ai: { title: arRouteContent["/ai"].eyebrow, href: "/ar/ai" },
  web: { title: arRouteContent["/web"].eyebrow, href: "/ar/web" },
  mobile: { title: arRouteContent["/mobile"].eyebrow, href: "/ar/mobile" },
  "digital-marketing": { title: arRouteContent["/digital-marketing"].eyebrow, href: "/ar/digital-marketing" },
};

export function ArabicSupportPage() {
  return <main id="main" dir="rtl">
    <Hero className="support-hero" eyebrow="الدعم" title="كيف يمكننا" accent="مساعدتك؟" description="اختر المسار الذي يناسب طلبك ليصل إلى الفريق المعني." image="support-hero" primary="دعم العملاء الحاليين" primaryHref="#customer-support" secondary="استفسارات المبيعات والتواصل العام" secondaryHref="/ar/contact-us" />

    <section className="section tinted"><div className="container"><SectionHeading title="كيف يمكننا مساعدتك؟" description="لكل نوع من الطلبات مسار مناسب." /><div className="why-grid">{requestPaths.map(({ icon, title, text, href, link }) => <div key={title}><Icon name={icon} /><div><h3>{title}</h3><p>{text}</p><TextLink href={href}>{link}</TextLink></div></div>)}</div></div></section>

    <section className="section" id="customer-support"><div className="container split"><div><SectionHeading eyebrow="العملاء الحاليون" title="دعم العملاء" description="اذكر النظام المتأثر، وما حدث، ومتى بدأت المشكلة، وأي رسائل خطأ تساعد الفريق على التحقق منها." /><div className="purpose-card"><Icon name="headphones" /><div><h3>تفضّل استخدام بوابة التذاكر؟</h3><p>افتح تذكرة في بوابة مكتب خدمة ETripleSoft وتابعها هناك.</p><Button href={company.supportPortalUrl}>افتح بوابة الدعم</Button></div></div></div><ContactForm locale="ar" support /></div></section>

    <section className="section tinted" id="sales"><div className="container"><SectionHeading eyebrow="العملاء المحتملون" title="استفسارات المبيعات" description="تفكر في مشروع جديد؟ أرسل استفسارك عبر نموذج التواصل ليصل إلى فريق الخدمة المناسب. لا تحتاج إلى فتح تذكرة دعم." /><div className="why-grid">{services.map((service) => { const localized = serviceLabels[service.slug]; if (!localized) return null; return <div key={service.slug}><Icon name={service.icon} /><div><h3>{localized.title}</h3><TextLink href={localized.href}>استكشف الخدمة</TextLink></div></div>; })}</div></div></section>

    <section className="section" id="general"><div className="container split"><SectionHeading eyebrow="طلبات أخرى" title="التواصل العام" description="للاستفسارات عن الشراكات أو الوظائف أو الإعلام أو أي موضوع آخر، استخدم صفحة التواصل." /><div className="purpose-card"><Icon name="mail" /><div><h3>تواصل مع ETripleSoft</h3><p>يمكنك أيضاً مراسلتنا عبر <a href={mailto()}>{company.primaryEmail}</a> أو الاتصال على <a href={primaryPhone.href}>{primaryPhone.display}</a>.</p><Link className="button" href="/ar/contact-us">انتقل إلى صفحة التواصل <ArrowLeft size={16} aria-hidden="true" /></Link></div></div></div></section>
  </main>;
}
