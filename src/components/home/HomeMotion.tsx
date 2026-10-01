"use client";

import { useEffect } from "react";

// Scroll-reveal for the homepage. Everything is visible without JS: the
// hidden state only exists once this effect adds `motion-ready`, and only for
// elements that start below the fold. Skipped entirely for reduced motion.

const GROUPS =
  '.value-props-grid, .home-solutions-grid, .stats-cards, .testimonials, .industry-bento, [class*="__cardsTop"], [class*="__cardsBottom"], [class*="__showGrid"], [class*="__articles"], [class*="__insightsGrid"]';
const SKIP = ".hero, .partners";

type Unit = { el: HTMLElement; index: number };

function collect(el: Element, units: Unit[]) {
  if (!(el instanceof HTMLElement)) return;
  if (el.matches(GROUPS)) {
    // Horizontal swipe rows reveal as one piece, so off-screen tiles are
    // never left hidden until the user swipes to them.
    if (el.scrollWidth > el.clientWidth + 1) units.push({ el, index: 0 });
    else Array.from(el.children).forEach((child, index) => {
      if (child instanceof HTMLElement) units.push({ el: child, index });
    });
  } else if (el.querySelector(GROUPS)) {
    Array.from(el.children).forEach((child) => collect(child, units));
  } else {
    units.push({ el, index: 0 });
  }
}

export function HomeMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const main = document.querySelector<HTMLElement>("main.homepage");
    if (!main) return;

    const units: Unit[] = [];
    main.querySelectorAll(":scope > section").forEach((section) => {
      if (section.matches(SKIP)) return;
      const container = section.querySelector(":scope > .container") ?? section;
      Array.from(container.children).forEach((child) => collect(child, units));
    });

    const fold = window.innerHeight * 0.94;
    const pending = units.filter(({ el }) => {
      const { top, bottom } = el.getBoundingClientRect();
      return !(top < fold && bottom > 0);
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    const stepsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          stepsObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.4 },
    );

    // Failsafe: if the observers never fire (previews, full-page captures),
    // nothing stays hidden.
    const revealAll = () => {
      main.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-in"));
      main.querySelectorAll(".steps").forEach((el) => el.classList.add("is-in"));
    };
    const failsafe = window.setTimeout(revealAll, 6000);
    window.addEventListener("beforeprint", revealAll);

    main.classList.add("motion-ready");
    pending.forEach(({ el, index }) => {
      el.setAttribute("data-reveal", "");
      el.style.setProperty("--reveal-i", String(Math.min(index, 8)));
      revealObserver.observe(el);
    });
    main.querySelectorAll(".steps").forEach((steps) => stepsObserver.observe(steps));

    return () => {
      window.clearTimeout(failsafe);
      window.removeEventListener("beforeprint", revealAll);
      revealObserver.disconnect();
      stepsObserver.disconnect();
      main.classList.remove("motion-ready");
      main.querySelectorAll("[data-reveal]").forEach((el) => {
        el.removeAttribute("data-reveal");
        el.classList.remove("is-in");
        (el as HTMLElement).style.removeProperty("--reveal-i");
      });
      main.querySelectorAll(".steps.is-in").forEach((el) => el.classList.remove("is-in"));
    };
  }, []);

  return null;
}
