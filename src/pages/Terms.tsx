import { Container } from "../components/ui/Container";
import { LogoMark } from "../components/LogoMark";
import { Footer } from "../sections/Footer";

/**
 * Terms — Yumz Terms of Service at /terms.
 *
 * Plain-English operational draft of the Yumz Terms of Service. Mirrors
 * Privacy.tsx structurally so the three legal pages read as one set.
 *
 * Concrete coverage:
 *   - AI-generated dish imagery is illustrative, not literal
 *   - Allergen / nutrition / dietary data is best-effort, not medical advice
 *   - User-generated content (shared menus, reactions, ratings) and IP
 *   - Service-as-is disclaimer
 *   - Governing law = United Arab Emirates (matches Skyler Labs entity)
 *
 * Last updated: 19 May 2026 — bump LAST_UPDATED below on every change.
 */

const LAST_UPDATED = "19 May 2026";

export function Terms() {
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
              Terms of Service
            </h1>
            <p className="mt-2 text-sm text-ink-500">
              Last updated: {LAST_UPDATED}
            </p>

            <Section title="The basics">
              <p>
                Welcome to Yumz. These Terms of Service ("Terms") govern your
                use of the Yumz mobile app and the website at{" "}
                <a href="https://yumz.social" className="link">
                  yumz.social
                </a>{" "}
                (together, "Yumz" or "the Service"). By using Yumz you agree
                to these Terms. If you don't agree, don't use Yumz.
              </p>
              <p>
                Yumz is operated by Skyler Labs AI Technologies L.L.C S.O.C.,
                Dubai Silicon Oasis, United Arab Emirates (Registration
                No. 1578968). In these Terms, "we", "us" and "our" mean
                Skyler Labs in its operation of Yumz.
              </p>
            </Section>

            <Section title="What Yumz is">
              <p>
                Yumz is an AI food-discovery app. You point your phone camera
                at a restaurant menu and Yumz reads the menu using AI, shows
                you what each dish might look like, and lets you save, rate,
                and share dishes you discover.
              </p>
              <p>
                You don't need to create an account to use Yumz. You can use
                most of the Service without sharing your name, email, or any
                login information.
              </p>
            </Section>

            <Section title="AI-generated content">
              <p>
                Yumz uses third-party AI models (currently Gemini, OpenRouter,
                and fal.ai) to read menus and to generate illustrative dish
                images. AI output can be inaccurate, incomplete, or
                inconsistent. Specifically:
              </p>
              <ul>
                <li>
                  <strong>Dish images are illustrations, not photos.</strong>{" "}
                  The pictures Yumz generates are AI-created and meant to
                  help you visualize a dish. They are not photographs of the
                  actual food a restaurant serves, and the real dish may look
                  different in shape, color, garnish, portion size, or
                  presentation.
                </li>
                <li>
                  <strong>Menu reading can be wrong.</strong> AI may misread
                  dish names, prices, descriptions, languages, or
                  handwriting. Always confirm with the restaurant before
                  ordering — especially for pricing, special dietary needs,
                  or unfamiliar dishes.
                </li>
                <li>
                  <strong>Calorie and nutrition figures are estimates.</strong>{" "}
                  Any calorie counts, macros, or nutritional data shown in
                  Yumz are generated estimates based on dish names and
                  descriptions. They are not provided by the restaurant and
                  are not medical or nutritional advice.
                </li>
              </ul>
            </Section>

            <Section title="Food safety, allergens, and dietary information">
              <p>
                <strong>
                  Yumz is a discovery tool, not a food-safety service. Do not
                  rely on Yumz for allergy, intolerance, or medical
                  decisions.
                </strong>{" "}
                Allergen tags, dietary tags, and nutrition information shown
                in Yumz are best-effort AI inferences and may be incomplete or
                wrong. They are not provided by the restaurant.
              </p>
              <p>
                If you have a food allergy, intolerance, or specific dietary
                requirement, you must verify dish details directly with the
                restaurant before ordering or eating. Yumz is not responsible
                for adverse reactions, illness, or other harm resulting from
                reliance on AI-generated information shown in the Service.
              </p>
            </Section>

            <Section title="Using Yumz responsibly">
              <p>You agree not to:</p>
              <ul>
                <li>use Yumz for anything illegal, abusive, or harmful</li>
                <li>
                  upload or scan content you don't have the right to use
                  (e.g. copyrighted menu artwork you're attempting to
                  redistribute commercially, photos of people without their
                  consent)
                </li>
                <li>
                  attempt to reverse-engineer Yumz, scrape it at scale,
                  bypass rate limits, or use it to build a competing service
                </li>
                <li>
                  use Yumz to harass, defame, threaten, or impersonate
                  anyone, including via shared menus or reactions
                </li>
                <li>
                  upload content that is illegal, hateful, sexually
                  explicit, or that targets minors
                </li>
                <li>
                  interfere with the Service or our infrastructure (e.g. DoS
                  attempts, exploiting bugs to access other users' data)
                </li>
              </ul>
              <p>
                We may suspend or terminate access to Yumz if we believe you
                are violating these Terms.
              </p>
            </Section>

            <Section title="Content you create with Yumz">
              <p>
                Yumz lets you save dishes, rate them, take your own dish
                photos, and create shareable links for menus and your weekly
                Yumz Wrapped recap ("Your Content").
              </p>
              <ul>
                <li>
                  <strong>You keep ownership.</strong> You own Your Content.
                </li>
                <li>
                  <strong>Limited license to us.</strong> By creating Your
                  Content in Yumz, you grant us a worldwide, non-exclusive,
                  royalty-free license to host, store, transmit, display, and
                  process Your Content as needed to operate the Service —
                  for example, to display a menu you've shared to recipients
                  with the share link, to keep your saved dishes available to
                  you across sessions, and to compute your Yumz Wrapped
                  recap.
                </li>
                <li>
                  <strong>Public-by-link content.</strong> When you create a
                  share link (for a menu or a Wrapped recap), anyone with
                  that link can view the shared content and react to it
                  anonymously. Don't share things you wouldn't want public.
                </li>
                <li>
                  <strong>We may remove Your Content</strong> if it violates
                  these Terms or applicable law, or if we believe it harms
                  Yumz or its users. Where reasonable, we'll let you know
                  before doing so.
                </li>
              </ul>
            </Section>

            <Section title="Intellectual property">
              <p>
                Yumz, including the Yumz name, logo, app, website, design
                system, and underlying software, is owned by Skyler Labs and
                its licensors and is protected by intellectual-property laws.
                These Terms do not grant you any rights to our trademarks or
                branding except as required to use the Service.
              </p>
              <p>
                AI-generated dish images shown in Yumz are produced by our
                third-party AI providers under their respective terms. You
                may screenshot or share Yumz images for personal,
                non-commercial use. Commercial reuse (e.g. publishing Yumz
                imagery in a restaurant menu, ad, or product) is not
                permitted without our prior written consent.
              </p>
            </Section>

            <Section title="Third-party services">
              <p>
                Yumz integrates third-party services (described in our{" "}
                <a href="/privacy" className="link">
                  Privacy Policy
                </a>
                ) including Supabase, Google AI Studio, OpenRouter, fal.ai,
                PostHog, OpenStreetMap, and Apple Push Notification service.
                Your use of those services is subject to their own terms and
                privacy policies. We are not responsible for third-party
                services or for any content they produce.
              </p>
            </Section>

            <Section title="No warranties">
              <p>
                Yumz is provided "as is" and "as available". To the maximum
                extent permitted by law, we disclaim all warranties, express
                or implied, including warranties of merchantability, fitness
                for a particular purpose, accuracy, reliability, and
                non-infringement. We do not warrant that Yumz will be
                error-free, uninterrupted, accurate, or that AI output will
                match real-world dishes, prices, allergens, or nutrition.
              </p>
            </Section>

            <Section title="Limitation of liability">
              <p>
                To the maximum extent permitted by law, Skyler Labs and its
                affiliates, officers, employees, and contractors will not be
                liable for any indirect, incidental, special, consequential,
                or punitive damages, or any loss of profits, revenues, data,
                or goodwill, arising out of or in connection with your use of
                Yumz. Our total liability for any claim related to Yumz is
                limited to the greater of (a) the amount you paid us for the
                Service in the twelve months before the claim (Yumz is free,
                so this is typically zero) and (b) USD 100.
              </p>
              <p>
                Some jurisdictions don't allow certain limitations on
                liability. If you live in one of those jurisdictions, the
                above limitations apply to you only to the extent permitted
                by law.
              </p>
            </Section>

            <Section title="Indemnity">
              <p>
                You agree to indemnify and hold harmless Skyler Labs and its
                affiliates from any claims, damages, liabilities, and
                expenses (including reasonable legal fees) arising out of (a)
                Your Content, (b) your use of Yumz in violation of these
                Terms or applicable law, or (c) your violation of any
                third-party right.
              </p>
            </Section>

            <Section title="Termination">
              <p>
                You can stop using Yumz at any time by uninstalling the app
                or leaving the website. We can suspend or terminate your
                access to Yumz at any time if you violate these Terms or if
                we discontinue the Service.
              </p>
              <p>
                Sections that by their nature should survive termination
                (including IP, disclaimers, limitation of liability,
                indemnity, and governing-law clauses) will survive.
              </p>
            </Section>

            <Section title="Changes to the Service and these Terms">
              <p>
                We may update Yumz and these Terms over time. When we make
                material changes to the Terms, we'll update the "Last
                updated" date at the top and, where reasonable, surface the
                change in the app or website. Continued use of Yumz after a
                change means you accept the updated Terms.
              </p>
            </Section>

            <Section title="Governing law">
              <p>
                These Terms are governed by the laws of the United Arab
                Emirates, without regard to conflict-of-law rules. Any
                dispute arising out of or relating to these Terms or your
                use of Yumz will be brought exclusively in the courts of
                Dubai, UAE — except that we may seek injunctive or other
                equitable relief in any jurisdiction to protect our
                intellectual property or the security of the Service.
              </p>
              <p>
                Nothing in these Terms limits any non-waivable rights you
                have under the consumer-protection laws of your country of
                residence.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Questions about these Terms? Contact us at{" "}
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
