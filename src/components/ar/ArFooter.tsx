import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { company, mailto } from "@/lib/company";
import { arOffices } from "@/i18n/ar";
import { BackToTop } from "../back-to-top";
import { FooterColumn } from "../footer-column";
import { EnglishCounterpartLink } from "./EnglishCounterpartLink";

const icons = { linkedin: Linkedin, instagram: Instagram, facebook: Facebook };
const socialLabels = {
  linkedin: "حساب ETripleSoft على LinkedIn",
  instagram: "حساب ETripleSoft على Instagram",
  facebook: "صفحة ETripleSoft على Facebook",
};

/** Arabic footer columns — mirrors the English footer's four-column structure. */
const arFooterColumns = [
  {
    title: "أودو",
    links: [
      { label: "نظرة عامة على أودو", href: "/ar/odoo" },
      { label: "طلب عرض تجريبي", href: "/ar/request-demo" },
      { label: "التنفيذ والإطلاق", href: "/ar/odoo/implementation" },
      { label: "المحاسبة والفواتير الإلكترونية", href: "/ar/odoo/accounting" },
      { label: "الموارد البشرية والرواتب", href: "/ar/odoo/hr-payroll" },
      { label: "خدمة العملاء والدعم الفني", href: "/ar/odoo/itsm-helpdesk" },
      { label: "لوحات المعلومات والتحليلات", href: "/ar/odoo/dashboard-insights" },
    ],
  },
  {
    title: "الخدمات",
    links: [
      { label: "نظرة عامة على الخدمات", href: "/ar/services" },
      { label: "السحابة والأمن السيبراني", href: "/ar/cloud" },
      { label: "الذكاء الاصطناعي والأتمتة", href: "/ar/ai" },
      { label: "تطوير المواقع", href: "/ar/web" },
      { label: "تطبيقات الجوال", href: "/ar/mobile" },
      { label: "التسويق الرقمي", href: "/ar/digital-marketing" },
      { label: "الموارد والأدوات", href: "/ar/resources" },
    ],
  },
  {
    title: "القطاعات",
    links: [
      { label: "نظرة عامة على القطاعات", href: "/ar/industries" },
      { label: "البناء والمقاولات", href: "/ar/industries/construction" },
      { label: "العقارات", href: "/ar/industries/real-estate" },
      { label: "إدارة المرافق", href: "/ar/industries/facility-management" },
      { label: "المطاعم والضيافة", href: "/ar/industries/restaurants" },
      { label: "التعليم", href: "/ar/industries/education" },
      { label: "التجزئة", href: "/ar/industries/retail" },
      { label: "الرعاية الصحية", href: "/ar/industries/healthcare" },
      { label: "الخدمات اللوجستية", href: "/ar/industries/logistics" },
    ],
  },
  {
    title: "الشركة",
    links: [
      { label: "من نحن", href: "/ar/about-us" },
      { label: "المدونة والمقالات", href: "/ar/insights" },
      { label: "قصص النجاح", href: "/ar/portfolio" },
      { label: "الوظائف", href: "/ar/careers" },
      { label: "الأسئلة الشائعة", href: "/ar/faqs" },
      { label: "الدعم الفني", href: "/ar/support-ticket" },
      { label: "تواصل معنا", href: "/ar/contact-us" },
      { label: "الشروط والأحكام", href: "/ar/terms" },
      { label: "سياسة الخصوصية", href: "/ar/privacy" },
    ],
  },
];

export function ArFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid ar-footer-grid">
        <div className="footer-brand">
          <Link href="/ar" aria-label="ETripleSoft، الصفحة الرئيسية">
            <Image
              src="/images/logo-white.png"
              alt="ETripleSoft"
              width={1600}
              height={393}
              sizes="200px"
            />
          </Link>
          <p>
            نساعد الشركات في مصر والإمارات والسعودية على النمو بحلول تقنية عملية
            تربط عملياتها في نظام واحد.
          </p>
          <a className="footer-email" href={mailto()}>
            <Mail size={15} aria-hidden="true" />{" "}
            <span dir="ltr">{company.primaryEmail}</span>
          </a>
          <div className="socials">
            {company.socialLinks.map((social) => {
              const Icon = icons[social.platform];
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  aria-label={socialLabels[social.platform]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        </div>

        {arFooterColumns.map((col) => (
          <FooterColumn key={col.title} title={col.title}>
            {col.links.map((link) => (
              <Link key={link.label} href={link.href} prefetch={false}>
                {link.label}
              </Link>
            ))}
          </FooterColumn>
        ))}

        <FooterColumn title="مكاتبنا">
          {company.offices.map((office) => {
            const ar = arOffices[office.id];
            return (
              <div className="footer-office" key={office.id}>
                <p className="footer-office-name">
                  <MapPin size={14} aria-hidden="true" /> {ar.label}
                </p>
                <address className="footer-office-address">{ar.address}</address>
                {office.phones.map((phone) => (
                  <a
                    className="footer-office-phone"
                    href={phone.href}
                    key={phone.href}
                    aria-label={`اتصل بمكتب ${ar.city}: ${phone.display}`}
                  >
                    <Phone size={13} aria-hidden="true" />{" "}
                    <span dir="ltr">{phone.display}</span>
                  </a>
                ))}
              </div>
            );
          })}
          <Link className="footer-all-offices" href="/ar/contact-us">
            عرض جميع المكاتب
          </Link>
        </FooterColumn>
      </div>
      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} ETripleSoft. جميع الحقوق محفوظة.</span>
        <span>
          <EnglishCounterpartLink />
        </span>
        <BackToTop label="العودة إلى الأعلى" />
      </div>
    </footer>
  );
}
