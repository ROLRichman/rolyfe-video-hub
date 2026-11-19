# RO’Lyfe Vision Hub™

RO’Lyfe Vision Hub is a mobile-first learning destination for real estate strategy, funding education, business systems, AI, sports-history discovery, and wealth-building topics.

## Live website

https://rolrichman.github.io/rolyfe-video-hub/

## Current features

- Featured embedded lesson: **SBA Loan Programs and How to Apply**, from Cal Poly CIE / Small Business Development Center (June 11, 2024). The session description identifies an SBA lender-relations specialist as the speaker.
- Topic-specific YouTube search shortcuts for property research, funding, investing, sports archives, and AI / business systems.
- **My Shelf**: visitors can add a YouTube watch URL, youtu.be URL, Shorts URL, embed URL, or 11-character video ID; assign a category; play the video in the embedded player; and remove it from their list.
- Responsive player layout for phones, tablets, and desktop.
- The original YouTube link remains available if an uploader has disabled embedding.

## Data and integration boundaries

- My Shelf stores up to 30 entries in the current browser's localStorage. It is per-device / per-browser and does not sync to other devices or visitors.
- Topic search shortcuts open YouTube search results; they are discovery links, not a curated playlist or endorsement of each search result.
- The site does not currently include a server-backed public video catalog, YouTube Data API, personal accounts, or cross-device watch history.
- No live conversational Jamal / Atlas integration is claimed on this page.
- Do not embed copyrighted video files directly. Use the original platform's authorized embed player or link to the source.

## Project direction

1. Curate a public RO’Lyfe playlist with selected videos and source notes.
2. Add a server-backed catalog only after choosing a data model, access rules, and moderation approach.
3. Expand the learning tracks: Property Research, Funding, Trading, Sports & History, and AI & Systems.
4. Add original RO’Lyfe lessons and branded walkthroughs as they are produced.

## Run / publish

This is a static GitHub Pages site. The root `index.html` is the public entry point.


## Shared RO’Lyfe front-door preview access

- This site's public front door uses the common remembered-device gateway key `rolyfe.shared.preview.access.v1`.
- Entering once on any configured RO’Lyfe media front door on `rolrichman.github.io` lets visitors move among Entertainment, Live Sports, Gaming, Vision Hub and JUST LISTENING without another preview prompt on the same browser.
- This is a convenience preview, not real authentication or a security barrier. It does not protect private content, APIs, or page source. Secure account sign-in / single sign-on is a later phase.
- The welcome screen announces a planned first-three-months-free launch offer; confirm final commercial terms before accepting payments or publishing final pricing.
