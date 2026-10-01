import type { Metadata } from "next";
import { ArabicAboutPage } from "@/components/ar/ArabicAboutPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "من نحن: فريق أودو وحلول رقمية في مصر والخليج",
  description:
    "تعرّف على ETripleSoft: فريق متخصص في حلول البرمجيات المصممة لتحديات أعمالك، بمكاتب في القاهرة والرياض ودبي وشراكة ذهبية مع أودو.",
  path: "/ar/about-us",
});

export default function ArabicAbout() {
  return <ArabicAboutPage />;
}
