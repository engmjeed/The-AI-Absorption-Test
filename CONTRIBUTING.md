# Contributing to The AI Absorption Test

شكراً لمساهمتك في تطوير **اختبار الابتلاع في عصر الذكاء الاصطناعي**.

This is an open framework for stress-testing whether products grow with AI progress or risk being absorbed by it.

## What you can contribute

You can help by proposing:

- stronger evaluation dimensions
- better scoring weights or rubrics
- real or archetypal worked examples
- translations
- clearer Arabic or English wording
- structured output improvements
- critiques of assumptions behind the framework

## Principles

Please keep contributions aligned with these principles:

1. **Model-agnostic** — do not tie the framework to one AI vendor or model.
2. **Product-focused** — evaluate the product's durable value, not how impressive its current AI implementation looks.
3. **Evidence-aware** — distinguish documented case studies from hypothetical or educational examples.
4. **Non-duplicative** — new tests should add a genuinely different dimension rather than restating absorption risk.
5. **Simple enough to use** — the framework should remain useful as a copy-paste prompt without requiring code or an API.
6. **Structured when possible** — changes should preserve compatibility with the scoring model and optional JSON output.

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

If you propose changing a weight, explain what behavior the new weighting improves and include at least one example showing the difference.

## Adding examples

Put examples under `/examples`.

A good example should include:

- a clear product archetype or documented real product
- assumptions used in the evaluation
- scores for all eight dimensions
- total score and verdict
- biggest absorption risk
- strongest defensible asset
- one recommended modification

If the example discusses a real company, cite reliable public sources and avoid reducing success or failure to a single cause unless evidence supports it.

## Adding translations

Translations should preserve the meaning of the framework rather than translate technical terms mechanically. Keep **The Absorption Rule / قاعدة الابتلاع** identifiable across languages.

## Pull requests

Keep pull requests focused. Explain:

- what changed
- why it improves the framework
- whether it changes scoring behavior
- whether JSON schema changes are required

By contributing, you agree that your contribution may be distributed under the project's MIT License.
