# Sieve and ManageSieve provider requirements

Sieve is the server-side mail-filter language.
ManageSieve is RFC 5804, the separate protocol for remotely managing Sieve scripts.

When a provider accepts Sieve files but has no ManageSieve endpoint, export rules locally with `olrx` or `tbrx`, then generate a script with `srtx`.
When a provider exposes ManageSieve, use `olrx run`, `tbrx run`, `srtx`, or `msieve` to preview and manage scripts remotely.

Sieve support alone does not prove ManageSieve availability.
Providers without Sieve support cannot run Transiever-generated rules.

mailbox.org and its Open-Xchange rule editor are validated.
Migadu, Purelymail, and self-hosted Dovecot/Pigeonhole are documented candidates that require account-specific verification.
