"use client";

import { usePathname } from "next/navigation";
import { englishCounterpart } from "@/i18n/paths";

export function EnglishCounterpartLink() {
  const pathname = usePathname() || "/ar";
  return <a href={englishCounterpart(pathname)} hrefLang="en" lang="en">English</a>;
}
