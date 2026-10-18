# Convert classic Outlook rules to server-side Sieve

`olrx` exports supported classic Outlook receive rules.
Requires Windows x64 and configured classic Outlook.
Your provider must support Sieve to run generated rules, and ManageSieve for remote synchronization.

## Install with Scoop

Requires Scoop; add the bucket once.

```powershell
scoop bucket add transiever https://github.com/SeWieland/Transiever.ScoopBucket
scoop install transiever/olrx
scoop install transiever/srtx
```

## Export locally

Run in a new working directory.
These commands read Outlook and write local files without changing your mail server.

```powershell
olrx export --rules outlook-rules.json
srtx generate --rules outlook-rules.json --sieve outlook.sieve
```

Review diagnostics and target folders in `outlook.sieve` before deployment.
Unsupported rules are not guaranteed to convert without loss.

## Preview a server sync

Replace the example host and username.
An interactive terminal prompts for a missing password without echoing it.
The dry run does not write files or change server rules.

```powershell
$env:TRANSIEVER_SIEVE_HOST = "sieve.example.com"
$env:TRANSIEVER_SIEVE_USERNAME = "user@example.com"
olrx run --no-optimize --dry-run
```

After reviewing the preview, run the guided workflow separately.
It asks before deployment and creates a server-side backup when replacing the active script.

```powershell
olrx run --no-optimize
```

See the [olrx CLI guide](https://github.com/SeWieland/Transiever.OutlookResiever/blob/main/src/Transiever.OutlookResiever.Cli/README.md), [Outlook mapping guide](https://github.com/SeWieland/Transiever.OutlookResiever/blob/main/docs/outlook-export.md), and [provider requirements](https://sewieland.github.io/transiever/sieve-providers/).
