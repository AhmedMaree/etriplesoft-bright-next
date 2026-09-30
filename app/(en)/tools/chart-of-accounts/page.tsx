import type { Metadata } from "next";
import { CrumbStrip } from "@/components/breadcrumb";
import { JsonLd } from "@/components/json-ld";
import { ChartOfAccountsTool } from "@/components/tools/ChartOfAccountsTool";
import { organizationId, pageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

const description =
  "Free Odoo 18 chart of accounts generator for Egypt, the UAE and Saudi Arabia. Pick an industry, review the accounts in English or Arabic, and export to Excel or CSV.";

export const metadata: Metadata = pageMetadata({
  title: "Odoo Chart of Accounts Generator (Egypt, UAE, KSA)",
  description,
  path: "/tools/chart-of-accounts",
});

export default function ChartOfAccountsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Odoo Chart of Accounts Generator",
          description,
          url: absoluteUrl("/tools/chart-of-accounts"),
          applicationCategory: "BusinessApplication",
          operatingSystem: "Any",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          publisher: { "@id": organizationId },
        }}
      />
      <CrumbStrip
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Chart of accounts generator" },
        ]}
      />
      <main id="main" className="section tinted">
        <div className="container">
          <header className="tool-head">
            <span className="eyebrow">Free tool</span>
            <h1>Odoo Chart of Accounts Generator</h1>
            <p>
              Start from the Odoo 18 default chart, add industry-specific
              accounts, and export a file ready to import. HR accounts for
              Egypt, the UAE and Saudi Arabia are included, with English and
              Arabic names.
            </p>
          </header>
          <ChartOfAccountsTool />
        </div>
      </main>
    </>
  );
}
