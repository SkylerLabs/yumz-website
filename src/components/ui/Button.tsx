import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "../../lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "inverse";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  /** Optional icon node rendered before the label. */
  leadingIcon?: ReactNode;
  /** Optional icon node rendered after the label (e.g. an arrow). */
  trailingIcon?: ReactNode;
  /** Make the button fill its container. */
  block?: boolean;
};

type ButtonAsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
};
type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

/**
 * Button — primary CTA primitive.
 * Renders as <a> when href is provided, otherwise <button>. Same styling either way.
 */
export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    leadingIcon,
    trailingIcon,
    block,
    className,
    children,
    ...rest
  } = props as CommonProps & { className?: string; children?: ReactNode };

  const variants: Record<Variant, string> = {
    primary:
      "bg-brand-gradient text-white shadow-soft hover:brightness-105 active:brightness-95",
    secondary:
      "bg-white text-ink-900 shadow-card ring-1 ring-ink-900/5 hover:bg-cream-100",
    ghost:
      "bg-transparent text-ink-800 hover:bg-cream-100",
    inverse:
      "bg-white text-brand-600 shadow-card hover:bg-cream-50",
  };

  const sizes: Record<Size, string> = {
    sm: "px-4 py-2 text-[13px]",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-[15px]",
  };

  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight whitespace-nowrap",
    "transition duration-250 ease-out-expo",
    "disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
    block && "w-full",
    className,
  );

  const inner = (
    <>
      {leadingIcon && <span aria-hidden>{leadingIcon}</span>}
      <span>{children}</span>
      {trailingIcon && <span aria-hidden>{trailingIcon}</span>}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={cls} {...anchorRest}>
        {inner}
      </a>
    );
  }

  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {inner}
    </button>
  );
}
