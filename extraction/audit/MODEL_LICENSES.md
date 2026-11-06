# Model licenses: which "open" models are really open?

`model_license_input.json` lists the model families named in an Ask HN thread (Nov 2026) with the versions people
mentioned. For each family, check the **actual license of the mentioned versions** (Hugging Face model card `license`
field and LICENSE file, plus the vendor's own pages). Many of these versions are recent, so look them up; don't rely on memory.

Classify each family (by its most-mentioned versions):
- `weights`: `permissive` (open weights under an OSI-style license: MIT, Apache-2.0, BSD…: download, modify, fine-tune,
  redistribute, commercial use with no extra conditions), `restricted` (open weights with conditions: user/revenue caps,
  acceptable-use policies, naming/attribution requirements, no-competitor clauses, non-commercial: e.g. Llama Community
  License, Gemma Terms of Use, NVIDIA Open Model License, modified MIT with attribution conditions), `closed` (API/app only),
  or `mixed` (different versions in the list fall in different classes; explain in note).
- `license`: the license name(s) as written by the vendor (e.g. "MIT", "Apache-2.0", "Llama 3.3 Community License").
- `note`: at most 20 words: the catch, if any (e.g. "attribution required above 100M MAU", "Large is research-only; Devstral is Apache-2.0").
- `sources`: 1–3 URLs you actually checked.
- `confidence`: high | medium | low.

Ignore families that aren't model families (e.g. a product name). Mark those `{"skip": true}`.

Output `extraction/audit/model_licenses.json`: `{"<family>": {...}}` for every input family. Reply with a table:
family, weights, license, the catch.
