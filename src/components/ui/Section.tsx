import { type HTMLAttributes } from "react";
import { cn } from "../../lib/cn";
import { Container } from "./Container";

type SectionProps = HTMLAttributes<HTMLElement> & {
  /** Background tone. Default = warm cream. */
  tone?: "cream" | "white" | "brand" | "ink" | "fade";
  /** Vertical spacing density. */
  spacing?: "default" | "tight" | "loose";
  /** Container size. Pass `none` to opt out (the section provides only background + padding). */
  container?: "default" | "narrow" | "wide" | "none";
  /** Optional id for in-page anchors */
  id?: string;
};

/**
 * Section — vertical rhythm + background tone primitive.
 * Wraps children in a Container by default for one-line layout setup.
 */
export function Section({
  tone = "cream",
  spacing = "default",
  container = "default",
  className,
  children,
  ...rest
}: SectionProps) {
  const bg = {
    cream: "bg-cream-50",
    white: "bg-white",
    brand: "bg-brand-gradient text-white",
    ink: "bg-ink-900 text-cream-50",
    fade: "bg-warm-fade",
  }[tone];

  const py = {
    tight: "py-12 sm:py-16",
    default: "py-16 sm:py-24 lg:py-28",
    loose: "py-24 sm:py-32 lg:py-40",
  }[spacing];

  const inner =
    container === "none" ? (
      children
    ) : (
      <Container size={container}>{children}</Container>
    );

  return (
    <section className={cn(bg, py, className)} {...rest}>
      {inner}
    </section>
  );
}
