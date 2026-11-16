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
      name: 'Sleep Inn & Suites Buffalo Airport', short: 'Buffalo',
      sub: 'Booked · 2 double beds · C$118.34 for 3 (≈ C$39 each), non-refundable. Check-in 16:00–03:00, 24 h desk, minimum age 21. US$200 deposit held at check-in. The shuttle only runs to the airport: Uber from Metro Center.',
      addr: '100 Holtz Dr, Cheektowaga, NY 14225', jp: '', addrJp: '', tel: '+1 716-626-4000',
      lat: 42.9295, lng: -78.7395, inT: '16:00', outT: '11:00', area: 'us'
    },
    tokyo: {
      name: 'J-ARC Akebonobashi', short: 'Akebonobashi', jp: 'J-ARC 曙橋',
      sub: 'Booked · apartment for 3, Arakichō (Shinjuku) · C$423.67 for 3 (≈ C$141 each) for 2 nights, free cancel to Dec 3 18:00 JST. No reception: message the property 24 h+ before arrival for the entry instructions. Akebonobashi Stn 4 min, Yotsuya-sanchōme 7 min.',
      addr: '18-3 Arakichō, Shinjuku-ku, Tokyo 160-0007', addrJp: '東京都新宿区荒木町18-3',
      tel: '', lat: 35.6908, lng: 139.7208, inT: '15:00', outT: '10:00', area: 'tokyo'
    },
    shibu: {
      name: 'Shiroganeya Ryokan', short: 'Shibu Onsen', jp: '渋温泉 白銀屋旅館',
      sub: 'Booked · Japanese-style room for 3, dinner included Dec 12, no breakfast · C$396.11 for 3 (≈ C$132 each), free cancel before 12:00 JST Dec 4. Check in 15:00–18:00: be there by 18:00 for dinner. Ask for the bath key and yukata; the key opens all nine public baths. Onsen tax paid on arrival.',
      addr: '2054 Hirao, Yamanouchi-machi, Shimotakai-gun, Nagano 381-0401', addrJp: '長野県下高井郡山ノ内町平穏2054',
      tel: '0269-33-3225', lat: 36.7340, lng: 138.4322, inT: '15:00', outT: '10:00', area: 'nagano'
    },
    nagano: {
      name: 'Chisun Grand Nagano', short: 'Nagano City', jp: 'チサングランド長野',
      sub: 'Booked · Standard Triple (3 beds) · C$152.73 for 3 (≈ C$51 each), free cancel to Dec 12 23:59 JST. 5 min walk from Nagano Station; the 24 h desk holds bags before check-in.',
      addr: '2-17-1 Minami-Chitose, Nagano 380-0823', addrJp: '長野県長野市南千歳2-17-1',
      tel: '026-264-6000', lat: 36.6448, lng: 138.1893, inT: '14:00', outT: '11:00', area: 'nagano'
    },
    niseko: {
      name: 'The Setsumon', short: 'Niseko Hirafu', jp: 'ザ・セツモン ニセコ',
      sub: 'Booked · Superior Studio (A), central Hirafu · C$724.80 for 3 (≈ C$242 each) for 2 nights, non-refundable; C$19.20 of that is paid at the property. No front desk and check-in closes 18:00: you arrive about 18:30, so message them by Dec 11.',
      addr: '191-54 Yamada (Niseko Hirafu 1-jō), Kutchan-chō, Abuta-gun, Hokkaido 044-0080', addrJp: '北海道虻田郡倶知安町字山田191-54',
      tel: '+81 136-23-1724', lat: 42.8620, lng: 140.6962, inT: '15:00', outT: '10:00', area: 'hokkaido'
    },
    sapporo: {
      name: 'Quintessa Hotel Sapporo Susukino', short: 'Sapporo', jp: 'クインテッサホテル札幌すすきの',
      sub: 'Booked · Family Twin for 3 · C$216.14 for 3 (≈ C$72 each) for 2 nights, free cancel to Dec 15. 24 h desk. In Susukino: 5 min from Susukino Station, walk to Ōdōri and Nijō Market.',
      addr: 'Minami 6-jō Nishi 4-chōme 1-2, Chūō-ku, Sapporo 064-0806', addrJp: '北海道札幌市中央区南6条西4丁目1-2',
      tel: '011-530-6611', lat: 43.0527, lng: 141.3537, inT: '15:00', outT: '11:00', area: 'hokkaido'
    },
    tokyo2: {
      name: 'Tokyo #2 hotel (to book)', short: 'Tokyo #2',
      sub: 'Not booked. Options in the sheet: NAKANO WORLD HOTEL (≈ C$627 for 3, next to Nakano Broadway) or Asakusa, which has direct trains from Narita and to Haneda (OTHER SPACE Asakusa ≈ C$740 for 3). When you get there, pin it on the Find Home screen.',
      addr: '', jp: '', addrJp: '',
      tel: '', lat: null, lng: null, inT: '15:00', outT: '10:00', area: 'tokyo'
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
      title: 'Night bus to Buffalo', sub: 'Union Station 20:00 · border · Sleep Inn & Suites',
      tagline: 'Nobody leaves a car in Buffalo: you fly home into Pearson.',
      plan: 0,
      transit: {
        title: 'Toronto → Buffalo', meta: '2 h 55 + border · booked, C$28.82 each',
        steps: [
          'Adirondack Trailways bus N813-D, Union Station (Front St W) 20:00 → Buffalo NFTA Metro Center 22:55. Booked on Omio; non-refundable, this bus only.',
          'Be there by 19:40. Bags: 1 carry-on + 2 checked (50 lb, 62 in. each). A board bag is longer than 62 in.: Mo, confirm with Trailways.',
          'US border: everyone off with bags, passports out.',
          'Metro Center → Sleep Inn & Suites Buffalo Airport: Uber or taxi, about 20–25 min. The hotel shuttle only runs to and from the airport.'
        ]
      },
      items: [
        { t: '19:40', k: 'meet', ttl: 'Meet at Union Station', txt: 'Front St West, with bags and passports. Arrive 20 min early.', pl: { n: 'Union Station, Toronto', q: 'Union Station Bus Terminal Toronto' } },
        { t: '20:00', k: 'bus', ttl: 'Trailways bus to Buffalo', txt: 'Adirondack Trailways N813-D, arrives Metro Center 22:55. Booked (Omio). ID at the border.', cost: 'paid · C$28.82 each', fix: 1, leave: '19:40', bk: 'bus' },
        { t: '21:00', a: 1, k: 'admin', ttl: 'US border', txt: 'Everyone off with their bags. Passports out. Can add up to an hour.' },
        { t: '23:00', k: 'move', ttl: 'Uber to Sleep Inn & Suites', txt: 'From Metro Center, about 20–25 min (the hotel shuttle is airport-only). Check-in runs to 03:00; US$200 deposit on a card.', cost: '≈ US$25–35 total', bk: 'buffalo', pl: { n: 'NFTA Metro Center', q: 'NFTA Metropolitan Transportation Center Buffalo' } },
        { t: '23:30', a: 1, k: 'stay', ttl: 'Check in, book the shuttle', txt: 'Ask the front desk to put you on the 07:30 airport shuttle.', pl: { n: 'Sleep Inn & Suites Buffalo Airport', q: 'Sleep Inn & Suites Buffalo Airport 100 Holtz Dr Cheektowaga' } },
        { t: '23:45', k: 'sleep', ttl: 'Lights out', txt: 'Alarms for 06:45. Shuttle to BUF at 07:30.' }
      ],
      go: [
        { n: 'Union Station Bus Terminal', q: 'Union Station Bus Terminal Toronto', why: 'Where the 20:00 Trailways bus leaves.' },
        { n: 'NFTA Metro Center, Buffalo', q: 'NFTA Metropolitan Transportation Center Buffalo', why: 'Bus arrives 22:55. Uber to the hotel.' },
        { n: 'Sleep Inn & Suites Buffalo Airport', q: 'Sleep Inn & Suites Buffalo Airport 100 Holtz Dr Cheektowaga', why: 'Tonight\'s hotel, 5–10 min from BUF.' },
        { n: 'Buffalo Niagara Intl Airport (BUF)', q: 'Buffalo Niagara International Airport', why: 'UA 6157 at 10:00 tomorrow.' }
      ],
      buy: [
        { w: 'Bus (already paid)', p: 'C$28.82 each', note: 'Omio, non-refundable.' },
        { w: 'Uber Metro Center → hotel', p: '≈ US$25–35 total' },
        { w: 'Sleep Inn & Suites (already paid)', p: 'C$118.34 for 3', note: 'Plus a US$200 card deposit, released after check-out.' },
        { w: 'A few US dollars in cash', p: 'US$20–40', note: 'Taxis, shuttle tips, vending machines.' }
      ],
      do: [
        { ttl: 'Pack for a missed bag', txt: 'Two days of clothes, meds, chargers and cameras in carry-on. The Dulles connection is 52 minutes.' },
        { ttl: 'Border, fast', txt: 'Passports in hand before the bus stops. Declare food. It can take up to an hour.' }
      ],
      prep: ['Three passports', 'Power banks in carry-on', 'Ski jacket worn, not packed', 'United app open with all three on the booking', 'Visit Japan Web QR saved', 'Mo: board bag tagged with the Niseko hotel address'],
      regroup: { n: 'Union Station Bus Terminal', note: 'In Buffalo: Metro Center, then the Sleep Inn lobby.' }
    },

    {
      id: 'd-1', n: -1, date: '2026-12-09', tz: 'ET', from: '04:00',
      region: 'air', place: 'buffalo', sleep: 'plane',
      title: 'The long day', sub: 'Buffalo → Dulles → Haneda',
      tagline: '14 h 30 over the top of the world.',
      plan: 2000,
      flight: { code: 'UA 803', from: 'IAD', to: 'HND', dep: { d: '2026-12-09', t: '12:20', tz: 'ET' }, arr: { d: '2026-12-10', t: '16:50', tz: 'JST' } },
      items: [
        { t: '07:30', k: 'bus', ttl: 'Hotel shuttle → BUF', txt: 'Sleep Inn & Suites airport shuttle (booked at the desk last night), 5–10 min; Uber if it doesn\'t show. Check-out is 11:00, so no rush. Check in by about 09:00 and check bags through to Haneda.', cost: 'shuttle free · 2 checked bags included', fix: 1, leave: '07:30' },
        { t: '10:00', k: 'flight', ttl: 'UA 6157 Buffalo → Dulles', txt: 'Arrives 11:28. Mo is in 23B; sit near the front: you have 52 minutes at Dulles.', fix: 1, bk: 'united' },
        { t: '11:28', k: 'move', ttl: 'Dulles: 52-minute connection', txt: 'No customs here. Go straight to the UA 803 gate (AeroTrain between concourses). Look up the gate before landing.', pl: { n: 'Washington Dulles (IAD)', q: 'Washington Dulles International Airport' } },
        { t: '12:20', k: 'flight', ttl: 'UA 803 Dulles → Haneda', txt: 'Mo in 50K. 14 h 30. Stay awake for the first half, sleep the second half. Lands 16:50 Japan time on Thu Dec 10.', fix: 1, bk: 'united', dur: 870 }
      ],
      warn: 'UA 803 is the only Dulles–Haneda flight of the day. A snow or de-icing delay in Buffalo could cost you a day in Tokyo, and the shinkansen on Dec 12 is booked. Ask United about an earlier Buffalo → Dulles flight; free fallback is to be at BUF by 05:00 and ask to stand by.',
      go: [
        { n: 'Buffalo Niagara Intl Airport', q: 'Buffalo Niagara International Airport', why: 'UA 6157 at 10:00. Hotel shuttle at 07:30.' },
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
        { t: '17:15', a: 1, k: 'admin', ttl: 'Mo: ship the board to Niseko', txt: '2F arrivals, JAL ABC or Yamato counter: ski bag delivery to The Setsumon, Hirafu. Arrives about Dec 12–13. Cash, plus the hotel\'s address and phone (+81 136-23-1724) for the form. Only send it once The Setsumon has said they\'ll hold it.', cost: '≈ ¥3,500 cash', bk: 'board1' },
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
      plan: 9500, stamps: 1,
      transit: {
        title: 'Akebonobashi → Shibu Onsen', meta: 'about 3 h · ≈ ¥10,200',
        steps: [
          '07:25 leave the apartment. Walk to Yotsuya-sanchōme, Marunouchi Line direct to Tokyo Station, about 12 min.',
          'Kagayaki 505, Tokyo 08:11 → Nagano 09:38. Booked: Car 3, seats 16-A/B/C. Each of you needs your own Suica linked to the e-ticket on Eki-net, or a paper ticket from a JR machine.',
          'Nagaden Limited Express from the basement of Nagano Station → Yudanaka, about 45 min, ¥1,760. Check the Snow Monkey Pass (¥5,100) at the Nagaden counter first.',
          'Yudanaka → Shibu Onsen: local bus 5 min, or taxi (Shiroganeya is about 2 km from Yudanaka Station).'
        ]
      },
      items: [
        { t: '06:45', k: 'stay', ttl: 'Check out', txt: 'Out by 07:25. Leave the apartment as asked (keys, rubbish).' },
        { t: '07:25', k: 'train', ttl: 'Marunouchi Line to Tokyo Station', txt: 'From Yotsuya-sanchōme, direct, about 12 min. Buy an ekiben at Tokyo Station.', cost: '≈ ¥180 · ekiben ≈ ¥1,200', fix: 1, leave: '07:20' },
        { t: '08:11', k: 'train', ttl: 'Kagayaki 505 → Nagano', txt: 'Booked: Car 3, seats 16-A/B/C. Arrives 09:38. Linked Suica (or paper ticket) to get through the gate.', cost: 'paid · ¥8,250 each', fix: 1, leave: '07:55', bk: 'shink1' },
        { t: '10:00', a: 1, k: 'train', ttl: 'Nagaden → Yudanaka', txt: 'From the basement of Nagano Station. Ask about the Snow Monkey Pass: Nagaden for the day, the bus to the park and back, and park entry. Worth it if those add up to more than ¥5,100.', cost: '¥1,760 · or pass ¥5,100' },
        { t: '11:00', a: 1, k: 'stay', ttl: 'Drop bags at Shiroganeya', txt: 'Bus or taxi from Yudanaka. Check-in proper is 15:00–18:00.', bk: 'ryokan', pl: { n: 'Shiroganeya Ryokan', jp: '渋温泉 白銀屋旅館', q: 'Shiroganeya Ryokan Shibu Onsen' } },
        { t: '11:45', k: 'food', ttl: 'Soba lunch in Shibu or Yudanaka', txt: 'Nagano is soba country.', cost: '≈ ¥1,200–1,800' },
        { t: '12:30', k: 'see', ttl: 'Jigokudani Snow Monkey Park', txt: 'Bus to the Snow Monkey Park stop, then a 30–35 min snowy trail. Wild macaques in a steaming pool. Dated web ticket (or the pass). Open 9:00–16:00. Boots with grip or slip-on spikes.', cost: '≈ ¥1,000 (new fees from Dec 1)', fix: 1, leave: '12:15', bk: 'monkey', pl: { n: 'Jigokudani Monkey Park', jp: '地獄谷野猿公苑', q: 'Jigokudani Monkey Park' } },
        { t: '15:30', k: 'bus', ttl: 'Walk out, back to Shibu' },
        { t: '17:00', k: 'onsen', ttl: 'Check in at Shiroganeya · first onsen', txt: 'Check-in is 15:00–18:00: you must be there by 18:00 for dinner. Get the bath key and yukata, pay the onsen tax, then try one of the nine public baths.', cost: 'onsen tax at the desk', fix: 1, bk: 'ryokan' },
        { t: '19:00', k: 'food', ttl: 'Dinner at the ryokan', txt: 'Included in your booking. Ask the time at check-in.', cost: 'included', pl: { n: 'Shiroganeya Ryokan', jp: '渋温泉 白銀屋旅館', q: 'Shiroganeya Ryokan Shibu Onsen' } },
        { t: '21:00', k: 'onsen', ttl: 'Nine-bath crawl in yukata', txt: 'Your key opens all nine public baths, 6:00–22:00. Stamp a towel at each, then the final stamp at Shibu Takayakushi. Stamp card is in this app.', cost: 'free · stamp towel small fee' }
      ],
      warn: 'Be back at Shiroganeya by 18:00: there\'s no late check-in and dinner is part of the booking. Shinkansen e-tickets need each person\'s own Suica linked on Eki-net before boarding; the reservation email alone won\'t open the gate.',
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
        { w: 'Dinner at Shiroganeya', p: 'included' },
        { w: 'Onsen / accommodation tax', p: 'small; paid at the desk' },
        { w: 'Stamp towel (kigan tenugui)', p: 'small; ask at the desk' },
        { w: 'Konbini breakfast for tomorrow', p: '≈ ¥500', note: 'The ryokan has no breakfast.' }
      ],
      do: [
        { ttl: 'Nine-bath crawl', txt: 'Each bath is locked; your key opens all of them. Knock, peek, add cold water only if you\'re alone. Bring the small towel and a plastic bag for wet things.' },
        { ttl: 'Yukata 101', txt: 'Left side over right (right over left is for funerals). Wear the jacket on top outside; it\'s freezing.' },
        { ttl: 'Monkey park', txt: 'Phones on silent, no food in sight, stay 1–2 m back. Start back by 15:15; it gets dark early.' }
      ],
      prep: ['Out of the apartment by 07:25', 'Suica linked to the e-ticket (all three)', 'Grip boots on', 'Monkey park ticket saved (or buy the pass)', 'Back at Shiroganeya by 18:00', 'Buy tomorrow\'s breakfast'],
      regroup: { n: 'Shiroganeya Ryokan', jp: '渋温泉 白銀屋旅館', note: 'Shibu is one lane; you can\'t get lost for long.' }
    },

    {
      id: 'd4', n: 4, date: '2026-12-13', tz: 'JST', from: '04:00',
      region: 'nagano', place: 'nagano', sleep: 'nagano', night: 1,
      title: 'Chestnut town and Zenkō-ji', sub: 'Obuse day trip · Okaidan tunnel · Gondō',
      tagline: 'Chestnut sweets, sake tasting, and a pitch-black tunnel under a temple.',
      plan: 11500,
      transit: {
        title: 'Shibu → Nagano City, with Obuse', meta: 'three short Nagaden rides · ≈ ¥3,700',
        steps: [
          'Walk or bus to Yudanaka, then Nagaden Limited Express to Nagano with bags, about 45 min, ¥1,760. The Snow Monkey Pass was 1 day only: buy at the machine.',
          'Drop bags at Chisun Grand Nagano, 5 min from Nagano Station.',
          'Nagaden Limited Express Nagano ⇄ Obuse, about 25 min each way, ¥970 (local ¥870).',
          'Zenkō-ji: about 25 min walk up Chūō-dōri from the station, or the local bus.'
        ]
      },
      items: [
        { t: '08:00', k: 'onsen', ttl: 'Morning bath, konbini breakfast', txt: 'Shiroganeya has no breakfast: eat what you bought last night.' },
        { t: '09:15', k: 'stay', ttl: 'Check out of Shiroganeya', txt: 'Out by about 09:15 (deadline 10:00). Walk or bus to Yudanaka Station.' },
        { t: '09:30', k: 'train', ttl: 'Nagaden Yudanaka → Nagano', txt: 'With bags, about 45 min.', cost: '¥1,760', fix: 1, leave: '09:15' },
        { t: '10:20', a: 1, k: 'stay', ttl: 'Drop bags at Chisun Grand', txt: '5 min walk from the station.', bk: 'nagano', pl: { n: 'Chisun Grand Nagano', jp: 'チサングランド長野', q: 'Chisun Grand Nagano' } },
        { t: '10:45', k: 'train', ttl: 'Nagaden → Obuse', txt: 'About 25 min.', cost: '¥970', fix: 1 },
        { t: '11:15', k: 'food', ttl: 'Obuse: chestnut town', txt: 'Kurikinton and Mont Blanc, a Masuichi-Ichimura sake tasting, the Hokusai Museum. Lunch: kuri-okowa (chestnut rice).', cost: '≈ ¥2,300 snacks + tasting · lunch ≈ ¥1,500', pl: { n: 'Obuse', jp: '小布施', q: 'Obuse Masuichi Ichimura' } },
        { t: '14:30', k: 'train', ttl: 'Nagaden back to Nagano', cost: '¥970' },
        { t: '15:15', k: 'see', ttl: 'Zenkō-ji', txt: 'Up Chūō-dōri and Nakamise. The Okaidan: a pitch-dark tunnel under the altar where you feel for the "key to paradise". The Ninja Daimon shop is next door (Togakushi\'s ninja sites are closed in winter).', cost: 'grounds free · Okaidan small fee', pl: { n: 'Zenkō-ji', jp: '善光寺', q: 'Zenkoji Temple Nagano' } },
        { t: '17:00', k: 'stay', ttl: 'Check in at Chisun Grand', txt: 'Standard Triple, 3 beds. Check-in from 14:00.', bk: 'nagano' },
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
        { w: 'Konbini breakfast', p: '≈ ¥500' },
        { w: 'Nagaden Yudanaka → Nagano', p: '¥1,760' },
        { w: 'Nagaden to Obuse and back', p: '¥1,940' },
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
      prep: ['Out of Shiroganeya by 09:15', 'Bags to the Chisun desk before Obuse'],
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
        title: 'Nagano → Niseko Hirafu', meta: 'about 10 h · ≈ ¥28,600',
        steps: [
          'Kagayaki 503, Nagano 08:39 → Toyama 09:24. Booked (E50023): Car 6, seats 15-A/B/C. Link each Suica to the e-ticket on Eki-net, like Dec 12.',
          'Airport bus, Toyama Station → Toyama Airport, 10:20 → 10:44, ¥420, pay when you get off. Backup 10:25 → 10:48, or a taxi (about 15 min). You have about 55 min at the station first.',
          'ANA NH1181, Toyama 12:50 → New Chitose 14:20. Booked (F8QYFD, restricted fare). 1 checked bag each.',
          'Hokkaido Resort Liner, New Chitose 15:50 → Hirafu Welcome Centre about 18:30, ¥5,700. Book on WAMAZING by 18:00 JST Dec 5. Backups 17:50 and 19:30.',
          'Welcome Centre → The Setsumon: a short walk in central Hirafu. Check-in officially closes 18:00, so message them about the 18:30 arrival by Dec 11.'
        ]
      },
      items: [
        { t: '07:45', k: 'food', ttl: 'Konbini breakfast, pack' },
        { t: '08:20', k: 'move', ttl: 'Check out, walk to Nagano Station', txt: 'About 5 min.' },
        { t: '08:39', k: 'train', ttl: 'Kagayaki 503 Nagano → Toyama', txt: 'Booked: Car 6, seats 15-A/B/C. Arrives 09:24. Linked Suica (or paper ticket) to get through the gate.', cost: 'paid · ¥6,890 each', fix: 1, leave: '08:20', bk: 'shink2' },
        { t: '09:30', k: 'food', ttl: 'Toyama Station: grab food', txt: 'About 55 min before the airport bus.' },
        { t: '10:20', k: 'bus', ttl: 'Airport bus to Toyama Airport', txt: 'Arrives 10:44. Board at the rear, pay when you get off. Backup 10:25 (arr 10:48) or taxi, about 15 min.', cost: '¥420', fix: 1, leave: '10:10' },
        { t: '12:50', k: 'flight', ttl: 'ANA NH1181 Toyama → New Chitose', txt: 'Arrives 14:20. Power banks stay with you, not in the overhead bin.', cost: 'paid · ¥15,600', fix: 1, bk: 'ana' },
        { t: '15:50', k: 'bus', ttl: 'Hokkaido Resort Liner → Hirafu', txt: 'From the domestic terminal. 2.5–3 h over the pass. Mt Yōtei at dusk.', cost: '¥5,700', fix: 1, leave: '15:30', bk: 'liner', pl: { n: 'New Chitose domestic terminal', jp: '新千歳空港 国内線', q: 'New Chitose Airport Domestic Terminal' } },
        { t: '18:30', a: 1, k: 'stay', ttl: 'Check in at The Setsumon', txt: 'No front desk, and check-in closes 18:00: use the late-arrival instructions they sent after your Dec 11 message. C$19.20 due at the property. Mo\'s board should be waiting.', bk: 'niseko', bag: 'arrive', pl: { n: 'The Setsumon', jp: '北海道虻田郡倶知安町字山田191-54', q: 'The Setsumon Niseko' } },
        { t: '19:00', k: 'ski', ttl: 'Pick up rental gear (Trenton & AJ)', txt: 'Tonight, so tomorrow starts on snow, not in a queue.', cost: '≈ ¥12,000 each for 2 days', bk: 'rental' },
        { t: '20:00', k: 'food', ttl: 'Dinner in Hirafu village, early night', cost: '≈ ¥3,500–5,000' }
      ],
      warn: 'The Resort Liner booking has a hard cutoff: 18:00 JST on Dec 5 (04:00 Toronto time). Miss it and you\'re on a taxi or a later bus. You reach The Setsumon after its 18:00 check-in cutoff: message them by Dec 11.',
      go: [
        { n: 'Toyama Airport', jp: '富山空港', q: 'Toyama Airport', why: 'ANA NH1181 at 12:50.' },
        { n: 'New Chitose domestic terminal', jp: '新千歳空港 国内線', q: 'New Chitose Airport Domestic Terminal', why: 'Resort Liner stop. Ramen and Royce if you have time.' },
        { n: 'Hirafu Welcome Centre', jp: 'ひらふウェルカムセンター', q: 'Hirafu Welcome Center Niseko', why: 'Bus stop, info desk, Yamato counter.' },
        { n: 'Seicomart Hirafu', jp: 'セイコーマート', q: 'Seicomart Niseko Hirafu', why: 'Hokkaido\'s konbini; the "Hot Chef" counter does fresh katsudon and fried chicken.' }
      ],
      buy: [
        { w: 'Kagayaki 503 (already paid)', p: '¥6,890 each' },
        { w: 'Toyama airport bus', p: '¥420', note: 'Pay on board.' },
        { w: 'ANA NH1181 (paid)', p: '¥15,600', note: 'Mo and Trenton ticketed. AJ: confirm you\'re on F8QYFD.' },
        { w: 'The Setsumon balance', p: 'C$19.20', note: 'Paid at the property.' },
        { w: 'Resort Liner', p: '¥5,700' },
        { w: 'Board rental, 2 days (Trenton & AJ)', p: '≈ ¥12,000 each' },
        { w: 'Dinner in Hirafu', p: '≈ ¥3,500–5,000' }
      ],
      do: [
        { ttl: 'Rental fitting', txt: 'Boots should touch your toes standing and pull back when you flex. Ask for a snug boot; rental boots pack out fast.' },
        { ttl: 'Niseko Rules', txt: 'Off-piste only through the marked gates, and only when they\'re open. Ropes are not suggestions; lift passes get cut.' }
      ],
      prep: ['Suica linked to the E50023 e-ticket (all three)', 'Out of Chisun by 08:20', 'Resort Liner booked (by Dec 5)', 'The Setsumon late check-in instructions saved', 'Power banks in your pocket for the flight'],
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
        { t: '08:30', k: 'ski', ttl: 'First chair: Grand Hirafu + Hanazono', txt: 'Niseko United 2-day All Mountain pass: today plus tomorrow morning, all four resorts. Book online. Traverse to Hanazono for wide, quieter runs.', cost: '2-day pass ¥24,700', bk: 'lift', pl: { n: 'Niseko Grand Hirafu', jp: 'ニセコグラン・ヒラフ', q: 'Niseko Tokyu Grand Hirafu' } },
        { t: '12:00', k: 'food', ttl: 'Lunch on the mountain', cost: '≈ ¥1,800–2,800' },
        { t: '14:00', k: 'ski', ttl: 'Keep riding, or a half-day guided powder tour', cost: 'tour TBD' },
        { t: '16:00', k: 'see', ttl: 'Mt Yōtei sunset', txt: 'From the top of the Hirafu gondola, sunset about 16:00.', sun: 1 },
        { t: '17:00', k: 'onsen', ttl: 'Onsen soak in Hirafu', txt: 'Yukoro in lower Hirafu is the locals\' bath; Yumoto Niseko Prince Hotel Hirafutei has an outdoor bath facing the slopes.', cost: '≈ ¥1,000–1,500', pl: { n: 'Hirafutei onsen', jp: 'ニセコプリンスホテル ひらふ亭', q: 'Yumoto Niseko Prince Hotel Hirafutei' } },
        { t: '19:00', k: 'food', ttl: 'Izakaya dinner in Hirafu', txt: 'Reserve, even mid-December.', cost: '≈ ¥4,000–6,000' },
        { t: '21:00', k: 'ski', ttl: 'Night riding under the lights', txt: 'Hirafu night skiing runs from Dec 12. Same pass. Not every lift runs after dark; check the night map.', cost: 'included' }
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
      title: 'Last runs, Otaru, Susukino', sub: 'Morning on the hill · board to Haneda · canal at dusk · Sapporo',
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
        { t: '08:30', k: 'ski', ttl: 'Morning runs until about 11:15', txt: 'Day 2 of the All Mountain pass.', bk: 'lift' },
        { t: '11:30', k: 'admin', ttl: 'Mo: ship the board to Haneda T3', txt: 'Yamato counter at the Hirafu Welcome Centre. Use the airport-delivery form for UA 804 on Dec 20: pick it up at the Haneda T3 Yamato / JAL ABC counter before check-in. Board, bindings and boots only. Keeps it off the Dec 18 Jetstar flight (20 kg limit).', cost: '≈ ¥3,000 cash', fix: 1, bk: 'board2', bag: 'ship', pl: { n: 'Hirafu Welcome Centre', jp: 'ひらふウェルカムセンター', q: 'Hirafu Welcome Center Niseko' } },
        { t: '12:15', k: 'train', ttl: 'Bus to Kutchan, JR to Otaru', txt: 'Check the exact train last night.', cost: '≈ ¥1,500–1,800', fix: 1, leave: '12:00' },
        { t: '14:30', k: 'see', ttl: 'Otaru: Sakaimachi Street', txt: 'Kitaichi Glass, LeTAO, the Music Box Museum. Coin lockers at Otaru Station for the bags.', cost: 'lockers ≈ ¥500–800', pl: { n: 'Sakaimachi Street', jp: '堺町通り', q: 'Sakaimachi Street Otaru' } },
        { t: '15:15', k: 'food', ttl: 'Otaru Soko No.1 brewery', txt: 'Free 20-min brewery tour, German beer hall: pilsner, dunkel, weiss, sausages and pretzels.', cost: 'pay as you go', pl: { n: 'Otaru Soko No.1', jp: '小樽倉庫No.1', q: 'Otaru Soko No.1' } },
        { t: '16:00', k: 'see', ttl: 'Otaru Canal at dusk', txt: 'Gas lamps come on around sunset.', sun: 1, pl: { n: 'Otaru Canal', jp: '小樽運河', q: 'Otaru Canal' } },
        { t: '17:30', k: 'food', ttl: 'Sushi dinner on Sushi-ya Dōri', txt: 'Otaru is a seafood port.', cost: '≈ ¥3,500–6,000', pl: { n: 'Sushi-ya Dōri', jp: '寿司屋通り', q: 'Sushiya Dori Otaru' } },
        { t: '19:30', k: 'train', ttl: 'JR rapid to Sapporo, check in', txt: 'About 35 min, then a short subway or taxi to Quintessa in Susukino. Check-in has no end time.', cost: '≈ ¥750', fix: 1, bk: 'sapporo' },
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
        { w: 'Board shipment to Haneda T3 (Mo)', p: '≈ ¥3,000', note: 'Cash.' },
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
      prep: ['Out by 10:00, bags in storage', 'Kutchan → Otaru train time', '¥3,000 cash for the board', 'UA 804 details for the airport-delivery form', 'Coins for lockers'],
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
      title: 'Back to Tokyo: Nakano and Kōenji', sub: 'Jetstar CTS → Narita · Nakano Broadway · Friday in Kōenji',
      tagline: 'Secondhand watches by day, tiny music bars by night.',
      plan: 13000,
      transit: {
        title: 'Sapporo → Narita → Tokyo #2 hotel', meta: 'about 5 h 30 door to door · ≈ ¥4,000 + the paid flight',
        steps: [
          'JR Rapid Airport, Sapporo 09:30 → New Chitose about 10:10, ≈ ¥1,230. Be at the Jetstar counter by 10:15: bag drop closes 10:25.',
          'Jetstar GK104, New Chitose 11:05 → Narita Terminal 3 13:00. Booked (HQ9PHD), seats 5D–F. 7 kg carry-on + 20 kg checked each. Web check-in opens Dec 16 at 11:05 JST.',
          'Terminal 3 has no station: walk 10–15 min or take the shuttle to Terminal 2.',
          'Into Tokyo: Skyliner to Ueno / Nippori 36–41 min ¥2,580; N\'EX to Tokyo 53–60 min ¥3,140 or Shinjuku 75–85 min ¥3,330; Access Express direct to Asakusa about 60 min ¥1,270; bus to Tokyo Station 65–90 min ¥1,500. Pick by where the Tokyo #2 hotel is (not booked yet).',
          'Nakano is about 5 min from Shinjuku on JR Chūō; Kōenji is one more stop. The Tokyo Subway 48-hour Ticket (¥1,500) doesn\'t cover JR, so it may not pay off.'
        ]
      },
      items: [
        { t: '08:30', k: 'stay', ttl: 'Pack, check out of Quintessa' },
        { t: '09:30', k: 'train', ttl: 'JR Rapid Airport to New Chitose', txt: 'About 40 min. Royce Chocolate World and quick ramen in the domestic terminal if there\'s time.', cost: '≈ ¥1,230', fix: 1, leave: '09:20' },
        { t: '10:15', k: 'admin', ttl: 'Jetstar bag drop', txt: 'Closes 10:25 (40 min before departure). 20 kg checked + 7 kg carry-on each; weigh at the self-service kiosks.' },
        { t: '11:05', k: 'flight', ttl: 'Jetstar GK104 New Chitose → Narita', txt: 'Booked HQ9PHD, seats 5D / 5E / 5F. Lands Narita Terminal 3 at 13:00, not Haneda.', cost: 'paid · ¥10,500 each', fix: 1, bk: 'jetstar' },
        { t: '13:00', a: 1, k: 'train', ttl: 'Narita T3 → Tokyo', txt: 'Walk or shuttle to the Terminal 2 station, then Skyliner, N\'EX, Access Express or the bus, depending on the hotel. 60–90 min.', cost: '≈ ¥1,270–3,330', pl: { n: 'Narita Airport Terminal 2 Station', jp: '空港第2ビル駅', q: 'Narita Airport Terminal 2 Station' } },
        { t: '15:00', k: 'stay', ttl: 'Check in at the Tokyo #2 hotel', txt: 'Not booked yet: see Bookings. No board to collect; it\'s waiting at Haneda.', bk: 'tokyo2' },
        { t: '15:30', k: 'shop', ttl: 'Nakano Broadway', txt: 'Secondhand electronics, watches, cameras, anime and collectibles at local prices. 5 min from Shinjuku on JR Chūō.', pl: { n: 'Nakano Broadway', jp: '中野ブロードウェイ', q: 'Nakano Broadway' } },
        { t: '17:30', k: 'see', ttl: 'Nakano\'s back alleys', txt: 'The side streets off Sun Mall: tiny bars and yakitori counters lighting up.' },
        { t: '19:00', k: 'food', ttl: 'Dinner in the Nakano izakaya alleys', txt: 'Cheap and local.', cost: '≈ ¥3,000–4,500' },
        { t: '21:00', k: 'night', ttl: 'Night out #2: Kōenji bar hop', txt: 'Tiny music bars and izakaya, one stop on JR Chūō. Mostly locals.', cost: '≈ ¥3,000–5,000', pl: { n: 'Kōenji', jp: '高円寺', q: 'Koenji Station' } }
      ],
      warn: 'The Tokyo #2 hotel (Dec 18–20) isn\'t booked yet. You land at Narita, so somewhere near Ueno / Nippori, Asakusa or Tokyo Station cuts the airport ride; Nakano keeps you next to tonight\'s plan.',
      go: [
        { n: 'New Chitose domestic terminal', jp: '新千歳空港 国内線', q: 'New Chitose Airport Domestic Terminal', why: 'Ramen Dōjō, Royce, Shiroi Koibito. Jetstar counter.' },
        { n: 'Narita Terminal 3', jp: '成田空港 第3ターミナル', q: 'Narita Airport Terminal 3', why: 'Jetstar arrivals. Walk to the Terminal 2 station.' },
        { n: 'Nakano Broadway', jp: '中野ブロードウェイ', q: 'Nakano Broadway', why: 'Secondhand electronics, watches, collectibles.' },
        { n: 'Nakano Sun Mall', jp: '中野サンモール', q: 'Nakano Sun Mall', why: 'Covered arcade from the station; alleys off both sides.' },
        { n: 'Kōenji', jp: '高円寺', q: 'Koenji Station', why: 'Music bars, izakaya, thrift. One stop on JR Chūō.' }
      ],
      buy: [
        { w: 'JR to New Chitose', p: '≈ ¥1,230' },
        { w: 'Royce Nama Chocolate', p: '≈ ¥900–1,000 a box', note: 'Keep cold; buy at the airport.' },
        { w: 'Jetstar GK104 (already paid)', p: '¥10,500 each', note: 'Overweight bags are charged at the counter.' },
        { w: 'Narita → Tokyo', p: '≈ ¥1,270–3,330', note: 'Access Express ¥1,270 · Skyliner ¥2,580 · N\'EX ¥3,140–3,330 · bus ¥1,500.' },
        { w: 'Nakano izakaya dinner', p: '≈ ¥3,000–4,500' },
        { w: 'Kōenji bars', p: '≈ ¥3,000–5,000', note: 'Small seating charges are normal.' }
      ],
      do: [
        { ttl: 'Nakano Broadway', txt: 'Upper floors are where the watch and camera shops are. Many open around noon; most close by 20:00.' },
        { ttl: 'Kōenji', txt: 'Bars seat six to ten. If it\'s full, the next one is two doors down.' }
      ],
      prep: ['Jetstar web check-in done (opens Dec 16 11:05 JST)', 'Bags under 20 kg checked, 7 kg carry-on', 'Out of Quintessa by 09:20', 'Tokyo #2 hotel booked'],
      regroup: { n: 'Nakano Station north exit', jp: '中野駅 北口', note: 'Night: hotel lobby. At Narita: the Terminal 2 station ticket gates.' },
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
        { t: '19:00', k: 'food', ttl: 'Last big dinner: wagyu / yakiniku', txt: 'Reserve a table for three by Dec 5: Saturdays book out.', cost: '≈ ¥6,000–12,000', bk: 'dinner' },
        { t: '21:00', k: 'night', ttl: 'Last night out: Harmonica Yokochō', txt: 'Kichijōji\'s alley of tiny local bars by the station, 4 stops on JR Chūō. Pack before you go.', cost: '≈ ¥3,000–5,000', pl: { n: 'Harmonica Yokochō', jp: 'ハモニカ横丁', q: 'Harmonica Yokocho Kichijoji' } }
      ],
      go: [
        { n: 'Shimokitazawa', jp: '下北沢', q: 'Shimokitazawa', why: 'Vintage and thrift district.' },
        { n: 'Kōenji vintage shops', jp: '高円寺 古着', q: 'Koenji vintage shops', why: 'Cheaper thrift, one stop from the hotel.' },
        { n: 'Harmonica Yokochō', jp: 'ハモニカ横丁', q: 'Harmonica Yokocho Kichijoji', why: 'Tiny bar alley by Kichijōji Station.' }
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
      regroup: { n: 'Kichijōji Station north exit', jp: '吉祥寺駅 北口', note: 'Late night: the hotel lobby.' },
      nightKit: { last: '≈ 00:15–00:45 (JR Chūō)', taxi: 'Kichijōji → Nakano ≈ ¥3,000–4,000 total; further if the hotel is east', first: 'First trains about 04:45' }
    },

    {
      id: 'd11', n: 11, date: '2026-12-20', tz: 'JST', from: '04:00', until: { d: '2026-12-21', t: '04:00', tz: 'ET' },
      region: 'home', place: 'tokyo', sleep: 'home',
      title: 'Home', sub: 'Last omiyage · board pick-up · Haneda 16:50 → Dulles → Toronto',
      tagline: 'Board, tax refund, then bags.',
      plan: 4000,
      flight: { code: 'UA 804', from: 'HND', to: 'IAD', dep: { d: '2026-12-20', t: '16:50', tz: 'JST' }, arr: { d: '2026-12-20', t: '15:40', tz: 'ET' } },
      transit: {
        title: 'Tokyo #2 hotel → Haneda Terminal 3', meta: '30–70 min depending on the hotel · on Suica',
        steps: [
          'Keikyū Airport Line or the Tokyo Monorail to Haneda T3, 30–40 min from central Tokyo. From Asakusa: Toei Asakusa Line direct, about 45–55 min, ¥635. From Nakano: JR Chūō → Shinjuku, Yamanote → Shinagawa, Keikyū, about 60–70 min.',
          'Mo: collect the board at the T3 Yamato / JAL ABC counter first, about 15 min.',
          'Aim to be at the United counter by 14:30. Check-in closes 15:50.'
        ]
      },
      items: [
        { t: '08:30', k: 'food', ttl: 'Breakfast, pack', txt: 'Pack tax-refund goods where you can show them at the airport.' },
        { t: '10:00', k: 'shop', ttl: 'Check out, last omiyage', txt: 'Leave bags at the desk. Free morning in Tokyo.' },
        { t: '13:15', k: 'train', ttl: 'Leave for Haneda Terminal 3', txt: 'Keikyū or the monorail, 30–40 min from central Tokyo (longer from Nakano).', cost: '≈ ¥500–750', fix: 1, leave: '13:15' },
        { t: '14:00', k: 'admin', ttl: 'Mo: pick up the board', txt: 'Yamato / JAL ABC counter, Haneda T3. Shipped from Hirafu Dec 16. Bring the slip and passport.', bk: 'board2', bag: 'arrive2', pl: { n: 'Haneda Airport Terminal 3', jp: '羽田空港 第3ターミナル', q: 'Haneda Airport Terminal 3' } },
        { t: '14:30', k: 'admin', ttl: 'T3: tax refund, then check-in', txt: 'Claim the tax back at customs (passport, receipts and goods) before you check bags, then United, security, immigration.', taxfree: 1 },
        { t: '16:50', k: 'flight', ttl: 'UA 804 Haneda → Dulles', txt: 'Mo in 50E. Arrives 15:40 the same day.', fix: 1, bk: 'united', dur: 770 },
        { t: '15:40', tz: 'ET', k: 'move', ttl: 'Dulles: US customs, re-drop bags', txt: 'Clear US immigration and customs, re-check bags, back through security. 1 h 38.', pl: { n: 'Washington Dulles (IAD)', q: 'Washington Dulles International Airport' } },
        { t: '17:18', tz: 'ET', k: 'flight', ttl: 'UA 3453 Dulles → Toronto', txt: 'Lands Pearson 19:01. Pick a seat in the app.', fix: 1, bk: 'united' },
        { t: '19:01', tz: 'ET', k: 'move', ttl: 'Toronto Pearson', txt: 'Declare everything. Then the ride home you arranged (you left by bus via Buffalo), or UP Express to Union every 15 min.', cost: 'UP ≈ C$12.35', duty: 1, bk: 'ridehome' }
      ],
      go: [
        { n: 'Nakano Broadway', jp: '中野ブロードウェイ', q: 'Nakano Broadway', why: 'Last-minute finds near the hotel.' },
        { n: 'Haneda Terminal 3', jp: '羽田空港 第3ターミナル', q: 'Haneda Airport Terminal 3', why: 'Board pick-up, then tax refund before bag drop.' }
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
      prep: ['Passports', 'Receipts for tax-free goods in one envelope', 'Tax-free goods packed on top', 'Bags under 23 kg each', 'Mo: Yamato slip for the board pick-up', 'Ride home from Pearson arranged'],
      regroup: { n: 'United check-in, Haneda T3', jp: '羽田空港 第3ターミナル ユナイテッド航空カウンター', note: 'Morning: hotel lobby.' }
    }
  ],

  prepList: [
    { id: 'q6', due: '2026-11-20', who: [2], t: 'AJ: forward your United and ANA NH1181 ticket receipts (no agent has seen them yet)' },
    { id: 'q26', due: '2026-11-20', who: [0], t: 'Read J-ARC\'s self check-in message in the Expedia app (arrived Nov 16)' },
    { id: 'q7', due: '2026-11-22', who: [0, 1, 2], t: 'Link a Suica to BOTH Eki-net e-tickets (E81032 Dec 12, E50023 Dec 14), one per person. Trenton & AJ: send Mo your card number' },
    { id: 'q11', due: '2026-11-25', who: [0, 1, 2], t: 'Book the Tokyo #2 hotel, Dec 18–20. You land at Narita: Asakusa (OTHER SPACE ≈ C$740 for 3) or Nakano (NAKANO WORLD HOTEL ≈ C$627 for 3)' },
    { id: 'q9', due: '2026-11-25', who: [1], t: 'Email The Setsumon (+81 136-23-1724): will they hold a board delivery arriving Dec 12–13? Get the exact address for the form' },
    { id: 'q12', due: '2026-11-25', who: [1], t: 'Trailways: check a board bag over 62 in. is OK on the Dec 8 bus' },
    { id: 'q13', due: '2026-11-30', who: [0, 1, 2], t: 'Snow monkey park: dated web ticket for Dec 12, or plan on the Snow Monkey Pass ¥5,100 (not both)' },
    { id: 'q14', due: '2026-12-03', who: [0, 1, 2], t: 'Last day to cancel J-ARC for free is Dec 3 (18:00 JST); Shiroganeya Dec 4 (12:00 JST)' },
    { id: 'q15', due: '2026-12-04', who: [0, 1, 2], t: 'Resort Liner CTS → Hirafu 15:50, Dec 14 (≈ ¥5,700, WAMAZING). Hard cutoff 18:00 JST Dec 5 (04:00 Toronto)' },
    { id: 'q16', due: '2026-12-04', who: [0, 1, 2], t: 'Niseko United 2-day All Mountain pass online (¥24,700), Dec 15 + 16' },
    { id: 'q17', due: '2026-12-04', who: [0, 2], t: 'Board + boot rental in Hirafu, pick-up Dec 14 evening' },
    { id: 'q18', due: '2026-12-04', who: [0, 1, 2], t: 'Travel insurance that covers snowboarding (check credit-card coverage first)' },
    { id: 'q25', due: '2026-12-05', who: [0, 1, 2], t: 'Reserve wagyu / yakiniku for 3, Sat Dec 19' },
    { id: 'q19', due: '2026-12-07', who: [0, 1, 2], t: 'Visit Japan Web: register and save the QR code' },
    { id: 'q20', due: '2026-12-07', who: [0, 1, 2], t: 'eSIM (10 GB) ≈ C$20–30' },
    { id: 'q21', due: '2026-12-07', who: [0, 1, 2], t: 'Tell your banks; bring a no-FX-fee card and a debit card for 7-Eleven ATMs' },
    { id: 'q22', due: '2026-12-07', who: [0, 1, 2], t: 'Download: Google Maps offline areas, Google Translate Japanese, United, Jetstar, GO taxi' },
    { id: 'q23', due: '2026-12-08', who: [0], t: 'Message J-ARC (no front desk) if you still need entry instructions; say you land 16:50, arrive ~18:30' },
    { id: 'q24', due: '2026-12-08', who: [0, 1, 2], t: 'United: pick seats (Mo has none on IAD → YYZ; Trenton\'s P63QJM shows none) and confirm AJ\'s booking' },
    { id: 'q27', due: '2026-12-11', who: [0, 1, 2], t: 'Message The Setsumon: arriving ~18:30 Dec 14, after the 18:00 check-in cutoff (no front desk)' },
    { id: 'q28', due: '2026-12-15', who: [0, 1, 2], t: 'Arrange the ride home from Pearson, Sun Dec 20 ~19:01 (you left by bus via Buffalo)' },
    { id: 'q29', due: '2026-12-16', who: [0, 1, 2], t: 'Jetstar GK104 web check-in, opens Dec 16 11:05 JST (Dec 15 21:05 Toronto)' }
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
    { k: 'buffalo', n: 'Sleep Inn & Suites Buffalo, Dec 8', d: 'd-2' },
    { k: 'tokyo1', n: 'J-ARC Akebonobashi, Dec 10–12', d: 'd1' },
    { k: 'board1', n: 'Board delivery Haneda → Niseko', d: 'd1' },
    { k: 'shink1', n: 'Kagayaki 505 Tokyo → Nagano', d: 'd3' },
    { k: 'monkey', n: 'Snow Monkey Park ticket / pass', d: 'd3' },
    { k: 'ryokan', n: 'Shiroganeya Ryokan, Dec 12', d: 'd3' },
    { k: 'nagano', n: 'Chisun Grand Nagano, Dec 13', d: 'd4' },
    { k: 'shink2', n: 'Kagayaki 503 Nagano → Toyama', d: 'd5' },
    { k: 'ana', n: 'ANA NH1181 Toyama → New Chitose', d: 'd5' },
    { k: 'liner', n: 'Resort Liner CTS → Hirafu', d: 'd5' },
    { k: 'niseko', n: 'The Setsumon, Dec 14–16', d: 'd5' },
    { k: 'rental', n: 'Board rental (Trenton & AJ)', d: 'd5' },
    { k: 'lift', n: 'Niseko lift pass', d: 'd6' },
    { k: 'board2', n: 'Board delivery Niseko → Haneda T3', d: 'd7' },
    { k: 'sapporo', n: 'Quintessa Sapporo, Dec 16–18', d: 'd7' },
    { k: 'jetstar', n: 'Jetstar GK104 New Chitose → Narita', d: 'd9' },
    { k: 'tokyo2', n: 'Tokyo #2 hotel, Dec 18–20 (not booked)', d: 'd9' },
    { k: 'dinner', n: 'Wagyu / yakiniku, Dec 19', d: 'd10' },
    { k: 'ridehome', n: 'Ride home from Pearson, Dec 20', d: 'd11' },
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

  sources: 'Plan synced Nov 16, 2026 from the group\'s Japan_Round2_Trip_Planner sheet (Itinerary, Lodging, Transport, Book Now and Tokyo #2 Options tabs, through Change Log #33). Hotel addresses, phones and check-in times from the booking confirmations recorded in the sheet (Expedia, Trip.com), Chisun Grand Nagano (Solare) and Quintessa Hotels.'
};
