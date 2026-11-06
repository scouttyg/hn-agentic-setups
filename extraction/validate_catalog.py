#!/usr/bin/env python3
"""Usage: python3 extraction/validate_catalog.py <group>"""
import json
import os
import re
import sys

here = os.path.dirname(os.path.abspath(__file__))
g = sys.argv[1]
inp = json.load(open(os.path.join(here, f"catalog_input/{g}.json"), encoding="utf-8"))
try:
    out = json.load(open(os.path.join(here, f"catalog/{g}.json"), encoding="utf-8"))
except Exception as e:  # noqa: BLE001
    sys.exit(f"cannot parse output: {e}")

problems = []
for x in inp:
    n = x["name"]
    e = out.get(n)
    if not isinstance(e, dict):
        problems.append(f"{n}: missing")
        continue
    if not e.get("description"):
        problems.append(f"{n}: no description")
    if e.get("github") and not re.fullmatch(r"[\w.-]+/[\w.-]+", e["github"]):
        problems.append(f"{n}: github must be owner/repo, got {e['github']!r}")
    if e.get("harness_type") not in (None, "first_party", "third_party", "custom", "chat_app"):
        problems.append(f"{n}: bad harness_type")
    if "harness" in x["categories"] and not e.get("harness_type"):
        problems.append(f"{n}: used as harness, needs harness_type")
    if e.get("interface") not in (None, "cli", "ide", "desktop", "web", "multiple"):
        problems.append(f"{n}: bad interface")
    if e.get("confidence") not in ("high", "medium", "low"):
        problems.append(f"{n}: bad confidence")
if problems:
    print(f"{len(problems)} problem(s):")
    for p in problems:
        print("  -", p)
    sys.exit(1)
print(f"OK ({len(inp)} entries)")
