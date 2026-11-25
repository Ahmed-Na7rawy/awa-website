# Remaining Issues, External Actions & Verification Notes (`REMAINING-ISSUES.md`)

---

## 1. Required Manual Action (External Service)
- **[P2] One-Time FormSubmit Email Activation (`info@awa-group.net`)**:
  - `ContactPage.tsx`, `QuoteModal.tsx`, and `CareersPage.tsx` submit inquiries to `https://formsubmit.co/ajax/info@awa-group.net`.
  - **Action Required**: Submit one test inquiry from the live production domain (`https://awa-website-seven.vercel.app/contact` and again once custom domain `https://awagroup.net` is active) and click the **"Activate Form"** confirmation link sent to `info@awa-group.net` (check Spam/Junk if not in Inbox).

---

## 2. Accepted / Low-Priority Items
- **[P3] Dev-Only `npm audit` Advisories**:
  - `npm audit --omit=dev` reports **0** production vulnerabilities.
  - `npm audit` reports 4 advisories confined to `devDependencies` (`esbuild <=0.24.2` via `vite 5.4.11`, `sharp <=0.35.5-rc.1`, `source-map-js 1.0.0–1.2.1`). None are included in the deployed `dist/` bundle; upgrading `vite` to v6/v7 was deferred to avoid unnecessary major-version churn.
- **[P3] Legacy Unused Originals in `public/`**:
  - Original `.jpg`/`.png` copies of the 34 assets converted to `.webp` remain in `public/` as harmless files on disk (`onError` fallbacks or untouched assets); they are not downloaded unless explicitly referenced.

---

## 3. Tests Requiring Live / External Environments
- **Google Search Console & Google Rich Results Test**: Live indexing status, sitemap processing, and live Rich Results validation must be verified in Google Search Console once `https://awagroup.net` is connected and crawled.
- **Field Core Web Vitals (`INP` at p75)**: Lab testing verified `TBT` (`<= 167 ms`) in headless Chromium; real-user `INP` requires field telemetry (e.g., CrUX / Vercel Speed Insights) after production traffic accrues.
- **Full `axe-core` / Assistive Technology Audit**: Automated E2E checks verified ARIA landmarks, single `<h1>`, `alt` attributes, dialog roles, and keyboard search navigation; a manual screen-reader pass (NVDA / VoiceOver) is recommended prior to major future UI additions.
