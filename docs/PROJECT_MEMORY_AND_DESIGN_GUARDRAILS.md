# Victor Link Bio — project memory & design guardrails
**Recorded:** 2026-11-01 | **Maintainer:** Victor Uzor / RayzorVerse
**Scope:** approved implementation rules for this source repo. For full history and media refer to the private archive and institutional Knowledge Base.

## The product
A public **link-in-bio and works archive**, not a replacement for the owner's full portfolio. Identity + social highlights + curated projects + useful contact. Keep the founder's personal profile distinct from RayzorVerse studio channels.
Production: https://victorlinkbio.vercel.app/ and https://victor-links.vercel.app/ (same Vercel project). Main GitHub branch: `main`. An older baseline is retained in an archive branch; do not delete history.

## Approved design grammar
- **Palette:** dark navy and ivory, restrained dim-gold gradients, minimal warm red; no purple as brand accent.
- **Type:** Syne for expressive/major headings, DM Sans for body, project titles, numerals and buttons; Space Mono sparingly for metadata.
- **Identity:** real founder photo; accurate role language (idea development, problem-solving, direction, content, collaboration); no inflated specialist claims.
- **Site shape:** Instagram-inspired profile flow with original styling; three-column portrait gallery. Brand/project individuality despite a consistent card ratio.
- **Dark cards:** explicit gaps, visibly lighter gallery stage, borders for separations; prevent dark tiles merging.
- **Visual effects:** use shadows/glass/gloss only to clarify active controls and hierarchy; header's backdrop/shadow spans viewport, inner content remains centered.
- **Social sequence:** LinkedIn → Instagram → TikTok → Facebook → X → YouTube → GitHub.
- **Motion:** seamless automatic social ticker, pause on interaction, remove arrow controls; viewport-reveal cards; `prefers-reduced-motion` behavior.
- **Buttons:** primary and secondary actions have sensible elevation; availability dot is after label with gentle pulse; no gratuitous `↗` glyphs/emoji-like arrows on links.
- **Covers:** true screenshots vs generated conceptual covers clearly separated. Site renders the title, so avoid a second conflicting title baked into artwork. Compare feed and detail modal; keep image sources in sync or explain exception.
- **Project status:** distinguish demo/prototype, website, sample, collaboration, upcoming. Atlas is Coming soon, no invented live URL. Cosine Bus Tracker credited as collaboration; Vendra Social Commerce replaces duplicate Vendra cards.
- **Contact:** three intents (work, collaborate, general), WhatsApp/email options with meaningful prefill and accessible dismissal.
- **No fabricated metrics**, partners, testimonials, production reliability or fundraising from mockup imagery.

## Current implementation and unresolved work
- Source registry lives in `app.js`; a Sanity Studio starter exists but **no headless CMS connection is live**.
- `main` is the canonical production branch; preview branches generate different preview domains in the **same** Vercel project.
- Owner accepted Batch 1 contrast/type/order and Batch 2 motion. Batch 3 artwork went through multiple corrections; consult current `app.js` cover mapping and original assets, not a prior summary.
- Three requested unlisted YouTube project Shorts, dedicated Home/Creative Gallery expansion, and CMS integration are **future proposals**.
- Screenshots, images, rights and actual linked projects must be checked before public promotional claims; a Vercel READY status alone is not phone QA.

## Institutional documentation
- [Master index](https://github.com/victor-young-dev/RayzorVerse-Knowledge-Base/blob/main/02-Projects/VICTOR-LINK-BIO-INDEX-v1.0.md)
- [Applied anti-generic UI/signatures playbook](https://github.com/victor-young-dev/RayzorVerse-Knowledge-Base/blob/main/04-Design-and-Templates/VICTOR-LINK-BIO-ANTI-GENERIC-UI-SIGNATURES-v1.0.md)
- [Release SOP](https://github.com/victor-young-dev/RayzorVerse-Knowledge-Base/blob/main/03-Workflows-and-Prompts/VICTOR-LINK-BIO-DEPLOYMENT-AND-RELEASE-SOP-v1.0.md)
- [Media and provenance](https://github.com/victor-young-dev/RayzorVerse-Knowledge-Base/blob/main/02-Projects/VICTOR-LINK-BIO-MEDIA-AND-PROVENANCE-REGISTER-v1.0.md)
- [Private Drive archive](https://drive.google.com/drive/folders/1xpBbEB_m1tar_mBzFa__0mN6i9Eqx_1W)
- [Narration/LinkedIn publishing kit](https://docs.google.com/document/d/1p-z-WHJYC4b7T2vJtR0RP6LtYserYGR9U2Grxa1sHGU/edit)

**Ambiguous phrase preserved:** “OVCI” occurred in the founder's archive request, but its formal definition was not evidenced in accessible notes. Do not invent an expansion; this file covers the documented UI/UX and unwanted AI-looking design signatures.
