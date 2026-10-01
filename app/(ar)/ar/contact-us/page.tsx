import type { Metadata } from "next";
import { ArabicContactPage } from "@/components/ar/ArabicContactPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "تواصل معنا: مكاتب في القاهرة والرياض ودبي",
  description:
    "تواصل مع ETripleSoft عبر الهاتف أو واتساب أو البريد الإلكتروني. مكاتبنا في القاهرة والرياض ودبي جاهزة لمناقشة حلول أودو والحلول الرقمية لأعمالك.",
  path: "/ar/contact-us",
});

export default function ArabicContact() {
  return <ArabicContactPage />;
}
