# Generate and deploy Sieve rules from JSON in .NET

`Transiever.SieveRuler` models provider-neutral JSON mail rules, generates Sieve, reconciles existing scripts, and provides typed preview, deployment, rollback, and retained-history workflows.

```text
dotnet add package Transiever.SieveRuler
dotnet tool install --global Transiever.SieveRuler.Cli
```

The CLI package installs `srtx`.
Use `srtx generate` for a local Sieve file, then use preview and deployment commands only when your provider supports ManageSieve.

Use `Transiever.ManageSieve` instead when you need direct protocol operations without rule or deployment policy.

See [NuGet](https://www.nuget.org/packages/Transiever.SieveRuler) and [source documentation](https://github.com/SeWieland/Transiever.SieveRuler).
