# Audit: is every name the right kind of thing, filed under the right question?

The report groups everything people mentioned in an Ask HN thread ("What's your current AI agentic setup?",
Nov 2026) under five questions: subscription, api_or_model, harness, orchestration, platform. Earlier passes
made mistakes, e.g. "Git worktrees" was treated as an orchestration *tool* when it's a technique.

`input.json` lists every name with how often it was filed under each question, its catalog description, and
example quotes. For **each name** decide:

- `kind`, one of:
  - `harness`: a coding agent/interface you drive (Claude Code, Codex, Pi, OpenCode, Cursor, Zed, T3 Code…)
  - `orchestration`: a tool whose job is running/coordinating many agents or sessions (Herdr, Conductor, Paseo…)
  - `platform`: an always-on / personal agent platform (OpenClaw, Hermes Agent, Grok bot, Dots, custom assistant…)
  - `subscription`: a paid plan or the provider sold as a plan (Claude, ChatGPT / Codex, Cursor plan, OpenCode Go…)
  - `model`: a model family (DeepSeek, Qwen, GLM, Gemma, Kimi…)
  - `api_provider`: pay-as-you-go API, router or cloud inference service (OpenRouter, Anthropic API, Bedrock, DeepInfra…)
  - `runtime`: local inference software or hardware stack (Ollama, llama.cpp, MLX, LM Studio, vLLM…)
  - `technique`: a practice, not a product (git worktrees, tmux sessions, subagents, cron jobs, custom scripts)
  - `bucket`: a generic catch-all ("Custom harness", "Local models (unspecified)", "Chat UI (web/app)")
  - `not_a_tool`: misc that doesn't belong (hardware brand, an unrelated product)
- `move`: an object mapping a wrongly used question to the right one, only when mentions are clearly misfiled,
  e.g. `{"harness": "platform"}` for "Hermes Agent" filed as a harness when it's a platform; `{"orchestration": "harness"}`
  for "Codex" filed as orchestration. Use `null` for "drop these mentions" (e.g. not_a_tool). Omit if nothing to move.
  A name can legitimately sit under two questions (Cursor is both a subscription and a harness; Claude Code can be
  used for orchestration). Only move what's clearly wrong.
- `note`: at most 15 words explaining any non-obvious call.

Output `extraction/audit/decisions.json`: `{"<name>": {"kind": "...", "move": {...}, "note": "..."}}` for every name.
Then reply with: every `move` you made, and every name whose kind differs from where most of its mentions sit.
