# Surfaces: where can each tool be used?

For each tool in `surfaces_input.json` (coding harnesses, orchestration tools, agent platforms; Nov 2026), list
**every official surface it's available on with essentially the same functionality**, and its main one.

Surfaces:
- `cli`: terminal CLI/TUI (including agent-aware terminals and multiplexers)
- `ide`: a code editor or an editor extension/plugin (VS Code, JetBrains, Zed, Emacs, Cursor itself…)
- `desktop`: a standalone desktop app centred on agents/conversations (not a code editor)
- `web`: usable in a browser (hosted app or self-hosted web UI)
- `mobile`: an official iOS/Android app or a mobile-friendly remote-control client
- `chat`: lives inside a messaging app (Telegram, Slack, Signal, iMessage, WhatsApp…)

Rules:
- Only official or first-party surfaces (an unofficial community wrapper doesn't count).
- Include a surface only if it's a real way to use the tool, not a marketing page or docs site.
- `primary`: the surface most people use it through (usually where it started). Keep `current_primary` unless it's clearly wrong.
- Check the website/README when unsure (WebFetch / `gh api repos/<owner>/<repo>/readme`). Don't guess; if you can't verify,
  list only what the description supports.

Output `extraction/audit/surfaces.json`: `{"<name>": {"surfaces": ["cli", "web", ...], "primary": "cli"}}` for every input name
(primary must be one of its surfaces). Verify with a quick script. Reply with tools that gained surfaces beyond their primary.
