#!/usr/bin/env python3
"""Fetch GitHub stats (stars, description, last push) for every repo in extraction/catalog/*.json.

Uses the `gh` CLI (must be logged in). Writes extraction/github_stats.json.
Re-run any time to refresh star counts, then rebuild the report.
"""
import datetime as dt
import glob
import json
import os
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ROOT, "extraction/github_stats.json")


def fetch(repo):
    try:
        out = subprocess.run(["gh", "api", f"repos/{repo}"], capture_output=True, text=True, timeout=30)
    except subprocess.TimeoutExpired:
        return repo, {"error": "timeout"}
    if out.returncode != 0:
        return repo, {"error": (out.stderr or out.stdout).strip()[:200]}
    d = json.loads(out.stdout)
    return repo, {
        "full_name": d["full_name"],  # canonical (follows renames/redirects)
        "stars": d["stargazers_count"],
        "description": d.get("description"),
        "pushed_at": d.get("pushed_at"),
        "created_at": d.get("created_at"),
        "archived": d.get("archived", False),
        "language": d.get("language"),
        "homepage": d.get("homepage") or None,
        "license": (d.get("license") or {}).get("spdx_id"),     # e.g. MIT, Apache-2.0, BUSL-1.1, NOASSERTION
        "owner_type": (d.get("owner") or {}).get("type"),       # User | Organization
    }


def main():
    repos = set()
    for p in glob.glob(os.path.join(ROOT, "extraction/catalog/*.json")):
        for e in json.load(open(p, encoding="utf-8")).values():
            if e.get("github"):
                repos.add(e["github"].strip())
    if not repos:
        sys.exit("No repos found in extraction/catalog/*.json")
    with ThreadPoolExecutor(max_workers=8) as ex:
        results = dict(ex.map(fetch, sorted(repos)))
    data = {"fetched_at": dt.datetime.now(dt.timezone.utc).isoformat(timespec="seconds"), "repos": results}
    with open(OUT, "w", encoding="utf-8") as fh:
        json.dump(data, fh, indent=2)
    bad = {r: v["error"] for r, v in results.items() if "error" in v}
    print(f"Fetched {len(results) - len(bad)}/{len(results)} repos -> {os.path.relpath(OUT, ROOT)}")
    for r, e in bad.items():
        print(f"  ! {r}: {e}")


if __name__ == "__main__":
    main()
