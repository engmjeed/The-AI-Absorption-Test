# Scoring Rubric
## The AI Absorption Test — v0.2.1

The Full test uses eight weighted dimensions totaling 100 points.

Weighted score = `(dimension score / 4) × weight`.

Use integers from **0 to 4**. Scores 1 and 3 represent positions between the anchors below.

Canonical user-facing terminology is defined in [TERMINOLOGY.md](./TERMINOLOGY.md). Use those labels exactly.

## Scoring discipline

1. **Score the current product, not an imagined future moat.**
2. **Do not double-count one advantage across multiple dimensions without a distinct reason.**
3. **UI, prompts, model access, and generic automation are not durable moats by themselves.**
4. **Distribution, community, data, or network effects count only when they exist or have a concrete mechanism for compounding.**
5. **Unknown evidence lowers confidence; it does not automatically justify a high or neutral score.**
6. Distinguish **observed facts** from **assumptions** in the final report.

## 1. Absorption Resistance — مقاومة الابتلاع — weight 20

| Score | Anchor |
|---|---|
| 0 | The core value can plausibly become a generic model capability; little remains outside the model. |
| 2 | Some value survives in context, workflow, data, or execution, but the main feature is still vulnerable. |
| 4 | AI may replace the interface or feature, but cannot reproduce the product's authoritative state, workflow position, execution rights, or network. |

## 2. AI Progress Advantage — الاستفادة من تطور الذكاء الاصطناعي — weight 15

| Score | Anchor |
|---|---|
| 0 | Better AI directly reduces demand or makes the product less necessary. |
| 2 | AI progress has mixed or uncertain effects. |
| 4 | AI progress structurally increases demand, product value, data, transactions, or the size of the problem solved. |

## 3. Compounding Assets — الأصول التي تتراكم مع الاستخدام — weight 15

| Score | Anchor |
|---|---|
| 0 | Nothing important accumulates with use. |
| 2 | Useful context or data accumulates, but it is portable, reproducible, or non-essential. |
| 4 | Every use strengthens an asset central to customer value that a new competitor cannot recreate quickly. |

## 4. Workflow Integration — الاندماج في سير العمل — weight 15

| Score | Anchor |
|---|---|
| 0 | One-shot output or optional side tool. |
| 2 | Recurring use, but not a critical system in the operating loop. |
| 4 | The product is a system of record/control or a critical execution layer with meaningful switching cost. |

## 5. Replication Difficulty — صعوبة التقليد — weight 10

| Score | Anchor |
|---|---|
| 0 | A capable team can reproduce nearly all meaningful value in days. |
| 2 | Product features are copyable, but integrations, context, or distribution create some friction. |
| 4 | Core value depends on cumulative data, distribution, relationships, regulation, network effects, or operational infrastructure that cannot be copied quickly. |

## 6. AI-Expanded Problem — هل تكبر المشكلة مع انتشار الذكاء الاصطناعي؟ — weight 10

| Score | Anchor |
|---|---|
| 0 | AI success shrinks or removes the underlying problem. |
| 2 | The effect is neutral or unclear. |
| 4 | AI adoption itself creates or scales the problem the product solves. |

## 7. Model Independence — عدم الاعتماد على نموذج بعينه — weight 5

| Score | Anchor |
|---|---|
| 0 | One model capability or provider is effectively the entire product. |
| 2 | Models are replaceable only with meaningful degradation or rework. |
| 4 | Models are commodity suppliers; the core product value exists independently of any one model or provider. |

## 8. Defensive Path — مسار بناء الحاجز التنافسي — weight 10

Evaluate:

**Painkiller → Workflow → Compounding Asset → System of Record / System of Control**

| Score | Anchor |
|---|---|
| 0 | No credible path beyond the initial feature. |
| 2 | A plausible path exists, but depends on multiple unvalidated assumptions. |
| 4 | The product already owns or has a demonstrated mechanism to reach workflow, compounding assets, and record/control value. |

## Fixed verdicts

| Score | Machine value | English | العربية الرسمية |
|---|---|---|---|
| 80–100 | `grows_with_ai` | 🟢 Grows with AI | 🟢 ينمو مع تطور الذكاء الاصطناعي |
| 60–79.9 | `needs_stronger_defensibility` | 🟡 Needs stronger defensibility | 🟡 يحتاج دفاعية أقوى |
| 40–59.9 | `at_risk_of_absorption` | 🟠 At risk of absorption | 🟠 معرض للابتلاع |
| 0–39.9 | `likely_to_be_absorbed` | 🔴 Likely to be absorbed | 🔴 غالبًا سيُبتلع |

The score improves consistency. It is not mathematical certainty.
