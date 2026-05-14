import { type HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  /** Tighter max-width for prose-heavy or single-column sections. */
  size?: "default" | "narrow" | "wide";
};

/**
 * Container — horizontal layout primitive.
 * Responsive padding, sensible max-widths, no margin collapsing surprises.
 */
export function Container({
  size = "default",
  className,
  ...rest
}: ContainerProps) {
  const max = {
    narrow: "max-w-3xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
  }[size];

  return (
    <div
      className={cn("mx-auto w-full px-6 sm:px-8 lg:px-12", max, className)}
      {...rest}
    />
  );
}
