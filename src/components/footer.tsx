import Image from "next/image";
import Link from "next/link";
import { Facebook, Globe, Headphones, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { company, mailto } from "@/lib/company";
import { footerColumns } from "@/lib/navigation";
import { BackToTop } from "./back-to-top";
import { FooterColumn } from "./footer-column";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" aria-label="ETripleSoft home">
            <Image
              src="/images/logo-white.png"
              alt="ETripleSoft"
              width={1600}
              height={393}
              sizes="200px"
            />
          </Link>
          <p>
            We empower businesses across Egypt, UAE and Saudi Arabia with
            innovative technology solutions to build a smarter, more connected
            future.
          </p>
          <a className="footer-email" href={mailto()}>
            <Mail size={15} aria-hidden="true" /> {company.primaryEmail}
          </a>
          <div className="socials" aria-label="Contact channels">
            <a href={mailto()} aria-label="Email ETripleSoft">
              <Mail size={17} />
            </a>
            <Link href="/contact" aria-label="Our locations">
              <Globe size={17} />
            </Link>
            <Link href="/support-ticket" aria-label="Contact support">
              <Headphones size={17} />
            </Link>
            {company.socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.platform === "linkedin" ? (
                  <Linkedin size={17} />
                ) : social.platform === "facebook" ? (
                  <Facebook size={17} />
                ) : (
                  <Instagram size={17} />
                )}
              </a>
            ))}
          </div>
        </div>
        {footerColumns.map((column) => (
          <FooterColumn key={column.title} title={column.title}>
            {column.links.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </FooterColumn>
        ))}
        <FooterColumn title="Our Offices">
          {company.offices.map((office) => (
            <div className="footer-office" key={office.id}>
              <p className="footer-office-name">
                <MapPin size={14} aria-hidden="true" /> {office.label}
              </p>
              {office.address && (
                <address className="footer-office-address">{office.address}</address>
              )}
              {office.phones.map((phone) => (
                <a
                  className="footer-office-phone"
                  href={phone.href}
                  key={phone.href}
                  aria-label={`Call ${office.label}: ${phone.display}`}
                >
                  <Phone size={13} aria-hidden="true" /> {phone.display}
                </a>
              ))}
            </div>
          ))}
          <Link className="footer-all-offices" href="/contact#offices">
            View all offices
          </Link>
        </FooterColumn>
      </div>
      <div className="footer-bottom container">
        <span>
          © {new Date().getFullYear()} ETripleSoft. All rights reserved.
        </span>
        <span>Technology for a smarter tomorrow.</span>
        <BackToTop />
      </div>
    </footer>
  );
}
