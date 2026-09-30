"use client";
import { ArrowUp } from "lucide-react";

export function BackToTop({ label = "Back to top" }: { label?: string }) {
  return (
    <button
      className="back-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={label}
    >
      <ArrowUp size={18} />
    </button>
  );
}
