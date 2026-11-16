/* Private trip app: screens. Everything shown comes from Store (the plan and shared data fetched after joining). */
(function () {
  'use strict';
  const S = window.Store, $ = s => document.querySelector(s);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

  const IC = {
    today: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"/>',
    trip: '<circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H14a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h5.5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    money: '<rect x="3" y="6" width="18" height="13" rx="3"/><path d="M3 10h18M16 14.5h2"/>',
    more: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    train: '<rect x="6" y="3" width="12" height="14" rx="3"/><path d="M6 11h12M9.5 14h.01M14.5 14h.01M8 21l2-4M16 21l-2-4"/>',
    flight: '<path d="M3 13l18-7-5 14-3.5-5.5z"/><path d="M12.5 14.5 21 6"/>',
    bus: '<rect x="5" y="4" width="14" height="13" rx="2.5"/><path d="M5 11h14M8.5 14h.01M15.5 14h.01M7.5 17v2.5M16.5 17v2.5"/>',
    move: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    food: '<path d="M7 3v18M5 3v5a2 2 0 0 0 4 0V3M17 21V3c-2 2-3 4.5-3 8h3"/>',
    drinks: '<path d="M6 4h12l-1.5 9a4.5 4.5 0 0 1-9 0zM12 17.5V21M8.5 21h7"/>',
    see: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/>',
    night: '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/>',
    stay: '<path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5M7 11.5h.01"/>',
    ski: '<path d="M3 19l6-11 4 6 2.5-3.5L21 19z"/>',
    onsen: '<path d="M4 15a8 8 0 0 0 16 0zM9 4c-1 1.5 1 2.5 0 4M12.5 3c-1 1.5 1 2.5 0 4M16 4c-1 1.5 1 2.5 0 4"/>',
    shop: '<path d="M5 8h14l-1 12H6zM9 8V6a3 3 0 0 1 6 0v2"/>',
    admin: '<rect x="5" y="4.5" width="14" height="16" rx="2.5"/><path d="M9 4.5V3h6v1.5M9 10h6M9 14h4"/>',
    meet: '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0M16 5.5a3 3 0 0 1 0 5.5M17.5 14.5A6 6 0 0 1 21 20"/>',
    taxi: '<path d="M5 16h14v-3l-1.6-4.5A2 2 0 0 0 15.5 7h-7a2 2 0 0 0-1.9 1.5L5 13zM6.5 16v2.5M17.5 16v2.5M8 13h.01M16 13h.01M10 7l.6-2h2.8l.6 2"/>',
    tickets: '<path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4zM14 6v12"/>',
    other: '<path d="M4 12V5h7l9 9-7 7zM8.5 8.5h.01"/>',
    pin: '<path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
    dir: '<path d="M12 3l9 9-9 9-9-9zM9 13.5V11h5M12 8.5l2.5 2.5-2.5 2.5"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    back: '<path d="M15 5l-7 7 7 7"/>',
    chev: '<path d="M9 5l7 7-7 7"/>',
    down: '<path d="M5 9l7 7 7-7"/>',
    trash: '<path d="M5 7h14M10 7V4.5h4V7M7 7l1 13h8l1-13M10 11v5M14 11v5"/>',
    phone: '<path d="M6 3h3l1.5 5-2 1.5a12 12 0 0 0 6 6l1.5-2 5 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2.5"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
    alert: '<path d="M12 4l9.5 16h-19zM12 10v4.5M12 17.5h.01"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    swap: '<path d="M4 8h14M14 4l4 4-4 4M20 16H6M10 12l-4 4 4 4"/>',
    del: '<path d="M9 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-6-7zM12 9.5l5 5M17 9.5l-5 5"/>',
    temp: '<path d="M12 4a2 2 0 0 0-2 2v8.5a3.5 3.5 0 1 0 4 0V6a2 2 0 0 0-2-2z"/>',
    lock: '<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
    big: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
    list: '<path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01"/>',
    help: '<circle cx="12" cy="12" r="8.5"/><path d="M12 8v5M12 16h.01"/>',
    say: '<path d="M4 6h16v10H10l-5 4v-4H4z"/>'
  };
  const ic = (n, cls) => '<svg class="ic' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (IC[n] || IC.other) + '</svg>';
  const KIND = { flight: 'flight', train: 'train', bus: 'bus', move: 'move', food: 'food', see: 'see', night: 'night', stay: 'stay', ski: 'ski', onsen: 'onsen', shop: 'shop', admin: 'admin', sleep: 'night', meet: 'meet' };
  const KCAT = { food: 'food', night: 'drinks', train: 'transit', bus: 'transit', flight: 'transit', move: 'taxi', see: 'tickets', ski: 'tickets', onsen: 'tickets', shop: 'shop', stay: 'stay' };
  const FAB_CAT = { food: 'food', night: 'drinks', shop: 'shop', train: 'transit', bus: 'transit' };
  const CAT = { food: ['Food', 'food'], drinks: ['Drinks', 'drinks'], transit: ['Transit', 'train'], taxi: ['Taxi', 'taxi'], tickets: ['Tickets', 'tickets'], shop: ['Shopping', 'shop'], stay: ['Stay', 'stay'], other: ['Other', 'other'] };
  const SYM = { JPY: '¥', CAD: 'C$', USD: 'US$' }, CURS = ['JPY', 'CAD', 'USD'];
  const money = (a, cur) => SYM[cur] + (cur === 'JPY' ? Math.round(a).toLocaleString('en-US') : a.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
  const cad = v => money(Math.abs(v), 'CAD');
  const mapUrl = q => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
  const dirUrl = q => 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(q);
  const ext = (url, label, icon) => '<a class="pill" href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">' + ic(icon) + label + '</a>';
  const who = (i, sm) => '<span class="av p' + (i % 4) + (sm ? ' sm' : '') + '">' + esc((S.names[i] || '?').charAt(0)) + '</span>';
  const buzz = () => { try { if (navigator.vibrate) navigator.vibrate(8); } catch { /* not supported */ } };

  const R = { tab: 'today', day: null, open: new Set(), sec: 'todo', done: false, phr: 0, screen: '', scroll: {} };

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
    el.innerHTML = '<div class="scrim" data-a="close"></div><div class="panel ' + (cls || '') + '" role="dialog" aria-modal="true" tabindex="-1">' + html + '</div>';
    if (!sheetOpen) { sheetOpen = true; pushLayer(hideSheet); }
    requestAnimationFrame(() => { el.classList.add('on'); const p = el.querySelector('.panel'); if (p) p.focus({ preventScroll: true }); });
  }
  function hideSheet() {
    const el = $('#sheet');
    sheetOpen = false; X = null;
    el.classList.remove('on');
    sheetT = setTimeout(() => { el.innerHTML = ''; }, 240);
  }
  const head = (title, extra) => '<div class="sh-h"><b>' + esc(title) + '</b>' + (extra || '') + '<button class="ib" data-a="close" aria-label="Close">' + ic('x') + '</button></div>';

  /* ---------- top bar and tabs ---------- */
  function netLabel() {
    const st = S.state, w = S.waiting;
    if (st === 'locked') return ['off', 'Invite turned off'];
    if (st === 'syncing') return ['busy', w ? 'Saving' : 'Syncing'];
    if (st === 'offline' || st === 'error') return ['off', w ? 'Offline · ' + w + ' to send' : 'Offline'];
    return w ? ['busy', w + ' to send'] : ['ok', 'Synced'];
  }
  function vTop(now) {
    const n = netLabel(), m = S.trip();
    return '<div class="tb"><div class="brand"><i class="sun"></i>' + esc((m.P.title || '').toUpperCase()) + '</div>' +
      '<button class="net ' + n[0] + '" data-a="sync" aria-label="Sync now"><i></i>' + esc(n[1]) + '</button>' +
      '<div class="clocks"><div><b>' + S.hm(now, 'JST') + '</b><small>' + esc(zone('JST')) + '</small></div><div><b>' + S.hm(now, 'ET') + '</b><small>' + esc(zone('ET')) + '</small></div></div></div>';
  }
  function vTabs() {
    const t = (id, icon, label) => '<button class="' + (R.tab === id ? 'on' : '') + '" data-a="tab" data-t="' + id + '"' + (R.tab === id ? ' aria-current="page"' : '') + '>' + ic(icon) + '<span>' + label + '</span></button>';
    return t('today', 'today', 'Today') + t('trip', 'trip', 'Trip') +
      '<button class="fab" data-a="addExp" aria-label="Add an expense">' + ic('plus') + '</button>' +
      t('money', 'money', 'Money') + t('more', 'more', 'More');
  }

  /* ---------- a day ---------- */
  const zone = tz => { const m = S.trip(); return (m && m.P.zones && m.P.zones[tz]) || tz; };
  const stay = k => { const m = S.trip(); return (m && m.P.stays && m.P.stays[k]) || null; };
  const bookCode = k => { const r = S.rec('book', k); if (r) return r.d.v; const b = (S.trip().P.bookings || []).find(x => x.k === k); return (b && b.code) || ''; };

  function hero(d, m, live) {
    const st = stay(d.sleep), cl = (m.P.climate || {})[d.place];
    return '<section class="hero r-' + esc(d.region || 'air') + '"><div class="kick">' + (d.n > 0 ? 'Day ' + d.n + ' of ' + m.nDays : 'Travel day') + ' · ' + esc(S.dateLbl(d.date)) + (live ? ' <b>Today</b>' : '') + '</div>' +
      '<h1>' + esc(d.title) + '</h1><p class="sub">' + esc(d.sub || '') + '</p><div class="chips">' +
      (st ? '<span class="chip">' + ic('stay') + esc(st.short || st.name) + '</span>' : '') +
      (cl ? '<span class="chip">' + ic('temp') + cl.lo + '° / ' + cl.hi + '° typical</span>' : '') + '</div></section>';
  }
  function fold(key, icon, title, sub, body) {
    const open = R.open.has(key);
    return '<section class="card"><button class="ch" data-a="fold" data-k="' + esc(key) + '" aria-expanded="' + open + '">' + ic(icon) + '<div><b>' + esc(title) + '</b>' + (sub ? '<small>' + esc(sub) + '</small>' : '') + '</div>' + ic(open ? 'down' : 'chev', 'sm') + '</button>' + (open ? body : '') + '</section>';
  }
  function item(it, d, now, live) {
    const open = R.open.has(it.key), st = !live ? '' : now >= it.end ? ' past' : now >= it.at ? ' now' : '';
    let h = '<li class="ti k-' + esc(it.k) + st + (it.o ? ' opt' : '') + (open ? ' open' : '') + '"><button class="tih" data-a="fold" data-k="' + esc(it.key) + '" aria-expanded="' + open + '">' +
      '<span class="tt">' + (it.a ? '<i>~</i>' : '') + S.hm(it.at, it.tzz) + (it.tzz !== d.tz ? '<small>' + esc(zone(it.tzz)) + '</small>' : '') + '</span>' +
      '<span class="dot">' + ic(KIND[it.k] || 'other') + '</span>' +
      '<span class="tc"><b>' + esc(it.ttl) + '</b>' + (it.cost ? '<small>' + esc(it.cost) + '</small>' : '') + '</span></button>';
    if (open) {
      const code = it.bk ? bookCode(it.bk) : '';
      h += '<div class="tx">' + (it.txt ? '<p>' + esc(it.txt) + '</p>' : '') +
        (code ? '<p class="code">' + ic('tickets', 'xs') + '<span>' + esc(code) + '</span></p>' : '') + '<div class="acts">' +
        (it.pl ? ext(mapUrl(it.pl.q), 'Map', 'pin') + ext(dirUrl(it.pl.q), 'Route', 'dir') : '') +
        '<button class="pill" data-a="addExp" data-n="' + esc(it.ttl) + '" data-cat="' + (KCAT[it.k] || 'other') + '">' + ic('plus') + 'Expense</button></div></div>';
    }
    return h + '</li>';
  }
  function nowNext(d, now) {
    const real = d.items.filter(i => !i.o);
    let cur = null, next = null;
    real.forEach(i => { if (i.at <= now) cur = i; else if (!next) next = i; });
    if (!cur && !next) return '';
    let h = '<section class="card nn">';
    if (cur) h += '<div class="nrow"><em>Now</em><div><b>' + esc(cur.ttl) + '</b><small>' + S.hm(cur.at, cur.tzz) + ' – ' + S.hm(cur.end, cur.tzz) + '</small><progress max="100" value="' + Math.min(100, Math.round((now - cur.at) / Math.max(1, cur.end - cur.at) * 100)) + '"></progress></div></div>';
    if (next) h += '<div class="nrow"><em class="nx">Next</em><div><b>' + esc(next.ttl) + '</b><small>' + S.hm(next.at, next.tzz) + ' · in ' + S.span(next.at - now) + '</small></div></div>';
    return h + '</section>';
  }
  function leaveBy(d, now) {
    const it = d.items.find(i => !i.o && i.leaveAt && i.at > now && now >= i.leaveAt - 3 * 3600e3);
    if (!it) return '';
    const late = now >= it.leaveAt;
    return '<section class="leave' + (late ? ' late' : '') + '">' + ic('clock') + '<div><b>' + (late ? 'Time to go' : 'Leave by ' + S.hm(it.leaveAt, it.tzz)) + '</b><small>' + (late ? '' : 'in ' + S.span(it.leaveAt - now) + ' · ') + esc(it.ttl) + ' at ' + S.hm(it.at, it.tzz) + '</small></div></section>';
  }
  function notices(m, now) {
    return (m.P.notices || []).filter(n => now >= S.at(n.from) && now < S.at(n.to)).map(n => '<section class="card"><div class="ch static">' + ic('shop') + '<div><b>' + esc(n.t) + '</b><small>' + esc(n.s) + '</small></div></div></section>').join('');
  }
  function stayCard(d) {
    const st = stay(d.sleep);
    if (!st) return '';
    if (!st.addr && !st.sub) return '';
    const tappable = !!(st.addr || st.tel);
    return '<section class="card"><' + (tappable ? 'button data-a="stay" data-k="' + esc(d.sleep) + '"' : 'div') + ' class="ch' + (tappable ? '' : ' static') + '">' + ic('stay') + '<div><b>Tonight: ' + esc(st.name) + '</b><small>' + esc(st.addr || st.sub || '') + '</small></div>' + (tappable ? ic('chev', 'sm') : '') + '</' + (tappable ? 'button' : 'div') + '></section>';
  }
  function vDay(d, now, live) {
    const m = S.trip();
    let h = hero(d, m, live);
    if (live) h += leaveBy(d, now) + nowNext(d, now) + notices(m, now);
    if (d.warn) h += '<section class="warn">' + ic('alert') + '<p>' + esc(d.warn) + '</p></section>';
    h += '<ol class="tl">' + d.items.map(it => item(it, d, now, live)).join('') + '</ol>';
    if (d.transit) h += fold('tr:' + d.id, 'dir', d.transit.title, d.transit.meta, '<ol class="steps">' + (d.transit.steps || []).map(s => '<li>' + esc(s) + '</li>').join('') + '</ol>');
    h += stayCard(d);
    if (d.nightKit || d.regroup) {
      const k = d.nightKit || {}, g = d.regroup;
      h += '<section class="card"><div class="ch static">' + ic('night') + '<div><b>Getting back</b><small>' +
        [k.last ? 'Last trains ' + k.last : '', k.taxi || '', k.first || '', g ? 'If you get split up: ' + g.n + (g.note ? '. ' + g.note : '') : ''].filter(Boolean).map(esc).join('<br>') + '</small></div></div></section>';
    }
    if (d.tips && d.tips.length) h += fold('tp:' + d.id, 'help', 'Good to know', d.tips.length + ' tips', '<ul class="tips">' + d.tips.map(t => '<li><b>' + esc(t.ttl) + '</b>' + esc(t.txt) + '</li>').join('') + '</ul>');
    if (d.go && d.go.length) h += fold('go:' + d.id, 'pin', 'Places', d.go.length + ' on the map', '<ul class="places">' + d.go.map(g => '<li><div><b>' + esc(g.n) + '</b>' + (g.jp ? '<i class="jp">' + esc(g.jp) + '</i>' : '') + '<small>' + esc(g.why || '') + '</small></div>' + ext(mapUrl(g.q), 'Map', 'pin') + '</li>').join('') + '</ul>');
    return h;
  }

  /* ---------- Today ---------- */
  const todoDone = id => { const r = S.rec('todo', id); return !!(r && r.d.done); };
  function todoRow(p, today) {
    const done = todoDone(p.id), late = !done && p.due < today;
    return '<li class="' + (done ? 'done' : '') + '"><button data-a="todo" data-id="' + esc(p.id) + '" aria-pressed="' + done + '"><span class="cb">' + ic('check') + '</span><span class="tk">' + esc(p.t) +
      '<small class="' + (late ? 'late' : '') + '">' + (p.who || []).map(i => who(i, 1)).join('') + (late ? 'Overdue · ' : 'Due ') + esc(S.dateLbl(p.due)) + '</small></span></button></li>';
  }
  const isoToday = now => { const x = new Date(now); return x.getFullYear() + '-' + S.pad(x.getMonth() + 1) + '-' + S.pad(x.getDate()); };
  function balanceLine() {
    const M = S.money(), v = M.bal[S.me] || 0;
    return Math.abs(v) < 0.5 ? 'You\'re all square' : v > 0 ? 'You\'re owed ' + cad(v) : 'You owe ' + cad(v);
  }
  function vToday(now) {
    const ph = S.phase(now), m = S.trip(), P = m.P;
    if (ph.kind === 'day') return vDay(ph.day, now, true);
    if (ph.kind === 'post') {
      return '<section class="hero r-home"><div class="kick">Trip complete</div><h1>' + esc((P.post && P.post.title) || 'Welcome home.') + '</h1><p class="sub">' + esc((P.post && P.post.sub) || '') + '</p></section>' +
        '<section class="card"><button class="ch" data-a="tab" data-t="money">' + ic('money') + '<div><b>' + esc(balanceLine()) + '</b><small>Settle up in Money</small></div>' + ic('chev', 'sm') + '</button></section>';
    }
    const today = isoToday(now), mine = (P.todos || []).filter(p => !todoDone(p.id) && (p.who || []).includes(S.me)).sort((a, b) => (a.due < b.due ? -1 : 1));
    const first = m.days[0];
    let h = '<section class="hero r-pre"><div class="kick">' + (ph.days === 1 ? 'Tomorrow' : ph.days + ' days to go') + '</div><h1>' + esc((P.pre && P.pre.title) || P.title) + '</h1><p class="sub">' + esc((P.pre && P.pre.sub) || '') + '</p></section>';
    h += '<h3 class="sec">Your next to-dos</h3>';
    h += mine.length ? '<section class="card"><ul class="checks">' + mine.slice(0, 4).map(p => todoRow(p, today)).join('') + '</ul>' + (mine.length > 4 ? '<button class="lnk" data-a="more" data-s="todo">All ' + mine.length + ' of yours</button>' : '') + '</section>'
      : '<p class="empty">Nothing waiting on you.</p>';
    if (first) h += '<h3 class="sec">It starts with</h3><section class="card"><button class="ch" data-a="day" data-id="' + esc(first.id) + '">' + ic('trip') + '<div><b>' + esc(first.title) + '</b><small>' + esc(S.dateLbl(first.date)) + ' · ' + esc(first.sub || '') + '</small></div>' + ic('chev', 'sm') + '</button></section>';
    return h;
  }

  /* ---------- Trip ---------- */
  function vTrip(now) {
    const m = S.trip(), ph = S.phase(now);
    if (R.day) {
      const d = m.days.find(x => x.id === R.day);
      if (d) return '<div class="pgh"><button class="ib" data-a="close" aria-label="Back">' + ic('back') + '</button><h2>' + esc(S.dateLbl(d.date)) + '</h2></div>' + vDay(d, now, ph.kind === 'day' && ph.day.id === d.id);
    }
    return '<div class="ph"><h2>The trip</h2><p>' + esc(m.P.route || '') + '</p></div><ol class="route">' + m.days.map(d => {
      const st = stay(d.sleep), on = ph.kind === 'day' && ph.day.id === d.id, past = now >= d.end;
      return '<li class="rt r-' + esc(d.region || 'air') + (on ? ' on' : '') + (past ? ' past' : '') + '"><button data-a="day" data-id="' + esc(d.id) + '"><small>' + esc(S.dateLbl(d.date)) + (d.n > 0 ? ' · Day ' + d.n : '') + (on ? ' · Today' : '') + '</small><b>' + esc(d.title) + '</b><span>' + esc(d.sub || '') + '</span>' +
        (st ? '<em>' + ic('stay', 'xs') + esc(st.short || st.name) + '</em>' : '') + '</button></li>';
    }).join('') + '</ol>' + (m.P.synced ? '<p class="fine">' + esc(m.P.synced) + '</p>' : '');
  }

  /* ---------- Money ---------- */
  const dayKey = ms => { const x = new Date(ms); return x.getFullYear() + '-' + S.pad(x.getMonth() + 1) + '-' + S.pad(x.getDate()); };
  function splitLabel(d) {
    const n = S.names.length;
    if (d.s.length === n) return 'split ' + (n === 2 ? 'both ways' : n + ' ways');
    if (d.s.length === 1) return d.s[0] === d.p ? 'just ' + S.names[d.p] : 'for ' + S.names[d.s[0]];
    return 'for ' + d.s.map(i => S.names[i]).join(' & ');
  }
  function expRow(e) {
    const d = e.d, me = S.me;
    if (d.t === 'x') {
      return '<li><button data-a="payment" data-id="' + esc(e.id) + '"><span class="ei pay">' + ic('swap') + '</span><span class="et"><b>' + esc(S.names[d.p]) + ' paid ' + esc(S.names[d.to]) + '</b><small>Settling up</small></span><span class="ea"><b>' + money(d.a, d.cur) + '</b></span></button></li>';
    }
    const each = d.a / d.s.length, lent = d.p === me ? d.a - (d.s.includes(me) ? each : 0) : 0, owe = d.p !== me && d.s.includes(me) ? each : 0;
    return '<li><button data-a="editExp" data-id="' + esc(e.id) + '"><span class="ei">' + ic((CAT[d.cat] || CAT.other)[1]) + '</span>' +
      '<span class="et"><b>' + esc(d.n || (CAT[d.cat] || CAT.other)[0]) + '</b><small>' + esc(S.names[d.p]) + ' paid · ' + esc(splitLabel(d)) + '</small></span>' +
      '<span class="ea"><b>' + money(d.a, d.cur) + '</b>' + (lent > 0.004 ? '<small class="pos">you lent ' + money(lent, d.cur) + '</small>' : owe ? '<small class="neg">your share ' + money(owe, d.cur) + '</small>' : '<small>not you</small>') + '</span></button></li>';
  }
  function vMoney(now) {
    const M = S.money(), me = S.me, names = S.names, v = M.bal[me] || 0, list = S.expenses(), f = S.fx();
    const cls = Math.abs(v) < 0.5 ? 'zero' : v > 0 ? 'pos' : 'neg';
    let h = '<section class="bal ' + cls + '"><small>' + (cls === 'zero' ? 'You\'re' : v > 0 ? 'You\'re owed' : 'You owe') + '</small><b>' + (cls === 'zero' ? 'All square' : cad(v)) + '</b>' +
      (cls === 'zero' ? '' : '<i>about ' + money(S.fromCad(Math.abs(v), 'JPY'), 'JPY') + '</i>') + '<ul>' +
      names.map((n, i) => i === me ? '' : '<li>' + who(i, 1) + '<span>' + esc(n) + '</span><em>' + (Math.abs(M.bal[i]) < 0.5 ? 'square' : (M.bal[i] > 0 ? 'is owed ' : 'owes ') + cad(M.bal[i])) + '</em></li>').join('') + '</ul></section>';
    h += '<button class="btn wide" data-a="addExp">' + ic('plus') + 'Add an expense</button>';
    if (M.pay.length) {
      h += '<h3 class="sec">Settle up</h3><section class="card"><ul class="pays">' + M.pay.map(p => '<li>' + who(p.from) + '<span><b>' + esc(names[p.from]) + '</b> pays <b>' + esc(names[p.to]) + '</b><small>' + cad(p.cad) + '</small></span><button class="pill" data-a="paid" data-f="' + p.from + '" data-to="' + p.to + '" data-v="' + p.cad.toFixed(2) + '">' + ic('check') + 'Paid</button></li>').join('') + '</ul></section>';
    }
    if (!list.length) return h + '<p class="empty">No expenses yet. Tap + whenever one of you pays for something shared: type the amount and save. It keeps the running tally of who owes whom.</p>';
    h += '<p class="tot">Group total <b>' + cad(M.total) + '</b> · your share <b>' + cad(M.share[me] || 0) + '</b> · you paid <b>' + cad(M.paid[me] || 0) + '</b></p>';
    const today = dayKey(now), yest = dayKey(now - 864e5);
    let last = '';
    list.forEach(e => {
      const k = dayKey(e.d.w);
      if (k !== last) { h += (last ? '</ul></section>' : '') + '<h3 class="sec">' + (k === today ? 'Today' : k === yest ? 'Yesterday' : esc(S.dateLbl(k))) + '</h3><section class="card"><ul class="exps">'; last = k; }
      h += expRow(e);
    });
    h += '</ul></section>';
    return h + '<button class="lnk" data-a="fx">' + money(f.jpy, 'JPY') + ' = C$1 · US$1 = ' + money(f.usd, 'CAD') + ' · Change rates</button>';
  }

  /* ---------- More ---------- */
  function sec(id, icon, title, sub, body) {
    const open = R.sec === id;
    return '<section class="card acc' + (open ? ' open' : '') + '"><button class="ch" data-a="sec" data-s="' + id + '" aria-expanded="' + open + '">' + ic(icon) + '<div><b>' + title + '</b><small>' + esc(sub) + '</small></div>' + ic(open ? 'down' : 'chev', 'sm') + '</button>' + (open ? body() : '') + '</section>';
  }
  function vMore(now) {
    const P = S.trip().P, today = isoToday(now), todos = P.todos || [], open = todos.filter(p => !todoDone(p.id)).sort((a, b) => (a.due < b.due ? -1 : 1)), done = todos.filter(p => todoDone(p.id));
    const stays = Object.keys(P.stays || {}).filter(k => P.stays[k].addr || P.stays[k].inT), mine = open.filter(p => (p.who || []).includes(S.me)).length;
    let h = '<div class="ph"><h2>More</h2></div>';
    h += sec('todo', 'list', 'To-do', open.length + ' open' + (mine ? ' · ' + mine + ' yours' : '') + ' · shared', () =>
      (open.length ? '<ul class="checks">' + open.map(p => todoRow(p, today)).join('') + '</ul>' : '<p class="empty">All done.</p>') +
      (done.length ? '<button class="lnk" data-a="done">' + (R.done ? 'Hide' : 'Show') + ' ' + done.length + ' done</button>' + (R.done ? '<ul class="checks">' + done.map(p => todoRow(p, today)).join('') + '</ul>' : '') : ''));
    h += sec('stays', 'stay', 'Where you sleep', stays.length + ' stays · address cards for taxis', () => '<ul class="rows">' + stays.map(k => { const s = P.stays[k]; return '<li><button data-a="stay" data-k="' + esc(k) + '"><span><b>' + esc(s.name) + '</b><small>' + esc(s.short || '') + (s.inT ? ' · check-in ' + esc(s.inT) : '') + '</small></span>' + ic('chev', 'sm') + '</button></li>'; }).join('') + '</ul>');
    h += sec('book', 'tickets', 'Bookings', 'Codes and notes · shared', () => '<ul class="rows">' + (P.bookings || []).map(b => { const c = bookCode(b.k); return '<li><button data-a="book" data-k="' + esc(b.k) + '"><span><b>' + esc(b.n) + '</b><small class="' + (c ? 'mono' : '') + '">' + esc(c || 'Tap to add a code or note') + '</small></span>' + ic('chev', 'sm') + '</button></li>'; }).join('') + '</ul>');
    h += sec('phr', 'say', 'Phrases', 'Tap one to show it big', () => {
      const groups = P.phrases || [], g = groups[R.phr] || groups[0];
      return '<div class="segs">' + groups.map((x, i) => '<button class="' + (i === R.phr ? 'on' : '') + '" data-a="phr" data-i="' + i + '">' + esc(x.c) + '</button>').join('') + '</div>' +
        (g ? '<ul class="rows phr">' + g.items.map((p, i) => '<li><button data-a="say" data-i="' + i + '"><span><small>' + esc(p[0]) + '</small><b class="jp">' + esc(p[1]) + '</b><i>' + esc(p[2]) + '</i></span>' + ic('big', 'sm') + '</button></li>').join('') + '</ul>' : '');
    });
    h += sec('help', 'help', 'Emergency and etiquette', 'Numbers to call · onsen rules', () =>
      '<ul class="rows">' + (P.emergency || []).map(e => '<li><a href="tel:' + esc(String(e.tel).replace(/[^0-9+]/g, '')) + '"><span><b>' + esc(e.n) + '</b><small class="mono">' + esc(e.tel) + '</small></span>' + ic('phone', 'sm') + '</a></li>').join('') + '</ul>' +
      ((P.onsenRules || []).length ? '<h4>Onsen</h4><ul class="tips plain">' + P.onsenRules.map(r => '<li>' + esc(r) + '</li>').join('') + '</ul>' : ''));
    const n = netLabel();
    h += sec('phone', 'lock', 'This phone', 'Signed in as ' + (S.names[S.me] || '') + ' · ' + n[1], () =>
      '<p class="fine pad">Private trip. Shared with ' + esc(S.names.filter((_, i) => i !== S.me).join(' and ')) + '. ' + (S.last ? 'Last synced ' + esc(S.hm(S.last, 'JST')) + ' ' + esc(zone('JST')) + ' time.' : '') + (S.waiting ? ' ' + S.waiting + ' change' + (S.waiting === 1 ? '' : 's') + ' waiting to send.' : '') + '</p>' +
      '<div class="acts pad"><button class="pill" data-a="sync">' + ic('swap') + 'Sync now</button><button class="pill" data-a="invite">' + ic('lock') + 'Use a new invite</button><button class="pill danger" data-a="leaveAsk">' + ic('trash') + 'Remove from this phone</button></div>');
    return h;
  }

  /* ---------- join ---------- */
  function vJoin(msg) {
    return '<div class="join"><div class="brand big"><i class="sun"></i>JAPAN \'26</div><h1>Private trip</h1><p>This app opens with a personal invite link.</p>' +
      '<label for="inv">Invite link</label><textarea id="inv" rows="3" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Paste your invite link here"></textarea>' +
      '<button class="btn wide" data-a="join">' + ic('lock') + 'Open the trip</button><p id="joinMsg" role="status">' + esc(msg || '') + '</p>' +
      '<p class="fine">On an iPhone, add this page to your Home Screen first, open it from there, then paste your link. Each link is personal: don\'t forward yours.</p></div>';
  }
  async function doJoin(text, el) {
    const msg = el || $('#joinMsg');
    if (msg) msg.textContent = 'Opening…';
    document.body.classList.add('wait');
    const err = await S.join(text);
    document.body.classList.remove('wait');
    if (err) { if (msg) msg.textContent = err; return false; }
    if (sheetOpen) back();
    R.tab = 'today'; R.day = null; render();
    toast('You\'re in, ' + (S.names[S.me] || '') + '.');
    return true;
  }

  /* ---------- expense sheet ---------- */
  let X = null;
  const fmtTyped = (s, cur) => { if (!s) return '0'; const [i, f] = s.split('.'); return Number(i).toLocaleString('en-US') + (s.includes('.') && cur !== 'JPY' ? '.' + (f || '') : ''); };
  function openExp(pre) {
    const now = Date.now(), ph = S.phase(now), n = S.names.length, all = Array.from({ length: n }, (_, i) => i);
    let cat = 'food';
    if (ph.kind === 'day') { let cur = null; ph.day.items.forEach(i => { if (!i.o && i.at <= now) cur = i; }); if (cur && FAB_CAT[cur.k]) cat = FAB_CAT[cur.k]; }
    X = Object.assign({ id: null, amt: '', cur: ph.kind === 'day' && ph.day.tz === 'JST' ? 'JPY' : 'CAD', cat, n: '', p: S.me, s: all, w: now }, pre || {});
    const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'alt', '0', 'del'];
    sheet(head(X.id ? 'Edit expense' : 'New expense', X.id ? '<button class="ib danger" data-a="xDel" aria-label="Delete">' + ic('trash') + '</button>' : '') +
      '<div class="amt"><div class="segs cur">' + CURS.map(c => '<button data-a="xCur" data-v="' + c + '">' + SYM[c] + '</button>').join('') + '</div><output id="xAmt" aria-live="polite">0</output><small id="xEach"></small></div>' +
      '<div class="cats">' + S.CATS.map(c => '<button data-a="xCat" data-v="' + c + '">' + ic(CAT[c][1]) + '<span>' + CAT[c][0] + '</span></button>').join('') + '</div>' +
      '<input id="xNote" type="text" maxlength="80" enterkeyhint="done" autocomplete="off" placeholder="Note (optional)" value="' + esc(X.n) + '">' +
      '<div class="pp"><span>Paid by</span><div>' + all.map(i => '<button data-a="xPay" data-v="' + i + '">' + who(i, 1) + esc(S.names[i]) + '</button>').join('') + '</div></div>' +
      '<div class="pp"><span>Split</span><div>' + all.map(i => '<button data-a="xSplit" data-v="' + i + '">' + who(i, 1) + esc(S.names[i]) + '</button>').join('') + '</div></div>' +
      '<div class="keys">' + keys.map(k => '<button data-key="' + k + '"' + (k === 'del' ? ' aria-label="Delete digit"' : '') + '>' + (k === 'del' ? ic('del') : k === 'alt' ? '' : k) + '</button>').join('') + '</div>' +
      '<button class="btn wide save" data-a="xSave">' + ic('check') + 'Save</button>', 'exp');
    paintExp();
  }
  function paintExp() {
    if (!X) return;
    const p = $('#sheet .panel'); if (!p) return;
    const on = (sel, f) => p.querySelectorAll(sel).forEach(b => b.classList.toggle('on', f(b.dataset.v)));
    on('[data-a=xCur]', v => v === X.cur); on('[data-a=xCat]', v => v === X.cat); on('[data-a=xPay]', v => +v === X.p); on('[data-a=xSplit]', v => X.s.includes(+v));
    const a = parseFloat(X.amt) || 0;
    p.querySelector('#xAmt').textContent = SYM[X.cur] + fmtTyped(X.amt, X.cur);
    p.querySelector('#xAmt').classList.toggle('zero', !a);
    p.querySelector('#xEach').textContent = !a ? 'Type the amount' : (X.s.length > 1 ? money(a / X.s.length, X.cur) + ' each' : 'All on ' + S.names[X.s[0]]) + (X.cur !== 'CAD' ? ' · about ' + cad(S.toCad(a, X.cur)) + ' total' : '');
    p.querySelector('[data-key=alt]').textContent = X.cur === 'JPY' ? '00' : '.';
    p.querySelector('.save').disabled = !a;
  }
  function expKey(k) {
    if (!X) return;
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
    X.amt = a; buzz(); paintExp();
  }
  function saveExp() {
    const a = parseFloat(X.amt);
    if (!(a > 0) || !X.s.length) return;
    const note = $('#xNote'), id = X.id || S.newId(), prev = S.rec('exp', id);
    const d = { t: 'e', a: X.cur === 'JPY' ? Math.round(a) : Math.round(a * 100) / 100, cur: X.cur, p: X.p, w: X.w, n: (note ? note.value : X.n).trim().slice(0, 80), cat: X.cat, s: X.s.slice().sort() };
    S.put('exp', id, d);
    back();
    toast((prev ? 'Updated ' : 'Added ') + money(d.a, d.cur) + ' · ' + (d.n || CAT[d.cat][0]), () => S.put('exp', id, prev ? prev.d : null));
  }

  /* ---------- other sheets ---------- */
  function staySheet(k) {
    const s = stay(k); if (!s) return;
    const q = s.name + (s.addr ? ', ' + s.addr : '');
    sheet(head(s.name) + (s.jp ? '<p class="jp big">' + esc(s.jp) + '</p>' : '') + (s.sub ? '<p>' + esc(s.sub) + '</p>' : '') +
      '<dl>' + (s.addr ? '<dt>Address</dt><dd>' + esc(s.addr) + (s.addrJp ? '<br><span class="jp">' + esc(s.addrJp) + '</span>' : '') + '</dd>' : '') +
      (s.inT ? '<dt>Check-in / out</dt><dd>from ' + esc(s.inT) + ' · out by ' + esc(s.outT || '') + '</dd>' : '') + (s.tel ? '<dt>Phone</dt><dd class="mono">' + esc(s.tel) + '</dd>' : '') + '</dl><div class="acts">' +
      (s.addr ? '<button class="pill on" data-a="taxi" data-k="' + esc(k) + '">' + ic('taxi') + 'Taxi card</button>' + ext(mapUrl(q), 'Map', 'pin') + ext(dirUrl(q), 'Route', 'dir') : '') +
      (s.addr ? '<button class="pill" data-a="copy" data-v="' + esc(s.addrJp || s.addr) + '">' + ic('copy') + 'Copy address</button>' : '') +
      (s.tel ? '<a class="pill" href="tel:' + esc(s.tel.replace(/[^0-9+]/g, '')) + '">' + ic('phone') + 'Call</a>' : '') + '</div>');
  }
  function taxiSheet(k) {
    const s = stay(k); if (!s) return;
    sheet(head('Show this to the driver') + '<div class="card-jp">' + (s.addrJp ? '<small class="jp">ここまでお願いします</small>' : '<small>Please take us here</small>') +
      '<b class="jp">' + esc(s.jp || s.name) + '</b><p class="jp">' + esc(s.addrJp || s.addr) + '</p>' + (s.tel ? '<p class="mono">' + esc(s.tel) + '</p>' : '') + '</div><p class="fine">' + esc(s.name) + ' · ' + esc(s.addr) + '</p>', 'tall');
  }
  function bookSheet(k) {
    const b = (S.trip().P.bookings || []).find(x => x.k === k); if (!b) return;
    const c = bookCode(k);
    sheet(head(b.n) + '<label for="bkIn">Code or note. Everyone on the trip sees it.</label><input id="bkIn" type="text" maxlength="160" autocomplete="off" autocapitalize="characters" spellcheck="false" value="' + esc(c) + '">' +
      '<div class="acts">' + (c ? '<button class="pill" data-a="copy" data-v="' + esc(c) + '">' + ic('copy') + 'Copy</button>' : '') + '</div><button class="btn wide" data-a="bookSave" data-k="' + esc(k) + '">' + ic('check') + 'Save</button>');
  }
  function fxSheet() {
    const f = S.fx();
    sheet(head('Exchange rates') + '<p>Used to add everything up in Canadian dollars. Shared by all three phones.</p>' +
      '<label for="fxJ">Yen for C$1</label><input id="fxJ" type="text" inputmode="decimal" value="' + f.jpy + '"><label for="fxU">C$ for US$1</label><input id="fxU" type="text" inputmode="decimal" value="' + f.usd + '">' +
      '<button class="btn wide" data-a="fxSave">' + ic('check') + 'Save</button>');
  }

  /* ---------- drawing ---------- */
  let raf = 0;
  function render() { cancelAnimationFrame(raf); raf = requestAnimationFrame(draw); }
  function draw() {
    const view = $('#view'), now = Date.now();
    const screen = !S.joined ? 'join' : !S.hasPlan ? 'load' : 'main';
    document.body.dataset.screen = screen;
    if (screen === 'join') { if (R.screen !== 'join') { $('#top').innerHTML = ''; $('#tabs').innerHTML = ''; view.innerHTML = vJoin(); } R.screen = screen; return; }
    if (screen === 'load') { view.innerHTML = '<div class="join"><div class="brand big"><i class="sun"></i>JAPAN \'26</div><p>' + (S.state === 'syncing' ? 'Getting the trip…' : 'Couldn\'t load the trip. Check your connection.') + '</p><button class="btn wide" data-a="sync">Try again</button></div>'; R.screen = screen; return; }
    const key = R.tab + (R.day || ''), same = view.dataset.key === key;
    if (!same) R.scroll[view.dataset.key] = view.scrollTop;
    $('#top').innerHTML = vTop(now);
    const top = view.scrollTop;
    view.innerHTML = '<div class="pad' + (same ? '' : ' in') + '">' +
      (S.state === 'locked' ? '<section class="warn">' + ic('lock') + '<p>This phone\'s invite was turned off, so it has stopped syncing. Ask for a new link, then use More, This phone, Use a new invite.</p></section>' : '') +
      (R.tab === 'today' ? vToday(now) : R.tab === 'trip' ? vTrip(now) : R.tab === 'money' ? vMoney(now) : vMore(now)) + '</div>';
    view.dataset.key = key;
    view.scrollTop = same ? top : (R.scroll[key] || 0);
    $('#tabs').innerHTML = vTabs();
    R.screen = screen;
  }

  /* ---------- actions ---------- */
  const A = {
    tab(el) {
      const t = el.dataset.t;
      if (R.day) { R.day = null; layers.pop(); history.back(); } // leave the day page and use up its back-button step
      if (R.tab === t) { R.scroll[t] = 0; $('#view').scrollTop = 0; } // tapping the current tab scrolls to the top
      R.tab = t; render();
    },
    sync() { S.sync(); },
    close() { back(); },
    undo() { const f = undoFn; undoFn = null; $('#toast').classList.remove('on'); if (f) f(); },
    fold(el) { const k = el.dataset.k; if (R.open.has(k)) R.open.delete(k); else R.open.add(k); render(); },
    day(el) { R.tab = 'trip'; R.day = el.dataset.id; pushLayer(() => { R.day = null; render(); }); render(); },
    more(el) { R.tab = 'more'; R.sec = el.dataset.s; render(); },
    sec(el) { R.sec = R.sec === el.dataset.s ? '' : el.dataset.s; render(); },
    done() { R.done = !R.done; render(); },
    phr(el) { R.phr = +el.dataset.i; render(); },
    todo(el) {
      const id = el.dataset.id, p = (S.trip().P.todos || []).find(x => x.id === id); if (!p) return;
      const was = todoDone(id);
      S.put('todo', id, { done: !was, n: p.t.slice(0, 140) }); buzz();
      if (!was) toast('Done. Everyone sees it ticked.', () => S.put('todo', id, { done: false, n: p.t.slice(0, 140) }));
    },
    stay(el) { staySheet(el.dataset.k); },
    taxi(el) { taxiSheet(el.dataset.k); },
    book(el) { bookSheet(el.dataset.k); },
    bookSave(el) {
      const k = el.dataset.k, b = (S.trip().P.bookings || []).find(x => x.k === k), v = ($('#bkIn').value || '').trim();
      S.put('book', k, { v: v.slice(0, 160), n: b ? b.n.slice(0, 140) : '' }); back(); toast('Saved for everyone.');
    },
    say(el) {
      const g = (S.trip().P.phrases || [])[R.phr], p = g && g.items[+el.dataset.i]; if (!p) return;
      sheet(head(p[0]) + '<div class="card-jp"><b class="jp">' + esc(p[1]) + '</b><p>' + esc(p[2]) + '</p></div>', 'tall');
    },
    copy(el) {
      const v = el.dataset.v || '';
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(v).then(() => toast('Copied.'), () => toast('Couldn\'t copy.'));
      else toast('Copy isn\'t available here.');
    },
    addExp(el) { openExp(el.dataset.n ? { n: el.dataset.n.slice(0, 80), cat: el.dataset.cat || 'other' } : null); },
    editExp(el) {
      const r = S.rec('exp', el.dataset.id); if (!r) return;
      const d = r.d;
      openExp({ id: el.dataset.id, amt: String(d.a), cur: d.cur, cat: d.cat, n: d.n || '', p: d.p, s: d.s.slice(), w: d.w });
    },
    xCur(el) { X.cur = el.dataset.v; if (X.cur === 'JPY' && X.amt.includes('.')) X.amt = String(Math.round(parseFloat(X.amt) || 0) || ''); paintExp(); },
    xCat(el) { X.cat = el.dataset.v; paintExp(); },
    xPay(el) { X.p = +el.dataset.v; paintExp(); },
    xSplit(el) { const i = +el.dataset.v; if (X.s.includes(i)) { if (X.s.length > 1) X.s = X.s.filter(x => x !== i); } else X.s.push(i); paintExp(); },
    xSave() { saveExp(); },
    xDel() { const id = X.id, prev = S.rec('exp', id); S.put('exp', id, null); back(); toast('Deleted.', prev ? () => S.put('exp', id, prev.d) : null); },
    payment(el) {
      const id = el.dataset.id, r = S.rec('exp', id); if (!r) return;
      sheet(head('Payment') + '<p><b>' + esc(S.names[r.d.p]) + '</b> paid <b>' + esc(S.names[r.d.to]) + '</b> ' + money(r.d.a, r.d.cur) + ' to settle up.</p><button class="btn wide danger" data-a="payDel" data-id="' + esc(id) + '">' + ic('trash') + 'Delete this payment</button>');
    },
    payDel(el) { const id = el.dataset.id, prev = S.rec('exp', id); S.put('exp', id, null); back(); toast('Payment deleted.', prev ? () => S.put('exp', id, prev.d) : null); },
    paid(el) {
      const id = S.newId(), f = +el.dataset.f, to = +el.dataset.to, v = +el.dataset.v;
      S.put('exp', id, { t: 'x', a: v, cur: 'CAD', p: f, to, w: Date.now(), n: '' }); buzz();
      toast(S.names[f] + ' paid ' + S.names[to] + ' ' + cad(v) + '.', () => S.put('exp', id, null));
    },
    fx() { fxSheet(); },
    fxSave() {
      const j = parseFloat($('#fxJ').value), u = parseFloat($('#fxU').value);
      if (!(j >= 50 && j <= 400) || !(u >= 0.5 && u <= 3)) { toast('Those rates don\'t look right.'); return; }
      S.put('set', 'fx', { jpy: j, usd: u }); back(); toast('Rates updated for everyone.');
    },
    join() { doJoin($('#inv').value); },
    invite() {
      sheet(head('Use a new invite') + '<label for="inv2">Paste the new invite link</label><textarea id="inv2" rows="3" autocomplete="off" autocapitalize="off" spellcheck="false"></textarea><p id="inv2Msg" role="status"></p><button class="btn wide" data-a="invite2">' + ic('lock') + 'Switch</button>');
    },
    invite2() { doJoin($('#inv2').value, $('#inv2Msg')); },
    leaveAsk() {
      sheet(head('Remove from this phone?') + '<p>The trip and your sign-in are wiped from this phone. You\'ll need your invite link to get back in.' + (S.waiting ? ' <b>' + S.waiting + ' change' + (S.waiting === 1 ? ' hasn\'t' : 's haven\'t') + ' been sent yet and would be lost.</b>' : '') + '</p><button class="btn wide danger" data-a="leave">' + ic('trash') + 'Remove</button>');
    },
    leave() { back(); S.leave(); R.screen = ''; render(); }
  };

  document.addEventListener('click', ev => {
    const el = ev.target.closest('[data-a]');
    if (!el || el.disabled) return;
    const f = A[el.dataset.a];
    if (f) f(el, ev);
  });
  document.addEventListener('pointerdown', ev => {
    const el = ev.target.closest('[data-key]');
    if (el) { ev.preventDefault(); expKey(el.dataset.key); }
  });
  document.addEventListener('keydown', ev => {
    if (ev.key === 'Escape' && layers.length) { back(); return; }
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
    render();
    const inv = raw ? S.parseInvite(raw) : null, cur = S.invite;
    if (inv && !cur) requestAnimationFrame(() => { const t = $('#inv'); if (t) t.value = 'Invite link received'; doJoin(raw); });
    else if (inv && cur && inv.key !== cur.key) {
      requestAnimationFrame(() => sheet(head('Switch to this invite?') + '<p>This phone is already signed in to a trip. Opening the new invite replaces it.</p><textarea id="inv2" rows="2" readonly>' + esc(raw) + '</textarea><p id="inv2Msg" role="status"></p><button class="btn wide" data-a="invite2">' + ic('lock') + 'Switch</button>'));
    }
    if (S.joined) S.sync();
    let lastMin = -1;
    setInterval(() => { const m = Math.floor(Date.now() / 60000); if (m !== lastMin) { lastMin = m; if (S.joined && S.hasPlan && !document.hidden) render(); } }, 15000);
    setInterval(() => { if (S.joined && !document.hidden) S.sync(); }, 60000);
    document.addEventListener('visibilitychange', () => { if (!document.hidden && S.joined) { S.sync(); render(); } });
    window.addEventListener('online', () => { if (S.joined) S.sync(); });
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => { /* offline shell is optional */ });
  }
  boot();
})();
