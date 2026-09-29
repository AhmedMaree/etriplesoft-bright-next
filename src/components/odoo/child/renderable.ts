import type { OdooChildPageConfig, Status } from "./types";

/** Drops every item that still needs owner confirmation. */
export function renderable<T extends { status: Status }>(items: readonly T[]): T[] {
  return items.filter((item) => item.status === "legacy");
}

/**
 * Walks a page config and throws if any string contains "TODO", so unresolved
 * placeholders fail the build instead of reaching production.
 */
export function assertNoTodo(value: unknown, path = "config"): void {
  if (typeof value === "string") {
    if (/\bTODO\b/i.test(value))
      throw new Error(`Unresolved TODO would render at ${path}: "${value}"`);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => assertNoTodo(item, `${path}[${index}]`));
    return;
  }
  if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value))
      assertNoTodo(child, `${path}.${key}`);
  }
}

/** Identity helper that validates a page config at module load (build time). */
export function defineOdooPage(config: OdooChildPageConfig): OdooChildPageConfig {
  assertNoTodo(config, config.path);
  return config;
}
