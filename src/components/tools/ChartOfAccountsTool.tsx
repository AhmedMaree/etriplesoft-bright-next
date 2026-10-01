"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ClipboardCopy, Download, FileSpreadsheet, Search } from "lucide-react";
import {
  combinedAccounts,
  industries,
  typeCategory,
} from "@/data/chart-of-accounts";
import styles from "./ChartOfAccountsTool.module.css";

type Lang = "en" | "ar";

const header = ["Code", "Account Name", "Type", "Notes"];
const fileBase = "Account (account.account)";

const nameOf = (account: { name: string; name_ar?: string }, lang: Lang) =>
  lang === "ar" && account.name_ar ? account.name_ar : account.name;

function download(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

const csvCell = (value: string) =>
  /[",\n]/.test(value) ? `"${value.replace(/"/g, '""')}"` : value;

export function ChartOfAccountsTool({ defaultLanguage = "en" }: { defaultLanguage?: Lang }) {
  const [selected, setSelected] = useState("generic");
  const [filter, setFilter] = useState("");
  const [lang, setLang] = useState<Lang>(defaultLanguage);
  const [status, setStatus] = useState("");
  const [exported, setExported] = useState(false);

  const industry = industries[selected];
  const ar = defaultLanguage === "ar";
  const arabicIndustries: Record<string, { name: string; description: string }> = {
    generic: { name: "عام / إعداد أودو الافتراضي 18", description: "دليل الحسابات الافتراضي لأودو Enterprise 18 مع حسابات الموارد البشرية لمصر والإمارات والسعودية." },
    manufacturing: { name: "التصنيع", description: "أنشطة التصنيع المنفصل أو التصنيع بالعمليات." },
    construction: { name: "البناء والمقاولات", description: "أنشطة المشروعات والأعمال الإنشائية." },
    retail: { name: "التجزئة والجملة", description: "تجارة التجزئة متعددة القنوات." },
    restaurants: { name: "المطاعم", description: "عمليات المطاعم والأغذية والمشروبات." },
    healthcare: { name: "الرعاية الصحية", description: "العمليات الإدارية والمالية للرعاية الصحية." },
    restaurant: { name: "المطاعم", description: "عمليات خدمات الطعام والمطاعم." },
    realestate: { name: "العقارات", description: "إدارة العقارات والأملاك." },
    services: { name: "الخدمات المهنية", description: "الاستشارات والخدمات القانونية والمهنية." },
    ecommerce: { name: "التجارة الإلكترونية", description: "أنشطة البيع عبر الإنترنت." },
    nonprofit: { name: "المنظمات غير الربحية", description: "المؤسسات الأهلية ومحاسبة الصناديق." },
    education: { name: "التعليم", description: "المدارس والجامعات." },
    hotel: { name: "الفنادق والضيافة", description: "حسابات الفنادق والضيافة وفق تصنيف USALI." },
    saas: { name: "تقنية المعلومات والبرمجيات كخدمة", description: "شركات البرمجيات والخدمات التقنية." },
    agriculture: { name: "الزراعة", description: "الزراعة والثروة الحيوانية." },
    transportation: { name: "النقل", description: "الخدمات اللوجستية والنقل البري." },
    financial: { name: "الخدمات المالية والتأمين", description: "البنوك والتأمين والاستثمار." },
    itmarketing: { name: "تقنية المعلومات والاتصالات والتسويق", description: "التقنية والاتصالات ووكالات الإعلان." },
    trading: { name: "التجارة والتوزيع", description: "الاستيراد والتصدير وتوزيع الجملة." },
  };
  const industryName = ar ? arabicIndustries[selected]?.name ?? industry.name : industry.name;
  const industryDescription = ar ? arabicIndustries[selected]?.description ?? industry.description : industry.description;
  const exportHeader = ar ? ["الرمز", "اسم الحساب", "النوع"] : header;
  const exportBase = ar ? "دليل الحسابات (account.account)" : fileBase;
  const words = ar ? {
    step1: "اختر القطاع", step2: "راجع الحسابات واللغة", step3: "أنشئ ملف Excel", choose: "اختر قطاعاً",
    preview: "معاينة", filter: "تصفية حسب الرمز أو الاسم أو النوع", accounts: "معاينة الحسابات", code: "الرمز",
    name: "اسم الحساب", type: "النوع", notes: "ملاحظات", empty: "لا توجد حسابات تطابق عوامل التصفية.",
    summary: "ملخص", industry: "القطاع", total: "إجمالي الحسابات", range: "نطاق الرموز", language: "لغة أسماء الحسابات",
    english: "الإنجليزية", arabic: "العربية", excel: "إنشاء ملف Excel (.xlsx)", csv: "تنزيل CSV", copy: "نسخ بصيغة TSV",
    filename: "اسم الملف:", sorted: "مرتبة حسب النوع ثم الرمز. تتضمن حسابات الموارد البشرية.", need: "هل تريد تهيئة هذا الدليل في أودو؟",
    setup: "نهيئ دليل الحسابات والضرائب والفوترة الإلكترونية ضمن تنفيذ المحاسبة في أودو.", book: "احجز استشارة مجانية", explore: "استكشف محاسبة أودو",
    copied: "تم النسخ كنص مفصول بعلامات جدولة.", copyFailed: "تعذر النسخ. استخدم تنزيل CSV.", csvReady: "تم تنزيل ملف CSV.", excelReady: "ملف Excel جاهز",
  } : {
    step1: "Select industry", step2: "Review & language", step3: "Generate Excel", choose: "Choose an industry",
    preview: "Preview", filter: "Filter by code, name or type", accounts: "Accounts preview", code: "Code",
    name: "Account name", type: "Type", notes: "Notes", empty: "No accounts match that filter.", summary: "Summary",
    industry: "Industry", total: "Total accounts", range: "Code range", language: "Account name language",
    english: "English", arabic: "Arabic", excel: "Generate Excel (.xlsx)", csv: "Download CSV", copy: "Copy as TSV",
    filename: "File name:", sorted: "Sorted by type, then code. HR accounts are included.", need: "Need this set up in Odoo?",
    setup: "We configure the chart of accounts, taxes and e-invoicing as part of an Odoo Accounting implementation.", book: "Book a Free Consultation", explore: "Explore Odoo Accounting",
    copied: "Copied as tab-separated text.", copyFailed: "Copy failed. Use the CSV download instead.", csvReady: "CSV downloaded.", excelReady: "Excel ready",
  };
  const arabicTypes: Record<string, string> = { Asset: "أصل", Assets: "الأصول", "Current Assets": "الأصول المتداولة", "Non-current Assets": "الأصول غير المتداولة", "Fixed Assets": "الأصول الثابتة", Prepayments: "المدفوعات المقدمة", "Current Liabilities": "الالتزامات المتداولة", "Non-current Liabilities": "الالتزامات غير المتداولة", Liability: "التزام", Liabilities: "الالتزامات", "Credit Card": "بطاقة ائتمان", Equity: "حقوق الملكية", "Current Year Earnings": "أرباح السنة الحالية", Income: "الإيرادات", "Other Income": "إيرادات أخرى", Revenue: "الإيرادات", Expenses: "المصروفات", Expense: "مصروف", Depreciation: "الإهلاك", "Cost of Revenue": "تكلفة الإيرادات", "Bank and Cash": "البنوك والنقدية", Receivable: "الذمم المدينة", Payable: "الذمم الدائنة", Other: "أخرى" };
  const typeLabel = (type: string) => ar ? arabicTypes[type] ?? type : type;
  const accounts = useMemo(() => combinedAccounts(selected), [selected]);

  const visible = useMemo(() => {
    const query = filter.trim().toLowerCase();
    if (!query) return accounts;
    return accounts.filter(
      (account) =>
        account.code.toLowerCase().includes(query) ||
        nameOf(account, lang).toLowerCase().includes(query) ||
        typeLabel(account.type).toLowerCase().includes(query),
    );
  }, [accounts, filter, lang]);

  const summary = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const account of accounts) {
      const category = typeCategory[account.type] ?? "Other";
      counts[category] = (counts[category] ?? 0) + 1;
    }
    const codes = accounts.map((account) => account.code).sort();
    return { counts, range: `${codes[0]} – ${codes[codes.length - 1]}` };
  }, [accounts]);

  const rows = () =>
    accounts.map((account) => [
      account.code,
      nameOf(account, lang),
      typeLabel(account.type),
      ...(!ar ? [account.notes || ""] : []),
    ]);

  const announce = (message: string) => {
    setStatus(message);
    setExported(true);
    window.setTimeout(() => setStatus(""), 4000);
  };

  async function exportXlsx() {
    const ExcelJS = (await import("exceljs")).default;
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet(exportBase);
    sheet.addRow(exportHeader);
    rows().forEach((row) => sheet.addRow(row));
    sheet.columns = ar
      ? [{ width: 12 }, { width: 44 }, { width: 24 }]
      : [{ width: 12 }, { width: 44 }, { width: 24 }, { width: 62 }];
    sheet.eachRow((row) => {
      row.eachCell((cell) => {
        cell.alignment = { vertical: "middle", horizontal: "center" };
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });
    });
    const headerRow = sheet.getRow(1);
    headerRow.font = { bold: true, color: { argb: "FFFFFFFF" } };
    headerRow.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF87CEEB" },
    };
    headerRow.height = 20;
    sheet.views = [{ state: "frozen", ySplit: 1 }];
    const buffer = await workbook.xlsx.writeBuffer();
    download(
      new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }),
      `${exportBase}.xlsx`,
    );
    announce(`${words.excelReady}: ${accounts.length} ${ar ? "حساباً" : "accounts"}, ${lang === "ar" ? words.arabic : words.english}.`);
  }

  function exportCsv() {
    const csv = [exportHeader, ...rows()]
      .map((row) => row.map(csvCell).join(","))
      .join("\n");
    download(
      new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8" }),
      `${exportBase}.csv`,
    );
    announce(words.csvReady);
  }

  async function copyTsv() {
    const tsv = [exportHeader, ...rows()].map((row) => row.join("\t")).join("\n");
    try {
      await navigator.clipboard.writeText(tsv);
      announce(words.copied);
    } catch {
      setStatus(words.copyFailed);
    }
  }

  const stepClass = (active: boolean) =>
    `${styles.step} ${active ? styles.stepActive : ""}`;

  return (
    <div className={styles.tool} dir={ar ? "rtl" : undefined}>
      <ol className={styles.steps} aria-label={ar ? "الخطوات" : "Steps"}>
        <li className={stepClass(true)}>
          <span>1</span> {words.step1}
        </li>
        <li className={stepClass(true)}>
          <span>2</span> {words.step2}
        </li>
        <li className={stepClass(exported)}>
          <span>3</span> {words.step3}
        </li>
      </ol>

      <div className={styles.layout}>
        <div className={styles.main}>
          <section className={styles.card} aria-labelledby="coa-industry">
            <h2 id="coa-industry">{words.choose}</h2>
            <div className={styles.industries}>
              {Object.entries(industries).map(([key, item]) => (
                <button
                  key={key}
                  type="button"
                  className={`${styles.industry} ${key === selected ? styles.selected : ""}`}
                  aria-pressed={key === selected}
                  onClick={() => setSelected(key)}
                >
                  <span className={styles.emoji} aria-hidden="true">
                    {item.icon}
                  </span>
                  <strong>{ar ? arabicIndustries[key]?.name ?? item.name : item.name}</strong>
                  <span>{ar ? arabicIndustries[key]?.description ?? item.description : item.description}</span>
                </button>
              ))}
            </div>
          </section>

          <section className={styles.card} aria-labelledby="coa-preview">
            <div className={styles.previewHead}>
              <h2 id="coa-preview">{words.preview}: {industryName}</h2>
              <label className={styles.search}>
                <Search size={16} aria-hidden="true" />
                <span className="sr-only">{words.filter}</span>
                <input
                  value={filter}
                  onChange={(event) => setFilter(event.target.value)}
                  placeholder={words.filter}
                />
              </label>
            </div>
            <div
              className={styles.tableWrap}
              role="region"
              aria-label={words.accounts}
              tabIndex={0}
            >
              <table>
                <thead>
                  <tr>
                    <th scope="col">{words.code}</th>
                    <th scope="col">{words.name}</th>
                    <th scope="col">{words.type}</th>
                    {!ar && <th scope="col">{words.notes}</th>}
                  </tr>
                </thead>
                <tbody>
                  {visible.map((account) => (
                    <tr key={account.code}>
                      <td className={styles.code}>{account.code}</td>
                      <td
                        dir={lang === "ar" && account.name_ar ? "rtl" : undefined}
                      >
                        {nameOf(account, lang)}
                      </td>
                      <td>
                        <span
                          className={`${styles.badge} ${styles[`t${typeCategory[account.type] ?? "Other"}`]}`}
                        >
                          {typeLabel(account.type)}
                        </span>
                      </td>
                      {!ar && <td className={styles.notes}>{account.notes}</td>}
                    </tr>
                  ))}
                  {visible.length === 0 && (
                    <tr>
                      <td colSpan={ar ? 3 : 4} className={styles.empty}>
                        {words.empty}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <aside className={styles.side}>
          <section className={styles.card} aria-labelledby="coa-summary">
            <h2 id="coa-summary">{words.summary}</h2>
            <dl className={styles.metrics}>
              <div>
                <dt>{words.industry}</dt>
                <dd>{industryName}</dd>
              </div>
              <div>
                <dt>{words.total}</dt>
                <dd>{accounts.length}</dd>
              </div>
              <div>
                <dt>{words.range}</dt>
                <dd>{summary.range}</dd>
              </div>
            </dl>
            <div className={styles.chips}>
              {Object.entries(summary.counts).map(([category, count]) => (
                <span key={category} className={styles.chip}>
                  {typeLabel(category)} <b>{count}</b>
                </span>
              ))}
            </div>
            <p className={styles.description}>{industryDescription}</p>

            <div className={styles.langRow} role="group" aria-label={words.language}>
              <button
                type="button"
                className={lang === "en" ? styles.langActive : ""}
                aria-pressed={lang === "en"}
                onClick={() => setLang("en")}
              >
                {words.english}
              </button>
              <button
                type="button"
                className={lang === "ar" ? styles.langActive : ""}
                aria-pressed={lang === "ar"}
                onClick={() => setLang("ar")}
              >
                {words.arabic}
              </button>
            </div>

            <div className={styles.actions}>
              <button type="button" className="button" onClick={exportXlsx}>
                <FileSpreadsheet size={17} aria-hidden="true" />
                {words.excel}
              </button>
              <button type="button" className="button secondary" onClick={exportCsv}>
                <Download size={17} aria-hidden="true" />
                {words.csv}
              </button>
              <button type="button" className="button secondary" onClick={copyTsv}>
                <ClipboardCopy size={17} aria-hidden="true" />
                {words.copy}
              </button>
            </div>
            <p className={styles.fine}>
              {words.filename} <code>{exportBase}.xlsx</code>. {words.sorted}
            </p>
            <p className={styles.status} role="status" aria-live="polite">
              {status}
            </p>
          </section>

          <section className={`${styles.card} ${styles.cta}`}>
            <h2>{words.need}</h2>
            <p>
              {words.setup}
            </p>
            <Link
              className="button gradient"
              href={ar ? "/ar/book-consultation" : "/book-consultation"}
            >
              {words.book} <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link className={styles.more} href={ar ? "/ar/odoo/accounting" : "/odoo/accounting"}>
              {words.explore}
            </Link>
          </section>
        </aside>
      </div>
    </div>
  );
}
