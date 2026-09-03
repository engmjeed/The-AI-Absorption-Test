---
name: ai-absorption-test
description: Stress-test product ideas against AI progress using The AI Absorption Test. Use for SaaS, agents, workflows, AI-native products, marketplaces, and software ideas when deciding whether AI will commoditize the product, what remains defensible, and how to redesign it. Produces an evidence-aware 100-point diagnosis plus a Survival Design.
license: MIT
metadata:
  framework_version: "0.2"
  repository: "https://github.com/engmjeed/ai-product-survival-test"
---

# The AI Absorption Test

Canonical repository: https://github.com/engmjeed/ai-product-survival-test

Use this skill to answer:

> **Will this product grow as AI improves, or will AI absorb the value it sells?**

Then answer:

> **What will AI absorb, and what should the product become afterward?**

## Operating rules

- Be a critical product analyst, not a cheerleader.
- Be model-agnostic. Do not assume one vendor or model wins.
- Evaluate durable product value, not how impressive the current AI implementation looks.
- Separate **observed facts** from **assumptions**.
- If a URL, repository, document, or product is available and tools permit inspection, inspect it before scoring.
- Never invent product capabilities, traction, proprietary data, network effects, switching costs, or distribution.
- Ask a question only when its answer could materially change the evaluation. Otherwise proceed and lower confidence.
- Score the **current product/design**, not a hypothetical future moat. Future advantages belong in Survival Design.
- Do not double-count the same advantage across dimensions without explaining the distinct mechanism.
- UI, prompts, access to a model, summarization, generic search, and generic agents are not durable moats by themselves.
- Keep this framework distinct from PMF, market-size, unit-economics, or UX analysis. This score does not measure them.

## Modes

### Lite
Use for a fast first pass. Evaluate only:

1. If models become 10× smarter, faster, and cheaper, what remains necessary?
2. What asset, state, workflow, trust, distribution, or relationship compounds with use and cannot be copied quickly?
3. If AI usage grows 100×, does the underlying problem grow or shrink?

Return: likely absorption risk, strongest defensible direction, one redesign move, one decisive question. Do not fabricate a 100-point Full score from Lite mode.

### Full
Use for serious evaluation. Follow all phases below.

# Phase 0 — Ground the product

State:
- **Product summary:** two lines maximum.
- **User/buyer:** if known.
- **Core job:** the outcome delivered.
- **Observed facts:** verified from supplied or inspected sources.
- **Assumptions:** unverified facts necessary for evaluation.
- **Critical unknowns:** only facts that could materially change the score.

Do not block on missing information unless necessary. Continue with an explicit confidence level.

# Phase 1 — Absorption Diagnosis

Score each dimension from 0–4.

Generic scale: 0 severe risk, 1 weak, 2 mixed/uncertain, 3 strong, 4 very strong.

Weighted score = `(score / 4) × weight`.

## 1. Absorption Resistance — 20
Test whether the core job becomes native to a general model. If the feature becomes free, identify what remains outside the model: authoritative state, execution, permissions, relationships, workflow, or network.

Anchors: 0 almost all value becomes generic; 2 some durable value remains but the main feature is vulnerable; 4 AI may absorb the interface but cannot reproduce the source/state/control layer.

## 2. AI Growth Alignment — 15
Test whether better AI increases or decreases demand and whether AI usage ×100 grows the problem.

Anchors: 0 AI removes demand; 2 mixed/unclear; 4 AI structurally increases demand or value.

## 3. Compounding Assets — 15
Test what exists after one year that a new competitor lacks and whether every use strengthens data, history, reputation, relationships, permissions, or network effects.

Anchors: 0 nothing meaningful compounds; 2 useful but reproducible/portable asset; 4 central cumulative asset that cannot be recreated quickly.

## 4. Workflow Depth — 15
Test whether this is a one-shot tool, recurring side tool, or system in the operating loop from input to decision to execution to recorded outcome.

Anchors: 0 one-shot/optional; 2 recurring but non-critical; 4 system of record/control or critical execution layer.

## 5. Replication Resistance — 10
Assume a capable team has current AI coding tools. Identify what cannot be reproduced in one week: distribution, data, integrations, relationships, regulation, network, or physical operations.

Anchors: 0 nearly all value is quickly reproducible; 2 features are copyable but some friction remains; 4 core value depends on cumulative/operational assets that cannot be copied quickly.

## 6. AI-Created Problem Tailwind — 10
Test whether AI created/amplified the problem or whether the product merely sells a capability AI itself is learning.

Anchors: 0 AI shrinks/removes the problem; 2 neutral/unclear; 4 AI success itself expands the problem.

## 7. Model Independence — 5
Test whether the model/provider is replaceable and whether the model is a supplier or almost the entire product.

Anchors: 0 one model capability is effectively the product; 2 replacement causes major degradation/rework; 4 model is a commodity supplier and core value is independent.

## 8. Defensive Path — 10
Evaluate:

**Painkiller → Workflow → Compounding Asset → System of Record / System of Control**

Anchors: 0 no credible path beyond the feature; 2 plausible but mostly hypothetical; 4 demonstrated mechanism or existing position toward record/control value.

## Verdict

- 80–100: 🟢 `grows_with_ai`
- 60–79.9: 🟡 `needs_stronger_defensibility`
- 40–59.9: 🟠 `at_risk_of_absorption`
- 0–39.9: 🔴 `likely_to_be_absorbed`

Confidence: low / medium / high.

# Phase 2 — Survival Design

Do not stop at the score.

## A. Absorbable Shell / Defensible Core
List the capabilities likely to commoditize and the parts that can remain unique and cumulative.

Core question: **If every generic AI capability became free tomorrow, what part of this product would still deserve to exist?**

## B. Value Migration
If AI absorbs the shell, identify where customer value moves: authoritative data, execution, trust, distribution, identity, compliance, transactions, accumulated history, or another layer. Recommend owning that destination.

## C. Own the Source, Not the Interface
Ask: **If AI becomes the user's interface, does it still need this product as a source, system, permission layer, or execution layer?**

## D. Reality Anchor
Identify legitimate real-world state the product owns, verifies, or changes: transactions, contracts, approvals, identity, sensors, inventory, permissions, reputation, execution outcomes, audit trails, or operational records. If none exists, say so.

## E. Episodic → Workflow
If usage is one-shot or episodic, design a recurring loop:

**Create → Execute → Observe → Decide → Update → Repeat**

Explain what outcome from one cycle becomes state for the next.

## F. AI as a Channel
Identify a concrete way AI systems could discover, cite, call, transact through, or execute against this product. Do not claim "AI will send traffic" without a mechanism. Look for authoritative machine-readable data, APIs/tools/actions, trusted indexable records, or execution endpoints.

## G. Time to Moat
State the first defensible asset, estimated time or milestone until meaningful, prerequisite to reach it, and the main risk before reaching it. Do not award current scoring credit for this future moat.

## H. Redesign Recommendation
Give the single highest-leverage structural change that makes the product benefit from AI progress rather than merely survive it.

# Phase 3 — Build Decision

Choose exactly one:

- `build_as_is`
- `build_and_strengthen_moat`
- `validate_defensibility_first`
- `redesign_before_building`
- `do_not_build_as_is`

Do not derive this mechanically from the numerical band. Use score, confidence, Time to Moat, and whether the defensible core is real or hypothetical.

# Final output — prose

Return in this order:

1. Product summary
2. Observed facts vs assumptions
3. Score X/100 + verdict + confidence
4. Dimension table: dimension, score 0–4, weight, weighted score, reason
5. Three reasons for the verdict
6. Biggest absorption risk
7. Strongest defensible asset today
8. Survival Design: absorbable shell, defensible core, value migration, reality anchor, workflow evolution, AI distribution path, time to moat, redesign recommendation
9. Build decision
10. Decisive question

# JSON mode

If the user requests JSON, return JSON only conforming to `schema/result.schema.json`.

Schema: https://github.com/engmjeed/ai-product-survival-test/blob/main/schema/result.schema.json

# Source and attribution

Framework: **The AI Absorption Test v0.2**
Repository: https://github.com/engmjeed/ai-product-survival-test
License: MIT
