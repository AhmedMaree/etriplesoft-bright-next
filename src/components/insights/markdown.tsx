import Image from "next/image";
import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import imageSizes from "@/content/insights/image-sizes.json";
import styles from "./article.module.css";

// A deliberately small Markdown subset for migrated articles. See
// src/content/insights/types.ts for the supported syntax.

type Block =
  | { type: "heading"; level: 2 | 3; text: string; id: string }
  | { type: "paragraph"; text: string }
  | { type: "note"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "table"; rows: string[][]; caption: string }
  | { type: "image"; alt: string; src: string }
  | { type: "quote"; text: string }
  | { type: "cta"; title?: string; text: string };

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const plain = (text: string) =>
  text
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\*\*/g, "")
    .replace(/(^|\W)_(.+?)_(?=\W|$)/g, "$1$2");

export function parseBlocks(markdown: string): Block[] {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const blocks: Block[] = [];
  const usedIds = new Set<string>();
  let lastHeading = "";
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }
    if (line.startsWith("::: cta")) {
      const body: string[] = [];
      i++;
      while (i < lines.length && lines[i].trim() !== ":::") body.push(lines[i++]);
      i++;
      const first = body[0]?.match(/^\*\*(.+)\*\*$/);
      blocks.push(
        first
          ? { type: "cta", title: first[1], text: body.slice(1).join(" ").trim() }
          : { type: "cta", text: body.join(" ").trim() },
      );
      continue;
    }
    const heading = line.match(/^(#{2,3}) (.+)$/);
    if (heading) {
      const text = heading[2].trim();
      let id = slugify(plain(text)) || "section";
      let n = 2;
      while (usedIds.has(id)) id = `${slugify(plain(text))}-${n++}`;
      usedIds.add(id);
      lastHeading = plain(text);
      blocks.push({ type: "heading", level: heading[1].length as 2 | 3, text, id });
      i++;
      continue;
    }
    if (line.startsWith("|") && lines[i + 1]?.match(/^\|\s*-/)) {
      const rows: string[][] = [];
      const cells = (row: string) =>
        row
          .trim()
          .replace(/^\||\|$/g, "")
          .split(/(?<!\\)\|/)
          .map((cell) => cell.replace(/\\\|/g, "|").trim());
      rows.push(cells(line));
      i += 2;
      while (i < lines.length && lines[i].startsWith("|")) rows.push(cells(lines[i++]));
      blocks.push({ type: "table", rows, caption: lastHeading });
      continue;
    }
    const image = line.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/);
    if (image) {
      blocks.push({ type: "image", alt: image[1], src: image[2] });
      i++;
      continue;
    }
    if (/^(- |\d+\. )/.test(line)) {
      const ordered = /^\d+\. /.test(line);
      const items: string[] = [];
      while (i < lines.length && /^(- |\d+\. )/.test(lines[i]))
        items.push(lines[i++].replace(/^(- |\d+\. )/, ""));
      blocks.push({ type: "list", ordered, items });
      continue;
    }
    if (line.startsWith("> ")) {
      const quote: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) quote.push(lines[i++].slice(2));
      blocks.push({ type: "quote", text: quote.join(" ") });
      continue;
    }
    const paragraph: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{2,3} |- |\d+\. |> |\||!\[|::: )/.test(lines[i])
    )
      paragraph.push(lines[i++]);
    const text = paragraph.join(" ").trim();
    if (/^_[^_].*_$/.test(text)) blocks.push({ type: "note", text: text.slice(1, -1) });
    else blocks.push({ type: "paragraph", text });
  }
  return blocks;
}

/** H2 headings, for the on-page table of contents. */
export const tableOfContents = (markdown: string) =>
  parseBlocks(markdown).flatMap((block) =>
    block.type === "heading" && block.level === 2
      ? [{ id: block.id, text: plain(block.text) }]
      : [],
  );

const inlinePattern =
  /\[([^\]]+)\]\(([^)\s]+)\)|\*\*(.+?)\*\*|(?<![\w])_(?!\s)(.+?)(?<!\s)_(?![\w])/;

function inline(text: string, key = "i"): ReactNode {
  const nodes: ReactNode[] = [];
  let rest = text;
  let n = 0;
  while (rest) {
    const match = inlinePattern.exec(rest);
    if (!match) {
      nodes.push(rest);
      break;
    }
    if (match.index > 0) nodes.push(rest.slice(0, match.index));
    const k = `${key}-${n++}`;
    if (match[1] !== undefined) {
      const href = match[2];
      nodes.push(
        href.startsWith("/") ? (
          <Link key={k} href={href}>
            {inline(match[1], k)}
          </Link>
        ) : (
          <a key={k} href={href} rel="noopener noreferrer" target="_blank">
            {inline(match[1], k)}
          </a>
        ),
      );
    } else if (match[3] !== undefined) {
      nodes.push(<strong key={k}>{inline(match[3], k)}</strong>);
    } else {
      nodes.push(<em key={k}>{inline(match[4], k)}</em>);
    }
    rest = rest.slice(match.index + match[0].length);
  }
  return nodes.map((node, index) => <Fragment key={index}>{node}</Fragment>);
}

const demoHref = "/contact?service=Odoo%20ERP%20Demo";

export function Markdown({ source }: { source: string }) {
  return (
    <>
      {parseBlocks(source).map((block, index) => {
        switch (block.type) {
          case "heading":
            return block.level === 2 ? (
              <h2 key={index} id={block.id}>
                {inline(block.text)}
              </h2>
            ) : (
              <h3 key={index} id={block.id}>
                {inline(block.text)}
              </h3>
            );
          case "paragraph":
            return <p key={index}>{inline(block.text)}</p>;
          case "note":
            return (
              <p key={index} className={styles.note}>
                {inline(block.text)}
              </p>
            );
          case "quote":
            return <blockquote key={index}>{inline(block.text)}</blockquote>;
          case "list": {
            const Tag = block.ordered ? "ol" : "ul";
            return (
              <Tag key={index}>
                {block.items.map((item) => (
                  <li key={item}>{inline(item)}</li>
                ))}
              </Tag>
            );
          }
          case "image": {
            const size = (imageSizes as Record<string, { width: number; height: number }>)[
              block.src
            ];
            return (
              <figure key={index} className={styles.figure}>
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={size?.width ?? 1024}
                  height={size?.height ?? 576}
                  sizes="(min-width: 900px) 760px, 100vw"
                  loading="lazy"
                />
              </figure>
            );
          }
          case "table": {
            const [head, ...rows] = block.rows;
            return (
              <div key={index} className={styles.tableWrap} tabIndex={0} role="region" aria-label={`${block.caption || "Table"} (scrollable)`}>
                <table>
                  {block.caption && <caption className={styles.srOnly}>{block.caption}</caption>}
                  <thead>
                    <tr>
                      {head.map((cell, c) => (
                        <th key={c} scope="col">
                          {inline(cell.replace(/^\*\*(.*)\*\*$/, "$1"))}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) =>
                          c === 0 ? (
                            <th key={c} scope="row">
                              {inline(cell.replace(/^\*\*(.*)\*\*$/, "$1"))}
                            </th>
                          ) : (
                            <td key={c}>{inline(cell)}</td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }
          case "cta":
            return (
              <aside key={index} className={styles.cta}>
                {block.title && <strong>{block.title}</strong>}
                <p>{inline(block.text)}</p>
                <div>
                  <Link className="button gradient" href={demoHref}>
                    Request a Free Demo
                  </Link>
                  <Link className="button secondary" href="/contact">
                    Contact our team
                  </Link>
                </div>
              </aside>
            );
        }
      })}
    </>
  );
}
