const DATA = window.HN_DATA;
// public build (GitHub Pages): read-only, no correction tools; corrections were applied at build time
const CONFIG = window.HN_CONFIG || {};
const PUBLIC = !!CONFIG.public;
// tag links we generate to tool websites so their owners can see where visits came from
// (not commenters' own links, not HN or GitHub; existing utm_* params are left alone)
const UTM = CONFIG.utm || { utm_source: "hn-agentic-report", utm_medium: "referral", utm_campaign: "ask-hn-ai-setup" };
function withUtm(href) {
  try {
    const u = new URL(href);
    if (!/^https?:$/.test(u.protocol) || /(^|\.)(ycombinator\.com|github\.com)$/.test(u.hostname)) return href;
    if ([...u.searchParams.keys()].some(k => k.startsWith("utm_"))) return href;
    Object.entries(UTM).forEach(([k, v]) => v && u.searchParams.set(k, v));
    return u.toString();
  } catch { return href; }
}
const CATALOG = DATA.catalog || {};
const CATALOG_CI = Object.fromEntries(Object.entries(CATALOG).map(([k, v]) => [k.toLowerCase(), v]));
const catOf = name => name ? CATALOG[name] || CATALOG_CI[String(name).toLowerCase()] || null : null;   // case-insensitive

const CATS = [
  { key: "subscription",  label: "Subscriptions", short: "Subscription",
    ask: "What AI subscriptions are you personally paying for? Which tiers? Multiple subscriptions from the same provider?" },
  { key: "api_or_model",  label: "APIs, routers & local models", short: "API / model",
    ask: "Are you using models outside (or instead of) those subscriptions — pay-as-you-go APIs, OpenRouter, locally hosted models?" },
  { key: "harness",       label: "Coding harnesses & interfaces", short: "Harness",
    ask: "What coding harnesses and interfaces are you using? What made you switch?" },
  { key: "orchestration", label: "Agent orchestration", short: "Orchestration",
    ask: "Are you using any agent orchestration or swarm tools?" },
  { key: "platform",      label: "Broader agent platforms", short: "Platform",
    ask: "Are you using broader agent platforms like OpenClaw / Hermes Agent / Grok bot / Dots / Muse? Main use cases?" },
];
const CAT = Object.fromEntries(CATS.map(c => [c.key, c]));
CAT.no_ai = { key: "no_ai", label: "No AI setup", short: "No AI setup", ask: "Says they don't use AI at all, or have no AI setup." };
const QNUM = Object.fromEntries(CATS.map((c, i) => [c.key, i + 1]));
const qtag = cat => QNUM[cat] ? `Q${QNUM[cat]} ${CAT[cat].short}` : CAT[cat].short;
// "None" means "nothing for this question", not "refuses AI" (that's the separate No AI setup group)
const NONE_LABEL = { subscription: "No subscription", api_or_model: "No models outside a subscription", harness: "No harness",
  orchestration: "No orchestration", platform: "No agent platform" };
const SHORT = { "Custom orchestration": "Built their own", "Custom assistant": "Built their own", "Custom harness": "Built their own" };
const displayName = it => nameOf(it) === "None" ? (NONE_LABEL[it.category] || "None") : nameOf(it);
const STANCE = { uses: "current use", tried: "tried", rejected: "stopped / rejected", planned: "planned" };
const ACCESS = { router: "Router", local: "Local / self-hosted", direct_api: "Direct API", cloud: "Cloud inference provider",
  free: "Free tier", subscription: "Subscription plan", employer: "Employer-provided", unknown: "Route not stated" };
const ROLES = { planning: "Planning", coding: "Coding", review: "Review", debugging: "Debugging", research: "Research", chat: "Chat",
  writing: "Writing", assistant: "Personal assistant", automation: "Automation / cron", experimentation: "Experimenting",
  orchestration: "Orchestration", cheap_bulk: "Cheap bulk work", privacy: "Privacy / offline" };
const HTYPE = { first_party: "Made by the model labs", third_party: "Third-party tools", custom: "Custom-built", chat_app: "Chat apps", unknown: "Not classified" };
// named by what you look at while working, not how it's installed
const IFACE = { cli: "Terminal", ide: "Code editor", desktop: "Agent app", web: "Web", mobile: "Mobile", chat: "Chat apps", multiple: "Several surfaces" };
const IFACE_HINT = { cli: "CLI or TUI agents and agent-aware terminals", ide: "You work in your files with the agent alongside (Cursor, Zed, VS Code, JetBrains)",
  desktop: "You work in a conversation or task list with agents; code stays in the background (T3 Code, Claude/Codex apps)", web: "Runs in the browser",
  mobile: "An official phone app or remote-control client", chat: "Lives inside Telegram, Slack, Signal, iMessage…" };
// every surface a tool is available on (falls back to its main one); filters match any surface
const FILTER_HINT = {
  "price:free": "No paid tier and no model costs implied (e.g. a local runtime)",
  "price:free_byok": "The tool is free; you pay for the models it uses (API key, subscription login or a local model)",
  "price:freemium": "A free plan exists, usually limited, alongside paid plans",
  "price:paid": "You need a paid plan to use it at all",
  "price:bundled": "Comes with a subscription you pay for elsewhere (e.g. Claude Code with Claude plans)",
  "runs:local": "Runs on your own computer; no account with the maker needed apart from model access",
  "runs:self_host": "You can deploy it on your own server or cloud",
  "runs:hosted": "The maker runs it for you as a service",
  "license:open": "OSI-approved license: you can clone, modify and redistribute it (copyleft licenses ask you to share changes)",
  "license:core": "The core is open source, but some parts are proprietary or need a paid license",
  "license:available": "The code is public, but the license restricts use (e.g. no competing hosted service)",
  "license:closed": "Closed source",
  "madeby:lab": "Made by an AI lab for its own models (Anthropic, OpenAI, Google…)",
  "madeby:company": "Made by another company, foundation or established open-source project",
  "weights:permissive": "Downloadable weights under MIT, Apache-2.0 or similar: modify, fine-tune and redistribute freely",
  "weights:restricted": "Downloadable weights, but the license adds conditions (usage caps, acceptable-use rules, attribution)",
  "weights:closed": "Only available through the vendor's API or apps",
  "weights:mixed": "Different versions in this family use different licenses",
  "madeby:person": "Built and maintained by an individual",
};
const surfacesOf = name => { const e = catOf(name); if (!e) return []; return e.surfaces?.length ? e.surfaces : [iface(name)].filter(Boolean); };
const fmatch = (val, v) => Array.isArray(val) ? val.includes(v) : val === v;
const LIGHT_ORCH = new Set(["Subagents (built-in)", "Git worktrees", "tmux / zellij"]);
const LAST = new Set(["No further detail", "Unspecified", "Route not stated", "Not classified", ...Object.values(NONE_LABEL)]);
const TIER_SORT = ["Free", "Go", "Lite", "Plus", "Pro", "Pro+", "AI Pro", "Max", "5x", "20x", "20x / Ultra", "Ultra", "AI Ultra", "Team / Enterprise", "Business / Enterprise", "Teams", "Workspace"];
const tierRank = t => { const i = TIER_SORT.indexOf(t); return i < 0 ? 50 : i; };

// ---------- state ----------
const LS_KEY = "hn-agentic-report-corrections-v1";
const state = {
  includeDead: true, stances: new Set(["uses"]),
  corrections: PUBLIC ? { removed: {}, renamed: {} } : JSON.parse(localStorage.getItem(LS_KEY) || '{"removed":{},"renamed":{}}'),
  expanded: {}, dfilter: null,
};
const byId = Object.fromEntries(DATA.comments.map(c => [c.id, c]));
DATA.comments.forEach(c => c.items.forEach((it, i) => {
  it._key = `${c.id}|${it.category}|${it.name}|${it.evidence}`; it._c = c; it._i = i;
  if (it.tier && !Array.isArray(it.tier)) it.tier = [it.tier];
  it.models = it.models || []; it.roles = it.roles || [];
}));
function saveCorr() { if (!PUBLIC) localStorage.setItem(LS_KEY, JSON.stringify(state.corrections)); }
function isWrong(it) { return !!state.corrections.removed[it._key]; }
function nameOf(it) { return state.corrections.renamed[it._key]?.to || it.name; }
function eligible(c) { return state.includeDead || !(c.dead || c.flagged); }
function stanceOk(it) { return state.stances.has(it.stance); }
function activeItems(pred = () => true, { ignoreStance = false, includeWrong = false } = {}) {
  const out = [];
  for (const c of DATA.comments) {
    if (!eligible(c)) continue;
    for (const it of c.items) if ((includeWrong || !isWrong(it)) && (ignoreStance || stanceOk(it)) && pred(it)) out.push(it);
  }
  return out;
}
const peopleOf = items => new Set(items.map(it => it._c.author));
let _ans = null;
function answerers() {
  if (_ans) return _ans;
  const s = new Set();
  for (const c of DATA.comments) if (eligible(c) && (c.is_answer || c.items.some(it => !isWrong(it)))) s.add(c.author);
  return (_ans = s);
}
function htype(name) {
  const e = catOf(name);
  if (e?.harness_type) return e.harness_type;
  if (/^custom|unspecified/i.test(name)) return "custom";
  if (/chat ui/i.test(name)) return "chat_app";
  return "unknown";
}
function iface(name) { const e = catOf(name); if (!e) return null; return "primary_interface" in e ? e.primary_interface : e.interface || null; }

// ---------- utils ----------
const esc = s => String(s ?? "").replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
const pct = (n, d) => d ? Math.round(100 * n / d) + "%" : "–";
const hnDate = ts => ts ? new Date(ts + "Z").toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }) : "";
const fmtDate = ts => ts ? ts.replace("T", " ").slice(0, 16) : "";
const attr = o => Object.entries(o).filter(([, v]) => v != null).map(([k, v]) => `data-${k}="${esc(v)}"`).join(" ");
const boldify = s => s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

// ---------- paths: everything is a tree ----------
const FAMILIES = ["Xiaomi MiMo", "gpt-oss", "Claude", "GPT", "DeepSeek", "Qwen", "GLM", "Gemini", "Gemma", "Kimi", "Grok", "MiniMax",
  "Mistral", "Llama", "Muse", "Nemotron", "Mercury", "Parakeet", "Whisper"];
const isVersion = t => /^[VKMvkm]?\d+(\.\d+)*$/.test(t);
function modelPath(m) {
  const fam = FAMILIES.find(f => m === f || m.startsWith(f + " ") || m.startsWith(f + "-"));
  if (!fam) return [m];
  let rest = m.slice(fam.length), version = null;
  if (rest.startsWith("-")) {                 // "GPT-6.1 Sol" -> version 6.1, line Sol
    const mm = rest.match(/^-([\d.]+)(.*)$/);
    if (mm) { version = mm[1]; rest = mm[2]; } else rest = " " + rest.slice(1);
  }
  const toks = rest.trim().split(/\s+/).filter(Boolean);
  if (!version) { const vi = toks.findIndex(isVersion); if (vi >= 0) { version = toks[vi]; toks.splice(vi, 1); } }
  if (version && fam === "DeepSeek" && /^\d/.test(version)) version = "V" + version;
  const line = toks.join(" ");
  if (!line && !version) return [fam];
  if (!line) return [fam, `${version} (no line given)`];   // e.g. "Claude 5.5": keep the version, single leftover row
  return version ? [fam, line, version] : [fam, line];
}
const famOf = m => modelPath(m)[0];
function subPath(it) {
  const t = (it.tier || []).slice();
  while (t.length && t[t.length - 1] === "Unspecified") t.pop();
  return [nameOf(it), ...t];
}
function accessPath(it) { const r = ACCESS[it.access || "unknown"] || it.access; return it.via ? [r, it.via] : [r]; }
function orchPath(n) {
  if (n === "None") return [NONE_LABEL.orchestration];
  if (n === "Custom orchestration") return ["Built their own"];
  return [LIGHT_ORCH.has(n) ? "Built-in / lightweight" : "Third-party tools", n];
}
function platPath(n) {
  if (n === "None") return [NONE_LABEL.platform];
  if (n === "Custom assistant") return ["Built their own"];
  return ["Packaged platforms", n];
}
let _prov = null;   // author -> number of providers paid for
function provCount() {
  if (_prov) return _prov;
  const m = new Map();
  activeItems(it => it.category === "subscription" && nameOf(it) !== "None").forEach(it => {
    if (!m.has(it._c.author)) m.set(it._c.author, new Set()); m.get(it._c.author).add(nameOf(it)); });
  return (_prov = new Map([...m].map(([a, s]) => [a, s.size])));
}

const MOVE_DIR = {
  official_to_third_party: "Official → third-party harness", official_to_own: "Official → their own harness",
  official_to_official: "Between official harnesses", third_party_to_official: "Third-party → official harness",
  third_party_to_third_party: "Between third-party harnesses", third_party_to_own: "Third-party → their own harness",
  own_to_other: "Own harness → something else", interface_change: "Same tool, different interface",
  dropped: "Dropped a harness", unclear: "Direction unclear" };
CAT.switch = { key: "switch", label: "Harness move", short: "Harness move", ask: "A harness switch the commenter described." };
// harness switches as tree-able records (not counted as extracted items)
const MOVES = [];
DATA.comments.forEach(c => (c.switch_reasons || []).forEach((w, i) => {
  if ((w.type || "harness") !== "harness" || !w.direction) return;
  const label = `${(w.from || []).join(", ") || "?"} → ${(w.to || []).join(", ") || "nothing"}`;
  MOVES.push({ _c: c, _key: `move|${c.id}|${i}`, category: "switch", name: label, stance: "uses", evidence: w.evidence,
    models: [], roles: [], direction: w.direction, reason: w.text || "", detail: w.text || "" });
}));
const activeMoves = () => MOVES.filter(m => eligible(m._c));
// tree registry: base filter + path function (an item may yield several paths)
const TREES = {
  subs:      { label: "Subscription", base: it => it.category === "subscription", paths: it => [nameOf(it) === "None" ? [NONE_LABEL.subscription] : subPath(it)], tierSort: true },
  nprov:     { label: "Providers per person", base: it => it.category === "subscription" && nameOf(it) !== "None",
               paths: it => { const n = provCount().get(it._c.author); return [[n === 1 ? "1 provider" : `${n} providers`]]; }, order: "label" },
  api_models:{ label: "Model (outside subscriptions)", base: it => it.category === "api_or_model", paths: it => it.models.map(modelPath) },
  api_access:{ label: "Access route", base: it => it.category === "api_or_model", paths: it => [nameOf(it) === "None" ? [NONE_LABEL.api_or_model] : accessPath(it)] },
  models:    { label: "Model", base: it => it.models.length > 0, paths: it => it.models.map(modelPath) },
  h_type:    { label: "Harness", base: it => it.category === "harness", paths: it => [nameOf(it) === "None" ? [NONE_LABEL.harness] : [HTYPE[htype(nameOf(it))], nameOf(it)]] },
  h_iface:   { label: "Harness interface", base: it => it.category === "harness" && nameOf(it) !== "None", paths: it => [[IFACE[iface(nameOf(it))] || "Not classified", nameOf(it)]] },
  h_models:  { label: "Model in harness", base: it => it.category === "harness", paths: it => it.models.map(modelPath) },
  orch:      { label: "Orchestration", base: it => it.category === "orchestration", paths: it => [orchPath(nameOf(it))] },
  plat:      { label: "Platform", base: it => it.category === "platform", paths: it => [platPath(nameOf(it))] },
  plat_roles:{ label: "Platform use", base: it => it.category === "platform" && nameOf(it) !== "None", paths: it => it.roles.map(r => [ROLES[r] || r]) },
  h_moves:   { label: "Harness move", base: it => it.category === "switch", paths: it => [[MOVE_DIR[it.direction] || it.direction, it.name]] },
  // drawer trees (applied to the drawer's own items)
  d_tier:    { label: "Tier", base: it => it.category === "subscription", paths: it => [subPath(it)], tierSort: true },
  d_models:  { label: "Models", base: () => true, paths: it => it.models.map(modelPath) },
  d_access:  { label: "Access", base: it => it.access && it.access !== "unknown" && it.category !== "subscription", paths: it => [accessPath(it)] },
  d_roles:   { label: "Used for", base: () => true, paths: it => it.roles.map(r => [ROLES[r] || r]) },
  d_stance:  { label: "Status", base: () => true, paths: it => [[STANCE[it.stance] || it.stance]] },
};
const prefixOf = (p, path) => path.every((x, i) => p[i] === x);
function treeTest(id, path, exact) {
  const T = TREES[id];
  return it => T.base(it) && T.paths(it).some(p => exact ? (p.length === path.length && prefixOf(p, path)) : prefixOf(p, path));
}
function buildTree(items, id) {
  const T = TREES[id];
  const mk = (label, path) => ({ label, path, people: new Set(), stop: new Set(), children: new Map() });
  const root = mk("", []);
  for (const it of items) {
    if (!T.base(it)) continue;
    const seen = new Set();
    for (const p of T.paths(it)) {
      const k = p.join("\u0001"); if (!p.length || seen.has(k)) continue; seen.add(k);
      let node = root;
      p.forEach((label, i) => {
        if (!node.children.has(label)) node.children.set(label, mk(label, p.slice(0, i + 1)));
        node = node.children.get(label); node.people.add(it._c.author);
      });
      node.stop.add(it._c.author);
    }
  }
  return root;
}
function sortedChildren(node, id, depth) {
  const T = TREES[id];
  return [...node.children.values()].sort((a, b) => {
    const la = LAST.has(a.label), lb = LAST.has(b.label);
    if (la !== lb) return la ? 1 : -1;
    if (T.order === "label") return parseInt(a.label) - parseInt(b.label);
    if (T.tierSort && depth > 0) return tierRank(a.label) - tierRank(b.label) || b.people.size - a.people.size;
    return b.people.size - a.people.size || a.label.localeCompare(b.label);
  });
}
// one chart component. ctx: {id, denom, limit, autoOpen, maxKids, mode: "open" (opens drawer) | "filter" (filters drawer)}
function renderTree(items, ctx) {
  const { id, denom = 0, limit = 10, autoOpen = 1, maxKids = 8, mode = "open" } = ctx;
  const top = sortedChildren(buildTree(items, id), id, 0);
  if (!top.length) return `<p class="sub" style="font-size:13px">Nothing matches the current filter.</p>`;
  const max0 = Math.max(...top.map(n => n.people.size));
  const showAllKey = `all:${mode}:${id}`;
  // keep "no subscription" / "no further detail"-type rows visible even when the list is cut to the top N
  const shownTop = state.expanded[showAllKey] ? top : [...top.slice(0, limit), ...top.slice(limit).filter(t => LAST.has(t.label))];
  const sel = state.dfilter;
  const clickAttrs = (path, exact) => mode === "open"
    ? attr({ open: "tree", tree: id, path: JSON.stringify(path), exact: exact ? 1 : null })
    : attr({ dtree: id, path: JSON.stringify(path), exact: exact ? 1 : null });
  let html = "";
  const row = (node, depth, parentN, idx, isRem = false) => {
    const n = node.people.size;
    const kids = isRem ? [] : sortedChildren(node, id, depth + 1);
    const remN = kids.length ? [...node.stop].filter(a => !kids.some(k => k.people.has(a))).length : 0;
    const key = `${mode}:${id}:${node.path.join("\u0001")}${isRem ? ":rem" : ""}`;
    const open = kids.length > 0 && (state.expanded[key] ?? (depth === 0 && idx < autoOpen));
    const w = depth === 0 ? n / max0 : n / parentN;
    const isSel = sel && mode === "filter" && sel.tree === id && JSON.stringify(sel.path) === JSON.stringify(node.path) && !!sel.exact === isRem;
    html += `<div data-rk="${esc(key)}" class="trow l${Math.min(depth, 3)} ${isRem ? "rem" : ""} ${Object.values(NONE_LABEL).includes(node.label) ? "muted" : ""} ${isSel ? "sel" : ""}" style="--d:${depth}"
        data-tipname="${esc(node.label)}" data-n="${n}" data-d="${depth === 0 ? denom : parentN}" data-lvl="${depth}">
      <span class="rk">${depth === 0 && !isRem && !LAST.has(node.label) ? `${idx + 1}.` : ""}</span>
      ${kids.length ? `<button class="tg" data-tg="${esc(key)}" data-open-now="${open ? 1 : 0}" aria-label="${open ? "Collapse" : "Expand"}">▸</button>` : `<span></span>`}
      <button class="tl" ${clickAttrs(node.path, isRem)} ${catOf(node.label) ? `data-tool="${esc(node.label)}"` : `title="${esc(node.label)}"`}>${esc(node.label)}</button>
      <span class="tb"><i data-bar-key="${esc(key)}" style="width:${(100 * Math.min(1, w)).toFixed(1)}%"></i><span class="tv"><b data-num-key="${esc(key)}">${n}</b><small>${depth === 0 ? (denom ? pct(n, denom) : "") : pct(n, parentN)}</small></span></span></div>`;
    if (!open) return;
    const moreKey = `more:${key}`;
    const shownKids = state.expanded[moreKey] ? kids : kids.slice(0, maxKids);
    shownKids.forEach((k, i) => row(k, depth + 1, n, i));
    if (kids.length > shownKids.length)
      html += `<div class="trow more" style="--d:${depth + 1}"><span></span><span></span><button class="tl" data-tg="${esc(moreKey)}">+ ${kids.length - shownKids.length} more</button><span></span><span></span></div>`;
    if (remN) row({ label: "No further detail", path: node.path, people: { size: remN } }, depth + 1, n, 0, true);
  };
  shownTop.forEach((n, i) => row(n, 0, 0, i));
  const foot = top.length > shownTop.length || state.expanded[showAllKey] && top.length > limit ? `<div class="tree-foot"><button class="linkbtn" data-tg="${showAllKey}">${state.expanded[showAllKey] ? `Show top ${limit}` : `Show all ${top.length}`}</button></div>` : "";
  return `<div class="tree${ctx.wide ? " wide" : ""}">${html}</div>${foot}`;
}

// ---------- live tokens & insight rows ----------
function nPeople(pred, opts) { return peopleOf(activeItems(pred, opts)).size; }
function tokenValue(kind, args) {
  const [cat, a, b] = args;
  const is = (c, n) => it => it.category === c && nameOf(it) === n;
  switch (kind) {
    case "n": return nPeople(is(cat, a));
    case "pct": return pct(nPeople(is(cat, a)), answerers().size);
    case "anyn": return nPeople(it => it.category === cat && nameOf(it) !== "None");
    case "pair": { const A = peopleOf(activeItems(is(cat, a))); return [...peopleOf(activeItems(is(cat, b)))].filter(x => A.has(x)).length; }
    case "route": return nPeople(it => it.category === cat && it.access === a);
    case "fam": return nPeople(it => it.models.some(m => famOf(m) === cat));
    case "htype": return nPeople(it => it.category === "harness" && htype(nameOf(it)) === cat);
    case "modeln": return nPeople(it => it.models.length > 0);
    case "stopped": return nPeople(it => is(cat, a)(it) && it.stance === "rejected", { ignoreStance: true });
    case "tried": return nPeople(it => is(cat, a)(it) && it.stance === "tried", { ignoreStance: true });
    case "answerers": return answerers().size;
    case "commenters": return new Set(DATA.comments.filter(eligible).map(c => c.author)).size;
    case "multiprov": return [...provCount().values()].filter(v => v >= 2).length;
    case "moves": return peopleOf(activeMoves().filter(m => cat.split("+").includes(m.direction))).size;
    case "noai": return nPeople(it => it.category === "no_ai");
    case "employer": return nPeople(it => it.category === "subscription" && it.paid_by === "employer");
  }
  return "?";
}
const renderTokens = s => boldify(esc(s).replace(/\{(\w+)((?::[^}:]+)*)\}/g, (m, kind, rest) =>
  tokenValue(kind, rest ? rest.slice(1).split(":").map(x => x.replace(/&amp;/g, "&")) : [])));
function insights(key) {
  const rows = DATA.summaries?.[key];
  if (!rows?.length) return "";
  return `<div class="insights">${rows.map((r, ri) => {
    let n = "", label = "", text = typeof r === "string" ? r : r.text || "";
    if (typeof r === "object" && r.n) {
      const v = renderTokens(r.n), d = answerers().size, num = Number(v);
      const share = r.pct !== false && Number.isFinite(num) && d ? `<span class="of">${pct(num, d)} of ${d}</span>` : "";
      n = `<span class="big" data-num-key="ins:${key}:${ri}">${v}</span>${share}`; label = renderTokens(r.label || "");
    }
    else {  // text-only row: its bold lead-in becomes the label so it aligns with the others
      const m = text.match(/^\*\*(.+?)\*\*[:\s]*(.*)$/s);
      if (m) { label = renderTokens(m[1].replace(/[:.]$/, "")); text = m[2].charAt(0).toUpperCase() + m[2].slice(1); }
    }
    return `<div class="ins"><span class="in-n">${n}</span><span class="in-l">${label}</span><span class="in-t">${renderTokens(text)}</span></div>`;
  }).join("")}</div>`;
}

// ---------- sections ----------
function block(title, note, body) {
  return `<div class="block"><h3>${title}</h3>${note ? `<p class="note">${note}</p>` : ""}${body}</div>`;
}
function reach(n, what, id = what) {
  const d = answerers().size;
  return `<div class="reach"><div class="reach-n"><b data-num-key="reach:${id}">${n}</b> of ${d} people ${what}</div>
    <span class="meter"><i data-bar-key="reach:${id}" style="width:${pct(n, d)}"></i></span>
    <div class="reach-note">${pct(n, d)} of everyone who described a setup. Percentages in this section use the same base of ${d}.</div></div>`;
}
function section({ id, qn, title, ask, insightKey, left, right, bottom, reachN, reachWhat = "answered this" }) {
  return `<section class="q" id="${id}">
    <header class="q-side">
      ${qn ? `<span class="qn"><span class="dot" style="background: var(--cat-${CATS[qn - 1].key})"></span>Question ${qn}</span>` : `<span class="qn">Across all answers</span>`}
      <h2>${esc(title)}</h2>
      <p class="ask">${esc(ask)}</p>
      ${reachN != null ? reach(reachN, reachWhat, id) : ""}
    </header>
    <div class="q-main">
      ${insights(insightKey)}
      <div class="${right ? "grid2" : "grid1"}"><div>${left}</div>${right ? `<div>${right}</div>` : ""}</div>
      ${bottom ? `<div class="quotes-wrap">${bottom}</div>` : ""}
    </div>
  </section>`;
}

function renderSections() {
  const d = answerers().size;
  const all = activeItems();
  const T = (id, opts = {}) => renderTree(all, { id, denom: d, autoOpen: 1, ...opts });
  let html = overallSection(d) + storiesSection();

  html += section({ id: "q-subscription", qn: 1, title: CAT.subscription.label, ask: CAT.subscription.ask, insightKey: "subscription", reachN: nPeople(it => it.category === "subscription"),
    left: block("Provider and tier", "", T("subs", { limit: 10 })),
    right: block("Providers paid for, per person", "", T("nprov", { autoOpen: 0 })),
    bottom: quoteList("switch_reasons", "Reasons people gave for switching to a different AI provider or plan", "provider", "", "switch") +
      quoteList("switch_reasons", "Reasons people gave for dropping an AI provider or plan without replacing it", "provider", "", "drop") });

  html += section({ id: "q-api_or_model", qn: 2, title: CAT.api_or_model.label, ask: CAT.api_or_model.ask, insightKey: "api_or_model", reachN: nPeople(it => it.category === "api_or_model"),
    left: block("Which models", "Family, then line, then version", T("api_models", { limit: 10 })),
    right: block("How they reach them", "Route, then service", T("api_access", { limit: 10 })),
    bottom: quoteList("switch_reasons", "Reasons people gave for changing which models they use", "model", "") + quoteList("switch_reasons", "Reasons people gave for changing how they reach models (router, local or cloud provider)", "route", "") });

  html += section({ id: "q-models", title: "Models people name", ask: "The specific models people say they use, whether through a subscription, an API, a harness or locally.", insightKey: "models", reachN: nPeople(it => it.models.length > 0), reachWhat: "named a specific model",
    left: block("Model family", "Family, then line, then version", T("models", { limit: 12 })) });

  html += section({ id: "q-harness", qn: 3, title: CAT.harness.label, ask: CAT.harness.ask, insightKey: "harness", reachN: nPeople(it => it.category === "harness"),
    left: block("Harness type", "", T("h_type", { limit: 6 })) +
          block("Moves between harnesses", "Direction, then from → to. Counts people who described a switch.", renderTree(activeMoves(), { id: "h_moves", denom: d, autoOpen: 1, limit: 10, wide: true })),
    right: block("Main interface", "Tools that run in several places count under their main one", T("h_iface")) +
           block("Models run in a harness", "Family, then line, then version", T("h_models", { limit: 8, autoOpen: 0 })),
    bottom: quoteList("switch_reasons", "Reasons people gave for moving between harnesses", "harness") });

  html += section({ id: "q-orchestration", qn: 4, title: CAT.orchestration.label, ask: CAT.orchestration.ask, insightKey: "orchestration", reachN: nPeople(it => it.category === "orchestration"),
    left: block("Approach", "", T("orch", { autoOpen: 0 })),
    bottom: quoteList("switch_reasons", "Reasons people gave for switching orchestration tools (including to their own)", "orchestration", "", "switch") +
      quoteList("switch_reasons", "Reasons people gave for dropping orchestration tools", "orchestration", "", "drop") });

  html += section({ id: "q-platform", qn: 5, title: CAT.platform.label, ask: CAT.platform.ask, insightKey: "platform", reachN: nPeople(it => it.category === "platform"),
    left: block("Approach", "", T("plat", { autoOpen: 0 })),
    right: block("What they use them for", "", T("plat_roles", { autoOpen: 0 })),
    bottom: quoteList("platform_use_cases", "What people use agent platforms for") + quoteList("switch_reasons", "Reasons people gave for switching agent platforms", "platform", "", "switch") + quoteList("switch_reasons", "Reasons people gave for dropping an agent platform", "platform", "", "drop") });

  html += toolsSection();
  document.getElementById("sections").innerHTML = html;
}

// hero: the typical setup, read left to right
function overallSection(d) {
  const cells = CATS.map(c => {
    const gs = new Map();
    activeItems(it => it.category === c.key).forEach(it => { const n = nameOf(it); if (!gs.has(n)) gs.set(n, new Set()); gs.get(n).add(it._c.author); });
    const ranked = [...gs].map(([k, s]) => ({ k, n: s.size })).sort((a, b) => b.n - a.n);
    const named = ranked.filter(g => g.k !== "None"), none = ranked.find(g => g.k === "None");
    const top = named[0]; if (!top) return "";
    const runners = named.slice(1, 3).map(g => `<li><button ${attr({ open: "name", cat: c.key, name: g.k, tool: catOf(g.k) ? g.k : null })}>${esc(g.k)}</button><span>${g.n}</span></li>`);
    if (none) runners.push(`<li class="none"><button ${attr({ open: "name", cat: c.key, name: "None" })}>${NONE_LABEL[c.key].toLowerCase()}</button><span>${none.n}</span></li>`);
    return `<div class="cell">
      <span class="qn"><span class="dot" style="background: var(--cat-${c.key})"></span>Q${QNUM[c.key]} ${esc(c.short)}</span>
      <button class="top" ${attr({ open: "name", cat: c.key, name: top.k, tool: catOf(top.k) ? top.k : null })} title="${esc(top.k)}">${esc(SHORT[top.k] || top.k)}</button>
      <div class="share"><span class="meter"><i data-bar-key="stack:${c.key}" style="width:${pct(top.n, d)}"></i></span><span class="num" data-num-key="stack:${c.key}">${top.n}</span><span class="sub">${pct(top.n, d)}</span></div>
      <ul class="runners">${runners.join("")}</ul></div>`;
  }).join("");
  const commenters = new Set(DATA.comments.filter(eligible).map(c => c.author)).size;
  return `<section class="hero" id="q-overall">
    <p class="lede">${DATA.comments.filter(eligible).length} comments came from ${commenters} people, and <b data-num-key="lede">${d}</b> of them described their setup, including
      <button class="inline" ${attr({ open: "name", cat: "no_ai", name: "No AI setup" })}>${tokenValue("noai", [])} with no AI setup at all</button>.
      Here is the most common answer to each question.</p>
    <div class="stack">${cells}</div>
    ${insights("overall")}
  </section>`;
}

// quotes lead with the commenter's own words; the paraphrase is a small label; context expands in place
function contextHtml(text, ev, radius = 260) {
  const at = text.indexOf(ev);
  if (at < 0) return esc(text);
  if (radius === Infinity) return esc(text.slice(0, at)) + `<mark style="--c: var(--bar)">${esc(ev)}</mark>` + esc(text.slice(at + ev.length));
  const s = Math.max(0, at - radius), e = Math.min(text.length, at + ev.length + radius);
  return (s > 0 ? "… " : "") + esc(text.slice(s, at)) + `<mark style="--c: var(--bar)">${esc(ev)}</mark>` + esc(text.slice(at + ev.length, e)) + (e < text.length ? " …" : "");
}
// show a quote as it sits in the comment: "…" only where something was cut, keep the sentence's own end punctuation
function quoteText(text, ev) {
  const at = text.indexOf(ev);
  if (at < 0) return { q: `“${ev}”`, whole: false };
  let end = at + ev.length;
  const before = text.slice(0, at), m = text.slice(end).match(/^[.!?…]+/);
  let shown = ev;
  if (m && !/[.!?…]$/.test(ev)) { shown += m[0]; end += m[0].length; }
  const startsSentence = at === 0 || /([.!?…]["”')]?\s+|\n\s*|^\s*)$/.test(before) || /^[>\-*\d]+[.)]?\s*$/.test(before.split("\n").pop());
  const endsSentence = /[.!?…]["”')]?$/.test(shown) || /^\s*(\n|$)/.test(text.slice(end));
  const restLen = text.replace(/\s+/g, " ").trim().length - ev.replace(/\s+/g, " ").trim().length;
  return { q: `“${startsSentence ? "" : "…"}${shown.trim()}${endsSentence ? "" : "…"}”`, whole: restLen < 40 };
}
const STORY_KIND = { agent_went_too_far: "Agent went too far", cost: "Cost", security: "Security scare", win: "Win",
  funny: "Fun", personal: "Personal", other: "Other" };
function storiesSection() {
  const all = (DATA.stories || []).filter(st => byId[st.id] && eligible(byId[st.id]));
  if (!all.length) return "";
  // default: the hand-picked featured stories, in order; "show all" adds the rest by score
  const feat = all.filter(st => st.featured).sort((a, b) => a.featured - b.featured);
  const rest = all.filter(st => !st.featured);
  const exp = state.expanded["stories"];
  const shown = exp ? [...feat, ...rest] : (feat.length ? feat : rest.slice(0, 12));
  const items = shown.map((st, i) => {
    const c = byId[st.id], key = `story:${st.id}:${i}`, open = state.expanded[key], qt = quoteText(c.text, st.evidence);
    return `<li class="story">
      <span class="kind">${esc(STORY_KIND[st.kind] || st.kind)}</span>
      <h3 class="headline">${esc(st.headline)}</h3>
      <blockquote>${editedQuote(st.edited, fmtComment(esc(reflow(qt.q))))}</blockquote>
      <div class="who">${esc(c.author)}${qt.whole ? "" : `<span class="pipe">|</span><button class="linkbtn" data-tg="${esc(key)}">${open ? "hide context" : "context"}</button>`}<span class="pipe">|</span><button class="linkbtn" data-goto="${c.id}" data-ev="${esc(st.evidence)}">in comment list</button><span class="pipe">|</span><a href="${esc(c.url)}" target="_blank" rel="noopener">on hn</a></div>
      ${open && !qt.whole ? `<div class="qctx">${fmtComment(contextHtml(c.text, st.evidence, Infinity))}</div>` : ""}</li>`;
  }).join("");
  return `<section class="q" id="q-stories">
    <header class="q-side"><span class="qn">From the comments</span><h2>Stories worth reading</h2>
      <p class="ask">Anecdotes people shared: agents going too far, cost shocks, security scares, wins and odd setups. Quotes are lightly formatted for easier reading.</p></header>
    <div class="q-main"><ul class="quotes stories">${items}</ul>
      ${all.length > shown.length || exp ? `<div class="tree-foot"><button class="linkbtn" data-tg="stories">${exp ? "Show the picks only" : `Show all ${all.length}`}</button></div>` : ""}</div>
  </section>`;
}
// mode: "switch" (moved to something) | "drop" (no replacement named) | null (all)
// a short quote is usually a conclusion; include the sentence before it so the reason travels with it (still verbatim)
function withLeadIn(text, ev) {
  const at = text.indexOf(ev);
  if (at <= 0 || ev.length >= 90) return ev;
  const before = text.slice(0, at).replace(/\s+$/, "");
  if (!before) return ev;
  let start = 0;
  for (const m of before.slice(0, -1).matchAll(/[.!?…]["”')]?\s+|\n+/g)) start = m.index + m[0].length;
  return before.length - start > 320 ? ev : text.slice(start, at + ev.length);
}
function quoteList(field, title, type = null, note = "", mode = null) {
  const rows = [];
  for (const c of DATA.comments) { if (!eligible(c)) continue;
    // one comment can yield several entries from the same passage ("Cursor, then Codex, then Claude", or four
    // Comet use cases after the same lead-in): merge entries that share their opening passage into one quote,
    // keeping each "…"-separated segment once, in order
    const mine = [];
    const norm = t => t.replace(/\[[^\]]*\]/g, "").replace(/\s+/g, " ").trim().toLowerCase();
    const segs = q => (q.edited || q.evidence).split("…").map(x => x.trim()).filter(Boolean);
    (c[field] || []).forEach((q, i) => { const dropped = Array.isArray(q.to) && q.to.length === 0;
      if ((type && (q.type || "harness") !== type) || (mode && (mode === "drop") !== dropped)) return;
      const sg = segs(q), head = norm(sg[0] || "");
      const dup = mine.find(r => { const h = norm(r.sg[0] || "");
        return r.q.evidence === q.evidence || (head.length >= 20 && h.length >= 20 && (h.startsWith(head) || head.startsWith(h))); });
      if (!dup) { mine.push({ c, q, sg, key: `qc:${field}:${c.id}:${i}` }); return; }
      for (const x of sg) if (!dup.sg.some(y => norm(y) === norm(x) || norm(y).includes(norm(x)))) dup.sg.push(x);
      dup.merged = true;
    });
    for (const r of mine) if (r.merged) {
      const raw = r.q.edited || r.q.evidence;
      const joined = r.sg.reduce((acc, x) => !acc ? x : acc + (/[.!?]["”')]?$/.test(acc) ? " … " : "… ") + x, "");
      r.q = { ...r.q, edited: (raw.trim().startsWith("…") ? "…" : "") + joined + (/…\s*$/.test(raw) ? "…" : "") };
    }
    rows.push(...mine); }
  if (!rows.length) return "";
  const expKey = `q:${field}:${type || ""}:${mode || ""}`, exp = state.expanded[expKey];
  // one quote per person per section: prefer one that states a reason, then the fuller one
  const people = [];
  const strength = r => (r.q.text ? 1e6 : 0) + (r.q.edited || r.q.evidence).length;
  for (const r of rows) { let g = people.find(p => p.author === r.c.author); if (!g) people.push(g = { author: r.c.author, rows: [r] }); else if (strength(r) > strength(g.rows[0])) g.rows = [r]; }
  const shownP = exp ? people : people.slice(0, 8);
  return `<h3>${esc(title)} <span class="sub">${people.length} ${people.length === 1 ? "person" : "people"}</span></h3>${note ? `<p class="note">${esc(note)}</p>` : ""}
    <ul class="quotes">${shownP.map(g => `<li>${g.rows.map(({ c, q, key }) => {
      const ev = withLeadIn(c.text, q.evidence), open = state.expanded[key], qt = quoteText(c.text, ev);
      return `<div class="q1">
        <blockquote>${editedQuote(q.edited, fmtComment(esc(reflow(qt.q))))}</blockquote>
        <div class="who">${esc(c.author)}${qt.whole ? "" : `<span class="pipe">|</span><button class="linkbtn" data-tg="${esc(key)}">${open ? "hide context" : "context"}</button>`}<span class="pipe">|</span><a href="${esc(c.url)}" target="_blank" rel="noopener">on hn</a></div>
        ${open && !qt.whole ? (() => {
          const full = state.expanded[key + ":full"], short = c.text.length <= 560 + q.evidence.length;
          return `<div class="qctx">${fmtComment(contextHtml(c.text, ev, full ? Infinity : 260))}</div>
            <div class="who qctx-links">${short ? "" : `<button class="linkbtn" data-tg="${esc(key)}:full">${full ? "show less" : "show full comment"}</button><span class="pipe">|</span>`}<button class="linkbtn" data-goto="${c.id}" data-ev="${esc(ev)}">find in comment list</button></div>`;
        })() : ""}</div>`;
    }).join("")}</li>`).join("")}</ul>
    ${people.length > 8 ? `<div class="tree-foot"><button class="linkbtn" data-tg="${expKey}">${exp ? "Show fewer" : `Show all ${people.length}`}</button></div>` : ""}`;
}

// editor-style quote: [insertions] shown muted, … cuts kept; falls back to the verbatim quote
function editedQuote(edited, fallbackHtml) {
  if (!edited) return fallbackHtml;
  const body = fmtComment(esc(reflow(edited))).replace(/\[([^\]<]*)\]/g, '<span class="ed">[$1]</span>');
  return `“${body}”`;
}
// break long single paragraphs into 2–3 sentence chunks (adds line breaks only; words untouched)
function reflow(text) {
  return text.split(/\n{2,}/).map(par => {
    if (par.length < 280 || par.includes("\n")) return par;
    const sents = par.split(/(?<=[.!?…]["”')]?)\s+(?=["“(]?[A-Z0-9])/);
    if (sents.length < 4) return par;
    const out = []; let cur = "";
    for (const st of sents) {
      cur = cur ? cur + " " + st : st;
      if (cur.length > 200 || cur.split(/[.!?…]\s/).length >= 3) { out.push(cur); cur = ""; }
    }
    if (cur) out.length && cur.length < 60 ? out[out.length - 1] += " " + cur : out.push(cur);
    return out.join("\n\n");
  }).join("\n\n");
}
// ---------- light formatting for comment text (input is already-escaped HTML that may contain <mark>s) ----------
function shortUrl(u) {
  const t = u.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  return t.length > 42 ? t.slice(0, 40) + "…" : t;
}
function linkify(html) {   // only touch text between tags, never attributes
  return html.split(/(<[^>]+>)/).map((part, i) => i % 2 ? part : part.replace(/https?:\/\/[^\s<)"]+[^\s<)".,;:!?]/g,
    u => `<a class="ext" href="${u}" target="_blank" rel="noopener nofollow">${shortUrl(u)}</a>`)).join("");
}
function fmtComment(html) {
  const lines = linkify(html).split("\n");
  return lines.map(line => {
    const bare = line.replace(/<[^>]+>/g, "");
    const balanced = (line.match(/<mark/g) || []).length === (line.match(/<\/mark>/g) || []).length;
    if (!balanced) return line;                         // a highlight spans lines: leave the line as is
    const bare2 = bare.replace(/^[“"…\s]+/, "");
    if (/^&gt;/.test(bare2)) return `<span class="hnq">${line.replace(/^(\s*)&gt;\s?/, "$1")}</span>`;
    if (/^(\d+[.)]|[-*•])\s+/.test(bare2)) return `<span class="li">${line}</span>`;
    return line;
  }).join("\n").replace(/\n{2,}/g, "\n<span class=\"pgap\"></span>");
}

// ---------- highlighting & item cards ----------
function highlight(text, items) {
  const spans = [];
  for (const it of items) { if (!it.evidence) continue; const at = text.indexOf(it.evidence); if (at >= 0) spans.push({ s: at, e: at + it.evidence.length, it }); }
  if (!spans.length) return esc(text);
  const cuts = new Set([0, text.length]); spans.forEach(sp => { cuts.add(sp.s); cuts.add(sp.e); });
  const pts = [...cuts].sort((a, b) => a - b);
  let html = "";
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1], cover = spans.filter(sp => sp.s <= a && sp.e >= b), seg = esc(text.slice(a, b));
    if (!cover.length) { html += seg; continue; }
    html += `<mark data-cat="${cover[0].it.category}" style="--c: var(--cat-${cover[0].it.category})" data-k="${esc(cover.map(sp => sp.it._key).join("\u0001"))}" aria-label="${esc(cover.map(sp => `${CAT[sp.it.category].short}: ${nameOf(sp.it)}`).join("; "))}">${seg}</mark>`;
  }
  return html;
}
function excerpt(text, it, radius = 220) {
  const at = text.indexOf(it.evidence);
  if (at < 0 || text.length <= radius * 2 + it.evidence.length) return highlight(text, [it]);
  const s = Math.max(0, at - radius), e = Math.min(text.length, at + it.evidence.length + radius);
  return (s > 0 ? "… " : "") + highlight(text.slice(s, e), [it]) + (e < text.length ? " …" : "");
}
function itemFacts(it) {
  return [
    ["Status", STANCE[it.stance] || it.stance],
    it.tier && subPath(it).length > 1 && ["Tier", subPath(it).slice(1).join(" › ")],
    it.models.length && ["Models", it.models.map(m => modelPath(m).join(" › ")).join(", ")],
    it.access && it.access !== "unknown" && it.category !== "subscription" && ["Access", (ACCESS[it.access] || it.access) + (it.via ? ` › ${it.via}` : "")],
    it.roles.length && ["Used for", it.roles.map(r => ROLES[r] || r).join(", ")],
    it.cost && ["Cost", it.cost],
    it.accounts > 1 && ["Accounts", it.accounts],
    it.paid_by && it.paid_by !== "unknown" && ["Paid by", it.paid_by],
  ].filter(Boolean);
}
function itemChip(it) {
  const wrong = isWrong(it), renamed = !!state.corrections.renamed[it._key];
  const facts = itemFacts(it).filter(([k]) => !["Used for", "Status", "Paid by"].includes(k));
  if (it.use) facts.push(["Use", it.use]);
  const title = [it.detail && `Original detail: ${it.detail}`, it.raw_name && `Extracted as: ${it.raw_name}`].filter(Boolean).join("\n");
  return `<span class="xchip ${wrong ? "wrong" : ""} ${renamed ? "renamed" : ""}" style="--c: var(--cat-${it.category})" data-k="${esc(it._key)}">
    <span class="main" title="${esc(title || "Show evidence")}">
      <span class="line1"><span class="cat">${qtag(it.category)}</span><span class="nm" ${catOf(nameOf(it)) ? `data-tool="${esc(nameOf(it))}" data-cat="${it.category}"` : ""}>${esc(displayName(it))}</span>
        ${it.stance !== "uses" ? `<span class="st">${esc(STANCE[it.stance] || it.stance)}</span>` : ""}${it.paid_by === "employer" ? `<span class="st">employer-paid</span>` : ""}</span>
      ${facts.length ? `<span class="facetline">${facts.map(([k, v]) => `<span><b>${k.toLowerCase()}</b> ${esc(v)}</span>`).join("")}</span>` : ""}
    </span>
    ${it.category === "switch" || PUBLIC ? "" : `<span class="acts"><button data-act="rename" title="Rename / re-categorize this item">✎</button>
      <button data-act="wrong" title="${wrong ? "Restore" : "Mark this extraction wrong"}">${wrong ? "↺" : "✗"}</button></span>`}</span>`;
}

// ---------- header & filters ----------
function renderHeader() {
  const s = DATA.story;
  document.getElementById("title").innerHTML = `<a href="${esc(s.url)}" style="text-decoration:none">${esc(s.title)}</a>`;
  const when = s.timestamp ? new Date(s.timestamp + "Z").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "";
  // the thread was saved once; points and comment counts are as of then, later comments aren't included
  const asOf = s.captured_at ? new Date(s.captured_at).toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit", timeZoneName: "short" }) : "";
  document.getElementById("meta").innerHTML = `${s.points} points by ${esc(s.author)} on ${when} <span class="pipe">|</span> ${s.comment_count} comments${asOf ? ` as of ${esc(asOf)}` : ""} <span class="pipe">|</span> <a href="${esc(s.url)}">open the thread</a>`;
  document.querySelectorAll("[data-captured]").forEach(el => {
    el.hidden = !asOf;
    el.innerHTML = `It's a snapshot: the thread was saved on ${esc(asOf)}, when it had ${s.comment_count} comments. Anything posted or edited after that isn't included.`;
  });
}
function renderStats() {
  const elig = DATA.comments.filter(eligible);
  const statsEl = document.getElementById("stats");
  if (statsEl) statsEl.innerHTML = [
    [elig.length, "comments counted"], [new Set(elig.map(c => c.author)).size, "unique commenters"],
    [answerers().size, "people who described their setup"], [activeItems().length, "extracted mentions (current filter)"],
  ].map(([n, l]) => `<div class="stat"><div class="n">${n.toLocaleString()}</div><div class="l">${l}</div></div>`).join("");
  // filter chip counts (mentions per status / dead-flagged comments)
  const allEl = []; DATA.comments.forEach(c => { if (eligible(c)) c.items.forEach(it => { if (!isWrong(it)) allEl.push(it); }); });
  document.querySelectorAll("[data-stance]").forEach(b => { b.querySelector(".k").dataset.numKey = "chip:" + b.dataset.stance; b.querySelector(".k").textContent = allEl.filter(it => it.stance === b.dataset.stance).length; });
  document.querySelector("[data-dead] .k").textContent = DATA.comments.filter(c => c.dead || c.flagged).length;
  const nW = Object.keys(state.corrections.removed).length, nR = Object.keys(state.corrections.renamed).length;
  const corrEl = document.getElementById("corr");
  if (corrEl) corrEl.innerHTML = (nW || nR) ? `<b>${nW}</b> marked wrong, <b>${nR}</b> renamed <span class="pipe">|</span> <button id="exportCorr" class="linkbtn">Export</button> <span class="pipe">|</span> <button id="resetCorr" class="linkbtn">Reset</button>` : `<span class="sub">None yet.</span>`;
  syncSettingsBadge();
}

// ---------- drawer ----------
let drawerSpec = null;
function specFromData(d) {
  if (d.open === "tree") {
    const path = JSON.parse(d.path), exact = !!d.exact, T = TREES[d.tree], last = path[path.length - 1];
    const isTool = !exact && catOf(last);
    return { title: isTool ? last : path.join(" › ") + (exact ? " › no further detail" : ""),
      sub: isTool && path.length > 1 ? `${T.label}: ${path.slice(0, -1).join(" › ")}` : T.label, name: isTool ? last : null, pred: treeTest(d.tree, path, exact),
      source: d.tree === "h_moves" ? activeMoves : null };
  }
  if (d.open === "tool") return { title: d.name, sub: "", name: d.name, pred: it => nameOf(it) === d.name };
  if (d.open === "name") return { title: d.name === "None" ? NONE_LABEL[d.cat] : d.name, sub: CAT[d.cat].short, name: d.name,
    pred: it => it.category === d.cat && nameOf(it) === d.name };
}
function openDrawer(spec) {
  drawerSpec = spec; state.dfilter = null; renderDrawer(); tip.style.display = "none";
  const dr = document.getElementById("drawer"); dr.classList.add("open"); dr.setAttribute("aria-hidden", "false");
  document.getElementById("drawerBg").classList.add("open"); document.getElementById("dBody").scrollTop = 0;
}
function closeDrawer() {
  drawerSpec = null; const dr = document.getElementById("drawer"); dr.classList.remove("open"); dr.setAttribute("aria-hidden", "true");
  document.getElementById("drawerBg").classList.remove("open");
}
// ---------- tool index (appendix): every catalogued tool as a card, sortable ----------
// sections follow the audited kind of each tool (extraction/audit/decisions.json), falling back to its main question
const TOOL_KINDS = [["harness", "Coding harnesses"], ["orchestration", "Agent orchestration"], ["platform", "Agent platforms"],
  ["subscription", "Subscriptions & plans"], ["model", "Model families"], ["api_provider", "APIs, routers & cloud providers"],
  ["runtime", "Local runtimes"]];
const KIND_FALLBACK = { api_or_model: "model" };
const KIND_DESC = {
  "": "Everything the thread mentioned, grouped by what kind of thing it is. Pick a kind above to filter it.",
  harness: "The programs you drive an AI coding agent through. They read your repo, edit files, run commands and talk to a model. Some come from the labs (Claude Code, Codex); others are independent and work with many models (Pi, OpenCode, Cursor).",
  orchestration: "Tools for running and coordinating many agent sessions at once: splitting up work, running agents in parallel (often each in its own git worktree), and keeping track of what each is doing (Herdr, Conductor, Paseo).",
  platform: "Always-on, general-purpose agents that work beyond your codebase: reading email, managing calendars, running scheduled jobs, often reachable from a chat app (OpenClaw, Hermes Agent, Grok bot, Dots).",
  subscription: "Flat-rate plans that buy model access with usage limits that reset (Claude Pro/Max, ChatGPT Plus/Pro, OpenCode Go). Many harnesses can sign in with one instead of a pay-per-token API key.",
  model: "The model families people named, from closed frontier models used through subscriptions or APIs (Claude, GPT, Gemini) to open-weight models run cheaply through routers or on people's own hardware (DeepSeek, Qwen, GLM).",
  api_provider: "Pay-as-you-go ways to reach models: the labs' own APIs, routers that put many models behind one key and one bill (OpenRouter), and cloud services that host open-weight models (DeepInfra, AWS Bedrock).",
  runtime: "Software that runs models on your own machine, downloading weights and serving them locally, often behind an OpenAI-compatible API that harnesses can use (Ollama, llama.cpp, MLX, LM Studio).",
};
const TAB_LABEL = { harness: "Harnesses", orchestration: "Orchestration", platform: "Platforms", subscription: "Subscriptions",
  model: "Models", api_provider: "APIs", runtime: "Runtimes", technique: "Techniques" };
const TOOL_SORTS = {
  used: ["Most used", t => t.uses],
  liked: ["Most liked", t => t.pos - t.neg * 0.5 + t.pos / 100],
  disliked: ["Most disliked", t => t.neg + t.neg / 100 - t.pos / 1000],
  left: ["Most tried, then left", t => t.tried + t.stopped],
  stars: ["GitHub stars", t => t.stars ?? -1],
  az: ["A–Z", null],
};
// generic buckets ("Custom orchestration", "Local models (unspecified)") aren't tools
// techniques (git worktrees, tmux/zellij, Fizzy) stay in the charts only
const isBucket = n => { const e = catOf(n); if (e?.kind) return ["bucket", "not_a_tool", "technique"].includes(e.kind); return !e || (!e.website && !e.github && /custom|unspecified|bucket|generic|various|other |none|chat ui|git worktrees|subagents|tmux/i.test(n + " " + (e.description || "").slice(0, 60))); };
function toolIndexData(catKey = "") {
  const by = new Map();
  for (const c of DATA.comments) { if (!eligible(c)) continue;
    for (const it of c.items) { if (isWrong(it) || it.category === "no_ai" || nameOf(it) === "None") continue;

      const n = nameOf(it); if (isBucket(n) || !isPublicTool(n) || catOf(n)?.kind === "model") continue;
      if (!by.has(n)) by.set(n, { name: n, cats: {}, items: [] });
      const t = by.get(n); t.items.push(it); t.cats[it.category] = (t.cats[it.category] || 0) + 1; } }
  return [...by.values()].map(t => {
    const ppl = st => peopleOf(t.items.filter(it => it.stance === st)).size;
    const ops = opinionsFor(it => nameOf(it) === t.name);
    const main = Object.entries(t.cats).sort((a, b) => b[1] - a[1])[0][0];
    const cat = catOf(t.name).kind || KIND_FALLBACK[main] || main;
    return { ...t, cat, uses: ppl("uses"), tried: ppl("tried"), stopped: ppl("rejected"),
      pos: ops.positive.length, neg: ops.negative.length, mixed: ops.mixed.length, stars: catOf(t.name).stars ?? null };
  }).filter(t => t.uses + t.tried + t.stopped > 0);
}
// model families are cards of their own: counted wherever people named them (subscriptions, APIs, harnesses, local)
const FAMILY_INFO = {
  "Claude": ["Anthropic", false, "Anthropic's model family: Opus, Sonnet, Haiku and Fable."],
  "GPT": ["OpenAI", false, "OpenAI's GPT models, including the Sol, Luna and Astra lines and Codex variants."],
  "Gemini": ["Google", false, "Google's Gemini models, including Flash, Pro and the Argon line."],
  "Grok": ["xAI", false, "xAI's Grok models."],
  "DeepSeek": ["DeepSeek", true, "DeepSeek's open-weight models; V4.1 Flash is the thread's go-to cheap workhorse."],
  "Qwen": ["Alibaba", true, "Alibaba's open-weight Qwen models, popular for local use (27B, 35B-A3B, Flash Next)."],
  "GLM": ["Z.ai", true, "Z.ai's open-weight GLM models, including the cheap GLM Flash variants."],
  "Gemma": ["Google", "restricted", "Google's open-weight Gemma models, sized for laptops and small GPUs."],
  "Kimi": ["Moonshot AI", "restricted", "Moonshot AI's open-weight Kimi models."],
  "MiniMax": ["MiniMax", true, "MiniMax's open-weight models."],
  "Mistral": ["Mistral AI", true, "Mistral AI's models, including open-weight Devstral and Mistral Large."],
  "Llama": ["Meta", "restricted", "Meta's Llama models, open weights under a restrictive community license."],
  "Xiaomi MiMo": ["Xiaomi", true, "Xiaomi's open-weight MiMo models."],
  "Nemotron": ["NVIDIA", true, "NVIDIA's open-weight Nemotron models."],
  "gpt-oss": ["OpenAI", true, "OpenAI's open-weight gpt-oss models."],
  "Muse": ["Meta", false, "Meta's Muse models (Spark, Glimmer, Wonder)."],
  "Mercury": ["Inception", false, "Inception's Mercury diffusion language models."],
};
function familyCards() {
  const all = activeItems(it => it.models.length > 0);
  const fams = new Map();
  all.forEach(it => it.models.forEach(m => { const p = modelPath(m), f = p[0];
    if (!fams.has(f)) fams.set(f, { name: f, people: new Set(), versions: new Map() });
    const F = fams.get(f); F.people.add(it._c.author);
    const v = p.slice(1).filter(x => x !== "Not specified").join(" ");
    if (v) { if (!F.versions.has(v)) F.versions.set(v, new Set()); F.versions.get(v).add(it._c.author); } }));
  return [...fams.values()].map(F => { const info = FAMILY_INFO[F.name], ml = (DATA.model_licenses || {})[F.name];
    const open = ml ? ({ permissive: true, restricted: "restricted", closed: false, mixed: "mixed" }[ml.weights] ?? null) : (info ? info[1] : null);
    return { family: true, name: F.name, cat: "model", uses: F.people.size, tried: 0, stopped: 0, pos: 0, neg: 0, mixed: 0, stars: null,
      vendor: info?.[0] || catOf(F.name)?.vendor || null, open, licName: ml?.license || null, licNote: ml?.note || null,
      desc: info?.[2] || catOf(F.name)?.description || "",
      top: [...F.versions].sort((a, b) => b[1].size - a[1].size).slice(0, 3).map(([v]) => v) }; })
    .filter(F => F.uses > 0);
}
// ---------- tool index filters ----------
// global rows apply in every section; section rows only appear (and only apply) on their tab
const licenseOf = t => t.family ? null   // weights aren't "open source"; the Models tab has its own Weights filter
  : ({ open_source: "open", open_core: "core", source_available: "available", proprietary: "closed" }[catOf(t.name)?.license] || null);
const pricingOf = t => t.family ? null : catOf(t.name)?.commercial === true ? "paid" : catOf(t.name)?.commercial === false ? "free" : null;
const maintOf = t => t.family ? "org" : catOf(t.name)?.personal === true ? "person" : catOf(t.name)?.personal === false ? "org" : null;
const GLOBAL_FILTERS = [
  ["license", "License", licenseOf, [["open", "Open source"], ["core", "Open core"], ["available", "Source-available"], ["closed", "Proprietary"]]],
  ["pricing", "Cost to use", pricingOf, [["paid", "Has paid plans"], ["free", "Free to use"]]],
  ["maint", "Maintainer", maintOf, [["org", "Company or org"], ["person", "Individual"]]],
];
const API_KIND = it => it.access === "router" ? "router" : it.access === "cloud" ? "cloud" : it.access === "direct_api" ? "direct" : null;
function apiKindOf(name) {
  const c = {}; activeItems(it => nameOf(it) === name && it.category === "api_or_model", { ignoreStance: true })
    .forEach(it => { const k = API_KIND(it); if (k) c[k] = (c[k] || 0) + 1; });
  return Object.entries(c).sort((a, b) => b[1] - a[1])[0]?.[0] || null;
}
const [LICENSE_ROW] = GLOBAL_FILTERS;
// pricing and where it runs, researched per tool (extraction/audit/pricing.json)
const PRICE_LABEL = { free: "Free", free_byok: "Free, bring your own model", freemium: "Free tier + paid plans", paid: "Paid plan required", bundled: "Included with a subscription" };
const PRICE_ROW = ["price", "Pricing", t => catOf(t.name)?.pricing || null, Object.entries(PRICE_LABEL)];
const RUNS_ROW = ["runs", "Runs", t => catOf(t.name)?.runs || [], [["local", "On your machine"], ["self_host", "On your own server"], ["hosted", "Hosted by the maker"]]];
// one "who makes it?" row: a model lab vs another company/project vs an individual
// a "model lab" is a vendor that trains models, whatever kind of tool this is (Dots by OpenAI, Grok bot by xAI…)
const LAB_VENDOR = /\b(OpenAI|Anthropic|Google|DeepMind|xAI|SpaceX Super Intelligence|Meta|Mistral|DeepSeek|Moonshot|Alibaba|Qwen|Z\.ai|Zhipu|MiniMax|Xiaomi|Amazon|AWS|Nous Research|Tencent|Meituan|NVIDIA)\b/;   // Microsoft left out: Copilot/VS Code read as third-party tools on others' models
const madeBy = t => { const e = catOf(t.name) || {};
  if (e.harness_type === "first_party" || LAB_VENDOR.test(e.vendor || "")) return "lab";
  return e.personal === true ? "person" : e.personal === false ? "company" : null; };
const MADE_ROW = ["madeby", "Made by", madeBy, [["lab", "A model lab"], ["company", "Another company or project"], ["person", "An individual"]]];
const SECTION_FILTERS = {
  runtime: [LICENSE_ROW, PRICE_ROW],
  harness: [MADE_ROW, LICENSE_ROW, PRICE_ROW, RUNS_ROW,
    ["iface", "Available as", t => surfacesOf(t.name), [["cli", "Terminal"], ["ide", "Code editor"], ["desktop", "Agent app"], ["web", "Web"], ["mobile", "Mobile"]]],
  ],
  orchestration: [MADE_ROW, LICENSE_ROW, PRICE_ROW, RUNS_ROW, ["iface", "Available as", t => surfacesOf(t.name), [["cli", "Terminal"], ["desktop", "Agent app"], ["web", "Web"], ["mobile", "Mobile"]]]],
  platform: [MADE_ROW, LICENSE_ROW, PRICE_ROW, RUNS_ROW, ["iface", "Use it from", t => surfacesOf(t.name), [["chat", "Chat apps"], ["web", "Web"], ["mobile", "Mobile"], ["desktop", "Desktop"], ["cli", "Terminal"]]]],
  model: [["weights", "Weights", t => ({ true: "permissive", restricted: "restricted", false: "closed", mixed: "mixed" }[String(t.open)] || null),
    [["permissive", "Open, permissive license"], ["restricted", "Open, restricted license"], ["closed", "Proprietary"], ["mixed", "Mixed by version"]]]],
  api_provider: [["apitype", "Type", t => apiKindOf(t.name), [["router", "Router"], ["direct", "Vendor's own API"], ["cloud", "Cloud inference"]]]],
};
function toolsSection() {
  const sortKey = state.toolSort || "used", catKey = state.toolCat || "", q = (state.toolQ || "").toLowerCase();
  const F = state.toolF || {};
  const all = [...toolIndexData(), ...familyCards()];
  const rows = (catKey && SECTION_FILTERS[catKey]) || [];   // filters belong to their tab; none on "All"
  const inTab = all.filter(t => !catKey || t.cat === catKey);
  const passes = (t, skip) => rows.every(([k, , f]) => k === skip || !F[k] || fmatch(f(t), F[k]))
    && (!q || t.name.toLowerCase().includes(q) || ((t.desc ?? catOf(t.name)?.description) || "").toLowerCase().includes(q));
  let tools = inTab.filter(t => passes(t));
  const f = TOOL_SORTS[sortKey][1];
  tools.sort(f ? (a, b) => f(b) - f(a) || a.name.localeCompare(b.name) : (a, b) => a.name.localeCompare(b.name));
  const anyFilter = rows.some(([k]) => F[k]) || q;

  // tabs: sections are navigation (counts respect the global filters)
  const tabCount = k => all.filter(t => !k || t.cat === k).length;
  const tabs = `<nav class="ttabs" aria-label="Kinds of tools">${[["", "All"], ...TOOL_KINDS].map(([k, l]) =>
    `<button class="ttab" data-toolcat="${k}" aria-current="${k === catKey}" title="${esc(l)}">${esc(TAB_LABEL[k] || l)} <span class="n">${tabCount(k)}</span></button>`).join("")}</nav>`;
  // refine panel: labelled single-choice rows; counts are what you'd get by picking that option
  const optRow = ([k, label, fn, opts]) => {
    const cnt = v => inTab.filter(t => passes(t, k) && fmatch(fn(t), v)).length;
    const options = opts.filter(([v]) => cnt(v) || F[k] === v);
    if (!options.length) return "";
    return `<div class="frow"><span class="flab">${esc(label)}</span><span class="fopts">
      <button class="fopt" data-tf="${k}" data-v="" aria-pressed="${!F[k]}">Any</button>${options.map(([v, l]) =>
      `<button class="fopt" data-tf="${k}" data-v="${v}" aria-pressed="${F[k] === v}"${(k === "iface" ? IFACE_HINT[v] : FILTER_HINT[`${k}:${v}`]) ? ` title="${esc(k === "iface" ? IFACE_HINT[v] : FILTER_HINT[`${k}:${v}`])}"` : ""}>${esc(l)} <span class="n">${cnt(v)}</span></button>`).join("")}</span></div>`;
  };
  const rowHtml = rows.map(optRow).join("");
  const refine = `<p class="tdesc">${esc(KIND_DESC[catKey] || "")}</p>` + (catKey && rowHtml ? `<div class="refine">${rowHtml}</div>` : "");
  // results bar: plain utilities
  const bar = `<div class="tbar"><span class="tcount"><b>${tools.length}</b> ${tools.length === 1 ? "tool" : "tools"}${anyFilter ? ` <button class="linkbtn" data-toolclear="1">clear filters</button>` : ""}</span>
    <span class="tutil"><label>Sort by <select id="toolSort">${Object.entries(TOOL_SORTS).map(([k, [l]]) => `<option value="${k}" ${k === sortKey ? "selected" : ""}>${l}</option>`).join("")}</select></label>
    <input type="search" id="toolQ" placeholder="Search tools" value="${esc(state.toolQ || "")}" aria-label="Search tools"></span></div>`;

  const famCard = t => `<button class="tcard" ${attr({ open: "tree", tree: "models", path: JSON.stringify([t.name]) })}>
      <span class="tc-top">${t.vendor ? esc(`by ${t.vendor}`) : ""}<span class="stars" ${t.licNote ? `title="${esc(t.licNote)}"` : ""}>${t.open === true ? "open weights" : t.open === "restricted" ? "open weights, restricted" : t.open === "mixed" ? "mixed licenses" : t.open === false ? "proprietary" : ""}</span></span>
      <span class="tc-name">${esc(t.name)}</span><span class="tc-desc">${esc(t.desc)}</span>
      ${t.licName ? (() => { const parts = t.licName.split(/\s*;\s*/), first = parts[0].replace(/\s*\(.*\)$/, "");
        return `<span class="tc-tags"><span class="badge" title="${esc(parts.join(" · ") + (t.licNote ? ` — ${t.licNote}` : ""))}">${esc(first)}${parts.length > 1 ? ` +${parts.length - 1}` : ""}</span></span>`; })() : ""}
      <span class="tc-stats"><span><b>${t.uses}</b> ${t.uses === 1 ? "person names it" : "people name it"}</span></span>
      ${t.top.length ? `<span class="tc-ops sub">${esc(t.top.join(" · "))}</span>` : ""}</button>`;
  const tagLine = t => [licenseOf(t) === "open" && (catOf(t.name)?.kind === "model" ? "Open weights" : "Open source"), licenseOf(t) === "core" && "Open core", licenseOf(t) === "available" && "Source-available",
    (catOf(t.name)?.pricing ? PRICE_LABEL[catOf(t.name).pricing] : pricingOf(t) === "paid" && "Has paid plans"), madeBy(t) === "lab" && "Model lab", madeBy(t) === "person" && "Individual"].filter(Boolean);
  const card = t => { if (t.family) return famCard(t); const e = catOf(t.name);
    return `<button class="tcard" ${attr({ open: "tool", name: t.name, tool: t.name })}>
      <span class="tc-top">${publicVendor(t.name) ? esc(`by ${publicVendor(t.name)}`) : ""}${e.stars != null ? `<span class="stars">★ ${fmtStars(e.stars)}</span>` : ""}</span>
      <span class="tc-name">${esc(t.name)}</span><span class="tc-desc">${esc(e.description)}</span>
      ${surfacesOf(t.name).length > 1 || ["harness", "orchestration", "platform"].includes(t.cat) ? `<span class="tc-surf">${surfacesOf(t.name).map(x => esc(IFACE[x] || x)).join(" · ")}</span>` : ""}
      ${tagLine(t).length ? `<span class="tc-tags">${tagLine(t).map(l => `<span class="badge">${esc(l)}</span>`).join("")}</span>` : ""}
      <span class="tc-stats"><span><b>${t.uses}</b> use it</span>${t.tried ? `<span><b>${t.tried}</b> tried</span>` : ""}${t.stopped ? `<span><b>${t.stopped}</b> stopped</span>` : ""}</span>
      ${t.pos || t.neg || t.mixed ? `<span class="tc-ops"><span class="pos">▲ ${t.pos}</span><span class="neg">▼ ${t.neg}</span>${t.mixed ? `<span>${t.mixed} mixed</span>` : ""}</span>` : `<span class="tc-ops sub">no opinions given</span>`}
    </button>`; };
  const groups = catKey ? [[catKey, null, tools]] : TOOL_KINDS.map(([k, l]) => [k, l, tools.filter(t => t.cat === k)]).filter(g => g[2].length);
  const lim = catKey ? 24 : 9;
  const emptyHtml = `<p class="empty-tools">No tools here match these filters. <button class="linkbtn" data-toolclear="1">Clear filters</button></p>`;
  const grids = !tools.length ? emptyHtml : groups.map(([k, label, list]) => { const ek = `tools:${k}`, exp = state.expanded[ek], shown = exp ? list : list.slice(0, lim);
    return `${label ? `<h3 class="tkind">${esc(label)} <span class="sub">${list.length}</span></h3><p class="tdesc small">${esc(KIND_DESC[k] || "")}</p>` : ""}<div class="tgrid">${shown.map(card).join("")}</div>
      ${list.length > lim ? `<div class="tree-foot"><button class="linkbtn" data-tg="${ek}">${exp ? "Show fewer" : `Show all ${list.length}`}</button></div>` : ""}`; }).join("")
    || `<p class="empty-tools">No tools here match these filters. <button class="linkbtn" data-toolclear="1">Clear filters</button></p>`;
  return `<section class="q" id="tools">
    <header class="q-side"><span class="qn">Appendix</span><h2>Tool index</h2>
      <p class="ask">Every tool mentioned in the thread, with what it is and how people feel about it. Click a card for the full profile.</p></header>
    <div class="q-main">${tabs}${refine}${bar}${grids}</div></section>`;
}

// ---------- tool profile (side panel) + hover card ----------
function toolLinks(name) {
  const e = catOf(name); if (!e) return [];
  const links = [];
  const ghUrl = e.github ? `github.com/${e.github}`.toLowerCase() : null;
  const site = e.website && e.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  if (e.website && site.toLowerCase() !== ghUrl) links.push(`<a href="${esc(withUtm(e.website))}" target="_blank" rel="noopener">${esc(site)}</a>`);
  if (e.github) links.push(`<a href="https://github.com/${esc(e.github)}" target="_blank" rel="noopener">GitHub${e.stars != null ? ` ★ ${fmtStars(e.stars)}` : ""}</a>`);
  if (e.pushed_at) links.push(`<span>updated ${esc(e.pushed_at.slice(0, 10))}</span>`);
  return links;
}
// vendor credits are curated in extraction/vendor_display.json (individuals' names are removed at build time)
const publicVendor = name => catOf(name)?.vendor || null;
// private, unshared tools have no public website or repo
const isPublicTool = n => { const e = catOf(n); return !!(e && (e.website || e.github)); };
const fmtStars = n => n >= 1000 ? (n / 1000).toFixed(n >= 10000 ? 0 : 1) + "k" : String(n);
function toolMeta(name) {
  const e = catOf(name); if (!e) return [];
  return [publicVendor(name) && `by ${publicVendor(name)}`, e.harness_type && HTYPE[e.harness_type], surfacesOf(name).length && surfacesOf(name).map(x => IFACE[x] || x).join(" / "),
    e.open_source === true && "open source", e.archived && "archived"].filter(Boolean);
}
// status split ignores the status filter: "28 use it now · 3 tried · 1 stopped"
function statusSplit(pred) {
  const its = activeItems(pred, { ignoreStance: true });
  const by = st => peopleOf(its.filter(it => it.stance === st)).size;
  return [["use it now", by("uses")], ["tried", by("tried")], ["stopped", by("rejected")], ["plan to", by("planned")]].filter(([, n]) => n);
}
// opinions: one per person, strongest first
function opinionsFor(pred) {
  const out = { positive: [], negative: [], mixed: [] }, seen = new Set();
  activeItems(pred, { ignoreStance: true }).forEach(it => {
    const o = it.opinion; if (!o || !out[o.sentiment]) return;
    const k = o.sentiment + "|" + it._c.author; if (seen.has(k)) return; seen.add(k);
    out[o.sentiment].push({ it, o });
  });
  return out;
}
function opinionList(list, max = 6, key = "") {
  const exp = state.expanded["op:" + key], shown = exp ? list : list.slice(0, max);
  return `<ul class="ops">${shown.map(({ it, o }) => `<li>
      <blockquote>${editedQuote(o.quote, esc(o.quote))}</blockquote>
      <div class="who">${esc(it._c.author)}<span class="pipe">|</span><button class="linkbtn" data-goto="${it._c.id}">in comment list</button><span class="pipe">|</span><a href="${esc(it._c.url)}" target="_blank" rel="noopener">on hn</a></div></li>`).join("")}</ul>
    ${list.length > max ? `<button class="linkbtn" data-tg="op:${key}">${exp ? "show fewer" : `show all ${list.length}`}</button>` : ""}`;
}
function renderDrawer() {
  if (!drawerSpec) return;
  if (!renderDrawer._inner) { renderDrawer._inner = true; const snap = snapshot(); try { renderDrawer(); } finally { renderDrawer._inner = false; } animateFrom(snap); return; }
  const base = drawerSpec.source ? drawerSpec.source().filter(drawerSpec.pred) : activeItems(drawerSpec.pred, { includeWrong: true });
  const live = base.filter(it => !isWrong(it));
  const df = state.dfilter;
  const all = df ? base.filter(treeTest(df.tree, df.path, df.exact)) : base;
  const people = new Map();
  all.forEach(it => { if (!people.has(it._c.author)) people.set(it._c.author, []); people.get(it._c.author).push(it); });
  const counted = peopleOf(all.filter(it => !isWrong(it))).size;
  const e = drawerSpec.name ? catOf(drawerSpec.name) : null;

  // header: name, then what it is
  document.getElementById("dTitle").textContent = drawerSpec.title;
  document.getElementById("dSub").innerHTML = e ? toolMeta(drawerSpec.name).map(esc).join(' <span class="dot-sep">·</span> ') : esc(drawerSpec.sub || "");

  const parts = [];
  if (e) parts.push(`<section class="dsec profile"><p class="desc">${esc(e.description)}</p>
      <div class="links">${toolLinks(drawerSpec.name).join('<span class="pipe">|</span>')}</div>
      ${e.confidence === "low" ? `<p class="lowconf">Couldn't verify this tool online; the description is inferred from the comments.</p>` : ""}</section>`);

  // usage split (status filter aside) for tools; plain count otherwise
  const split = drawerSpec.name ? statusSplit(drawerSpec.pred) : [];
  parts.push(`<section class="dsec usage">${split.length
    ? split.map(([l, n]) => `<span class="u"><b data-num-key="d:${l}">${n}</b> ${l}</span>`).join("")
    : `<span class="u"><b>${counted}</b> ${counted === 1 ? "person" : "people"}</span>`}</section>`);

  // what people like / dislike
  const ops = opinionsFor(drawerSpec.pred);
  if (ops.positive.length || ops.negative.length || ops.mixed.length) {
    parts.push(`<section class="dsec opinions">
      <div><h3>What people like <span class="sub">${ops.positive.length}</span></h3>${ops.positive.length ? opinionList(ops.positive, 4, "pos") : `<p class="sub">No positive opinions given.</p>`}</div>
      <div><h3>What people don't like <span class="sub">${ops.negative.length}</span></h3>${ops.negative.length ? opinionList(ops.negative, 4, "neg") : `<p class="sub">No complaints given.</p>`}</div>
      ${ops.mixed.length ? `<div class="mixed"><h3>Mixed feelings <span class="sub">${ops.mixed.length}</span></h3>${opinionList(ops.mixed, 3, "mix")}</div>` : ""}
    </section>`);
  }

  // breakdowns (one column, compact)
  const dn = peopleOf(live).size;
  // the access chart means different things by kind: for models/APIs it's how people reach them; for tools it's
  // where the models they run inside come from; subscriptions are themselves the route, so no chart
  const kindCount = {}; live.forEach(it => { kindCount[it.category] = (kindCount[it.category] || 0) + 1; });
  const mainKind = Object.entries(kindCount).sort((a, b) => b[1] - a[1])[0]?.[0];
  const accessLabel = mainKind === "api_or_model" ? "How they reach it" : mainKind === "subscription" ? null : "Where the models they run in it come from";
  const modelsLabel = mainKind === "api_or_model" ? "Which models" : mainKind === "subscription" ? "Models they use on it" : "Models they run in it";
  const trees = [["Tier", "d_tier"], [modelsLabel, "d_models"], [accessLabel, "d_access"], ["What they use it for", "d_roles"], ["Status", "d_stance"]]
    .filter(([t]) => t)
    .filter(([, id]) => id !== "d_stance" || state.stances.size > 1)
    .filter(([, id]) => live.some(it => TREES[id].base(it) && TREES[id].paths(it).length && (id !== "d_tier" || subPath(it).length > 1)))
    .map(([t, id]) => `<div class="dtree"><h3>${t}</h3>${renderTree(live, { id, denom: dn, limit: 5, autoOpen: 0, maxKids: 5, mode: "filter" })}</div>`).join("");
  if (trees) parts.push(`<section class="dsec breakdowns">${trees}</section>`);
  if (df) parts.push(`<div class="dfilter">Showing only: <b>${esc(TREES[df.tree].label)} › ${esc(df.path.join(" › "))}${df.exact ? " › no further detail" : ""}</b> · <button class="linkbtn" data-dclear="1">clear</button></div>`);

  // everyone who mentioned it (collapsed unless filtered or there are no opinions to show)
  const openList = state.expanded["dm"] || df || !(ops.positive.length || ops.negative.length || ops.mixed.length);
  parts.push(`<section class="dsec mentions"><h3><button class="linkbtn heading" data-tg="dm">${openList ? "▾" : "▸"} Everyone who mentioned it <span class="sub">${people.size}</span></button></h3>
    ${openList ? [...people].sort((a, b) => b[1].length - a[1].length).map(([who, items]) => `<div class="person"><div class="who">${esc(who)}</div>${items.map(it => {
      const c = it._c, full = state.expanded["ev:" + it._key];
      return `<div class="ev">${itemChip(it)}<div class="ctx">${fmtComment(full ? highlight(c.text, [it]) : excerpt(c.text, it))}</div>
        <div class="links">${c.text.length > 440 + it.evidence.length ? `<button class="linkbtn" data-full="${esc(it._key)}">${full ? "show excerpt" : "show full comment"}</button><span class="pipe">|</span>` : ""}<button class="linkbtn" data-goto="${c.id}">in comment list</button><span class="pipe">|</span><a href="${esc(c.url)}" target="_blank" rel="noopener">on hn</a>
          ${c.dead || c.flagged ? `<span class="badge bad">${[c.dead && "dead", c.flagged && "flagged"].filter(Boolean).join(" · ")}</span>` : ""}</div></div>`;
    }).join("")}</div>`).join("") || `<p class="sub">Nothing matches.</p>` : ""}</section>`);
  document.getElementById("dBody").innerHTML = parts.join("");
}
// hover card for any tool name: what it is, usage split, likes vs dislikes
function toolCard(name, catKey) {
  const e = catOf(name); if (!e) return null;
  const pred = it => nameOf(it) === name && (!catKey || it.category === catKey);
  const split = statusSplit(pred), ops = opinionsFor(pred);
  return `<div class="tc-name">${esc(name)}</div>
    ${toolMeta(name).length ? `<div class="tc-meta">${esc(toolMeta(name).join(" · "))}</div>` : ""}
    <p class="tc-desc">${esc(e.description.length > 190 ? e.description.slice(0, 188) + "…" : e.description)}</p>
    ${split.length ? `<div class="tc-row">${split.map(([l, n]) => `<span><b>${n}</b> ${l}</span>`).join("")}</div>` : ""}
    ${ops.positive.length || ops.negative.length ? `<div class="tc-row"><span class="pos">▲ ${ops.positive.length} like it</span><span class="neg">▼ ${ops.negative.length} don't</span>${ops.mixed.length ? `<span>${ops.mixed.length} mixed</span>` : ""}</div>` : ""}
    <div class="tc-foot">${e.stars != null ? `GitHub ★ ${fmtStars(e.stars)} · ` : ""}Click for details</div>`;
}

// ---------- comment browser ----------
function renderLegend() {
  // colour plus a distinct underline per question, so highlights are readable without relying on colour
  document.getElementById("legend").innerHTML = CATS.map(c => `<span><mark class="swatch" data-cat="${c.key}" style="--c: var(--cat-${c.key})">Q${QNUM[c.key]} ${c.short}</mark></span>`).join("");
  document.getElementById("catFilter").innerHTML += CATS.map(c => `<option value="${c.key}">Q${QNUM[c.key]} · ${c.label}</option>`).join("");
}
// thread structure (computed once): children in page order, total descendants
const KIDS = {}; const ROOTS = [];
DATA.comments.forEach(c => { if (c.parent_id && byId[c.parent_id]) (KIDS[c.parent_id] ||= []).push(c); else ROOTS.push(c); });
const TOTAL = {};
(function count(list) { for (const c of list) { count(KIDS[c.id] || []); TOTAL[c.id] = (KIDS[c.id] || []).reduce((n, k) => n + 1 + TOTAL[k.id], 0); } })(ROOTS);
const collapsed = new Set();
const SORTS = {
  thread: null,
  replies: (a, b) => TOTAL[b.id] - TOTAL[a.id],
  newest: (a, b) => (b.timestamp || "").localeCompare(a.timestamp || ""),
  oldest: (a, b) => (a.timestamp || "").localeCompare(b.timestamp || ""),
  extractions: (a, b) => b.items.length - a.items.length,
};
function commentHtml(c, depth, flat) {
  const excluded = !eligible(c), nk = TOTAL[c.id], isCol = collapsed.has(c.id);
  const badges = [c.dead && `<span class="badge bad">dead</span>`, c.flagged && `<span class="badge bad">flagged</span>`, c.downvoted && `<span class="badge">downvoted</span>`,
    c.new_account && `<span class="badge">new account</span>`, excluded && `<span class="badge">not counted</span>`].filter(Boolean).join(" ");
  // HN behaviour: collapsing hides this comment's text and all its replies, leaving the header line
  const tog = !flat ? `<button class="ctog" data-ctog="${c.id}" aria-expanded="${!isCol}" title="${isCol ? "Expand" : "Collapse"} this comment${nk ? " and its replies" : ""}">${isCol ? `[+]${nk ? ` ${nk} ${nk === 1 ? "reply" : "replies"} hidden` : ""}` : "[–]"}</button>` : "";
  return `<article class="comment ${excluded ? "excluded" : ""} ${isCol ? "is-collapsed" : ""}" id="c-${c.id}" style="--depth:${Math.min(depth, 8)}">
    <div class="head"><span class="author">${esc(c.author)}</span> <span>on ${hnDate(c.timestamp)}</span>${c.parent_id ? `<span class="pipe">|</span><a href="#c-${c.parent_id}" data-goto="${c.parent_id}">parent</a>${flat ? ` <span class="reply-to">(${esc(byId[c.parent_id]?.author || "")})</span>` : ""}` : ""}<span class="pipe">|</span><a href="${esc(c.url)}" target="_blank" rel="noopener">on hn</a>${tog ? `<span class="pipe">|</span>${tog}` : ""} ${badges}</div>
    <div class="ctext">${fmtComment(highlight(c.text, c.items.filter(it => !isWrong(it))))}</div>
    ${c.summary ? `<div class="csum"><b>Summary:</b> ${esc(c.summary)}</div>` : ""}
    ${c.items.length ? `<div class="xchips">${c.items.map(itemChip).join("")}</div>` : ""}</article>`;
}
function renderList() {
  const q = document.getElementById("q").value.trim().toLowerCase(), cat = document.getElementById("catFilter").value,
    only = document.getElementById("onlyAns").checked, sort = SORTS[document.getElementById("sortBy").value];
  const match = c => !(only && !c.items.length) && !(cat && !c.items.some(it => it.category === cat)) &&
    !(q && !(c.text.toLowerCase().includes(q) || (c.author || "").toLowerCase().includes(q) ||
      c.items.some(it => nameOf(it).toLowerCase().includes(q) || it.models.some(m => m.toLowerCase().includes(q)))));
  const filtered = !!(q || cat || only);
  let out = [], n = 0;
  if (filtered) {   // flat list of matches; sort applies to every match
    let list = DATA.comments.filter(match);
    if (sort) list = [...list].sort(sort);
    n = list.length; out = list.map(c => commentHtml(c, 0, true));
  } else {          // threads: sort top-level threads, replies stay nested; collapsed threads hide their replies
    const roots = sort ? [...ROOTS].sort(sort) : ROOTS;
    const walk = (c, d) => { n++; out.push(commentHtml(c, d, false)); if (!collapsed.has(c.id)) (KIDS[c.id] || []).forEach(k => walk(k, d + 1)); };
    roots.forEach(r => walk(r, 0));
  }
  document.getElementById("list").innerHTML = out.join("");
  document.getElementById("shown").textContent = filtered ? `${n} matching comments` : `${n} of ${DATA.comments.length} comments shown`;
  document.getElementById("threadBtns").hidden = filtered;
}

// ---------- events ----------
function itemByKey(k) { return byId[k.split("|")[0]]?.items.find(it => it._key === k); }
// ---------- motion: show what changed when filters, corrections or expansions re-render ----------
const REDUCE = matchMedia("(prefers-reduced-motion: reduce)");
const EASE_OUT = "cubic-bezier(0.23, 1, 0.32, 1)";
const easeOutQuart = t => 1 - Math.pow(1 - t, 4);
function snapshot() {
  const nums = {}, bars = {}, rows = new Set(), open = {};
  document.querySelectorAll("[data-num-key]").forEach(e => { nums[e.dataset.numKey] = parseFloat(e.textContent); });
  document.querySelectorAll("[data-bar-key]").forEach(e => { bars[e.dataset.barKey] = parseFloat(e.style.width); });
  document.querySelectorAll(".trow[data-rk]").forEach(e => rows.add(e.dataset.rk));
  document.querySelectorAll(".tg[data-tg]").forEach(e => { open[e.dataset.tg] = e.dataset.openNow; });
  return { nums, bars, rows, open };
}
function tweenNumber(el, from, to, ms) {
  const suffix = el.textContent.replace(/^[\d.,]+/, "");
  let t0 = null;   // start the clock on the first painted frame, so a slow re-render can't eat the animation
  const step = now => {
    if (t0 === null) t0 = now;
    const t = Math.min(1, (now - t0) / ms);
    el.textContent = Math.round(from + (to - from) * easeOutQuart(t)).toLocaleString() + suffix;
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
function growBar(el, fromFrac, ms, delay = 0) {
  el.style.transform = `scaleX(${fromFrac})`;
  requestAnimationFrame(() => { el.style.transform = ""; el.animate([{ transform: `scaleX(${fromFrac})` }, { transform: "scaleX(1)" }], { duration: ms, delay, easing: EASE_OUT, fill: "backwards" }); });
}
function animateFrom(snap) {
  if (REDUCE.matches || !snap) return;
  document.querySelectorAll("[data-num-key]").forEach(e => {
    const from = snap.nums[e.dataset.numKey], to = parseFloat(e.textContent);
    if (Number.isFinite(from) && Number.isFinite(to) && from !== to) tweenNumber(e, from, to, 280);
  });
  document.querySelectorAll("[data-bar-key]").forEach(e => {
    const from = snap.bars[e.dataset.barKey], to = parseFloat(e.style.width);
    if (Number.isFinite(from) && to > 0 && Math.abs(from - to) > 0.5) growBar(e, from / to, 280);
  });
  // rows that just appeared (expanded): fade + slight drop, staggered
  let i = 0;
  document.querySelectorAll(".trow[data-rk]").forEach(e => {
    if (snap.rows.size && !snap.rows.has(e.dataset.rk) && i < 14)
      e.animate([{ opacity: 0, transform: "translateY(-4px)" }, { opacity: 1, transform: "none" }],
        { duration: 180, delay: 25 * i++, easing: EASE_OUT, fill: "backwards" });
  });
  // chevrons rotate instead of swapping glyphs
  document.querySelectorAll(".tg[data-tg]").forEach(e => {
    const was = snap.open[e.dataset.tg];
    if (was !== undefined && was !== e.dataset.openNow)
      e.animate([{ transform: `rotate(${was === "1" ? 90 : 0}deg)` }, { transform: `rotate(${e.dataset.openNow === "1" ? 90 : 0}deg)` }], { duration: 180, easing: EASE_OUT });
  });
}
// the one orchestrated moment: first paint, bars on screen grow from the baseline and headline numbers count up
function intro() {
  if (REDUCE.matches) return;
  const vh = innerHeight;
  let i = 0;
  document.querySelectorAll(".stack [data-bar-key], .trow.l0 [data-bar-key], .reach [data-bar-key]").forEach(e => {
    if (e.getBoundingClientRect().top < vh * 1.1) growBar(e, 0, 520, 30 * i++);
  });
  document.querySelectorAll(".stack [data-num-key], .lede [data-num-key], .hero .in-n .big").forEach(e => {
    const to = parseFloat(e.textContent); if (Number.isFinite(to)) tweenNumber(e, 0, to, 700);
  });
}
let listTimer = null;
function rerender() {
  const snap = snapshot(); _ans = null; _prov = null; renderStats(); renderSections(); renderDrawer(); animateFrom(snap);
  clearTimeout(listTimer); listTimer = setTimeout(renderList, REDUCE.matches ? 0 : 320);
}
function rerenderCharts() { const snap = snapshot(), y = scrollY; renderSections(); renderDrawer(); scrollTo(0, y); animateFrom(snap); }

document.addEventListener("click", e => {
  const t = e.target;
  const ct = t.closest("[data-ctog]");
  if (ct) { const id = ct.dataset.ctog; collapsed.has(id) ? collapsed.delete(id) : collapsed.add(id);
    const y = document.getElementById("c-" + id).getBoundingClientRect().top; renderList();
    const el = document.getElementById("c-" + id); scrollBy(0, el.getBoundingClientRect().top - y); return; }
  const tg = t.closest("[data-tg]");
  if (tg) {
    const k = tg.dataset.tg;
    state.expanded[k] = tg.dataset.openNow !== undefined ? tg.dataset.openNow !== "1" : !state.expanded[k];
    tg.closest("#drawer") ? renderDrawer() : rerenderCharts(); return;
  }
  const st = t.closest("[data-stance]");
  if (st) {
    const s = st.dataset.stance;
    if (state.stances.has(s)) { if (state.stances.size > 1) state.stances.delete(s); } else state.stances.add(s);
    document.querySelectorAll("[data-stance]").forEach(b => b.setAttribute("aria-pressed", state.stances.has(b.dataset.stance)));
    rerender(); return;
  }
  const tc = t.closest("[data-toolcat]");
  if (tc) { state.toolF = {}; state.toolCat = tc.dataset.toolcat; rerenderCharts(); return; }   // filters belong to a tab: switching clears them
  const tf = t.closest("[data-tf]");
  if (tf) { state.toolF = { ...(state.toolF || {}), [tf.dataset.tf]: tf.dataset.v || null }; rerenderCharts(); return; }
  if (t.closest("[data-toolclear]")) { state.toolF = {}; state.toolQ = ""; rerenderCharts(); return; }
  const dd = t.closest("[data-dead]");
  if (dd) { state.includeDead = !state.includeDead; dd.setAttribute("aria-pressed", state.includeDead); rerender(); return; }
  const dl = t.closest("[data-dialog]"); if (dl) { openDialog(dl.dataset.dialog); return; }
  if (t.closest("[data-close]")) { t.closest("dialog").close(); return; }
  const th = t.closest("[data-theme-set]"); if (th) { setTheme(th.dataset.themeSet === "dark"); return; }
  if (t.closest("[data-reset-settings]")) { state.stances = new Set(["uses"]); state.includeDead = true;
    document.querySelectorAll("[data-stance]").forEach(b => b.setAttribute("aria-pressed", b.dataset.stance === "uses"));
    document.querySelector("[data-dead]").setAttribute("aria-pressed", true); setTheme(false); rerender(); return; }
  const opener = t.closest("[data-open]");
  if (opener) { const s = specFromData(opener.dataset); if (s) openDrawer(s); return; }
  const dt = t.closest("[data-dtree]");
  if (dt) {
    const f = { tree: dt.dataset.dtree, path: JSON.parse(dt.dataset.path), exact: !!dt.dataset.exact };
    state.dfilter = state.dfilter && JSON.stringify(state.dfilter) === JSON.stringify(f) ? null : f; renderDrawer(); return;
  }
  if (t.closest("[data-dclear]")) { state.dfilter = null; renderDrawer(); return; }
  const act = t.closest("[data-act]");
  if (act) {
    const k = act.closest(".xchip").dataset.k, it = itemByKey(k); if (!it) return;
    if (act.dataset.act === "wrong") {
      if (state.corrections.removed[k]) delete state.corrections.removed[k];
      else state.corrections.removed[k] = { id: it._c.id, category: it.category, name: it.name, evidence: it.evidence };
    } else {
      const to = prompt(`Rename “${nameOf(it)}” (${CAT[it.category].short}) to:\n(leave empty to undo a rename)`, nameOf(it));
      if (to === null) return;
      if (!to.trim() || to.trim() === it.name) delete state.corrections.renamed[k];
      else state.corrections.renamed[k] = { id: it._c.id, category: it.category, name: it.name, to: to.trim() };
    }
    saveCorr(); const y = scrollY; rerender(); scrollTo(0, y); return;
  }
  const go = t.closest(".xchip .main");
  if (go) {
    const k = go.closest(".xchip").dataset.k, art = go.closest("article.comment");
    if (art) { const m = [...art.querySelectorAll("mark")].find(m => m.dataset.k.split("\u0001").includes(k));
      if (m) { m.scrollIntoView({ block: "center", behavior: "smooth" }); m.classList.add("flash"); setTimeout(() => m.classList.remove("flash"), 1400); } }
    else gotoComment(k.split("|")[0]);
    return;
  }
  const full = t.closest("[data-full]");
  if (full) { const k = "ev:" + full.dataset.full; state.expanded[k] = !state.expanded[k]; renderDrawer(); return; }
  const gt = t.closest("[data-goto]");
  if (gt) { gotoComment(gt.dataset.goto, gt.dataset.ev); return; }
  if (t.id === "exportCorr") { exportCorr(); return; }
  if (t.id === "resetCorr") { if (confirm("Clear all corrections made in this browser?")) { state.corrections = { removed: {}, renamed: {} }; saveCorr(); rerender(); } return; }
});
document.addEventListener("keydown", e => { if (e.key === "Escape") closeDrawer(); });
document.getElementById("drawerBg").onclick = closeDrawer;
document.getElementById("drawerClose").onclick = closeDrawer;
let qT; document.getElementById("q").oninput = () => { clearTimeout(qT); qT = setTimeout(renderList, 150); };
document.getElementById("catFilter").onchange = renderList;
document.getElementById("onlyAns").onchange = renderList;
document.getElementById("sortBy").onchange = renderList;
document.addEventListener("change", e => { if (e.target.id === "toolSort") { state.toolSort = e.target.value; rerenderCharts(); } });
let toolQT; document.addEventListener("input", e => { if (e.target.id !== "toolQ") return; clearTimeout(toolQT);
  toolQT = setTimeout(() => { state.toolQ = e.target.value; rerenderCharts(); const el = document.getElementById("toolQ"); el.focus(); el.setSelectionRange(el.value.length, el.value.length); }, 200); });
document.getElementById("collapseAll").onclick = () => { ROOTS.forEach(r => collapsed.add(r.id)); renderList(); };
document.getElementById("expandAll").onclick = () => { collapsed.clear(); renderList(); };

function gotoComment(id, ev) {
  closeDrawer();
  const qEl = document.getElementById("q"), cf = document.getElementById("catFilter"), oa = document.getElementById("onlyAns");
  if (qEl.value || cf.value || oa.checked) { qEl.value = ""; cf.value = ""; oa.checked = false; renderList(); }
  let p = byId[id]?.parent_id, opened = false;
  while (p) { if (collapsed.delete(p)) opened = true; p = byId[p]?.parent_id; }
  if (opened) renderList();
  const el = document.getElementById("c-" + id); if (!el) return;
  el.scrollIntoView({ block: "center", behavior: "smooth" });
  el.animate([{ background: "var(--series-1-soft)" }, { background: "transparent" }], { duration: 1800 });
  if (ev) { const node = el.querySelector(".ctext"), txt = byId[id].text, at = txt.indexOf(ev);
    if (at >= 0) node.innerHTML = esc(txt.slice(0, at)) + `<mark class="flash" style="--c: var(--text-secondary)">${esc(ev)}</mark>` + esc(txt.slice(at + ev.length)); }
}
function exportCorr() {
  const out = { removed: Object.values(state.corrections.removed), renamed: Object.values(state.corrections.renamed) };
  const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([JSON.stringify(out, null, 2)], { type: "application/json" }));
  a.download = "corrections.json"; a.click();
}

// ---------- tooltips ----------
const tip = document.getElementById("tip");
function markTip(m) {
  return m.dataset.k.split("\u0001").map(k => {
    const it = itemByKey(k); if (!it) return "";
    const q = CAT[it.category];
    return `<div class="mt"><div class="mq"><span class="dot" style="background: var(--cat-${it.category})"></span> <b>${QNUM[it.category] ? `Q${QNUM[it.category]} · ` : ""}${esc(q.label)}</b></div>
      <div class="r mqa">${esc(q.ask)}</div><div>Extracted: <b>${esc(displayName(it))}</b>${isWrong(it) ? ' <span class="badge bad">marked wrong</span>' : ""}</div>
      <dl>${itemFacts(it).map(([a, b]) => `<dt>${a}</dt><dd>${esc(b)}</dd>`).join("")}</dl></div>`;
  }).join("");
}
function placeTip(e) {
  tip.style.display = "block";
  tip.style.left = Math.min(e.clientX + 14, innerWidth - tip.offsetWidth - 8) + "px";
  tip.style.top = (e.clientY + 18 + tip.offsetHeight > innerHeight ? e.clientY - tip.offsetHeight - 10 : e.clientY + 18) + "px";
}
document.addEventListener("mousemove", e => {
  const mk = e.target.closest?.("mark[data-k]");
  if (mk) { tip.innerHTML = markTip(mk); tip.classList.add("wide"); placeTip(e); return; }
  tip.classList.remove("wide");
  const named = e.target.closest?.("[data-tool]");
  if (named && !drawerSpec) {
    const card = toolCard(named.dataset.tool, named.dataset.cat || null);
    if (card) { tip.innerHTML = card; tip.classList.add("wide", "card"); placeTip(e); return; }
  }
  tip.classList.remove("card");
  const row = e.target.closest?.(".trow:not(.more)");
  if (!row || (drawerSpec && !row.closest("#drawer"))) { tip.style.display = "none"; return; }
  const d = row.dataset, ce = catOf(d.tipname);
  const share = d.lvl === "0" ? (+d.d ? `${pct(+d.n, +d.d)} of everyone who described a setup` : "") : `${pct(+d.n, +d.d)} of the row above`;
  tip.innerHTML = `<div class="t">${esc(d.tipname)}</div><div>${d.n} people${share ? ` · ${share}` : ""}</div>
    ${ce?.description ? `<div class="r" style="margin-top:4px">${esc(ce.description.slice(0, 170))}${ce.description.length > 170 ? "…" : ""}</div>` : ""}
    <div class="r">${row.closest("#drawer") ? "Click to filter this list" : "Click to see every quote"}</div>`;
  placeTip(e);
});

// keep sticky offsets in sync with the real height of the (wrapping) filter bar
const controlsEl = document.querySelector(".topbar");
new ResizeObserver(() => document.documentElement.style.setProperty("--controls-h", controlsEl.offsetHeight + "px")).observe(controlsEl);
document.getElementById("footThread").href = DATA.story.url;
const syncTheme = () => { const dark = document.documentElement.dataset.theme === "dark";
  document.querySelectorAll("[data-theme-set]").forEach(b => b.setAttribute("aria-pressed", (b.dataset.themeSet === "dark") === dark)); };
const setTheme = dark => { if (dark) document.documentElement.dataset.theme = "dark"; else delete document.documentElement.dataset.theme;
  localStorage.setItem("hn-report-theme", dark ? "dark" : "light"); syncTheme(); };
syncTheme();
// settings / help dialogs
const openDialog = name => { document.querySelectorAll("dialog[open]").forEach(d => d.close()); document.getElementById("dlg-" + name).showModal(); };
document.querySelectorAll("dialog.panel").forEach(d => d.addEventListener("click", e => { if (e.target === d) d.close(); }));   // click outside closes
// the settings link says when counts differ from the defaults
function syncSettingsBadge() {
  const changed = (state.stances.size !== 1 || !state.stances.has("uses")) + !state.includeDead + (!PUBLIC && Object.keys(state.corrections.removed).length + Object.keys(state.corrections.renamed).length > 0);
  document.getElementById("settingsBtn").textContent = changed ? `settings (${changed} changed)` : "settings";
}
document.querySelectorAll("a[data-utm]").forEach(a => { a.href = withUtm(a.href); });   // author links: trackable visits
if (PUBLIC) {   // strip editing affordances and author-facing copy
  document.querySelectorAll("[data-editor-only]").forEach(el => el.remove());
  if (CONFIG.issues_url) document.querySelectorAll("[data-issues]").forEach(el => { el.hidden = false; el.querySelector("a").href = CONFIG.issues_url; });
}
// sideways-scrolling strips (header links, tool tabs): fade the edge where more is hidden
function syncScrollHints(el) {
  const more = el.scrollWidth - el.clientWidth > 2;
  el.classList.toggle("more-right", more && el.scrollLeft + el.clientWidth < el.scrollWidth - 2);
  el.classList.toggle("more-left", more && el.scrollLeft > 2);
}
function watchScrollStrips() {
  document.querySelectorAll(".band nav, .ttabs").forEach(el => {
    if (!el._hinted) { el._hinted = true; el.addEventListener("scroll", () => syncScrollHints(el), { passive: true }); }
    syncScrollHints(el);
  });
}
addEventListener("resize", watchScrollStrips);
new MutationObserver(watchScrollStrips).observe(document.getElementById("sections"), { childList: true });
renderHeader(); renderLegend(); rerender(); requestAnimationFrame(intro); watchScrollStrips();
