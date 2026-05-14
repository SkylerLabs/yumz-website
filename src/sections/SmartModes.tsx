import { useState } from "react";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Section } from "../components/ui/Section";
import { cn } from "../lib/cn";

type Mode = {
  id: string;
  icon: string;
  name: string;
  tagline: string;
  body: string;
  /** Tailwind utility for the gradient background */
  bg: string;
  /** Tailwind text color */
  text: string;
};

const MODES: Mode[] = [
  {
    id: "for-you",
    icon: "🎯",
    name: "For You",
    tagline: "Personalized · Smart",
    body: "Picks tuned to your taste history, dietary profile, and what's actually good on this menu.",
    bg: "bg-brand-gradient",
    text: "text-white",
  },
  {
    id: "gym",
    icon: "💪",
    name: "Gym Mode",
    tagline: "High protein · Bulk-friendly",
    body: "Highest-protein dishes float to the top. Sauces and sides get a macro readout. No surprises after the order.",
    bg: "bg-mesh-red",
    text: "text-white",
  },
  {
    id: "cut",
    icon: "✂️",
    name: "Cut Mode",
    tagline: "Low cal · Lean",
    body: "Lowest-calorie picks, lighter sauces, and smarter portion swaps — without sacrificing flavor.",
    bg: "bg-mesh-silver",
    text: "text-ink-900",
  },
  {
    id: "main",
    icon: "👑",
    name: "Main Character",
    tagline: "Show-stopper · Indulgent",
    body: "The dish you'd order if money wasn't a factor and the table was watching. Yumz finds the show-stopper.",
    bg: "bg-mesh-purple",
    text: "text-white",
  },
  {
    id: "sweet",
    icon: "🍰",
    name: "Sweet Skip",
    tagline: "Sugar off · Focus on",
    body: "Auto-hides desserts, sugary sauces, and sweetened drinks. Stay focused with one tap.",
    bg: "bg-mesh-pink",
    text: "text-white",
  },
  {
    id: "plant",
    icon: "🌱",
    name: "Plant Mode",
    tagline: "Vegan · Vegetarian",
    body: "Plant options highlighted, with allergen-safe sides cross-checked. Travel and feast without the guesswork.",
    bg: "bg-mesh-green",
    text: "text-white",
  },
  {
    id: "explore",
    icon: "🌍",
    name: "Explorer",
    tagline: "Local · Regional",
    body: "Local specialties, regional dishes, and the items the chef is known for — perfect for travel.",
    bg: "bg-mesh-blue",
    text: "text-white",
  },
];

/**
 * SmartModes — algorithmic "personas" the way Spotify shows AI playlists.
 * Each mode is a tile with its own gradient identity. Tapping reveals body
 * copy. The active tile lifts and glows. Carousel on mobile, grid on desktop.
 */
export function SmartModes() {
  const [active, setActive] = useState<string>("for-you");
  const activeMode = MODES.find((m) => m.id === active) ?? MODES[0];

  return (
    <Section tone="cream" spacing="default">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Smart modes</Eyebrow>
        <h2 className="mt-4 text-display-xl text-ink-900">
          Pick your algorithm.
        </h2>
        <p className="mt-4 text-lg text-ink-600">
          Yumz reorganizes the menu around your goal — not just a scan, a
          decision engine. Tap a mode to reshape every recommendation.
        </p>
      </div>

      {/* Tile grid (mobile: horizontal scroll; sm+: grid) */}
      <div className="mt-12 -mx-6 px-6 sm:mx-0 sm:px-0">
        <div className="flex gap-3 overflow-x-auto pb-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible md:grid-cols-4 lg:grid-cols-7">
          {MODES.map((m) => {
            const isActive = m.id === active;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setActive(m.id)}
                aria-pressed={isActive}
                className={cn(
                  "group relative shrink-0 overflow-hidden rounded-3xl p-4 text-left transition-all duration-450 ease-out-expo sm:p-5",
                  m.bg,
                  m.text,
                  "min-w-[160px] sm:min-w-0",
                  isActive
                    ? "shadow-glow ring-2 ring-white/40 scale-[1.02]"
                    : "shadow-card ring-1 ring-ink-900/5 hover:-translate-y-0.5 hover:shadow-cardHover",
                )}
              >
                {/* Subtle inner light */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/20 to-transparent opacity-50"
                />
                <div className="relative flex h-full flex-col">
                  <div className="text-3xl" aria-hidden>
                    {m.icon}
                  </div>
                  <div className="mt-8 font-display text-lg font-bold tracking-tight">
                    {m.name}
                  </div>
                  <div
                    className={cn(
                      "mt-1 text-[10px] font-medium uppercase tracking-[0.18em]",
                      m.text === "text-white" ? "text-white/70" : "text-ink-700/70",
                    )}
                  >
                    {m.tagline}
                  </div>
                </div>
                {isActive && (
                  <div className="absolute right-3 top-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-ink-900">
                      <span
                        aria-hidden
                        className="h-1 w-1 animate-pulse rounded-full bg-match-500"
                      />
                      Live
                    </span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active mode description */}
      <div className="mx-auto mt-8 max-w-2xl">
        <div className="relative overflow-hidden rounded-3xl bg-white p-6 text-center shadow-card ring-1 ring-ink-900/5 sm:p-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-2xl" aria-hidden>
              {activeMode.icon}
            </span>
            <span className="font-display text-2xl font-bold tracking-tight text-ink-900">
              {activeMode.name}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-match-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-match-600">
              <span aria-hidden>✨</span> AI ranked
            </span>
          </div>
          <p className="mt-3 text-base text-ink-700 sm:text-lg">
            {activeMode.body}
          </p>
        </div>
      </div>
    </Section>
  );
}
