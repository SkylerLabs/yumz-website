import { AppStoreBadge } from "../components/ui/AppStoreBadge";
import { Button } from "../components/ui/Button";
import { Pill } from "../components/ui/Pill";

/**
 * FinalCTA — high-energy close.
 * Dark OLED-warm background with brand glow and the same platform CTAs
 * as the hero (App Store primary, Web secondary, Android pill).
 */
export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-oled-warm py-24 sm:py-32 lg:py-40">
      {/* Aurora */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 bg-aurora-orange blur-3xl animate-aurora"
      />
      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto w-full max-w-4xl px-6 text-center sm:px-8 lg:px-12">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream-100 ring-1 ring-white/15">
          <span
            aria-hidden
            className="h-1.5 w-1.5 animate-pulse rounded-full bg-match-400"
          />
          Available now
        </div>
        <h2 className="mt-6 font-display text-display-2xl text-white">
          Stop guessing. <br />
          <span className="text-aurora">Start eating.</span>
        </h2>
        <p className="mt-5 text-lg text-cream-200 sm:text-xl">
          Your next great meal is one snap away. Download Yumz and let the
          algorithm decode the menu.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <AppStoreBadge href="https://yumz.social/app/" size="lg" />
            <Button
              href="https://yumz.social/app/"
              variant="inverse"
              size="lg"
              trailingIcon={<span aria-hidden>→</span>}
            >
              Use Web Version
            </Button>
          </div>
          <Pill
            tone="outline"
            size="sm"
            className="!bg-white/10 !text-cream-100 !ring-white/15"
          >
            <span
              aria-hidden
              className="h-1.5 w-1.5 animate-pulse rounded-full bg-match-400"
            />
            Android coming soon
          </Pill>
        </div>
      </div>
    </section>
  );
}
