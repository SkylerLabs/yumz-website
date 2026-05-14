import { Eyebrow } from "../components/ui/Eyebrow";

const STEPS = [
  {
    n: "01",
    icon: "📸",
    title: "Snap the menu",
    body: "Paper menu, digital screen, chalkboard — doesn't matter. Point your camera and Yumz reads everything instantly.",
  },
  {
    n: "02",
    icon: "🧠",
    title: "AI does the work",
    body: "Every dish gets decoded: photo, calories, allergens, dietary tags, and a personalized match score.",
  },
  {
    n: "03",
    icon: "🍽️",
    title: "Order with confidence",
    body: "Tap any dish to see the full breakdown. Save your verdict. Build your food vibe as you go.",
  },
];

/**
 * HowItWorks — dark, OLED-warm section with orange glow.
 *
 * The "AI-native" section. Dark background with brand glow gives the algorithm
 * energy the brief asks for. Numbered steps with bold mono numerals + emoji
 * icons + glass step-cards.
 */
export function HowItWorks() {
  return (
    <section
      id="how"
      className="relative overflow-hidden bg-oled-warm py-20 sm:py-28 lg:py-32"
    >
      {/* Aurora behind */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[40rem] w-[60rem] -translate-x-1/2 bg-aurora-orange blur-3xl animate-aurora"
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

      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow
            tone="ink"
            dot={false}
            className="!bg-white/10 !text-cream-100 !ring-white/15"
          >
            <span aria-hidden>🧠</span> How it works
          </Eyebrow>
          <h2 className="mt-5 font-display text-display-xl text-white">
            Three taps to <span className="text-aurora">food confidence.</span>
          </h2>
          <p className="mt-4 text-lg text-cream-300">
            No signup walls. No credit card. Just point, snap, and eat smarter.
          </p>
        </div>

        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="group relative overflow-hidden rounded-3xl bg-white/[0.04] p-6 ring-1 ring-white/10 backdrop-blur transition duration-450 ease-out-expo hover:-translate-y-1 hover:bg-white/[0.07] hover:shadow-glow"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[11px] font-semibold tracking-wider text-brand-400">
                  Step {s.n}
                </span>
                <span aria-hidden className="text-3xl">
                  {s.icon}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-cream-300">{s.body}</p>

              {/* Hover glow underline */}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-0 transition duration-450 group-hover:opacity-100"
              />
            </li>
          ))}
        </ol>

        {/* Bottom AI bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[12px] text-cream-300">
          <span className="inline-flex items-center gap-2">
            <span
              aria-hidden
              className="h-1.5 w-1.5 animate-pulse rounded-full bg-match-400"
            />
            Real-time menu OCR
          </span>
          <span className="inline-flex items-center gap-2">
            <span
              aria-hidden
              className="h-1.5 w-1.5 animate-pulse rounded-full bg-match-400"
            />
            Multi-language
          </span>
          <span className="inline-flex items-center gap-2">
            <span
              aria-hidden
              className="h-1.5 w-1.5 animate-pulse rounded-full bg-match-400"
            />
            Allergen-safe
          </span>
          <span className="inline-flex items-center gap-2">
            <span
              aria-hidden
              className="h-1.5 w-1.5 animate-pulse rounded-full bg-match-400"
            />
            Personalized in seconds
          </span>
        </div>
      </div>
    </section>
  );
}
