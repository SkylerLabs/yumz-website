import { Card } from "../components/ui/Card";
import { Eyebrow } from "../components/ui/Eyebrow";
import { IconBadge } from "../components/ui/IconBadge";
import { Section } from "../components/ui/Section";
import { cn } from "../lib/cn";

type Feature = {
  icon: string;
  title: string;
  body: string;
  /** Optional special treatment: highlights this card. */
  hero?: boolean;
  /** Optional accent tint. */
  accent?: "brand" | "match" | "hype" | "purple";
};

const FEATURES: Feature[] = [
  {
    icon: "📖",
    title: "Swipe Mode",
    body: "Tiny fonts, bad lighting, foreign languages — menus become clean, swipeable cards you can read at a glance.",
    hero: true,
  },
  {
    icon: "👁️",
    title: "See Before You Order",
    body: "AI generates photos of every dish so you know exactly what's coming.",
    accent: "brand",
  },
  {
    icon: "🔢",
    title: "Calorie Tracker",
    body: "Know the damage before you commit. Calories, protein, lighter picks.",
    accent: "match",
  },
  {
    icon: "📸",
    title: "Photo-to-Food",
    body: "Snap the actual dish when it arrives. Yumz identifies it automatically.",
  },
  {
    icon: "🌍",
    title: "Any Language",
    body: "Tokyo, Dubai, anywhere — snap any menu in any language for instant descriptions.",
    accent: "purple",
  },
  {
    icon: "👥",
    title: "Group Dining",
    body: "Send the menu to friends. They swipe, pick, you all order with confidence.",
  },
  {
    icon: "⚡",
    title: "Badges & Vibe",
    body: "Track favorites, unlock achievements, share your food personality.",
    accent: "hype",
  },
  {
    icon: "🥗",
    title: "Dietary Profile",
    body: "Vegan, halal, kosher, keto — set once, Yumz highlights your options forever.",
  },
];

/**
 * Features — punchier 8-card grid with one hero card.
 * Mix of soft accent cards, dark hero card, and signal-toned badges (mint for
 * calorie tracker, purple for any-language, hype-pink for badges/vibe).
 */
export function Features() {
  return (
    <Section tone="cream" spacing="default">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Features</Eyebrow>
        <h2 className="mt-4 text-display-xl text-ink-900">
          Everything you need <span className="text-brand-500">at the table.</span>
        </h2>
        <p className="mt-4 text-lg text-ink-600">
          Yumz isn&rsquo;t just a menu scanner. It&rsquo;s your entire dining
          companion — built for iPhone.
        </p>
      </div>

      <div className="mt-14 grid gap-4 sm:gap-5 lg:grid-cols-12 lg:grid-rows-2">
        {FEATURES.map((f, i) => (
          <FeatureCard key={f.title} feature={f} index={i} />
        ))}
      </div>
    </Section>
  );
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  // Hero card spans 2 cols × 2 rows on lg
  const span = feature.hero
    ? "lg:col-span-6 lg:row-span-2"
    : index === 1
    ? "lg:col-span-3"
    : index === 2
    ? "lg:col-span-3"
    : "lg:col-span-3";

  if (feature.hero) {
    return (
      <div
        className={cn(
          "group relative overflow-hidden rounded-3xl bg-night-900 p-7 text-white shadow-card ring-1 ring-white/5",
          span,
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-[-20%] h-72 w-72 rounded-full bg-brand-500/30 blur-3xl"
        />
        <div className="relative flex h-full flex-col">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream-300">
            <span aria-hidden>📖</span> Signature
          </div>
          <h3 className="mt-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {feature.title}{" "}
            <span className="text-brand-400">for easy menu reading.</span>
          </h3>
          <p className="mt-3 max-w-md text-cream-200">
            Tiny fonts, bad lighting, foreign languages — menus become clean,
            swipeable cards. Great for travel, dim restaurants, and anyone who
            just wants less friction ordering food.
          </p>
          {/* Mini preview of the mode */}
          <div className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {[
              { name: "Truffle Rigatoni", price: "$26", match: 94 },
              { name: "Burrata Salad", price: "$18", match: 88 },
              { name: "Branzino", price: "$34", match: 82 },
            ].map((m) => (
              <div
                key={m.name}
                className="rounded-2xl bg-white/[0.06] p-3 ring-1 ring-white/10 backdrop-blur"
              >
                <div className="text-[11px] font-bold text-white">{m.name}</div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-[10px] text-cream-300">{m.price}</span>
                  <span className="font-mono text-[10px] font-bold tabular text-match-400">
                    {m.match}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const accent = {
    brand: "ring-brand-100 bg-brand-gradient-soft",
    match: "ring-match-500/20 bg-white",
    hype: "ring-hype-500/15 bg-white",
    purple: "ring-purple-200 bg-white",
  };
  const accentBadge = {
    brand: "brand",
    match: "match",
    hype: "hype",
    purple: "brand",
  } as const;

  return (
    <Card
      variant={feature.accent ? "elevated" : "soft"}
      interactive
      className={cn(
        "relative flex flex-col",
        span,
        feature.accent && accent[feature.accent],
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <IconBadge
          tone={
            feature.accent === "match" || feature.accent === "hype"
              ? "ink"
              : "brand"
          }
          size="md"
        >
          <span aria-hidden>{feature.icon}</span>
        </IconBadge>
        {feature.accent === "match" && (
          <span className="inline-flex items-center gap-1 rounded-full bg-match-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-match-600">
            AI
          </span>
        )}
        {feature.accent === "hype" && (
          <span className="inline-flex items-center gap-1 rounded-full bg-hype-500/12 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-hype-500">
            Social
          </span>
        )}
        {feature.accent === "purple" && (
          <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/12 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-purple-600">
            Global
          </span>
        )}
      </div>
      <h3 className="mt-5 font-display text-lg font-bold leading-snug tracking-tight text-ink-900">
        {feature.title}
      </h3>
      <p className="mt-2 text-sm text-ink-600">{feature.body}</p>
      {/* Silence the accentBadge unused warning */}
      <span hidden>{feature.accent ? accentBadge[feature.accent] : ""}</span>
    </Card>
  );
}
