/* Japan, December 2026 — trip data. All times are local to where you are (ET or JST). */
window.TRIP = {
  title: "Japan '26",
  people: ['Trenton', 'Moziah', 'AJ'],
  rate: 115, // yen per Canadian dollar (default; editable in Settings)
  meetAt: { d: '2026-12-08', t: '19:40', tz: 'ET' },
  wheelsUp: { d: '2026-12-09', t: '10:00', tz: 'ET' },
  tripEnd: { d: '2026-12-21', t: '04:00', tz: 'ET' },

  stays: {
    buf: {
      name: 'Buffalo hotel (to book)', short: 'Buffalo',
      sub: 'Not booked yet. Near BUF with a 24-hour desk and an airport shuttle is easiest: you arrive about 23:00 and fly at 10:00.',
      addr: 'Buffalo Niagara International Airport area, Cheektowaga, NY', jp: '', addrJp: '', tel: '',
      lat: null, lng: null, inT: '15:00', outT: '11:00', area: 'us'
    },
    tokyo: {
      name: 'J-ARC Akebonobashi', short: 'Akebonobashi', jp: 'J-ARC 曙橋',
      sub: 'Booked · apartment for 3, Arakichō (Shinjuku) · ≈ C$141 each for 2 nights. No reception: message the property 24 h+ before arrival for the entry instructions. Akebonobashi Stn 4 min, Yotsuya-sanchōme 7 min.',
      addr: '18-3 Arakichō, Shinjuku-ku, Tokyo 160-0007', addrJp: '東京都新宿区荒木町18-3',
      tel: '', lat: 35.6908, lng: 139.7208, inT: '15:00', outT: '10:00', area: 'tokyo'
    },
    shibu: {
      name: 'Koishiya Ryokan', short: 'Shibu Onsen', jp: '渋温泉 小石屋旅館',
      sub: 'To book · Japanese-style room for 3, room only · ≈ C$94 each. Your key opens all nine public baths. Free pick-up from Yudanaka 15:00–17:30 (reserve), and morning runs to the monkey park.',
      addr: '2277 Hirao, Yamanouchi-machi, Shimotakai-gun, Nagano 381-0401', addrJp: '長野県下高井郡山ノ内町平穏2277',
      tel: '0269-38-0311', lat: 36.7337, lng: 138.4328, inT: '16:00', outT: '10:00', area: 'nagano'
    },
    nagano: {
      name: 'Chisun Grand Nagano', short: 'Nagano City', jp: 'チサングランド長野',
      sub: 'To book · ≈ C$50 each. 5 min walk from Nagano Station; the desk holds bags before check-in. Confirm the room has 3 beds.',
      addr: '2-17-1 Minami-Chitose, Nagano 380-0823', addrJp: '長野県長野市南千歳2-17-1',
      tel: '026-264-6000', lat: 36.6448, lng: 138.1893, inT: '14:00', outT: '11:00', area: 'nagano'
    },
    niseko: {
      name: 'The Setsumon', short: 'Niseko Hirafu', jp: 'ザ・セツモン ニセコ',
      sub: 'To book · apartment in upper Hirafu, 2 min walk to the lifts · ≈ C$234 each for 2 nights. No front desk on site: get check-in instructions ahead, and book the free pick-up from the Welcome Centre.',
      addr: '191-54 Yamada (Niseko Hirafu 1-jō), Kutchan-chō, Abuta-gun, Hokkaido 044-0080', addrJp: '北海道虻田郡倶知安町字山田191-54',
      tel: '', lat: 42.8620, lng: 140.6962, inT: '15:00', outT: '10:00', area: 'hokkaido'
    },
    sapporo: {
      name: 'Quintessa Hotel Sapporo Susukino', short: 'Sapporo', jp: 'クインテッサホテル札幌すすきの',
      sub: 'To book · ≈ C$72 each for 2 nights. In Susukino: 5 min from Susukino Station, walk to Ōdōri and Nijō Market.',
      addr: 'Minami 6-jō Nishi 4-chōme 1-2, Chūō-ku, Sapporo 064-0806', addrJp: '北海道札幌市中央区南6条西4丁目1-2',
      tel: '011-530-6611', lat: 43.0527, lng: 141.3537, inT: '15:00', outT: '11:00', area: 'hokkaido'
    },
    tokyo2: {
      name: 'NAKANO WORLD HOTEL', short: 'Nakano', jp: '中野ワールドホテル',
      sub: 'To book · ≈ C$209 each for 2 nights. 5 min from Nakano Station, 3 min to Nakano Broadway. The desk can take Mo\'s board delivery: tell them it\'s coming.',
      addr: '5-55-6 Nakano, Nakano-ku, Tokyo 164-0001', addrJp: '東京都中野区中野5-55-6',
      tel: '', lat: 35.7082, lng: 139.6655, inT: '15:00', outT: '10:00', area: 'tokyo'
    },
    plane: { name: 'On the plane', short: 'In the air', sub: 'UA 803 · Dulles → Haneda', lat: null, lng: null },
    home: { name: 'Your own bed', short: 'Home', sub: 'Toronto', lat: null, lng: null }
  },

  // Where the weather and sun times come from
  places: {
    toronto: { n: 'Toronto', lat: 43.6532, lng: -79.3832, tz: 'ET' },
    buffalo: { n: 'Buffalo', lat: 42.9405, lng: -78.7322, tz: 'ET' },
    tokyo: { n: 'Tokyo', lat: 35.6895, lng: 139.6917, tz: 'JST' },
    shibu: { n: 'Shibu Onsen', lat: 36.7340, lng: 138.4322, tz: 'JST' },
    nagano: { n: 'Nagano', lat: 36.6486, lng: 138.1948, tz: 'JST' },
    niseko: { n: 'Niseko', lat: 42.8618, lng: 140.7106, tz: 'JST' },
    otaru: { n: 'Otaru', lat: 43.1907, lng: 140.9947, tz: 'JST' },
    sapporo: { n: 'Sapporo', lat: 43.0618, lng: 141.3545, tz: 'JST' }
  },

  climate: {
    toronto: { hi: 1, lo: -6, note: 'Cold; possible lake-effect snow in Buffalo.' },
    buffalo: { hi: 1, lo: -6, note: 'Lake-effect snow can delay morning flights.' },
    tokyo: { hi: 12, lo: 4, note: 'Dry and sunny. Sunset about 16:30.' },
    shibu: { hi: 5, lo: -4, note: 'Icy paths, maybe snow.' },
    nagano: { hi: 5, lo: -3, note: 'Cold and dry; snow possible.' },
    niseko: { hi: -2, lo: -9, note: 'Colder and windy up top.' },
    otaru: { hi: 2, lo: -4, note: 'Coastal snow showers. Sunset about 16:00.' },
    sapporo: { hi: 1, lo: -5, note: 'Snow on the ground; sidewalks are slick.' }
  },

  days: [
    {
      id: 'd-2', n: -2, date: '2026-12-08', tz: 'ET', from: '04:00',
      region: 'home', place: 'toronto', sleep: 'buf',
      title: 'Night bus to Buffalo', sub: 'Union Station 20:00 · border · Buffalo hotel',
      tagline: 'Nobody leaves a car in Buffalo: you fly home into Pearson.',
      plan: 0,
      transit: {
        title: 'Toronto → Buffalo', meta: '2 h 55 + border · booked, C$28.82 each',
        steps: [
          'Adirondack Trailways bus N813-D, Union Station (Front St W) 20:00 → Buffalo NFTA Metro Center 22:55. Booked on Omio; non-refundable, this bus only.',
          'Be there by 19:40. Bags: 1 carry-on + 2 checked (50 lb, 62 in. each). A board bag is longer than 62 in.: Mo, confirm with Trailways.',
          'US border: everyone off with bags, passports out.',
          'Metro Center → hotel: taxi or Uber, about 15 min.'
        ]
      },
      items: [
        { t: '19:40', k: 'meet', ttl: 'Meet at Union Station', txt: 'Front St West, with bags and passports. Arrive 20 min early.', pl: { n: 'Union Station, Toronto', q: 'Union Station Bus Terminal Toronto' } },
        { t: '20:00', k: 'bus', ttl: 'Trailways bus to Buffalo', txt: 'Adirondack Trailways N813-D, arrives Metro Center 22:55. Booked (Omio). ID at the border.', cost: 'paid · C$28.82 each', fix: 1, leave: '19:40', bk: 'bus' },
        { t: '21:00', a: 1, k: 'admin', ttl: 'US border', txt: 'Everyone off with their bags. Passports out. Can add up to an hour.' },
        { t: '22:55', k: 'move', ttl: 'Buffalo Metro Center → hotel', txt: 'Taxi or Uber, about 15 min. The hotel needs a 24-hour desk.', cost: '≈ US$20–30 total', bk: 'buffalo', pl: { n: 'NFTA Metro Center', q: 'NFTA Metropolitan Transportation Center Buffalo' } },
        { t: '23:30', k: 'sleep', ttl: 'Lights out', txt: 'Alarms for 06:45. Leave for BUF at 07:30.' }
      ],
      warn: 'The Buffalo hotel for tonight isn\'t booked yet. Pick one near BUF with an airport shuttle and a 24-hour desk; you arrive around 23:00.',
      go: [
        { n: 'Union Station Bus Terminal', q: 'Union Station Bus Terminal Toronto', why: 'Where the 20:00 Trailways bus leaves.' },
        { n: 'NFTA Metro Center, Buffalo', q: 'NFTA Metropolitan Transportation Center Buffalo', why: 'Bus arrives 22:55. Taxi to the hotel.' },
        { n: 'Buffalo Niagara Intl Airport (BUF)', q: 'Buffalo Niagara International Airport', why: 'UA 6157 at 10:00 tomorrow.' }
      ],
      buy: [
        { w: 'Bus (already paid)', p: 'C$28.82 each', note: 'Omio, non-refundable.' },
        { w: 'Taxi Metro Center → hotel', p: '≈ US$20–30 total' },
        { w: 'Buffalo hotel room', p: '≈ US$140–190', note: 'Not booked yet.' },
        { w: 'A few US dollars in cash', p: 'US$20–40', note: 'Taxis, shuttle tips, vending machines.' }
      ],
      do: [
        { ttl: 'Pack for a missed bag', txt: 'Two days of clothes, meds, chargers and cameras in carry-on. The Dulles connection is 52 minutes.' },
        { ttl: 'Border, fast', txt: 'Passports in hand before the bus stops. Declare food. It can take up to an hour.' }
      ],
      prep: ['Three passports', 'Power banks in carry-on', 'Ski jacket worn, not packed', 'United app open with all three on the booking', 'Visit Japan Web QR saved', 'Mo: board bag tagged with the Niseko hotel address'],
      regroup: { n: 'Union Station Bus Terminal', note: 'In Buffalo: the Metro Center taxi rank.' }
    },

    {
      id: 'd-1', n: -1, date: '2026-12-09', tz: 'ET', from: '04:00',
      region: 'air', place: 'buffalo', sleep: 'plane',
      title: 'The long day', sub: 'Buffalo → Dulles → Haneda',
      tagline: '14 h 30 over the top of the world.',
      plan: 2000,
      flight: { code: 'UA 803', from: 'IAD', to: 'HND', dep: { d: '2026-12-09', t: '12:20', tz: 'ET' }, arr: { d: '2026-12-10', t: '16:50', tz: 'JST' } },
      items: [
        { t: '07:30', k: 'bus', ttl: 'Hotel → BUF', txt: 'Taxi, Uber or hotel shuttle, about 15 min. Check in by about 09:00. Check bags through to Haneda.', cost: '2 checked bags included', fix: 1, leave: '07:30' },
        { t: '10:00', k: 'flight', ttl: 'UA 6157 Buffalo → Dulles', txt: 'Arrives 11:28. Sit near the front: you have 52 minutes at Dulles.', fix: 1, bk: 'united' },
        { t: '11:28', k: 'move', ttl: 'Dulles: 52-minute connection', txt: 'No customs here. Go straight to the UA 803 gate (AeroTrain between concourses). Look up the gate before landing.', pl: { n: 'Washington Dulles (IAD)', q: 'Washington Dulles International Airport' } },
        { t: '12:20', k: 'flight', ttl: 'UA 803 Dulles → Haneda', txt: '14 h 30. Stay awake for the first half, sleep the second half. Lands 16:50 Japan time on Thu Dec 10.', fix: 1, bk: 'united', dur: 870 }
      ],
      warn: 'UA 803 is the only Dulles–Haneda flight of the day. A snow or de-icing delay in Buffalo could cost you a day in Tokyo, and the shinkansen on Dec 12 is booked. Ask United about an earlier Buffalo → Dulles flight; free fallback is to be at BUF by 05:00 and ask to stand by.',
      go: [
        { n: 'Buffalo Niagara Intl Airport', q: 'Buffalo Niagara International Airport', why: 'UA 6157 at 10:00.' },
        { n: 'Washington Dulles (IAD)', q: 'Washington Dulles International Airport', why: 'Connection to UA 803. AeroTrain between concourses.' }
      ],
      buy: [
        { w: 'Snacks and a big water for the flight', p: '≈ US$10–15', note: 'Two meals are served on UA 803.' },
        { w: 'Nothing else', p: '—', note: 'Get yen in Japan: 7-Bank ATMs at Haneda give a good rate.' }
      ],
      do: [
        { ttl: 'Jet lag plan', txt: 'Stay awake for roughly the first 7 hours, then sleep. You land late afternoon Tokyo time and should be in bed around 23:00.' },
        { ttl: 'On landing', txt: 'Visit Japan Web QR on screen for immigration and customs. Mo heads to the Yamato / JAL ABC counter on 2F with the board.' }
      ],
      prep: ['Passport + boarding passes', 'Carry-on: 2 days of clothes, meds, chargers, cameras', 'Bags checked through to HND', 'Visit Japan Web QR saved offline'],
      regroup: { n: 'The next gate', note: 'UA 803 gate at Dulles. Don\'t wait for each other at the BUF gate area.' }
    },

    {
      id: 'd1', n: 1, date: '2026-12-10', tz: 'JST', from: '15:50',
      region: 'tokyo', place: 'tokyo', sleep: 'tokyo',
      title: 'Land, ship the board, Arakichō', sub: 'Haneda → Akebonobashi · back-alley izakaya',
      tagline: 'An easy first night in the alleys right outside the door.',
      plan: 7000,
      transit: {
        title: 'Haneda Terminal 3 → J-ARC Akebonobashi', meta: '60–75 min · ≈ ¥720',
        steps: [
          'Keikyū Airport Line, Haneda T3 → Shinagawa, about 15 min.',
          'JR Yamanote Line, Shinagawa → Shinjuku, about 20 min.',
          'Tokyo Metro Marunouchi Line, Shinjuku → Yotsuya-sanchōme, 3 stops, then a 7 min walk to Arakichō.',
          'With heavy bags: taxi from Shinjuku Station, about 10 min (≈ ¥1,500–2,000).',
          'All on Suica. No pass needed (Keikyū isn\'t on the Tokyo Subway Ticket).'
        ]
      },
      items: [
        { t: '16:50', k: 'flight', ttl: 'Land at Haneda Terminal 3', txt: 'Immigration and customs with your Visit Japan Web QR codes; allow 45–75 min. Get yen from the 7-Bank ATM in arrivals. Suica in Apple Wallet, eSIM on.', pl: { n: 'Haneda Airport Terminal 3', jp: '羽田空港 第3ターミナル', q: 'Haneda Airport Terminal 3' } },
        { t: '17:15', a: 1, k: 'admin', ttl: 'Mo: ship the board to Niseko', txt: '2F arrivals, JAL ABC or Yamato counter: ski bag delivery to The Setsumon, Hirafu. Arrives about Dec 12–13. Cash, plus the hotel\'s address and phone for the form. Only send it once The Setsumon has said they\'ll hold it.', cost: '≈ ¥3,500 cash', bk: 'board1' },
        { t: '17:30', k: 'train', ttl: 'Train to Akebonobashi', txt: 'Keikyū → Shinagawa, JR Yamanote → Shinjuku, Marunouchi Line → Yotsuya-sanchōme, 7 min walk.', cost: '≈ ¥720', leave: '17:30' },
        { t: '18:40', a: 1, k: 'stay', ttl: 'Self check-in at J-ARC', txt: 'No reception: use the entry instructions the property sent you. Check-in runs to midnight.', bk: 'tokyo1', pl: { n: 'J-ARC Akebonobashi', jp: '東京都新宿区荒木町18-3', q: '18-3 Arakicho Shinjuku Tokyo' } },
        { t: '19:30', k: 'food', ttl: 'Easy dinner', txt: 'Ramen or a konbini run near the apartment. Grab breakfast for tomorrow while you\'re there.', cost: '≈ ¥1,200–2,000' },
        { t: '21:00', k: 'night', ttl: 'Arakichō back-alley izakaya', txt: 'Arakichō is a maze of tiny izakaya and bars on stone-stepped lanes, right outside the door. One or two drinks to beat the jet lag, then bed.', cost: '≈ ¥3,000–4,500', pl: { n: 'Arakichō', jp: '荒木町', q: 'Arakicho Shinjuku' } }
      ],
      go: [
        { n: 'Arakichō lanes', jp: '荒木町', q: 'Arakicho Shinjuku', why: 'Old geisha quarter turned into tiny local bars, right by the apartment.' },
        { n: 'Yotsuya-sanchōme Station', jp: '四谷三丁目駅', q: 'Yotsuya-sanchome Station', why: 'Marunouchi Line, 7 min walk.' },
        { n: 'Akebonobashi Station', jp: '曙橋駅', q: 'Akebonobashi Station', why: 'Toei Shinjuku Line, 4 min walk. Direct to the ski shops tomorrow.' }
      ],
      buy: [
        { w: 'Cash at the 7-Bank ATM in arrivals', p: '¥30,000 each', note: 'Small bars and the Yamato counter are often cash-only.' },
        { w: 'Board delivery to Niseko (Mo)', p: '≈ ¥3,500', note: 'Cash at the counter.' },
        { w: 'Keikyū + JR + Metro to the apartment', p: '≈ ¥720' },
        { w: 'Dinner and a drink in Arakichō', p: '≈ ¥3,000–5,000' },
        { w: 'Konbini breakfast for tomorrow', p: '≈ ¥500' }
      ],
      do: [
        { ttl: 'First night rules', txt: 'One dinner, one or two drinks, then bed. Staying up until about 23:00 resets you fastest.' },
        { ttl: 'Apartment, not a hotel', txt: 'Nobody at a desk: save the entry instructions offline before you land, and keep the property\'s message thread handy.' }
      ],
      prep: ['Visit Japan Web QR on screen', 'Entry instructions from J-ARC saved offline', 'Mo: The Setsumon\'s address and phone for the delivery form'],
      regroup: { n: 'J-ARC Akebonobashi', jp: '東京都新宿区荒木町18-3', note: 'Or the Yotsuya-sanchōme Station ticket gates.' }
    },

    {
      id: 'd2', n: 2, date: '2026-12-11', tz: 'JST', from: '04:00',
      region: 'tokyo', place: 'tokyo', sleep: 'tokyo', night: 1,
      title: 'Gear day, then under the tracks', sub: 'Kanda ski street · Jimbōchō curry · Ameyoko · Kanda bar hop',
      tagline: 'Boots fitted in the morning, Friday night out under the rails.',
      plan: 12000,
      transit: {
        title: 'Akebonobashi → Ogawamachi', meta: 'about 10 min · ≈ ¥220',
        steps: [
          'Toei Shinjuku Line, Akebonobashi → Ogawamachi, direct, about 10 min.',
          'Jimbōchō (curry lunch) is one stop back on the same line, or a 10 min walk.',
          'Okachimachi / Ameyoko: about 15 min from Ogawamachi (JR from Kanda or Akihabara).',
          'Home: Toei Shinjuku Line from Iwamotochō or Ogawamachi to Akebonobashi.'
        ]
      },
      items: [
        { t: '08:30', k: 'food', ttl: 'Sleep off the flight, konbini breakfast' },
        { t: '10:00', k: 'shop', ttl: 'Kanda-Ogawamachi ski & snowboard street', txt: 'About 60 shops along Yasukuni-dōri: Victoria main store, Murasaki Sports Ogawamachi (five floors, snowboard focus), Ski Shop Vail, London Sports for cheap outerwear. Shops open about 10:00–20:00. Bring passports.', leave: '09:45', pl: { n: 'Kanda-Ogawamachi ski shops', jp: '神田小川町 スキー街', q: 'Kanda Ogawamachi ski shops' } },
        { t: '12:30', k: 'food', ttl: 'Curry lunch in Jimbōchō', txt: 'Tokyo\'s "curry town", next to the ski street.', cost: '≈ ¥1,200–1,800', pl: { n: 'Jimbōchō', jp: '神保町', q: 'Jimbocho curry' } },
        { t: '14:00', k: 'shop', ttl: 'Finish shopping, boots fitted, drop gear', txt: 'Since Nov 1, 2026 you pay the 10% tax up front and claim it back at Haneda customs on Dec 20. Keep every receipt.' },
        { t: '17:00', k: 'shop', ttl: 'Okachimachi / Ameyoko back streets', txt: 'Discount sneakers and clothing at local prices, about 15 min from Ogawamachi.', pl: { n: 'Ameyoko', jp: 'アメ横', q: 'Ameyoko Shopping Street' } },
        { t: '19:00', k: 'food', ttl: 'Standing bars under the tracks', txt: 'Izakaya and standing bars under the JR line between Ueno and Okachimachi. Cheap and local.', cost: '≈ ¥2,500–4,000' },
        { t: '21:00', k: 'night', ttl: 'Night out #1: Kanda under-track bar hop', txt: 'Kanda\'s izakaya under the railway arches, then local bars, not the Shibuya / Shinjuku strip. Keep it sane: you leave at 07:25 tomorrow for the 08:11 shinkansen.', cost: '≈ ¥4,000–6,000', pl: { n: 'Kanda Station (under the tracks)', jp: '神田駅 ガード下', q: 'Kanda Station izakaya under tracks' } }
      ],
      go: [
        { n: 'Murasaki Sports Ogawamachi', jp: 'ムラサキスポーツ 小川町', q: 'Murasaki Sports Ogawamachi', why: 'Five floors, snowboard focus.' },
        { n: 'Victoria main store', jp: 'ヴィクトリア 本店', q: 'Victoria Ski Shop Ogawamachi', why: 'The big ski-gear store on the street.' },
        { n: 'London Sports', jp: 'ロンドンスポーツ', q: 'London Sports Kanda Ogawamachi', why: 'Cheap outerwear.' },
        { n: 'Jimbōchō curry', jp: '神保町 カレー', q: 'Jimbocho curry restaurants', why: 'Curry town, one stop away.' },
        { n: 'Ameyoko', jp: 'アメ横', q: 'Ameyoko Shopping Street', why: 'Discount sneakers, clothing, under-track bars.' },
        { n: 'Kanda under-track izakaya', jp: '神田 ガード下', q: 'Kanda Station izakaya under tracks', why: 'Tonight\'s bar hop.' }
      ],
      buy: [
        { w: 'Gloves, goggles, base layers, boots', p: '≈ ¥3,000–40,000', note: 'Pay tax now, claim it back at Haneda customs Dec 20. Keep receipts and the goods.' },
        { w: 'Curry lunch', p: '≈ ¥1,200–1,800' },
        { w: 'Hand warmers (kairo)', p: '≈ ¥300–600 a pack', note: 'Any konbini. You\'ll want them in Niseko.' },
        { w: 'Under-track dinner', p: '≈ ¥2,500–4,000' },
        { w: 'Kanda bar hop', p: '≈ ¥4,000–6,000', note: 'Many bars are cash-only with a small seating charge.' }
      ],
      do: [
        { ttl: 'Tax refund, new system', txt: 'Shops charge the full price now; you claim the 10% back at the airport on the way out. Ask each shop for the tax-free paperwork and keep receipts together.' },
        { ttl: 'Boot fitting', txt: 'Go in the afternoon when your feet have swollen a bit. Bring the socks you\'ll ride in.' },
        { ttl: 'Pack tonight', txt: 'Everyone carries their own bags from here to Niseko. Pack before you go out, not after.' }
      ],
      prep: ['Passports for tax-free shopping', 'Suica topped up', 'Cash for the bars'],
      regroup: { n: 'Ogawamachi Station', jp: '小川町駅', note: 'Late night: Kanda Station north exit, then the apartment.' },
      nightKit: { last: '≈ 00:00–00:30', taxi: 'Kanda → Arakichō ≈ ¥2,500–3,500 total', first: 'First trains about 05:00' }
    },

    {
      id: 'd3', n: 3, date: '2026-12-12', tz: 'JST', from: '04:00',
      region: 'nagano', place: 'shibu', sleep: 'shibu',
      title: 'Snow monkeys, then the nine-bath crawl', sub: 'Kagayaki to Nagano · Jigokudani · yukata night in Shibu',
      tagline: 'Yukata, wooden sandals and a key to nine baths.',
      plan: 12500, stamps: 1,
      transit: {
        title: 'Akebonobashi → Shibu Onsen', meta: 'about 3 h · ≈ ¥10,200',
        steps: [
          '07:25 leave the apartment. Walk to Yotsuya-sanchōme, Marunouchi Line direct to Tokyo Station, about 12 min.',
          'Kagayaki 505, Tokyo 08:11 → Nagano 09:38. Booked: Car 3, seats 16-A/B/C. Each of you needs your own Suica linked to the e-ticket on Eki-net, or a paper ticket from a JR machine.',
          'Nagaden Limited Express from the basement of Nagano Station → Yudanaka, about 45 min, ¥1,760. Check the Snow Monkey Pass (¥5,100) at the Nagaden counter first.',
          'Yudanaka → Shibu Onsen: local bus 5 min, or taxi. Koishiya\'s free pick-up only runs 15:00–17:30.'
        ]
      },
      items: [
        { t: '06:45', k: 'stay', ttl: 'Check out', txt: 'Out by 07:25. Leave the apartment as asked (keys, rubbish).' },
        { t: '07:25', k: 'train', ttl: 'Marunouchi Line to Tokyo Station', txt: 'From Yotsuya-sanchōme, direct, about 12 min. Buy an ekiben at Tokyo Station.', cost: '≈ ¥180 · ekiben ≈ ¥1,200', fix: 1, leave: '07:20' },
        { t: '08:11', k: 'train', ttl: 'Kagayaki 505 → Nagano', txt: 'Booked: Car 3, seats 16-A/B/C. Arrives 09:38. Linked Suica (or paper ticket) to get through the gate.', cost: 'paid · ¥8,250 each', fix: 1, leave: '07:55', bk: 'shink1' },
        { t: '10:00', a: 1, k: 'train', ttl: 'Nagaden → Yudanaka', txt: 'From the basement of Nagano Station. Ask about the Snow Monkey Pass: Nagaden for the day, the bus to the park and back, and park entry. Worth it if those add up to more than ¥5,100.', cost: '¥1,760 · or pass ¥5,100' },
        { t: '11:00', a: 1, k: 'stay', ttl: 'Drop bags at Koishiya', txt: 'Bus or taxi from Yudanaka. Check-in proper is 16:00–21:00.', bk: 'ryokan', pl: { n: 'Koishiya Ryokan', jp: '渋温泉 小石屋旅館', q: 'Shibu Onsen Koishiya Ryokan' } },
        { t: '11:45', k: 'food', ttl: 'Soba lunch in Shibu or Yudanaka', txt: 'Nagano is soba country.', cost: '≈ ¥1,200–1,800' },
        { t: '12:30', k: 'see', ttl: 'Jigokudani Snow Monkey Park', txt: 'Bus to the Snow Monkey Park stop, then a 30–35 min snowy trail. Wild macaques in a steaming pool. Dated web ticket (or the pass). Open 9:00–16:00. Boots with grip or slip-on spikes.', cost: '≈ ¥1,000 (new fees from Dec 1)', fix: 1, leave: '12:15', bk: 'monkey', pl: { n: 'Jigokudani Monkey Park', jp: '地獄谷野猿公苑', q: 'Jigokudani Monkey Park' } },
        { t: '15:30', k: 'bus', ttl: 'Walk out, back to Shibu' },
        { t: '17:00', k: 'onsen', ttl: 'Check in · first onsen', txt: 'Get the bath key and yukata. Start with one of the nine public baths.', cost: 'free for guests' },
        { t: '19:00', k: 'food', ttl: 'Dinner in Shibu', txt: 'Your room is room-only, so eat out before about 20:00, or at Koishiya\'s own dining bar (Italian and local dishes, craft beer and wine).', cost: '≈ ¥2,500–4,000', pl: { n: 'Shibu Onsen lane', jp: '渋温泉', q: 'Shibu Onsen' } },
        { t: '21:00', k: 'onsen', ttl: 'Nine-bath crawl in yukata', txt: 'Your key opens all nine public baths, 6:00–22:00. Stamp a towel at each, then the final stamp at Shibu Takayakushi. Stamp card is in this app.', cost: 'free · stamp towel small fee' }
      ],
      warn: 'Shinkansen e-tickets need each person\'s own Suica linked on Eki-net before boarding; the reservation email alone won\'t open the gate. Snow isn\'t guaranteed this early, and some days the monkeys don\'t get in the water.',
      go: [
        { n: 'Jigokudani Monkey Park', jp: '地獄谷野猿公苑', q: 'Jigokudani Monkey Park', why: 'Snow monkeys in the hot pool. Closes 16:00 in winter.' },
        { n: 'Shibu Onsen lane', jp: '渋温泉', q: 'Shibu Onsen', why: 'Stone lane of wooden inns; the nine public baths are all a few minutes apart.' },
        { n: 'Shibu Takayakushi', jp: '渋高薬師', q: 'Shibu Takayakushi', why: 'Small temple above town: the final stamp after all nine baths.' },
        { n: 'Yudanaka Station', jp: '湯田中駅', q: 'Yudanaka Station', why: 'End of the Nagaden line.' }
      ],
      buy: [
        { w: 'Kagayaki 505 (already paid)', p: '¥8,250 each' },
        { w: 'Ekiben for the train', p: '≈ ¥1,200', note: 'Tokyo Station has hundreds.' },
        { w: 'Nagaden → Yudanaka', p: '¥1,760', note: 'Or the Snow Monkey Pass, ¥5,100.' },
        { w: 'Snow Monkey Park entry', p: '≈ ¥1,000', note: 'Skip the web ticket if you buy the pass.' },
        { w: 'Dinner in Shibu', p: '≈ ¥2,500–4,000' },
        { w: 'Stamp towel (kigan tenugui)', p: 'small; ask at the desk' }
      ],
      do: [
        { ttl: 'Nine-bath crawl', txt: 'Each bath is locked; your key opens all of them. Knock, peek, add cold water only if you\'re alone. Bring the small towel and a plastic bag for wet things.' },
        { ttl: 'Yukata 101', txt: 'Left side over right (right over left is for funerals). Wear the jacket on top outside; it\'s freezing.' },
        { ttl: 'Monkey park', txt: 'Phones on silent, no food in sight, stay 1–2 m back. Start back by 15:15; it gets dark early.' }
      ],
      prep: ['Out of the apartment by 07:25', 'Suica linked to the e-ticket (all three)', 'Grip boots on', 'Monkey park ticket saved', 'Tell Koishiya your arrival time'],
      regroup: { n: 'Koishiya Ryokan', jp: '渋温泉 小石屋旅館', note: 'Shibu is one lane; you can\'t get lost for long.' }
    },

    {
      id: 'd4', n: 4, date: '2026-12-13', tz: 'JST', from: '04:00',
      region: 'nagano', place: 'nagano', sleep: 'nagano', night: 1,
      title: 'Chestnut town and Zenkō-ji', sub: 'Obuse day trip · Okaidan tunnel · Gondō',
      tagline: 'Chestnut sweets, sake tasting, and a pitch-black tunnel under a temple.',
      plan: 10500,
      transit: {
        title: 'Shibu → Nagano City, with Obuse', meta: 'three short Nagaden rides · ≈ ¥2,850',
        steps: [
          'Bus or taxi to Yudanaka, then Nagaden to Nagano with bags, about 45 min, ≈ ¥1,290.',
          'Drop bags at Chisun Grand Nagano, 5 min from Nagano Station.',
          'Nagaden Nagano ⇄ Obuse, about 25 min each way, ¥780.',
          'Zenkō-ji: about 25 min walk up Chūō-dōri from the station, or the local bus.'
        ]
      },
      items: [
        { t: '08:00', k: 'onsen', ttl: 'Morning bath, slow breakfast' },
        { t: '09:00', o: 1, k: 'see', ttl: 'Option: second monkey visit', txt: 'If Saturday was busy. Koishiya drives guests to the park at 09:00 and 10:00. Then take a later Nagaden and do Obuse after lunch.' },
        { t: '09:30', k: 'train', ttl: 'Check out, Nagaden to Nagano', txt: 'With bags. Check-out is 10:00.', cost: '≈ ¥1,290', fix: 1, leave: '09:15' },
        { t: '10:20', a: 1, k: 'stay', ttl: 'Drop bags at Chisun Grand', txt: '5 min walk from the station.', bk: 'nagano', pl: { n: 'Chisun Grand Nagano', jp: 'チサングランド長野', q: 'Chisun Grand Nagano' } },
        { t: '10:45', k: 'train', ttl: 'Nagaden → Obuse', cost: '¥780', fix: 1 },
        { t: '11:15', k: 'food', ttl: 'Obuse: chestnut town', txt: 'Kurikinton and Mont Blanc, a Masuichi-Ichimura sake tasting, the Hokusai Museum. Lunch: kuri-okowa (chestnut rice).', cost: '≈ ¥2,300 snacks + tasting · lunch ≈ ¥1,500', pl: { n: 'Obuse', jp: '小布施', q: 'Obuse Masuichi Ichimura' } },
        { t: '14:30', k: 'train', ttl: 'Nagaden back to Nagano', cost: '¥780' },
        { t: '15:15', k: 'see', ttl: 'Zenkō-ji', txt: 'Up Chūō-dōri and Nakamise. The Okaidan: a pitch-dark tunnel under the altar where you feel for the "key to paradise". The Ninja Daimon shop is next door (Togakushi\'s ninja sites are closed in winter).', cost: 'grounds free · Okaidan small fee', pl: { n: 'Zenkō-ji', jp: '善光寺', q: 'Zenkoji Temple Nagano' } },
        { t: '17:30', k: 'stay', ttl: 'Check in at Chisun Grand' },
        { t: '19:00', k: 'food', ttl: 'Oyaki, soba and Nagano sake', txt: 'Around the Gondō arcade.', cost: '≈ ¥3,000–4,500', pl: { n: 'Gondō arcade', jp: '権堂アーケード', q: 'Gondo Arcade Nagano' } },
        { t: '21:00', k: 'night', ttl: 'Night out in Gondō / station area', txt: 'Hotel is a short walk; no last train to worry about.', cost: '≈ ¥3,000–5,000' }
      ],
      go: [
        { n: 'Obuse', jp: '小布施', q: 'Obuse Station', why: 'Chestnut sweets, sake brewery, Hokusai Museum.' },
        { n: 'Masuichi-Ichimura sake brewery', jp: '桝一市村酒造場', q: 'Masuichi Ichimura Sake Brewery Obuse', why: 'Tasting counter in the old brewery.' },
        { n: 'Hokusai Museum', jp: '北斎館', q: 'Hokusai Museum Obuse', why: 'Festival floats painted by Hokusai.' },
        { n: 'Zenkō-ji', jp: '善光寺', q: 'Zenkoji Temple Nagano', why: 'The Okaidan tunnel under the altar.' },
        { n: 'Gondō arcade', jp: '権堂アーケード', q: 'Gondo Arcade Nagano', why: 'Dinner and bars, walkable to the hotel.' }
      ],
      buy: [
        { w: 'Nagaden Yudanaka → Nagano', p: '≈ ¥1,290' },
        { w: 'Nagaden to Obuse and back', p: '¥1,560' },
        { w: 'Chestnut sweets + sake tasting', p: '≈ ¥2,300' },
        { w: 'Kuri-okowa lunch', p: '≈ ¥1,500' },
        { w: 'Okaidan ticket', p: 'small fee' },
        { w: 'Oyaki on the approach', p: '≈ ¥200–300 each' },
        { w: 'Dinner in Gondō', p: '≈ ¥3,000–4,500' }
      ],
      do: [
        { ttl: 'Swap-in', txt: 'Want snowy mountains instead of Obuse? Togakushi Chūsha shrine and soba, ≈ ¥3,000 return by bus. The ninja village and museum are closed in winter.' },
        { ttl: 'Okaidan', txt: 'Keep your right hand on the wall the whole way. The key is about halfway, at hip height.' }
      ],
      prep: ['Out of Koishiya by 10:00', 'Bags to the Chisun desk before Obuse'],
      regroup: { n: 'Zenkō-ji main gate (Sanmon)', jp: '善光寺 山門', note: 'Night: Chisun Grand lobby.' },
      nightKit: { last: 'Walkable: Gondō → hotel about 15 min', taxi: 'Taxis at Nagano Station', first: '' }
    },

    {
      id: 'd5', n: 5, date: '2026-12-14', tz: 'JST', from: '04:00',
      region: 'niseko', place: 'niseko', sleep: 'niseko',
      title: 'Train, plane, bus to Niseko', sub: 'Nagano → Toyama · fly to Sapporo · Resort Liner to Hirafu',
      tagline: 'Breakfast in Nagano, Mt Yōtei at dusk.',
      plan: 18500,
      transit: {
        title: 'Nagano → Niseko Hirafu', meta: 'about 8 h 30 · ≈ ¥28,800',
        steps: [
          'Hokuriku Shinkansen, Nagano ~10:00 → Toyama, 45–60 min, ¥7,090 reserved. Not booked yet: book on Eki-net and link Suica like Dec 12.',
          'Airport bus, Toyama Station (south exit) → Toyama Airport, about 25 min. Pay on the bus. Be at TOY by about 12:00.',
          'ANA NH1181, Toyama 12:50 → New Chitose 14:20. Booked (restricted fare). 1 checked bag each.',
          'Hokkaido Resort Liner, New Chitose 15:50 → Hirafu Welcome Centre about 18:30, ¥5,700. Book on WAMAZING by 18:00 JST Dec 5. Backups 17:50 and 19:30.',
          'Welcome Centre → The Setsumon: free pick-up (book it), or a 2 min walk uphill.'
        ]
      },
      items: [
        { t: '08:00', k: 'food', ttl: 'Slow breakfast, pack' },
        { t: '09:45', k: 'move', ttl: 'Check out, walk to Nagano Station' },
        { t: '10:00', k: 'train', ttl: 'Shinkansen Nagano → Toyama', txt: 'Pick a train arriving Toyama by about 11:00.', cost: '¥7,090', fix: 1, leave: '09:45', bk: 'shink2' },
        { t: '11:10', k: 'bus', ttl: 'Airport bus to Toyama Airport', txt: 'From the south exit, about 25 min. Small airport: be there by 12:00.', cost: 'pay on the bus', fix: 1 },
        { t: '12:50', k: 'flight', ttl: 'ANA NH1181 Toyama → New Chitose', txt: 'Arrives 14:20. Power banks stay with you, not in the overhead bin.', cost: 'paid · ¥15,600', fix: 1, bk: 'ana' },
        { t: '15:50', k: 'bus', ttl: 'Hokkaido Resort Liner → Hirafu', txt: 'From the domestic terminal. 2.5–3 h over the pass. Mt Yōtei at dusk.', cost: '¥5,700', fix: 1, leave: '15:30', bk: 'liner', pl: { n: 'New Chitose domestic terminal', jp: '新千歳空港 国内線', q: 'New Chitose Airport Domestic Terminal' } },
        { t: '18:30', a: 1, k: 'stay', ttl: 'Check in at The Setsumon', txt: 'No front desk on site: follow the check-in instructions, or the after-hours desk at Intuition Niseko. Mo\'s board should be waiting.', bk: 'niseko', bag: 'arrive', pl: { n: 'The Setsumon', jp: '北海道虻田郡倶知安町字山田191-54', q: 'The Setsumon Niseko' } },
        { t: '19:00', k: 'ski', ttl: 'Pick up rental gear (Trenton & AJ)', txt: 'Tonight, so tomorrow starts on snow, not in a queue.', cost: '≈ ¥12,000 each for 2 days', bk: 'rental' },
        { t: '20:00', k: 'food', ttl: 'Dinner in Hirafu village, early night', cost: '≈ ¥3,500–5,000' }
      ],
      warn: 'The Resort Liner booking has a hard cutoff: 18:00 JST on Dec 5 (04:00 Toronto time). Miss it and you\'re on a taxi or a later bus. ANA has 90 min before the bus, so a short delay is fine.',
      go: [
        { n: 'Toyama Airport', jp: '富山空港', q: 'Toyama Airport', why: 'ANA NH1181 at 12:50.' },
        { n: 'New Chitose domestic terminal', jp: '新千歳空港 国内線', q: 'New Chitose Airport Domestic Terminal', why: 'Resort Liner stop. Ramen and Royce if you have time.' },
        { n: 'Hirafu Welcome Centre', jp: 'ひらふウェルカムセンター', q: 'Hirafu Welcome Center Niseko', why: 'Bus stop, info desk, Yamato counter.' },
        { n: 'Seicomart Hirafu', jp: 'セイコーマート', q: 'Seicomart Niseko Hirafu', why: 'Hokkaido\'s konbini; the "Hot Chef" counter does fresh katsudon and fried chicken.' }
      ],
      buy: [
        { w: 'Shinkansen Nagano → Toyama', p: '¥7,090' },
        { w: 'Toyama airport bus', p: 'pay on board' },
        { w: 'ANA NH1181 (Mo\'s ticket paid)', p: '¥15,600', note: 'Check Trenton and AJ have tickets on the same flight.' },
        { w: 'Resort Liner', p: '¥5,700' },
        { w: 'Board rental, 2 days (Trenton & AJ)', p: '≈ ¥12,000 each' },
        { w: 'Dinner in Hirafu', p: '≈ ¥3,500–5,000' }
      ],
      do: [
        { ttl: 'Rental fitting', txt: 'Boots should touch your toes standing and pull back when you flex. Ask for a snug boot; rental boots pack out fast.' },
        { ttl: 'Niseko Rules', txt: 'Off-piste only through the marked gates, and only when they\'re open. Ropes are not suggestions; lift passes get cut.' }
      ],
      prep: ['Nagano → Toyama shinkansen booked and Suica linked', 'Resort Liner booked (by Dec 5)', 'The Setsumon check-in instructions saved', 'Power banks in your pocket for the flight'],
      regroup: { n: 'Hirafu Welcome Centre', jp: 'ひらふウェルカムセンター', note: 'Airports: the gate. CTS: the Resort Liner stop.' }
    },

    {
      id: 'd6', n: 6, date: '2026-12-15', tz: 'JST', from: '04:00',
      region: 'niseko', place: 'niseko', sleep: 'niseko', night: 1, ski: 1,
      title: 'Ride Niseko', sub: 'Grand Hirafu + Hanazono · onsen · night riding',
      tagline: 'If it snowed overnight, be on the first chair.',
      plan: 22000,
      items: [
        { t: '08:00', k: 'food', ttl: 'Breakfast' },
        { t: '08:30', k: 'ski', ttl: 'First chair: Grand Hirafu + Hanazono', txt: 'All Mountain pass covers all four Niseko United resorts. Regular season from Dec 12. Traverse to Hanazono for wide, quieter runs.', cost: '2-day pass ¥24,700 · 1-day ¥12,600', bk: 'lift', pl: { n: 'Niseko Grand Hirafu', jp: 'ニセコグラン・ヒラフ', q: 'Niseko Tokyu Grand Hirafu' } },
        { t: '12:00', k: 'food', ttl: 'Lunch on the mountain', cost: '≈ ¥1,800–2,800' },
        { t: '14:00', k: 'ski', ttl: 'Keep riding, or a half-day guided powder tour', cost: 'tour TBD' },
        { t: '16:00', k: 'see', ttl: 'Mt Yōtei sunset', txt: 'From the top of the Hirafu gondola, sunset about 16:00.', sun: 1 },
        { t: '17:00', k: 'onsen', ttl: 'Onsen soak in Hirafu', txt: 'Yukoro in lower Hirafu is the locals\' bath; Yumoto Niseko Prince Hotel Hirafutei has an outdoor bath facing the slopes.', cost: '≈ ¥1,000–1,500', pl: { n: 'Hirafutei onsen', jp: 'ニセコプリンスホテル ひらふ亭', q: 'Yumoto Niseko Prince Hotel Hirafutei' } },
        { t: '19:00', k: 'food', ttl: 'Izakaya dinner in Hirafu', txt: 'Reserve, even mid-December.', cost: '≈ ¥4,000–6,000' },
        { t: '21:00', k: 'ski', ttl: 'Night riding under the lights', txt: 'Same pass. Not every lift runs after dark; check the night map.', cost: 'included' }
      ],
      go: [
        { n: 'Hirafu gondola', jp: 'ヒラフゴンドラ', q: 'Niseko Grand Hirafu gondola', why: 'Sunset over Mt Yōtei.' },
        { n: 'Niseko Hanazono', jp: 'ニセコHANAZONO', q: 'Niseko Hanazono Resort', why: 'Wide, quieter groomers.' },
        { n: 'Yukoro onsen', jp: '湯ころ', q: 'Yukoro Onsen Niseko', why: 'Locals\' bath in lower Hirafu.' },
        { n: 'Bar Gyu+', jp: 'バー ギュウ', q: 'Bar Gyu+ Niseko', why: 'The bar you enter through a fridge door.' }
      ],
      buy: [
        { w: 'All Mountain 2-day pass', p: '¥24,700', note: 'Online is about 5% cheaper; ¥500 keycard. Collect at the Hirafu ticket machine.' },
        { w: 'Mountain lunch', p: '≈ ¥1,800–2,800' },
        { w: 'Onsen entry', p: '≈ ¥1,000–1,500' },
        { w: 'Izakaya dinner', p: '≈ ¥4,000–6,000' },
        { w: 'Hand warmers and a neck gaiter', p: '≈ ¥300–2,000' }
      ],
      do: [
        { ttl: 'Read the snow', txt: 'Check the snowfall card on this screen first thing. 10 cm+ overnight means powder: go straight up.' },
        { ttl: 'Regroup on the hill', txt: 'Pick a lift base and a time (top of the gondola at 15:30). Phones die fast in the cold; keep them in an inside pocket.' },
        { ttl: 'Tonight', txt: 'Pack, check the Kutchan → Otaru train time, and have ¥3,000 cash for Mo\'s board shipment.' }
      ],
      prep: ['Lift pass collected', 'Hand warmers in gloves', 'Goggles + sunglasses', 'Phone in an inside pocket'],
      regroup: { n: 'Top of the Hirafu gondola, 15:30', note: 'Otherwise the gondola base. Night: The Setsumon.' },
      nightKit: { last: 'Walkable: Hirafu village → The Setsumon', taxi: 'Taxis wait at the Welcome Centre', first: '' }
    },

    {
      id: 'd7', n: 7, date: '2026-12-16', tz: 'JST', from: '04:00',
      region: 'hokkaido', place: 'otaru', sleep: 'sapporo', night: 1,
      title: 'Last runs, Otaru, Susukino', sub: 'Morning on the hill · ship the board · canal at dusk · Sapporo',
      tagline: 'Powder in the morning, gas lamps by the canal, Susukino by night.',
      plan: 16500,
      transit: {
        title: 'Hirafu → Otaru → Sapporo', meta: 'bus + 2 trains · ≈ ¥3,000',
        steps: [
          'Bus from Hirafu to JR Kutchan Station, about 15–20 min.',
          'JR Hakodate Line, Kutchan → Otaru, about 75–90 min. Trains are sparse: check the time the night before.',
          'JR rapid, Otaru → Sapporo, about 35 min, every 15 min or so.',
          'No Hokkaido Rail Pass: your JR total is only about ¥3,000–4,000. Suica works.'
        ]
      },
      items: [
        { t: '07:30', k: 'food', ttl: 'Breakfast, pack, bags to lockers', txt: 'Check-out is 10:00; The Setsumon has luggage storage.' },
        { t: '08:30', k: 'ski', ttl: 'Morning runs until about 11:00', bk: 'lift' },
        { t: '11:30', k: 'admin', ttl: 'Mo: ship the board to Nakano', txt: 'Yamato counter at the Hirafu Welcome Centre → NAKANO WORLD HOTEL. 2–3 days, arrives by Dec 18. Board, bindings and boots only. Keeps it off the CTS → HND flight.', cost: '≈ ¥3,000 cash', fix: 1, bk: 'board2', bag: 'ship', pl: { n: 'Hirafu Welcome Centre', jp: 'ひらふウェルカムセンター', q: 'Hirafu Welcome Center Niseko' } },
        { t: '12:15', k: 'train', ttl: 'Bus to Kutchan, JR to Otaru', txt: 'Check the exact train last night.', cost: '≈ ¥1,500–1,800', fix: 1, leave: '12:00' },
        { t: '14:30', k: 'see', ttl: 'Otaru: Sakaimachi Street', txt: 'Kitaichi Glass, LeTAO, the Music Box Museum. Coin lockers at Otaru Station for the bags.', cost: 'lockers ≈ ¥500–800', pl: { n: 'Sakaimachi Street', jp: '堺町通り', q: 'Sakaimachi Street Otaru' } },
        { t: '15:15', k: 'food', ttl: 'Otaru Soko No.1 brewery', txt: 'Free 20-min brewery tour, German beer hall: pilsner, dunkel, weiss, sausages and pretzels.', cost: 'pay as you go', pl: { n: 'Otaru Soko No.1', jp: '小樽倉庫No.1', q: 'Otaru Soko No.1' } },
        { t: '16:00', k: 'see', ttl: 'Otaru Canal at dusk', txt: 'Gas lamps come on around sunset.', sun: 1, pl: { n: 'Otaru Canal', jp: '小樽運河', q: 'Otaru Canal' } },
        { t: '17:30', k: 'food', ttl: 'Sushi dinner on Sushi-ya Dōri', txt: 'Otaru is a seafood port.', cost: '≈ ¥3,500–6,000', pl: { n: 'Sushi-ya Dōri', jp: '寿司屋通り', q: 'Sushiya Dori Otaru' } },
        { t: '19:30', k: 'train', ttl: 'JR rapid to Sapporo, check in', txt: 'About 35 min, then a short subway or taxi to Susukino.', cost: '≈ ¥750', fix: 1, bk: 'sapporo' },
        { t: '21:00', k: 'night', ttl: 'Susukino nightlife', txt: 'Neon, the giant Nikka sign, bars in every building. Finish with a "shime" parfait.', cost: '≈ ¥3,000–6,000', pl: { n: 'Susukino crossing', jp: 'すすきの交差点', q: 'Susukino Crossing' } }
      ],
      go: [
        { n: 'Sakaimachi Street', jp: '堺町通り', q: 'Sakaimachi Street Otaru', why: 'Glass, music boxes, LeTAO.' },
        { n: 'Otaru Soko No.1', jp: '小樽倉庫No.1', q: 'Otaru Soko No.1', why: 'Brewery tour and beer hall.' },
        { n: 'Otaru Canal', jp: '小樽運河', q: 'Otaru Canal', why: 'Gas lamps at dusk.' },
        { n: 'Sushi-ya Dōri', jp: '寿司屋通り', q: 'Sushiya Dori Otaru', why: 'Sushi street.' },
        { n: 'Tanaka Shuzō Kikkogura', jp: '田中酒造 亀甲蔵', q: 'Tanaka Shuzo Kikkogura Otaru', why: 'Optional: sake brewery with free tours.' },
        { n: 'Susukino crossing', jp: 'すすきの交差点', q: 'Susukino Crossing', why: 'Sapporo\'s nightlife centre, 5 min from the hotel.' }
      ],
      buy: [
        { w: 'Board shipment to Nakano (Mo)', p: '≈ ¥3,000', note: 'Cash.' },
        { w: 'Bus + JR to Otaru', p: '≈ ¥1,500–1,800' },
        { w: 'LeTAO Double Fromage cheesecake', p: '≈ ¥2,000', note: 'Eat it; it won\'t survive the trip.' },
        { w: 'Otaru glass', p: 'from ≈ ¥1,000' },
        { w: 'Coin lockers', p: '≈ ¥500–800' },
        { w: 'Sushi dinner', p: '≈ ¥3,500–6,000' },
        { w: 'JR to Sapporo', p: '≈ ¥750' }
      ],
      do: [
        { ttl: 'Trains to Otaru', txt: 'Kutchan → Otaru has only a handful of trains a day. If you miss one, buy LeTAO in Sapporo instead and go straight there.' },
        { ttl: 'Shime parfait', txt: 'Sapporo ends a night with a parfait instead of ramen. Try one after Susukino.' }
      ],
      prep: ['Out by 10:00, bags in storage', 'Kutchan → Otaru train time', '¥3,000 cash for the board', 'Coins for lockers'],
      regroup: { n: 'Otaru Station', jp: '小樽駅', note: 'Late: under the Nikka sign at the Susukino crossing.' },
      nightKit: { last: 'Walkable: Susukino → hotel 5 min', taxi: 'Taxis everywhere in Susukino', first: '' }
    },

    {
      id: 'd8', n: 8, date: '2026-12-17', tz: 'JST', from: '04:00',
      region: 'hokkaido', place: 'sapporo', sleep: 'sapporo', night: 1,
      title: 'Sapporo: crab, beer, Christmas lights', sub: 'Nijō Market · Beer Museum · Ōdōri market · Mt Moiwa',
      tagline: 'Crab for breakfast, lamb for lunch, the city lit up at night.',
      plan: 13500,
      items: [
        { t: '09:30', k: 'food', ttl: 'Sleep in, then Nijō Market breakfast', txt: 'Crab, uni and salmon-roe bowls.', cost: '≈ ¥3,000', pl: { n: 'Nijō Market', jp: '二条市場', q: 'Nijo Market Sapporo' } },
        { t: '11:00', k: 'shop', ttl: 'Tanukikōji shopping arcade', txt: 'Covered arcade, seven blocks long.', pl: { n: 'Tanukikōji', jp: '狸小路商店街', q: 'Tanukikoji Shopping Street' } },
        { t: '12:30', k: 'food', ttl: 'Sapporo Beer Museum + jingisukan lunch', txt: 'Museum is free (tasting extra). Grilled lamb on a dome skillet at the Beer Garden next door.', cost: 'tasting ≈ ¥1,000 · lunch ≈ ¥3,500–5,000', pl: { n: 'Sapporo Beer Museum', jp: 'サッポロビール博物館', q: 'Sapporo Beer Museum' } },
        { t: '15:00', k: 'see', ttl: 'Munich Christmas Market, Ōdōri Park', txt: 'Runs Nov 20 – Dec 25. Mulled wine and sausages. Sapporo TV Tower over the top.', cost: 'free · mulled wine ≈ ¥700–1,000', pl: { n: 'Odori Park', jp: '大通公園', q: 'Munich Christmas Market Sapporo Odori Park' } },
        { t: '16:30', k: 'see', ttl: 'White Illumination lights up', txt: 'Ōdōri Park, from dusk.', cost: 'free', sun: 1 },
        { t: '18:30', k: 'see', ttl: 'Mt Moiwa ropeway night view', txt: 'Tram or taxi to the ropeway; one of Japan\'s top night views.', cost: '≈ ¥2,000', pl: { n: 'Mt Moiwa Ropeway', jp: '藻岩山ロープウェイ', q: 'Mt Moiwa Ropeway' } },
        { t: '21:00', k: 'night', ttl: 'Ganso Ramen Yokochō, then bars', txt: 'Miso ramen in the Susukino alley, then bars. Or soup curry earlier.', cost: 'ramen ≈ ¥1,200 · bars ≈ ¥3,000–5,000', pl: { n: 'Ganso Ramen Yokochō', jp: '元祖さっぽろラーメン横丁', q: 'Ganso Ramen Yokocho Sapporo' } }
      ],
      go: [
        { n: 'Nijō Market', jp: '二条市場', q: 'Nijo Market Sapporo', why: 'Seafood bowls from early morning.' },
        { n: 'Sapporo Beer Museum', jp: 'サッポロビール博物館', q: 'Sapporo Beer Museum', why: 'Free museum, jingisukan next door.' },
        { n: 'Ōdōri Christmas Market', jp: 'ミュンヘン・クリスマス市', q: 'Munich Christmas Market Sapporo Odori Park', why: 'Mulled wine under the White Illumination.' },
        { n: 'Sapporo TV Tower', jp: 'さっぽろテレビ塔', q: 'Sapporo TV Tower', why: 'View over the market, ≈ ¥1,000.' },
        { n: 'Mt Moiwa Ropeway', jp: '藻岩山ロープウェイ', q: 'Mt Moiwa Ropeway', why: 'Night view over the city.' },
        { n: 'Ganso Ramen Yokochō', jp: '元祖さっぽろラーメン横丁', q: 'Ganso Ramen Yokocho Sapporo', why: 'Miso ramen alley.' },
        { n: 'Soup Curry GARAKU', jp: 'スープカレー GARAKU', q: 'Soup Curry GARAKU Sapporo', why: 'The soup curry everyone queues for.' }
      ],
      buy: [
        { w: 'Nijō Market bowl', p: '≈ ¥3,000' },
        { w: 'Beer Museum tasting', p: '≈ ¥1,000' },
        { w: 'Jingisukan lunch', p: '≈ ¥3,500–5,000' },
        { w: 'Mulled wine at the market', p: '≈ ¥700–1,000', note: 'The mug is a souvenir.' },
        { w: 'Mt Moiwa ropeway', p: '≈ ¥2,000' },
        { w: 'Ramen + bars', p: '≈ ¥4,000–6,000' }
      ],
      do: [
        { ttl: 'Jingisukan', txt: 'Fat goes on the top of the dome, veg on the rim. They\'ll give you a bib; wear it.' },
        { ttl: 'Soup curry', txt: 'Sapporo\'s other signature. Pick a spice level one step below what you think.' }
      ],
      prep: ['Warm layers: the ropeway top is windy', 'Grip boots for icy sidewalks'],
      regroup: { n: 'Sapporo TV Tower, Ōdōri Park', jp: 'さっぽろテレビ塔', note: 'Late: under the Nikka sign at the Susukino crossing.' },
      nightKit: { last: 'Walkable: Susukino → hotel 5 min', taxi: 'Taxis everywhere in Susukino', first: '' }
    },

    {
      id: 'd9', n: 9, date: '2026-12-18', tz: 'JST', from: '04:00',
      region: 'tokyo', place: 'tokyo', sleep: 'tokyo2', night: 1,
      title: 'Back to Tokyo: Nakano and Kōenji', sub: 'Fly CTS → HND · Nakano Broadway · Friday in Kōenji',
      tagline: 'Secondhand watches by day, tiny music bars by night.',
      plan: 26500,
      transit: {
        title: 'Sapporo → Nakano', meta: 'about 4 h 30 door to door · ≈ ¥22,000',
        steps: [
          'JR Rapid Airport, Sapporo → New Chitose, about 40 min, ≈ ¥1,230.',
          'JAL JL508, New Chitose 11:40 → Haneda 13:25. Not booked yet: check the JAL Japan Explorer Pass first; fallback ≈ C$530 for 3 with a bag each.',
          'Keikyū → Shinagawa, JR Yamanote → Shinjuku, JR Chūō → Nakano. About 70 min, on Suica.',
          'Tokyo Subway 48-hour Ticket (¥1,500) only pays off with 3+ subway rides a day. Most of today and tomorrow is on JR Chūō, which it doesn\'t cover.'
        ]
      },
      items: [
        { t: '09:00', k: 'stay', ttl: 'Pack, check out' },
        { t: '10:15', k: 'train', ttl: 'JR Rapid Airport to New Chitose', txt: 'Ramen Dōjō and Royce Chocolate World in the domestic terminal.', cost: '≈ ¥1,230', fix: 1, leave: '10:00' },
        { t: '11:40', k: 'flight', ttl: 'JAL JL508 New Chitose → Haneda', txt: 'Arrives 13:25. 20 kg checked limit on domestic flights; Mo\'s board is going by Yamato.', cost: '≈ ¥20,300', fix: 1, bk: 'jal' },
        { t: '13:45', a: 1, k: 'train', ttl: 'Haneda → Nakano', txt: 'Keikyū → Shinagawa, JR Yamanote → Shinjuku, JR Chūō → Nakano.', cost: '≈ ¥750' },
        { t: '15:00', k: 'stay', ttl: 'Check in at NAKANO WORLD HOTEL', txt: 'Ask whether Mo\'s board has arrived.', bk: 'tokyo2', bag: 'arrive2', pl: { n: 'NAKANO WORLD HOTEL', jp: '東京都中野区中野5-55-6', q: 'NAKANO WORLD HOTEL' } },
        { t: '15:30', k: 'shop', ttl: 'Nakano Broadway', txt: 'Secondhand electronics, watches, cameras, anime and collectibles at local prices. 3 min from the hotel.', pl: { n: 'Nakano Broadway', jp: '中野ブロードウェイ', q: 'Nakano Broadway' } },
        { t: '17:30', k: 'see', ttl: 'Nakano\'s back alleys', txt: 'The side streets off Sun Mall: tiny bars and yakitori counters lighting up.' },
        { t: '19:00', k: 'food', ttl: 'Dinner in the Nakano izakaya alleys', txt: 'Cheap and local.', cost: '≈ ¥3,000–4,500' },
        { t: '21:00', k: 'night', ttl: 'Night out #2: Kōenji bar hop', txt: 'Tiny music bars and izakaya, one stop on JR Chūō. Mostly locals.', cost: '≈ ¥3,000–5,000', pl: { n: 'Kōenji', jp: '高円寺', q: 'Koenji Station' } }
      ],
      warn: 'JL508 isn\'t booked. Fares rise as the date gets close: check the JAL Japan Explorer Pass for JL508 and book whichever is cheaper this week.',
      go: [
        { n: 'New Chitose domestic terminal', jp: '新千歳空港 国内線', q: 'New Chitose Airport Domestic Terminal', why: 'Ramen Dōjō, Royce, Shiroi Koibito.' },
        { n: 'Nakano Broadway', jp: '中野ブロードウェイ', q: 'Nakano Broadway', why: 'Secondhand electronics, watches, collectibles.' },
        { n: 'Nakano Sun Mall', jp: '中野サンモール', q: 'Nakano Sun Mall', why: 'Covered arcade from the station; alleys off both sides.' },
        { n: 'Kōenji', jp: '高円寺', q: 'Koenji Station', why: 'Music bars, izakaya, thrift. One stop on JR Chūō.' }
      ],
      buy: [
        { w: 'JR to New Chitose', p: '≈ ¥1,230' },
        { w: 'Royce Nama Chocolate', p: '≈ ¥900–1,000 a box', note: 'Keep cold; buy at the airport.' },
        { w: 'JAL JL508', p: '≈ ¥20,300', note: 'Or the Explorer Pass fare.' },
        { w: 'Haneda → Nakano', p: '≈ ¥750' },
        { w: 'Nakano izakaya dinner', p: '≈ ¥3,000–4,500' },
        { w: 'Kōenji bars', p: '≈ ¥3,000–5,000', note: 'Small seating charges are normal.' }
      ],
      do: [
        { ttl: 'Nakano Broadway', txt: 'Upper floors are where the watch and camera shops are. Many open around noon; most close by 20:00.' },
        { ttl: 'Kōenji', txt: 'Bars seat six to ten. If it\'s full, the next one is two doors down.' }
      ],
      prep: ['Out by 10:00', 'JL508 booked', 'Hotel told about the board delivery'],
      regroup: { n: 'Nakano Station north exit', jp: '中野駅 北口', note: 'Night: hotel lobby.' },
      nightKit: { last: '≈ 00:15–00:45 (JR Chūō)', taxi: 'Kōenji → Nakano is a short ride, or a 20 min walk', first: 'First trains about 04:45' }
    },

    {
      id: 'd10', n: 10, date: '2026-12-19', tz: 'JST', from: '04:00',
      region: 'tokyo', place: 'tokyo', sleep: 'tokyo2', night: 1,
      title: 'Thrift, wagyu, Harmonica Yokochō', sub: 'Shimokitazawa · Kōenji · last big dinner · Kichijōji',
      tagline: 'The last night out, in a 60-bar alley four stops away.',
      plan: 22000,
      transit: {
        title: 'Nakano ⇄ Shimokitazawa, Kōenji, Kichijōji', meta: 'all short JR / private-line hops · ≈ ¥1,200 for the day',
        steps: [
          'Shimokitazawa: JR Chūō to Shinjuku (5 min), then Odakyū Line to Shimokitazawa (about 10 min).',
          'Kōenji: 1 stop from Nakano on JR Chūō.',
          'Kichijōji: 4 stops from Nakano on JR Chūō rapid, about 10 min.'
        ]
      },
      items: [
        { t: '10:00', k: 'food', ttl: 'Sleep in, breakfast' },
        { t: '11:00', k: 'shop', ttl: 'Shimokitazawa thrift and vintage', txt: 'Tokyo\'s vintage capital, local not touristy. About 20 min away.', pl: { n: 'Shimokitazawa', jp: '下北沢', q: 'Shimokitazawa' } },
        { t: '13:00', k: 'food', ttl: 'Lunch in Shimokitazawa', txt: 'Curry or the cafés.', cost: '≈ ¥1,200–2,000' },
        { t: '15:00', k: 'shop', ttl: 'Kōenji thrift + a last Nakano Broadway run', pl: { n: 'Kōenji', jp: '高円寺', q: 'Koenji vintage shops' } },
        { t: '16:50', k: 'admin', ttl: 'United check-in opens for UA 804', txt: 'Check in all three in the app and add passports.' },
        { t: '19:00', k: 'food', ttl: 'Last big dinner: wagyu / yakiniku', txt: 'Book a table for three.', cost: '≈ ¥6,000–12,000', bk: 'dinner' },
        { t: '21:00', k: 'night', ttl: 'Last night out: Harmonica Yokochō', txt: 'Kichijōji\'s alley of tiny local bars by the station, 4 stops on JR Chūō. Pack before you go.', cost: '≈ ¥3,000–5,000', pl: { n: 'Harmonica Yokochō', jp: 'ハモニカ横丁', q: 'Harmonica Yokocho Kichijoji' } },
        { t: '23:00', o: 1, k: 'night', ttl: 'Option: Daikoku PA car meet', txt: 'Weekend nights, JDM cars. Taxi only, and police often close it: have a backup.', cost: 'taxi ≈ ¥8,000–12,000 each way total' }
      ],
      go: [
        { n: 'Shimokitazawa', jp: '下北沢', q: 'Shimokitazawa', why: 'Vintage and thrift district.' },
        { n: 'Kōenji vintage shops', jp: '高円寺 古着', q: 'Koenji vintage shops', why: 'Cheaper thrift, one stop from the hotel.' },
        { n: 'Harmonica Yokochō', jp: 'ハモニカ横丁', q: 'Harmonica Yokocho Kichijoji', why: 'Tiny bar alley by Kichijōji Station.' },
        { n: 'Daikoku PA', jp: '大黒パーキングエリア', q: 'Daikoku Parking Area', why: 'Optional: JDM car meet, weekend nights.' }
      ],
      buy: [
        { w: 'Trains for the day', p: '≈ ¥1,200' },
        { w: 'Thrift finds', p: 'your call', note: 'Tax-free only from ¥5,000 per shop; keep receipts for Haneda.' },
        { w: 'Wagyu / yakiniku dinner', p: '≈ ¥6,000–12,000' },
        { w: 'Harmonica Yokochō bars', p: '≈ ¥3,000–5,000' }
      ],
      do: [
        { ttl: 'Last night', txt: 'Set a hard "home by" time. Check-out is 10:00 and the flight is 16:50 tomorrow.' },
        { ttl: 'Duty-free home', txt: 'C$800 each in goods, plus 1.14 L of spirits. One 700 ml bottle per person is duty-free.' }
      ],
      prep: ['Dinner booked for 3', 'United check-in done', 'Pack before going out'],
      regroup: { n: 'Kichijōji Station north exit', jp: '吉祥寺駅 北口', note: 'Late night: Nakano hotel lobby.' },
      nightKit: { last: '≈ 00:15–00:45 (JR Chūō)', taxi: 'Kichijōji → Nakano ≈ ¥3,000–4,000 total', first: 'First trains about 04:45' }
    },

    {
      id: 'd11', n: 11, date: '2026-12-20', tz: 'JST', from: '04:00', until: { d: '2026-12-21', t: '04:00', tz: 'ET' },
      region: 'home', place: 'tokyo', sleep: 'home',
      title: 'Home', sub: 'Last omiyage · Haneda 16:50 → Dulles → Toronto',
      tagline: 'Tax refund first, then bags.',
      plan: 4000,
      flight: { code: 'UA 804', from: 'HND', to: 'IAD', dep: { d: '2026-12-20', t: '16:50', tz: 'JST' }, arr: { d: '2026-12-20', t: '15:40', tz: 'ET' } },
      transit: {
        title: 'Nakano → Haneda Terminal 3', meta: 'about 60–70 min · ≈ ¥750',
        steps: [
          'JR Chūō → Shinjuku, JR Yamanote → Shinagawa, Keikyū Airport Line → Haneda T3.',
          'Aim to be at the United counter by 14:30. Check-in closes 15:50.'
        ]
      },
      items: [
        { t: '08:30', k: 'food', ttl: 'Breakfast, pack', txt: 'Pack tax-refund goods where you can show them at the airport.' },
        { t: '10:00', k: 'shop', ttl: 'Check out, last omiyage', txt: 'Leave bags at the desk. Free morning in Tokyo.' },
        { t: '13:15', k: 'train', ttl: 'Leave for Haneda Terminal 3', txt: 'JR Chūō → Shinjuku → Yamanote → Shinagawa → Keikyū. About 60–70 min.', cost: '≈ ¥750', fix: 1, leave: '13:15' },
        { t: '14:30', k: 'admin', ttl: 'T3: tax refund, then check-in', txt: 'Claim the tax back at customs (passport, receipts and goods) before you check bags, then United, security, immigration.', taxfree: 1 },
        { t: '16:50', k: 'flight', ttl: 'UA 804 Haneda → Dulles', txt: 'Arrives 15:40 the same day.', fix: 1, bk: 'united', dur: 770 },
        { t: '15:40', tz: 'ET', k: 'move', ttl: 'Dulles: US customs, re-drop bags', txt: 'Clear US immigration and customs, re-check bags, back through security. 1 h 38.', pl: { n: 'Washington Dulles (IAD)', q: 'Washington Dulles International Airport' } },
        { t: '17:18', tz: 'ET', k: 'flight', ttl: 'UA 3453 Dulles → Toronto', txt: 'Lands Pearson 19:01. Pick a seat in the app.', fix: 1, bk: 'united' },
        { t: '19:01', tz: 'ET', k: 'move', ttl: 'Toronto Pearson', txt: 'Declare everything. UP Express to Union every 15 min.', cost: 'UP ≈ C$12.35', duty: 1 }
      ],
      go: [
        { n: 'Nakano Broadway', jp: '中野ブロードウェイ', q: 'Nakano Broadway', why: 'Last-minute finds near the hotel.' },
        { n: 'Haneda Terminal 3', jp: '羽田空港 第3ターミナル', q: 'Haneda Airport Terminal 3', why: 'Tax refund before bag drop.' }
      ],
      buy: [
        { w: 'Last omiyage', p: '≈ ¥2,000–6,000' },
        { w: 'Train to Haneda', p: '≈ ¥750' },
        { w: 'UP Express home', p: '≈ C$12.35' }
      ],
      do: [
        { ttl: 'Tax refund, new system', txt: 'Since Nov 1, 2026 shops charge the full price and you claim the 10% back at the airport. Show passport, receipts and goods at T3 before bag drop. The refund goes to your card later, minus a handling fee.' },
        { ttl: 'Dulles in 1 h 38', txt: 'Walk fast, have passports ready, re-drop bags at the connection desk right after customs.' }
      ],
      prep: ['Passports', 'Receipts for tax-free goods in one envelope', 'Tax-free goods packed on top', 'Bags under 23 kg each', 'Mo: board packed for United'],
      regroup: { n: 'United check-in, Haneda T3', jp: '羽田空港 第3ターミナル ユナイテッド航空カウンター', note: 'Morning: hotel lobby.' }
    }
  ],

  prepList: [
    { id: 'q1', due: '2026-11-20', who: [0, 1, 2], t: 'Book Koishiya Ryokan, Shibu Onsen, Sat Dec 12 (≈ C$282 for 3, room only)' },
    { id: 'q2', due: '2026-11-20', who: [0, 1, 2], t: 'Book Chisun Grand Nagano, Sun Dec 13 (≈ C$150 for 3; confirm 3 beds)' },
    { id: 'q3', due: '2026-11-20', who: [0, 1, 2], t: 'Book The Setsumon, Niseko, Dec 14–16 (≈ C$702 for 3)' },
    { id: 'q4', due: '2026-11-20', who: [0, 1, 2], t: 'JAL JL508 CTS → HND Fri Dec 18: check the Japan Explorer Pass, else ≈ C$530 for 3' },
    { id: 'q5', due: '2026-11-20', who: [1], t: 'Book Nagano → Toyama shinkansen Mon Dec 14, ~10:00 (¥7,090 each, Eki-net e-ticket)' },
    { id: 'q6', due: '2026-11-20', who: [0, 2], t: 'Confirm you\'re on ANA NH1181 Toyama → New Chitose, Dec 14' },
    { id: 'q7', due: '2026-11-22', who: [0, 1, 2], t: 'Link a Suica to the Eki-net e-tickets, one per person (Trenton & AJ: send Mo your card number)' },
    { id: 'q8', due: '2026-11-25', who: [0, 1, 2], t: 'Book the Buffalo hotel, Tue Dec 8 (arrive ~23:00; 24-h desk, airport shuttle)' },
    { id: 'q9', due: '2026-11-25', who: [1], t: 'Email The Setsumon: will they hold a board delivery arriving Dec 12–13? Get address + phone' },
    { id: 'q10', due: '2026-11-25', who: [0, 1, 2], t: 'Book Quintessa Hotel Sapporo Susukino, Dec 16–18 (≈ C$215 for 3)' },
    { id: 'q11', due: '2026-11-25', who: [0, 1, 2], t: 'Book NAKANO WORLD HOTEL, Dec 18–20 (≈ C$627 for 3); tell them Mo\'s board arrives ~Dec 18' },
    { id: 'q12', due: '2026-11-25', who: [1], t: 'Trailways: check a board bag over 62 in. is OK on the Dec 8 bus' },
    { id: 'q13', due: '2026-11-30', who: [0, 1, 2], t: 'Snow monkey park: dated web ticket for Dec 12, or plan on the Snow Monkey Pass (not both)' },
    { id: 'q14', due: '2026-12-03', who: [0, 1, 2], t: 'Last day to cancel J-ARC for free is Dec 3 (18:00 JST)' },
    { id: 'q15', due: '2026-12-04', who: [0, 1, 2], t: 'Resort Liner CTS → Hirafu 15:50, Dec 14 — hard cutoff 18:00 JST Dec 5 (04:00 Toronto)' },
    { id: 'q16', due: '2026-12-04', who: [0, 1, 2], t: 'Niseko 2-day lift pass online (¥24,700)' },
    { id: 'q17', due: '2026-12-04', who: [0, 2], t: 'Board + boot rental in Hirafu, pick-up Dec 14 evening' },
    { id: 'q18', due: '2026-12-04', who: [0, 1, 2], t: 'Travel insurance that covers snowboarding (check credit-card coverage first)' },
    { id: 'q19', due: '2026-12-07', who: [0, 1, 2], t: 'Visit Japan Web: register and save the QR code' },
    { id: 'q20', due: '2026-12-07', who: [0, 1, 2], t: 'eSIM (10 GB) ≈ C$20–30' },
    { id: 'q21', due: '2026-12-07', who: [0, 1, 2], t: 'Tell your banks; bring a no-FX-fee card and a debit card for 7-Eleven ATMs' },
    { id: 'q22', due: '2026-12-07', who: [0, 1, 2], t: 'Download: Google Maps offline areas, Google Translate Japanese, United, GO taxi' },
    { id: 'q23', due: '2026-12-08', who: [0], t: 'Message J-ARC (no front desk) for entry instructions; say you land 16:50, arrive ~18:30' },
    { id: 'q24', due: '2026-12-08', who: [0, 1, 2], t: 'Pick seats on UA 3453 Dulles → Toronto' },
    { id: 'q25', due: '2026-12-15', who: [0, 1, 2], t: 'Book wagyu / yakiniku for 3, Sat Dec 19' }
  ],

  packing: [
    'Passport', 'Visit Japan Web QR (saved offline)', 'Ski jacket and pants', 'Gloves + liner gloves', 'Goggles', 'Neck warmer',
    '2 sets of base layers', 'Ski socks ×3', 'Waterproof boots with real tread', 'Slip-on shoes', 'Socks without holes',
    'Power banks (carry-on only)', 'Chargers + 3-prong adapter', 'Two days of clothes in carry-on', 'Mo: board, bindings, boots in one bag',
    'Meds', 'No-FX credit card + debit card', 'Camera + spare battery', 'Sunglasses', 'Lip balm and moisturiser (dry cold)'
  ],

  bookings: [
    { k: 'united', n: 'United flights (all four)', d: 'd-1' },
    { k: 'bus', n: 'Bus Toronto → Buffalo (Omio)', d: 'd-2' },
    { k: 'buffalo', n: 'Buffalo hotel, Dec 8', d: 'd-2' },
    { k: 'tokyo1', n: 'J-ARC Akebonobashi, Dec 10–12', d: 'd1' },
    { k: 'board1', n: 'Board delivery Haneda → Niseko', d: 'd1' },
    { k: 'shink1', n: 'Kagayaki 505 Tokyo → Nagano', d: 'd3' },
    { k: 'monkey', n: 'Snow Monkey Park ticket / pass', d: 'd3' },
    { k: 'ryokan', n: 'Koishiya Ryokan, Dec 12', d: 'd3' },
    { k: 'nagano', n: 'Chisun Grand Nagano, Dec 13', d: 'd4' },
    { k: 'shink2', n: 'Shinkansen Nagano → Toyama', d: 'd5' },
    { k: 'ana', n: 'ANA NH1181 Toyama → New Chitose', d: 'd5' },
    { k: 'liner', n: 'Resort Liner CTS → Hirafu', d: 'd5' },
    { k: 'niseko', n: 'The Setsumon, Dec 14–16', d: 'd5' },
    { k: 'rental', n: 'Board rental (Trenton & AJ)', d: 'd5' },
    { k: 'lift', n: 'Niseko lift pass', d: 'd6' },
    { k: 'board2', n: 'Board delivery Niseko → Nakano', d: 'd7' },
    { k: 'sapporo', n: 'Quintessa Sapporo, Dec 16–18', d: 'd7' },
    { k: 'jal', n: 'JAL JL508 New Chitose → Haneda', d: 'd9' },
    { k: 'tokyo2', n: 'NAKANO WORLD HOTEL, Dec 18–20', d: 'd9' },
    { k: 'dinner', n: 'Wagyu / yakiniku, Dec 19', d: 'd10' },
    { k: 'insurance', n: 'Travel insurance (snowboard)', d: '' }
  ],

  food: [
    { id: 'g1', n: 'Arakichō back-alley izakaya', r: 'tokyo', d: 'd1' },
    { id: 'g2', n: 'Jimbōchō curry', r: 'tokyo', d: 'd2' },
    { id: 'g3', n: 'Under-track standing bar', r: 'tokyo', d: 'd2' },
    { id: 'g4', n: 'Ekiben on the Kagayaki', r: 'nagano', d: 'd3' },
    { id: 'g5', n: 'Shinshū soba', r: 'nagano', d: 'd3' },
    { id: 'g6', n: 'Obuse chestnut Mont Blanc', r: 'nagano', d: 'd4' },
    { id: 'g7', n: 'Masuichi-Ichimura sake', r: 'nagano', d: 'd4' },
    { id: 'g8', n: 'Oyaki at Zenkō-ji', r: 'nagano', d: 'd4' },
    { id: 'g9', n: 'Seicomart Hot Chef', r: 'hokkaido', d: 'd5' },
    { id: 'g10', n: 'Hirafu izakaya', r: 'hokkaido', d: 'd6' },
    { id: 'g11', n: 'Otaru Soko No.1 house beer', r: 'hokkaido', d: 'd7' },
    { id: 'g12', n: 'LeTAO cheesecake', r: 'hokkaido', d: 'd7' },
    { id: 'g13', n: 'Otaru sushi', r: 'hokkaido', d: 'd7' },
    { id: 'g14', n: 'Shime parfait', r: 'hokkaido', d: 'd7' },
    { id: 'g15', n: 'Nijō Market seafood bowl', r: 'hokkaido', d: 'd8' },
    { id: 'g16', n: 'Jingisukan at the Beer Garden', r: 'hokkaido', d: 'd8' },
    { id: 'g17', n: 'Soup curry', r: 'hokkaido', d: 'd8' },
    { id: 'g18', n: 'Miso ramen, Ramen Yokochō', r: 'hokkaido', d: 'd8' },
    { id: 'g19', n: 'Ramen Dōjō at New Chitose', r: 'hokkaido', d: 'd9' },
    { id: 'g20', n: 'Nakano izakaya alley', r: 'tokyo', d: 'd9' },
    { id: 'g21', n: 'Kōenji music bar', r: 'tokyo', d: 'd9' },
    { id: 'g22', n: 'Wagyu / yakiniku', r: 'tokyo', d: 'd10' },
    { id: 'g23', n: 'Harmonica Yokochō bar', r: 'tokyo', d: 'd10' }
  ],

  baths: [
    { n: 1, jp: '初湯', en: 'Hatsu-yu', note: 'Bath No. 1' },
    { n: 2, jp: '笹の湯', en: 'Sasa-no-yu', note: 'Bath No. 2' },
    { n: 3, jp: '綿の湯', en: 'Wata-no-yu', note: 'Bath No. 3' },
    { n: 4, jp: '竹の湯', en: 'Take-no-yu', note: 'Bath No. 4' },
    { n: 5, jp: '松の湯', en: 'Matsu-no-yu', note: 'Bath No. 5' },
    { n: 6, jp: '目洗の湯', en: 'Mearai-no-yu', note: 'Said to be good for the eyes' },
    { n: 7, jp: '七操の湯', en: 'Nanakuri-no-yu', note: 'Bath No. 7' },
    { n: 8, jp: '神明滝の湯', en: 'Shinmei-taki-no-yu', note: 'Spring from Shinmei hill' },
    { n: 9, jp: '渋大湯', en: 'Ō-yu', note: 'The big one; brown water and a steam room' },
    { n: 10, jp: '渋高薬師', en: 'Shibu Takayakushi', note: 'Temple above town: the final stamp' }
  ],

  phrases: [
    { c: 'Basics', items: [
      ['Excuse me / sorry', 'すみません', 'Sumimasen'],
      ['Thank you very much', 'ありがとうございます', 'Arigatō gozaimasu'],
      ['There are three of us', '三人です', 'San-nin desu'],
      ['Do you have an English menu?', '英語のメニューはありますか?', 'Eigo no menyū wa arimasu ka?'],
      ['Can I pay by card?', 'カードで払えますか?', 'Kādo de haraemasu ka?'],
      ['The bill, please', 'お会計お願いします', 'O-kaikei onegaishimasu'],
      ['Where is the toilet?', 'トイレはどこですか?', 'Toire wa doko desu ka?'],
      ['I don\'t understand Japanese', '日本語がわかりません', 'Nihongo ga wakarimasen']
    ]},
    { c: 'Food & bars', items: [
      ['No reservation. Can three of us get in?', '予約していませんが、三人入れますか?', 'Yoyaku shite imasen ga, san-nin hairemasu ka?'],
      ['What do you recommend?', 'おすすめは何ですか?', 'Osusume wa nan desu ka?'],
      ['This one, please', 'これをください', 'Kore o kudasai'],
      ['Three draft beers, please', '生ビールを三つください', 'Nama bīru o mittsu kudasai'],
      ['Cheers!', '乾杯!', 'Kanpai!'],
      ['Is there a cover charge?', 'チャージはありますか?', 'Chāji wa arimasu ka?'],
      ['Can we pay separately?', '別々に払えますか?', 'Betsubetsu ni haraemasu ka?'],
      ['Thank you for the meal', 'ごちそうさまでした', 'Gochisōsama deshita']
    ]},
    { c: 'Onsen & ryokan', items: [
      ['The key for the public baths, please', '外湯の鍵をお願いします', 'Sotoyu no kagi o onegaishimasu'],
      ['Is it OK with tattoos?', 'タトゥーがあっても入れますか?', 'Tatū ga atte mo hairemasu ka?'],
      ['What time is dinner?', '夕食は何時ですか?', 'Yūshoku wa nan-ji desu ka?'],
      ['Do you have the prayer towel for the nine baths?', '祈願手ぬぐいはありますか?', 'Kigan tenugui wa arimasu ka?'],
      ['Is this the men\'s bath?', 'ここは男湯ですか?', 'Koko wa otoko-yu desu ka?']
    ]},
    { c: 'Getting around', items: [
      ['To here, please (show the card)', 'ここまでお願いします', 'Koko made onegaishimasu'],
      ['Does this train go to Nagano?', 'この電車は長野に行きますか?', 'Kono densha wa Nagano ni ikimasu ka?'],
      ['What time is the next train?', '次の電車は何時ですか?', 'Tsugi no densha wa nan-ji desu ka?'],
      ['We\'d like to send this snowboard to our hotel', 'このスノーボードをホテルに送りたいです', 'Kono sunōbōdo o hoteru ni okuritai desu'],
      ['Can you hold our bags?', '荷物を預かってもらえますか?', 'Nimotsu o azukatte moraemasu ka?'],
      ['Where are the coin lockers?', 'コインロッカーはどこですか?', 'Koin rokkā wa doko desu ka?']
    ]},
    { c: 'Skiing', items: [
      ['Three one-day lift tickets, please', '一日券を三枚ください', 'Ichinichi-ken o san-mai kudasai'],
      ['My boots are too tight', 'ブーツがきついです', 'Būtsu ga kitsui desu'],
      ['I\'m a beginner', '初心者です', 'Shoshinsha desu'],
      ['Which lifts run tonight?', '今夜はどのリフトが動いていますか?', 'Kon\'ya wa dono rifuto ga ugoite imasu ka?']
    ]},
    { c: 'Shopping', items: [
      ['Can I buy this tax-free?', '免税できますか?', 'Menzei dekimasu ka?'],
      ['Here\'s my passport', 'パスポートです', 'Pasupōto desu'],
      ['No bag, thanks', '袋はいりません', 'Fukuro wa irimasen'],
      ['Do you have a bigger size?', 'もっと大きいサイズはありますか?', 'Motto ōkii saizu wa arimasu ka?']
    ]},
    { c: 'Emergency', items: [
      ['Help!', '助けて!', 'Tasukete!'],
      ['Please call an ambulance', '救急車を呼んでください', 'Kyūkyūsha o yonde kudasai'],
      ['Please call the police', '警察を呼んでください', 'Keisatsu o yonde kudasai'],
      ['I\'ve lost my wallet', '財布をなくしました', 'Saifu o nakushimashita'],
      ['I left something on the train', '電車に忘れ物をしました', 'Densha ni wasuremono o shimashita'],
      ['I got separated from my friends', '友達とはぐれました', 'Tomodachi to haguremashita'],
      ['Where is the nearest hospital?', '一番近い病院はどこですか?', 'Ichiban chikai byōin wa doko desu ka?']
    ]}
  ],

  onsenRules: [
    'Separate baths for men and women; you go in naked. No swimwear.',
    'Wash and rinse fully at the seated showers first.',
    'The small towel stays out of the water (on your head is traditional).',
    'No phones or photos.',
    'Shibu\'s public baths are very hot. Add cold water only if nobody else is in.',
    'Drink water afterwards, especially before more sake.',
    'Tattoos: many baths refuse visible ones. Use private-use baths (kashikiri) or cover stickers.'
  ],

  emergency: [
    { n: 'Police', tel: '110' },
    { n: 'Ambulance and fire', tel: '119' },
    { n: 'Japan Visitor Hotline (English, 24 h)', tel: '050-3816-2787' },
    { n: 'Embassy of Canada, Tokyo', tel: '03-5412-6200' }
  ],

  // Demo "pretend I'm here" spots for the Find Home compass
  demoSpots: [
    { n: 'Kanda under the tracks', lat: 35.6918, lng: 139.7709, area: 'tokyo' },
    { n: 'Kōenji Station', lat: 35.7053, lng: 139.6496, area: 'tokyo' },
    { n: 'Harmonica Yokochō, Kichijōji', lat: 35.7038, lng: 139.5797, area: 'tokyo' },
    { n: 'Jigokudani trailhead', lat: 36.7313, lng: 138.4442, area: 'nagano' },
    { n: 'Zenkō-ji', lat: 36.6617, lng: 138.1878, area: 'nagano' },
    { n: 'Hirafu Welcome Centre', lat: 42.8607, lng: 140.6976, area: 'hokkaido' },
    { n: 'Susukino crossing', lat: 43.0553, lng: 141.3530, area: 'hokkaido' }
  ],

  sources: 'Plan synced Nov 15, 2026 from the group\'s Japan_Round2_Trip_Planner sheet (Itinerary, Lodging, Transport, Activities, Eats, Book Now, Budget tabs). Hotel addresses, phones and check-in times from Koishiya (489ban), Chisun Grand Nagano (Solare), Quintessa Hotels, Expedia / Hotels.com listings for J-ARC Akebonobashi, The Setsumon and NAKANO WORLD HOTEL, and Japan Ski Experience / SamuraiSnow (The Setsumon), Nov 15, 2026.'
};
