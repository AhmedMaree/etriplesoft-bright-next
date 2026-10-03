import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import { Icon } from "@/components/site";
import styles from "@/components/services/ServicesHub.module.css";
import local from "./ArabicServicesPage.module.css";

const foundations = [
  { slug: "cloud", icon: "cloud", title: "السحابة والأمن", href: "/ar/cloud", problem: "تحديث البنية التقنية وحماية الهويات والأجهزة وإبقاء البيانات المهمة قابلة للاستعادة ضمن خارطة عملية للسحابة والأمن.", connection: "تحافظ هذه الخدمة على أمان البيئة التي يعمل فيها أودو، وعلى النسخ الاحتياطي والدعم." },
  { slug: "ai", icon: "brain", title: "الذكاء الاصطناعي والأتمتة", href: "/ar/ai", problem: "تحديد فرص الأتمتة ذات القيمة وربط البيانات والأنظمة المناسبة مع إبقاء القرارات المهمة تحت إشراف الأشخاص.", connection: "تستند الأتمتة إلى السجلات ومسارات العمل التي تمر بالفعل عبر أودو." },
];

const channels = [
  { slug: "web", icon: "monitor", title: "تطوير المواقع", href: "/ar/web", problem: "مواقع متجاوبة ومتاجر إلكترونية وبوابات خدمة واضحة وسهلة الإدارة.", connection: "جاهزة للارتباط بمسارات إدارة العملاء وتخطيط الموارد والتسويق." },
  { slug: "mobile", icon: "phone", title: "تطبيقات الجوال", href: "/ar/mobile", problem: "تطبيقات للعملاء والأعمال على iOS وAndroid وبحلول متعددة المنصات.", connection: "تعمل التطبيقات على البيانات نفسها التي تستخدمها الفرق في أودو." },
  { slug: "digital-marketing", icon: "chart", title: "التسويق الرقمي", href: "/ar/digital-marketing", problem: "تحسين محركات البحث والإعلانات ووسائل التواصل والمحتوى والتقارير المرتبطة بمسار المبيعات.", connection: "تُتابع الاستفسارات والنتائج حتى مراحل البيع." },
];

const orbit = [
  ["السحابة والأمن", 200, 46], ["الذكاء الاصطناعي", 354, 160], ["التسويق الرقمي", 296, 340],
  ["تطبيقات الجوال", 104, 340], ["تطوير المواقع", 46, 160],
] as const;

export function ArabicServicesPage() {
  return <main id="main" dir="rtl" className={`${styles.page} ${local.rtl}`}>
    <section className={`${styles.hero} ${local.hero}`} aria-labelledby="ar-services-title">
      <div className={`container ${styles.heroGrid} ${local.heroGrid}`}>
        <div>
          <span className="eyebrow">خدماتنا</span>
          <h1 id="ar-services-title">تحول رقمي يرتكز على أودو</h1>
          <p className={styles.lead}>تجمع ETripleSoft بين أنظمة ERP والسحابة والأتمتة والقنوات الرقمية ضمن محفظة مترابطة. يدير أودو العمليات، وتدعمه الخدمات الأخرى وتوسّع قدراته.</p>
          <div className="button-row">
            <Link className="button gradient" href="/ar/book-consultation">احجز استشارة مجانية</Link>
            <Link className="button secondary" href="#odoo">تعرّف على أودو</Link>
          </div>
        </div>
        <ol className={`${styles.tiers} ${local.tiers}`} aria-label="ترابط خدماتنا">
          <li data-core><span>النواة</span><strong>أودو ERP</strong></li>
          <li><span>الأساس والتحليلات</span><strong>السحابة والأمن، والذكاء الاصطناعي</strong></li>
          <li><span>قنوات التواصل مع العملاء</span><strong>المواقع والجوال والتسويق الرقمي</strong></li>
        </ol>
      </div>
    </section>

    <section id="odoo" className={styles.odoo} aria-labelledby="ar-services-odoo-title">
      <div className={`container ${styles.odooGrid}`}>
        <div className={styles.odooCopy}>
          <span className={styles.odooEyebrow}>الحل المحوري</span>
          <h2 id="ar-services-odoo-title">أودو ERP هو النواة التشغيلية</h2>
          <p>تعمل الشؤون المالية والمبيعات والمخزون والمشروعات والموظفون وخدمة العملاء بصورة أفضل على منصة مترابطة. ننفذ أودو وفق طريقة عمل شركتك، ثم نوسّعه مع تطور الفرق والإجراءات.</p>
          <p>وترتبط بقية الخدمات في هذه المحفظة بأودو، لتبقى البيانات التي تعتمد عليها الفرق في مكان واحد.</p>
          <div className={styles.odooCta}><Link className="button" href="/ar/odoo">استكشف نظام أودو ERP</Link></div>
        </div>
        <div className={styles.odooVisual}>
          <Image src="/images/odoo/odoo-laptop-dashboard.webp" width={1408} height={875} alt="لوحة معلومات أودو على جهاز محمول" sizes="(min-width: 1000px) 560px, 100vw" />
        </div>
        <nav className={styles.capabilities} aria-labelledby="ar-services-capabilities">
          <h3 id="ar-services-capabilities">قدرات أودو</h3>
          <ul>
            {[
              ["التنفيذ", "/ar/odoo/implementation"], ["المحاسبة والفوترة الإلكترونية", "/ar/odoo/accounting"],
              ["الموارد البشرية والرواتب", "/ar/odoo/hr-payroll"], ["مكتب الخدمة والدعم", "/ar/odoo/itsm-helpdesk"],
              ["لوحات المعلومات والتحليلات", "/ar/odoo/dashboard-insights"],
            ].map(([label, href]) => <li key={href}><Link href={href}>{label}<ArrowLeft size={16} aria-hidden="true" /></Link></li>)}
          </ul>
        </nav>
      </div>
    </section>

    <section className={styles.foundation} aria-labelledby="ar-services-foundation-title">
      <div className="container">
        <header className={styles.groupHead}><span className="eyebrow">الأساس والتحليلات</span><h2 id="ar-services-foundation-title">بيئة آمنة وإجراءات أكثر ذكاءً</h2><p>تعتمد موثوقية أودو على البيئة المحيطة به. وتساعد هاتان الخدمتان على حماية البيئة والاستفادة من بياناتها.</p></header>
        {foundations.map((item, index) => <article key={item.slug} className={styles.row} data-flip={index % 2 === 1 || undefined} aria-labelledby={`ar-${item.slug}-title`}>
          <div className={styles.rowIcon} aria-hidden="true"><Icon name={item.icon} /></div>
          <div className={styles.rowCopy}><h3 id={`ar-${item.slug}-title`}>{item.title}</h3><p>{item.problem}</p><p className={styles.connect}>{item.connection}</p><Link className="text-link" href={item.href}>معرفة المزيد<span className={styles.srOnly}> عن {item.title}</span><ArrowLeft size={15} aria-hidden="true" /></Link></div>
        </article>)}
      </div>
    </section>

    <section className={styles.channels} aria-labelledby="ar-services-channels-title">
      <div className="container">
        <header className={styles.groupHead}><span className="eyebrow">قنوات التواصل مع العملاء</span><h2 id="ar-services-channels-title">حيث يلتقي العملاء بأعمالك</h2><p>المواقع والتطبيقات والحملات هي الواجهة الأولى. وعند ربطها بأودو، تستخدم المنتجات والعملاء والطلبات نفسها التي تعتمد عليها بقية العمليات.</p></header>
        <div className={styles.columns}>{channels.map((item) => <article key={item.slug} aria-labelledby={`ar-channel-${item.slug}`}><span aria-hidden="true"><Icon name={item.icon} /></span><h3 id={`ar-channel-${item.slug}`}>{item.title}</h3><p>{item.problem}</p><p className={styles.connect}>{item.connection}</p><Link className="text-link" href={item.href}>معرفة المزيد<span className={styles.srOnly}> عن {item.title}</span><ArrowLeft size={15} aria-hidden="true" /></Link></article>)}</div>
      </div>
    </section>

    <section className={styles.together} aria-labelledby="ar-services-together-title">
      <div className={`container ${styles.togetherGrid}`}>
        <div><span className="eyebrow">كيف تعمل الخدمات معاً</span><h2 id="ar-services-together-title">محفظة واحدة حول نظام مترابط</h2><p className={styles.lead}>عندما تُقدم كل خدمة على حدة، تقع مسؤولية التنسيق بين الأنظمة على عاتقك. وعند تقديمها معاً حول أودو، تتشارك البيانات ويعمل معك شريك واحد.</p>
          <dl className={styles.points}>
            <div><dt>شريك واحد مسؤول</dt><dd>فريق واحد يتابع ترابط المكونات بدلاً من تعدد الجهات التي تحيل المسؤولية إلى بعضها.</dd></div>
            <div><dt>بيانات مترابطة</dt><dd>تُدار بيانات العملاء والطلبات والمالية في أودو وتتدفق إلى القنوات والأدوات التي تحتاج إليها.</dd></div>
            <div><dt>تنفيذ أكثر سلاسة</dt><dd>يساعد السياق المشترك والتكاملات القابلة لإعادة الاستخدام على الحد من إعادة العمل عند إضافة خدمات جديدة.</dd></div>
            <div><dt>مخاطر تكامل أقل</dt><dd>يساعد تصميم الروابط مسبقاً على تجنب التكاملات المنفردة الهشة بين الأنظمة.</dd></div>
          </dl>
        </div>
        <svg className={styles.diagram} viewBox="0 0 400 400" role="img" aria-label="مخطط يوضح ارتباط خدمات السحابة والذكاء الاصطناعي والمواقع والجوال والتسويق بنظام أودو ERP">
          <circle cx="200" cy="200" r="150" className={styles.ring} />
          {orbit.map(([label, x, y]) => <line key={label} x1="200" y1="200" x2={x} y2={y} className={styles.spoke} />)}
          <circle cx="200" cy="200" r="58" className={styles.hub} /><text x="200" y="196" className={styles.hubText}>أودو</text><text x="200" y="214" className={styles.hubSub}>ERP</text>
          {orbit.map(([label, x, y]) => <g key={label}><circle cx={x} cy={y} r="8" className={styles.node} /><text x={x} y={y < 200 ? y - 18 : y + 28} className={styles.nodeText}>{label}</text></g>)}
        </svg>
      </div>
    </section>

    <section className={styles.region} aria-labelledby="ar-services-region-title">
      <div className="container"><div className={styles.regionHead}><span className="eyebrow">حضور إقليمي</span><h2 id="ar-services-region-title">ندعم الأعمال في مصر والسعودية والإمارات</h2><p>تعمل ETripleSoft في ثلاثة أسواق، ولها مكاتب في القاهرة والرياض ودبي.</p></div>
        <ul className={styles.places}><li><MapPin size={18} aria-hidden="true" /><strong>القاهرة</strong><span>مصر</span></li><li><MapPin size={18} aria-hidden="true" /><strong>الرياض</strong><span>المملكة العربية السعودية</span></li><li><MapPin size={18} aria-hidden="true" /><strong>دبي</strong><span>الإمارات العربية المتحدة</span></li></ul>
        <Link className="text-link" href="/ar/contact-us">المكاتب وبيانات التواصل<ArrowLeft size={15} aria-hidden="true" /></Link>
      </div>
    </section>

    <section className="cta-band" aria-labelledby="ar-services-cta-title"><div className="container"><div><h2 id="ar-services-cta-title">هل تخطط للتحول الرقمي؟</h2><p>تحدث مع فريقنا عن ملاءمة أودو لعملك والخدمات التي يمكن أن تدعمه.</p></div><div className={styles.ctaActions}><Link className="button" href="/ar/book-consultation">احجز استشارة مجانية</Link><Link className={styles.ctaLink} href="/ar/odoo">استكشف نظام أودو ERP<ArrowLeft size={16} aria-hidden="true" /></Link></div></div></section>
  </main>;
}
