import { cn } from "../lib/cn";

type Dish = {
  name: string;
  city: string;
  cal: number;
  tag: string;
  tagTone: "hype" | "match" | "white";
  img: string;
  match: number;
};

// Real Yumz AI-generated dish images, sourced from the canonical content
// pipeline (FLUX / Gemini food photography). 400x400 JPEGs in /public/dishes/.
const DISHES: Dish[] = [
  {
    name: "Filet Mignon · Blue Cheese Salad",
    city: "Paris",
    cal: 480,
    tag: "👑 Main",
    tagTone: "white",
    match: 96,
    img: "/dishes/filet-mignon-blue-cheese-salad.jpg",
  },
  {
    name: "Sesame Ahi Tuna Salad",
    city: "LA",
    cal: 340,
    tag: "💪 Gym Mode",
    tagTone: "white",
    match: 95,
    img: "/dishes/sesame-ahi-tuna-salad.jpg",
  },
  {
    name: "Thai Lime Prawn Soup",
    city: "Bangkok",
    cal: 290,
    tag: "💪 Gym Mode",
    tagTone: "white",
    match: 93,
    img: "/dishes/thai-lime-prawn-soup.jpg",
  },
  {
    name: "Bison Burger",
    city: "NYC",
    cal: 720,
    tag: "👑 Main",
    tagTone: "white",
    match: 92,
    img: "/dishes/bison-burger.jpg",
  },
  {
    name: "Boneless Wings",
    city: "Austin",
    cal: 580,
    tag: "🔥 Trending",
    tagTone: "hype",
    match: 91,
    img: "/dishes/boneless-wings.jpg",
  },
  {
    name: "Ancho Chile Shrimp Tacos",
    city: "Mexico City",
    cal: 360,
    tag: "🌍 Local",
    tagTone: "white",
    match: 90,
    img: "/dishes/ancho-chile-shrimp-tacos.jpg",
  },
  {
    name: "Spinach Artichoke Dip",
    city: "Chicago",
    cal: 320,
    tag: "✨ AI Pick",
    tagTone: "match",
    match: 89,
    img: "/dishes/spinach-artichoke-dip.jpg",
  },
  {
    name: "Chicken Florentine",
    city: "Florence",
    cal: 540,
    tag: "✨ AI Pick",
    tagTone: "match",
    match: 88,
    img: "/dishes/chicken-florentine.jpg",
  },
  {
    name: "Crunchy Onion Rings",
    city: "Dubai",
    cal: 410,
    tag: "🔥 Trending",
    tagTone: "hype",
    match: 87,
    img: "/dishes/crunchy-onion-rings.jpg",
  },
  {
    name: "Microbrew-Battered Halibut",
    city: "Seattle",
    cal: 640,
    tag: "🔥 Trending",
    tagTone: "hype",
    match: 84,
    img: "/dishes/microbrew-battered-halibut.jpg",
  },
];

/**
 * DishMarquee — oversized cinematic dish strip with AI overlays.
 * Edge-to-edge food photography, floating metadata, match scores, mood tags.
 * Continuous track loops at a slow pace; pauses on hover; respects reduced motion.
 */
export function DishMarquee() {
  return (
    <section className="relative overflow-hidden bg-cream-50 py-10 sm:py-14">
      <div className="mask-fade-x">
        <div className="group flex w-[200%] animate-marquee gap-4 motion-reduce:animate-none [animation-play-state:running] hover:[animation-play-state:paused] sm:gap-5">
          {[...DISHES, ...DISHES].map((d, i) => (
            <DishCard key={`${d.name}-${i}`} dish={d} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DishCard({ dish }: { dish: Dish }) {
  const tagStyles = {
    hype: "bg-hype-500 text-white shadow-glowHype",
    match: "bg-match-500 text-night-950 shadow-glowMatch",
    white: "bg-white/95 text-ink-900 backdrop-blur shadow-card",
  }[dish.tagTone];

  return (
    <article className="group/card relative shrink-0 overflow-hidden rounded-[28px] bg-white shadow-card ring-1 ring-ink-900/5 transition duration-450 ease-out-expo hover:-translate-y-1 hover:shadow-cardHover">
      <div className="relative h-72 w-72 sm:h-80 sm:w-80">
        <img
          src={dish.img}
          alt={dish.name}
          loading="lazy"
          decoding="async"
          width={320}
          height={320}
          className="h-full w-full object-cover transition duration-700 group-hover/card:scale-[1.04]"
        />
        {/* Dark gradient bottom for legibility */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-night-950/85 via-night-950/40 to-transparent"
        />

        {/* Top-left tag */}
        <div className="absolute left-3 top-3">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold tracking-tight",
              tagStyles,
            )}
          >
            {dish.tag}
          </span>
        </div>

        {/* Top-right calorie pill */}
        <div className="absolute right-3 top-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-night-950/70 px-2.5 py-1 text-[11px] font-semibold tabular text-white backdrop-blur">
            {dish.cal} cal
          </span>
        </div>

        {/* Bottom-overlay info */}
        <div className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-2">
          <div className="min-w-0">
            <div className="font-display text-lg font-bold leading-tight tracking-tight text-white">
              {dish.name}
            </div>
            <div className="mt-0.5 text-[11px] font-medium text-white/80">
              {dish.city}
            </div>
          </div>
          {/* Match badge */}
          <div className="shrink-0 rounded-2xl bg-white/95 px-2 py-1 backdrop-blur">
            <div className="text-[8px] font-bold uppercase tracking-wider text-match-600">
              Match
            </div>
            <div className="font-mono text-sm font-bold tabular leading-none text-night-950">
              {dish.match}%
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
