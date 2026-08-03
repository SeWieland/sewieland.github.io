# Convert classic Outlook rules to server-side Sieve

`olrx` exports supported classic Outlook receive rules to Sieve.
Use it when your provider accepts Sieve files or exposes ManageSieve for guided preview and synchronization.

Classic Outlook for Windows is required.
Unsupported rules and providers without Sieve support are not compatible targets.

```text
olrx export --rules outlook-rules.json
srtx generate --rules outlook-rules.json --sieve outlook.sieve
```

For a ManageSieve-capable provider, configure `TRANSIEVER_SIEVE_*` variables and run `olrx run`.
ManageSieve is the RFC 5804 protocol for remotely managing Sieve scripts.

See the [olrx source documentation](https://github.com/SeWieland/Transiever.OutlookResiever) and [provider guide](https://sewieland.github.io/transiever/sieve-providers/).
