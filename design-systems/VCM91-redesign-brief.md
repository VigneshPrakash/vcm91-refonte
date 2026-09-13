# VCMP 91 — Website Redesign · Project Brief

> Portable context handoff. Drop this into a Claude Code session, a Cowork project, or a new
> Claude Project to continue the work with full context.

---

## 1. The project in one line

Volunteer redesign of the **Vélo Club Massy 91** (cyclotourisme club, founded 1948, FFVélo)
website — currently a dated free Google Sites page at **https://www.vcmp91.fr/accueil** — done
as a passion project in exchange for free club membership + club maillots.

## 2. The arrangement

- **Who does it:** me, as a bénévole / passion project (no cash).
- **In exchange:** free adhésion + club maillots (jerseys).
- **Notional market value of the work:** ~**€2,500** (used only to show the bureau this is a
  real contribution, not a throwaway favour).
- **In-kind value received:** ~€100–250/yr (licence FFVélo €40–120 + maillots €40–80 each).
  The asymmetry is intentional — it's a gift.

## 3. Market pricing reference (France, 2026)

| Tier | Includes | Price |
|---|---|---|
| Budget / template shop | Template, 5–8 pages, 1–2 wks | €900–1,500 |
| Typical small agency | Semi-custom, calendar, galleries, news, contact, basic SEO | €2,000–4,500 |
| Full-featured | + member area, online adhésion/payment, document space | €4,500–8,000 |

Fair market value for *this* club: **~€2,500**.

## 4. Current site audit

**Platform:** Google Sites (free). Domain vcmp91.fr already mapped to it.
**Verdict:** content is genuinely decent (real history, flagship rallye, active ride programme).
Problem is 100% presentation, not substance.

### Page-by-page inventory

| Page | Current content | Change frequency | Redesign move (in Google Sites) |
|---|---|---|---|
| Accueil | Club intro, forum notice, meeting point, contact email | Rare | Hero photo + "Venez rouler 3× sans engagement" CTA |
| Les groupes | 4 ride groups G1–G4 by level + road captains | Rare | Clean cards, one per group (pace/distance/contact) |
| Programme des groupes | Text list of Sunday rides + rallyes (date/group/km/price) | **Weekly/seasonal** | **Embedded Google Calendar** — biggest single upgrade |
| La vie du Club | Ride reports, annual séjour (Damvix), photos | Monthly | News feed + photo galleries |
| Rallye Massy-Breuillet | Flagship Nov event, ~270 riders (2024), 3 routes (35/62/91 km), prices | Yearly | Event page + **embedded HelloAsso** registration |
| Le bureau | Committee members | Yearly | Contact cards |
| Histoire du Club | 1948 founding, section cyclo 1977, école 1980 | Never | Timeline layout (a real asset) |
| Nous contacter | Email / contact | Rare | Contact block + embedded map to the Recyclerie |

> Update: full content of all 8 pages has since been pulled and archived — see §8a.

## 5. Benchmark summary

- **Realistic peers (French cyclo clubs):** most run on **Sportsregions** (free, dominant),
  **AssoConnect** (customisable), or bolt on **HelloAsso** for online adhésion + payment.
- **Design inspiration (pro end):** Beat Cycling etc. — steal the *feel* (full-bleed hero photos,
  bold type, whitespace, one clear CTA), not the features.
- **Judged on:** visual/modern feel + features (calendar, member area, registration).

## 6. Platform decision — Google Sites (chosen)

Chosen deliberately for **sustainability + bureau familiarity**, not as a compromise.

- ✅ Bureau already runs it — zero retraining.
- ✅ Free, Google-hosted — nothing rots or renews after handoff.
- ✅ Domain already mapped — no migration.
- ✅ Modern Google Sites does hero images, carousels, buttons, and **embeds** (Google Calendar,
  HelloAsso). Current site just doesn't use any of it.
- ⚠️ Ceiling (accepted): no pro-level custom design (limited themes/fonts, no custom CSS),
  no true member-login area. Both "advanced" needs solved by embeds, not code.

**The two embeds that unlock most of the value:**
1. Programme → **Google Calendar** (colour-coded per group G1–G4).
2. Adhésion + rallye registration → **HelloAsso** (free for the assoc, handles payment).

## 7. Handover plan (kept non-technical)

Cleanest path — avoids holding their password or a fiddly ownership transfer:

1. Bureau creates the new site **inside the club's own Google account** (vcmp91@gmail.com) and
   adds my personal Gmail as **editor**.
2. I build it as an **unpublished draft** — live site stays untouched.
3. On go-live, they publish and re-point vcmp91.fr to the new version (one settings step, from
   their account).
4. I'm removed as editor when done. Born owned by the club → nothing to transfer.

(Fallback: build on my account, transfer ownership at the end — one extra fiddly step.)

## 8. Open items / next steps

- [x] Build a **clickable HTML mockup** of the new design to show the bureau — done, see §8b.
- [x] Pull full content of Les groupes / Contact / Le bureau — done, see §8a.
- [ ] Draft the **French proposal message** to the bureau (value €2,500, bénévole exchange,
      Google Sites + embeds approach).
- [ ] Produce the **section-by-section build blueprint** for each Google Sites page.
- [ ] Draft French/English page copy (the mockup currently is French-only, matching the live
      site — English is future scope, not yet decided whether the real build needs it).
- [ ] Set up the Google Calendar (per-group) and a HelloAsso test embed.
- [ ] Save the real photos manually into `content/images/` per the manifest (blocked on
      automated download — see §8a) and wire them into the mockup.
- [ ] Pull the remaining 40+ photo URLs from *La vie du Club* if a fuller gallery is wanted
      (only ~6 representative photos were archived for the first mockup pass).

## 8a. Content archive

All 8 live pages' text content has been scraped and saved to `content/raw/*.md` — one file
per page, plain text extraction (headings, copy, schedules, prices, contacts). Used directly
as the copy source for the mockup in §8b, so no content was invented.

**Images could not be downloaded automatically.** The site's photos are served from Google's
`fife` image CDN, which returns HTTP 403 to any non-browser request regardless of headers —
this is standard bot-detection that a headless browser normally works around, but Playwright
was ruled out for this project, so there was no way to fetch the bytes programmatically.
Resolution: `content/images/MANIFEST.md` lists all 14 unique image URLs found, each mapped to
a target filename and description — open each link in a real browser, "Save Image As…" using
the listed filename, drop it into `content/images/`. The mockup's `<img>` tags already point
at these exact filenames with an automatic fallback (a labelled placeholder box) until the
real file exists, so dropping a photo in is a live update, not a rebuild.

Not a blocker in practice: the real photos already live in the club's own Google account and
will be pulled in naturally whenever the actual Google Sites build happens — the mockup's job
is to sell the layout, not carry the exact original pixels.

## 8b. Mockup

Built at `mockup/` — 8 static HTML pages (one per live site page, same URLs/nav structure),
one shared `mockup/css/style.css`, zero build step. Open `mockup/index.html` directly in a
browser (plain `file://`, no server needed — all paths are relative).

**Typography:** Poppins (body) + Barlow Condensed (headlines, bold/italic, uppercase) — both
free on Google Fonts, loaded via a `<link>` tag. Pairing is modelled on
santinicycling.com/tour-de-france/en/ (Poppins + Acumin Pro Extra Condensed there), with
Barlow Condensed standing in for Acumin since that's a paid Adobe/Typekit font tied to
Santini's own license. Note this is a placeholder for the real build too — Google Sites'
theme editor has its own limited font list (§6), so whichever of these two survives into
production depends on what's actually offered there.

**Palette:** navy (`#14274e`) + white + a red accent (`#d1293d`), echoing the club's
historical blue-with-white-stripe kit and Henri Lemoine's polka dots (§ Histoire).

**Per-page redesign moves implemented** (matching the table in §4): hero photo + CTA on
Accueil, one card per group on Les groupes, a Google-Calendar-embed placeholder + the current
week's schedule as cards on Programme, a news-feed layout on La vie du Club, an event page
with a HelloAsso-embed placeholder on Rallye Massy-Breuillet, contact cards on Le bureau, a
timeline on Histoire du Club, and a contact block + map-embed placeholder on Nous contacter.

## 9. How to continue in another Claude environment

- **For the mockup / any custom code:** Claude Code (VS Code, terminal, or desktop). Paste this
  brief in first so it has full context.
- **For the multi-step project work** (copy, plan, assets, French drafts in one place): Cowork.
- **Remember:** the *Google Sites build itself* stays in Google's web editor — no tool replaces
  that step. Code tools are for the mockup, the assets, and (only if you change the platform
  decision) a custom build.
