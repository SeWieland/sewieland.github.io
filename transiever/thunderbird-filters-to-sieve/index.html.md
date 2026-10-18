# Export Thunderbird filters to server-side Sieve

`tbrx` is a Windows x64/Linux x64 beta for reading supported Thunderbird version-9 filters.
It never modifies Thunderbird data and skips enabled rules whose meaning it cannot preserve.
Server synchronization uses one resolved IMAP account per invocation.

## Install

Choose one method; `srtx` generates a local Sieve script from the export.
Windows requires Scoop; add the bucket once.

```powershell
scoop bucket add transiever https://github.com/SeWieland/Transiever.ScoopBucket
scoop install transiever/tbrx
scoop install transiever/srtx
```

Linux x64 requires Homebrew.

```bash
brew install SeWieland/transiever/tbrx
brew install SeWieland/transiever/srtx
```

## Export locally

Replace the quoted profile path and run in a new working directory.
Choose the intended account when prompted if the profile contains several accounts.

```shell
tbrx export --profile "path/to/profile" --rules thunderbird-rules.json
srtx generate --rules thunderbird-rules.json --sieve thunderbird.sieve
```

The result is `thunderbird-rules.json` and `thunderbird.sieve`.
These commands write local files without changing Thunderbird or the mail server.
Review diagnostics, skipped rules, and target folders before deployment.

## Preview a server sync

Requires ManageSieve support.
Replace the filter-file path, host, and username.
An interactive terminal prompts for a missing password without echoing it.
The dry run does not write files or change server rules.

```shell
tbrx run --filters "path/to/msgFilterRules.dat" --sieve-host sieve.example.com --sieve-username user@example.com --no-optimize --dry-run
```

After reviewing a complete preview, run the guided workflow separately; it asks before deployment.

```shell
tbrx run --filters "path/to/msgFilterRules.dat" --sieve-host sieve.example.com --sieve-username user@example.com --no-optimize
```

`tbrx rollback` is a separate recovery action that restores the newest inactive SieveRuler backup and changes server-side filtering.
It is not the next quickstart step; pass the same server connection options when needed.

See the [tbrx CLI guide](https://github.com/SeWieland/Transiever.ThunderbirdResiever/blob/main/src/Transiever.ThunderbirdResiever.Cli/README.md), [compatibility guide](https://github.com/SeWieland/Transiever.ThunderbirdResiever/blob/main/docs/thunderbird-export.md), and [provider requirements](https://sewieland.github.io/transiever/sieve-providers/).
