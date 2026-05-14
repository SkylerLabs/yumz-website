import { type HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type FloatingChipProps = HTMLAttributes<HTMLDivElement> & {
  tone?: "glass" | "match" | "hype" | "white";
  /** Pre-set float animation cadence. */
  float?: "a" | "b" | "c" | "none";
};

/**
 * FloatingChip — glassmorphic UI chip used to orbit the hero iPhone.
 * Conveys AI signals like "Match 94%", "🔥 Trending", "680 cal", "Allergens scanned".
 */
export function FloatingChip({
  tone = "glass",
  float = "a",
  className,
  ...rest
}: FloatingChipProps) {
  const tones = {
    glass: "glass-light text-ink-900 shadow-card",
    match: "bg-match-500 text-night-950 shadow-glowMatch",
    hype: "bg-hype-500 text-white shadow-glowHype",
    white: "bg-white text-ink-900 shadow-card ring-1 ring-ink-900/5",
  }[tone];

  const anim = {
    a: "animate-floatA",
    b: "animate-floatB",
    c: "animate-floatC",
    none: "",
  }[float];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-semibold tracking-tight",
        tones,
        anim,
        className,
      )}
      {...rest}
    />
  );
}
