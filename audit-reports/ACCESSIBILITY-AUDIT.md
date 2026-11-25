# Accessibility Audit (`ACCESSIBILITY-AUDIT.md`)

**Scope**: Semantic landmarks, heading structure, image `alt` text, keyboard navigation, ARIA dialog/tab semantics, RTL/LTR language switching, and automated baseline checks.

---

## 1. Verified Accessibility Controls
- **Skip Link & Main Landmark**: [src/App.tsx](file:///c:/Users/mayar/OneDrive/Documents/company%20website/src/App.tsx#L106-L119) provides `<a href="#main-content" className="skip-to-content">` and `<main id="main-content" tabIndex={-1}>`.
- **Single `<h1>` Per Page**: Verified across all 32 sitemap routes in `audit_seo.mjs` and all 9 key routes in `tests/e2e.mjs` (`h1Count === 1`).
- **Image `alt` Coverage**: Verified `0` `<img>` elements missing `alt` attributes across all 32 sitemap routes.
- **Modal Dialog Semantics**:
  - `QuoteModal.tsx` uses `role="dialog"`, `aria-modal="true"`, `aria-labelledby="quote-modal-title"`, and `Escape` key dismissal.
  - `SearchModal.tsx` supports `Escape` key dismissal and `aria-label="Search site"`.
- **Tab Controls**: `SweetSlimWellnessShowcase.tsx` and `BrandEditorialSpotlight.tsx` use `role="tablist"`, `role="tab"`, and `aria-selected`.
- **RTL / Arabic Support**: `LanguageContext.tsx` updates `document.documentElement.dir` and `lang` when switching between English (`en`) and Arabic (`ar`).

---

## 2. Issues Found & Remediated
1. **Missing `<h1>` on Brand Showcase Pages** (`P1`, Resolved):
   - `SweetSlimWellnessShowcase.tsx` and `BrandEditorialSpotlight.tsx` rendered `<h2>` as the primary headline on `/brands/sweet-and-slim`, `/brands/yalla-drinks`, and `/brands/squeasy`. Upgraded `.ss-editorial-title` to `<h1>`.
2. **Search Results Lacked Keyboard Navigation** (`P2`, Resolved):
   - `.search-item` entries in [src/components/SearchModal.tsx](file:///c:/Users/mayar/OneDrive/Documents/company%20website/src/components/SearchModal.tsx#L148-L176) were clickable `<div>` elements without `tabIndex` or key handlers. Added `role="button"`, `tabIndex={0}`, and `Enter`/`Space` key handling.

---

## 3. Testing Scope Note
- Automated checks in `tests/e2e.mjs` and `audit_seo.mjs` verified DOM landmarks, heading counts, `alt` attributes, dialog roles, and keyboard handlers in headless Chromium. Full `axe-core` rule scanning and screen-reader (NVDA/VoiceOver) traversal were not executed separately.
