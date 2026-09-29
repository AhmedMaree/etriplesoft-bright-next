"use client";
import { useEffect, useState } from "react";
import styles from "./OdooChild.module.css";

type Item = { id: string; order: number; title: string };

/**
 * In-page stage navigation with scroll-spy. Plain anchor links, so it works
 * without JavaScript; the observer only adds the "current" highlight.
 */
export function StageNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const targets = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className={styles.stageNav} aria-label="Implementation stages">
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? "step" : undefined}
            >
              <span aria-hidden="true">{item.order}</span>
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
