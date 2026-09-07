# Blueprint Platform Stress Suite

Reusable planning and documentation templates for validating platform blueprints
before they are adopted by a repository.

## Contents

- [`plugins/blueprint-stress-suite/`](plugins/blueprint-stress-suite/) contains
  the plugin guidance, decision log, and templates.
- [`plugins/blueprint-stress-suite/templates/README_TEMPLATE.md`](plugins/blueprint-stress-suite/templates/README_TEMPLATE.md)
  is a starter README for a blueprint.
- [`plugins/blueprint-stress-suite/templates/repo-invariants.md`](plugins/blueprint-stress-suite/templates/repo-invariants.md)
  records repository constraints that a blueprint must preserve.

## Usage

Copy the templates into the blueprint or repository being evaluated, complete
the bracketed sections, and review the decision log before implementation.

The project has no runtime dependencies. Run the local checks with:

```sh
npm test
```