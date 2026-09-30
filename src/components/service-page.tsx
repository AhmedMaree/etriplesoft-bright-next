import {
  Hero,
  PartnerBadges,
  TechTrust,
  SectionHeading,
  Cards,
  IndustryBento,
  Process,
  Stats,
  CTA,
  FAQ,
  Photo,
  Icon,
  Button,
} from "./site";
import OdooReferencePage from "./odoo/OdooReferencePage";
import AIReferencePage from "./ai/AIReferencePage";
import CloudReferencePage from "./cloud/CloudReferencePage";
import MobileReferencePage from "./mobile/MobileReferencePage";
import WebReferencePage from "./web/WebReferencePage";
import DigitalMarketingReferencePage from "./digital-marketing/DigitalMarketingReferencePage";
import { servicePages } from "@/lib/data";
import { industryCardItems } from "@/data/industries/hub";

const serviceContext: Record<
  string,
  {
    title: string;
    description: string;
    points: [string, string, string][];
    image: string;
  }
> = {
  odoo: {
    title: "An ERP implementation should connect work, not copy old silos.",
    description:
      "We map the flow between teams before configuration begins, then shape Odoo around the information, approvals and responsibilities that keep the business moving.",
    image: "odoo-hero",
    points: [
      [
        "Process first",
        "Define the workflow, owners and decisions before configuring modules.",
        "target",
      ],
      [
        "Connected delivery",
        "Coordinate configuration, migration, integrations and testing as one program.",
        "plug",
      ],
      [
        "Adoption built in",
        "Prepare users with practical testing, training and post-launch support.",
        "users",
      ],
    ],
  },
  cloud: {
    title: "Security works best when ownership and recovery are clear.",
    description:
      "We connect infrastructure, identity, devices, backup and support into an operating model your team can understand and maintain.",
    image: "cloud-hero",
    points: [
      [
        "Know the environment",
        "Assess systems, access, dependencies and operational risks.",
        "eye",
      ],
      [
        "Prioritize controls",
        "Apply the protections that matter most to the way your business works.",
        "shield",
      ],
      [
        "Plan recovery",
        "Document practical backup, recovery and support responsibilities.",
        "database",
      ],
    ],
  },
  ai: {
    title: "Useful automation starts with a specific operational problem.",
    description:
      "We begin with the task, data and exceptions—not a generic AI feature—then define where people review, approve or intervene.",
    image: "ai-hero",
    points: [
      [
        "Grounded use case",
        "Choose a workflow with clear inputs, outputs and owners.",
        "target",
      ],
      [
        "Human control",
        "Design review points for uncertainty, exceptions and sensitive actions.",
        "users",
      ],
      [
        "Measured operation",
        "Track quality, cycle time and adoption after release.",
        "chart",
      ],
    ],
  },
  web: {
    title: "The website should support the operation behind the screen.",
    description:
      "Content, commerce, enquiries and customer service work better when the website is designed with the systems and people responsible for the next step.",
    image: "web-hero",
    points: [
      [
        "Content clarity",
        "Structure pages around customer questions and decisions.",
        "file",
      ],
      [
        "Accessible delivery",
        "Design responsive Arabic and English journeys for real devices.",
        "globe",
      ],
      [
        "Connected systems",
        "Send enquiries, orders and customer data to the right tools.",
        "plug",
      ],
    ],
  },
  mobile: {
    title: "A mobile product should make one important journey easier.",
    description:
      "We define the user, environment and system dependencies before choosing the platform or implementation approach.",
    image: "web-hero",
    points: [
      [
        "Journey definition",
        "Focus the product on the tasks users need to complete.",
        "target",
      ],
      [
        "Secure integration",
        "Connect the app to approved APIs and business systems.",
        "shield",
      ],
      [
        "Supported release",
        "Prepare testing, store delivery, monitoring and iteration.",
        "rocket",
      ],
    ],
  },
  "digital-marketing": {
    title: "Marketing becomes more useful when campaigns connect to follow-up.",
    description:
      "We align channels, content and measurement with the enquiries your team can qualify, respond to and learn from.",
    image: "marketing-hero",
    points: [
      [
        "Audience context",
        "Use research to understand the market and buying journey.",
        "eye",
      ],
      [
        "Coordinated execution",
        "Connect search, paid media, social and content priorities.",
        "megaphone",
      ],
      [
        "Sales handoff",
        "Make campaign reporting useful beyond clicks and impressions.",
        "chart",
      ],
    ],
  },
};

export default function ServicePage({ slug }: { slug: string }) {
  if (slug === "ai") return <AIReferencePage />;
  if (slug === "odoo") return <OdooReferencePage />;
  if (slug === "cloud") return <CloudReferencePage />;
  if (slug === "mobile") return <MobileReferencePage />;
  if (slug === "web") return <WebReferencePage />;
  if (slug === "digital-marketing") return <DigitalMarketingReferencePage />;
  const service = servicePages[slug];
  const context = serviceContext[slug];

  return (
    <main id="main" className={"service-page " + slug}>
      <Hero
        {...service}
        primaryHref={service.primary === "Book a Free Consultation" ? "/book-consultation" : "/contact?service=" + encodeURIComponent(service.title)}
      >
        {slug === "cloud" ? <PartnerBadges cloud /> : null}
      </Hero>

      <TechTrust />

      <section className="section tinted" id="solutions">
        <div className="container">
          <SectionHeading
            title={service.sectionTitle}
            description={service.sectionDescription}
          />
          <Cards
            items={service.cards}
            columns={service.cards.length > 6 ? 4 : 3}
            href={"/contact?solution=" + slug}
          />
        </div>
      </section>

      <section className="section service-context">
        <div className="container split">
          <div>
            <SectionHeading
              title={context.title}
              description={context.description}
            />
            <div className="benefit-grid">
              {context.points.map(([title, description, icon]) => (
                <div key={title}>
                  <Icon name={icon} />
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Photo
            className="rounded service-context-image"
            name={context.image}
            alt=""
          />
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <Process title={service.processTitle} steps={service.steps} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title={service.whyTitle}
            description={service.whyDescription}
          />
          <div className="why-grid">
            {service.whyPoints.map(([title, description, icon]) => (
              <div key={title}>
                <Icon name={icon} />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />

      {slug === "odoo" && (
        <section className="section">
          <div className="container">
            <SectionHeading
              title="Business Solutions by Industry"
              description="Apply the same connected platform to the workflows that make each sector different."
              link="Explore All Industries"
              href="/industries"
            />
            <IndustryBento items={industryCardItems} />
          </div>
        </section>
      )}

      <CTA
        title={service.cta}
        button={service.primary}
        href={"/contact?service=" + encodeURIComponent(service.title)}
        description="Tell us about the current workflow, the systems involved and the outcome your team needs."
      />
    </main>
  );
}
