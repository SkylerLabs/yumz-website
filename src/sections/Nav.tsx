import { useEffect, useState } from "react";
import { Container } from "../components/ui/Container";
import { Button } from "../components/ui/Button";
import { LogoMark } from "../components/LogoMark";
import { cn } from "../lib/cn";

const NAV_LINKS = [
  { label: "Blog", href: "https://yumz.social/blog/" },
  { label: "Leaderboard", href: "https://yumz.social/leaderboard/" },
  { label: "YouTube", href: "https://www.youtube.com/@Yumz-SeeEatShare" },
];

/**
 * Nav — sticky top navigation with backdrop-blur on scroll and a mobile sheet.
 * Glass background reveals warm cream on scroll; thin bottom border appears when
 * the page has scrolled past the hero, signalling "you're in".
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Lock body scroll while the mobile sheet is open
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition duration-250 ease-out-expo",
        scrolled
          ? "bg-cream-50/85 backdrop-blur-md ring-1 ring-ink-900/[0.04]"
          : "bg-cream-50/0",
      )}
    >
      <Container>
        <nav className="flex items-center justify-between py-3.5 sm:py-4">
          <a
            href="/"
            className="inline-flex items-center gap-2.5"
            aria-label="Yumz home"
          >
            <LogoMark size={32} className="rounded-[9px]" />
            <span className="font-display text-xl font-semibold tracking-tight">
              Yumz
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-1.5 text-sm text-ink-700 transition hover:bg-cream-100"
              >
                {link.label}
              </a>
            ))}
            <Button href="https://app.yumz.social" size="sm" className="ml-2">
              Try Yumz
            </Button>
          </div>

          {/* Mobile: CTA + hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <Button href="https://app.yumz.social" size="sm">
              Try Yumz
            </Button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-card ring-1 ring-ink-900/5 transition hover:bg-cream-100"
            >
              <Hamburger open={open} />
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile sheet */}
      <div
        className={cn(
          "fixed inset-0 z-40 transition duration-250 ease-out-expo md:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div
          className="absolute inset-0 bg-ink-900/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute right-3 top-3 w-[calc(100%-1.5rem)] max-w-sm rounded-3xl bg-white p-5 shadow-card ring-1 ring-ink-900/[0.06] transition duration-250 ease-out-expo",
            open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
          )}
        >
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2.5">
              <LogoMark size={28} className="rounded-[8px]" />
              <span className="font-display text-lg font-semibold">Yumz</span>
            </div>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-700 hover:bg-cream-100"
            >
              <Hamburger open={true} />
            </button>
          </div>
          <div className="mt-6 flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-3 text-lg font-medium text-ink-900 hover:bg-cream-100"
              >
                {link.label}
              </a>
            ))}
          </div>
          <Button
            href="https://app.yumz.social"
            size="lg"
            block
            className="mt-4"
            trailingIcon={<span aria-hidden>→</span>}
          >
            Open Yumz — it&rsquo;s free
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hamburger({ open }: { open: boolean }) {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden="true">
      <line
        x1="2"
        y1={open ? 7 : 3}
        x2="16"
        y2={open ? 7 : 3}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        transform={open ? "rotate(45 9 7)" : undefined}
        className="transition-all duration-250 ease-out-expo"
      />
      <line
        x1="2"
        y1={open ? 7 : 11}
        x2="16"
        y2={open ? 7 : 11}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        transform={open ? "rotate(-45 9 7)" : undefined}
        className="transition-all duration-250 ease-out-expo"
      />
    </svg>
  );
}
