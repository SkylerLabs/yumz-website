import { type HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type EyebrowProps = HTMLAttributes<HTMLSpanElement> & {
  /** Show a small pulsing brand dot on the left. */
  dot?: boolean;
  tone?: "brand" | "ink";
};

/**
 * Eyebrow — small uppercase label that sits above section headings.
 * Used everywhere on the marketing site for category labels
 * (e.g. "How it works", "Features", "Safety first").
 */
export function Eyebrow({
  dot = true,
  tone = "brand",
  className,
  children,
  ...rest
}: EyebrowProps) {
  const styles =
    tone === "brand"
      ? "bg-white/80 text-brand-600 ring-brand-100"
      : "bg-ink-900/5 text-ink-700 ring-ink-900/5";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ring-1",
        styles,
        className,
      )}
      {...rest}
    >
      {dot && (
        <span
          aria-hidden
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            tone === "brand" ? "bg-brand-500" : "bg-ink-700",
          )}
        />
      )}
      {children}
    </span>
  );
}
