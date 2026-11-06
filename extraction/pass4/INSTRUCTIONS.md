# Pass 4: edit quotes the way a careful editor would

The report shows short quotes from Hacker News comments (use cases, reasons for switching tools, stories).
Many don't stand on their own: "Although, I start sessions from cron, if that counts. Use them to do some
sysadmin…" or "I'm now avoiding any cloud-agents until further notice." (avoiding why?).

Rewrite each quote so a reader understands it **without** opening the comment, using only standard
editorial conventions:

- **[square brackets]** for words you insert: a missing subject ("[I] use them"), a referent ("[Hermes]
  handles…"), or a short clause of context drawn from elsewhere in the same comment
  ("[After OpenCode signed into my local MySQL with a password it found,] I'm now avoiding…").
  Bracketed text must be accurate to the comment; keep each insertion under ~15 words.
- **…** (a single ellipsis character) where you cut words, including at the start or end if the quote begins
  or ends mid-sentence. Cut asides, hedges and filler ("if that counts", "tbh") when they slow the reader down.
- Everything that isn't in brackets must be the commenter's **exact words, in order** (typos may be fixed
  only by bracketing, e.g. "analy[s]is"; otherwise leave them).
- You may draw from anywhere in the comment, not just `current_quote`, and you may join non-adjacent
  passages with "…", as long as the order follows the comment.
- Aim for 15–60 words. One clear thought per quote. Don't add quotation marks around the whole thing.
- Keep the voice: first person stays first person. Don't editorialize or add judgments.

Examples:
- current: "Although, I start sessions from cron, if that counts. Use them to do some sysadmin (keeping servers up to date, reporting vulnerabilities to me, and checking logs for intrusion), and for personal task (like, browsing Patreon to download new stuff from the creators I'm subscribed to)."
  edited: "I start sessions from cron… [and] use them to do some sysadmin (keeping servers up to date, reporting vulnerabilities to me, and checking logs for intrusion)"
  (if the same comment has a second use case for the Patreon part, that one gets its own edit about Patreon)
- current: "I'm now avoiding any cloud-agents until further notice."
  edited: "My OpenCode one day was like \"and now I'm signing into your local mysql instance with your (plaintext) pw that I picked up last week…\" and I was like, ok we're done here. I'm now avoiding any cloud-agents until further notice."

## Input / output

Input (`extraction/pass4/input_N.json`): a list of comments: `id`, `author`, `text`, `parent_excerpt`
(context only; never quote it), and `quotes`: `[{key, kind, about, current_quote}]`. `about` says what the
quote is supposed to support; make sure the edited quote supports exactly that.

Output (`extraction/pass4/edited_N.json`): a JSON object mapping **every** `key` to the edited string:
`{"uc:50378563:0": "…", "sw:50392572:0": "…"}`.

## Procedure
1. Read this file and your input file. Read each comment fully before editing its quotes.
2. Write the output (a helper script to assemble JSON is fine; the edits are your judgment).
3. Validate: `python3 extraction/pass4/validate.py extraction/pass4/input_N.json extraction/pass4/edited_N.json`
   and fix every problem until it prints OK.
4. Reply with counts and any quotes you couldn't make self-explanatory.
