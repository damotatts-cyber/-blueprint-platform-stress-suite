# Repository invariants

Use this checklist to capture constraints that the blueprint must preserve.

## Structure and tooling

- [ ] Required directories and entry points remain available.
- [ ] Existing package manager and supported runtime are unchanged.
- [ ] Existing build, lint, and test commands continue to work.

## Interfaces and data

- [ ] Public APIs, CLI flags, and configuration names are documented.
- [ ] Persisted data and migration or rollback behavior are defined.
- [ ] Backward compatibility requirements are recorded.

## Security and operations

- [ ] Secrets are supplied through the approved environment or secret store.
- [ ] Permissions follow least privilege.
- [ ] Failure, retry, timeout, and recovery behavior is observable.

## Validation notes

- **Repository / revision:** [Name and revision]
- **Reviewer:** [Name or team]
- **Date:** [YYYY-MM-DD]
- **Exceptions:** [None, or link to the decision log]
