# Victor Uzor — Personal Link Hub

A compact personal link-in-bio page for recruiters, clients and collaborators. Separate from the RayzorVerse main site and the longer personal portfolio.

## Hosting
The root folder is a plain HTML/CSS/JS static website. Vercel needs no install or build command. Changes to `main` redeploy through the Git integration once linked.

## Content and files
Edit `app.js` to change the displayed name, description, project list, statuses, social links and actions. Update `styles.css` for appearance. `index.html` supplies accessible markup and offline fallback.

**Assets during initial publication:** the portrait and CV PDF are referenced from `victor-young-dev/victor-young-portfolio`'s public `main/public` folder. They are **not copied into this repository yet**. The prepared downloadable package contains optimized local copies. Review the CV for accuracy and replace the remote dependency when convenient.

**Collaboration:** Cosine Bus Tracker is an attributed collaborative demo; original repository: https://github.com/cosine-100/cosine-bus-tracker. Vendra and Kaabo are labeled as unfinished/prototype work.

## Headless CMS — optional, not connected
A Sanity Studio starter is provided in `studio/`, but no Sanity project has been linked yet. Until then, `config.js` leaves `projectId` blank and the website uses the local content in `app.js`.

To enable:
1. Create a Sanity project and a public dataset containing only intentionally public profile content.
2. In `studio/`, configure `SANITY_STUDIO_PROJECT_ID` and `SANITY_STUDIO_DATASET` in a local ignored `.env` file; do not push tokens.
3. Run `npm install && npm run dev` to edit a `Personal Link Hub` document; configure the public website's CORS origin in Sanity.
4. Put only your **public project ID** in `config.js` and verify CMS content on the deployed page. A fallback is retained if Sanity is unavailable.

## Checks before adding to CV
Confirm portrait, CV freshness, LinkedIn access, all outbound URLs, status descriptions, source attribution, small-screen usability and Sanity setup status. Do not claim the CMS is functioning before configuration.
