# Build Plan — 2026 Airline Industry Trends

- **Content version:** 2
- **Build version:** 3
- **Built (UTC):** 2026-08-19T19:35:27Z
- **Topic slug:** 2026-airline-industry-trends-business-leaders
- **Total slides:** 14
- **Initial theme:** GitHub Cosmos (all four themes included: GitHub Cosmos, Warm, Corporate, Cyberpunk)
- **Target duration:** 15 minutes
- **Lineage:** Scoped rebuild of v2 (`2026-08-19T1240-v2-…`) addressing presentation-slide-reviewer
  Round 2 (0 Critical + 4 Important + 2 Minor). v1 and v2 are preserved immutably; this is a new
  immutable v3. v2 confirmed all Round 1 Critical fixes pass; those behaviors are preserved exactly
  (no off-canvas content, Slide 14 metric fit, proportional bars, all audience text ≥22px,
  Warm/Corporate contrast, visible-aware hidden-slide counter, print chrome, notes, all four themes,
  source/build fidelity, hand-craft markers, audience-only visible content). Only the four remaining
  Important layout/label overlaps on Slides 2, 5, 6, 8, and 12 were changed.

## Section ranges

| Section | Slides |
|---|---|
| 1 — Opening | 1 |
| 2 — Market and Economics | 2, 3, 4 |
| 3 — Fuel Economics | 5, 6 |
| 4 — Fleet and Operations | 7, 8, 9 |
| 5 — Digital and Commercial | 10, 11 |
| 6 — Regulation and Resilience | 12, 13 |
| 7 — Synthesis | 14 |

## Slide inventory

- **Title slide:** 1
- **Comparison:** 2, 4, 6, 9, 10
- **Diagram / hand-craft:** 3, 7, 8, 12
- **Single-point callout:** 5
- **Boxes / 2x2 grid:** 11
- **List:** 13
- **Recap / synthesis (hand-craft):** 14
- **Hand-crafted (`Visual: hand-craft`) slides:** 3, 7, 8, 12, 14 — each HTML file begins with `<!-- HAND-CRAFTED OVERRIDE — do not regenerate -->`
- **Demo / break / image slides:** none
- **Image copy expectations:** none. `presentation-content.md` declares no `presentation-images/` asset contract and the source directory does not exist. `public/images/` is created but empty. No image warnings expected.

## Non-negotiable visual-fidelity implementation matrix

| # | Source Form | Data / relationship to encode | Chosen HTML/CSS/SVG component | Hierarchy | Fidelity prohibition |
|---|---|---|---|---|---|
| 1 | Title + five-cell metric strip (one per domain) | Market $23B / 2.0%; Fuel $152/bbl +70%; Fleet ~17,000 backlog / ~12 yrs; Digital $50.8B / 15.7%; Reg EU ETS free allowances end 2026 / SAF ~0.8% | Title composition + `.metric-strip` of 5 `.metric-cell` tokens | Title dominant; strip reads L→R as deck preview | Not decorative imagery; each cell a real sourced 2026 figure; no stock photo |
| 2 | Two-vintage paired bars (profit + margin) with WACC reference | Profit $41B→$23B; margin 3.9%→2.0%; ROIC 6.8%→4.3% vs WACC 8.2%→8.5%; revenue $1.053T→$1.165T (+9.4%) | Inline-SVG grouped bar chart w/ dashed WACC reference line + revenue callout card | Halving of net profit dominant; ROIC-below-WACC second | Two distinct forecast vintages, not a sequence; keep below-WACC reference; no blended number |
| 3 | Small-multiple RPK monthly marker timeline + load-factor counterpoint | RPK +3.8% Jan, −2.2% May, −1.7% Jun crossing zero; Jun PLF 84.2%; ex-one-region −0.6% | HAND-CRAFT inline-SVG line/marker plot with zero axis crossing + load-factor gauge | Growth→contraction crossover dominant; record LF counterpoint | Only Jan/May/Jun plotted; no fabricated intermediate months; keep LF counterpoint |
| 4 | Split comparison: value-vs-volume + model dispersion | Spend $1.71T (+7.2%) vs trips +1.3% (~1.84B); yields +7%; EU FSC EBIT −4.0%→−0.7%, EU LCC deeper loss w/ +21% rev; Airbus 3.6%/yr to 2044 | Two side-by-side comparison panels (`.split-compare`) + footer band | Spend>trips gap left; divergent model margins right | Yield-led + uneven; label GBTA single-source forecast |
| 5 | Large callout + two-bar fuel bill + cost-share dial | +70% / $152/bbl; bill $252B→$351B (~+$100B); share 25.4%→31.4%; volumes flat | Dominant `.mega-callout` + inline-SVG two-bar comparison + SVG donut/dial | Price jump dominant; +$100B bill and share step secondary | Price-driven with flat volumes; do not imply demand growth |
| 6 | Brent revision arrows (Feb vs Aug) + hedge-coverage bars + crack-spread callout | Brent $58(Feb)→$87(Aug), 2027 $69; crack ~$57/bbl; hedged ~1/3 global, EU ~70%, NA minimal; crude-basis hedges | Inline-SVG revision arrow panel + horizontal hedge-coverage bars + crack-spread chip | ~$29 six-month revision dominant; uneven crude-centric hedging second | Preserve vintage disagreement; show crack spread uncovered; no blended Brent |
| 7 | Backlog-vs-output funnel + narrowbody rate-gap chips | Airbus 793 / Boeing 600 (2025); backlog ~17,000 (~12 yrs); ~24% below 2019; ~5,300 missing; A320 54 vs 75, 737 42 vs 57 | HAND-CRAFT oversized backlog block funneling to thin output stream (CSS/SVG) + rate-gap chips | ~12-yr backlog dominant; below-target build rates support | Supply is binding constraint; deliveries not a resolved bottleneck |
| 8 | Grounding callout easing + rising shop-visit/MRO trend | 648 grounded (28%) Mar 2025 easing; LEAP visits ~600–800→>5,000 by 2040; GTF ~1,000→>2,000; MRO $136B(2025)→~$193B(2036); fleet age ~13 yrs | HAND-CRAFT left easing-callout + right inline-SVG upward-sloping shop-visit/MRO band | Engine-availability constraint dominant; multiplying MRO forward read | Multi-year strain even as groundings ease; not fully resolved in 2026 |
| 9 | Two-panel: workforce demand + regional reliability contrast | 660k pilots / 710k techs to 2044; ~41% mechanics >60; controllers 13,164 (~6% below 2015); ~3,000 below target; EU punctuality 71%, delays −27%; US cancel 1.5%; EU delay cost >€2B | Two panels: left stacked workforce callouts; right two-bar EU-vs-US reliability + delay-cost footnote | Structural workforce demand dominant; region-split reliability second | Keep US/EU punctuality non-identical; headcount vs shortfall distinct sources; no conflation |
| 10 | Ambition-vs-deployment columns with data-coordination gate | $50.8B / airlines $36B (3.6%); 63% AI in ops; 79% genAI priority | 35% guest-facing; 12.5% ready to scale | Two columns (`.intent-col` / `.realized-col`) split by vertical `.data-gate` | Intent-vs-deployment gap dominant; data gate explains it | Contrast high intent w/ shallow deployment; label deployment survey vendor-sponsored |
| 11 | 2x2 four-box commercial grid incl. trust counterweight | Ancillary $157B (15.7%); Delta/Amex ~$8B (~10%); card 79%→72%, wallets 20%→28%, 50% biometric; ~46% online fraud share, rate ↓~30% to 0.25%, Qantas 5.7M breach | True `.grid-2x2` of four equal `.pillar-card`; trust card visually flagged as counterweight | Four equal pillars; headline number dominant within each | Must keep trust/security box; do not drop the counterweight |
| 12 | Gap diagram: rising mandate step-curve vs near-flat SAF supply + carbon chip | EU ETS free allowances removed 1 Jan 2026, EUA ~€70–95/t; SAF ~2.4Mt (~0.8%) ~$4.3B; ReFuelEU 2%→70% (2050); UK 2%→10% (2030)→22% (2040); e-SAF ~0.02 vs ~0.6Mt by 2030; CORSIA mandatory 2027 | HAND-CRAFT inline-SVG diverging step-curve (mandate) vs flat SAF line + carbon-cost chip | Widening obligation-vs-supply gap dominant; 2026 carbon step supports | Obligations rise faster than delivered SAF; do not depict SAF on track |
| 13 | Four-item list + EU/US split + insurance/climate callout | EU passenger-rights update Jul 2026 (3-hr threshold, transparency, PRM); US auto-refund stays, fee-disclosure vacated Jul 2026; hull-&-liability +15–25%; wind shear +16–27%; 21 airlines env-claims Nov 2025 | Left two-row EU/US jurisdiction split; right stacked insurance + turbulence callouts; footer env-claims band | Diverging consumer rules dominant; insurance/climate cost read | Show EU/US divergence; do not merge jurisdictions |
| 14 | Synthesis diagram: central margin node w/ five inbound domain nodes | 2.0% margin, ROIC 4.3% < 8.5% WACC; fuel 31.4% of opex; ~12-yr backlog + engine/MRO; $36B tech gated by data; carbon rising, SAF ~0.8% | HAND-CRAFT inline-SVG central node + five radial domain nodes with connecting arrows, each carrying one anchor metric | Central thin-margin node dominant; five converging pressures read around | Synthesis only; no recommendation or priority ranking |

## Implementation notes

- Fixed 1920×1080 canvas scaled with `min(vw/1920, availableH/1080)`, black letterbox, refit via `requestAnimationFrame` on resize and notes toggle.
- All colors resolved through theme CSS custom properties; charts use color-independent encodings (labels, patterns, position, direct value text) so every theme and color-blind viewers can read them.
- GSAP transitions: title zoom/fade; transition & recap dissolve; code-example fade/scale; others horizontal slide/fade. Content appears together (no per-item stagger).
- Persist `pres-theme`, `pres-notes`, `pres-hidden-slides`, `pres-current-slide`, `pres-show-slide-number`, `pres-show-section-label`.
- Speaker notes render as a fixed bottom band (not an overlay covering the slide); canvas rescales above the band.
- No banned terms introduced; all figures taken verbatim from approved content bodies/comments; forecast vintages and observed/estimate/forecast status labeled.
- Visible slide text is audience-facing only; Visual Direction, timing, allocation, and presenter prompts remain in build metadata or hidden notes.
- Slides designed to the >40px clear-margin fit target; a Playwright reviewer must confirm actual rendered fit.

## Round 1 fix-verification (v1 → v2)

Every Critical and Important finding from
`agent-reviews/2026-08-19-presentation-slide-reviewer-…md` is mapped to concrete
files/selectors and the self-check outcome. All fit/contrast/size targets are
design targets; a Playwright reviewer must confirm rendered pixels.

| # | Sev | Finding | Files / selectors changed | Self-check result |
|---|---|---|---|---|
| C1 | Critical | Slide 5 `.viz-row` clipped 18px below canvas; fuel-share panel cut | `css/base.css` `.slide-content` (reserve 122px bottom band, `overflow:hidden`, `min-height:0`); `css/slides.css` `.viz-row/.mega-callout/.viz-panel { min-height:0 }`, mega-num 132→120, `.slide[data-number="5"]` compaction; `public/slides/slide-005.html` right column `min-height:0`, dial panel `flex:0 0 auto` | Callout + $252B→$351B bars + 25.4%→31.4% dial designed inside canvas; text ≥22px; ≥40px above chrome |
| C2 | Critical | Slide 12 hand-craft 99px off-canvas; legend/chips clipped; year/supply labels overlap | `public/slides/slide-012.html` redesigned SVG (viewBox 940×340, `preserveAspectRatio`, staircase mandate vs flat SAF, year ticks below baseline, supply label above line); `.funnel-wrap { min-height:0 }`; `.slide[data-number="12"]` compact legend/chips | Legend + four evidence chips bounded in two rows; all SVG text 24u (≥22px rendered); mandate-vs-supply preserved |
| C3 | Critical | Slide 14 central metric 441px overhangs 304px ellipse, dark-on-dark; SVG bottom 13px | `public/slides/slide-014.html` ellipse rx 152→206, metric split into two ≥24u lines fully inside node; `.synth-wrap { min-height:0 }` + reserved band → SVG scales to fit | `ROIC 4.3% < WACC 8.5%` (~317u) fits inside 412u node width; five inbound relationships kept, no ranking; ≥40px bottom clearance |
| C4/I4 | Critical/Important | Warm labels 2.96:1, eyebrow 3.16:1, Warm/Corporate secondary text <4.5:1 | `css/themes/warm.css` accent-primary #c47a2e→#9a5713 (5.21:1), accent-secondary→#6d4423 (7.80:1), text-secondary→#5f574e (6.59/6.15:1); `css/themes/corporate.css` text-secondary α0.60→0.72 (6.77/6.59:1) | Body/caption ≥4.5:1 and large text ≥3:1 across slide/cards/settings/notes/labels/nav; GitHub Cosmos initial + all four retained |
| I1 | Important | Slides 2 & 7 content collides with counter (32px/30px margins) | `css/base.css` reserved 122px bottom band + chrome `bottom:30px`; `.viz-row`/`.funnel-wrap` `min-height:0` lets flex shrink so trailing paragraph/chip sit above band | Designed >40px clearance without shrinking text |
| I2 | Important | Slides 4 & 6 `.hbar-fill` compute 0px (inline spans) | `css/slides.css` `.hbar-track { display:block }`, `.hbar-fill { display:block; min-width:3px }` | Five widths encode 100/18% (S4) and 70/33/5% (S6); direct value labels + bar length are non-color cues |
| I3 | Important | Sub-22px audience text on S1,3,6,7,8,11,12,14 | `mc-domain`20→22/`mc-label`23; `pc-tag`21→23; SVG labels raised to 24–26u on slides 3,6,7,8,12,14 | All audience HTML/SVG text ≥22px by design (SVG units ≥24 at scale ≥1.1) |
| I5 | Important | Hidden-slide counter showed `1/14` then `3/14` | `js/app.js` `updateChrome()` computes visible index/total; `setHidden()` calls `updateChrome()` and re-homes off hidden current | Hide S2 → `1 / 13`, next visible S3 → `2 / 13`; checklist keeps absolute numbers |
| I6 | Important | `#notes-toggle`/`#admin-toggle` still `display:flex` in print | `css/print.css` names `#notes-toggle,#admin-toggle,#nav-prev,#nav-next` explicitly `display:none !important` | Top-right controls + arrows hidden in print; hidden-slide exclusion + state restore preserved |
| M1–M3 | Minor | Dense S9/S11/S13 hierarchy; transient Vite HMR error | Font bumps preserve hierarchy; `.slide-content overflow:hidden` guards; HMR error is dev-only/benign, dev base left at `/` | Hierarchy preserved; HMR left untouched to avoid compromising dev behavior |

## Round 2 fix-verification (v2 → v3)

All four remaining Important findings from Round 2 of
`agent-reviews/2026-08-19-presentation-slide-reviewer-…md` are mapped to exact
files/selectors and the browser-measured self-check outcome. Measurements were
taken against the served v3 DOM at 1920×1080 (canvas scale 1.000), using a
headless-Chromium harness driving `window.__PRESENTATION_TEST__` and
`getBoundingClientRect` / `getScreenCTM`. These are builder self-checks with a
real engine, not the designated Playwright reviewer; the visual reviewer must
still confirm rendered fit. No Playwright approval is claimed.

| # | Sev | Round 2 finding | Files / selectors changed | Measured self-check result |
|---|---|---|---|---|
| R2-1a | Important | Slide 2 `.slide-body` intersects `#slide-counter` 54×37px; 39px clearance | `public/slides/slide-002.html` (summary sentence moved above `.viz-row` as `.slide-lead`); `css/slides.css` `.slide[data-number="2"]` (padding-top 54, padding-bottom 138, tighter eyebrow/title margins, `.viz-row{min-height:0}`) so the flex chart absorbs remaining height | Lowest content bottom 942px; **0** intersections with counter/section; **61px** clearance above chrome (>40px) |
| R2-1b | Important | Slide 5 `.mega-callout` ∩counter 54×46px; lower `.viz-panel` ∩section 170×46px; `.card-body` ∩section 114×15px; 30px clearance | `css/slides.css` `.slide[data-number="5"]` (padding-top 54, **padding-bottom 140** reserved band, `.viz-row{min-height:0}` + `.viz-row>div{min-height:0}`, `mega-num` 132→104, `.viz-panel:first-child .chart{max-height:340}`) | Lowest content bottom 940px; **0** intersections with counter/section; **63px** clearance above chrome (>40px); all callout/bill-bar/31.4% dial components retained |
| R2-2 | Important | Slide 6 `2026 · Feb`/`Aug`/`Aug` x-axis labels overlap ~3×47px (run together) | `public/slides/slide-006.html` (three x-axis labels rebuilt as two-line `<tspan>` month-over-year; viewBox height 300→344) | Pairwise label bounding-box gaps **+131.9px** and **+131.9px** (positive, not zero); three vintage bars $58/$87/$69, +$29, crack-spread chip, proportional hedge bars preserved |
| R2-3 | Important | Slide 8 both LEAP + GTF polylines cross the `~600–800` baseline label | `public/slides/slide-008.html` (LEAP starting-value label relocated below the baseline near the 2025 origin, between year ticks, with a theme-aware backing chip `rect` + `text`) | Segment-vs-text test: **neither** polyline intersects the label bbox; both start ranges, `>5,000`/`>2,000` endpoints, MRO/fleet-age chips, and hand-craft marker preserved |
| R2-4 | Important | Slide 12 mandate staircase crosses `delivered SAF supply ≈ 0.8% of fuel` | `public/slides/slide-012.html` (supply label relocated to the clear lower-right region — right of the x=430 mandate riser, below the rising steps, above the flat supply line — as a compact two-line chip with theme-aware backing) | Segment-vs-text test: mandate polyline **does not** intersect the label bbox (supply line also clear); step curve, near-flat supply line, widening-gap annotation, years, legend, all four evidence chips, ≥22px text, and hand-craft marker preserved |

### Regression self-checks (all 14 slides, served v3 DOM @ 1920×1080)

- **Canvas containment:** every slide's content stays within 0–1920 × 0–1080 (max right 1810, max bottom ≤ 958 for content; Slide 8's 987.9 value is the transparent letterboxed SVG element box, not visible ink, and does not collide with chrome — unchanged from v2).
- **Chrome collisions:** **0** intersections with `#slide-counter` or `#section-label` across all 14 slides.
- **Audience text size:** **no** HTML or SVG audience text below 22px on any slide (two-line SVG tick/label tspans included).
- **Preserved v2 behaviors (unchanged files):** visible-aware hidden-slide counter, print chrome hiding, four-theme tokens/contrast, notes band, proportional Slide 4/6 bars, Slide 14 split central metric — none of the JS/theme/print files were modified in v3.
- **Hand-craft markers intact:** Slides 3, 7, 8, 12, 14 retain the `<!-- HAND-CRAFTED OVERRIDE — do not regenerate -->` marker (Slides 8 and 12 edited surgically for label placement only, structure preserved).

All fit/clearance/label figures above are design-and-measurement targets from a
headless engine; the designated visual reviewer must confirm the rendered
pixels. Slides remain designed to the >40px clear-margin fit target.
