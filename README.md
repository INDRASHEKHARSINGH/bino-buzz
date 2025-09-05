# Bino Buzz — Mini Awareness Project

A lightweight, static landing page to drive **awareness and viral sharing** for Bino (a WhatsApp-based search platform).

## Why this helps
- **Frictionless CTA**: One-tap WhatsApp deep link with a pre-filled message.
- **Viral loop**: Native Share + WhatsApp share for fast word-of-mouth.
- **Attribution-ready**: `?ref=yourcode` and UTM parameters (you can add `utm_source=...`).

## What’s inside
- Static site: `index.html`, `styles.css`, `script.js`
- Client-side referral demo (local counter) — swap with real tracking when ready.
- Open Graph tags + placeholder `assets/og-image.png`
- Clean, modern UI

## Quick start
1. Replace `BINO_WHATSAPP_NUMBER` in `script.js` with Bino’s official number.
2. (Optional) Add GA/Pixel in `index.html` head.
3. Open `index.html` locally or deploy.

## Deploy
- **GitHub Pages**: push this folder and enable Pages.
- **Vercel/Netlify**: drag-and-drop the folder or connect repo; build command: _none_, output: `/`.
- **Cloudflare Pages**: direct upload (static).

## Tracking (server-side, optional)
- Add a tiny redirect service (e.g., `/go/:ref`) and log hits to a DB (PostgreSQL).
- Or integrate a shortener (Bitly/Brevo) with UTM params.

## Customization
- Update copy in `index.html`.
- Update colors in `styles.css`.
- Change default WhatsApp message in `script.js`.

---

**Made as a quick hack to showcase full-stack thinking and growth loops.**
