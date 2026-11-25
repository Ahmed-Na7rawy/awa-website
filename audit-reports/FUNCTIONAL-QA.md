# Functional QA Report (`FUNCTIONAL-QA.md`)

**Test Environment**: Built production bundle (`dist/`) served via `npx vite preview`, executed in headless Chromium via Chrome DevTools Protocol (`tests/e2e.mjs`).  
**Latest Run Result**: **`38 passed, 0 failed`** (`npm run test:e2e`).

---

## 1. Tested Functionality Matrix

| Area | Test Case | Expected Behavior | Observed Result |
| :--- | :--- | :--- | :--- |
| **Page Loading** | Load `/`, `/about`, `/solutions`, `/brands`, `/brands/sweet-and-slim`, `/brands/yalla-drinks`, `/contact`, `/careers`, `/knowledge` | All routes render content with `h1Count === 1`, `<main#main-content>`, and zero broken images | **Pass** (9/9 routes) |
| **Navigation** | All Navbar & Footer internal links + browser `history.back()` / `history.forward()` | Every link resolves with `0` 404s; history transitions cleanly | **Pass** |
| **Dead Links** | Scan all `<a>` tags on `/` for `#`, empty `href`, or `javascript:` | Zero placeholder/dead links | **Pass** |
| **Contact Links** | Check `mailto:` and `tel:` links | Valid `info@awa-group.net` and telephone targets | **Pass** |
| **Mobile Menu** | Open hamburger drawer at `390×844` | Mobile drawer opens with navigation links | **Pass** |
| **Language Switcher** | Toggle EN / العربية | Activates `rtl` layout and Arabic copy | **Pass** |
| **Search Modal** | Click `.search-toggle-btn`, enter `"dairy"` | Filters and displays matching `.search-item` results; Escape closes | **Pass** |
| **Quote Modal & Validation** | Open QuoteModal, test empty `checkValidity()`, test mocked HTTP `500` and HTTP `200` | Empty form rejected; HTTP `500` shows real error alert; HTTP `200` shows confirmation | **Pass** |
| **Brand Interactive Tabs** | Switch product tabs on `/brands/sweet-and-slim` | Spotlight product title & specs update dynamically | **Pass** |
| **404 Page** | Navigate to unknown route (`/unknown-e2e-route`) | Renders 404 page with `<meta name="robots" content="noindex, nofollow">` | **Pass** |
| **Runtime Health** | Monitor browser console, uncaught exceptions, and same-origin network responses | `0` console errors, `0` page errors, `0` HTTP `>= 400` | **Pass** |

*(Note: Form submissions to `https://formsubmit.co/*` were intercepted via CDP `Fetch` during automated QA to verify HTTP `500` and `200` UI states deterministically without spamming `info@awa-group.net`.)*
