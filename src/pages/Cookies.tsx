import { Container } from "../components/ui/Container";
import { LogoMark } from "../components/LogoMark";
import { Footer } from "../sections/Footer";

/**
 * Cookies — Yumz Cookie Policy at /cookies.
 *
 * Honest about what Yumz actually uses. The marketing website is mostly
 * static and sets only minimal first-party storage. The mobile app uses
 * localStorage and IndexedDB instead of cookies for the same purposes —
 * those are disclosed here too because they are functionally equivalent
 * from a user-rights perspective (browser/device storage that survives
 * across visits).
 *
 * Last updated: 19 May 2026 — bump LAST_UPDATED below on every change.
 */

const LAST_UPDATED = "19 May 2026";

export function Cookies() {
  return (
    <>
      <header className="border-b border-ink-100">
        <Container>
          <div className="flex items-center justify-between py-5">
            <a href="/" className="inline-flex items-center gap-3">
              <LogoMark size={32} className="rounded-[9px]" />
              <span className="font-display text-lg font-semibold text-ink-900">
                Yumz
              </span>
            </a>
            <a
              href="/"
              className="text-sm text-ink-600 underline-offset-4 hover:text-ink-900 hover:underline"
            >
              ← Back to home
            </a>
          </div>
        </Container>
      </header>

      <main className="bg-white">
        <Container size="narrow">
          <article className="py-12 lg:py-16 text-ink-700">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-400">
              Legal
            </p>
            <h1 className="mt-2 font-display text-display-xl text-ink-900">
              Cookie Policy
            </h1>
            <p className="mt-2 text-sm text-ink-500">
              Last updated: {LAST_UPDATED}
            </p>

            <Section title="The short version">
              <p>
                Yumz uses very few cookies. The marketing website at{" "}
                <a href="https://yumz.social" className="link">
                  yumz.social
                </a>{" "}
                sets only the minimum browser storage needed to run.{" "}
                <strong>
                  Yumz does not set advertising cookies, and we don't track
                  you across other companies' websites.
                </strong>
              </p>
              <p>
                The Yumz iOS app uses local device storage (technically
                IndexedDB and the iOS app's local storage, not browser
                cookies) for the same purposes — caching dish images you've
                seen, remembering your settings, and holding anonymous
                identifiers for emoji reactions on shared cards.
              </p>
            </Section>

            <Section title="What cookies are">
              <p>
                Cookies are small files a website stores on your device when
                you visit, so the site can remember preferences and state
                between visits. "Local storage" and "IndexedDB" are
                browser-side storage mechanisms that work similarly. We
                refer to all three collectively as "cookies and similar
                technologies" in this policy.
              </p>
            </Section>

            <Section title="What yumz.social uses">
              <h3>Strictly necessary</h3>
              <p>
                Our marketing website uses a small amount of browser local
                storage to remember interface state (for example, animations
                that should only play once, or scroll position when you
                navigate). Without this storage, parts of the site won't
                work as intended.
              </p>

              <h3>Hosting infrastructure</h3>
              <p>
                Our website is hosted on Vercel. Vercel may set anti-abuse
                and infrastructure cookies (for example, to mitigate
                automated traffic or to balance traffic across regions). You
                can read Vercel's privacy approach in their{" "}
                <a href="https://vercel.com/legal/privacy-policy" className="link">
                  privacy policy
                </a>
                .
              </p>

              <h3>What we don't use on the website</h3>
              <ul>
                <li>
                  No advertising cookies, no remarketing pixels, no
                  cross-site tracking
                </li>
                <li>No Google Analytics, no Meta Pixel</li>
                <li>No third-party social-media trackers</li>
              </ul>
            </Section>

            <Section title="What the Yumz iOS app stores on your device">
              <p>
                The Yumz app is a native iOS app that wraps a web
                experience. It uses local device storage (not classic
                browser cookies) for:
              </p>
              <ul>
                <li>
                  <strong>Anonymous identifiers</strong> — randomly
                  generated user and session IDs used for push notifications
                  and anonymous emoji reactions on shared cards. Not linked
                  to your name or email.
                </li>
                <li>
                  <strong>Cached dish images</strong> — AI-generated dish
                  images stored in IndexedDB so the same dishes load
                  instantly the next time you see them.
                </li>
                <li>
                  <strong>Saved dishes, ratings, and settings</strong> —
                  your "slaps / mid / skip" ratings, allergy preferences,
                  currency settings, and the menus you've scanned. These
                  stay on your device.
                </li>
                <li>
                  <strong>PostHog analytics identifiers</strong> — inside
                  the native app only, PostHog stores an anonymous distinct
                  ID and writes analytics state to local storage. See our{" "}
                  <a href="/privacy" className="link">
                    Privacy Policy
                  </a>{" "}
                  for what PostHog tracks.
                </li>
              </ul>
              <p>
                Uninstalling the Yumz app removes all of the above from your
                device.
              </p>
            </Section>

            <Section title="Managing cookies and local storage">
              <h3>On the website</h3>
              <p>
                You can clear cookies and site data for{" "}
                <a href="https://yumz.social" className="link">
                  yumz.social
                </a>{" "}
                in your browser settings. Most browsers also let you block
                cookies entirely or per-site; doing so may break the site's
                core functionality.
              </p>

              <h3>In the iOS app</h3>
              <p>
                You can clear the app's local data by deleting and
                reinstalling Yumz from the App Store. To revoke specific
                permissions (camera, location, notifications) without
                deleting the app, open iOS Settings → Yumz.
              </p>
            </Section>

            <Section title="Changes to this Cookie Policy">
              <p>
                We will update this page when our use of cookies and similar
                technologies changes. The "Last updated" date at the top
                reflects the most recent change. Material changes will also
                be reflected in our{" "}
                <a href="/privacy" className="link">
                  Privacy Policy
                </a>{" "}
                and in Yumz's App Store privacy labels where applicable.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Questions about this Cookie Policy? Contact us at{" "}
                <a href="mailto:hello@skylerlabs.ai" className="link">
                  hello@skylerlabs.ai
                </a>
                .
              </p>
              <p>
                Yumz is operated by Skyler Labs AI Technologies L.L.C
                S.O.C., Dubai Silicon Oasis, United Arab Emirates.
              </p>
            </Section>
          </article>
        </Container>
      </main>

      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-2xl text-ink-900">{title}</h2>
      <div className="prose-policy mt-4 space-y-4 leading-relaxed">{children}</div>
    </section>
  );
}
