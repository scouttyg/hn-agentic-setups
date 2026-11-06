#!/usr/bin/env python3
"""Validate a pass-3 output file. Usage: python3 extraction/pass3/validate.py <input.json> <output.json>"""
import json
import re
import sys

KINDS = {"harness", "provider", "model", "route", "platform", "orchestration"}
DIRS = {"official_to_third_party", "official_to_own", "official_to_official", "third_party_to_official",
        "third_party_to_third_party", "third_party_to_own", "own_to_other", "interface_change", "dropped", "unclear"}


def sentence_problems(text, ev):
    at = text.find(ev)
    if not ev or at < 0:
        return "evidence not found verbatim"
    before, after = text[:at], text[at + len(ev):]
    last_line = before.split("\n")[-1]
    starts = (at == 0 or re.search(r"([.!?…][\"”')]?\s+|\n\s*)$", before)
              or re.fullmatch(r"\s*([>*\-•]|\d+[.)]|\(\d+\))\s*", last_line) is not None)
    ends = bool(re.search(r"[.!?…][\"”')]?$", ev.rstrip())) or re.match(r"\s*(\n|$)", after) is not None
    out = []
    if not starts:
        out.append(f"doesn't start at a sentence start (preceded by {before[-25:]!r})")
    if not ends:
        out.append(f"doesn't end at a sentence end (followed by {after[:25]!r})")
    return "; ".join(out)


def main(inp, outp):
    rows = json.load(open(inp, encoding="utf-8"))
    try:
        out = json.load(open(outp, encoding="utf-8"))
    except Exception as e:  # noqa: BLE001
        sys.exit(f"cannot parse output: {e}")
    texts = {r["id"]: r["text"] for r in rows}
    problems, seen, n = [], set(), 0
    for o in out:
        cid = o.get("id")
        if cid not in texts:
            problems.append(f"{cid}: not in input")
            continue
        seen.add(cid)
        key = "use_cases" if "use_cases" in o else "switches"
        for i, e in enumerate(o.get(key) or []):
            n += 1
            where = f"{cid} {key}[{i}]"
            p = sentence_problems(texts[cid], e.get("evidence", ""))
            if p:
                problems.append(f"{where}: {p}")
            if key == "use_cases":
                if not e.get("text"):
                    problems.append(f"{where}: missing text")
            else:
                if e.get("kind") not in KINDS:
                    problems.append(f"{where}: bad kind {e.get('kind')!r}")
                if e.get("kind") == "harness" and e.get("direction") not in DIRS:
                    problems.append(f"{where}: bad direction {e.get('direction')!r}")
                if e.get("kind") != "harness" and e.get("direction") is not None:
                    problems.append(f"{where}: direction must be null for {e.get('kind')}")
                if not isinstance(e.get("from"), list) or not isinstance(e.get("to"), list):
                    problems.append(f"{where}: from/to must be lists")
    missing = [r["id"] for r in rows if r["id"] not in seen]
    if missing:
        problems.append(f"missing {len(missing)} ids: {missing[:10]}")
    if problems:
        print(f"{len(problems)} problem(s):")
        for p in problems[:60]:
            print("  -", p)
        sys.exit(1)
    print(f"OK ({len(out)} rows, {n} entries)")


if __name__ == "__main__":
    main(*sys.argv[1:3])
