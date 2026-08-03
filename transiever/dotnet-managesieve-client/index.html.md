# ManageSieve client for .NET and C#

`Transiever.ManageSieve` is an async .NET 10 library for direct RFC 5804 ManageSieve operations: list, download, validate, upload, activate, deactivate, and delete server-side Sieve scripts.

```text
dotnet add package Transiever.ManageSieve
dotnet tool install --global Transiever.ManageSieve.Cli
```

The companion CLI package installs `msieve`.
The client supports TCP, STARTTLS, implicit TLS, capability-driven SASL authentication, and streaming protocol parsing.

Use this library when the application owns its Sieve policy.
Use SieveRuler when you also need rule models, generation, reconciliation, and deployment workflows.

See [NuGet](https://www.nuget.org/packages/Transiever.ManageSieve) and [source documentation](https://github.com/SeWieland/Transiever.ManageSieve).
