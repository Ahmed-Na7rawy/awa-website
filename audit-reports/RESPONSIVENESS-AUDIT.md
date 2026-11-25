# Responsiveness & Cross-Device Audit (`RESPONSIVENESS-AUDIT.md`)

**Target Viewports**: `320×568`, `360×800`, `375×812`, `390×844`, `430×932`, `768×1024`, `1024×768`, `1280×800`, `1366×768`, `1440×900`, `1920×1080`

---

## 1. Automated Viewport Verification Results
Latest verification executed via [tests/e2e.mjs](file:///c:/Users/mayar/OneDrive/Documents/company%20website/tests/e2e.mjs) (`npm run test:e2e`) in headless Chromium against `vite preview`:

| Viewport | Device Class | Routes Tested | Horizontal Overflow (`scrollWidth > clientWidth`) | Result |
| :--- | :--- | :--- | :---: | :---: |
| `320×568` | Small Mobile | `/`, `/solutions`, `/brands/sweet-and-slim` | `0` | **Pass** |
| `390×844` | Modern Mobile | `/`, `/solutions`, `/brands/sweet-and-slim` | `0` | **Pass** |
| `768×1024` | Tablet Portrait | `/`, `/solutions`, `/brands/sweet-and-slim` | `0` | **Pass** |
| `1366×768` | Desktop Laptop | `/`, `/solutions`, `/brands/sweet-and-slim` | `0` | **Pass** |

*(Note: Prior Phase 3 audit also verified `0` horizontal overflow across all 16 core routes × 11 viewports before Phase 9–10 updates; `tests/e2e.mjs` re-verified the 4 representative breakpoints after the final edit.)*

---

## 2. Issues Found & Fixed During Responsive Testing
1. **Closed `.mobile-menu-overlay` Expanding `scrollWidth` to `384px` at `320×568`** ([src/index.css](file:///c:/Users/mayar/OneDrive/Documents/company%20website/src/index.css#L2613-L2630)):
   - **Cause**: `.mobile-menu-overlay` used `position: fixed; inset: 0; visibility: hidden;` without `overflow: hidden; pointer-events: none;`, allowing the off-screen `.mobile-drawer` to inflate document scroll width on `320px` screens.
   - **Fix**: Added `overflow: hidden; pointer-events: none;` on `.mobile-menu-overlay` and `pointer-events: auto;` on `.mobile-menu-overlay.open`.
2. **Inline Grid `minmax(260–360px, 1fr)` Overflow on `320px`** ([src/pages/SolutionsPage.tsx](file:///c:/Users/mayar/OneDrive/Documents/company%20website/src/pages/SolutionsPage.tsx)):
   - **Cause**: Fixed pixel minimums (`280px`, `320px`, `340px`, `360px`) exceeded container inner width (`272px` after padding) on `320px` screens.
   - **Fix**: Replaced all 6 grid tracks with `minmax(min(<px>, 100%), 1fr)`.
3. **`.btn { white-space: nowrap }` Overflow at `320px`** ([src/index.css](file:///c:/Users/mayar/OneDrive/Documents/company%20website/src/index.css#L462-L471)):
   - **Fix**: Added `max-width: 100%;` on `.btn` and `white-space: normal; text-align: center;` under `@media (max-width: 480px)`.
4. **Home `Responsible Growth. Lasting Impact.` Section** (Phase 3):
   - Verified responsive stacking across tablet/mobile breakpoints in `src/awa-reference-home.css`.
