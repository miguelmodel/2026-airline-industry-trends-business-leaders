---
reviewer: web-research-reviewer
topic_slug: fleet-operations-capacity
round: 2
required_mcp: WebIQ-MCP
mcp_status: verified
verdict: APPROVED
artifact_persistence: user-authorized-transcription
---

# Web Research Review: Fleet, Operations, and Capacity

> Artifact persistence note: two specialists completed complementary
> validations with verified WebIQ-MCP evidence but their runtimes could not
> write the canonical file. The orchestrator transcribed and consolidated only
> their stated findings under the user's explicit authorization; no new review
> findings were added.

## Review Round 1

### Required capability evidence

Both reviewing specialists independently used `WebIQ-MCP/web` and
`WebIQ-MCP/browse` successfully. They verified the report's required marker:
`**Required MCP:** verified - WebIQ-MCP; tools used: web, browse`.

Pre-review lint result: `PASS` with four advisories: two neutral uses of
`recommendations`, one exclusion-note use of `geopolitical`, and a source-count
advisory.

### Reference validation

The reviewers prioritized load-bearing fleet, backlog, engine, MRO, labor, and
reliability claims. Independent checks included:

- Airbus 2025 deliveries, orders, and backlog.
- Boeing 2025 deliveries, orders, company backlog, and commercial-aircraft
  backlog.
- IATA engine-MRO release and IATA/Emerton study for GTF groundings, fleet
  share, engine deliveries, and shop-visit forecasts.
- EUROCONTROL summer metrics for flights, delays, punctuality, and structural
  controller constraints.
- Boeing Pilot and Technician Outlook for long-range workforce demand.
- Oliver Wyman fleet age, backlog duration, fleet outlook, and MRO estimates.
- IBA aircraft values and lease rates.
- AIN/Leeham reporting on GTF recovery and MRO capacity.
- Business Travel News reporting of DOT cancellation data.
- CBS reporting of the controller shortfall.
- GE Aerospace delivery, services, and MRO investment disclosures.

No substantive geopolitical narrative or prescriptive action agenda was found.

### Findings

#### 🟡 Important - Oliver Wyman quotation is not exact

**Location:** fleet-age block quote.

The source states that the 2025 global fleet age was "just short of 13 years,
about a year and a half more than in 2024" and that average flight hours
"increased 2% year-over-year." The report changes this wording while presenting
it as a direct quotation.

**Required correction:** reproduce the source wording exactly or remove the
quotation marks and present it as a paraphrase.

#### 🟡 Important - Pilot shortfall is mislabeled as global

The approximately 24,000-pilot shortfall is described as global, but the cited
source describes a US shortfall and is a secondary advertorial source.

**Required correction:** relabel and support the figure with authoritative
evidence, or remove it.

#### 🟡 Important - Full-year US on-time figure is unsupported

The AirDelay source covers only January through November 2025, but the report
presents the figure as full-year.

**Required correction:** use complete BTS data or label the period
January-November 2025.

#### 🟡 Important - Controller hires are misattributed

The report attributes 2,026 FY2025 controller hires to CBS. CBS supports the
approximately 3,000-controller shortfall but not the hiring result.

**Required correction:** cite the FAA's 23 September 2025 hiring announcement
for the hiring result.

#### 🟡 Important - LEAP and GTF shop-visit baselines are conflated

IATA reports LEAP shop visits rising from approximately 600-800 to more than
5,000, while GTF rises from approximately 1,000 to more than 2,000.

**Required correction:** separate the two engine families and their baselines.

#### 🟡 Important - Production shortfall needs qualification

The central claim that production is approximately 24% below 2019 is a
single-source Oliver Wyman estimate and is not clearly defined against
deliveries.

**Required correction:** label it as an Oliver Wyman estimate, define
"production" versus "deliveries," and corroborate it if feasible.

### Minor findings

- 🟢 Minor - Reconcile "19 total" in the header with 22 cited references and
  correct the source-category breakdown.
- 🟢 Minor - Disclose the provider-defined market exclusion when first stating
  the 30,046-aircraft fleet figure.
- 🟢 Minor - Label the approximately $193 billion MRO endpoint consistently as
  2036 rather than "mid-2030s."
- 🟢 Minor - The Aviation Index pilot-shortfall source is weak; do not use it as
  a standalone presentation number without a clear caveat.

### Strengths to preserve

- Strong coverage of deliveries, backlog, production constraints, fleet age,
  leasing, engines, MRO, labor, air-traffic capacity, and reliability.
- Useful uncertainty disclosure around backlog counts, recovery timelines,
  source-defined endpoints, and regional data gaps.
- Generally good distinction between observed evidence and forecasts.

### Required rework summary

1. Correct or paraphrase the Oliver Wyman quotation.
2. Correct or remove the pilot-shortfall figure.
3. Fix the US on-time period.
4. Attribute controller hiring to the FAA source.
5. Separate LEAP and GTF shop-visit baselines.
6. Qualify and define the 24%-below-2019 production estimate.
7. Reconcile source counts and the minor scope/endpoint labels.

NEEDS REWORK

## Review Round 2

### Required capability evidence

`WebIQ-MCP/web` and `WebIQ-MCP/browse` were both successfully used in this
re-review. Independent checks included the Oliver Wyman production claim and
critical revised sources from Oliver Wyman, IATA, Boeing, EUROCONTROL, FAA,
AIN/Leeham, and IBA.

Pre-review lint result: `PASS` with no hard findings.

### Fix Verification

- ✅ fixed - 🟡 Important, Oliver Wyman quotation. The prior block quote was
  removed and replaced with a clearly attributed paraphrase.
- ✅ fixed - 🟡 Important, pilot-shortfall scope. The approximately 24,000
  figure is scoped to the US/North America, identified as a secondary-reported
  Oliver Wyman estimate, and anchored to Boeing's primary workforce outlook.
- ✅ fixed - 🟡 Important, US on-time period. The report now says
  January-November 2025 and notes that full-year performance was not
  independently recomputed.
- ✅ fixed - 🟡 Important, controller-hiring attribution. The FAA 23 September
  2025 announcement supports 2,026 hires; CBS remains only for the shortfall.
- ✅ fixed - 🟡 Important, LEAP and GTF shop visits. Baselines and forecasts are
  separated for the two engine families.
- ✅ fixed - 🟡 Important, 24%-below-2019 production estimate. It is labeled as
  Oliver Wyman's build-output estimate, distinguished from deliveries, and
  directionally corroborated with IATA/Cirium.
- ✅ fixed - 🟢 Minor, source count and category breakdown. The header and 26
  reference entries reconcile.
- ✅ fixed - 🟢 Minor, provider-defined fleet exclusion. The 30,046-aircraft
  count discloses exclusion of the Russia-registered fleet.
- ✅ fixed - 🟢 Minor, MRO endpoint. Approximately $193B is labeled as 2036.
- ✅ fixed - 🟢 Minor, weak pilot source. It is secondary, caveated, and not
  standalone.
- ✅ fixed - banned-term cleanup and exact assignment slug.

### Reference Validation

Checked 13 cited URLs out of 26 references, prioritizing revised and
load-bearing claims:

1. Airbus 2025 deliveries - verified.
2. Boeing FY/Q4 2025 - verified.
3. Oliver Wyman fleet and MRO forecast - verified for production, fleet age,
   build rates, fleet counts, and MRO endpoints.
4. IATA Supply Chain Study Highlights - verified for the missing-aircraft
   estimate, backlog, fleet age, storage, and cost.
5. IATA engine-MRO release - verified for grounding and separate LEAP/GTF
   shop-visit baselines.
6. IATA/Emerton engine-MRO study - verified.
7. EUROCONTROL Summer 2025 briefing - verified.
8. FAA 23 September 2025 controller-hiring announcement - verified.
9. AIN/Leeham GTF report - verified.
10. IBA aircraft values and lease rates - verified.
11. Business Travel News / DOT cancellation data - verified.
12. AirDelay BTS-derived January-November statistics - verified for period
    labeling.
13. Aviation Index and Aviospace - verified for the limited US/North America
    context claim and retained as secondary sources.

No fabricated or materially misattributed sources were found.

### Claim Citation Coverage

No material issues. Revised claims distinguish definitions, periods, scope, and
forecast versus observed values. Production shortfall, missing aircraft, pilot
scope, controller hiring, on-time period, MRO endpoint, and LEAP/GTF baselines
now have appropriately placed citations and caveats.

### Quote Verification

Verified all five remaining block quotations: Boeing, IATA/Emerton,
AIN/Leeham, IATA, and EUROCONTROL. The problematic Oliver Wyman quotation is no
longer present.

### Source Authority Compliance

No material issues. Load-bearing claims rely on OEM disclosures, IATA,
EUROCONTROL, FAA, Boeing, Oliver Wyman, and IBA. Secondary pilot sources are
clearly labeled and not treated as primary proof.

### Conflict & Uncertainty Disclosure

No material issues. The report addresses backlog scope, recovery timing,
production versus deliveries, MRO endpoint ambiguity, on-time period, pilot
scope/source weakness, and provider-defined fleet counts and ages.

### Source Freshness & Currency

No material issues. Sources are current through 2026-08-18.

### Topic Coverage Assessment

No material issues. The report comprehensively covers deliveries, production,
backlog, fleet age, storage, leasing, engines, MRO, labor, air-traffic staffing,
airport constraints, reliability, regions, and carrier models.

### Research Limitations Review

No material issues. The limitations section now identifies all material period,
scope, source, and endpoint caveats.

### Reference List Integrity

No material issues. The header and reference list both show 26 sources, category
counts reconcile, and no orphaned references were identified.

### Report Structure & Readability

No material issues. The report is presentation-ready and neutral. The required
MCP marker is present and well formed.

### Suggested Improvements

1. 🟢 Minor - In downstream presentation use, cite the FAA controller-hiring
   source neutrally by agency/date rather than repeating its page title.
2. 🟢 Minor - Treat the approximately 24,000 US/North America pilot-shortfall
   estimate as caveated context, not a standalone headline.

These items are waived and do not block approval.

### Readiness Verdict: APPROVED

No unresolved 🔴 Critical or 🟡 Important findings remain. Remaining 🟢 Minor
items are waived.

APPROVED
