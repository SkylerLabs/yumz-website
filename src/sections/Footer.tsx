import { Container } from "../components/ui/Container";
import { LogoMark } from "../components/LogoMark";

const NAV = [
  { label: "Try Yumz", href: "https://app.yumz.social" },
  { label: "Blog", href: "https://yumz.social/blog/" },
  { label: "Leaderboard", href: "https://yumz.social/leaderboard/" },
  { label: "YouTube", href: "https://www.youtube.com/@Yumz-SeeEatShare" },
];

// Wave K: all three legal pages now live in-house at yumz.social. Previous
// external links pointed at the placeholder skylerlabs.ai/legal page.
const LEGAL = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-200">
      <Container>
        <div className="grid gap-10 py-14 lg:grid-cols-[1.2fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="inline-flex items-center gap-2.5">
              <LogoMark size={32} className="rounded-[9px]" />
              <span className="font-display text-xl font-semibold text-white">
                Yumz
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-cream-300">
              AI food discovery. Snap any menu and instantly see every dish.
            </p>
          </div>

          {/* Product */}
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cream-300">
              Product
            </div>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-cream-50 underline-offset-4 hover:text-white hover:underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cream-300">
              Legal
            </div>
            <ul className="mt-4 space-y-2.5">
              {LEGAL.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-cream-50 underline-offset-4 hover:text-white hover:underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-cream-200/10 py-6 text-xs text-cream-300 sm:flex-row sm:items-center">
          <div>
            Built by{" "}
            <a
              href="https://skylerlabs.ai"
              className="underline-offset-4 hover:text-white hover:underline"
            >
              Skyler Labs
            </a>{" "}
            · © 2026 SKYLER LABS AI TECHNOLOGIES L.L.C S.O.C · Reg. 1578968
          </div>
          <div className="text-cream-300/70">yumz.social</div>
        </div>
      </Container>
    </footer>
  );
}
