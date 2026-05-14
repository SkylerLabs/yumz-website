# Yumz — Operational Dossier

**Last updated:** 2026-05-09  
**Owner:** Yumz Lead (product), IT Director (infra)  
**Slack:** #yumz (C0B0VQD5RB7)

---

## 1. Executive Summary

**What it is:** Yumz is an AI-powered food discovery app. Users point their phone camera at any restaurant menu (paper, digital, chalkboard, foreign-language), and the app instantly identifies every dish, displays AI-generated photos, calorie estimates, allergen flags, and personalized recommendations. Think "Shazam for menus."

**Current stage:** Late pre-launch. iOS TestFlight Build 2.0(7) is live with 7 testers, 0 crashes, 76 days remaining on the TestFlight window. Build 2.0(8) — which adds Sign in with Apple/Google/Email — is code-complete but blocked on Apple Developer account access and OAuth credential setup.

**Web presence:**
- **Production:** https://yumz.social (landing page + SPA app at `/app/`)
- **Staging:** https://staging.yumz.social
- **TestFlight:** https://testflight.apple.com/join/aADUPecP
- **Bundle ID:** `com.yumz.app`

**Content pipeline status:**
- 1,171 popular dishes across ~40 cuisines in the database
- 945/1,171 (81%) have images generated
- 226 dishes still need images (primarily Chinese, Argentine, Portuguese, Japanese, Georgian, Peranakan, Mamak)
- 597 entries in the `dish_images` table (the actual image assets)
- 64 menu scans recorded, 2,195 scanned dishes extracted

**iOS app status:** Capacitor-based (Vite + React + TypeScript wrapped in native iOS). Build pipeline requires a Mac with Xcode for archive/upload. Detailed SOP exists at `products/yumz/BUILD_2.0.8_SOP.md`.

**Social / brand:**
- YouTube: @Yumz-SeeEatShare (created, needs assets)
- X/Twitter: @YumzSocial (API keys configured, commenting engine built via `x-proxy` edge function)

---

## 2. Architecture

### Frontend (iOS App + Web)
- **Framework:** Vite + React 18 + TypeScript + Tailwind CSS + shadcn/ui
- **Mobile wrapper:** Capacitor 8 (iOS and Android targets; iOS is primary)
- **UI library:** Radix UI primitives, Phosphor Icons, Sonner toasts
- **State management:** React Query (`@tanstack/react-query`), React Context
- **Routing:** React Router DOM (SPA)
- **Analytics:** PostHog (via `VITE_POSTHOG_KEY` / `VITE_POSTHOG_HOST`)
- **Build output:** `dist/` → deployed to `/var/www/yumz/app/` (production) or `/var/www/staging/yumz/app/` (staging)

### Backend (Supabase)
- **Project:** `tnsqmpsxzvdyxvtuient` (region: AWS eu-west-1)
- **Database:** PostgreSQL via Supabase (pooler endpoint: `aws-0-eu-west-1.pooler.supabase.com:6543`)
- **Auth:** Supabase Auth (Apple, Google, Email planned for Build 2.0(8); currently anonymous fallback)
- **Storage:** Supabase Storage (`menu-photos` bucket for uploaded menu images)
- **Edge Functions:** 11 Deno-based functions (see §2.1 below)

### AI / ML Pipeline
- **Menu OCR:** Google Gemini 2.5 Flash via OpenRouter API (primary) or Lovable gateway (legacy fallback)
- **Two-pass menu analysis:** 
  - Pass 1: Streaming OCR extraction → fires `onItem` callback per dish
  - Pass 2: Background enrichment (descriptions, allergens, dietary tags, calories) via Gemini
- **Image generation (batch):** fal.ai FLUX.1 Schnell (`fal-ai/flux/schnell`) — "professional food photography" prompts
- **Image generation (on-demand):** OpenRouter → `google/gemini-2.5-flash-image` for single-dish generation
- **Prompt learning:** Corrections stored in `prompt_corrections` table; every 5 corrections, Gemini analyzes patterns and generates updated rules stored in `prompt_rules`
- **Dish identification:** Photo → Gemini vision → match against recent menu context

### Infrastructure
- **Server:** AWS EC2 `34.202.119.144` (Ubuntu 24.04, r6i.2xlarge, us-east-1)
- **Web server:** Nginx with SSL (Let's Encrypt, cert shared across domains via `preflight.biz` cert bundle, expires 2026-07-31, auto-renew)
- **Process management:** PM2 (no Yumz-specific PM2 process — it's a static SPA + Supabase edge functions)
- **DNS:** GoDaddy → A records point to EC2 Elastic IP
- **CI/CD:** GitHub Actions (`.github/workflows/deploy.yml` — SSH to EC2, git pull on `/tmp/yumz-src`)

### 2.1 Supabase Edge Functions (11 total)

| Function | Purpose | Key Dependencies |
|----------|---------|-----------------|
| `analyze-menu` | Menu image → structured dish list via Gemini vision | `OPENROUTER_API_KEY` or `LOVABLE_API_KEY` |
| `batch-images` | Multi-action: discover cuisines, generate dish lists, batch-generate images, status | `GOOGLE_AI_KEY`, `FAL_KEY`, `SUPABASE_SERVICE_ROLE_KEY` |
| `generate-food-image` | Single-dish image generation (fal.ai FLUX or Gemini image) | `FAL_KEY`, `OPENROUTER_API_KEY` |
| `generate-prompt` | Smart prompt generation using learned rules + corrections | `GOOGLE_AI_KEY`, `SUPABASE_SERVICE_ROLE_KEY` |
| `get-dish-images` | Fetch images for dish names (canonicalized slug matching) | `SUPABASE_SERVICE_ROLE_KEY` |
| `identify-dish` | Photo → dish identification using Gemini vision + menu context | `OPENROUTER_API_KEY` or `LOVABLE_API_KEY` |
| `notifications` | Admin dashboard for notification stats + SQL migration runner | `SUPABASE_SERVICE_ROLE_KEY` |
| `prompt-learning` | Save prompt corrections, auto-analyze patterns every 5 corrections | `GOOGLE_AI_KEY`, `SUPABASE_SERVICE_ROLE_KEY` |
| `store-dish-image` | Store generated/uploaded dish images with canonical slug | `SUPABASE_SERVICE_ROLE_KEY` |
| `store-menu-scan` | Persist menu scan metadata + dishes + optional photo upload | `SUPABASE_SERVICE_ROLE_KEY` |
| `x-proxy` | OAuth 1.0a X/Twitter API proxy for @YumzSocial posts/replies | `X_BEARER_TOKEN`, `X_CONSUMER_KEY`, `X_CONSUMER_SECRET`, `X_ACCESS_TOKEN`, `X_ACCESS_SECRET` |

---

## 3. Repository Structure

### Primary Repository
- **GitHub:** `git@github.com:robinmtzieme-commits/menu-vision.git`
- **Current branch:** `feature/automated-qa-pipeline` (checked out on EC2)
- **Key branches:** `fix/security-qa-p0s` (Build 2.0(8) with auth), `marketing-deploy-v2` (brand cleanup), 20+ feature branches
- **Origin:** Lovable.dev (AI code editor) — the README still references Lovable project URLs

### EC2 Source Locations

| Path | Contents |
|------|----------|
| `/home/ubuntu/.openclaw/workspace/menu-vision/` | Primary source repo (full clone with `src/`, `supabase/`, `ios/`, `tests/`) |
| `/home/ubuntu/.openclaw/workspace/yumz/` | App Store listing copy + privacy policy |
| `/home/ubuntu/.openclaw/workspace/yumz-website/` | **DEPRECATED** — old dark-themed placeholder site |
| `/home/ubuntu/.openclaw/workspace/yumz-landing/` | **DEPRECATED** — old dark-themed landing page (has `/blog/` and `/leaderboard/` subdirs) |
| `/home/ubuntu/.openclaw/workspace-pa/yumz-admin/` | Admin portal build spec (single-page dashboard for blog schedule + leaderboard) |
| `/home/ubuntu/.openclaw/workspace-yumz-lead/` | Yumz Lead agent workspace (SOUL.md, AGENTS.md, operations symlinks) |
| `/home/ubuntu/.openclaw/agents/yumz-lead/` | Yumz Lead agent config + sessions |
| `/home/ubuntu/.openclaw/workspace/products/yumz/` | Product docs (PRODUCT.md, STATUS.md, BACKLOG.md, RELEASE_CHECKLIST.md, APP_STORE_LISTING.md, BUILD_2.0.8_SOP.md, PRIVACY_POLICY_DRAFT.md) |
| `/var/www/yumz/` | Nginx production root (landing: `index.html`, app: `app/`, blog, leaderboard, screens) |
| `/var/www/staging/yumz/` | Nginx staging root (same structure) |
| `/tmp/yumz-src/` | **Gone** — was the old deploy target referenced in GitHub Actions; empty/missing post-rebuild |

### Directory Tree (menu-vision repo)
```
menu-vision/
├── .github/workflows/        # CI: deploy.yml (SSH pull), e2e-maestro.yml (iOS tests)
├── dist/                     # Built SPA output (assets, icons, index.html, manifest.json)
├── ios/                      # Capacitor iOS project (App.xcworkspace, cordova plugins)
├── public/                   # Static assets (icons, manifest.json)
├── scripts/                  # build-mobile.sh (Capacitor sync helper)
├── src/
│   ├── components/           # React components (BottomNav, FoodCard, DishGrid, MenuUpload, ShareCards, admin/, ui/)
│   ├── hooks/                # Custom React hooks
│   ├── integrations/supabase # Auto-generated Supabase client + types
│   ├── lib/                  # Core logic (menuAnalyzer.ts, storage.ts, imageCache.ts, openrouterImage.ts, analytics.ts, notifications.ts, sharing.ts, etc.)
│   ├── pages/                # Route pages (Index, MenuView, DishDetail, MyDishes, Admin, FoodMap, GroupDining, TasteProfile, Stats, Notifications, SharedMenu, History)
│   └── test/                 # Test utilities
├── supabase/
│   ├── functions/            # 11 edge functions (see §2.1)
│   └── migrations/           # 001_notifications_outbox.sql
├── tests/
│   ├── e2e/                  # Playwright tests (yumz.spec.ts — L1 smoke, L2 functional)
│   └── maestro/flows/        # Maestro iOS test flows (11 YAML files: L1-L3 levels)
├── capacitor.config.json     # Capacitor config (appId: com.yumz.app, webDir: dist)
├── vite.config.ts            # Vite build config (React SWC, lovable-tagger, sourcemaps)
├── tailwind.config.ts
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── vitest.config.ts / playwright.config.ts
└── package.json              # "vite_react_shadcn_ts" — scripts: dev, build, cap:sync, mobile:build, test
```

---

## 4. Environment + Secrets Inventory

### Client-Side (Vite env vars — `VITE_*`)
| Variable | Purpose |
|----------|---------|
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase anon key |
| `VITE_OPENROUTER_API_KEY` | OpenRouter API (menu analysis, image gen) — **LEAKED IN CLIENT BUNDLE, needs rotation** |
| `VITE_GOOGLE_AI_KEY` | Google AI Studio key — **LEAKED IN CLIENT BUNDLE, needs rotation** |
| `VITE_FAL_KEY` | fal.ai image generation — **LEAKED IN CLIENT BUNDLE, needs rotation** |
| `VITE_POSTHOG_KEY` | PostHog analytics project key |
| `VITE_POSTHOG_HOST` | PostHog instance URL |

**Security note:** Three API keys (OpenRouter, Google AI, fal.ai) are exposed in the client JavaScript bundle. The edge functions now handle all API calls, so the app still works. Keys need to be rotated and removed from client-side code.

### Edge Function Secrets (Supabase environment)
| Secret | Used By |
|--------|---------|
| `SUPABASE_URL` | All functions (auto-set by Supabase) |
| `SUPABASE_SERVICE_ROLE_KEY` | All functions (auto-set by Supabase) |
| `GOOGLE_AI_KEY` | batch-images, generate-prompt, prompt-learning |
| `OPENROUTER_API_KEY` | analyze-menu, generate-food-image, identify-dish |
| `FAL_KEY` | batch-images, generate-food-image |
| `LOVABLE_API_KEY` | analyze-menu, identify-dish (legacy fallback) |
| `X_BEARER_TOKEN` | x-proxy |
| `X_CONSUMER_KEY` | x-proxy |
| `X_CONSUMER_SECRET` | x-proxy |
| `X_ACCESS_TOKEN` | x-proxy |
| `X_ACCESS_SECRET` | x-proxy |

---

## 5. Operational Runbook

### How Batch Image Generation Works

The batch image pipeline runs via the `batch-images` edge function with multiple actions:

1. **`discover`** — Uses Gemini to expand cuisines (40+ parent cuisines × sub-cuisines via `CUISINE_EXPANSION` map). Generates dish lists per cuisine, inserts into `popular_dishes` with `has_image=false`.

2. **`generate_list`** — For a specific cuisine, asks Gemini for 30 most popular dishes. Inserts new ones into `popular_dishes` (deduped by `canonical_slug`).

3. **`batch_generate`** — Takes dishes where `has_image=false`, generates images via fal.ai FLUX.1 Schnell with prompt: `"professional food photography: {dish_name}, {description}. Plated beautifully in a restaurant setting, warm lighting, shallow depth of field. No text or watermarks."` Upserts results into `dish_images`, marks `popular_dishes.has_image=true`.

4. **`status`** — Returns cuisine coverage breakdown, total dishes, images pending.

**Current status:** No active cron job on the EC2 server (crontab is empty). The batch image generation must be triggered manually by calling the edge function endpoint. Previously referenced "batch-images cron" was likely a manual/scripted process.

**Invocation:**
```bash
curl -X POST 'https://tnsqmpsxzvdyxvtuient.supabase.co/functions/v1/batch-images' \
  -H 'Authorization: Bearer <ANON_KEY>' \
  -H 'Content-Type: application/json' \
  -d '{"action": "batch_generate", "limit": 10}'
```

### Deploy Flow (Web)

**Production (yumz.social):**
1. Push to `main` branch on GitHub
2. GitHub Actions SSH into EC2, pulls latest to `/tmp/yumz-src` (currently broken — `/tmp/yumz-src` doesn't exist post-rebuild)
3. Build locally: `pnpm run build`
4. Copy `dist/` contents to `/var/www/yumz/app/`
5. Landing page HTML is separate at `/var/www/yumz/index.html`

**Staging (staging.yumz.social):**
- Same process targeting `/var/www/staging/yumz/app/`

**Edge Functions:**
```bash
# Deploy a single function
supabase functions deploy <function-name> --project-ref tnsqmpsxzvdyxvtuient

# Deploy all
supabase functions deploy --project-ref tnsqmpsxzvdyxvtuient
```
Requires `SUPABASE_ACCESS_TOKEN` (currently **not available** — this is a P0 blocker in the backlog).

### iOS Build (Capacitor)

Full SOP at `/home/ubuntu/.openclaw/workspace/products/yumz/BUILD_2.0.8_SOP.md`. Summary:
1. `pnpm install && pnpm run build`
2. `pnpm cap sync ios`
3. Open `ios/App/App.xcworkspace` in Xcode
4. Bump version/build, add capabilities, configure signing
5. Archive → Upload to App Store Connect
6. TestFlight → App Store submission

**Requires:** Mac with Xcode, Apple Developer signing certs, Apple Services ID + key, Google OAuth client ID.

### Nginx Configuration

All Yumz-related nginx config is in `/etc/nginx/sites-enabled/domains-placeholder.conf`:
- HTTP → HTTPS redirect for `yumz.social` and `staging.yumz.social`
- Production: root at `/var/www/yumz/`, app SPA at `/var/www/yumz/app/` with `try_files` fallback
- Staging: root at `/var/www/staging/yumz/` with same structure
- SSL: Let's Encrypt cert at `/etc/letsencrypt/live/preflight.biz/` (shared multi-domain cert)
- Special routes: `/blog/`, `/leaderboard/`, `/screens/` served from landing root; everything else → SPA

---

## 6. Current System State

### What Works ✅
- **Menu scanning pipeline:** Camera → Gemini OCR → dish extraction with streaming → allergen/nutrition enrichment
- **Two-pass menu analysis:** Streaming first pass for speed, background enrichment second pass
- **Dish image display:** `get-dish-images` function returns images by canonical slug
- **Image generation (single):** On-demand via Gemini image or fal.ai
- **Menu type classification:** Standard, category-list, tasting-menu, buffet, handwritten, bilingual
- **Non-food filtering:** Client-side regex patterns strip booking info, phone numbers, URLs, etc.
- **Production web (yumz.social):** Landing page + SPA app both live
- **Staging (staging.yumz.social):** Functional, SSL valid
- **TestFlight Build 2.0(7):** Live, 7 testers, 0 crashes
- **Admin panel:** In-app admin page (`/admin`) with tabs: flagged images, user images, scans, batch, blog, X posts, leaderboard, notifications
- **X/Twitter proxy:** OAuth 1.0a signing for @YumzSocial posts
- **Notification infrastructure:** Outbox table, send log, device token storage, preferences
- **E2E tests:** Playwright (web) + Maestro (iOS) test suites exist with L1-L3 levels
- **Prompt learning system:** Corrections → pattern analysis → automated rule generation
- **Sharing:** Share cards with mood tones (fire, vibe, honest, mid, elite, cozy, lowkey)

### What's Broken / Blocked ❌
1. **226 dishes missing images** — Chinese (66), Argentine (47), Portuguese (37), Japanese (30), Georgian (23), Peranakan (15), Mamak (8) — likely caused by the previously reported 401 auth issue with upstream image generation API (fal.ai key expired or rate-limited)
2. **3 leaked API keys** — `VITE_OPENROUTER_API_KEY`, `VITE_GOOGLE_AI_KEY`, `VITE_FAL_KEY` exposed in client bundle. Edge functions handle calls now, but keys need rotation.
3. **Build 2.0(8) hard blockers:**
   - Apple Developer team access / App Store Connect invite
   - Google OAuth client ID + secret (for Supabase Google provider)
   - Apple Services ID + private key (for Supabase Apple provider)
   - Mac with Xcode + signing certs for Capacitor iOS archive
4. **`SUPABASE_ACCESS_TOKEN` missing** — Can't deploy edge function updates from CLI
5. **GitHub Actions deploy broken** — Target path `/tmp/yumz-src` doesn't exist post-rebuild. CI workflow needs update to use `/home/ubuntu/.openclaw/workspace/menu-vision/`
6. **No active cron** — Batch image generation is not automated; no crontab entries exist
7. **Prompt rules table empty** — `prompt_rules` has 0 rows; only 3 prompt corrections logged so far (threshold is 5 to trigger rule generation)

### Content Pipeline Stats (Live DB)

| Metric | Count |
|--------|-------|
| Popular dishes (catalog) | 1,171 |
| Dishes with images | 945 (81%) |
| Dishes needing images | 226 (19%) |
| Dish image assets | 597 |
| Cuisines covered | ~40 |
| Menu scans recorded | 64 |
| Scanned dishes extracted | 2,195 |
| Shared menus | 2 |
| Prompt corrections | 3 |
| Prompt rules generated | 0 |
| Push device tokens | 0 |
| Notifications sent | 0 |

---

## 7. Database Schema

### Tables (17 total in `public` schema)

| Table | Purpose |
|-------|---------|
| `popular_dishes` | Catalog of known dishes per cuisine (name, slug, description, cuisine, `has_image` flag, priority) |
| `dish_images` | Generated/uploaded images keyed by canonical dish slug + restaurant (image_url, prompt, source, verified, flagged) |
| `menu_scans` | Records of menu photo scans (restaurant, location, photo URL, detected language, dish count) |
| `scanned_dishes` | Individual dishes extracted from menu scans |
| `shared_menus` | Menus shared between users |
| `menu_selections` | User selections from shared menus |
| `menu_cache` | Cached menu analysis results |
| `prompt_corrections` | Human corrections to AI image prompts (for learning loop) |
| `prompt_rules` | Auto-generated prompt improvement rules (from corrections analysis) |
| `classification_rules` | Menu classification rules |
| `device_push_tokens` | APNs device tokens (with auth_status, timezone, locale) |
| `notifications_outbox` | Push notification queue (type, title, body, deeplink, status, suppression) |
| `notification_send_log` | APNs delivery audit trail |
| `locations` | Location data |
| `vendors` | Vendor/restaurant metadata |
| `audit_log` | System audit trail |
| `image_stats` | Image generation statistics |

### Key Relationships
- `dish_images` uniquely keyed by `(dish_name, restaurant_name)` — canonical slug-based
- `notification_send_log.outbox_id` → `notifications_outbox.id` (FK cascade)
- `notifications_outbox` has dedupe index on `(user_id, dedupe_key)` for active notifications

---

## 8. QA + Testing

### Automated Testing

**Playwright (Web E2E):**
- Location: `tests/e2e/yumz.spec.ts`
- Config: `playwright.config.ts` at repo root
- Base URL: `https://yumz.social/app`
- Levels:
  - **L1 Smoke:** App loads, bottom nav renders (faves/my spots/snap/wrapped/my vibe), no JS crashes, page title set, tab navigation works
  - **L2 Functional:** Faves interaction, back navigation, scan flow, share flow
- Run: `npx playwright test` (from `tests/e2e/` directory)
- Report: `tests/e2e/REPORT.md`, screenshots in `tests/e2e/screenshots/`

**Maestro (iOS Native):**
- Location: `tests/maestro/flows/` (11 YAML flow files)
- Levels:
  - L1: App launch, tab navigation, page content verification
  - L2: Back navigation, faves interaction, scan flow, share flow
  - L3: Background/resume, orientation change, permission denied, scroll overflow
- Runs on: macOS (CI via GitHub Actions on `macos-latest`)

**Vitest (Unit):**
- Config: `vitest.config.ts`
- Run: `pnpm test` or `pnpm test:watch`

### Manual Testing Checklist

1. **Menu scan end-to-end:** Open app → tap Snap → take photo of a menu → verify dishes appear with images, descriptions, allergens
2. **Dish detail:** Tap any dish → verify image, nutrition info, dietary tags display
3. **Rating flow:** Order a dish → rate (loved / not-for-me) → verify saved in My Dishes
4. **Share flow:** Select dishes → pick mood tone → generate share card → share to target
5. **Admin panel:** Navigate to `/admin` → verify flagged images, batch status, scan history
6. **Offline resilience:** Start scan with network on → kill network mid-scan → verify graceful failure
7. **Foreign menu:** Scan a non-English menu → verify translation in `name` field, original preserved in `originalName`

### API Endpoints for Testing

```bash
# Check batch image status
curl -X POST 'https://tnsqmpsxzvdyxvtuient.supabase.co/functions/v1/batch-images' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRuc3FtcHN4enZkeXh2dHVpZW50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4MTMyNzgsImV4cCI6MjA5MTM4OTI3OH0.xY5R4ow8QEHkQ4aAfRUt359iHemxM_PTa5fr5k-8VO0' \
  -H 'Content-Type: application/json' \
  -d '{"action": "status"}'

# Fetch images for specific dishes
curl -X POST 'https://tnsqmpsxzvdyxvtuient.supabase.co/functions/v1/get-dish-images' \
  -H 'Authorization: Bearer <ANON_KEY>' \
  -H 'Content-Type: application/json' \
  -d '{"dish_names": ["Pad Thai", "Margherita Pizza"]}'

# Test menu analysis (requires base64 image)
curl -X POST 'https://tnsqmpsxzvdyxvtuient.supabase.co/functions/v1/analyze-menu' \
  -H 'Authorization: Bearer <ANON_KEY>' \
  -H 'Content-Type: application/json' \
  -d '{"image": "data:image/jpeg;base64,..."}'
```

---

## 9. AI/Workflow Context

### Menu Interpretation Pipeline

```
Camera → base64 image
    → analyze-menu (Gemini 2.5 Flash via OpenRouter)
        → Menu type classification (standard/category-list/tasting-menu/buffet/handwritten/bilingual)
        → Dish extraction (name, originalName, price, category, sectionHeader, isModifier)
        → Client-side non-food filtering (regex patterns for phone numbers, URLs, booking info)
    → menuAnalyzer.ts (two-pass)
        Pass 1: Streaming OCR → fire onItem per dish (fast UI)
        Pass 2: Background enrichment (descriptions, allergens, dietary tags, calories via Gemini)
    → get-dish-images (canonical slug lookup → dish_images table)
    → Display: dish card with image, allergens, calories, dietary tags
```

### Image Generation Pipeline

**Batch (catalog building):**
```
batch-images "discover" → Gemini lists dishes for each cuisine+sub-cuisine
    → Insert into popular_dishes (canonical_slug dedup)
batch-images "batch_generate" → Take N dishes where has_image=false
    → For each: generate prompt → fal.ai FLUX.1 Schnell → store in dish_images
    → Mark popular_dishes.has_image = true
```

**On-demand (user-triggered):**
```
User scans menu → dish not in dish_images
    → generate-food-image called with dish name
    → fal.ai FLUX.1 or Gemini image generation
    → store-dish-image persists result
```

### Prompt Learning Loop

```
Admin corrects an AI-generated image prompt
    → prompt-learning "save" → stores in prompt_corrections
    → Every 5 corrections: Gemini analyzes all corrections
    → Extracts patterns ("what did the human consistently change?")
    → Generates rules → stored in prompt_rules
    → generate-prompt reads rules + recent corrections as few-shot examples
    → Future image prompts are improved automatically
```

Currently: 3 corrections saved, 0 rules generated (threshold: 5).

### Dish Canonicalization

All dish matching uses a `canonicalize()` function (identical across edge functions and client):
1. Lowercase + trim
2. Strip accents (é→e, ö→o, ç→c, etc.)
3. Remove non-alphanumeric characters
4. Remove filler words (with, served, and, the, a, of, grilled, roasted, etc.)
5. Split into words, sort alphabetically, join with hyphens

Result: `"Grilled Chicken with Herbs"` → `"chicken-herbs"`

This enables cross-restaurant dish matching — same canonical slug regardless of menu phrasing.

---

## 10. Priority Map

### P0 — Critical Blockers

| # | Issue | Owner | Status | Dependency |
|---|-------|-------|--------|------------|
| 1 | Get `SUPABASE_ACCESS_TOKEN` | Robin/IT | Blocked | Need token from Supabase dashboard to deploy edge function updates via CLI |
| 2 | Fix 226 dishes missing images | Yumz Lead | Blocked on #1 | Deploy updated batch-images function, then run `batch_generate` for Chinese/Japanese/Argentine/etc. |
| 3 | Apple Developer team access | Robin | Blocked | Need invite to Apple Developer account for Build 2.0(8) submission |
| 4 | Google OAuth credentials | Robin | Blocked | Google Cloud Console → create iOS + Web OAuth clients → add to Supabase |
| 5 | Apple Services ID + key | Robin | Blocked | Apple Developer portal → create Services ID + Sign in with Apple key → add to Supabase |

### P1 — High Priority

| # | Issue | Owner | Status |
|---|-------|-------|--------|
| 6 | Rotate 3 leaked API keys | IT/Yumz Lead | Open — keys exposed in client JS bundle |
| 7 | Build 2.0(8) Capacitor archive | Robin (needs Mac) | Blocked on #3-5 |
| 8 | App Store submission | Yumz Lead | Blocked on #7 + QA pass |
| 9 | Final QA pass | QA | Blocked on #2 (100% image coverage) |
| 10 | Fix GitHub Actions deploy | IT | Open — `/tmp/yumz-src` doesn't exist post-rebuild |

### P2 — Medium Priority

| # | Issue | Owner | Status |
|---|-------|-------|--------|
| 11 | Add unique constraint on `dish_images(dish_name, restaurant_name)` | IT | Open |
| 12 | App Store screenshots (6.7", 6.5", 5.5") | Yumz Lead | Open |
| 13 | Privacy policy → live at yumz.social/privacy | IT | Draft exists |
| 14 | Replace test menu corpus (17 food photos, not menus) | Yumz Lead | Open |
| 15 | Set up batch image cron | IT/Yumz Lead | Open — no automation currently |

### P3 — Low Priority

| # | Issue | Owner | Status |
|---|-------|-------|--------|
| 16 | Review cron efficiency (dish count growing: 745→1171) | Yumz Lead | Open |
| 17 | YouTube channel assets (logo, banner, description) | Yumz Lead | Open |
| 18 | Blog publishing pipeline (26 posts scheduled Apr–Jul) | PA/Yumz Lead | Open — admin portal spec exists |

---

## 11. Historical Context

### Why Supabase in eu-west-1?
The Yumz Supabase project (`tnsqmpsxzvdyxvtuient`) is in AWS eu-west-1 (Ireland), while the EC2 server is in us-east-1 (Virginia). This creates cross-Atlantic latency for edge function invocations. Likely chosen during initial Lovable.dev project creation (Lovable may default to EU). The latency impact is minimal for the use case since:
- Edge functions run on Supabase's infra (Deno Deploy), not on EC2
- Client calls go directly to Supabase, not through EC2
- Database queries from edge functions are local (same region as Supabase)

### Origin Story: Lovable.dev
The repo name is still `vite_react_shadcn_ts` in `package.json`. The project was scaffolded via Lovable.dev (AI code editor) which generates Vite + React + shadcn/ui boilerplate and pushes to GitHub. The README still references Lovable project URLs. The `lovable-tagger` plugin is still in the Vite config (development mode only). This is cosmetic — the codebase has been heavily customized beyond the scaffold.

### YouTube Channel Purpose
@Yumz-SeeEatShare was created as a brand presence channel. The strategy was:
1. Use it as a content hub for food discovery videos
2. Enable X/Twitter (@YumzSocial) commenting engine — post food content, drive app installs
3. Build SEO backlinks from YouTube to yumz.social

Channel is empty and needs assets before any content goes up.

### X/Twitter Commenting Strategy
The `x-proxy` edge function is a full OAuth 1.0a X API proxy for @YumzSocial. The plan:
1. Auto-post dish photos and food content to @YumzSocial
2. Reply to food-related tweets with Yumz dish info
3. Build organic engagement in the food discovery niche
4. Drive traffic to yumz.social and TestFlight

API keys are configured and the proxy is functional.

### Brand Evolution
- **yumz-website** (dark-themed) — DEPRECATED. Was an early SkylerLabs-branded placeholder.
- **yumz-landing** (dark-themed) — DEPRECATED. Had blog and leaderboard sections.
- **menu-vision** (current) — The canonical app. Name "menu-vision" reflects the original concept; "Yumz" is the consumer brand.
- The marketing-deploy-v2 branch replaced SkylerLabs branding with Yumz-native branding (logo, favicon, nav, footer).

### Capacitor Config Note
The `capacitor.config.json` references `jywiaghwrkxvypsmblyb.supabase.co` in `server.allowNavigation` — this appears to be an **old/different Supabase project ref**, not the current `tnsqmpsxzvdyxvtuient`. This may need updating but doesn't affect functionality since Capacitor's `allowNavigation` is for native WebView navigation, and the app communicates with Supabase via API calls, not page navigation.

---

## Quick Reference

| Item | Value |
|------|-------|
| **Domain** | yumz.social |
| **Staging** | staging.yumz.social |
| **GitHub** | `robinmtzieme-commits/menu-vision` |
| **Supabase ref** | `tnsqmpsxzvdyxvtuient` |
| **Supabase region** | eu-west-1 |
| **Bundle ID** | `com.yumz.app` |
| **TestFlight** | https://testflight.apple.com/join/aADUPecP |
| **Current build** | 2.0(7) live / 2.0(8) code-complete |
| **Slack** | #yumz (C0B0VQD5RB7) |
| **Prod root** | `/var/www/yumz/` |
| **Staging root** | `/var/www/staging/yumz/` |
| **Source** | `/home/ubuntu/.openclaw/workspace/menu-vision/` |
| **Product docs** | `/home/ubuntu/.openclaw/workspace/products/yumz/` |
| **Nginx config** | `/etc/nginx/sites-enabled/domains-placeholder.conf` |
| **SSL cert** | `/etc/letsencrypt/live/preflight.biz/` (shared, expires 2026-07-31) |
| **X/Twitter** | @YumzSocial |
| **YouTube** | @Yumz-SeeEatShare (UCu3Gc7nM6BQuzOa4f0ZkIrA) |