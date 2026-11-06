# License and business model, per tool

For each tool in `business_input.json` (public tools from an Ask HN thread, Nov 2026), decide:

- `license`: `open_source` (OSI-approved: MIT, Apache-2.0, GPL, AGPL, BSD, MPL, ISC…), `source_available`
  (code is public but the license restricts use: BSL/BUSL, FSL, Elastic, SSPL, "fair code", custom non-commercial…),
  `proprietary` (closed source), or `unknown`.
  - Trust `github_license` when it's an SPDX id. For `NOASSERTION` or no license, read the repo's license file
    (`gh api repos/<owner>/<repo>/license --jq .content | base64 -d | head -40`) and decide.
  - For models: open weights under a permissive license count as `open_source`; restrictive model licenses
    (e.g. Llama community license, non-commercial) count as `source_available`; API-only models are `proprietary`.
  - For services (subscriptions, APIs, routers, cloud providers) with no public code: `proprietary`.
- `commercial`: true if a company sells it or it has paid tiers/plans/usage pricing (open-core counts). False for
  purely free/community projects.
- `personal`: true if it's built and maintained by an individual (often a GitHub `User` owner, a side project, or the
  commenter's own tool) rather than a company, foundation or established community org.
- `note`: at most 12 words, only for non-obvious calls.

A tool can be several at once (open_source + commercial; open_source + personal).

Output `extraction/audit/business.json`: `{"<name>": {"license": "...", "commercial": bool, "personal": bool, "note": "..."}}`
for every input name. Check with a quick script that every name is present and values are valid. Reply with counts and
anything you weren't sure about.
