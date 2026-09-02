# KUCHIKI — Project Documentation

Durable technical knowledge base for the KUCHIKI survey and data platform. Written from a
full reconnaissance pass over the codebase (read every application file, built the import
graph, ran a production build, ran the dev server, drove the UI in a browser).

## Index

| Document | What it covers |
|---|---|
| [ARCHITECTURE.md](ARCHITECTURE.md) | System shape, layers, routing, state, data access, execution flows |
| [DATA-MODEL.md](DATA-MODEL.md) | Firestore collections, document shapes, relationships, access patterns |
| [SECURITY-FINDINGS.md](SECURITY-FINDINGS.md) | Vulnerabilities with evidence, impact and mitigations |
| [TECH-DEBT.md](TECH-DEBT.md) | Maintainability issues, dead code, duplication, performance |
| [ROADMAP.md](ROADMAP.md) | Prioritised recommendations, CRITICAL → OPTIONAL |
| [DEVELOPMENT.md](DEVELOPMENT.md) | How to run the project locally |

## Evidence labels

Every non-obvious claim in these documents carries one of:

- **VERIFIED** — directly observed in source code or in runtime behaviour.
- **INFERRED** — strongly suggested by the implementation, not directly confirmed.
- **UNKNOWN** — could not be established from the repository.

Claims are anchored to `file:line` wherever possible. If you find a claim that has drifted
from the code, fix the document in the same change as the code.

## Maintenance rule

These documents are the project's memory. Before implementing a change, read the relevant
sections; after changing behaviour, update them in the same commit. Do not let them rot into
a description of a system that no longer exists.

---

Last full reconnaissance: 2026-08-22, against commit `abf29f2`.
