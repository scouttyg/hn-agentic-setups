#!/usr/bin/env python3
"""Validate an extraction result file against its batch file.

Usage: python3 extraction/validate.py <batch.json> <result.json>
"""
import json
import sys

CATEGORIES = {"subscription", "api_or_model", "harness", "orchestration", "platform"}
STANCES = {"uses", "tried", "rejected", "planned"}
PAID_BY = {"self", "employer", "unknown", None}


def main(batch_path, result_path):
    batch = json.load(open(batch_path, encoding="utf-8"))
    try:
        result = json.load(open(result_path, encoding="utf-8"))
    except Exception as e:  # noqa: BLE001
        print(f"Cannot parse {result_path}: {e}")
        return 1

    texts = {c["id"]: c["text"] for c in batch}
    problems = []
    seen = set()
    if not isinstance(result, list):
        print("Result must be a JSON list")
        return 1

    for r in result:
        cid = r.get("id")
        if cid not in texts:
            problems.append(f"{cid}: id not in batch")
            continue
        if cid in seen:
            problems.append(f"{cid}: duplicate id")
        seen.add(cid)
        text = texts[cid]
        for key in ("is_answer", "summary", "items"):
            if key not in r:
                problems.append(f"{cid}: missing '{key}'")
        for i, it in enumerate(r.get("items", [])):
            where = f"{cid} item {i} ({it.get('name')})"
            if it.get("category") not in CATEGORIES:
                problems.append(f"{where}: bad category {it.get('category')!r}")
            if it.get("stance") not in STANCES:
                problems.append(f"{where}: bad stance {it.get('stance')!r}")
            if it.get("paid_by") not in PAID_BY:
                problems.append(f"{where}: bad paid_by {it.get('paid_by')!r}")
            if not it.get("name"):
                problems.append(f"{where}: missing name")
            ev = it.get("evidence") or ""
            if not ev or ev not in text:
                problems.append(f"{where}: evidence not found verbatim: {ev[:80]!r}")
        for key in ("switch_reasons", "platform_use_cases"):
            for j, x in enumerate(r.get(key, []) or []):
                ev = x.get("evidence") or ""
                if not ev or ev not in text:
                    problems.append(f"{cid} {key}[{j}]: evidence not found verbatim: {ev[:80]!r}")

    missing = [c["id"] for c in batch if c["id"] not in seen]
    if missing:
        problems.append(f"missing {len(missing)} ids: {missing[:20]}")

    if problems:
        print(f"{len(problems)} problem(s):")
        for p in problems:
            print("  -", p)
        return 1
    print(f"OK ({len(result)} comments, {sum(bool(r['is_answer']) for r in result)} answers)")
    return 0


if __name__ == "__main__":
    sys.exit(main(*sys.argv[1:3]))
