# Export Thunderbird filters to server-side Sieve

`tbrx` is a Windows/Linux beta for reading supported Thunderbird version-9 filters from `msgFilterRules.dat`.
It never modifies Thunderbird data and skips an enabled rule when it cannot preserve its meaning.

```text
tbrx export --profile /path/to/profile
srtx generate --rules thunderbird-rules.json --sieve thunderbird.sieve
```

For a ManageSieve-capable provider, use `tbrx run` to preview and optionally synchronize one IMAP account.
Review beta diagnostics before deployment.

See the [tbrx source documentation](https://github.com/SeWieland/Transiever.ThunderbirdResiever) and [provider guide](https://sewieland.github.io/transiever/sieve-providers/).
