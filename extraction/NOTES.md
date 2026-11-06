# Extraction notes: judgment calls reported by the agents

Everything the agents produced is saved in this folder. This file records the calls they flagged as
uncertain, so they can be spot-checked in the report (search by comment id in the comment list).

Pipeline outputs:
- `results/batch_*.json`: pass 1, items per comment with verbatim evidence (`INSTRUCTIONS.md`)
- `enriched/batch_*.json`: pass 2, facets per item: models, access, roles, cost, tier path (`ENRICH.md`)
- `catalog/*.json`: tool research: description, links, harness type and interface, sources (`CATALOG.md`)
- `github_stats.json`: star counts and last push (`fetch_github.py`; re-run to refresh)
- `aliases.json`: name merges · `summaries.json`: written summaries · `corrections.json`: exported from the report

## Pass 1 (item extraction)

- Stance: one batch used `tried` for "moved on from" and kept `rejected` for explicit stops; other batches may have been stricter or looser.
- "None" items: allowed for orchestration and platforms by the rules, but batch 05 also used them under subscription, api_or_model and harness for people who use no AI at all. Batch 04 left out one "No subscriptions" for that reason (50379482).
- Inferred subscriptions:
  - 50373236: "$200 plan from one of the providers" was counted as Claude, because the same author mentions Claude elsewhere.
  - Batch 03: where only a model was named (Sol, Argon), a subscription was recorded with paid_by unknown.
  - 50378660: "Pi running with Claude & Grok" was recorded as subscriptions, but it could be API use.
- Classification calls:
  - 50376855: answered "Codex" to the orchestration question, so it's recorded as orchestration "Codex".
  - 50376357: tmux was recorded as orchestration, but it's really used for remote access and session durability.
  - 50375546: Hermes Agent was recorded as a harness ("main harness").
  - 50367926: "Claude Desktop, not claude code" was recorded as Chat UI.
  - 50377705: "OpenAI's dot" was mapped to Dots.
- Shaky reads:
  - 50373887: "one max Claude plan with Opus" is phrased partly as advice.
  - 50379346: answer rests on one first-person line; the rest is pasted AI analysis.
  - 50376778: "Flash-Next" was recorded as Qwen, based on other comments.
  - 50379276 and 50380672: "Claude" next to Cursor was recorded as harness Claude Code (client unspecified).
  - 50392971: Opus and Gemini were recorded as APIs (the commenter talks about token cost).
  - 50379352: "$200 of that is paid by my job" doesn't say which plan, so paid_by is unknown.
- Not answers:
  - 50384262: a how-to, not their own setup.
  - 50376304 and 50389549: not about the commenter's own setup.
  - Sandboxing replies (Docker, Incus…) were marked non-answers unless they named a harness.
- People who said they use no AI: 50375963, 50377450, 50374488, 50385415, 50375571, 50374780 and 50378976 are answers with no items.

## Pass 2 (facets)

- Claude tiers:
  - "Claude Ultra" was mapped to Max › 20x, based on "Claude Code Ultra aka 20x Max" (50373684, ×3 accounts) and "Claude Ultra (200)". Batch 00 mapped one "claude ultra subs" (50375606) to Max › Unspecified instead.
  - 50373065: "$200 max x5" became Max › 20x by price.
  - "Basic Claude subscription" became Pro (50378303, 50378772).
  - "Claude annual 200 bucks sub" became Pro.
  - "Claude Code ($100 for business)" became Team / Enterprise; it could also be Max 5x.
  - €180 became Max 20x and £90 became Max 5x.
  - 50380522: "Fancy Claude" became Max › Unspecified (a guess from the wording).
- ChatGPT and other providers' tiers:
  - $100/mo ChatGPT became Pro in batch 06 but Unspecified in batch 04.
  - $100 Gemini became Unspecified.
  - Cursor: $200 became Ultra and $16/mo annual became Pro.
- Employer-paid plans: access is "employer" and tier is Unspecified (Team/Enterprise was not assumed).
- 50378067: OpenCode Zen is pay-as-you-go, so access is router and via is OpenCode Zen.
- Model names:
  - OpenAI code names (Sol, Luna, Astra) were written as `GPT Sol`, `GPT-6.1 Sol`, `GPT-6 Luna` and so on. Batch 00 left them out where the vendor was unclear (50375921).
  - Fable was treated as a Claude family (`Claude Fable 5.1`).
  - Argon was written as `Argon` or `Gemini Argon` (normalized via aliases).
  - "DSv4 1017" became DeepSeek V4, and "DeepSeek 4.1f 1017" became DeepSeek V4.1 Flash.

## Catalog research

- Low confidence (couldn't verify online):
  - Platforms and subscriptions: Pickle, Vantegrate.
  - APIs and models: Luna.
  - Orchestration: Helyn Implement, Command Center, Agent Orchestrator, agent-chat.
  - Harnesses: Pendant, Lynx.
- Every GitHub repo was checked by `fetch_github.py` (92/92 exist). Several have moved: Pi → earendil-works/pi, OpenCode → anomalyco/opencode, Goose → aaif-goose/goose.
- Harness type calls:
  - Hermes Agent is third-party, because it works with any model even though Nous Research is a lab.
  - Muse and Kiro Crew are first-party.
  - Orchestration GUIs (Herdr, cmux, Conductor…) are third-party.
- Other notes:
  - Codex is marked open source (CLI) and Claude Code is not.
  - Duet is believed to be Anthropic's Claude Duet (medium confidence).
  - Conductor: one commenter said "RIP", but the site shows it's active.

## "None" vs no AI at all (added later)

- A "None" item means "nothing for this question", e.g. "None, I use freellmapi" is *no subscription*. The report labels it per question: "No subscription", "No models outside a subscription", "No orchestration", "No agent platform".
- People who say they don't use AI at all, or have no setup, are listed in `no_ai.json` with a quote each (11 people). They're counted once as "No AI setup", and their per-question "None" items are dropped.
- Left out of that group on purpose: people who answered "None" to one question but use AI elsewhere (internet_points, amboo7, tomburgs, castwide).
- In: deadfoxygrandpa ("i dont have one"), which is ambiguous between "no AI" and "no agentic setup".

## Catalog: services reached "via" (added later)

- `catalog/via_new.json` covers services, runtimes and plans that only appeared as the "via" in the access trees (Basalt, ninfer, Kilo, OpenCode Go/Zen, ComfyUI…).
- Low confidence: LocalLM (probably a misspelling).
- Medium confidence: Basalt, Radiance engine, SuperGrok, and "Unified Cursor + Grok + Grok Bot" (= "The X Subscription", Oct 2026).
- Not researched: plan names (Claude Max, ChatGPT Plus…), which are tiers of catalogued providers, and hardware or generic phrases ("RTX 4090", "company infra").

## Pass 3: complete quotes, every use case, harness moves (added later)

- `pass3/use_cases.json` replaces the platform use cases: one entry per use case, with evidence that is a complete sentence (165 entries from 135 comments). Generic "personal assistant" mentions with no detail were skipped as too vague.
- `pass3/switches_a.json` and `switches_b.json` replace the switch reasons (171 entries). Each records kind, from, to, harness direction (official → third-party, etc.), the reason, and full-sentence evidence.
  - An empty `to` means dropped rather than switched; the report lists the two separately.
  - Batch A counted only explicit change words.
  - Batch B also counted "tried X, gave up" as dropped (OpenCode: Macha, hypfer; OMP: hestefisk; Gas Town; Muse; Pi; Herdr/Paseo). Cut those if you only want explicit switches.
- `switch_types.json` now only applies to comments the pass-3 files don't cover.

## Stories (added later)

- `stories/batch_*.json`: 70 anecdotes, each with a headline, kind, score (1–10) and verbatim evidence.
- The report shows score 6+ by default, with "Show all" for the rest. Weak picks (e.g. Jabrov's "At home: Cry") score 4–5.
