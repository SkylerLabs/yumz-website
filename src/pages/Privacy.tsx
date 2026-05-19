import { Container } from "../components/ui/Container";
import { LogoMark } from "../components/LogoMark";
import { Footer } from "../sections/Footer";

/**
 * Privacy — Yumz privacy policy at /privacy.
 *
 * Operational draft (Wave K, 2026-05-19). App Store-ready but marked for
 * final legal review. Reflects Yumz's actual data flows as audited:
 *   - no consumer auth / no name / no email collected
 *   - menu photos sent to AI providers (Google AI Studio / OpenRouter)
 *     for OCR, not persisted in Yumz storage today
 *   - parsed dish data + lat/lng (if granted) stored in Supabase (eu-west-1)
 *   - PostHog analytics on native app only, anonymous distinct_id
 *   - APNs push tokens for notifications (no OneSignal in the live build)
 *
 * Plain English on purpose. Short headings, concrete answers, no boilerplate.
 *
 * Last updated: 19 May 2026 — bump LAST_UPDATED below on every change.
 */

const LAST_UPDATED = "19 May 2026";

export function Privacy() {
  return (
    <>
      {/* Slim header — links back to home, matches SystemShowcase pattern */}
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
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-ink-500">
              Last updated: {LAST_UPDATED}
            </p>

            <Section title="In one paragraph">
              <p>
                Yumz is a food-discovery app. You point your phone camera at a
                menu and we use AI to read it and show you what each dish looks
                like. You don't need to create an account. We try to collect as
                little personal information as possible. This policy explains
                exactly what we collect, why, and who we share it with.
              </p>
            </Section>

            <Section title="Who runs Yumz">
              <p>
                Yumz is operated by Skyler Labs AI Technologies L.L.C S.O.C.,
                Dubai Silicon Oasis, United Arab Emirates (Registration
                No. 1578968). In this policy, "Yumz", "we", "us" and "our" mean
                Skyler Labs in its operation of the Yumz product.
              </p>
              <p>
                For privacy questions, contact us at{" "}
                <a href="mailto:hello@skylerlabs.ai" className="link">
                  hello@skylerlabs.ai
                </a>
                .
              </p>
            </Section>

            <Section title="What we don't collect">
              <p>
                Because Yumz doesn't require a consumer account, we do{" "}
                <strong>not</strong> collect from you:
              </p>
              <ul>
                <li>your name, email, password, phone number, or date of birth</li>
                <li>your contacts, calendar, microphone, or address book</li>
                <li>health, fitness, or financial data</li>
                <li>advertising identifiers (no IDFA), and we do not run ad networks</li>
                <li>your activity in other apps or on other websites</li>
              </ul>
              <p>
                Yumz does not use the iOS App Tracking Transparency prompt
                because we do not track you across apps or sites owned by
                other companies for advertising.
              </p>
            </Section>

            <Section title="What we do collect">
              <h3>Anonymous identifiers stored on your device</h3>
              <p>
                When you first use Yumz, the app creates random anonymous IDs
                in local storage on your device (e.g. a random user ID for
                push notifications, a random session ID used for emoji
                reactions on shared cards). These are not linked to a name or
                email. Uninstalling Yumz deletes them.
              </p>

              <h3>Menu photos and what we do with them</h3>
              <p>
                When you scan a menu, the photo is sent to our AI processing
                providers — Google AI Studio (Gemini) and OpenRouter — so we
                can read and understand the menu. Yumz does not currently
                store the original menu photo on our servers, and we don't use
                menu photos to identify you. The AI providers process the
                image under their own privacy terms (links below).
              </p>

              <h3>Menu and dish data we save</h3>
              <p>
                After the AI reads a menu, we store the structured result in
                our database: restaurant name, dish names, dish descriptions,
                prices, calorie estimates, allergens, dietary tags, the
                detected language, and the time the scan happened. This lets
                Yumz show the same menu faster next time and helps everyone
                avoid re-processing the same restaurant. These records are not
                linked to your name or email.
              </p>

              <h3>Location (if you allow it)</h3>
              <p>
                If you grant location permission, Yumz captures a single
                latitude/longitude reading at the moment you scan a menu and
                converts it to a street/city label using OpenStreetMap. We
                store this location with the scan and on any menu you choose
                to share. We do not track your location in the background. You
                can revoke location access at any time in iOS Settings → Yumz.
              </p>

              <h3>AI-generated and user-taken dish images</h3>
              <p>
                Yumz uses AI to generate illustrative photos of dishes that
                don't already have an image. These AI-generated images are
                saved in your on-device image cache and in a shared image
                library so other users searching for the same dish don't have
                to wait for re-generation. AI-generated images do not depict
                real people.
              </p>
              <p>
                If you take your own photo of a dish, that photo stays on
                your device only — it is not uploaded to our servers.
              </p>

              <h3>Saved dishes, ratings, and settings</h3>
              <p>
                Your saved dishes, "slaps / mid / skip" ratings, allergy
                preferences, and currency settings are stored locally on your
                device in local storage. They do not leave your phone.
              </p>

              <h3>Shared menus and shared Yumz Wrapped</h3>
              <p>
                When you share a menu or your Yumz Wrapped weekly recap, we
                create a record on our servers tagged with a short 6-character
                code. Anyone with that link can view the shared content. The
                record may include the restaurant name, the dishes you shared,
                and (for menus) the restaurant location if you scanned with
                location permission. Recipients can react to the shared
                content with emojis; their reactions are stored anonymously,
                tied to a per-browser random session ID.
              </p>
              <p>
                Shared menu links are designed to expire after a limited
                period (typically around 30 days). Some underlying records
                may remain in our systems for security, debugging, backup, or
                operational purposes unless deleted earlier.
              </p>

              <h3>Push notifications</h3>
              <p>
                If you enable notifications, we store an Apple Push
                Notification service (APNs) token together with the anonymous
                user ID generated on your device, so we can send you Yumz
                notifications and reminders. We do not include sensitive
                content (such as precise location history or personal allergy
                details) in push notification text.
              </p>

              <h3>Analytics</h3>
              <p>
                Inside the native iOS app, Yumz uses{" "}
                <a href="https://posthog.com/privacy" className="link">
                  PostHog
                </a>{" "}
                to understand how the product is used. Events may include
                anonymous app actions such as menu scans, saved dishes,
                ratings, restaurant names, and dish names, tied to an
                anonymous PostHog identifier — not to a name or email. We do
                not run analytics on our public website except as needed for
                core site functionality.
              </p>
            </Section>

            <Section title="How AI processing works">
              <p>
                Yumz uses third-party AI providers to read menus and to
                generate dish images:
              </p>
              <ul>
                <li>
                  <strong>Google AI Studio (Gemini 2.5 Flash Lite)</strong> —
                  primary menu OCR. Receives the menu photo as input and
                  returns parsed dish data.
                </li>
                <li>
                  <strong>OpenRouter (Gemini 2.5 Flash, Flash Image)</strong>{" "}
                  — fallback menu OCR, dish identification when you snap a
                  single dish, and AI-generated dish images.
                </li>
                <li>
                  <strong>fal.ai (FLUX)</strong> — fallback image generation
                  available to administrators.
                </li>
              </ul>
              <p>
                These providers process your input under their own privacy
                terms. Yumz does not currently use menu photos to identify
                you, and we don't send any personal account information
                because Yumz doesn't have any.
              </p>
            </Section>

            <Section title="Where data is stored">
              <p>
                Yumz's backend runs on{" "}
                <a href="https://supabase.com/privacy" className="link">
                  Supabase
                </a>{" "}
                hosted in the European Union (Ireland, eu-west-1). Data in
                Supabase is encrypted at rest and protected by row-level
                security policies that restrict who can read what. Our app is
                distributed globally through the App Store, so we may need to
                transfer some data internationally to operate the service —
                for example, AI providers based in the United States process
                images that are submitted from anywhere.
              </p>
            </Section>

            <Section title="How long we keep things">
              <p>
                Menu analysis results and generated dish data may be retained
                to improve performance, avoid repeated processing, support
                cached results, and improve the product over time.
                Shared-menu records are designed to expire after a limited
                period (typically around 30 days). Push tokens are kept while
                you have notifications enabled and replaced when iOS issues
                new tokens. Notification queue records have a short
                operational lifetime (around 24 hours).
              </p>
              <p>
                We're working on tightening these retention windows and
                publishing more specific deletion timelines as the product
                matures.
              </p>
            </Section>

            <Section title="Children">
              <p>
                Yumz is not directed to children under 13, and we do not
                knowingly collect personal information from children under 13.
                If a parent or guardian believes a child has provided us with
                data, please contact{" "}
                <a href="mailto:hello@skylerlabs.ai" className="link">
                  hello@skylerlabs.ai
                </a>{" "}
                and we'll work to delete it.
              </p>
            </Section>

            <Section title="Your rights and choices">
              <p>
                <strong>Delete what's on your device.</strong> Uninstalling
                Yumz removes the local-only data: anonymous IDs, saved
                dishes, ratings, the on-device image cache, and local
                settings.
              </p>
              <p>
                <strong>Server-side deletion requests.</strong> Because Yumz
                does not require a consumer login, we have no list of users
                or emails to look up. If you'd like us to delete server-side
                records that we can identify as yours, contact{" "}
                <a href="mailto:hello@skylerlabs.ai" className="link">
                  hello@skylerlabs.ai
                </a>
                . To help us find the right records, please include any of
                the following you have available:
              </p>
              <ul>
                <li>a share code for a menu or Wrapped link you created</li>
                <li>the approximate date and restaurant of the scan</li>
                <li>your anonymous user ID, if you can find it (currently surfaced for support cases only)</li>
                <li>any other detail that helps us identify the records</li>
              </ul>
              <p>
                <strong>Location, notifications, camera.</strong> You can
                revoke any of these permissions at any time from iOS Settings
                → Yumz.
              </p>
              <p>
                <strong>European Economic Area, United Kingdom, and
                California residents.</strong> Depending on where you live,
                you may have additional rights under laws such as the GDPR,
                the UK GDPR, and the CCPA — including the right to access,
                correct, delete, port, or restrict processing of personal
                data, and the right to lodge a complaint with a supervisory
                authority. Contact us at the email above to exercise any of
                these.
              </p>
            </Section>

            <Section title="Third-party services we use">
              <p>
                When you use Yumz, these third parties may receive or process
                some data on our behalf:
              </p>
              <ul>
                <li>
                  Supabase (database, storage, edge functions) —{" "}
                  <a href="https://supabase.com/privacy" className="link">
                    privacy
                  </a>
                </li>
                <li>
                  Google AI Studio (menu OCR) —{" "}
                  <a
                    href="https://ai.google.dev/gemini-api/terms"
                    className="link"
                  >
                    terms
                  </a>
                </li>
                <li>
                  OpenRouter (menu OCR, dish ID, image generation) —{" "}
                  <a href="https://openrouter.ai/privacy" className="link">
                    privacy
                  </a>
                </li>
                <li>
                  fal.ai (admin-side fallback image generation) —{" "}
                  <a
                    href="https://fal.ai/legal/privacy-policy"
                    className="link"
                  >
                    privacy
                  </a>
                </li>
                <li>
                  PostHog (product analytics, native app only) —{" "}
                  <a href="https://posthog.com/privacy" className="link">
                    privacy
                  </a>
                </li>
                <li>
                  OpenStreetMap Nominatim (reverse geocoding) —{" "}
                  <a
                    href="https://wiki.osmfoundation.org/wiki/Privacy_Policy"
                    className="link"
                  >
                    privacy
                  </a>
                </li>
                <li>Apple Push Notification service (push delivery)</li>
              </ul>
              <p>
                If we add new processors in the future (for example, a Meta
                SDK or an ad network), we will update this policy and Yumz's
                App Store privacy labels before release.
              </p>
            </Section>

            <Section title="Security">
              <p>
                We design Yumz to minimize the personal information it
                collects, which is the most important security measure. On
                top of that, server-side data is encrypted at rest, protected
                by row-level security policies, and accessed only through
                authenticated edge functions where appropriate. No internet
                service is perfectly secure, so we cannot promise absolute
                security — but we work to keep risk low.
              </p>
            </Section>

            <Section title="Changes to this policy">
              <p>
                We will update this page when our practices change. The
                "Last updated" date at the top reflects the most recent
                change. Material changes that affect what we collect or share
                will also be reflected in Yumz's App Store privacy labels.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Yumz is operated by Skyler Labs AI Technologies L.L.C
                S.O.C., Dubai Silicon Oasis, United Arab Emirates.
              </p>
              <p>
                Email:{" "}
                <a href="mailto:hello@skylerlabs.ai" className="link">
                  hello@skylerlabs.ai
                </a>
              </p>
            </Section>
          </article>
        </Container>
      </main>

      <Footer />
    </>
  );
}

/**
 * Section — small local helper. Keeps the policy readable in source and
 * avoids adding a one-off prose component to the design system.
 */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-2xl text-ink-900">{title}</h2>
      <div className="prose-policy mt-4 space-y-4 leading-relaxed">{children}</div>
    </section>
  );
}
