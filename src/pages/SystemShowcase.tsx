import {
  Button,
  Card,
  Container,
  Eyebrow,
  IconBadge,
  Pill,
  Section,
} from "../components/ui";
import { LogoMark } from "../components/LogoMark";

/**
 * SystemShowcase — internal design system reference.
 * Reachable at /system. Useful for design QA and as a living style guide.
 * Excluded from the marketing IA; not linked from the public nav.
 */
export function SystemShowcase() {
  return (
    <main>
      {/* Header */}
      <Section tone="white" spacing="tight" container="default">
        <div className="flex items-center justify-between">
          <a href="/" className="inline-flex items-center gap-3">
            <LogoMark size={36} className="rounded-[10px]" />
            <span className="font-display text-xl font-semibold">Yumz</span>
            <Pill tone="brand" size="sm">
              Design System
            </Pill>
          </a>
          <Button href="/" variant="ghost" size="sm">
            ← Back to home
          </Button>
        </div>
      </Section>

      {/* Foundation: Typography */}
      <Section tone="cream" spacing="default">
        <Eyebrow>Foundation · Typography</Eyebrow>
        <h2 className="mt-4 text-display-xl">Inter + Geist</h2>
        <p className="mt-3 max-w-xl text-ink-600">
          Inter for body keeps reading clean. Geist for display gives the brand
          a modern, app-native, consumer-AI feel — sharper than editorial serif,
          warmer than corporate sans.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card>
            <p className="font-display text-display-2xl text-ink-900">
              Snap it. Eat it.
            </p>
            <p className="mt-2 text-xs uppercase tracking-wider text-ink-400">
              display-2xl · Fraunces 600
            </p>
          </Card>
          <Card>
            <p className="font-display text-display-xl text-ink-900">
              Three taps to food confidence
            </p>
            <p className="mt-2 text-xs uppercase tracking-wider text-ink-400">
              display-xl · Fraunces 600
            </p>
          </Card>
          <Card>
            <p className="font-display text-display-lg text-ink-900">
              Everything you need at the table
            </p>
            <p className="mt-2 text-xs uppercase tracking-wider text-ink-400">
              display-lg · Fraunces 600
            </p>
          </Card>
          <Card>
            <p className="text-lg text-ink-700">
              Point your camera at any menu. See every dish, check calories,
              flag allergens, and share your food vibe — before you order.
            </p>
            <p className="mt-2 text-xs uppercase tracking-wider text-ink-400">
              text-lg · Inter 400
            </p>
          </Card>
        </div>
      </Section>

      {/* Foundation: Color */}
      <Section tone="white" spacing="default">
        <Eyebrow>Foundation · Color</Eyebrow>
        <h2 className="mt-4 text-display-lg">Brand orange + warm neutrals</h2>

        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
            Brand
          </p>
          <div className="mt-3 grid grid-cols-5 gap-3 sm:grid-cols-10">
            {[
              ["50", "#FFF4EC"],
              ["100", "#FFE2CC"],
              ["200", "#FFC499"],
              ["300", "#FFA266"],
              ["400", "#FF8A3D"],
              ["500", "#F26B1F"],
              ["600", "#D8550F"],
              ["700", "#B0430A"],
              ["800", "#823109"],
              ["900", "#52200A"],
            ].map(([step, hex]) => (
              <Swatch key={step} step={step} hex={hex} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
            Cream
          </p>
          <div className="mt-3 grid grid-cols-4 gap-3">
            {[
              ["50", "#FFFBF6"],
              ["100", "#FBF3E9"],
              ["200", "#F3E7D3"],
              ["300", "#E5D2B3"],
            ].map(([step, hex]) => (
              <Swatch key={step} step={step} hex={hex} />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
            Ink (text)
          </p>
          <div className="mt-3 grid grid-cols-4 gap-3 sm:grid-cols-7">
            {[
              ["300", "#C9B9AB"],
              ["400", "#A18B7B"],
              ["500", "#7A6353"],
              ["600", "#5A4638"],
              ["700", "#3D2E23"],
              ["800", "#2A1F18"],
              ["900", "#1B1410"],
            ].map(([step, hex]) => (
              <Swatch key={step} step={step} hex={hex} />
            ))}
          </div>
        </div>
      </Section>

      {/* Buttons */}
      <Section tone="cream" spacing="default">
        <Eyebrow>Primitive · Button</Eyebrow>
        <h2 className="mt-4 text-display-lg">Buttons</h2>
        <p className="mt-2 text-ink-600">
          Pill-shaped, 4 variants × 3 sizes, optional leading and trailing icons.
        </p>

        <Card className="mt-8">
          <div className="space-y-6">
            <Row label="Primary">
              <Button size="sm">Try Yumz</Button>
              <Button size="md">Try Yumz</Button>
              <Button size="lg" trailingIcon={<span>→</span>}>
                Try Yumz Free
              </Button>
            </Row>
            <Row label="Secondary">
              <Button variant="secondary" size="sm">
                See features
              </Button>
              <Button variant="secondary" size="md">
                See features
              </Button>
              <Button variant="secondary" size="lg">
                See features
              </Button>
            </Row>
            <Row label="Ghost">
              <Button variant="ghost" size="sm">
                Learn more
              </Button>
              <Button variant="ghost" size="md">
                Learn more
              </Button>
              <Button variant="ghost" size="lg">
                Learn more
              </Button>
            </Row>
          </div>
        </Card>

        <Card variant="brand" className="mt-6">
          <Row label="Inverse (on brand)">
            <Button variant="inverse" size="sm">
              Open Yumz
            </Button>
            <Button variant="inverse" size="md">
              Open Yumz
            </Button>
            <Button variant="inverse" size="lg" trailingIcon={<span>→</span>}>
              Open Yumz
            </Button>
          </Row>
        </Card>
      </Section>

      {/* Eyebrows + Pills */}
      <Section tone="white" spacing="default">
        <Eyebrow>Primitive · Eyebrow + Pill</Eyebrow>
        <h2 className="mt-4 text-display-lg">Labels</h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              Eyebrow — section labels
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Eyebrow>How it works</Eyebrow>
              <Eyebrow>Features</Eyebrow>
              <Eyebrow>Safety first</Eyebrow>
              <Eyebrow tone="ink" dot={false}>
                Community
              </Eyebrow>
            </div>
          </Card>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
              Pill — tags & smart modes
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Pill tone="brand">🔥 Trending</Pill>
              <Pill tone="brand">⭐ Yumz Pick</Pill>
              <Pill tone="neutral">💪 Gym Mode</Pill>
              <Pill tone="neutral">✂️ Cut Mode</Pill>
              <Pill tone="neutral">🌱 Plant Mode</Pill>
              <Pill tone="ink">👑 Main Character</Pill>
              <Pill tone="outline">Vegetarian</Pill>
            </div>
          </Card>
        </div>
      </Section>

      {/* IconBadges + Cards */}
      <Section tone="cream" spacing="default">
        <Eyebrow>Primitive · IconBadge + Card</Eyebrow>
        <h2 className="mt-4 text-display-lg">Surfaces</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card interactive>
            <IconBadge tone="soft" size="md">
              📖
            </IconBadge>
            <h3 className="mt-5 text-xl">Swipe Mode</h3>
            <p className="mt-2 text-ink-600">
              Tiny fonts, bad lighting, foreign languages — menus become clean,
              readable cards.
            </p>
          </Card>
          <Card interactive variant="elevated">
            <IconBadge tone="brand" size="md">
              👁️
            </IconBadge>
            <h3 className="mt-5 text-xl">See Before You Order</h3>
            <p className="mt-2 text-ink-600">
              AI generates photos of every dish so you know exactly what&rsquo;s
              coming.
            </p>
          </Card>
          <Card interactive variant="brand">
            <IconBadge tone="ink" size="md" className="bg-white/15 text-white">
              🌍
            </IconBadge>
            <h3 className="mt-5 text-xl">Foreign Menu? No Problem.</h3>
            <p className="mt-2 text-white/80">
              Snap any menu in any language and get instant, accurate descriptions.
            </p>
          </Card>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <IconBadge tone="soft" size="sm">
            🥜
          </IconBadge>
          <IconBadge tone="soft" size="md">
            🍞
          </IconBadge>
          <IconBadge tone="soft" size="lg">
            🦐
          </IconBadge>
          <IconBadge tone="brand" size="md">
            ⚡
          </IconBadge>
          <IconBadge tone="ink" size="md">
            🏆
          </IconBadge>
        </div>
      </Section>

      {/* Container + Section preview */}
      <Section tone="brand" spacing="default" container="narrow">
        <Eyebrow tone="ink" dot={false} className="bg-white/15 text-white ring-white/20">
          Section · brand tone
        </Eyebrow>
        <h2 className="mt-4 text-display-xl text-white">
          Sections set vertical rhythm and tone in one prop.
        </h2>
        <p className="mt-4 text-white/85">
          <code className="rounded bg-white/20 px-1.5 py-0.5">tone</code> sets the
          background, <code className="rounded bg-white/20 px-1.5 py-0.5">spacing</code> the
          vertical density, and <code className="rounded bg-white/20 px-1.5 py-0.5">container</code> the
          inner max-width. Use the <code className="rounded bg-white/20 px-1.5 py-0.5">brand</code> tone
          sparingly for hero CTAs and high-contrast moments.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button variant="inverse" size="lg">
            Try Yumz Free
          </Button>
          <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
            View live site
          </Button>
        </div>
      </Section>

      <footer className="bg-ink-900 py-10 text-center text-sm text-cream-200">
        <Container>
          Yumz design system · Wave 2
        </Container>
      </footer>
    </main>
  );
}

function Swatch({ step, hex }: { step: string; hex: string }) {
  return (
    <div className="text-center">
      <div
        className="aspect-square w-full rounded-xl ring-1 ring-ink-900/5"
        style={{ backgroundColor: hex }}
      />
      <div className="mt-2 text-[11px] font-medium text-ink-700">{step}</div>
      <div className="text-[10px] uppercase text-ink-400">{hex}</div>
    </div>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="w-28 shrink-0 text-xs font-semibold uppercase tracking-wider text-ink-500">
        {label}
      </div>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}
