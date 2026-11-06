#!/usr/bin/env python3
"""Build the data file for the interactive report (report/data.js).

The page itself is static: report/index.html + styles.css + app.js load data.js.

Inputs
  output/comments.flat.json        from hn_comments.py (-f flatjson)
  extraction/results/*.json        per-comment extractions (see extraction/INSTRUCTIONS.md)
  extraction/aliases.json          optional: {"<category>": {"Variant name": "Canonical"}}
                                   or {"*": {...}} for all categories
  extraction/corrections.json      optional: exported from the report's "Export corrections"
  extraction/summaries.json        optional: {"<category>": "markdown-ish summary text", ...}
  extraction/enriched/*.json       optional: per-item facets (models, access, roles, tier...) - see ENRICH.md
  extraction/catalog/*.json        optional: tool descriptions/links - see CATALOG.md
  extraction/github_stats.json     optional: from fetch_github.py

Usage
  python3 build_report.py [-o report/data.js]
"""
from __future__ import annotations

import argparse
import datetime as dt
import glob
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))


def load(path, default=None):
    p = os.path.join(ROOT, path)
    if not os.path.exists(p):
        return default
    with open(p, encoding="utf-8") as fh:
        return json.load(fh)


# --------------------------------------------------------------------------- #
# Tier normalization (Q1 asks "which tiers?")
# --------------------------------------------------------------------------- #

TIER_RULES = {
    "Claude": [
        (r"max\s*20|20x|\$\s*200|200\s*(usd|/mo|a month|per month)", "Max 20x"),
        (r"max\s*5|5x|\$\s*100|100\s*(usd|/mo|a month|per month)", "Max 5x"),
        (r"\bteam\b|\benterprise\b|\bbusiness\b", "Team / Enterprise"),
        (r"\bmax\b", "Max (unspecified)"),
        (r"\bpro\b|\$\s*20\b|\$\s*17\b", "Pro"),
        (r"\bfree\b", "Free"),
    ],
    "ChatGPT / Codex": [
        (r"\bpro\b|\$\s*200", "Pro"),
        (r"\bplus\b|\$\s*20\b", "Plus"),
        (r"\bbusiness\b|\bteam\b|\benterprise\b", "Business / Enterprise"),
        (r"\bgo\b", "Go"),
        (r"\bfree\b", "Free"),
    ],
    "Cursor": [
        (r"ultra|\$\s*200", "Ultra"),
        (r"pro\s*\+|pro\s*plus|\$\s*60", "Pro+"),
        (r"\bpro\b|\$\s*20\b", "Pro"),
        (r"\bbusiness\b|\bteam\b|\benterprise\b", "Business / Teams"),
    ],
    "GitHub Copilot": [
        (r"pro\s*\+|pro\s*plus|\$\s*39", "Pro+"),
        (r"\bpro\b|\$\s*10\b", "Pro"),
        (r"\bbusiness\b|\benterprise\b", "Business / Enterprise"),
        (r"\bfree\b", "Free"),
    ],
    "Gemini": [
        (r"ultra", "Ultra"),
        (r"\bpro\b|advanced|ai pro|\$\s*20\b", "Pro / Advanced"),
    ],
}


def tier_for(name: str, detail: str) -> str | None:
    rules = TIER_RULES.get(name)
    if not rules:
        return None
    d = (detail or "").lower()
    for rx, label in rules:
        if re.search(rx, d):
            return label
    return "Unspecified"


def multi_account(detail: str) -> bool:
    return bool(re.search(r"\b(2|two|3|three|4|four|multiple|several)\s+(accounts|subs|subscriptions|seats|plans)\b"
                          r"|\bx\s*[2-9]\b|\b[2-9]\s*x\s*(max|pro|plus)", (detail or "").lower()))


# --------------------------------------------------------------------------- #

def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("-o", "--output", default="report/data.js")
    ap.add_argument("--public", action="store_true",
                    help="build a read-only site into --site-dir (no correction tools; corrections baked in)")
    ap.add_argument("--site-dir", default="docs", help="output folder for --public (default: docs/, which GitHub Pages can serve directly)")
    ap.add_argument("--issues-url", default="https://github.com/scouttyg/hn-agentic-setups/issues/new", help="optional link for readers to report mistakes (public build)")
    ap.add_argument("--site-url", default="https://scouttyg.github.io/hn-agentic-setups/",
                    help="public URL of the site, for canonical/og:url tags and sitemap.xml (public build)")
    ap.add_argument("--utm-source", default="hn-agentic-setups", help="utm_source added to outbound tool-website links")
    ap.add_argument("--utm-campaign", default="ask-hn-ai-setup", help="utm_campaign added to outbound tool-website links")
    args = ap.parse_args(argv)

    flat = load("output/comments.flat.json")
    if not flat:
        sys.exit("Run: python3 hn_comments.py hn-thread.html -f flatjson -o output/comments.flat.json")
    story, comments = flat["story"], flat["comments"]

    results = {}
    for path in sorted(glob.glob(os.path.join(ROOT, "extraction/results/*.json"))):
        for r in json.load(open(path, encoding="utf-8")):
            results[r["id"]] = r

    opinions = {}
    for path in sorted(glob.glob(os.path.join(ROOT, "extraction/opinions/batch_*.json"))):
        for row in json.load(open(path, encoding="utf-8")):
            for op in row.get("opinions", []):
                opinions[(row["id"], op["i"])] = {"sentiment": op["sentiment"], "point": op["point"], "quote": op["quote"]}
    enriched = {}
    for path in sorted(glob.glob(os.path.join(ROOT, "extraction/enriched/*.json"))):
        for c in json.load(open(path, encoding="utf-8")):
            for e in c.get("items", []):
                enriched[(c["id"], e["i"])] = e

    catalog = {}
    for path in sorted(glob.glob(os.path.join(ROOT, "extraction/catalog/*.json"))):
        catalog.update(json.load(open(path, encoding="utf-8")))
    gh = (load("extraction/github_stats.json", {}) or {}).get("repos", {})
    for name, e in catalog.items():
        st = gh.get(e.get("github") or "")
        if st and "error" in st and "Not Found" in st["error"]:
            e["github"] = None  # repo named by research but doesn't exist
        if st and "error" not in st:
            e["stars"] = st["stars"]
            e["pushed_at"] = st.get("pushed_at")
            e["github"] = st.get("full_name") or e["github"]
            e["archived"] = st.get("archived")

    audit = load("extraction/audit/decisions.json", {}) or {}
    aliases = load("extraction/aliases.json", {}) or {}
    corrections = load("extraction/corrections.json", {}) or {}
    switch_types = (load("extraction/switch_types.json", {}) or {}).get("types", {})
    # pass 3 (complete-sentence evidence, every use case, harness move direction) overrides earlier lists
    p3_uses = {r["id"]: r["use_cases"] for r in (load("extraction/pass3/use_cases.json", []) or [])}
    p3_sw = {}
    for f in ("extraction/pass3/switches_a.json", "extraction/pass3/switches_b.json"):
        for r in load(f, []) or []:
            p3_sw[r["id"]] = r["switches"]
    no_ai = {e["id"]: e["evidence"] for e in (load("extraction/no_ai.json", {}) or {}).get("people", [])}
    by_id = {c["id"]: c for c in comments}
    for cid, ev in no_ai.items():
        if cid not in by_id or ev not in by_id[cid]["text"]:
            sys.exit(f"extraction/no_ai.json: evidence for {cid} not found verbatim: {ev!r}")
    no_ai_authors = {by_id[cid]["author"] for cid in no_ai}
    summaries = {k: v for k, v in (load("extraction/summaries.json", {}) or {}).items() if not k.startswith("_")}

    removed = {(c["id"], c["category"], c["name"], c.get("evidence", ""))
               for c in corrections.get("removed", [])}
    renamed = {(c["id"], c["category"], c["name"]): c["to"] for c in corrections.get("renamed", [])}

    model_aliases = aliases.get("models", {})
    tier_aliases = aliases.get("tiers", {})
    via_aliases = aliases.get("via", {})

    def canon(category, name):
        return (aliases.get(category, {}).get(name)
                or aliases.get("*", {}).get(name)
                or name)

    out_comments = []
    missing = 0
    n_removed = 0
    for c in comments:
        r = results.get(c["id"])
        if r is None:
            missing += 1
            r = {"is_answer": False, "summary": "", "items": []}
        items = []
        for idx, it in enumerate(r.get("items", [])):
            orig_name = it["name"]
            name = canon(it["category"], orig_name)
            # corrections are keyed on the (aliased) name shown in the report
            if (c["id"], it["category"], name, it.get("evidence", "")) in removed:
                n_removed += 1
                continue
            name = renamed.get((c["id"], it["category"], name), name)
            move = (audit.get(name) or {}).get("move") or {}
            category = it["category"]
            if category in move:                       # audited: clearly misfiled mention
                if move[category] is None:
                    continue
                category = move[category]
            item = {
                "category": category,
                "name": name,
                "detail": it.get("detail") or "",
                "stance": it.get("stance") or "uses",
                "paid_by": it.get("paid_by"),
                "evidence": it.get("evidence") or "",
            }
            if orig_name != name:
                item["raw_name"] = orig_name
            if (c["id"], idx) in opinions:
                item["opinion"] = opinions[(c["id"], idx)]
            f = enriched.get((c["id"], idx))
            if f:
                item["models"] = sorted({model_aliases.get(m, m) for m in f.get("models") or []})
                item["access"] = f.get("access") or "unknown"
                item["via"] = via_aliases.get(f.get("via"), f.get("via"))
                if not item["via"] and item["access"] == "direct_api" and item["category"] == "api_or_model":
                    item["via"] = via_aliases.get(name, name)  # direct API: the vendor is the item itself
                item["roles"] = f.get("roles") or []
                item["use"] = f.get("use") or ""
                item["cost"] = f.get("cost") or ""
                if f.get("accounts"):
                    item["accounts"] = f["accounts"]
            if item["category"] == "subscription":
                tier = (f or {}).get("tier")
                if not tier:
                    t = tier_for(name, item["detail"])
                    tier = [t] if t else ["Unspecified"]
                tier = tier_aliases.get(name, {}).get(" › ".join(tier), tier)
                item["tier"] = tier
                if ((f or {}).get("accounts") or 0) > 1 or multi_account(item["detail"]):
                    item["multi"] = True
            items.append(item)
        if c["author"] in no_ai_authors:
            # subsumed by the person-level "No AI setup" item
            items = [i for i in items if i["name"] != "None"]
        if c["id"] in no_ai:
            items.insert(0, {"category": "no_ai", "name": "No AI setup", "detail": "", "stance": "uses",
                             "paid_by": None, "evidence": no_ai[c["id"]]})
        out_comments.append({
            "id": c["id"],
            "parent_id": c["parent_id"],
            "depth": c["depth"],
            "author": c["author"],
            "timestamp": c["timestamp"],
            "text": c["text"],
            "url": c["url"],
            "dead": c["dead"],
            "flagged": c["flagged"],
            "downvoted": c["downvoted"],
            "new_account": c["new_account"],
            "is_answer": (bool(r.get("is_answer")) and bool(items or r.get("summary"))) or c["id"] in no_ai,
            "summary": r.get("summary") or "",
            "items": items,
            "switch_reasons": ([{"text": w.get("reason", ""), "evidence": w["evidence"], "type": w["kind"],
                                 "from": w.get("from", []), "to": w.get("to", []), "direction": w.get("direction")}
                                for w in p3_sw[c["id"]]] if c["id"] in p3_sw else
                               [q for q in (dict(q, type=switch_types.get(f"{c['id']}:{j}", "harness"))
                                            for j, q in enumerate(r.get("switch_reasons") or [])) if q["type"] != "skip"]),
            "platform_use_cases": p3_uses[c["id"]] if c["id"] in p3_uses else (r.get("platform_use_cases") or []),
        })

    stories = []
    story_files = sorted(glob.glob(os.path.join(ROOT, "extraction/stories/batch_*.json")))
    story_files += [os.path.join(ROOT, f"extraction/stories/wild_{x}.json") for x in "ab"
                    if os.path.exists(os.path.join(ROOT, f"extraction/stories/wild_{x}.json"))]
    for path in story_files:
        stories += json.load(open(path, encoding="utf-8"))
    stories.sort(key=lambda x: -x["score"])
    featured = (load("extraction/stories/featured.json", {}) or {}).get("featured", [])
    for st in stories:
        k = f"{st['id']}|{st['headline']}"
        if k in featured:
            st["featured"] = featured.index(k) + 1
    # pass 4: editor-style quotes ([insertions], … cuts) keyed uc:/sw:/st:<comment id>:<index>
    edited = {}
    for path in sorted(glob.glob(os.path.join(ROOT, "extraction/pass4/edited_*.json"))):
        edited.update(json.load(open(path, encoding="utf-8")))
    for oc in out_comments:
        for i, u in enumerate(oc["platform_use_cases"]):
            if f"uc:{oc['id']}:{i}" in edited: u["edited"] = edited[f"uc:{oc['id']}:{i}"]
        for i, w in enumerate(oc["switch_reasons"]):
            if f"sw:{oc['id']}:{i}" in edited: w["edited"] = edited[f"sw:{oc['id']}:{i}"]
    # story edits are matched by (comment id, headline), so adding stories later can't shift them
    story_edit = {}
    for path in sorted(glob.glob(os.path.join(ROOT, "extraction/pass4/input_*.json"))):
        for row in json.load(open(path, encoding="utf-8")):
            for q in row["quotes"]:
                if q["key"].startswith("st:") and q["key"] in edited:
                    story_edit[(row["id"], q["about"])] = edited[q["key"]]
    for path in sorted(glob.glob(os.path.join(ROOT, "extraction/stories/edited_*.json"))):
        story_edit.update({(k.split("|", 1)[0], k.split("|", 1)[1]): v for k, v in json.load(open(path, encoding="utf-8")).items()})
    for st in stories:
        if (st["id"], st["headline"]) in story_edit: st["edited"] = story_edit[(st["id"], st["headline"])]
    vendor_display = (load("extraction/vendor_display.json", {}) or {}).get("vendors", {})
    for e in catalog.values():
        if e.get("vendor") in vendor_display:
            e["vendor"] = vendor_display[e["vendor"]]
            if e["vendor"] is None and e.get("github"):
                e["vendor"] = e["github"].split("/")[0]   # an individual: credit their public GitHub username instead
        if not (e.get("website") or e.get("github")):
            e["vendor"] = None                            # private, unshared setups get no credit
    surfaces = load("extraction/audit/surfaces.json", {}) or {}
    for name, sf in surfaces.items():
        if name in catalog and isinstance(sf, dict) and sf.get("surfaces"):
            catalog[name]["surfaces"] = sf["surfaces"]
            catalog[name]["primary_interface"] = sf.get("primary") or catalog[name].get("primary_interface")
    pricing = load("extraction/audit/pricing.json", {}) or {}
    for name, pr in pricing.items():
        if name in catalog and isinstance(pr, dict):
            catalog[name].update({"pricing": pr.get("pricing"), "runs": pr.get("runs") or [], "pricing_note": pr.get("note") or ""})
    business = load("extraction/audit/business.json", {}) or {}
    for name, b in business.items():
        if name in catalog and isinstance(b, dict):
            catalog[name].update({"license": b.get("license"), "commercial": b.get("commercial"), "personal": b.get("personal")})
    for name, dcs in audit.items():
        if name in catalog and isinstance(dcs, dict) and dcs.get("kind"):
            catalog[name]["kind"] = dcs["kind"]
    model_licenses = {k: v for k, v in (load("extraction/audit/model_licenses.json", {}) or {}).items() if isinstance(v, dict) and not v.get("skip")}
    data = {"model_licenses": model_licenses, "story": story, "comments": out_comments, "summaries": summaries, "catalog": catalog, "stories": stories}
    payload = json.dumps(data, ensure_ascii=False).replace("</", "<\\/")

    config = {"public": bool(args.public), "issues_url": args.issues_url or None,
              "utm": {"utm_source": args.utm_source, "utm_medium": "referral", "utm_campaign": args.utm_campaign}}
    js = ("// Generated by build_report.py - do not edit\n"
          f"window.HN_CONFIG = {json.dumps(config)};\nwindow.HN_DATA = " + payload + ";\n")
    if args.public:
        # self-contained static site for GitHub Pages: page + assets + data, nothing else
        import shutil
        site = os.path.join(ROOT, args.site_dir)
        os.makedirs(site, exist_ok=True)
        for f in ("styles.css", "app.js", "icon.svg", "favicon.ico", "apple-touch-icon.png", "icon-192.png",
                  "icon-512.png", "icon-maskable-512.png", "site.webmanifest", "og-image.jpg"):
            shutil.copyfile(os.path.join(ROOT, "report", f), os.path.join(site, f))
        url = args.site_url.rstrip("/") + "/"
        page = open(os.path.join(ROOT, "report", "index.html"), encoding="utf-8").read()
        page = page.replace("<!--site-url-->", (
            f'<link rel="canonical" href="{url}">\n<meta property="og:url" content="{url}">\n'
            f'<meta property="og:image" content="{url}og-image.jpg">\n<meta property="og:image:width" content="1200">\n'
            '<meta property="og:image:height" content="630">\n'
            f'<meta property="og:image:alt" content="Ask HN: What&#39;s your AI agentic setup? Answers from {story.get("comment_count")} comments, grouped and counted.">\n'
            f'<meta name="twitter:image" content="{url}og-image.jpg">'))
        with open(os.path.join(site, "index.html"), "w", encoding="utf-8") as fh:
            fh.write(page)
        # GitHub Pages serves this for any unknown path under the site, so links must be absolute
        with open(os.path.join(site, "404.html"), "w", encoding="utf-8") as fh:
            fh.write(f'''<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Page not found</title><meta name="robots" content="noindex"><link rel="icon" href="{url}icon.svg" type="image/svg+xml">
<style>body{{margin:0;background:#f5f5ee;color:#16140f;font:16px/1.5 "Avenir Next",Avenir,system-ui,sans-serif}}
.band{{background:#ff6600;padding:6px 16px;font:bold 14px Verdana,sans-serif}}.band a{{color:#000;text-decoration:none}}
main{{max-width:560px;margin:64px auto;padding:0 16px}}h1{{font:600 28px Georgia,serif;margin:0 0 8px}}a{{color:#16140f}}</style></head>
<body><div class="band"><a href="{url}">Thread analysis</a></div>
<main><h1>There's no page here</h1><p>The whole analysis is on one page: <a href="{url}">go to the Ask HN agentic setup analysis</a>.</p></main>
</body></html>
''')
        with open(os.path.join(site, "sitemap.xml"), "w", encoding="utf-8") as fh:
            fh.write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
                     f"  <url><loc>{url}</loc><lastmod>{dt.date.today().isoformat()}</lastmod></url>\n</urlset>\n")
        open(os.path.join(site, ".nojekyll"), "w").close()      # serve files as-is on GitHub Pages
        out_path = os.path.join(site, "data.js")
    else:
        out_path = os.path.join(ROOT, args.output)
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as fh:
        fh.write(js)
    if not args.public:
        # preview of the public site next to the working copy: report/index-public.html + data-public.js
        pub_cfg = {**config, "public": True}
        with open(os.path.join(ROOT, "report", "data-public.js"), "w", encoding="utf-8") as fh:
            fh.write("// Generated by build_report.py - do not edit\n"
                     f"window.HN_CONFIG = {json.dumps(pub_cfg)};\nwindow.HN_DATA = " + payload + ";\n")
        page = open(os.path.join(ROOT, "report", "index.html"), encoding="utf-8").read()
        page = page.replace('<script src="data.js"></script>', '<script src="data-public.js"></script>')
        with open(os.path.join(ROOT, "report", "index-public.html"), "w", encoding="utf-8") as fh:
            fh.write(page)

    n_items = sum(len(c["items"]) for c in out_comments)
    print(f"Wrote {os.path.relpath(out_path, ROOT)}{' (public, read-only)' if args.public else ''}: {len(out_comments)} comments, {n_items} extracted items, "
          f"{n_removed} removed by corrections, {missing} comments without extraction results, "
          f"{len(enriched)} enriched items, {len(catalog)} catalog entries")


if __name__ == "__main__":
    main()
