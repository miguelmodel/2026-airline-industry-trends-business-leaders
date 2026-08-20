---
reviewer: web-research-reviewer
topic_slug: fuel-energy-supply
round: 2
required_mcp: WebIQ-MCP
mcp_status: verified
verdict: APPROVED
date: 2026-08-19
subject: Airline Jet-Fuel Prices, Energy Supply, and Sustainable Aviation Fuel (2026)
companion: web-researcher
artifact_persistence: user-authorized-transcription
---

> Artifact persistence note: the specialist returned the complete intended
> review-file content after verified MCP review but could not write the file.
> The orchestrator persisted that content under the user's explicit
> authorization without adding review findings.

## Review Round 1 - 2026-08-19

**Required MCP gate:** verified. Confirmed availability and successful use of
`WebIQ-MCP/web` and `WebIQ-MCP/browse`.

- `WebIQ-MCP/web` independently validated the load-bearing IATA June 2026
  jet-fuel price, crack-spread, and fuel-bill claims.
- `WebIQ-MCP/browse` validated the IATA Fuel Fact Sheet, EIA STEO, IATA SAF
  production release, EUR-Lex ReFuelEU summary, and the Zenodo SAF-capacity
  paper, among other cited sources.

### Reference Validation

Checked 21 named cited sources and 22 cited or corroborating URLs. All checked
URLs returned meaningful content through WebIQ-MCP/browse except that one IEA
URL points to the wrong report vintage for the claim it supports.

Checked source outcomes:

1. **EIA STEO, August 2026** - verified. Supports the 11 Aug 2026 release,
   forecast completion date, Brent 2026/2027 table values, and forecast
   overview.
2. **EIA STEO Table 2 PDF** - verified. Supports Brent 2026/2027, WTI,
   wholesale jet-fuel, and diesel values.
3. **EIA Today in Energy, 11 Feb 2026** - verified. Supports the pre-disruption
   Brent forecast of $58/b in 2026 and $53/b in 2027.
4. **EIA Today in Energy, 3 Mar 2025** - verified. Supports approximately 21
   days of US jet-fuel supply and 375 million barrels of inventory context.
5. **IEA OMR URL cited in the report** - misattributed. The report links to
   January 2026 while describing April 2026 values. The January page says 2026
   crude runs are forecast at 84.6 mb/d and does not support the April-specific
   82.9 mb/d or record middle-distillate-crack claim.
6. **Correct IEA April OMR** - independently found and verified:
   `https://www.iea.org/reports/oil-market-report-april-2026`. It supports
   82.9 mb/d global crude runs, an average decline of 1 mb/d, and all-time-high
   middle-distillate cracks.
7. **EUR-Lex ReFuelEU summary** - verified. Supports 2% SAF in 2025, 70% by
   2050, synthetic fuel beginning at 0.7% in 2030, lifecycle savings,
   anti-tankering, and application dates.
8. **European Parliament OEIL PDF** - verified. Supports the SAF and e-fuel
   schedule.
9. **IATA Fuel Fact Sheet** - verified. Supports $152/b 2026 jet fuel, almost
   70% above 2025, crack spread above $57/b if disruption persists, SAF 2.4 Mt
   / 0.8%, $2,872/t SAF assumption, and $4.3bn premium.
10. **IATA SAF production release** - verified. Supports 2.4 Mt SAF, 0.8% of
    aviation fuel use, $4.3bn cost, and the e-SAF 0.6 Mt mandate versus 0.02 Mt
    capacity gap.
11. **IATA Economics, 19 Jun 2026** - verified. Supports $23bn net profit,
    $351bn fuel bill, 31.4% operating-cost share, and $4.5 net profit per
    passenger.
12. **IATA SAF Registry release, 3 Apr 2025** - verified. Supports CADO
    management, book-and-claim access, 30+ early users, and free participation
    until April 2027.
13. **Martulli & Malina / Zenodo PDF** - verified. Supports 5.9 Mt operational
    SAF capacity, 41% annual growth requirement, 2026 and 2030 capacity status,
    and e-SAF FID claims.
14. **OFI Magazine / BloombergNEF** - verified. Supports HEFA $1,817/t,
    advanced bio-SAF $3,399/t, e-SAF $5,015/t, +10% SAF prices, and 2025
    production of 1.9 Mt / 0.6%.
15. **UkrAgroConsult** - verified as corroboration of the BloombergNEF survey
    values.
16. **Argus Media** - verified. Supports EIA-derived US jet-fuel consumption of
    approximately 1.72 mb/d and production of approximately 1.85 mb/d.
17. **Norton Rose Fulbright** - verified. Supports current EU ETS scope, 99.5%
    compliance, proposed 5,000 km extension from 2029, CORSIA interaction, and
    SAF support percentages.
18. **Reuters via RTÉ** - verified. Supports carrier hedge ratios for easyJet,
    Air France-KLM, Ryanair, Wizz Air, Qantas, Lufthansa, Singapore Airlines,
    China Eastern, and SAS.
19. **Aviation Reg Watch** - content verified, but source quality is weak for
    load-bearing carbon-cost claims because it is secondary rather than an
    official EU or ICAO source.
20. **DWU Consulting** - content verified, but source quality is weak to
    moderate for US hedging and fuel-spend claims.
21. **The Frequent Flier** - content verified, but source quality is weak to
    moderate for global and regional hedge averages because it summarizes IATA
    rather than using the IATA report directly.
22. **EcoFreight** - content verified, but it is secondary and includes
    prescriptive framing unsuitable as a load-bearing authority.
23. **Energy-Solutions.co** - content verified, but it is weak for official UK
    mandate/buy-out and SAF spot-price claims; official DfT and recognized
    price-provider sources are preferable.

### Must-fix findings

#### 🟡 Important - IEA source URL is misattributed

**Locations:** Reference 5, Key Finding 4, §5.2, regional refining/import
discussion, and research limitations.

The report labels its source as the April 2026 IEA Oil Market Report but links
to the January 2026 report. The January report returns different refinery-run
figures and does not support the April-specific 82.9 mb/d, -1 mb/d, or
all-time-high middle-distillate-crack claims.

**Required correction:** replace every January URL used for April 2026
refining/supply claims with
`https://www.iea.org/reports/oil-market-report-april-2026`. Retain January only
if discussing January data separately.

#### 🟡 Important - Topic slug does not match the assignment

The report header uses `airline-fuel-energy-supply`; the binding assignment and
canonical review routing use `fuel-energy-supply`.

**Required correction:** change the report topic slug to `fuel-energy-supply`.

#### 🟡 Important - Load-bearing regulatory and hedging claims need stronger sources

**Locations:** emissions-cost mechanisms, hedging table, regional variation,
and References 17-19.

EU ETS free-allowance removal, carbon-price range, approximately 330 million
allowances, CORSIA Phase 2, global/regional hedge averages, and US
major-carrier hedge positions are material claims. Some are supported mainly by
Aviation Reg Watch, DWU Consulting, and The Frequent Flier rather than official
EU/ICAO documents, carrier filings, or the underlying IATA source.

**Required correction:** add or substitute official or primary sources:

- EU Commission, EUR-Lex, or the amended ETS directive for aviation allowance
  phase-out and scope.
- ICAO or official CORSIA documentation for phase timing.
- GOV.UK or Department for Transport for the UK SAF mandate and buy-out.
- SEC 10-K filings for US carrier-specific hedge positions.
- The underlying IATA Global Outlook for global/regional hedge averages, or
  clearly label those figures as secondary summaries of IATA.

### Claim Citation Coverage

Most quantitative claims are cited inline and traceable. High-value claims on
IATA fuel economics, EIA forecasts, SAF production/capacity, ReFuelEU mandates,
and carrier hedging are generally well covered.

Must-fix coverage issues are the wrong IEA URL and the need for stronger
primary-source support or explicit secondary labeling for regulatory and
hedging claims.

### Quote Verification

Verified 10 exact quotations out of 10:

1. IATA Fuel Fact Sheet price quote - verified.
2. IATA Economics fuel-bill quote - verified.
3. EIA 21-days-of-supply quote - verified.
4. IATA SAF production quote - verified.
5. Martulli & Malina 41% growth quote - verified.
6. IATA e-SAF capacity-gap quote - verified.
7. BloombergNEF via OFI price quote - verified.
8. European Parliament ReFuelEU schedule quote - verified.
9. Aviation Reg Watch EU ETS quote - verified in that source, though the source
   remains too weak for a load-bearing regulatory claim.
10. IATA SAF Registry quote - verified.

No fabricated or absent quotations were found.

### Source Authority Compliance

The report appropriately prioritizes IATA, EIA, EIA tables, EUR-Lex, European
Parliament, IEA, and Zenodo for many core claims. SAF production and capacity
are particularly well supported.

Authority issues remain for the IEA URL misattribution and secondary support for
some EU ETS/CORSIA, UK mandate/buy-out, and hedging claims.

### Conflict & Uncertainty Disclosure

The report preserves forecast disagreement and uncertainty, including the
IATA-versus-EIA basis, February-to-August EIA revision, SAF production versus
capacity, denominator sensitivity, and secondary-source caveats.

The IEA misattribution must also be corrected in the limitations section.

### Source Freshness & Currency

Most sources are current through 2026-08-18. The sole must-fix vintage issue is
the April-versus-January IEA URL mismatch.

### Topic Coverage Assessment

Coverage is strong across:

- Jet-fuel prices and 2026 outlooks.
- Physical supply, refining, and generic shortage risk.
- Crack spreads and crude-versus-refined-product exposure.
- Fuel bill and operating-cost share.
- Hedging context.
- SAF production, capacity, and pathway pricing.
- EU/UK mandate exposure.
- Carbon-cost mechanisms.
- Book-and-claim infrastructure.
- Regional variation.

The report follows neutral supply framing. No direct named event, actor,
region-attribution narrative, sanction, military topic, or trade-dispute
narrative appears in substantive prose. No prescriptive recommendation was
found.

### Research Limitations Review

The limitations section candidly identifies event-saturated sources,
US-centric high-frequency supply data, approximate wholesale figures, SAF
price limitations, secondary sources, proposed EU ETS changes, IEA access
limits, and exclusion of prescriptive guidance.

It must cite the correct April 2026 IEA OMR for April refining figures.

### Code & CLI Validation

No code or CLI examples are present, appropriate for this report.

### Reference List Integrity

The reference list is mostly complete and well categorized. No orphaned body
citations were found.

Integrity issues:

- 🟡 Important - Reference 5 has the wrong IEA URL.
- 🟡 Important - The header topic slug mismatches the assignment.
- 🟢 Minor - Clarify that BloombergNEF data was accessed through trade
  reporting rather than directly.

The required MCP marker is present and well formed.

### Report Structure & Readability

The report is well organized, with clear methodology, findings, quantitative
tables, regional variation, uncertainty, limitations, and references. It
strongly distinguishes production, capacity, announced capacity, and FID and
uses clear units.

The topic slug mismatch is a blocking artifact-routing issue.

### Suggested Improvements

1. 🟡 Important - Correct the IEA OMR URL from January to April 2026 wherever
   April refining and supply claims appear.
2. 🟡 Important - Change the topic slug to `fuel-energy-supply`.
3. 🟡 Important - Strengthen primary-source support for EU ETS/CORSIA, UK SAF
   mandate/buy-out, and hedging claims; retain secondary sources only as
   corroboration or label them explicitly.
4. 🟢 Minor - Clarify in the header that BloombergNEF data was accessed through
   OFI/UkrAgroConsult reporting.

### Readiness Verdict: NEEDS REWORK

The report is close but not publication-ready because:

- 🟡 Important - April 2026 IEA claims link to the wrong January report.
- 🟡 Important - Topic slug mismatch.
- 🟡 Important - Several load-bearing regulatory and hedging claims rely on
  secondary sources where official or primary sources are expected.

The report is ready for caller-managed revision.

NEEDS REWORK

## Review Round 2 - 2026-08-19

**Required MCP gate:** verified. Both `WebIQ-MCP/web` and
`WebIQ-MCP/browse` were used successfully.

- WebIQ search validated the revised UK SAF mandate and buy-out claims.
- WebIQ browse validated the IEA April 2026 OMR, GOV.UK mandate outcome,
  European Parliament EU ETS final-act summary, ICAO CORSIA brochure, IATA Fuel
  Fact Sheet, and OFI/BloombergNEF SAF price reporting.

### Fix Verification

1. ✅ fixed - IEA URL misattribution. All April 2026 refining and supply claims
   now cite `https://www.iea.org/reports/oil-market-report-april-2026`; no
   January URL remains for those claims.
2. ✅ fixed - Topic slug. The report uses `fuel-energy-supply`.
3. ✅ fixed - Regulatory and hedging source authority. EU ETS is anchored to
   EUR-Lex and European Parliament; CORSIA to ICAO; the UK mandate and buy-out
   to GOV.UK/DfT/legislation; named carrier hedging to Reuters-relayed
   disclosures; secondary summaries are labeled.
4. ✅ fixed - BloombergNEF access disclosure. The report says the data was
   accessed through OFI/UkrAgroConsult trade reporting, not directly.
5. ✅ fixed - Advisory-term cleanup. Lint passes without banned-term findings.

### Reference Validation

Round 2 checked six critical revised sources:

1. IEA April 2026 OMR - verified for 82.9 mb/d crude runs, average decline, and
   record middle-distillate cracks.
2. GOV.UK/DfT UK SAF mandate outcome - verified for 2%/10%/22%, HEFA cap, PtL
   obligation, and £4.70/£5.00 per-litre buy-out prices.
3. European Parliament EU ETS aviation final-act summary - verified for
   allowance phase-out, full auctioning from 2026, SAF support allowances, and
   support percentages.
4. ICAO CORSIA brochure - verified for pilot, first, and second phase timing and
   participation conditions.
5. IATA Fuel Fact Sheet - verified for $152/b 2026 jet fuel, crack spread,
   2.4 Mt SAF, 0.8% share, SAF price assumption, and $4.3bn premium.
6. OFI/BloombergNEF SAF reporting - verified for pathway price figures and the
   2025 production/share comparison.

No material URL-integrity issue remains. The 27-source count is coherent: 17
primary/official, 1 academic/research, 2 market-data, 1 legal analysis, 1 news
compilation, and 5 secondary/trade sources.

### Claim Citation Coverage

No material issues. Load-bearing price, fuel-bill, supply, refining, SAF,
mandate, carbon-cost, and hedging claims are cited inline. The report
distinguishes primary regulation from secondary estimates, direct versus
reported market data, and production versus operational/announced/FID capacity.

### Quote Verification

All 10 quotations were verified across both rounds. Round 2 rechecked the four
most affected or load-bearing quotes. No fabricated, absent, or misattributed
quotation was found.

### Source Authority Compliance

No material issues. Core claims now follow the source hierarchy:

- IATA and EIA for jet-fuel economics.
- Corrected IEA April OMR for refining.
- IATA for SAF production and premium.
- Martulli & Malina for SAF capacity/FID.
- EUR-Lex and European Parliament for EU rules.
- ICAO for CORSIA.
- GOV.UK/DfT/legislation for the UK mandate.
- Reuters-relayed disclosures for named carrier hedging.

Remaining secondary estimates are contextual, labeled, or corroborative.

### Conflict & Uncertainty Disclosure

No material issues. The report preserves basis and vintage differences,
conditional 2027 normalization, SAF denominator and price sensitivity,
announced-versus-realized capacity, proposed-rule status, and secondary market
estimates.

### Source Freshness & Currency

No material issues. Revised sources are current and appropriate through
2026-08-18.

### Topic Coverage Assessment

No material issues. The report covers jet-fuel prices, supply/refining,
shortage risk, crack spreads, fuel bill, hedging, SAF production/capacity and
price, EU/UK mandates, EU ETS, CORSIA, book-and-claim, regional variation, and
2027-2030 implications.

The report preserves neutral generic-supply framing and contains no
prescriptive guidance.

### Research Limitations Review

No material issues. Limitations now correctly identify the April IEA edition,
indirect BloombergNEF access, primary regulatory anchors, fluctuating secondary
market estimates, proposal status, and descriptive hedging evidence.

### Reference List Integrity

No material issues. The reference list, header categories, and body citations
are consistent; no orphaned reference or missing body citation was found. The
required MCP marker remains present and well formed.

### Report Structure & Readability

No material issues. The report is clear, unit-rigorous, and explicit about
observed, forecast, estimate, and proposal status.

🟢 Minor - The §8 fuel-decarbonization bullet still cites Aviation Reg Watch
alongside stronger sources. Because primary support is present in §5.6 and the
secondary status is disclosed, this is waived.

### Readiness Verdict: APPROVED

All Round 1 must-fix findings are fixed. No unresolved 🔴 Critical or 🟡
Important findings remain. The remaining 🟢 Minor item is waived.

APPROVED
