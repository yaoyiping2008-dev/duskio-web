# Duskio Website

Official marketing and support site for **Duskio – Dark Mode for Safari**.

- Domain: `https://duskio.net`
- Support: `support@duskio.net`
- Stack: static HTML, CSS, and a small amount of vanilla JavaScript
- Hosting target: Cloudflare Pages
- No backend, database, CMS, authentication, or analytics SDK

This repository is independent from the iOS / Safari Extension project.

## Local preview

From this directory:

```sh
python3 -m http.server 8080
```

Then open `http://127.0.0.1:8080/`.

Python’s built-in server does not serve `404.html` for unknown paths. Cloudflare Pages will.

## Pages

| Path | Purpose |
| --- | --- |
| `/` | Product home |
| `/setup/` | Safari extension setup guide |
| `/support/` | Support and troubleshooting |
| `/privacy/` | Privacy Policy |
| `/terms/` | Terms of Use |
| `404.html` | Cloudflare Pages not-found page |

## App Store URL

There is no production App Store URL yet. Buttons stay in a disabled **Coming Soon** state.

When the listing is live, set `APP_STORE_URL` in `js/main.js` to the real `https://apps.apple.com/...` address. Leave it as an empty string until then. Do not invent a URL.

## Theme colors

Swatch colors in `assets/themes/palettes.json` and `css/main.css` are copied from the production palettes in:

`SafariDarkMode/SafariExtension/Resources/engine/theme.js`

They are for public website display only.

## Cloudflare Pages

Deploy this repository as a static site with:

- Build command: none
- Build output directory: `/` (the repository root)
- Compatible files already included: `_headers`, `404.html`, `robots.txt`, `sitemap.xml`

Custom domain later: `duskio.net`. DNS and Cloudflare project binding are done outside this repository.

## Localization

Website V1 is English-first. Markup uses `lang="en"` and `dir="ltr"` so additional locales can be added later without rebuilding the layout.
