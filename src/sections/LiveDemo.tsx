import { Card } from "../components/ui/Card";
import { Eyebrow } from "../components/ui/Eyebrow";
import { MatchBar } from "../components/ui/MatchBar";
import { Pill } from "../components/ui/Pill";
import { Section } from "../components/ui/Section";

const MENU = [
  {
    name: "Whipped Feta",
    desc: "Creamy feta, hot honey, oregano, grilled sourdough",
    price: "$14",
  },
  {
    name: "Crispy Calamari",
    desc: "Lemon aioli, charred chili, parsley salt",
    price: "$17",
  },
  {
    name: "Chicken Florentine",
    desc: "Pan-seared chicken, creamed spinach, parmesan, white wine",
    price: "$28",
    pick: true,
  },
  {
    name: "Branzino",
    desc: "Whole grilled seabass, capers, fennel, citrus oil",
    price: "$34",
  },
  {
    name: "Short Rib",
    desc: "12-hour braise, smoked potato purée, crispy shallots",
    price: "$38",
  },
];

/**
 * LiveDemo — dramatic AI transformation.
 * Left: raw menu (the kind users encounter)
 * Center: animated AI processing arrow with shimmer
 * Right: the same dish promoted to a "Yumz Pick" card with photo, calories,
 *        allergens, taste-match score.
 */
export function LiveDemo() {
  return (
    <Section tone="cream" spacing="default">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>
          <span aria-hidden>✨</span> Live demo
        </Eyebrow>
        <h2 className="mt-4 text-display-xl text-ink-900">
          Menus go in. <span className="text-brand-500">Recommendations come out.</span>
        </h2>
        <p className="mt-4 text-lg text-ink-600">
          A confusing restaurant menu becomes clear, visual, and actionable in
          seconds.
        </p>
      </div>

      <div className="relative mt-14 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
        {/* Sample menu */}
        <Card variant="elevated" className="relative">
          <div className="absolute -top-3 left-6">
            <Pill tone="ink" size="sm">
              Raw menu
            </Pill>
          </div>
          <div className="pt-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl font-bold tracking-tight text-ink-900">
                Bistro Santorini
              </h3>
              <span className="text-[10px] text-ink-400">
                <span className="tabular">12</span> dishes
              </span>
            </div>
            <p className="mt-1 text-sm text-ink-500">
              The kind of menu you'd actually see.
            </p>
            <ul className="mt-6 divide-y divide-ink-900/[0.06]">
              {MENU.map((m) => (
                <li
                  key={m.name}
                  className="flex items-start justify-between gap-4 py-3"
                >
                  <div>
                    <div
                      className={
                        m.pick
                          ? "text-base font-semibold text-brand-600"
                          : "text-base font-semibold text-ink-900"
                      }
                    >
                      {m.name}
                    </div>
                    <div className="mt-0.5 text-sm text-ink-500">{m.desc}</div>
                  </div>
                  <div className="shrink-0 font-medium text-ink-700">
                    {m.price}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Card>

        {/* AI transformation arrow — center on lg, horizontal divider on mobile */}
        <div className="relative my-2 flex items-center justify-center lg:my-0">
          <div className="relative flex items-center justify-center">
            {/* Glow */}
            <div
              aria-hidden
              className="absolute h-24 w-24 rounded-full bg-brand-500/40 blur-3xl"
            />
            <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand-gradient text-2xl text-white shadow-glow">
              <span aria-hidden>✨</span>
            </div>
          </div>
          {/* Shimmer line — desktop horizontal */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-10 hidden h-px w-44 -translate-y-1/2 lg:block"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <div className="h-full w-full bg-gradient-to-r from-transparent via-brand-500 to-transparent shimmer-bg" />
          </div>
          <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.18em] text-brand-600">
            Yumz AI
          </div>
        </div>

        {/* Yumz Pick card */}
        <Card variant="elevated" className="relative overflow-hidden">
          <div className="absolute -top-3 left-6 z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-match-500 px-3 py-1 text-[11px] font-bold tracking-tight text-night-950 shadow-glowMatch">
              <span aria-hidden>✨</span> Yumz Pick · 94% match
            </span>
          </div>
          <div className="pt-4">
            <div className="relative h-56 w-full overflow-hidden rounded-2xl">
              <img
                src="/dishes/chicken-florentine.jpg"
                alt="Chicken Florentine"
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute right-3 top-3">
                <Pill tone="ink" size="sm" className="!bg-night-950/75 !text-white backdrop-blur">
                  540 cal
                </Pill>
              </div>
              <div className="absolute bottom-3 right-3">
                <Pill tone="ink" size="sm" className="!bg-white/95 !text-ink-900">
                  <span aria-hidden>🥜</span> No nuts
                </Pill>
              </div>
            </div>

            <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink-900">
              Chicken Florentine
            </h3>
            <p className="mt-2 text-ink-600">
              Pan-seared chicken on creamed spinach with parmesan and a touch
              of white wine. Comforting without being heavy.
            </p>
            <MatchBar value={94} className="mt-5" />
            <div className="mt-5 flex flex-wrap gap-2">
              <Pill tone="brand" size="sm">
                Crowd favorite
              </Pill>
              <Pill tone="neutral" size="sm">
                High protein
              </Pill>
              <Pill tone="neutral" size="sm">
                $28
              </Pill>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
