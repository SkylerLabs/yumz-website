import { type HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type PhoneMockupProps = HTMLAttributes<HTMLDivElement> & {
  /** Visual size scale. */
  size?: "sm" | "md" | "lg" | "xl";
  /** Add a warm orange glow behind the device. */
  glow?: boolean;
  /** Children render inside the device screen. */
  children: React.ReactNode;
};

/**
 * PhoneMockup — premium iPhone device frame with Dynamic Island.
 *
 * Used in the Hero (xl), Real Product gallery (md), and anywhere the app UI
 * needs to be presented in context. The screen is a relative container — place
 * absolute UI inside as needed.
 */
export function PhoneMockup({
  size = "md",
  glow = false,
  className,
  children,
  ...rest
}: PhoneMockupProps) {
  const dims = {
    sm: { w: "w-[200px]", h: "h-[420px]", radius: "rounded-[36px]", inner: "rounded-[30px]" },
    md: { w: "w-[260px]", h: "h-[540px]", radius: "rounded-[44px]", inner: "rounded-[38px]" },
    lg: { w: "w-[320px]", h: "h-[660px]", radius: "rounded-[52px]", inner: "rounded-[46px]" },
    xl: { w: "w-[360px]", h: "h-[740px]", radius: "rounded-[58px]", inner: "rounded-[52px]" },
  }[size];

  return (
    <div
      className={cn(
        "relative",
        glow && "drop-shadow-[0_30px_60px_rgba(242,107,31,0.45)]",
        className,
      )}
      {...rest}
    >
      {/* Aurora behind the device */}
      {glow && (
        <div
          aria-hidden
          className="absolute inset-0 -z-10 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 h-[110%] w-[120%] rounded-full bg-aurora-orange blur-2xl animate-aurora"
        />
      )}

      {/* Outer device — titanium-like dark with a subtle highlight */}
      <div
        className={cn(
          "relative bg-night-950 p-[6px] shadow-device ring-1 ring-white/5",
          dims.w,
          dims.h,
          dims.radius,
        )}
      >
        {/* Screen */}
        <div
          className={cn(
            "relative h-full w-full overflow-hidden bg-cream-50",
            dims.inner,
          )}
        >
          {/* Dynamic Island */}
          <div className="absolute left-1/2 top-2 z-30 h-[26px] w-[88px] -translate-x-1/2 rounded-full bg-night-950" />
          {/* Top status — subtle, premium */}
          <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-7 pt-2.5 text-[10px] font-semibold text-night-950">
            <span className="tabular">9:41</span>
            <span className="flex items-center gap-1.5">
              <span aria-hidden>􀙇</span>
              <span aria-hidden>􀛨</span>
              <span aria-hidden>􀋨</span>
            </span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
