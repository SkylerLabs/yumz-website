import { cn } from "../lib/cn";

/**
 * LogoMark — the Yumz brand mark.
 *
 * Renders the official Yumz orange app icon (`/public/yumz-icon.png`,
 * sourced from the canonical yumz-app repo — see README). Single source of
 * truth for the logo across the site; swap the underlying file in /public/
 * to update everywhere.
 */
type LogoMarkProps = {
  size?: number;
  className?: string;
  /** Accessible label; defaults to "Yumz". */
  label?: string;
};

export function LogoMark({
  size = 40,
  className = "",
  label = "Yumz",
}: LogoMarkProps) {
  return (
    <img
      src="/yumz-icon.png"
      alt={label}
      width={size}
      height={size}
      decoding="async"
      className={cn("inline-block select-none", className)}
      style={{ width: size, height: size }}
      draggable={false}
    />
  );
}
