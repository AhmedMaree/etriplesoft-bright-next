import Link from "next/link";
import { Globe, Headphones, Mail } from "lucide-react";
import s from "./OdooReferenceFooter.module.css";

export default function OdooReferenceFooter() {
  const groups = [
    [
      "Solutions",
      ["Odoo ERP", "/odoo"],
      ["Implementation", "/odoo#implementation"],
      ["Customization", "/contact?service=Odoo%20Customization"],
      ["Integration", "/contact?service=Odoo%20Integration"],
      ["Support", "/support-ticket"],
    ],
    [
      "Industries",
      ...[
        "Manufacturing",
        "Construction",
        "Trading & Distribution",
        "Retail",
        "Healthcare",
        "Education",
        "Professional Services",
      ].map((name) => [
        name,
        `/contact?service=Odoo%20ERP&industry=${encodeURIComponent(name)}`,
      ]),
    ],
    [
      "Company",
      ["About Us", "/about"],
      ["Our Team", "/about#leadership"],
      ["Careers", "/careers"],
      ["News & Insights", "/insights"],
      ["Contact Us", "/contact"],
    ],
  ] as const;
  return (
    <footer className={s.footer}>
      <div className={s.grid}>
        <div className={s.brand}>
          <Link href="/" aria-label="ETripleSoft home">
            <img src="/images/logo-header.png" alt="ETripleSoft" />
          </Link>
          <p>
            Your Trusted Digital Transformation Partner
            <br />
            Delivering innovative Odoo solutions for a stronger tomorrow.
          </p>
          <div className={s.socials}>
            <a
              href="mailto:info@etriplesoft.com"
              aria-label="Email ETripleSoft"
            >
              <Mail />
            </a>
            <Link href="/contact" aria-label="Contact our regional teams">
              <Globe />
            </Link>
            <Link href="/support-ticket" aria-label="Customer support">
              <Headphones />
            </Link>
          </div>
        </div>
        {groups.map(([title, ...links]) => (
          <div key={title as string}>
            <h2>{title as string}</h2>
            {links.map((link) => (
              <Link key={link[0]} href={link[1]}>
                {link[0]}
              </Link>
            ))}
          </div>
        ))}
        <div className={s.locations}>
          <h2>Our Locations</h2>
          {[
            ["Egypt", "eg"],
            ["Saudi Arabia", "sa"],
            ["UAE", "ae"],
          ].map(([country, code]) => (
            <Link
              key={code}
              href={`/contact?location=${encodeURIComponent(country)}`}
            >
              <span className={`${s.flag} ${s[code]}`} aria-hidden="true" />
              {country}
            </Link>
          ))}
        </div>
      </div>
      <div className={s.bottom}>
        <span>
          © {new Date().getFullYear()} ETripleSoft. All rights reserved.
        </span>
        <nav aria-label="Legal links">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/insights">Resources</Link>
        </nav>
      </div>
    </footer>
  );
}
