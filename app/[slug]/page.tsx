import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/service-page";
import {
  AboutPage,
  PortfolioPage,
  ContactPage,
  SupportPage,
  CareersPage,
} from "@/components/company-pages";
import { SectionHeading, CTA, FAQ, TextLink } from "@/components/site";
import { servicePages } from "@/lib/data";
import InsightsReferencePage from "@/components/insights/InsightsReferencePage";
const names: Record<string, string> = {
  about: "About Us",
  "about-us": "About Us",
  portfolio: "Portfolio & Success Stories",
  industries: "Industries & Success Stories",
  contact: "Contact Us",
  "contact-us": "Contact Us",
  "support-ticket": "Support Ticket",
  careers: "Careers",
  insights: "Articles & Insights",
  faqs: "Frequently Asked Questions",
  privacy: "Privacy Policy",
  terms: "Terms of Service",
  odoo: "Odoo ERP Implementation in Egypt",
  "odoo-erp-egypt": "Odoo ERP Implementation in Egypt",
  cloud: "Cloud Security Solutions in Egypt",
  "cloud-security-solutions-in-egypt": "Cloud Security Solutions in Egypt",
  ai: "AI Automation Services",
  "ai-automation-services-etriplesoft": "AI Automation Services",
  web: "Web Design Company in Egypt",
  "web-design-company-in-egypt": "Web Design Company in Egypt",
  mobile: "Mobile Application Development",
  "mobile-apps-services": "Mobile Application Development",
  "mobile-apps-services-2": "Mobile Application Development",
  "digital-marketing": "Digital Marketing Agency",
  "digital-marketing-agency": "Digital Marketing Agency",
};

const serviceAliases: Record<string, string> = {
  "odoo-erp-egypt": "odoo",
  "cloud-security-solutions-in-egypt": "cloud",
  "ai-automation-services-etriplesoft": "ai",
  "web-design-company-in-egypt": "web",
  "mobile-apps-services": "mobile",
  "mobile-apps-services-2": "mobile",
  "digital-marketing-agency": "digital-marketing",
};
export function generateStaticParams() {
  return Object.keys(names).map((slug) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return { title: names[slug] || "Page Not Found" };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const serviceSlug = serviceAliases[slug] || slug;
  if (servicePages[serviceSlug]) return <ServicePage slug={serviceSlug} />;
  if (["about", "about-us"].includes(slug)) return <AboutPage />;
  if (["portfolio", "industries"].includes(slug)) return <PortfolioPage />;
  if (["contact", "contact-us"].includes(slug)) return <ContactPage />;
  if (slug === "support-ticket") return <SupportPage />;
  if (slug === "careers") return <CareersPage />;
  if (slug === "faqs")
    return (
      <main id="main">
        <section className="section tinted">
          <div className="container article-content">
            <span className="eyebrow">Help & Resources</span>
            <h1>
              Your Questions, <em>Answered</em>
            </h1>
            <p>
              Find answers about our services, implementation, and working with
              ETripleSoft.
            </p>
            <FAQ />
            {Object.entries(servicePages).map(([key, s]) => (
              <section className="mt" key={key}>
                <h2>{s.title}</h2>
                <FAQ questions={s.questions} />
              </section>
            ))}
          </div>
        </section>
        <CTA title="Still Have a Question?" button="Talk to Our Team" />
      </main>
    );
  if (slug === "insights") return <InsightsReferencePage />;
  if (slug === "privacy" || slug === "terms")
    return (
      <main id="main">
        <div className="container">
          <article className="article-content">
            <span className="eyebrow">ETripleSoft</span>
            <h1>{names[slug]}</h1>
            {slug === "privacy" ? (
              <>
                <h2>Information you provide</h2>
                <p>
                  Contact and support forms collect the details you enter,
                  including your name, email, company, message, and any
                  attachment you choose to provide. These details are used to
                  address your inquiry.
                </p>
                <h2>Submission and storage</h2>
                <p>
                  In this website’s local preview, submissions are saved on the
                  website server. They are not delivered to ETripleSoft by email
                  unless an inquiry delivery service has been configured. Do not
                  submit sensitive personal information in the preview.
                </p>
                <h2>Your choices</h2>
                <p>
                  You can contact info@etriplesoft.com to discuss your
                  information or request assistance. This website does not
                  include advertising trackers. Fonts and images are hosted with
                  the website.
                </p>
              </>
            ) : (
              <>
                <h2>Website information</h2>
                <p>
                  This website presents ETripleSoft’s solutions and services.
                  Project examples, company information, locations and career
                  roles reproduce the supplied design references and must be
                  confirmed directly with the company before relying on them.
                </p>
                <h2>Services and support</h2>
                <p>
                  Service scope, delivery dates, pricing, support coverage and
                  response times are agreed separately with each client.
                  Displayed support response times do not create a service-level
                  agreement.
                </p>
                <h2>Submitting an inquiry</h2>
                <p>
                  Provide accurate contact information and only attach files you
                  have permission to share. Submitting this form does not create
                  a contract or guarantee a response time.
                </p>
              </>
            )}
            <TextLink href="/contact">Contact ETripleSoft</TextLink>
          </article>
        </div>
      </main>
    );
  notFound();
}
