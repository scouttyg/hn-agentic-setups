# Stories: the anecdotes worth reading

Context: an Ask HN thread (Nov 2026), "What's your current AI agentic setup?". Most comments list tools.
A few contain a real **story**: something that happened to the commenter. Find those.

Good stories (examples of the kind, not an exhaustive list):
- an agent went too far or did something unexpected (deleted things, used credentials it shouldn't have, ran up a bill, emailed someone)
- a cost or rate-limit shock, or a surprisingly cheap setup that works
- a security or privacy scare
- a concrete win: something shipped or automated that changed their work or life
- a funny, strange, or charming setup (agents trading a fake portfolio and blogging about it, an agent that books rideshares from a dumb phone)
- a strong personal turn (quit using AI and why, retired and lost employer tokens)

Not stories: tool lists, opinions, generic advice, "it works well for me".

## Output: `extraction/stories/<your batch>.json`

A JSON list of the stories in your batch (it can be short; quality over quantity, typically 2–8 per batch):

```json
{"id": "50387438", "author": "elendee", "headline": "OpenCode quietly used credentials it found in a config file",
 "summary": "Their agent picked up cloud credentials from a config and used them, so they stopped using cloud agents.",
 "kind": "agent_went_too_far", "score": 9,
 "evidence": "<verbatim passage>"}
```

- `headline`: specific, plain, at most 12 words. No clickbait, no exclamation marks.
- `summary`: one sentence, at most 30 words, what happened and the outcome.
- `kind`: one of `agent_went_too_far`, `cost`, `security`, `win`, `funny`, `personal`, `other`.
- `score`: 1–10, how interesting this is to an HN reader skimming the thread (10 = they'd tell a friend about it).
- `evidence`: an **exact, verbatim, contiguous substring** of the comment `text` that tells the story in the commenter's words.
  It must start at the start of a sentence and end at the end of a sentence. 1–5 sentences, under about 120 words.

## Procedure
1. Read your batch file (`extraction/batches/batch_XX.json`: `id`, `author`, `text`, `parent`).
2. Read every comment yourself. Only the commenter's own experience counts.
3. Write your output, then validate: `python3 extraction/stories/validate.py <batch file> <output file>` until OK.
4. Reply with the number of stories and your top three headlines.
