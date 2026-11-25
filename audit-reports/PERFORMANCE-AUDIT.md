# Performance Audit (`PERFORMANCE-AUDIT.md`)

**Environment**: Local production build (`npx vite preview --port 4173 --host 127.0.0.1`), Headless Chrome CDP (`Network.setCacheDisabled: true`).  
**Targets**: `LCP <= 2500 ms`, `CLS <= 0.1`, `TBT <= 200 ms` (proxy for responsiveness/INP on lab runs).

---

## 1. Measured Before vs. After Core Web Vitals & Network Payloads

| Route & Viewport | Metric | Baseline (Before) | Optimized (After) | Improvement / Status |
| :--- | :--- | :---: | :---: | :--- |
| `/` (Desktop `1366×768`) | **TTFB / FCP** | `6 ms` / `512 ms` | `14 ms` / `656 ms` | Pass |
| `/` (Desktop `1366×768`) | **LCP** | `816 ms` (`VIDEO`) | **`756 ms`** (`VIDEO`) | **Pass** (`<= 2500 ms`) |
| `/` (Desktop `1366×768`) | **CLS** | `0.0015` | **`0.0015`** | **Pass** (`<= 0.1`) |
| `/` (Desktop `1366×768`) | **TBT** | `52 ms` | `167 ms` | **Pass** (`<= 200 ms`) |
| `/` (Desktop `1366×768`) | **Requests / Total** | `32` / `5,075.4 KB` | **`24`** / **`1,205.4 KB`** | **-76.2% payload** |
| `/` (Desktop `1366×768`) | **Image Transfer** | `4,614.6 KB` | **`744.7 KB`** | **-83.9% images** |
| `/brands` (Desktop) | **CLS** | `0.2528` (FAIL) | **`0.0015`** | **-99.4% (Fixed)** |
| `/brands` (Desktop) | **Image / Total** | `433.9 KB` / `992.4 KB` | **`267.6 KB`** / **`832.5 KB`** | **-38.3% images** |
| `/brands/sweet-and-slim` (Desktop) | **LCP** | `908 ms` | **`816 ms`** | **Pass** (`<= 2500 ms`) |
| `/brands/sweet-and-slim` (Desktop) | **CLS** | `0.323` (FAIL) | **`0.0015`** | **-99.5% (Fixed)** |
| `/brands/sweet-and-slim` (Desktop) | **Requests / Total** | `51` / `6,639.0 KB` | **`31`** / **`1,002.9 KB`** | **-84.9% payload** |
| `/brands/sweet-and-slim` (Desktop) | **Image Transfer** | `6,096.0 KB` | **`459.8 KB`** | **-92.5% images** |
| `/solutions` (Desktop) | **LCP / CLS** | `764 ms` / `0.2528` | **`572 ms`** / **`0.0015`** | **CLS -99.4% (Fixed)** |
| `/` (Mobile `390×844`) | **LCP / CLS / Total** | `440 ms` / `0` / `5,022.3 KB` | **`360 ms`** / **`0`** / **`1,152.3 KB`** | **-77.1% payload** |
| `/brands/sweet-and-slim` (Mobile) | **LCP / CLS / Total** | `604 ms` / `0` / `6,593.7 KB` | **`784 ms`** / **`0`** / **`957.6 KB`** | **-85.5% payload** |

---

## 2. Implemented Optimizations
1. **Eliminated Lazy-Route `CLS` (`0.2513` footer jump)**: Increased `<Suspense>` fallback `minHeight` from `'60vh'` to `'100vh'` in [src/App.tsx](file:///c:/Users/mayar/OneDrive/Documents/company%20website/src/App.tsx#L121-L125).
2. **WebP Image Conversion (`sharp` quality 82)**: Converted 34 oversized `.jpg`/`.png` assets across `public/images/pages/home/`, `public/images/pages/products/`, `public/images/yalla-drinks/banners/`, `public/images/banners/`, and `public/artwork/yalla-drinks/thumbnails/` from **18,540.6 KB** to **4,367.3 KB (-76.4%)**.
3. **Existing `.webp` Asset Adoption**: Switched **176** `.png`/`.jpg` paths in `src/data/fmcgBrandsData.ts` (147), `src/components/brand-showcase/SweetSlimWellnessShowcase.tsx` (18), `src/data/retailBrandsData.ts` (9), `src/data/awaBrandsData.ts` (1), and `src/pages/BrandsPage.tsx` (1) to their `.webp` files on disk.
4. **Lazy Loading & Hero Video Discipline**:
   - Added `preload="metadata"` and WebP poster on the home hero `<video>` ([src/pages/HomePage.tsx](file:///c:/Users/mayar/OneDrive/Documents/company%20website/src/pages/HomePage.tsx#L127-L135)).
   - Added `loading="lazy" decoding="async"` on below-the-fold home images and `width={360} height={220} loading="lazy" decoding="async"` on [SkuCard3D.tsx](file:///c:/Users/mayar/OneDrive/Documents/company%20website/src/components/brand-showcase/SkuCard3D.tsx#L78-L85).
5. **Code Splitting & Caching**: Route-level `React.lazy` splitting + `manualChunks` (`react-vendor`, `motion-icons`) in `vite.config.js` + `Cache-Control: public, max-age=31536000, immutable` for `/assets/(.*)` in `vercel.json`.

---

## 3. Measurement Limitations
- **INP & Speed Index**: Lab headless CDP runs measured `TBT` (`8 ms`–`167 ms`, all `<= 200 ms`) as the main-thread blocking metric; real-user `INP` at the 75th percentile requires field telemetry (e.g., Chrome UX Report / Vercel Speed Insights).
