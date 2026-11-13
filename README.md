# CodeFrame

Landing page for CodeFrame, a small web studio in Yerevan. Next.js (App Router), Tailwind CSS v4, no runtime dependencies besides React.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Structure

```
app/[[...lang]]/   layout + page, statically generated for every language
components/        page sections; only MobileMenu is a client component
components/mockups decorative browser/phone mockups used in the Work section
lib/i18n/          one dictionary per language (en, hy, ru) + helpers
lib/site.js        links, contacts, project list
app/styles/        Tailwind theme tokens and component styles
```

## Languages

English lives at `/`, Armenian at `/hy`, Russian at `/ru`. Each page is prerendered,
so the HTML already contains the right language and `hreflang` alternates are set in the metadata.

To add a language: create `lib/i18n/<code>.js` with the same keys as `en.js`, then register it in `lib/i18n/index.js`.

## Content

- Prices, packages and copy: `lib/i18n/*.js`
- Instagram / WhatsApp links: `lib/site.js`
- Production URL used for canonical links and the sitemap: `siteUrl` in `lib/site.js`
