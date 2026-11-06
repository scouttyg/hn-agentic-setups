#!/usr/bin/env python3
"""Usage: python3 extraction/opinions/validate.py 03"""
import json, os, sys
here = os.path.dirname(os.path.abspath(__file__)); root = os.path.dirname(here)
src = open(os.path.join(root, "pass4", "validate.py")).read().split("rows = json.load")[0]
ns = {}; exec(src, ns); check = ns["check"]
n = sys.argv[1]
batch = {c["id"]: c for c in json.load(open(os.path.join(root, f"batches/batch_{n}.json"), encoding="utf-8"))}
res = {r["id"]: r for r in json.load(open(os.path.join(root, f"results/batch_{n}.json"), encoding="utf-8"))}
try:
    out = json.load(open(os.path.join(here, f"batch_{n}.json"), encoding="utf-8"))
except Exception as e:  # noqa: BLE001
    sys.exit(f"cannot parse output: {e}")
problems, cnt = [], {}
for o in out:
    cid = o.get("id")
    if cid not in batch: problems.append(f"{cid}: not in batch"); continue
    items = res.get(cid, {}).get("items", [])
    for k, op in enumerate(o.get("opinions", [])):
        w = f"{cid} op{k}"
        i = op.get("i")
        if not isinstance(i, int) or i >= len(items): problems.append(f"{w}: bad item index {i}"); continue
        if op.get("name") != items[i]["name"]: problems.append(f"{w}: name {op.get('name')!r} != items[{i}].name {items[i]['name']!r}")
        if op.get("sentiment") not in ("positive", "negative", "mixed"): problems.append(f"{w}: bad sentiment")
        if not op.get("point") or len(op["point"].split()) > 12: problems.append(f"{w}: point missing or over 10 words")
        p = check(batch[cid]["text"], op.get("quote", ""))
        if p: problems.append(f"{w}: quote {p}")
        cnt[op.get("sentiment")] = cnt.get(op.get("sentiment"), 0) + 1
if problems:
    print(f"{len(problems)} problem(s):"); [print("  -", p) for p in problems[:60]]; sys.exit(1)
print(f"OK {cnt}")
