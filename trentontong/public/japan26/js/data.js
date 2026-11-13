/* Japan, December 2026 — trip data. All times are local to where you are (ET or JST). */
window.TRIP = {
  title: "Japan '26",
  people: ['Trenton', 'Moziah', 'AJ'],
  rate: 113, // yen per Canadian dollar (default; editable in Settings)
  meetAt: { d: '2026-12-08', t: '16:40', tz: 'ET' },
  wheelsUp: { d: '2026-12-09', t: '10:00', tz: 'ET' },
  tripEnd: { d: '2026-12-21', t: '04:00', tz: 'ET' },

  stays: {
    buf: {
      name: 'Buffalo airport hotel', short: 'Buffalo',
      sub: 'Hilton Garden Inn or Hampton Inn & Suites, Buffalo Airport. Both run free 24-hour shuttles.',
      addr: 'Buffalo Niagara International Airport area, Cheektowaga, NY', jp: '', addrJp: '', tel: '',
      lat: null, lng: null, inT: '15:00', outT: '11:00', area: 'us'
    },
    tokyo: {
      name: 'Hotel Gracery Shinjuku', short: 'Shinjuku', jp: 'ホテルグレイスリー新宿',
      sub: 'Triple Room · the Godzilla-head building in Kabukichō. Lobby on 8F.',
      addr: '1-19-1 Kabukichō, Shinjuku-ku, Tokyo 160-8466', addrJp: '東京都新宿区歌舞伎町1-19-1',
      tel: '03-6833-1111', lat: 35.695305, lng: 139.702044, inT: '14:00', outT: '11:00', area: 'tokyo'
    },
    shibu: {
      name: 'Rekishi-no-Yado Kanaguya', short: 'Shibu Onsen', jp: '歴史の宿 金具屋',
      sub: '1758 wooden ryokan · dinner and breakfast included · five private-use baths.',
      addr: '2202 Hirao, Yamanouchi-machi, Shimotakai-gun, Nagano 381-0401', addrJp: '長野県下高井郡山ノ内町平穏2202',
      tel: '0269-33-3131', lat: 36.7340, lng: 138.4322, inT: '15:00', outT: '10:00', area: 'nagano'
    },
    sapporo: {
      name: "La'gent Stay Sapporo Odori", short: 'Sapporo', jp: 'ラ・ジェント・ステイ札幌大通',
      sub: 'Triple-capable rooms · natural hot-spring baths on 3F and 5F · 5 min walk to Susukino.',
      addr: 'Minami 2-jo Nishi 5-chome 26-5, Chuo-ku, Sapporo 060-0061', addrJp: '北海道札幌市中央区南2条西5丁目26-5',
      tel: '011-200-5507', lat: 43.0578, lng: 141.3500, inT: '15:00', outT: '11:00', area: 'hokkaido'
    },
    niseko: {
      name: 'Mercure Niseko Resort', short: 'Niseko Hirafu', jp: 'メルキュール ニセコ リゾート',
      sub: 'Formerly Midtown Niseko; reopens under the Mercure name Nov 20, 2026. Shuttle to the lifts about 5 min.',
      addr: 'Niseko Hirafu 4-jo 1-chome 3-3, Kutchan-cho, Abuta-gun, Hokkaido 044-0087', addrJp: '北海道虻田郡倶知安町ニセコひらふ4条1丁目3-3',
      tel: '0136-21-2888', lat: 42.8618, lng: 140.71056, inT: '15:00', outT: '10:00', area: 'hokkaido'
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
    sapporo: { n: 'Sapporo', lat: 43.0618, lng: 141.3545, tz: 'JST' },
    niseko: { n: 'Niseko', lat: 42.8618, lng: 140.7106, tz: 'JST' },
    yoichi: { n: 'Yoichi', lat: 43.1907, lng: 140.7837, tz: 'JST' }
  },

  climate: {
    toronto: { hi: 1, lo: -6, note: 'Cold; possible lake-effect snow in Buffalo.' },
    buffalo: { hi: 1, lo: -6, note: 'Lake-effect snow can delay morning flights.' },
    tokyo: { hi: 12, lo: 4, note: 'Dry and sunny. Sunset about 16:30.' },
    shibu: { hi: 4, lo: -4, note: 'Icy paths, maybe snow.' },
    sapporo: { hi: 1, lo: -5, note: 'Snow on the ground; sidewalks are slick.' },
    niseko: { hi: -2, lo: -8, note: 'Colder and windy up top.' },
    yoichi: { hi: 1, lo: -5, note: 'Coastal snow showers.' }
  },

  days: [
    {
      id: 'd-2', n: -2, date: '2026-12-08', tz: 'ET', from: '04:00',
      region: 'home', place: 'toronto', sleep: 'buf',
      title: 'After work, to Buffalo', sub: 'Bus from Union, border, airport hotel',
      tagline: 'Nobody leaves a car in Buffalo: you fly home into Pearson.',
      plan: 0,
      transit: {
        title: 'Toronto → Buffalo Airport', meta: '~3 h 10 · ≈ C$49',
        steps: [
          'OurBus 17:00 from Front St West (by Union Station) → Buffalo Airport about 20:10. ≈ C$49.',
          'Backup: FlixBus 19:40 from Union Station Bus Terminal → about 23:15. ≈ C$16–28.',
          'US border at Lewiston or the Peace Bridge: everyone off with bags, passports out.',
          'At the airport, call the hotel for the free shuttle.'
        ]
      },
      items: [
        { t: '16:40', k: 'meet', ttl: 'Meet at Union Station', txt: 'With bags. Checked bags ride under the bus.', pl: { n: 'Union Station, Toronto', q: 'Union Station Toronto' } },
        { t: '17:00', k: 'bus', ttl: 'OurBus to Buffalo Airport', txt: 'From Front St West by Union, arrives about 20:10. Backup: FlixBus 19:40 from Union Station Bus Terminal → ~23:15. Confirm the December timetable when you book.', cost: '≈ C$49 · FlixBus ≈ C$16–28', fix: 1, leave: '16:40', bk: 'ourbus', pl: { n: 'OurBus stop, Front St West', q: 'OurBus Toronto Union Station Front Street West' } },
        { t: '18:45', a: 1, k: 'admin', ttl: 'US border', txt: 'Lewiston or Peace Bridge. Everyone gets off with their bags. Passports out. Can add up to an hour.' },
        { t: '20:15', a: 1, k: 'stay', ttl: 'Hotel shuttle, dinner, early night', txt: 'Call the hotel for the free shuttle. Ask for two queens plus a rollaway, or a sofa-bed room.', cost: 'room ≈ US$140–190 (≈ C$65–90 each)', bk: 'buffalo' },
        { t: '22:00', k: 'sleep', ttl: 'Lights out', txt: 'Alarms for 06:45. The shuttle to the terminal is at 07:30.' }
      ],
      go: [
        { n: 'Union Station bus stop', q: 'OurBus Toronto Union Station Front Street West', why: 'Where the 17:00 OurBus leaves.' },
        { n: 'Buffalo Niagara Intl Airport (BUF)', q: 'Buffalo Niagara International Airport', why: 'Hotels opposite the terminal run free shuttles.' }
      ],
      buy: [
        { w: 'OurBus ticket', p: '≈ C$49', note: 'Book online now; FlixBus 19:40 is the backup (≈ C$16–28).' },
        { w: 'Dinner near the hotel', p: '≈ US$20–30' },
        { w: 'A few US dollars in cash', p: 'US$20–40', note: 'Shuttle tips and vending machines.' }
      ],
      do: [
        { ttl: 'Pack for a missed bag', txt: 'Two days of clothes, meds, chargers and cameras in carry-on. The Dulles connection is 52 minutes.' },
        { ttl: 'Border, fast', txt: 'Passports in hand before the bus stops. Declare food. It can take up to an hour.' }
      ],
      prep: ['Three passports', 'Power banks in carry-on', 'Ski jacket worn, not packed', 'United app open with all three on the booking', 'Visit Japan Web QR saved'],
      regroup: { n: 'The OurBus stop on Front St West', note: 'By Union Station.' }
    },

    {
      id: 'd-1', n: -1, date: '2026-12-09', tz: 'ET', from: '04:00',
      region: 'air', place: 'buffalo', sleep: 'plane',
      title: 'The long day', sub: 'Buffalo → Dulles → Haneda',
      tagline: '14 h 30 over the top of the world.',
      plan: 2000,
      flight: { code: 'UA 803', from: 'IAD', to: 'HND', dep: { d: '2026-12-09', t: '12:20', tz: 'ET' }, arr: { d: '2026-12-10', t: '16:50', tz: 'JST' } },
      items: [
        { t: '07:30', k: 'bus', ttl: 'Hotel shuttle to BUF', txt: 'Check in at the counter (international trip, so the agent checks passports). Check bags through to Haneda.', cost: '2 checked bags included', fix: 1, leave: '07:30' },
        { t: '10:00', k: 'flight', ttl: 'UA 6157 Buffalo → Dulles', txt: 'Mesa, Embraer 175. Arrives 11:28. Sit near the front: you have 52 minutes at Dulles.', fix: 1, bk: 'united' },
        { t: '11:28', k: 'move', ttl: 'Dulles: 52-minute connection', txt: 'No customs here. Walk or take the AeroTrain to the UA 803 gate. Look up the gate in the app before landing.', pl: { n: 'Washington Dulles (IAD)', q: 'Washington Dulles International Airport' } },
        { t: '12:20', k: 'flight', ttl: 'UA 803 Dulles → Haneda', txt: 'Boeing 777-200, 14 h 30. Stay awake for the first half, sleep the second half. Lands 16:50 Japan time on Thu Dec 10.', fix: 1, bk: 'united', dur: 870 }
      ],
      warn: 'UA 803 is the only Dulles–Haneda flight of the day. A snow or de-icing delay in Buffalo could cost you a day in Tokyo. Best fix: ask United to move all three of you to an earlier Buffalo → Dulles flight. Free fallback: be at BUF by 05:00 and ask to stand by.',
      go: [
        { n: 'Buffalo Niagara Intl Airport', q: 'Buffalo Niagara International Airport', why: 'UA 6157 at 10:00.' },
        { n: 'Washington Dulles (IAD)', q: 'Washington Dulles International Airport', why: 'Connection to UA 803. AeroTrain between concourses.' }
      ],
      buy: [
        { w: 'Snacks and a big water for the flight', p: '≈ US$10–15', note: 'Two meals are served on UA 803.' },
        { w: 'Nothing else', p: '—', note: 'Change money in Japan: 7-Bank ATMs at Haneda give the best rate.' }
      ],
      do: [
        { ttl: 'Jet lag plan', txt: 'Stay awake for roughly the first 7 hours, then sleep. You land late afternoon Tokyo time and should be in bed around 22:30.' },
        { ttl: 'On landing', txt: 'Have the Visit Japan Web QR code on screen for immigration and customs.' }
      ],
      prep: ['Passport + boarding passes', 'Carry-on: 2 days of clothes, meds, chargers, cameras', 'Bags checked through to HND', 'Visit Japan Web QR saved offline'],
      regroup: { n: 'The next gate', note: 'UA 803 gate at Dulles. Do not wait for each other at the BUF gate area.' }
    },

    {
      id: 'd1', n: 1, date: '2026-12-10', tz: 'JST', from: '15:50',
      region: 'tokyo', place: 'tokyo', sleep: 'tokyo',
      title: 'Land, eat, soak, sleep', sub: 'Haneda → Shinjuku · food hall · hot spring',
      tagline: 'A neon food hall, then a hot spring five minutes from bed.',
      plan: 8500,
      transit: {
        title: 'Haneda Terminal 3 → Shinjuku', meta: '45–70 min · ≈ ¥550–1,400',
        steps: [
          'Easiest with bags: Airport Limousine Bus from the T3 arrivals curb to Shinjuku (Kabukichō / West Exit). 45–70 min, ≈ ¥1,400. Buy at the counter in arrivals.',
          'Fastest: Keikyū Airport Line to Shinagawa (15 min, ≈ ¥330), then JR Yamanote Line to Shinjuku (20 min, ≈ ¥210–230). About 50 min. Tap Suica.'
        ]
      },
      items: [
        { t: '16:50', k: 'flight', ttl: 'Land at Haneda Terminal 3', txt: 'Immigration and customs with your Visit Japan Web QR codes; allow 45–75 min. Pull ¥30,000 each from the 7-Bank ATM in arrivals.', pl: { n: 'Haneda Airport Terminal 3', jp: '羽田空港 第3ターミナル', q: 'Haneda Airport Terminal 3' } },
        { t: '18:00', a: 1, k: 'bus', ttl: 'Suica, then into the city', txt: 'Moziah and AJ: Suica in Apple Wallet. Trenton: try adding Suica to Google Wallet; global Pixels usually can\'t, so buy a Welcome Suica card at T3. Then the Limousine Bus (≈ ¥1,400) or Keikyū + JR (≈ ¥550).', cost: '≈ ¥550–1,400' },
        { t: '19:15', a: 1, k: 'stay', ttl: 'Check in at Hotel Gracery Shinjuku', txt: 'Lobby on 8F of the Godzilla-head building. Drop bags.', bk: 'tokyo1', pl: { n: 'Hotel Gracery Shinjuku', jp: 'ホテルグレイスリー新宿', q: 'Hotel Gracery Shinjuku' } },
        { t: '20:00', k: 'food', ttl: 'Shinjuku Kabuki Hall', txt: 'New for you: a loud, neon, festival-themed food hall on 2F of the Tokyu Kabukichō Tower, two minutes from the hotel. Ten stalls of regional food: Hokkaido yakitori, Kyushu spicy noodles, Korean barbecue. Open most of the night.', cost: '≈ ¥3,000–4,500', pl: { n: 'Shinjuku Kabuki Hall', jp: '新宿カブキhall 歌舞伎横丁', q: 'Shinjuku Kabuki Hall Kabukicho Yokocho' } },
        { t: '21:15', k: 'onsen', ttl: 'Thermae-Yu hot spring', txt: 'New for you: a hot-spring bathhouse 5 min from the hotel. Outdoor bath, carbonated bath, two saunas. Be out before midnight, when a late-night surcharge starts. No tattoos. Bed by 23:00.', cost: '¥3,100 (Mon–Thu rate)', pl: { n: 'Thermae-Yu', jp: 'テルマー湯', q: 'Thermae-Yu Shinjuku' } }
      ],
      go: [
        { n: 'Shinjuku Kabuki Hall', jp: '新宿カブキhall', q: 'Shinjuku Kabuki Hall Kabukicho Yokocho', why: 'Festival-themed food hall in the Tokyu Kabukichō Tower, 2 min from the hotel.' },
        { n: 'Thermae-Yu', jp: 'テルマー湯', q: 'Thermae-Yu Shinjuku', why: 'Hot-spring baths and saunas, 5 min from the hotel. Open through the night.' },
        { n: 'Shinjuku Batting Center', jp: '新宿バッティングセンター', q: 'Shinjuku Batting Center', why: 'Batting cages in Kabukichō, open late. A few hundred yen a round.' }
      ],
      buy: [
        { w: 'Cash at the 7-Bank ATM in arrivals', p: '¥30,000 each', note: 'Takes Canadian cards. Small bars and stalls are often cash-only.' },
        { w: 'Welcome Suica (Trenton, if Google Wallet won\'t take Suica)', p: 'load ¥3,000–5,000', note: 'Sold at Haneda. No deposit; valid 28 days.' },
        { w: 'Limousine Bus or Keikyū + JR', p: '≈ ¥1,400 / ≈ ¥550' },
        { w: 'Dinner at Kabuki Hall', p: '≈ ¥3,000–4,500' },
        { w: 'Thermae-Yu entry', p: '¥3,100', note: 'Towels included. After midnight there\'s a ¥2,000 surcharge.' },
        { w: 'Konbini breakfast for tomorrow', p: '≈ ¥500', note: 'Egg sandwich, onigiri, canned coffee.' }
      ],
      do: [
        { ttl: 'First night rules', txt: 'One food hall, one soak, then bed. Staying up until about 22:30 resets you fastest.' },
        { ttl: 'New since June', txt: 'You did Omoide Yokochō and Golden Gai last time. Kabuki Hall and Thermae-Yu are both a short walk from the hotel and both new.' }
      ],
      prep: ['Visit Japan Web QR on screen', 'Find the 7-Bank ATM before the bus counter'],
      regroup: { n: 'Hotel lobby, 8F', jp: 'ホテルグレイスリー新宿 8階ロビー', note: 'The Godzilla-head building in Kabukichō.' }
    },

    {
      id: 'd2', n: 2, date: '2026-12-11', tz: 'JST', from: '04:00',
      region: 'tokyo', place: 'tokyo', sleep: 'tokyo', night: 1,
      title: 'Yokohama: noodles, harbour, Chinatown, Noge', sub: 'Cup Noodles · Christmas market · sunset pier · bar alleys',
      tagline: 'Japan\'s second city, half an hour away, and you\'ve never been.',
      plan: 12500,
      transit: {
        title: 'Shinjuku → Yokohama (Sakuragichō)', meta: 'about 40 min · ≈ ¥600–700 each way',
        steps: [
          'JR Shōnan-Shinjuku Line, Shinjuku → Yokohama, about 30 min.',
          'Change to the JR Negishi Line for one stop to Sakuragichō (3 min). Tap Suica.',
          'Everything today is walkable from Sakuragichō. Coming home, leave Noge by 22:50.'
        ]
      },
      items: [
        { t: '09:00', k: 'train', ttl: 'Train to Sakuragichō', txt: 'JR Shōnan-Shinjuku Line to Yokohama, then one stop on the Negishi Line.', cost: '≈ ¥600–700', leave: '08:45' },
        { t: '09:45', k: 'see', ttl: 'Yokohama Air Cabin', txt: 'A gondola from Sakuragichō Station over the harbour to the Shinkō pier, 5 min. One cabin fits the three of you.', cost: '¥1,000', pl: { n: 'Yokohama Air Cabin', jp: 'ヨコハマ エア キャビン 桜木町駅', q: 'Yokohama Air Cabin Sakuragicho Station' } },
        { t: '10:00', k: 'see', ttl: 'Cup Noodles Museum', txt: 'Take a numbered ticket for the My Cupnoodles Factory as you walk in: draw on your own cup, pick the soup and four toppings, take it home sealed. Open 10:00–18:00. Allow 90 min.', cost: '¥500 entry · ¥500 your cup', pl: { n: 'Cup Noodles Museum Yokohama', jp: 'カップヌードルミュージアム 横浜', q: 'Cupnoodles Museum Yokohama' } },
        { t: '12:00', k: 'food', ttl: 'Red Brick Warehouse Christmas Market', txt: 'Runs Nov 20 – Dec 25. About 60 stalls, an 11 m real tree, mulled wine and sausages with the harbour behind. First lunch. Check the hours that week.', cost: 'entry from ¥500 · food ≈ ¥1,500–2,500', pl: { n: 'Yokohama Red Brick Warehouse', jp: '横浜赤レンガ倉庫', q: 'Yokohama Red Brick Warehouse' } },
        { t: '13:45', k: 'food', ttl: 'Yamashita Park → Chinatown', txt: 'Walk the waterfront (20 min) to Japan\'s biggest Chinatown. Second lunch on foot: pork buns, soup dumplings, sesame balls.', cost: '≈ ¥1,500–2,500', pl: { n: 'Yokohama Chinatown', jp: '横浜中華街', q: 'Yokohama Chinatown' } },
        { t: '15:45', k: 'see', ttl: 'Sunset from Ōsanbashi Pier', txt: 'A wooden rooftop deck with the whole Minato Mirai skyline across the water, and Mt Fuji behind it on a clear day. From 17:00 the Yorunoyo harbour light show runs every half hour.', cost: 'free', sun: 1, leave: '15:30', pl: { n: 'Ōsanbashi Pier', jp: '大さん橋', q: 'Osanbashi Pier Yokohama' } },
        { t: '18:00', k: 'night', ttl: 'Noge bar-hopping', txt: 'About 600 small bars and izakaya in a few blocks by Sakuragichō, mostly locals. Start at a standing bar, then the curved two-storey Miyakobashi "Harmonica Alley" on the river.', cost: '≈ ¥4,000–6,000', pl: { n: 'Noge', jp: '野毛', q: 'Noge Yokohama' } },
        { t: '23:00', k: 'train', ttl: 'Train back to Shinjuku', txt: 'From Sakuragichō. Don\'t push it: a taxi from Yokohama to Shinjuku is ≈ ¥12,000–15,000.', cost: '≈ ¥600–700', fix: 1, leave: '22:50' }
      ],
      warn: 'The Landmark Tower observation deck is closed for renovation until 2028, so sunset is at the pier. For height, the Cosmo Clock 21 Ferris wheel is the alternative (combo with the Air Cabin ¥1,700).',
      go: [
        { n: 'Yokohama Air Cabin', jp: 'ヨコハマ エア キャビン', q: 'Yokohama Air Cabin Sakuragicho Station', why: 'Gondola over the harbour from Sakuragichō Station.' },
        { n: 'Cup Noodles Museum', jp: 'カップヌードルミュージアム 横浜', q: 'Cupnoodles Museum Yokohama', why: 'Make your own Cup Noodles. Closed Tuesdays.' },
        { n: 'Red Brick Warehouse', jp: '横浜赤レンガ倉庫', q: 'Yokohama Red Brick Warehouse', why: 'Christmas market, Nov 20 – Dec 25.' },
        { n: 'Yokohama Chinatown', jp: '横浜中華街', q: 'Yokohama Chinatown', why: 'Street food through the painted gates.' },
        { n: 'Ōsanbashi Pier', jp: '大さん橋', q: 'Osanbashi Pier Yokohama', why: 'Free rooftop deck: skyline, sunset, maybe Fuji.' },
        { n: 'Noge', jp: '野毛', q: 'Noge Yokohama', why: 'Hundreds of tiny bars, mostly locals.' },
        { n: 'Miyakobashi Harmonica Alley', jp: '都橋商店街', q: 'Miyakobashi Shotengai Yokohama', why: 'Curved two-storey row of about 60 bars on the river.' },
        { n: 'Sakuragichō Station', jp: '桜木町駅', q: 'Sakuragicho Station', why: 'Your way home. Be here by 22:55.' }
      ],
      buy: [
        { w: 'Train to Yokohama and back', p: '≈ ¥1,200–1,400' },
        { w: 'Air Cabin', p: '¥1,000', note: 'Combo with the Cosmo Clock 21 Ferris wheel: ¥1,700.' },
        { w: 'Cup Noodles Museum + your own cup', p: '¥500 + ¥500' },
        { w: 'Christmas market entry and a mug of mulled wine', p: 'from ¥500 + ≈ ¥1,000', note: 'The souvenir mug changes every year.' },
        { w: 'Chinatown street food', p: '≈ ¥1,500–2,500', note: 'Cash is quickest.' },
        { w: 'Noge bars', p: '≈ ¥4,000–6,000', note: 'Many are cash-only and add a small seating charge.' }
      ],
      do: [
        { ttl: 'My Cupnoodles Factory', txt: 'Tickets are numbered and can run out on busy days, so take one the moment you arrive, then do the museum while you wait.' },
        { ttl: 'Sunset timing', txt: 'Be on the pier roof by 16:00. Sunset is about 16:29; the towers light up over the next half hour.' },
        { ttl: 'Noge etiquette', txt: 'One or two drinks and a dish per bar, then move. If a place is full or regulars-only, the next door is three steps away.' }
      ],
      prep: ['Suica topped up (≈ ¥3,000)', 'Cash for Chinatown and Noge', 'Warm layers: the harbour is windy'],
      regroup: { n: 'Sakuragichō Station ticket gates', jp: '桜木町駅 改札', note: 'Daytime: the big tree at the Red Brick Warehouse.' },
      nightKit: { last: 'Leave Noge by 22:50 for the 23:00 train', taxi: 'Yokohama → Shinjuku by taxi ≈ ¥12,000–15,000: catch the train', first: 'Last through trains to Shinjuku leave around 23:30; check Maps that night' }
    },

    {
      id: 'd3', n: 3, date: '2026-12-12', tz: 'JST', from: '04:00',
      region: 'tokyo', place: 'tokyo', sleep: 'tokyo', night: 1,
      title: 'Send the bags, ski shops, monjayaki, Ebisu', sub: 'Ameyoko · Kanda ski street · Tsukishima · Ebisu Yokochō',
      tagline: 'Suitcases go north today; you follow tomorrow.',
      plan: 13000,
      items: [
        { t: '09:30', k: 'admin', ttl: 'Ship suitcases to Niseko', txt: 'Yamato takkyūbin from the front desk to the Mercure Niseko Resort. Tokyo → Hokkaido takes 2 days, so they land Dec 14, ahead of you. Keep a daypack with 3 days of clothes, onsen kit and warm layers.', cost: '≈ ¥3,000–3,700 per bag', bag: 'ship' },
        { t: '10:30', k: 'food', ttl: 'Ueno → Ameyoko', txt: 'JR Yamanote, Shinjuku → Ueno, 25 min. Market street under the tracks: street food, sneakers, cheap sashimi bowls, standing bars open from late morning.', cost: 'train ≈ ¥210–230 · food ≈ ¥1,500–2,500', pl: { n: 'Ameyoko', jp: 'アメ横', q: 'Ameyoko Shopping Street' } },
        { t: '13:00', k: 'shop', ttl: 'Kanda-Ogawamachi ski street', txt: 'JR to Ochanomizu (2 stops), then 5 min walk. About 60 ski and board shops in 400 m: gloves, goggles and base layers before Niseko, and Trenton\'s boot hunt. Tax refunds now happen at the airport.', pl: { n: 'Kanda Ogawamachi ski shops', jp: '神田小川町 スキー街', q: 'Kanda Ogawamachi ski shops' } },
        { t: '16:30', k: 'see', ttl: 'Marunouchi illuminations', txt: 'One stop to Tokyo Station, then walk Naka-dōri under the lit trees. The restored station building is lit too.', cost: 'free', pl: { n: 'Marunouchi Naka-dori', jp: '丸の内仲通り', q: 'Marunouchi Naka-dori' } },
        { t: '18:00', k: 'food', ttl: 'Monjayaki on Tsukishima Monja Street', txt: 'Yūrakuchō Line, Yūrakuchō → Tsukishima, 5 min. Tokyo\'s own runny, crispy-edged griddle pancake: you cook it at the table and eat it off tiny spatulas. Dozens of shops on one street.', cost: '≈ ¥2,500–4,000', pl: { n: 'Tsukishima Monja Street', jp: '月島もんじゃストリート', q: 'Tsukishima Monja Street' } },
        { t: '20:30', k: 'night', ttl: 'Ebisu Yokochō and Ebisu bars', txt: 'Ōedo Line to Roppongi, Hibiya Line to Ebisu, 25 min. A covered alley of loud, friendly counters, then the bars around the station.', cost: '≈ ¥3,000–5,000', pl: { n: 'Ebisu Yokochō', jp: '恵比寿横丁', q: 'Ebisu Yokocho' } },
        { t: '00:15', nd: 1, k: 'train', ttl: 'Last trains · pack tonight', txt: 'Last trains about 00:15–00:45. Tomorrow you check out at 07:45: pack the daypack before you go out, not after.' }
      ],
      go: [
        { n: 'Ameyoko', jp: 'アメ横', q: 'Ameyoko Shopping Street', why: 'Street food and standing bars under the tracks.' },
        { n: 'Kanda-Ogawamachi ski street', jp: '神田小川町', q: 'Kanda Ogawamachi ski shops', why: 'Best ski-gear prices in Tokyo.' },
        { n: 'Tokyo Station · Marunouchi', jp: '東京駅 丸の内', q: 'Tokyo Station Marunouchi', why: 'Lit station building and the Naka-dōri lights.' },
        { n: 'Tsukishima Monja Street', jp: '月島もんじゃストリート', q: 'Tsukishima Monja Street', why: 'Dozens of monjayaki shops on one street.' },
        { n: 'Ebisu Yokochō', jp: '恵比寿横丁', q: 'Ebisu Yokocho', why: 'Covered alley of loud, friendly izakaya.' },
        { n: 'Shinjuku Batting Center', jp: '新宿バッティングセンター', q: 'Shinjuku Batting Center', why: 'If you\'re still awake near the hotel.' }
      ],
      buy: [
        { w: 'Luggage forwarding (Yamato)', p: '≈ ¥3,000–3,700 per bag', note: 'Front desk fills the form. Keep the receipt with the tracking number.' },
        { w: 'Ski gloves, goggles, base layers', p: '≈ ¥3,000–15,000', note: 'Kanda-Ogawamachi. Show your passport; refund at the airport.' },
        { w: 'Hand warmers (kairo)', p: '≈ ¥300–600 a pack', note: 'Any konbini or drugstore. You\'ll want them in Niseko.' },
        { w: 'Monjayaki dinner', p: '≈ ¥2,500–4,000' },
        { w: 'Ebisu Yokochō', p: '≈ ¥3,000–5,000' }
      ],
      do: [
        { ttl: 'How to monja', txt: 'Fry the solids, shape them into a ring, pour the batter in the middle, mix when it bubbles, then press thin and scrape the crispy bits off with the little spatula. Staff will show you the first one. Mentaiko-mochi-cheese is the classic.' },
        { ttl: 'Ameyoko lunch', txt: 'Look for kaisendon (seafood rice bowls) under ¥1,500 and a standing-bar highball.' },
        { ttl: 'Swap-ins', txt: 'Kamakura instead of Yokohama or today (JR about 1 h, ≈ ¥950 each way): Great Buddha, Hase-dera, Enoden tram. Rain: teamLab Borderless in Azabudai Hills, a different museum from the Planets you did in June.' }
      ],
      prep: ['Suitcases to the front desk before 10:00', 'Daypack: 3 days of clothes, warm layers, chargers', 'Passport for tax-free shopping', 'Tracking number saved in Kit → Notes'],
      regroup: { n: 'Tsukishima Station, exit 7', jp: '月島駅 7番出口', note: 'Late night: hotel lobby, 8F.' },
      nightKit: { last: '≈ 00:15–00:45', taxi: 'Ebisu → Shinjuku ≈ ¥2,500–3,500 total', first: 'First trains about 05:00' }
    },

    {
      id: 'd4', n: 4, date: '2026-12-13', tz: 'JST', from: '04:00',
      region: 'nagano', place: 'shibu', sleep: 'shibu',
      title: 'Monkeys in the hot spring, then your own', sub: 'Shinkansen · snow monkeys · nine-bath crawl',
      tagline: 'Yukata, wooden sandals and a key to nine baths.',
      plan: 17900, stamps: 1,
      transit: {
        title: 'Shinjuku → Shibu Onsen', meta: 'about 3 h · ≈ ¥10,300',
        steps: [
          'JR Chūō Line rapid, Shinjuku → Tokyo Station, 15 min, ≈ ¥210–230.',
          'Hokuriku Shinkansen, Tokyo → Nagano. Kagayaki about 80 min (all reserved); Hakutaka and Asama about 95–105 min. ¥8,340 reserved.',
          'Nagaden Line from the basement of Nagano Station → Yudanaka (last stop). Limited express 45–50 min; one or two trains an hour.',
          'Yudanaka → ryokan: 5 min by ryokan pick-up (ask when booking) or taxi (≈ ¥1,000 total), or a 20–25 min walk.'
        ]
      },
      items: [
        { t: '07:45', k: 'stay', ttl: 'Check out', txt: 'Leave any shopping bag with the front desk for your return on Dec 19.' },
        { t: '08:00', k: 'train', ttl: 'JR to Tokyo Station', txt: 'Chūō Line rapid, 15 min.', cost: '≈ ¥210–230', fix: 1, leave: '07:50' },
        { t: '08:30', k: 'train', ttl: 'Hokuriku Shinkansen → Nagano', txt: 'Buy an ekiben (station bento) for breakfast on board. Sit on the left for mountain views past Takasaki.', cost: '¥8,340 · bento ≈ ¥1,200', fix: 1, bk: 'shink1' },
        { t: '10:15', a: 1, k: 'train', ttl: 'Nagano → Yudanaka', txt: 'Down to the Nagaden station. Buy the Snow Monkey Pass (train / local bus version): Nagaden for the day, the bus to the park and back, and park entry. Or pay as you go.', cost: 'pass ¥5,100' },
        { t: '11:30', a: 1, k: 'food', ttl: 'Drop bags, soba lunch', txt: 'Bags at the ryokan, then soba or a set meal in Shibu.', cost: '≈ ¥1,200–1,800', pl: { n: 'Kanaguya', jp: '歴史の宿 金具屋', q: 'Kanaguya Shibu Onsen' } },
        { t: '13:00', k: 'bus', ttl: 'Bus + forest trail to the park', txt: 'Local bus to the Snow Monkey Park stop (15 min), then a 1.6 km trail, 30–35 min each way, often icy. Boots with grip; the trailhead shop rents boots and sells slip-on spikes.', cost: 'bus in pass', fix: 1 },
        { t: '13:45', k: 'see', ttl: 'Jigokudani Monkey Park', txt: 'Wild macaques around and in a steaming pool. Show your dated web-ticket QR. No food, no flash, no selfie sticks, stay 1–2 m back. Winter hours end at 16:00.', cost: '¥1,000 (from Dec 1)', bk: 'monkey', pl: { n: 'Jigokudani Monkey Park', jp: '地獄谷野猿公苑', q: 'Jigokudani Monkey Park' } },
        { t: '15:15', k: 'bus', ttl: 'Walk out, bus back to Shibu' },
        { t: '16:00', k: 'onsen', ttl: 'Yukata, bath key, nine-bath circuit', txt: 'Check in, change into yukata, get the bath key and start the kyūtō-meguri. The baths are small and very hot; you won\'t do all nine before dinner. Stamp card is in this app.', cost: 'free for guests', bk: 'ryokan' },
        { t: '18:00', k: 'food', ttl: 'Kaiseki dinner', txt: 'Ten or so small courses, usually with Shinshū beef, river fish and local sake.', cost: 'included' },
        { t: '20:00', k: 'onsen', ttl: 'More baths, lanterns, sake', txt: 'The lantern-lit lane, sake, and the retro shooting gallery if it\'s open. Futons get laid out while you eat. Public baths close at 22:00.', cost: 'sake ≈ ¥800 a glass' }
      ],
      warn: 'Nagaden revised its fares on Dec 5, 2026. The ¥5,100 pass is still listed by Nagano\'s tourism board; ask at the Nagaden counter whether pass holders also need the dated web reservation. Snow isn\'t guaranteed this early, and on some days the monkeys don\'t get in the water.',
      go: [
        { n: 'Jigokudani Monkey Park', jp: '地獄谷野猿公苑', q: 'Jigokudani Monkey Park', why: 'Snow monkeys in the hot pool. Closes 16:00 in winter.' },
        { n: 'Shibu Onsen lane', jp: '渋温泉', q: 'Shibu Onsen', why: 'Stone lane of wooden inns; the nine public baths are all within 4 minutes\' walk.' },
        { n: 'Shibu Takayakushi', jp: '渋高薬師', q: 'Shibu Takayakushi', why: 'Small temple above town: the final stamp after all nine baths.' },
        { n: 'Yudanaka Station', jp: '湯田中駅', q: 'Yudanaka Station', why: 'End of the Nagaden line.' }
      ],
      buy: [
        { w: 'Shinkansen Tokyo → Nagano', p: '¥8,340 reserved' },
        { w: 'Ekiben for the train', p: '≈ ¥1,200', note: 'Tokyo Station\'s Ekibenya Matsuri has hundreds.' },
        { w: 'Snow Monkey Pass (train / bus)', p: '¥5,100', note: 'Covers Nagaden, the park bus and park entry. Confirm at the counter.' },
        { w: 'Park web ticket (if not on the pass)', p: '¥1,000' },
        { w: 'Kigan tenugui (prayer towel) for the stamps', p: 'small; ask at the front desk', note: 'Stamp it at each bath, then at Shibu Takayakushi.' },
        { w: 'Local sake', p: '≈ ¥800 a glass' }
      ],
      do: [
        { ttl: 'Nine-bath crawl', txt: 'Each bath is locked; your ryokan key opens all of them, 6:00–22:00. Knock, peek, add cold water only if you\'re alone. Bring the small towel and a plastic bag for wet things.' },
        { ttl: 'Yukata 101', txt: 'Left side over right (right over left is for funerals). Wear the haori jacket on top outside; it\'s freezing.' },
        { ttl: 'Monkey park', txt: 'Best light 14:00–15:00. Phones on silent, no food in sight. Stay on the trail on the way out; it gets dark early.' }
      ],
      prep: ['Daypack only; suitcases are already heading north', 'Grip boots on, not packed', 'Monkey park QR saved', 'Tell the ryokan your arrival time'],
      regroup: { n: 'Kanaguya front entrance', jp: '金具屋 玄関', note: 'Shibu is one lane; you can\'t get lost for long.' }
    },

    {
      id: 'd5', n: 5, date: '2026-12-14', tz: 'JST', from: '04:00',
      region: 'hokkaido', place: 'sapporo', sleep: 'sapporo', night: 1,
      title: 'Temple, then all the way north', sub: 'Zenkō-ji · Shinkansen · fly to Sapporo · lamb barbecue',
      tagline: 'Breakfast in Nagano, jingisukan in Sapporo.',
      plan: 31500,
      transit: {
        title: 'Shibu Onsen → Sapporo', meta: 'about 7 h · ≈ ¥21,000–28,000',
        steps: [
          'Nagaden, Yudanaka → Nagano (45–50 min); get off at Gondō, two stops early, for Zenkō-ji. ≈ ¥1,400.',
          'Hokuriku Shinkansen, Nagano → Tokyo, 80–105 min, ¥8,340.',
          'JR Yamanote, Tokyo → Hamamatsuchō (6 min), then Tokyo Monorail → Haneda T1 or T2 (20 min). ≈ ¥700 together.',
          'Flight Haneda → New Chitose (CTS), 1 h 35. ANA and AIRDO use Terminal 2; JAL and Skymark Terminal 1.',
          'JR Rapid Airport, New Chitose → Sapporo, 37 min, every 12 min or so, ≈ ¥1,200. Hotel is one subway stop or a 12-min walk from Sapporo Station.'
        ]
      },
      items: [
        { t: '07:00', k: 'onsen', ttl: 'Morning bath, ryokan breakfast', cost: 'included' },
        { t: '09:45', k: 'train', ttl: 'Check out, Nagaden from Yudanaka', txt: 'Get off at Gondō for Zenkō-ji.', cost: '≈ ¥1,400', fix: 1, leave: '09:30' },
        { t: '11:00', k: 'see', ttl: 'Zenkō-ji', txt: '10 min walk from Gondō. A 1,400-year-old temple with a pitch-dark tunnel under the altar: find the "key to paradise" by touch. Soba or oyaki on the approach street.', cost: 'inner hall ≈ ¥600 · lunch ≈ ¥1,500', pl: { n: 'Zenkō-ji', jp: '善光寺', q: 'Zenkoji Temple Nagano' } },
        { t: '13:15', k: 'train', ttl: 'Shinkansen Nagano → Tokyo', txt: 'Be on a train by 13:45 at the latest.', cost: '¥8,340', fix: 1, leave: '12:50', bk: 'shink2' },
        { t: '15:00', a: 1, k: 'train', ttl: 'Tokyo Station → Haneda', txt: 'Yamanote to Hamamatsuchō, then the monorail. At the airport by 16:00.', cost: '≈ ¥700' },
        { t: '17:30', k: 'flight', ttl: 'Fly to Sapporo', txt: 'Pick a departure between 17:30 and 18:30. Power banks stay with you at your seat, not in the overhead bin.', cost: '≈ ¥9,000–16,000', fix: 1, bk: 'dom1' },
        { t: '20:45', a: 1, k: 'stay', ttl: "Check in at La'gent Stay", txt: 'JR Rapid Airport from New Chitose, 37 min. Outside it\'s around −3 °C and probably snowing.', cost: 'train ≈ ¥1,200', bk: 'sapporo1', pl: { n: "La'gent Stay Sapporo Odori", jp: 'ラ・ジェント・ステイ札幌大通', q: "La'gent Stay Sapporo Odori" } },
        { t: '21:15', k: 'food', ttl: 'Jingisukan at Daruma', txt: 'Grilled lamb on a dome-shaped skillet, Sapporo\'s signature. Several branches in Susukino, open late, counter seats, the queue moves fast. Sapporo Classic on tap.', cost: '≈ ¥3,500–5,000', pl: { n: 'Daruma, Susukino', jp: 'だるま すすきの', q: 'Jingisukan Daruma Susukino' } },
        { t: '23:00', k: 'night', ttl: 'One drink, or the hotel hot-spring bath', txt: 'The bus leaves early tomorrow.' }
      ],
      go: [
        { n: 'Zenkō-ji', jp: '善光寺', q: 'Zenkoji Temple Nagano', why: 'The tunnel under the altar (okaidan meguri).' },
        { n: 'Haneda Airport', jp: '羽田空港', q: 'Haneda Airport Terminal 2', why: 'ANA / AIRDO from T2, JAL / Skymark from T1.' },
        { n: 'Daruma (jingisukan)', jp: 'だるま 本店', q: 'Jingisukan Daruma Susukino', why: 'Sapporo\'s classic lamb counter.' },
        { n: 'Susukino crossing', jp: 'すすきの交差点', q: 'Susukino Crossing', why: 'Neon and the giant Nikka whisky sign.' }
      ],
      buy: [
        { w: 'Oyaki on the Zenkō-ji approach', p: '≈ ¥200–300 each', note: 'Stuffed Nagano dumplings.' },
        { w: 'Zenkō-ji inner hall ticket', p: '≈ ¥600' },
        { w: 'Shinkansen Nagano → Tokyo', p: '¥8,340' },
        { w: 'Flight HND → CTS', p: '≈ ¥9,000–16,000' },
        { w: 'JR Rapid Airport to Sapporo', p: '≈ ¥1,200' },
        { w: 'Jingisukan and Sapporo Classic', p: '≈ ¥3,500–5,000' }
      ],
      do: [
        { ttl: 'If the morning runs late', txt: 'Skip Zenkō-ji and go straight to Nagano Station. The flight is the thing that can\'t move.' },
        { ttl: 'Jingisukan', txt: 'Fat goes on the top of the dome, veg on the rim. They\'ll give you a bib; wear it.' }
      ],
      prep: ['Last soak, then out by 09:30', 'Domestic flight booking code ready', 'Power banks in your pocket for the flight'],
      regroup: { n: 'Under the Nikka sign, Susukino crossing', jp: 'すすきの交差点 ニッカの看板', note: 'Zenkō-ji: the main gate (Sanmon).' },
      nightKit: { last: 'Walkable: Susukino → hotel is 5 min', taxi: 'Taxis queue on Ekimae-dōri', first: '' }
    },

    {
      id: 'd6', n: 6, date: '2026-12-15', tz: 'JST', from: '04:00',
      region: 'niseko', place: 'niseko', sleep: 'niseko', night: 1,
      title: 'Up to the mountain', sub: 'Resort bus · gear · onsen · Bar Gyu+',
      tagline: 'Three nights under Mt Yōtei.',
      plan: 27750,
      transit: {
        title: 'Sapporo → Niseko Hirafu', meta: 'about 3 h · ≈ ¥6,000',
        steps: [
          'Hokkaido Resort Liner RL501 picks up at central Sapporo hotels 07:35–08:25 (Keio Plaza 07:45, Sapporo Tokyu REI 08:15, Sapporo Excel Hotel Tokyu 08:25) and reaches the Hirafu Welcome Centre at 11:10. Runs daily from Dec 2. Tokyu REI is about 8 min walk from La\'gent Stay.',
          'Backup: Hokkaido Chūō Bus from JR Sapporo Station North Gate, 07:50 or 09:20 last season, ¥6,000, reserve by 18:00 the day before.'
        ]
      },
      items: [
        { t: '07:15', k: 'stay', ttl: 'Check out with daypacks', txt: 'Konbini breakfast, walk to the Tokyu REI stop (about 8 min).' },
        { t: '08:15', k: 'bus', ttl: 'Resort Liner RL501 to Hirafu', txt: 'Over Nakayama Pass with a rest stop.', cost: '≈ ¥6,000', fix: 1, leave: '08:00', bk: 'bus', pl: { n: 'Sapporo Tokyu REI Hotel', jp: '札幌東急REIホテル', q: 'Sapporo Tokyu REI Hotel' } },
        { t: '11:10', k: 'bus', ttl: 'Hirafu Welcome Centre', txt: 'Call or message the hotel for its shuttle. Your suitcases should be waiting.', bag: 'arrive', pl: { n: 'Hirafu Welcome Centre', jp: 'ひらふウェルカムセンター', q: 'Hirafu Welcome Center Niseko' } },
        { t: '12:00', k: 'food', ttl: 'Lunch in the village', txt: 'Ramen, katsu curry, or the food trucks.', cost: '≈ ¥1,500–2,500' },
        { t: '13:30', k: 'ski', ttl: 'Rental fitting', txt: 'Do it now so tomorrow starts on snow, not in a queue. Buy lift tickets online tonight.', cost: '2 days ≈ ¥10,000–16,500 + helmet', bk: 'rental' },
        { t: '15:30', k: 'onsen', ttl: 'Onsen', txt: 'Yukoro in lower Hirafu is the locals\' bath; Yumoto Niseko Prince Hotel Hirafutei has an outdoor pool facing the slopes.', cost: '≈ ¥1,000–1,500', pl: { n: 'Hirafutei onsen', jp: 'ニセコプリンスホテル ひらふ亭', q: 'Yumoto Niseko Prince Hotel Hirafutei' } },
        { t: '16:00', k: 'ski', o: 1, ttl: 'Option: night skiing', txt: '16:00–19:00 under lights instead of the onsen.', cost: '¥5,400' },
        { t: '19:00', k: 'night', ttl: 'Izakaya, then Bar Gyu+', txt: 'Mid-December is before the crowds, but reserve dinner anyway. Bar Gyu+ is the one you enter through a fridge door.', cost: '≈ ¥5,000–8,000', pl: { n: 'Bar Gyu+', jp: 'バー ギュウ', q: 'Bar Gyu+ Niseko' } }
      ],
      go: [
        { n: 'Hirafu Welcome Centre', jp: 'ひらふウェルカムセンター', q: 'Hirafu Welcome Center Niseko', why: 'Bus stop, info desk, taxis.' },
        { n: 'Yukoro onsen', jp: '湯ころ', q: 'Yukoro Onsen Niseko', why: 'Locals\' bath in lower Hirafu.' },
        { n: 'Hirafutei onsen', jp: 'ひらふ亭', q: 'Yumoto Niseko Prince Hotel Hirafutei', why: 'Outdoor bath facing the slopes.' },
        { n: 'Bar Gyu+', jp: 'バー ギュウ', q: 'Bar Gyu+ Niseko', why: 'Through the fridge door.' },
        { n: 'Seicomart Hirafu', jp: 'セイコーマート', q: 'Seicomart Niseko Hirafu', why: 'Hokkaido\'s konbini; the "Hot Chef" counter does fresh katsudon and fried chicken.' }
      ],
      buy: [
        { w: 'Resort Liner seat', p: '≈ ¥6,000' },
        { w: 'Lift tickets for Wed and Thu (online)', p: '¥11,900 each day', note: 'All Mountain 1-day includes night skiing. Counter price ¥12,600.' },
        { w: 'Rental, 2 days', p: '≈ ¥10,000 standard · ≈ ¥16,500 premium', note: 'Helmet ≈ ¥1,500–3,000 a day. Credit card for the deposit.' },
        { w: 'Onsen entry', p: '≈ ¥1,000–1,500' },
        { w: 'Hand warmers and a neck gaiter', p: '≈ ¥300–2,000', note: 'Seicomart or the ski shops.' }
      ],
      do: [
        { ttl: 'Rental fitting', txt: 'Boots should touch your toes standing, and pull back when you flex. Ask for a snug boot; rental boots pack out fast.' },
        { ttl: 'Niseko Rules', txt: 'Off-piste only through the marked gates, and only when they\'re open. Ropes are not suggestions; lift passes get cut.' }
      ],
      prep: ['Daypacks only; suitcases are at the hotel', 'Bus booking code', 'Ski jacket and pants for tomorrow'],
      regroup: { n: 'Hirafu Welcome Centre', jp: 'ひらふウェルカムセンター', note: 'Night: hotel lobby.' },
      nightKit: { last: 'Ask the front desk about the last evening shuttle', taxi: 'Taxis wait at the Welcome Centre; Hirafu → hotel is a short ride', first: 'Hotel is about a 20-min walk from the Grand Hirafu base' }
    },

    {
      id: 'd7', n: 7, date: '2026-12-16', tz: 'JST', from: '04:00',
      region: 'niseko', place: 'niseko', sleep: 'niseko', ski: 1,
      title: 'Ski day one', sub: 'Hirafu · Hanazono · night skiing',
      tagline: 'Mt Yōtei at sunset from the top of the gondola.',
      plan: 19200,
      items: [
        { t: '08:30', k: 'ski', ttl: 'First lifts at Hirafu', txt: 'Start on the groomed greens and blues off the Ace and King areas, then traverse to Hanazono for wide, quieter runs. New to it? A morning group lesson pays for itself.', cost: 'lift ¥11,900 · lesson ≈ ¥12,000–18,000', bk: 'lift', pl: { n: 'Niseko Grand Hirafu', jp: 'ニセコグラン・ヒラフ', q: 'Niseko Tokyu Grand Hirafu' } },
        { t: '12:00', k: 'food', ttl: 'Lunch on the mountain', cost: '≈ ¥1,800–2,800' },
        { t: '15:30', k: 'see', ttl: 'Mt Yōtei sunset', txt: 'From the top of the Hirafu gondola, sunset about 16:00. Best photo of the trip.', sun: 1 },
        { t: '16:00', k: 'ski', ttl: 'Night skiing until 19:00', txt: 'Same ticket. Not every lift runs after dark.', cost: 'included' },
        { t: '19:30', k: 'food', ttl: 'Onsen, then dinner', txt: 'Soup curry or yakitori.', cost: '≈ ¥4,000–6,000' }
      ],
      go: [
        { n: 'Hirafu gondola', jp: 'ヒラフゴンドラ', q: 'Niseko Grand Hirafu gondola', why: 'Sunset over Mt Yōtei.' },
        { n: 'Niseko Hanazono', jp: 'ニセコHANAZONO', q: 'Niseko Hanazono Resort', why: 'Wide, quieter groomers.' }
      ],
      buy: [
        { w: 'Lift ticket (All Mountain 1-day)', p: '¥11,900 online' },
        { w: 'Group lesson (if someone is new)', p: '≈ ¥12,000–18,000' },
        { w: 'Mountain lunch', p: '≈ ¥1,800–2,800' },
        { w: 'Dinner', p: '≈ ¥4,000–6,000' }
      ],
      do: [
        { ttl: 'Layer like a local', txt: 'Base layer, fleece, shell. −8 °C at night with wind; hand warmers inside gloves.' },
        { ttl: 'Regroup on the hill', txt: 'Pick a lift base and a time (e.g. top of the gondola at 15:30). Phones die fast in the cold; keep them in an inside pocket.' }
      ],
      prep: ['Lift ticket on your phone or in a pocket', 'Hand warmers in gloves', 'Sunglasses + goggles', 'Phone in an inside pocket'],
      regroup: { n: 'Top of the Hirafu gondola, 15:30', note: 'Otherwise the gondola base. Night: hotel lobby.' }
    },

    {
      id: 'd8', n: 8, date: '2026-12-17', tz: 'JST', from: '04:00',
      region: 'niseko', place: 'niseko', sleep: 'niseko', ski: 1,
      title: 'Ski day two', sub: 'Powder hunt or All Mountain tour · Kutchan dinner',
      tagline: 'If it snowed overnight, be on the first lift.',
      plan: 19700,
      items: [
        { t: '08:30', k: 'ski', ttl: 'First lift, or tour the mountain', txt: 'Fresh snow: first lift at Hirafu. Otherwise use the All Mountain ticket to cross to Niseko Village and Annupuri for long, mellow cruisers, and take the free Niseko United shuttle back.', cost: 'lift ¥11,900', bk: 'lift' },
        { t: '12:00', k: 'food', ttl: 'Lunch on the mountain', cost: '≈ ¥1,800–2,800' },
        { t: '14:30', k: 'ski', ttl: 'Return rentals', txt: 'Or keep them until the shop\'s evening close if you\'re night skiing.' },
        { t: '18:30', k: 'food', ttl: 'Dinner in Kutchan town', txt: '10–15 min by taxi: more local and noticeably cheaper than Hirafu. Pack tonight, and book tomorrow\'s 08:45 taxi at the front desk.', cost: 'dinner ≈ ¥3,500–5,500 · taxi ≈ ¥3,000 each way total', pl: { n: 'Kutchan', jp: '倶知安町', q: 'Kutchan Station' } }
      ],
      warn: 'Plan B if the snow is thin: ski one day, and use the other for a longer Otaru and Sapporo day (Sapporo Beer Museum, Mt Moiwa ropeway at night, Jōzankei onsen). Single-day tickets keep that choice open.',
      go: [
        { n: 'Niseko Village', jp: 'ニセコビレッジ', q: 'Niseko Village Ski Resort', why: 'Long cruisers; free shuttle back.' },
        { n: 'Niseko Annupuri', jp: 'ニセコアンヌプリ', q: 'Niseko Annupuri International Ski Area', why: 'Mellow, quiet, wide.' },
        { n: 'Kutchan town', jp: '倶知安', q: 'Kutchan Station', why: 'Cheaper izakaya where locals eat.' }
      ],
      buy: [
        { w: 'Lift ticket', p: '¥11,900 online' },
        { w: 'Mountain lunch', p: '≈ ¥1,800–2,800' },
        { w: 'Kutchan taxi (each way, total)', p: '≈ ¥3,000' },
        { w: 'Kutchan dinner', p: '≈ ¥3,500–5,500' }
      ],
      do: [
        { ttl: 'Read the snow', txt: 'Check the snowfall on this screen first thing. 10 cm+ overnight means powder: go straight to the top lifts at Hirafu.' },
        { ttl: 'Tonight', txt: 'Pack, book the 08:45 taxi to Kutchan Station at the front desk, and check the Kutchan → Yoichi timetable.' }
      ],
      prep: ['Return rentals by close', 'Pack suitcases tonight', 'Taxi booked for 08:45', 'Check the Kutchan → Yoichi train time'],
      regroup: { n: 'Hirafu gondola base', note: 'Night: hotel lobby.' }
    },

    {
      id: 'd9', n: 9, date: '2026-12-18', tz: 'JST', from: '04:00',
      region: 'hokkaido', place: 'sapporo', sleep: 'sapporo', night: 1,
      title: 'Yoichi, Otaru, Susukino', sub: 'Nikka distillery · canal · Christmas market',
      tagline: 'Whisky at the source, then Friday in Sapporo.',
      plan: 14400,
      transit: {
        title: 'Hirafu → Yoichi → Otaru → Sapporo', meta: 'three short trains · ≈ ¥3,400 with the taxi share',
        steps: [
          'Taxi, Hirafu → JR Kutchan Station, 15 min, ≈ ¥3,000–3,500 total (book at the front desk the night before).',
          'JR Hakodate Line local, Kutchan → Yoichi, about 1 h, ≈ ¥1,000. Only a handful of trains a day: plan around the mid-morning one.',
          'JR, Yoichi → Otaru, 25 min, ¥440. Hourly-ish.',
          'JR Rapid Airport or local, Otaru → Sapporo, 35–45 min, ≈ ¥800. Every 10–20 min.',
          'Suitcases: coin lockers at Yoichi Station or the distillery entrance, and at Otaru Station (≈ ¥500–800).'
        ]
      },
      items: [
        { t: '08:45', k: 'bus', ttl: 'Check out, taxi to Kutchan', cost: '≈ ¥1,100 each', fix: 1, leave: '08:45' },
        { t: '09:30', a: 1, k: 'train', ttl: 'JR to Yoichi', txt: 'Local train, about 1 h. Check the exact time on Thursday night.', cost: '≈ ¥1,000', fix: 1 },
        { t: '10:45', k: 'see', ttl: 'Nikka Yoichi Distillery', txt: '3 min from the station. The free guided tour (coal-fired stills, the founder\'s house) is reservation-only. Without one you can still walk in to the museum, the paid tasting bar and the shop with distillery-only bottles.', cost: 'tour free · tastings ≈ ¥500–1,500 a glass', bk: 'nikka', pl: { n: 'Nikka Yoichi Distillery', jp: 'ニッカウヰスキー余市蒸溜所', q: 'Nikka Whisky Yoichi Distillery' } },
        { t: '13:00', k: 'food', ttl: 'Train to Otaru, sushi lunch', txt: 'Otaru is known for sushi, or grab a seafood bowl at Sankaku Market beside the station.', cost: 'train ¥440 · lunch ≈ ¥3,000–5,000', pl: { n: 'Sankaku Market', jp: '三角市場', q: 'Sankaku Market Otaru' } },
        { t: '14:30', k: 'see', ttl: 'Sakaimachi Street → Otaru Canal', txt: 'Glass shops, LeTAO cheesecake, a sake brewery, down to the canal. Gas lamps come on at dusk, around 16:00.', sun: 1, pl: { n: 'Otaru Canal', jp: '小樽運河', q: 'Otaru Canal' } },
        { t: '16:45', k: 'train', ttl: 'Train to Sapporo, check in', cost: '≈ ¥800', fix: 1, bk: 'sapporo2' },
        { t: '18:30', k: 'see', ttl: 'Christmas market + White Illumination', txt: 'Munich Christmas Market in Ōdōri Park (11:00–21:00, to Dec 25); White Illumination 16:30–22:00. Mulled wine, sausages, snow.', cost: 'free · mulled wine ≈ ¥700–1,000', pl: { n: 'Odori Park', jp: '大通公園', q: 'Odori Park Sapporo' } },
        { t: '20:00', k: 'night', ttl: 'Soup curry, Susukino, miso ramen', txt: 'Soup curry (Garaku or Suage+) or a crab-and-sashimi izakaya. Friday night in Susukino, finishing the Sapporo way with miso ramen in Ganso Ramen Yokochō.', cost: '≈ ¥2,000–6,000 · ramen ≈ ¥1,100–1,400', pl: { n: 'Ganso Ramen Yokochō', jp: '元祖さっぽろラーメン横丁', q: 'Ganso Ramen Yokocho Sapporo' } }
      ],
      warn: 'Easier version: skip Yoichi and Otaru and take the afternoon resort bus from Hirafu to Sapporo (Resort Liner 14:00 → about 16:30–17:10; White Liner 15:00 → 17:30). That buys a third morning on the mountain.',
      go: [
        { n: 'Nikka Yoichi Distillery', jp: 'ニッカウヰスキー余市蒸溜所', q: 'Nikka Whisky Yoichi Distillery', why: 'Coal-fired stills and distillery-only bottles.' },
        { n: 'Sankaku Market', jp: '三角市場', q: 'Sankaku Market Otaru', why: 'Seafood bowls beside Otaru Station.' },
        { n: 'Sakaimachi Street', jp: '堺町通り', q: 'Sakaimachi Street Otaru', why: 'Glass, music boxes, LeTAO.' },
        { n: 'Otaru Canal', jp: '小樽運河', q: 'Otaru Canal', why: 'Gas lamps at dusk.' },
        { n: 'Odori Park Christmas Market', jp: 'ミュンヘン・クリスマス市', q: 'Munich Christmas Market Sapporo Odori Park', why: 'Mulled wine under the White Illumination.' },
        { n: 'Soup Curry GARAKU', jp: 'スープカレー GARAKU', q: 'Soup Curry GARAKU Sapporo', why: 'The soup curry everyone queues for.' },
        { n: 'Ganso Ramen Yokochō', jp: '元祖さっぽろラーメン横丁', q: 'Ganso Ramen Yokocho Sapporo', why: 'Miso ramen alley to end the night.' }
      ],
      buy: [
        { w: 'Distillery-only Nikka bottle', p: 'varies; check the shop', note: 'Counts toward your 1.14 L duty-free allowance home. One 700 ml bottle each fits.' },
        { w: 'Tasting bar', p: '≈ ¥500–1,500 a glass' },
        { w: 'LeTAO Double Fromage cheesecake', p: '≈ ¥2,000', note: 'Eat it; it won\'t survive the trip.' },
        { w: 'Otaru glass (Kitaichi Glass)', p: 'from ≈ ¥1,000' },
        { w: 'Coin lockers', p: '≈ ¥500–800' },
        { w: 'Mulled wine at the market', p: '≈ ¥700–1,000' },
        { w: 'Soup curry', p: '≈ ¥1,500–2,000' }
      ],
      do: [
        { ttl: 'Nikka tour', txt: 'Reservations open 4 weeks ahead (about Nov 20). Show up 10 min early. The tasting at the end is free; the paid bar has the rare stuff.' },
        { ttl: 'Shime parfait', txt: 'Sapporo ends a night with a "shime" parfait instead of ramen. Try one if you\'re still standing after Susukino.' }
      ],
      prep: ['Taxi at 08:45', 'Nikka tour confirmation', 'Coins for lockers', 'Passport for tax-free bottles'],
      regroup: { n: 'Sapporo TV Tower, Ōdōri Park', jp: 'さっぽろテレビ塔', note: 'Late: under the Nikka sign at the Susukino crossing.' },
      nightKit: { last: 'Walkable: Susukino → hotel 5 min', taxi: 'Taxis on Ekimae-dōri', first: '' }
    },

    {
      id: 'd10', n: 10, date: '2026-12-19', tz: 'JST', from: '04:00',
      region: 'tokyo', place: 'tokyo', sleep: 'tokyo', night: 1,
      title: 'South again; the last night', sub: 'Nijō Market · fly to Tokyo · Sensō-ji year-end fair',
      tagline: 'Crab for breakfast, Asakusa by lantern light.',
      plan: 26600,
      transit: {
        title: 'Sapporo → Shinjuku', meta: 'about 4 h 30 door to door · ≈ ¥11,500–20,000',
        steps: [
          'JR Rapid Airport, Sapporo → New Chitose, 37 min, ≈ ¥1,200.',
          'Flight CTS → Haneda, 1 h 40. Snow at New Chitose causes delays, which is why you fly back a full day before the flight home.',
          'Limousine Bus (≈ ¥1,400) or Keikyū + JR (≈ ¥550) to Shinjuku.'
        ]
      },
      items: [
        { t: '08:00', k: 'food', ttl: 'Nijō Market breakfast', txt: '10 min walk from the hotel: a seafood rice bowl with crab, uni and salmon roe.', cost: '≈ ¥2,500–4,000', pl: { n: 'Nijō Market', jp: '二条市場', q: 'Nijo Market Sapporo' } },
        { t: '09:45', k: 'train', ttl: 'Check out, train to New Chitose', txt: 'The domestic terminal has a ramen street and the best souvenir shopping in Hokkaido.', cost: '≈ ¥1,200', fix: 1, leave: '09:30' },
        { t: '12:00', k: 'flight', ttl: 'Fly to Haneda', txt: 'Pick a departure between 12:00 and 13:00.', cost: '≈ ¥9,000–17,000', fix: 1, bk: 'dom2' },
        { t: '16:00', a: 1, k: 'stay', ttl: 'Back at the Shinjuku hotel', cost: '≈ ¥550–1,400', bk: 'tokyo2' },
        { t: '16:50', k: 'admin', ttl: 'United check-in opens for UA 804', txt: 'Check in all three in the app and add passports.' },
        { t: '17:15', k: 'see', ttl: 'Hagoita-ichi at Sensō-ji', txt: 'Year-end fair (Dec 17–19 only, 09:00–20:00) selling decorated good-luck paddles; sellers clap out a rhythm for each sale. The temple is lit up. JR Chūō rapid to Kanda, Ginza Line to Asakusa, about 35 min.', cost: 'free · train ≈ ¥400', pl: { n: 'Sensō-ji', jp: '浅草寺', q: 'Sensoji Temple Asakusa' } },
        { t: '18:45', k: 'food', ttl: 'Hoppy Street', txt: '5 min from the temple: open-fronted izakaya with stewed beef and cheap drinks.', cost: '≈ ¥3,000–4,500', pl: { n: 'Hoppy Street', jp: 'ホッピー通り', q: 'Hoppy Street Asakusa' } },
        { t: '21:00', k: 'night', ttl: 'Last night out in Sangenjaya', txt: 'Ginza Line to Shibuya, then 2 stops on the Den-en-toshi Line; 45 min. The "Sankaku Chitai" triangle of tiny alley bars, mostly locals. Back to Shinjuku in 20 min.', cost: '≈ ¥3,000–5,000', pl: { n: 'Sangenjaya Sankaku Chitai', jp: '三軒茶屋 三角地帯', q: 'Sangenjaya Sankaku Chitai' } },
        { t: '00:15', nd: 1, k: 'train', ttl: 'Last trains', txt: 'About 00:15–00:45. Flight home is at 16:50 tomorrow; checkout is 11:00.' }
      ],
      go: [
        { n: 'Nijō Market', jp: '二条市場', q: 'Nijo Market Sapporo', why: 'Crab, uni and ikura bowls from 7am.' },
        { n: 'New Chitose domestic terminal', jp: '新千歳空港 国内線', q: 'New Chitose Airport Domestic Terminal', why: 'Ramen Dojo, Royce, Shiroi Koibito.' },
        { n: 'Sensō-ji', jp: '浅草寺', q: 'Sensoji Temple Asakusa', why: 'You\'ve seen the temple; the Hagoita-ichi paddle fair (Dec 17–19 only) is new.' },
        { n: 'Sangenjaya Sankaku Chitai', jp: '三軒茶屋 三角地帯', q: 'Sangenjaya Sankaku Chitai', why: 'Triangle of tiny alley bars for the last night.' },
        { n: 'Kaminarimon', jp: '雷門', q: 'Kaminarimon Gate', why: 'The giant lantern gate; meet here.' },
        { n: 'Hoppy Street', jp: 'ホッピー通り', q: 'Hoppy Street Asakusa', why: 'Stewed beef, cheap beer, plastic stools.' }
      ],
      buy: [
        { w: 'Kaisendon at Nijō Market', p: '≈ ¥2,500–4,000' },
        { w: 'Royce Nama Chocolate', p: '≈ ¥900–1,000 a box', note: 'Needs to stay cold: buy at the airport, it\'s a short flight.' },
        { w: 'Shiroi Koibito', p: '≈ ¥1,000–2,000 a box', note: 'The classic Hokkaido gift.' },
        { w: 'Flight CTS → HND', p: '≈ ¥9,000–17,000' },
        { w: 'A small hagoita paddle', p: 'small ones from a few thousand yen', note: 'Big ones run into six figures; haggling is part of the show.' },
        { w: 'Hoppy Street dinner', p: '≈ ¥3,000–4,500' }
      ],
      do: [
        { ttl: 'Hagoita-ichi', txt: 'When someone buys a paddle, the stall claps a rhythm (tejime). Watch a few, then buy a small one for the clap.' },
        { ttl: 'Last night', txt: 'Sangenjaya is two stops past Shibuya and feels nothing like it. Set a hard "home by" time: you fly at 16:50 tomorrow.' }
      ],
      prep: ['Check out by 09:30', 'Flight booking code', 'United check-in at 16:50'],
      regroup: { n: 'Kaminarimon (the big lantern gate)', jp: '雷門', note: 'Late night: hotel lobby, 8F.' },
      nightKit: { last: '≈ 00:15–00:45', taxi: 'Sangenjaya → Shinjuku ≈ ¥3,500–4,500 total', first: 'First trains about 05:00' }
    },

    {
      id: 'd11', n: 11, date: '2026-12-20', tz: 'JST', from: '04:00', until: { d: '2026-12-21', t: '04:00', tz: 'ET' },
      region: 'home', place: 'tokyo', sleep: 'home',
      title: 'Home', sub: 'Last shopping · Haneda 16:50 → Dulles → Toronto',
      tagline: 'Tax refund first, then bags.',
      plan: 3250,
      flight: { code: 'UA 804', from: 'HND', to: 'IAD', dep: { d: '2026-12-20', t: '16:50', tz: 'JST' }, arr: { d: '2026-12-20', t: '15:40', tz: 'ET' } },
      items: [
        { t: '09:00', k: 'food', ttl: 'Slow breakfast, pack', txt: 'Pack tax-refund goods where you can show them at the airport.' },
        { t: '11:00', k: 'shop', ttl: 'Check out, last shopping', txt: 'Leave bags at the desk. Don Quijote for whisky and snacks, Bic Camera for electronics.', pl: { n: 'Don Quijote Shinjuku', jp: 'ドン・キホーテ 新宿', q: 'Don Quijote Shinjuku' } },
        { t: '12:00', k: 'food', ttl: 'Last lunch: tsukemen', txt: 'Dipping ramen. Fūunji, near the South Exit, is the famous one; expect a queue.', cost: '≈ ¥1,200–1,500', pl: { n: 'Fūunji', jp: '風雲児 新宿', q: 'Fuunji Shinjuku' } },
        { t: '13:00', k: 'bus', ttl: 'Leave for Haneda Terminal 3', txt: 'Limousine Bus from Shinjuku (45–70 min, ≈ ¥1,400) or JR + Keikyū (50 min, ≈ ¥550).', cost: '≈ ¥550–1,400', fix: 1, leave: '13:00' },
        { t: '14:00', k: 'admin', ttl: 'T3: tax refund FIRST', txt: 'Do the tax-refund step before you check bags (customs may ask to see the goods), then United check-in, security, immigration.', taxfree: 1 },
        { t: '16:50', k: 'flight', ttl: 'UA 804 Haneda → Dulles', txt: 'Arrives 15:40 the same day, 12 h 50.', fix: 1, bk: 'united', dur: 770 },
        { t: '15:40', tz: 'ET', k: 'move', ttl: 'Dulles: US customs, re-drop bags', txt: 'Clear US immigration and customs, collect and re-drop checked bags, back through security. 1 h 38. Use Mobile Passport Control if you have it.', pl: { n: 'Washington Dulles (IAD)', q: 'Washington Dulles International Airport' } },
        { t: '17:18', tz: 'ET', k: 'flight', ttl: 'UA 3453 Dulles → Toronto', txt: 'Republic, Embraer 175. Lands Pearson 19:01.', fix: 1, bk: 'united' },
        { t: '19:01', tz: 'ET', k: 'move', ttl: 'Toronto Pearson', txt: 'Declare everything. UP Express to Union every 15 min.', cost: 'UP ≈ C$12.35', duty: 1 }
      ],
      go: [
        { n: 'Don Quijote Shinjuku', jp: 'ドン・キホーテ 新宿東南口', q: 'Don Quijote Shinjuku', why: 'Whisky, snacks, everything else. Open late.' },
        { n: 'Bic Camera Shinjuku', jp: 'ビックカメラ 新宿', q: 'Bic Camera Shinjuku East', why: 'Electronics and camera gear.' },
        { n: 'Fūunji', jp: '風雲児', q: 'Fuunji Shinjuku', why: 'Tsukemen for the last lunch.' },
        { n: 'Haneda Terminal 3', jp: '羽田空港 第3ターミナル', q: 'Haneda Airport Terminal 3', why: 'Tax refund before bag drop.' }
      ],
      buy: [
        { w: 'Whisky at Don Quijote', p: '≈ ¥2,000–6,000 a bottle for common bottles', note: 'Duty-free home: 1.14 L of spirits each, so one 700 ml bottle per person. A second bottle is taxed.' },
        { w: 'Snacks (KitKat flavours, Jagariko, senbei)', p: '≈ ¥200–600 each' },
        { w: 'Tsukemen', p: '≈ ¥1,200–1,500' },
        { w: 'Limousine Bus to Haneda', p: '≈ ¥1,400' },
        { w: 'UP Express home', p: '≈ C$12.35' }
      ],
      do: [
        { ttl: 'Tax refund, new system', txt: 'Since Nov 1, 2026 shops charge the full price and you claim the 10% back at the airport. Show passport, receipts and goods at T3 before bag drop. The refund goes to your card later, minus a handling fee.' },
        { ttl: 'Dulles in 1 h 38', txt: 'Walk fast, have passports and the customs app ready, re-drop bags at the connection desk right after customs.' }
      ],
      prep: ['Passports', 'Receipts for tax-free goods in one envelope', 'Tax-free goods packed on top', 'Bags under 23 kg each'],
      regroup: { n: 'United check-in, Haneda T3', jp: '羽田空港 第3ターミナル ユナイテッド航空カウンター', note: 'Morning: hotel front desk.' }
    }
  ],

  prepList: [
    { id: 'p1', due: '2026-11-15', who: [1, 2], t: 'Confirm you\'re on the same four United flights; pick seats together in the United app' },
    { id: 'p2', due: '2026-11-15', who: [0], t: 'Ask United to move all three to an earlier BUF → Dulles flight on Dec 9 (the 52-min connection)' },
    { id: 'p3', due: '2026-11-15', who: [1], t: 'Shibu Onsen ryokan, Sun Dec 13 (1 room, 3 futons, dinner + breakfast)' },
    { id: 'p4', due: '2026-11-15', who: [2], t: 'Niseko lodging Dec 15–18 (3 nights)' },
    { id: 'p5', due: '2026-11-15', who: [0], t: 'Tokyo hotel Dec 10–13 and Dec 19–20; Sapporo hotel Dec 14 and Dec 18' },
    { id: 'p6', due: '2026-11-15', who: [0], t: 'Flights HND → CTS Mon Dec 14 (17:30–18:30) and CTS → HND Sat Dec 19 (12:00–13:00)' },
    { id: 'p7', due: '2026-11-15', who: [1], t: 'Snow Monkey Park dated web ticket for Dec 13' },
    { id: 'p8', due: '2026-12-07', who: [1], t: 'Check the Yokohama Red Brick Christmas Market hours for Fri Dec 11' },
    { id: 'p9', due: '2026-11-15', who: [0], t: 'Shinkansen seats Tokyo → Nagano Dec 13 and Nagano → Tokyo Dec 14' },
    { id: 'p10', due: '2026-11-15', who: [2], t: 'Buffalo: OurBus for Tue Dec 8 and one airport-hotel room' },
    { id: 'p11', due: '2026-11-22', who: [1], t: 'Nikka Yoichi guided tour, Fri Dec 18 (bookings open ~Nov 20)' },
    { id: 'p12', due: '2026-11-25', who: [2], t: 'Sapporo → Niseko Resort Liner, Tue Dec 15 morning' },
    { id: 'p13', due: '2026-11-25', who: [2], t: 'Niseko lift tickets (online) and ski rental pre-booking' },
    { id: 'p15', due: '2026-11-25', who: [0, 1, 2], t: 'Travel insurance that covers skiing (check credit-card coverage first)' },
    { id: 'p16', due: '2026-12-07', who: [0, 1, 2], t: 'Visit Japan Web: register and save the QR code' },
    { id: 'p17', due: '2026-12-07', who: [0, 1, 2], t: 'Suica: Apple Wallet (Moziah, AJ). Trenton: try Google Wallet; else Welcome Suica at Haneda' },
    { id: 'p18', due: '2026-12-07', who: [0, 1, 2], t: 'eSIM (Ubigi, Airalo or similar; 10 GB) ≈ C$20–30' },
    { id: 'p19', due: '2026-12-07', who: [0, 1, 2], t: 'Tell your banks; bring a no-FX-fee card and a debit card for 7-Eleven ATMs' },
    { id: 'p20', due: '2026-12-07', who: [2], t: 'Check the Niseko snow report; Plan B if the base is thin' },
    { id: 'p21', due: '2026-12-07', who: [0, 1, 2], t: 'Download: Google Maps offline areas, Google Translate Japanese offline, United, GO taxi' }
  ],

  packing: [
    'Passport', 'Visit Japan Web QR (saved offline)', 'Ski jacket and pants', 'Gloves + liner gloves', 'Goggles', 'Neck warmer',
    '2 sets of base layers', 'Ski socks ×3', 'Waterproof boots with real tread', 'Slip-on shoes', 'Socks without holes',
    'Power banks (carry-on only)', 'Chargers + 3-prong adapter', 'Daypack for 3 days (Dec 12–15)', 'Two days of clothes in carry-on',
    'Meds', 'No-FX credit card + debit card', 'Camera + spare battery', 'Sunglasses', 'Lip balm and moisturiser (dry cold)'
  ],

  bookings: [
    { k: 'united', n: 'United flights (all four)', d: 'd-1' },
    { k: 'ourbus', n: 'OurBus Toronto → Buffalo', d: 'd-2' },
    { k: 'buffalo', n: 'Buffalo airport hotel', d: 'd-2' },
    { k: 'tokyo1', n: 'Tokyo hotel, Dec 10–13', d: 'd1' },
    { k: 'shink1', n: 'Shinkansen Tokyo → Nagano', d: 'd4' },
    { k: 'monkey', n: 'Snow Monkey Park ticket', d: 'd4' },
    { k: 'ryokan', n: 'Shibu Onsen ryokan', d: 'd4' },
    { k: 'shink2', n: 'Shinkansen Nagano → Tokyo', d: 'd5' },
    { k: 'dom1', n: 'Flight Haneda → New Chitose', d: 'd5' },
    { k: 'sapporo1', n: 'Sapporo hotel, Dec 14', d: 'd5' },
    { k: 'bus', n: 'Resort Liner Sapporo → Hirafu', d: 'd6' },
    { k: 'niseko', n: 'Niseko hotel, Dec 15–18', d: 'd6' },
    { k: 'rental', n: 'Ski rental', d: 'd6' },
    { k: 'lift', n: 'Lift tickets', d: 'd7' },
    { k: 'nikka', n: 'Nikka Yoichi tour', d: 'd9' },
    { k: 'sapporo2', n: 'Sapporo hotel, Dec 18', d: 'd9' },
    { k: 'dom2', n: 'Flight New Chitose → Haneda', d: 'd10' },
    { k: 'tokyo2', n: 'Tokyo hotel, Dec 19', d: 'd10' },
    { k: 'insurance', n: 'Travel insurance (ski)', d: '' }
  ],

  food: [
    { id: 'f1', n: 'Regional plates at Kabuki Hall', r: 'tokyo', d: 'd1' },
    { id: 'f2', n: 'Your own Cup Noodles', r: 'tokyo', d: 'd2' },
    { id: 'f3', n: 'Mulled wine at the Red Brick market', r: 'tokyo', d: 'd2' },
    { id: 'f4', n: 'Chinatown pork bun and soup dumplings', r: 'tokyo', d: 'd2' },
    { id: 'f5', n: 'Standing bar in Noge', r: 'tokyo', d: 'd2' },
    { id: 'f6', n: 'Konbini egg sandwich', r: 'tokyo', d: 'd2' },
    { id: 'f7', n: 'Monjayaki at Tsukishima', r: 'tokyo', d: 'd3' },
    { id: 'f8', n: 'Ekiben on the Shinkansen', r: 'nagano', d: 'd4' },
    { id: 'f9', n: 'Shinshū soba', r: 'nagano', d: 'd4' },
    { id: 'f10', n: 'Ryokan kaiseki', r: 'nagano', d: 'd4' },
    { id: 'f11', n: 'Oyaki at Zenkō-ji', r: 'nagano', d: 'd5' },
    { id: 'f12', n: 'Jingisukan at Daruma', r: 'hokkaido', d: 'd5' },
    { id: 'f13', n: 'Sapporo Classic on tap', r: 'hokkaido', d: 'd5' },
    { id: 'f14', n: 'Seicomart Hot Chef', r: 'hokkaido', d: 'd6' },
    { id: 'f15', n: 'Soup curry', r: 'hokkaido', d: 'd7' },
    { id: 'f16', n: 'Nikka at the source', r: 'hokkaido', d: 'd9' },
    { id: 'f17', n: 'Otaru sushi', r: 'hokkaido', d: 'd9' },
    { id: 'f18', n: 'LeTAO cheesecake', r: 'hokkaido', d: 'd9' },
    { id: 'f19', n: 'Miso ramen, Ramen Yokochō', r: 'hokkaido', d: 'd9' },
    { id: 'f20', n: 'Shime parfait', r: 'hokkaido', d: 'd9' },
    { id: 'f21', n: 'Kaisendon at Nijō Market', r: 'hokkaido', d: 'd10' },
    { id: 'f22', n: 'Hoppy Street stewed beef', r: 'tokyo', d: 'd10' },
    { id: 'f23', n: 'Tsukemen at Fūunji', r: 'tokyo', d: 'd11' },
    { id: 'f24', n: 'Sangenjaya alley bar', r: 'tokyo', d: 'd10' }
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
      ['We\'d like to send our suitcases to our hotel in Niseko', 'スーツケースをニセコのホテルに送りたいです', 'Sūtsukēsu o Niseko no hoteru ni okuritai desu'],
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
    { n: 'Noge, Yokohama', lat: 35.4466, lng: 139.6306, area: 'tokyo' },
    { n: 'Ebisu Yokochō', lat: 35.6477, lng: 139.7107, area: 'tokyo' },
    { n: 'Sensō-ji', lat: 35.7148, lng: 139.7967, area: 'tokyo' },
    { n: 'Susukino crossing', lat: 43.0553, lng: 141.3530, area: 'hokkaido' },
    { n: 'Hirafu Welcome Centre', lat: 42.8607, lng: 140.6976, area: 'hokkaido' },
    { n: 'Jigokudani trailhead', lat: 36.7313, lng: 138.4442, area: 'nagano' }
  ],

  sources: 'Plan checked Nov 12–13, 2026: United itinerary email, Niseko United and Grand Hirafu, Japan Ski Experience, Niseko Central, Skye Niseko, White Liner, Go Nagano, Snow Monkey Guide, Ekitan, Selected Ryokan, Gracery Shinjuku, ikyu, Accor, NISADE, Skyscanner, Jorudan (Yokohama Christmas market), Kanagawa tourism (Cup Noodles Museum), Japan Activity (Air Cabin), Time Out (Kabuki Hall), Nifty Onsen (Thermae-Yu), sapporo.travel, japan-guide, Tokyo Cheapo. Hotel addresses from Jalan, KNT, NTA, Mapple and Accor (Nov 13, 2026).'
};
