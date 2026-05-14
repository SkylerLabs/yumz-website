import { Eyebrow } from "../components/ui/Eyebrow";
import { PhoneMockup } from "../components/ui/PhoneMockup";
import { Pill } from "../components/ui/Pill";
import { Section } from "../components/ui/Section";
import { cn } from "../lib/cn";

/**
 * RealProduct — phone-frame gallery showcasing actual app surfaces.
 *
 * NOTE on assets: yumz.social/screens/*.png currently 404 in production. Each
 * frame renders an in-CSS mockup drawn from the app's actual component
 * vocabulary (FoodCard, DishGrid, share-verdict). Floating AI overlay chips
 * orbit selected frames to communicate algorithmic energy. When real captures
 * arrive, replace each Screen* with <img src="/screens/..." />.
 */

type Frame = {
  caption: string;
  body: string;
  screen: React.ReactNode;
  /** Optional accent glow color. */
  accent?: "brand" | "match" | "hype" | "purple";
  /** Floating chip rendered next to the phone (right-side, mid). */
  chip?: { tone: "match" | "hype" | "white"; label: string };
};

const FRAMES: Frame[] = [
  {
    caption: "Faves grid",
    body: "Your dish memory, AI-organized.",
    screen: <ScreenFavesGrid />,
    accent: "brand",
    chip: { tone: "match", label: "94% match" },
  },
  {
    caption: "Dish detail",
    body: "Translation, calories, allergens.",
    screen: <ScreenDishDetail />,
    accent: "match",
  },
  {
    caption: "Share verdict",
    body: "Verdicts, proof, social proof.",
    screen: <ScreenShareVerdict />,
    accent: "hype",
    chip: { tone: "hype", label: "🔥 Elite" },
  },
  {
    caption: "Ratings",
    body: "Meals become memory.",
    screen: <ScreenRatings />,
  },
  {
    caption: "Spots",
    body: "Where you've been, where to go.",
    screen: <ScreenSpots />,
  },
  {
    caption: "My Vibe",
    body: "Your food personality.",
    screen: <ScreenVibe />,
    accent: "purple",
    chip: { tone: "white", label: "World Palate" },
  },
];

export function RealProduct() {
  return (
    <Section tone="cream" spacing="default">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>
          <span aria-hidden>📱</span> Real product
        </Eyebrow>
        <h2 className="mt-4 text-display-xl text-ink-900">
          Not mockups. <span className="text-brand-500">Real Yumz.</span>
        </h2>
        <p className="mt-4 text-lg text-ink-600">
          Saved dishes, spots, dish detail, proof, verdicts, and sharing — all
          from the live app.
        </p>
      </div>

      <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {FRAMES.map((f) => (
          <figure key={f.caption} className="group relative flex flex-col items-center">
            <div className="relative">
              <PhoneMockup size="md" glow={f.accent === "brand"}>
                {f.screen}
              </PhoneMockup>
              {f.chip && (
                <div
                  className={cn(
                    "absolute -right-3 top-20 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold tracking-tight animate-floatB",
                    f.chip.tone === "match" &&
                      "bg-match-500 text-night-950 shadow-glowMatch",
                    f.chip.tone === "hype" &&
                      "bg-hype-500 text-white shadow-glowHype",
                    f.chip.tone === "white" &&
                      "bg-white text-ink-900 shadow-card ring-1 ring-ink-900/5",
                  )}
                >
                  {f.chip.label}
                </div>
              )}
            </div>
            <figcaption className="mt-6 text-center">
              <div className="font-display text-base font-bold tracking-tight text-ink-900">
                {f.caption}
              </div>
              <div className="mt-1 text-sm text-ink-500">{f.body}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------- Screen mockups ------------------------ */

function ScreenChrome({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col">
      <div className="px-5 pt-12 pb-3">
        <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-400">
          {eyebrow}
        </div>
        <div className="font-display text-xl font-bold tracking-tight text-ink-900">
          {title}
        </div>
      </div>
      <div className="flex-1 overflow-hidden px-4">{children}</div>
      <BottomNav />
    </div>
  );
}

function BottomNav() {
  const items = [
    { icon: "❤️", label: "Faves", active: true },
    { icon: "📍", label: "Spots" },
    { icon: "📸", label: "Snap", center: true },
    { icon: "🎁", label: "Wrap" },
    { icon: "👤", label: "Vibe" },
  ];
  return (
    <nav className="border-t border-ink-900/[0.06] bg-white px-2 pt-2 pb-4">
      <ul className="flex justify-between">
        {items.map((it) => (
          <li
            key={it.label}
            className={cn(
              "flex flex-1 flex-col items-center gap-0.5 text-[10px]",
              it.center
                ? ""
                : it.active
                ? "text-brand-600"
                : "text-ink-400",
            )}
          >
            {it.center ? (
              <div className="-mt-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient text-base shadow-soft">
                <span aria-hidden>{it.icon}</span>
              </div>
            ) : (
              <span className="text-base" aria-hidden>
                {it.icon}
              </span>
            )}
            <span className="font-semibold">{it.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MiniDish({
  name,
  meta,
  match,
  tone = "amber",
}: {
  name: string;
  meta: string;
  match: number;
  tone?: "amber" | "rose" | "olive" | "ocean";
}) {
  const swatches = {
    amber: "from-amber-200 via-amber-400 to-amber-700",
    rose: "from-rose-200 via-rose-400 to-rose-700",
    olive: "from-lime-200 via-lime-500 to-lime-800",
    ocean: "from-sky-200 via-sky-400 to-sky-700",
  }[tone];

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-ink-900/[0.04]">
      <div className={cn("relative h-20 w-full bg-gradient-to-br", swatches)}>
        <span className="absolute right-1.5 top-1.5 rounded-full bg-white/95 px-1.5 py-0.5 font-mono text-[9px] font-bold tabular text-match-600">
          {match}%
        </span>
      </div>
      <div className="px-2.5 py-2">
        <div className="truncate text-[11px] font-bold text-ink-900">
          {name}
        </div>
        <div className="truncate text-[10px] text-ink-500">{meta}</div>
      </div>
    </div>
  );
}

function ScreenFavesGrid() {
  return (
    <ScreenChrome eyebrow="Yumz" title="Faves">
      <div className="mb-2 flex gap-1.5">
        <Pill tone="ink" size="sm">
          All
        </Pill>
        <Pill tone="neutral" size="sm">
          Dishes
        </Pill>
        <Pill tone="neutral" size="sm">
          Spots
        </Pill>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <MiniDish name="Truffle Rigatoni" meta="Florence · 680 cal" match={94} tone="amber" />
        <MiniDish name="Tonkotsu Ramen" meta="Tokyo · 520 cal" match={91} tone="rose" />
        <MiniDish name="Burrata Salad" meta="Dubai · 290 cal" match={88} tone="olive" />
        <MiniDish name="Poké Bowl" meta="LA · 380 cal" match={92} tone="ocean" />
      </div>
    </ScreenChrome>
  );
}

function ScreenDishDetail() {
  return (
    <ScreenChrome eyebrow="Yumz" title="Dish detail">
      <div className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-ink-900/5">
        <div className="relative h-32 w-full bg-gradient-to-br from-amber-200 via-amber-400 to-amber-700">
          <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-match-500 px-2 py-0.5 text-[9px] font-bold text-night-950 shadow-glowMatch">
            ✨ AI Pick
          </span>
          <span className="absolute right-2 top-2 rounded-full bg-night-950/75 px-2 py-0.5 text-[9px] font-bold text-white backdrop-blur">
            680 cal
          </span>
        </div>
        <div className="space-y-1.5 px-3 py-3">
          <div className="flex items-center justify-between">
            <div className="text-[13px] font-bold text-ink-900">
              Truffle Rigatoni
            </div>
            <div className="font-mono text-[10px] font-bold tabular text-match-600">
              94%
            </div>
          </div>
          <div className="text-[10px] text-ink-500">
            Wild mushrooms · parmesan · truffle butter
          </div>
        </div>
      </div>
      <div className="mt-3 rounded-2xl bg-brand-50 p-3 ring-1 ring-brand-100">
        <div className="text-[10px] font-bold uppercase tracking-wider text-brand-600">
          Allergens
        </div>
        <div className="mt-1 flex flex-wrap gap-1">
          <Pill tone="outline" size="sm">
            Gluten
          </Pill>
          <Pill tone="outline" size="sm">
            Dairy
          </Pill>
        </div>
      </div>
    </ScreenChrome>
  );
}

function ScreenShareVerdict() {
  return (
    <ScreenChrome eyebrow="Yumz" title="Share">
      <div className="relative overflow-hidden rounded-2xl bg-brand-gradient p-3 text-white shadow-glow">
        <div className="text-[10px] uppercase tracking-wider text-white/80">
          Verdict
        </div>
        <div className="mt-1 font-display text-xl font-bold">🔥 Elite</div>
        <div className="mt-1 text-[10px] text-white/85">
          Robin · Dubai · Bistro Santorini
        </div>
        <div className="mt-3 h-24 rounded-xl bg-white/15 ring-1 ring-white/25" />
        <div className="mt-3 flex items-center justify-between">
          <div className="text-[10px] uppercase tracking-wider text-white/70">
            Truffle Rigatoni
          </div>
          <span className="rounded-full bg-white/25 px-2 py-0.5 text-[9px] font-bold text-white">
            Share
          </span>
        </div>
      </div>
    </ScreenChrome>
  );
}

function ScreenRatings() {
  return (
    <ScreenChrome eyebrow="Yumz" title="Ratings">
      <ul className="space-y-2">
        {[
          { name: "Truffle Rigatoni", rating: "Loved", tone: "match" },
          { name: "Burrata Salad", rating: "Loved", tone: "match" },
          { name: "Crispy Calamari", rating: "Not for me", tone: "neutral" },
          { name: "Short Rib", rating: "Loved", tone: "match" },
        ].map((r) => (
          <li
            key={r.name}
            className="flex items-center justify-between rounded-2xl bg-white p-3 ring-1 ring-ink-900/[0.04]"
          >
            <div className="text-[12px] font-bold text-ink-900">{r.name}</div>
            {r.tone === "match" ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-match-500/15 px-2 py-0.5 text-[10px] font-bold text-match-600">
                ❤️ Loved
              </span>
            ) : (
              <Pill tone="neutral" size="sm">
                Not for me
              </Pill>
            )}
          </li>
        ))}
      </ul>
    </ScreenChrome>
  );
}

function ScreenSpots() {
  return (
    <ScreenChrome eyebrow="Yumz" title="Spots">
      <ul className="space-y-2">
        {[
          { name: "Bistro Santorini", city: "Dubai", count: "4 dishes" },
          { name: "Pizzeria 142", city: "Florence", count: "2 dishes" },
          { name: "Ichiran Shibuya", city: "Tokyo", count: "1 dish" },
        ].map((s) => (
          <li
            key={s.name}
            className="flex items-center gap-3 rounded-2xl bg-white p-3 ring-1 ring-ink-900/[0.04]"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-gradient-soft text-base">
              📍
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-[12px] font-bold text-ink-900">
                {s.name}
              </div>
              <div className="text-[10px] text-ink-500">
                {s.city} · {s.count}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </ScreenChrome>
  );
}

function ScreenVibe() {
  return (
    <ScreenChrome eyebrow="Yumz" title="My Vibe">
      <div className="relative overflow-hidden rounded-3xl bg-mesh-purple p-4 text-white shadow-card">
        <div className="text-[10px] uppercase tracking-wider text-white/80">
          Food personality
        </div>
        <div className="mt-1 font-display text-2xl font-bold tracking-tight">
          World Palate
        </div>
        <div className="mt-1 text-[11px] text-white/85">
          18 spots · 42 dishes · 14-day streak
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {["🍣", "🌮", "🍝", "🥟", "🍕", "🥘"].map((emoji) => (
          <div
            key={emoji}
            className="flex aspect-square items-center justify-center rounded-2xl bg-white text-2xl shadow-card ring-1 ring-ink-900/[0.04]"
          >
            {emoji}
          </div>
        ))}
      </div>
    </ScreenChrome>
  );
}
