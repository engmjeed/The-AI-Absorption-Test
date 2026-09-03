# Contributing to The AI Absorption Test

شكراً لمساهمتك في تطوير **اختبار الابتلاع في عصر الذكاء الاصطناعي**.

This is an open framework for diagnosing product absorption risk and redesigning products around durable value.

## What you can contribute

- stronger evaluation dimensions
- better scoring anchors or weights
- improvements to the Absorption Principles
- worked examples and documented case studies
- translations
- Agent Skill improvements
- structured output/schema improvements
- critiques of assumptions behind the framework

## Contribution principles

1. **Model-agnostic** — do not tie the framework to one vendor or model.
2. **Product-focused** — evaluate durable product value, not how impressive the current AI implementation looks.
3. **Evidence-aware** — separate observed facts from assumptions and distinguish documented cases from archetypes.
4. **Non-duplicative** — new tests or principles must add a distinct mechanism.
5. **Current-state scoring** — never award present score for a future moat that has not been demonstrated.
6. **No double counting** — one advantage should not inflate multiple dimensions unless each score has a distinct causal reason.
7. **Simple enough to use** — the framework must remain useful as a copy-paste prompt without code.
8. **Structured when possible** — preserve compatibility between Full prompts, `SKILL.md`, scoring rubric, JSON schema, and examples.
9. **Terminology is canonical** — user-facing labels and verdicts must match `TERMINOLOGY.md`. Do not introduce synonyms or alternative Arabic translations in framework output.

## Canonical terminology

Read [TERMINOLOGY.md](./TERMINOLOGY.md) before changing prompts, examples, or translations.

In particular:
- `Absorption` is always **الابتلاع** in Arabic, never الامتصاص.
- Arabic wording should follow product-management meaning rather than literal translation.
- Machine-readable JSON IDs remain stable and are not user-facing labels.

## Current scoring model

The Full test uses eight dimensions totaling 100 points:

- Absorption Resistance / مقاومة الابتلاع — 20
- AI Progress Advantage / الاستفادة من تطور الذكاء الاصطناعي — 15
- Compounding Assets / الأصول التي تتراكم مع الاستخدام — 15
- Workflow Integration / الاندماج في سير العمل — 15
- Replication Difficulty / صعوبة التقليد — 10
- AI-Expanded Problem / هل تكبر المشكلة مع انتشار الذكاء الاصطناعي؟ — 10
- Model Independence / عدم الاعتماد على نموذج بعينه — 5
- Defensive Path / مسار بناء الحاجز التنافسي — 10

See [SCORING.md](./SCORING.md) for anchors.

## Fixed verdicts

These verdict labels are part of the public framework contract:

- 🟢 Grows with AI / **ينمو مع تطور الذكاء الاصطناعي**
- 🟡 Needs stronger defensibility / **يحتاج دفاعية أقوى**
- 🟠 At risk of absorption / **معرض للابتلاع**
- 🔴 Likely to be absorbed / **غالبًا سيُبتلع**

## Survival Design

A Full evaluation must continue after the score and cover the canonical sections in `TERMINOLOGY.md`, including what AI can replace, what remains hard to replace, where value moves, real-world operating state, workflow evolution, AI as a channel, time to moat, redesign recommendation, and build decision.

See [PRINCIPLES.md](./PRINCIPLES.md).

## Synchronization rule

If a change alters evaluation behavior, terminology, or output fields, update all affected artifacts in the same pull request:

- `TERMINOLOGY.md`
- `PROMPT_AR.md`
- `PROMPT_EN.md`
- `SKILL.md`
- `SCORING.md` or `PRINCIPLES.md` when relevant
- `schema/result.schema.json` if machine structure changes
- examples that display affected labels
- `README.md` when user-facing behavior changes

## Adding examples

Put examples under `/examples`.

A good Full example should include assumptions, scores for all eight dimensions, total score, fixed verdict, biggest absorption risk, strongest current defensible asset, Survival Design, and build decision. Use canonical terminology in tables and headings.

If an example discusses a real company, cite reliable public sources and avoid reducing success or failure to a single cause unless evidence supports it.

## Pull requests

Explain:
- what changed;
- why it improves the framework;
- whether scoring behavior changed;
- whether terminology, schema, or Skill behavior changed.

By contributing, you agree that your contribution may be distributed under the project's MIT License.
