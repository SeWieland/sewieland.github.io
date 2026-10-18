# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Transiever serves two audiences equally:

- People moving supported classic Outlook rules or Thunderbird filters to server-side mail filtering.
  They need to check compatibility, choose a tool, and safely try the relevant workflow.
- Developers integrating Sieve generation, rule reconciliation, or direct ManageSieve operations into .NET applications.
  They need to choose the appropriate library and get started without learning unrelated tools.

These audiences need distinct entry paths with equal importance.

## Product Purpose

Help visitors decide whether Transiever fits their situation, choose the right tool or library, and complete a short, safe quickstart.
Success means reaching a concrete first result with the requirements, limitations, and effects understood.
Detailed API, CLI, compatibility, and operator documentation remains in the owning product repositories.

The personal homepage at `/` remains a neutral, deliberately minimal project index.
The Transiever website lives under `/transiever/`.

## Positioning

Transiever connects supported mail-client rules to server-side Sieve filtering and exposes the underlying rule and protocol capabilities to .NET developers.
Source adapters, the rules engine, and the protocol client have separate responsibilities; visitors should be able to choose the layer their task requires.

## Operating Context

- `olrx` exports supported classic Outlook receive rules and provides a guided synchronization workflow.
- The read-only `tbrx` beta exports supported Thunderbird filters and provides a guided synchronization workflow.
- `srtx` and SieveRuler handle JSON rule documents, Sieve generation, reconciliation, preview, deployment, and rollback.
- `msieve` and Transiever.ManageSieve provide direct ManageSieve operations without the higher-level rule or deployment policy.

Visitors may arrive directly at a task guide rather than through the homepage.
Each quickstart must therefore identify its prerequisites and installation path, label the shell or language, and distinguish inspection, changes, and recovery.
Copyable command sequences must form a coherent workflow and use consistent input and output paths.
Canonical product documentation owns the detailed contracts; website examples must agree with it.

## Capabilities and Constraints

Sieve support is required to run generated rules on a mail server.
ManageSieve is a separate protocol required for remote script management; Sieve support alone does not establish ManageSieve availability.
Local export and Sieve generation remain useful when a provider accepts script files without offering ManageSieve.

`olrx` requires configured classic Outlook for Windows.
`tbrx` is a Windows x64 and Linux x64 beta with a bounded compatibility scope; it never modifies Thunderbird data.
Unsupported rules must not be presented as losslessly convertible.
mailbox.org and its Open-Xchange editor are described as validated; other listed providers remain candidates to verify with the visitor's account.
Installation and platform claims must follow the owning repositories and distribution metadata.

The website is served as static files by GitHub Pages directly from `main`.
[Repository guidance](AGENTS.md) remains authoritative for technical and validation constraints.
Local theme-switching and copy-code scripts are permitted as progressive enhancements.
Core content and navigation must remain usable without JavaScript.

## Brand Commitments

Transiever is Sebastian Wieland's personal open-source hobby project.
Preserve its factual disclosure of AI-assisted development and human review.
Do not imply commercial support, broader compatibility, or validation that the project cannot substantiate.

## Evidence on Hand

- Existing landing and task pages under `transiever/`.
- Public source repositories, canonical documentation, package pages, and distribution repositories linked from those pages.
- Existing favicon and social-sharing assets under `assets/`.

Provider-validation claims are bounded evidence, not a guarantee for every account or configuration.

## Product Principles

1. Serve migration users and .NET developers equally without making either learn the other's workflow.
2. Make tool selection lead to a small, concrete first result.
3. Make prerequisites, limitations, and state-changing effects explicit before a visitor runs a command.
4. Keep quickstarts concise and detailed documentation with its canonical owner.
5. Prefer a lightweight website whose content and examples can be maintained accurately.
