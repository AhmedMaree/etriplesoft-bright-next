import Link from "next/link";
import { Globe, Headphones, Instagram, Linkedin, Mail, MapPin } from "lucide-react";
import { company, mailto } from "@/lib/company";
import { footerColumns, siteContact } from "@/lib/navigation";
import { BackToTop } from "./back-to-top";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" aria-label="ETripleSoft home">
            <img src="/images/logo-white.png" alt="ETripleSoft" />
          </Link>
          <p>
            We empower businesses across Egypt, UAE and Saudi Arabia with
            innovative technology solutions to build a smarter, more connected
            future.
          </p>
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
                ) : (
                  <Instagram size={17} />
                )}
              </a>
            ))}
          </div>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <p className="footer-heading">{column.title}</p>
            {column.links.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
        <div>
          <p className="footer-heading">Our Offices</p>
          {siteContact.offices.map((office) => (
            <Link key={office.label} href={office.href}>
              <MapPin size={14} aria-hidden="true" /> {office.label}
            </Link>
          ))}
        </div>
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
