# Governance

The AI Absorption Test is an open framework with a deliberately small and stable core.

## Maintainer

The repository maintainer is **@engmjeed**.

The maintainer is responsible for the canonical framework contract: scoring dimensions and weights, verdict bands, terminology, `SKILL.md`, structured output, and release versions.

## How changes enter the framework

Contributions are welcome through Pull Requests. Direct changes to `main` are not the normal contribution path.

A framework change should:

1. identify a real evaluation problem;
2. explain why the current framework does not already cover it;
3. show at least one example where the proposed change improves the result;
4. preserve canonical terminology or update `TERMINOLOGY.md` first;
5. update every affected artifact in the same Pull Request;
6. pass repository validation checks;
7. be reviewed by the maintainer before merge.

## High-impact changes

The following require explicit maintainer review and should be treated as framework-version changes when they alter behavior:

- scoring dimensions or weights;
- verdict thresholds or labels;
- canonical terminology;
- Survival Design principles;
- `SKILL.md` operating rules;
- JSON schema contracts;
- build-decision semantics.

Editorial fixes that do not change meaning may be merged without a version bump, but still require review.

## Main branch policy

`main` is the canonical published version of the framework.

For the current sole-maintainer repository, the intended policy is:

- direct pushes to `main` are blocked;
- every change enters through a Pull Request;
- the maintainer manually reviews and merges the Pull Request;
- required validation checks must pass before merge;
- unresolved review conversations block merge;
- force pushes and branch deletion are blocked;
- automatic merging is not used for framework changes;
- the maintainer retains administrative recovery access.

GitHub does not allow a Pull Request author to approve their own Pull Request. Therefore, while the repository has one maintainer, the merge action itself is the maintainer approval gate rather than requiring a numerical approval count.

If additional collaborators with write access are added later, enable at least one required approval and require Code Owner review so that core framework changes cannot merge without `@engmjeed` approval.

## Releases

Release notes belong in `CHANGELOG.md`. Behavioral changes should update the framework version consistently across `SKILL.md`, prompts, schema, terminology, and examples when applicable.

## Disagreements

The framework values clarity over expansion. When two proposals are reasonable, prefer the one that:

1. adds a distinct analytical mechanism;
2. is easier to apply consistently across products;
3. reduces unsupported assumptions;
4. keeps the framework usable by both humans and AI agents;
5. preserves backward compatibility where practical.

## License

Contributions are distributed under the repository's MIT License.