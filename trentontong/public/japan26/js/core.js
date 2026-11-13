/* Core: time, trip calendar, storage, sun, geo, native bridge, weather, reminders */
(function () {
  'use strict';
  const T = window.TRIP;
  const OFF = { JST: 9, ET: -5 }; // December: no DST anywhere on this route
  const H = 3600e3, M = 60e3, DAY = 864e5;
  const pad = n => (n < 10 ? '0' : '') + n;
  const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  /* ---------- time ---------- */
  function abs(d, t, tz) {
    const [y, m, dd] = d.split('-').map(Number);
    const [hh, mm] = t.split(':').map(Number);
    return Date.UTC(y, m - 1, dd, hh, mm) - OFF[tz] * H;
  }
  const absO = o => abs(o.d, o.t, o.tz);
  function parts(ms, tz) {
    const x = new Date(ms + OFF[tz] * H);
    return { y: x.getUTCFullYear(), mo: x.getUTCMonth() + 1, d: x.getUTCDate(), h: x.getUTCHours(), mi: x.getUTCMinutes(), s: x.getUTCSeconds(), dow: x.getUTCDay() };
  }
  const hm = (ms, tz) => { const p = parts(ms, tz); return pad(p.h) + ':' + pad(p.mi); };
  const dateLbl = (ms, tz) => { const p = parts(ms, tz); return DOW[p.dow] + ' ' + MON[p.mo - 1] + ' ' + p.d; };
  const ymd = (ms, tz) => { const p = parts(ms, tz); return p.y + '-' + pad(p.mo) + '-' + pad(p.d); };
  function addDays(ds, n) { const [y, m, d] = ds.split('-').map(Number); const x = new Date(Date.UTC(y, m - 1, d + n)); return x.getUTCFullYear() + '-' + pad(x.getUTCMonth() + 1) + '-' + pad(x.getUTCDate()); }
  function dur(ms, short) {
    const neg = ms < 0; ms = Math.abs(ms);
    const d = Math.floor(ms / DAY), h = Math.floor(ms % DAY / H), m = Math.floor(ms % H / M);
    let s;
    if (d > 0) s = d + 'd ' + h + 'h';
    else if (h > 0) s = h + 'h ' + pad(m) + 'm';
    else s = m + (short ? 'm' : ' min');
    return (neg ? '−' : '') + s;
  }

  /* ---------- calendar ---------- */
  const DAYS = T.days.map(d => Object.assign({}, d));
  DAYS.forEach(d => {
    d.start = abs(d.date, d.from, d.tz);
    d.items = d.items.map((it, j) => {
      const tz = it.tz || d.tz;
      const date = it.d || (it.nd ? addDays(d.date, 1) : d.date);
      const o = Object.assign({}, it, { tzz: tz, at: abs(date, it.t, tz), key: d.id + ':' + j });
      if (it.leave) o.leaveAt = abs(date, it.leave, tz);
      return o;
    }).sort((a, b) => a.at - b.at);
    const main = d.items.filter(x => !x.o);
    d.items.forEach(it => {
      if (it.dur) { it.end = it.at + it.dur * M; return; }
      const nx = main.find(x => x.at > it.at);
      it.end = nx ? nx.at : it.at + 90 * M;
    });
    if (d.flight) { d.flight.depAt = absO(d.flight.dep); d.flight.arrAt = absO(d.flight.arr); }
  });
  DAYS.forEach((d, i) => { d.end = i < DAYS.length - 1 ? DAYS[i + 1].start : absO(d.until); });
  const tripStart = DAYS[0].start, tripEnd = DAYS[DAYS.length - 1].end;
  const dayById = id => DAYS.find(d => d.id === id);
  function phase(now) {
    if (now < tripStart) return { kind: 'pre' };
    for (const d of DAYS) if (now >= d.start && now < d.end) return { kind: 'day', day: d };
    return { kind: 'post' };
  }
  // The stay you're heading back to tonight
  function stayFor(now) {
    const ph = phase(now);
    if (ph.kind !== 'day') return null;
    const d = ph.day;
    if (d.sleep === 'plane' || d.sleep === 'home') {
      // On the last day you're still near the Tokyo hotel until you leave
      if (d.id === 'd11') return 'tokyo';
      return null;
    }
    return d.sleep;
  }

  /* ---------- storage ---------- */
  const KEY = 'jt26.v1';
  const DEF = {
    exp: [], buys: [], prep: {}, pack: {}, dprep: {}, stamps: {}, food: {}, book: {}, notes: '', bagTrack: '', lockers: '',
    set: { rate: T.rate, theme: 'auto', remind: true, liveRate: true, me: 0 },
    stays: {}, sim: { on: false, base: 0, setAt: 0, speed: 1 }, fakeLoc: null, wx: {}, fx: null, seg: {}, firstRun: true
  };
  let S;
  try { S = JSON.parse(localStorage.getItem(KEY)) || {}; } catch { S = {}; }
  S = Object.assign(JSON.parse(JSON.stringify(DEF)), S);
  S.set = Object.assign({}, DEF.set, S.set || {});
  S.sim = Object.assign({}, DEF.sim, S.sim || {});
  let saveT = 0;
  function save(now) {
    clearTimeout(saveT);
    const w = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch { } };
    if (now) w(); else saveT = setTimeout(w, 150);
  }
  function resetAll() { S = JSON.parse(JSON.stringify(DEF)); save(true); }

  /* ---------- clock (real or simulated) ---------- */
  const Clock = {
    now() { const s = S.sim; return s.on ? s.base + (Date.now() - s.setAt) * s.speed : Date.now(); },
    sim() { return !!S.sim.on; },
    setSim(ms, speed) { S.sim = { on: true, base: ms, setAt: Date.now(), speed: speed == null ? (S.sim.speed || 1) : speed }; save(); },
    setSpeed(sp) { const n = this.now(); S.sim.base = n; S.sim.setAt = Date.now(); S.sim.speed = sp; save(); },
    live() { S.sim.on = false; S.fakeLoc = null; save(); }
  };

  /* ---------- stays (with user overrides) ---------- */
  function stay(k) {
    const base = T.stays[k]; if (!base) return null;
    return Object.assign({ key: k }, base, S.stays[k] || {});
  }

  /* ---------- money ---------- */
  function rate() { return (S.set.liveRate && S.fx && S.fx.rate) ? S.fx.rate : S.set.rate; }
  const yen = n => (n < -0.5 ? '−' : '') + '¥' + Math.abs(Math.round(n)).toLocaleString('en-US');
  const cad = (n, dp) => 'C$' + (dp ? n.toFixed(2) : Math.round(n).toLocaleString('en-US'));
  const y2c = n => n / rate();

  /* ---------- sun (after the NOAA / suncalc approach) ---------- */
  const rad = Math.PI / 180, J1970 = 2440588, J2000 = 2451545, e = rad * 23.4397;
  const toDays = ms => ms / DAY - 0.5 + J1970 - J2000;
  const fromJ = j => (j + 0.5 - J1970) * DAY;
  function sunTimes(dateStr, tz, lat, lng) {
    const noonLocal = abs(dateStr, '12:00', tz);
    const lw = rad * -lng, phi = rad * lat, d = toDays(noonLocal);
    const n = Math.round(d - 0.0009 - lw / (2 * Math.PI));
    const ds = 0.0009 + lw / (2 * Math.PI) + n;
    const Mx = rad * (357.5291 + 0.98560028 * ds);
    const C = rad * (1.9148 * Math.sin(Mx) + 0.02 * Math.sin(2 * Mx) + 0.0003 * Math.sin(3 * Mx));
    const L = Mx + C + rad * 102.9372 + Math.PI;
    const dec = Math.asin(Math.sin(e) * Math.sin(L));
    const Jnoon = J2000 + ds + 0.0053 * Math.sin(Mx) - 0.0069 * Math.sin(2 * L);
    function at(h) {
      const w = Math.acos((Math.sin(h * rad) - Math.sin(phi) * Math.sin(dec)) / (Math.cos(phi) * Math.cos(dec)));
      const a = 0.0009 + (w + lw) / (2 * Math.PI) + n;
      const Jset = J2000 + a + 0.0053 * Math.sin(Mx) - 0.0069 * Math.sin(2 * L);
      return { set: fromJ(Jset), rise: fromJ(Jnoon - (Jset - Jnoon)) };
    }
    const s = at(-0.833), g = at(6);
    return { rise: s.rise, set: s.set, noon: fromJ(Jnoon), goldenEve: g.set, goldenMorn: g.rise };
  }

  /* ---------- geo ---------- */
  function distKm(a, b) {
    const R = 6371, dLat = (b.lat - a.lat) * rad, dLng = (b.lng - a.lng) * rad;
    const s = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(s));
  }
  function bearing(a, b) {
    const y = Math.sin((b.lng - a.lng) * rad) * Math.cos(b.lat * rad);
    const x = Math.cos(a.lat * rad) * Math.sin(b.lat * rad) - Math.sin(a.lat * rad) * Math.cos(b.lat * rad) * Math.cos((b.lng - a.lng) * rad);
    return (Math.atan2(y, x) / rad + 360) % 360;
  }
  function taxiYen(km, nightTime) {
    const road = km * 1.3;
    let f = 500;
    if (road > 1.096) f += Math.ceil((road - 1.096) / 0.255) * 100;
    if (nightTime) f *= 1.2;
    return Math.round(f / 10) * 10;
  }

  /* ---------- native bridge (with browser fallbacks for testing) ---------- */
  const A = window.Android;
  const UA = navigator.userAgent || '';
  const IOS = /iPhone|iPad|iPod/.test(UA) || (/Macintosh/.test(UA) && navigator.maxTouchPoints > 1);
  const STANDALONE = !!(navigator.standalone || (window.matchMedia && matchMedia('(display-mode: standalone)').matches));
  let geoWatch = null, oriHandler = null, oriEvent = '', wakeLock = null, jaVoice = null;
  function pickVoice() { try { jaVoice = speechSynthesis.getVoices().find(v => /^ja[-_]JP/i.test(v.lang)) || null; } catch { } }
  if (!A && window.speechSynthesis) { pickVoice(); try { speechSynthesis.addEventListener('voiceschanged', pickVoice); } catch { } }
  const app = (fn, ...a) => { if (window.App && App[fn]) App[fn](...a); };
  const N = {
    has: !!A,
    platform: A ? 'android' : IOS ? 'ios' : 'web',
    standalone: STANDALONE,
    compassNeedsTap: false,
    info() { try { return A ? JSON.parse(A.info()) : { version: 'web', sdk: 0 }; } catch { return {}; } },
    speak(text, lang) {
      if (A) return A.speak(text, lang || 'ja-JP');
      if (!window.speechSynthesis) { app('toast', 'This browser can\'t speak. Show the phrase instead.'); return; }
      const u = new SpeechSynthesisUtterance(text); u.lang = lang || 'ja-JP'; u.rate = 0.85;
      if (!jaVoice) pickVoice(); if (jaVoice) u.voice = jaVoice;
      speechSynthesis.cancel(); speechSynthesis.speak(u);
    },
    open(url) {
      if (A) return A.openUrl(url);
      if (/^(tel|mailto|sms):/.test(url)) { location.href = url; return; }
      const w = window.open(url, '_blank');
      if (w) { try { w.opener = null; } catch { } } else location.href = url;
    },
    share(text) {
      if (A) return A.share(text);
      const copy = () => {
        if (navigator.clipboard) navigator.clipboard.writeText(text).then(() => app('toast', 'Copied. Paste it into the group chat.'), () => app('toast', 'Couldn\'t copy on this browser.'));
      };
      if (navigator.share) navigator.share({ text }).catch(e => { if (!e || e.name !== 'AbortError') copy(); });
      else copy();
    },
    vibrate(ms) { if (A) A.vibrate(ms || 20); else if (navigator.vibrate) try { navigator.vibrate(ms || 20); } catch { } },
    bars(color, lightBg) {
      if (A) return A.setBars(color, !!lightBg);
      const m = document.querySelector('meta[name=theme-color]'); if (m) m.setAttribute('content', color);
    },
    awake(on) {
      if (A) return A.keepAwake(!!on);
      try {
        if (on && navigator.wakeLock) navigator.wakeLock.request('screen').then(l => { wakeLock = l; }).catch(() => { });
        else if (!on && wakeLock) { wakeLock.release(); wakeLock = null; }
      } catch { }
    },
    bright(on) { if (A) A.maxBrightness(!!on); },
    schedule(list) { if (A) A.schedule(JSON.stringify(list)); },
    notifyNow(t, b) { if (A) A.notifyNow(t, b); },
    reqNotif() { if (A) A.requestNotif(); },
    exactSettings() { if (A) A.openExactAlarmSettings(); },
    ttsSettings() { if (A) A.openTtsSettings(); },
    startLoc() {
      if (A) return A.startLocation();
      if (navigator.geolocation && geoWatch == null) geoWatch = navigator.geolocation.watchPosition(
        p => app('onLocation', p.coords.latitude, p.coords.longitude, p.coords.accuracy),
        err => app('onLocError', err && err.code), { enableHighAccuracy: true, maximumAge: 5000 });
    },
    stopLoc() { if (A) return A.stopLocation(); if (geoWatch != null) { navigator.geolocation.clearWatch(geoWatch); geoWatch = null; } },
    // iPhone needs a tap to allow the compass; Android browsers just start
    startCompass() {
      if (A) return A.startCompass();
      if (oriHandler) return;
      const attach = () => {
        N.compassNeedsTap = false;
        if (IOS) {
          // webkitCompassHeading is from magnetic north; Japan's declination is about 8° west
          oriHandler = ev => { if (ev.webkitCompassHeading != null) app('onHeading', (ev.webkitCompassHeading - 8 + 360) % 360); };
          oriEvent = 'deviceorientation';
        } else {
          oriHandler = ev => { if (ev.alpha != null) app('onHeading', (360 - ev.alpha) % 360); };
          oriEvent = 'deviceorientationabsolute';
        }
        window.addEventListener(oriEvent, oriHandler);
      };
      const D = window.DeviceOrientationEvent;
      if (D && typeof D.requestPermission === 'function') {
        D.requestPermission().then(st => { if (st === 'granted') attach(); else { N.compassNeedsTap = true; app('render'); } })
          .catch(() => { N.compassNeedsTap = true; app('render'); });
      } else attach();
    },
    stopCompass() { if (A) return A.stopCompass(); if (oriHandler) { window.removeEventListener(oriEvent, oriHandler); oriHandler = null; } }
  };

  /* ---------- live data (only when online; silently falls back) ---------- */
  async function getJSON(url) {
    const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), 9000);
    try { const r = await fetch(url, { signal: ctl.signal }); if (!r.ok) throw new Error(r.status); return await r.json(); }
    finally { clearTimeout(t); }
  }
  async function refreshWx(key, force) {
    const p = T.places[key]; if (!p) return false;
    const c = S.wx[key];
    if (!force && c && Date.now() - c.at < 45 * M) return false;
    try {
      const j = await getJSON('https://api.open-meteo.com/v1/forecast?latitude=' + p.lat + '&longitude=' + p.lng +
        '&daily=weather_code,temperature_2m_max,temperature_2m_min,snowfall_sum,precipitation_probability_max&current=temperature_2m,weather_code&timezone=auto&forecast_days=16');
      S.wx[key] = { at: Date.now(), daily: j.daily, cur: j.current };
      save(); return true;
    } catch { return false; }
  }
  function wx(key, dateStr) {
    const c = S.wx[key], cl = T.climate[key] || {};
    if (c && c.daily && c.daily.time) {
      const i = c.daily.time.indexOf(dateStr);
      if (i >= 0) return {
        live: true, at: c.at, hi: Math.round(c.daily.temperature_2m_max[i]), lo: Math.round(c.daily.temperature_2m_min[i]),
        code: c.daily.weather_code[i], snow: c.daily.snowfall_sum ? c.daily.snowfall_sum[i] : 0,
        pop: c.daily.precipitation_probability_max ? c.daily.precipitation_probability_max[i] : null,
        prevSnow: i > 0 && c.daily.snowfall_sum ? c.daily.snowfall_sum[i - 1] : 0,
        cur: c.cur && c.cur.time && c.cur.time.slice(0, 10) === dateStr ? Math.round(c.cur.temperature_2m) : null
      };
    }
    return { live: false, hi: cl.hi, lo: cl.lo, note: cl.note };
  }
  function wxText(code) {
    if (code == null) return '';
    if (code === 0) return 'Clear'; if (code <= 2) return 'Partly cloudy'; if (code === 3) return 'Cloudy';
    if (code <= 48) return 'Fog'; if (code <= 57) return 'Drizzle'; if (code <= 67) return 'Rain';
    if (code <= 77) return 'Snow'; if (code <= 82) return 'Showers'; if (code <= 86) return 'Snow showers'; return 'Storms';
  }
  async function refreshFx() {
    if (!S.set.liveRate) return false;
    if (S.fx && Date.now() - S.fx.at < 6 * H) return false;
    try {
      const j = await getJSON('https://open.er-api.com/v6/latest/CAD');
      const r = j && j.rates && j.rates.JPY;
      if (r && r > 50 && r < 300) { S.fx = { rate: Math.round(r * 100) / 100, at: Date.now() }; save(); return true; }
    } catch { }
    return false;
  }

  /* ---------- reminders (real Android notifications) ---------- */
  function buildReminders(fromMs) {
    const out = [], from = fromMs == null ? Date.now() : fromMs;
    const add = (at, title, body, tag) => { if (at > from) out.push({ at, title, body, tag: tag || '' }); };
    // Prep deadlines (09:00 Toronto time on the due date)
    const byDue = {};
    T.prepList.forEach(p => { if (!S.prep[p.id]) (byDue[p.due] = byDue[p.due] || []).push(p); });
    Object.keys(byDue).forEach(due => {
      const list = byDue[due];
      add(abs(due, '09:00', 'ET'), list.length + ' trip task' + (list.length > 1 ? 's' : '') + ' due today', list.map(p => '• ' + p.t).join('\n'), 'prep');
    });
    add(abs('2026-12-08', '10:00', 'ET'), 'United check-in is open', 'UA 6157 + UA 803 leave Buffalo tomorrow at 10:00. Check in all three and add passports.', 'flight');
    DAYS.forEach(d => {
      if (d.n >= 2 || d.n === -1 || d.n === -2) {
        const first = d.items.find(i => i.fix && i.at >= abs(d.date, '06:00', d.tz));
        const w = wx(d.place, d.date);
        const temp = w.hi != null ? ' · ' + w.lo + '° to ' + w.hi + '°' : '';
        let body = d.sub + temp;
        if (first) body += '\nFirst move: ' + hm(first.at, first.tzz) + ' ' + first.ttl + (first.leaveAt ? ' (leave ' + hm(first.leaveAt, first.tzz) + ')' : '');
        const t = d.n === -1 ? '06:30' : (first && first.at < abs(d.date, '08:15', d.tz) ? '06:45' : '07:30');
        add(abs(d.date, t, d.tz), (d.n > 0 ? 'Day ' + d.n + ': ' : 'Travel day: ') + d.title, body, 'brief');
      }
      d.items.forEach(it => {
        if (!it.fix) return;
        if (it.k === 'flight') add(it.at - 75 * M, 'Boarding soon: ' + it.ttl, 'Departs ' + hm(it.at, it.tzz) + '. Be at the gate 30 minutes before.', 'go');
        else {
          const leave = it.leaveAt || it.at;
          add(leave - 20 * M, 'Leave in 20 min: ' + it.ttl, it.ttl + ' at ' + hm(it.at, it.tzz) + '. Leave by ' + hm(leave, it.tzz) + '.' + (it.cost ? ' ' + it.cost : ''), 'go');
        }
      });
      if (d.night && d.nightKit && /^≈/.test(d.nightKit.last)) add(abs(d.date, '23:45', d.tz), 'Last trains soon', 'Last trains leave ' + d.nightKit.last.replace('≈ ', 'about ') + '. ' + d.nightKit.taxi + '. Find Home and the taxi card are in Kit.', 'night');
    });
    add(abs('2026-12-13', '15:10', 'JST'), 'Monkey park closes at 16:00', 'Start the walk out by 15:15. The trail is icy and it gets dark early.', 'go');
    add(abs('2026-12-17', '20:00', 'JST'), 'Tonight: pack and book the taxi', 'Book tomorrow\'s 08:45 taxi to Kutchan Station at the front desk and check the train time to Yoichi.', 'go');
    add(abs('2026-12-19', '16:50', 'JST'), 'United check-in is open', 'UA 804 tomorrow 16:50 from Haneda T3. Check in all three.', 'flight');
    const tf = S.buys.filter(b => b.tf);
    add(abs('2026-12-20', '13:40', 'JST'), 'Tax refund before bag drop',
      tf.length ? tf.length + ' tax-free item(s), ' + yen(tf.reduce((s, b) => s + b.yen, 0)) + '. Show passport, receipts and goods at T3 before checking bags.' : 'At T3, do the tax-refund step before checking bags. Have passport, receipts and goods ready.', 'go');
    return out.sort((a, b) => a.at - b.at).slice(0, 150);
  }
  let schedT = 0;
  function scheduleReminders() {
    clearTimeout(schedT);
    schedT = setTimeout(() => N.schedule(S.set.remind ? buildReminders() : []), 400);
  }

  window.Core = {
    T, DAYS, OFF, H, M, DAY, pad, DOW, MON, abs, absO, parts, hm, dateLbl, ymd, addDays, dur, phase, dayById, stayFor, tripStart, tripEnd,
    get S() { return S; }, save, resetAll, Clock, stay, rate, yen, cad, y2c, sunTimes, distKm, bearing, taxiYen, N, refreshWx, wx, wxText, refreshFx,
    buildReminders, scheduleReminders
  };
})();
