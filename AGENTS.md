# AGENTS.md

## Purpose

This repository is the minimal GitHub Pages index for Sebastian Wieland's projects.
The Transiever landing page lives under `/transiever/`.

## Constraints

Keep the site as plain static HTML and CSS published directly from `main`.
The existing local theme-switching and copy-code scripts are permitted as progressive enhancements.
Core content and navigation must work without JavaScript, and unavailable controls must remain hidden.
Do not add other JavaScript, a static-site generator, package manager, external fonts, analytics, cookies, or a custom deployment workflow unless explicitly requested.
Keep the root index neutral and deliberately minimal.
Detailed project documentation remains in the owning repositories.
Use [PRODUCT.md](PRODUCT.md) for the website's audience, purpose, and scope.

## Validation

Serve the repository root with a local static HTTP server.
Check `/`, `/transiever/`, and every task guide at desktop and narrow mobile widths, including 320px.
Verify keyboard focus, contrast, wrapping, external links, theme switching, copy feedback, and the no-JavaScript fallback.
Check quickstart examples against the owning repositories; keep inspection, deployment, and recovery commands separate.
