# ACCIO WORK — V7 Homepage Update

## Goal
Deploy the V7 dynamic homepage while preserving all locked visual modules.

## Locked modules — do not redesign
1. **Hero / first screen**: `/public/images/v7/hero-locked.png`
2. **Factory section**: `/public/images/v7/factory-locked.png`

These are rendered as exact supplied assets to prevent AI or layout changes.

## New V7 modules
- Full-screen background brand film: `/public/videos/brand-film.mp4`
- Featured product changed to **ST-812**, using `/public/images/v7/st-812.png`
- 12-product grid (3 rows × 4); each card already links to a future product-detail route
- Scroll reveal, hover lift, product float, glow pulse and video controls
- Responsive mobile/tablet layouts
- Reduced-motion accessibility support

## Installation
Replace the existing project with this folder, then run:

```bash
npm install
npm run build
npm run start
```

## Product content follow-up
Edit the `products` array in `components/V7Home.tsx` when final names, images and detail URLs are supplied.
