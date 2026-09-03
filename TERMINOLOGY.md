# Canonical Terminology
## The AI Absorption Test — v0.2.1

This file is the language source of truth for the framework.

The goal is not literal translation. The Arabic terms should read like product-management and company-building language while preserving the exact analytical meaning of the English framework.

## Terminology rules

1. Use the canonical labels below in headings, score tables, verdicts, prompts, examples, and agent output.
2. Do not replace canonical labels with synonyms, creative translations, or jargon.
3. In Arabic, **Absorption** is always **الابتلاع**. Do not use الامتصاص.
4. Arabic labels may be semantic rather than literal translations when that makes the product concept clearer.
5. In Arabic reports, use the Arabic label as written below. English may appear in parentheses on first mention only when useful.
6. Machine-readable IDs in JSON are stable technical identifiers. They are not user-facing terminology and should not be translated or displayed as headings.

## Scoring dimensions

| # | Canonical English | العربية الرسمية | Weight |
|---|---|---|---:|
| 1 | **Absorption Resistance** | **مقاومة الابتلاع** | 20 |
| 2 | **AI Progress Advantage** | **الاستفادة من تطور الذكاء الاصطناعي** | 15 |
| 3 | **Compounding Assets** | **الأصول التي تتراكم مع الاستخدام** | 15 |
| 4 | **Workflow Integration** | **الاندماج في سير العمل** | 15 |
| 5 | **Replication Difficulty** | **صعوبة التقليد** | 10 |
| 6 | **AI-Expanded Problem** | **هل تكبر المشكلة مع انتشار الذكاء الاصطناعي؟** | 10 |
| 7 | **Model Independence** | **عدم الاعتماد على نموذج بعينه** | 5 |
| 8 | **Defensive Path** | **مسار بناء الحاجز التنافسي** | 10 |

## Survival Design terms

| Canonical English | العربية الرسمية |
|---|---|
| **Survival Design** | **إعادة تصميم المنتج للبقاء** |
| **Absorbable Shell** | **ما الذي يمكن للذكاء الاصطناعي استبداله؟** |
| **Defensible Core** | **ما الذي يصعب استبداله؟** |
| **Value Migration** | **أين تنتقل القيمة؟** |
| **Own the Source, Not the Interface** | **امتلك المصدر لا الواجهة** |
| **Reality Anchor** | **الارتباط بواقع تشغيلي** |
| **Workflow Evolution** | **من استخدام عابر إلى سير عمل مستمر** |
| **AI as a Channel** | **الذكاء الاصطناعي كقناة وصول** |
| **Time to Moat** | **الوقت اللازم لبناء حاجز تنافسي** |
| **Redesign Recommendation** | **إعادة تصميم المنتج للبقاء** |
| **Build Decision** | **قرار البناء** |
| **Decisive Question** | **السؤال الحاسم** |

## Fixed verdicts

These four verdict labels are fixed and must be used exactly.

| Score | Machine value | English verdict | الحكم العربي الرسمي |
|---|---|---|---|
| 80–100 | `grows_with_ai` | **Grows with AI** | **ينمو مع تطور الذكاء الاصطناعي** |
| 60–79.9 | `needs_stronger_defensibility` | **Needs stronger defensibility** | **يحتاج دفاعية أقوى** |
| 40–59.9 | `at_risk_of_absorption` | **At risk of absorption** | **معرض للابتلاع** |
| 0–39.9 | `likely_to_be_absorbed` | **Likely to be absorbed** | **غالبًا سيُبتلع** |

## Terms to avoid in Arabic output

Avoid inconsistent or literal alternatives such as:

- الامتصاص when referring to framework Absorption → use **الابتلاع**
- رياح الذكاء الاصطناعي / رياح AI → use **الاستفادة من تطور الذكاء الاصطناعي** or **هل تكبر المشكلة مع انتشار الذكاء الاصطناعي؟** depending on the dimension
- مقاومة النسخ → use **صعوبة التقليد**
- عمق سير العمل → use **الاندماج في سير العمل**
- استقلالية النموذج → use **عدم الاعتماد على نموذج بعينه**
- مرساة الواقع → use **الارتباط بواقع تشغيلي**
- القشرة القابلة للابتلاع → use **ما الذي يمكن للذكاء الاصطناعي استبداله؟**
- النواة الدفاعية → use **ما الذي يصعب استبداله؟**
- الزمن حتى الـMoat → use **الوقت اللازم لبناء حاجز تنافسي**
- تصميم النجاة → use **إعادة تصميم المنتج للبقاء**

## Consistency rule for contributors and agents

If a new term is introduced, add it here first. Then update every affected prompt, skill, scoring document, example, and schema description in the same change.

Canonical repository: https://github.com/engmjeed/ai-product-survival-test
