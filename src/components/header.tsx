import Image from "next/image";
import Link from "next/link";
import { HeaderNav } from "./header-nav";

/**
 * Server Component shell. All interactive behavior (dropdowns, mobile menu,
 * search, active-route highlighting) lives in the client-only `HeaderNav`.
 */
export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" aria-label="ETripleSoft home" className="brand">
          <Image
            src="/images/logo-header.svg"
            alt="ETripleSoft"
            width={1600}
            height={393}
            sizes="178px"
            priority
          />
        </Link>
        <HeaderNav />
      </div>
    </header>
  );
}
