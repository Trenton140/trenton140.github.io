/* Private trip app: storage, sync and trip maths. No trip data lives in this file or anywhere on this site:
   the plan and everything shared arrive from the trip's private backend after joining with an invite. */
(function () {
  'use strict';

  const LS = { auth: 'jt26.auth', plan: 'jt26.plan', db: 'jt26.db', old: 'jt26.v1' };
  const COLS = ['exp', 'todo', 'book', 'set'];
  const CATS = ['food', 'drinks', 'transit', 'taxi', 'tickets', 'shop', 'stay', 'other'];
  const INVITE = /([A-Za-z0-9_-]{30,200})\.([A-Za-z0-9_-]{40,128})/;

  const load = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } };
  const keep = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage full or blocked: keep running from memory */ } };
  const drop = k => { try { localStorage.removeItem(k); } catch { /* ignore */ } };
  const blank = () => ({ rev: 0, me: 0, names: [], recs: { exp: {}, todo: {}, book: {}, set: {} }, q: [], last: 0 });

  let auth = load(LS.auth, null);
  let plan = load(LS.plan, null); // { pv, data }
  let db = Object.assign(blank(), load(LS.db, null) || {});
  COLS.forEach(c => { if (!db.recs[c]) db.recs[c] = {}; });
  let state = auth ? 'idle' : 'out'; // out | idle | syncing | ok | offline | error | locked
  let busy = false, again = false, timer = 0, model = null;
  const subs = [];
  const emit = () => subs.forEach(f => { try { f(); } catch { /* a listener must not break the store */ } });
  const persist = () => keep(LS.db, db);

  /* ---------- backend ---------- */
  async function call(body, dep) {
    const ctl = new AbortController(), t = setTimeout(() => ctl.abort(), 30000);
    try {
      const r = await fetch('https://script.google.com/macros/s/' + dep + '/exec', {
        method: 'POST', body: JSON.stringify(body), headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        credentials: 'omit', redirect: 'follow', referrerPolicy: 'no-referrer', cache: 'no-store', signal: ctl.signal
      });
      const txt = await r.text();
      try { const j = JSON.parse(txt); return j && typeof j === 'object' ? j : { ok: false, e: 'down' }; } catch { return { ok: false, e: 'down' }; }
    } finally { clearTimeout(t); }
  }

  function applyLocal(o) {
    if (!db.recs[o.c]) return;
    if (o.d === null) delete db.recs[o.c][o.id];
    else db.recs[o.c][o.id] = { ts: o.ts, by: db.me, d: o.d };
  }

  function merge(res) {
    if (res.full) db.recs = blank().recs;
    (res.items || []).forEach(it => {
      if (!it || !db.recs[it.c] || typeof it.id !== 'string') return;
      if (it.del || !it.d) delete db.recs[it.c][it.id];
      else db.recs[it.c][it.id] = { ts: it.ts, by: it.by, d: it.d };
    });
    db.q.forEach(applyLocal); // edits still waiting to upload stay on top
    db.rev = res.rev; db.me = res.me; db.names = Array.isArray(res.names) ? res.names.map(String) : []; db.last = Date.now();
    if (res.plan && res.pv) { plan = { pv: res.pv, data: res.plan }; keep(LS.plan, plan); model = null; }
  }

  async function sync() {
    if (!auth) return;
    if (busy) { again = true; return; }
    clearTimeout(timer);
    busy = true; state = 'syncing'; emit();
    const sent = db.q.slice();
    try {
      const res = await call({ a: 'sync', k: auth.key, since: db.rev, pv: plan ? plan.pv : '', ops: sent }, auth.dep);
      if (res.ok) {
        db.q = db.q.filter(o => !sent.some(s => s.c === o.c && s.id === o.id && s.ts === o.ts));
        merge(res);
        state = 'ok';
      } else state = res.e === 'auth' ? 'locked' : 'error';
    } catch { state = navigator.onLine === false ? 'offline' : 'error'; }
    busy = false; persist(); emit();
    if (state === 'ok' && (again || db.q.length)) { again = false; soon(600); }
    again = false;
  }
  function soon(ms) { clearTimeout(timer); timer = setTimeout(sync, ms == null ? 900 : ms); }

  function put(c, id, d) {
    const cur = db.recs[c][id], ts = Math.max(Date.now(), cur ? cur.ts + 1 : 0);
    const op = { c, id, ts, d };
    db.q = db.q.filter(o => !(o.c === c && o.id === id));
    db.q.push(op);
    applyLocal(op);
    persist(); emit(); soon();
  }

  const newId = () => { const a = new Uint8Array(12); crypto.getRandomValues(a); return 'x' + Array.from(a, b => (b % 36).toString(36)).join(''); };

  /* ---------- join / leave ---------- */
  const parseInvite = s => { const m = INVITE.exec(String(s || '')); return m ? { dep: m[1], key: m[2] } : null; };

  async function join(text) {
    const inv = parseInvite(text);
    if (!inv) return 'That doesn\'t look like an invite link.';
    let res;
    try { res = await call({ a: 'sync', k: inv.key, since: 0, pv: '', ops: [] }, inv.dep); }
    catch { return 'Couldn\'t reach the trip. Check your connection and try again.'; }
    if (!res.ok) return res.e === 'auth' ? 'That invite isn\'t valid any more. Ask for a new one.' : 'The trip isn\'t reachable right now. Try again in a minute.';
    if (!res.plan) return 'The trip isn\'t ready yet. Try again in a minute.';
    const waiting = auth && auth.dep === inv.dep ? db.q : []; // same trip, new key: keep unsent edits
    auth = inv; keep(LS.auth, auth);
    db = blank(); db.q = waiting; merge(res); migrateOld(); persist();
    state = 'ok'; emit();
    if (db.q.length) soon(200);
    return '';
  }

  // Carry over anything typed into the earlier, phone-only version of this app.
  function migrateOld() {
    const old = load(LS.old, null);
    drop(LS.old);
    if (!old || typeof old !== 'object') return;
    const n = db.names.length, ok = i => Number.isInteger(i) && i >= 0 && i < n;
    (Array.isArray(old.exp) ? old.exp : []).forEach(e => {
      if (!e || !(e.yen > 0) || !ok(e.by) || !Array.isArray(e.split) || !e.split.length || !e.split.every(ok)) return;
      const d = { t: 'e', a: Math.round(e.yen), cur: 'JPY', p: e.by, w: Number(e.at) || Date.now(), n: String(e.what || '').slice(0, 80), cat: CATS.includes(e.cat) ? e.cat : 'other', s: Array.from(new Set(e.split)) };
      const op = { c: 'exp', id: newId(), ts: Date.now(), d };
      db.q.push(op); applyLocal(op);
    });
    Object.keys(old.book || {}).forEach(k => {
      const v = String(old.book[k] || '').trim();
      if (!v || !/^[a-z][a-z0-9-]{0,23}$/.test(k) || db.recs.book[k]) return;
      const op = { c: 'book', id: k, ts: Date.now(), d: { v: v.slice(0, 160), n: '' } };
      db.q.push(op); applyLocal(op);
    });
  }

  function leave() {
    clearTimeout(timer);
    [LS.auth, LS.plan, LS.db, LS.old].forEach(drop);
    auth = null; plan = null; db = blank(); model = null; state = 'out'; emit();
  }

  /* ---------- time ---------- */
  const OFF = { ET: -5, JST: 9 }; // December: Toronto is UTC-5, Japan UTC+9
  const pad = n => String(n).padStart(2, '0');
  const abs = (d, t, tz) => Date.UTC(+d.slice(0, 4), +d.slice(5, 7) - 1, +d.slice(8, 10), +t.slice(0, 2) - (OFF[tz] || 0), +t.slice(3, 5));
  const at = o => abs(o.d, o.t, o.tz);
  const parts = (ms, tz) => { const x = new Date(ms + (OFF[tz] || 0) * 3600e3); return { y: x.getUTCFullYear(), m: x.getUTCMonth(), d: x.getUTCDate(), h: x.getUTCHours(), mi: x.getUTCMinutes(), wd: x.getUTCDay() }; };
  const hm = (ms, tz) => { const p = parts(ms, tz); return pad(p.h) + ':' + pad(p.mi); };
  const WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], MO = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dateLbl = iso => { const x = new Date(iso + 'T12:00:00Z'); return WD[x.getUTCDay()] + ' ' + MO[x.getUTCMonth()] + ' ' + x.getUTCDate(); };
  const span = ms => { const m = Math.max(0, Math.round(ms / 60000)); return m < 60 ? m + ' min' : Math.floor(m / 60) + ' h' + (m % 60 ? ' ' + pad(m % 60) : ''); };

  /* ---------- the plan, with times worked out ---------- */
  function trip() {
    if (!plan || !plan.data) return null;
    if (model) return model;
    const P = plan.data, days = (P.days || []).map(d => Object.assign({}, d));
    days.forEach((d, i) => {
      d.start = abs(d.date, d.from || '04:00', d.tz);
      let prev = 0;
      d.items = (d.items || []).map((it, j) => {
        const tz = it.tz || d.tz;
        let t = abs(d.date, it.t, tz);
        if (!it.o && t < prev) t += 864e5;
        if (!it.o) prev = t;
        return Object.assign({}, it, { key: d.id + ':' + j, at: t, tzz: tz, leaveAt: it.leave ? abs(d.date, it.leave, tz) : 0 });
      });
      d.i = i;
    });
    days.forEach((d, i) => {
      d.end = days[i + 1] ? days[i + 1].start : (P.end ? at(P.end) : d.start + 864e5);
      const real = d.items.filter(it => !it.o);
      d.items.forEach(it => {
        const nx = real.find(x => x.at > it.at);
        it.end = it.dur ? it.at + it.dur * 60000 : nx ? nx.at : it.at + 3600e3;
      });
    });
    model = { P, days, start: days.length ? days[0].start : 0, end: P.end ? at(P.end) : (days.length ? days[days.length - 1].end : 0), nDays: days.filter(d => d.n > 0).length };
    return model;
  }
  function phase(now) {
    const m = trip();
    if (!m || !m.days.length) return { kind: 'none' };
    if (now < m.start) return { kind: 'pre', days: Math.ceil((m.start - now) / 864e5) };
    if (now >= m.end) return { kind: 'post' };
    return { kind: 'day', day: m.days.find(d => now >= d.start && now < d.end) || m.days[m.days.length - 1] };
  }

  /* ---------- money ---------- */
  function fx() {
    const s = db.recs.set.fx, p = (plan && plan.data && plan.data.fx) || {};
    return { jpy: (s && s.d.jpy) || p.jpy || 115, usd: (s && s.d.usd) || p.usd || 1.36 };
  }
  const toCad = (a, cur) => { const f = fx(); return cur === 'JPY' ? a / f.jpy : cur === 'USD' ? a * f.usd : a; };
  const fromCad = (a, cur) => { const f = fx(); return cur === 'JPY' ? a * f.jpy : cur === 'USD' ? a / f.usd : a; };
  function expenses() {
    return Object.keys(db.recs.exp).map(id => Object.assign({ id }, db.recs.exp[id])).sort((a, b) => b.d.w - a.d.w || (a.id < b.id ? 1 : -1));
  }
  // Net position per person in CAD: positive = is owed money.
  function money() {
    const n = db.names.length, bal = new Array(n).fill(0), share = new Array(n).fill(0), paid = new Array(n).fill(0);
    let total = 0;
    expenses().forEach(e => {
      const d = e.d, v = toCad(d.a, d.cur);
      if (!(d.p < n)) return;
      if (d.t === 'x') { if (d.to < n) { bal[d.p] += v; bal[d.to] -= v; } return; }
      const s = (d.s || []).filter(i => i < n);
      if (!s.length) return;
      bal[d.p] += v; paid[d.p] += v; total += v;
      s.forEach(i => { bal[i] -= v / s.length; share[i] += v / s.length; });
    });
    return { bal, share, paid, total, pay: settle(bal) };
  }
  // Fewest payments that square everyone up.
  function settle(bal) {
    const c = bal.map((v, i) => ({ i, v: Math.round(v * 100) })), out = [];
    for (let guard = 0; guard < 20; guard++) {
      c.sort((a, b) => a.v - b.v);
      const lo = c[0], hi = c[c.length - 1];
      if (!lo || !hi || lo.v > -50 || hi.v < 50) break; // ignore leftovers under 50 cents
      const amt = Math.min(-lo.v, hi.v);
      out.push({ from: lo.i, to: hi.i, cad: amt / 100 });
      lo.v += amt; hi.v -= amt;
    }
    return out;
  }

  window.Store = {
    CATS,
    get joined() { return !!auth; }, get state() { return state; }, get waiting() { return db.q.length; }, get last() { return db.last; },
    get me() { return db.me; }, get names() { return db.names; }, get hasPlan() { return !!(plan && plan.data); }, get invite() { return auth; },
    rec: (c, id) => (db.recs[c] && db.recs[c][id]) || null,
    on: f => subs.push(f), sync, put, newId, join, leave, parseInvite,
    trip, phase, abs, at, parts, hm, dateLbl, span, pad,
    fx, toCad, fromCad, expenses, money
  };
})();
