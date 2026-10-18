# Generate Sieve rules in .NET

`Transiever.SieveRuler` models provider-neutral rules, renders Sieve, and provides reconciliation and deployment workflows.

## Create an application

Requires the .NET 10 SDK.

```shell
dotnet new console --framework net10.0 --name SieveRulerQuickstart
cd SieveRulerQuickstart
dotnet add package Transiever.SieveRuler
```

Replace `Program.cs` with:

```csharp
using Transiever.SieveRuler.Models;
using Transiever.SieveRuler.Services;

RuleDefinition rule = new()
{
    Name = "Newsletters",
    TargetFolder = "INBOX/Newsletters",
    Conditions =
    [
        new() { Type = RuleConditionType.SubjectContains, Values = ["newsletter"] }
    ]
};

string sieve = new SieveGenerator().Generate([rule]);
Console.WriteLine(sieve);
```

Run from the project directory:

```shell
dotnet run
```

The example prints a script containing a subject test and a `fileinto` action.
It needs no credentials or server connection.
Before deployment, adjust the example folder to your provider's naming and check support for `fileinto`.

## Use the srtx CLI instead

Obtain a v1 JSON rules document from an Outlook or Thunderbird export, or author one using the [schema](https://github.com/SeWieland/Transiever.SieveRuler/blob/main/schemas/sieveruler.rules.schema.json).
Save a copy as `rules.json` in a new working directory first.

```shell
dotnet tool install --global Transiever.SieveRuler.Cli
srtx inspect --rules rules.json
srtx generate --rules rules.json --sieve rules.sieve
```

This writes `rules.sieve` locally without changing server rules.

See the [library reference](https://github.com/SeWieland/Transiever.SieveRuler/blob/main/src/Transiever.SieveRuler/README.md) and [CLI guide](https://github.com/SeWieland/Transiever.SieveRuler/blob/main/src/Transiever.SieveRuler.Cli/README.md).
Remote preview and deployment require ManageSieve support and connection configuration; deployment is a separate state-changing step.
Use [Transiever.ManageSieve](https://sewieland.github.io/transiever/dotnet-managesieve-client/) for direct protocol operations.
