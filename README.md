# What's your AI agentic setup? Answers from Ask HN, analyzed

**Live site: https://scouttyg.github.io/hn-agentic-setups/**

An interactive breakdown of the answers to the Nov 2026 Hacker News thread
[Ask HN: What's your current AI agentic setup?](https://news.ycombinator.com/item?id=50366117):
the subscriptions, APIs and models, harnesses, orchestration and platforms people use, plus
the stories they told. Every count links back to the comment and quote it came from.

## How it's built

1. `hn_comments.py` parses a saved copy of the thread into structured comments (`output/`, with
   reply nesting kept): `python3 hn_comments.py hn-thread.html -f flatjson -o output/comments.flat.json`
2. `extraction/` holds the extraction passes. Each folder has its instructions, its validator and
   its outputs, and every quote is checked to be verbatim from the comment. Judgment calls are
   recorded in `extraction/NOTES.md`.
3. `fetch_github.py` refreshes star counts and licenses for linked repos (needs the `gh` CLI).
4. `build_report.py` merges everything into the report:
   - `python3 build_report.py` builds the local working copy in `report/`, which includes the correction tools.
   - `python3 build_report.py --public` builds the read-only site in `docs/`, which GitHub Pages serves.

The scripts use only the Python 3 standard library.

Comments are quoted from Hacker News and belong to their authors.

Built by [Scott Goci](https://scottgoci.com) with help from Claude.
