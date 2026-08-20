# Research Report: Airline Digital, Commercial, and Customer Trends for 2026

**Date:** 2026-08-18
**Researcher:** Copilot Web Researcher Agent
**Topic slug:** digital-commercial-customer
**Sources consulted:** 15 documents across ~13 organizations - primary industry surveys and standards bodies (IATA x3 documents, SITA x2 documents), an airline primary disclosure (Qantas), independent research and consultancy (McKinsey, IdeaWorks), vendor and vendor-sponsored evidence (Accelya, PROS/Lufthansa, Amperity), and reputable business/trade media (Fortune, Forbes, Aerospace Global News citing SOCRadar, Open Jaw citing IATA and Accertify).
**Required MCP:** verified - WebIQ-MCP; tools used: web, browse (supplemented by web_fetch as page reader and ripgrep for local result triage)

> Scope and neutrality note. This report covers the digital, commercial, and customer dimensions of 2026 airline-industry trends: AI and automation, retailing and distribution, ancillary revenue, loyalty economics, passenger digital expectations, payments, fraud, and cybersecurity. It is descriptive and evidence-led. It is non-prescriptive: it does not propose purchases, programs, operating changes, or forward actions. Cyber incidents are described only by their customer-data exposure, operational effect, and attack vector; threat-actor identity, incident motive, and non-operational external context are excluded. Regions and countries appear only as market, regulatory, customer, technology-adoption, or operating evidence.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Evidence Window and Methodology](#2-evidence-window-and-methodology)
3. [Key Concepts and Terminology](#3-key-concepts-and-terminology)
4. [Key Findings at a Glance](#4-key-findings-at-a-glance)
5. [AI, Generative AI, and Automation](#5-ai-generative-ai-and-automation)
6. [Retailing and Distribution](#6-retailing-and-distribution)
7. [Loyalty Economics, Co-Brand, and Personalization](#7-loyalty-economics-co-brand-and-personalization)
8. [Passenger Digital Expectations, Self-Service, Biometrics, and Accessibility](#8-passenger-digital-expectations-self-service-biometrics-and-accessibility)
9. [Payments, Fraud, Identity, Cybersecurity, and Resilience](#9-payments-fraud-identity-cybersecurity-and-resilience)
10. [Regional and Carrier-Model Variation](#10-regional-and-carrier-model-variation)
11. [Uncertainty and Conflicting Evidence](#11-uncertainty-and-conflicting-evidence)
12. [Presentation-Ready Neutral Insights](#12-presentation-ready-neutral-insights)
13. [Research Limitations](#13-research-limitations)
14. [Complete Reference List](#14-complete-reference-list)

---

## 1. Executive Summary

The 2025-2026 evidence describes an airline sector investing at record levels in digital capability while its most ambitious use cases still run ahead of realized deployment. The air transport industry committed a record **US$50.8 billion** to technology in 2025, with airlines accounting for **US$36 billion (3.6% of revenue)**, and 83% of airlines naming data-driven decision-making a strategic priority ([SITA, 2026](https://www.sita.aero/about-us/pressroom/news-releases/sita-research-finds-aviations-record-technology-investment-hinges-on-one-thing-data-coordination/)). AI has moved from isolated predictions toward coordinated operations: 63% of airlines report using AI in operations control, and 79% name generative AI and large language models their top investment priority for the next 12 months ([SITA, 2026](https://www.sita.aero/about-us/pressroom/news-releases/sita-research-finds-aviations-record-technology-investment-hinges-on-one-thing-data-coordination/)). Yet an independent (vendor-sponsored) survey of 800 travel and airline professionals found only 35% had deployed AI in guest-facing applications and only 12.5% felt prepared to scale ([Amperity via The Wise Marketer, 2025](https://thewisemarketer.com/amperity-releases-2025-state-of-ai-in-travel-airlines-report/)). The through-line across sources is that data coordination and data quality, not model capability, are the binding constraints on measured value.

On the commercial side, modern retailing is scaling. Ancillary revenue reached a record estimated **US$157 billion in 2025 (15.7% of total airline revenue)**, up from US$148.4 billion in 2024 ([IdeaWorks, 18 Nov 2025](https://ideaworkscompany.com/wp-content/uploads/2025/11/Press-Release-197-Global-Estimate-2025.pdf)). New Distribution Capability (NDC) is moving from pilots to volume - corporate NDC bookings on one major retailing platform grew 168% year-over-year in Q4 2025 (vendor data) ([Accelya, 28 Jan 2026](https://w3.accelya.com/resources/press-releases/corporate-ndc-bookings-growth-q4-2025/)) - while McKinsey and IATA estimate roughly **US$45 billion of new value by 2030** from modern retailing ([McKinsey, 1 Oct 2024](https://www.mckinsey.com.br/industries/travel/our-insights/ready-for-takeoff-the-airline-retailing-opportunity)). Loyalty and co-brand card economics remain among the most durable profit engines: Delta reported its American Express relationship generated about **US$8 billion, or roughly 10% of revenue, in 2025** ([Fortune via Yahoo Finance, 2026](https://uk.finance.yahoo.com/news/delta-ceo-ed-bastian-built-070100191.html)).

Passengers are increasingly mobile-first and comfortable with biometrics, but they attach the adoption of digital travel to a demand for trust. In IATA's 2025 Global Passenger Survey, card payment preference fell to 72% (from 79% in 2024) as digital-wallet preference rose to 28%, half of passengers had used biometrics, and 85% of those users were satisfied ([IATA, 5 Nov 2025](https://www.iata.org/en/pressroom/2025-releases/2025-11-05-02/)). Trust is contested territory: airlines have historically been the single most-targeted industry for online payment fraud (about 46% of fraudulent transactions and over US$1 billion in annual losses), even as measured fraud rates fell about 30% year-over-year to 0.25% of transactions ([Open Jaw citing IATA and Accertify, 2 Sep 2025](https://openjaw.com/newsroom/airline/2025/09/02/once-the-most-affected-by-online-fraud-airline-scamming-abating/)). At the same time, 2025 saw at least 10 major aviation cyber incidents, including a Qantas contact-centre breach affecting **5.7 million customers** ([Qantas, 9 Jul 2025](https://www.qantasnewsroom.com.au/media-releases/update-on-qantas-cyber-incident-wednesday-9-july-2025); [Aerospace Global News citing SOCRadar, 2025](https://aerospaceglobalnews.com/news/airline-airport-aviation-cyberattacks-2025/)). The consistent 2026 signal is that commercial upside from digital retailing and personalization is now inseparable from the identity, payments, and cybersecurity foundations that make customers willing to transact digitally.

---

## 2. Evidence Window and Methodology

**Evidence window.** Sources are current through the 2026-08-18 access date, with emphasis on 2025 and 2026 publications. Comparisons to 2024 are used as context; selected figures for 2028-2030 are included only as directional forecasts and are labeled as such.

**Search and validation method.** Discovery used the Microsoft Web IQ `web` tool across focused queries (AI adoption, NDC and Offers/Orders, ancillary revenue, loyalty and co-brand, payments and fraud, cybersecurity, dynamic pricing, and passenger digital expectations). Load-bearing pages were read in full using a page reader, and the Web IQ `browse` tool was used to validate and extract primary content (IATA GPS press release, IdeaWorks estimate, McKinsey article, Lufthansa/PROS release, Qantas disclosure). Where a reader returned an HTTP error or timeout (Reuters 401, TheStreet 403, and transient timeouts on Businesswire, McKinsey, and Qantas), the URL was re-read once via the alternate tool or an equivalent authoritative source was substituted, consistent with a single-retry policy.

**Evidence-type taxonomy.** Each quantitative claim below is tagged by the kind of evidence it rests on, because the brief requires separating realized results from intent, vendor claims, and forecasts:

- **[Measured]** - survey-measured stated preference or observed transaction data.
- **[Disclosure]** - company or authority disclosure of an actual event or result.
- **[Self-reported/Intent]** - respondents' reported plans, priorities, or in-progress deployments.
- **[Consultancy estimate]** - modeled estimate from an independent research firm.
- **[Vendor]** - platform-specific metrics or claims from a commercial supplier.
- **[Vendor-sponsored survey]** - survey commissioned or published by a commercial supplier.
- **[Forecast]** - a forward projection.

**Source-methodology caveats.**

| Source | Population / basis | Sample or scope | Date | Independence |
|---|---|---|---|---|
| IATA Global Passenger Survey 2025 | Air passengers (stated preference) | 10,000+ responses, 200+ countries | Released 5 Nov 2025 | Industry body (primary) |
| SITA press release on 2025 Air Transport IT Insights | Airline/airport IT decision-makers (self-reported) | Sample size not stated in public release | Released 15 Apr 2026 (2025 report data) | Industry IT provider survey |
| IdeaWorks Global Estimate of Ancillary Revenue | Airline financial data, extrapolated | Global model | 18 Nov 2025 | Independent consultancy (CarTrawler-sponsored yearbook) |
| McKinsey / IATA airline retailing opportunity | Industry value modeling | Global | 1 Oct 2024 | Consultancy with IATA |
| Accertify airline fraud analysis (via Open Jaw) | Airline transactions | "Millions" of transactions | 2025 | Fraud-prevention vendor (an American Express company) |
| Accelya NDC data | Accelya platform bookings | Accelya-connected airlines | 28 Jan 2026 | Retailing software vendor |
| Amperity State of AI report (via The Wise Marketer) | Travel/airline professionals | 800 hotel + airline respondents | 21 Oct 2025 | CDP vendor (sponsored) |
| PROS / Lufthansa Group dynamic pricing | Airline adoption announcement | Lufthansa Group carriers | 28 Jan 2025 | Pricing-software vendor |
| Qantas cyber incident update | Airline forensic disclosure | 5.7M customer records | 9 Jul 2025 | Airline (primary) |
| Aerospace Global News (citing SOCRadar) | Aviation cyber-incident roundup | 10 incidents in 2025 | 2025 | Trade media citing threat intel |

---

## 3. Key Concepts and Terminology

- **NDC (New Distribution Capability):** an IATA XML data standard that lets airlines distribute richer, dynamic content and merchandising (images, bundles, real-time offers) across direct and intermediary channels, rather than through legacy fare filing ([McKinsey, 2024](https://www.mckinsey.com.br/industries/travel/our-insights/ready-for-takeoff-the-airline-retailing-opportunity)).
- **Offers and Orders (Modern Airline Retailing / MAR):** IATA's target end state in which the current mix of PNRs, e-tickets, and electronic miscellaneous documents (EMDs) is replaced by a single customer **Order** built from dynamically created **Offers**, supported by NDC and the ONE Order standard. IATA frames this as the transition to "100% Offers and Orders" ([IATA Airline Retailing](https://www.iata.org/en/programs/airline-distribution/retailing/); [IATA Offers & Orders hub](https://www.iata.org/en/publications/newsletters/airline-retailing-hub/topic/airline-retailing---offers-and-orders/)).
- **Continuous / dynamic pricing:** revenue-management approaches that price a fare (and, increasingly, ancillaries) in real time from richer signals rather than from a small set of fixed fare classes ([Businesswire: PROS/Lufthansa, 2025](https://www.businesswire.com/news/home/20250128177013/en/Lufthansa-Group-and-PROS-Take-Next-Step-in-Commercial-Innovation-with-Advanced-AI-based-Dynamic-Pricing-Fueling-Incremental-Revenue-Growth)).
- **Ancillary revenue:** revenue beyond the base fare, spanning a-la-carte items (bags, seats, onboard food) and commission-based streams (car rental, hotels, and co-branded credit-card partnerships tied to frequent-flyer programs) ([IdeaWorks, 2025](https://ideaworkscompany.com/wp-content/uploads/2025/11/Press-Release-197-Global-Estimate-2025.pdf)).
- **Co-brand card economics:** cash and other remuneration airlines receive from bank partners for miles sold into co-branded credit-card programs - a large, relatively stable revenue stream distinct from ticket yield ([Fortune via Yahoo Finance, 2026](https://uk.finance.yahoo.com/news/delta-ceo-ed-bastian-built-070100191.html)).
- **Digital identity / biometrics:** airline- or airport-issued credentials and biometric processing (e.g., biometric border control) used to streamline the airport journey ([SITA IT Insights 2025 (Airlines)](https://www.sita.com/resources/surveys-reports/air-transport-it-insights-2025/airlines/)).

---

## 4. Key Findings at a Glance

| # | Finding (2025-2026) | Headline metric | Evidence type | Source |
|---|---|---|---|---|
| 1 | Record technology investment | US$50.8B total; airlines US$36B (3.6% of revenue) | Self-reported/Intent | SITA 2025 |
| 2 | AI adoption in operations control | 63% of airlines; 79% name genAI/LLMs the top 12-month priority | Self-reported/Intent | SITA 2025 |
| 3 | Guest-facing AI still shallow | 80% use AI somewhere; only 35% guest-facing; 12.5% ready to scale | Vendor-sponsored survey | Amperity 2025 |
| 4 | Ancillary revenue record | US$157B in 2025 (15.7% of revenue); up from US$148.4B in 2024 | Consultancy estimate | IdeaWorks 2025 |
| 5 | NDC moving to volume | Corporate NDC bookings +168% YoY in Q4 2025 (one platform) | Vendor | Accelya 2026 |
| 6 | Modern retailing value pool | ~US$45B new value by 2030 (2-3% of revenue / ~15% of EBITDA) | Forecast | McKinsey/IATA 2024 |
| 7 | Co-brand card materiality | Delta ~US$8B, ~10% of 2025 revenue from Amex relationship | Disclosure via media | Fortune 2026 |
| 8 | Payment-mix shift | Card preference 72% (from 79%); digital wallets 28% (from 20%) | Measured | IATA GPS 2025 |
| 9 | Biometric normalization | 50% have used biometrics; 85% satisfied; 74% willing to share | Measured | IATA GPS 2025 |
| 10 | Fraud concentration and decline | Airlines ~46% of online fraud historically; rate down ~30% YoY to 0.25% | Measured | IATA / Accertify 2025 |
| 11 | Cyber exposure via third parties | 10 major 2025 incidents; Qantas breach = 5.7M customers | Disclosure | SOCRadar / Qantas 2025 |
| 12 | Digital identity scaling but uneven | 64% of airlines plan own-issued credentials (from 32% in 2024) | Self-reported/Intent | SITA 2025 |

---

## 5. AI, Generative AI, and Automation

### 5.1 Investment and the shift from point solutions to coordinated operations

SITA's 2025 Air Transport IT Insights report - published as a SITA press release on 15 Apr 2026, reporting 2025 data - positions AI as moving "from isolated predictions to coordinated operational decision-making." The industry invested a record US$50.8 billion in technology in 2025; airlines committed US$36 billion (3.6% of revenue) and airports US$14.8 billion (7.3% of revenue, up from 6.4% the prior year), and 83% of airlines and 89% of airports called data-driven decision-making a strategic priority (Self-reported/Intent) ([SITA, 2026](https://www.sita.aero/about-us/pressroom/news-releases/sita-research-finds-aviations-record-technology-investment-hinges-on-one-thing-data-coordination/)). Adoption is deepest inside a single operator's own systems: 63% of airlines use AI in operations control to manage disruption, aircraft assignment, and crew availability at once, while only 17% use AI to monitor aircraft turnaround in real time, where consistent data must flow across multiple partners. Airports report 53% AI use for aircraft turnaround, up from 36% in 2024 ([SITA, 2026](https://www.sita.aero/about-us/pressroom/news-releases/sita-research-finds-aviations-record-technology-investment-hinges-on-one-thing-data-coordination/)).

Generative AI is the stated near-term priority, but the survey itself flags a gap between ambition and deployment. 79% of airlines named generative AI and large language models their top investment priority for the next 12 months, which SITA characterizes as ambition "running well ahead of current deployment" (Self-reported/Intent) ([SITA, 2026](https://www.sita.aero/about-us/pressroom/news-releases/sita-research-finds-aviations-record-technology-investment-hinges-on-one-thing-data-coordination/)).

> "Aviation is deploying AI with real ambition. But the survey is clear: the primary barrier to maximizing that investment is the lack of data integration across the operation. The technology is there. The data infrastructure to connect it often is not."
> - Source: [SITA research finds aviation's record technology investment hinges on data coordination](https://www.sita.aero/about-us/pressroom/news-releases/sita-research-finds-aviations-record-technology-investment-hinges-on-one-thing-data-coordination/)

The same coordination ceiling appears in operations economics: SITA cites IATA's estimate that flight delays account for US$30 billion of industry revenue, and reports that 46% of airlines are upgrading flight-operations systems for real-time consistency while 49% cite data integration and consistency as the primary barrier ([SITA, 2026](https://www.sita.aero/about-us/pressroom/news-releases/sita-research-finds-aviations-record-technology-investment-hinges-on-one-thing-data-coordination/)).

### 5.2 The measured-adoption counterpoint: wide but shallow

An independent (vendor-sponsored) survey provides a useful realized-adoption check against the intent data. Amperity's 2025 State of AI in Travel & Airlines report, based on 800 hotel and airline (travel-loyalty) professionals across executive, marketing, IT, and analytics roles, found AI usage "widespread but shallow": 80% use AI in some capacity, but only 35% had deployed AI in guest-facing applications and only 12.5% felt confident they were prepared to scale, even as 96% planned to maintain or increase AI spending (Vendor-sponsored survey) ([Amperity via The Wise Marketer, 2025](https://thewisemarketer.com/amperity-releases-2025-state-of-ai-in-travel-airlines-report/)). Reported blockers were organizational and data-related rather than model-related: 36% provided no formal AI training and 58% reported fragmented or incomplete customer data.

> "While travel brands are investing in AI, they're hesitant to put it in front of guests. The challenge isn't vision - it's connection. Without a unified view of the customer and reliable access to quality data, AI can't consistently deliver the personalized experiences travelers expect."
> - Source: [Amperity's 2025 State of AI in Travel & Airlines Report](https://thewisemarketer.com/amperity-releases-2025-state-of-ai-in-travel-airlines-report/)

### 5.3 A carrier example: AI and automation in the customer journey

Alaska Airlines illustrates how AI and automation are being framed at the customer edge (announced and piloted capability rather than disclosed financial results). At SXSW 2025 the carrier unveiled a generative-AI platform intended to make trip planning conversational, and described piloting computer vision at gates to count carry-on bags, an in-app AI wayfinding tool that supports accessible routes and multiple languages, and a strategy of shifting repetitive tasks to automation so agents can act as "hosts." The airline said it governs these applications under the NIST AI Risk Management Framework (Self-reported/Intent) ([Forbes, 23 Mar 2025](https://www.forbes.com/sites/ronschmelzer/2025/03/23/alaska-airlines-new-ai-tool-promises-a-low-stress-travel-experience/)).

| AI / automation use case | Adoption signal (2025-2026) | Evidence type | Source |
|---|---|---|---|
| AI in operations control (disruption, fleet, crew) | 63% of airlines | Self-reported/Intent | SITA 2025 |
| Generative AI / LLMs as top 12-month priority | 79% of airlines | Self-reported/Intent | SITA 2025 |
| Real-time AI turnaround monitoring (airlines) | 17% of airlines | Self-reported/Intent | SITA 2025 |
| AI applied to aircraft turnaround (airports) | 53%, up from 36% (2024) | Self-reported/Intent | SITA 2025 |
| AI in airport cybersecurity | 64% of airports, up from 51% (2024) | Self-reported/Intent | SITA 2025 |
| Any AI use (travel/airline brands) | 80% | Vendor-sponsored survey | Amperity 2025 |
| Guest-facing AI deployed | 35% | Vendor-sponsored survey | Amperity 2025 |
| Feel prepared to scale AI | 12.5% | Vendor-sponsored survey | Amperity 2025 |

---

## 6. Retailing and Distribution

### 6.1 The value pool and the target state

McKinsey, in refreshed analysis conducted with IATA, estimates that better retailing techniques could unlock **US$45 billion in new value by 2030** (up from an earlier US$40 billion estimate), which "for many" airlines could translate into "an opportunity in excess of 2 to 3 percent of revenue - or 15 percent of EBITDA" (Forecast) ([McKinsey, 1 Oct 2024](https://www.mckinsey.com.br/industries/travel/our-insights/ready-for-takeoff-the-airline-retailing-opportunity)). The described capability set spans sophisticated offer design, multiproduct dynamic pricing and revenue management, omnichannel distribution via NDC, next-generation order management on ONE Order, and updated payments (including buy-now-pay-later and mixed loyalty-plus-cash tenders with AI-enabled fraud detection).

IATA frames the destination as Modern Airline Retailing, "the transition to 100% Offers and Orders," supported by NDC and ONE Order, with airlines "transforming with 100% Offers and Orders, moving beyond legacy standards" ([IATA Airline Retailing](https://www.iata.org/en/programs/airline-distribution/retailing/); [IATA Offers & Orders hub](https://www.iata.org/en/publications/newsletters/airline-retailing-hub/topic/airline-retailing---offers-and-orders/)). IATA characterizes the journey as "well underway, but there is more to be achieved."

### 6.2 NDC adoption maturity: moving from pilots to volume

Platform data indicates NDC is scaling in intermediary and corporate channels, though the strongest figures are vendor-reported and platform-specific. Accelya reported that corporate NDC bookings on its platform grew **168% year-over-year in Q4 2025**, with GDS-distributed NDC volumes up 162%, and that some airlines attached a paid ancillary in up to **31% of NDC bookings**, adding up to US$12 per ticket (Vendor) ([Accelya, 28 Jan 2026](https://w3.accelya.com/resources/press-releases/corporate-ndc-bookings-growth-q4-2025/)). Accelya states it processes more than 30 billion offers daily, settles over US$100 billion annually, and delivers more than half of global NDC volumes across 200-plus airlines, and it cited BCD Travel data that year-over-year NDC-booking growth through Accelya-connected airlines quadrupled.

> "These results show that NDC is moving decisively from experimentation to scale. Airlines are now using NDC to deliver richer offers across corporate, agency, and direct channels, while maintaining operational stability and control."
> - Source: [Corporate NDC Bookings Jump 168% in Q4 2025, Accelya](https://w3.accelya.com/resources/press-releases/corporate-ndc-bookings-growth-q4-2025/)

The maturity signal is directional rather than universal: the figures represent one large retailing platform's connected carriers and its corporate segment, and Accelya positions NDC as a "credible foundation for the industry's transition towards Offers and Orders" rather than a completed transition ([Accelya, 2026](https://w3.accelya.com/resources/press-releases/corporate-ndc-bookings-growth-q4-2025/)).

### 6.3 Continuous and dynamic pricing

Dynamic and continuous pricing is progressing through multi-carrier rollouts, evidenced primarily by vendor-airline announcements. Lufthansa Group extended its use of PROS AI-based pricing - "PROS Continuous Pricing which launched in 2019," Request-Specific Pricing since July 2022, and newly adopted Dynamic Ancillary Pricing - with PROS stating that five Lufthansa Group carriers (airBaltic, Austrian Airlines, Brussels Airlines, Lufthansa Airlines, and SWISS) are onboarded to dynamic ancillary pricing (Vendor) ([Businesswire: PROS/Lufthansa, 28 Jan 2025](https://www.businesswire.com/news/home/20250128177013/en/Lufthansa-Group-and-PROS-Take-Next-Step-in-Commercial-Innovation-with-Advanced-AI-based-Dynamic-Pricing-Fueling-Incremental-Revenue-Growth)). The announcement frames these as revenue-growth capabilities; specific incremental-revenue figures are not disclosed, so the benefit is stated as expected rather than measured. McKinsey separately notes that "few airlines have been able to balance both pricing and bundles at the same time," underscoring that mature, multiproduct dynamic pricing remains uneven across the industry ([McKinsey, 2024](https://www.mckinsey.com.br/industries/travel/our-insights/ready-for-takeoff-the-airline-retailing-opportunity)).

### 6.4 Ancillary revenue: record levels, structurally embedded

Ancillary revenue is the clearest measured commercial signal. IdeaWorks projects a record **US$157 billion in 2025**, up from US$148.4 billion in 2024 and far above US$67.4 billion in 2016, now equal to **15.7% of total airline revenue** (up from 9.1% in 2016), with the share across individual airlines ranging from 3.2% to as high as 62% (Consultancy estimate) ([IdeaWorks, 18 Nov 2025](https://ideaworkscompany.com/wp-content/uploads/2025/11/Press-Release-197-Global-Estimate-2025.pdf)). IdeaWorks attributes the growth to passenger volume and the global spread of basic-economy fares, and reports that the total consumer cost of travel has fallen even as ancillary revenue rose: an average one-way trip cost roughly US$310 in 2016 (US$294 base plus US$16 extras, inflation-adjusted) versus US$187.59 in 2025 (US$166.38 base plus US$21.21 extras), a 40% decline over nine years.

> "While about 45% of travelers purchase only the base fare, more than 50% opt for add-ons such as baggage, assigned seating, and inflight services. This dynamic allows airlines to sustain lower base fares while providing travelers with greater choice and flexibility."
> - Source: [IdeaWorks Global Estimate of Ancillary Revenue, 18 November 2025](https://ideaworkscompany.com/wp-content/uploads/2025/11/Press-Release-197-Global-Estimate-2025.pdf)

| Retailing / distribution metric | Value | Comparison | Evidence type | Source |
|---|---|---|---|---|
| Global ancillary revenue (2025) | US$157B | US$148.4B (2024); US$67.4B (2016) | Consultancy estimate | IdeaWorks 2025 |
| Ancillary share of total revenue | 15.7% | 9.1% (2016); range 3.2%-62% | Consultancy estimate | IdeaWorks 2025 |
| Avg. total consumer trip cost | US$187.59 (2025) | US$310 (2016, infl-adj); -40% | Consultancy estimate | IdeaWorks 2025 |
| Corporate NDC bookings growth | +168% YoY (Q4 2025) | GDS-distributed NDC +162% | Vendor | Accelya 2026 |
| Paid-ancillary attach in NDC bookings | up to 31% | up to +US$12 per ticket | Vendor | Accelya 2026 |
| Modern-retailing value pool | ~US$45B by 2030 | up from ~US$40B prior estimate | Forecast | McKinsey/IATA 2024 |
| Modern-retailing upside per airline | 2-3% of revenue / ~15% of EBITDA | maturity-dependent | Forecast | McKinsey/IATA 2024 |

---

## 7. Loyalty Economics, Co-Brand, and Personalization

### 7.1 Co-brand cards as a core profit engine

Co-branded credit-card and partner economics are among the most material and stable commercial streams in the sector, though the specific figures below are company-reported numbers relayed through business media rather than independently audited within this report. Delta reported that its American Express co-brand relationship (card plus associated perks) generated about **US$8 billion, roughly 10% of Delta's revenue, in 2025**, with card spending approaching 1% of U.S. GDP annually; Delta is described as Amex's largest card distributor, with the Delta card representing 10% of Amex's worldwide billings and Delta cardholders about 30% of Amex's U.S. consumer spend (Disclosure via media) ([Fortune via Yahoo Finance, 2026](https://uk.finance.yahoo.com/news/delta-ceo-ed-bastian-built-070100191.html)).

> "Nearly three decades later, the credit card - along with a raft of other perks - accounted for $8 billion, or about 10%, of Delta's revenue in 2025."
> - Source: [How Delta CEO Ed Bastian built a massive partnership with American Express (Fortune via Yahoo Finance)](https://uk.finance.yahoo.com/news/delta-ceo-ed-bastian-built-070100191.html)

The same reporting indicates the model is broad-based across U.S. carriers: American Airlines reported US$6.2 billion in cash payments from co-brand and partner agreements with Citi in 2025, and Alaska Airlines saw about 16% of total revenue flow from loyalty spending, with United (Chase) and Capital One's premium-travel push cited as intensifying competition ([Fortune via Yahoo Finance, 2026](https://uk.finance.yahoo.com/news/delta-ceo-ed-bastian-built-070100191.html)). Ancillary accounting reinforces the scale: IdeaWorks explicitly includes "co-branded credit card partnerships tied to frequent flyer programs" within the US$157 billion ancillary total ([IdeaWorks, 2025](https://ideaworkscompany.com/wp-content/uploads/2025/11/Press-Release-197-Global-Estimate-2025.pdf)).

| Carrier | Loyalty / co-brand metric (2025) | Evidence type | Source |
|---|---|---|---|
| Delta Air Lines | ~US$8B from Amex relationship; ~10% of revenue | Disclosure via media | Fortune 2026 |
| American Airlines | US$6.2B cash from co-brand/partner (Citi) | Disclosure via media | Fortune 2026 (citing Reuters) |
| Alaska Airlines | ~16% of total revenue from loyalty spending | Disclosure via media | Fortune 2026 (citing Reuters) |

### 7.2 Personalization: the data prerequisite

Across sources, personalization value is gated by unified, high-quality customer data. McKinsey ties higher-performing retailing to "a comprehensive and evolving view of the customer" enabled by CRM and a "foundational data layer" ([McKinsey, 2024](https://www.mckinsey.com.br/industries/travel/our-insights/ready-for-takeoff-the-airline-retailing-opportunity)). The Amperity survey quantifies the constraint: organizations with a customer data platform reported markedly more guest-facing AI deployment (50% vs. 19%) and daily AI use (54% vs. 28%), while 58% of all respondents reported fragmented or incomplete customer data (Vendor-sponsored survey) ([Amperity via The Wise Marketer, 2025](https://thewisemarketer.com/amperity-releases-2025-state-of-ai-in-travel-airlines-report/)). IATA's passenger data adds the demand-side rationale: 78% of passengers want a single smartphone that combines a digital wallet, digital passport, and loyalty cards to book, pay, and navigate the airport ([IATA, 2025](https://www.iata.org/en/pressroom/2025-releases/2025-11-05-02/)).

---

## 8. Passenger Digital Expectations, Self-Service, Biometrics, and Accessibility

### 8.1 Mobile-first booking, servicing, and payment

IATA's 2025 Global Passenger Survey (10,000+ responses across 200+ countries) shows a measured, continuing shift to mobile and direct channels. Over half of travelers (54%) want to deal directly with airlines; airline websites remained the top booking preference at 31% but fell from 37% in 2024, while web/app booking rose to 19% (from 16%) and reached 25% among younger travelers (Measured) ([IATA, 5 Nov 2025](https://www.iata.org/en/pressroom/2025-releases/2025-11-05-02/)). Payment preferences shifted in the same direction: card preference fell to 72% (from 79% in 2024), digital-wallet preference rose to 28% (from 20%), and instant-payment methods such as IATA Pay rose to 8% (from 6%). Self-service is broadening: electronic bag-tag use rose to 35% (from 28% in 2024).

> "Passengers want to manage their travel the same way they manage many other aspects of their lives - on their smartphones and using digital ID... There is an important caveat which is the need to continue building trust, so cybersecurity remains a priority."
> - Source: [IATA's 2025 Global Passenger Survey Reveals Mobile and Digital ID as the Future of Travel](https://www.iata.org/en/pressroom/2025-releases/2025-11-05-02/)

### 8.2 Biometrics and digital identity

Biometric processing is normalizing on the passenger side and scaling on the operator side. Half of passengers (50%) have used biometrics at some point in their journey (up from 46% in 2024), most often at security (44%), exit immigration (41%), and entry immigration (35%); use has risen nearly 20 percentage points since 2022; 85% of users report satisfaction; and 74% would share biometric data to skip showing a passport or boarding pass, while 42% of those currently unwilling would reconsider if data privacy were assured (Measured) ([IATA, 2025](https://www.iata.org/en/pressroom/2025-releases/2025-11-05-02/)). On the operator side, 64% of airlines plan to issue their own digital-identity credentials (up from 32% in 2024), biometric border control is live at 54% of airports and is projected to reach 83% by 2028, and 57% of airlines cite airport cooperation as the primary requirement for scaling digital identity (up from 40%) - a coordination, not technology, constraint (Self-reported/Intent and Forecast) ([SITA IT Insights 2025 (Airlines)](https://www.sita.com/resources/surveys-reports/air-transport-it-insights-2025/airlines/); [SITA, 2026](https://www.sita.aero/about-us/pressroom/news-releases/sita-research-finds-aviations-record-technology-investment-hinges-on-one-thing-data-coordination/)).

> "64% plan to issue digital identity credentials, up from 32% in 2024, but scaling is constrained. Coordination with airports and regulators, not technology, is now the bottleneck."
> - Source: [SITA, Air Transport IT Insights 2025 - Airlines](https://www.sita.com/resources/surveys-reports/air-transport-it-insights-2025/airlines/)

### 8.3 Accessibility

Accessibility appears in the customer-experience evidence chiefly as an emerging design dimension of digital self-service rather than as a quantified adoption metric. Alaska Airlines describes its in-app AI wayfinding tool as designed for "diverse traveler needs," explicitly including travelers who "require accessible routes" or prefer directions in another language, framed as reducing airport stress (Self-reported/Intent) ([Forbes, 2025](https://www.forbes.com/sites/ronschmelzer/2025/03/23/alaska-airlines-new-ai-tool-promises-a-low-stress-travel-experience/)). Consumer and accessibility regulation is addressed in the companion regulation, sustainability, and resilience assignment and is out of scope here.

| Passenger digital metric | 2025 | 2024 | Evidence type | Source |
|---|---|---|---|---|
| Prefer to deal directly with airlines | 54% | - | Measured | IATA GPS 2025 |
| Airline website booking preference | 31% | 37% | Measured | IATA GPS 2025 |
| Web/app booking preference | 19% (25% under-26) | 16% | Measured | IATA GPS 2025 |
| Card payment preference | 72% | 79% | Measured | IATA GPS 2025 |
| Digital-wallet preference | 28% | 20% | Measured | IATA GPS 2025 |
| Instant payment (e.g., IATA Pay) | 8% | 6% | Measured | IATA GPS 2025 |
| Electronic bag-tag use | 35% | 28% | Measured | IATA GPS 2025 |
| Have used biometrics | 50% | 46% | Measured | IATA GPS 2025 |
| Satisfied with biometrics | 85% | - | Measured | IATA GPS 2025 |
| Willing to share biometric data | 74% | - | Measured | IATA GPS 2025 |
| Airlines planning own digital-ID credentials | 64% | 32% | Self-reported/Intent | SITA 2025 |
| Biometric border control at airports | 54% (83% by 2028) | - | Self-reported/Forecast | SITA 2025 |

---

## 9. Payments, Fraud, Identity, Cybersecurity, and Resilience

### 9.1 Payment mix and fraud exposure

The payment mix is diversifying (Section 8.1), and the fraud picture shows a high-exposure industry that has recently improved. The 2 Sep 2025 Open Jaw article relays two data points with distinct underlying dates. Citing an IATA payment-fraud whitepaper published July 2020, it reports that airlines have historically been the most-targeted industry for online fraud - about **46% of fraudulent online transactions** and estimated losses of **over US$1 billion annually**, with payment fraud representing up to 1.2% of online revenue and a fraudulent ticket worth more than triple an average transaction (Measured/historical, 2020 benchmark) ([Open Jaw citing IATA, 2 Sep 2025](https://openjaw.com/newsroom/airline/2025/09/02/once-the-most-affected-by-online-fraud-airline-scamming-abating/)). Separately, a more recent 2025 transaction analysis by Accertify (a fraud-prevention vendor owned by American Express), relayed in the same article, reports the global airline fraud rate fell about **30% year-over-year to 0.25%** - roughly one fraud attempt per 400 bookings - with Europe down about 50%, attributed to measures such as mandatory 3D Secure authentication and improved data sharing (Vendor analysis, 2025) ([Open Jaw citing Accertify, 2025](https://openjaw.com/newsroom/airline/2025/09/02/once-the-most-affected-by-online-fraud-airline-scamming-abating/)). The two figures are therefore not contemporaneous: the IATA concentration-and-loss benchmark predates the pandemic (July 2020), while the Accertify rate decline reflects 2025 conditions. Reported fraud vectors include bogus booking sites, card-not-present fraud, phishing and account takeover of loyalty accounts, fake-agency triangulation, and refund fraud, with machine-learning detection now widely used to flag and block suspicious bookings.

### 9.2 Cybersecurity: a third-party and identity problem

Cyber exposure was a defining 2025-2026 theme, concentrated in third-party and contact-centre systems and in social-engineering vectors (threat-actor attribution and motive are out of scope for this report). Trade reporting compiled by SOCRadar counted 10 major aviation cyber incidents in 2025 spanning data breaches, ransomware, and denial-of-service disruption (Disclosure/roundup) ([Aerospace Global News citing SOCRadar, 2025](https://aerospaceglobalnews.com/news/airline-airport-aviation-cyberattacks-2025/)). The clearest customer-exposure example is Qantas's own forensic disclosure: after removing duplicates, **5.7 million unique customers'** data held in a compromised contact-centre system was affected, though the airline "reconfirmed no credit card details, personal financial information or passport details were stored in this system" and reported no impact to Frequent Flyer account credentials (Disclosure) ([Qantas, 9 Jul 2025](https://www.qantasnewsroom.com.au/media-releases/update-on-qantas-cyber-incident-wednesday-9-july-2025)).

> "After removing duplicate records, our investigation has found that there were 5.7 million unique customers' data held in the system... no credit card details, personal financial information or passport details were stored in this system and therefore have not been accessed."
> - Source: [Update on Qantas Cyber Incident, 9 July 2025](https://www.qantasnewsroom.com.au/media-releases/update-on-qantas-cyber-incident-wednesday-9-july-2025)

Other 2025 incidents in the roundup followed similar patterns: Air France-KLM detected unauthorized activity on an external customer-service platform exposing Flying Blue member contact and tier data; WestJet and Hawaiian Airlines reported intrusions affecting internal systems and apps; a ransomware incident at Kuala Lumpur International Airport disrupted systems for over 10 hours; and a breach of an ICAO recruitment platform exposed data for nearly 12,000 applicants. Reporting linked several airline intrusions to social engineering of contact-centre and third-party access rather than to failures of core flight systems ([Aerospace Global News citing SOCRadar, 2025](https://aerospaceglobalnews.com/news/airline-airport-aviation-cyberattacks-2025/)).

### 9.3 Resilience posture and spend

Cybersecurity has become both a top investment area and a shared-data risk. SITA reports that as operators connect more systems, "a breach would no longer affect a single platform" but risks the shared operational data (gate changes, turnaround status, passenger information) that operations depend on; 71% of airports now rank cybersecurity their top overall IT focus, 68% name it the primary driver of infrastructure upgrades, and 64% of airports already apply AI in cybersecurity to detect anomalies (up from 51% in 2024) (Self-reported/Intent) ([SITA, 2026](https://www.sita.aero/about-us/pressroom/news-releases/sita-research-finds-aviations-record-technology-investment-hinges-on-one-thing-data-coordination/)). Earlier SITA (2024 report edition) data, cited in the cyber roundup, found enhanced cybersecurity the top airline investment priority, with 87% of airlines having implemented a security operations centre and 81% using AI/ML for threat detection ([Aerospace Global News, 2025](https://aerospaceglobalnews.com/news/airline-airport-aviation-cyberattacks-2025/)).

| Payments / fraud / cyber metric | Value | Evidence type | Source |
|---|---|---|---|
| Airlines' share of online fraud (historical) | ~46% of fraudulent transactions | Measured/historical | IATA via Open Jaw 2025 |
| Annual airline fraud losses (historical) | >US$1B/year; up to 1.2% of online revenue | Measured/historical | IATA via Open Jaw 2025 |
| Global airline fraud rate (2025) | 0.25% (~1 in 400 bookings); -30% YoY | Vendor analysis | Accertify via Open Jaw 2025 |
| Europe airline fraud-rate change | ~-50% YoY | Vendor analysis | Accertify via Open Jaw 2025 |
| Major aviation cyber incidents (2025) | 10 | Disclosure/roundup | SOCRadar via AGN 2025 |
| Qantas customers affected | 5.7 million | Disclosure | Qantas 2025 |
| Airports ranking cyber as top IT focus | 71% | Self-reported/Intent | SITA 2025 |
| Airports applying AI in cybersecurity | 64% (from 51% in 2024) | Self-reported/Intent | SITA 2025 |

---

## 10. Regional and Carrier-Model Variation

**Regional passenger variation (IATA GPS 2025).** Preferences differ materially by region, which the data shows shapes channel, payment, and biometric strategy ([IATA, 2025](https://www.iata.org/en/pressroom/2025-releases/2025-11-05-02/)):

- **Asia-Pacific:** most digitally savvy; leads in mobile-app and digital-wallet booking and payment; among the most frequent biometric users, though with the lowest satisfaction with those experiences.
- **Europe:** most traditional and cautious; prefers airline websites and card payment; least likely to have used biometrics in the past year and more hesitant to share data - consistent with the ~50% European fraud-rate decline tied to 3D Secure and data-sharing standards ([Open Jaw, 2025](https://openjaw.com/newsroom/airline/2025/09/02/once-the-most-affected-by-online-fraud-airline-scamming-abating/)).
- **North America:** prioritizes convenience and journey time; relies heavily on airline websites; widespread biometric use but the strongest privacy concerns; among the least satisfied travelers.
- **Middle East:** highly digitally engaged with widespread digital-wallet use and strong loyalty orientation; among the most satisfied travelers.
- **Africa** and **Latin America & Caribbean:** value the human touch and personal interaction in booking; Africa reports high satisfaction but the greatest border-process friction; Latin America shows strong willingness to adopt biometrics and high satisfaction when it does.

**Carrier-model variation.**

- **Ancillary intensity spans the spectrum.** Ancillary share ranges from 3.2% to 62% of revenue across airlines, with basic-economy adoption - pioneered by low-cost carriers and later integrated by network carriers such as American, Delta, and United - the primary structural driver ([IdeaWorks, 2025](https://ideaworkscompany.com/wp-content/uploads/2025/11/Press-Release-197-Global-Estimate-2025.pdf)).
- **Loyalty monetization skews to large network carriers** with deep bank partnerships (Delta/Amex, American/Citi, United/Chase), where co-brand cash is a defining profit contributor ([Fortune, 2026](https://uk.finance.yahoo.com/news/delta-ceo-ed-bastian-built-070100191.html)).
- **Retailing and pricing maturity is concentrated** among carriers that have invested for years in dynamic pricing (e.g., Lufthansa Group's multi-year PROS rollout across five of its carriers) and NDC platforms, while McKinsey notes "many airlines have yet to embark on their retailing journeys" ([Businesswire, 2025](https://www.businesswire.com/news/home/20250128177013/en/Lufthansa-Group-and-PROS-Take-Next-Step-in-Commercial-Innovation-with-Advanced-AI-based-Dynamic-Pricing-Fueling-Incremental-Revenue-Growth); [McKinsey, 2024](https://www.mckinsey.com.br/industries/travel/our-insights/ready-for-takeoff-the-airline-retailing-opportunity)).

---

## 11. Uncertainty and Conflicting Evidence

- **Ambition vs. realized deployment (AI).** SITA reports 79% of airlines naming generative AI their top priority and 63% using AI in operations control (self-reported intent), while Amperity finds only 35% guest-facing AI deployment and 12.5% readiness to scale (vendor-sponsored survey mixing hotels and airlines). These are not directly comparable populations, but together they indicate ambition running ahead of measured, customer-facing deployment ([SITA, 2026](https://www.sita.aero/about-us/pressroom/news-releases/sita-research-finds-aviations-record-technology-investment-hinges-on-one-thing-data-coordination/); [Amperity, 2025](https://thewisemarketer.com/amperity-releases-2025-state-of-ai-in-travel-airlines-report/)).
- **Fraud down, breaches up.** Measured payment-fraud rates fell about 30% year-over-year (Accertify), yet customer-data breaches and operational cyber incidents rose (SOCRadar/Qantas). These describe different risk surfaces - transaction fraud vs. identity/data compromise via third parties - and can move in opposite directions simultaneously ([Open Jaw, 2025](https://openjaw.com/newsroom/airline/2025/09/02/once-the-most-affected-by-online-fraud-airline-scamming-abating/); [Aerospace Global News, 2025](https://aerospaceglobalnews.com/news/airline-airport-aviation-cyberattacks-2025/)).
- **Single-source and vendor-sourced load-bearing numbers.** The US$157B ancillary figure is a single-consultancy estimate (IdeaWorks), and the strongest NDC-growth figures are platform-specific vendor data (Accelya). Both come from recognized industry sources but are not independently corroborated here and should be treated as directional. The Accertify fraud analysis is from a vendor owned by a card-network participant, and the Amperity survey is CDP-vendor-sponsored ([IdeaWorks, 2025](https://ideaworkscompany.com/wp-content/uploads/2025/11/Press-Release-197-Global-Estimate-2025.pdf); [Accelya, 2026](https://w3.accelya.com/resources/press-releases/corporate-ndc-bookings-growth-q4-2025/)).
- **Company-reported loyalty economics.** Delta (~US$8B / ~10%), American (US$6.2B), and Alaska (~16%) figures are company-reported and relayed via business media; the American and Alaska figures trace to a Reuters report that could not be opened directly during research (see Limitations) ([Fortune via Yahoo Finance, 2026](https://uk.finance.yahoo.com/news/delta-ceo-ed-bastian-built-070100191.html)).
- **Survey definitions differ.** IATA GPS measures stated passenger preference (not observed behavior); SITA measures operator intent and investment; adoption definitions ("uses AI," "plans to issue credentials," "guest-facing") vary across surveys, so cross-source percentages are not strictly additive.
- **Forecasts carry model risk.** The US$45B-by-2030 retailing value and the 83%-biometric-border-control-by-2028 figures are projections dependent on adoption and coordination assumptions ([McKinsey, 2024](https://www.mckinsey.com.br/industries/travel/our-insights/ready-for-takeoff-the-airline-retailing-opportunity); [SITA, 2026](https://www.sita.aero/about-us/pressroom/news-releases/sita-research-finds-aviations-record-technology-investment-hinges-on-one-thing-data-coordination/)).

---

## 12. Presentation-Ready Neutral Insights

These are neutral, evidence-anchored synthesis statements for slide use. They describe what the evidence shows; they are descriptive rather than prescriptive and do not set priorities.

1. **Record digital spend meets a data-coordination ceiling.** The industry invested a record US$50.8B in technology in 2025 (airlines US$36B), yet the evidence indicates data integration - not model capability - is the primary limit on realized AI value ([SITA, 2026](https://www.sita.aero/about-us/pressroom/news-releases/sita-research-finds-aviations-record-technology-investment-hinges-on-one-thing-data-coordination/)).
2. **AI ambition is ahead of guest-facing deployment.** 79% name generative AI their top priority, but measured guest-facing AI adoption sits near 35% with ~12.5% ready to scale ([SITA, 2026](https://www.sita.aero/about-us/pressroom/news-releases/sita-research-finds-aviations-record-technology-investment-hinges-on-one-thing-data-coordination/); [Amperity, 2025](https://thewisemarketer.com/amperity-releases-2025-state-of-ai-in-travel-airlines-report/)).
3. **Ancillary revenue is structurally large and rising.** A record US$157B in 2025 (15.7% of revenue) coincides with a 40% nine-year drop in total consumer trip cost - lower base fares subsidized by opt-in extras ([IdeaWorks, 2025](https://ideaworkscompany.com/wp-content/uploads/2025/11/Press-Release-197-Global-Estimate-2025.pdf)).
4. **NDC is transitioning from pilot to volume, unevenly.** Corporate NDC bookings grew 168% YoY in Q4 2025 on one major platform, against an industry target of 100% Offers and Orders that IATA calls "well underway" but incomplete ([Accelya, 2026](https://w3.accelya.com/resources/press-releases/corporate-ndc-bookings-growth-q4-2025/); [IATA](https://www.iata.org/en/programs/airline-distribution/retailing/)).
5. **Co-brand loyalty is a defining profit engine for large carriers.** Delta's Amex relationship alone approximated US$8B, ~10% of 2025 revenue ([Fortune, 2026](https://uk.finance.yahoo.com/news/delta-ceo-ed-bastian-built-070100191.html)).
6. **Passengers are mobile-first and biometric-comfortable, conditional on trust.** Card preference fell to 72% as wallets rose to 28%; 50% have used biometrics with 85% satisfied; 74% would share biometrics to skip documents ([IATA, 2025](https://www.iata.org/en/pressroom/2025-releases/2025-11-05-02/)).
7. **The trust foundation is contested.** Airlines historically absorbed ~46% of online fraud (>US$1B/yr); measured fraud rates fell ~30% YoY to 0.25%, even as 10 major cyber incidents in 2025 - including a 5.7M-customer Qantas breach - concentrated in third-party and contact-centre systems ([Open Jaw, 2025](https://openjaw.com/newsroom/airline/2025/09/02/once-the-most-affected-by-online-fraud-airline-scamming-abating/); [Qantas, 2025](https://www.qantasnewsroom.com.au/media-releases/update-on-qantas-cyber-incident-wednesday-9-july-2025)).
8. **Regional divergence is real and measurable.** Asia-Pacific and Middle East lead digital and biometric adoption; Europe is most cautious; North America prioritizes convenience but reports the strongest privacy concerns ([IATA, 2025](https://www.iata.org/en/pressroom/2025-releases/2025-11-05-02/)).

---

## 13. Research Limitations

- **Access failures.** Reuters (HTTP 401) and TheStreet (HTTP 403) could not be opened; the loyalty figures they underpin were obtained via a reputable secondary relay (Fortune) rather than the primary article, so American's US$6.2B and Alaska's ~16% are single-relay figures here. Businesswire, McKinsey, and Qantas returned transient timeouts on first read and were successfully retrieved on a single retry via the alternate reader.
- **Vendor and sponsorship bias.** Several load-bearing figures come from commercial suppliers (Accelya, PROS, Amperity, Accertify) or a sponsored yearbook (IdeaWorks/CarTrawler). These are labeled inline; vendor-reported growth and readiness figures may reflect favorable framing or platform-specific populations.
- **Definition and comparability gaps.** Surveys measure different populations (passengers vs. operators) and define "adoption" differently; the Amperity sample combines hotels and airlines. Cross-source percentages are directional, not additive.
- **Corroboration limits.** The global ancillary total (IdeaWorks) and platform NDC-growth figures (Accelya) are effectively single-source; they are the recognized references in their domains but are not independently verified within this report.
- **Fieldwork dating.** IATA GPS was released 5 Nov 2025; the SITA data-coordination press release was published 15 Apr 2026 and reports 2025 Air Transport IT Insights results (the data/report year is 2025). Exact fieldwork windows and full sample compositions are not stated in the public releases consulted.
- **Scope boundaries.** Threat-actor identity, incident motive, and non-operational external context were deliberately excluded; where a source attached such framing (e.g., macro commentary in the SITA release or actor attribution in the cyber roundup), only the neutral adoption, exposure, and operating facts were used. Consumer and accessibility regulation, emissions, and infrastructure are covered by the companion regulation, sustainability, and resilience assignment.
- **Currency and rounding.** Figures are reported in the source currency (predominantly USD) and rounded as published; percentage-point comparisons use the sources' own 2024 baselines.

---

## 14. Complete Reference List

All URLs accessed 2026-08-18.

### Primary Industry Surveys and Standards Bodies

1. **IATA - 2025 Global Passenger Survey press release.** "IATA's 2025 Global Passenger Survey Reveals Mobile and Digital ID as the Future of Travel." Published 5 Nov 2025. Evidence type: primary passenger survey (10,000+ responses, 200+ countries; measured stated preference). URL: https://www.iata.org/en/pressroom/2025-releases/2025-11-05-02/
2. **IATA - Airline Retailing / Modern Airline Retailing program page.** Undated program page (accessed 2026-08-18). Evidence type: standards-body program status (Offers and Orders, NDC, ONE Order). URL: https://www.iata.org/en/programs/airline-distribution/retailing/
3. **IATA - Airline Retailing Hub: Offers & Orders.** Undated newsletter hub (accessed 2026-08-18). Evidence type: standards-body program commentary. URL: https://www.iata.org/en/publications/newsletters/airline-retailing-hub/topic/airline-retailing---offers-and-orders/
4. **SITA - Press release on the 2025 Air Transport IT Insights report.** "SITA research finds aviation's record technology investment hinges on one thing: data coordination." Published 15 Apr 2026 (reports 2025 Air Transport IT Insights data). Evidence type: airline/airport IT-leader survey (self-reported intent and investment). URL: https://www.sita.aero/about-us/pressroom/news-releases/sita-research-finds-aviations-record-technology-investment-hinges-on-one-thing-data-coordination/
5. **SITA - Air Transport IT Insights 2025 (Airlines).** Report web page for the 2025 edition (accessed 2026-08-18). Evidence type: airline IT survey detail (digital identity adoption). URL: https://www.sita.com/resources/surveys-reports/air-transport-it-insights-2025/airlines/

### Airline Primary Disclosure

6. **Qantas - Update on Qantas Cyber Incident, Wednesday 9 July 2025.** Published 9 Jul 2025. Evidence type: airline forensic disclosure (5.7M customer records; data-field breakdown). URL: https://www.qantasnewsroom.com.au/media-releases/update-on-qantas-cyber-incident-wednesday-9-july-2025

### Independent Research and Consultancy

7. **McKinsey & Company - "Ready for takeoff: The airline retailing opportunity."** Published 1 Oct 2024. Evidence type: consultancy value modeling with IATA (US$45B by 2030 forecast). URL: https://www.mckinsey.com.br/industries/travel/our-insights/ready-for-takeoff-the-airline-retailing-opportunity
8. **IdeaWorksCompany - Global Estimate of Ancillary Revenue (Press Release 197).** Published 18 Nov 2025. Evidence type: independent consultancy estimate (US$157B 2025 ancillary; CarTrawler-sponsored yearbook). URL: https://ideaworkscompany.com/wp-content/uploads/2025/11/Press-Release-197-Global-Estimate-2025.pdf

### Vendor and Vendor-Sponsored Evidence

9. **Accelya - "Corporate NDC Bookings Jump 168% in Q4 2025."** Published 28 Jan 2026. Evidence type: retailing-software vendor platform data. URL: https://w3.accelya.com/resources/press-releases/corporate-ndc-bookings-growth-q4-2025/
10. **Businesswire / PROS Holdings - "Lufthansa Group and PROS Take Next Step in Commercial Innovation with Advanced AI-based Dynamic Pricing."** Published 28 Jan 2025. Evidence type: pricing-software vendor and airline adoption announcement (expected, not measured, revenue benefit). URL: https://www.businesswire.com/news/home/20250128177013/en/Lufthansa-Group-and-PROS-Take-Next-Step-in-Commercial-Innovation-with-Advanced-AI-based-Dynamic-Pricing-Fueling-Incremental-Revenue-Growth
11. **Amperity - "2025 State of AI in Travel & Airlines Report"** (reported via The Wise Marketer). Published 21 Oct 2025. Evidence type: CDP-vendor-sponsored survey (800 hotel + airline professionals). URL: https://thewisemarketer.com/amperity-releases-2025-state-of-ai-in-travel-airlines-report/

### Reputable Business and Trade Media

12. **Fortune (via Yahoo Finance) - "How Delta CEO Ed Bastian built a massive partnership with American Express."** Published 2026 (originally Fortune.com, 3 Apr 2026). Evidence type: company-reported loyalty/co-brand economics relayed via business media (Delta ~US$8B; American US$6.2B; Alaska ~16%, latter two citing Reuters). URL: https://uk.finance.yahoo.com/news/delta-ceo-ed-bastian-built-070100191.html
13. **Forbes - "Alaska Airlines' New AI Tool Promises A Low-Stress Travel Experience."** Published 23 Mar 2025. Evidence type: reputable media, airline-executive interview (announced/pilot AI and automation). URL: https://www.forbes.com/sites/ronschmelzer/2025/03/23/alaska-airlines-new-ai-tool-promises-a-low-stress-travel-experience/
14. **Aerospace Global News (citing SOCRadar) - "Already 10 major cyberattacks on airlines, airports in 2025 so far."** 2025. Evidence type: trade media citing threat-intelligence roundup (customer-data and operational-exposure facts used; attribution/motive excluded). URL: https://aerospaceglobalnews.com/news/airline-airport-aviation-cyberattacks-2025/
15. **Open Jaw (citing IATA and Accertify) - "Once 'The Most Affected by Online Fraud', Airline Scamming Abating."** Published 2 Sep 2025; relays a historical IATA payment-fraud whitepaper (July 2020) alongside a newer 2025 Accertify transaction analysis. Evidence type: trade media citing a 2020 IATA fraud benchmark and a 2025 vendor fraud analysis. URL: https://openjaw.com/newsroom/airline/2025/09/02/once-the-most-affected-by-online-fraud-airline-scamming-abating/

---

*End of report.*
