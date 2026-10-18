# ManageSieve command-line client

`msieve` is the direct, policy-neutral CLI for RFC 5804 ManageSieve.
It inspects and manages scripts; it does not generate Sieve, reconcile rules, or create backups.

## Install

Choose one method.
Install the global tool with the .NET 10 SDK, which includes the runtime needed to run it.
Scoop and Homebrew builds are self-contained.

```shell
dotnet tool install --global Transiever.ManageSieve.Cli
```

Windows with Scoop; add the bucket once:

```powershell
scoop bucket add transiever https://github.com/SeWieland/Transiever.ScoopBucket
scoop install transiever/msieve
```

Linux x64 with Homebrew:

```bash
brew install SeWieland/transiever/msieve
```

## Inspect first

Replace the example host with the provider's ManageSieve endpoint.
This uses required STARTTLS on port 4190 by default and does not authenticate or change scripts.

```shell
msieve capabilities --sieve-host sieve.example.com
```

To list scripts, replace the username too.
An interactive terminal prompts for a missing password without echoing it.

```shell
msieve list --sieve-host sieve.example.com --sieve-username user@example.com
```

`check --file candidate.sieve` with connection options validates a local script without uploading or activating it.
`put` uploads a script; adding `--activate` also makes it active.
`deactivate` disables active Sieve processing.
These are separate operations, not a sequence to paste after inspection.

See the [canonical CLI guide](https://github.com/SeWieland/Transiever.ManageSieve/blob/main/src/Transiever.ManageSieve.Cli/README.md) for authentication, connection options, and state-changing commands.
Use [SieveRuler and srtx](https://sewieland.github.io/transiever/dotnet-sieve-rules/) for higher-level workflows.
