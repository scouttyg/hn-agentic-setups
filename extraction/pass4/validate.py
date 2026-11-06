#!/usr/bin/env python3
"""Validate pass-4 editorial quotes: unbracketed text must be verbatim fragments, in order.
Usage: python3 extraction/pass4/validate.py <input.json> <edited.json>"""
import json, re, sys

def norm(s):
    return re.sub(r"\s+", " ", s.replace("’", "'").replace("‘", "'").replace("“", '"').replace("”", '"')).strip().lower()   # case changes are a normal editorial liberty

def check(text, edited):
    if not edited or not edited.strip():
        return "empty"
    if edited.count("[") != edited.count("]"):
        return "unbalanced brackets"
    ins = re.findall(r"\[([^\]]*)\]", edited)
    if any(len(i.split()) > 18 for i in ins):
        return "a bracketed insertion is over ~15 words"
    if len(re.sub(r"\[[^\]]*\]", "", edited).split()) > 90:
        return "too long (over ~90 quoted words)"
    # remove insertions, split on ellipses -> fragments that must appear verbatim in order
    stripped = re.sub(r"\[[^\]]*\]", "\u0000", edited)
    frags = [norm(f) for f in re.split(r"…|\.\.\.|\u0000", stripped)]
    frags = [f.strip(" ,;") for f in frags if len(f.strip(" ,;.")) >= 3]
    t, pos = norm(text), 0
    for f in frags:
        at = t.find(f, pos)
        if at < 0:
            return f"fragment not found verbatim (or out of order): {f[:70]!r}"
        pos = at + len(f)
    if not frags:
        return "no quoted words left after removing brackets"
    return None

rows = json.load(open(sys.argv[1], encoding="utf-8"))
try:
    out = json.load(open(sys.argv[2], encoding="utf-8"))
except Exception as e:  # noqa: BLE001
    sys.exit(f"cannot parse output: {e}")
problems = []
for r in rows:
    for q in r["quotes"]:
        if q["key"] not in out:
            problems.append(f"{q['key']}: missing"); continue
        p = check(r["text"], out[q["key"]])
        if p: problems.append(f"{q['key']}: {p}")
if problems:
    print(f"{len(problems)} problem(s):"); [print("  -", p) for p in problems[:60]]; sys.exit(1)
print(f"OK ({sum(len(r['quotes']) for r in rows)} quotes)")
