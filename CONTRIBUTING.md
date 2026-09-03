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

## Current scoring model

The Full test uses eight dimensions totaling 100 points:

- Absorption resistance — 20
- AI growth alignment — 15
- Compounding assets — 15
- Workflow depth — 15
- Replication resistance — 10
- AI-created problem tailwind — 10
- Model independence — 5
- Defensive path — 10

See [SCORING.md](./SCORING.md) for anchors.

## Survival Design

A Full evaluation must continue after the score and cover:

- absorbable shell
- defensible core
- value migration
- reality anchor
- workflow evolution
- AI distribution path
- time to moat
- redesign recommendation
- build decision

See [PRINCIPLES.md](./PRINCIPLES.md).

## Synchronization rule

If a change alters evaluation behavior or output fields, update all affected artifacts in the same pull request:

- `PROMPT_AR.md`
- `PROMPT_EN.md`
- `SKILL.md`
- `SCORING.md` or `PRINCIPLES.md` when relevant
- `schema/result.schema.json`
- `examples/result.example.json`
- `README.md` when user-facing behavior changes

## Adding examples

Put examples under `/examples`.

A good Full example should include assumptions, scores for all eight dimensions, total score, verdict, biggest absorption risk, strongest current defensible asset, Survival Design, and build decision.

If an example discusses a real company, cite reliable public sources and avoid reducing success or failure to a single cause unless evidence supports it.

## Pull requests

Explain:
- what changed;
- why it improves the framework;
- whether scoring behavior changed;
- whether schema or Skill behavior changed.

By contributing, you agree that your contribution may be distributed under the project's MIT License.
