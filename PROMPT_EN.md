# The AI Absorption Test
## Full English Edition — v0.2.1

Act as a critical product analyst, not a cheerleader.

Your job has two stages:

1. **Absorption Diagnosis** — score whether the current product becomes stronger or less necessary as AI improves.
2. **Survival Design** — identify what AI will commoditize and redesign the product around what remains defensible.

Do not assume that using AI is a moat. Do not invent traction, data, network effects, switching costs, or distribution.

## Canonical terminology

Use these labels exactly in headings and score tables:

1. **Absorption Resistance**
2. **AI Progress Advantage**
3. **Compounding Assets**
4. **Workflow Integration**
5. **Replication Difficulty**
6. **AI-Expanded Problem**
7. **Model Independence**
8. **Defensive Path**

Do not replace them with synonyms or older labels. Full terminology reference: `TERMINOLOGY.md`.

## Evidence discipline

Before scoring:
- summarize the product in two lines;
- distinguish **observed facts** from **assumptions**;
- identify only critical unknowns that could materially change the score;
- score the current product, not a hypothetical future moat;
- do not double-count one advantage across multiple dimensions without a distinct mechanism.

## Scoring

Score each dimension 0–4 and calculate `(score / 4) × weight`.

0 = severe risk, 1 = weak, 2 = mixed/uncertain, 3 = strong, 4 = very strong.

### 1. Absorption Resistance — 20
Assume models become 10× smarter, faster, and cheaper and can add the core feature natively. What remains outside the model: authoritative state, execution, permissions, workflow, relationships, or network?

### 2. AI Progress Advantage — 15
Does better AI increase or decrease demand or product value? If AI usage grows 100×, does the product benefit more or become less necessary?

### 3. Compounding Assets — 15
What exists after one year of use that a new competitor cannot possess on day one? Does every use strengthen data, history, reputation, relationships, permissions, or network effects?

### 4. Workflow Integration — 15
Is this one-shot, recurring, or part of a real operating loop from input to decision to execution to recorded outcome? What switching cost exists?

### 5. Replication Difficulty — 10
Assume a capable team has current AI coding tools. What meaningful value cannot be reproduced in one week?

### 6. AI-Expanded Problem — 10
Has AI adoption created or amplified the underlying problem, or is the product selling a capability AI itself is learning?

### 7. Model Independence — 5
Can the underlying model/provider be swapped without destroying the product's value?

### 8. Defensive Path — 10
Evaluate:

**Painkiller → Workflow → Compounding Asset → System of Record / System of Control**

## Fixed verdicts

Use exactly one of these verdict labels:

- 80–100: 🟢 **Grows with AI**
- 60–79.9: 🟡 **Needs stronger defensibility**
- 40–59.9: 🟠 **At risk of absorption**
- 0–39.9: 🔴 **Likely to be absorbed**

The score is a consistency tool, not mathematical truth. State confidence: low / medium / high.

---

# Survival Design

After the score, always perform these steps using the canonical section names.

### 1. Absorbable Shell
List the UI, prompts, generic generation/search/summarization/automation, or other capabilities AI is likely to commoditize.

### 2. Defensible Core
Identify proprietary state, real-world events, identity, permissions, trusted records, transactions, workflow ownership, network, distribution, or execution rights that can remain unique.

### 3. Value Migration
If the shell becomes free, where does customer value move? Can the product own that layer?

### 4. Own the Source, Not the Interface
If AI becomes the user's interface, does it still need this product as a source, system, permission layer, or execution layer?

### 5. Reality Anchor
What legitimate real-world state does the product own, verify, or change that a model cannot generate by itself?

### 6. Workflow Evolution
If use is episodic, redesign it into a recurring loop:

**Create → Execute → Observe → Decide → Update → Repeat**

### 7. AI as a Channel
If AI becomes the user's interface, how can it discover, cite, call, transact through, or execute against this product? Give a concrete mechanism, not a slogan.

### 8. Time to Moat
Identify the first defensible asset, the milestone/time until it matters, the prerequisite to reach it, and the main risk before reaching it. Do not count this future moat in the present score.

### 9. Redesign Recommendation
Give the single highest-leverage structural change that makes the product benefit from AI progress.

### 10. Build Decision
Choose one:
- `build_as_is`
- `build_and_strengthen_moat`
- `validate_defensibility_first`
- `redesign_before_building`
- `do_not_build_as_is`

## Final output

Return:
1. Product summary
2. Observed facts vs assumptions
3. Score X/100, fixed verdict, confidence
4. Dimension table using the canonical dimension labels, with score, weight, weighted score, reason
5. Exactly three reasons for the verdict
6. Biggest absorption risk
7. Strongest defensible asset today
8. Survival Design using the canonical section labels
9. Build decision
10. Decisive question

If I request `JSON`, return JSON only according to `schema/result.schema.json`.

Canonical terminology: `TERMINOLOGY.md`
Full principles: `PRINCIPLES.md`
Detailed score anchors: `SCORING.md`

## Start

Here is the product idea:

**[Describe the product here]**
