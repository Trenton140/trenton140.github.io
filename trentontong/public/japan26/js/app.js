/* Private trip app: screens. Everything shown comes from Store (the plan and shared data fetched after joining). */
(function () {
  'use strict';
  // Never run inside someone else's frame: a hidden frame over this page could be used to trick taps.
  if (window.top !== window.self) { document.documentElement.hidden = true; return; }

  const S = window.Store, $ = s => document.querySelector(s);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

  const IC = {
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    back: '<path d="M15 5l-7 7 7 7"/>',
    chev: '<path d="M9 5l7 7-7 7"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    trash: '<path d="M5 7h14M10 7V4.5h4V7M7 7l1 13h8l1-13M10 11v5M14 11v5"/>',
    del: '<path d="M9 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-6-7zM12 9.5l5 5M17 9.5l-5 5"/>',
    yen: '<path d="M6 4l6 8 6-8M12 12v8M7.5 12.5h9M7.5 16h9"/>'
  };
  const ic = (n, cls) => '<svg class="ic' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" aria-hidden="true">' + IC[n] + '</svg>';
  const KCAT = { food: 'food', night: 'drinks', train: 'transit', bus: 'transit', flight: 'transit', move: 'taxi', see: 'tickets', ski: 'tickets', onsen: 'tickets', shop: 'shop', stay: 'stay' };
  const CAT = { food: 'Food', drinks: 'Drinks', transit: 'Transit', taxi: 'Taxi', tickets: 'Tickets', shop: 'Shopping', stay: 'Stay', other: 'Other' };
  const SYM = { JPY: '¥', CAD: 'C$', USD: 'US$' }, CURS = ['JPY', 'CAD', 'USD'];
  const money = (a, cur) => SYM[cur] + (cur === 'JPY' ? Math.round(a).toLocaleString('en-US') : Number(a).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
  const cad = v => money(Math.abs(v), 'CAD');
  const mapUrl = q => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
  const dirUrl = q => 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(q);
  const ext = (url, label) => '<a class="pill" href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' + label + '</a>';
  const who = (i, sm) => '<span class="av p' + (i % 4) + (sm ? ' sm' : '') + '">' + esc((S.names[i] || '?').charAt(0)) + '</span>';
  const calm = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const buzz = p => { try { if (navigator.vibrate) navigator.vibrate(p || 8); } catch { /* not supported */ } };
  const pref = (k, v) => { try { if (v === undefined) return localStorage.getItem('jt26.' + k); localStorage.setItem('jt26.' + k, v); } catch { /* ignore */ } return null; };

  const R = { tab: 'today', day: null, kit: null, open: new Set(), seen: new Set(), fresh: new Set(), screen: '', scroll: {}, bal: null };

  /* ---------- layers: sheets and sub-pages close with the phone's back button ---------- */
  const layers = [];
  function pushLayer(close) { layers.push(close); try { history.pushState({ jt: layers.length }, ''); } catch { /* ignore */ } }
  function back() { if (layers.length) history.back(); }
  window.addEventListener('popstate', () => { const c = layers.pop(); if (c) c(); });

  /* ---------- toast ---------- */
  let toastT = 0, undoFn = null;
  function toast(msg, undo) {
    const el = $('#toast');
    undoFn = undo || null;
    el.innerHTML = '<span>' + esc(msg) + '</span>' + (undo ? '<button data-a="undo">Undo</button>' : '');
    el.classList.add('on');
    clearTimeout(toastT);
    toastT = setTimeout(() => { el.classList.remove('on'); undoFn = null; }, undo ? 5000 : 2200);
  }

  /* ---------- sheet ---------- */
  let sheetOpen = false, sheetT = 0;
  function sheet(html, cls) {
    const el = $('#sheet');
    clearTimeout(sheetT);
    el.innerHTML = '<div class="scrim" data-a="close"></div><div class="panel ' + (cls || '') + '" role="dialog" aria-modal="true" tabindex="-1"><i class="grab"></i>' + html + '</div>';
    if (!sheetOpen) { sheetOpen = true; pushLayer(hideSheet); }
    requestAnimationFrame(() => { el.classList.add('on'); const p = el.querySelector('.panel'); if (p) p.focus({ preventScroll: true }); });
  }
  function hideSheet() {
    const el = $('#sheet');
    sheetOpen = false;
    el.classList.remove('on');
    sheetT = setTimeout(() => { el.innerHTML = ''; }, 220);
  }
  const head = title => '<h2 class="sh-h">' + esc(title) + '</h2>';

  /* ---------- status and tabs ---------- */
  function netLabel() {
    const st = S.state, w = S.waiting;
    if (st === 'locked') return ['off', 'Access removed'];
    if (st === 'syncing') return ['busy', ''];
    if (st === 'offline' || st === 'error') return ['off', w ? 'Offline, ' + w + ' waiting' : 'Offline'];
    return w ? ['busy', ''] : ['ok', ''];
  }
  function paintNet() {
    const n = netLabel(), full = { ok: 'Synced', busy: 'Syncing', off: n[1] }[n[0]];
    $('#top').innerHTML = '<button class="net ' + n[0] + '" data-a="sync" aria-label="' + esc(full) + '. Sync now"><span>' + esc(n[1]) + '</span><i></i></button>';
  }
  const TABS = [['today', 'Today'], ['trip', 'Plan'], ['money', 'Split'], ['more', 'Kit']];
  function paintTabs() {
    const nav = $('#tabs');
    if (!nav.firstChild) {
      const t = i => '<button data-a="tab" data-t="' + TABS[i][0] + '">' + TABS[i][1] + '</button>';
      nav.innerHTML = t(0) + t(1) + '<button class="fab" data-a="addExp" aria-label="Add a charge">' + ic('yen') + '</button>' + t(2) + t(3) + '<i class="ind"></i>';
    }
    let on = null;
    nav.querySelectorAll('[data-t]').forEach(b => { const hit = b.dataset.t === R.tab; b.classList.toggle('on', hit); if (hit) { b.setAttribute('aria-current', 'page'); on = b; } else b.removeAttribute('aria-current'); });
    const ind = nav.querySelector('.ind');
    if (on && ind) ind.style.transform = 'translateX(' + Math.round(on.offsetLeft + on.offsetWidth / 2 - 3) + 'px)';
  }

  /* ---------- small pieces ---------- */
  const zone = tz => { const m = S.trip(); return (m && m.P.zones && m.P.zones[tz]) || tz; };
  const stay = k => { const m = S.trip(); return (m && m.P.stays && m.P.stays[k]) || null; };
  const bookCode = k => { const r = S.rec('book', k); if (r) return r.d.v; const b = (S.trip().P.bookings || []).find(x => x.k === k); return (b && b.code) || ''; };
  const updated = s => { const m = /synced (.+?) from/.exec(s || ''); return m ? m[1] : ''; };
  const isoToday = now => { const x = new Date(now); return x.getFullYear() + '-' + S.pad(x.getMonth() + 1) + '-' + S.pad(x.getDate()); };
  const dayKey = isoToday;

  // A quiet row that opens in place. The body is always in the page so opening can animate.
  function fold(key, title, meta, body) {
    const open = R.open.has(key);
    return '<section class="fold' + (open ? ' open' : '') + '"><button class="row" data-a="fold" data-k="' + esc(key) + '" aria-expanded="' + open + '"><b>' + esc(title) + '</b>' + (meta ? '<small>' + esc(meta) + '</small>' : '') + ic('chev') + '</button><div class="fb"><div class="fbi">' + body + '</div></div></section>';
  }
  const link = (a, attrs, title, meta) => '<button class="row" data-a="' + a + '"' + attrs + '><b>' + esc(title) + '</b>' + (meta ? '<small>' + esc(meta) + '</small>' : '') + ic('chev') + '</button>';

  /* ---------- a day ---------- */
  function item(it, d, now, live) {
    const open = R.open.has(it.key), st = !live ? '' : now >= it.end ? ' past' : now >= it.at ? ' now' : '';
    const code = it.bk ? bookCode(it.bk) : '';
    return '<li class="ti' + st + (it.o ? ' opt' : '') + (open ? ' open' : '') + '"><button class="tih" data-a="fold" data-k="' + esc(it.key) + '" aria-expanded="' + open + '">' +
      '<span class="tt">' + (it.a ? '<i>~</i>' : '') + S.hm(it.at, it.tzz) + (it.tzz !== d.tz ? '<small>' + esc(zone(it.tzz)) + '</small>' : '') + '</span><i class="nd"></i>' +
      '<span class="tc"><b>' + esc(it.ttl) + '</b>' + (it.o ? '<small>Optional</small>' : '') + '</span></button>' +
      '<div class="fb"><div class="fbi">' + (it.txt ? '<p>' + esc(it.txt) + '</p>' : '') + (it.cost ? '<p class="cost">' + esc(it.cost) + '</p>' : '') +
      (code ? '<p class="code"><span>' + esc(code) + '</span></p>' : '') + '<div class="acts">' +
      (it.pl ? ext(mapUrl(it.pl.q), 'Map') + ext(dirUrl(it.pl.q), 'Directions') : '') +
      '<button class="pill" data-a="addExp" data-n="' + esc(it.ttl) + '" data-cat="' + (KCAT[it.k] || 'other') + '">Ring this up</button></div></div></div></li>';
  }
  function nowNext(d, now) {
    const real = d.items.filter(i => !i.o);
    let cur = null, next = null;
    real.forEach(i => { if (i.at <= now) cur = i; else if (!next) next = i; });
    if (!cur && !next) return '';
    let h = '<section class="nn">';
    if (cur) h += '<div class="nr on"><em>Now</em><b>' + esc(cur.ttl) + '</b><small>until ' + S.hm(cur.end, cur.tzz) + '</small><progress max="100" value="' + Math.min(100, Math.round((now - cur.at) / Math.max(1, cur.end - cur.at) * 100)) + '"></progress></div>';
    if (next) h += '<div class="nr"><em>Next</em><b>' + esc(next.ttl) + '</b><small>' + S.hm(next.at, next.tzz) + ', in ' + S.span(next.at - now) + '</small></div>';
    return h + '</section>';
  }
  function leaveBy(d, now) {
    const it = d.items.find(i => !i.o && i.leaveAt && i.at > now && now >= i.leaveAt - 3 * 3600e3);
    if (!it) return '';
    const late = now >= it.leaveAt;
    return '<section class="leave' + (late ? ' late' : '') + '"><b>' + (late ? 'Leave now' : 'Leave by ' + S.hm(it.leaveAt, it.tzz)) + '</b><small>' + (late ? '' : 'in ' + S.span(it.leaveAt - now) + ', for ') + esc(it.ttl) + ' at ' + S.hm(it.at, it.tzz) + '</small></section>';
  }
  function notices(m, now) {
    return (m.P.notices || []).filter(n => now >= S.at(n.from) && now < S.at(n.to)).map(n => '<section class="note"><b>' + esc(n.t) + '</b><small>' + esc(n.s) + '</small></section>').join('');
  }
  function dayHead(d, m, now, live, vt) {
    const cl = (m.P.climate || {})[d.place];
    return '<header class="hd r-' + esc(d.region || 'air') + '"><p class="hd-k">' + esc(S.dateLbl(d.date)) + (d.n > 0 ? ', day ' + d.n + ' of ' + m.nDays : ', travel day') + '</p>' +
      '<h1' + (vt ? ' class="vt"' : '') + '>' + esc(d.title) + '</h1><p class="hd-s">' + esc(d.sub || '') + '</p>' +
      '<p class="hd-m">' + (cl ? cl.lo + '° to ' + cl.hi + '°C' : '') + (live && d.tz === 'JST' ? (cl ? ', ' : '') + esc(zone('ET')) + ' ' + S.hm(now, 'ET') : '') + '</p></header>';
  }
  function vDay(d, now, live, page) {
    const m = S.trip(), st = stay(d.sleep);
    let h = dayHead(d, m, now, live, page);
    if (live) h += leaveBy(d, now) + nowNext(d, now) + notices(m, now);
    if (d.warn) h += '<section class="note warn"><small>' + esc(d.warn) + '</small></section>';
    const tl = '<ol class="tl">' + d.items.map(it => item(it, d, now, live)).join('') + '</ol>';
    h += (page ? tl : '') + '<div class="rows">' + (page ? '' : fold('tl:' + d.id, 'The whole day', d.items.filter(i => !i.o).length + ' stops', tl));
    if (live && st && st.addr) h += link('home', ' data-k="' + esc(d.sleep) + '"', 'Get home', st.short || st.name);
    else if (st && (st.addr || st.sub)) h += st.addr || st.tel ? link('stay', ' data-k="' + esc(d.sleep) + '"', 'Sleeping at', st.name) : '<div class="row static"><b>Sleeping at</b><small>' + esc(st.name) + '</small></div>';
    if (d.transit) h += fold('tr:' + d.id, 'Getting there', d.transit.meta, '<p class="lead">' + esc(d.transit.title) + '</p><ol class="steps">' + (d.transit.steps || []).map(s => '<li>' + esc(s) + '</li>').join('') + '</ol>');
    if (d.nightKit || d.regroup) {
      const k = d.nightKit || {}, g = d.regroup;
      h += fold('nk:' + d.id, 'Late at night', '', '<ul class="plain">' + [k.last ? 'Last train: ' + k.last : '', k.taxi || '', k.first || '', g ? 'If you get separated, meet at ' + g.n + (g.note ? '. ' + g.note : '') : ''].filter(Boolean).map(x => '<li>' + esc(x) + '</li>').join('') + '</ul>');
    }
    if (d.tips && d.tips.length) h += fold('tp:' + d.id, 'Tips', String(d.tips.length), '<ul class="plain">' + d.tips.map(t => '<li><b>' + esc(t.ttl) + '</b> ' + esc(t.txt) + '</li>').join('') + '</ul>');
    if (d.go && d.go.length) h += fold('go:' + d.id, 'Nearby', String(d.go.length), '<ul class="places">' + d.go.map(g => '<li><div><b>' + esc(g.n) + '</b>' + (g.jp ? ' <i class="jp">' + esc(g.jp) + '</i>' : '') + '<small>' + esc(g.why || '') + '</small></div>' + ext(mapUrl(g.q), 'Map') + '</li>').join('') + '</ul>');
    return h + '</div>';
  }

  /* ---------- Today ---------- */
  const todoDone = id => { const r = S.rec('todo', id); return !!(r && r.d.done); };
  function todoRow(p, today) {
    const done = todoDone(p.id), late = !done && p.due < today;
    return '<li class="' + (done ? 'done' : '') + (done && R.just === p.id ? ' pop' : '') + '"><button data-a="todo" data-id="' + esc(p.id) + '" aria-pressed="' + done + '"><span class="cb">' + ic('check') + '</span><span class="tk"><span>' + esc(p.t) + '</span>' +
      '<small class="' + (late ? 'late' : '') + '">' + (p.who || []).map(i => who(i, 1)).join('') + (late ? 'Overdue, was due ' : 'Due ') + esc(S.dateLbl(p.due)) + '</small></span></button></li>';
  }
  function balanceLine() {
    const v = S.money().bal[S.me] || 0;
    return Math.abs(v) < 0.5 ? 'You are all square' : v > 0 ? 'You are owed ' + cad(v) : 'You owe ' + cad(v);
  }
  const flaps = n => '<span class="flaps" aria-hidden="true">' + String(n).split('').map(c => '<i>' + c + '</i>').join('') + '</span>';
  function vToday(now) {
    const ph = S.phase(now), m = S.trip(), P = m.P;
    if (ph.kind === 'day') return vDay(ph.day, now, true, false);
    if (ph.kind === 'post') {
      return '<header class="hd"><p class="hd-k">Trip complete</p><h1>' + esc((P.post && P.post.title) || 'Welcome home') + '</h1><p class="hd-s">' + esc((P.post && P.post.sub) || '') + '</p></header>' +
        '<div class="rows">' + link('tab', ' data-t="money"', balanceLine(), 'Split') + '</div>';
    }
    const today = isoToday(now), mine = (P.todos || []).filter(p => (!todoDone(p.id) || R.fresh.has(p.id)) && (p.who || []).includes(S.me)).sort((a, b) => (a.due < b.due ? -1 : 1));
    const first = m.days[0];
    let h = '<header class="hd"><p class="hd-k">' + esc((P.pre && P.pre.title) || P.title) + '</p><h1 class="count" aria-label="' + ph.days + (ph.days === 1 ? ' day to go' : ' days to go') + '">' + flaps(ph.days) + '<span>' + (ph.days === 1 ? 'day to go' : 'days to go') + '</span></h1><p class="hd-s">' + esc((P.pre && P.pre.sub) || '') + '</p></header>';
    h += '<h2 class="sec">Yours to do' + (mine.length ? '<small>' + mine.filter(p => !todoDone(p.id)).length + '</small>' : '') + '</h2>';
    h += mine.length ? '<ul class="checks">' + mine.slice(0, 3).map(p => todoRow(p, today)).join('') + '</ul>' : '<p class="empty">Nothing waiting on you.</p>';
    h += '<div class="rows">' + (mine.length > 3 ? link('kit', ' data-s="todo"', 'All tasks', mine.length + ' yours') : '') +
      (first ? link('day', ' data-id="' + esc(first.id) + '"', 'First day', S.dateLbl(first.date)) : '') + '</div>';
    return h;
  }

  /* ---------- Plan ---------- */
  function vTrip(now) {
    const m = S.trip(), ph = S.phase(now);
    if (R.day) {
      const d = m.days.find(x => x.id === R.day);
      if (d) return '<button class="bk" data-a="close" aria-label="Back to the plan">' + ic('back') + 'Plan</button>' + vDay(d, now, ph.kind === 'day' && ph.day.id === d.id, true);
    }
    return '<header class="hd"><h1>Plan</h1><p class="hd-s">' + esc(m.P.route || '') + '</p></header><ol class="line">' + m.days.map(d => {
      const st = stay(d.sleep), on = ph.kind === 'day' && ph.day.id === d.id, past = now >= d.end, x = new Date(d.date + 'T12:00:00Z');
      return '<li class="st r-' + esc(d.region || 'air') + (on ? ' on' : '') + (past ? ' past' : '') + '"><button data-a="day" data-id="' + esc(d.id) + '"><time><b>' + x.getUTCDate() + '</b><small>' + esc(S.dateLbl(d.date).slice(0, 3)) + '</small></time><i class="nd"></i>' +
        '<span class="sc"><b class="st-t">' + esc(d.title) + '</b><small>' + (on ? 'Today. ' : '') + esc(st ? (st.addr || st.inT ? 'Night in ' : '') + (st.short || st.name) : '') + '</small></span></button></li>';
    }).join('') + '</ol>' + (updated(m.P.synced) ? '<p class="fine">Plan last updated ' + esc(updated(m.P.synced)) + '</p>' : '');
  }

  /* ---------- Split ---------- */
  function splitLabel(d) {
    const n = S.names.length;
    if (d.s.length === n) return 'split ' + n + ' ways';
    if (d.s.length === 1) return d.s[0] === d.p ? 'personal' : 'for ' + S.names[d.s[0]];
    return 'for ' + d.s.map(i => S.names[i]).join(' and ');
  }
  function expRow(e) {
    const d = e.d, me = S.me;
    if (d.t === 'x') return '<li><button data-a="rcpt" data-id="' + esc(e.id) + '"><span class="et"><b>' + esc(S.names[d.p]) + ' paid ' + esc(S.names[d.to]) + '</b><small>Payment</small></span><span class="ea"><b>' + money(d.a, d.cur) + '</b></span></button></li>';
    const each = d.a / d.s.length, lent = d.p === me ? d.a - (d.s.includes(me) ? each : 0) : 0, owe = d.p !== me && d.s.includes(me) ? each : 0;
    return '<li><button data-a="rcpt" data-id="' + esc(e.id) + '"><span class="et"><b>' + esc(d.n || CAT[d.cat] || 'Other') + '</b><small>' + esc(S.names[d.p]) + ' paid, ' + esc(splitLabel(d)) + '</small></span>' +
      '<span class="ea"><b>' + money(d.a, d.cur) + '</b>' + (lent > 0.004 ? '<small class="pos">you get back ' + money(lent, d.cur) + '</small>' : owe ? '<small class="neg">you owe ' + money(owe, d.cur) + '</small>' : '<small>not yours</small>') + '</span></button></li>';
  }
  function vMoney(now) {
    const M = S.money(), me = S.me, names = S.names, v = M.bal[me] || 0, list = S.expenses(), f = S.fx(), m = S.trip();
    const cls = Math.abs(v) < 0.5 ? 'zero' : v > 0 ? 'pos' : 'neg';
    const days = Math.max(1, Math.min(m.nDays || 1, Math.ceil((now - m.start) / 864e5)));
    let h = '<header class="hd bal ' + cls + '"><p class="hd-k">' + (cls === 'zero' ? 'Your balance' : v > 0 ? 'You are owed' : 'You owe') + '</p><h1 id="balN" data-v="' + Math.abs(v).toFixed(2) + '">' + (cls === 'zero' ? 'All square' : cad(v)) + '</h1>' +
      '<p class="hd-s">' + (cls === 'zero' ? '' : 'About ' + money(S.fromCad(Math.abs(v), 'JPY'), 'JPY') + '. ') + (list.length ? 'Your share so far is ' + cad(M.share[me] || 0) + (now > m.start ? ', ' + cad((M.share[me] || 0) / days) + ' a day.' : '.') : '') + '</p></header>';
    h += '<ul class="peers">' + names.map((n, i) => i === me ? '' : '<li>' + who(i) + '<b>' + esc(n) + '</b><em class="' + (Math.abs(M.bal[i]) < 0.5 ? '' : M.bal[i] > 0 ? 'pos' : 'neg') + '">' + (Math.abs(M.bal[i]) < 0.5 ? 'square' : (M.bal[i] > 0 ? 'is owed ' : 'owes ') + cad(M.bal[i])) + '</em></li>').join('') + '</ul>';
    if (M.turn >= 0) h += '<p class="turn">Next one is on <b>' + esc(M.turn === me ? 'you' : names[M.turn]) + '</b>, ' + cad(M.bal[M.turn]) + ' behind.</p>';
    if (M.pay.length) {
      h += '<h2 class="sec">To settle up</h2><ul class="pays">' + M.pay.map(p => '<li><span><b>' + esc(names[p.from]) + '</b> pays <b>' + esc(names[p.to]) + '</b> <em class="amt">' + cad(p.cad) + '</em></span><button class="pill" data-a="paid" data-f="' + p.from + '" data-to="' + p.to + '" data-v="' + p.cad.toFixed(2) + '">Mark paid</button></li>').join('') + '</ul>';
    }
    if (!list.length) return h + '<p class="empty">Nothing rung up yet. Tap the ¥ button, type the amount, done.</p>';
    h += '<h2 class="sec">Till roll<small>' + cad(M.total) + ' total</small></h2>';
    const today = dayKey(now), yest = dayKey(now - 864e5), groups = [];
    list.forEach(e => { const k = dayKey(e.d.w); let g = groups[groups.length - 1]; if (!g || g.k !== k) { g = { k, rows: [], sum: 0 }; groups.push(g); } g.rows.push(e); if (e.d.t !== 'x') g.sum += S.toCad(e.d.a, e.d.cur); });
    groups.forEach((g, i) => {
      const key = 'x:' + g.k;
      if (i === 0 && !R.seen.has(key)) { R.seen.add(key); R.open.add(key); }
      h += fold(key, g.k === today ? 'Today' : g.k === yest ? 'Yesterday' : S.dateLbl(g.k), g.rows.length + (g.rows.length === 1 ? ' charge, ' : ' charges, ') + cad(g.sum), '<ul class="exps">' + g.rows.map(expRow).join('') + '</ul>');
    });
    return h + '<button class="lnk" data-a="fx">Rates: C$1 = ' + money(f.jpy, 'JPY') + ', US$1 = ' + money(f.usd, 'CAD') + '. Change</button>';
  }

  /* ---------- Kit ---------- */
  const KIT = { todo: 'To-do', codes: 'Booking codes', stays: 'Stays and taxi cards', notes: 'Shared notes', know: 'Good to know', account: 'Account' };
  function ago(ts) { const m = Math.round((Date.now() - ts) / 60000); return m < 1 ? 'just now' : m < 60 ? m + ' min ago' : m < 1440 ? Math.round(m / 60) + ' h ago' : S.dateLbl(dayKey(ts)); }
  const notesList = () => S.notes();
  function vKit(now) {
    const P = S.trip().P, today = isoToday(now), todos = P.todos || [], ph = S.phase(now);
    const open = todos.filter(p => !todoDone(p.id) || R.fresh.has(p.id)).sort((a, b) => (a.due < b.due ? -1 : 1)), done = todos.filter(p => todoDone(p.id) && !R.fresh.has(p.id));
    const stays = Object.keys(P.stays || {}).filter(k => P.stays[k].addr || P.stays[k].inT), nOpen = todos.filter(p => !todoDone(p.id)), mine = nOpen.filter(p => (p.who || []).includes(S.me)).length;
    const k = R.kit;
    if (!k || !KIT[k]) {
      const tonight = ph.kind === 'day' && stay(ph.day.sleep) && stay(ph.day.sleep).addr ? ph.day.sleep : '';
      return '<header class="hd"><h1>Kit</h1></header><div class="rows big">' +
        (tonight ? link('home', ' data-k="' + esc(tonight) + '"', 'Get home', stay(tonight).short || '') : '') +
        link('kit', ' data-s="todo"', KIT.todo, nOpen.length ? nOpen.length + ' open' + (mine ? ', ' + mine + ' yours' : '') : 'All done') +
        link('kit', ' data-s="codes"', KIT.codes, String((P.bookings || []).length)) +
        link('kit', ' data-s="stays"', KIT.stays, String(stays.length)) +
        link('kit', ' data-s="notes"', KIT.notes, S.api >= 2 ? String(notesList().length || '') : '') +
        link('kit', ' data-s="know"', KIT.know, '') +
        link('kit', ' data-s="account"', KIT.account, S.names[S.me] || '') + '</div>';
    }
    let h = '<button class="bk" data-a="close" aria-label="Back to Kit">' + ic('back') + 'Kit</button><header class="hd sm"><h1 class="vt">' + KIT[k] + '</h1></header>';
    if (k === 'todo') {
      h += (open.length ? '<ul class="checks">' + open.map(p => todoRow(p, today)).join('') + '</ul>' : '<p class="empty">Everything is done.</p>') +
        (done.length ? '<div class="rows">' + fold('done', 'Done', String(done.length), '<ul class="checks">' + done.map(p => todoRow(p, today)).join('') + '</ul>') + '</div>' : '');
    } else if (k === 'codes') {
      h += '<p class="fine">Everyone sees these. Tap one to copy it or fix it.</p><ul class="list">' + (P.bookings || []).map(b => { const c = bookCode(b.k); return '<li><button data-a="book" data-k="' + esc(b.k) + '"><b>' + esc(b.n) + '</b><small class="' + (c ? 'dot' : 'add') + '">' + esc(c || 'Add a code') + '</small></button></li>'; }).join('') + '</ul>';
    } else if (k === 'stays') {
      const tonight = ph.kind === 'day' ? ph.day.sleep : '';
      h += '<ul class="list">' + stays.map(s => { const x = P.stays[s]; return '<li><button data-a="stay" data-k="' + esc(s) + '"><b>' + esc(x.name) + '</b><small>' + (s === tonight ? 'Tonight. ' : '') + esc(x.short || '') + (x.inT ? ', check-in from ' + esc(x.inT) : '') + '</small></button></li>'; }).join('') + '</ul>';
    } else if (k === 'notes') {
      if (S.api < 2) h += '<p class="empty">Shared notes switch on with the next backend update.</p>';
      else {
        const list = notesList();
        h += '<p class="fine">Locker numbers, door codes, where the car is. Everyone sees them straight away.</p><div class="addn"><input id="ntIn" type="text" maxlength="140" enterkeyhint="done" autocomplete="off" placeholder="Locker 214 at Nagano Station"><button class="btn" data-a="noteAdd">Pin it</button></div>' +
          (list.length ? '<ul class="list">' + list.map(n => '<li><button data-a="note" data-id="' + esc(n.id) + '"><b>' + esc(n.d.n) + '</b><small>' + esc(S.names[n.by] || '') + ', ' + esc(ago(n.ts)) + '</small></button></li>').join('') + '</ul>' : '');
      }
    } else if (k === 'know') {
      h += '<h2 class="sec">Emergency</h2><ul class="list">' + (P.emergency || []).map(e => '<li><a href="tel:' + esc(String(e.tel).replace(/[^0-9+]/g, '')) + '"><b>' + esc(e.n) + '</b><small class="dot">' + esc(e.tel) + '</small></a></li>').join('') + '</ul>' +
        ((P.onsenRules || []).length ? '<h2 class="sec">In the onsen</h2><ul class="plain pad0">' + P.onsenRules.map(r => '<li>' + esc(r) + '</li>').join('') + '</ul>' : '');
    } else {
      const n = netLabel(), ml = S.mail, snd = pref('snd') !== '0';
      h += '<p class="lead">Signed in as ' + esc(S.names[S.me] || '') + ', with ' + esc(S.names.filter((_, i) => i !== S.me).join(' and ')) + '.</p><p class="fine">' + (n[0] === 'ok' ? 'Everything is synced.' : n[0] === 'busy' ? 'Syncing.' : esc(n[1]) + '.') + (S.last ? ' Last sync ' + esc(ago(S.last)) + '.' : '') + '</p>' +
        '<div class="acts"><button class="pill" data-a="sync">Sync now</button><button class="pill" data-a="snd" aria-pressed="' + snd + '">Till sound ' + (snd ? 'on' : 'off') + '</button></div>';
      h += '<h2 class="sec">Email</h2>';
      if (S.api < 2) h += '<p class="fine">Email alerts switch on with the next backend update.</p>';
      else {
        h += '<p class="fine">Four things only: a task of yours is due tomorrow, the plan changes at short notice, your invite link is used on a new phone, and the final who-pays-whom after the trip.</p>' +
          '<label for="mlIn">Your email</label><input id="mlIn" type="email" inputmode="email" maxlength="120" autocomplete="email" autocapitalize="off" spellcheck="false" value="' + esc(ml ? ml.e : '') + '">' +
          '<p class="fine">' + (ml && ml.on ? 'Alerts are on.' : 'Alerts are off.') + '</p><div class="acts"><button class="pill solid" data-a="mlOn">' + (ml && ml.on ? 'Save email' : 'Turn alerts on') + '</button>' + (ml && ml.on ? '<button class="pill" data-a="mlOff">Turn alerts off</button>' : '') + '</div>';
      }
      h += '<h2 class="sec">This phone</h2><div class="acts"><button class="pill" data-a="invite">Change invite link</button><button class="pill danger" data-a="leaveAsk">Sign out</button></div>';
    }
    return h;
  }

  /* ---------- join ---------- */
  function vJoin(msg) {
    return '<div class="join"><h1>Japan <span class="dot">\'26</span></h1><p>A private trip app. Open it with your invite link.</p>' +
      '<label for="inv">Invite link</label><textarea id="inv" rows="3" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Paste your invite link"></textarea>' +
      '<button class="btn wide" data-a="join">Sign in</button><p id="joinMsg" role="status">' + esc(msg || '') + '</p>' +
      '<p class="fine">On iPhone, add this page to your Home Screen first, open it from there, then paste your link. The link is yours alone, so do not pass it on.</p></div>';
  }
  async function doJoin(text, el) {
    const msg = el || $('#joinMsg');
    if (msg) msg.textContent = 'Signing in…';
    document.body.classList.add('wait');
    const err = await S.join(text);
    document.body.classList.remove('wait');
    if (err) { if (msg) msg.textContent = err; return false; }
    if (sheetOpen) back();
    R.tab = 'today'; R.day = null; R.kit = null; render();
    toast('Signed in as ' + (S.names[S.me] || '') + '.');
    return true;
  }

  /* ---------- the receipt ---------- */
  const stamp = ms => { const x = new Date(ms); return S.dateLbl(dayKey(ms)) + ' ' + S.pad(x.getHours()) + ':' + S.pad(x.getMinutes()); };
  const fmtTyped = (s, cur) => { if (!s) return '0'; const [i, f] = s.split('.'); return Number(i).toLocaleString('en-US') + (s.includes('.') && cur !== 'JPY' ? '.' + (f || '') : ''); };
  // One receipt, used live in the register and to show a saved charge.
  function receipt(x, no) {
    const title = (S.trip() && S.trip().P.title) || 'Trip';
    return '<div class="rc"><div class="rc-h"><b>' + esc(title) + '</b><small>' + esc(stamp(x.w)) + '<span>No. ' + String(no).padStart(4, '0') + '</span></small></div>' +
      '<div class="rc-l"><span data-rc="cat"></span><span data-rc="note"></span></div>' +
      '<div class="rc-l"><span data-rc="who"></span><span data-rc="each"></span></div>' +
      '<div class="rc-t"><span>Total</span><b data-rc="amt"></b></div><div class="rc-l cv"><span data-rc="cv"></span></div>' +
      '<div class="rc-f"><i class="bars"></i><small class="jp">ありがとうございます</small></div><i class="hanko jp" aria-hidden="true">済</i></div>';
  }
  function fillReceipt(root, x) {
    const set = (k, v) => { const el = root.querySelector('[data-rc=' + k + ']'); if (el) el.textContent = v; };
    const a = typeof x.amt === 'string' ? parseFloat(x.amt) || 0 : x.a;
    if (x.t === 'x') {
      set('cat', 'Payment'); set('note', ''); set('who', S.names[x.p] + ' paid ' + S.names[x.to]); set('each', '');
    } else {
      set('cat', CAT[x.cat] || 'Other'); set('note', x.n || '');
      set('who', (S.names[x.p] || '') + ' paid');
      set('each', !a ? '' : x.s.length > 1 ? '÷' + x.s.length + '  ' + money(a / x.s.length, x.cur) + ' each' : x.s[0] === x.p ? 'personal' : 'all for ' + S.names[x.s[0]]);
    }
    set('amt', typeof x.amt === 'string' ? SYM[x.cur] + fmtTyped(x.amt, x.cur) : money(a, x.cur));
    set('cv', x.cur !== 'CAD' && a ? 'about ' + cad(S.toCad(a, x.cur)) : '');
    root.querySelector('.rc').classList.toggle('zero', !a);
  }

  /* ---------- till sounds: made on the spot, no audio files ---------- */
  let AC = null;
  function sound(kind) {
    if (pref('snd') === '0') return;
    try {
      AC = AC || new (window.AudioContext || window.webkitAudioContext)();
      if (AC.state === 'suspended') AC.resume();
      const t = AC.currentTime, out = AC.createGain();
      out.connect(AC.destination);
      if (kind === 'key') {
        const o = AC.createOscillator(); o.type = 'square'; o.frequency.value = 1900;
        out.gain.setValueAtTime(0.025, t); out.gain.exponentialRampToValueAtTime(0.0001, t + 0.03);
        o.connect(out); o.start(t); o.stop(t + 0.035);
        return;
      }
      // Printer chatter: short bursts of noise. Then the bell.
      const len = Math.floor(AC.sampleRate * 0.32), buf = AC.createBuffer(1, len, AC.sampleRate), ch = buf.getChannelData(0);
      for (let i = 0; i < len; i++) ch[i] = (Math.random() * 2 - 1) * (Math.floor(i / (len / 7)) % 2 ? 0.15 : 1);
      const n = AC.createBufferSource(), f = AC.createBiquadFilter(), ng = AC.createGain();
      n.buffer = buf; f.type = 'bandpass'; f.frequency.value = 3200; f.Q.value = 1.2; ng.gain.value = 0.07;
      n.connect(f); f.connect(ng); ng.connect(AC.destination); n.start(t);
      [[1318.5, 0.11], [1975.5, 0.06], [2637, 0.04]].forEach(p => {
        const o = AC.createOscillator(), g = AC.createGain();
        o.type = 'sine'; o.frequency.value = p[0];
        g.gain.setValueAtTime(0.0001, t + 0.3); g.gain.exponentialRampToValueAtTime(p[1], t + 0.31); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.1);
        o.connect(g); g.connect(AC.destination); o.start(t + 0.3); o.stop(t + 1.15);
      });
    } catch { /* sound is a nicety */ }
  }

  /* ---------- the register ---------- */
  let X = null, ringing = false;
  function suggestions() {
    const now = Date.now(), ph = S.phase(now), out = [];
    if (ph.kind !== 'day') return out;
    const real = ph.day.items.filter(i => KCAT[i.k]);
    let at = -1;
    real.forEach((i, n) => { if (i.at <= now) at = n; });
    [real[at], real[at + 1], real[at - 1]].forEach(i => { if (i && out.length < 3 && !out.some(o => o.ttl === i.ttl)) out.push(i); });
    return out;
  }
  function openExp(pre) {
    const now = Date.now(), ph = S.phase(now), n = S.names.length, all = Array.from({ length: n }, (_, i) => i), sug = suggestions(), M = S.money();
    X = Object.assign({ id: null, amt: '', cur: ph.kind === 'day' && ph.day.tz === 'JST' ? 'JPY' : 'CAD', cat: sug[0] ? KCAT[sug[0].k] : 'food', n: '', p: S.me, s: all, w: now }, pre || {});
    const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'alt', '0', 'del'], el = $('#reg');
    const chips = (X.id ? '' : (M.turn >= 0 && M.turn !== S.me ? '<button data-a="xTurn" data-v="' + M.turn + '">' + esc(S.names[M.turn]) + '’s round?</button>' : '') +
      sug.map(i => '<button data-a="xSug" data-n="' + esc(i.ttl.slice(0, 80)) + '" data-cat="' + KCAT[i.k] + '">' + esc(i.ttl) + '</button>').join(''));
    el.innerHTML = '<div class="rg" role="dialog" aria-modal="true" aria-label="' + (X.id ? 'Edit charge' : 'Add a charge') + '" tabindex="-1">' +
      '<div class="rg-top"><button class="ib" data-a="close" aria-label="Close">' + ic('x') + '</button><div class="segs cur">' + CURS.map(c => '<button data-a="xCur" data-v="' + c + '">' + SYM[c] + '</button>').join('') + '</div>' +
      (X.id ? '<button class="ib danger" data-a="xDel" aria-label="Delete this charge">' + ic('trash') + '</button>' : '<i class="ib"></i>') + '</div>' +
      '<div class="rg-win"><div class="rg-paper" id="rgP">' + receipt(X, X.id ? receiptNo(X.id) : S.expenses().length + 1) + '</div></div><div class="rg-slot"></div>' +
      '<div class="rg-body"><input id="xNote" type="text" maxlength="80" enterkeyhint="done" autocomplete="off" placeholder="What was it? Optional" value="' + esc(X.n) + '">' +
      (chips ? '<div class="strip sug">' + chips + '</div>' : '') +
      '<div class="strip cats">' + S.CATS.map(c => '<button data-a="xCat" data-v="' + c + '">' + CAT[c] + '</button>').join('') + '</div>' +
      '<div class="rg-who"><div><small>Paid by</small>' + all.map(i => '<button data-a="xPay" data-v="' + i + '" aria-label="' + esc(S.names[i]) + '">' + who(i) + '</button>').join('') + '</div>' +
      '<div><small>Split</small>' + all.map(i => '<button data-a="xSplit" data-v="' + i + '" aria-label="' + esc(S.names[i]) + '">' + who(i) + '</button>').join('') + '</div></div>' +
      '<div class="keys">' + keys.map(k => '<button data-key="' + k + '"' + (k === 'del' ? ' aria-label="Delete a digit"' : '') + '>' + (k === 'del' ? ic('del') : k === 'alt' ? '' : k) + '</button>').join('') + '</div>' +
      '<button class="ring" data-a="xSave">' + (X.id ? 'Save changes' : 'Ring it up') + '</button></div></div>';
    el.hidden = false;
    pushLayer(hideReg);
    requestAnimationFrame(() => { el.classList.add('on'); const p = el.querySelector('.rg'); if (p) p.focus({ preventScroll: true }); });
    paintExp();
  }
  function hideReg() {
    const el = $('#reg');
    X = null; ringing = false;
    el.classList.remove('on');
    setTimeout(() => { if (!X) { el.hidden = true; el.innerHTML = ''; } }, 240);
  }
  const receiptNo = id => { const l = S.expenses(); const i = l.findIndex(e => e.id === id); return i < 0 ? l.length + 1 : l.length - i; };
  function paintExp() {
    if (!X) return;
    const p = $('#reg .rg'); if (!p) return;
    const on = (sel, f) => p.querySelectorAll(sel).forEach(b => { const hit = f(b.dataset.v); b.classList.toggle('on', hit); b.setAttribute('aria-pressed', hit); });
    on('[data-a=xCur]', v => v === X.cur); on('[data-a=xCat]', v => v === X.cat); on('[data-a=xPay]', v => +v === X.p); on('[data-a=xSplit]', v => X.s.includes(+v));
    const note = p.querySelector('#xNote');
    fillReceipt(p, Object.assign({}, X, { n: note ? note.value.trim() : X.n }));
    p.querySelector('[data-key=alt]').textContent = X.cur === 'JPY' ? '00' : '.';
    p.querySelector('.ring').disabled = !(parseFloat(X.amt) > 0);
  }
  // The paper jumps a line, like a print head landing.
  function nudge() {
    const p = $('#rgP');
    if (p && p.animate && !calm()) p.animate([{ transform: 'translateY(calc(var(--feed) + 3px))' }, { transform: 'translateY(var(--feed))' }], { duration: 90, easing: 'steps(2, end)' });
  }
  function expKey(k) {
    if (!X || ringing) return;
    let a = X.amt;
    const alt = X.cur === 'JPY' ? '00' : '.';
    if (k === 'alt') k = alt;
    if (k === '.' && X.cur === 'JPY') return;
    if (k === 'del') a = a.slice(0, -1);
    else if (k === '.') { if (!a.includes('.')) a = (a || '0') + '.'; }
    else if (k === '00') { if (a && a !== '0') a += '00'; }
    else a = a === '0' ? k : a + k;
    const parts = a.split('.');
    if (parts[0].length > 8 || (parts[1] || '').length > 2) return;
    X.amt = a; buzz(); sound('key'); nudge(); paintExp();
  }
  function saveExp() {
    if (!X || ringing) return;
    const a = parseFloat(X.amt);
    if (!(a > 0) || !X.s.length) return;
    const note = $('#xNote'), id = X.id || S.newId(), prev = S.rec('exp', id);
    const d = { t: 'e', a: X.cur === 'JPY' ? Math.round(a) : Math.round(a * 100) / 100, cur: X.cur, p: X.p, w: X.w, n: (note ? note.value : X.n).trim().slice(0, 80), cat: X.cat, s: X.s.slice().sort() };
    const done = () => {
      if (!ringing) return;
      S.put('exp', id, d); // saved before the paper has left the screen, whatever happens next
      back();
      toast((prev ? 'Changed: ' : 'Rung up: ') + money(d.a, d.cur) + (d.n ? ', ' + d.n : ''), () => S.put('exp', id, prev ? prev.d : null));
    };
    ringing = true;
    const paper = $('#rgP'), hanko = paper && paper.querySelector('.hanko');
    buzz([12, 40, 12, 40, 30]); sound('ring');
    if (!paper || !paper.animate || calm()) { done(); return; }
    $('#reg .rg').classList.add('ringing');
    paper.animate([{ transform: 'translateY(var(--feed))' }, { transform: 'translateY(0)' }], { duration: 300, easing: 'steps(8, end)', fill: 'forwards' });
    if (hanko) hanko.animate([{ opacity: 0, transform: 'rotate(-14deg) scale(2.4)' }, { opacity: 1, transform: 'rotate(-14deg) scale(.94)', offset: 0.7 }, { opacity: 1, transform: 'rotate(-14deg) scale(1)' }], { duration: 170, delay: 300, easing: 'ease-in', fill: 'forwards' });
    const tear = paper.animate([{ transform: 'translateY(0) rotate(0)', opacity: 1 }, { transform: 'translateY(-18px) rotate(-1.5deg)', opacity: 1, offset: 0.25 }, { transform: 'translateY(-130%) rotate(-5deg)', opacity: 0 }], { duration: 260, delay: 520, easing: 'cubic-bezier(.5,0,.9,.4)', fill: 'forwards' });
    tear.onfinish = done;
    setTimeout(done, 1000); // if the animation is ever interrupted, the charge still saves
  }

  /* ---------- other sheets ---------- */
  function rcptSheet(id) {
    const r = S.rec('exp', id); if (!r) return;
    const d = r.d;
    sheet('<div class="rc-wrap" id="rcV">' + receipt(d, receiptNo(id)) + '</div><p class="fine ctr">Added by ' + esc(S.names[r.by] || '') + '</p><div class="acts ctr">' +
      (d.t === 'x' ? '' : '<button class="pill solid" data-a="editExp" data-id="' + esc(id) + '">Edit</button>') + '<button class="pill danger" data-a="expDel" data-id="' + esc(id) + '">Delete</button></div>', 'rcs');
    fillReceipt($('#rcV'), d);
  }
  function taxiCard(s) {
    return '<div class="card-jp">' + (s.addrJp ? '<small class="jp">ここまでお願いします</small>' : '<small>Please take us here</small>') + '<b class="jp">' + esc(s.jp || s.name) + '</b><p class="jp">' + esc(s.addrJp || s.addr) + '</p>' + (s.tel ? '<p class="dot">' + esc(s.tel) + '</p>' : '') + '</div>';
  }
  function stayActs(s) {
    const q = s.name + (s.addr ? ', ' + s.addr : '');
    return '<div class="acts">' + (s.addr ? ext(dirUrl(q), 'Directions') + ext(mapUrl(q), 'Map') + '<button class="pill" data-a="copy" data-v="' + esc(s.addrJp || s.addr) + '">Copy address</button>' : '') +
      (s.tel ? '<a class="pill" href="tel:' + esc(s.tel.replace(/[^0-9+]/g, '')) + '">Call</a>' : '') + '</div>';
  }
  function staySheet(k) {
    const s = stay(k); if (!s) return;
    sheet(head(s.name) + (s.sub ? '<p>' + esc(s.sub) + '</p>' : '') +
      '<dl>' + (s.addr ? '<dt>Address</dt><dd>' + esc(s.addr) + '</dd>' : '') + (s.inT ? '<dt>Check-in</dt><dd>From ' + esc(s.inT) + (s.outT ? ', out by ' + esc(s.outT) : '') + '</dd>' : '') + '</dl>' +
      (s.addr ? '<h3 class="sec">Show this to a taxi driver</h3>' + taxiCard(s) : '') + stayActs(s), 'tall');
  }
  // Tonight's bed, in Japanese, plus the last train and where to regroup: the 1 a.m. screen.
  function homeSheet(k) {
    const s = stay(k); if (!s) return;
    const ph = S.phase(Date.now()), d = ph.kind === 'day' ? ph.day : null, nk = (d && d.nightKit) || {}, g = d && d.regroup;
    sheet(head('Get home') + taxiCard(s) + stayActs(s) +
      '<ul class="plain">' + [nk.last ? 'Last train: ' + nk.last : '', nk.taxi || '', nk.first || '', g ? 'Lost each other? Meet at ' + g.n + (g.note ? '. ' + g.note : '') : ''].filter(Boolean).map(x => '<li>' + esc(x) + '</li>').join('') + '</ul>', 'tall');
  }
  function bookSheet(k) {
    const b = (S.trip().P.bookings || []).find(x => x.k === k); if (!b) return;
    const c = bookCode(k);
    sheet(head(b.n) + '<label for="bkIn">Code or note. Everyone on the trip sees it.</label><input id="bkIn" type="text" maxlength="160" autocomplete="off" autocapitalize="characters" spellcheck="false" value="' + esc(c) + '">' +
      '<div class="acts">' + (c ? '<button class="pill" data-a="copy" data-v="' + esc(c) + '">Copy</button>' : '') + '<button class="pill solid" data-a="bookSave" data-k="' + esc(k) + '">Save</button></div>');
  }
  function fxSheet() {
    const f = S.fx();
    sheet(head('Exchange rates') + '<p>Every charge is converted to Canadian dollars with these. A change applies to everyone.</p>' +
      '<label for="fxJ">Yen for C$1</label><input id="fxJ" type="text" inputmode="decimal" value="' + f.jpy + '"><label for="fxU">Canadian dollars for US$1</label><input id="fxU" type="text" inputmode="decimal" value="' + f.usd + '">' +
      '<div class="acts"><button class="pill solid" data-a="fxSave">Save rates</button></div>');
  }

  /* ---------- drawing ---------- */
  let raf = 0;
  function render() { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); }
  function countTo(el, from, to) {
    if (calm() || !el) return;
    const t0 = performance.now(), dur = 520;
    const step = t => { const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3); if (!el.isConnected) return; el.textContent = cad(from + (to - from) * e); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }
  function draw() {
    cancelAnimationFrame(raf);
    const view = $('#view'), now = Date.now();
    const screen = !S.joined ? 'join' : !S.hasPlan ? 'load' : 'main';
    document.body.dataset.screen = screen;
    if (screen === 'join') { if (R.screen !== 'join') { $('#top').innerHTML = ''; view.innerHTML = vJoin(); } R.screen = screen; return; }
    if (screen === 'load') { view.innerHTML = '<div class="join"><h1>Japan <span class="dot">\'26</span></h1><p>' + (S.state === 'syncing' ? 'Loading…' : 'The trip did not load. Check your connection and try again.') + '</p><button class="btn wide" data-a="sync">Try again</button></div>'; R.screen = screen; return; }
    const key = R.tab + (R.tab === 'trip' ? R.day || '' : R.tab === 'more' ? R.kit || '' : ''), same = view.dataset.key === key;
    if (!same) R.scroll[view.dataset.key] = view.scrollTop;
    paintNet();
    const top = view.scrollTop;
    view.innerHTML = '<div class="pad' + (same ? '' : ' in') + '">' +
      (S.state === 'locked' ? '<section class="note warn"><small>Your access was removed and this phone has stopped syncing. Ask for a new invite link, then go to Kit, Account, Change invite link.</small></section>' : '') +
      (R.tab === 'today' ? vToday(now) : R.tab === 'trip' ? vTrip(now) : R.tab === 'money' ? vMoney(now) : vKit(now)) + '</div>';
    view.dataset.key = key;
    view.scrollTop = same ? top : (R.scroll[key] || 0);
    paintTabs();
    const bal = $('#balN');
    if (bal) { const v = +bal.dataset.v; if (R.bal !== null && Math.abs(R.bal - v) >= 0.5 && v >= 0.5) countTo(bal, R.bal, v); R.bal = v; }
    R.just = '';
    R.screen = screen;
  }
  // Change screens with the browser's view transition when it has one: the old screen and the new one cross over,
  // and a title that exists on both sides travels between them.
  function go(change, from, toSel) {
    if (!document.startViewTransition || calm()) { change(); draw(); return; }
    if (from) from.style.viewTransitionName = 'ttl';
    const land = () => { const el = toSel && $(toSel); if (el) el.style.viewTransitionName = 'ttl'; return el; };
    let vt;
    try { vt = document.startViewTransition(() => { change(); draw(); land(); }); } catch { change(); draw(); return; }
    if (vt && vt.finished) vt.finished.then(() => { const el = toSel && $(toSel); if (el) el.style.viewTransitionName = ''; }, () => 0);
  }

  /* ---------- actions ---------- */
  const A = {
    tab(el) {
      const t = el.dataset.t;
      if (R.day || R.kit) { R.day = null; R.kit = null; layers.pop(); history.back(); } // leave the open page and use up its back-button step
      if (R.tab === t) { R.scroll[t] = 0; $('#view').scrollTop = 0; render(); return; }
      R.fresh.clear();
      go(() => { R.tab = t; });
    },
    sync() { S.sync(); },
    close() { back(); },
    undo() { const f = undoFn; undoFn = null; $('#toast').classList.remove('on'); if (f) f(); },
    fold(el) {
      const k = el.dataset.k, box = el.closest('.fold, .ti'), open = !R.open.has(k);
      if (open) R.open.add(k); else R.open.delete(k);
      if (box) box.classList.toggle('open', open);
      el.setAttribute('aria-expanded', open);
    },
    day(el) {
      const id = el.dataset.id;
      R.open.add('tl:' + id);
      pushLayer(() => go(() => { R.day = null; }, null, '.st [data-id="' + id + '"] .st-t'));
      go(() => { R.tab = 'trip'; R.day = id; R.scroll['trip' + id] = 0; }, el.querySelector('.st-t'));
    },
    kit(el) {
      const s = el.dataset.s;
      pushLayer(() => go(() => { R.kit = null; R.fresh.clear(); }, null, '.rows [data-s="' + s + '"] b'));
      go(() => { R.tab = 'more'; R.kit = s; R.scroll['more' + s] = 0; }, el.querySelector('b'));
    },
    todo(el) {
      const id = el.dataset.id, p = (S.trip().P.todos || []).find(x => x.id === id); if (!p) return;
      const was = todoDone(id);
      if (!was) R.fresh.add(id); // a task just ticked stays where it is until you leave the screen
      R.just = was ? '' : id;
      S.put('todo', id, { done: !was, n: p.t.slice(0, 140) }); buzz(was ? 8 : [10, 30, 14]);
    },
    stay(el) { staySheet(el.dataset.k); },
    home(el) { homeSheet(el.dataset.k); },
    book(el) { bookSheet(el.dataset.k); },
    bookSave(el) {
      const k = el.dataset.k, b = (S.trip().P.bookings || []).find(x => x.k === k), v = ($('#bkIn').value || '').trim();
      S.put('book', k, { v: v.slice(0, 160), n: b ? b.n.slice(0, 140) : '' }); back(); toast('Code saved.');
    },
    noteAdd() {
      const el = $('#ntIn'), v = (el.value || '').replace(/\s+/g, ' ').trim().slice(0, 140);
      if (!v) { el.focus(); return; }
      const id = S.newId();
      S.put('note', id, { n: v }); buzz();
      toast('Pinned for everyone.', () => S.put('note', id, null));
    },
    note(el) {
      const id = el.dataset.id, r = S.rec('note', id); if (!r) return;
      sheet(head('Shared note') + '<p class="big">' + esc(r.d.n) + '</p><div class="acts"><button class="pill solid" data-a="copy" data-v="' + esc(r.d.n) + '">Copy</button><button class="pill danger" data-a="noteDel" data-id="' + esc(id) + '">Delete for everyone</button></div>');
    },
    noteDel(el) { const id = el.dataset.id, prev = S.rec('note', id); S.put('note', id, null); back(); toast('Note deleted.', prev ? () => S.put('note', id, prev.d) : null); },
    copy(el) {
      const v = el.dataset.v || '';
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(v).then(() => toast('Copied.'), () => toast('Could not copy. Press and hold the text instead.'));
      else toast('Copying is not available here. Press and hold the text instead.');
    },
    addExp(el) { if (X) return; openExp(el.dataset.n ? { n: el.dataset.n.slice(0, 80), cat: el.dataset.cat || 'other' } : null); },
    rcpt(el) { rcptSheet(el.dataset.id); },
    editExp(el) {
      const id = el.dataset.id, r = S.rec('exp', id); if (!r || r.d.t === 'x') return;
      const d = r.d;
      const pre = { id, amt: String(d.a), cur: d.cur, cat: d.cat, n: d.n || '', p: d.p, s: d.s.slice(), w: d.w };
      // close the receipt first, then open the register once the back step has landed
      window.addEventListener('popstate', () => setTimeout(() => openExp(pre), 0), { once: true });
      back();
    },
    expDel(el) { const id = el.dataset.id, prev = S.rec('exp', id); S.put('exp', id, null); back(); toast('Deleted.', prev ? () => S.put('exp', id, prev.d) : null); },
    xCur(el) { X.cur = el.dataset.v; if (X.cur === 'JPY' && X.amt.includes('.')) X.amt = String(Math.round(parseFloat(X.amt) || 0) || ''); paintExp(); },
    xCat(el) { X.cat = el.dataset.v; paintExp(); },
    xPay(el) { X.p = +el.dataset.v; buzz(); paintExp(); },
    xTurn(el) { X.p = +el.dataset.v; el.remove(); buzz(); paintExp(); },
    xSug(el) { const n = $('#xNote'); if (n) n.value = el.dataset.n; X.cat = el.dataset.cat || X.cat; paintExp(); },
    xSplit(el) { const i = +el.dataset.v; if (X.s.includes(i)) { if (X.s.length > 1) X.s = X.s.filter(x => x !== i); } else X.s.push(i); buzz(); paintExp(); },
    xSave() { saveExp(); },
    xDel() { const id = X.id, prev = S.rec('exp', id); S.put('exp', id, null); back(); toast('Deleted.', prev ? () => S.put('exp', id, prev.d) : null); },
    paid(el) {
      const id = S.newId(), f = +el.dataset.f, to = +el.dataset.to, v = +el.dataset.v, li = el.closest('li');
      const save = () => { S.put('exp', id, { t: 'x', a: v, cur: 'CAD', p: f, to, w: Date.now(), n: '' }); toast(S.names[f] + ' paid ' + S.names[to] + ' ' + cad(v) + '.', () => S.put('exp', id, null)); };
      buzz([10, 30, 20]);
      if (!li || calm()) { save(); return; }
      li.classList.add('stamped'); el.disabled = true;
      setTimeout(save, 420);
    },
    fx() { fxSheet(); },
    fxSave() {
      const j = parseFloat($('#fxJ').value), u = parseFloat($('#fxU').value);
      if (!(j >= 50 && j <= 400) || !(u >= 0.5 && u <= 3)) { toast('Those rates do not look right. Yen is usually near 110, US dollars near 1.4.'); return; }
      S.put('set', 'fx', { jpy: j, usd: u }); back(); toast('Rates saved.');
    },
    snd() { pref('snd', pref('snd') === '0' ? '1' : '0'); render(); sound('ring'); },
    mlOn() {
      const v = ($('#mlIn').value || '').trim();
      if (!/^[^\s@<>"',;]{1,64}@[^\s@<>"',;]{1,60}\.[a-z]{2,24}$/i.test(v)) { toast('Enter the email address to send alerts to.'); $('#mlIn').focus(); return; }
      S.setMail(v, true); toast('Alerts are on for ' + v + '.');
    },
    mlOff() { const m = S.mail; S.setMail(m ? m.e : '', false); toast('Alerts are off.'); },
    join() { doJoin($('#inv').value); },
    invite() {
      sheet(head('Change invite link') + '<label for="inv2">Paste your new invite link</label><textarea id="inv2" rows="3" autocomplete="off" autocapitalize="off" spellcheck="false"></textarea><p id="inv2Msg" role="status"></p><div class="acts"><button class="pill solid" data-a="invite2">Use this link</button></div>');
    },
    invite2() { doJoin($('#inv2').value, $('#inv2Msg')); },
    leaveAsk() {
      sheet(head('Sign out of this phone?') + '<p>The trip is removed from this phone. You need your invite link to get back in.' + (S.waiting ? ' <b>' + S.waiting + (S.waiting === 1 ? ' change has' : ' changes have') + ' not synced and will be lost.</b>' : '') + '</p><div class="acts"><button class="pill danger" data-a="leave">Sign out</button></div>');
    },
    leave() { back(); S.leave(); R.screen = ''; R.day = null; R.kit = null; render(); }
  };

  document.addEventListener('click', ev => {
    const el = ev.target.closest('[data-a]');
    if (!el || el.disabled) return;
    const f = A[el.dataset.a];
    if (f) f(el, ev);
  });
  document.addEventListener('pointerdown', ev => {
    const el = ev.target.closest('[data-key]');
    if (el) { ev.preventDefault(); el.classList.add('hit'); setTimeout(() => el.classList.remove('hit'), 110); expKey(el.dataset.key); }
  });
  document.addEventListener('input', ev => { if (ev.target.id === 'xNote') paintExp(); });
  document.addEventListener('keydown', ev => {
    if (ev.key === 'Escape' && layers.length) { back(); return; }
    if (ev.key === 'Enter' && ev.target.id === 'ntIn') { A.noteAdd(); return; }
    if (!X || ev.target.tagName === 'INPUT') { if (ev.key === 'Enter' && ev.target.id === 'xNote') ev.target.blur(); return; }
    if (/^[0-9]$/.test(ev.key)) expKey(ev.key);
    else if (ev.key === '.') expKey('.');
    else if (ev.key === 'Backspace') expKey('del');
    else if (ev.key === 'Enter') saveExp();
  });

  /* ---------- start ---------- */
  function boot() {
    let raw = '';
    try { raw = location.hash.length > 1 ? decodeURIComponent(location.hash.slice(1)) : ''; } catch { raw = ''; }
    if (raw) { try { history.replaceState(null, '', location.pathname + location.search); } catch { /* ignore */ } }
    S.on(render);
    draw();
    const inv = raw ? S.parseInvite(raw) : null, cur = S.invite;
    if (inv && !cur) requestAnimationFrame(() => { const t = $('#inv'); if (t) t.value = 'Invite link received'; doJoin(raw); });
    else if (inv && cur && inv.key !== cur.key) {
      requestAnimationFrame(() => sheet(head('Use this invite link?') + '<p>This phone is already signed in. Carrying on replaces that sign-in.</p><textarea id="inv2" rows="2" readonly>' + esc(raw) + '</textarea><p id="inv2Msg" role="status"></p><div class="acts"><button class="pill solid" data-a="invite2">Use this link</button></div>'));
    }
    if (S.joined) S.sync();
    let lastMin = -1;
    setInterval(() => { const m = Math.floor(Date.now() / 60000); if (m !== lastMin) { lastMin = m; if (S.joined && S.hasPlan && !document.hidden && !X) render(); } }, 15000);
    setInterval(() => { if (S.joined && !document.hidden) S.sync(); }, 60000);
    document.addEventListener('visibilitychange', () => { if (!document.hidden && S.joined) { S.sync(); render(); } });
    window.addEventListener('online', () => { if (S.joined) S.sync(); });
    window.addEventListener('resize', paintTabs);
    if ('serviceWorker' in navigator) {
      // When an update takes over, show it straight away instead of on the next launch.
      const had = !!navigator.serviceWorker.controller;
      let swapped = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => { if (had && !swapped && !X) { swapped = true; location.reload(); } });
      navigator.serviceWorker.register('sw.js', { updateViaCache: 'none' }).then(r => { document.addEventListener('visibilitychange', () => { if (!document.hidden) r.update().catch(() => 0); }); }).catch(() => { /* offline shell is optional */ });
    }
  }
  boot();
})();
