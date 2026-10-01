import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { industryHubItems } from "@/data/industries/hub";
import { ContactForm } from "@/components/contact-form";
import { FaqAccordion } from "@/components/faq-accordion";
import { portfolioItems } from "@/data/portfolio";
import { ChartOfAccountsTool } from "@/components/tools/ChartOfAccountsTool";
import { company } from "@/lib/company";
import { arIndustryNames, arOdooContent, arPortfolioProjects, arRouteContent } from "@/i18n/ar-routes";
import { pageMetadata } from "@/lib/seo";
import styles from "./localized-page.module.css";

const odooLinks = [
  ["implementation", "/odoo/implementation"],
  ["accounting", "/odoo/accounting"],
  ["hr-payroll", "/odoo/hr-payroll"],
  ["itsm-helpdesk", "/odoo/itsm-helpdesk"],
  ["dashboard-insights", "/odoo/dashboard-insights"],
] as const;

const industrySummaries: Record<string, string> = {
  construction: "اربط ميزانيات المشروعات وطلبات المواقع والمشتريات وأعمال المقاولين والفوترة ضمن سجل تشغيلي مشترك.",
  "real-estate": "تابع الوحدات والاستفسارات والعقود والدفعات وطلبات الصيانة عبر رحلة مترابطة.",
  "facility-management": "نسّق بلاغات الخدمة والصيانة الوقائية والأصول والفرق الميدانية ومتابعة التكاليف.",
  restaurants: "اربط الطلبات والمخزون والمشتريات والمدفوعات والتسوية اليومية بين الفروع.",
  education: "نظّم استفسارات القبول وسجلات المتعلمين والرسوم والمستندات والتواصل.",
  retail: "نسّق المبيعات والمخزون والمشتريات والأسعار ونشاط العملاء عبر المواقع والقنوات.",
  healthcare: "ادعم العمليات الإدارية والمخزون والمشتريات والمالية مع إبقاء الأنظمة السريرية المتخصصة في سياقها.",
  logistics: "اربط المستودعات والتسليم والأسطول والطلبات والتكاليف ضمن مسار تشغيلي واضح.",
};
const industryPoints: Record<string, string[]> = {
  construction: ["هيكلة تكلفة المشروع وموازناته", "ضبط طلبات الشراء وحركة المواد", "توثيق التقدم والموافقات والفوترة"],
  "real-estate": ["إدارة العملاء ومسار الوحدات", "العقود والتوقيع وجدولة الدفعات", "طلبات الخدمة المرتبطة بالعقار"],
  "facility-management": ["فرز الطلبات ومتابعة مستويات الخدمة", "الصيانة الوقائية وسجل الأصول", "توزيع الفرق وقطع الغيار وتكلفة العمل"],
  restaurants: ["نقاط البيع وتجهيز الطلبات", "مراقبة المكونات والمخزون والمشتريات", "المدفوعات والتسوية اليومية"],
  education: ["إدارة الاستفسارات وطلبات القبول", "التعلم والمستندات والتوقيعات", "الرسوم وتخطيط الموظفين والتواصل"],
  retail: ["مبيعات ومخزون متعدد المواقع", "إعادة التوريد والشراء والباركود", "العملاء والولاء والتجارة الإلكترونية"],
  healthcare: ["إجراءات إدارية وخدمات العملاء", "مخزون المستلزمات والمشتريات", "ربط المالية والموظفين والمرافق"],
  logistics: ["عمليات المستودعات والباركود", "سياق الأسطول والتسليم", "البيع والشراء والفوترة ومتابعة التكلفة"],
};

export const arFaqs = [
  { question: "ما هو نظام تخطيط موارد المؤسسة ERP؟", answer: "نظام يجمع العمليات الأساسية مثل المحاسبة والمخزون والمبيعات والموارد البشرية في منصة مترابطة." },
  { question: "ما هو نظام أودو ERP؟", answer: "أودو منصة تطبيقات أعمال معيارية تشمل وظائف مثل المحاسبة وإدارة علاقات العملاء والمخزون والتصنيع والموارد البشرية." },
  { question: "ما الفرق بين Community وEnterprise في أودو؟", answer: "Community إصدار مفتوح المصدر، بينما يتضمن Enterprise تطبيقات وميزات وخدمات إضافية. يعتمد الاختيار على الوظائف والاستضافة والدعم المطلوب." },
  { question: "كيف أحدد ما إذا كان عملي جاهزاً لنظام ERP؟", answer: "ابدأ بمراجعة تكرار إدخال البيانات وتأخر التقارير وانفصال الأنظمة وصعوبة تتبع الموافقات. يساعد تحليل الإجراءات على تحديد الحاجة والنطاق المناسبين." },
  { question: "هل يمكن تنفيذ التطبيقات التي تحتاجها الشركة فقط؟", answer: "نعم، يحدد نطاق الاكتشاف التطبيقات التي تدعم الإجراءات المتفق عليها، ويمكن توسيع الاستخدام عند ظهور احتياجات جديدة." },
  { question: "كم يستغرق تنفيذ أودو؟", answer: "تعتمد المدة على التطبيقات وترحيل البيانات والتكاملات وإجراءات العمل. نتفق بعد الاكتشاف على خطة مرحلية تتضمن نقاطاً واضحة للاختبار والتدريب والتشغيل." },
  { question: "هل يمكن نقل بيانات الجداول الحالية إلى نظام ERP؟", answer: "نعم. يبدأ ترحيل البيانات بتنظيفها وتنظيمها وربط حقولها قبل استيرادها، ثم مراجعتها في بيئة اختبار ومقارنتها بالمصدر." },
  { question: "ما المراحل المعتادة لمشروع أودو؟", answer: "يمر المشروع بالاكتشاف وتصميم الحل والإعداد وترحيل البيانات والتكامل والاختبار والتدريب والتشغيل والدعم. يتحدد النطاق والخطة بعد فهم احتياجات العمل." },
  { question: "من يشارك من فريق شركتنا في التنفيذ؟", answer: "يساعد القادة ورؤساء الإدارات في تحديد التوجه خلال الاكتشاف، ويتحقق المستخدمون الرئيسيون من البيانات ويشاركون في اختبار القبول، ثم يدعم المستخدمون الخبراء زملاءهم بعد التشغيل. ويشارك فريقكم في قرارات التصميم والتخصيص." },
  { question: "كيف يتم ترحيل بياناتنا؟", answer: "تُستخرج البيانات من الأنظمة الحالية وتُنظف وتُربط بحقوق أودو المناسبة، ثم تُحمّل في بيئة اختبار وتُراجع مقابل المصدر. يتحقق المستخدمون الرئيسيون منها، ويُحدد توقيت النقل النهائي ضمن خطة الانتقال." },
  { question: "هل يمكن تشغيل النظام على مراحل؟", answer: "يُتفق على أسلوب التشغيل، بما في ذلك تقسيمه إلى مراحل عند الحاجة، خلال الاكتشاف وتحديد النطاق وفق التطبيقات والفرق والمخاطر." },
  { question: "كيف يتم تدريب المستخدمين؟", answer: "يكون التدريب بحسب الأدوار لأن احتياجات فرق المستودعات والمالية والمبيعات تختلف. وتستخدم الجلسات النظام وسير العمل الخاصين بكم، مع توثيق ومستخدمين خبراء لدعم الزملاء." },
  { question: "هل يمكن تخصيص أودو؟", answer: "نعم، عندما لا تغطي الوظائف القياسية أحد المتطلبات. نبدأ بإعداد أودو القياسي، ثم نحدد التطوير المخصص في مرحلة التصميم حتى يبقى التخصيص مقصوداً ومحدداً." },
  { question: "ما العوامل التي تؤثر في مدة التنفيذ؟", answer: "يتأثر الجدول بالنطاق وعدد التطبيقات، وجودة البيانات وحجمها، وعدد التكاملات وتعقيدها، ومتطلبات التوطين والامتثال، ومستوى التخصيص، ومدى تفرغ فريقكم وسرعة اتخاذ القرارات." },
  { question: "ما الذي يحدد تكلفة تنفيذ أودو؟", answer: "تتأثر التكلفة بعدد المستخدمين والتطبيقات ومستوى التخصيص وتعقيد ترحيل البيانات ونطاق عمل شريك التنفيذ. وقد تُسعّر أعمال الترحيل والتخصيص والتدريب والدعم المستمر منفصلة عن ترخيص البرنامج." },
  { question: "هل توجد تكاليف قد تُغفل عند تقدير المشروع؟", answer: "ليست مخفية، لكنها قد لا تُحتسب: فعادةً ما تُسعّر أعمال ترحيل البيانات والتخصيص والتدريب والدعم المستمر منفصلة عن الاشتراك الشهري. ويوضح الشريك الشفاف هذه البنود قبل بدء المشروع." },
  { question: "هل يستمر الدعم بعد تشغيل النظام؟", answer: "يمكن أن يشمل الدعم المستمر الاستشارة والترقيات والتحسينات. ويتفق الفريق مع كل عميل على نطاق الدعم وترتيباته." },
  { question: "كيف أتواصل مع ETripleSoft لطلب الدعم؟", answer: "لطلبات دعم العملاء الحاليين، استخدم صفحة طلب الدعم. وللاستفسارات العامة أو التواصل مع الفريق، استخدم صفحة التواصل. تُحدد ترتيبات الدعم مع كل عميل." },
  { question: "كم مؤشراً ينبغي أن تعرض لوحة المعلومات؟", answer: "لا يوجد عدد واحد مناسب للجميع. ابدأ بالقرارات التي ستدعمها اللوحة، وأظهر المؤشرات التي يحتاج المستخدمون إلى التصرف بناءً عليها، واستبعد ما لا يساعد على اتخاذ تلك القرارات." },
  { question: "هل يناسب نظام ERP الشركات الصغيرة؟", answer: "قد يكون مناسباً للشركات الصغيرة التي تنمو عندما يصبح العمل اليدوي في الجداول مكلفاً من حيث الوقت والجهد. يعتمد القرار على تعقيد الإجراءات والميزانية وقدرة الفريق على تبني النظام." },
  { question: "ما مخاطر تأجيل الانتقال من الجداول لفترة طويلة؟", answer: "قد تتزايد أخطاء البيانات وتأخر التقارير ومشكلات تعدد النسخ مع استمرار الاعتماد على الجداول بعد نمو العمل، كما قد يصبح ترحيل البيانات التاريخية أكثر تعقيداً." },
  { question: "متى قد لا يكون الوقت مناسباً للاستثمار في نظام ERP؟", answer: "قد يكون من الأفضل الانتظار إذا كانت العمليات بسيطة جداً، أو كانت الشركة مقبلة على تغيير كبير، أو لم تتوفر لدى الفريق قدرة داخلية على تعلم النظام وتبنيه بعد." },
  { question: "كيف يُحسب العائد على الاستثمار في ERP؟", answer: "يُحسب العائد بقسمة إجمالي المنافع بعد طرح إجمالي التكلفة على إجمالي التكلفة، ثم الضرب في 100. تشمل التكلفة الترخيص والتنفيذ والتدريب، وتشمل المنافع الوقت الموفر والأخطاء التي تم تجنبها والتحسينات القابلة للقياس." },
  { question: "ما أبرز مصادر العائد على الاستثمار في ERP؟", answer: "تشمل المصادر المعتادة تقليل العمل اليدوي، وخفض الأخطاء المكلفة، وتسريع القرارات وتحسينها بالبيانات الحالية، وتجنب الحاجة إلى زيادة الموظفين لإدارة الإجراءات اليدوية." },
  { question: "هل يختلف عائد ERP بين الشركات الصغيرة والمؤسسات الكبيرة؟", answer: "نعم. قد تحقق الشركات الصغيرة التي تستبدل إجراءات يدوية عائداً نسبياً أسرع عندما يكون الفرق بين الوضع السابق والنظام الجديد كبيراً. أما المؤسسات الكبيرة فقد يكون العائد النسبي أقل لكن قيمته الإجمالية أكبر." },
  { question: "هل أحتاج إلى Power BI إذا كنت أستخدم لوحات أودو؟", answer: "ليس بالضرورة. قد تكفي لوحات أودو لمتابعة العمليات اليومية مثل المبيعات والمخزون والنقد لدى كثير من الشركات الصغيرة والمتوسطة. ويصبح Power BI مفيداً عند الحاجة إلى جمع بيانات وحدات كثيرة في تحليل متقدم أو دراسة اتجاهات لعدة سنوات." },
  { question: "لماذا قد تختلف أرقام لوحة أودو عن المبيعات الفعلية؟", answer: "قد يرجع ذلك إلى البيانات أو عوامل التصفية، مثل فواتير لم تُرحّل، أو حركات مخزون غير مؤكدة، أو اختيار فترة زمنية غير مناسبة." },
  { question: "كم تبلغ تكلفة نظام أودو ERP؟", answer: "يعتمد تسعير أودو ERP على عدد المستخدمين والتطبيقات المختارة ونوع الاستضافة، ولذلك يناسب أحجام الشركات والميزانيات المختلفة." },
  { question: "كم تبلغ تكلفة الانتقال من الجداول إلى نظام ERP؟", answer: "تختلف التكلفة بحسب حجم الشركة وتعقيد العمل. وتشمل عناصر المقارنة الترخيص والتنفيذ وترحيل البيانات؛ اطلب تقديراً لنطاق واضح وقارن البنود على أساس متكافئ." },
  { question: "هل تقدمون الدعم بعد إطلاق التطبيقات؟", answer: "قد يشمل الدعم والصيانة المستمران التحديثات ومتابعة الأداء ومعالجة المشكلات مع نمو التطبيق والعمل. تُحدد الترتيبات وفق نطاق الخدمة المتفق عليه." },
  { question: "ما دور مزود خدمات تقنية المعلومات المُدارة؟", answer: "يتولى المزود مسؤولية مستمرة عن مراقبة البنية التقنية للشركة وصيانتها وتأمينها، بما في ذلك الخوادم والشبكات والأنظمة السحابية والأمن السيبراني، عادةً مقابل رسوم شهرية متوقعة بدلاً من الفوترة فقط عند حدوث عطل." },
  { question: "ما الفرق بين خدمات تقنية المعلومات المُدارة والدعم عند حدوث عطل؟", answer: "الدعم عند حدوث عطل تفاعلي؛ تطلبه عند وقوع المشكلة وقد يصعب توقع تكلفته. أما الخدمات المُدارة فاستباقية، وتشمل المراقبة المستمرة برسوم شهرية ثابتة ومعالجة المشكلات قبل أن تتسبب في توقف العمل." },
  { question: "كيف تؤمّنون Microsoft 365؟", answer: "نراجع الهوية والوصول وحماية البيانات وأمن البريد وإعدادات Teams وSharePoint، ثم نوصي بضوابط مناسبة لبيئتكم." },
  { question: "هل تساعدون في متطلبات الامتثال؟", answer: "نقيّم البيئة وفق المتطلبات ذات الصلة بمؤسستكم، ونحدد الضوابط والأدلة التي يحتاج فريقكم إلى إعدادها." },
  { question: "هل تشمل الخدمات المراقبة المستمرة؟", answer: "يمكن إدراج المتابعة والاستجابة ضمن نطاق دعم متفق عليه، وفق الأنظمة ومتطلبات التشغيل لديكم." },
  { question: "لماذا تستخدم الشركات أتمتة الذكاء الاصطناعي؟", answer: "قد تساعد الأتمتة على زيادة الإنتاجية وتقليل التكاليف التشغيلية وتحسين الدقة وتوسيع نطاق الإجراءات. كما يمكن أن تدعم اتخاذ القرار بتحليل البيانات، بحسب حالة الاستخدام." },
  { question: "كيف يمكن للذكاء الاصطناعي أن يساعد عملي؟", answer: "قد يقلل الذكاء الاصطناعي أعمالاً متكررة مثل معالجة الفواتير وتأهيل العملاء المحتملين وإعداد التقارير. نبدأ بفهم الإجراءات وتحديد فرص عملية وطريقة مناسبة لقياس النتائج." },
  { question: "هل تدمجون الذكاء الاصطناعي مع أودو؟", answer: "يمكن ربط إجراءات ومساعدات الذكاء الاصطناعي بأودو باستخدام التطبيقات والبيانات والصلاحيات ذات الصلة بعملكم." },
  { question: "هل أتمتة الذكاء الاصطناعي آمنة ومتوافقة؟", answer: "نراجع الوصول إلى البيانات ومتطلبات الخصوصية وصلاحيات الأنظمة خلال الاكتشاف. وتُحدد ضوابط الأمن والمراجعة البشرية وفق حالة الاستخدام، وتُراجع متطلبات الامتثال مع فريقكم." },
  { question: "متى تظهر نتائج أتمتة الذكاء الاصطناعي؟", answer: "يعتمد التوقيت على الإجراء وجاهزية البيانات والتكاملات. نتفق على النطاق والمراحل، ثم نقيس نتائج التنفيذ الأولي قبل التوسع." },
  { question: "هل تطورون تطبيقات لنظامي iOS وAndroid؟", answer: "نطور تطبيقات أصلية ومتعددة المنصات لنظامي iOS وAndroid، ونختار النهج وفق المستخدمين والوظائف واحتياجات التسليم." },
  { question: "كم يستغرق تطوير تطبيق؟", answer: "تعتمد المدة على نطاق المنتج والتكاملات ومتطلبات الاختبار. نتفق على المراحل معكم خلال الاكتشاف والتخطيط." },
  { question: "هل يمكن ربط التطبيق بأنظمتنا الحالية مثل أودو؟", answer: "يمكن ربط التطبيق بواجهات برمجية معتمدة وبأودو وأنظمة الأعمال الأخرى، مع تحديد الوصول والتعامل مع البيانات وفق متطلباتكم." },
  { question: "ما التسويق الرقمي؟", answer: "يستخدم التسويق الرقمي قنوات الإنترنت مثل تحسين محركات البحث ووسائل التواصل والإعلانات والمحتوى والبريد الإلكتروني لتنمية العلامة التجارية وجذب العملاء المحتملين ومساعدتهم على التحول إلى عملاء عبر أساليب قابلة للقياس." },
  { question: "ما الفرق بين تحسين محركات البحث والإعلانات المدفوعة؟", answer: "يركز تحسين محركات البحث على بناء ظهور عضوي طويل الأمد، بينما يمكن للإعلانات المدفوعة تحقيق زيارات فورية وتتوقف عند توقف الميزانية. ويعتمد اختيار القنوات على الأهداف والجمهور وخطة القياس." },
  { question: "متى تظهر نتائج التسويق الرقمي؟", answer: "يعتمد التوقيت على الأهداف والقنوات والجمهور ونقطة البداية. نتفق على خطة قياس ونراجع التقدم خلال تشغيل الحملات." },
  { question: "كم تبلغ تكلفة خدمات التسويق الرقمي؟", answer: "يعتمد النطاق والأتعاب على القنوات والمحتوى ودعم التقارير المطلوب. نناقش الأولويات قبل إعداد المقترح." },
  { question: "هل تعملون مع الشركات الصغيرة في التسويق الرقمي؟", answer: "نعم. نضع الخطة وفق الجمهور والقدرة الداخلية وأولويات العمل." },
  { question: "هل تضمنون نتائج تسويقية محددة؟", answer: "تعتمد النتائج على عوامل متعددة، لذلك لا نعد بنتيجة ثابتة. نتفق على مقاييس واضحة ونشارك التقارير ونستخدم ما نتعلمه لتحسين العمل." },
  { question: "ما المقصود بتوطين نظام ERP؟", answer: "يعني تكييف النظام مع المتطلبات المحلية، مثل قواعد الفوترة الإلكترونية ومعالجة الضرائب ودعم العربية واتجاه الكتابة من اليمين إلى اليسار والعمل بعملات متعددة. تختلف المتطلبات بين البلدان وتتغير بمرور الوقت، لذا ينبغي تأكيدها خلال الاكتشاف." },
  { question: "هل يدعم أودو العربية واتجاه الكتابة من اليمين إلى اليسار والعملات المتعددة؟", answer: "يدعم أودو العربية وواجهات من اليمين إلى اليسار، كما يمكنه تنفيذ معاملات بعملات متعددة. تُضبط اللغات والعملات والإعدادات الإقليمية لكل كيان خلال التنفيذ." },
  { question: "ما الفوترة الإلكترونية؟", answer: "هي إصدار الفواتير في مستندات رقمية منظّمة تتحقق منها جهة ضريبية أو تتلقى تقارير عنها إلكترونياً. تختلف القواعد والصيغ والمواعيد بين البلدان وتتغير، لذلك ينبغي تأكيد المتطلبات المنطبقة على نشاطكم مع مستشار الضرائب." },
];

function localPath(path: string) {
  if (/^(https?:|mailto:|tel:)/.test(path) || /\.(pdf|xlsx|csv)(?:$|\?)/i.test(path)) return path;
  return path === "/" ? "/ar" : `/ar${path}`;
}

export function localizedPageMetadata(path: string): Metadata {
  const content = arRouteContent[path] ?? arOdooContent[path.replace("/odoo/", "")];
  const industrySlug = path.startsWith("/industries/") ? path.slice("/industries/".length) : "";
  const portfolioProject = path.startsWith("/portfolio/") ? arPortfolioProjects[path.slice("/portfolio/".length)] : undefined;
  const title = content?.title ?? (industrySlug ? arIndustryNames[industrySlug] : portfolioProject ? portfolioProject.title : path === "/industries" ? "القطاعات التي نخدمها" : "حلول رقمية مترابطة لأعمالك");
  const description = content?.description ?? (industrySlug ? industrySummaries[industrySlug] : portfolioProject ? portfolioProject.description : path === "/industries" ? "حلول أودو تتكيف مع إجراءات العمل في قطاعات متعددة." : "استكشف حلول ETripleSoft وخدماتها باللغة العربية.");
  const metadata = pageMetadata({ title, description, path: localPath(path) });
  return portfolioProject ? { ...metadata, robots: { index: false, follow: true } } : metadata;
}

function LinkCards({ items }: { items: readonly { title: string; text: string; href: string }[] }) {
  return <div className={styles.grid}>{items.map((item) => <Link className={styles.card} href={localPath(item.href)} key={item.href}>
    <span className={styles.cardIcon} aria-hidden="true"><ArrowLeft size={18} /></span>
    <h2>{item.title}</h2><p>{item.text}</p>
    <span className={styles.cardLink}>معرفة المزيد <ArrowLeft size={16} aria-hidden="true" /></span>
  </Link>)}</div>;
}

export default function LocalizedPage({ path }: { path: string }) {
  const content = arRouteContent[path] ?? arOdooContent[path.replace("/odoo/", "")];
  const isIndustryIndex = path === "/industries";
  const industrySlug = path.startsWith("/industries/") ? path.slice("/industries/".length) : "";
  const industryName = industrySlug ? arIndustryNames[industrySlug] : undefined;
  const isOdooIndex = path === "/odoo";
  const portfolioProject = path.startsWith("/portfolio/") ? arPortfolioProjects[path.slice("/portfolio/".length)] : undefined;
  const odooPage = path.startsWith("/odoo/") ? arOdooContent[path.slice("/odoo/".length)] : undefined;
  const fallback = portfolioProject
    ? { eyebrow: `مثال توضيحي · ${portfolioProject.category}`, title: portfolioProject.title, description: portfolioProject.description, points: ["فهم سير العمل والأنظمة القائمة", "تحديد النطاق والمسؤوليات", "تنفيذ الحل والتدريب والدعم"], cta: "ناقش مشروعاً مشابهاً" }
    : null;
  const view = content ?? odooPage ?? fallback ?? (industryName ? {
    eyebrow: "حلول حسب القطاع", title: industryName, description: industrySummaries[industrySlug] ?? "حلول مترابطة تدعم الإجراءات اليومية في هذا القطاع.",
    points: industryPoints[industrySlug] ?? ["ربط السجلات والإجراءات", "تحديد التطبيقات المناسبة بعد فهم الاحتياجات", "تخطيط التكامل والمتابعة"], cta: "ناقش سير العمل",
  } : isIndustryIndex ? {
    eyebrow: "القطاعات", title: "حلول أودو تتبع طريقة عمل قطاعك", description: "نبدأ بفهم نقاط التسليم والقرارات بين الفرق، ثم نحدد التطبيقات التي تدعم سير العمل المتفق عليه.", points: [], cta: "ناقش احتياجات قطاعك",
  } : isOdooIndex ? arRouteContent["/odoo"] : undefined);

  if (!view) return null;
  const cards = isIndustryIndex
    ? industryHubItems.map((item) => ({ title: arIndustryNames[item.id] ?? "قطاع الأعمال", text: industrySummaries[item.id] ?? "حلول رقمية مترابطة تدعم سير العمل.", href: `/industries/${item.id}` }))
    : isOdooIndex
      ? odooLinks.map(([key, href]) => ({ title: arOdooContent[key].title, text: arOdooContent[key].description, href }))
      : path === "/services"
        ? ["/odoo", "/cloud", "/ai", "/web", "/mobile", "/digital-marketing"].map((href) => {
            const item = arRouteContent[href];
            return { title: item.eyebrow, text: item.description, href };
          })
        : [];
  const resourceCards = path === "/resources" ? [
    { title: "المقالات والرؤى", text: "أدلة عملية عن أودو والأنظمة والتحول الرقمي.", href: "/insights" },
    { title: "دليل الحسابات في أودو", text: "مورد لمراجعة بنية الحسابات والتخطيط للتهيئة.", href: "/tools/chart-of-accounts" },
    { title: "حلول أودو", text: "استكشف مجالات التنفيذ والتطبيقات المتاحة.", href: "/odoo" },
    { title: "الملف التعريفي لـ ETripleSoft (بالإنجليزية)", text: "نزّل النسخة الإنجليزية المتاحة حالياً بصيغة PDF.", href: "/company-profile.pdf" },
    { title: "بوابة التدريب", text: "تصفح الدورات المتاحة في بوابة التعلم.", href: "https://learn.etriplesoft.com/" },
  ] : [];

  return <main id="main" className={styles.page} dir="rtl">
    <section className={styles.hero}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>{view.eyebrow}</span>
        <h1>{view.title}</h1>
        <p className={styles.lead}>{view.description}</p>
        {view.points.length > 0 && <ul className={styles.points}>{view.points.map((point) => <li key={point}><Check size={18} aria-hidden="true" />{point}</li>)}</ul>}
        <Link href={path === "/careers" ? `mailto:${company.primaryEmail}?subject=${encodeURIComponent("طلب توظيف")}` : "/ar/contact-us"} className={styles.cta}>{view.cta}<ArrowLeft size={18} aria-hidden="true" /></Link>
      </div>
    </section>
    {(path === "/privacy" || path === "/terms") && <section className={styles.legalNotice} aria-label="النص القانوني الكامل">
      <div className={styles.container}>
        <p>النسخة العربية الحالية ملخص إرشادي وليست ترجمة قانونية كاملة. يُرجى الرجوع إلى النص الإنجليزي الكامل عند الحاجة إلى الشروط المعتمدة.</p>
        <Link href={path}>{path === "/privacy" ? "اقرأ سياسة الخصوصية الكاملة باللغة الإنجليزية" : "اقرأ الشروط والأحكام كاملة باللغة الإنجليزية"}<ArrowLeft size={16} aria-hidden="true" /></Link>
      </div>
    </section>}
    {(cards.length > 0 || industryName || portfolioProject || path === "/request-demo" || path === "/support-ticket" || path === "/book-consultation" || path === "/faqs" || path === "/resources" || path === "/portfolio" || path === "/tools/chart-of-accounts") && <section className={styles.content}>
      <div className={styles.container}>
        {cards.length > 0 && <LinkCards items={cards} />}
        {resourceCards.length > 0 && <LinkCards items={resourceCards} />}
        {path === "/portfolio" && <div className={styles.portfolioGrid}>
          {portfolioItems.filter((item) => item.image && item.source).map((item) => <article className={styles.portfolioCard} key={item.id}>
            {item.image && <Image src={item.image} alt="" width={480} height={480} sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 30vw" />}
            <h2>{item.name}</h2>
          </article>)}
        </div>}
        {portfolioProject && <article className={styles.projectStory}>
          <Image src={`/images/${portfolioProject.image}.webp`} alt="" width={1200} height={675} sizes="(max-width: 900px) 100vw, 900px" />
          <h2>التحدي المعتاد</h2><p>{portfolioProject.challenge}</p>
          <h2>النطاق المحتمل</h2><p>{portfolioProject.scope}</p>
          <h2>حل مبني حول العمل</h2><p>{portfolioProject.approach}</p>
          <Link href="/ar/contact-us" className={styles.cardLink}>ناقش مشروعاً مشابهاً <ArrowLeft size={16} aria-hidden="true" /></Link>
        </article>}
        {path === "/faqs" && <div className={styles.faqs}><h2>إجابات عن الأسئلة الشائعة</h2><FaqAccordion items={arFaqs} idPrefix="ar-faq" /></div>}
        {path === "/tools/chart-of-accounts" && <ChartOfAccountsTool defaultLanguage="ar" />}
        {(path === "/request-demo" || path === "/support-ticket") && <div className={styles.formWrap}><ContactForm locale="ar" demo={path === "/request-demo"} support={path === "/support-ticket"} /></div>}
        {path === "/book-consultation" && <>
          <div className={styles.booking}>
            <h2>اختيار موعد الاستشارة</h2>
            <p>تستخدم صفحة الحجز الخارجية واجهة باللغة الإنجليزية حالياً. إذا كنت تفضل المتابعة بالعربية، أرسل بياناتك عبر النموذج وسنتواصل معك لتنسيق الموعد.</p>
            <a className="button secondary" href={company.appointmentUrl} target="_blank" rel="noopener noreferrer">
              افتح بوابة الحجز بالإنجليزية <ArrowLeft size={16} aria-hidden="true" />
            </a>
          </div>
          <div className={styles.formWrap}>
            <ContactForm locale="ar" />
          </div>
        </>}
        {industryName && <div className={styles.nextStep}>
          <h2>من الإجراءات الحالية إلى مسار مترابط</h2>
          <p>نراجع السجلات والموافقات والاستثناءات مع فريقك، ثم نحدد ما يناسبه من تطبيقات أودو والتكاملات المطلوبة.</p>
          <Link href="/ar/odoo/implementation">تعرّف على منهجية التنفيذ <ArrowLeft size={16} aria-hidden="true" /></Link>
        </div>}
      </div>
    </section>}
  </main>;
}
