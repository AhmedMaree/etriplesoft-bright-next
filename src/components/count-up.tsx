"use client";

import { useEffect, useRef } from "react";

/**
 * Renders the final value (so it is correct without JS and for reduced
 * motion), then counts up from 0 the first time it scrolls into view.
 */
export function CountUp({
  value,
  duration = 1200,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const match = /^(\D*)(\d[\d.]*)(.*)$/.exec(value);
    if (!match) return;
    const [, prefix, digits, suffix] = match;
    const target = parseFloat(digits);
    if (!Number.isFinite(target)) return;
    const decimals = (digits.split(".")[1] ?? "").length;
    const render = (n: number) => {
      el.textContent = prefix + n.toFixed(decimals) + suffix;
    };

    let raf = 0;
    render(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          render(target * (1 - Math.pow(1 - progress, 3)));
          if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      el.textContent = value;
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="count-up">
      {value}
    </span>
  );
}
