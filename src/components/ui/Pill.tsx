import { type HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type PillProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "brand" | "neutral" | "ink" | "outline";
  size?: "sm" | "md";
};

/**
 * Pill — small tag-style label used for smart modes (Gym Mode, Cut Mode, etc.),
 * dietary tags, and dish meta (Trending, Yumz Pick, World, Sweet).
 */
export function Pill({
  tone = "neutral",
  size = "md",
  className,
  ...rest
}: PillProps) {
  const tones = {
    brand: "bg-brand-50 text-brand-700 ring-1 ring-brand-100",
    neutral: "bg-cream-100 text-ink-800 ring-1 ring-ink-900/[0.04]",
    ink: "bg-ink-900 text-cream-50",
    outline: "bg-transparent text-ink-700 ring-1 ring-ink-900/10",
  }[tone];

  const sizes = {
    sm: "px-2.5 py-0.5 text-[11px]",
    md: "px-3 py-1 text-xs",
  }[size];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium",
        tones,
        sizes,
        className,
      )}
      {...rest}
    />
  );
}
