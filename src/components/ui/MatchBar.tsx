import { cn } from "../../lib/cn";

type MatchBarProps = {
  /** 0–100 */
  value: number;
  className?: string;
  /** Compact (used inside cards) or default. */
  size?: "sm" | "md";
  showLabel?: boolean;
};

/**
 * MatchBar — animated mint-green confidence bar.
 * Communicates AI taste-match score on a dish or recommendation.
 */
export function MatchBar({
  value,
  className,
  size = "md",
  showLabel = true,
}: MatchBarProps) {
  const clamped = Math.max(0, Math.min(100, value));
  const h = size === "sm" ? "h-1" : "h-1.5";

  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-wider text-ink-500">
          <span>AI taste match</span>
          <span className="tabular text-match-600">{clamped}%</span>
        </div>
      )}
      <div
        className={cn(
          "mt-1.5 w-full overflow-hidden rounded-full bg-ink-900/[0.06]",
          h,
        )}
      >
        <div
          className="h-full rounded-full bg-match-bar shadow-glowMatch animate-matchFill"
          style={
            { ["--match" as string]: `${clamped}%`, width: 0 } as React.CSSProperties
          }
        />
      </div>
    </div>
  );
}
