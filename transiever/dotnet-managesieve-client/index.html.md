# ManageSieve client for .NET and C#

`Transiever.ManageSieve` provides direct RFC 5804 protocol operations.

## Create an application

Requires the .NET 10 SDK.

```shell
dotnet new console --framework net10.0 --name ManageSieveQuickstart
cd ManageSieveQuickstart
dotnet add package Transiever.ManageSieve
```

Replace `Program.cs` with:

```csharp
using Transiever.ManageSieve;

ManageSieveClientOptions options = new()
{
    Host = "sieve.example.com"
};

await using IManageSieveClient client =
    new ManageSieveClientFactory().CreateClient(options);
await client.ConnectAsync();
await client.StartTlsAsync();
ManageSieveCapabilities capabilities = await client.RefreshCapabilitiesAsync();
Console.WriteLine(string.Join(", ", capabilities.SieveExtensions));
```

Run from the project directory:

```shell
dotnet run
```

Replace the host with your provider's ManageSieve endpoint.
The example uses required STARTTLS on port 4190 and normal platform certificate validation.
It prints advertised Sieve extensions without authenticating or changing scripts.

See the [library reference](https://github.com/SeWieland/Transiever.ManageSieve/blob/main/src/Transiever.ManageSieve/README.md) and [authentication guide](https://github.com/SeWieland/Transiever.ManageSieve/blob/main/docs/authentication.md) for script operations.
Use [SieveRuler](https://sewieland.github.io/transiever/dotnet-sieve-rules/) for rule models and deployment policy, or [msieve](https://sewieland.github.io/transiever/managesieve-cli/) for a CLI.
