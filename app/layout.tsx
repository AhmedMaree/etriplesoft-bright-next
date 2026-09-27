import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import { Header, Footer } from "@/components/site";
export const metadata: Metadata = {
  title: {
    default: "ETripleSoft — Digital Transformation Built Around Your Business",
    template: "%s | ETripleSoft",
  },
  description:
    "Odoo ERP, AI automation, cloud security, web development and digital marketing for businesses across Egypt, Saudi Arabia and the UAE.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
