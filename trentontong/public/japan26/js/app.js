/* Japan '26 — UI */
(function () {
  'use strict';
  const C = window.Core, T = C.T, DAYS = C.DAYS;
  const S = () => C.S;
  const hm = C.hm, M = C.M, H = C.H;
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const P = T.people;
  const PC = ['#e5383b', '#2f8f6b', '#3a7bd5'];

  /* ---------- icons ---------- */
  const I = {
    today: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    trip: '<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h8a3 3 0 0 0 0-6H8a3 3 0 0 1 0-6h8"/>',
    wallet: '<circle cx="12" cy="12" r="9"/><path d="M8.5 7 12 11.5 15.5 7M12 11.5V17M9 12h6M9 14.5h6"/>',
    kit: '<path d="M6 9a6 6 0 0 1 12 0v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z"/><path d="M9.5 5.5V4a2.5 2.5 0 0 1 5 0v1.5M6 13h12M10 13v3h4v-3"/>',
    demo: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/><path d="M3 4v4h4"/>',
    plane: '<path class="f" d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/>',
    train: '<rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 10.5h14M9 21l2-4M15 21l-2-4M9 14h.01M15 14h.01"/>',
    bus: '<rect x="4" y="3" width="16" height="15" rx="3"/><path d="M4 11h16M7 21v-3M17 21v-3M8 14.5h.01M16 14.5h.01"/>',
    move: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    food: '<path d="M3 12h18a9 9 0 0 1-18 0z"/><path d="M13 3l-2.5 7M19 4l-5.5 6"/>',
    see: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
    night: '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>',
    stay: '<path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5"/><circle cx="7" cy="11" r="2"/>',
    ski: '<path d="M2 20 9 8l4 6 3-4 6 10z"/><path d="M7.3 11 9 12.5l1.7-1.5"/>',
    onsen: '<path d="M4 15c0 3 3.6 5 8 5s8-2 8-5"/><path d="M8 13c-1-1.5 1-2.5 0-4s1-2.5 0-4M12 13c-1-1.5 1-2.5 0-4s1-2.5 0-4M16 13c-1-1.5 1-2.5 0-4s1-2.5 0-4"/>',
    shop: '<path d="M5 8h14l-1 13H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
    admin: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 12.5l2 2 4-4"/>',
    meet: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20a6 6 0 0 1 12 0M14.5 20a4.5 4.5 0 0 1 7-3.7"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    dir: '<path d="M12 2.5 2.5 12l9.5 9.5 9.5-9.5z"/><path d="M9 14.5V11h5.5M12.5 8.5 15 11l-2.5 2.5"/>',
    speak: '<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/>',
    share: '<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    check: '<path d="M5 12.5 10 17 19 7"/>',
    x: '<path d="M6 6l12 12M18 6 6 18"/>',
    back: '<path d="M15 5l-7 7 7 7"/>',
    chev: '<path d="M9 5l7 7-7 7"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    temp: '<path d="M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0z"/>',
    sunset: '<path d="M3 18h18M7 18a5 5 0 0 1 10 0M12 5v4M5.6 11 7 12.4M18.4 11 17 12.4M9.5 7 12 5l2.5 2"/>',
    snow: '<path d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7M9 4l3 2 3-2M9 20l3-2 3 2"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>',
    taxi: '<path d="M5 16v-5l2-5h10l2 5v5M3 16h18v3H3zM7 11h10M10 6V4h4v2"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    ticket: '<path d="M3 7h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4z"/><path d="M14 7v10" stroke-dasharray="2 2"/>',
    note: '<path d="M5 3h10l4 4v14H5z"/><path d="M15 3v4h4M8 12h8M8 16h6"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
    sos: '<path d="M12 3 2 20h20z"/><path d="M12 10v4M12 17h.01"/>',
    bag: '<rect x="5" y="7" width="14" height="13" rx="2"/><path d="M9 7V4h6v3M9 11v5M15 11v5"/>',
    stamp: '<circle cx="12" cy="12" r="8"/><path d="M12 7.5l1.3 2.8 3 .4-2.2 2.1.6 3-2.7-1.5-2.7 1.5.6-3-2.2-2.1 3-.4z"/>',
    pause: '<path d="M8 5v14M16 5v14"/>',
    play: '<path class="f" d="M7 4.5v15l12.5-7.5z"/>',
    swap: '<path d="M7 7h12l-3-3M17 17H5l3 3"/>',
    trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
    moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>',
    list: '<path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/>',
    warn: '<path d="M12 3 2 20h20z"/><path d="M12 10v4M12 17h.01"/>',
    bell: '<path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z"/><path d="M10 20a2 2 0 0 0 4 0"/>',
    expand: '<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
    dot: '<circle cx="12" cy="12" r="3"/>'
  };
  const ic = (k, c) => '<svg class="ic ' + (c || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (I[k] || I.dot) + '</svg>';
  const KIND = { flight: 'plane', train: 'train', bus: 'bus', move: 'move', food: 'food', see: 'see', night: 'night', stay: 'stay', ski: 'ski', onsen: 'onsen', shop: 'shop', admin: 'admin', sleep: 'night', meet: 'meet' };

  const REG = {
    home: { name: 'Home' }, air: { name: 'In transit' }, tokyo: { name: 'Tokyo' }, nagano: { name: 'Nagano' }, hokkaido: { name: 'Hokkaido' }, niseko: { name: 'Niseko' }
  };
  const ART = {
    tokyo: '<svg viewBox="0 0 200 90" preserveAspectRatio="xMaxYMax meet"><g fill="currentColor"><rect x="8" y="48" width="14" height="42"/><rect x="26" y="34" width="12" height="56"/><rect x="42" y="56" width="16" height="34"/><path d="M76 90 84 30h2l8 60z"/><rect x="83" y="14" width="4" height="18"/><rect x="100" y="40" width="18" height="50"/><rect x="122" y="26" width="10" height="64"/><rect x="136" y="52" width="20" height="38"/><rect x="160" y="36" width="12" height="54"/><rect x="176" y="58" width="18" height="32"/></g><circle cx="150" cy="18" r="10" class="sunc"/></svg>',
    nagano: '<svg viewBox="0 0 200 90" preserveAspectRatio="xMaxYMax meet"><path fill="currentColor" d="M0 90 40 44l22 22 36-46 40 46 18-18 44 42z"/><path fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" d="M150 30c-6-6 6-10 0-16M162 30c-6-6 6-10 0-16M174 30c-6-6 6-10 0-16"/></svg>',
    hokkaido: '<svg viewBox="0 0 200 90" preserveAspectRatio="xMaxYMax meet"><g fill="currentColor"><circle cx="20" cy="20" r="2.5"/><circle cx="60" cy="40" r="2"/><circle cx="100" cy="14" r="3"/><circle cx="140" cy="44" r="2"/><circle cx="178" cy="22" r="2.5"/><circle cx="160" cy="70" r="2"/><circle cx="118" cy="66" r="3"/><circle cx="80" cy="74" r="2"/><circle cx="38" cy="62" r="2.5"/></g><path fill="currentColor" d="M0 90h200V78c-30-8-60 6-100 0S30 70 0 80z"/></svg>',
    niseko: '<svg viewBox="0 0 200 90" preserveAspectRatio="xMaxYMax meet"><path fill="currentColor" d="M30 90 100 22l70 68z"/><path fill="#fff" opacity=".35" d="M100 22 82 40l8 4 10-8 10 8 8-4z"/><circle cx="168" cy="22" r="9" class="sunc"/></svg>',
    air: '<svg viewBox="0 0 200 90" preserveAspectRatio="xMaxYMax meet"><path fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4 6" d="M10 80C60 10 140 10 190 60"/><g transform="translate(150 22) rotate(30)"><path fill="currentColor" d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/></g></svg>',
    home: '<svg viewBox="0 0 200 90" preserveAspectRatio="xMaxYMax meet"><path fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4 6" d="M10 80C60 10 140 10 190 60"/><circle cx="168" cy="26" r="10" class="sunc"/></svg>'
  };

  /* ---------- state ---------- */
  const R = {
    tab: 'today', stack: [], sheet: null, exp: new Set(), loc: null, heading: null, sensors: false,
    lastMin: -1, lastRender: 0, wseg: 'split', demoDay: null, demoMs: null, scroll: {}, homeTarget: null, kitPerson: 0, phraseOpen: 'Basics', budgetP: 0
  };

  /* ---------- helpers ---------- */
  const mapUrl = q => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
  const dirUrl = (q, mode) => 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(q) + '&travelmode=' + (mode || 'transit');
  const dayLbl = d => C.dateLbl(C.abs(d.date, '12:00', d.tz), d.tz);
  const dayNum = d => d.n > 0 ? 'Day ' + d.n + ' of 11' : 'Travel day';
  const chipP = (i, sm) => '<span class="pp' + (sm ? ' sm' : '') + '" style="--pc:' + PC[i] + '">' + P[i][0] + '</span>';
  function curDayId(now) { const ph = C.phase(now); return ph.kind === 'day' ? ph.day.id : ph.kind; }
  function toast(msg) {
    let t = $('#toast'); t.textContent = msg; t.classList.add('on');
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('on'), 2600);
  }
  function armed(el) {
    if (el.classList.contains('armed')) return true;
    $$('.armed').forEach(x => x.classList.remove('armed'));
    el.classList.add('armed'); toast('Tap again to confirm');
    setTimeout(() => el.classList.remove('armed'), 3000);
    return false;
  }
  // Which clock a moment should be shown in: Toronto before landing and after take-off home
  function tzAt(ms) { return ms < C.abs('2026-12-10', '15:50', 'JST') || ms > C.abs('2026-12-20', '16:50', 'JST') ? 'ET' : 'JST'; }
  const WEB = !C.N.has, IOS = C.N.platform === 'ios';
  function installHint() {
    return '<section class="card install"><b>' + ic('plus') + 'Put it on your Home Screen</b><ol class="steps"><li>Open this page in <b>Safari</b>.</li>' +
      '<li>Tap <b>Share</b> (the square with an arrow; on newer iPhones it\'s inside the <b>⋯</b> menu).</li><li>Choose <b>Add to Home Screen</b>, then <b>Add</b>.</li></ol>' +
      '<small>It then opens full screen like an app and works without data.</small></section>';
  }
  function calBtn() {
    return '<a class="btn wide" href="trip.ics" target="_blank" rel="noopener">' + ic('bell') + 'Add trip alarms to Calendar</a>' +
      '<p class="fine center">Every stop goes into your Calendar, with alerts before each train, flight and bus and before last trains. Tap <b>Add All</b>.</p>';
  }
  function parseYen(s) { const m = String(s).replace(/,/g, '').match(/¥\s?(\d+)/); return m ? +m[1] : null; }

  /* ================= TODAY ================= */
  function vToday(now) {
    const ph = C.phase(now);
    if (ph.kind === 'pre') return vPre(now);
    if (ph.kind === 'post') return vPost(now);
    return vDay(ph.day, now);
  }

  function hero(d, now, isToday) {
    const p = T.places[d.place], sun = C.sunTimes(d.date, d.tz, p.lat, p.lng), w = C.wx(d.place, d.date), st = C.stay(d.sleep);
    const wtxt = w.hi == null ? '' : (w.live ? (w.cur != null && isToday ? w.cur + '° now · ' : '') + w.lo + '° / ' + w.hi + '° ' + C.wxText(w.code) : w.lo + '° / ' + w.hi + '° typical');
    return '<section class="hero r-' + d.region + '"><div class="art">' + ART[d.region] + '</div>' +
      '<div class="kick">' + dayNum(d) + ' · ' + dayLbl(d) + (isToday ? ' · <b>Today</b>' : '') + '</div>' +
      '<h1>' + esc(d.title) + '</h1><p class="sub">' + esc(d.sub) + '</p>' +
      '<div class="chips">' +
      '<span class="chip">' + ic('stay') + esc(st.short || st.name) + '</span>' +
      (wtxt ? '<span class="chip">' + ic(w.live && w.snow > 0.5 ? 'snow' : 'temp') + esc(wtxt) + (w.live && w.snow > 0.5 ? ' · ' + Math.round(w.snow) + ' cm' : '') + '</span>' : '') +
      '<span class="chip">' + ic('sunset') + hm(sun.rise, d.tz) + ' – ' + hm(sun.set, d.tz) + '</span>' +
      '</div></section>';
  }

  function nowCard(d, now) {
    const f = d.flight;
    if (f && now >= f.depAt - 30 * M && now < f.arrAt) return flightCard(f, now);
    const its = d.items.filter(i => !i.o);
    const cur = its.slice().reverse().find(i => i.at <= now && now < i.end);
    const nxt = its.find(i => i.at > now);
    const lv = its.find(i => i.leaveAt && i.leaveAt > now - 5 * M && i.leaveAt - now < 4 * H);
    let h = '<section class="card nowc">';
    if (lv) {
      const left = lv.leaveAt - now;
      h += '<div class="leave' + (left < 15 * M ? ' hot' : '') + '">' + ic('clock') + '<div><b>Leave by ' + hm(lv.leaveAt, lv.tzz) + '</b><span>' +
        (left > 0 ? 'in <b data-cd="' + lv.leaveAt + '">' + C.dur(left) + '</b> · ' : 'Go now · ') + esc(lv.ttl) + ' at ' + hm(lv.at, lv.tzz) + '</span></div></div>';
    }
    if (cur) {
      const pct = Math.max(0, Math.min(1, (now - cur.at) / (cur.end - cur.at)));
      h += '<div class="nrow"><span class="lbl now">Now</span><div class="nb"><b>' + esc(cur.ttl) + '</b><small>' + hm(cur.at, cur.tzz) + ' – ' + hm(cur.end, cur.tzz) + (cur.cost ? ' · ' + esc(cur.cost) : '') + '</small></div>' +
        (cur.pl ? '<button class="ib" data-a="url" data-u="' + esc(mapUrl(cur.pl.q)) + '">' + ic('pin') + '</button>' : '') + '</div>' +
        '<div class="bar"><i style="width:' + (pct * 100).toFixed(1) + '%"></i></div>';
    }
    if (nxt) {
      h += '<div class="nrow"><span class="lbl">Next</span><div class="nb"><b>' + esc(nxt.ttl) + '</b><small>' + hm(nxt.at, nxt.tzz) + ' · in <span data-cd="' + nxt.at + '">' + C.dur(nxt.at - now) + '</span></small></div>' +
        (nxt.pl ? '<button class="ib" data-a="url" data-u="' + esc(dirUrl(nxt.pl.q)) + '">' + ic('dir') + '</button>' : '') + '</div>';
    }
    if (!cur && !nxt) {
      const i = DAYS.indexOf(d), tm = DAYS[i + 1];
      h += '<div class="nrow"><span class="lbl">Done</span><div class="nb"><b>That\'s the day.</b><small>' + (tm ? 'Tomorrow: ' + esc(tm.title) : 'Welcome home.') + '</small></div>' +
        (tm ? '<button class="ib" data-a="day" data-id="' + tm.id + '">' + ic('chev') + '</button>' : '') + '</div>';
    }
    return h + '</section>';
  }

  function flightCard(f, now) {
    const pct = Math.max(0, Math.min(1, (now - f.depAt) / (f.arrAt - f.depAt)));
    const destTz = f.to === 'HND' ? 'JST' : 'ET', p = C.parts(now, destTz), night = p.h >= 21 || p.h < 6;
    const pre = now < f.depAt;
    return '<section class="card flight"><div class="fh">' + ic('plane') + '<b>' + f.code + '</b><span>' + f.from + ' → ' + f.to + '</span></div>' +
      '<div class="ftrack"><span>' + f.from + '<small>' + hm(f.depAt, f.dep.tz) + '</small></span><div class="fl"><i style="width:' + (pct * 100).toFixed(1) + '%"></i><b style="left:' + (pct * 100).toFixed(1) + '%">' + ic('plane') + '</b></div><span>' + f.to + '<small>' + hm(f.arrAt, f.arr.tz) + '</small></span></div>' +
      '<div class="fst"><div><small>' + (pre ? 'Departs in' : 'Lands in') + '</small><b data-cd="' + (pre ? f.depAt : f.arrAt) + '">' + C.dur((pre ? f.depAt : f.arrAt) - now) + '</b></div>' +
      '<div><small>Japan</small><b data-clock="JST">' + hm(now, 'JST') + '</b></div><div><small>Toronto</small><b data-clock="ET">' + hm(now, 'ET') + '</b></div></div>' +
      '<p class="hint">' + (pre ? 'Gate closes 15 minutes before departure.' : night ? 'It\'s night where you\'re landing. Sleep now if you can.' : 'It\'s daytime where you\'re landing. Stay awake, drink water, walk the aisle.') + '</p></section>';
  }

  function segs(d, seg) {
    const o = [['plan', 'Plan'], ['go', 'Go'], ['buy', 'Buy'], ['do', 'Do']];
    return '<div class="seg" role="tablist">' + o.map(x => '<button class="' + (seg === x[0] ? 'on' : '') + '" data-a="seg" data-id="' + d.id + '" data-v="' + x[0] + '">' + x[1] + '</button>').join('') + '</div>';
  }

  function timeline(d, now, live) {
    let h = '<ol class="tl">', placed = !live;
    d.items.forEach(it => {
      const st = !live ? '' : (now >= it.end ? 'past' : now >= it.at ? 'cur' : 'fut');
      if (!placed && it.at > now && !it.o) { h += '<li class="nowline"><span>Now · <b data-clock="' + d.tz + '">' + hm(now, d.tz) + '</b></span></li>'; placed = true; }
      h += tlItem(it, d, st);
    });
    if (!placed) h += '<li class="nowline"><span>Now · ' + hm(now, d.tz) + '</span></li>';
    return h + '</ol>';
  }

  function tlItem(it, d, st) {
    const open = R.exp.has(it.key) || st === 'cur';
    const code = it.bk ? (S().book[it.bk] || '') : '';
    const tzTag = it.tzz !== d.tz ? '<em>' + it.tzz + '</em>' : '';
    let tags = '';
    if (it.o) tags += '<span class="tag">Option</span>';
    if (it.fix) tags += '<span class="tag fix">Fixed</span>';
    if (it.bk) tags += code ? '<span class="tag ok">' + ic('check') + esc(code) + '</span>' : '<span class="tag warn">Needs booking</span>';
    let act = '';
    if (open) {
      act = '<div class="acts">';
      if (it.pl) act += '<button class="pill" data-a="url" data-u="' + esc(mapUrl(it.pl.q)) + '">' + ic('pin') + 'Map</button><button class="pill" data-a="url" data-u="' + esc(dirUrl(it.pl.q)) + '">' + ic('dir') + 'Route</button>';
      if (it.pl && it.pl.jp) act += '<button class="pill" data-a="showPlace" data-n="' + esc(it.pl.n) + '" data-jp="' + esc(it.pl.jp) + '">' + ic('speak') + 'Show</button>';
      if (it.bk) act += '<button class="pill" data-a="book" data-k="' + it.bk + '">' + ic('ticket') + (code ? 'Code' : 'Add code') + '</button>';
      act += '<button class="pill" data-a="addExp" data-what="' + esc(it.ttl) + '" data-yen="' + (parseYen(it.cost || '') || '') + '" data-day="' + d.id + '">' + ic('plus') + 'Expense</button>';
      act += '</div>';
    }
    return '<li class="ti k-' + it.k + ' ' + st + (it.o ? ' opt' : '') + (open ? ' open' : '') + '" data-a="tl" data-key="' + it.key + '">' +
      '<div class="tt">' + (it.a ? '<i>~</i>' : '') + hm(it.at, it.tzz) + tzTag + '</div>' +
      '<div class="dot">' + ic(KIND[it.k] || 'dot') + '</div>' +
      '<div class="tc"><div class="th">' + esc(it.ttl) + '</div>' + (tags ? '<div class="tags">' + tags + '</div>' : '') +
      (it.cost ? '<div class="cost">' + esc(it.cost) + '</div>' : '') +
      (it.txt ? '<div class="tx">' + esc(it.txt) + '</div>' : '') + act + '</div></li>';
  }

  function bagStatus(now) {
    const t = (d, h) => C.abs(d, h, 'JST');
    if (now < t('2026-12-10', '17:15')) return null;
    if (now < t('2026-12-13', '12:00')) return { t: 'In transit → The Setsumon, Niseko', s: 'Shipped from Haneda Dec 10. Due about Dec 12–13.' };
    if (now < t('2026-12-14', '18:30')) return { t: 'Should be waiting at The Setsumon', s: 'Pick it up when you check in Mon evening.' };
    if (now < t('2026-12-16', '11:30')) return null;
    if (now < t('2026-12-19', '12:00')) return { t: 'In transit → Haneda T3', s: 'Shipped from Hirafu Dec 16 by Yamato airport delivery. Collect it at the T3 counter before UA 804 check-in on Dec 20.' };
    if (now < t('2026-12-20', '15:00')) return { t: 'Waiting at the Haneda T3 Yamato counter', s: 'Pick it up on Dec 20 before United check-in (allow 15 min).' };
    return null;
  }

  function planCards(d, now, live) {
    let h = '';
    if (d.transit) {
      const open = R.exp.has('tr:' + d.id);
      h += '<section class="card"><button class="ch" data-a="tog" data-k="tr:' + d.id + '">' + ic('train') + '<div><b>' + esc(d.transit.title) + '</b><small>' + esc(d.transit.meta) + '</small></div>' + ic(open ? 'x' : 'chev', 'sm') + '</button>' +
        (open ? '<ol class="steps">' + d.transit.steps.map(s => '<li>' + esc(s) + '</li>').join('') + '</ol>' : '') + '</section>';
    }
    if (d.warn) h += '<section class="card warnc">' + ic('warn') + '<p>' + esc(d.warn) + '</p></section>';
    // ski conditions
    if (d.region === 'niseko') {
      const w = C.wx('niseko', d.date);
      if (w.live) {
        const pow = (w.snow || 0) >= 10 || (w.prevSnow || 0) >= 10;
        h += '<section class="card ' + (pow ? 'powder' : '') + '"><div class="ch static">' + ic('snow') + '<div><b>' + (pow ? 'Powder alert: be on the 08:30 lift' : 'Snow forecast') + '</b><small>' + Math.round(w.prevSnow || 0) + ' cm the day before · ' + Math.round(w.snow || 0) + ' cm today · ' + w.lo + '° / ' + w.hi + '°</small></div></div></section>';
      } else if (d.ski) {
        h += '<section class="card"><div class="ch static">' + ic('snow') + '<div><b>Snow forecast</b><small>Live snowfall shows here once the date is within 16 days and you\'re online.</small></div></div></section>';
      }
    }
    // before you leave
    if (d.prep && d.prep.length) {
      const dp = S().dprep[d.id] || {};
      const n = d.prep.filter((_, i) => dp[i]).length;
      h += '<section class="card"><div class="ch static">' + ic('list') + '<div><b>Before you leave</b><small>' + n + ' of ' + d.prep.length + ' done</small></div></div><ul class="checks">' +
        d.prep.map((p, i) => '<li class="' + (dp[i] ? 'done' : '') + '" data-a="dprep" data-id="' + d.id + '" data-i="' + i + '"><span class="cb">' + ic('check') + '</span>' + esc(p) + '</li>').join('') + '</ul></section>';
    }
    const bag = bagStatus(now);
    if (bag && live) h += '<section class="card"><div class="ch static">' + ic('bag') + '<div><b>Mo\'s board: ' + esc(bag.t) + '</b><small>' + esc(bag.s) + (S().bagTrack ? ' · Tracking ' + esc(S().bagTrack) : '') + '</small></div><button class="ib" data-a="page" data-p="notes">' + ic('note') + '</button></div></section>';
    if (d.stamps) {
      const n = T.baths.filter(b => S().stamps[b.n]).length;
      h += '<section class="card stampc" data-a="page" data-p="onsen"><div class="ch">' + ic('stamp') + '<div><b>Nine-bath stamp card</b><small>' + n + ' of 10 stamps · tap to open</small></div>' + ic('chev', 'sm') + '</div><div class="mini">' +
        T.baths.map(b => '<span class="' + (S().stamps[b.n] ? 'on' : '') + '">' + (b.n === 10 ? '薬' : b.n) + '</span>').join('') + '</div></section>';
    }
    if (d.night && d.nightKit) {
      const k = d.nightKit;
      h += '<section class="card nightc"><div class="ch static">' + ic('night') + '<div><b>Night-out kit</b><small>' + (/^≈/.test(k.last) ? 'Last trains ' : '') + esc(k.last) + '</small></div></div>' +
        '<ul class="kv"><li><span>Taxi</span>' + esc(k.taxi) + '</li>' + (k.first ? '<li><span>Later</span>' + esc(k.first) + '</li>' : '') + '</ul>' +
        '<div class="acts"><button class="pill" data-a="page" data-p="home">' + ic('compass') + 'Find home</button><button class="pill" data-a="taxi">' + ic('taxi') + 'Taxi card</button></div></section>';
    }
    if (d.regroup) {
      h += '<section class="card"><div class="ch static">' + ic('meet') + '<div><b>If you get split up</b><small>Phone dead? Go here: <b>' + esc(d.regroup.n) + '</b>' + (d.regroup.note ? '. ' + esc(d.regroup.note) : '') + '</small></div>' +
        (d.regroup.jp ? '<button class="ib" data-a="showPlace" data-n="' + esc(d.regroup.n) + '" data-jp="' + esc(d.regroup.jp) + '">' + ic('speak') + '</button>' : '') + '</div></section>';
    }
    if (d.id === 'd11') {
      const tf = S().buys.filter(b => b.tf), home = [0, 1, 2].map(i => S().buys.filter(b => b.who === i && b.home !== false).reduce((s, b) => s + b.yen, 0));
      h += '<section class="card"><div class="ch" data-a="wallet" data-v="shop">' + ic('shop') + '<div><b>Tax refund at T3: ' + tf.length + ' item' + (tf.length === 1 ? '' : 's') + ', ' + C.yen(tf.reduce((s, b) => s + b.yen, 0)) + '</b><small>Duty-free home: ' + [0, 1, 2].map(i => P[i] + ' ' + C.cad(C.y2c(home[i])) + ' of C$800').join(' · ') + '</small></div>' + ic('chev', 'sm') + '</div></section>';
    }
    // spend today
    const mine = S().exp.filter(e => e.day === d.id);
    if (mine.length || d.plan) {
      const me = S().set.me || 0;
      const spent = mine.reduce((s, e) => s + (e.split.indexOf(me) >= 0 ? e.yen / e.split.length : 0), 0);
      const pct = d.plan ? Math.min(1, spent / d.plan) : 0;
      h += '<section class="card" data-a="wallet" data-v="budget"><div class="ch">' + ic('wallet') + '<div><b>' + P[me] + ' today: ' + C.yen(spent) + (d.plan ? ' of ≈ ' + C.yen(d.plan) : '') + '</b><small>Excludes hotels and pre-booked flights · ' + mine.length + ' shared expense' + (mine.length === 1 ? '' : 's') + '</small></div>' + ic('chev', 'sm') + '</div>' +
        (d.plan ? '<div class="bar thin"><i style="width:' + (pct * 100).toFixed(1) + '%"' + (spent > d.plan ? ' class="over"' : '') + '></i></div>' : '') + '</section>';
    }
    return h;
  }

  function goList(d) {
    return '<div class="list">' + d.go.map(g => '<section class="card place"><div class="pt"><b>' + esc(g.n) + '</b>' + (g.jp ? '<span class="jp">' + esc(g.jp) + '</span>' : '') + '<p>' + esc(g.why) + '</p></div><div class="acts">' +
      '<button class="pill" data-a="url" data-u="' + esc(mapUrl(g.q)) + '">' + ic('pin') + 'Map</button>' +
      '<button class="pill" data-a="url" data-u="' + esc(dirUrl(g.q)) + '">' + ic('dir') + 'Transit</button>' +
      '<button class="pill" data-a="url" data-u="' + esc(dirUrl(g.q, 'walking')) + '">' + ic('move') + 'Walk</button>' +
      (g.jp ? '<button class="pill" data-a="showPlace" data-n="' + esc(g.n) + '" data-jp="' + esc(g.jp) + '">' + ic('speak') + 'Show</button>' : '') +
      '</div></section>').join('') + '</div>';
  }

  function buyList(d) {
    return '<section class="card"><ul class="buy">' + d.buy.map(b => '<li><div><b>' + esc(b.w) + '</b>' + (b.note ? '<small>' + esc(b.note) + '</small>' : '') + '</div><span class="pr">' + esc(b.p) + '</span>' +
      '<button class="ib sm" data-a="addExp" data-what="' + esc(b.w) + '" data-yen="' + (parseYen(b.p) || '') + '" data-day="' + d.id + '" aria-label="Add expense">' + ic('plus') + '</button></li>').join('') +
      '</ul><p class="fine">≈ marks a typical range. Tap + to log what you actually paid.</p></section>' +
      '<button class="btn ghost wide" data-a="addBuy" data-day="' + d.id + '">' + ic('shop') + 'Log a purchase (tax-free / duty-free tracker)</button>';
  }

  function doList(d) {
    let h = '<div class="list">' + d.do.map(x => '<section class="card tip"><b>' + esc(x.ttl) + '</b><p>' + esc(x.txt) + '</p></section>').join('') + '</div>';
    const fq = T.food.filter(f => f.d === d.id);
    if (fq.length) h += '<section class="card"><div class="ch static">' + ic('food') + '<div><b>Food quests today</b><small>Tick them off; the full list is in Kit</small></div></div><ul class="checks">' +
      fq.map(f => '<li class="' + (S().food[f.id] ? 'done' : '') + '" data-a="food" data-id="' + f.id + '"><span class="cb">' + ic('check') + '</span>' + esc(f.n) + '</li>').join('') + '</ul></section>';
    return h;
  }

  function vDay(d, now) {
    const ph = C.phase(now), isToday = ph.kind === 'day' && ph.day.id === d.id;
    const seg = S().seg[d.id] || 'plan';
    let h = hero(d, now, isToday);
    if (isToday) h += nowCard(d, now);
    h += segs(d, seg);
    if (seg === 'plan') h += timeline(d, now, isToday) + planCards(d, now, isToday);
    else if (seg === 'go') h += goList(d);
    else if (seg === 'buy') h += buyList(d);
    else h += doList(d);
    h += '<button class="btn ghost wide" data-a="shareDay" data-id="' + d.id + '">' + ic('share') + 'Share this day with the group chat</button>';
    return h;
  }

  /* ---------- pre-trip ---------- */
  function vPre(now) {
    const meet = C.absO(T.meetAt);
    const left = meet - now, dd = Math.floor(left / C.DAY), hh = Math.floor(left % C.DAY / H), mm = Math.floor(left % H / M);
    const done = T.prepList.filter(p => S().prep[p.id]).length, tot = T.prepList.length;
    const today = C.ymd(now, 'ET');
    const pct = done / tot;
    let h = '<section class="hero r-pre"><div class="art">' + ART.home + '</div><div class="kick">Countdown · meet at Union Tue Dec 8, 19:40</div>' +
      '<div class="count"><div><b>' + dd + '</b><small>days</small></div><div><b>' + hh + '</b><small>hours</small></div><div><b>' + mm + '</b><small>min</small></div></div>' +
      '<p class="sub">Wheels up from Buffalo Wed Dec 9 at 10:00 · Haneda Thu Dec 10 at 16:50</p></section>';
    h += '<section class="card ready"><div class="ring" style="--p:' + (pct * 100).toFixed(0) + '"><b>' + Math.round(pct * 100) + '%</b></div><div><b>Trip readiness</b><small>' + done + ' of ' + tot + ' prep tasks done.' + (WEB ? '' : ' Ticking a task also cancels its reminder.') + '</small>' +
      '<div class="acts"><button class="pill" data-a="sharePrep">' + ic('share') + 'Send open tasks to the group</button><button class="pill" data-a="go" data-t="demo">' + ic('demo') + 'Preview a day</button></div></div></section>';
    const groups = [['Overdue', p => p.due < today], ['By Nov 22', p => p.due >= today && p.due <= '2026-11-22'], ['By Nov 30', p => p.due >= today && p.due > '2026-11-22' && p.due <= '2026-11-30'], ['Before you go', p => p.due >= today && p.due > '2026-11-30']];
    groups.forEach(g => {
      const list = T.prepList.filter(p => g[1](p) && !(g[0] === 'Overdue' && S().prep[p.id]));
      if (!list.length) return;
      h += '<h3 class="sec' + (g[0] === 'Overdue' ? ' red' : '') + '">' + g[0] + '</h3><section class="card"><ul class="checks prep">' + list.map(p => '<li class="' + (S().prep[p.id] ? 'done' : '') + '" data-a="prep" data-id="' + p.id + '"><span class="cb">' + ic('check') + '</span><div>' + esc(p.t) +
        '<small>' + p.who.map(i => chipP(i, 1)).join('') + ' due ' + C.dateLbl(C.abs(p.due, '12:00', 'ET'), 'ET') + '</small></div></li>').join('') + '</ul></section>';
    });
    h += '<section class="card" data-a="page" data-p="packing"><div class="ch">' + ic('bag') + '<div><b>Packing list</b><small>' + T.packing.filter((_, i) => S().pack[i]).length + ' of ' + T.packing.length + ' packed</small></div>' + ic('chev', 'sm') + '</div></section>';
    return h;
  }

  /* ---------- post-trip ---------- */
  function vPost() {
    const tx = settle(balances());
    const tot = S().exp.reduce((s, e) => s + e.yen, 0);
    const fq = T.food.filter(f => S().food[f.id]).length, st = T.baths.filter(b => S().stamps[b.n]).length;
    return '<section class="hero r-home"><div class="art">' + ART.home + '</div><div class="kick">Trip complete</div><h1>Welcome home.</h1><p class="sub">Eleven days, seven beds, nine baths and a mountain.</p></section>' +
      '<section class="card stats"><div><b>' + C.yen(tot) + '</b><small>shared spending</small></div><div><b>' + fq + '/' + T.food.length + '</b><small>food quests</small></div><div><b>' + st + '/10</b><small>bath stamps</small></div></section>' +
      '<section class="card"><div class="ch static">' + ic('wallet') + '<div><b>Settle up</b><small>' + (tx.length ? tx.map(t => P[t.from] + ' → ' + P[t.to] + ' ' + C.yen(t.amt) + ' (' + C.cad(C.y2c(t.amt), 1) + ')').join(' · ') : 'All square.') + '</small></div></div></section>' +
      '<button class="btn wide" data-a="go" data-t="trip">' + ic('trip') + 'Relive any day</button>';
  }

  /* ================= TRIP ================= */
  function vTrip(now) {
    const ph = C.phase(now);
    let h = '<div class="ph"><h2>The route</h2><p>Tokyo 2 · Shibu Onsen 1 · Nagano 1 · Niseko 2 · Sapporo 2 · Tokyo 2 (nights)</p></div><ol class="route">';
    DAYS.forEach(d => {
      const st = C.stay(d.sleep), cur = ph.kind === 'day' && ph.day.id === d.id, past = now >= d.end;
      h += '<li class="rt r-' + d.region + (cur ? ' cur' : '') + (past ? ' past' : '') + '" data-a="day" data-id="' + d.id + '">' +
        '<div class="rd"><b>' + C.dateLbl(C.abs(d.date, '12:00', d.tz), d.tz).split(' ').slice(1).join(' ') + '</b><small>' + C.DOW[C.parts(C.abs(d.date, '12:00', d.tz), d.tz).dow] + '</small></div>' +
        '<div class="rl"><i></i></div><div class="rc"><small>' + (d.n > 0 ? 'Day ' + d.n : 'Travel') + ' · ' + REG[d.region].name + (cur ? ' · <b>Today</b>' : '') + '</small><b>' + esc(d.title) + '</b><span>' + ic('stay', 'xs') + esc(st.short || st.name) + '</span></div></li>';
    });
    h += '</ol><section class="card"><div class="ch static">' + ic('stay') + '<div><b>Where you sleep</b><small>Tap a hotel for its taxi card</small></div></div><ul class="stays">' +
      ['buf', 'tokyo', 'shibu', 'nagano', 'niseko', 'sapporo', 'tokyo2'].map(k => { const s = C.stay(k); return '<li data-a="taxi" data-k="' + k + '"><b>' + esc(s.name) + '</b>' + (s.jp ? '<span class="jp">' + esc(s.jp) + '</span>' : '') + '<small>' + esc(s.sub) + '</small></li>'; }).join('') + '</ul></section>';
    return h;
  }

  function vDayPage(id, now) { const d = C.dayById(id); return pageHead(dayNum(d) + ' · ' + dayLbl(d)) + vDay(d, now); }

  /* ================= WALLET ================= */
  function balances() {
    const paid = [0, 0, 0], owe = [0, 0, 0];
    S().exp.forEach(e => { paid[e.by] += e.yen; e.split.forEach(i => owe[i] += e.yen / e.split.length); });
    return paid.map((p, i) => ({ paid: p, owe: owe[i], net: p - owe[i] }));
  }
  function settle(b) {
    const a = b.map((x, i) => ({ i, v: x.net }));
    const deb = a.filter(x => x.v < -1).sort((x, y) => x.v - y.v), cre = a.filter(x => x.v > 1).sort((x, y) => y.v - x.v), tx = [];
    while (deb.length && cre.length) {
      const d = deb[0], c = cre[0], amt = Math.min(-d.v, c.v);
      tx.push({ from: d.i, to: c.i, amt }); d.v += amt; c.v -= amt;
      if (d.v > -1) deb.shift(); if (c.v < 1) cre.shift();
    }
    return tx;
  }
  function vWallet(now) {
    const seg = R.wseg;
    let h = '<div class="ph"><h2>Money</h2><p>¥' + C.rate().toFixed(2) + ' = C$1 · ' + (S().set.liveRate && S().fx ? 'live rate' : 'manual rate') + '</p></div>';
    h += '<div class="seg">' + [['split', 'Split'], ['conv', 'Convert'], ['shop', 'Shopping'], ['budget', 'Budget']].map(x => '<button class="' + (seg === x[0] ? 'on' : '') + '" data-a="wseg" data-v="' + x[0] + '">' + x[1] + '</button>').join('') + '</div>';
    if (seg === 'split') h += vSplit(now);
    else if (seg === 'conv') h += vConv();
    else if (seg === 'shop') h += vShop();
    else h += vBudget();
    return h;
  }
  function vSplit() {
    const b = balances(), tx = settle(b);
    let h = '<div class="bal">' + b.map((x, i) => '<div class="bp"><div class="bh">' + chipP(i) + '<b>' + P[i] + '</b></div><div class="bn ' + (x.net > 1 ? 'pos' : x.net < -1 ? 'neg' : '') + '">' + (x.net > 1 ? '+' : '') + C.yen(x.net) + '</div><small>paid ' + C.yen(x.paid) + '</small></div>').join('') + '</div>';
    h += '<section class="card"><div class="ch static">' + ic('swap') + '<div><b>Settle up</b><small>' + (tx.length ? 'Fewest transfers to make everyone even' : 'Everyone is square') + '</small></div>' + (S().exp.length ? '<button class="ib" data-a="shareSplit">' + ic('share') + '</button>' : '') + '</div>' +
      (tx.length ? '<ul class="kv wide">' + tx.map(t => '<li><span>' + P[t.from] + ' → ' + P[t.to] + '</span>' + C.yen(t.amt) + ' <small>(' + C.cad(C.y2c(t.amt), 1) + ')</small></li>').join('') + '</ul>' : '') + '</section>';
    h += '<button class="btn wide" data-a="addExp">' + ic('plus') + 'Add a shared expense</button>';
    const groups = {};
    S().exp.slice().sort((a, c) => c.at - a.at).forEach(e => { (groups[e.day] = groups[e.day] || []).push(e); });
    Object.keys(groups).forEach(k => {
      const d = C.dayById(k);
      h += '<h3 class="sec">' + (d ? dayNum(d) + ' · ' + dayLbl(d) : k === 'pre' ? 'Before the trip' : 'After the trip') + '</h3><section class="card"><ul class="exp">' + groups[k].map(e =>
        '<li><span class="ec">' + ic(e.cat === 'Food' || e.cat === 'Drinks' ? 'food' : e.cat === 'Transport' ? 'train' : e.cat === 'Tickets' ? 'ticket' : e.cat === 'Stay' ? 'stay' : e.cat === 'Shopping' ? 'shop' : 'wallet') + '</span><div><b>' + esc(e.what) + '</b><small>' + chipP(e.by, 1) + ' paid · ' + (e.split.length === 3 ? 'split 3 ways' : 'split ' + e.split.map(i => P[i]).join(' + ')) + '</small></div><span class="pr">' + C.yen(e.yen) + '<small>' + C.cad(C.y2c(e.yen)) + '</small></span><button class="ib sm" data-a="delExp" data-id="' + e.id + '">' + ic('trash') + '</button></li>').join('') + '</ul></section>';
    });
    h += '<p class="fine">Each phone keeps its own list, so pick one person to log the shared costs. Share sends the totals to the group chat.</p>';
    if (!S().exp.length) h += '<p class="empty">No expenses yet. Log dinners, taxis and tickets here; it splits three ways (or between whoever was there) and tells you who owes whom.</p>';
    return h;
  }
  function vConv() {
    const r = C.rate();
    const qs = [500, 1000, 3000, 5000, 10000, 30000];
    return '<section class="card conv"><label>Yen<input id="cvY" inputmode="decimal" data-in="cvY" placeholder="0" value="' + (R.cvY || '') + '"></label><div class="eq">' + ic('swap') + '</div><label>Canadian dollars<input id="cvC" inputmode="decimal" data-in="cvC" placeholder="0" value="' + (R.cvC || '') + '"></label>' +
      '<p class="fine" id="cvSplit">' + (R.cvY ? 'Split three ways: ' + C.yen(R.cvY / 3) + ' / ' + C.cad(R.cvY / 3 / r, 1) + ' each' : 'Prices in Japan include 10% tax unless they say 税抜 (tax excluded).') + '</p></section>' +
      '<div class="quick">' + qs.map(q => '<button class="pill" data-a="cvq" data-v="' + q + '">' + C.yen(q) + ' = ' + C.cad(q / r, 1) + '</button>').join('') + '</div>' +
      '<section class="card"><div class="ch static">' + ic('wallet') + '<div><b>Rate</b><small>¥' + r.toFixed(2) + ' per C$1 · ' + (S().set.liveRate ? (S().fx ? 'updated ' + C.dur(Date.now() - S().fx.at) + ' ago' : 'live rate when online, ¥' + S().set.rate + ' until then') : 'manual') + '. Change it in Kit → Settings.</small></div></div></section>';
  }
  function vShop() {
    const b = S().buys;
    let h = '<p class="lead">Track what you buy to take home. Two limits matter: Japan\'s tax refund (claimed at the airport since Nov 1, 2026) and Canada\'s C$800 duty-free allowance, including 1.14 L of spirits, per person.</p>';
    h += '<div class="bal">' + [0, 1, 2].map(i => {
      const mine = b.filter(x => x.who === i), homeC = C.y2c(mine.filter(x => x.home !== false).reduce((s, x) => s + x.yen, 0)), alc = mine.reduce((s, x) => s + (x.alc || 0), 0);
      return '<div class="bp"><div class="bh">' + chipP(i) + '<b>' + P[i] + '</b></div><div class="meter"><i style="width:' + Math.min(100, homeC / 8).toFixed(0) + '%" class="' + (homeC > 800 ? 'over' : '') + '"></i></div><small>' + C.cad(homeC) + ' / C$800</small>' +
        '<div class="meter"><i style="width:' + Math.min(100, alc / 1.14 * 100).toFixed(0) + '%" class="' + (alc > 1.14 ? 'over' : '') + '"></i></div><small>' + alc.toFixed(2) + ' L / 1.14 L spirits</small></div>';
    }).join('') + '</div>';
    const tf = b.filter(x => x.tf), tfy = tf.reduce((s, x) => s + x.yen, 0);
    h += '<section class="card"><div class="ch static">' + ic('ticket') + '<div><b>Tax refund at Haneda: ' + C.yen(tfy) + ' of goods</b><small>Tax inside that is about ' + C.yen(tfy / 11) + ' (' + C.cad(C.y2c(tfy / 11), 1) + '), refunded to your card minus a handling fee. Do it before bag drop.</small></div></div></section>';
    h += '<button class="btn wide" data-a="addBuy">' + ic('plus') + 'Log a purchase</button>';
    if (b.length) h += '<section class="card"><ul class="exp">' + b.slice().reverse().map(x => '<li><span class="ec">' + ic('shop') + '</span><div><b>' + esc(x.what) + '</b><small>' + chipP(x.who, 1) + (x.tf ? ' tax-free' : '') + (x.home !== false ? ' · going home' : '') + (x.alc ? ' · ' + x.alc + ' L spirits' : '') + '</small></div><span class="pr">' + C.yen(x.yen) + '<small>' + C.cad(C.y2c(x.yen)) + '</small></span><button class="ib sm" data-a="delBuy" data-id="' + x.id + '">' + ic('trash') + '</button></li>').join('') + '</ul></section>';
    return h;
  }
  function vBudget() {
    const me = R.budgetP;
    let h = '<div class="who">' + [0, 1, 2].map(i => '<button class="' + (me === i ? 'on' : '') + '" data-a="bp" data-v="' + i + '">' + chipP(i, 1) + P[i] + '</button>').join('') + '</div>';
    let totS = 0, totP = 0, rows = '';
    DAYS.forEach(d => {
      const s = S().exp.filter(e => e.day === d.id && e.split.indexOf(me) >= 0).reduce((a, e) => a + e.yen / e.split.length, 0);
      totS += s; totP += d.plan || 0;
      rows += '<li><span>' + C.dateLbl(C.abs(d.date, '12:00', d.tz), d.tz).replace(/^\w+ /, '') + '</span><div class="bb"><i class="p" style="width:' + ((d.plan || 0) / 35000 * 100).toFixed(1) + '%"></i><i class="s' + (s > (d.plan || 0) && d.plan ? ' over' : '') + '" style="width:' + (s / 35000 * 100).toFixed(1) + '%"></i></div><b>' + (s ? C.yen(s) : '–') + '</b></li>';
    });
    h += '<section class="card stats"><div><b>' + C.yen(totS) + '</b><small>spent (share)</small></div><div><b>≈ ' + C.yen(totP) + '</b><small>day-by-day plan</small></div><div><b>' + C.cad(C.y2c(totS)) + '</b><small>in CAD</small></div></section>';
    h += '<section class="card"><div class="ch static">' + ic('list') + '<div><b>Per day</b><small>Grey: plan (food, transit, tickets; not hotels). Colour: ' + P[me] + '\'s share of logged expenses.</small></div></div><ul class="bud">' + rows + '</ul></section>';
    return h;
  }

  /* ================= KIT ================= */
  function vKit(now) {
    const sk = C.stayFor(now) || R.homeTarget || 'tokyo', s = C.stay(sk);
    const tiles = [
      ['home', 'compass', 'Find home', 'Arrow to ' + (s.short || s.name)],
      ['taxi', 'taxi', 'Taxi card', 'Hotel in Japanese'],
      ['phrases', 'speak', 'Phrasebook', 'Tap to hear it'],
      ['onsen', 'onsen', 'Onsen & 9 baths', 'Rules + stamp card'],
      ['food', 'food', 'Food quests', T.food.filter(f => S().food[f.id]).length + ' of ' + T.food.length],
      ['bookings', 'ticket', 'Bookings', 'Confirmation codes'],
      ['emergency', 'sos', 'Emergency', '110 · 119 · embassy'],
      ['packing', 'bag', 'Packing', T.packing.filter((_, i) => S().pack[i]).length + ' of ' + T.packing.length],
      ['notes', 'note', 'Bags & notes', 'Tracking, lockers'],
      ['settings', 'gear', 'Settings', 'Rate, reminders, data']
    ];
    return '<div class="ph"><h2>Kit</h2><p>Everything here works offline.</p></div><div class="tiles">' +
      tiles.map(t => '<button class="tile" data-a="' + (t[0] === 'taxi' ? 'taxi' : 'page') + '" data-p="' + t[0] + '">' + ic(t[1]) + '<b>' + t[2] + '</b><small>' + esc(t[3]) + '</small></button>').join('') + '</div>';
  }

  function pageHead(title, extra) { return '<div class="pgh"><button class="ib" data-a="back">' + ic('back') + '</button><h2>' + esc(title) + '</h2>' + (extra || '') + '</div>'; }

  function vHome(now) {
    const auto = C.stayFor(now), key = R.homeTarget || auto || 'tokyo', s = C.stay(key);
    const loc = (C.Clock.sim() && S().fakeLoc) ? S().fakeLoc : R.loc;
    let h = pageHead('Find home');
    h += '<div class="who">' + ['tokyo', 'shibu', 'nagano', 'niseko', 'sapporo', 'tokyo2'].map(k => '<button class="' + (k === key ? 'on' : '') + '" data-a="homeT" data-v="' + k + '">' + esc(C.stay(k).short) + (k === auto ? ' · tonight' : '') + '</button>').join('') + '</div>';
    if (s.lat == null) return h + '<p class="empty">No address yet for this stay.</p><section class="card"><div class="ch static">' + ic('pin') + '<div><b>At the hotel now?</b><small>Stand at the door and pin it, so the arrow can bring you back.</small></div><button class="pill" data-a="pinHere" data-k="' + key + '">Pin here</button></div></section>';
    let dist = null, br = null;
    if (loc) { dist = C.distKm(loc, s); br = C.bearing(loc, s); }
    const head = R.heading;
    const rot = br == null ? 0 : (head == null ? br : br - head);
    const nightP = C.parts(now, 'JST'), night = nightP.h >= 22 || nightP.h < 5;
    h += '<section class="compass"><div class="dial" id="dial" style="--n:' + (head == null ? 0 : -head) + 'deg"><span class="nmark">N</span></div>' +
      '<div class="arrow' + (br == null ? ' wait' : '') + '" id="arrow" style="transform:rotate(' + rot.toFixed(1) + 'deg)"><svg viewBox="0 0 100 100"><path d="M50 6 74 78 50 64 26 78z"/></svg></div>' +
      '<div class="cinfo"><b id="cDist">' + (dist == null ? '…' : dist < 1 ? Math.round(dist * 1000) + ' m' : dist.toFixed(dist < 10 ? 2 : 0) + ' km') + '</b><small>' + esc(s.name) + '</small></div></section>';
    h += '<p class="fine center" id="cStat">' + (loc ? (S().fakeLoc && C.Clock.sim() ? 'Demo location: ' + esc(S().fakeLoc.n) : 'GPS ±' + Math.round(loc.acc || 0) + ' m') + (head == null ? ' · arrow shows direction relative to north (no compass yet)' : ' · compass on') : 'Waiting for GPS… works offline, no data needed.') + '</p>';
    if (R.locErr === 1) h += '<section class="card warnc">' + ic('warn') + '<p>Location is blocked for this app. On iPhone: Settings → Privacy & Security → Location Services → Safari Websites → While Using. Then come back here.</p></section>';
    if (WEB && head == null) h += '<div class="acts big"><button class="pill on" data-a="compassOn">' + ic('compass') + 'Turn on the compass</button></div>';
    if (dist != null) {
      const walk = dist * 1.25 / 4.8 * 60, fare = C.taxiYen(dist, night);
      h += '<section class="card stats"><div><b>' + (walk < 90 ? Math.round(walk) + ' min' : '—') + '</b><small>walk</small></div><div><b>≈ ' + C.yen(fare) + '</b><small>taxi' + (night ? ' (late-night rate)' : '') + '</small></div><div><b>≈ ' + C.yen(fare / 3) + '</b><small>each, split 3</small></div></section>';
    }
    h += '<div class="acts big"><button class="pill" data-a="url" data-u="' + esc(dirUrl(s.lat + ',' + s.lng, 'walking')) + '">' + ic('move') + 'Walk in Maps</button><button class="pill" data-a="url" data-u="' + esc(dirUrl(s.lat + ',' + s.lng, 'transit')) + '">' + ic('train') + 'Transit</button><button class="pill" data-a="taxi" data-k="' + key + '">' + ic('taxi') + 'Taxi card</button></div>';
    if (C.Clock.sim()) h += '<h3 class="sec">Demo: pretend you\'re at</h3><div class="quick">' + T.demoSpots.map((p, i) => '<button class="pill" data-a="fake" data-i="' + i + '">' + ic('pin') + esc(p.n) + '</button>').join('') + '</div>';
    h += '<section class="card"><div class="ch static">' + ic('pin') + '<div><b>Staying somewhere else?</b><small>Stand at your hotel and pin it, so the arrow points to the right door.</small></div><button class="pill" data-a="pinHere" data-k="' + key + '">Pin here</button></div></section>';
    h += '<p class="fine">Taxi estimate uses Tokyo meter rates (¥500 start, then ¥100 per 255 m, +20% from 22:00 to 05:00) and a 1.3× road factor. Rough guide only.</p>';
    return h;
  }

  function vPhrases() {
    let h = pageHead('Phrasebook') + '<p class="lead">Tap a phrase to hear it in Japanese. "Show" puts it on screen in big type, at full brightness, for someone to read.</p>';
    T.phrases.forEach(g => {
      const open = R.phraseOpen === g.c;
      h += '<section class="card"><button class="ch" data-a="phr" data-v="' + esc(g.c) + '"><div><b>' + esc(g.c) + '</b><small>' + g.items.length + ' phrases</small></div>' + ic(open ? 'x' : 'chev', 'sm') + '</button>' +
        (open ? '<ul class="phr">' + g.items.map(p => '<li><button class="ps" data-a="say" data-jp="' + esc(p[1]) + '"><small>' + esc(p[0]) + '</small><b class="jp">' + esc(p[1]) + '</b><i>' + esc(p[2]) + '</i></button><button class="ib" data-a="show" data-jp="' + esc(p[1]) + '" data-en="' + esc(p[0]) + '" data-ro="' + esc(p[2]) + '">' + ic('expand') + '</button></li>').join('') + '</ul>' : '') + '</section>';
    });
    h += IOS ? '<p class="fine">No sound? Turn off silent mode. If it still won\'t speak, add a Japanese voice in Settings → Accessibility → Spoken Content → Voices.</p>'
      : WEB ? '<p class="fine">No sound? This browser may not have a Japanese voice; use Show instead.</p>'
      : '<p class="fine">No sound? Japanese voice data may need installing: <button class="link" data-a="tts">open text-to-speech settings</button>.</p>';
    return h;
  }

  function vOnsen() {
    const st = S().stamps, n9 = T.baths.filter(b => b.n <= 9 && st[b.n]).length;
    let h = pageHead('Onsen & the nine baths');
    h += '<section class="card stampbig"><div class="sb-h"><b>九湯めぐり · Kyūtō-meguri</b><small>' + (n9 === 9 ? (st[10] ? '満願成就: wish granted. All ten stamps.' : 'All nine! Climb to Shibu Takayakushi for the last stamp.') : n9 + ' of 9 baths. Your ryokan key opens every door, 6:00–22:00.') + '</small></div><div class="sgrid">' +
      T.baths.map(b => '<button class="stp' + (st[b.n] ? ' on' : '') + (b.n === 10 ? ' fin' : '') + '" data-a="stamp" data-v="' + b.n + '"><span class="seal">' + (st[b.n] ? '<b class="jp">' + (b.n === 9 ? '大' : b.n === 10 ? '薬' : esc(b.jp[0])) + '</b>' : b.n === 10 ? '薬' : b.n) + '</span><b class="jp">' + esc(b.jp) + '</b><small>' + esc(b.en) + (st[b.n] ? ' · ' + esc(st[b.n]) : '') + '</small></button>').join('') +
      '</div><p class="fine">Buy a kigan tenugui (prayer towel) at the ryokan and stamp it at each bath too.</p></section>';
    h += '<section class="card"><div class="ch static">' + ic('onsen') + '<div><b>Onsen rules</b><small>Seven lines</small></div></div><ol class="steps">' + T.onsenRules.map(r => '<li>' + esc(r) + '</li>').join('') + '</ol></section>';
    return h;
  }

  function vFood() {
    let h = pageHead('Food quests');
    const regs = [['tokyo', 'Tokyo'], ['nagano', 'Nagano'], ['hokkaido', 'Hokkaido']];
    regs.forEach(r => {
      const l = T.food.filter(f => f.r === r[0]);
      h += '<h3 class="sec">' + r[1] + ' · ' + l.filter(f => S().food[f.id]).length + '/' + l.length + '</h3><section class="card"><ul class="checks">' + l.map(f => '<li class="' + (S().food[f.id] ? 'done' : '') + '" data-a="food" data-id="' + f.id + '"><span class="cb">' + ic('check') + '</span>' + esc(f.n) + '<small class="r">' + C.dateLbl(C.abs(C.dayById(f.d).date, '12:00', 'JST'), 'JST').replace(/^\w+ /, '') + '</small></li>').join('') + '</ul></section>';
    });
    return h;
  }

  function vBookings() {
    let h = pageHead('Bookings') + '<p class="lead">Confirmation codes show up on the matching timeline items. Saved on this phone only.</p><section class="card"><ul class="form">';
    T.bookings.forEach(b => {
      const d = b.d ? C.dayById(b.d) : null;
      h += '<li><label><span>' + esc(b.n) + (d ? ' <small>' + dayLbl(d) + '</small>' : '') + '</span><input data-in="book" data-k="' + b.k + '" value="' + esc(S().book[b.k] || '') + '" placeholder="Code or note" autocapitalize="characters"></label></li>';
    });
    return h + '</ul></section>';
  }

  function vEmergency() {
    let h = pageHead('Emergency') + '<section class="card"><ul class="calls">' + T.emergency.map(e => '<li data-a="url" data-u="tel:' + e.tel.replace(/[^0-9+]/g, '') + '"><b>' + esc(e.n) + '</b><span>' + ic('phone') + esc(e.tel) + '</span></li>').join('') + '</ul></section>';
    h += '<h3 class="sec">Hotels</h3><section class="card"><ul class="calls">' + ['tokyo', 'shibu', 'nagano', 'niseko', 'sapporo', 'tokyo2'].filter(k => C.stay(k).tel).map(k => { const s = C.stay(k); return '<li data-a="url" data-u="tel:' + s.tel.replace(/[^0-9]/g, '') + '"><b>' + esc(s.name) + '</b><span>' + ic('phone') + esc(s.tel) + '</span></li>'; }).join('') + '</ul></section>';
    const em = T.phrases.find(p => p.c === 'Emergency');
    h += '<h3 class="sec">Say it</h3><section class="card"><ul class="phr">' + em.items.map(p => '<li><button class="ps" data-a="say" data-jp="' + esc(p[1]) + '"><small>' + esc(p[0]) + '</small><b class="jp">' + esc(p[1]) + '</b><i>' + esc(p[2]) + '</i></button><button class="ib" data-a="show" data-jp="' + esc(p[1]) + '" data-en="' + esc(p[0]) + '" data-ro="' + esc(p[2]) + '">' + ic('expand') + '</button></li>').join('') + '</ul></section>';
    h += '<p class="fine">Lost something on a train: tell station staff the same day; things usually turn up. Missed connection: rebook in the United app first, it\'s faster than the desk.</p>';
    return h;
  }

  function vPacking() {
    return pageHead('Packing') + '<section class="card"><ul class="checks">' + T.packing.map((p, i) => '<li class="' + (S().pack[i] ? 'done' : '') + '" data-a="pack" data-i="' + i + '"><span class="cb">' + ic('check') + '</span>' + esc(p) + '</li>').join('') + '</ul></section>' +
      '<p class="fine">One mid-size suitcase and one daypack each. You carry your own bags the whole way (shinkansen, two domestic flights, the resort bus), so pack light. Only Mo\'s board is shipped: Haneda → Niseko on Dec 10, Niseko → Haneda T3 on Dec 16 (collect it Dec 20). Jetstar on Dec 18 allows 7 kg carry-on + 20 kg checked each.</p>';
  }

  function vNotes() {
    return pageHead('Bags & notes') + '<section class="card"><ul class="form"><li><label><span>Yamato tracking number(s)</span><input data-in="bagTrack" value="' + esc(S().bagTrack) + '" placeholder="e.g. 1234-5678-9012"></label></li>' +
      '<li><label><span>Coin lockers (station, number, code)</span><textarea data-in="lockers" rows="3" placeholder="Otaru Stn, locker 214, code 0420">' + esc(S().lockers) + '</textarea></label></li>' +
      '<li><label><span>Notes</span><textarea data-in="notes" rows="8" placeholder="Bar names, things to buy, who owes what…">' + esc(S().notes) + '</textarea></label></li></ul></section>';
  }

  function vSettings() {
    const inf = C.N.info();
    const next = C.buildReminders().slice(0, 4);
    let h = pageHead('Settings');
    h += '<h3 class="sec">This phone belongs to</h3><div class="who">' + [0, 1, 2].map(i => '<button class="' + (S().set.me === i ? 'on' : '') + '" data-a="me" data-v="' + i + '">' + chipP(i, 1) + P[i] + '</button>').join('') + '</div>';
    h += '<h3 class="sec">Look</h3><div class="who">' + [['auto', 'Match phone'], ['light', 'Light'], ['dark', 'Dark']].map(t => '<button class="' + (S().set.theme === t[0] ? 'on' : '') + '" data-a="theme" data-v="' + t[0] + '">' + t[1] + '</button>').join('') + '</div>';
    h += '<h3 class="sec">Exchange rate</h3><section class="card"><ul class="form"><li><label><span>Yen per C$1 (manual)</span><input data-in="rate" inputmode="decimal" value="' + S().set.rate + '"></label></li>' +
      '<li class="row" data-a="liveRate"><span>Use live rate when online' + (S().fx ? ' <small>(¥' + S().fx.rate + ')</small>' : '') + '</span><span class="sw' + (S().set.liveRate ? ' on' : '') + '"></span></li></ul></section>';
    if (WEB) h += '<h3 class="sec">Alerts</h3><section class="card">' + (IOS && !C.N.standalone ? installHint() : '') + calBtn() +
      '<p class="fine">iPhone web apps can\'t schedule their own notifications, so the alerts live in your Calendar. Import once; importing again adds duplicates.</p></section>';
    else h += '<h3 class="sec">Reminders</h3><section class="card"><ul class="form"><li class="row" data-a="remind"><span>Leave-by, morning brief and last-train notifications</span><span class="sw' + (S().set.remind ? ' on' : '') + '"></span></li>' +
      (C.N.has ? '<li class="row"><span>Notification permission: <b>' + (inf.notif ? 'on' : 'off') + '</b></span>' + (inf.notif ? '' : '<button class="pill" data-a="reqNotif">Allow</button>') + '</li>' +
        '<li class="row"><span>Exact-time alarms: <b>' + (inf.exact ? 'on' : 'off (may arrive up to 10 min early)') + '</b></span>' + (inf.exact ? '' : '<button class="pill" data-a="exact">Allow</button>') + '</li>' : '') +
      '<li class="row"><span>Send a test notification</span><button class="pill" data-a="testNotif">' + ic('bell') + 'Test</button></li></ul>' +
      '<p class="fine">Next up: ' + (next.length ? next.map(r => esc(r.title) + ' (' + C.dateLbl(r.at, tzAt(r.at)) + ' ' + hm(r.at, tzAt(r.at)) + ' ' + tzAt(r.at) + ')').join(' · ') : 'nothing scheduled') + '</p></section>';
    h += '<h3 class="sec">Data</h3><section class="card"><ul class="form"><li class="row"><span>Back up everything (expenses, codes, stamps) as text</span><button class="pill" data-a="export">' + ic('share') + 'Export</button></li>' +
      '<li><label><span>Restore from a backup</span><textarea id="imp" rows="2" placeholder="Paste backup text"></textarea></label><button class="pill" data-a="import">Restore</button></li>' +
      '<li class="row"><span>Erase all data on this phone</span><button class="pill danger" data-a="reset">Erase</button></li></ul></section>';
    h += '<p class="fine">' + esc(T.sources) + '</p><p class="fine">' + (WEB ? 'Home Screen web app · ' + (C.N.standalone ? 'installed' : 'running in the browser') : 'App ' + esc(inf.version || '') + ' · Android API ' + (inf.sdk || '–')) + '</p>';
    return h;
  }

  /* ================= DEMO ================= */
  function demoTargets() {
    return [{ id: 'pre', lbl: 'Now (pre-trip)' }].concat(DAYS.map(d => ({ id: d.id, lbl: C.dateLbl(C.abs(d.date, '12:00', d.tz), d.tz) }))).concat([{ id: 'post', lbl: 'After' }]);
  }
  function demoRange(id) {
    if (id === 'pre') return { s: Date.now(), e: C.tripStart - M, tz: 'ET' };
    if (id === 'post') return { s: C.tripEnd, e: C.tripEnd + 2 * C.DAY, tz: 'ET' };
    const d = C.dayById(id); return { s: d.start, e: d.end - M, tz: d.tz };
  }
  function vDemo(now) {
    const sim = C.Clock.sim();
    if (!R.demoDay) { const c = curDayId(now); R.demoDay = c === 'pre' || c === 'post' ? 'd2' : c; }
    const rg = demoRange(R.demoDay);
    if (R.demoMs == null || R.demoMs < rg.s || R.demoMs > rg.e) {
      const d = C.dayById(R.demoDay); const first = d && d.items.find(i => !i.o);
      R.demoMs = first ? Math.max(rg.s, first.at - 15 * M) : rg.s;
    }
    const steps = Math.max(1, Math.round((rg.e - rg.s) / (5 * M)));
    const v = Math.round((R.demoMs - rg.s) / (5 * M));
    let h = '<div class="ph"><h2>Demo · time machine</h2><p>Pick any moment of the trip and the whole app behaves as if it were then: Today, Find Home, reminders, the lot.</p></div>';
    h += '<section class="card demo-st ' + (sim ? 'on' : '') + '"><div class="ch static">' + ic(sim ? 'play' : 'clock') + '<div><b>' + (sim ? 'Simulating ' + C.dateLbl(now, rg.tz) + ' ' + hm(now, rg.tz) + ' ' + rg.tz : 'Live: real time') + '</b><small>' + (sim ? 'Speed ' + S().sim.speed + '× · tap Back to live to stop' : 'Real clock: ' + C.dateLbl(Date.now(), 'ET') + ' ' + hm(Date.now(), 'ET') + ' Toronto') + '</small></div>' + (sim ? '<button class="pill" data-a="live">Back to live</button>' : '') + '</div></section>';
    h += '<h3 class="sec">1 · Pick a day</h3><div class="daychips">' + demoTargets().map(t => '<button class="' + (R.demoDay === t.id ? 'on' : '') + '" data-a="dday" data-v="' + t.id + '">' + esc(t.lbl) + '</button>').join('') + '</div>';
    h += '<h3 class="sec">2 · Pick a time</h3><section class="card"><div class="tlabel"><b id="dmT">' + C.dateLbl(R.demoMs, rg.tz) + ' · ' + hm(R.demoMs, rg.tz) + '</b><small>' + rg.tz + '</small></div><input type="range" id="dmR" min="0" max="' + steps + '" value="' + v + '" data-in="dm">';
    const d = C.dayById(R.demoDay);
    if (d) h += '<div class="quick">' + d.items.filter(i => !i.o).map(i => '<button class="pill' + (Math.abs(i.at - 10 * M - R.demoMs) < M ? ' on' : '') + '" data-a="dmJump" data-v="' + (i.at - 10 * M) + '">' + hm(i.at, i.tzz) + ' ' + esc(i.ttl.length > 22 ? i.ttl.slice(0, 21) + '…' : i.ttl) + '</button>').join('') + '</div>';
    h += '</section>';
    h += '<h3 class="sec">3 · Pick a speed</h3><div class="who">' + [[1, 'Real time'], [60, '1 min/sec'], [600, '10 min/sec'], [3600, '1 h/sec']].map(s => '<button class="' + ((R.demoSpeed || 60) === s[0] ? 'on' : '') + '" data-a="dspd" data-v="' + s[0] + '">' + s[1] + '</button>').join('') + '</div>';
    h += '<button class="btn wide" data-a="runDemo">' + ic('play') + 'Run the simulation</button>';
    const rem = C.buildReminders(sim ? now : R.demoMs).slice(0, 5);
    h += '<section class="card"><div class="ch static">' + ic('bell') + '<div><b>' + (WEB ? 'Alerts from this moment' : 'Notifications you\'d get next') + '</b><small>' + (WEB ? 'On iPhone these come from the Calendar alarms (Kit → Settings).' : 'From the moment above. The real ones are scheduled on your phone.') + '</small></div></div><ul class="kv rem">' +
      rem.map(r => { const tz = tzAt(r.at); return '<li><span>' + C.dateLbl(r.at, tz).replace(/^\w+ /, '') + ' ' + hm(r.at, tz) + '</span><div><b>' + esc(r.title) + '</b><small>' + esc(r.body.split('\n')[0]) + '</small></div></li>'; }).join('') + '</ul>' +
      (WEB ? '' : '<div class="acts"><button class="pill" data-a="testNotif">' + ic('bell') + 'Send a real test notification</button></div>') + '</section>';
    h += '<section class="card"><div class="ch static">' + ic('compass') + '<div><b>Try Find Home</b><small>While simulating, Kit → Find home lets you pretend to stand at Shibuya, Golden Gai, Susukino and more.</small></div><button class="pill" data-a="page" data-p="home">Open</button></div></section>';
    return h;
  }

  /* ================= SHEETS ================= */
  function sheetHTML() {
    const s = R.sheet; if (!s) return '';
    if (s.type === 'show') {
      const sz = s.jp.length > 14 ? ' l3' : s.jp.length > 8 ? ' l2' : '';
      return '<div class="show" data-a="closeSheet"><div class="sh-in">' + (s.pre ? '<p class="jp pre">' + esc(s.pre) + '</p>' : '') + '<b class="jp big' + sz + '">' + esc(s.jp) + '</b>' + (s.sub ? '<p class="jp">' + esc(s.sub) + '</p>' : '') + (s.ro ? '<i>' + esc(s.ro) + '</i>' : '') + (s.en ? '<small>' + esc(s.en) + '</small>' : '') +
        '<div class="acts"><button class="pill" data-a="say" data-jp="' + esc(s.say || s.jp) + '">' + ic('speak') + 'Play</button><button class="pill" data-a="closeSheet">' + ic('x') + 'Close</button></div></div></div>';
    }
    if (s.type === 'exp') {
      const opts = [{ id: 'pre', l: 'Before the trip' }].concat(DAYS.map(d => ({ id: d.id, l: dayNum(d) + ' · ' + dayLbl(d) }))).concat([{ id: 'post', l: 'After' }]);
      return '<div class="sheet"><div class="sh-h"><b>Shared expense</b><button class="ib" data-a="closeSheet">' + ic('x') + '</button></div>' +
        '<div class="amt"><button class="cur" data-a="expCur">' + (s.cur === 'CAD' ? 'C$' : '¥') + '</button><input id="exAmt" inputmode="decimal" placeholder="0" value="' + esc(s.amt || '') + '" data-in="exAmt"></div>' +
        '<p class="fine center" id="exConv">' + (s.amt ? (s.cur === 'CAD' ? C.yen(s.amt * C.rate()) : C.cad(s.amt / C.rate(), 1)) : '&nbsp;') + '</p>' +
        '<input class="txt" id="exWhat" placeholder="What was it?" value="' + esc(s.what || '') + '" data-in="exWhat">' +
        '<div class="quick">' + ['Food', 'Drinks', 'Transport', 'Tickets', 'Stay', 'Shopping', 'Other'].map(c => '<button class="pill' + (s.cat === c ? ' on' : '') + '" data-a="exCat" data-v="' + c + '">' + c + '</button>').join('') + '</div>' +
        '<h4>Paid by</h4><div class="who">' + [0, 1, 2].map(i => '<button class="' + (s.by === i ? 'on' : '') + '" data-a="exBy" data-v="' + i + '">' + chipP(i, 1) + P[i] + '</button>').join('') + '</div>' +
        '<h4>Split between</h4><div class="who">' + [0, 1, 2].map(i => '<button class="' + (s.split.indexOf(i) >= 0 ? 'on' : '') + '" data-a="exSp" data-v="' + i + '">' + chipP(i, 1) + P[i] + '</button>').join('') + '</div>' +
        '<h4>Day</h4><select data-in="exDay">' + opts.map(o => '<option value="' + o.id + '"' + (o.id === s.day ? ' selected' : '') + '>' + esc(o.l) + '</option>').join('') + '</select>' +
        '<button class="btn wide" data-a="saveExp">' + ic('check') + 'Save</button></div>';
    }
    if (s.type === 'buy') {
      return '<div class="sheet"><div class="sh-h"><b>Purchase to take home</b><button class="ib" data-a="closeSheet">' + ic('x') + '</button></div>' +
        '<div class="amt"><span class="cur">¥</span><input id="byAmt" inputmode="numeric" placeholder="0" value="' + esc(s.amt || '') + '" data-in="byAmt"></div>' +
        '<input class="txt" placeholder="What is it?" value="' + esc(s.what || '') + '" data-in="byWhat">' +
        '<h4>Whose</h4><div class="who">' + [0, 1, 2].map(i => '<button class="' + (s.who === i ? 'on' : '') + '" data-a="byWho" data-v="' + i + '">' + chipP(i, 1) + P[i] + '</button>').join('') + '</div>' +
        '<ul class="form"><li class="row" data-a="byTf"><span>Bought tax-free (passport shown)</span><span class="sw' + (s.tf ? ' on' : '') + '"></span></li>' +
        '<li class="row" data-a="byHome"><span>Bringing it home (counts toward C$800)</span><span class="sw' + (s.home ? ' on' : '') + '"></span></li>' +
        '<li><label><span>Spirits, litres (700 ml = 0.7)</span><input inputmode="decimal" placeholder="0" value="' + esc(s.alc || '') + '" data-in="byAlc"></label></li></ul>' +
        '<button class="btn wide" data-a="saveBuy">' + ic('check') + 'Save</button></div>';
    }
    if (s.type === 'book') {
      const b = T.bookings.find(x => x.k === s.k);
      return '<div class="sheet"><div class="sh-h"><b>' + esc(b ? b.n : 'Booking') + '</b><button class="ib" data-a="closeSheet">' + ic('x') + '</button></div><input class="txt" id="bkIn" placeholder="Confirmation code" value="' + esc(S().book[s.k] || '') + '" autocapitalize="characters"><button class="btn wide" data-a="saveBook" data-k="' + s.k + '">' + ic('check') + 'Save</button></div>';
    }
    if (s.type === 'welcome' && WEB) {
      return '<div class="sheet"><div class="sh-h"><b>Japan \'26</b><button class="ib" data-a="closeSheet">' + ic('x') + '</button></div>' +
        '<p>The whole trip on your phone, and it works without data. From Dec 8 the Today screen follows the trip by itself: what\'s on now, what\'s next, when to leave.</p>' +
        '<h4>Whose phone is this?</h4><div class="who">' + [0, 1, 2].map(i => '<button class="' + (S().set.me === i ? 'on' : '') + '" data-a="me" data-v="' + i + '">' + chipP(i, 1) + P[i] + '</button>').join('') + '</div>' +
        (IOS && !C.N.standalone ? installHint() : '') + calBtn() +
        '<button class="btn ghost wide" data-a="welcomeDemo">' + ic('demo') + 'Show me a day in Tokyo</button></div>';
    }
    if (s.type === 'welcome') {
      return '<div class="sheet"><div class="sh-h"><b>Japan \'26 is ready</b><button class="ib" data-a="closeSheet">' + ic('x') + '</button></div>' +
        '<p>Everything you need is on this phone and works offline. From Dec 8 the Today screen follows the trip by itself: what\'s on now, what\'s next, when to leave.</p>' +
        '<ul class="steps"><li><b>Reminders:</b> leave-by alerts, a morning brief and last-train warnings arrive as notifications.</li><li><b>Demo:</b> the clock tab lets you live any moment of the trip right now.</li><li><b>Kit:</b> Find Home compass, taxi cards, a phrasebook that speaks Japanese.</li></ul>' +
        (C.N.has ? '<button class="btn wide" data-a="reqNotif">' + ic('bell') + 'Allow notifications</button>' : '') + '<button class="btn ghost wide" data-a="welcomeDemo">' + ic('demo') + 'Show me a day in Tokyo</button></div>';
    }
    return '';
  }

  /* ================= RENDER ================= */
  function viewKey() { return R.stack.length ? R.stack[R.stack.length - 1].p + ':' + (R.stack[R.stack.length - 1].id || '') : 'tab:' + R.tab; }
  function render(soft) {
    const now = C.Clock.now(), view = $('#view');
    const key = viewKey();
    if (soft && R.lastKey === key) R.scroll[key] = view.scrollTop;
    let h;
    const top = R.stack[R.stack.length - 1];
    if (top) {
      h = ({ day: () => vDayPage(top.id, now), home: () => vHome(now), phrases: vPhrases, onsen: vOnsen, food: vFood, bookings: vBookings, emergency: vEmergency, packing: vPacking, notes: vNotes, settings: vSettings })[top.p]();
    } else {
      h = ({ today: vToday, trip: vTrip, wallet: vWallet, kit: vKit, demo: vDemo })[R.tab](now);
    }
    view.innerHTML = '<div class="pad">' + h + '</div>';
    view.scrollTop = (soft || R.stack.length === 0) && R.scroll[key] != null && R.lastKey === key ? R.scroll[key] : (R.scroll[key] || 0);
    R.lastKey = key;
    $('#top').innerHTML = topHTML(now);
    $('#tabs').innerHTML = tabsHTML();
    $('#sheetWrap').innerHTML = sheetHTML();
    $('#sheetWrap').className = R.sheet ? 'on ' + R.sheet.type : '';
    R.lastRender = Date.now();
    const wantSensors = top && top.p === 'home';
    if (wantSensors && !R.sensors) { R.sensors = true; C.N.startLoc(); C.N.startCompass(); }
    if (!wantSensors && R.sensors) { R.sensors = false; C.N.stopLoc(); C.N.stopCompass(); }
  }
  function topHTML(now) {
    const sim = C.Clock.sim();
    return '<div class="tb"><div class="brand"><span class="sun"></span>JAPAN \'26</div><div class="clocks"><div><b data-clock="JST">' + hm(now, 'JST') + '</b><small>Japan</small></div><div><b data-clock="ET">' + hm(now, 'ET') + '</b><small>Toronto</small></div></div></div>' +
      (sim ? '<div class="simbar"><span>' + ic('demo') + 'DEMO · <b data-simlbl>' + C.dateLbl(now, 'JST') + '</b> · ' + (S().sim.speed === 0 ? 'paused' : S().sim.speed + '×') + '</span><button data-a="simPause">' + ic(S().sim.speed === 0 ? 'play' : 'pause') + '</button><button data-a="live">' + ic('x') + '</button></div>' : '');
  }
  function tabsHTML() {
    const t = [['today', 'today', 'Today'], ['trip', 'trip', 'Trip'], ['wallet', 'wallet', 'Money'], ['kit', 'kit', 'Kit'], ['demo', 'demo', 'Demo']];
    return t.map(x => '<button class="' + (R.tab === x[0] && !R.stack.length ? 'on' : R.tab === x[0] ? 'on sub' : '') + '" data-a="go" data-t="' + x[0] + '">' + ic(x[1]) + '<span>' + x[2] + '</span></button>').join('');
  }
  function timeDependent() {
    const top = R.stack[R.stack.length - 1];
    if (top) return top.p === 'day' || top.p === 'home';
    return R.tab === 'today' || R.tab === 'trip' || R.tab === 'demo';
  }
  function busy() { const a = document.activeElement; return R.sheet || (a && /INPUT|TEXTAREA|SELECT/.test(a.tagName)); }
  function tick() {
    const now = C.Clock.now();
    $$('[data-clock]').forEach(el => el.textContent = hm(now, el.dataset.clock));
    $$('[data-cd]').forEach(el => { const t = +el.dataset.cd; el.textContent = t > now ? C.dur(t - now) : 'now'; });
    const sl = $('[data-simlbl]'); if (sl) sl.textContent = C.dateLbl(now, 'JST') + ' ' + hm(now, 'JST');
    const mk = Math.floor(now / M);
    if (mk !== R.lastMin) {
      R.lastMin = mk;
      if (timeDependent() && !busy() && Date.now() - R.lastRender > 450) render(true);
    }
  }

  /* ---------- theme ---------- */
  function applyTheme() {
    const t = S().set.theme;
    const dark = t === 'dark' || (t === 'auto' && (C.N.has ? !!C.N.info().night : window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches));
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    C.N.bars(dark ? '#0b1220' : '#f5f2ec', !dark);
  }

  /* ================= ACTIONS ================= */
  function go(t) { R.tab = t; R.stack = []; R.sheet = null; render(); }
  function push(p, id) { R.stack.push({ p, id }); R.sheet = null; render(); $('#view').scrollTop = 0; }
  function back() {
    if (R.sheet) { closeSheet(); return true; }
    if (R.stack.length) { R.stack.pop(); render(); return true; }
    if (R.tab !== 'today') { go('today'); return true; }
    return false;
  }
  function openSheet(s) { R.sheet = s; if (s.type === 'show') { C.N.awake(true); C.N.bright(true); } render(true); }
  function closeSheet() { if (R.sheet && R.sheet.type === 'show') { C.N.awake(false); C.N.bright(false); } R.sheet = null; render(true); }
  function taxiCard(k) {
    const now = C.Clock.now();
    const key = k || C.stayFor(now) || 'tokyo', s = C.stay(key);
    if (!s.jp) { openSheet({ type: 'show', jp: s.name, sub: s.addr, en: s.sub }); return; }
    openSheet({ type: 'show', pre: 'このホテルまでお願いします', jp: s.jp, sub: s.addrJp + (s.tel ? '\n☎ ' + s.tel : ''), en: 'Please take us to this hotel · ' + s.name, say: 'このホテルまでお願いします。' + s.jp });
  }
  function dayText(d) {
    const st = C.stay(d.sleep);
    let t = (d.n > 0 ? 'Day ' + d.n + ' · ' : '') + dayLbl(d) + ' — ' + d.title + '\nSleep: ' + st.name + '\n\n';
    d.items.forEach(i => { t += (i.a ? '~' : '') + hm(i.at, i.tzz) + (i.tzz !== d.tz ? ' ' + i.tzz : '') + '  ' + i.ttl + (i.o ? ' (option)' : '') + (i.cost ? ' · ' + i.cost : '') + '\n'; });
    if (d.regroup) t += '\nIf we split up: ' + d.regroup.n;
    if (d.nightKit && /^≈/.test(d.nightKit.last)) t += '\nLast trains ' + d.nightKit.last;
    return t;
  }
  function newExpense(o) {
    const now = C.Clock.now();
    openSheet(Object.assign({ type: 'exp', cur: 'JPY', amt: '', what: '', cat: 'Food', by: S().set.me || 0, split: [0, 1, 2], day: curDayId(now) }, o || {}));
  }

  const ACT = {
    go: el => go(el.dataset.t),
    back: () => back(),
    page: el => push(el.dataset.p),
    day: el => push('day', el.dataset.id),
    wallet: el => { R.wseg = el.dataset.v; go('wallet'); },
    seg: el => { S().seg[el.dataset.id] = el.dataset.v; C.save(); render(true); },
    wseg: el => { R.wseg = el.dataset.v; render(); },
    tl: (el, e) => { if (e.target.closest('.acts')) return; const k = el.dataset.key; if (R.exp.has(k)) R.exp.delete(k); else R.exp.add(k); render(true); },
    tog: el => { const k = el.dataset.k; if (R.exp.has(k)) R.exp.delete(k); else R.exp.add(k); render(true); },
    url: el => C.N.open(el.dataset.u),
    say: el => { C.N.speak(el.dataset.jp, 'ja-JP'); C.N.vibrate(15); },
    show: el => openSheet({ type: 'show', jp: el.dataset.jp, ro: el.dataset.ro, en: el.dataset.en }),
    showPlace: el => openSheet({ type: 'show', jp: el.dataset.jp, en: el.dataset.n }),
    closeSheet: (el, e) => { if (el.classList.contains('show') && e.target.closest('.acts') && !e.target.closest('[data-a="closeSheet"]')) return; closeSheet(); },
    taxi: el => taxiCard(el.dataset.k),
    tts: () => C.N.ttsSettings(),
    prep: el => { const id = el.dataset.id; S().prep[id] = !S().prep[id]; C.save(); C.scheduleReminders(); C.N.vibrate(10); render(true); },
    dprep: el => { const m = S().dprep[el.dataset.id] = S().dprep[el.dataset.id] || {}; m[el.dataset.i] = !m[el.dataset.i]; C.save(); render(true); },
    pack: el => { S().pack[el.dataset.i] = !S().pack[el.dataset.i]; C.save(); render(true); },
    food: el => { S().food[el.dataset.id] = !S().food[el.dataset.id]; C.save(); C.N.vibrate(10); render(true); },
    stamp: el => {
      const n = +el.dataset.v, now = C.Clock.now();
      if (S().stamps[n]) delete S().stamps[n]; else { S().stamps[n] = hm(now, 'JST'); C.N.vibrate(40); }
      C.save(); render(true);
      if (T.baths.filter(b => b.n <= 9 && S().stamps[b.n]).length === 9 && n <= 9 && S().stamps[n]) toast('All nine baths! Now the temple for the last stamp.');
    },
    sharePrep: () => {
      const open = T.prepList.filter(p => !S().prep[p.id]);
      C.N.share('Japan trip: open tasks (' + open.length + ')\n\n' + open.map(p => '• ' + p.who.map(i => P[i]).join('/') + ': ' + p.t + ' (by ' + C.dateLbl(C.abs(p.due, '12:00', 'ET'), 'ET') + ')').join('\n'));
    },
    shareDay: el => C.N.share(dayText(C.dayById(el.dataset.id))),
    shareSplit: () => {
      const b = balances(), tx = settle(b);
      C.N.share('Japan trip money\n' + b.map((x, i) => P[i] + ': paid ' + C.yen(x.paid) + ', share ' + C.yen(x.owe)).join('\n') + '\n\nSettle up:\n' + (tx.length ? tx.map(t => P[t.from] + ' → ' + P[t.to] + ' ' + C.yen(t.amt) + ' (' + C.cad(C.y2c(t.amt), 1) + ')').join('\n') : 'All square'));
    },
    addExp: el => newExpense(el && el.dataset && el.dataset.what ? { what: el.dataset.what, amt: el.dataset.yen || '', day: el.dataset.day } : null),
    expCur: () => { R.sheet.cur = R.sheet.cur === 'CAD' ? 'JPY' : 'CAD'; render(true); },
    exCat: el => { R.sheet.cat = el.dataset.v; render(true); },
    exBy: el => { R.sheet.by = +el.dataset.v; render(true); },
    exSp: el => { const v = +el.dataset.v, s = R.sheet.split, i = s.indexOf(v); if (i >= 0) { if (s.length > 1) s.splice(i, 1); } else s.push(v); s.sort(); render(true); },
    saveExp: () => {
      const s = R.sheet, amt = parseFloat(String(s.amt).replace(/,/g, ''));
      if (!(amt > 0)) { toast('Enter an amount'); return; }
      const y = s.cur === 'CAD' ? Math.round(amt * C.rate()) : Math.round(amt);
      S().exp.push({ id: Date.now().toString(36), at: C.Clock.now(), day: s.day, yen: y, orig: s.cur === 'CAD' ? 'C$' + amt : null, what: s.what || s.cat, cat: s.cat, by: s.by, split: s.split.slice() });
      C.save(); R.sheet = null; toast('Saved · ' + C.yen(y)); render(true);
    },
    delExp: el => { if (!armed(el)) return; S().exp = S().exp.filter(e => e.id !== el.dataset.id); C.save(); render(true); },
    addBuy: () => openSheet({ type: 'buy', amt: '', what: '', who: S().set.me || 0, tf: true, home: true, alc: '' }),
    byWho: el => { R.sheet.who = +el.dataset.v; render(true); },
    byTf: () => { R.sheet.tf = !R.sheet.tf; render(true); },
    byHome: () => { R.sheet.home = !R.sheet.home; render(true); },
    saveBuy: () => {
      const s = R.sheet, y = Math.round(parseFloat(String(s.amt).replace(/,/g, '')));
      if (!(y > 0)) { toast('Enter the price in yen'); return; }
      S().buys.push({ id: Date.now().toString(36), at: C.Clock.now(), what: s.what || 'Purchase', yen: y, who: s.who, tf: !!s.tf, home: !!s.home, alc: parseFloat(s.alc) || 0 });
      C.save(); C.scheduleReminders(); R.sheet = null; toast('Logged'); render(true);
    },
    delBuy: el => { if (!armed(el)) return; S().buys = S().buys.filter(e => e.id !== el.dataset.id); C.save(); render(true); },
    book: el => openSheet({ type: 'book', k: el.dataset.k }),
    saveBook: el => { S().book[el.dataset.k] = ($('#bkIn').value || '').trim(); C.save(); R.sheet = null; render(true); },
    cvq: el => { R.cvY = el.dataset.v; R.cvC = (el.dataset.v / C.rate()).toFixed(2); render(true); },
    bp: el => { R.budgetP = +el.dataset.v; render(true); },
    phr: el => { R.phraseOpen = R.phraseOpen === el.dataset.v ? null : el.dataset.v; render(true); },
    homeT: el => { R.homeTarget = el.dataset.v; render(true); },
    fake: el => { const p = T.demoSpots[+el.dataset.i]; S().fakeLoc = { lat: p.lat, lng: p.lng, acc: 5, n: p.n }; C.save(); render(true); },
    pinHere: el => {
      const loc = (C.Clock.sim() && S().fakeLoc) ? S().fakeLoc : R.loc;
      if (!loc) { toast('No GPS fix yet'); return; }
      if (!armed(el)) return;
      S().stays[el.dataset.k] = Object.assign(S().stays[el.dataset.k] || {}, { lat: loc.lat, lng: loc.lng }); C.save(); toast('Pinned'); render(true);
    },
    me: el => { S().set.me = +el.dataset.v; C.save(); render(true); },
    theme: el => { S().set.theme = el.dataset.v; C.save(); applyTheme(); render(true); },
    liveRate: () => { S().set.liveRate = !S().set.liveRate; C.save(); if (S().set.liveRate) C.refreshFx().then(ok => ok && render(true)); render(true); },
    remind: () => { S().set.remind = !S().set.remind; C.save(); C.scheduleReminders(); render(true); },
    reqNotif: () => { C.N.reqNotif(); if (R.sheet && R.sheet.type === 'welcome') closeSheet(); },
    exact: () => C.N.exactSettings(),
    compassOn: () => { C.N.compassNeedsTap = false; C.N.stopCompass(); C.N.startCompass(); toast('Hold the phone flat and turn slowly'); },
    testNotif: () => { C.N.notifyNow('Japan \'26 test', 'Reminders work. You\'ll get leave-by alerts, a morning brief and last-train warnings.'); toast('Sent'); },
    export: () => C.N.share(JSON.stringify({ app: 'jt26', v: 1, data: { exp: S().exp, buys: S().buys, prep: S().prep, pack: S().pack, dprep: S().dprep, stamps: S().stamps, food: S().food, book: S().book, notes: S().notes, bagTrack: S().bagTrack, lockers: S().lockers, stays: S().stays, set: S().set } })),
    import: () => {
      try {
        const j = JSON.parse($('#imp').value); if (j.app !== 'jt26') throw 0;
        Object.assign(C.S, j.data); C.save(true); C.scheduleReminders(); toast('Restored'); render(true);
      } catch { toast('That doesn\'t look like a backup'); }
    },
    reset: el => { if (!armed(el)) return; C.resetAll(); seedBookings(); C.scheduleReminders(); toast('Erased'); go('today'); },
    dday: el => { R.demoDay = el.dataset.v; R.demoMs = null; render(true); },
    dmJump: el => { R.demoMs = +el.dataset.v; if (C.Clock.sim()) C.Clock.setSim(R.demoMs, S().sim.speed); render(true); },
    dspd: el => { R.demoSpeed = +el.dataset.v; if (C.Clock.sim()) C.Clock.setSpeed(R.demoSpeed); render(true); },
    runDemo: () => { C.Clock.setSim(R.demoMs, R.demoSpeed || 60); R.lastMin = -1; go('today'); toast('Simulating · tap ✕ in the purple bar to stop'); },
    welcomeDemo: () => { R.demoDay = 'd2'; R.demoMs = C.abs('2026-12-11', '15:20', 'JST'); R.demoSpeed = 60; R.sheet = null; ACT.runDemo(); },
    live: () => { C.Clock.live(); R.lastMin = -1; toast('Back to real time'); render(); },
    simPause: () => { C.Clock.setSpeed(S().sim.speed === 0 ? (R.demoSpeed || 60) : 0); render(true); }
  };

  function onInput(e) {
    const el = e.target, k = el.dataset && el.dataset.in; if (!k) return;
    const v = el.value;
    if (k === 'cvY') { R.cvY = v; const n = parseFloat(v.replace(/,/g, '')); R.cvC = n ? (n / C.rate()).toFixed(2) : ''; $('#cvC').value = R.cvC; $('#cvSplit').textContent = n ? 'Split three ways: ' + C.yen(n / 3) + ' / ' + C.cad(n / 3 / C.rate(), 1) + ' each' : ''; }
    else if (k === 'cvC') { R.cvC = v; const n = parseFloat(v.replace(/,/g, '')); R.cvY = n ? Math.round(n * C.rate()) + '' : ''; $('#cvY').value = R.cvY; $('#cvSplit').textContent = n ? 'Split three ways: ' + C.yen(n * C.rate() / 3) + ' each' : ''; }
    else if (k === 'exAmt') { R.sheet.amt = v; const n = parseFloat(v.replace(/,/g, '')); $('#exConv').innerHTML = n ? (R.sheet.cur === 'CAD' ? C.yen(n * C.rate()) : C.cad(n / C.rate(), 1)) : '&nbsp;'; }
    else if (k === 'exWhat') R.sheet.what = v;
    else if (k === 'exDay') R.sheet.day = v;
    else if (k === 'byAmt') R.sheet.amt = v;
    else if (k === 'byWhat') R.sheet.what = v;
    else if (k === 'byAlc') R.sheet.alc = v;
    else if (k === 'book') { S().book[el.dataset.k] = v.trim(); C.save(); }
    else if (k === 'bagTrack' || k === 'lockers' || k === 'notes') { S()[k] = v; C.save(); }
    else if (k === 'rate') { const n = parseFloat(v); if (n > 50 && n < 300) { S().set.rate = n; C.save(); } }
    else if (k === 'dm') {
      const rg = demoRange(R.demoDay); R.demoMs = rg.s + (+v) * 5 * M;
      $('#dmT').textContent = C.dateLbl(R.demoMs, rg.tz) + ' · ' + hm(R.demoMs, rg.tz);
      if (C.Clock.sim()) C.Clock.setSim(R.demoMs, S().sim.speed);
    }
  }

  function seedBookings() { T.bookings.forEach(b => { if (b.code && !S().book[b.k]) S().book[b.k] = b.code; }); C.save(); }

  /* ================= native callbacks ================= */
  window.App = {
    back: () => back(),
    onLocation(lat, lng, acc) {
      R.loc = { lat, lng, acc }; R.locErr = null;
      const top = R.stack[R.stack.length - 1];
      if (top && top.p === 'home' && !(C.Clock.sim() && S().fakeLoc)) {
        if (!R._locT || Date.now() - R._locT > 3000) { R._locT = Date.now(); render(true); }
      }
    },
    onHeading(deg) {
      R.heading = deg;
      const a = $('#arrow'), dl = $('#dial');
      if (!a) return;
      const now = C.Clock.now(), key = R.homeTarget || C.stayFor(now) || 'tokyo', s = C.stay(key);
      const loc = (C.Clock.sim() && S().fakeLoc) ? S().fakeLoc : R.loc;
      if (dl) dl.style.setProperty('--n', (-deg).toFixed(1) + 'deg');
      if (loc && s.lat != null) {
        const br = C.bearing(loc, s);
        let target = br - deg, prev = R._rot == null ? target : R._rot;
        let diff = ((target - prev) % 360 + 540) % 360 - 180; R._rot = prev + diff * 0.35;
        a.style.transform = 'rotate(' + R._rot.toFixed(1) + 'deg)';
      }
    },
    onPermission() { render(true); },
    onLocError(code) { R.locErr = code; render(true); },
    toast: m => toast(m),
    onTts(st) { if (st === 'missing') toast('Japanese voice not installed. Kit → Phrasebook → text-to-speech settings.'); },
    onResume() { applyTheme(); R.lastMin = -1; tick(); C.scheduleReminders(); refreshLive(); },
    render: () => render(true)
  };

  async function refreshLive() {
    const now = C.Clock.now(), ph = C.phase(now);
    const keys = new Set(['tokyo', 'niseko']);
    if (ph.kind === 'day') keys.add(ph.day.place);
    let changed = false;
    for (const k of keys) { if (await C.refreshWx(k)) changed = true; }
    if (await C.refreshFx()) changed = true;
    if (changed && !busy()) render(true);
  }

  /* ================= boot ================= */
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-a]'); if (!el) return;
    const f = ACT[el.dataset.a]; if (!f) return;
    e.preventDefault(); f(el, e);
  });
  document.addEventListener('input', onInput);
  document.addEventListener('change', onInput);
  if (window.matchMedia) { const mq = matchMedia('(prefers-color-scheme: dark)'); if (mq.addEventListener) mq.addEventListener('change', applyTheme); }

  if (WEB && 'serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => { }));
  }
  seedBookings();
  applyTheme();
  render();
  if (S().firstRun) { S().firstRun = false; C.save(); openSheet({ type: 'welcome' }); }
  C.scheduleReminders();
  setInterval(tick, 250);
  setTimeout(refreshLive, 1200);
  setInterval(refreshLive, 30 * M);
})();
