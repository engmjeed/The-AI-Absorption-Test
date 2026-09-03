# The AI Absorption Test

**اختبار الابتلاع في عصر الذكاء الاصطناعي**

> Will your product grow as AI improves — or will AI absorb it?
>
> هل سينمو منتجك مع تطور الذكاء الاصطناعي، أم أن هذا التطور سيبتلعه؟

The AI Absorption Test is an open-source framework for stress-testing product ideas against rapid AI progress **and redesigning them around what AI cannot easily commoditize**.

## The core rule — قاعدة الابتلاع

> If AI models become 10× smarter, faster, and cheaper, does this product become more valuable — or less necessary?

The framework is model-agnostic. It does not try to predict which vendor ships which feature. It asks whether the product owns durable value outside generic model capability.

## v0.2: Diagnose → Redesign

The framework now has two stages:

### 1. Absorption Diagnosis
Score the current product across eight weighted dimensions for a result out of 100.

### 2. Survival Design
Do not stop at the score. Identify:
- what AI will commoditize;
- what should become the defensible core;
- where value moves after absorption;
- what anchors the product to real-world state;
- how episodic usage becomes a recurring workflow;
- how AI can become a distribution/execution channel;
- how long it takes to create the first real moat;
- what structural redesign should happen before or during build.

Read [The Absorption Principles](./PRINCIPLES.md).

## Full scoring model

| Dimension | Weight |
|---|---:|
| Absorption resistance | 20 |
| AI growth alignment | 15 |
| Compounding assets | 15 |
| Workflow depth | 15 |
| Replication resistance | 10 |
| AI-created problem tailwind | 10 |
| Model independence | 5 |
| Defensive path | 10 |
| **Total** | **100** |

Detailed dimension anchors: [SCORING.md](./SCORING.md)

### Verdict bands

| Score | Verdict |
|---|---|
| 80–100 | 🟢 Grows with AI |
| 60–79.9 | 🟡 Can survive, but needs stronger defensibility |
| 40–59.9 | 🟠 At risk of absorption |
| 0–39.9 | 🔴 Likely to be absorbed |

The score diagnoses the **current product**. A future moat is not counted until it exists or has a demonstrated mechanism.

## Choose your test

### ⚡ Lite — 3 questions
Fast first-pass discussion. No artificial 100-point score.

- [العربية — Lite](./LITE_AR.md)
- [English — Lite](./LITE_EN.md)

### 🔬 Full — 8 dimensions + Survival Design

- [العربية — Full Prompt](./PROMPT_AR.md)
- [English — Full Prompt](./PROMPT_EN.md)

## Agent Skill

Want to give the framework directly to an AI agent?

Use [`SKILL.md`](./SKILL.md). It is self-contained and includes the scoring rules, evidence discipline, Survival Design, build decision, JSON mode, and this repository as the canonical source.

Copy it into your agent's skill directory as:

`ai-absorption-test/SKILL.md`

Raw file:

https://raw.githubusercontent.com/engmjeed/ai-product-survival-test/main/SKILL.md

## The Absorption Principles

v0.2 adds seven product-design principles:

1. **Value Migration** — follow value after a feature becomes cheap.
2. **Own the Source, Not the Interface** — authoritative state beats screen ownership.
3. **Reality Anchor** — connect value to legitimate real-world state and consequences.
4. **Episodic → Workflow** — move from one-shot output into a recurring operating loop.
5. **AI as a Channel** — become infrastructure AI uses, not only an interface competing with AI.
6. **Time to Moat** — a future moat is a hypothesis, not present defensibility.
7. **Absorbable Shell / Defensible Core** — let AI commoditize the shell; invest in the core.

Full definitions: [PRINCIPLES.md](./PRINCIPLES.md)

## Structured output

For tools, evaluators, databases, and APIs:

- [JSON Schema](./schema/result.schema.json)
- [JSON Example](./examples/result.example.json)

The v0.2 schema includes both the numerical diagnosis and the `survival_design` object.

## Examples

See [`/examples`](./examples) for worked product archetypes. Examples are educational unless explicitly documented as real-world case studies.

## What this framework does not measure

This score is **not** a PMF score, market-size score, unit-economics score, or UX score. A product can be highly defensible and still be a bad business, or be commercially successful for a period while remaining structurally absorbable.

## Core principle

> **AI progress should increase your product's value faster than it reduces the need for your product.**

And after diagnosis:

> **Do not ask only what AI will absorb. Ask what your product should become afterward.**

## Contributing

The framework is open to criticism and improvement. Read [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

MIT License. Free to use, copy, modify, translate, and improve.
