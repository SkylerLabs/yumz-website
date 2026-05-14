# Yumz Website

Canonical marketing website for **Yumz** — yumz.social.

**Production:** https://yumz.social (Vercel — skyler-labs-ai/yumz-website)
**Vercel preview:** https://yumz-website.vercel.app
**Webapp:** https://app.yumz.social (EC2 nginx — all CTAs route here)
**GitHub:** https://github.com/SkylerLabs/yumz-website

> Yumz is an AI food discovery app. Point your phone camera at any menu and instantly see every dish: AI-generated photos, calories, allergen flags, smart picks, and shareable food status.

This repo houses the redesigned premium marketing site (Wave 1 scaffold). It is independent of the canonical app repo (`yumz-app` / `menu-vision`) — the app itself continues to be developed separately.

## Stack

- **Vite 6** + **React 18** + **TypeScript**
- **Tailwind CSS 3** with brand tokens anchored to the Yumz orange app icon
- Zero runtime dependencies beyond React (no UI framework lock-in)

## Local development

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # produces dist/
npm run preview      # serve the production build locally
```

Requires Node 20+.

## Project structure

```
.
├── docs/                # Project dossier (read-only reference)
├── public/              # Static assets served at /
│   ├── yumz-icon.svg    # Brand mark (stand-in; replace with official PNG when ready)
│   └── favicon.svg
├── src/
│   ├── components/      # Reusable UI primitives (LogoMark, ...)
│   ├── sections/        # Marketing-page sections (filled in Wave 3)
│   ├── lib/             # Helpers, tokens, content
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css        # Tailwind entry
├── tailwind.config.ts   # Brand color scale, typography, shadows
├── vite.config.ts
├── vercel.json          # Vercel framework + headers + cache rules
└── index.html
```

## Deployment — Vercel

This repo is **Vercel-ready out of the box**. No Nginx, no EC2 assumptions.

### First-time setup
1. Import the repo into Vercel (Project Settings auto-detect Vite via `vercel.json`).
2. No environment variables are required for v1 (`.env.example` is empty).
3. Vercel will produce preview URLs on every push and every PR.

### Deploy flow
- **Preview**: every push to a non-main branch → preview URL
- **Staging review**: the `main` branch deploys to a Vercel preview alias (`staging-yumz-website.vercel.app` — configurable)
- **Production cutover**: `yumz.social` DNS is repointed to the Vercel production deployment only after explicit approval. Legacy Nginx/EC2 path stays as fallback until cutover.

### Build configuration (auto-detected from `vercel.json`)
| Setting | Value |
|---|---|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |
| Node Version | 20.x |

## Brand

Primary brand anchor: the **Yumz orange app icon** (flame-and-fork mark, vertical orange gradient `#FF8A3D → #F26B1F → #D8550F`).

Design direction: **modern consumer AI · iPhone-first · social · motion-rich**. Reference: TikTok + Apple + Beli + Arc Browser + Spotify Wrapped. Warm, appetizing, premium-but-energetic, AI-native, visually addictive. Explicitly _not_ generic AI SaaS, food blog, editorial magazine, luxury restaurant guide, sterile startup template, or childish mobile-game UI.

**Typography:**
- Display: **Geist** (modern grotesk, app-native, consumer-AI feel) — replaced editorial Fraunces
- Body: **Inter**
- Accents: **Geist Mono** for AI badges and tabular numbers

**Color signals:**
- Brand orange — anchor, glow, CTAs
- OLED-warm darks (`night-*`) — AI/algorithm sections
- Mint green (`match-*`) — AI confidence, match scores
- Hot pink (`hype-*`) — trending / social signals (used sparingly)

## Status

| Wave | Scope | Status |
|---|---|---|
| 1 | Scaffold, Vercel-ready, brand tokens, LogoMark | ✅ Done |
| 2 | Design system + primitives (`/system` showcase) | ✅ Done |
| 3 | Redesigned marketing sections (hero → footer) | ✅ Done |
| 3.5 | Re-art direction — AI-native, iPhone-first, motion-rich | ✅ Done |
| 4 | Vercel preview launched · `yumz-website.vercel.app` | ✅ Done |
| 5 | Production cutover (yumz.social DNS → Vercel) | ⏳ awaits explicit approval |

## Marketing sections (Wave 3)

All 12 sections live under `src/sections/` and compose cleanly in `App.tsx`:

| File | Section |
|---|---|
| `Nav.tsx` | Sticky nav with backdrop-blur on scroll + mobile sheet |
| `Hero.tsx` | Eyebrow · "Snap it. Eat it." · CTAs · trust pills |
| `DishMarquee.tsx` | Infinite-scroll dish strip with masked edges |
| `HowItWorks.tsx` | 3 numbered steps |
| `Features.tsx` | 8-card feature grid |
| `Allergens.tsx` | 9-allergen safety grid with copy column |
| `LiveDemo.tsx` | Sample menu → Yumz Pick two-column comparison |
| `SmartModes.tsx` | Interactive pill row with mode descriptions |
| `Community.tsx` | Leaderboard + blog teaser cards |
| `RealProduct.tsx` | 6-frame phone-mockup gallery |
| `FinalCTA.tsx` | Brand-toned closer |
| `Footer.tsx` | Refined footer with product + legal links |

## Design system

Wave 2 introduces seven primitives in `src/components/ui/` plus a `/system` showcase route for design QA. Webfonts: **Inter** (body) + **Fraunces** (display) loaded via Google Fonts CDN with preconnect.

| Primitive | Purpose |
|---|---|
| `Container` | Responsive max-width wrapper. `size` = narrow / default / wide. |
| `Section` | Vertical rhythm + background tone. `tone` = cream / white / brand / ink / fade. |
| `Eyebrow` | Small uppercase label above section headings. |
| `Button` | Pill CTA. `variant` = primary / secondary / ghost / inverse. Renders `<a>` when `href` provided. |
| `Card` | Surface primitive. `variant` = elevated / soft / outline / brand. `interactive` adds hover lift. |
| `Pill` | Tag-style label for smart modes, dietary tags, dish meta. |
| `IconBadge` | Rounded surface for feature icons / emoji. `tone` = soft / brand / ink. |
| `PhoneMockup` | Premium iPhone device frame with Dynamic Island. `size` = sm / md / lg / xl. |
| `AppStoreBadge` | "Download on the App Store" CTA. Swap for official asset before App Store launch. |
| `FloatingChip` | Glassmorphic chip with float animation. Used to orbit the hero iPhone. |
| `MatchBar` | Animated mint-green AI confidence bar (used on AI Pick dish cards). |

Visit `/system` locally (`npm run dev` → http://localhost:5173/system) to see typography, color, and primitive variants laid out.

## Related repos

- `yumz-app` / `menu-vision` — canonical Yumz mobile app. **Do not modify from this project.**
- Deprecated: legacy `yumz-website` / `yumz-landing` (dark-themed placeholders). Useful assets may be recovered as needed.
