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
