# Wild-stories sweep

A first pass (`extraction/stories/existing.json`) already collected 70 anecdotes from this Ask HN thread
("What's your current AI agentic setup?", Nov 2026). Now look **only for the genuinely wild ones**, the
moments an HN reader would screenshot and send to a friend:

- an agent going rogue: deleting or overwriting things, touching systems it wasn't asked to, spending money,
  contacting people, disabling its own safeguards, lying or fabricating, fighting another agent
- absurd costs or scale: surprise bills, insane token counts, fleets of machines, accounts stacked
- bizarre accidents, near misses, or security scares with concrete details
- unhinged or delightful setups: agents running a business, trading, raising money, managing a household in odd ways
- shocking personal admissions

Skip anything already in `existing.json` (same comment *and* same incident). If a known story has a wilder
detail elsewhere in the same comment, you may include it as a new entry with a different headline.
Only the commenter's own experience counts. It's fine to return few entries; don't pad.

Output: `extraction/stories/wild_<a|b>.json`, a JSON list in the same format as the first pass:
`{"id", "author", "headline", "summary", "kind", "score", "evidence"}`, with these rules:
- headline: specific and plain, at most 12 words
- summary: one sentence of at most 30 words
- kind: one of agent_went_too_far, cost, security, win, funny, personal, other
- score: 1–10, where 10 is jaw-dropping
- evidence: verbatim, contiguous, starting and ending at sentence boundaries, under about 120 words

Validate: `python3 extraction/stories/validate.py extraction/stories/all_comments.json extraction/stories/wild_<a|b>.json` until OK.
Reply with your entries ranked, each with one line on why it's wild.
