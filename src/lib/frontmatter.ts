import { readFileSync } from "node:fs";

import matter from "gray-matter";

const toIsoDate = (value: unknown) =>
  value instanceof Date ? value.toISOString().slice(0, 10) : typeof value === "string" ? value : undefined;

export function readMdx(path: string) {
  const { data, content } = matter(readFileSync(path, "utf8"));
  const value = (key: string): unknown => data[key];
  const required = <T>(key: string, found: T | undefined) => {
    if (found === undefined) throw new Error(`${path}: missing front-matter "${key}"`);
    return found;
  };
  const optionalString = (key: string) => {
    const found = value(key);
    return typeof found === "string" && found ? found : undefined;
  };
  const optionalDate = (key: string) => toIsoDate(value(key));

  return {
    content,
    optionalString,
    optionalDate,
    string: (key: string) => required(key, optionalString(key)),
    date: (key: string) => required(key, optionalDate(key)),
  };
}
