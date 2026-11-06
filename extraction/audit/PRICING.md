# Pricing and where it runs

For each tool in `pricing_input.json` (coding harnesses, orchestration tools, agent platforms, local runtimes; Nov 2026):

- `pricing`, one of:
  - `free`: no paid tier at all, and no model costs implied (e.g. a local runtime like llama.cpp).
  - `free_byok`: the tool itself is free, but you supply the model (API key, subscription login, or local model). Typical for open-source harnesses (Pi, Aider, OpenCode CLI).
  - `freemium`: a free plan/tier exists, plus paid plans (often usage-capped free tiers).
  - `paid`: requires a paid plan or subscription to use at all (a trial doesn't count as free).
  - `bundled`: comes with a subscription you pay for elsewhere (e.g. Claude Code is included in Claude plans; Codex in ChatGPT plans).
- `runs`: list of `local` (runs on your own machine without the maker's servers, apart from model calls), `self_host`
  (you can deploy it on your own server/cloud), `hosted` (the maker runs it for you as a service). Several can apply.
- `note`: at most 12 words for anything non-obvious (e.g. "free CLI; Pro plan $20/mo for hosted features").

Check the pricing page or README when unsure (WebFetch / `gh api repos/<owner>/<repo>/readme`). Don't guess; if you can't
tell, use your best reading of the description and say so in the note.

Output `extraction/audit/pricing.json`: `{"<name>": {"pricing": "...", "runs": ["local", ...], "note": "..."}}` for every
input name. Verify with a script. Reply with counts per pricing value and anything uncertain.
