# RivalSight Coming Soon — Next.js

This is the Next.js App Router version of the supplied RivalSight landing page. The layout, copy, colors, responsive behavior, radar illustration, metadata, and Google Tag Manager ID are included.

## Requirements

- Node.js 18.18 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To create a production build:

```bash
npm run build
npm run start
```

The waitlist currently uses the original email-link fallback because no signup endpoint was supplied. To collect submissions automatically, set `FORM_ENDPOINT` in `app/WaitlistForm.tsx` to a compatible endpoint.
"# rivalsight" 
