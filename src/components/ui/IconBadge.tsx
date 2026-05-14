import { type HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type IconBadgeProps = HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg";
  tone?: "brand" | "soft" | "ink";
};

/**
 * IconBadge — circular/rounded surface for feature icons or emoji.
 * Used in feature cards, "how it works" steps, and allergen chips.
 */
export function IconBadge({
  size = "md",
  tone = "soft",
  className,
  ...rest
}: IconBadgeProps) {
  const tones = {
    brand: "bg-brand-gradient text-white shadow-soft",
    soft: "bg-brand-gradient-soft text-brand-700 ring-1 ring-brand-100",
    ink: "bg-ink-900 text-cream-50",
  }[tone];

  const sizes = {
    sm: "h-9 w-9 text-base",
    md: "h-12 w-12 text-xl",
    lg: "h-16 w-16 text-2xl",
  }[size];

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-2xl",
        tones,
        sizes,
        className,
      )}
      {...rest}
    />
  );
}
