"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import s from "./CloudReferencePage.module.css";

export type CloudTestimonialItem = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company?: string;
  avatarSrc?: string;
};

export function CloudTestimonialCarousel({
  items,
  locale,
}: {
  items: readonly CloudTestimonialItem[];
  locale: "en" | "ar";
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isArabic = locale === "ar";
  const activeItem = items[activeIndex];

  if (!activeItem) return null;

  const step = (offset: number) => {
    setActiveIndex((index) => (index + offset + items.length) % items.length);
  };

  return (
    <div
      className={s.testimonialCarousel}
      role="region"
      aria-roledescription={isArabic ? "عارض" : "carousel"}
      aria-label={isArabic ? "آراء عملاء الخدمات السحابية" : "Cloud service testimonials"}
    >
      <div className={s.testimonialViewport} aria-live="polite" aria-atomic="true">
        <div
          className={s.testimonialTrack}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <figure
              className={s.testimonial}
              key={item.id}
              dir={isArabic ? "rtl" : "ltr"}
              aria-hidden={index !== activeIndex}
            >
              <span className={`${s.eyebrow} ${s.testimonialEyebrow}`}>
                {isArabic ? "ماذا يقول عملاؤنا" : "What our clients say"}
              </span>
              <Quote className={s.testimonialMark} aria-hidden="true" />
              <blockquote>{isArabic ? `«${item.quote}»` : `“${item.quote}”`}</blockquote>
              <figcaption>
                {item.avatarSrc ? (
                  <Image src={item.avatarSrc} alt="" width={56} height={56} />
                ) : (
                  <span className={s.testimonialInitials} aria-hidden="true">
                    {item.name
                      .split(/\s+/)
                      .filter(Boolean)
                      .slice(0, 2)
                      .map((part) => part[0])
                      .join("")}
                  </span>
                )}
                <div>
                  <strong>{item.name}</strong>
                  <span>
                    {item.role}
                    {item.company && (
                      <>
                        {isArabic ? "، " : ", "}
                        <bdi dir="ltr">{item.company}</bdi>
                      </>
                    )}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {items.length > 1 && (
        <div className={s.testimonialControls}>
          <div className={s.testimonialArrows}>
            <button
              type="button"
              aria-label={isArabic ? "الشهادة السابقة" : "Previous testimonial"}
              onClick={() => step(-1)}
            >
              {isArabic ? <ChevronRight aria-hidden="true" /> : <ChevronLeft aria-hidden="true" />}
            </button>
            <button
              type="button"
              aria-label={isArabic ? "الشهادة التالية" : "Next testimonial"}
              onClick={() => step(1)}
            >
              {isArabic ? <ChevronLeft aria-hidden="true" /> : <ChevronRight aria-hidden="true" />}
            </button>
          </div>
          <div className={s.testimonialDots} aria-label={isArabic ? "اختر شهادة" : "Choose a testimonial"}>
            {items.map((item, index) => (
              <button
                type="button"
                key={item.id}
                aria-label={
                  isArabic
                    ? `عرض الشهادة ${index + 1} من ${items.length}`
                    : `Show testimonial ${index + 1} of ${items.length}`
                }
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
