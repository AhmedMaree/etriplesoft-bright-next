import Link from "next/link";
import {
  Mail,
  Phone,
  Clock,
  Headphones,
  Target,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { CTA, SectionHeading, Offices } from "@/components/site";
import { FaqAccordion } from "@/components/faq-accordion";
import { company, mailto, primaryPhone } from "@/lib/company";
import { officesJsonLd } from "@/lib/seo";

const arabicContactFaqs = [
  {
    question: "كيف يمكنني بدء العمل مع ETripleSoft؟",
    answer:
      "تواصل معنا عبر النموذج أو واتساب، وسيقوم أحد استشاريينا بجدولة جلسة اكتشاف أولية لفهم متطلباتك، ورسم الإجراءات المستهدفة، وتحديد النطاق والجدول الزمني المناسب.",
  },
  {
    question: "هل تقدمون دعماً فنياً بعد انتهاء تنفيذ المشروع؟",
    answer:
      "نعم، نوفر باقات دعم فني مستمرة ومخصصة تشمل المتابعة الدورية، وحل المشكلات التشغيلية، والتدريب الإضافي، وتحديثات النظام المستمرة.",
  },
  {
    question: "أين تقع مكاتبكم وكيف يمكن زيارتكم؟",
    answer:
      "لدينا مكاتب مباشرة في القاهرة (مصر)، والرياض (المملكة العربية السعودية)، ودبي (الإمارات العربية المتحدة). يمكنك التنسيق لزيارة أي من مكاتبنا أو ترتيب اجتماع عبر الإنترنت.",
  },
  {
    question: "ما هي المدة المتوقعة للرد على الاستفسارات؟",
    answer:
      "يقوم فريقنا بمراجعة جميع الاستفسارات والرد خلال يوم عمل واحد وتوجيه طلبك مباشرة إلى الاستشاري المختص بمجال عملك.",
  },
];

export function ArabicContactPage() {
  const methods = [
    {
      title: "الاستفسارات العامة",
      icon: <Mail size={24} aria-hidden="true" />,
      node: <a href={mailto()}>{company.primaryEmail}</a>,
    },
    {
      title: "الاتصال الهاتفي",
      icon: <Headphones size={24} aria-hidden="true" />,
      node: (
        <a href={primaryPhone.href} dir="ltr">
          {primaryPhone.display}
        </a>
      ),
    },
    {
      title: "العملاء الحاليون",
      icon: <Clock size={24} aria-hidden="true" />,
      node: <Link href="/ar/support-ticket">فتح تذكرة دعم فني</Link>,
    },
    ...(company.businessHours
      ? [
          {
            title: "ساعات العمل الرسمية",
            icon: <Clock size={24} aria-hidden="true" />,
            node: <p>الأحد – الخميس: 9:00 ص – 6:00 م (توقيت مكة / القاهرة)</p>,
          },
        ]
      : []),
  ];

  return (
    <main id="main" dir="rtl">
      {officesJsonLd().map((office) => (
        <JsonLd key={office["@id"]} data={office} />
      ))}

      {/* Hero Section with Contact Form */}
      <section className="contact-hero">
        <div className="container contact-layout">
          <div className="contact-copy">
            <span className="eyebrow">تواصل مع ETripleSoft</span>
            <h1>
              لنبدأ حواراً <em>مثمراً معاً</em>
            </h1>
            <h2>أخبرنا بما تسعى إلى تطويره وتحسينه.</h2>
            <p>
              سواء كنت تستكشف تطبيق أودو ERP، أو البنية السحابية والأمن
              السيبراني، أو حلول الذكاء الاصطناعي والأتمتة، أو المنتجات الرقمية،
              شاركنا وضعك الحالي والهدف الذي تسعى للوصول إليه.
            </p>
            <div className="contact-promises">
              {[
                [
                  "توجيه دقيق للطلب",
                  "يصل استفسارك مباشرة إلى الفريق المتخصص في نوع الخدمة.",
                  <Target key="target" size={24} aria-hidden="true" />,
                ],
                [
                  "فريق إقليمي حاضر",
                  "مكاتب واستشاريون في مصر والمملكة العربية السعودية والإمارات.",
                  <MapPin key="map" size={24} aria-hidden="true" />,
                ],
                [
                  "خطوة عملية واضحة",
                  "نوضح النطاق والأولويات قبل اقتراح الحل المناسب.",
                  <CheckCircle key="check" size={24} aria-hidden="true" />,
                ],
              ].map(([title, description, icon]) => (
                <div key={title as string}>
                  {icon}
                  <h3>{title as string}</h3>
                  <p>{description as string}</p>
                </div>
              ))}
            </div>
          </div>
          <ContactForm locale="ar" />
        </div>
      </section>

      {/* Methods Strip */}
      <section className="section tinted">
        <div className="container">
          <div className="contact-strip">
            {methods.map(({ title, icon, node }) => (
              <div key={title}>
                {icon}
                <div>
                  <h3>{title}</h3>
                  {node}
                </div>
              </div>
            ))}
          </div>
          <p className="profile-link">
            <a href="/company-profile.pdf" download>
              تحميل الملف التعريفي للشركة (PDF)
            </a>
          </p>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="section" id="offices">
        <div className="container">
          <SectionHeading
            title="ثلاثة مكاتب. فريق إقليمي واحد."
            description="تواصل مع ETripleSoft عبر مكاتبنا في القاهرة والرياض ودبي."
          />
          <Offices contact />
        </div>
      </section>

      {/* FAQs */}
      <section className="section tinted">
        <div className="container">
          <SectionHeading
            title="لديك أسئلة؟ لدينا الإجابات."
            description="إليك إجابات سريعة على الأسئلة الشائعة حول خدماتنا والدعم وطريقة العمل معنا."
          />
          <FaqAccordion items={arabicContactFaqs} />
        </div>
      </section>

      {/* Bottom CTA for Existing Customers */}
      <CTA
        title="هل أنت عميل حالي لدى ETripleSoft؟"
        description="أبلغ عن مشكلة أو اطلب المساعدة في أي خدمة تستخدمها بالفعل مع فريق الدعم المخصص."
        button="طلب دعم فني"
        href="/ar/support-ticket"
      />
    </main>
  );
}
