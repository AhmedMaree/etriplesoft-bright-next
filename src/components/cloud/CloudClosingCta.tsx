import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import s from "./CloudReferencePage.module.css";

export function CloudClosingCta({
  href,
  locale = "en",
}: {
  href: string;
  locale?: "en" | "ar";
}) {
  const isArabic = locale === "ar";
  const Arrow = isArabic ? ArrowLeft : ArrowRight;
  const titleId = `cloud-closing-cta-${locale}`;

  return (
    <section className={s.ctaSection} aria-labelledby={titleId}>
      <div className={s.ctaContainer}>
        <div className={s.cta}>
          <div className={s.ctaLayout} dir={isArabic ? "rtl" : "ltr"} lang={locale}>
            <div className={s.ctaCopy}>
              <span className={s.ctaBadge}>
                {isArabic ? "مستعد للخطوة القادمة؟" : "READY FOR WHAT’S NEXT"}
              </span>
              <h2 className={s.ctaTitle} id={titleId}>
                {isArabic ? (
                  <>
                    أمّن سحابتك
                    <br />
                    <span>الآن</span>
                  </>
                ) : (
                  <>
                    Ready to Secure
                    <br />
                    <span>Your Cloud?</span>
                  </>
                )}
              </h2>
              <p className={s.ctaDescription}>
                {isArabic
                  ? <>
                      لنبنِ معًا مستقبلاً أكثر أمانًا وقوة
                      <br className={s.ctaDesktopBreak} />
                      ومرونة لأعمالك في مصر.
                    </>
                  : "Let’s build a safer, stronger and more resilient future for your business in Egypt."}
              </p>
              <Link className={s.ctaButton} href={href}>
                {isArabic ? "ابدأ الآن" : "Get Started Today"}
                <Arrow aria-hidden="true" />
              </Link>
            </div>

            <div className={s.ctaArtwork}>
              <Image
                src="/images/cloud-security-cta.webp"
                alt={isArabic
                  ? "رسم توضيحي لأمن السحابة مع درع وخدمات متصلة"
                  : "Cloud security illustration with shield and connected services"}
                width={1448}
                height={1086}
                sizes="(max-width: 760px) calc(100vw - 20px), (max-width: 900px) min(510px, 80vw), (max-width: 1240px) 43vw, 510px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
