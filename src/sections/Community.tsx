import { Button } from "../components/ui/Button";
import { Eyebrow } from "../components/ui/Eyebrow";
import { Section } from "../components/ui/Section";
import { cn } from "../lib/cn";

type Leader = {
  rank: number;
  name: string;
  city: string;
  title: string;
  stat: string;
  score: number;
  streak: number;
  avatarBg: string;
  initials: string;
};

const LEADERBOARD: Leader[] = [
  {
    rank: 1,
    name: "Sofia",
    city: "Dubai",
    title: "World Palate",
    stat: "18 spots · 42 dishes",
    score: 1240,
    streak: 18,
    avatarBg: "bg-mesh-purple",
    initials: "SO",
  },
  {
    rank: 2,
    name: "Jay",
    city: "NYC",
    title: "Taste Maker",
    stat: "14 ratings · 9 proofs",
    score: 1180,
    streak: 11,
    avatarBg: "bg-mesh-blue",
    initials: "JA",
  },
  {
    rank: 3,
    name: "Nina",
    city: "London",
    title: "Dish Hunter",
    stat: "11 spots · 5 shares",
    score: 1090,
    streak: 7,
    avatarBg: "bg-mesh-pink",
    initials: "NI",
  },
];

const ACTIVITY: Array<{ avatar: string; bg: string; line: string; ago: string }> = [
  {
    avatar: "AL",
    bg: "bg-mesh-green",
    line: "rated Wagyu Short Rib — 🔥 Elite",
    ago: "2m ago",
  },
  {
    avatar: "RZ",
    bg: "bg-mesh-red",
    line: "saved Bistro Santorini",
    ago: "6m ago",
  },
  {
    avatar: "MA",
    bg: "bg-mesh-purple",
    line: "shared Tonkotsu Ramen verdict",
    ago: "14m ago",
  },
  {
    avatar: "KE",
    bg: "bg-mesh-blue",
    line: "unlocked World Palate badge",
    ago: "22m ago",
  },
];

const BADGES = [
  { icon: "🌍", name: "World Palate", desc: "10 cuisines" },
  { icon: "🔥", name: "Streak Master", desc: "14-day streak" },
  { icon: "📸", name: "Proof Hunter", desc: "25 proof photos" },
  { icon: "👑", name: "Main Character", desc: "Most-shared verdict" },
  { icon: "✂️", name: "Cut Champion", desc: "Cut-mode regular" },
  { icon: "🥗", name: "Plant Pro", desc: "All-vegan week" },
];

/**
 * Community — internet-native, social, alive.
 * - Live activity feed (animated dot pulses)
 * - Avatar-led leaderboard with streaks + glowing rank #1
 * - Badge wall as a third panel
 * Designed to read like Beli / Letterboxd / the social side of Spotify.
 */
export function Community() {
  return (
    <Section tone="white" spacing="default">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Community</Eyebrow>
        <h2 className="mt-4 text-display-xl text-ink-900">
          Food is social.{" "}
          <span className="text-brand-500">So is the algorithm.</span>
        </h2>
        <p className="mt-4 text-lg text-ink-600">
          Streaks, badges, leaderboards, and friends who actually care about
          what you eat.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-6">
        {/* Leaderboard */}
        <div className="relative overflow-hidden rounded-3xl bg-night-900 p-6 text-cream-50 shadow-card ring-1 ring-white/5 sm:p-7">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 right-[-20%] h-64 w-64 rounded-full bg-brand-500/30 blur-3xl"
          />
          <div className="relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream-300">
                <span aria-hidden>🏆</span> This week
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-match-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-match-400">
                <span
                  aria-hidden
                  className="h-1 w-1 animate-pulse rounded-full bg-match-400"
                />
                Live
              </span>
            </div>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">
              Top Yumzers
            </h3>
            <ol className="mt-6 space-y-2.5">
              {LEADERBOARD.map((u) => (
                <li
                  key={u.rank}
                  className={cn(
                    "flex items-center gap-3 rounded-2xl p-2.5 ring-1",
                    u.rank === 1
                      ? "bg-white/10 ring-white/15 shadow-glowSm"
                      : "bg-white/[0.04] ring-white/[0.06]",
                  )}
                >
                  <span
                    className={cn(
                      "tabular text-[11px] font-bold w-5 text-center",
                      u.rank === 1 ? "text-brand-400" : "text-cream-300",
                    )}
                  >
                    {u.rank}
                  </span>
                  <Avatar bg={u.avatarBg} initials={u.initials} />
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[13px] font-semibold text-white">
                      {u.name} <span className="text-cream-300">· {u.city}</span>
                    </div>
                    <div className="truncate text-[10px] text-cream-300">
                      {u.title} · {u.stat}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-[12px] font-bold tabular text-brand-400">
                      {u.score}
                    </div>
                    <div className="text-[9px] text-cream-300">
                      🔥 {u.streak}d
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-6">
              <a
                href="https://yumz.social/leaderboard/"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 hover:text-brand-300"
              >
                See the leaderboard →
              </a>
            </div>
          </div>
        </div>

        {/* Live activity */}
        <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-ink-900/5 sm:p-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">
              <span
                aria-hidden
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-match-500"
              />
              Now eating
            </div>
          </div>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink-900">
            What friends are picking
          </h3>
          <ul className="mt-6 space-y-3">
            {ACTIVITY.map((a, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-2xl bg-cream-50 p-3 ring-1 ring-ink-900/[0.04] transition hover:-translate-y-0.5 hover:shadow-card"
              >
                <Avatar bg={a.bg} initials={a.avatar} />
                <div className="min-w-0 flex-1">
                  <div className="text-[13px] leading-snug text-ink-900">
                    <span className="font-semibold">{a.avatar[0]}</span>
                    {a.avatar[1]?.toLowerCase()}{" "}
                    <span className="text-ink-500">{a.line}</span>
                  </div>
                  <div className="mt-0.5 text-[10px] text-ink-400">{a.ago}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Badges */}
        <div className="rounded-3xl bg-brand-gradient-soft p-6 shadow-card ring-1 ring-brand-100 sm:p-7">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
            <span aria-hidden>🎖️</span> Badges
          </div>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink-900">
            Build your food identity
          </h3>
          <p className="mt-2 text-sm text-ink-700">
            Unlock badges as you scan, save, rate, and share. Show off your vibe.
          </p>
          <ul className="mt-6 grid grid-cols-3 gap-3">
            {BADGES.map((b) => (
              <li
                key={b.name}
                className="flex flex-col items-center rounded-2xl bg-white p-3 text-center shadow-card ring-1 ring-ink-900/[0.04]"
              >
                <span
                  aria-hidden
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-base shadow-soft"
                >
                  {b.icon}
                </span>
                <div className="mt-2 text-[10px] font-bold leading-tight text-ink-900">
                  {b.name}
                </div>
                <div className="text-[9px] text-ink-500">{b.desc}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Button href="https://yumz.social/leaderboard/" variant="secondary" size="lg">
          Explore the community →
        </Button>
      </div>
    </Section>
  );
}

function Avatar({ bg, initials }: { bg: string; initials: string }) {
  return (
    <div
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold uppercase tracking-tight text-white shadow-card ring-2 ring-white",
        bg,
      )}
    >
      {initials}
    </div>
  );
}
