# MASSIMO | Italian Hair Atelier

A local Next.js App Router / React / TypeScript / Tailwind CSS website. Nothing has been deployed and no accounts, analytics, paid services, or booking systems were created.

## Run locally

Requires Node.js 22+ and npm. Cloudflare Pages should use Node.js 22 (see `.node-version`).

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Stop with Ctrl+C.

```sh
npm run lint
npm run typecheck
npm run build
npm run preview
```

Google fonts are fetched at build time and self-hosted by Next.js. Internet is required for the first build. Dependencies are pinned by package-lock.json.

## Edit content

`src/config/site.ts` holds business details, biography, services, philosophy, contacts, images, portfolio, and SEO settings. Empty Instagram and email fields hide those links. Optional services have `enabled: false`; enable only after confirmation. The biography and philosophy are provisional marketing copy. Confirm these before launch and set their provisional flags accordingly. Layout copy is in `src/app/page.tsx`; styling in `src/app/globals.css`.

## Final photographs

- Portrait: place `portrait.jpg` in `public/images/massimo/`, set `images.portrait` to `/images/massimo/portrait.jpg`, and set `images.portraitIsFlyer` to **false**. The current CSS crop uses the authentic portrait from the supplied flyer; it is a temporary lower-resolution reference.
- Salon: place `salon.jpg` in `public/images/salon/` and set `images.salon` to `/images/salon/salon.jpg`. Until then, a decorative address illustration is shown (not a geographic map).
- Portfolio: put actual work in `public/images/portfolio/`. Update every entry's src, title, category, alt, and `placeholder: false`. Replace or remove all inspiration images and update the gallery disclaimer in page.tsx before launch. Do not describe stock portraits as completed work.
- Prefer portrait-oriented photos, about 1600–2200 px long edge, WebP or high-quality JPEG. Static export disables the Next.js image optimization server (`images.unoptimized: true`). Images are served directly from `out/images/`, with the same responsive CSS, sizing, and below-fold lazy loading. Compress final images before adding them.
- The gallery supports Women/Men filters and keyboard-accessible modal expansion, Escape, arrow keys, and previous/next controls. Add before/after images as individual entries with accurate descriptions.

Temporary imagery sources (Unsplash; inspiration only, no claim of authorship):
- https://unsplash.com/photos/1524504388940-b1c1722653e1 (image endpoint: https://images.unsplash.com/photo-1524504388940-b1c1722653e1)
- https://images.unsplash.com/photo-1506794778202-cad84cf45f1d
- https://images.unsplash.com/photo-1534528741775-53994a69daeb

## Deployment and custom domain

1. Confirm all copy, service availability, photo permissions, portrait alt text, contact details, and portfolio.
2. Set `domain` to the final HTTPS origin, with no trailing slash, e.g. `https://your-confirmed-domain.com`. This activates the canonical URL and sitemap URL. The sitemap intentionally stays empty until the domain is known.
3. Use the Cloudflare Pages instructions below. No adapter, Worker, Pages Functions, database, or Node.js runtime is needed on the host. Node.js is used only to build the files.
4. After deployment is authorized, add the domain in the Pages project's Custom domains settings and follow the exact DNS instructions Cloudflare supplies. Wait for domain validation and HTTPS activation. Choose one canonical hostname and redirect the other through Cloudflare settings.
5. Rebuild after changing content or domain. The deployable artifact is the complete contents of `out/`, not `.next/` or the source directory.
6. Check `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, phone links, SMS links, and map directions on the final domain. Replace the generated social card by editing `src/app/opengraph-image.tsx` or supplying your own metadata image.
7. Add a domain property in Google Search Console, verify with the DNS TXT record it provides, and submit `https://YOUR-DOMAIN/sitemap.xml`. Inspect the home URL and request indexing. Search visibility is not guaranteed.
8. If Massimo is eligible for an individual practitioner Google Business Profile, create or claim it using accurate public details and complete Google's verification. Do not claim ownership of Toni Salon or create a duplicate salon listing. Add the final website URL to the appropriate profile. No profile was created here.
9. Analytics are off by default. If desired, select privacy-conscious analytics and assess consent requirements before adding scripts. No embedded map, tracking pixel, or cookie banner is needed by the current implementation.

The Person JSON-LD identifies Massimo's work location at Toni Salon without presenting his proposed personal brand as the salon's legal business name. No ratings, awards, hours, pricing, or unverified history are included.

## Verification notes

Production build, TypeScript, and ESLint were run successfully. The production dependency audit reported zero vulnerabilities. The complete npm audit reports five high-severity entries in one development-only ESLint dependency chain (`braces` via `micromatch` / `fast-glob` / Next's ESLint plugin); npm reported no available fix. Recheck this tooling advisory when updating dependencies. No Lighthouse score or real-device certification is claimed. Setting the final domain removes Next.js's expected metadataBase warning and makes sharing URLs absolute for production.

Browser QA reviewed the rendered desktop and 390 × 844 mobile hero, confirmed no horizontal overflow at those sizes, and exercised the gallery modal and keyboard navigation. Preview screenshots are saved beside this project. The build uses Webpack because this environment's Turbopack subprocess port/FSEvents access was restricted after a session interruption; the Webpack production build passed. Broader real-device, assistive-technology, and Lighthouse testing remains a launch-stage task.

## Cloudflare Pages via GitHub (prepared; not deployed)

The project uses `output: 'export'` in `next.config.ts`. The page and metadata routes are generated at build time. All navigation, filtering, lightbox, mobile menu, and animations run in the browser; telephone/SMS/directions use ordinary links. Google fonts are bundled during the build. The generated social card is static too; `public/_headers` gives its extensionless URL the correct PNG content type on Pages.

For a repository containing **the contents of this project folder at its root**, use:

| Cloudflare Pages setting | Value |
| --- | --- |
| Git provider | GitHub |
| Production branch | Your chosen production branch |
| Framework preset | Next.js (Static HTML Export), or None with the settings below |
| Root directory | Repository root (blank) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | `22` (also recorded in `.node-version`) |
| Environment variables | None required; optionally `NODE_VERSION=22` |

If committing the **whole workspace** instead, set the Pages root directory to `outputs/massimo`. Output directory is still `out`, relative to that root. The included GitHub Actions workflow is intended for the project-root repository layout; for a workspace repository, move it to the repository's top-level `.github/workflows/` and add working-directory/cache path settings for `outputs/massimo`.

Commit source files, `package.json`, `package-lock.json`, `next.config.ts`, `.node-version`, `public/`, and the included validation workflow. Do not commit `node_modules/`, `.next/`, or `out/` (all ignored). Cloudflare builds the export itself from GitHub. The workflow validates builds only; it has no deployment credentials or deployment step. Connecting a repository and saving a Pages build will deploy it: those steps have deliberately not been performed.

### Preview the actual static output

`npm run build` writes `out/`; then run `npm run preview` (or `npm start`) and visit http://127.0.0.1:3000. This dependency-free local server serves only exported files; it does not use Next.js SSR or image APIs and is not part of the Cloudflare runtime. Use `PORT=3001 npm run preview` if port 3000 is occupied. Stop with Ctrl+C. Opening index.html with file:// is not a valid preview because assets use site-root paths.

No Cloudflare account, GitHub repository, or deployment has been created or modified. Official setup reference: https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/

### Static-export verification

The export production build, ESLint, and TypeScript checks pass. The generated `out/` contains 59 files, including index.html, 404.html, bundled scripts/fonts/styles, all source photos, robots.txt, sitemap.xml, the generated social image, and the Cloudflare `_headers` file. A file-only HTTP preview verified all 16 HTML-referenced asset URLs plus metadata and portfolio image URLs return 200; unknown paths return 404. No Next.js image-optimizer URLs or Worker runtime are included. All files are under 25 MiB.

Browser checks against this static export verified desktop anchor navigation, all three portfolio images loading, Men/All filters, lightbox expansion, arrow-key navigation and Escape, and the mobile menu opening/closing with Escape at 390 × 844. Mobile had no horizontal overflow; the scroll animation remained active. Browser console inspection returned no warnings/errors. Call/SMS links and the directions URL were inspected without initiating a call, message, or external directions session. Design and branding were unchanged. Final domain remains intentionally unset; set it in `src/config/site.ts` before the production build to populate canonical URLs and sitemap entries and remove the metadataBase warning.
