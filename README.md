# Victor Uzor — My Works & Links

**Purpose:** a phone-first link-in-bio directory of public projects, selected collaborations, social accounts and ways to contact Victor. It is not another full portfolio website.

## Live website

https://victor-links.vercel.app/

GitHub source: https://github.com/victor-young-dev/victor-links

Vercel project: `victor-links`, linked to the GitHub `main` branch for automatic deployments.

## Creative direction — 1 November 2026

Designed around the founder's existing Creative Quality / Anti-Generic Design Standards in the RayzorVerse Knowledge Base. Warm light canvas, restrained cobalt accent, editorial headline hierarchy, distinct typographic **project-cover artwork** (not false website screenshots), compact archive tiles, consistent spacing, and minimal purposeful transitions. No excessive gradients, meaningless decoration, fake metrics or testimonials.

## Content and interactions

- Four featured links: RayzorVerse, **Cosine Bus Tracker (collaboration)**, BrandiLux and Apex Wright Lab.
- Search, category filtering, show-more disclosure and empty search state.
- Full register of 20 user-supplied project destinations (November 2026) plus Cosine Bus Tracker.
- Separate personal profiles and RayzorVerse social profiles.
- Distinct direct-work and studio routes.
- Keyboard-friendly controls, focus styles and `prefers-reduced-motion` handling.

Public links were supplied by the owner. **They are not all independently verified to load, and a listed URL does not establish the finished state of its project.** Status tags describe prototypes, pitches, samples and earlier work. Review every destination before treating this hub as final evidence of project delivery.

## Files and changes

- `index.html`: structure and accessible content
- `styles.css`: layout, responsive treatment and micro-interactions
- `app.js`: link register, categories, search, show more, share and optional CMS fetch
- `config.js`: public CMS settings (project ID intentionally blank)
- `studio/`: separate Sanity Studio starter, **not yet linked to an active Sanity project**

The current public portrait and CV links are served from the author's existing `victor-young-portfolio` repository. A downloadable source package includes optimized copies for eventual self-hosting. Confirm the CV is up-to-date before professional use.

## Sanity headless CMS — pending

A Sanity project, public-only dataset, approved Studio editors and site-origin CORS must be configured separately. This site's frontend will use CMS content when a public `linkHub` document is available; otherwise it falls back to the bundled register. **Do not claim CMS editing is live before end-to-end testing.** Do not put tokens or private project/contact data into `config.js`.

## Release and QA

The production deployment and source syntax were checked on November 1, 2026. Full browser visual QA and verification of every external project URL have not yet been completed from this environment. Check Android width 360–430px, wider desktop, photo/CV loading, filters, content status, external links, tap targets, keyboard focus and reduced motion.

See also: [RayzorVerse Knowledge Base](https://github.com/victor-young-dev/RayzorVerse-Knowledge-Base).
