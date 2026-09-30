// Arabic strings shared by the Arabic header, footer and pages. Office
// addresses are the Arabic versions published on the legacy site; phone
// numbers, email and WhatsApp still come from src/lib/company.ts.

export const arNav = [
  { label: "الرئيسية", href: "/ar" },
  { label: "من نحن", href: "/ar/about-us" },
  { label: "المدونة", href: "/ar/insights" },
  { label: "تواصل معنا", href: "/ar/contact-us" },
] as const;

export const arCta = {
  primary: "احجز استشارة مجانية",
  primaryHref: "/ar/contact-us",
  whatsapp: "تواصل عبر واتساب",
  note: "30 دقيقة، مجانية، بدون التزام.",
};

export const arOffices = {
  egypt: {
    country: "مصر",
    city: "القاهرة",
    label: "القاهرة، مصر",
    address: "فيلا 350، جنوب الأكاديمية ب، القاهرة الجديدة",
  },
  saudi: {
    country: "المملكة العربية السعودية",
    city: "الرياض",
    label: "الرياض، المملكة العربية السعودية",
    address: "العليا، الرياض 12214، المملكة العربية السعودية",
  },
  uae: {
    country: "الإمارات العربية المتحدة",
    city: "دبي",
    label: "دبي، الإمارات العربية المتحدة",
    address: "برج لطيفة، الجناح الغربي، مكتب 103، شارع الشيخ زايد، دبي",
  },
} as const;

export const arDateFormat = new Intl.DateTimeFormat("ar-EG-u-nu-latn", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

/** Arabic reading time, at roughly 180 words a minute. */
export const arReadingMinutes = (text: string) =>
  Math.max(1, Math.ceil(text.split(/\s+/).filter(Boolean).length / 180));

/** "N minutes" with correct Arabic number agreement. */
export function arMinutesLabel(n: number): string {
  if (n === 1) return "دقيقة واحدة";
  if (n === 2) return "دقيقتان";
  if (n <= 10) return `${n} دقائق`;
  return `${n} دقيقة`;
}
