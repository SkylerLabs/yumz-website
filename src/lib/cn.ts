/**
 * Tiny classnames helper. Avoids pulling in clsx/classnames as a dependency.
 * Accepts strings, falsy values, or objects of { className: boolean }.
 */
export type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | ClassDict
  | ClassValue[];

type ClassDict = { [key: string]: boolean | undefined | null };

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    if (typeof input === "string" || typeof input === "number") {
      out.push(String(input));
    } else if (Array.isArray(input)) {
      const inner = cn(...input);
      if (inner) out.push(inner);
    } else if (typeof input === "object") {
      for (const key in input) {
        if (input[key]) out.push(key);
      }
    }
  }
  return out.join(" ");
}
