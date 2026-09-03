# The AI Absorption Test

**اختبار الابتلاع في عصر الذكاء الاصطناعي**

> Will your product grow as AI improves — or will AI absorb it?
>
> هل سينمو منتجك مع تطور الذكاء الاصطناعي، أم أن هذا التطور سيبتلعه؟

The AI Absorption Test is an open-source framework for stress-testing product ideas against rapid AI progress before you spend months building them.

الفكرة بسيطة: كثير من الخدمات التي يمكن بيعها اليوم كمنتج مستقل قد تتحول غدًا إلى قدرة رخيصة ومدمجة داخل نموذج أو منصة ذكاء اصطناعي. هذا الإطار يساعدك على معرفة هل منتجك **ينمو مع AI** أم يعيش على **عجز مؤقت في النماذج الحالية**.

## The Absorption Rule — قاعدة الابتلاع

**Before building a product, ask:**

> If AI models become 10× smarter, faster, and cheaper, does this product become more valuable — or less necessary?

**قبل أن تبني منتجًا، اسأل:**

> إذا أصبحت النماذج أذكى وأسرع وأرخص بعشرة أضعاف، هل تزداد قيمة المنتج أم تقل الحاجة إليه؟

## Why this exists

AI is moving up the application stack. Features that once required a standalone SaaS product, workflow tool, or agent can increasingly become native model capabilities.

The goal is not to predict which company will ship which feature. The goal is to identify whether your product owns something that compounds beyond the model itself:

- proprietary data
- workflow position
- decision history
- integrations
- identity and permissions
- network effects
- institutional context
- system-of-record or system-of-control value

## Choose your test

### ⚡ Lite — 3 questions
Use this for a fast discussion before you build.

- [العربية — Lite](./LITE_AR.md)
- [English — Lite](./LITE_EN.md)

### 🔬 Full — 8 dimensions / 100 points
Use this for serious product evaluation.

- [العربية — Full Prompt](./PROMPT_AR.md)
- [English — Full Prompt](./PROMPT_EN.md)

The full test scores the product across eight weighted dimensions:

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

### Verdict bands

| Score | Verdict |
|---|---|
| 80–100 | 🟢 Grows with AI |
| 60–79.9 | 🟡 Can survive, but needs a stronger moat or positioning |
| 40–59.9 | 🟠 At risk of absorption |
| 0–39.9 | 🔴 Likely to be absorbed |

## How to use it

1. Open ChatGPT, Claude, Gemini, or another capable model.
2. Copy the Lite or Full prompt.
3. Paste your product idea at the end.
4. Debate the assumptions instead of accepting the first score.
5. Re-run the test after changing the product positioning or moat.

No API is required.

## Examples

See [`/examples`](./examples) for worked examples that show how the framework evaluates different product archetypes — from a thin AI wrapper to a deeply embedded vertical workflow.

These examples are educational product archetypes, not claims that a specific real-world company succeeded or failed for one reason.

## Structured output

Want to build this into a tool, database, evaluator, or API later?

Use the optional JSON output format defined in:

- [`schema/result.schema.json`](./schema/result.schema.json)
- [`schema/result.example.json`](./schema/result.example.json)

The prompt still works perfectly as a copy-paste framework without any code.

## Core principle

The safest AI-era product is not merely one that **uses AI**.

It is one where:

> **AI progress increases the product's value faster than it reduces the need for the product.**

Or more simply:

> **Grow with AI — don't build on a capability AI is about to absorb.**

## Contributing

This is an open framework. The tests, weights, examples, translations, and scoring rubric should improve through criticism and use.

Read [CONTRIBUTING.md](./CONTRIBUTING.md) before proposing changes.

## License

MIT License. Free to use, copy, modify, translate, and improve.
