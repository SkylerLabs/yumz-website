import { AppStoreBadge } from "../components/ui/AppStoreBadge";
import { Button } from "../components/ui/Button";
import { Eyebrow } from "../components/ui/Eyebrow";
import { FloatingChip } from "../components/ui/FloatingChip";
import { MatchBar } from "../components/ui/MatchBar";
import { PhoneMockup } from "../components/ui/PhoneMockup";
import { Pill } from "../components/ui/Pill";

/**
 * Hero — asymmetric, iPhone-first.
 *
 * LEFT: punchy headline, value prop, App Store + Web CTAs, Android indicator,
 * social-proof trust row.
 *
 * RIGHT: large iPhone mockup with a live-feeling app scene (For-You mode,
 * AI-Picked featured dish with match bar, second recommendation). Floating
 * AI chips orbit the device — match score, trending signal, allergen scan,
 * calorie readout. Warm aurora glow sits behind everything.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-warm-fade">
      {/* Soft brand-tinted backdrop blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-[-10%] -z-0 h-[40rem] w-[40rem] rounded-full bg-brand-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-[-10%] -z-0 h-[30rem] w-[30rem] rounded-full bg-hype-400/15 blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pb-28 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* LEFT — copy + CTAs */}
          <div className="text-center lg:text-left">
            <Eyebrow>
              <span aria-hidden>🍕</span> AI menu intelligence · iOS · Web
            </Eyebrow>

            <h1 className="mt-6 font-display text-display-2xl text-ink-900">
              Snap it. <span className="text-brand-500">Eat it.</span>
            </h1>

            <p className="mt-5 max-w-xl text-balance text-lg leading-relaxed text-ink-700 sm:text-xl lg:mx-0 mx-auto">
              Point your camera at any menu and get{" "}
              <strong className="font-semibold text-ink-900">
                AI dish photos, calories, allergen flags, and personalized picks
              </strong>
              — the second you snap.
            </p>

            {/* Platform CTAs */}
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:items-center sm:gap-3 lg:items-start">
              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                <AppStoreBadge href="https://app.yumz.social" size="lg" />
                <Button
                  href="https://app.yumz.social"
                  variant="secondary"
                  size="lg"
                  trailingIcon={<span aria-hidden>→</span>}
                >
                  Use Web Version
                </Button>
              </div>
              <div className="flex justify-center lg:justify-start">
                <Pill tone="outline" size="sm" className="gap-1.5">
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 animate-pulse rounded-full bg-match-500"
                  />
                  Android coming soon
                </Pill>
              </div>
            </div>

            {/* Trust / social-proof row */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
              <TrustTile icon="✨" label="AI-powered" />
              <TrustTile icon="🔒" label="Privacy-first" />
              <TrustTile icon="🥜" label="Allergen-safe" />
              <TrustTile icon="🌍" label="Any language" />
            </div>
          </div>

          {/* RIGHT — iPhone scene */}
          <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none">
            <HeroPhone />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustTile({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-700">
      <span aria-hidden>{icon}</span>
      {label}
    </div>
  );
}

/* ---------------------------- iPhone scene --------------------------- */

function HeroPhone() {
  return (
    <div className="relative">
      <PhoneMockup size="lg" glow>
        <HeroAppScene />
      </PhoneMockup>

      {/* Floating chips — orbiting AI signals */}
      <FloatingChip
        tone="match"
        float="a"
        className="absolute -left-2 top-16 sm:-left-8"
      >
        <span aria-hidden>✓</span> Match 94%
      </FloatingChip>

      <FloatingChip
        tone="hype"
        float="b"
        className="absolute -right-3 top-32 sm:-right-8 sm:top-28"
      >
        <span aria-hidden>🔥</span> Trending in Dubai
      </FloatingChip>

      <FloatingChip
        tone="white"
        float="c"
        className="absolute -left-4 bottom-40 sm:-left-10"
      >
        <span aria-hidden>🥜</span> Allergens scanned
      </FloatingChip>

      <FloatingChip
        tone="glass"
        float="a"
        className="absolute -right-3 bottom-20 sm:-right-10"
      >
        <span className="tabular">680</span> cal
      </FloatingChip>
    </div>
  );
}

/** What's "running" inside the iPhone in the hero. */
function HeroAppScene() {
  return (
    <div className="flex h-full flex-col bg-cream-50">
      {/* Header */}
      <div className="px-5 pt-12 pb-3">
        <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-400">
          Yumz · Bistro Santorini
        </div>
        <div className="mt-1.5 font-display text-[22px] font-bold leading-tight tracking-tight text-ink-900">
          Picks for you
        </div>
      </div>

      {/* Mode row */}
      <div className="px-5 pb-3">
        <div className="flex gap-1.5 overflow-x-hidden">
          <ModePill icon="🎯" label="For You" active />
          <ModePill icon="💪" label="Gym" />
          <ModePill icon="✂️" label="Cut" />
          <ModePill icon="👑" label="Main" />
        </div>
      </div>

      {/* Featured dish */}
      <div className="px-4">
        <div className="overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-ink-900/[0.05]">
          <div className="relative h-44 w-full overflow-hidden">
            <img
              src="/dishes/sesame-ahi-tuna-salad.jpg"
              alt="Sesame Ahi Tuna Salad"
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
            {/* Overlays */}
            <div className="absolute left-3 top-3">
              <span className="inline-flex items-center gap-1 rounded-full bg-match-500 px-2 py-0.5 text-[10px] font-bold tracking-tight text-night-950 shadow-glowMatch">
                <span aria-hidden>✨</span> AI Pick
              </span>
            </div>
            <div className="absolute right-3 top-3">
              <span className="inline-flex items-center gap-1 rounded-full bg-night-950/80 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
                340 cal
              </span>
            </div>
            <div className="absolute right-3 bottom-3">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 text-[10px] font-semibold text-ink-900 shadow-card">
                <span aria-hidden>🥜</span> No nuts
              </span>
            </div>
          </div>

          <div className="space-y-2 px-3.5 py-3">
            <div className="flex items-center justify-between">
              <div className="font-display text-[15px] font-bold leading-tight text-ink-900">
                Sesame Ahi Tuna Salad
              </div>
              <div className="font-mono text-[11px] font-semibold tabular text-match-600">
                95%
              </div>
            </div>
            <div className="text-[11px] text-ink-500">
              Seared ahi · sesame crust · ginger lime
            </div>
            <MatchBar value={95} size="sm" showLabel={false} />
          </div>
        </div>
      </div>

      {/* Secondary dish (compact) */}
      <div className="mt-3 px-4">
        <div className="flex items-center gap-3 rounded-2xl bg-white p-2.5 shadow-card ring-1 ring-ink-900/[0.05]">
          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl">
            <img
              src="/dishes/thai-lime-prawn-soup.jpg"
              alt="Thai Lime Prawn Soup"
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-[12px] font-bold text-ink-900">
              Thai Lime Prawn Soup
            </div>
            <div className="truncate text-[10px] text-ink-500">
              Light · 12g protein · gluten-free
            </div>
          </div>
          <div className="text-right">
            <div className="font-mono text-[10px] font-semibold tabular text-match-600">
              93%
            </div>
            <div className="text-[9px] text-ink-400">290 cal</div>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="mt-auto border-t border-ink-900/[0.06] bg-white px-2 pb-3 pt-2">
        <ul className="flex justify-between">
          {[
            { icon: "❤️", label: "Faves", active: false },
            { icon: "📍", label: "Spots" },
            { icon: "📸", label: "Snap", center: true },
            { icon: "🎁", label: "Wrap" },
            { icon: "👤", label: "Vibe" },
          ].map((it) => (
            <li
              key={it.label}
              className={
                it.center
                  ? "flex flex-1 flex-col items-center gap-0.5"
                  : it.active
                  ? "flex flex-1 flex-col items-center gap-0.5 text-brand-600"
                  : "flex flex-1 flex-col items-center gap-0.5 text-ink-400"
              }
            >
              {it.center ? (
                <div className="-mt-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-base shadow-soft">
                  <span aria-hidden>{it.icon}</span>
                </div>
              ) : (
                <span aria-hidden className="text-base">
                  {it.icon}
                </span>
              )}
              <span className="text-[9px] font-semibold">{it.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ModePill({
  icon,
  label,
  active = false,
}: {
  icon: string;
  label: string;
  active?: boolean;
}) {
  return (
    <span
      className={
        active
          ? "inline-flex items-center gap-1 rounded-full bg-night-950 px-2.5 py-1 text-[11px] font-semibold text-white"
          : "inline-flex items-center gap-1 rounded-full bg-cream-100 px-2.5 py-1 text-[11px] font-medium text-ink-700"
      }
    >
      <span aria-hidden>{icon}</span> {label}
    </span>
  );
}
