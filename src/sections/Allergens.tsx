import { Eyebrow } from "../components/ui/Eyebrow";
import { IconBadge } from "../components/ui/IconBadge";
import { Section } from "../components/ui/Section";

const ALLERGENS = [
  { icon: "🥜", name: "Nuts" },
  { icon: "🌾", name: "Gluten" },
  { icon: "🥛", name: "Dairy" },
  { icon: "🦐", name: "Shellfish" },
  { icon: "🥚", name: "Eggs" },
  { icon: "🫘", name: "Soy" },
  { icon: "🐟", name: "Fish" },
  { icon: "🫓", name: "Sesame" },
  { icon: "🍞", name: "Wheat" },
];

export function Allergens() {
  return (
    <Section tone="white" spacing="default">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Eyebrow>
            <span aria-hidden>🛡️</span> Safety first
          </Eyebrow>
          <h2 className="mt-4 text-display-xl text-ink-900">
            Allergens flagged{" "}
            <span className="text-brand-500">automatically.</span>
          </h2>
          <p className="mt-5 text-lg text-ink-600">
            Set your allergy profile once. Yumz cross-checks every dish against
            it — so you dine safely, every time.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-match-500/15 px-3 py-1 text-[12px] font-bold tracking-tight text-match-600">
              <span
                aria-hidden
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-match-500"
              />
              Real-time scan
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-[12px] font-bold tracking-tight text-brand-700">
              9 allergens supported
            </span>
          </div>
        </div>

        <ul
          className="grid grid-cols-3 gap-3"
          aria-label="Allergens Yumz can flag"
        >
          {ALLERGENS.map((a) => (
            <li
              key={a.name}
              className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-3xl bg-cream-50 p-5 ring-1 ring-ink-900/[0.05] transition duration-450 ease-out-expo hover:-translate-y-1 hover:bg-white hover:shadow-card"
            >
              <IconBadge tone="soft" size="md" className="group-hover:bg-brand-gradient group-hover:text-white">
                <span aria-hidden>{a.icon}</span>
              </IconBadge>
              <span className="text-sm font-bold text-ink-900">{a.name}</span>
              {/* Small "scanned" check that appears on hover */}
              <span
                aria-hidden
                className="absolute right-2 top-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-match-500 text-[10px] font-bold text-night-950 opacity-0 shadow-glowMatch transition duration-450 group-hover:opacity-100"
              >
                ✓
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
