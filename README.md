# Discord-JerryBot
Do not contribute.
## JerryBot
JerryBot is a Discord bot for personal use built on DiscordJS v13. Its predecessor, built on DiscordJS v12, can be found in [this repository](https://github.com/AspectOfJerry/DiscordBot-OBSOLETE).
## Repository file structure summary

<!--│, ─, ├─, └─-->

```
[Repo]
├─ commands                     -> command files
│  ├─ api                       <-
│  │  ├─ hypixel_subcommands
│  │  │  └─ [.js]
│  │  ├─ nasa_subcommands
│  │  │  └─ [.js]
│  │  └─ [.js]
│  ├─ client                    <-
│  │  └─ [.js]
│  ├─ config                    <-
│  │  └─ config_subcommands
│  │     └─ [.js]
│  ├─ dev                       <-
│  │  └─ dev_subcommands
│  │     └─ [.js]
│  ├─ local
│  │  ├─ log_subcommands
│  │  │  └─ [.js]
│  │  └─ stats_subcommand
│  │     └─ [.js]
│  ├─ moderation
│  │  └─ [.js] 
│  ├─ other                     <-
│  │  ├─ 311                    -> exclusive commands
│  │  │  ├─ database
│  │  │  │  └─ [.json]
│  │  │  └─ [.js]
│  │  └─ [.js] 
│  ├─ tests                     <-
│  │  └─ [.test.js]
│  └─ utility                   <-
│     ├─ voice_subcommands
│     │  └─ [.js]
│     └─ [.js]
├─ events                       -> event files
│  └─ [.js] 
├─ jobs                         -> cron jobs
│   └─ [.js] 
├─ logs                         -> logs output directory
│  ├─ digest
│  │  ├─ .gitignore
│  │  └─ [.log]
│  ├─ .gitignore
│  └─ [.log]
├─ modules                      -> custom functions "modules"
│  └─ [.js]
├─ templates                    -> code template files
│  └─ [.template]
├─ .env.template                -> empty .env template file
├─ .gitignore
├─ README.md
├─ index                     -> entrypoint
├─ package-lockon
├─ packageon
└─ run.cmd
```