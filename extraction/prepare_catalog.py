#!/usr/bin/env python3
"""Write catalog research inputs for tool names NOT already in extraction/catalog/*.json.

Existing research is reused, so after a new extraction only new names need researching (see CATALOG.md).
Usage: python3 extraction/prepare_catalog.py [--all]
"""
import collections
import glob
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)


def main():
    redo_all = "--all" in sys.argv
    aliases = json.load(open(os.path.join(HERE, "aliases.json")))
    known = {}
    for p in glob.glob(os.path.join(HERE, "catalog/*.json")):
        known.update(json.load(open(p, encoding="utf-8")))
    texts = {c["id"]: c["text"] for c in json.load(open(os.path.join(ROOT, "output/comments.flat.json")))["comments"]}

    info = collections.defaultdict(lambda: {"count": 0, "categories": set(), "examples": [], "urls": set()})
    for p in sorted(glob.glob(os.path.join(HERE, "results/*.json"))):
        for r in json.load(open(p, encoding="utf-8")):
            for it in r["items"]:
                n = aliases.get(it["category"], {}).get(it["name"], it["name"])
                if n == "None" or (n in known and not redo_all):
                    continue
                d = info[n]
                d["count"] += 1
                d["categories"].add(it["category"])
                if len(d["examples"]) < 4:
                    d["examples"].append({"comment_id": r["id"], "evidence": it["evidence"], "detail": it.get("detail", "")})
                key = n.lower().replace(" ", "").split("(")[0][:6]
                for u in re.findall(r'https?://[^\s)\]>"]+', texts[r["id"]]):
                    if key and key in u.lower().replace("-", "").replace("_", ""):
                        d["urls"].add(u.rstrip(".,"))

    if not info:
        print("Catalog already covers every extracted name.")
        return
    groups = collections.defaultdict(list)
    for n, d in info.items():
        cats = d["categories"]
        g = ("harness" if "harness" in cats else "orchestration" if "orchestration" in cats
             else "api_or_model" if cats == {"api_or_model"} else "platform_subscription")
        groups[g].append({"name": n, "count": d["count"], "categories": sorted(cats),
                          "examples": d["examples"], "urls_in_comments": sorted(d["urls"])[:5]})
    os.makedirs(os.path.join(HERE, "catalog_input"), exist_ok=True)
    for g, v in groups.items():
        suffix = "" if redo_all else "_new"
        path = os.path.join(HERE, f"catalog_input/{g}{suffix}.json")
        json.dump(sorted(v, key=lambda x: -x["count"]), open(path, "w"), indent=1, ensure_ascii=False)
        print(f"{os.path.relpath(path, ROOT)}: {len(v)} names to research")


if __name__ == "__main__":
    main()
