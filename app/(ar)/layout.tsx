import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource/ibm-plex-sans-arabic/400.css";
import "@fontsource/ibm-plex-sans-arabic/500.css";
import "@fontsource/ibm-plex-sans-arabic/600.css";
import "@fontsource/ibm-plex-sans-arabic/700.css";
import "../globals.css";
import "./ar.css";
import { ArHeader } from "@/components/ar/ArHeader";
import { ArFooter } from "@/components/ar/ArFooter";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { siteConfig, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ETripleSoft | شريك أودو الذهبي في مصر والإمارات والسعودية",
    template: `%s | ${siteConfig.name}`,
  },
};

export default function ArabicRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <a className="skip-link" href="#main">
          تخطَّ إلى المحتوى
        </a>
        <ArHeader />
        {children}
        <ArFooter />
        <WhatsAppButton
          label="تواصل مع ETripleSoft عبر واتساب"
          title="تواصل عبر واتساب"
        />
      </body>
    </html>
  );
}
