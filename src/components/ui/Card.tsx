import { type HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "elevated" | "soft" | "outline" | "brand";
  /** Adds a subtle hover lift — use when the card is interactive. */
  interactive?: boolean;
  /** Removes default padding. */
  padded?: boolean;
};

/**
 * Card — surface primitive used by feature cards, dish cards, stat tiles.
 * Default variant is `elevated` (white background, soft shadow).
 */
export function Card({
  variant = "elevated",
  interactive = false,
  padded = true,
  className,
  ...rest
}: CardProps) {
  const variants = {
    elevated: "bg-white shadow-card ring-1 ring-ink-900/5",
    soft: "bg-cream-100 ring-1 ring-ink-900/[0.04]",
    outline: "bg-white ring-1 ring-ink-900/10",
    brand: "bg-brand-gradient text-white shadow-soft",
  }[variant];

  return (
    <div
      className={cn(
        "rounded-3xl",
        variants,
        padded && "p-6 sm:p-7",
        interactive &&
          "transition duration-250 ease-out-expo hover:-translate-y-1 hover:shadow-cardHover",
        className,
      )}
      {...rest}
    />
  );
}
