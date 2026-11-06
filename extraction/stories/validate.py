#!/usr/bin/env python3
"""Validate a stories file. Usage: python3 extraction/stories/validate.py <batch.json> <stories.json>"""
import json, os, sys
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "pass3"))
from validate import sentence_problems  # same sentence-boundary rules as pass 3

KINDS = {"agent_went_too_far", "cost", "security", "win", "funny", "personal", "other"}
batch = json.load(open(sys.argv[1], encoding="utf-8"))
texts = {c["id"]: c["text"] for c in batch}
try:
    out = json.load(open(sys.argv[2], encoding="utf-8"))
except Exception as e:  # noqa: BLE001
    sys.exit(f"cannot parse output: {e}")
problems = []
for i, s in enumerate(out):
    w = f"[{i}] {s.get('id')}"
    if s.get("id") not in texts:
        problems.append(f"{w}: id not in batch"); continue
    p = sentence_problems(texts[s["id"]], s.get("evidence", ""))
    if p: problems.append(f"{w}: {p}")
    if s.get("kind") not in KINDS: problems.append(f"{w}: bad kind")
    if not isinstance(s.get("score"), int) or not 1 <= s["score"] <= 10: problems.append(f"{w}: score must be int 1-10")
    for k in ("headline", "summary"):
        if not s.get(k): problems.append(f"{w}: missing {k}")
    if len((s.get("headline") or "").split()) > 12: problems.append(f"{w}: headline over 12 words")
if problems:
    print(f"{len(problems)} problem(s):"); [print("  -", p) for p in problems]; sys.exit(1)
print(f"OK ({len(out)} stories)")
