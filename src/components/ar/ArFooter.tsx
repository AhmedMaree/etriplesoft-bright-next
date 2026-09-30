import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { company, mailto } from "@/lib/company";
import { arNav, arOffices } from "@/i18n/ar";
import { BackToTop } from "../back-to-top";

const icons = { linkedin: Linkedin, instagram: Instagram, facebook: Facebook };

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
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <p className="footer-heading">روابط سريعة</p>
          {arNav.map((item) => (
            <Link key={item.href} href={item.href} prefetch={false}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="ar-offices">
          <p className="footer-heading">مكاتبنا</p>
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
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} ETripleSoft. جميع الحقوق محفوظة.</span>
        <span>
          <a href="/" hrefLang="en" lang="en">
            English
          </a>
        </span>
        <BackToTop label="العودة إلى الأعلى" />
      </div>
    </footer>
  );
}
