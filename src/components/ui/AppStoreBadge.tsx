import { cn } from "../../lib/cn";

type AppStoreBadgeProps = {
  href: string;
  className?: string;
  size?: "md" | "lg";
};

/**
 * AppStoreBadge — App Store download CTA.
 *
 * Visual approximation of Apple's official "Download on the App Store" badge.
 * For App Store submission compliance, swap with the official asset from
 * Apple's marketing tools (https://tools.applemediaservices.com/app-store).
 */
export function AppStoreBadge({ href, className, size = "lg" }: AppStoreBadgeProps) {
  const sizes = {
    md: "h-12 px-4 gap-2",
    lg: "h-14 px-5 gap-2.5",
  }[size];

  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center rounded-2xl bg-night-950 text-white shadow-card ring-1 ring-white/10 transition duration-250 ease-out-expo hover:-translate-y-0.5 hover:ring-white/20",
        sizes,
        className,
      )}
      aria-label="Download Yumz on the App Store"
    >
      <AppleLogo />
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] font-medium tracking-wider opacity-80">
          Download on the
        </span>
        <span className="font-display text-[19px] font-semibold tracking-tight">
          App Store
        </span>
      </span>
    </a>
  );
}

function AppleLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="26"
      viewBox="0 0 24 28"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.665 21.338c-.36.83-.79 1.59-1.29 2.28-.68.94-1.24 1.59-1.66 1.95-.66.61-1.36.92-2.12.94-.55 0-1.21-.16-1.97-.48-.77-.32-1.47-.48-2.12-.48-.68 0-1.4.16-2.16.48-.76.32-1.37.49-1.84.5-.74.03-1.46-.29-2.16-.96-.46-.39-1.04-1.06-1.74-2-.75-1.01-1.37-2.18-1.85-3.51C.32 18.6.07 17.18.07 15.81c0-1.57.34-2.92 1.02-4.06.53-.91 1.24-1.63 2.13-2.16.89-.53 1.85-.8 2.88-.82.59 0 1.36.18 2.32.54.95.36 1.57.55 1.84.55.2 0 .89-.21 2.07-.64 1.11-.4 2.05-.56 2.83-.49 2.1.17 3.68 1 4.73 2.51-1.88 1.14-2.81 2.74-2.79 4.79.02 1.6.6 2.93 1.74 3.99.52.49 1.1.87 1.74 1.13-.14.4-.29.79-.45 1.16zM15.13.46c0 1.18-.43 2.28-1.29 3.3-1.04 1.21-2.29 1.91-3.65 1.79-.02-.14-.03-.29-.03-.45 0-1.13.49-2.34 1.36-3.33.43-.5.99-.92 1.66-1.25.67-.33 1.31-.51 1.91-.55.02.16.03.32.03.49z"/>
    </svg>
  );
}
