# Enrichment pass: break each extracted item's detail into facets

A first pass already extracted items (subscription / api_or_model / harness / orchestration / platform)
from each HN comment, with a free-text `detail` that mixes several things, e.g. for DeepSeek:
"via openrouter", "$1-3/day workhorse", "4.1 flash". Your job is to split each item into clean facets.

## Inputs
- `extraction/batches/batch_XX.json` — the comments (`id`, `text`, `parent`).
- `extraction/results/batch_XX.json` — first-pass items per comment (`items[i]` has `category`, `name`,
  `detail`, `stance`, `paid_by`, `evidence`).

Read the **comment text** for each item, not just the `detail`: facts like the model version or access
route are often elsewhere in the same comment. Only use what the comment says (use the parent only to
resolve "same as you" references). Don't guess.

## Output: `extraction/enriched/batch_XX.json`

A list with one object per comment that has ≥1 item (skip comments with no items), in input order:

```json
{"id": "50378856", "items": [
  {"i": 0, "models": ["DeepSeek V4.1 Flash"], "access": "router", "via": "OpenRouter",
   "roles": ["coding"], "use": "workhorse for implementation", "cost": "$1-3/day",
   "tier": null, "accounts": null}
]}
```

One entry per first-pass item, `i` = index into that comment's `items` array. Every item must be covered.

### Fields
- `models` — specific models the commenter uses *with this item* (e.g. with a subscription: the models
  they use from it; with a harness: the models they run in it; for api_or_model: the actual model(s)).
  Canonical spelling: vendor family + version + variant, title-cased, e.g. `Claude Opus 5.5`,
  `Claude Sonnet 5`, `Claude Haiku 5.5`, `GPT-5.5`, `GPT-5.5 Codex`, `DeepSeek V4.1 Flash`,
  `DeepSeek V4 Pro`, `Qwen 3.8 27B`, `Qwen 3.6 35B-A3B`, `GLM 5.3`, `GLM 5.3 Flash`, `Gemma 4 27B`,
  `Kimi K3`, `Gemini 3.5 Pro`, `Grok 4.7`. Keep version numbers exactly as stated by the commenter;
  if no version given use the family alone (`DeepSeek`, `Opus`→`Claude Opus`, `Qwen`). Empty list if none.
- `access` — how they reach it, one of: `subscription` (a flat-rate plan), `direct_api` (pay-as-you-go
  from the model vendor), `router` (OpenRouter, Requesty, LiteLLM proxy, Vercel AI Gateway…),
  `cloud` (Bedrock, Vertex, Azure, Groq, Fireworks, DeepInfra, Together, Baseten…), `local`
  (self-hosted on own hardware), `free`, `employer` (company-provided, route unknown), or `unknown`.
  For harness/orchestration/platform items, use the route of the models powering it if stated, else `unknown`.
- `via` — the named service/runtime for that route (e.g. `OpenRouter`, `AWS Bedrock`, `Ollama`,
  `llama.cpp`, `MLX`, `LM Studio`, `OpenCode Go`, `Claude Max`). `null` if not stated.
- `roles` — zero or more of: `planning`, `coding`, `review`, `debugging`, `research`, `chat`, `writing`,
  `assistant` (personal assistant / life tasks), `automation` (cron/scheduled/ops), `experimentation`,
  `orchestration`, `cheap_bulk` (explicitly used as the cheap workhorse / fallback for volume),
  `privacy` (chosen for privacy/offline/work restrictions). Only roles the comment supports.
- `use` — short paraphrase (≤ 10 words) of how they use it, or `""`.
- `cost` — cost as stated (`"$200/mo"`, `"$1-3/day"`, `"€20"`), or `""`. Don't compute.
- `tier` — **only for `subscription` items**, a path list. Use these values where the provider matches:
  - Claude: `["Free"]`, `["Pro"]`, `["Max", "5x"]`, `["Max", "20x"]`, `["Max", "Unspecified"]`,
    `["Team / Enterprise"]`, `["Unspecified"]`. ($100 Claude = Max 5x, $200 = Max 20x, $20/$17 = Pro.)
  - ChatGPT / Codex: `["Free"]`, `["Go"]`, `["Plus"]`, `["Pro"]`, `["Business / Enterprise"]`, `["Unspecified"]`. ($20 = Plus, $200 = Pro.)
  - Cursor: `["Pro"]`, `["Pro+"]`, `["Ultra"]`, `["Teams"]`, `["Unspecified"]`.
  - GitHub Copilot: `["Free"]`, `["Pro"]`, `["Pro+"]`, `["Business / Enterprise"]`, `["Unspecified"]`.
  - Gemini: `["AI Pro"]`, `["AI Ultra"]`, `["Workspace"]`, `["Unspecified"]`.
  - Any other provider: `[<plan name as stated>]` or `["Unspecified"]`.
  `null` for non-subscription items.
- `accounts` — integer if they state having more than one account/seat/plan of this item, else `null`.

## Procedure
1. Read both input files for your batch.
2. Write the output file (a helper Python script is fine for assembling JSON, but the judgments must be yours).
3. Run `python3 extraction/validate_enrich.py <batch number, e.g. 03>` and fix everything until it prints OK.
4. Reply with: number of items enriched, and any model names you were unsure how to canonicalize.
