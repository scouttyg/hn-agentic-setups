# What's your AI agentic setup? Answers from Ask HN, analyzed

**Live site: https://scouttyg.github.io/hn-agentic-setups/**

An interactive breakdown of the answers to the Hacker News thread
[Ask HN: What's your current AI agentic setup?](https://news.ycombinator.com/item?id=50366117)
(Nov 2026). The site covers the subscriptions, APIs and models, harnesses, orchestration and platforms
people use, the stories they told, and a tool index with licenses, pricing and where each tool runs.
Every count links back to the comment and quote it came from.

**It's a snapshot.** The thread was saved on **Nov 6, 2026 at 18:34 UTC**, when it had 754 comments.
Comments posted or edited after that aren't included. The time is stored as `story.captured_at`
in `output/comments.flat.json` and shown on the site.

## Requirements

- **Python 3.10+.** Every script uses only the standard library, so there's nothing to `pip install`.
- **[GitHub CLI](https://cli.github.com/) (`gh`), logged in.** Only needed for `fetch_github.py`.
- **A browser.** The report is a static page with no server or build step: open `report/index.html`
  directly.

## Quick start

```sh
python3 build_report.py            # working copy with correction tools -> report/
open report/index.html

python3 build_report.py --public   # read-only site -> docs/ (what GitHub Pages serves)
open docs/index.html
```

## The tools

### `hn_comments.py`: parse a saved HN thread

Turns a saved Hacker News item page into structured comments, keeping the reply nesting.

```sh
python3 hn_comments.py hn-thread.html -o output/comments.json            # nested tree
python3 hn_comments.py hn-thread.html -f flatjson -o output/comments.flat.json
python3 hn_comments.py hn-thread.html -o output/comments.csv              # format inferred from extension
cat page.html | python3 hn_comments.py - -f markdown                      # stdin -> stdout
```

| Option | Meaning |
| --- | --- |
| `-f, --format` | `json` (nested tree), `flatjson` (flat list linked by `parent_id`), `jsonl`, `csv`, `markdown`. Default: inferred from `-o`, otherwise `json` |
| `-o, --output` | Output file (default: stdout) |
| `--include-html` | Also keep each comment's original HTML |
| `--exclude-dead` | Drop dead, flagged and deleted comments, unless they have replies that are kept |
| `--captured-at` | When the page was saved, ISO 8601. Default: the input file's creation time |

Each comment records:
- position in the tree: `id`, `parent_id`, `root_id`, `depth`, `position`
- who and when: `author`, `timestamp`, `age_text`
- content: `text`, and `html` with `--include-html`
- status flags: `dead`, `flagged`, `deleted`, `new_account`, `downvoted`
- `url`, plus `direct_replies` and `total_replies`

The story header holds `title`, `author`, `points`, `comment_count`, the post `text` and `captured_at`.

The raw saved page (`hn-thread.html`) isn't in the repo because a logged-in save contains session
tokens. The parsed output in `output/` is everything the rest of the pipeline needs. To redo it
from scratch, open the thread in a browser, save it as HTML, and run the commands above.

### `fetch_github.py`: refresh GitHub stats

```sh
python3 fetch_github.py
```

Collects every GitHub repo linked in `extraction/catalog/*.json` and asks the GitHub API (through
`gh api`) for stars, last push, license, archived status and owner type. It writes
`extraction/github_stats.json`. Re-run it any time, then rebuild, to refresh star counts.

### `build_report.py`: build the report

Merges the parsed comments with everything in `extraction/` and writes the data file the page loads.

| Option | Meaning |
| --- | --- |
| *(none)* | Writes `report/data.js` (the working copy, with correction tools) plus a public preview (`report/index-public.html`, `report/data-public.js`) |
| `--public` | Builds the read-only site in `--site-dir`: the page, assets, icons, data, `404.html` and `sitemap.xml`. Corrections are already applied |
| `--site-dir DIR` | Where `--public` writes (default `docs`) |
| `--site-url URL` | The public URL, used for the canonical link, social-preview tags, `404.html` and the sitemap (default `https://scouttyg.github.io/hn-agentic-setups/`) |
| `--issues-url URL` | Optional link where readers can report mistakes |
| `--utm-source`, `--utm-campaign` | UTM tags added to outbound links to tool websites. Hacker News and GitHub links are left alone |
| `-o FILE` | Where the working copy's data file goes (default `report/data.js`) |

### `extraction/`: the extraction passes and their validators

An LLM (Claude, run as subagents) read the comments in batches. Each pass has an instruction file
saying exactly what to pull out, and a validator. Every quote must be a verbatim substring of the
comment that starts and ends on sentence boundaries. Edited quotes may only add `[bracketed]` words
and `…` cuts. Judgment calls are written up in `extraction/NOTES.md`.

| Pass | Instructions | Output | Validate with |
| --- | --- | --- | --- |
| Batch the comments | | `batches/batch_XX.json` | |
| Extract tools, models and plans per comment | `INSTRUCTIONS.md` | `results/batch_XX.json` | `python3 extraction/validate.py extraction/batches/batch_03.json extraction/results/batch_03.json` |
| Enrich each mention (models, tiers, access route, status) | `ENRICH.md` | `enriched/batch_XX.json` | `python3 extraction/validate_enrich.py 03` |
| Research each tool (vendor, site, repo, description) | `CATALOG.md` | `catalog/*.json` | `python3 extraction/prepare_catalog.py` lists names not researched yet, then `python3 extraction/validate_catalog.py harness` |
| Use cases and tool switches | `pass3/INSTRUCTIONS.md` | `pass3/*.json` | `python3 extraction/pass3/validate.py <input> <output>` |
| Edit quotes so they stand alone | `pass4/INSTRUCTIONS.md` | `pass4/edited_N.json` | `python3 extraction/pass4/validate.py extraction/pass4/input_0.json extraction/pass4/edited_0.json` |
| Likes and dislikes per tool | `opinions/INSTRUCTIONS.md` | `opinions/batch_XX.json` | `python3 extraction/opinions/validate.py 03` |
| Stories worth reading | `stories/INSTRUCTIONS.md`, `stories/WILD.md` | `stories/*.json` | `python3 extraction/stories/validate.py <batch> <stories>` |
| Audits: categories, licenses, pricing, interfaces, model weights | `audit/*.md` | `audit/*.json` | Checked by hand against GitHub, Hugging Face and vendor sites |

Smaller hand-maintained files:
- `aliases.json` merges name variants.
- `vendor_display.json` controls how individual authors are credited (GitHub username only, and only for public tools).
- `no_ai.json` and `switch_types.json` hold small classifications.
- `summaries.json` holds section summaries.

## How the site works

```
report/
  index.html     page shell: header, settings and help dialogs, footer
  styles.css     design system (HN orange header, YC-style body, optional dark mode)
  app.js         renders everything from the data: charts, quotes, stories, tool index, side panels
  data.js        generated: window.HN_CONFIG (public flag, UTM settings) + window.HN_DATA
  icon.svg, favicon.ico, apple-touch-icon.png, icon-*.png, site.webmanifest, og-image.jpg
  og-card.html   source for og-image.jpg (render at 1200x630 with headless Chrome)
docs/            the published read-only copy, written by `build_report.py --public`
```

- **One page, no framework.** `app.js` is vanilla JavaScript. It re-renders sections when you
  change what's counted in settings (current use, tried, stopped, planned, and whether dead or
  flagged comments count).
- **Counting.** Every chart counts people, once each, however many comments they wrote.
  Percentages say what they're a share of.
- **Corrections.** The working copy (`report/`) lets you mark an extraction wrong or rename it.
  Corrections are kept in your browser's localStorage. Use **Settings → Export** to download
  `corrections.json` and save it as `extraction/corrections.json`, and every later build applies
  it, including the public one. The public site has no editing tools.

## Publishing on GitHub Pages

The site is served from the `docs/` folder on `main`:

```sh
python3 build_report.py && python3 build_report.py --public
git add -A && git commit -m "Rebuild report" && git push
```

GitHub setup (one time): **Settings → Pages → Deploy from a branch → `main` / `docs`**.

## License

Copyright (c) 2026 Scott Goci. Attribution is required and **commercial use is not allowed** without
my written permission:
- the code is under the [PolyForm Noncommercial License 1.0.0](LICENSE)
- everything else is under [CC BY-NC 4.0](LICENSE-CONTENT.md)

The quoted Hacker News comments belong to their authors. See [LICENSE](LICENSE) for details.

## Author

Built by **Scott Goci**:
- [scottgoci.com](https://scottgoci.com)
- [GitHub](https://github.com/scouttyg)
- [me@scottgoci.com](mailto:me@scottgoci.com)

Made with help from Claude (AI).
