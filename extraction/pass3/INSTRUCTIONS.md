# Pass 3: complete, self-explanatory quotes

Context: an Ask HN thread (Nov 2026), "What's your current AI agentic setup?". Earlier passes picked
evidence quotes that were too short to understand on their own ("…the bots work with via API.") and
sometimes kept only one of several use cases. Redo two things for the comments in your input file.

Each input row has `id`, `author`, `text` (the comment), `parent` (context only) and `extracted_items`
(hints from earlier passes; they may be wrong or incomplete).

## Shared evidence rules (the validator enforces 1–3)

1. `evidence` is an **exact, verbatim, contiguous substring** of the comment `text`. Copy-paste, no edits.
2. It **starts at the start of a sentence** (start of the text, start of a line, or right after `. ! ?` plus a space).
   A list marker like `3) ` or `- ` may precede it.
3. It **ends at the end of a sentence**: it ends with `.`, `!`, `?` or `…`, or it's followed by a line break or the end of the text.
4. It must make sense to a reader who sees nothing else. Usually one sentence; use two or three
   consecutive sentences if the first alone is unclear. Keep it under about 60 words.
5. Only the commenter's own experience, not the parent's.

## Task A: use cases (`usecases_input.json` → `use_cases.json`)

What the commenter uses **agent platforms / always-on personal agents / scheduled or cron-driven agents**
for (OpenClaw, Hermes Agent, Grok bot, Dots, Muse, custom assistants, Claude Code run from cron, etc.).

- **One entry per distinct use case.** "Sysadmin (keeping servers up to date, reporting vulnerabilities,
  checking logs) and personal tasks (downloading new Patreon content)" is two entries: sysadmin and Patreon downloads.
  The two entries may share the same evidence sentence if that's where both are described.
- Skip vague ones that don't say what the agent actually does ("the bots work with via API", "for stuff").
- `text`: a plain paraphrase of the use case, at most 10 words ("server maintenance and security log checks").
- Output: a JSON list with **one object per input row, in input order**: `{"id": "...", "use_cases": [{"text": "...", "evidence": "..."}]}`.
  The list may be empty.

## Task B: switches (`switches_*_input.json` → `switches_*.json`)

Every time the commenter says they **switched, dropped, downgraded, cancelled, or replaced** something
(or chose X over Y they had used), record it. Ignore hypotheticals ("I might switch") and complaints without a change.

Fields per switch:
- `kind`: `harness` | `provider` (subscription or AI provider or plan) | `model` (which model) | `route` (how models are reached: router, local, cloud provider) | `platform` | `orchestration`
- `from`: list of things they moved away from (canonical names as in `extracted_items` where possible; `[]` if unstated)
- `to`: list of things they moved to (`[]` if they just dropped it)
- `direction`: only for `kind: "harness"`, otherwise `null`. One of:
  - `official_to_third_party`: from a lab-made harness (see `official_harnesses.json`) to a third-party one (Pi, OpenCode, Cursor, Zed, T3 Code, Amp…)
  - `official_to_own`: from a lab-made harness to their own custom harness
  - `official_to_official`: between lab-made harnesses (e.g. Claude Code → Codex)
  - `third_party_to_official`: back to or onto a lab-made harness
  - `third_party_to_third_party`
  - `third_party_to_own`
  - `own_to_other`: from their own harness to anything else
  - `interface_change`: same tool, different surface (e.g. Claude Code CLI → Claude Code desktop app, terminal → desktop app of the same product)
  - `dropped`: stopped using a harness without naming a replacement
  - `unclear`
- `reason`: the reason they gave, paraphrased in at most 15 words; `""` if none given.
- `evidence`: per the shared rules. Prefer the sentence that contains the reason.

Output: a JSON list with **one object per input row, in input order**: `{"id": "...", "switches": [ ... ]}` (may be empty).

## Procedure

1. Read `extraction/pass3/INSTRUCTIONS.md`, `extraction/pass3/official_harnesses.json` and your input file.
2. Read each comment yourself and decide. A helper script may assemble the JSON, but no keyword matching.
3. Validate: `python3 extraction/pass3/validate.py <input file> <output file>` and fix until it prints OK.
4. Reply with counts (rows, entries) and anything you were unsure about.
