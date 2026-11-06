#!/usr/bin/env python3
"""Validate extraction/enriched/batch_XX.json against extraction/results/batch_XX.json.

Usage: python3 extraction/validate_enrich.py 03
"""
import json
import os
import sys

ACCESS = {"subscription", "direct_api", "router", "cloud", "local", "free", "employer", "unknown"}
ROLES = {"planning", "coding", "review", "debugging", "research", "chat", "writing", "assistant",
         "automation", "experimentation", "orchestration", "cheap_bulk", "privacy"}

here = os.path.dirname(os.path.abspath(__file__))
n = sys.argv[1]
res = json.load(open(os.path.join(here, f"results/batch_{n}.json"), encoding="utf-8"))
try:
    enr = json.load(open(os.path.join(here, f"enriched/batch_{n}.json"), encoding="utf-8"))
except Exception as e:  # noqa: BLE001
    sys.exit(f"cannot parse output: {e}")

need = {(r["id"], i): it for r in res for i, it in enumerate(r["items"])}
got = set()
problems = []
for c in enr:
    for e in c.get("items", []):
        key = (c.get("id"), e.get("i"))
        if key not in need:
            problems.append(f"{key}: no such item")
            continue
        if key in got:
            problems.append(f"{key}: duplicate")
        got.add(key)
        it = need[key]
        if not isinstance(e.get("models"), list):
            problems.append(f"{key}: models must be a list")
        if e.get("access") not in ACCESS:
            problems.append(f"{key}: bad access {e.get('access')!r}")
        bad = [r for r in e.get("roles") or [] if r not in ROLES]
        if bad or not isinstance(e.get("roles"), list):
            problems.append(f"{key}: bad roles {bad or e.get('roles')!r}")
        if it["category"] == "subscription":
            if not (isinstance(e.get("tier"), list) and e["tier"] and all(isinstance(t, str) for t in e["tier"])):
                problems.append(f"{key} ({it['name']}): subscription needs tier path list")
        elif e.get("tier") is not None:
            problems.append(f"{key}: tier must be null for {it['category']}")
        if e.get("accounts") is not None and not isinstance(e.get("accounts"), int):
            problems.append(f"{key}: accounts must be int or null")
missing = [k for k in need if k not in got]
if missing:
    problems.append(f"missing {len(missing)} items, e.g. {missing[:10]}")
if problems:
    print(f"{len(problems)} problem(s):")
    for p in problems[:80]:
        print("  -", p)
    sys.exit(1)
print(f"OK ({len(got)} items)")
