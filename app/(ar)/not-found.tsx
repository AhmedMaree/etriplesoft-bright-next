import Link from "next/link";

export default function ArabicNotFound() {
  return (
    <main id="main">
      <section className="section tinted">
        <div className="container" style={{ minHeight: "55vh", display: "grid", alignContent: "center", justifyItems: "start" }}>
          <span className="eyebrow">404</span>
          <h1>هذه الصفحة غير متاحة</h1>
          <p>قد يكون الرابط قديماً أو أن الصفحة نُقلت. يمكنك العودة إلى الصفحة الرئيسية أو تصفح حلولنا.</p>
          <div className="button-row">
            <Link className="button" href="/ar">العودة إلى الرئيسية</Link>
            <Link className="button secondary" href="/ar/services">استكشف الخدمات</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
