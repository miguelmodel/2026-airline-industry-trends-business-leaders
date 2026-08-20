# Build Plan — 2026 Airline Industry Trends

- **Content version:** 2
- **Build version:** 1
- **Built (UTC):** 2026-08-19T11:59:30Z
- **Topic slug:** 2026-airline-industry-trends-business-leaders
- **Total slides:** 14
- **Initial theme:** GitHub Cosmos (all four themes included: GitHub Cosmos, Warm, Corporate, Cyberpunk)
- **Target duration:** 15 minutes

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
