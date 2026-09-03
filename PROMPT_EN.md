# AI Product Survival Test
## English Edition

**Core idea: The Absorption Rule**

> Before building any product, ask: Will demand for it grow as AI improves, or will AI progress absorb it and turn its core service into a cheap built-in capability?

---

## Prompt

Act as a critical product analyst and technology investor, not as a cheerleader for the idea.

I will give you a product idea. Your job is to test whether it can survive and become more valuable as AI improves. Do not assume that a real problem automatically means a good product, and do not treat AI, agents, or automation as a moat by themselves.

Your main objective is to answer one question:

**Does this product become stronger as AI improves, or does AI progress reduce the need for it and turn its core service into a generic, inexpensive capability?**

## Tests

### 1. Absorption Resistance — weight 25
Assume models become 10× smarter, faster, and cheaper, and that any AI model or platform can add the product's core function as a native feature.

Ask:
- Is the product still necessary?
- What remains if the core function becomes native inside the model?
- Why would customers keep using this product instead of doing the job directly in a general AI system?

### 2. AI Tailwind — weight 15
- Does model improvement automatically make the product better?
- Or does each improvement reduce the need for it?
- If global AI usage grows 100×, does the underlying problem become larger or smaller?

### 3. Wrapper Dependence — weight 10
- Is the product essentially interface + prompt + model?
- What does it own beyond model capability?
- If the model were removed, what infrastructure, assets, relationships, or proprietary value would remain?

### 4. Compounding Assets — weight 15
Look for assets that become more valuable with usage, such as:
- Proprietary data
- Long-term context
- Decision history
- Relationships or network effects
- Institutional knowledge
- Operational records
- Integrations
- Identity and permissions
- A system of record

If nothing meaningful compounds over time, treat that as a warning sign.

### 5. Workflow Depth — weight 15
Evaluate whether the product is a side tool or part of a real operating workflow.

A stronger pattern is:
**Input → Understanding → Decision → Execution → Follow-up → Recorded outcome**

The more real work, decisions, and execution flow through the product, the harder it is to absorb.

### 6. Replication Resistance — weight 10
Assume a capable team has access to the latest models and generative coding tools.

- How much could they reproduce in one week?
- What part would remain difficult to copy?
- Is there a real moat, or only a nicer interface and faster execution?

### 7. AI-Expanded Problem — weight 5
Do not ask only: **What can AI do?**

Also ask: **What new problem has AI adoption created or made significantly larger?**

A product solving a bottleneck that expands with AI adoption is usually more durable than one selling a capability the model itself can learn.

### 8. Model Independence — weight 5
- Can the model or provider be replaced without destroying product value?
- Is the model a replaceable supplier?
- Or is most of the value tied to one model capability or provider?

---

## Scoring

Score every test from **0 to 4**:

- **0** = extremely fragile / directly dependent on current model limitations
- **1** = weak defensibility
- **2** = mixed / uncertain
- **3** = strong defensibility
- **4** = very strong and benefits from AI progress

Calculate each weighted score as:

`weighted score = (score ÷ 4) × weight`

Add them for a total out of 100.

### Verdict thresholds
- **80–100** 🟢 Grows with AI
- **60–79** 🟡 Can survive, but needs a stronger moat or positioning
- **40–59** 🟠 At risk of absorption
- **0–39** 🔴 Likely to be absorbed

Do not use the number as a substitute for judgment; use it to make evaluations more consistent.

---

## Discussion Style

Do not give the final verdict immediately.

1. Summarize the idea in two lines.
2. Identify the two or three most important assumptions behind it.
3. Challenge the weaknesses one by one.
4. Ask questions only when the answer could materially change the judgment.
5. Clearly separate known facts from assumptions.

Stress-test the idea against:
- Rapid model improvement
- Model providers moving up the application stack
- Ease of replication
- Falling software development costs
- Standalone services becoming built-in features

At the same time, identify anything that could make the product stronger over time.

---

## Final Output

### Result
- **Score:** X/100
- **Verdict:** 🟢 / 🟡 / 🟠 / 🔴
- **Confidence:** low / medium / high

### Score table
For each test show: score out of 4, weight, weighted score, and a short reason.

### Why?
Exactly 3 points.

### What is likely to be absorbed?
Identify functions most likely to become generic built-in capabilities.

### What can be defended?
Identify data, workflow, network, relationships, or compounding assets that can be built.

### Best modification
Suggest one change that would make the product benefit from AI progress rather than fear it.

### Defensive path
Evaluate whether the product can move toward:
**Painkiller → Workflow → Compounding Asset → System of Record / System of Control**

### The decisive question
End with one question: if I cannot answer it convincingly, I probably should not build the product.

### Optional structured output
If I ask for `JSON`, return a result compatible with `schema/result.schema.json` and no prose outside the JSON object.

---

## Start

Here is the product idea:

**[Describe the product here]**

---

Licensed under the MIT License.