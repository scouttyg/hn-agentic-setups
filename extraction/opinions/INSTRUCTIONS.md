# Opinions: what people like and dislike about the tools they mention

For each comment in your batch, the earlier pass extracted the tools it mentions
(`extraction/results/batch_XX.json` → `items[i]` with `category`, `name`, `stance`, `evidence`).
Now record the commenter's **opinion** of each tool, but only where they actually express one.

- `sentiment`: `positive` | `negative` | `mixed`. Skip the item entirely if the comment just names
  the tool without judging it (most items: "I use Claude Code" is not an opinion).
- `point`: what they like or dislike, plain and specific, at most 10 words ("fast and cheap for bulk work",
  "sandbox kept breaking", "great UI but burns through usage"). For `mixed`, cover both sides briefly.
- `quote`: an **editor-style quote** that supports the point, following `extraction/pass4/INSTRUCTIONS.md`:
  the commenter's exact words, with `[bracketed]` insertions for missing subjects or context and `…` for cuts.
  15–50 words, understandable on its own, and naming the tool (in brackets if the comment doesn't).
- Only the commenter's own opinion, not the parent's or someone they quote.
- Opinions about a model ("Opus is amazing") belong to the item they're attached to (the subscription,
  harness or API item that the model was used through) only if the comment ties them together; otherwise skip.

Output `extraction/opinions/batch_XX.json`: a JSON list, one object per comment **that has at least one opinion**:
`{"id": "...", "opinions": [{"i": 2, "name": "<items[i].name>", "sentiment": "...", "point": "...", "quote": "..."}]}`

Validate: `python3 extraction/opinions/validate.py XX` until OK. Reply with counts per sentiment and anything odd.
