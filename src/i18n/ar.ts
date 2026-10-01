// Arabic strings shared by the Arabic header, footer and pages. Office
// addresses are the Arabic versions published on the legacy site; phone
// numbers, email and WhatsApp still come from src/lib/company.ts.

/** Flat nav used by the Arabic footer. */
export const arNav = [
  { label: "الرئيسية", href: "/ar" },
  { label: "أودو ERP", href: "/ar/odoo" },
  { label: "الخدمات", href: "/ar/services" },
  { label: "القطاعات", href: "/ar/industries" },
  { label: "قصص النجاح", href: "/ar/portfolio" },
  { label: "المدونة", href: "/ar/insights" },
  { label: "من نحن", href: "/ar/about-us" },
  { label: "تواصل معنا", href: "/ar/contact-us" },
] as const;

/** Structured primary navigation — mirrors the English primaryNav with full dropdown groups. */
export const arPrimaryNav = [
  {
    label: "أودو ERP",
    items: [
      { label: "نظرة عامة على أودو", href: "/ar/odoo", icon: "layout", description: "كل تطبيقات أودو على منصة واحدة متكاملة." },
      { label: "طلب عرض تجريبي", href: "/ar/request-demo", icon: "play", description: "شاهد أودو يعمل على عملياتك الفعلية." },
      { label: "التنفيذ والإطلاق", href: "/ar/odoo/implementation", icon: "rocket", description: "إطلاق منظم من الاكتشاف حتى التشغيل." },
      { label: "المحاسبة والفواتير الإلكترونية", href: "/ar/odoo/accounting", icon: "receipt", description: "الحسابات والضرائب والفواتير الإلكترونية في مكان واحد." },
      { label: "الموارد البشرية والرواتب", href: "/ar/odoo/hr-payroll", icon: "users", description: "سجلات الموظفين، الحضور والرواتب." },
      { label: "خدمة العملاء والدعم الفني", href: "/ar/odoo/itsm-helpdesk", icon: "headset", description: "التذاكر، مستويات الخدمة وإدارة الدعم." },
      { label: "لوحات المعلومات والتقارير", href: "/ar/odoo/dashboard-insights", icon: "chart", description: "مؤشرات الأداء الحية لاتخاذ قرارات أفضل." },
    ],
  },
  {
    label: "الخدمات",
    items: [
      { label: "نظرة عامة على الخدمات", href: "/ar/services", icon: "layout", description: "ERP، السحابة، الذكاء الاصطناعي، الويب، الجوال والتسويق." },
      { label: "السحابة والأمن السيبراني", href: "/ar/cloud", icon: "cloud", description: "استضافة آمنة وقابلة للتوسع." },
      { label: "الذكاء الاصطناعي والأتمتة", href: "/ar/ai", icon: "bot", description: "أتمتة المهام الروتينية بالذكاء الاصطناعي." },
      { label: "تطوير المواقع", href: "/ar/web", icon: "code", description: "مواقع وبوابات سريعة وفعّالة." },
      { label: "تطبيقات الجوال", href: "/ar/mobile", icon: "phone", description: "تطبيقات iOS وAndroid لعملائك." },
      { label: "التسويق الرقمي", href: "/ar/digital-marketing", icon: "megaphone", description: "حملات مدفوعة بالبيانات وتحسين محركات البحث." },
    ],
  },
  {
    label: "القطاعات",
    items: [
      { label: "نظرة عامة على القطاعات", href: "/ar/industries", icon: "layout", description: "حلول مخصصة لكل قطاع." },
      { label: "البناء والمقاولات", href: "/ar/industries/construction", icon: "hardhat", description: "ميزانيات المشاريع والمشتريات وتكاليف الموقع." },
      { label: "العقارات", href: "/ar/industries/real-estate", icon: "building", description: "العقارات والاستفسارات والعقود والفواتير." },
      { label: "إدارة المرافق", href: "/ar/industries/facility-management", icon: "wrench", description: "إدارة المرافق والصيانة والخدمات." },
      { label: "المطاعم والضيافة", href: "/ar/industries/restaurants", icon: "utensils", description: "العمليات والمخزون والخدمة." },
      { label: "التعليم", href: "/ar/industries/education", icon: "graduation", description: "القبول وسجلات الطلاب والمالية." },
    ],
  },
  {
    label: "قصص النجاح",
    href: "/ar/portfolio",
  },
  {
    label: "المدونة",
    href: "/ar/insights",
  },
  {
    label: "الشركة",
    items: [
      { label: "من نحن", href: "/ar/about-us", icon: "info", description: "من نحن وكيف نعمل." },
      { label: "الوظائف", href: "/ar/careers", icon: "briefcase", description: "انضم إلى فرقنا في جميع أنحاء المنطقة." },
      { label: "تواصل معنا", href: "/ar/contact-us", icon: "mail", description: "تحدث إلينا في القاهرة والرياض ودبي." },
      { label: "المصادر", href: "/ar/resources", icon: "book", description: "أدلة وأدوات لمشاريعك." },
    ],
  },
] as const;


export const arCta = {
  primary: "احجز استشارة مجانية",
  primaryHref: "/ar/book-consultation",
  whatsapp: "تواصل عبر واتساب",
  note: "استشارة مجانية، بدون أي التزام.",
};

export const arOffices = {
  egypt: {
    country: "مصر",
    city: "القاهرة",
    label: "القاهرة، مصر",
    address: "فيلا 350، جنوب الأكاديمية ب، القاهرة الجديدة",
  },
  saudi: {
    country: "المملكة العربية السعودية",
    city: "الرياض",
    label: "الرياض، المملكة العربية السعودية",
    address: "العليا، الرياض 12214، المملكة العربية السعودية",
  },
  uae: {
    country: "الإمارات العربية المتحدة",
    city: "دبي",
    label: "دبي، الإمارات العربية المتحدة",
    address: "برج لطيفة، الجناح الغربي، مكتب 103، شارع الشيخ زايد، دبي",
  },
} as const;

export const arDateFormat = new Intl.DateTimeFormat("ar-EG-u-nu-latn", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

/** Arabic reading time, at roughly 180 words a minute. */
export const arReadingMinutes = (text: string) =>
  Math.max(1, Math.ceil(text.split(/\s+/).filter(Boolean).length / 180));

/** "N minutes" with correct Arabic number agreement. */
export function arMinutesLabel(n: number): string {
  if (n === 1) return "دقيقة واحدة";
  if (n === 2) return "دقيقتان";
  if (n <= 10) return `${n} دقائق`;
  return `${n} دقيقة`;
}

export const arHome = {
  hero: {
    eyebrow: "شريك أودو الذهبي · مصر · الإمارات · السعودية",
    title: "تحول رقمي مصمم\nخصيصاً لنمو",
    accent: "أعمالك.",
    description:
      "حلول أنظمة أودو ERP، التطبيقات السحابية، الذكاء الاصطناعي والحلول الرقمية المتكاملة للشركات الطموحة في مصر والإمارات والمملكة العربية السعودية.",
    primary: "احجز استشارة مجانية",
    primaryHref: "/ar/book-consultation",
    secondary: "استكشف حلولنا",
    secondaryHref: "#solutions",
    note: "منصة موحدة.\nقرارات أذكى.",
    callouts: [
      { icon: "chart", text: "تبسيط العمليات التشغيلية" },
      { icon: "sparkles", text: "أتمتة بالذكاء الاصطناعي" },
      { icon: "shield", text: "آمن وقابل للتوسع" },
    ],
  },
  clientLogosTitle: "العلامات التجارية الرائدة تثق بنا",
  valueProps: {
    eyebrow: "صُممت لغدٍ أكثر ذكاءً",
    titleText: "تكنولوجيا تدعم",
    titleAccent: "نمو وتمكين أعمالك",
    description: "حلول ذكية. تكنولوجيا متطورة. أثر حقيقي ومستدام على أعمالك.",
    items: [
      {
        icon: "network",
        eyebrow: "تكامل شامل",
        title: "أنظمة ERP والحلول الرقمية",
        description: "ربط أنظمة الأعمال والتطبيقات والأتمتة في منصة موحدة وسلسة.",
        color: "blue",
      },
      {
        icon: "rocket",
        eyebrow: "نمو متسارع",
        title: "من البداية حتى النجاح",
        description: "نرافقك خطوة بخطوة في رحلتك الرقمية من التخطيط وحتى التشغيل الكامل.",
        color: "teal",
      },
      {
        icon: "pin",
        eyebrow: "الشرق الأوسط",
        title: "خبرة إقليمية متخصصة",
        description: "حضور محلي وتواجد فعلي في مصر، والمملكة العربية السعودية، والإمارات.",
        color: "violet",
      },
      {
        icon: "users",
        eyebrow: "التركيز على العميل",
        title: "حلول تحقق نتائج ملموسة",
        description: "كل حل نبتكره مصمم خصيصاً لتحقيق أهداف عملك وتعظيم العائد الاستثماري.",
        color: "amber",
      },
    ],
  },
  odooApps: {
    pill: "Odoo ERP",
    titleLine1: "كافة تطبيقات أعمالك،",
    titleLine2: "تعمل بتناغم",
    titleAccent: "تام معاً",
    description:
      "ابدأ بالتطبيق الذي يحل التحدي الحالي لديك وأضف المزيد مع نمو شركتك — جميع التطبيقات تتشارك نفس قاعدة البيانات بدقة وفعالية.",
    cta: "استكشف كافة التطبيقات",
    ctaHref: "/ar/odoo",
    visualNote: "منصة واحدة\nإمكانيات لا محدودة",
    visualCaption: "قاعدة بيانات موحدة • تطبيقات مترابطة • بيانات فورية",
    chips: [
      { key: "sales", label: "المبيعات" },
      { key: "reporting", label: "التقارير" },
      { key: "people", label: "فريق العمل" },
      { key: "connected", label: "تكامل شامل" },
    ],
    apps: [
      {
        name: "المبيعات",
        copy: "عروض الأسعار، طلبات البيع ومسار الصفقات في واجهة موحدة.",
        href: "/ar/request-demo",
      },
      {
        name: "إدارة علاقات العملاء",
        copy: "تتبع كل فرصة بيعية وعميل محتمل من البداية حتى إتمام الصفقة.",
        href: "/ar/request-demo",
      },
      {
        name: "المحاسبة والفوترة",
        copy: "إدارة الدفاتر والضرائب والفوترة الإلكترونية المعتمدة من زاتكا.",
        href: "/ar/odoo/accounting",
      },
      {
        name: "إدارة المخزون",
        copy: "إدارة المستودعات وحركات الأصناف والتوريدات في الوقت الفعلي بدقة.",
        href: "/ar/request-demo",
      },
      {
        name: "التصنيع والإنتاج",
        copy: "قوائم المواد، أوامر التشغيل وحساب التكاليف خطوة بخطوة.",
        href: "/ar/request-demo",
      },
      {
        name: "إدارة المشاريع",
        copy: "تخطيط المهام وتتبع ساعات العمل وإصدار الفواتير باحترافية.",
        href: "/ar/request-demo",
      },
      {
        name: "الموارد البشرية والرواتب",
        copy: "سجلات الموظفين، الحضور والانصراف ومسيرات الرواتب والإجازات.",
        href: "/ar/odoo/hr-payroll",
      },
    ],
  },
  solutions: {
    eyebrow: "حلولنا المتكاملة",
    titleText: "حلول تقنية لبناء",
    titleAccent: "غدٍ أكثر قوة",
    description:
      "من أنظمة تخطيط الموارد والسحابة إلى الذكاء الاصطناعي والتجارب الرقمية — نقدم حلولاً متكاملة تساعدك على العمل بذكاء والنمو بسرعة والبقاء في الصدارة.",
    items: [
      {
        slug: "odoo",
        icon: "coins",
        title: "أنظمة أودو ERP",
        description: "إدارة شاملة لكافة عمليات أعمالك على منصة واحدة موحدة وقوية.",
      },
      {
        slug: "cloud",
        icon: "cloud",
        title: "الحلول السحابية والأمن السيبراني",
        description: "بنية تحتية سحابية آمنة وموثوقة وقابلة للتوسع لأعمالك.",
      },
      {
        slug: "ai",
        icon: "brain",
        title: "أتمتة العمليات والذكاء الاصطناعي",
        description: "أتمتة المهام الروتينية واستكشاف فرص جديدة بتقنيات الذكاء الاصطناعي.",
      },
      {
        slug: "web",
        icon: "monitor",
        title: "تطوير المواقع وتطبيقات الجوال",
        description: "مواقع ومنصات وتطبيقات رقمية متطورة تنمو مع نمو شركتك.",
      },
      {
        slug: "digital-marketing",
        icon: "chart",
        title: "التسويق الرقمي وإدارة الحملات",
        description: "استراتيجيات تسويق قائمة على البيانات لزيادة المبيعات والانتشار.",
      },
    ],
  },
  process: {
    pill: "منهجية العمل",
    titleLine1: "من الفكرة إلى",
    titleAccent: "الأثر الحقيقي",
    description:
      "نتبع منهجية عمل دقيقة ومجربة لفهم احتياجاتك، وتطوير الحل الأمثل، ودعمك لضمان تحقيق النجاح والنمو المستمر.",
    cta: "ابدأ مشروعك معنا",
    ctaHref: "/ar/contact-us",
    more: "معرفة المزيد",
    steps: [
      {
        title: "الاكتشاف والتحليل",
        description: "فهم أهداف عملك والتحديات التشغيلية والفرص المتاحة للتطوير.",
      },
      {
        title: "التصميم والتخطيط",
        description: "بناء الاستراتيجية المثلى وتصميم حل مخصص يناسب أسلوب عملك.",
      },
      {
        title: "التنفيذ والتطوير",
        description: "برمجة وتهيئة النظام واختباره وتدريب الفريق وفق أفضل الممارسات.",
      },
      {
        title: "الدعم والتحسين",
        description: "تقديم الدعم الفني والمتابعة المستمرة لضمان تحقيق أعلى عائد استثماري.",
      },
    ],
  },
  industries: {
    eyebrow: "القطاعات",
    title: "خبرة قطاعية متعمقة",
    lead: "نفهم التحديات الفريدة لكل قطاع. حلولنا المخصصة تمكّنك من مواجهة التحديات وتحقيق نمو مستمر.",
    cta: "استكشف كافة القطاعات",
    ctaHref: "/ar/industries",
    stats: [
      { value: "6+", label: "قطاعات رئيسية", icon: "building" },
      { value: "500+", label: "عميل يثق بنا", icon: "people" },
      { value: "نتائج مثبتة", label: "نجاح مستمر", icon: "chart" },
    ],
    items: [
      {
        id: "construction",
        label: "المقاولات",
        title: "المقاولات والتشييد",
        href: "/ar/industries/construction",
        text: "ميزانيات المشاريع، المشتريات وتكاليف المواقع في لوحة تحكم واحدة.",
        image: "/images/construction.webp",
        icon: "build",
      },
      {
        id: "retail",
        label: "التجزئة",
        title: "تجارة التجزئة",
        href: "/ar/industries/retail",
        text: "مبيعات المتاجر، نقاط البيع، المخزون وإعادة التوريد وسلوك العملاء.",
        image: "/images/retail.webp",
        icon: "cart",
      },
      {
        id: "education",
        label: "التعليم",
        title: "التعليم والتدريب",
        href: "/ar/industries/education",
        text: "شؤون الطلاب والقبول، السجلات الأكاديمية والمالية في نظام متكامل.",
        image: "/images/education.webp",
        icon: "cap",
      },
      {
        id: "realestate",
        label: "العقارات",
        title: "العقارات والتطوير",
        href: "/ar/industries/real-estate",
        text: "إدارة العقارات والوحدات، العقود، المستأجرين والأقساط والتحصيل بمرونة.",
        image: "/images/dubai.webp",
        icon: "building",
      },
      {
        id: "healthcare",
        label: "الرعاية الصحية",
        title: "الرعاية الصحية",
        href: "/ar/industries/healthcare",
        text: "إدارة سير العمل الإداري والمالي والتكامل مع الأنظمة الطبية والسريرية.",
        image: "/images/healthcare.webp",
        icon: "heart",
      },
      {
        id: "logistics",
        label: "اللوجستيات",
        title: "الخدمات اللوجستية والشحن",
        href: "/ar/industries/logistics",
        text: "إدارة المستودعات، الشحن والتوزيع، أسطول النقل وتتبع التكاليف.",
        image: "/images/distribution.webp",
        icon: "box",
      },
    ],
  },
  stats: {
    badge: "أثرنا وإنجازاتنا",
    titleText: "أرقام تروي",
    titleAccent: "قصة نجاحنا",
    description:
      "نتائج واقعية، شراكات طويلة الأمد، وأثر متنامٍ في مصر والإمارات والمملكة العربية السعودية.",
    items: [
      ["250+", "مشروع ناجح", "briefcase", "مشاريع منجزة بنتائج ملموسة."],
      ["3", "دول ومقرات رئيسية", "globe", "مصر، الإمارات، والمملكة العربية السعودية."],
      ["8+", "سنوات من الخبرة", "clock", "خبرة تقنية متخصصة وممتدة."],
      ["6", "قطاعات حيوية", "building", "حلول متخصصة لكل صناعة."],
    ],
  },
  testimonials: {
    eyebrow: "آراء وتجارب العملاء",
    titleLine1: "ثقة متجددة من قادة الأعمال",
    titleLine2: "عبر",
    titleAccent: "مختلف القطاعات",
    sub: "استمع إلى تجارب شركاء النجاح الذين اختاروا ETripleSoft وحققوا نتائج ملموسة.",
    items: [
      {
        id: "technonet",
        quote:
          "حل أودو المحاسبي ساعدنا على تنظيم ماليتنا بدقة مع امتثال كامل لمتطلبات هيئة الزكاة والضريبة والجمارك (ZATCA) ودعم فني متميز.",
        name: "ماركو يوسف",
        role: "المدير المالي",
        company: "تكنونت",
      },
      {
        id: "onestack",
        quote: "أود أن أعبر عن إعجابي الشديد بمدى التزام الفريق وتفانيهم في إنجاز العمل بأعلى جودة واحترافية.",
        name: "وليد الجنزوري",
        role: "الرئيس التنفيذي",
        company: "ون ستاك",
      },
      {
        id: "alkanal",
        quote:
          "التعاون الإيجابي والدعم المستمر يمنحنا الثقة لخوض تحديات جديدة والتوسع مع ETripleSoft بثقة تامة.",
        name: "تامر غريب",
        role: "المؤسس والمالك",
        company: "القنال",
      },
      {
        id: "summit",
        quote:
          "الأمن السحابي وتكامل نظام الـ ERP فاق توقعاتنا بفضل الخبرة التقنية العالية والاحترافية وسرعة الاستجابة.",
        name: "أسامة حسب الله",
        role: "مدير تقنية المعلومات",
        company: "ساميت",
      },
      {
        id: "regional-deployment",
        quote:
          "الدعم ثنائي اللغة والخبرة الإقليمية الواسعة جعلت عملية إطلاق النظام تسير بسلاسة تامة عبر فروعنا في مصر والإمارات.",
        name: "عبد الرحمن عبد الحكيم",
        role: "مدير المشاريع",
      },
      {
        id: "ram-electronics",
        quote:
          "نظام الـ ERP أحدث نقلة نوعية في إدارة المخزون والمبيعات لدينا بكفاءة غير مسبوقة.",
        name: "م. محمود حمدي",
        role: "الرئيس التنفيذي",
        company: "رام للإلكترونيات",
      },
      {
        id: "bbr",
        quote:
          "حل أودو المخصص ساعدنا في ضبط وتوحيد مسار العمليات الإنشائية والمشتريات بكفاءة وسلاسة.",
        name: "أحمد وفائي",
        role: "مدير المشروع",
        company: "BBR",
      },
      {
        id: "abm",
        quote:
          "حل أودو المخصص ساعدنا في تحسين سير العمليات التشغيلية وتحقيق عائد استثماري ملموس خلال أشهر قليلة.",
        name: "م. قاسم",
        role: "مدير الهندسة",
        company: "ABM",
      },
    ],
  },
  articles: {
    eyebrow: "المدونة والمعرفة",
    titleText: "أحدث المقالات و",
    titleAccent: "الرؤى التقنية",
    intro: "ابقَ على اطلاع دائم بأحدث الاتجاهات والنصائح وقصص النجاح والتحول الرقمي من خبرائنا.",
    viewAll: "عرض كافة المقالات",
    viewAllHref: "/ar/insights",
    readArticle: "قراءة المقال",
    items: [
      {
        slug: "odoo-vs-zoho-vs-quickbooks",
        tone: "blue" as const,
        category: "أنظمة أودو ERP",
        date: "26 سبتمبر 2025",
        readTime: "5 دقائق قراءة",
        title: "مقارنة شاملة: أودو مقابل زوهو مقابل كويك بوكس، أيهم الأنسب لشركتك؟",
        description:
          "مقارنة دقيقة من حيث تدفق العمليات، التكامل والربط، الدعم المحلي في المنطقة وإجمالي تكلفة التملك.",
        image: "/images/odoo/odoo-laptop-dashboard.webp",
      },
      {
        slug: "odoo-implementation-timeline",
        tone: "green" as const,
        category: "الذكاء الاصطناعي والأتمتة",
        date: "22 سبتمبر 2025",
        readTime: "7 دقائق قراءة",
        title: "الجدول الزمني لتطبيق أودو: كم يستغرق المشروع وما هي العوامل المحددة؟",
        description:
          "تعرف على كيفية تأثير نطاق العمل وجاهزية البيانات والتكاملات والمتطلبات المحلية على مدة تطبيق أودو.",
        image: "/images/project-ai.webp",
      },
      {
        slug: "facility-management-software-guide",
        tone: "amber" as const,
        category: "إدارة المرافق",
        date: "18 سبتمبر 2025",
        readTime: "6 دقائق قراءة",
        title: "دليل برمجيات إدارة المرافق الشامل 2026 في مصر والسعودية والإمارات",
        description:
          "مقارنة أنظمة CAFM وCMMS وIWMS وكيف تختار الحل الأنسب لاحتياجات مؤسستك.",
        image:
          "/images/insights/facility-management-software-guide/facility-management-software-guide-2026.webp",
      },
    ],
  },
  ctaSection: {
    badge: "دعنا نبدأ الآن",
    titleText: "جاهز لتحويل وتطوير",
    titleAccent: "أعمالك؟",
    description:
      "احصل على استشارة متخصصة وحلول مصممة لتمكين شركتك من العمل بذكاء والنمو السريع والبقاء في الصدارة.",
    button: "احجز استشارة مجانية",
    href: "/ar/contact-us",
    whatsapp: "تحدث معنا عبر واتساب",
    perks: [
      "استشارة مجانية",
      "مخصصة لقطاعك ونشاطك",
      "بدون أي التزام مسبق",
    ],
  },
};
