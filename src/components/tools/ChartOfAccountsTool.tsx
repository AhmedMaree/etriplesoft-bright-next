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

export function ChartOfAccountsTool() {
  const [selected, setSelected] = useState("generic");
  const [filter, setFilter] = useState("");
  const [lang, setLang] = useState<Lang>("en");
  const [status, setStatus] = useState("");
  const [exported, setExported] = useState(false);

  const industry = industries[selected];
  const accounts = useMemo(() => combinedAccounts(selected), [selected]);

  const visible = useMemo(() => {
    const query = filter.trim().toLowerCase();
    if (!query) return accounts;
    return accounts.filter(
      (account) =>
        account.code.toLowerCase().includes(query) ||
        nameOf(account, lang).toLowerCase().includes(query) ||
        account.type.toLowerCase().includes(query),
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
      account.type,
      account.notes || "",
    ]);

  const announce = (message: string) => {
    setStatus(message);
    setExported(true);
    window.setTimeout(() => setStatus(""), 4000);
  };

  async function exportXlsx() {
    const ExcelJS = (await import("exceljs")).default;
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet(fileBase);
    sheet.addRow(header);
    rows().forEach((row) => sheet.addRow(row));
    sheet.columns = [{ width: 12 }, { width: 44 }, { width: 24 }, { width: 62 }];
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
      `${fileBase}.xlsx`,
    );
    announce(`Excel ready: ${accounts.length} accounts, ${lang === "ar" ? "Arabic" : "English"}.`);
  }

  function exportCsv() {
    const csv = [header, ...rows()]
      .map((row) => row.map(csvCell).join(","))
      .join("\n");
    download(
      new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8" }),
      `${fileBase}.csv`,
    );
    announce("CSV downloaded.");
  }

  async function copyTsv() {
    const tsv = [header, ...rows()].map((row) => row.join("\t")).join("\n");
    try {
      await navigator.clipboard.writeText(tsv);
      announce("Copied as tab-separated text.");
    } catch {
      setStatus("Copy failed. Use the CSV download instead.");
    }
  }

  const stepClass = (active: boolean) =>
    `${styles.step} ${active ? styles.stepActive : ""}`;

  return (
    <div className={styles.tool}>
      <ol className={styles.steps} aria-label="Steps">
        <li className={stepClass(true)}>
          <span>1</span> Select industry
        </li>
        <li className={stepClass(true)}>
          <span>2</span> Review &amp; language
        </li>
        <li className={stepClass(exported)}>
          <span>3</span> Generate Excel
        </li>
      </ol>

      <div className={styles.layout}>
        <div className={styles.main}>
          <section className={styles.card} aria-labelledby="coa-industry">
            <h2 id="coa-industry">Choose an industry</h2>
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
                  <strong>{item.name}</strong>
                  <span>{item.description}</span>
                </button>
              ))}
            </div>
          </section>

          <section className={styles.card} aria-labelledby="coa-preview">
            <div className={styles.previewHead}>
              <h2 id="coa-preview">Preview: {industry.name}</h2>
              <label className={styles.search}>
                <Search size={16} aria-hidden="true" />
                <span className="sr-only">Filter accounts</span>
                <input
                  value={filter}
                  onChange={(event) => setFilter(event.target.value)}
                  placeholder="Filter by code, name or type"
                />
              </label>
            </div>
            <div
              className={styles.tableWrap}
              role="region"
              aria-label="Accounts preview"
              tabIndex={0}
            >
              <table>
                <thead>
                  <tr>
                    <th scope="col">Code</th>
                    <th scope="col">Account name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Notes</th>
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
                          {account.type}
                        </span>
                      </td>
                      <td className={styles.notes}>{account.notes}</td>
                    </tr>
                  ))}
                  {visible.length === 0 && (
                    <tr>
                      <td colSpan={4} className={styles.empty}>
                        No accounts match that filter.
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
            <h2 id="coa-summary">Summary</h2>
            <dl className={styles.metrics}>
              <div>
                <dt>Industry</dt>
                <dd>{industry.name}</dd>
              </div>
              <div>
                <dt>Total accounts</dt>
                <dd>{accounts.length}</dd>
              </div>
              <div>
                <dt>Code range</dt>
                <dd>{summary.range}</dd>
              </div>
            </dl>
            <div className={styles.chips}>
              {Object.entries(summary.counts).map(([category, count]) => (
                <span key={category} className={styles.chip}>
                  {category} <b>{count}</b>
                </span>
              ))}
            </div>
            <p className={styles.description}>{industry.description}</p>

            <div className={styles.langRow} role="group" aria-label="Account name language">
              <button
                type="button"
                className={lang === "en" ? styles.langActive : ""}
                aria-pressed={lang === "en"}
                onClick={() => setLang("en")}
              >
                English
              </button>
              <button
                type="button"
                className={lang === "ar" ? styles.langActive : ""}
                aria-pressed={lang === "ar"}
                onClick={() => setLang("ar")}
              >
                العربية (Arabic)
              </button>
            </div>

            <div className={styles.actions}>
              <button type="button" className="button" onClick={exportXlsx}>
                <FileSpreadsheet size={17} aria-hidden="true" />
                Generate Excel (.xlsx)
              </button>
              <button type="button" className="button secondary" onClick={exportCsv}>
                <Download size={17} aria-hidden="true" />
                Download CSV
              </button>
              <button type="button" className="button secondary" onClick={copyTsv}>
                <ClipboardCopy size={17} aria-hidden="true" />
                Copy as TSV
              </button>
            </div>
            <p className={styles.fine}>
              File name: <code>{fileBase}.xlsx</code>. Sorted by type, then code.
              HR accounts are included.
            </p>
            <p className={styles.status} role="status" aria-live="polite">
              {status}
            </p>
          </section>

          <section className={`${styles.card} ${styles.cta}`}>
            <h2>Need this set up in Odoo?</h2>
            <p>
              We configure the chart of accounts, taxes and e-invoicing as part
              of an Odoo Accounting implementation.
            </p>
            <Link
              className="button gradient"
              href="/book-consultation"
            >
              Book a Free Consultation <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link className={styles.more} href="/odoo/accounting">
              Explore Odoo Accounting
            </Link>
          </section>
        </aside>
      </div>
    </div>
  );
}
