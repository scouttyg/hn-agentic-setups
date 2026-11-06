# Extraction instructions

You are extracting structured answers from Hacker News comments on the thread
"Ask HN: What's your current AI agentic setup?". The post asked:

1. What AI subscriptions are you personally paying for? Which tiers? Multiple subscriptions from the same provider?
2. Are you using models outside (or instead of) those subscriptions — pay-as-you-go APIs, OpenRouter, locally hosted models? Which models/providers?
3. What coding harnesses/interfaces are you using (default CLIs, IDE integrations, OpenCode, Pi, Aider, custom...)? What made you switch?
4. Are you using agent orchestration / swarm tools (Gas Town, Ruflo, custom...)?
5. Are you using broader agent platforms (OpenClaw, Hermes Agent, Grok bot, Dots, Muse...)? Main use cases?

Almost nobody followed the format. Read each comment as prose and pull out what
the **commenter themselves** uses / pays for / has tried. Be careful:

- Only record the commenter's own setup. "My coworker uses Cursor" or "Cursor is overrated"
  is NOT a Cursor usage. Opinions about a tool without use go nowhere (or `stance: "rejected"` if they
  clearly say they stopped using / refuse to use it).
- For replies, the `parent` is given for context only. Never extract the parent's setup. But if the
  reply says "Same here" / "I also do that", you may resolve the reference using the parent — the
  evidence quote must still come from the reply's own text.
- If a comment describes nothing about the commenter's setup (pure discussion, jokes, questions),
  return it with an empty `items` list and `is_answer: false`.

## Output

Write a single JSON file: a list with **one object per input comment, in input order, no omissions**:

```json
{
  "id": "50378856",
  "is_answer": true,
  "summary": "Claude Pro for planning, Codex Plus for review, DeepSeek API as the workhorse, in Pi.",
  "items": [
    {
      "category": "subscription",
      "name": "Claude",
      "detail": "Pro ($20/mo)",
      "stance": "uses",
      "paid_by": "self",
      "evidence": "Claude $20/mo (planner)"
    }
  ],
  "switch_reasons": [ {"text": "left Cursor for Claude Code because of pricing changes", "evidence": "..."} ],
  "platform_use_cases": [ {"text": "personal assistant over Telegram", "evidence": "..."} ]
}
```

### Fields

- `category` — one of:
  - `subscription` — a paid plan/subscription (Claude Pro/Max, ChatGPT Plus/Pro, Cursor, Copilot, Gemini, Mistral, Kimi, z.ai coding plan, OpenCode Go, Ollama Cloud, etc.)
  - `api_or_model` — pay-as-you-go API usage, routers (OpenRouter), cloud inference providers (Bedrock, Vertex, Groq, Fireworks...), specific models used outside a subscription, and locally hosted models/runtimes (Ollama, llama.cpp, LM Studio, vLLM, MLX)
  - `harness` — coding harnesses / interfaces (Claude Code, Codex CLI, Cursor (the IDE), Copilot in VS Code, OpenCode, Pi, Aider, Zed, Muse Code, Cline, Roo, Kilo, Amp, Goose, Gemini CLI, Warp, chat web UI, custom harness...)
  - `orchestration` — multi-agent orchestration / swarm / session managers (Gas Town, Ruflo, Munder Difflin, Conductor, claude-squad, tmux/zellij setups explicitly used to run many agents, git worktrees for parallel agents, custom orchestrators, subagents)
  - `platform` — broader agent platforms / always-on personal agents (OpenClaw, Hermes Agent, Grok bot, Dots, Muse, n8n agents, custom personal assistant bots)
  - A product can appear under multiple categories (e.g. "Cursor" as a subscription AND a harness; "Claude" subscription AND "Claude Code" harness) — record both if the comment supports both. Paying for Claude Max and using it through Claude Code → subscription `Claude` + harness `Claude Code`.
- `name` — the **canonical** name. Use exactly these spellings when applicable (otherwise use the product's official name, title case):
  - Subscriptions: `Claude`, `ChatGPT / Codex`, `Cursor`, `GitHub Copilot`, `Gemini`, `Grok`, `Mistral`, `Kimi`, `Z.ai (GLM)`, `MiniMax`, `DeepSeek`, `OpenCode Go/Zen`, `Ollama Cloud`, `Perplexity`, `Windsurf`, `Amp`, `Muse`, `Kagi`, `T3 Chat`, `Synthetic`, `Chutes`
  - API/model: `Anthropic API`, `OpenAI API`, `Google / Gemini API`, `OpenRouter`, `AWS Bedrock`, `Google Vertex`, `Azure OpenAI`, `DeepSeek`, `Qwen`, `Kimi`, `GLM`, `MiniMax`, `Gemma`, `gpt-oss`, `Llama`, `Mistral / Devstral`, `Ollama`, `llama.cpp`, `LM Studio`, `vLLM`, `MLX`, `Groq`, `Cerebras`, `Fireworks`, `Together`
  - Harnesses: `Claude Code`, `Codex`, `Cursor`, `GitHub Copilot`, `Gemini CLI`, `OpenCode`, `Pi`, `Aider`, `Zed`, `Muse Code`, `Cline`, `Roo Code`, `Kilo Code`, `Amp`, `Goose`, `Warp`, `Windsurf`, `JetBrains AI / Junie`, `Crush`, `Droid (Factory)`, `Chat UI (web/app)`, `Custom harness`, `Emacs (gptel etc.)`, `Neovim plugin`
  - Orchestration: `Gas Town`, `Ruflo`, `Munder Difflin`, `Conductor`, `Subagents (built-in)`, `Git worktrees`, `tmux / zellij`, `Custom orchestration`, `None`
  - Platforms: `OpenClaw`, `Hermes Agent`, `Grok bot`, `Dots`, `Muse`, `Custom assistant`, `None`
  - Model names (Opus, Sonnet, GPT-5.x etc.) mentioned as what they use in a subscription go in the subscription item's `detail`, not as a separate item.
- `detail` — free text: tier ("Max 20x", "Pro", "$200 plan"), count ("2 accounts"), model names, how it's used ("for review"). Empty string if none.
- `stance` — `uses` (current), `tried` (used before / experimenting, not current), `rejected` (explicitly stopped or refuses), `planned` (intends to).
- `paid_by` — only for `subscription`: `self`, `employer`, or `unknown`. Use `null` for other categories.
- Explicit "no": if a commenter explicitly says they use **no** orchestration or **no** agent platform, record an item with name `None` and stance `uses` — that's an answer too.
- `evidence` — **an exact, verbatim, contiguous substring of the comment's `text`** (copy-paste; same punctuation, case, and whitespace; do not fix typos, do not join fragments with "..."). Keep it short — the smallest span that justifies the item (typically 3–25 words). This is used to highlight the text in a review UI, so it must match exactly. Each item needs its own evidence.
- `switch_reasons` / `platform_use_cases` — short paraphrase + verbatim evidence. Empty lists if none.
- `summary` — one sentence (≤ 25 words) describing the commenter's setup, or `""` if not an answer.

## Procedure

1. Read your batch file (a JSON list of comments: `id`, `author`, `depth`, `parent`, `text`).
2. Extract per the rules above.
3. Write your output JSON to the path you were given.
4. Validate with: `python3 extraction/validate.py <batch file> <output file>` and fix every reported problem (missing ids, evidence not found verbatim, bad categories) until it prints `OK`.
5. Reply with just: number of comments, number marked `is_answer`, and any canonical names you had to invent that aren't in the list above.
