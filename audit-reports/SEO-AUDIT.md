# Technical SEO Audit (`SEO-AUDIT.md`)

**Scope**: On-page metadata, heading hierarchy, `robots.txt`, XML sitemap, canonicals, `hreflang`, OpenGraph/Twitter cards, Schema.org JSON-LD, and `noindex` handling across all 32 canonical routes.

---

## 1. Automated 32-Route Audit Results
- **Initial Audit (`audit_seo.mjs`)**: Audited 32 sitemap routes -> **70 issues** detected:
  - `31` routes returned duplicate `<meta name="description">` because `index.html` contained a static `<meta name="description">` without `data-rh="true"`.
  - `24` routes had duplicate `AWA Group` brand suffixes in `<title>` (e.g., `Industry Solutions • AWA Group | AWA Group`).
  - `/brands/sweet-and-slim`, `/brands/yalla-drinks`, and `/brands/squeasy` lacked `<SEO>`, canonical links, OG/Twitter tags, and `<h1>`.
- **Post-Fix Audit (`audit_seo.mjs` after rebuild)**: Audited **32 / 32** sitemap routes -> **`0` issues**:
  - Unique `<title>` on 32 / 32 routes.
  - Unique `<meta name="description">` on 32 / 32 routes.
  - Exactly `1` `<link rel="canonical">` (`https://awagroup.net/...`) per indexable route.
  - Exactly `1` `<h1>` per route.
  - Complete OpenGraph (`og:site_name`, `og:type`, `og:url`, `og:title`, `og:description`, `og:image`, `og:locale`) and Twitter Card (`summary_large_image`) tags.
  - `0` images missing `alt` attributes and `0` thin-content pages (`< 80` words).

---

## 2. Technical SEO & Structured Data
- **`robots.txt`** ([public/robots.txt](file:///c:/Users/mayar/OneDrive/Documents/company%20website/public/robots.txt)): Allows `/` and points to `Sitemap: https://awagroup.net/sitemap.xml`.
- **XML Sitemap** ([public/sitemap.xml](file:///c:/Users/mayar/OneDrive/Documents/company%20website/public/sitemap.xml)): Contains all 32 canonical indexable V9 routes.
- **404 `noindex`** ([src/pages/NotFoundPage.tsx](file:///c:/Users/mayar/OneDrive/Documents/company%20website/src/pages/NotFoundPage.tsx)): Emits `<meta name="robots" content="noindex, nofollow" />` and omits canonical/`hreflang`.
- **Schema.org JSON-LD** ([src/components/JsonLd.tsx](file:///c:/Users/mayar/OneDrive/Documents/company%20website/src/components/JsonLd.tsx), [src/components/SEO.tsx](file:///c:/Users/mayar/OneDrive/Documents/company%20website/src/components/SEO.tsx)):
  - Global `Organization` (verified Cairo HQ address, phone, email, social profiles) + `WebSite` (`inLanguage: ['en', 'ar']`).
  - Per-page `WebPage` + `BreadcrumbList` generated from verified route segments.
- **International SEO (`hreflang`)**: `SEO.tsx` emits `en`, `ar`, and `x-default` alternates for the bilingual client-side experience.

---

## 3. External Verification Note
- Live Google Search Console indexing status and live Google Rich Results Test validation against `https://awagroup.net` require external verification once production DNS/domain mapping is active.
