# AI Product Survival Test

**A framework to test whether a product grows with AI — or gets absorbed by it.**

> قبل أن تبني أي منتج، اسأل: هل ستزداد الحاجة إليه كلما تطور الذكاء الاصطناعي، أم أن تطوره سيبتلعه ويحوّل ما يقدمه إلى ميزة رخيصة داخل النموذج؟

AI is making software cheaper to build and models more capable every month. A product can solve a real problem today and still be structurally fragile if its main value is simply a capability that general AI systems are likely to absorb.

This repository provides a practical framework for stress-testing product ideas before spending months building them.

**No API required.** Copy a prompt into ChatGPT, Claude, Gemini, or another capable model, paste your product idea, and start the discussion.

## The core idea: The Absorption Rule

Ask one question before building:

> **If AI becomes 10× smarter, faster, and cheaper, does this product become more valuable — or less necessary?**

The goal is not to predict which model provider will ship which feature. The goal is to identify products whose value compounds with AI progress instead of depending on today's model limitations.

## What the framework tests

The full test scores eight dimensions:

| Dimension | Weight |
|---|---:|
| Absorption Resistance | 25 |
| AI Tailwind | 15 |
| Wrapper Dependence | 10 |
| Compounding Assets | 15 |
| Workflow Depth | 15 |
| Replication Resistance | 10 |
| AI-Expanded Problem | 5 |
| Model Independence | 5 |
| **Total** | **100** |

Each dimension is scored from 0–4, then converted to its weighted contribution.

### Verdicts

| Score | Verdict |
|---:|---|
| 80–100 | 🟢 Grows with AI |
| 60–79 | 🟡 Can survive, but needs a stronger moat or positioning |
| 40–59 | 🟠 At risk of absorption |
| 0–39 | 🔴 Likely to be absorbed |

The score is not meant to replace judgment. It exists to make repeated evaluations more consistent and comparable.

## Quick start

### Full version

- Arabic: [`PROMPT_AR.md`](./PROMPT_AR.md)
- English: [`PROMPT_EN.md`](./PROMPT_EN.md)

Copy the entire prompt, paste it into your preferred AI assistant, then replace the final placeholder with your product idea.

### Lite version

Want a two-minute stress test instead of the full framework?

- Arabic: [`LITE_AR.md`](./LITE_AR.md)
- English: [`LITE_EN.md`](./LITE_EN.md)

The Lite version asks only three questions: **Will AI absorb it? What compounds? Does AI growth help it?**

## Structured output

For programmatic use, ask the model to return JSON and validate the result against:

[`schema/result.schema.json`](./schema/result.schema.json)

This makes evaluations easier to store, compare, visualize, or later expose through an API without changing the underlying framework.

## Examples

The examples are illustrative product archetypes rather than claims that a specific company succeeded or failed because of this framework.

- [`examples/01-ai-writing-wrapper.md`](./examples/01-ai-writing-wrapper.md) — high absorption risk
- [`examples/02-meeting-intelligence.md`](./examples/02-meeting-intelligence.md) — mixed / depends on workflow depth
- [`examples/03-vertical-compliance-workflow.md`](./examples/03-vertical-compliance-workflow.md) — stronger defensive structure

## A simple before / after

**Weak framing:**

> “AI writes better sales emails for you.”

If general models can already generate excellent sales emails, the core value may become a built-in feature.

**Stronger framing:**

> “A sales operating system that learns account history, enforces approval rules, executes outreach across channels, records outcomes, and improves from the organization’s proprietary data.”

The second product still uses AI, but its value is increasingly in **workflow, context, proprietary data, permissions, execution, and accumulated history**.

## Defensive path

A durable AI product often moves in this direction:

**Painkiller → Workflow → Compounding Asset → System of Record / System of Control**

The model is a capability. The product should own something that survives model improvement.

## Contributing

Contributions are welcome: better scoring rubrics, new tests, translations, examples, or critiques of the framework.

See [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## License

MIT License. See [`LICENSE`](./LICENSE).
