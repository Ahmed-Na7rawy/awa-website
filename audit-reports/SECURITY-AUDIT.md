# Security Audit (`SECURITY-AUDIT.md`)

**Scope**: Defensive application security review (XSS, injection, secrets, HTTP headers, HTTPS redirects, dependency vulnerabilities).

---

## 1. Application Security & XSS Review
- **XSS / Unsafe DOM APIs**: Static scan of all `src/` files and `index.html` confirmed **0** uses of `dangerouslySetInnerHTML`, `innerHTML`, `outerHTML`, `eval()`, `new Function()`, or `document.write()`.
- **External Anchor Safety**: **0** `<a target="_blank">` links missing `rel="noopener"`.
- **Form Validation & Error Leakage**:
  - `ContactPage.tsx`, `QuoteModal.tsx`, and `CareersPage.tsx` validate required fields and email format via HTML5 constraints and controlled React state.
  - Network/HTTP failures display generic localized fallback instructions (`info@awa-group.net`) without exposing stack traces or internal metadata.
- **Secrets & Environment Hygiene**:
  - **0** hardcoded API keys, tokens, or `import.meta.env.*` secrets in `src/` or `dist/`.
  - No `.env*` files present in the repository root; `.gitignore` excludes `*.local`, `*.log`, `dist`, `scripts/`, and sensitive document types.

---

## 2. HTTP Security Headers & HTTPS Behavior
- **HTTPS Redirect**: Verified `curl.exe -sI http://awa-website-seven.vercel.app/` returns `HTTP/1.0 308 Permanent Redirect` to `https://awa-website-seven.vercel.app/`.
- **Production Headers (`vercel.json`)**:
  - `Strict-Transport-Security: max-age=31536000; includeSubDomains`
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - **Added in Phase 5** (`Content-Security-Policy`):
    `default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob:; media-src 'self'; connect-src 'self' https://formsubmit.co; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://formsubmit.co; object-src 'none'`
- **CSP Browser Verification**: Served `dist/` with the exact `vercel.json` CSP header in headless Chrome across `/`, `/brands`, `/brands/sweet-and-slim`, `/solutions`, `/contact`, and `/careers` — **0** `securitypolicyviolation` events and **0** console CSP errors.

---

## 3. Dependency Audit (`npm audit`)
- **Production (`npm audit --omit=dev`)**: **0 vulnerabilities**.
- **Development-Only (`npm audit`)**: **4 advisories** (none bundled into `dist/`):
  - `esbuild <=0.24.2` (moderate, dev server only via `vite 5.4.11` — fix requires major Vite upgrade, intentionally deferred).
  - `sharp <=0.35.5-rc.1` (high, offline build/script image tool only).
  - `source-map-js 1.0.0–1.2.1` (high, build-time CSS tooling only).
