# Catalog research: describe each tool mentioned in the thread

Context: an Ask HN thread (Nov 2026) "What's your current AI agentic setup?". We extracted the tools
people mention. Many are new (2025–2026) and may postdate your training knowledge, so **research
them on the web** (WebSearch / WebFetch) rather than relying on memory. The input file gives, per
name: mention count, categories, example quotes from comments, and any URLs commenters posted that
look related.

## Output: `extraction/catalog/<group>.json`

A JSON object keyed by the exact `name` from the input:

```json
{
  "T3 Code": {
    "description": "Open-source desktop GUI for running coding agents (Claude Code, Codex) across projects, by T3 / Theo Browne.",
    "vendor": "T3 Tools",
    "website": "https://t3.codes",
    "github": "pingdotgg/t3code",
    "harness_type": "third_party",
    "interface": "desktop",
    "open_source": true,
    "confidence": "high",
    "sources": ["https://github.com/pingdotgg/t3code"]
  }
}
```

### Fields
- `description` — one or two plain sentences: what it is and who makes it. No marketing language.
  If you genuinely can't identify it, describe what the comments imply and set `confidence: "low"`.
- `vendor` — company/person/project behind it, or `null`.
- `website` — canonical homepage URL, or `null`.
- `github` — `owner/repo` of the main public repo, or `null` (don't invent; only if you verified it exists).
- `harness_type` — only for things used as coding harnesses/interfaces, else `null`:
  - `first_party` — made by a model lab for its own models (e.g. Claude Code / Anthropic, Codex / OpenAI,
    Gemini CLI & Antigravity / Google, Kiro / Amazon, Mistral Vibe / Mistral, Kimi Code / Moonshot,
    Grok CLI / xAI, a DeepSeek-made harness).
  - `third_party` — independent product, commercial or open source (Pi, OpenCode, Cursor, Zed, Aider, Cline, T3 Code…).
    GitHub Copilot counts as `third_party` (GitHub isn't the lab making the models).
  - `custom` — the generic "Custom harness" / "CLI harness (unspecified)" buckets.
  - `chat_app` — chat UIs / desktop chat apps ("Chat UI (web/app)", Open WebUI…).
- `interface` — `cli` (terminal/TUI), `ide` (editor or editor extension), `desktop` (standalone GUI app),
  `web`, `multiple`, or `null` if not applicable.
- `open_source` — true / false / null if unknown.
- `confidence` — `high` (verified from official site/repo), `medium`, `low` (couldn't verify).
- `sources` — 1–3 URLs you actually looked at.

Generic buckets ("Custom orchestration", "Custom assistant", "Local models (unspecified)",
"Various API providers", "Git worktrees", "Subagents (built-in)", "tmux / zellij", "Chat UI (web/app)"…)
still get an entry: a description of the bucket, `null` links (or the relevant project link where sensible,
e.g. tmux), `confidence: "high"`.

## Procedure
1. Read your input file `extraction/catalog_input/<group>.json`.
2. Research each name. Prioritize accuracy over speed for the high-count names; for 1-mention obscure
   names a quick search + the commenter's links is enough.
3. Write the output file; ensure it's valid JSON with every input name as a key.
4. Run `python3 extraction/validate_catalog.py <group>` and fix until OK.
5. Reply with: count done, and the names you marked `low` confidence.
