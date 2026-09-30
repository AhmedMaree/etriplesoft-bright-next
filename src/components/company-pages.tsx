import { CareersReferencePage } from "./careers-reference-page";
import {
  Hero,
  SectionHeading,
  Icon,
  Photo,
  Button,
  CTA,
  Offices,
  TextLink,
} from "./site";
import { ContactForm } from "./contact-form";
import { FaqAccordion } from "./faq-accordion";
import { publishedFaqs } from "@/data/faqs";
import Link from "next/link";
import { services } from "@/lib/data";
import { company, mailto, primaryPhone } from "@/lib/company";
import { AboutReferencePage } from "./about-reference-page";
import { JsonLd } from "./json-ld";
import { officesJsonLd } from "@/lib/seo";

// Contact-page FAQ: real published answers (see src/data/faqs.ts), no generic filler.
const contactFaqIds = ["support-01", "support-02", "implementation-01", "pricing-01"];
const contactFaqs = contactFaqIds.flatMap((id) => {
  const entry = publishedFaqs.find((faq) => faq.id === id);
  return entry ? [entry] : [];
});

export function AboutPage() {
  return <AboutReferencePage />;
}

export { PortfolioPage } from "./portfolio/PortfolioPage";

export function ContactPage() {
  const methods: { title: string; icon: string; node: React.ReactNode }[] = [
    {
      title: "General Enquiries",
      icon: "mail",
      node: <a href={mailto()}>{company.primaryEmail}</a>,
    },
    {
      title: "Phone",
      icon: "headphones",
      node: <a href={primaryPhone.href}>{primaryPhone.display}</a>,
    },
    {
      title: "Existing Customers",
      icon: "headphones",
      node: <Link href="/support-ticket">Get support</Link>,
    },
    ...(company.businessHours
      ? [
          {
            title: "Business Hours",
            icon: "clock",
            node: <p>{company.businessHours}</p>,
          },
        ]
      : []),
  ];
  return (
    <main id="main">
      {officesJsonLd().map((office) => (
        <JsonLd key={office["@id"]} data={office} />
      ))}
      <section className="contact-hero">
        <Photo name="contact-hero" alt="" />
        <div className="container contact-layout">
          <div className="contact-copy">
            <span className="eyebrow">Contact ETripleSoft</span>
            <h1>
              Let&apos;s Start a <em>Conversation</em>
            </h1>
            <h2>Tell us what you are trying to improve.</h2>
            <p>
              Whether you are exploring Odoo ERP, cloud and security, AI
              automation, a digital product or marketing support, share the
              current situation and the outcome your team needs.
            </p>
            <div className="contact-promises">
              {[
                [
                  "Clear Routing",
                  "Your enquiry goes to the relevant service team.",
                  "target",
                ],
                [
                  "Regional Team",
                  "Offices in Egypt, Saudi Arabia and the UAE.",
                  "pin",
                ],
                [
                  "Practical Next Step",
                  "We clarify scope before recommending a solution.",
                  "check",
                ],
              ].map(([title, description, icon]) => (
                <div key={title}>
                  <Icon name={icon} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <div className="contact-strip">
            {methods.map(({ title, icon, node }) => (
              <div key={title}>
                <Icon name={icon} />
                <div>
                  <h3>{title}</h3>
                  {node}
                </div>
              </div>
            ))}
          </div>
          <p className="profile-link">
            <a href="/company-profile.pdf" download>
              Download our company profile (PDF)
            </a>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Three Offices. One Regional Team."
            description="Connect with ETripleSoft through our offices in Cairo, Riyadh and Dubai."
          />
          <Offices contact />
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <SectionHeading
            title="You Have Questions. We Have Answers."
            description="Find quick answers to common questions about our services, support and working with ETripleSoft."
          />
          <FaqAccordion items={contactFaqs} />
        </div>
      </section>

      <CTA
        title="Already an ETripleSoft customer?"
        description="Report an issue or ask for help with a service you already use."
        button="Get Support"
        href="/support-ticket"
      />
    </main>
  );
}

export function SupportPage() {
  const paths = [
    {
      icon: "headphones",
      title: "Existing Customer Support",
      text: "You already use ETripleSoft services and need help with an issue.",
      href: "#customer-support",
      link: "Get support",
    },
    {
      icon: "handshake",
      title: "Sales Enquiries",
      text: "You are considering Odoo, AI, cloud, web, mobile or marketing services.",
      href: "#sales",
      link: "Talk to sales",
    },
    {
      icon: "message",
      title: "General Contact",
      text: "Your question is neither a support issue nor a sales enquiry.",
      href: "#general",
      link: "Contact us",
    },
  ];
  return (
    <main id="main">
      <Hero
        className="support-hero"
        eyebrow="Support"
        title="How can we"
        accent="help?"
        description="Choose the option that matches your request so it reaches the right team."
        image="support-hero"
        primary="Existing Customer Support"
        primaryHref="#customer-support"
        secondary="Sales & General Enquiries"
        secondaryHref="/contact"
      />

      <section className="section tinted">
        <div className="container">
          <SectionHeading
            title="Choose How We Can Help"
            description="Each request type has its own path."
          />
          <div className="why-grid">
            {paths.map(({ icon, title, text, href, link }) => (
              <div key={title}>
                <Icon name={icon} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <TextLink href={href}>{link}</TextLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="customer-support">
        <div className="container split">
          <div>
            <SectionHeading
              eyebrow="Existing customers"
              title="Existing Customer Support"
              description="Include the affected system, what happened, when it started and any error messages that can help the team investigate."
            />
            <div className="purpose-card">
              <Icon name="headphones" />
              <div>
                <h3>Prefer the ticket portal?</h3>
                <p>
                  Open a ticket in the ETripleSoft helpdesk portal and follow
                  it there.
                </p>
                <Button href={company.supportPortalUrl}>
                  Open the Support Portal
                </Button>
              </div>
            </div>
          </div>
          <ContactForm support />
        </div>
      </section>

      <section className="section tinted" id="sales">
        <div className="container">
          <SectionHeading
            eyebrow="Prospective customers"
            title="Sales Enquiries"
            description="Considering a new project? Tell us about it through the contact form so it reaches the right service team. You do not need a support ticket."
          />
          <div className="why-grid">
            {services.map((service) => (
              <div key={service.slug}>
                <Icon name={service.icon} />
                <div>
                  <h3>{service.title}</h3>
                  <TextLink
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                  >
                    Enquire
                  </TextLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="general">
        <div className="container split">
          <SectionHeading
            eyebrow="Everything else"
            title="General Contact"
            description="For partnerships, careers, media or any other question, use the contact page."
          />
          <div className="purpose-card">
            <Icon name="mail" />
            <div>
              <h3>Contact ETripleSoft</h3>
              <p>
                You can also email <a href={mailto()}>{company.primaryEmail}</a>{" "}
                or call <a href={primaryPhone.href}>{primaryPhone.display}</a>.
              </p>
              <Button href="/contact">Go to Contact</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export function CareersPage() {
  return <CareersReferencePage />;
}
