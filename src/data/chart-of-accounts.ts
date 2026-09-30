// Chart-of-accounts data for /tools/chart-of-accounts, moved unchanged from the
// legacy standalone generator (Etriplesoft_COA-generator.html). Account codes,
// names, types and notes are the tool's own reference data for Odoo 18.

export type Account = {
  code: string;
  name: string;
  type: string;
  notes: string;
  name_ar?: string;
};

export type Industry = {
  name: string;
  icon: string;
  description: string;
  extraAccounts: Account[];
};

export const genericAccounts: Account[] = [
  {
    "code": "101000",
    "name": "Current Assets",
    "type": "Current Assets",
    "notes": "Parent summary account for short-term assets.",
    "name_ar": "الأصول المتداولة"
  },
  {
    "code": "101300",
    "name": "Account Receivable (PoS)",
    "type": "Receivable",
    "notes": "Receivables generated from Point of Sale.",
    "name_ar": "ذمم مدينة (نقاط البيع)"
  },
  {
    "code": "101401",
    "name": "Bank",
    "type": "Bank and Cash",
    "notes": "Main operating bank account; reconcilable.",
    "name_ar": "البنك"
  },
  {
    "code": "101402",
    "name": "Bank Suspense Account",
    "type": "Current Assets",
    "notes": "Holds unmatched imported bank statement lines.",
    "name_ar": "حساب البنك المعلق"
  },
  {
    "code": "101403",
    "name": "Outstanding Receipts",
    "type": "Current Assets",
    "notes": "Customer payments pending bank confirmation.",
    "name_ar": "إيصالات معلقة"
  },
  {
    "code": "101404",
    "name": "Outstanding Payments",
    "type": "Current Assets",
    "notes": "Vendor payments issued but not yet cleared.",
    "name_ar": "مدفوعات معلقة"
  },
  {
    "code": "101501",
    "name": "Cash",
    "type": "Bank and Cash",
    "notes": "Petty cash & cash-on-hand.",
    "name_ar": "النقدية"
  },
  {
    "code": "101701",
    "name": "Liquidity Transfer",
    "type": "Current Assets",
    "notes": "Used for internal transfers between banks.",
    "name_ar": "تحويل السيولة"
  },
  {
    "code": "110100",
    "name": "Stock Valuation",
    "type": "Current Assets",
    "notes": "Continental-style inventory valuation account.",
    "name_ar": "تقييم المخزون"
  },
  {
    "code": "110200",
    "name": "Stock Interim (Received)",
    "type": "Current Assets",
    "notes": "Anglo-Saxon GR/IR — goods received, not invoiced.",
    "name_ar": "مخزون مرحلي (مستلم)"
  },
  {
    "code": "110300",
    "name": "Stock Interim (Delivered)",
    "type": "Current Assets",
    "notes": "Anglo-Saxon — goods delivered, not invoiced.",
    "name_ar": "مخزون مرحلي (مسلم)"
  },
  {
    "code": "110400",
    "name": "Cost of Production",
    "type": "Current Assets",
    "notes": "Manufacturing work-in-progress aggregation.",
    "name_ar": "تكلفة الإنتاج"
  },
  {
    "code": "110500",
    "name": "Work in Progress",
    "type": "Current Assets",
    "notes": "Unfinished production at period close.",
    "name_ar": "أعمال تحت التنفيذ"
  },
  {
    "code": "121000",
    "name": "Account Receivable",
    "type": "Receivable",
    "notes": "Default customer receivables ledger.",
    "name_ar": "ذمم مدينة"
  },
  {
    "code": "121100",
    "name": "Products to receive",
    "type": "Current Assets",
    "notes": "PO accrual — goods in transit.",
    "name_ar": "بضائع قيد الاستلام"
  },
  {
    "code": "128000",
    "name": "Prepaid Expenses",
    "type": "Current Assets",
    "notes": "Short-term prepayments to be amortised.",
    "name_ar": "مصاريف مدفوعة مقدماً"
  },
  {
    "code": "131000",
    "name": "Tax Paid",
    "type": "Current Assets",
    "notes": "Input VAT / recoverable tax paid to vendors.",
    "name_ar": "ضريبة مدفوعة"
  },
  {
    "code": "132000",
    "name": "Tax Receivable",
    "type": "Receivable",
    "notes": "Refundable tax from authority.",
    "name_ar": "ضريبة مستحقة القبض"
  },
  {
    "code": "141000",
    "name": "Prepayments",
    "type": "Prepayments",
    "notes": "Down-payments received from customers.",
    "name_ar": "دفعات مقدمة"
  },
  {
    "code": "151000",
    "name": "Fixed Asset",
    "type": "Fixed Assets",
    "notes": "Tangible long-term assets.",
    "name_ar": "أصول ثابتة"
  },
  {
    "code": "191000",
    "name": "Non-current assets",
    "type": "Non-current Assets",
    "notes": "Intangibles and long-term investments.",
    "name_ar": "أصول غير متداولة"
  },
  {
    "code": "201000",
    "name": "Current Liabilities",
    "type": "Current Liabilities",
    "notes": "Parent summary for short-term liabilities.",
    "name_ar": "خصوم متداولة"
  },
  {
    "code": "201100",
    "name": "Credit Card",
    "type": "Credit Card",
    "notes": "Company credit card liability.",
    "name_ar": "بطاقة ائتمان"
  },
  {
    "code": "211000",
    "name": "Account Payable",
    "type": "Payable",
    "notes": "Default vendor payables ledger.",
    "name_ar": "ذمم دائنة"
  },
  {
    "code": "211100",
    "name": "Bills to receive",
    "type": "Current Liabilities",
    "notes": "Vendor invoice accrual.",
    "name_ar": "فواتير قيد الاستلام"
  },
  {
    "code": "212000",
    "name": "Deferred Revenue",
    "type": "Current Liabilities",
    "notes": "Unearned income held as liability.",
    "name_ar": "إيرادات مؤجلة"
  },
  {
    "code": "220000",
    "name": "Salaries & Wages Payable",
    "type": "Current Liabilities",
    "notes": "Net salaries owed to employees (Egypt/UAE/KSA)",
    "name_ar": "رواتب وأجور مستحقة الدفع"
  },
  {
    "code": "220100",
    "name": "End-of-Service Benefits (EOSB) Payable",
    "type": "Current Liabilities",
    "notes": "Provision for gratuity as per UAE/KSA labor law.",
    "name_ar": "مكافأة نهاية الخدمة مستحقة"
  },
  {
    "code": "220200",
    "name": "Social Insurance Payable (Egypt)",
    "type": "Current Liabilities",
    "notes": "Employee & employer contributions to social insurance (Egypt).",
    "name_ar": "التأمينات الاجتماعية مستحقة الدفع"
  },
  {
    "code": "220300",
    "name": "GOSI Payable (KSA)",
    "type": "Current Liabilities",
    "notes": "General Organization for Social Insurance contributions (KSA).",
    "name_ar": "مستحقات المؤسسة العامة للتأمينات الاجتماعية"
  },
  {
    "code": "220400",
    "name": "Medical Insurance Payable",
    "type": "Current Liabilities",
    "notes": "Group health insurance premiums payable (UAE/KSA mandatory).",
    "name_ar": "تأمين طبي مستحق الدفع"
  },
  {
    "code": "220500",
    "name": "Employee Accruals (Vacation / Ticket)",
    "type": "Current Liabilities",
    "notes": "Provision for annual leave, repatriation tickets.",
    "name_ar": "مستحقات موظفين (إجازات/تذاكر)"
  },
  {
    "code": "220600",
    "name": "Payroll Tax Payable",
    "type": "Current Liabilities",
    "notes": "Employer payroll taxes / labor levies.",
    "name_ar": "ضرائب رواتب مستحقة"
  },
  {
    "code": "230000",
    "name": "Salary Payable",
    "type": "Current Liabilities",
    "notes": "Net wages owed to employees (generic).",
    "name_ar": "رواتب مستحقة"
  },
  {
    "code": "230100",
    "name": "Employee Payroll Taxes",
    "type": "Current Liabilities",
    "notes": "Taxes withheld on employee side.",
    "name_ar": "ضرائب رواتب الموظفين"
  },
  {
    "code": "230200",
    "name": "Employer Payroll Taxes",
    "type": "Current Liabilities",
    "notes": "Employer-side statutory contributions.",
    "name_ar": "ضرائب رواتب رب العمل"
  },
  {
    "code": "251000",
    "name": "Tax Received",
    "type": "Current Liabilities",
    "notes": "Output VAT collected from customers.",
    "name_ar": "ضريبة محصلة"
  },
  {
    "code": "252000",
    "name": "Tax Payable",
    "type": "Payable",
    "notes": "Net tax due to authority.",
    "name_ar": "ضريبة مستحقة الدفع"
  },
  {
    "code": "291000",
    "name": "Non-current Liabilities",
    "type": "Non-current Liabilities",
    "notes": "Long-term loans and bonds.",
    "name_ar": "خصوم غير متداولة"
  },
  {
    "code": "301000",
    "name": "Capital",
    "type": "Equity",
    "notes": "Owner / shareholder contributed capital.",
    "name_ar": "رأس المال"
  },
  {
    "code": "302000",
    "name": "Dividends",
    "type": "Equity",
    "notes": "Dividend distributions.",
    "name_ar": "توزيعات أرباح"
  },
  {
    "code": "400000",
    "name": "Product Sales",
    "type": "Income",
    "notes": "Revenue from sale of goods / services.",
    "name_ar": "مبيعات المنتجات"
  },
  {
    "code": "441000",
    "name": "Foreign Exchange Gain",
    "type": "Income",
    "notes": "FX revaluation gains.",
    "name_ar": "أرباح فروق العملة"
  },
  {
    "code": "442000",
    "name": "Cash Difference Gain",
    "type": "Income",
    "notes": "Positive till discrepancies.",
    "name_ar": "أرباح فروق النقدية"
  },
  {
    "code": "443000",
    "name": "Cash Discount Loss",
    "type": "Expense",
    "notes": "Early-payment discount expense.",
    "name_ar": "خسائر خصم نقدي"
  },
  {
    "code": "450000",
    "name": "Other Income",
    "type": "Other Income",
    "notes": "Non-operating revenue.",
    "name_ar": "إيرادات أخرى"
  },
  {
    "code": "500000",
    "name": "Cost of Goods Sold",
    "type": "Cost of Revenue",
    "notes": "Direct cost of products sold.",
    "name_ar": "تكلفة البضاعة المباعة"
  },
  {
    "code": "610000",
    "name": "Salaries & Wages",
    "type": "Expense",
    "notes": "Gross payroll expense (basic + allowances).",
    "name_ar": "رواتب وأجور"
  },
  {
    "code": "610100",
    "name": "End-of-Service Benefits Expense",
    "type": "Expense",
    "notes": "Accrual for EOSB (UAE/KSA).",
    "name_ar": "مصاريف مكافأة نهاية الخدمة"
  },
  {
    "code": "610200",
    "name": "Social Insurance Expense – Employer",
    "type": "Expense",
    "notes": "Employer contribution to Egyptian social insurance.",
    "name_ar": "مصاريف التأمينات الاجتماعية – حصة صاحب العمل"
  },
  {
    "code": "610300",
    "name": "GOSI Expense – Employer (KSA)",
    "type": "Expense",
    "notes": "Employer GOSI contributions.",
    "name_ar": "مصاريف التأمينات الاجتماعية (GOSI) – حصة صاحب العمل"
  },
  {
    "code": "610400",
    "name": "Medical Insurance Expense",
    "type": "Expense",
    "notes": "Company-paid health insurance.",
    "name_ar": "مصاريف التأمين الطبي"
  },
  {
    "code": "610500",
    "name": "Staff Accommodation Expense",
    "type": "Expense",
    "notes": "Housing provided to staff (UAE/KSA).",
    "name_ar": "مصاريف سكن الموظفين"
  },
  {
    "code": "610600",
    "name": "Transportation Allowance Expense",
    "type": "Expense",
    "notes": "Transportation provided/allowance.",
    "name_ar": "مصاريف بدل نقل"
  },
  {
    "code": "610700",
    "name": "Recruitment & Visa Expense",
    "type": "Expense",
    "notes": "Cost of hiring, visas, work permits.",
    "name_ar": "مصاريف توظيف وتأشيرات"
  },
  {
    "code": "610800",
    "name": "Employee Loans & Advances",
    "type": "Current Assets",
    "notes": "Loans granted to employees.",
    "name_ar": "سلف وقروض الموظفين"
  },
  {
    "code": "600000",
    "name": "Expenses",
    "type": "Expense",
    "notes": "General operating expenses parent.",
    "name_ar": "مصاريف"
  },
  {
    "code": "611000",
    "name": "Purchase of Equipments",
    "type": "Expense",
    "notes": "Small tools & equipment expensed.",
    "name_ar": "شراء معدات"
  },
  {
    "code": "612000",
    "name": "Rent",
    "type": "Expense",
    "notes": "Operating lease / rent paid.",
    "name_ar": "إيجار"
  },
  {
    "code": "620000",
    "name": "Bank Fees",
    "type": "Expense",
    "notes": "Bank charges and wire fees.",
    "name_ar": "رسوم بنكية"
  },
  {
    "code": "630000",
    "name": "Salary Expenses",
    "type": "Expense",
    "notes": "Gross payroll expense (legacy).",
    "name_ar": "مصاريف رواتب"
  },
  {
    "code": "641000",
    "name": "Foreign Exchange Loss",
    "type": "Expense",
    "notes": "FX revaluation losses.",
    "name_ar": "خسائر فروق العملة"
  },
  {
    "code": "642000",
    "name": "Cash Difference Loss",
    "type": "Expense",
    "notes": "Negative till discrepancies.",
    "name_ar": "خسائر فروق النقدية"
  },
  {
    "code": "643000",
    "name": "Cash Discount Gain",
    "type": "Income",
    "notes": "Early-payment discount earned.",
    "name_ar": "أرباح خصم نقدي"
  },
  {
    "code": "961000",
    "name": "RD Expenses",
    "type": "Expense",
    "notes": "Research & development costs.",
    "name_ar": "مصاريف بحث وتطوير"
  },
  {
    "code": "962000",
    "name": "Sales Expenses",
    "type": "Expense",
    "notes": "Sales-team OpEx.",
    "name_ar": "مصاريف مبيعات"
  },
  {
    "code": "999999",
    "name": "Undistributed Profits/Losses",
    "type": "Current Year Earnings",
    "notes": "Automated current-year P&L account.",
    "name_ar": "أرباح/خسائر غير موزعة"
  }
];

export const industries: Record<string, Industry> = {
  "generic": {
    "name": "Generic / Odoo 18 Default",
    "icon": "📊",
    "description": "Standard Odoo 18 Enterprise default chart with HR accounts for Egypt, UAE, KSA.",
    "extraAccounts": []
  },
  "manufacturing": {
    "name": "Manufacturing",
    "icon": "🏭",
    "description": "Discrete / process manufacturers.",
    "extraAccounts": [
      {
        "code": "110600",
        "name": "MRO Supplies & Consumables",
        "type": "Current Assets",
        "notes": "Maintenance, repair & operations inventory.",
        "name_ar": "مستلزمات صيانة وتشغيل"
      },
      {
        "code": "110700",
        "name": "Scrap & By-Products",
        "type": "Current Assets",
        "notes": "Recoverable scrap and co-products.",
        "name_ar": "خردة ومنتجات ثانوية"
      },
      {
        "code": "151100",
        "name": "Factory Buildings",
        "type": "Fixed Assets",
        "notes": "Production plant and buildings.",
        "name_ar": "مباني المصنع"
      },
      {
        "code": "151200",
        "name": "Vehicles",
        "type": "Fixed Assets",
        "notes": "Forklifts and plant vehicles.",
        "name_ar": "مركبات"
      },
      {
        "code": "215000",
        "name": "Warranty Provision",
        "type": "Current Liabilities",
        "notes": "Estimated warranty obligations.",
        "name_ar": "مخصص ضمان"
      },
      {
        "code": "400100",
        "name": "Sub-contracting Revenue",
        "type": "Income",
        "notes": "Revenue from toll / contract manufacturing.",
        "name_ar": "إيرادات مقاولة باطن"
      },
      {
        "code": "500100",
        "name": "Direct Materials",
        "type": "Cost of Revenue",
        "notes": "Raw materials consumed in production.",
        "name_ar": "مواد مباشرة"
      },
      {
        "code": "500200",
        "name": "Direct Labor",
        "type": "Cost of Revenue",
        "notes": "Production wages & direct labor cost.",
        "name_ar": "عمالة مباشرة"
      },
      {
        "code": "613000",
        "name": "Utilities — Plant",
        "type": "Expense",
        "notes": "Electricity, water, gas for factory.",
        "name_ar": "مرافق المصنع"
      },
      {
        "code": "650000",
        "name": "Depreciation — Machinery",
        "type": "Depreciation",
        "notes": "Depreciation of production machinery.",
        "name_ar": "إهلاك الآلات"
      }
    ]
  },
  "retail": {
    "name": "Retail / Wholesale",
    "icon": "🛍️",
    "description": "Multi-channel retailers.",
    "extraAccounts": [
      {
        "code": "110200",
        "name": "Inventory — Online",
        "type": "Current Assets",
        "notes": "Stock held for online sales channels.",
        "name_ar": "مخزون متجر إلكتروني"
      },
      {
        "code": "110300",
        "name": "Inventory — In Transit",
        "type": "Current Assets",
        "notes": "Goods being shipped between locations.",
        "name_ar": "مخزون قيد النقل"
      },
      {
        "code": "151000",
        "name": "Store Fixtures",
        "type": "Fixed Assets",
        "notes": "Shelving, displays, and store fittings.",
        "name_ar": "تجهيزات المتجر"
      },
      {
        "code": "212100",
        "name": "Customer Deposits",
        "type": "Current Liabilities",
        "notes": "Deposits received for orders not yet fulfilled.",
        "name_ar": "ودائع العملاء"
      },
      {
        "code": "400100",
        "name": "Online Sales",
        "type": "Income",
        "notes": "Revenue from e‑commerce channels.",
        "name_ar": "مبيعات إلكترونية"
      },
      {
        "code": "400200",
        "name": "Wholesale Sales",
        "type": "Income",
        "notes": "Bulk sales to other businesses.",
        "name_ar": "مبيعات الجملة"
      },
      {
        "code": "400300",
        "name": "Sales Returns",
        "type": "Income",
        "notes": "Contra‑revenue for returned goods.",
        "name_ar": "مردودات مبيعات"
      },
      {
        "code": "500100",
        "name": "COGS — Online",
        "type": "Cost of Revenue",
        "notes": "Direct cost of goods sold via online channels.",
        "name_ar": "تكلفة مبيعات إلكترونية"
      },
      {
        "code": "500500",
        "name": "Payment Processing Fees",
        "type": "Cost of Revenue",
        "notes": "Fees paid to payment gateways.",
        "name_ar": "رسوم معالجة المدفوعات"
      },
      {
        "code": "615000",
        "name": "Marketing",
        "type": "Expense",
        "notes": "Advertising and promotional expenses.",
        "name_ar": "تسويق"
      }
    ]
  },
  "construction": {
    "name": "Construction",
    "icon": "🏗️",
    "description": "Job-cost driven.",
    "extraAccounts": [
      {
        "code": "121100",
        "name": "Retainage Receivable",
        "type": "Receivable",
        "notes": "Amounts withheld by customers until project completion.",
        "name_ar": "محجوزات مدينة"
      },
      {
        "code": "121200",
        "name": "Costs in Excess of Billings",
        "type": "Current Assets",
        "notes": "Unbilled work in progress (asset).",
        "name_ar": "تكاليف زائدة عن الفواتير"
      },
      {
        "code": "151000",
        "name": "Heavy Equipment",
        "type": "Fixed Assets",
        "notes": "Construction machinery and vehicles.",
        "name_ar": "معدات ثقيلة"
      },
      {
        "code": "211100",
        "name": "Subcontractor Payable",
        "type": "Payable",
        "notes": "Amounts owed to subcontractors.",
        "name_ar": "ذمم دائنة مقاولي باطن"
      },
      {
        "code": "212000",
        "name": "Billings in Excess of Costs",
        "type": "Current Liabilities",
        "notes": "Over‑billings on uncompleted work.",
        "name_ar": "فواتير زائدة عن التكاليف"
      },
      {
        "code": "400100",
        "name": "Change Order Revenue",
        "type": "Income",
        "notes": "Revenue from approved project changes.",
        "name_ar": "إيرادات أوامر تغيير"
      },
      {
        "code": "500100",
        "name": "Direct Job Labor",
        "type": "Cost of Revenue",
        "notes": "Labor directly tied to construction projects.",
        "name_ar": "تكاليف عمالة مباشرة"
      },
      {
        "code": "500200",
        "name": "Direct Subcontract",
        "type": "Cost of Revenue",
        "notes": "Subcontractor costs charged to jobs.",
        "name_ar": "مقاولي باطن مباشر"
      },
      {
        "code": "600000",
        "name": "Indirect Overhead",
        "type": "Expense",
        "notes": "Indirect project and office overhead.",
        "name_ar": "تكاليف غير مباشرة"
      }
    ]
  },
  "healthcare": {
    "name": "Healthcare",
    "icon": "🏥",
    "description": "Clinics & practices.",
    "extraAccounts": [
      {
        "code": "121100",
        "name": "Insurance Receivable",
        "type": "Receivable",
        "notes": "Amounts due from insurance companies.",
        "name_ar": "ذمم تأمين"
      },
      {
        "code": "110200",
        "name": "Pharmaceutical Inventory",
        "type": "Current Assets",
        "notes": "Drugs and medical supplies on hand.",
        "name_ar": "مخزون أدوية"
      },
      {
        "code": "151000",
        "name": "Medical Equipment",
        "type": "Fixed Assets",
        "notes": "Examination and diagnostic equipment.",
        "name_ar": "معدات طبية"
      },
      {
        "code": "213000",
        "name": "Refunds Due",
        "type": "Current Liabilities",
        "notes": "Patient overpayments awaiting refund.",
        "name_ar": "مستحقات رد"
      },
      {
        "code": "400100",
        "name": "Insurance Reimbursement",
        "type": "Income",
        "notes": "Revenue from insurance claims paid.",
        "name_ar": "تسديدات تأمين"
      },
      {
        "code": "400200",
        "name": "Lab Fees",
        "type": "Income",
        "notes": "Income from laboratory services.",
        "name_ar": "رسوم مختبر"
      },
      {
        "code": "500100",
        "name": "Cost of Drugs",
        "type": "Cost of Revenue",
        "notes": "Direct cost of pharmaceuticals dispensed.",
        "name_ar": "تكلفة الأدوية"
      },
      {
        "code": "617000",
        "name": "Malpractice Insurance",
        "type": "Expense",
        "notes": "Professional liability insurance premiums.",
        "name_ar": "تأمين مسؤولية مهنية"
      }
    ]
  },
  "restaurant": {
    "name": "Restaurant",
    "icon": "🍽️",
    "description": "Food service USAR.",
    "extraAccounts": [
      {
        "code": "101550",
        "name": "Credit Card Receivable",
        "type": "Current Assets",
        "notes": "Unsettled credit card tips & charges.",
        "name_ar": "ذمم بطاقات ائتمان"
      },
      {
        "code": "110200",
        "name": "Beverage Inventory (Non-alc)",
        "type": "Current Assets",
        "notes": "Stock of non‑alcoholic drinks.",
        "name_ar": "مخزون مشروبات غير كحولية"
      },
      {
        "code": "110300",
        "name": "Beverage Inventory (Alc)",
        "type": "Current Assets",
        "notes": "Stock of alcoholic beverages.",
        "name_ar": "مخزون مشروبات كحولية"
      },
      {
        "code": "151000",
        "name": "Kitchen Equipment",
        "type": "Fixed Assets",
        "notes": "Ovens, fridges, and kitchen machinery.",
        "name_ar": "معدات مطبخ"
      },
      {
        "code": "212000",
        "name": "Gift Cards Outstanding",
        "type": "Current Liabilities",
        "notes": "Unredeemed gift card liability.",
        "name_ar": "بطاقات هدايا غير مستردة"
      },
      {
        "code": "400100",
        "name": "Beverage Sales (Non-alc)",
        "type": "Income",
        "notes": "Revenue from soft drinks & juices.",
        "name_ar": "مبيعات مشروبات غير كحولية"
      },
      {
        "code": "400200",
        "name": "Beverage Sales (Alc)",
        "type": "Income",
        "notes": "Revenue from alcoholic beverages.",
        "name_ar": "مبيعات مشروبات كحولية"
      },
      {
        "code": "500100",
        "name": "COS Beverage (N/A)",
        "type": "Cost of Revenue",
        "notes": "Cost of non‑alcoholic beverages sold.",
        "name_ar": "تكلفة مبيعات مشروبات غير كحولية"
      },
      {
        "code": "500200",
        "name": "COS Beverage (Alc)",
        "type": "Cost of Revenue",
        "notes": "Cost of alcoholic beverages sold.",
        "name_ar": "تكلفة مبيعات مشروبات كحولية"
      },
      {
        "code": "600100",
        "name": "China & Glassware",
        "type": "Expense",
        "notes": "Breakage and replacement of tableware.",
        "name_ar": "أواني وأدوات مائدة"
      }
    ]
  },
  "realestate": {
    "name": "Real Estate",
    "icon": "🏢",
    "description": "Property management.",
    "extraAccounts": [
      {
        "code": "101402",
        "name": "Trust / Escrow Account",
        "type": "Bank and Cash",
        "notes": "Client funds held in trust (escrow).",
        "name_ar": "حساب أمانة"
      },
      {
        "code": "121000",
        "name": "Rent Receivable",
        "type": "Receivable",
        "notes": "Outstanding rent from tenants.",
        "name_ar": "إيجار مستحق"
      },
      {
        "code": "150000",
        "name": "Land",
        "type": "Fixed Assets",
        "notes": "Undeveloped land holdings.",
        "name_ar": "أراضي"
      },
      {
        "code": "151100",
        "name": "Building Improvements",
        "type": "Fixed Assets",
        "notes": "Capital improvements to structures.",
        "name_ar": "تحسينات مباني"
      },
      {
        "code": "212000",
        "name": "Tenant Security Deposits",
        "type": "Current Liabilities",
        "notes": "Refundable deposits held from tenants.",
        "name_ar": "تأمينات مستأجرين"
      },
      {
        "code": "212100",
        "name": "Prepaid Rent",
        "type": "Current Liabilities",
        "notes": "Rent received before the period it relates to.",
        "name_ar": "إيجار مدفوع مقدماً"
      },
      {
        "code": "400100",
        "name": "Late Fees",
        "type": "Income",
        "notes": "Penalty income from late rent payments.",
        "name_ar": "غرامات تأخير"
      },
      {
        "code": "600800",
        "name": "Mortgage Interest",
        "type": "Expense",
        "notes": "Interest expense on property mortgages.",
        "name_ar": "فوائد رهن عقاري"
      },
      {
        "code": "601200",
        "name": "Property Taxes",
        "type": "Expense",
        "notes": "Real estate taxes and assessments.",
        "name_ar": "ضرائب عقارية"
      }
    ]
  },
  "services": {
    "name": "Professional Services",
    "icon": "💼",
    "description": "Consulting, law firms.",
    "extraAccounts": [
      {
        "code": "121100",
        "name": "Unbilled WIP",
        "type": "Current Assets",
        "notes": "Work performed but not yet invoiced.",
        "name_ar": "أعمال غير مفوترة"
      },
      {
        "code": "212100",
        "name": "Client Trust Liability",
        "type": "Current Liabilities",
        "notes": "Funds held on behalf of clients.",
        "name_ar": "التزام أمانة عملاء"
      },
      {
        "code": "400100",
        "name": "Retainer Revenue",
        "type": "Income",
        "notes": "Income recognized from retainer agreements.",
        "name_ar": "إيرادات أتعاب مقدمة"
      },
      {
        "code": "500100",
        "name": "Subcontractor Costs",
        "type": "Cost of Revenue",
        "notes": "External professional fees passed through.",
        "name_ar": "تكاليف مقاولي باطن"
      },
      {
        "code": "618000",
        "name": "Professional Liability Ins.",
        "type": "Expense",
        "notes": "Errors & omissions insurance.",
        "name_ar": "تأمين مسؤولية مهنية"
      }
    ]
  },
  "ecommerce": {
    "name": "E-commerce",
    "icon": "🛒",
    "description": "Online sellers.",
    "extraAccounts": [
      {
        "code": "101403",
        "name": "Stripe Clearing",
        "type": "Current Assets",
        "notes": "Funds in transit from Stripe.",
        "name_ar": "مقاصة سترايب"
      },
      {
        "code": "101406",
        "name": "Amazon Seller Clearing",
        "type": "Current Assets",
        "notes": "Amazon settlement balance awaiting transfer.",
        "name_ar": "مقاصة أمازون"
      },
      {
        "code": "110200",
        "name": "FBA Inventory",
        "type": "Current Assets",
        "notes": "Inventory stored in Amazon fulfillment centers.",
        "name_ar": "مخزون FBA"
      },
      {
        "code": "213100",
        "name": "Chargebacks Reserve",
        "type": "Current Liabilities",
        "notes": "Estimated liability for customer chargebacks.",
        "name_ar": "مخصص رد مدفوعات"
      },
      {
        "code": "400100",
        "name": "Amazon Sales",
        "type": "Income",
        "notes": "Revenue from Amazon marketplace.",
        "name_ar": "مبيعات أمازون"
      },
      {
        "code": "400200",
        "name": "eBay/Etsy Sales",
        "type": "Income",
        "notes": "Revenue from other online platforms.",
        "name_ar": "مبيعات إي باي"
      },
      {
        "code": "500200",
        "name": "FBA Fees",
        "type": "Cost of Revenue",
        "notes": "Fulfillment by Amazon fees.",
        "name_ar": "رسوم FBA"
      },
      {
        "code": "500400",
        "name": "Marketplace Commissions",
        "type": "Cost of Revenue",
        "notes": "Commissions paid to online marketplaces.",
        "name_ar": "عمولات الأسواق"
      },
      {
        "code": "615000",
        "name": "Digital Advertising",
        "type": "Expense",
        "notes": "PPC and social media ad spend.",
        "name_ar": "إعلانات رقمية"
      }
    ]
  },
  "nonprofit": {
    "name": "Non-profit",
    "icon": "🤝",
    "description": "NGO / fund accounting.",
    "extraAccounts": [
      {
        "code": "101402",
        "name": "Restricted Fund Bank",
        "type": "Bank and Cash",
        "notes": "Bank account holding donor‑restricted cash.",
        "name_ar": "حساب أموال مقيدة"
      },
      {
        "code": "121000",
        "name": "Pledges Receivable",
        "type": "Receivable",
        "notes": "Unconditional promises to give.",
        "name_ar": "تعهدات مستحقة"
      },
      {
        "code": "121100",
        "name": "Grants Receivable",
        "type": "Receivable",
        "notes": "Awarded grants not yet received.",
        "name_ar": "منح مستحقة"
      },
      {
        "code": "191000",
        "name": "Endowment Investments",
        "type": "Non-current Assets",
        "notes": "Long‑term endowment fund investments.",
        "name_ar": "استثمارات الوقف"
      },
      {
        "code": "301000",
        "name": "Net Assets Unrestricted",
        "type": "Equity",
        "notes": "Unrestricted net assets.",
        "name_ar": "صافي أصول غير مقيدة"
      },
      {
        "code": "301100",
        "name": "Net Assets Restricted",
        "type": "Equity",
        "notes": "Donor‑restricted net assets.",
        "name_ar": "صافي أصول مقيدة"
      },
      {
        "code": "400100",
        "name": "Restricted Contributions",
        "type": "Income",
        "notes": "Revenue with donor restrictions.",
        "name_ar": "تبرعات مقيدة"
      },
      {
        "code": "400300",
        "name": "Government Grants",
        "type": "Income",
        "notes": "Income from government funding.",
        "name_ar": "منح حكومية"
      },
      {
        "code": "601000",
        "name": "Management & General",
        "type": "Expense",
        "notes": "Administrative and overhead expenses.",
        "name_ar": "إدارة وعموميات"
      },
      {
        "code": "602000",
        "name": "Fundraising",
        "type": "Expense",
        "notes": "Cost of fundraising campaigns.",
        "name_ar": "جمع تبرعات"
      }
    ]
  },
  "education": {
    "name": "Education",
    "icon": "🎓",
    "description": "Schools & universities.",
    "extraAccounts": [
      {
        "code": "101402",
        "name": "Student Aid Trust",
        "type": "Bank and Cash",
        "notes": "Restricted cash for student financial aid.",
        "name_ar": "صندوق مساعدات طلابية"
      },
      {
        "code": "121000",
        "name": "Student Tuition Receivable",
        "type": "Receivable",
        "notes": "Outstanding tuition fees.",
        "name_ar": "رسوم دراسية مستحقة"
      },
      {
        "code": "110100",
        "name": "Bookstore Inventory",
        "type": "Current Assets",
        "notes": "Textbooks and merchandise for resale.",
        "name_ar": "مخزون كتب"
      },
      {
        "code": "151100",
        "name": "Library Collections",
        "type": "Fixed Assets",
        "notes": "Books, journals, and media holdings.",
        "name_ar": "مقتنيات مكتبة"
      },
      {
        "code": "212000",
        "name": "Unearned Tuition",
        "type": "Current Liabilities",
        "notes": "Tuition received for future terms.",
        "name_ar": "رسوم غير مكتسبة"
      },
      {
        "code": "400100",
        "name": "Scholarships (Contra)",
        "type": "Income",
        "notes": "Contra‑revenue for scholarships awarded.",
        "name_ar": "منح دراسية (مقابل)"
      },
      {
        "code": "400400",
        "name": "Housing Revenue",
        "type": "Income",
        "notes": "Income from student dormitories.",
        "name_ar": "إيرادات سكن"
      },
      {
        "code": "600100",
        "name": "Research Expenses",
        "type": "Expense",
        "notes": "Cost of academic research projects.",
        "name_ar": "مصاريف بحث"
      },
      {
        "code": "600600",
        "name": "Scholarships Expense",
        "type": "Expense",
        "notes": "Scholarship grants to students.",
        "name_ar": "مصاريف منح دراسية"
      }
    ]
  },
  "hotel": {
    "name": "Hotel / Hospitality",
    "icon": "🏨",
    "description": "USALI aligned.",
    "extraAccounts": [
      {
        "code": "101402",
        "name": "FF&E Reserve",
        "type": "Bank and Cash",
        "notes": "Cash set aside for furniture, fixtures & equipment replacement.",
        "name_ar": "احتياطي أثاث وتجهيزات"
      },
      {
        "code": "121000",
        "name": "Guest Ledger",
        "type": "Receivable",
        "notes": "Individual guest accounts receivable.",
        "name_ar": "دفتر نزلاء"
      },
      {
        "code": "121100",
        "name": "City Ledger",
        "type": "Receivable",
        "notes": "Corporate and travel agent accounts.",
        "name_ar": "دفتر مدينة"
      },
      {
        "code": "110300",
        "name": "Operating Supplies",
        "type": "Current Assets",
        "notes": "Linens, amenities, and cleaning supplies.",
        "name_ar": "مستلزمات تشغيل"
      },
      {
        "code": "151100",
        "name": "FF&E",
        "type": "Fixed Assets",
        "notes": "Furniture, fixtures, and equipment.",
        "name_ar": "أثاث وتجهيزات"
      },
      {
        "code": "212000",
        "name": "Advance Deposits",
        "type": "Current Liabilities",
        "notes": "Guest deposits for future stays.",
        "name_ar": "ودائع مقدمة"
      },
      {
        "code": "251000",
        "name": "Occupancy Tax",
        "type": "Current Liabilities",
        "notes": "Local occupancy / tourist tax collected.",
        "name_ar": "ضريبة إشغال"
      },
      {
        "code": "400100",
        "name": "Food Revenue",
        "type": "Income",
        "notes": "Restaurant and room service food sales.",
        "name_ar": "إيرادات أغذية"
      },
      {
        "code": "400200",
        "name": "Beverage Revenue",
        "type": "Income",
        "notes": "Bar and minibar beverage sales.",
        "name_ar": "إيرادات مشروبات"
      },
      {
        "code": "610000",
        "name": "A&G",
        "type": "Expense",
        "notes": "Administrative & general hotel expenses.",
        "name_ar": "إدارة وعموميات"
      }
    ]
  },
  "saas": {
    "name": "IT / SaaS",
    "icon": "💻",
    "description": "Software vendors.",
    "extraAccounts": [
      {
        "code": "121100",
        "name": "Contract Assets",
        "type": "Current Assets",
        "notes": "Unbilled receivables from long‑term contracts.",
        "name_ar": "أصول عقود"
      },
      {
        "code": "128100",
        "name": "Deferred Commissions (Current)",
        "type": "Current Assets",
        "notes": "Current portion of capitalized sales commissions.",
        "name_ar": "عمولات مؤجلة متداولة"
      },
      {
        "code": "151200",
        "name": "Capitalized Software",
        "type": "Fixed Assets",
        "notes": "Internally developed software (intangible).",
        "name_ar": "برمجيات مرسملة"
      },
      {
        "code": "191000",
        "name": "Deferred Commissions (Non-current)",
        "type": "Non-current Assets",
        "notes": "Long‑term portion of deferred commissions.",
        "name_ar": "عمولات مؤجلة غير متداولة"
      },
      {
        "code": "212000",
        "name": "Deferred Revenue (Current)",
        "type": "Current Liabilities",
        "notes": "Short‑term unearned subscription revenue.",
        "name_ar": "إيرادات مؤجلة متداولة"
      },
      {
        "code": "291000",
        "name": "Deferred Revenue (Non-current)",
        "type": "Non-current Liabilities",
        "notes": "Long‑term unearned revenue.",
        "name_ar": "إيرادات مؤجلة غير متداولة"
      },
      {
        "code": "400100",
        "name": "Term License Revenue",
        "type": "Income",
        "notes": "Revenue from perpetual/term software licenses.",
        "name_ar": "إيرادات تراخيص"
      },
      {
        "code": "400200",
        "name": "Professional Services",
        "type": "Income",
        "notes": "Consulting and implementation fees.",
        "name_ar": "خدمات مهنية"
      },
      {
        "code": "500000",
        "name": "Hosting Costs",
        "type": "Cost of Revenue",
        "notes": "Cloud infrastructure and hosting expenses.",
        "name_ar": "تكاليف استضافة"
      },
      {
        "code": "500400",
        "name": "Amortization of Software",
        "type": "Cost of Revenue",
        "notes": "Amortization of capitalized development costs.",
        "name_ar": "إطفاء برمجيات"
      },
      {
        "code": "615200",
        "name": "Amortization of Commissions",
        "type": "Expense",
        "notes": "Periodic expense for deferred commissions.",
        "name_ar": "إطفاء عمولات"
      },
      {
        "code": "962000",
        "name": "Stock-Based Comp",
        "type": "Expense",
        "notes": "Non‑cash stock option expense.",
        "name_ar": "تعويض أسهم"
      }
    ]
  },
  "agriculture": {
    "name": "Agriculture",
    "icon": "🌾",
    "description": "Farming & livestock.",
    "extraAccounts": [
      {
        "code": "110100",
        "name": "Crops Inventory",
        "type": "Current Assets",
        "notes": "Harvested crops held for sale.",
        "name_ar": "مخزون محاصيل"
      },
      {
        "code": "110200",
        "name": "Livestock (Current)",
        "type": "Current Assets",
        "notes": "Animals held for short‑term sale.",
        "name_ar": "مواشي متداولة"
      },
      {
        "code": "151100",
        "name": "Farm Equipment",
        "type": "Fixed Assets",
        "notes": "Tractors, harvesters, and implements.",
        "name_ar": "معدات زراعية"
      },
      {
        "code": "151200",
        "name": "Bearer Plants",
        "type": "Fixed Assets",
        "notes": "Orchards and vineyards (mature).",
        "name_ar": "نباتات مثمرة"
      },
      {
        "code": "400100",
        "name": "Livestock Sales",
        "type": "Income",
        "notes": "Revenue from sale of animals.",
        "name_ar": "مبيعات مواشي"
      },
      {
        "code": "400200",
        "name": "Government Subsidies",
        "type": "Other Income",
        "notes": "Agricultural support payments.",
        "name_ar": "إعانات حكومية"
      },
      {
        "code": "600100",
        "name": "Seeds & Fertilizers",
        "type": "Expense",
        "notes": "Cost of seeds, fertilizer, and crop protection.",
        "name_ar": "بذور وأسمدة"
      },
      {
        "code": "600200",
        "name": "Feed & Veterinary",
        "type": "Expense",
        "notes": "Animal feed and vet services.",
        "name_ar": "أعلاف وطب بيطري"
      }
    ]
  },
  "transportation": {
    "name": "Transportation",
    "icon": "🚚",
    "description": "Logistics & trucking.",
    "extraAccounts": [
      {
        "code": "110100",
        "name": "Fuel Inventory",
        "type": "Current Assets",
        "notes": "On‑site fuel storage for fleet.",
        "name_ar": "مخزون وقود"
      },
      {
        "code": "151000",
        "name": "Trucks & Trailers",
        "type": "Fixed Assets",
        "notes": "Truck tractors and trailer assets.",
        "name_ar": "شاحنات ومقطورات"
      },
      {
        "code": "400100",
        "name": "Logistics Revenue",
        "type": "Income",
        "notes": "Freight and logistics service income.",
        "name_ar": "إيرادات لوجستية"
      },
      {
        "code": "400200",
        "name": "Fuel Surcharge",
        "type": "Income",
        "notes": "Additional fuel surcharge billed to customers.",
        "name_ar": "رسوم وقود"
      },
      {
        "code": "500100",
        "name": "Fuel Expense",
        "type": "Cost of Revenue",
        "notes": "Diesel and gasoline for fleet.",
        "name_ar": "مصاريف وقود"
      },
      {
        "code": "500200",
        "name": "Fleet Maintenance",
        "type": "Cost of Revenue",
        "notes": "Repairs and maintenance of vehicles.",
        "name_ar": "صيانة أسطول"
      },
      {
        "code": "500400",
        "name": "Subcontractor",
        "type": "Cost of Revenue",
        "notes": "Third‑party carrier costs.",
        "name_ar": "مقاولي باطن"
      },
      {
        "code": "600100",
        "name": "Commercial Auto Insurance",
        "type": "Expense",
        "notes": "Insurance premiums for fleet vehicles.",
        "name_ar": "تأمين مركبات"
      }
    ]
  },
  "financial": {
    "name": "Financial Services / Insurance",
    "icon": "🏦",
    "description": "Banks, insurance, investment firms.",
    "extraAccounts": [
      {
        "code": "122000",
        "name": "Loans & Advances Receivable",
        "type": "Receivable",
        "notes": "Short‑term loans and staff advances.",
        "name_ar": "قروض وسلف مدينة"
      },
      {
        "code": "122100",
        "name": "Premium Receivable",
        "type": "Receivable",
        "notes": "Insurance premiums due from policyholders.",
        "name_ar": "أقساط تأمين مستحقة"
      },
      {
        "code": "220700",
        "name": "Claims Payable",
        "type": "Current Liabilities",
        "notes": "Outstanding insurance claims awaiting settlement.",
        "name_ar": "مطالبات مستحقة الدفع"
      },
      {
        "code": "410000",
        "name": "Interest Income",
        "type": "Income",
        "notes": "Interest earned on loans & investments.",
        "name_ar": "إيرادات فوائد"
      },
      {
        "code": "410100",
        "name": "Commission Income",
        "type": "Income",
        "notes": "Brokerage and agency commissions.",
        "name_ar": "إيرادات عمولات"
      },
      {
        "code": "410200",
        "name": "Premium Income",
        "type": "Income",
        "notes": "Earned insurance premiums.",
        "name_ar": "إيرادات أقساط تأمين"
      },
      {
        "code": "620000",
        "name": "Bank Fees",
        "type": "Expense",
        "notes": "Bank service charges and fees.",
        "name_ar": "رسوم بنكية"
      },
      {
        "code": "710000",
        "name": "Provision for Credit Losses",
        "type": "Expense",
        "notes": "Allowance for doubtful accounts.",
        "name_ar": "مخصص خسائر ائتمانية"
      },
      {
        "code": "710100",
        "name": "Claims Expense",
        "type": "Expense",
        "notes": "Insurance claims incurred during the period.",
        "name_ar": "مصاريف مطالبات"
      }
    ]
  },
  "itmarketing": {
    "name": "IT / Communication / Marketing",
    "icon": "📡",
    "description": "Technology, telecom, advertising agencies.",
    "extraAccounts": [
      {
        "code": "128200",
        "name": "Deferred Campaign Costs",
        "type": "Current Assets",
        "notes": "Prepaid advertising production costs.",
        "name_ar": "تكاليف حملات مؤجلة"
      },
      {
        "code": "151300",
        "name": "Telecom Infrastructure",
        "type": "Fixed Assets",
        "notes": "Network towers, fiber, and equipment.",
        "name_ar": "بنية تحتية للاتصالات"
      },
      {
        "code": "420000",
        "name": "Service Revenue",
        "type": "Income",
        "notes": "IT managed services and support contracts.",
        "name_ar": "إيرادات خدمات"
      },
      {
        "code": "420100",
        "name": "Advertising Revenue",
        "type": "Income",
        "notes": "Agency fees and ad placements.",
        "name_ar": "إيرادات إعلانات"
      },
      {
        "code": "720000",
        "name": "Content Production",
        "type": "Expense",
        "notes": "Creative and production costs.",
        "name_ar": "إنتاج محتوى"
      },
      {
        "code": "720100",
        "name": "Media Buying",
        "type": "Expense",
        "notes": "Cost of purchased media placements.",
        "name_ar": "شراء وسائط إعلانية"
      },
      {
        "code": "720200",
        "name": "Software Licenses",
        "type": "Expense",
        "notes": "SaaS subscriptions and software fees.",
        "name_ar": "تراخيص برمجيات"
      }
    ]
  },
  "trading": {
    "name": "Trading / Distribution",
    "icon": "📦",
    "description": "Import/export, wholesale distribution.",
    "extraAccounts": [
      {
        "code": "110900",
        "name": "Goods in Transit",
        "type": "Current Assets",
        "notes": "Imported goods on water/air not yet received.",
        "name_ar": "بضائع عابرة"
      },
      {
        "code": "111000",
        "name": "Consignment Inventory",
        "type": "Current Assets",
        "notes": "Stock held at third‑party locations.",
        "name_ar": "مخزون أمانة"
      },
      {
        "code": "400500",
        "name": "Export Sales",
        "type": "Income",
        "notes": "Revenue from international exports.",
        "name_ar": "مبيعات تصدير"
      },
      {
        "code": "500600",
        "name": "Customs & Duties",
        "type": "Cost of Revenue",
        "notes": "Import duties and tariffs.",
        "name_ar": "رسوم جمركية"
      },
      {
        "code": "500700",
        "name": "Freight & Shipping",
        "type": "Cost of Revenue",
        "notes": "Inbound and outbound freight costs.",
        "name_ar": "شحن ونقل"
      }
    ]
  }
};

/** Broad category for each Odoo account type, used for the summary chips. */
export const typeCategory: Record<string, string> = {
  Receivable: 'Asset',
  'Bank and Cash': 'Asset',
  'Current Assets': 'Asset',
  'Non-current Assets': 'Asset',
  Prepayments: 'Asset',
  'Fixed Assets': 'Asset',
  Payable: 'Liability',
  'Credit Card': 'Liability',
  'Current Liabilities': 'Liability',
  'Non-current Liabilities': 'Liability',
  Equity: 'Equity',
  'Current Year Earnings': 'Equity',
  Income: 'Income',
  'Other Income': 'Income',
  Expense: 'Expense',
  Depreciation: 'Expense',
  'Cost of Revenue': 'Expense',
};

/** Generic base plus the industry's extra accounts, sorted by type then code. */
export function combinedAccounts(industryKey: string): Account[] {
  const merged = new Map<string, Account>();
  genericAccounts.forEach((account) => merged.set(account.code, account));
  (industries[industryKey]?.extraAccounts ?? []).forEach((account) =>
    merged.set(account.code, account),
  );
  return [...merged.values()].sort(
    (a, b) => a.type.localeCompare(b.type) || a.code.localeCompare(b.code),
  );
}
