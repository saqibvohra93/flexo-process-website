# Flexo Process (Private) Limited — Corporate Website

Production-grade marketing website for **Flexo Process (Private) Limited**, a Karachi-based manufacturer of digital flexographic photopolymer printing plates. Built with React, TypeScript, Vite, and Tailwind CSS.

Live focus areas: German CDI laser plate technology, industry solutions (labels, flexible packaging, corrugated, PP woven/cement sacks), an interactive plate spec configurator, a dot-gain comparator, an 18-article B2B technical knowledge hub, and a working RFQ/contact form.

## Tech Stack

- **React 18 + TypeScript** — component architecture
- **Vite** — build tooling, dev server
- **Tailwind CSS** — styling / design system
- **lucide-react** — icon set
- Zero server runtime required for the frontend — builds to a fully static `dist/` bundle.

## Local Development

```bash
npm install
npm run dev       # start dev server (http://localhost:5173)
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
```

## Project Structure

```
src/
  components/     UI sections (Navbar, Hero, DotComparator, PlateConfigurator,
                   IndustriesSection, ServicesSection, WorkflowSection,
                   ArticlesHub, FaqSection, ContactSection, Footer, QuoteModal)
  data/           Structured content: plate specs, industries, services,
                   18 technical articles, FAQs, JSON-LD schema builders
  App.tsx         Page composition + cross-component state (RFQ prefill, modal)
  main.tsx        React entry point
public/
  contact.php     PHP mailer endpoint for cPanel hosting (form submissions)
  .htaccess       Apache rewrite rules, gzip, cache headers (cPanel)
  robots.txt, sitemap.xml
vercel.json       SPA rewrite + headers config for Vercel preview hosting
```

## Contact Form / Email Delivery

The RFQ and contact forms POST JSON to `/contact.php`.

- **On cPanel**: upload the built `dist/` contents to `public_html/`. `contact.php` uses PHP's native `mail()` to deliver submissions to `info@flexoprocess.com` and `flexoprocess.pk@gmail.com`. Update the `$to` address in `public/contact.php` if needed, and confirm your hosting account has `mail()` enabled (most shared cPanel plans do) or swap in SMTP credentials.
- **On Vercel (static demo)**: there is no PHP runtime, so the fetch call fails silently and the UI falls back to a success state for demo purposes. To wire up real email delivery on Vercel, swap the `fetch('/contact.php', ...)` calls in `ContactSection.tsx` and `QuoteModal.tsx` for a serverless function or a service like Web3Forms / Formspree / Resend.

## Deployment

### cPanel (production)
1. Run `npm run build`.
2. Upload the contents of `dist/` (including `.htaccess` and `contact.php`) to `public_html/`.
3. Confirm PHP `mail()` is enabled or configure SMTP in `contact.php`.

### Vercel (demo/preview)
1. Import this repository into Vercel.
2. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
3. `vercel.json` already handles SPA rewrites and security headers.

## SEO

- Full meta tags (title, description, OpenGraph, Twitter Card, geo tags) in `index.html`.
- JSON-LD structured data (`Organization`, `LocalBusiness`, `FAQPage`, `Product`) injected at runtime from `src/data/schema.ts`.
- `robots.txt` and `sitemap.xml` included in `public/`.
