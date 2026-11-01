# Victor Young — Works & Links · v6 design reset

**Status:** production deployment on `main`; founder's device-level visual acceptance remains in progress. A compact social-profile-inspired works directory, not another full portfolio website.

## Rationale and design system

- Uses the useful Instagram profile pattern — identity, actions, social highlights, tabs, portrait-oriented project grid — but original styling and authentic actions. It is not an Instagram affiliation or clone.
- Colors: midnight navy #0a111c, ivory #f8f7f3, warm gold #c8a055, restrained warm red #bb3f3f; never purple as a brand color.
- Display: Syne (web fallback), body: DM Sans, metadata: Space Mono. One deliberate typographic system, not multiple decorative scripts.
- Content: 21 links provided by owner or from the existing collaboration, categorized into Works, Products, Brands, Connect. No fabricated likes, follower counts, live statuses or testimonials.
- Profile photo is a self-hosted text SVG wrapper containing a compressed copy of the supplied portrait. It doesn't require a third-party host. CV currently points to verified existing portfolio repo PDF, not self-hosted in this repository.
- Project imagery: genuine repo screenshot where available (RayzorVerse, Kaabo); original portfolio covers identified as covers; optional third-party screenshot service for the other sites, with distinct authored fallbacks (never represented as screenshots).
- Interactions: theme switch with local preference, horizontal social highlights, grid tabs, search, detail modal with direct external link, keyboard tab arrows / ESC, touch-friendly targets, reduced-motion support.
- Sanity Studio schema remains in /studio as a placeholder; public site data is currently in /app.js, and the CMS has not been connected.

## Design evidence / limitations

Consulted RayzorVerse Knowledge Base: Creative Quality Audit & Anti-Generic Design Standards v0.1, Portfolio Project Intelligence Architecture, and My Works Audit. Referenced Instagram profile layout behavior and Milkshake/Linktree creator hubs. Site visuals from live hosted projects could not be comprehensively fetched in this environment; external thumbnail service and remote images remain subject to reliability and privacy considerations. Check images and links on the user's phone.

## Testing checklist

Mobile view 360/390/430px; desktop 1024/1440; both themes; image loads; scroll and horizontal overflow; post modal open/close; keyboard focus; search; category tabs; copy/share; CV; real outbound links; prefers-reduced-motion. Before treating a page as approved/production case-study: confirm contributor rights and prototype/demo descriptions.

## Production consolidation — 2026-11-01

- **Canonical GitHub repository:** `victor-young-dev/victor-links`.
- **Production branch:** `main`, fast-forwarded from `review/social-profile-redesign-v6` after verifying a READY preview build. Both use the **same Vercel project**, `prj_05b4wmYaJUkjQygh7GTdPaKOdKxW`.
- **Existing public URL:** https://victor-links.vercel.app/ (preserved; do not replace links without intent).
- **Optional friendlier alias:** https://victorlinkbio.vercel.app/ (verified and linked to the same Vercel project; does not create another repository).
- **Old production baseline:** kept only for safe history/rollback on `archive/pre-social-profile-v5-2026-11-01`. It is not the main public version.
- **Recovered Work feedback partially implemented:** LinkedIn → GitHub → Instagram → YouTube → X → TikTok → Facebook story order; portrait opens accessible personal information gallery; stronger and accessible highlight rings; compact three-column grid on phones.
- **Pending design acceptance:** the original two Work screenshots were not accessible through this session. The exact component intended to receive continuous **vertical** top-to-bottom marquee movement has not been positively identified, so no unrelated navigation was turned into an auto-moving target. Also recheck site cover thumbnails, photo and CV links, light theme and responsive layouts on the owner's phone.
- **Previous deployment URLs:** Vercel can retain immutable historical/preview URLs. They do not alter which release is served by the canonical production alias.


## Batch 2 — motion and highlight behavior

Implemented on `main` after the owner approved Batch 1:

- Original social order preserved: LinkedIn → Instagram → TikTok → Facebook → X → YouTube → GitHub.
- Automatic continuous horizontal highlight motion with a matched visual copy for seamless looping. The duplicate group has `aria-hidden=true` and unfocusable links, so keyboard/screen-reader users don't encounter duplicates.
- Pause on pointer hover, active press and keyboard focus within the highlight area; no navigation arrows.
- For `prefers-reduced-motion: reduce`, the animation stops and the original highlight row remains horizontally scrollable without the duplicate.
- Post reveal animation triggers when gallery cards enter the viewport. It does not change card content, pin sorting, theme, or project URLs.
- Main production URLs stay https://victorlinkbio.vercel.app/ and https://victor-links.vercel.app/.
- **QA:** GitHub syntax/content checks and Vercel READY for same branch and revision. Owner phone review is required for animation speed, pause behavior and smoothness. **Batch 3** (curated post artwork and later unlisted YouTube videos) is not started.


## Batch 3 — differentiated project covers

Initial curated batch deployed on `main`: **9** individual editorial SVG cover illustrations in `assets/covers/`. Each piece uses a project-specific visual concept (architecture, workstation, stationery, editorial research, marketplace mobile UI, commerce packaging, bus transport, community network, fashion). This replaces repetitive abstract visuals on the first nine posts, including the three pinned posts.

- These covers are **illustrations**, not actual UI screenshots, logos, real company properties, or photographs. They should never be cited as proof that specific features or client identities exist.
- `app.js` uses a `cover` field for the visible social-feed tile, while preserving each project's existing `image` field for the details dialog (where available).
- Current live projects, URLs, status tags, three pinned items, social order, Batch 1 dark-mode contrast and Batch 2 animations were left intact.
- Remaining **12** entries retain their existing thumbnail sources; no mass replacement was performed.
- Quality gate: checked expected cover paths on `main`, SVG element balancing, JavaScript syntax and READY Vercel production deployment. Manual visual inspection on phone is still required.
- Later: selectively replace approved illustrations with verified project photographs or true screenshots, and add the user's three unlisted videos only after supplying the actual links and confirming embed permissions.

## Batch 3 follow-up — image realism and related-project ordering

The owner reviewed the first artwork rollout and approved a second image-direction pass, requesting more project-specific realism and closer grouping of related projects.

- The first nine high-priority feed cards now prefer **existing project portfolio images, archived RayzorVerse screenshot, or attempted website-thumbnail captures**, rather than the earlier series of nine similarly stylized editorial SVG posters.
- These sources are backed by a local original editorial fallback if the remote image is unavailable. A website thumbnail attempt is **not** claimed to have been independently verified as the latest live design.
- The three owner-identified weak thumbnails (Portfolio Site Template, HexaGuild Hive, Ken AI Detector) are replaced with bespoke local SVG conceptual UI covers at `assets/covers/*-v2.svg`; these are **design illustrations**, not genuine website screenshots or copies of the full generated mockup images.
- The project grid retains one consistent portrait aspect ratio across desktop/mobile, three pinned posts at the start, searchable tabs, and the owner-approved dark/light contrast and social highlight interactions.
- The main feed now groups **Kaabo Prototype + Kaabo Launch**, **Vendra Commerce + Vendra Social**, **HexaGuild + HexaGuild Hive + Pitch Deck**, and **Browndilux + Commerce** where possible while prioritizing the core portfolio.
- The three proposed unlisted YouTube Shorts/project demonstration videos **have not been added**; embed URLs and explicit selections will be needed for a separate batch. The proposed Home / Profile / Catalog navigation remains discussion-only.
- Review needed: actual phone rendering and thumbnail availability in both themes, plus artwork acceptance. Do not claim mock screenshots represent verified product functionality.

## Focused polish release — 2026-11-01

- De-duplicated Vendra: removed Vendra Social and renamed Vendra Commerce to Vendra Social Commerce.
- Removed MyDala Experiment and added Atlas as a Coming soon entry with no falsely asserted live URL.
- Restored BrandiLux feed cover to its existing project portfolio photo.
- Unified approved project covers in grid and detail popup (RayzorVerse, Portfolio Website, Browndilux, Kaabo Prototype, Vendra Social Commerce, HexaGuild Hive/Pitch Deck, Portfolio Template, Ken AI Detector); used image CSS zoom to hide text baked into concept posters where feasible. Cosine Bus Tracker, Stallbasket, Favour Link, Kaabo Launch, BrandiLux Kit and Browndilux Commerce were intentionally not changed.
- Replaced HexaGuild main and Haverhills fallback visuals with original editorial SVGs, not representations of real product screens. Apex Wright Lab awaits user-supplied replacement art.
- Updated dim gold gradient accents, navbar edge/shadow, contact CTAs, Open to projects badge, and removed decorative external-pointing arrow glyphs.
- Home/gallery expansion and YouTube Shorts remain separate proposals, not implemented.

## November 2026 mobile feedback — UI and contact refinements
- Expanded the sticky header shadow/backdrop to the viewport edges without changing the content grid width.
- Added a subtle raised appearance to View CV and Collaborate alongside the existing primary Work with me button.
- Moved the active availability indicator after the Open to projects text, added animated pulse rings, and respects reduced-motion settings.
- Replaced the general-purpose bio with grounded founder language about expanding ideas into plans, creative work, and practical solutions with collaborators.
- Added contact-choice popovers to Work with me, Collaborate, and Get in touch. WhatsApp prefills depend on the originating action and use the user-supplied number; email links have matching subjects and messages.
- Improved spacing and hierarchy in Connect panel, while preserving the founder/studio split.
- Added Blessing C as a website project; website thumbnail capture is attempted through thum.io and a local editorial SVG is used as fallback. Direct screenshot could not be verified by the browser environment.
- Changed the Stallbasket detail view to use its matching curated promotional cover. Adjusted Browndilux popup image alignment to favour the laptop area.
- Apex Wright Lab's replacement uploaded image is pending an actual binary asset upload, not merely a path reference.

### Apex Wright Lab selected-cover follow-up

The owner-approved light editorial artwork was compressed as a locally served WebP for the featured Apex Wright Lab tile and corresponding detail modal. It is promotional visual artwork, not a verified screenshot of the live site. Source image remains available in the conversation artifacts. File: `assets/covers/apex-wright-lab-approved.webp`.
