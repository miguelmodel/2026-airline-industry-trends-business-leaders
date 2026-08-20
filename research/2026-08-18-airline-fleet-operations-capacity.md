# Research Report: Airline Fleet, Operations, and Capacity — 2026 Trends

**Date:** 2026-08-18
**Researcher:** Copilot Web Researcher Agent
**Topic slug:** fleet-operations-capacity
**Sources consulted:** 26 total — 12 primary/official (4 OEM and engine-maker disclosures; 8 industry-body, regulator, and network-manager sources spanning IATA, EUROCONTROL, US DOT/BTS, and FAA); 3 recognized market-data/industry research (Oliver Wyman, IBA); 8 reputable technical and business publications; 3 supplemental or labeled-secondary/aggregated sources
**Required MCP:** verified - WebIQ-MCP; tools used: web, browse

> **Scope and neutrality note.** This report is evidence for a business-leadership presentation. It describes observed conditions, estimates, and forecasts for aircraft supply, engines and maintenance, labor, and operational reliability. It is deliberately non-prescriptive: it states evidence without proposing fleet, labor, maintenance, network, or operational actions. Countries and regions are named only for market, manufacturing, regulatory, infrastructure, operating, or data-scope evidence. Generic operating constraints (route, airspace, supply, labor, weather) are described without political attribution.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Evidence Window and Methodology](#2-evidence-window-and-methodology)
3. [Key Findings](#3-key-findings)
4. [Aircraft Production, Deliveries, and Backlog](#4-aircraft-production-deliveries-and-backlog)
5. [Fleet Age, Retirements, Leasing, and Capacity Consequences](#5-fleet-age-retirements-leasing-and-capacity-consequences)
6. [Engines, MRO Capacity, and Maintenance Costs](#6-engines-mro-capacity-and-maintenance-costs)
7. [Labor Supply, Training Pipelines, and Staffing](#7-labor-supply-training-pipelines-and-staffing)
8. [Airport, Air-Traffic Capacity, and Schedule Reliability](#8-airport-air-traffic-capacity-and-schedule-reliability)
9. [Regional and Carrier-Model Variation](#9-regional-and-carrier-model-variation)
10. [Uncertainty and Conflicting Evidence](#10-uncertainty-and-conflicting-evidence)
11. [Presentation-Ready Neutral Insights](#11-presentation-ready-neutral-insights)
12. [Research Limitations](#12-research-limitations)
13. [Complete Reference List](#13-complete-reference-list)

---

## 1. Executive Summary

Entering 2026, the constraint on the passenger-airline industry has shifted from demand to **physical supply**: aircraft, engines, maintenance slots, and skilled people. Both major airframers lifted deliveries in 2025 — Airbus delivered 793 commercial aircraft and Boeing delivered 600 ([Airbus](https://www.airbus.com/en/newsroom/press-releases/2026-01-airbus-reports-793-commercial-aircraft-deliveries-in-2025); [Boeing](https://s2.q4cdn.com/661678649/files/doc_financials/2025/q4/Press-Release.pdf)) — yet the combined order backlog has surpassed ~17,000 aircraft, about 12 years of output at current build rates, and delivery volumes remain far below the pre-pandemic trend. IATA and Cirium estimate a cumulative shortfall of roughly 5,300–5,340 "missing" aircraft versus that trend, while Oliver Wyman estimates that manufacturing output — production, which is distinct from customer deliveries — ended 2025 about 24% below 2019 levels ([IATA Supply Chain Highlights](https://www.iata.org/en/iata-repository/pressroom/presentations/supply-chain-study-highlights/?pubDate=20260817); [Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html)).

Because new aircraft are arriving slower than demand is growing, airlines are flying an **aging fleet harder**. The average age of the global fleet approached 13 years in 2025 — about 18 months older than a year earlier — while utilization and load factors set records ([Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html)). New-generation single-aisle **engine durability** remains the single most disruptive fleet constraint: at the March 2025 peak, 648 Pratt & Whitney GTF-powered aircraft — 28% of that engine fleet — were grounded awaiting shop visits, spare engines, or parts ([IATA/Emerton](https://www.iata.org/contentassets/85b59d951fc04c1c83fa2aab47824300/single-aisle-aircraft-engines-mro.pdf)). Manufacturers report that groundings are easing in 2026, but engine maintenance demand, spare-parts shortages, and shop turnaround times are expected to strain capacity into the 2030s ([AIN/Leeham](https://www.ainonline.com/aviation-news/air-transport/2026-07-17/pratt-whitney-nears-end-gtf-saga); [IATA](https://www.iata.org/en/pressroom/2026-releases/06-24-urgent-action-needed-to-ease-engine-mro-bottlenecks/)).

On the ground and in the air, **reliability improved in Europe but softened in the United States** in 2025. European summer arrival punctuality rose to 71% as flow-management delays fell 27% year over year, though delays stayed above target because of a structural shortage of air traffic controllers ([EUROCONTROL](https://www.eurocontrol.int/sites/default/files/2025-09/eurocontrol-special-flash-briefing-summer-2025.pdf)). US carriers operated a record schedule but posted a full-year cancellation rate of 1.5% (up from 1.4% in 2024), with controller staffing running roughly 3,000 below target ([Business Travel News/DOT](https://www.businesstravelnews.com/Transportation/Air/DOT-December-Full-Year-Cancellation-Rate-Elevated); [CBS News](https://www.cbsnews.com/news/faa-faces-critical-shortage-of-air-traffic-controllers-as-trainees-quit/)). Labor is a decade-long structural theme: Boeing projects demand for 660,000 new pilots and 710,000 new technicians through 2044, while about 41% of US certified mechanics are already over 60 ([Boeing](https://www.boeing.com/content/dam/boeing/v2/products/pilot-technician-outlook/pdf/2025-pto-executive-summary.pdf); [Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html)).

**Why it matters for leaders:** in 2026 the binding limits on capacity, cost, and reliability are increasingly supply-side and slow-moving. Fleet plans, maintenance timelines, and workforce pipelines now shape schedules and unit costs more than short-run demand, and the evidence points to a gradual, multi-year normalization rather than a fast return to pre-pandemic delivery and availability norms.

---

## 2. Evidence Window and Methodology

- **Evidence window:** Publications dated **January 2025 through 18 August 2026**, emphasizing 2025 full-year results and 2026 year-to-date disclosures. All URLs were accessed on **2026-08-18**.
- **Source discovery and validation:** Sources were found and read with the required Microsoft Web IQ MCP. The `WebIQ-MCP/web` tool was used for discovery across production, engines/MRO, labor, and reliability subtopics; `WebIQ-MCP/browse` was used to read authoritative pages and PDFs in full (e.g., IATA/Emerton, EUROCONTROL, US DOT, Boeing, GE Aerospace, Oliver Wyman, IBA). `web_fetch` served as a secondary reader for HTML pages; where it returned an error or partial content (IBA returned HTTP 520; Oliver Wyman returned a partial render), `browse` was used instead.
- **Source prioritization:** OEM and engine-maker disclosures (Airbus, Boeing, GE Aerospace), standards/industry bodies (IATA), regulators and network managers (US DOT/BTS, EUROCONTROL, FAA), recognized market-data providers (Oliver Wyman, IBA, and Cirium as underlying data), then reputable technical and business publications. Vendor and single-source claims are labeled.
- **Definition and unit checks:** *Deliveries* are aircraft formally handed over to customers (revenue events); *production* is manufacturing output — the aircraft built or rolled out, usually expressed as a monthly build rate. The two can diverge when finished airframes are held or parked (for example, awaiting engines), so a "production vs. 2019" comparison and a "delivery vs. pre-pandemic trend" comparison are related but distinct measures. Delivery and backlog figures are OEM-reported gross/net counts of commercial aircraft. "Grounded" GTF aircraft are aircraft in extended storage awaiting engine work, not the total parked fleet. Lease rates are monthly US-dollar amounts for specified ages. On-time = arrival within 15 minutes of schedule (US) and punctuality/ATFM-delay-per-flight (Europe); the two systems are **not** directly comparable. Fleet-age figures vary by provider scope (passenger-only vs. all-in including freighters) and are labeled accordingly. Forecasts (fleet, shop visits, MRO spend, workforce demand) are labeled as such and distinguished from realized 2025 values.
- **Corroboration:** Load-bearing numbers were cross-checked where feasible (e.g., GTF groundings via IATA/Emerton and Cirium; production shortfalls via OEM disclosures and Oliver Wyman; engine ramp via GE Aerospace disclosures and trade press). Figures resting on a single source are flagged.

---

## 3. Key Findings

1. **Deliveries rose but stayed supply-constrained.** Airbus 793 (2025, +4% YoY) and Boeing 600 (2025, highest since 2018) both improved, yet build rates stayed well short of stated targets, and Oliver Wyman estimates manufacturing output — production, distinct from customer deliveries — ended 2025 ~24% below 2019; IATA/Cirium independently estimate ~5,300+ "missing" aircraft versus the pre-pandemic delivery trend ([Airbus](https://www.airbus.com/en/newsroom/press-releases/2026-01-airbus-reports-793-commercial-aircraft-deliveries-in-2025); [Boeing](https://s2.q4cdn.com/661678649/files/doc_financials/2025/q4/Press-Release.pdf); [Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html); [IATA](https://www.iata.org/en/iata-repository/pressroom/presentations/supply-chain-study-highlights/?pubDate=20260817)).
2. **Backlogs are at records and multi-year.** Airbus year-end backlog reached 8,754 aircraft and Boeing's exceeded 6,100; the global commercial backlog has surpassed ~17,000 aircraft — nearly 60% of the active fleet (historically 30–40%) and about 12 years of production at current rates ([Airbus](https://www.airbus.com/en/newsroom/press-releases/2026-01-airbus-reports-793-commercial-aircraft-deliveries-in-2025); [Boeing](https://s2.q4cdn.com/661678649/files/doc_financials/2025/q4/Press-Release.pdf); [IATA](https://www.iata.org/en/iata-repository/pressroom/presentations/supply-chain-study-highlights/?pubDate=20260817); [Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html)).
3. **The fleet is aging and worked harder.** Average global fleet age approached 13 years in 2025; utilization and load factors hit new highs ([Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html)).
4. **Engine durability is the sharpest availability constraint.** A GTF powder-metal issue grounded up to 648 aircraft (28% of the GTF fleet) at the March 2025 peak; LEAP durability issues appeared in hot, dusty operating environments ([IATA/Emerton](https://www.iata.org/contentassets/85b59d951fc04c1c83fa2aab47824300/single-aisle-aircraft-engines-mro.pdf)).
5. **Engine MRO demand is set to multiply.** By 2040, annual shop visits are forecast to rise from roughly 600–800 to more than 5,000 for the LEAP family, and separately from roughly 1,000 to more than 2,000 for the GTF family ([IATA](https://www.iata.org/en/pressroom/2026-releases/06-24-urgent-action-needed-to-ease-engine-mro-bottlenecks/)).
6. **The MRO market is in a supercycle.** Global MRO demand reached $136 billion in 2025 (+8% YoY) and is projected to approach ~$193 billion by 2036, with engines the largest segment ([Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html)).
7. **Groundings are easing in 2026, unevenly.** OEMs report rising MRO capacity and fewer grounded aircraft; A220/E2 GTF issues are expected largely resolved by end-2026, while the A320neo's PW1100G may take two to three more years ([AIN/Leeham](https://www.ainonline.com/aviation-news/air-transport/2026-07-17/pratt-whitney-nears-end-gtf-saga)).
8. **Labor is a structural, decade-long constraint.** Boeing projects 660,000 new pilots and 710,000 new technicians needed through 2044; ~41% of US mechanics are over 60; US controllers are ~3,000 short ([Boeing](https://www.boeing.com/content/dam/boeing/v2/products/pilot-technician-outlook/pdf/2025-pto-executive-summary.pdf); [Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html); [CBS News](https://www.cbsnews.com/news/faa-faces-critical-shortage-of-air-traffic-controllers-as-trainees-quit/)).
9. **Reliability diverged by region.** European summer punctuality improved to 71% (delays −27% YoY) but remained above target; US full-year cancellations rose to 1.5% ([EUROCONTROL](https://www.eurocontrol.int/sites/default/files/2025-09/eurocontrol-special-flash-briefing-summer-2025.pdf); [Business Travel News/DOT](https://www.businesstravelnews.com/Transportation/Air/DOT-December-Full-Year-Cancellation-Rate-Elevated)).
10. **Scarcity is repricing assets.** Constrained supply kept aircraft values resilient even as some narrowbody lease rates eased from peaks, and pushed operators to extend leases and retain older aircraft ([IBA](https://www.iba.aero/resources/articles/aircraft-values-stay-resilient-as-lease-rates-evolve/)).

---

## 4. Aircraft Production, Deliveries, and Backlog

**Deliveries recovered in 2025 but remained below capability.** Airbus delivered 793 commercial aircraft in 2025, up 4% from 766 in 2024, and booked 1,000 gross (889 net) orders, lifting its year-end backlog to a record 8,754 aircraft ([Airbus](https://www.airbus.com/en/newsroom/press-releases/2026-01-airbus-reports-793-commercial-aircraft-deliveries-in-2025)). Boeing delivered 600 commercial aircraft and recorded 1,173 net orders, its strongest since 2018, ending the year with a record company backlog of about $682 billion including more than 6,100 commercial airplanes ([Boeing](https://s2.q4cdn.com/661678649/files/doc_financials/2025/q4/Press-Release.pdf)).

> "Full Year 2025 Revenue of $89.5 billion and 600 commercial deliveries reflect the highest annual totals since 2018 … Total company backlog grew to a record $682 billion, including over 6,100 commercial airplanes."
> - Source: [Boeing Reports Fourth Quarter Results (27 Jan 2026)](https://s2.q4cdn.com/661678649/files/doc_financials/2025/q4/Press-Release.pdf)

**Production rates still trail targets.** Oliver Wyman's 2026–2036 fleet forecast reports Airbus building about 54 A320-family aircraft per month at the end of 2025 against a 75/month goal for 2027, while Boeing's 737 rate was capped at 42/month (raised from 38 by the US FAA in October 2025) versus a 57/month ambition for 2026 ([Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html); [CNBC](https://www.cnbc.com/2025/10/17/boeing-737-max-production.html)). Oliver Wyman estimates supply-chain limits will hold back production through at least 2030, representing more than 6,000 aircraft that would otherwise have been built ([Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html)).

**Production remains below the pre-pandemic baseline (a labeled estimate, independently corroborated).** Oliver Wyman estimates that global manufacturing output ended 2025 about 24% below 2019 levels — this is an estimate of *production* (build output), not of customer *deliveries* ([Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html)). It is corroborated independently by IATA and Cirium, whose supply-chain analysis finds the market has received roughly 5,300–5,340 fewer aircraft than the pre-pandemic delivery trend would imply — a "missing fleet" equivalent to several years of production — and describes engine availability as the critical bottleneck, with OEMs completing airframes without engines and parking them as "gliders" until powerplants arrive ([IATA Supply Chain Highlights](https://www.iata.org/en/iata-repository/pressroom/presentations/supply-chain-study-highlights/?pubDate=20260817)). Both airframers' end-2025 narrowbody build rates (A320 ~54/month; 737 42/month) sitting below their stated targets are consistent with output still running under the late-2010s baseline ([Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html); [CNBC](https://www.cnbc.com/2025/10/17/boeing-737-max-production.html)).

**Table 1 — Commercial aircraft deliveries and year-end backlog (observed).**

| Manufacturer | 2023 deliveries | 2024 deliveries | 2025 deliveries | 2025 net orders | Year-end backlog |
|---|---:|---:|---:|---:|---:|
| Airbus (total) | 735 | 766 | 793 | 889 | 8,754 |
| — A220 | 68 | 75 | 93 | — | — |
| — A320 family | 571 | 602 | 607 | — | — |
| — A330 | 32 | 32 | 36 | — | — |
| — A350 | 64 | 57 | 57 | — | — |
| Boeing (total) | — | 348* | 600 | 1,173 | 6,100+ aircraft |

Sources: [Airbus (12 Jan 2026)](https://www.airbus.com/en/newsroom/press-releases/2026-01-airbus-reports-793-commercial-aircraft-deliveries-in-2025); [Boeing (27 Jan 2026)](https://s2.q4cdn.com/661678649/files/doc_financials/2025/q4/Press-Release.pdf). *Boeing's 2024 total (~348) is cited via IBA's finding that 2025 deliveries grew ~69% YoY; Boeing's release states 2025 was its highest since 2018 ([IBA](https://www.iba.aero/about/news/boeing-drives-2025-delivery-recovery-with-69-year-on-year-growth-reports-iba/)).

**Table 2 — Narrowbody production rates: observed vs. target (aircraft/month).**

| Program | Rate at end-2025 (observed) | Stated target | Target timing | Regulatory note |
|---|---:|---:|---|---|
| Airbus A320 family | ~54 | 75 | 2027 | Oliver Wyman calls 75 "unlikely" on current trajectory |
| Boeing 737 MAX | 42 (FAA-approved) | 57 | 2026 | FAA raised cap from 38 to 42 in Oct 2025 |

Sources: [Oliver Wyman (Feb 2026)](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html); [CNBC (17 Oct 2025)](https://www.cnbc.com/2025/10/17/boeing-737-max-production.html); [FlightGlobal (20 Oct 2025)](https://www.flightglobal.com/airframers/2025/10/boeings-recovery-gains-momentum-as-faa-approves-737-max-production-increase/).

**Backlog is a decade-plus of work.** Oliver Wyman reports roughly 17,000 unfilled orders on the books at the start of 2026 — "a backlog that is expected to take more than 12 years to clear at current rates of production" ([Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html)). Widebody demand is also firming: Airbus's widebody backlog reached a record 1,124 aircraft at year-end 2025 ([Airbus](https://www.airbus.com/en/newsroom/press-releases/2026-01-airbus-reports-793-commercial-aircraft-deliveries-in-2025)).

---

## 5. Fleet Age, Retirements, Leasing, and Capacity Consequences

**Aircraft are older and busier.** Because deliveries lag demand, the global fleet is aging and utilization is climbing. Oliver Wyman reports — paraphrasing its published summary — that the average age of the global fleet approached about 13 years in 2025, roughly a year and a half older than in 2024, while average flight hours per aircraft rose about 2% year over year and both utilization and passenger load factors reached new highs ([Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html)). Fleet-age figures depend on scope: IATA and Cirium put the all-in average (including freighters) at about **15.1 years** in 2025 — versus 13.4 years pre-COVID — but about **12.8 years for the passenger fleet** (with 19.6 years for cargo and 14.5 years for widebodies), a passenger figure consistent with Oliver Wyman's ~13-year estimate ([IATA Supply Chain Highlights](https://www.iata.org/en/iata-repository/pressroom/presentations/supply-chain-study-highlights/?pubDate=20260817)).

Oliver Wyman puts the in-service commercial fleet at about **30,046 aircraft in early 2026** — a count that, per Oliver Wyman's stated scope, excludes the Russia-registered fleet — growing to roughly **41,135 by 2036** (a 3.2% CAGR), a trajectory it says lags the pre-pandemic forecast by about six years ([Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html)). IATA's supply-chain work, using Airbus market data, similarly notes the in-service fleet is forecast to roughly double from 24,730 (2024) to 49,210 by 2044 ([IATA/Emerton](https://www.iata.org/contentassets/85b59d951fc04c1c83fa2aab47824300/single-aisle-aircraft-engines-mro.pdf)).

**Retirements are delayed, then normalize.** With too few new aircraft, carriers are keeping older jets longer; Oliver Wyman expects retirement ages to return to historical norms only in the second half of its forecast period as deliveries catch up ([Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html)). IATA and Cirium report that aircraft in long-term storage still exceed **5,000** — among the highest levels on record — driven less by choice than by forced groundings tied to engine availability, even amid a severe shortage of new aircraft ([IATA Supply Chain Highlights](https://www.iata.org/en/iata-repository/pressroom/presentations/supply-chain-study-highlights/?pubDate=20260817)). A notable countercurrent is the **teardown of relatively young aircraft** for their engines and parts — once concentrated in Pratt & Whitney-powered A320neos and now spreading to 737 MAX airframes — because engines are worth more as serviceable assets than the airframe in a parts-starved market ([IBA](https://www.iba.aero/resources/articles/aircraft-values-stay-resilient-as-lease-rates-evolve/)).

**Leasing: values resilient, narrowbody rents easing from peaks.** IBA's July 2026 market update (94 models reviewed) describes a market moving from "scarcity-driven peaks towards a more balanced environment": narrowbody lease rates have softened while underlying asset values stay firm, supported by engine and component scarcity ([IBA](https://www.iba.aero/resources/articles/aircraft-values-stay-resilient-as-lease-rates-evolve/)). New A320neos still command lease rates at or above US$400,000/month, while recent 737 MAX 8 placements sit below that level.

**Table 3 — Selected narrowbody lease-rate movements (observed, monthly US$).**

| Asset | Prior level | Latest level | Basis | Direction |
|---|---:|---:|---|---|
| New A320neo | — | ≥ $400,000 | New placement | At/above $400k |
| New 737 MAX 8 | — | < $400,000 | Recent placements | Below A320neo |
| Boeing 737-800 (12 yr) | $255,000 (Jul 2025 peak) | $228,000 | Constant 12-yr age | Softening |
| Airbus A320-200 (12 yr) | $253,000 | $220,000 | Constant 12-yr age | Softening |
| Boeing 777-300ER (widebody) | — | rising | Constant-age basis | Firming (retention) |

Source: [IBA, "Aircraft Values Stay Resilient as Lease Rates Evolve" (31 Jul 2026)](https://www.iba.aero/resources/articles/aircraft-values-stay-resilient-as-lease-rates-evolve/).

**Capacity consequences.** Constrained delivery slots and long production lead times are pushing operators to **extend leases and retain in-service aircraft**, especially widebodies such as the 777-300ER, while new-generation widebodies (A350, A330neo, 787) show positive value momentum ([IBA](https://www.iba.aero/resources/articles/aircraft-values-stay-resilient-as-lease-rates-evolve/)). Freighter economics have also strengthened sharply — IBA raised base values for converted narrowbody freighters by ~17% and for 747-400 factory/converted freighters by an average of 114%, reflecting the enduring value of engines and components on airframes whose average age exceeds 26 years ([IBA](https://www.iba.aero/resources/articles/aircraft-values-stay-resilient-as-lease-rates-evolve/)).

---

## 6. Engines, MRO Capacity, and Maintenance Costs

**The GTF grounding was the defining availability shock — and it is easing.** IATA and Emerton document that new-generation single-aisle engines drove an unprecedented availability crisis.

> "At its peak in 2025, 648 aircraft powered by GTF engines (A320neo, A220, E190/195-E2) were grounded while awaiting engines shop visits, causing major disruption to airline operations."
> - Source: [IATA/Emerton, Single Aisle Aircraft Engines MRO (June 2026)](https://www.iata.org/contentassets/85b59d951fc04c1c83fa2aab47824300/single-aisle-aircraft-engines-mro.pdf)

That peak represented 28% of the GTF fleet, driven mainly by a powder-metal production anomaly in high-pressure turbine and compressor disks, which cut engine time-on-wing and created shop-visit bottlenecks ([IATA/Emerton](https://www.iata.org/contentassets/85b59d951fc04c1c83fa2aab47824300/single-aisle-aircraft-engines-mro.pdf)). By 2026, manufacturers report recovery: Pratt & Whitney says GTF MRO capacity is up about 300% since 2019 (and 26% in 2026 over 2025), all affected A220s are expected back in service by year-end 2026, and the Embraer E2 fleet has normalized — though an A320neo operator quoted by Leeham expects the PW1100G to remain an issue for another two to three years ([AIN/Leeham](https://www.ainonline.com/aviation-news/air-transport/2026-07-17/pratt-whitney-nears-end-gtf-saga)).

> "By the end of this year, we're going to be in a really good position to finally, in 2027 or 2028, kind of get this behind us."
> - Rick Deurloo, President, Pratt & Whitney Commercial Engines, quoted in [AIN/Leeham (17 Jul 2026)](https://www.ainonline.com/aviation-news/air-transport/2026-07-17/pratt-whitney-nears-end-gtf-saga)

**LEAP durability is a parallel, environment-specific issue.** The CFM LEAP has shown early-life wear on high-pressure-turbine stage-1 blades in hot, dusty environments, producing more borescope inspections, premature removals, and occasional in-flight shutdowns for some operators in the Middle East and North Africa; carriers including IndiGo, Iberia, and Cathay Pacific were cited as particularly affected, and one wet-lease operator reported time-on-wing up to 30% shorter in harsh conditions ([IATA/Emerton](https://www.iata.org/contentassets/85b59d951fc04c1c83fa2aab47824300/single-aisle-aircraft-engines-mro.pdf)).

**Shop-visit demand is set to multiply.** IATA reports single-aisle engine deliveries were about 2,000 in 2024 (800 GTF, 1,200 LEAP) and are expected to reach ~3,700/year (1,200 GTF, 2,500 LEAP) between 2030 and 2040 ([IATA](https://www.iata.org/en/pressroom/2026-releases/06-24-urgent-action-needed-to-ease-engine-mro-bottlenecks/)). That installed-base growth converts into maintenance demand:

**Table 4 — Engine grounding, shop-visit, and MRO-market metrics (observed and forecast).**

| Metric | Value | Type | Source |
|---|---:|---|---|
| GTF aircraft grounded, peak (Mar 2025) | 648 (28% of GTF fleet) | Observed | IATA/Emerton |
| GTF groundings, H1 2026 change | ≈ −15% | Observed | Aviation Maintenance Mag / EngineStands |
| Annual single-aisle engine deliveries (2024) | 2,000 (800 GTF, 1,200 LEAP) | Observed | IATA |
| Annual single-aisle engine deliveries (2030–40) | ~3,700 (1,200 GTF, 2,500 LEAP) | Forecast | IATA |
| Annual LEAP shop visits (2025 → 2040) | ~600–800 → >5,000 | Forecast | IATA |
| Annual GTF shop visits (→ 2040) | ~1,000 → >2,000 | Forecast | IATA |
| Typical single-aisle shop-visit cost | > $3–4 million | Observed | IATA/Emerton |
| Global engine MRO market (2024) | ~$50 billion (40–50% of total MRO) | Observed | IATA/Emerton |
| Global MRO demand (2024 → 2025) | $126B → $136B (+8%) | Observed | Oliver Wyman |
| Global MRO demand (2036) | ~$193 billion | Forecast | Oliver Wyman |
| Industry cost of supply-chain challenges (2025) | ~$11 billion | Estimate | IATA/Cirium |

Sources: [IATA](https://www.iata.org/en/pressroom/2026-releases/06-24-urgent-action-needed-to-ease-engine-mro-bottlenecks/); [IATA/Emerton](https://www.iata.org/contentassets/85b59d951fc04c1c83fa2aab47824300/single-aisle-aircraft-engines-mro.pdf); [IATA Supply Chain Highlights](https://www.iata.org/en/iata-repository/pressroom/presentations/supply-chain-study-highlights/?pubDate=20260817); [Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html); [Aviation Maintenance Magazine](https://avm-mag.com/from-pw1100g-to-cfm56-the-engine-maintenance-trends-shaping-2026).

**Capacity is expanding, but access and parts remain the bottleneck.** IATA's Director General framed the structural risk directly:

> "Engine MRO bottlenecks are disrupting airline operations. Without significant changes, this will only get worse as the fleet of latest-generation single-aisle aircraft grows. Manufacturers are investing in additional capacity, but capacity alone will not be enough."
> - Willie Walsh, IATA Director General, [IATA press release (24 Jun 2026)](https://www.iata.org/en/pressroom/2026-releases/06-24-urgent-action-needed-to-ease-engine-mro-bottlenecks/)

IATA and Emerton identify spare-parts shortages, limited spare-engine availability, and constrained aftermarket access — the last shaped by "all-inclusive" power-by-the-hour service contracts, restrictive licensing, and insufficient piece-part production — as the factors limiting the impact of new capacity ([IATA/Emerton](https://www.iata.org/contentassets/85b59d951fc04c1c83fa2aab47824300/single-aisle-aircraft-engines-mro.pdf)). These are summarized here as the study's reported findings.

**OEM disclosures corroborate the ramp.** GE Aerospace's full-year 2025 results show engine deliveries up 25% year over year, including **record LEAP deliveries up 28%**, commercial services revenue up 26%, and more than $1 billion of investment across its MRO network (including a half-billion-dollar LEAP capacity expansion); the company also renewed the CFM–IATA agreement affirming an open aftermarket for CFM56 and LEAP ([GE Aerospace](https://www.geaerospace.com/sites/default/files/geaerospace_webcast_pressrelease_01222026_00.pdf)). Trade reporting puts GE's 2025 output at 2,386 commercial engines, including 1,802 LEAP turbofans ([Air Data News](https://www.airdatanews.com/ge-aerospace-delivers-2386-commercial-engines-in-2025-despite-supply-chain-constraints/)).

**Legacy engines are absorbing capacity too.** Because new deliveries are insufficient, mature narrowbodies keep flying, so their engines compete for the same maintenance ecosystem. Engine-stand utilization data for H1 2026 show PW1100G stands at 95% utilization (with average project duration falling from 245 days in 2024 to 123 days), CFM56-5A/B up to 92% (from 77% in 2025), and CFM56-7B and V2500 both above 75% — with the CFM56/737NG and A320ceo fleets together still roughly 60% of the global in-service fleet ([Aviation Maintenance Magazine / EngineStands](https://avm-mag.com/from-pw1100g-to-cfm56-the-engine-maintenance-trends-shaping-2026)). Maintenance-cost implications flow from all of this: an aging fleet needs more parts and labor, and Oliver Wyman notes shortages of raw materials such as composites and titanium, plus a pandemic-era "bow wave" of deferred work, are extending turnaround times and pushing prices up — with engines the hardest-hit, largest MRO segment ([Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html)).

---

## 7. Labor Supply, Training Pipelines, and Staffing

**Workforce demand is large and structural.** Boeing's 2025 Pilot and Technician Outlook projects two-decade global demand for **660,000 new pilots, 710,000 new maintenance technicians, and 1,000,000 new cabin crew (2025–2044)** — about 2.37 million people — driven by fleet growth, retirements, and attrition ([Boeing](https://www.boeing.com/content/dam/boeing/v2/products/pilot-technician-outlook/pdf/2025-pto-executive-summary.pdf)). Demand is regionally concentrated, with the largest new-personnel needs in Eurasia (~550,000), North America (~435,000), and China (~426,000) ([Boeing](https://www.boeing.com/content/dam/boeing/v2/products/pilot-technician-outlook/pdf/2025-pto-executive-summary.pdf)).

**Maintenance labor faces a demographic cliff.** Oliver Wyman reports that about **41% of US certified mechanics are over 60**, and roughly **45,000 mechanics will retire within a decade**, as the industry struggles to attract and retain younger workers; a parallel management-experience gap is emerging from slow hiring in the 2000s–2010s ([Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html)).

**Pilot supply is tight, with a US peak cited for 2026.** Boeing's global outlook establishes the structural demand. Separately, industry press reports an Oliver Wyman projection that **North America's pilot shortage peaks in 2026 at a US shortfall of about 24,000 pilots** — the widest gap since the post-pandemic recovery began — with a residual US deficit of roughly 17,000 pilots persisting through 2032 ([Aviation Index](https://aviationindex.co/content/news-and-events/the-pilot-shortage-2026/); [Aviospace](https://aviospace.org/us-pilot-shortage-2026-us-aviation-academy/)). This figure is a secondary-reported Oliver Wyman estimate scoped to the United States/North America — some outlets mislabel it as global — so it is best read as indicative and is anchored by the primary Boeing demand forecast above rather than presented as a standalone number. A structural US driver is the mandatory pilot retirement age of 65, which is reported to remove roughly 4,300 experienced captains from US airline cockpits each year ([Aviation Index](https://aviationindex.co/content/news-and-events/the-pilot-shortage-2026/), citing FAA Aerospace Forecasts). The pinch is felt first at feeder/regional carriers, where lower pay historically slows the pipeline into major-airline cockpits.

**Air-traffic-control staffing is a distinct operational constraint.** In the United States, controller staffing ran roughly **3,000 below target** in 2025, contributing to periodic flow constraints and delays ([CBS News](https://www.cbsnews.com/news/faa-faces-critical-shortage-of-air-traffic-controllers-as-trainees-quit/)). The FAA announced on 23 September 2025 that it had hired **2,026 new controllers in FY2025**, exceeding its goal of 2,000, and said it was on pace for at least 8,900 hires through 2028 (including more than 2,200 planned for FY2026) ([FAA, 23 Sep 2025](https://www.faa.gov/newsroom/trumps-transportation-secretary-sean-p-duffy-hits-air-traffic-controller-hiring-goal-fy25); corroborated by [AIN](https://www.ainonline.com/aviation-news/air-transport/2025-09-23/faa-tops-2000-controller-hires-fy-2025)). Even so, the net staffing gap persists because hiring has not yet outpaced retirements and trainee attrition ([CBS News](https://www.cbsnews.com/news/faa-faces-critical-shortage-of-air-traffic-controllers-as-trainees-quit/)). In Europe, EUROCONTROL attributes persistent structural delay to "a lack of air traffic controllers (ATCOs) in some ANSPs," alongside airspace-design and modernization needs ([EUROCONTROL](https://www.eurocontrol.int/sites/default/files/2025-09/eurocontrol-special-flash-briefing-summer-2025.pdf)).

**Table 5 — Labor demand and staffing indicators.**

| Indicator | Value | Type | Source |
|---|---:|---|---|
| New pilots needed, 2025–2044 (global) | 660,000 | Forecast | Boeing PTO |
| New technicians needed, 2025–2044 (global) | 710,000 | Forecast | Boeing PTO |
| New cabin crew needed, 2025–2044 (global) | 1,000,000 | Forecast | Boeing PTO |
| US certified mechanics over age 60 | ~41% | Observed | Oliver Wyman |
| US mechanics retiring within a decade | ~45,000 | Forecast | Oliver Wyman |
| US (North America) pilot shortfall, 2026 peak | ~24,000 | Estimate (secondary-reported) | Oliver Wyman via industry press |
| US captains lost to age-65 retirement | ~4,300 / year | Observed | FAA Aerospace Forecasts (via Aviation Index) |
| US air-traffic-controller shortfall | ~3,000 | Observed | CBS News |
| US controllers hired, FY2025 | 2,026 (goal 2,000) | Observed | FAA (23 Sep 2025); AIN |

Sources: [Boeing PTO 2025–2044](https://www.boeing.com/content/dam/boeing/v2/products/pilot-technician-outlook/pdf/2025-pto-executive-summary.pdf); [Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html); [Aviation Index](https://aviationindex.co/content/news-and-events/the-pilot-shortage-2026/); [Aviospace](https://aviospace.org/us-pilot-shortage-2026-us-aviation-academy/); [FAA (23 Sep 2025)](https://www.faa.gov/newsroom/trumps-transportation-secretary-sean-p-duffy-hits-air-traffic-controller-hiring-goal-fy25); [AIN](https://www.ainonline.com/aviation-news/air-transport/2025-09-23/faa-tops-2000-controller-hires-fy-2025); [CBS News](https://www.cbsnews.com/news/faa-faces-critical-shortage-of-air-traffic-controllers-as-trainees-quit/).

---

## 8. Airport, Air-Traffic Capacity, and Schedule Reliability

**Europe: better in 2025, but still capacity-limited.** EUROCONTROL's summer 2025 network data show an average of 35,122 flights/day (+3% vs. 2024, +1% vs. 2019), with air-traffic-flow-management (ATFM) delays down to 3.9 minutes/flight (from 5.4 in 2024) and arrival punctuality up to 71% ([EUROCONTROL](https://www.eurocontrol.int/sites/default/files/2025-09/eurocontrol-special-flash-briefing-summer-2025.pdf)). The improvement was broad — en-route delay fell 32% and weather delay fell 43% year over year — yet EUROCONTROL is explicit that delays remained above target:

> "However, delays remain high and above the target levels, which clearly highlights the ongoing structural lack of capacity (largely driven by a lack of air traffic controllers (ATCOs) in some ANSPs, and the ongoing need to improve airspace design and accelerate technological modernisation)."
> - Source: [EUROCONTROL Special Flash Briefing, Summer 2025](https://www.eurocontrol.int/sites/default/files/2025-09/eurocontrol-special-flash-briefing-summer-2025.pdf)

Year-to-date en-route ATFM delay stood at 1.84 minutes/flight and was projected to fall to about 1.6 by year-end — still well above the EU-wide target of 0.9 minutes — and a single labor-related airspace disruption produced the only day above 300,000 minutes of delay during the summer ([EUROCONTROL](https://www.eurocontrol.int/sites/default/files/2025-09/eurocontrol-special-flash-briefing-summer-2025.pdf)). EUROCONTROL's annual Network Operations Report 2025 (finalized May 2026) confirms the same structural framing across traffic, delay, and airport punctuality ([EUROCONTROL NOR 2025](https://www.eurocontrol.int/sites/default/files/2026-05/eurocontrol-annual-network-operations-report-2025.pdf)).

**United States: record schedule, softer reliability.** US carriers operated more than 7.6 million flights in full-year 2025 (+2.3% YoY), but the **full-year cancellation rate rose to 1.5%** (from 1.4% in 2024), with a late-year spike — November 2025 cancellations reached 2.6% and December 1.6% (versus 0.7% a year earlier) ([Business Travel News/DOT](https://www.businesstravelnews.com/Transportation/Air/DOT-December-Full-Year-Cancellation-Rate-Elevated)). Over **January–November 2025**, on-time arrivals (arrival within 15 minutes) averaged roughly 77–78%, ranging from about 70% in July to about 84% in September, per a compilation of US DOT Bureau of Transportation Statistics (BTS) data covering that eleven-month window; BTS publishes the authoritative annual on-time ranking, and the full-year 2025 aggregate was not independently recomputed here ([AirDelay/BTS compilation](https://www.airdelay.org/statistics/2025); [BTS on-time tables](https://www.bts.gov/topics/airline-time-tables); methodology per [US DOT ATCR](https://www.transportation.gov/sites/dot.gov/files/2026-01/December%202025%20ATCR.pdf)). The late-2025 US reliability softening coincided with the controller staffing shortfall discussed in Section 7.

**Table 6 — Schedule reliability and delay (observed).**

| System / metric | 2024 | 2025 | Notes |
|---|---:|---:|---|
| Europe — summer arrival punctuality | 64.5% | 71% | +6.5 pp YoY; −1.5 pp vs. 2019 |
| Europe — summer ATFM delay/flight | 5.4 min | 3.9 min | −27% YoY; +8% vs. 2019 |
| Europe — summer traffic/day | ~34,100 | 35,122 | +3% YoY; +1% vs. 2019 |
| US — full-year cancellation rate | 1.4% | 1.5% | Nov 2025 spike to 2.6% |
| US — on-time arrivals | ~78% (2024, approx.) | ~77–78% (Jan–Nov 2025) | BTS compilation; Jul low ~70%, Sep high ~84% |
| US — full-year flights operated | ~7.4M | >7.6M | +2.3% YoY |

Sources: [EUROCONTROL Summer 2025](https://www.eurocontrol.int/sites/default/files/2025-09/eurocontrol-special-flash-briefing-summer-2025.pdf); [Business Travel News/DOT](https://www.businesstravelnews.com/Transportation/Air/DOT-December-Full-Year-Cancellation-Rate-Elevated); [AirDelay/BTS compilation](https://www.airdelay.org/statistics/2025); [BTS on-time tables](https://www.bts.gov/topics/airline-time-tables). US on-time reflects a January–November 2025 BTS-derived compilation; the US full-year 2025 cancellation rate (1.5%) is from DOT via Business Travel News; Europe 2024 punctuality/traffic derived from EUROCONTROL's stated year-over-year changes.

**Airport infrastructure and severe weather.** US airport capacity is also affected by construction: the FAA maintains a three-year construction-impact outlook for its Core 30+ airports ([FAA](https://www.faa.gov/about/office_org/headquarters_offices/ato/service_units/systemops/perf_analysis/sys_cap_eval/Q4_2025_Airport_Construction_Impact_Report.pdf)). Weather remains a leading, and volatile, disruptor: EUROCONTROL's 43% year-over-year drop in summer weather delay in 2025 shows both the size of the weather signal and how much better planning can mitigate it ([EUROCONTROL](https://www.eurocontrol.int/sites/default/files/2025-09/eurocontrol-special-flash-briefing-summer-2025.pdf)).

---

## 9. Regional and Carrier-Model Variation

**By operating region.** Growth and constraints are unevenly distributed. Oliver Wyman projects China will add the most aircraft over the next decade, India the fastest growth (7.1% CAGR), and the Middle East next (5%) ([Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html)). Engine durability effects also vary by geography: LEAP hot-and-dusty wear concentrates in the Middle East and North Africa, while GTF exposure is heaviest wherever A320neo/A220 fleets are large ([IATA/Emerton](https://www.iata.org/contentassets/85b59d951fc04c1c83fa2aab47824300/single-aisle-aircraft-engines-mro.pdf)). Reliability trends diverged too — improving in Europe, softening in the US in late 2025 (Sections 6–8).

**By carrier model.**

- **Network carriers** are most affected by widebody delivery lead times; they are extending leases and retaining aircraft such as the 777-300ER while committing to A350/A330neo/787 for the long term ([IBA](https://www.iba.aero/resources/articles/aircraft-values-stay-resilient-as-lease-rates-evolve/)).
- **Low-cost carriers** with concentrated new-generation single-aisle fleets bore the sharpest GTF impact. IATA/Emerton cite IndiGo — around 330 A320neo-family aircraft, mostly GTF-powered — retaining 14 older A320s, extending leases on 36 aircraft, and leasing 11 more to offset groundings; Wizz Air reported cutting capacity by at least 10% (2023) due to the same issues ([IATA/Emerton](https://www.iata.org/contentassets/85b59d951fc04c1c83fa2aab47824300/single-aisle-aircraft-engines-mro.pdf)). Among US low-cost/ultra-low-cost carriers, reliability dispersion is visible in December 2025 DOT data, where Spirit posted the highest cancellation rate (3.7%) and Southwest the lowest (0.6%) ([Business Travel News/DOT](https://www.businesstravelnews.com/Transportation/Air/DOT-December-Full-Year-Cancellation-Rate-Elevated)).
- **Regional carriers** are most exposed to the pilot pipeline (feeder economics) and to the recovery timeline of the smaller GTF variant (PW1900G on the Embraer E190/195-E2), which manufacturers say has normalized in 2026 ([AIN/Leeham](https://www.ainonline.com/aviation-news/air-transport/2026-07-17/pratt-whitney-nears-end-gtf-saga); [Boeing PTO](https://www.boeing.com/content/dam/boeing/v2/products/pilot-technician-outlook/pdf/2025-pto-executive-summary.pdf)).

---

## 10. Uncertainty and Conflicting Evidence

- **Backlog magnitude and framing.** Estimates of the combined Airbus/Boeing backlog vary with scope and date: OEM year-end figures sum to roughly 14,900+ aircraft (Airbus 8,754 + Boeing 6,100+), Oliver Wyman cites ~17,000 unfilled orders, and some trade outlets report a combined ~16,683. The "≈12 years to clear" characterization is consistent across sources, but the precise unit count is scope-dependent ([Airbus](https://www.airbus.com/en/newsroom/press-releases/2026-01-airbus-reports-793-commercial-aircraft-deliveries-in-2025); [Boeing](https://s2.q4cdn.com/661678649/files/doc_financials/2025/q4/Press-Release.pdf); [Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html)).
- **How fast the GTF issue ends.** OEMs signal end-2026 resolution for A220/E2 and "2027–2028" for the broader program, while an operator quoted by Leeham expects two-to-three more years on the A320neo's PW1100G. The direction (easing) is agreed; the endpoint is not ([AIN/Leeham](https://www.ainonline.com/aviation-news/air-transport/2026-07-17/pratt-whitney-nears-end-gtf-saga)).
- **Production vs. deliveries.** The "24% below 2019" figure is Oliver Wyman's estimate of *production* (build output). It is corroborated directionally by IATA/Cirium's estimate of ~5,300–5,340 fewer aircraft delivered than the pre-pandemic trend and by both airframers' sub-target build rates, but "production output vs. 2019" and "delivery shortfall vs. pre-pandemic trend" are related, not identical, measures ([Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html); [IATA Supply Chain Highlights](https://www.iata.org/en/iata-repository/pressroom/presentations/supply-chain-study-highlights/?pubDate=20260817)).
- **MRO-spend endpoint.** Oliver Wyman's narrative places ~$193 billion of MRO demand "by the end of the decade," while its own exhibit labels $193.1 billion in 2036; this report labels the endpoint as **2036** for consistency, noting the source's looser phrasing ([Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html)).
- **US on-time figure and period.** The ~77–78% US on-time average covers **January–November 2025** from a third-party compilation of BTS data, not the full year. BTS's Air Travel Consumer Report and annual on-time tables are the authoritative source, and the full-year 2025 aggregate was not independently recomputed here ([AirDelay/BTS](https://www.airdelay.org/statistics/2025); [BTS on-time tables](https://www.bts.gov/topics/airline-time-tables); [US DOT](https://www.transportation.gov/sites/dot.gov/files/2026-01/December%202025%20ATCR.pdf)).
- **Pilot-shortfall estimate and scope.** The ~24,000 figure is a secondary-reported Oliver Wyman estimate scoped to the **United States/North America** for 2026 — not global, though some outlets mislabel it as such. It is indicative, not audited; the primary structural anchor is the Boeing Pilot and Technician Outlook ([Aviation Index](https://aviationindex.co/content/news-and-events/the-pilot-shortage-2026/); [Aviospace](https://aviospace.org/us-pilot-shortage-2026-us-aviation-academy/); [Boeing PTO](https://www.boeing.com/content/dam/boeing/v2/products/pilot-technician-outlook/pdf/2025-pto-executive-summary.pdf)).
- **Fleet counts and age depend on provider scope.** Oliver Wyman's ~30,000 in-service total excludes the Russia-registered fleet; global counts differ by provider and by whether stored/parked aircraft are included. Fleet-age averages also differ by scope — IATA/Cirium report ~15.1 years all-in vs. ~12.8 years for the passenger fleet, versus Oliver Wyman's ~13 years ([Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html); [IATA Supply Chain Highlights](https://www.iata.org/en/iata-repository/pressroom/presentations/supply-chain-study-highlights/?pubDate=20260817)).

---

## 11. Presentation-Ready Neutral Insights

These are neutral, evidence-based framings for slides — observations rather than guidance.

1. **Supply, not demand, is the 2026 story.** Record travel meets record backlogs; Oliver Wyman estimates production ended 2025 ~24% below 2019 (IATA/Cirium cite ~5,300+ fewer aircraft than the pre-pandemic delivery trend), so the constraint sits in factories, engine shops, and workforce pipelines ([Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html); [IATA](https://www.iata.org/en/iata-repository/pressroom/presentations/supply-chain-study-highlights/?pubDate=20260817)).
2. **"793 and 600" with a decade-long book.** Airbus and Boeing both delivered more in 2025, yet the combined order book still implies ~12 years of work at current rates ([Airbus](https://www.airbus.com/en/newsroom/press-releases/2026-01-airbus-reports-793-commercial-aircraft-deliveries-in-2025); [Boeing](https://s2.q4cdn.com/661678649/files/doc_financials/2025/q4/Press-Release.pdf)).
3. **A fleet near 13 years old (passenger; ~15 all-in), flown harder.** Passenger-fleet age rose ~18 months in a single year as utilization hit records — an availability and cost signal in one number ([Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html); [IATA](https://www.iata.org/en/iata-repository/pressroom/presentations/supply-chain-study-highlights/?pubDate=20260817)).
4. **"648 grounded" is peaking and receding.** The GTF grounding peak (28% of the fleet) is the clearest availability shock; 2026 evidence shows groundings easing but not resolved ([IATA/Emerton](https://www.iata.org/contentassets/85b59d951fc04c1c83fa2aab47824300/single-aisle-aircraft-engines-mro.pdf); [AIN/Leeham](https://www.ainonline.com/aviation-news/air-transport/2026-07-17/pratt-whitney-nears-end-gtf-saga)).
5. **Engine MRO is a multi-year super-cycle.** Shop visits scale toward 5,000+ (LEAP) and 2,000+ (GTF) by 2040; MRO demand is already $136B and rising, with engines the largest slice ([IATA](https://www.iata.org/en/pressroom/2026-releases/06-24-urgent-action-needed-to-ease-engine-mro-bottlenecks/); [Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html)).
6. **People are the long pole.** 660k pilots and 710k technicians needed by 2044; 41% of US mechanics are 60+; controllers ~3,000 short — a structural, slow-to-fix constraint ([Boeing](https://www.boeing.com/content/dam/boeing/v2/products/pilot-technician-outlook/pdf/2025-pto-executive-summary.pdf); [Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html); [CBS News](https://www.cbsnews.com/news/faa-faces-critical-shortage-of-air-traffic-controllers-as-trainees-quit/)).
7. **Reliability is a regional story.** Europe improved (71% summer punctuality, delays −27%) but stayed above target; US cancellations edged up to 1.5% with a late-year spike ([EUROCONTROL](https://www.eurocontrol.int/sites/default/files/2025-09/eurocontrol-special-flash-briefing-summer-2025.pdf); [Business Travel News/DOT](https://www.businesstravelnews.com/Transportation/Air/DOT-December-Full-Year-Cancellation-Rate-Elevated)).
8. **Scarcity reprices assets.** Aircraft values held firm even as some narrowbody rents eased; engines and parts now drive asset economics, and young jets are being torn down for engines ([IBA](https://www.iba.aero/resources/articles/aircraft-values-stay-resilient-as-lease-rates-evolve/)).
9. **Model matters.** LCCs with concentrated GTF fleets took the sharpest capacity hit (IndiGo, Wizz Air); network carriers face widebody lead-time limits; regionals feel the pilot pipeline most ([IATA/Emerton](https://www.iata.org/contentassets/85b59d951fc04c1c83fa2aab47824300/single-aisle-aircraft-engines-mro.pdf); [IBA](https://www.iba.aero/resources/articles/aircraft-values-stay-resilient-as-lease-rates-evolve/)).
10. **Direction of travel: gradual normalization.** Across airframes, engines, and labor, 2026 evidence points to slow improvement stretching into 2027–2030, not a sharp snap-back ([Oliver Wyman](https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html); [GE Aerospace](https://www.geaerospace.com/sites/default/files/geaerospace_webcast_pressrelease_01222026_00.pdf)).

---

## 12. Research Limitations

- **Regional coverage skew.** Reliability evidence is strongest for Europe (EUROCONTROL) and the US (DOT/BTS). Comparable, granular on-time/cancellation and turnaround data for Asia-Pacific, the Middle East, Latin America, and Africa were not located from primary regulators within the evidence window; regional statements outside Europe/US rest partly on Oliver Wyman and IATA aggregates.
- **Turnaround performance.** Aircraft ground-turnaround metrics were not available from a primary source; punctuality and cancellation rates are used as reliability proxies. Engine-shop turnaround times are covered qualitatively (IATA/Emerton, EngineStands).
- **Compensation and productivity.** Direct, comparable evidence on airline labor compensation and productivity was thin; the report emphasizes workforce demand, retirements, and staffing gaps rather than pay levels. This is an evidence gap.
- **Single-source / secondary figures (labeled):** the ~24,000 US (North America) pilot shortfall (secondary-reported Oliver Wyman estimate), the January–November 2025 US on-time average (AirDelay compilation of BTS data), and GE's exact 2,386-engine count (Air Data News). Primary corroboration was used where possible (Boeing PTO for labor demand; GE press release for LEAP +28%; IATA/Cirium for the delivery shortfall).
- **Internal source inconsistencies** (e.g., Oliver Wyman's "$193B by end of decade" vs. its 2036 exhibit) are flagged in Section 10 and treated as trajectories.
- **The EUROCONTROL annual report** was read at the executive-summary/contents level via `browse`; summer-2025 figures are taken from the dedicated flash briefing, which reports the same metrics in detail.
- **Exclusions honored:** per the binding brief, the report omits external political-event narratives and named public officials, and it avoids prescriptive or action-oriented language; where a source included such framing (for example, macro commentary), only neutral operating and market facts were extracted. Where a cited regulator page carried an official's name, this report references it neutrally by agency and date.

---

## 13. Complete Reference List

### Primary sources — OEM and engine-maker disclosures

1. **Airbus** — "Airbus reports 793 commercial aircraft deliveries in 2025" (press release, 12 Jan 2026). Evidence type: primary OEM disclosure (deliveries, orders, backlog). Accessed 2026-08-18. <https://www.airbus.com/en/newsroom/press-releases/2026-01-airbus-reports-793-commercial-aircraft-deliveries-in-2025>
2. **Boeing** — "Boeing Reports Fourth Quarter Results" (FY/4Q 2025 press release, 27 Jan 2026). Evidence type: primary OEM/financial disclosure (600 deliveries, backlog, orders). Accessed 2026-08-18. <https://s2.q4cdn.com/661678649/files/doc_financials/2025/q4/Press-Release.pdf>
3. **GE Aerospace** — "GE Aerospace Announces Fourth Quarter 2025 Results" (22 Jan 2026). Evidence type: primary engine-maker disclosure (LEAP +28%, MRO investment, CFM–IATA renewal). Accessed 2026-08-18. <https://www.geaerospace.com/sites/default/files/geaerospace_webcast_pressrelease_01222026_00.pdf>
4. **Boeing** — "2025 Pilot and Technician Outlook: By the Numbers" (executive summary, 2025–2044). Evidence type: primary OEM workforce forecast. Accessed 2026-08-18. <https://www.boeing.com/content/dam/boeing/v2/products/pilot-technician-outlook/pdf/2025-pto-executive-summary.pdf>

### Primary sources — industry bodies, regulators, and network managers

5. **IATA** — "Urgent Action Needed to Ease Engine MRO Bottlenecks" (press release No. 34, 24 Jun 2026). Evidence type: primary industry-body release (engine deliveries, shop-visit forecasts). Accessed 2026-08-18. <https://www.iata.org/en/pressroom/2026-releases/06-24-urgent-action-needed-to-ease-engine-mro-bottlenecks/>
6. **IATA / Emerton** — "Single Aisle Aircraft Engines MRO: Strategic Levers to Address Supply Chain Challenges" (study, June 2026). Evidence type: primary industry study (GTF/LEAP groundings, MRO economics; underlying data from Cirium). Accessed 2026-08-18. <https://www.iata.org/contentassets/85b59d951fc04c1c83fa2aab47824300/single-aisle-aircraft-engines-mro.pdf>
7. **IATA** — "Supply Chain Study Highlights" (Global Media Days 2025 presentation; IATA Sustainability & Economics with Cirium Fleet Analyzer). Evidence type: primary industry-body analysis (delivery shortfall ~5,340 "missing" aircraft; backlog >17,000 ≈ 60% of active fleet; fleet age 15.1 all-in / 12.8 passenger; storage >5,000; ~$11B 2025 supply-chain cost). Accessed 2026-08-18. <https://www.iata.org/en/iata-repository/pressroom/presentations/supply-chain-study-highlights/?pubDate=20260817>
8. **EUROCONTROL** — "Special #FlashBriefing — Summer 2025" (Sept 2025). Evidence type: primary network-manager operational data (traffic, ATFM delay, punctuality). Accessed 2026-08-18. <https://www.eurocontrol.int/sites/default/files/2025-09/eurocontrol-special-flash-briefing-summer-2025.pdf>
9. **EUROCONTROL** — "Network Operations Report 2025" (final, 4 May 2026). Evidence type: primary network-manager annual report (structural capacity framing). Accessed 2026-08-18. <https://www.eurocontrol.int/sites/default/files/2026-05/eurocontrol-annual-network-operations-report-2025.pdf>
10. **US DOT, Office of Aviation Consumer Protection** — "Air Travel Consumer Report" (issued Dec 2025; methodology and October 2025 data). Evidence type: primary regulator data (on-time definition, cancellations). Accessed 2026-08-18. <https://www.transportation.gov/sites/dot.gov/files/2026-01/December%202025%20ATCR.pdf>
11. **US FAA** — FY2025 air traffic controller hiring result (2,026 hires against a 2,000 goal; on pace for ~8,900 through 2028, incl. >2,200 planned in FY2026); agency announcement, 23 September 2025. Evidence type: primary regulator announcement (referenced neutrally by agency and date). Accessed 2026-08-18. <https://www.faa.gov/newsroom/trumps-transportation-secretary-sean-p-duffy-hits-air-traffic-controller-hiring-goal-fy25>
12. **US FAA** — "Q4-2025 Airport Construction Impact Report" (Core 30+ airports, three-year outlook). Evidence type: primary regulator infrastructure data. Accessed 2026-08-18. <https://www.faa.gov/about/office_org/headquarters_offices/ato/service_units/systemops/perf_analysis/sys_cap_eval/Q4_2025_Airport_Construction_Impact_Report.pdf>

### Recognized market-data and industry research

13. **Oliver Wyman** — "Global Fleet and MRO Market Forecast 2026–2036" (Feb 2026). Evidence type: recognized industry research (fleet age, production estimate, MRO market, labor demographics). Accessed 2026-08-18. <https://www.oliverwyman.com/our-expertise/insights/2026/feb/global-fleet-and-mro-market-forecast-2026-2036.html>
14. **IBA** — "Aircraft Values Stay Resilient as Lease Rates Evolve" (31 Jul 2026). Evidence type: recognized market-data/appraiser (lease rates, values, teardowns). Accessed 2026-08-18. <https://www.iba.aero/resources/articles/aircraft-values-stay-resilient-as-lease-rates-evolve/>
15. **IBA** — "Boeing Drives 2025 Delivery Recovery With 69% Year-On-Year Growth" (18 Dec 2025). Evidence type: recognized market-data commentary; used for Boeing's YoY delivery growth context. Accessed 2026-08-18. <https://www.iba.aero/about/news/boeing-drives-2025-delivery-recovery-with-69-year-on-year-growth-reports-iba/>

### Reputable technical and business publications

16. **AIN / Leeham News and Analysis** — "Pratt & Whitney Nears the End of the GTF Saga, Eyes Its Successor" (17 Jul 2026). Evidence type: reputable industry publication (P&W MRO capacity, recovery timeline). Accessed 2026-08-18. <https://www.ainonline.com/aviation-news/air-transport/2026-07-17/pratt-whitney-nears-end-gtf-saga>
17. **Aviation International News (AIN)** — "FAA Tops 2,000 Controller Hires in FY2025" (23 Sep 2025). Evidence type: reputable industry publication; apolitical corroboration of the 2,026 FY2025 hires, FY2026 plan (>2,200), and ~8,900 hires through 2028. Accessed 2026-08-18. <https://www.ainonline.com/aviation-news/air-transport/2025-09-23/faa-tops-2000-controller-hires-fy-2025>
18. **Aviation Maintenance Magazine** — "From PW1100G to CFM56: The Engine Maintenance Trends Shaping 2026" (17 Jul 2026; EngineStands.com data). Evidence type: reputable trade publication with vendor operational data (engine-stand utilization, groundings −15% H1 2026). Accessed 2026-08-18. <https://avm-mag.com/from-pw1100g-to-cfm56-the-engine-maintenance-trends-shaping-2026>
19. **Air Data News** — "GE Aerospace delivers 2,386 commercial engines in 2025 despite supply chain constraints" (22 Jan 2026). Evidence type: trade reporting of OEM data (engine unit counts). Accessed 2026-08-18. <https://www.airdatanews.com/ge-aerospace-delivers-2386-commercial-engines-in-2025-despite-supply-chain-constraints/>
20. **CNBC** — "FAA raises Boeing 737 Max production cap to 42 a month" (17 Oct 2025). Evidence type: reputable business publication (regulatory production cap). Accessed 2026-08-18. <https://www.cnbc.com/2025/10/17/boeing-737-max-production.html>
21. **FlightGlobal** — "Boeing's recovery gains momentum as FAA approves 737 Max production increase" (20 Oct 2025). Evidence type: reputable industry publication (corroboration of rate increase). Accessed 2026-08-18. <https://www.flightglobal.com/airframers/2025/10/boeings-recovery-gains-momentum-as-faa-approves-737-max-production-increase/>
22. **Business Travel News** — "DOT: December, Full-Year Cancellation Rate Elevated" (1 Apr 2026). Evidence type: reputable business publication reporting US DOT ATCR full-year 2025 data (cancellations, flights operated). Accessed 2026-08-18. <https://www.businesstravelnews.com/Transportation/Air/DOT-December-Full-Year-Cancellation-Rate-Elevated>
23. **CBS News** — "FAA faces critical shortage of air traffic controllers" (13 Aug 2025). Evidence type: reputable news reporting (~3,000-controller shortfall). Accessed 2026-08-18. <https://www.cbsnews.com/news/faa-faces-critical-shortage-of-air-traffic-controllers-as-trainees-quit/>

### Supplemental (labeled secondary / aggregated data)

24. **Aviation Index** — "The Global Pilot Shortage Is at Its Peak in 2026" (14 Jul 2026). Evidence type: secondary industry press; cited for the ~24,000 **US (North America)** 2026 pilot-shortfall estimate attributed to Oliver Wyman, and for the ~4,300/yr age-65 captain retirements it attributes to FAA Aerospace Forecasts. Accessed 2026-08-18. <https://aviationindex.co/content/news-and-events/the-pilot-shortage-2026/>
25. **Aviospace** — "Inside the US Pilot Shortage and the Race to Train New Airline Pilots" (18 May 2026). Evidence type: secondary industry press; corroborates the US/North America scope of Oliver Wyman's ~24,000 2026 pilot-shortfall projection. Accessed 2026-08-18. <https://aviospace.org/us-pilot-shortage-2026-us-aviation-academy/>
26. **AirDelay** — "2025 Flight Delay Statistics" (compilation of US DOT/BTS data). Evidence type: third-party aggregation of BTS on-time data; used for the **January–November 2025** US on-time range with the primary BTS source noted. Accessed 2026-08-18. <https://www.airdelay.org/statistics/2025>

*All 26 references above are cited in-text and are counted in the header. Primary/official sources (1–12) carry the load-bearing quantitative claims; recognized market-data (13–15) and reputable publications (16–23) corroborate or extend them; supplemental items (24–26) are labeled secondary or aggregated sources used only with explicit caveats.*
