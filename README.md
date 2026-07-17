# XING Official Website v0.2.0

Commercial Next.js website for XING / Xingyue Technology Co., Ltd.

## Technology

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons
- Vercel-ready configuration

## Included pages

- Home
- Products
- OEM / ODM
- Factory
- About
- Blog
- Contact

## Included functionality

- Responsive navigation
- Product-based hero and image sections
- WhatsApp floating contact
- Email contact
- Request-a-quote paths
- FAQ section
- Sitemap and robots routes
- Basic SEO metadata
- Vercel deployment configuration

## Run locally

```bash
npm install
npm run dev
```

## Build verification

```bash
npm run build
```

## ACCIO WORK handoff

1. Extract the ZIP.
2. Upload the project to a GitHub repository.
3. Run `npm install`.
4. Run `npm run build` and resolve only environment/domain-specific warnings.
5. Import the repository into Vercel.
6. Add environment variables based on `.env.example`.
7. Set `NEXT_PUBLIC_SITE_URL` to the final domain.
8. Deploy a preview URL first.
9. Do not submit to Google Search Console until the final domain and content are approved.

## Important launch notes

- Product specifications in this version are marketing-level descriptions.
  Confirm exact power, voltage, heating time, water tank capacity and certifications.
- The contact form uses `mailto:` and opens the visitor's email application.
  ACCIO WORK may replace it with Resend, Formspree or another form endpoint.
- Large media can later be migrated to Cloudflare R2.
