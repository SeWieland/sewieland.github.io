# ManageSieve command-line client

`msieve` is the direct, policy-neutral CLI for RFC 5804 ManageSieve.
It lists, downloads, validates, uploads, activates, deactivates, and deletes Sieve scripts.

```text
dotnet tool install --global Transiever.ManageSieve.Cli
msieve capabilities
msieve list
msieve check --file candidate.sieve
```

`msieve` defaults to required STARTTLS on port 4190 and refuses plaintext authentication.
It does not generate Sieve, reconcile rules, or create backups; use `srtx` for those workflows.

See [NuGet](https://www.nuget.org/packages/Transiever.ManageSieve.Cli) and [source documentation](https://github.com/SeWieland/Transiever.ManageSieve).
