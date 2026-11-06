#!/usr/bin/env python3
"""Extract Hacker News comments from a saved item page into structured data.

Parses the HTML of an HN item page (e.g. "Save Page As" from
news.ycombinator.com/item?id=...) and preserves the reply tree.

Usage:
    python3 hn_comments.py hn-thread.html                    # nested JSON to stdout
    python3 hn_comments.py hn-thread.html -f csv -o out.csv
    python3 hn_comments.py hn-thread.html -f jsonl
    python3 hn_comments.py hn-thread.html -f markdown

Formats:
    json      story metadata + nested comment tree (each comment has "children")
    flatjson  story metadata + flat list of comments (linked via parent_id)
    jsonl     one comment per line, flat
    csv       one comment per row, flat
    markdown  human-readable indented thread

Standard library only; no third-party dependencies.
"""

from __future__ import annotations

import argparse
import csv
import datetime as dt
import html
import io
import json
import os
import re
import sys
from dataclasses import dataclass, field, asdict
from html.parser import HTMLParser
from textwrap import dedent

HN_BASE = "https://news.ycombinator.com/"


# --------------------------------------------------------------------------- #
# Data model
# --------------------------------------------------------------------------- #

@dataclass
class Comment:
    id: str
    parent_id: str | None          # None for top-level comments
    root_id: str                   # id of the top-level comment of this thread
    depth: int                     # 0 = top-level
    position: int                  # order of appearance on the page (0-based)
    author: str | None
    timestamp: str | None          # ISO 8601, as provided by HN
    age_text: str | None           # e.g. "1 day ago"
    text: str                      # plain text (links expanded to full URLs)
    html: str                      # original comment HTML
    dead: bool = False
    flagged: bool = False
    deleted: bool = False
    new_account: bool = False      # HN shows usernames of new accounts in green
    downvoted: bool = False        # HN greyed the text out due to downvotes
    url: str = ""
    direct_replies: int = 0
    total_replies: int = 0         # all descendants
    children: list["Comment"] = field(default_factory=list)


@dataclass
class Story:
    id: str | None
    title: str | None
    url: str | None
    author: str | None
    points: int | None
    timestamp: str | None
    comment_count: int | None      # as reported by HN
    text: str | None
    captured_at: str | None = None  # when the page was saved (UTC); comments posted later aren't in it


# --------------------------------------------------------------------------- #
# HTML -> text
# --------------------------------------------------------------------------- #

class _TextExtractor(HTMLParser):
    """Convert HN comment HTML to plain text.

    HN uses unclosed <p> tags as paragraph separators, <pre><code> for code,
    and truncates long link text with "..." -- so we emit the href instead.
    """

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.parts: list[str] = []
        self.in_pre = 0
        self.link_href: str | None = None
        self.link_text: list[str] = []

    def handle_starttag(self, tag, attrs):
        if tag == "p":
            self.parts.append("\n\n")
        elif tag == "pre":
            self.in_pre += 1
            self.parts.append("\n\n\x00PRE_START\x00")
        elif tag == "a":
            self.link_href = dict(attrs).get("href")
            self.link_text = []
        elif tag == "br":
            self.parts.append("\n")

    def handle_endtag(self, tag):
        if tag == "pre" and self.in_pre:
            self.in_pre -= 1
            self.parts.append("\x00PRE_END\x00\n\n")
        elif tag == "a" and self.link_href is not None:
            text = "".join(self.link_text)
            href = self.link_href
            if href and not href.startswith(("http://", "https://", "mailto:")):
                href = HN_BASE + href.lstrip("/")
            # Use the full href when the visible text is a (possibly truncated) URL.
            if href and (text.startswith(("http", "www.")) or text.endswith("...")):
                self.parts.append(href)
            elif href and text and text != href:
                self.parts.append(f"{text} ({href})")
            else:
                self.parts.append(text or href or "")
            self.link_href = None

    def handle_data(self, data):
        if self.link_href is not None:
            self.link_text.append(data if self.in_pre else re.sub(r"\s+", " ", data))
            return
        if self.in_pre:
            self.parts.append(data)
        else:
            self.parts.append(re.sub(r"\s+", " ", data))


def html_to_text(fragment: str) -> str:
    p = _TextExtractor()
    p.feed(fragment)
    p.close()
    raw = "".join(p.parts)

    # Split out preformatted blocks so we only normalize whitespace elsewhere.
    out: list[str] = []
    for i, chunk in enumerate(re.split(r"\x00PRE_START\x00|\x00PRE_END\x00", raw)):
        if i % 2 == 1:  # inside <pre>
            out.append(dedent(chunk.strip("\n")).rstrip())
        else:
            lines = [ln.strip() for ln in chunk.split("\n")]
            out.append("\n".join(lines))
    text = "\n\n".join(s.strip("\n") for s in out if s.strip())
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


# --------------------------------------------------------------------------- #
# Page parsing
# --------------------------------------------------------------------------- #

_ROW_SPLIT = re.compile(r'(?=<tr class="athing comtr)')
_ROW_HEAD = re.compile(r'<tr class="athing comtr([^"]*)" id="(\d+)"')
_INDENT = re.compile(r'class="ind"[^>]*indent="(\d+)"')
_AUTHOR = re.compile(r'<a href="user\?id=([^"&]+)" class="hnuser">(.*?)</a>', re.S)
_AGE = re.compile(r'<span class="age" title="([^"]*)"><a [^>]*>(.*?)</a>', re.S)
_COMHEAD = re.compile(r'<span class="comhead">(.*?)<span class="navs">', re.S)
_COMMTEXT = re.compile(r'<div class="commtext([^"]*)">(.*?)</div>', re.S)


def _first(rx: re.Pattern, s: str, group: int = 1):
    m = rx.search(s)
    return m.group(group) if m else None


def _iso(title: str | None) -> str | None:
    # HN's title attr is either "2026-11-05T13:31:43" or "2026-11-05T13:31:43 1762349503"
    return title.split()[0] if title else None


def parse_story(page: str) -> Story:
    box = page[page.find('class="fatitem"'):] if 'class="fatitem"' in page else ""
    box = box[: box.find('class="comment-tree"')] if 'class="comment-tree"' in box else box[:20000]

    sid = _first(re.compile(r'<tr class="athing submission" id="(\d+)"'), box)
    title_m = re.search(r'<span class="titleline"><a href="([^"]*)"[^>]*>(.*?)</a>', box, re.S)
    url = title_m.group(1) if title_m else None
    if url and not url.startswith(("http://", "https://")):
        url = HN_BASE + html.unescape(url)
    title = html.unescape(re.sub(r"<[^>]+>", "", title_m.group(2))) if title_m else None
    points = _first(re.compile(r'class="score"[^>]*>(\d+) points?'), box)
    comments = _first(re.compile(r'>(\d+)(?:&nbsp;|\s)comments?</a>'), box)
    toptext_m = re.search(r'<div class="toptext"[^>]*>(.*?)</div>', box, re.S)

    return Story(
        id=sid,
        title=title,
        url=url,
        author=_first(re.compile(r'class="hnuser"[^>]*>(?:<font[^>]*>)?([^<]+)'), box),
        points=int(points) if points else None,
        timestamp=_iso(_first(re.compile(r'<span class="age" title="([^"]*)"'), box)),
        comment_count=int(comments) if comments else None,
        text=html_to_text(toptext_m.group(1)) if toptext_m else None,
    )


def parse_comments(page: str) -> list[Comment]:
    """Return top-level comments, each with nested ``children``."""
    roots: list[Comment] = []
    stack: list[Comment] = []  # stack[d] = most recent comment at depth d

    chunks = _ROW_SPLIT.split(page)[1:]
    for position, chunk in enumerate(chunks):
        head = _ROW_HEAD.search(chunk)
        if not head:
            continue
        cid = head.group(2)
        depth = int(_first(_INDENT, chunk) or 0)

        comhead = _first(_COMHEAD, chunk) or ""
        author_m = _AUTHOR.search(comhead)
        age_m = _AGE.search(comhead)
        text_m = _COMMTEXT.search(chunk)
        body_html = text_m.group(2).strip() if text_m else ""
        shade = next((cl for cl in (text_m.group(1).split() if text_m else [])
                      if re.fullmatch(r"c[0-9a-fA-F]{2}", cl)), "c00")

        # Flags such as "[flagged] [dead]" live as bare text in the comment header.
        header_text = re.sub(r"<[^>]+>", " ", comhead)
        text = html_to_text(body_html)

        # Pop the stack back to this comment's parent depth.
        del stack[depth:]
        parent = stack[-1] if stack else None

        c = Comment(
            id=cid,
            parent_id=parent.id if parent else None,
            root_id=stack[0].id if stack else cid,
            depth=depth,
            position=position,
            author=author_m.group(1) if author_m else None,
            timestamp=_iso(age_m.group(1)) if age_m else None,
            age_text=html.unescape(age_m.group(2)).strip() if age_m else None,
            text=text,
            html=body_html,
            dead="[dead]" in header_text,
            flagged="[flagged]" in header_text,
            deleted=author_m is None and text in ("", "[deleted]"),
            new_account=bool(author_m and "<font" in author_m.group(2)),
            downvoted=shade.lower() not in ("c00", "cdd"),
            url=f"{HN_BASE}item?id={cid}",
        )

        if parent:
            parent.children.append(c)
        else:
            roots.append(c)
        stack.append(c)

    def count(c: Comment) -> int:
        c.direct_replies = len(c.children)
        c.total_replies = sum(1 + count(ch) for ch in c.children)
        return c.total_replies

    for r in roots:
        count(r)
    return roots


def flatten(roots: list[Comment]) -> list[Comment]:
    out: list[Comment] = []

    def walk(c: Comment):
        out.append(c)
        for ch in c.children:
            walk(ch)

    for r in roots:
        walk(r)
    return out


# --------------------------------------------------------------------------- #
# Output formats
# --------------------------------------------------------------------------- #

def _comment_dict(c: Comment, nested: bool, include_html: bool) -> dict:
    d = asdict(c) if nested else {k: v for k, v in asdict(c).items() if k != "children"}
    if not include_html:
        _strip_html(d)
    return d


def _strip_html(d: dict) -> None:
    d.pop("html", None)
    for ch in d.get("children", []):
        _strip_html(ch)


def to_json(story: Story, roots: list[Comment], include_html: bool) -> str:
    return json.dumps(
        {"story": asdict(story),
         "comments": [_comment_dict(r, True, include_html) for r in roots]},
        indent=2, ensure_ascii=False,
    )


def to_flatjson(story: Story, roots: list[Comment], include_html: bool) -> str:
    return json.dumps(
        {"story": asdict(story),
         "comments": [_comment_dict(c, False, include_html) for c in flatten(roots)]},
        indent=2, ensure_ascii=False,
    )


def to_jsonl(story: Story, roots: list[Comment], include_html: bool) -> str:
    return "\n".join(
        json.dumps({"story_id": story.id, **_comment_dict(c, False, include_html)},
                   ensure_ascii=False)
        for c in flatten(roots)
    ) + "\n"


CSV_FIELDS = [
    "id", "parent_id", "root_id", "depth", "position", "author", "timestamp",
    "age_text", "direct_replies", "total_replies", "dead", "flagged", "deleted",
    "new_account", "downvoted", "url", "text",
]


def to_csv(story: Story, roots: list[Comment], include_html: bool) -> str:
    fields = ["story_id"] + CSV_FIELDS + (["html"] if include_html else [])
    buf = io.StringIO()
    w = csv.DictWriter(buf, fieldnames=fields, extrasaction="ignore")
    w.writeheader()
    for c in flatten(roots):
        w.writerow({"story_id": story.id, **_comment_dict(c, False, include_html)})
    return buf.getvalue()


def to_markdown(story: Story, roots: list[Comment], include_html: bool) -> str:
    lines = [f"# {story.title or 'HN thread'}", ""]
    meta = [f"{story.points} points" if story.points is not None else None,
            f"by {story.author}" if story.author else None,
            story.timestamp,
            f"{story.comment_count} comments" if story.comment_count is not None else None,
            f"captured {story.captured_at}" if story.captured_at else None]
    lines += [" | ".join(m for m in meta if m), ""]
    if story.text:
        lines += [story.text, "", "---", ""]

    for c in flatten(roots):
        quote = "> " * c.depth
        flags = [f for f, on in (("dead", c.dead), ("flagged", c.flagged),
                                 ("deleted", c.deleted)) if on]
        head = f"**{c.author or '[deleted]'}** · {c.timestamp or ''} · [#{c.id}]({c.url})"
        if flags:
            head += f" · _{', '.join(flags)}_"
        lines.append(f"{quote}{head}".rstrip())
        lines.append(quote.rstrip())
        for ln in (c.text or "").split("\n"):
            lines.append(f"{quote}{ln}".rstrip())
        lines.append("")
    return "\n".join(lines)


FORMATS = {
    "json": to_json,
    "flatjson": to_flatjson,
    "jsonl": to_jsonl,
    "csv": to_csv,
    "markdown": to_markdown,
    "md": to_markdown,
}

EXT_TO_FORMAT = {".json": "json", ".jsonl": "jsonl", ".csv": "csv", ".md": "markdown"}


# --------------------------------------------------------------------------- #
# CLI
# --------------------------------------------------------------------------- #

def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(
        description="Extract Hacker News comments (with reply nesting) from a saved item page.")
    ap.add_argument("input", help="saved HN item page (HTML), or '-' for stdin")
    ap.add_argument("-f", "--format", choices=sorted(FORMATS),
                    help="output format (default: inferred from -o extension, else json)")
    ap.add_argument("-o", "--output", help="output file (default: stdout)")
    ap.add_argument("--include-html", action="store_true",
                    help="include each comment's original HTML")
    ap.add_argument("--captured-at",
                    help="when the page was saved, ISO 8601 (default: the input file's creation time)")
    ap.add_argument("--exclude-dead", action="store_true",
                    help="drop dead/flagged/deleted comments that have no surviving replies")
    args = ap.parse_args(argv)

    if args.input == "-":
        page = sys.stdin.read()
    else:
        with open(args.input, encoding="utf-8") as fh:
            page = fh.read()

    story = parse_story(page)
    story.captured_at = args.captured_at or (None if args.input == "-" else _file_time(args.input))
    roots = parse_comments(page)

    if args.exclude_dead:
        roots = _prune_dead(roots)

    fmt = args.format
    if not fmt and args.output:
        fmt = EXT_TO_FORMAT.get(args.output[args.output.rfind("."):].lower())
    fmt = fmt or "json"

    out = FORMATS[fmt](story, roots, args.include_html)
    if args.output:
        with open(args.output, "w", encoding="utf-8", newline="") as fh:
            fh.write(out)
        n = len(flatten(roots))
        print(f"Wrote {n} comments ({fmt}) to {args.output}", file=sys.stderr)
    else:
        sys.stdout.write(out if out.endswith("\n") else out + "\n")
    return 0


def _file_time(path: str) -> str:
    """Creation time of a saved page (falls back to modification time), as UTC ISO 8601."""
    st = os.stat(path)
    ts = getattr(st, "st_birthtime", None) or st.st_mtime
    return dt.datetime.fromtimestamp(ts, dt.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def _prune_dead(nodes: list[Comment]) -> list[Comment]:
    """Remove dead/flagged/deleted comments, unless they have kept replies
    (in which case they stay so the tree remains intact)."""
    kept = []
    for c in nodes:
        c.children = _prune_dead(c.children)
        if (c.dead or c.flagged or c.deleted) and not c.children:
            continue
        kept.append(c)
    for c in kept:
        c.direct_replies = len(c.children)
        c.total_replies = len(flatten(c.children))
    return kept


if __name__ == "__main__":
    sys.exit(main())
