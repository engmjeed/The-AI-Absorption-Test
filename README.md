# The AI Absorption Test

**اختبار الابتلاع في عصر الذكاء الاصطناعي**

> Will your product grow as AI improves — or will AI absorb it?
>
> هل سينمو منتجك مع تطور الذكاء الاصطناعي، أم أن هذا التطور سيبتلعه؟

The AI Absorption Test is an open-source framework for stress-testing product ideas against rapid AI progress **and redesigning them around what AI cannot easily commoditize**.

## The core rule — قاعدة الابتلاع

> If AI models become 10× smarter, faster, and cheaper, does this product become more valuable — or less necessary?

The framework is model-agnostic. It does not try to predict which vendor ships which feature. It asks whether the product owns durable value outside generic model capability.

## v0.2.1: Canonical terminology

The framework uses one fixed set of English and Arabic product terms. Arabic labels are written for product-management clarity rather than literal translation.

Read [TERMINOLOGY.md](./TERMINOLOGY.md). Agents and contributors must use those labels exactly in headings, score tables, and verdicts.

## Diagnose → Redesign

The framework has two stages:

### 1. Absorption Diagnosis
Score the current product across eight weighted dimensions for a result out of 100.

### 2. Survival Design — إعادة تصميم المنتج للبقاء
Do not stop at the score. Identify what AI can replace, what remains hard to replace, where value moves, the product's real-world operating anchor, how it becomes recurring workflow, how AI becomes a channel, and how long it takes to build a real competitive barrier.

Read [The Absorption Principles](./PRINCIPLES.md).

## Full scoring model

| Canonical English | العربية الرسمية | Weight |
|---|---|---:|
| Absorption Resistance | مقاومة الابتلاع | 20 |
| AI Progress Advantage | الاستفادة من تطور الذكاء الاصطناعي | 15 |
| Compounding Assets | الأصول التي تتراكم مع الاستخدام | 15 |
| Workflow Integration | الاندماج في سير العمل | 15 |
| Replication Difficulty | صعوبة التقليد | 10 |
| AI-Expanded Problem | هل تكبر المشكلة مع انتشار الذكاء الاصطناعي؟ | 10 |
| Model Independence | عدم الاعتماد على نموذج بعينه | 5 |
| Defensive Path | مسار بناء الحاجز التنافسي | 10 |
| **Total** | **المجموع** | **100** |

Detailed dimension anchors: [SCORING.md](./SCORING.md)

### Fixed verdicts

| Score | English | العربية الرسمية |
|---|---|---|
| 80–100 | 🟢 Grows with AI | 🟢 ينمو مع تطور الذكاء الاصطناعي |
| 60–79.9 | 🟡 Needs stronger defensibility | 🟡 يحتاج دفاعية أقوى |
| 40–59.9 | 🟠 At risk of absorption | 🟠 معرض للابتلاع |
| 0–39.9 | 🔴 Likely to be absorbed | 🔴 غالبًا سيُبتلع |

These labels are fixed. Do not replace them with synonyms in reports.

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

Use [`SKILL.md`](./SKILL.md). It is self-contained and includes the scoring rules, canonical terminology, evidence discipline, Survival Design, build decision, JSON mode, and this repository as the canonical source.

Raw file:

https://raw.githubusercontent.com/engmjeed/ai-product-survival-test/main/SKILL.md

## The Absorption Principles

The product-design principles include:

1. **Value Migration** — أين تنتقل القيمة؟
2. **Own the Source, Not the Interface** — امتلك المصدر لا الواجهة.
3. **Reality Anchor** — الارتباط بواقع تشغيلي.
4. **Workflow Evolution** — من استخدام عابر إلى سير عمل مستمر.
5. **AI as a Channel** — الذكاء الاصطناعي كقناة وصول.
6. **Time to Moat** — الوقت اللازم لبناء حاجز تنافسي.
7. **Absorbable Shell / Defensible Core** — ما الذي يمكن للذكاء الاصطناعي استبداله؟ وما الذي يصعب استبداله؟

Full definitions: [PRINCIPLES.md](./PRINCIPLES.md)

## Structured output

For tools, evaluators, databases, and APIs:

- [JSON Schema](./schema/result.schema.json)
- [JSON Example](./examples/result.example.json)

Machine-readable IDs remain stable even when user-facing terminology is improved. Do not display technical IDs as report labels.

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
