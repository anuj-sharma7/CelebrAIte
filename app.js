// CelebrAIte — Intelligent GenAI Celebration & Event Operating System
// Full Production Engine with Seating Chart, Live Command Center, Digital Invitations & Analytics

const STORAGE_KEY = 'celebraite_events_v3';

// Built-in Rich Event Presets
const INITIAL_EVENTS = [
  {
    id: 'evt-wedding-01',
    title: 'Arjun & Ananya’s Royal Heritage Wedding',
    type: 'wedding',
    date: '2027-02-14',
    daysRemaining: 105,
    location: 'Taj Lake Palace & Jagmandir Island, Udaipur',
    guestCount: 280,
    totalBudget: 4500000,
    currency: '₹',
    visionPrompt: 'A magical 3-day royal Rajasthani heritage wedding blending timeless royal elegance, vibrant Marwari sangeet beats, regal gold & blush florals, and authentic Mewari feast under candlelit palace courtyards.',
    theme: {
      name: 'Regal Rajputana & Rose Quartz',
      colors: ['#831843', '#d97706', '#fbbf24', '#fce7f3', '#1e293b'],
      aesthetic: 'Palatial antique gold brassware, fragrant genda and marigold chandeliers, floating diya fountains, royal mirrorwork tents.',
      dressCode: 'Royal Indian Festive / Bandhgala & Zardozi Lehengas',
      monogram: 'A & A'
    },
    budgetCategories: [
      { id: 'b1', category: 'Venue & Palace Rentals (3 Days)', allocated: 1800000, spent: 1750000, notes: 'Main Courtyard, Banquet Lawn & Island Boat Transfers', status: 'on_track', color: '#ec4899' },
      { id: 'b2', category: 'Catering & Royal Mewari Dining', allocated: 1200000, spent: 1100000, notes: 'Includes welcome dinners, live chaat stalls, 5-course banquet', status: 'on_track', color: '#f59e0b' },
      { id: 'b3', category: 'Decor, Mandap & Royal Florals', allocated: 650000, spent: 700000, notes: 'Custom floating floral mandap on lake edge', status: 'warning', color: '#8b5cf6' },
      { id: 'b4', category: 'Cinematography & Pre-Wedding Film', allocated: 350000, spent: 350000, notes: 'Drone team, 4K multi-cam + 60s teaser reels', status: 'on_track', color: '#3b82f6' },
      { id: 'b5', category: 'Entertainment, Sangeet DJ & Folk Artists', allocated: 250000, spent: 220000, notes: 'Manganiyar folk troupe + Bollywood DJ', status: 'on_track', color: '#10b981' },
      { id: 'b6', category: 'Bridal Couture & Styling', allocated: 150000, spent: 160000, notes: 'Bridal zardozi lehenga & groom sherwani', status: 'on_track', color: '#f43f5e' },
      { id: 'b7', category: 'Guest Welcome Kits & Hampers', allocated: 100000, spent: 90000, notes: 'Handcrafted jharokha boxes with local sweets & organic mist', status: 'on_track', color: '#06b6d4' }
    ],
    timeline: [
      {
        id: 'tp1',
        phaseName: 'Phase 1: 3-6 Months Out (Milestones)',
        items: [
          { id: 't1-1', title: 'Lock Palace Venue Contract & Island Permits', timeOrOffset: '6 Months Before', completed: true, notes: 'Boat transit permits approved by municipal lake trust' },
          { id: 't1-2', title: 'Curate 3-Day Multi-Cuisine Food Menu Tasting', timeOrOffset: '4 Months Before', completed: true, notes: 'Tasted Dal Baati Churma, Laal Maas, and Continental dessert bar' },
          { id: 't1-3', title: 'Finalize Master Wedding Invites & Dispatch', timeOrOffset: '3 Months Before', completed: true, notes: 'Delivered WhatsApp animated invites + luxury hardbound boxes' }
        ]
      },
      {
        id: 'tp2',
        phaseName: 'Phase 2: 1 Month to 1 Week Out',
        items: [
          { id: 't2-1', title: 'Sangeet Choreography Final Rehearsals', timeOrOffset: '2 Weeks Before', completed: false, notes: '5 family group performances and couple dance routine' },
          { id: 't2-2', title: 'Confirm Airport Pickups & Luxury Shuttle Manifest', timeOrOffset: '1 Week Before', completed: false, notes: 'Fleet of 8 Innova Crystas and 2 Volvo coaches booked' },
          { id: 't2-3', title: 'Bridal & Groom Wardrobe Final Fitting', timeOrOffset: '5 Days Before', completed: true, notes: 'Alterations completed at designer boutique' }
        ]
      },
      {
        id: 'tp3',
        phaseName: 'Phase 3: Wedding Day (Run-of-Show)',
        items: [
          { id: 't3-1', title: 'Morning Haldi & Phoolon Ki Holi Ceremony', timeOrOffset: '09:30 AM', completed: false, notes: 'Poolside lawn with yellow drapes and dhol beats' },
          { id: 't3-2', title: 'High-Tea & Royal Safa Tying Session', timeOrOffset: '03:30 PM', completed: false, notes: 'Bandhani and chanderi turbans for all baraatis' },
          { id: 't3-3', title: 'Grand Royal Baraat with Vintage Car & Brass Band', timeOrOffset: '05:30 PM', completed: false, notes: 'Procession along the lakeside promenade' },
          { id: 't3-4', title: 'Sunset Varmala by the Lake Jagmandir', timeOrOffset: '06:45 PM', completed: false, notes: 'Cold pyro sparks and floral petals shower from balcony' },
          { id: 't3-5', title: 'Vedic Pheras at Floating Mandap', timeOrOffset: '07:30 PM', completed: false, notes: 'Soft sitar & santoor live instrumental background' },
          { id: 't3-6', title: 'Royal Banquet Dinner & Sitar Recital', timeOrOffset: '09:00 PM', completed: false, notes: 'Silverware dining experience for guests' }
        ]
      }
    ],
    vendors: [
      {
        id: 'v1',
        name: 'Taj Palace Hospitality Group',
        category: 'Venue',
        contact: 'Karan Rathore',
        phone: '+91 98290 12345',
        email: 'events@tajudaipur.com',
        status: 'booked',
        quote: 1800000,
        deliverables: ['Palace courtyard 3 days', 'Island jetty transfers', 'Lighting setup', 'Green rooms'],
        checklist: [
          { item: 'Sound curfew permit till 11 PM locked', done: true },
          { item: 'Alcohol & excise one-day permit', done: true },
          { item: 'Backup generator & rainproof marquee setup', done: false }
        ],
        rating: 4.9
      },
      {
        id: 'v2',
        name: 'The Royal Spoon Catering Co.',
        category: 'Catering',
        contact: 'Chef Devendra Singh',
        phone: '+91 94140 88990',
        email: 'royalspoon@mewar.in',
        status: 'booked',
        quote: 1200000,
        deliverables: ['Live Chaat street', '3-day Breakfast, Lunch & Grand Dinners', 'Special Jain counter', 'Mocktail Bar'],
        checklist: [
          { item: 'Tasting session signoff completed', done: true },
          { item: 'Zero-food waste donation tie-up locked', done: true },
          { item: 'Dry ice dessert station dry run', done: false }
        ],
        rating: 4.8
      },
      {
        id: 'v3',
        name: 'Virasat Wedding Decorators',
        category: 'Decor & Florist',
        contact: 'Simran Khurana',
        phone: '+91 98111 44556',
        email: 'virasatdecor@gmail.com',
        status: 'shortlisted',
        quote: 700000,
        deliverables: ['Floating mandap with 5000 fresh tuberose and roses', 'Entrance floral archways', 'Diya table centerpieces'],
        checklist: [
          { item: 'Mandap structural weight test on water', done: true },
          { item: 'Color palette fabric swatches approved', done: true },
          { item: 'Eco-friendly disposal agreement', done: false }
        ],
        rating: 4.7
      },
      {
        id: 'v4',
        name: 'Stories by Pixel Studios',
        category: 'Photography',
        contact: 'Aakash Verma',
        phone: '+91 99990 77881',
        email: 'hello@storiesbypixel.com',
        status: 'booked',
        quote: 350000,
        deliverables: ['Cinematic wedding teaser (3 mins)', 'Full documentary film', '2 Traditional Photographers + 2 Candid', 'Leather-bound photo albums'],
        checklist: [
          { item: 'Shot list handed over (family portraits & candid pheras)', done: true },
          { item: 'Drone clearance for heritage airspace', done: true },
          { item: 'Same-day edit preview ready for reception', done: false }
        ],
        rating: 5.0
      }
    ],
    ideas: [
      {
        id: 'i1',
        category: 'theme',
        title: 'Illuminated Diya Garden & Heritage Jharokhas',
        description: 'Line the stone pathways with 1000 brass oil lamps, brass urulis with floating marigolds and rose petals, creating an ethereal glow mirroring the lake waters.',
        highlight: 'Photogenic entrance corridor',
        tags: ['Heritage', 'Eco-Friendly', 'Palatial']
      },
      {
        id: 'i2',
        category: 'speech_games',
        title: 'Baraati Antakshari & Grand Groom vs Bride Trivia',
        description: 'High-energy musical battle hosted by the emcee between the Baraati and Ladkiwale sides with custom trivia questions on how the couple met in college.',
        highlight: 'Crowd-favorite icebreaker',
        tags: ['Interactive', 'Fun', 'Baraat']
      },
      {
        id: 'i3',
        category: 'menu',
        title: 'Mewari Royal Thali with Modern Molecular Twist',
        description: 'Traditional Dal Baati Churma served with edible silver leaf, paired with modern nitrogen-chilled rose-petal kulfi and saffron thandai cocktails.',
        highlight: 'Unforgettable culinary journey',
        tags: ['Gourmet', 'Dessert', 'Signature Drink']
      },
      {
        id: 'i4',
        category: 'music',
        title: 'Royal Baraat & Sangeet Vibe Playlist',
        description: 'Curated 4-hour tracklist: Acoustic Santoor instrumental entry → High-energy Dhol beats for Baraat → Bollywood chartbuster Sangeet dance medleys → Soulful Sufi midnight closure.',
        highlight: 'High Crowd Energy',
        tags: ['DJ Set', 'Folk Beats', 'Spotify Vibe']
      }
    ],
    tables: [
      { id: 't1', name: 'Royal Gazebo', capacity: 8, vip: true },
      { id: 't2', name: 'High Table VIP', capacity: 10, vip: true },
      { id: 't3', name: 'Groom Squad Lounge', capacity: 8, vip: false },
      { id: 't4', name: 'Bride Tribe Lounge', capacity: 8, vip: false },
      { id: 't5', name: 'Executive Terrace', capacity: 6, vip: false },
      { id: 't6', name: 'Lake Edge Dining', capacity: 8, vip: false }
    ],
    guests: [
      { id: 'g1', name: 'Rameshwar & Sunita Sharma', category: 'Family', status: 'confirmed', dietary: 'Veg', plusOnes: 1, tableId: 't1' },
      { id: 'g2', name: 'Vikram & Radhika Singhania', category: 'VIP', status: 'confirmed', dietary: 'Jain', plusOnes: 2, tableId: 't2' },
      { id: 'g3', name: 'Kabir Mehta', category: 'Friends', status: 'confirmed', dietary: 'Non-Veg', plusOnes: 0, tableId: 't3' },
      { id: 'g4', name: 'Dr. Neha Kulkarni', category: 'Friends', status: 'pending', dietary: 'Vegan', plusOnes: 1, tableId: 't4' },
      { id: 'g5', name: 'Sanjay Aggarwal', category: 'Colleagues', status: 'confirmed', dietary: 'Veg', plusOnes: 1, tableId: 't5' },
      { id: 'g6', name: 'Aman & Riya Malhotra', category: 'Friends', status: 'confirmed', dietary: 'Non-Veg', plusOnes: 1, tableId: 't3' },
      { id: 'g7', name: 'Justice Rajiv Oberoi', category: 'VIP', status: 'confirmed', dietary: 'Veg', plusOnes: 1, tableId: 't2' }
    ],
    copilotHistory: [
      {
        id: 'c1',
        sender: 'assistant',
        text: 'Namaste! I am your CelebrAIte Wedding Concierge. I have calibrated Arjun & Ananya’s royal celebration in Udaipur. Your decor budget has a slight 7.7% overage due to lake-edge floating florals. Would you like me to suggest 3 tasteful ways to rebalance costs without reducing aesthetics?',
        timestamp: '10:30 AM'
      }
    ]
  },
  {
    id: 'evt-birthday-02',
    title: 'Neon Cyberpunk 30th Milestone Birthday',
    type: 'birthday',
    date: '2026-11-20',
    daysRemaining: 19,
    location: 'Skyline Penthouse Loft & Rooftop, Indiranagar, Bangalore',
    guestCount: 65,
    totalBudget: 180000,
    currency: '₹',
    visionPrompt: 'An epic futuristic Cyberpunk-themed 30th birthday rave featuring holographic neon art, synthwave live DJ, bespoke molecular smoking cocktails, retro arcade games, and neon UV face painting.',
    theme: {
      name: 'Neo-Tokyo 2099 Synthwave',
      colors: ['#06b6d4', '#ec4899', '#8b5cf6', '#10b981', '#09090b'],
      aesthetic: 'Glitch graphics, infinity mirror LED bars, purple and cyan laser grids, smoking liquid nitrogen stations.',
      dressCode: 'Futuristic Cyberpunk / Neon Glam / All Black with Neon Accents',
      monogram: 'LVL 30'
    },
    budgetCategories: [
      { id: 'bb1', category: 'Rooftop Penthouse Venue', allocated: 60000, spent: 55000, notes: 'Panoramic glass terrace with soundproof indoor lounge', status: 'on_track', color: '#ec4899' },
      { id: 'bb2', category: 'Liquid Nitrogen Cocktails & Gourmet Sliders', allocated: 55000, spent: 52000, notes: 'Craft mixologist + Asian bao & slider stations', status: 'on_track', color: '#06b6d4' },
      { id: 'bb3', category: 'UV Neon Decor & Laser Grids', allocated: 30000, spent: 34000, notes: 'Custom neon sign “Level 30 Unlocked”', status: 'warning', color: '#8b5cf6' },
      { id: 'bb4', category: 'Synthwave / Tech-House DJ & Sound Gear', allocated: 20000, spent: 20000, notes: 'Pioneer CDJ setup + bass subwoofers', status: 'on_track', color: '#10b981' },
      { id: 'bb5', category: 'Cyberpunk Photobooth & 360 Spin Cam', allocated: 15000, spent: 15000, notes: 'With laser tunnel background and prop blasters', status: 'on_track', color: '#f59e0b' }
    ],
    timeline: [
      {
        id: 'tbp1',
        phaseName: 'Phase 1: Pre-Party Prep (2-3 Weeks Out)',
        items: [
          { id: 'tb1-1', title: 'Commission Custom “Level 30 Unlocked” Neon Sign', timeOrOffset: '2 Weeks Before', completed: true, notes: 'Double tube pink-cyan LED sign ordered' },
          { id: 'tb1-2', title: 'Book Mixologist for Signature “Cyber-Punch” Drinks', timeOrOffset: '10 Days Before', completed: true, notes: '3 mocktails + 3 molecular smoking cocktails designed' },
          { id: 'tb1-3', title: 'Send Discord & Interactive Web Invitation', timeOrOffset: '1 Week Before', completed: true, notes: 'Live RSVP tracker active' }
        ]
      },
      {
        id: 'tbp2',
        phaseName: 'Phase 2: Party Night (Run-of-Show)',
        items: [
          { id: 'tb2-1', title: 'Vendor Load-in & UV Blacklight Check', timeOrOffset: '06:00 PM', completed: false, notes: 'Sound check with DJ and haze machine test' },
          { id: 'tb2-2', title: 'Doors Open, Neon Face-Paint & Welcome Glow Drinks', timeOrOffset: '08:00 PM', completed: false, notes: 'Guests receive glow wristbands and glasses' },
          { id: 'tb2-3', title: 'Retro Arcade Tournament (Street Fighter II & Mario Kart)', timeOrOffset: '09:15 PM', completed: false, notes: 'Mini championship for custom cyber trophy' },
          { id: 'tb2-4', title: 'Birthday Cake Cutting with Cold Pyro & Synth Drop', timeOrOffset: '10:30 PM', completed: false, notes: 'Tiered dark chocolate neon drip cake' },
          { id: 'tb2-5', title: 'Peak DJ Set & Rooftop Dance Party', timeOrOffset: '10:45 PM', completed: false, notes: 'Techno and Synthwave countdown' }
        ]
      }
    ],
    vendors: [
      {
        id: 'vb1',
        name: 'CyberGlow Visuals & Decors',
        category: 'Decor & Florist',
        contact: 'Rahul Nair',
        phone: '+91 97422 99881',
        email: 'glow@cyberglow.design',
        status: 'booked',
        quote: 34000,
        deliverables: ['LED infinity tunnel', 'UV reactive wall banners', 'Custom 30th neon wall', 'Laser bar backdrop'],
        checklist: [
          { item: 'Wall mounts confirmed with penthouse owner', done: true },
          { item: 'Spare neon power adapters packed', done: true }
        ],
        rating: 4.8
      },
      {
        id: 'vb2',
        name: 'Molecular Alchemy Bar & Bites',
        category: 'Catering',
        contact: 'Chef Sameer Sen',
        phone: '+91 99011 23344',
        email: 'alchemybar@cocktails.in',
        status: 'booked',
        quote: 52000,
        deliverables: ['Dry ice smoking drinks', 'Bao buns & truffle fries bar', 'Custom shot rack'],
        checklist: [
          { item: 'Liquid nitrogen safety cert locked', done: true },
          { item: 'Glassware glow coasters ready', done: true }
        ],
        rating: 4.9
      }
    ],
    ideas: [
      {
        id: 'ib1',
        category: 'theme',
        title: 'Glow-in-the-Dark Body Art Station',
        description: 'Hire an artist with non-toxic UV reactive paint to create cybernetic circuit line art, tribal neon designs, and cyber tattoos on guests as they arrive.',
        highlight: 'Massive social media attraction',
        tags: ['Glow Art', 'Instagrammable', 'Interactive']
      },
      {
        id: 'ib2',
        category: 'speech_games',
        title: '“Decode the Past Decade” Trivia Battle',
        description: 'A rapid-fire Kahoot quiz on the birthday person’s funniest photos, embarrassing college quotes, and iconic moments from ages 20 to 29.',
        highlight: 'Hilarious crowd bonding',
        tags: ['Trivia', 'Kahoot', 'Games']
      }
    ],
    tables: [
      { id: 'tb_lounge1', name: 'Cyber Lounge Alpha', capacity: 10, vip: true },
      { id: 'tb_lounge2', name: 'Arcade Arena Pod', capacity: 8, vip: false },
      { id: 'tb_lounge3', name: 'Rooftop Laser Deck', capacity: 12, vip: false }
    ],
    guests: [
      { id: 'gb1', name: 'Tanya Sengupta', category: 'Friends', status: 'confirmed', dietary: 'Veg', plusOnes: 1, tableId: 'tb_lounge1' },
      { id: 'gb2', name: 'Karthik Raman', category: 'Friends', status: 'confirmed', dietary: 'Non-Veg', plusOnes: 0, tableId: 'tb_lounge2' },
      { id: 'gb3', name: 'Zoya Khan', category: 'VIP', status: 'confirmed', dietary: 'Vegan', plusOnes: 1, tableId: 'tb_lounge1' }
    ],
    copilotHistory: [
      {
        id: 'cb1',
        sender: 'assistant',
        text: 'Hey! I’m your Party Architect. Your cyberpunk 30th is set to blow everyone away. Need any custom cocktail naming ideas or playlist track picks?',
        timestamp: '11:15 AM'
      }
    ]
  },
  {
    id: 'evt-community-03',
    title: 'Silicon Valley Tech Innovation Hackathon & Fest',
    type: 'community',
    date: '2026-12-12',
    daysRemaining: 41,
    location: 'Bangalore International Exhibition Centre (BIEC) Hall 4',
    guestCount: 500,
    totalBudget: 950000,
    currency: '₹',
    visionPrompt: 'A premier 36-hour non-stop AI builders hackathon and community open-source festival featuring demo day presentations, keynote tech talks, sponsor expo booths, live coding music, and 24/7 high-energy catering.',
    theme: {
      name: 'Code the Future: AI & Human Synergies',
      colors: ['#3b82f6', '#10b981', '#6366f1', '#f8fafc', '#0f172a'],
      aesthetic: 'Minimalist tech industrial, glowing hex-pattern stage, high-speed fiber charging pods, live stream studio.',
      dressCode: 'Developer Casual / Hackathon Hoodies & Tech Merch',
      monogram: 'AI FEST'
    },
    budgetCategories: [
      { id: 'cb1', category: 'Exhibition Hall & 10Gbps Internet Lease', allocated: 380000, spent: 380000, notes: 'Dual redundant fiber optic lines + AC hall', status: 'on_track', color: '#3b82f6' },
      { id: 'cb2', category: '24/7 Food, Energy Drinks & Midnight Pizza', allocated: 260000, spent: 245000, notes: 'Continuous coffee, 4 meals for 500 hackers', status: 'on_track', color: '#10b981' },
      { id: 'cb3', category: 'Cash Prizes, Hardware Swag & Trophies', allocated: 150000, spent: 150000, notes: 'Grand prize 1L + hardware kits for winners', status: 'on_track', color: '#f59e0b' },
      { id: 'cb4', category: 'Stage AV, LED Walls & Livestream Gear', allocated: 100000, spent: 95000, notes: 'Giant 30ft LED screen + multicam YouTube broadcast', status: 'on_track', color: '#ec4899' },
      { id: 'cb5', category: 'Medical EMT, Security & Volunteer Logistics', allocated: 60000, spent: 48000, notes: '24hr paramedic van on standby + volunteer kits', status: 'on_track', color: '#8b5cf6' }
    ],
    timeline: [
      {
        id: 'tcp1',
        phaseName: 'Phase 1: Event Kickoff & Check-in',
        items: [
          { id: 'tc1-1', title: 'Hacker Registration & Swag Bag Distribution', timeOrOffset: '08:00 AM', completed: false, notes: 'Issue NFC badges & hackathon hoodies' },
          { id: 'tc1-2', title: 'Opening Keynote & Challenge Reveal', timeOrOffset: '10:00 AM', completed: false, notes: 'Rules announcement and mentor intro' },
          { id: 'tc1-3', title: 'Hacking Begins & API Workshop Tracks', timeOrOffset: '11:00 AM', completed: false, notes: 'Google Gemini & AI agent building breakout session' }
        ]
      },
      {
        id: 'tcp2',
        phaseName: 'Phase 2: Midnight Hacking & Demos',
        items: [
          { id: 'tc2-1', title: 'Midnight Pizza & Red Bull Dash', timeOrOffset: '12:00 AM', completed: false, notes: 'Flash trivia game for quick hardware prizes' },
          { id: 'tc2-2', title: 'Code Freeze & Project Submission Portal Closes', timeOrOffset: '09:00 AM (Day 2)', completed: false, notes: 'Devpost repository verify' },
          { id: 'tc2-3', title: 'Top 10 Finalist Pitch Demos to VC Jury', timeOrOffset: '02:00 PM (Day 2)', completed: false, notes: '3 mins pitch + 2 mins Q&A' },
          { id: 'tc2-4', title: 'Grand Awards Ceremony & After-Party Mixer', timeOrOffset: '05:00 PM (Day 2)', completed: false, notes: 'Trophy handouts and networking drinks' }
        ]
      }
    ],
    vendors: [
      {
        id: 'vc1',
        name: 'SpeedNet Gigabyte Infrastructure',
        category: 'Logistics & Security',
        contact: 'Pradeep Shenoy',
        phone: '+91 98450 11223',
        email: 'support@speednetinfra.in',
        status: 'booked',
        quote: 120000,
        deliverables: ['10 Gbps dedicated leased line', 'Wi-Fi 6 mesh routers for 1200 simultaneous devices', 'UPS backup'],
        checklist: [
          { item: 'Bandwidth stress test completed', done: true },
          { item: 'Secondary 4G failover active', done: true }
        ],
        rating: 4.9
      },
      {
        id: 'vc2',
        name: 'Campus Kitchen Caterers',
        category: 'Catering',
        contact: 'Anand Kumar',
        phone: '+91 99800 66778',
        email: 'info@campuskitchen.in',
        status: 'booked',
        quote: 245000,
        deliverables: ['4 Meals for 500 attendees', 'All-night cold-brew and filter coffee dispenser', 'Healthy fruit bowls'],
        checklist: [
          { item: 'Jain and Halal dietary separation certified', done: true },
          { item: 'Eco-friendly biodegradable plates', done: true }
        ],
        rating: 4.6
      }
    ],
    ideas: [
      {
        id: 'ic1',
        category: 'speech_games',
        title: '“Worst Bug That Ever Shipped” Lightning Talks',
        description: 'An informal 15-minute mic session where senior mentors and CTOs share their most catastrophic production bugs and lessons learned.',
        highlight: 'High audience laughter & empathy',
        tags: ['Mentorship', 'Humor', 'Lightning Talk']
      }
    ],
    tables: [
      { id: 'th1', name: 'Jury & VC Desk', capacity: 8, vip: true },
      { id: 'th2', name: 'Speaker Lounge', capacity: 10, vip: true },
      { id: 'th3', name: 'Hacker Pod 1-10', capacity: 16, vip: false }
    ],
    guests: [
      { id: 'gc1', name: 'Tanmay Bhat (Keynote Speaker)', category: 'VIP', status: 'confirmed', dietary: 'Non-Veg', plusOnes: 1, tableId: 'th2' },
      { id: 'gc2', name: 'Team NeuralHack (4 members)', category: 'Community', status: 'confirmed', dietary: 'Veg', plusOnes: 0, tableId: 'th3' },
      { id: 'gc3', name: 'Pooja Hegde (Judge & VC)', category: 'VIP', status: 'confirmed', dietary: 'Vegan', plusOnes: 1, tableId: 'th1' }
    ],
    copilotHistory: [
      {
        id: 'cc1',
        sender: 'assistant',
        text: 'Greetings Organizer! Your tech hackathon event plan is running tightly on schedule. 500 developers are projected. Would you like me to generate a 24-hour run-of-show checklist or volunteer coordinator briefing guide?',
        timestamp: '09:00 AM'
      }
    ]
  }
];

// App State
let state = {
  events: loadEvents(),
  activeEventId: 'evt-wedding-01',
  activeTab: 'overview',
  isNewEventModalOpen: false,
  isCopilotOpen: false,
  isDossierOpen: false,
  isLiveRunMode: false,
  copilotInput: '',
  isCopilotTyping: false,
  guestSearch: '',
  guestStatusFilter: 'all',
  vendorCategoryFilter: 'all',
  timelinePhaseFilter: 'all',
  selectedTableId: null
};

function loadEvents() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return INITIAL_EVENTS;
}

function saveEvents() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.events));
  } catch (e) {}
}

function getActiveEvent() {
  return state.events.find(e => e.id === state.activeEventId) || state.events[0];
}

function triggerCelebration() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 140,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ec4899', '#8b5cf6', '#f59e0b', '#10b981', '#3b82f6', '#f43f5e']
    });
  }
}

// GenAI Generator
function generateEventPlanWithAI(prompt, eventType, customTitle) {
  const p = prompt.toLowerCase();
  const id = `evt-${Date.now()}`;
  
  let budget = 250000;
  if (p.includes('lakh') || p.includes('lac')) {
    const match = p.match(/(\d+)\s*(lakh|lac)/);
    if (match) budget = parseInt(match[1]) * 100000;
  } else if (p.includes('k') || p.includes('thousand')) {
    const match = p.match(/(\d+)\s*(k|thousand)/);
    if (match) budget = parseInt(match[1]) * 1000;
  } else if (eventType === 'wedding') {
    budget = 2000000;
  } else if (eventType === 'birthday') {
    budget = 85000;
  } else {
    budget = 450000;
  }

  let guests = 100;
  const guestMatch = p.match(/(\d+)\s*(guest|people|attendee|person|friend)/);
  if (guestMatch) {
    guests = parseInt(guestMatch[1]);
  } else if (eventType === 'wedding') {
    guests = 240;
  } else if (eventType === 'birthday') {
    guests = 50;
  } else {
    guests = 350;
  }

  const title = customTitle || (
    eventType === 'wedding' ? 'Eternal Romance: Grand Celebration' :
    eventType === 'birthday' ? 'Vibrant Milestone Celebration' :
    eventType === 'community' ? 'Community Cultural Carnival' :
    'Grand Gala Celebration'
  );

  return {
    id,
    title,
    type: eventType,
    date: '2027-01-20',
    daysRemaining: 68,
    location: 'Metropolitan Hall & Grand Lawns',
    guestCount: guests,
    totalBudget: budget,
    currency: '₹',
    visionPrompt: prompt,
    theme: {
      name: 'Contemporary Festive Harmony',
      colors: ['#ec4899', '#8b5cf6', '#f59e0b', '#10b981', '#1e293b'],
      aesthetic: 'Lush floral arches, warm fairy light canopies, and celebratory accents.',
      dressCode: 'Festive Chic / Cocktail Glam',
      monogram: title.slice(0, 3).toUpperCase()
    },
    budgetCategories: [
      { id: 'bg1', category: 'Venue & Grounds (2 Days)', allocated: Math.round(budget * 0.38), spent: Math.round(budget * 0.35), notes: 'Main hall, lawn, lighting, generator power', status: 'on_track', color: '#ec4899' },
      { id: 'bg2', category: 'Catering & Dining Feast', allocated: Math.round(budget * 0.28), spent: Math.round(budget * 0.27), notes: `Grand buffet for ${guests} attendees with live counters`, status: 'on_track', color: '#f59e0b' },
      { id: 'bg3', category: 'Thematic Decor & Lighting', allocated: Math.round(budget * 0.16), spent: Math.round(budget * 0.17), notes: 'Entrance gateway, stage backdrop, photo spots', status: 'warning', color: '#8b5cf6' },
      { id: 'bg4', category: 'Media (Photo & 4K Film)', allocated: Math.round(budget * 0.08), spent: Math.round(budget * 0.08), notes: 'Candid photographer + drone teaser film', status: 'on_track', color: '#3b82f6' },
      { id: 'bg5', category: 'Entertainment & DJ Sound', allocated: Math.round(budget * 0.06), spent: Math.round(budget * 0.05), notes: 'DJ sound system, emcee, interactive party games', status: 'on_track', color: '#10b981' },
      { id: 'bg6', category: 'Hospitality Buffer & Favors', allocated: Math.round(budget * 0.04), spent: Math.round(budget * 0.02), notes: 'Welcome gifts, return favors, contingency', status: 'on_track', color: '#06b6d4' }
    ],
    timeline: [
      {
        id: 'tp-1',
        phaseName: 'Phase 1: Planning Milestones',
        items: [
          { id: 'ti-1', title: 'Lock Venue & Booking Advance', timeOrOffset: '2 Months Before', completed: true, notes: 'Contract signed with venue manager' },
          { id: 'ti-2', title: `Menu Tasting for ${guests} Guests`, timeOrOffset: '1 Month Before', completed: false, notes: 'Finalize Veg and Non-Veg menu options' },
          { id: 'ti-3', title: 'Send WhatsApp & Digital Invitations', timeOrOffset: '3 Weeks Before', completed: false, notes: 'Track RSVPs via digital portal' }
        ]
      },
      {
        id: 'tp-2',
        phaseName: 'Phase 2: Event Day (Run-of-Show)',
        items: [
          { id: 'ti-4', title: 'Vendor Load-in & Audio Check', timeOrOffset: '09:00 AM', completed: false, notes: 'Microphone & sound level test' },
          { id: 'ti-5', title: 'Guest Arrival & Welcome Drinks Service', timeOrOffset: '11:30 AM', completed: false, notes: 'Host welcome drinks and badges' },
          { id: 'ti-6', title: 'Main Ceremony & Grand Showcase', timeOrOffset: '01:00 PM', completed: false, notes: 'Stage presentations and toasts' },
          { id: 'ti-7', title: 'Grand Dining Banquet Opens', timeOrOffset: '02:00 PM', completed: false, notes: 'All live food stations operational' },
          { id: 'ti-8', title: 'Open Dance Floor & Celebration Party', timeOrOffset: '04:30 PM', completed: false, notes: 'DJ music set and photo sessions' }
        ]
      }
    ],
    vendors: [
      {
        id: 'v-1',
        name: 'Grand Horizon Spaces',
        category: 'Venue',
        contact: 'Ananya Deshmukh',
        phone: '+91 98200 44321',
        email: 'events@horizonspaces.com',
        status: 'booked',
        quote: Math.round(budget * 0.36),
        deliverables: ['Full lawn & indoor hall access', 'Valet parking', 'Generator backup'],
        checklist: [
          { item: 'Advance payment receipt received', done: true },
          { item: 'Clean-up agreement signed', done: false }
        ],
        rating: 4.8
      },
      {
        id: 'v-2',
        name: 'Epicurean Feast Catering Co.',
        category: 'Catering',
        contact: 'Chef Rahul',
        phone: '+91 98199 12340',
        email: 'chef@epicureanfeast.in',
        status: 'shortlisted',
        quote: Math.round(budget * 0.27),
        deliverables: [`Multi-course buffet for ${guests} pax`, 'Live mocktail bar', 'Dessert counter'],
        checklist: [
          { item: 'Tasting session completed', done: true },
          { item: 'Dietary counters confirmed', done: false }
        ],
        rating: 4.9
      }
    ],
    ideas: [
      {
        id: 'id-1',
        category: 'theme',
        title: 'Warm Golden Glow Ambience',
        description: `Bespoke aesthetic for "${prompt}": Blend fairy light canopies, brass lanterns, and organic florals to build an unforgettable festive mood.`,
        highlight: 'Photogenic entrance & lawn',
        tags: ['Aesthetic', 'Lighting', 'Theme']
      },
      {
        id: 'id-2',
        category: 'music',
        title: 'High-Energy Celebration Tracklist',
        description: 'Vibe-matched curated soundtrack: Soulful acoustic welcome → Trending upbeat celebration hits → Grand toast crescendo.',
        highlight: 'Curated Audio Architecture',
        tags: ['Audio', 'Vibe', 'Live DJ']
      }
    ],
    tables: [
      { id: 'tb1', name: 'VIP Grand Table', capacity: 10, vip: true },
      { id: 'tb2', name: 'Family Terrace Pod', capacity: 8, vip: true },
      { id: 'tb3', name: 'Garden Lawn 1', capacity: 8, vip: false }
    ],
    guests: [
      { id: 'g-1', name: 'VIP Dignitary / Family Head', category: 'VIP', status: 'confirmed', dietary: 'Veg', plusOnes: 1, tableId: 'tb1' },
      { id: 'g-2', name: 'Organizing Core Team', category: 'Family', status: 'confirmed', dietary: 'Non-Veg', plusOnes: 2, tableId: 'tb2' },
      { id: 'g-3', name: 'Close Friends & Colleagues', category: 'Friends', status: 'pending', dietary: 'Vegan', plusOnes: 0, tableId: 'tb3' }
    ],
    copilotHistory: [
      {
        id: 'c-init',
        sender: 'assistant',
        text: `✨ I have synthesized your vision into a comprehensive event plan: "${title}". I have configured your ₹${budget.toLocaleString()} budget, ${guests} guests, vendor checklists, and day-of timeline. How would you like to refine it?`,
        timestamp: 'Just now'
      }
    ]
  };
}

function getCopilotReply(query, evt) {
  const q = query.toLowerCase();
  const totalSpent = evt.budgetCategories.reduce((s, b) => s + b.spent, 0);

  if (q.includes('budget') || q.includes('cost') || q.includes('save') || q.includes('cut')) {
    return `💰 **Budget Optimization Advisory for "${evt.title}"**:
- Total Budget: **${evt.currency}${evt.totalBudget.toLocaleString()}** | Committed: **${evt.currency}${totalSpent.toLocaleString()}**
- **Top 3 High-Impact Cost Cuts:**
  1. *Dessert Restructuring*: Replace 7 dessert stations with 2 live interactive signature liquid nitrogen dessert stations (saves ~25% with higher guest delight).
  2. *Lighting vs Cut Flowers*: Focus fresh florals exclusively on the main stage & photo focal point; use warm fairy lights & architectural uplighting for corridors (saves up to ₹65,000).
  3. *Consolidated Media Bundle*: Contract drone, candid stills, and reels through a single media collective rather than independent freelancers.`;
  }

  if (q.includes('timeline') || q.includes('schedule') || q.includes('time') || q.includes('run of show')) {
    return `⏱️ **Run-of-Show Protocol Advisory**:
- With **${evt.daysRemaining} days remaining** until ${evt.date}:
  1. Ensure 48-hr prior load-in permission for sound & rigging with the venue manager.
  2. Appoint an official "Stage & Timekeeper Lead" with a shared WhatsApp broadcast channel.
  3. Keep a 30-minute buffer window between ceremony completion and buffet opening to prevent bottlenecking.`;
  }

  if (q.includes('vendor') || q.includes('contract') || q.includes('negotiat')) {
    return `📋 **Vendor Contract Shield & Checklist**:
- You have **${evt.vendors.length} vendors** in your directory.
- **Top 3 Non-Negotiable Contract Terms:**
  - *Caterer*: Lock in a guaranteed +10% guest food buffer at pre-agreed per-plate rates.
  - *DJ & Audio*: Require proof of municipal/venue sound license up to 11:00 PM.
  - *Photographer*: Milestone release: 48-hour social media teaser reel + 3-week final 4K gallery.`;
  }

  if (q.includes('speech') || q.includes('games') || q.includes('toast') || q.includes('emcee')) {
    return `🎤 **Emcee Opening Toast & Host Script**:
*"Good evening distinguished guests, beloved family, and dear friends! Welcome to this magnificent evening of celebration for ${evt.title}! 

Tonight isn't just about marking a date on the calendar; it's about celebrating unforgettable memories, laughter, and the wonderful people gathered in this room. We have an extraordinary evening planned for you—spectacular food, soulful music, and moments that will live in our hearts forever.

Please sit back, raise a toast, and let the celebration begin!"*`;
  }

  return `🎉 **CelebrAIte Assistant Insights for "${evt.title}"**:
I am monitoring your event:
- **Budget**: ${evt.currency}${evt.totalBudget.toLocaleString()}
- **Headcount**: ${evt.guestCount} projected guests
- **Vendors**: ${evt.vendors.length} active partners
- **Timeline Tasks**: ${evt.timeline.reduce((s, p) => s + p.items.length, 0)} milestones

Ask me anything: *"Draft an invite message"*, *"How to cut 15% budget"*, or *"Suggest fun party games"*!`;
}

// Render Functions
function renderApp() {
  const root = document.getElementById('app');
  if (!root) return;

  const evt = getActiveEvent();
  const allTasks = evt.timeline.flatMap(p => p.items);

  root.innerHTML = `
    <!-- Top Header (No PromptWars Badge, Pure Luxury Pro UI) -->
    <header class="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20 gap-3">
          
          <!-- Brand Logo -->
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-2xl bg-gradient-to-tr from-pink-600 via-rose-500 to-amber-400 p-[2px] shadow-glow flex items-center justify-center cursor-pointer transform hover:scale-105 transition-transform" onclick="triggerCelebration()" title="Celebration Sparks!">
              <div class="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-pink-400 font-bold">
                ✨
              </div>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xl font-extrabold tracking-tight text-white font-serif-luxury">
                  Celebr<span class="text-pink-400 font-sans">AI</span>te
                </span>
                <span class="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-gradient-to-r from-pink-500/10 to-indigo-500/10 text-pink-300 border border-pink-500/30 flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Pro Studio
                </span>
              </div>
              <p class="text-xs text-slate-400 hidden sm:block">Intelligent Celebration & Event Operating System</p>
            </div>
          </div>

          <!-- Event Selector & Plan New Event Button -->
          <div class="flex items-center gap-2">
            <select id="eventSelector" class="bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-200 font-medium hover:border-pink-500/50 focus:outline-none max-w-[170px] sm:max-w-xs truncate cursor-pointer shadow-inner">
              ${state.events.map(e => `
                <option value="${e.id}" ${e.id === evt.id ? 'selected' : ''}>
                  ${e.type === 'wedding' ? '💍 ' : e.type === 'birthday' ? '🎂 ' : '🎪 '}
                  ${e.title}
                </option>
              `).join('')}
            </select>

            <button id="btnNewEvent" class="flex items-center gap-1.5 gradient-btn text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-xl shadow-glow transition-all transform hover:scale-[1.02] active:scale-95">
              <span>✨</span>
              <span class="hidden md:inline">Plan with GenAI</span>
              <span class="md:hidden">New</span>
            </button>
          </div>

          <!-- Action Buttons -->
          <div class="flex items-center gap-2">
            <button onclick="triggerCelebration()" title="Celebration Sparks" class="p-2 rounded-xl text-amber-400 hover:bg-slate-900 border border-slate-800 transition-colors hidden sm:flex text-sm">
              🎉
            </button>
            <button id="btnOpenDossier" title="Printable Dossier" class="p-2 rounded-xl text-slate-300 hover:text-pink-400 hover:bg-slate-900 border border-slate-800 transition-colors hidden sm:flex items-center gap-1 text-xs font-semibold">
              <span>📄 Dossier</span>
            </button>
            <button id="btnExportJson" title="Backup JSON" class="p-2 rounded-xl text-slate-400 hover:text-indigo-400 hover:bg-slate-900 border border-slate-800 transition-colors hidden xl:flex text-xs">
              JSON
            </button>

            <!-- Copilot Toggle -->
            <button id="btnToggleCopilot" class="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
              state.isCopilotOpen
                ? 'bg-pink-500/20 text-pink-300 border-pink-500/50 shadow-glow'
                : 'bg-slate-900 text-slate-300 border-slate-700/80 hover:border-pink-500/40 hover:text-white'
            }">
              <span>🤖</span>
              <span class="hidden sm:inline">AI Copilot</span>
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </button>
          </div>

        </div>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 pb-20">
      
      <!-- 7 Enhanced Tabs Navigation Bar -->
      <div class="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-slate-800/80">
        ${[
          { id: 'overview', label: 'Overview', icon: '📊' },
          { id: 'budget', label: 'Budget & Analytics', icon: '💰', badge: evt.budgetCategories.length },
          { id: 'timeline', label: 'Timeline & Run-of-Show', icon: '⏱️', badge: allTasks.length },
          { id: 'vendors', label: 'Vendors Hub', icon: '👥', badge: evt.vendors.length },
          { id: 'ideas', label: 'Personalized Ideas', icon: '💡', badge: evt.ideas.length },
          { id: 'invitation', label: 'Digital Invite & QR', icon: '💌' },
          { id: 'guests', label: 'RSVP & Seating Layout', icon: '🎟️', badge: evt.guests.length }
        ].map(tab => `
          <button data-tab="${tab.id}" class="tab-btn flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all shrink-0 border ${
            state.activeTab === tab.id
              ? 'bg-gradient-to-r from-pink-600/20 to-indigo-600/20 text-white border-pink-500/50 shadow-glow'
              : 'bg-slate-900/40 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-900/80'
          }">
            <span>${tab.icon}</span>
            <span>${tab.label}</span>
            ${tab.badge !== undefined ? `
              <span class="text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                state.activeTab === tab.id ? 'bg-pink-500 text-white' : 'bg-slate-800 text-slate-400'
              }">${tab.badge}</span>
            ` : ''}
          </button>
        `).join('')}
      </div>

      <!-- Tab Content Area -->
      <div id="tabContentContainer">
        ${renderTabContent(evt)}
      </div>

    </main>

    <!-- Floating Copilot Button -->
    <div class="fixed bottom-6 right-6 z-30">
      <button id="btnFloatingCopilot" class="flex items-center gap-2.5 px-4 py-3 rounded-full gradient-btn font-bold text-xs sm:text-sm shadow-glow transition-all transform hover:scale-105 active:scale-95">
        <span class="text-base">🤖</span>
        <span>Ask Event Copilot</span>
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
      </button>
    </div>

    <!-- Modals & Drawers -->
    ${renderNewEventModal()}
    ${renderCopilotDrawer(evt)}
    ${renderDossierModal(evt)}
  `;

  attachEventListeners();
}

function renderTabContent(evt) {
  switch (state.activeTab) {
    case 'overview':
      return renderOverviewTab(evt);
    case 'budget':
      return renderBudgetTab(evt);
    case 'timeline':
      return renderTimelineTab(evt);
    case 'vendors':
      return renderVendorsTab(evt);
    case 'ideas':
      return renderIdeasTab(evt);
    case 'invitation':
      return renderInvitationTab(evt);
    case 'guests':
      return renderGuestsTab(evt);
    default:
      return renderOverviewTab(evt);
  }
}

// 1. Overview Tab
function renderOverviewTab(evt) {
  const totalSpent = evt.budgetCategories.reduce((s, b) => s + b.spent, 0);
  const budgetUtil = Math.round((totalSpent / evt.totalBudget) * 100);
  const allTasks = evt.timeline.flatMap(p => p.items);
  const completedTasks = allTasks.filter(t => t.completed).length;
  const taskProgress = allTasks.length > 0 ? Math.round((completedTasks / allTasks.length) * 100) : 0;
  const bookedVendors = evt.vendors.filter(v => v.status === 'booked' || v.status === 'paid').length;
  const confirmedGuests = evt.guests.filter(g => g.status === 'confirmed').reduce((acc, g) => acc + 1 + g.plusOnes, 0);

  // Overall Event Readiness Score
  const readinessScore = Math.round(
    (taskProgress * 0.4) + 
    (Math.min((bookedVendors / Math.max(evt.vendors.length, 1)), 1) * 30) + 
    (Math.min((confirmedGuests / Math.max(evt.guestCount, 1)), 1) * 30)
  );

  return `
    <div class="space-y-6">
      
      <!-- Hero Banner -->
      <div class="relative overflow-hidden rounded-3xl border border-slate-700/80 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 p-6 sm:p-8 shadow-2xl">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-3 max-w-2xl">
            <div class="flex flex-wrap items-center gap-2">
              <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-pink-500/10 text-pink-400 border border-pink-500/20">
                ✨ ${evt.type.toUpperCase()}
              </span>
              <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                ⏱️ ${evt.daysRemaining > 0 ? `${evt.daysRemaining} Days to Go` : 'Event Day!'}
              </span>
              <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                ⭐ Readiness Score: ${readinessScore}%
              </span>
            </div>

            <h1 class="text-2xl sm:text-4xl font-extrabold text-white font-serif-luxury">
              ${evt.title}
            </h1>

            <p class="text-sm text-slate-300 italic leading-relaxed line-clamp-2">
              “${evt.visionPrompt}”
            </p>

            <div class="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 pt-1">
              <div>📅 ${evt.date}</div>
              <div>📍 ${evt.location}</div>
              <div>👥 ${evt.guestCount} Target Guests</div>
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
            <button onclick="triggerCelebration()" class="px-5 py-3 rounded-2xl gradient-btn text-xs sm:text-sm font-bold shadow-glow flex items-center justify-center gap-2">
              <span>🎉 Celebrate Milestone!</span>
            </button>
            <button onclick="openCopilotWith('How is our overall event readiness looking?')" class="px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs sm:text-sm font-semibold border border-slate-700 flex items-center justify-center gap-2">
              <span>Ask Event AI Advisor →</span>
            </button>
          </div>
        </div>
      </div>

      <!-- 4 Stat Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div class="glass-card p-5 rounded-2xl cursor-pointer" onclick="switchTab('budget')">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Budget</span>
            <span class="text-pink-400 text-lg">💰</span>
          </div>
          <div class="mt-3">
            <div class="text-xl sm:text-2xl font-black text-white">
              ${evt.currency}${evt.totalBudget.toLocaleString()}
            </div>
            <div class="text-xs text-slate-400 mt-1 flex items-center justify-between">
              <span>Spent: ${evt.currency}${totalSpent.toLocaleString()}</span>
              <span class="font-semibold ${budgetUtil > 100 ? 'text-rose-400' : 'text-emerald-400'}">${budgetUtil}%</span>
            </div>
          </div>
          <div class="w-full bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
            <div class="h-full rounded-full ${budgetUtil > 100 ? 'bg-rose-500' : 'bg-gradient-to-r from-pink-500 to-indigo-500'}" style="width: ${Math.min(budgetUtil, 100)}%"></div>
          </div>
        </div>

        <div class="glass-card p-5 rounded-2xl cursor-pointer" onclick="switchTab('timeline')">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Timeline Tasks</span>
            <span class="text-indigo-400 text-lg">⏱️</span>
          </div>
          <div class="mt-3">
            <div class="text-xl sm:text-2xl font-black text-white">
              ${completedTasks} / ${allTasks.length} Done
            </div>
            <div class="text-xs text-slate-400 mt-1 flex items-center justify-between">
              <span>${allTasks.length - completedTasks} remaining</span>
              <span class="font-semibold text-indigo-400">${taskProgress}%</span>
            </div>
          </div>
          <div class="w-full bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
            <div class="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" style="width: ${taskProgress}%"></div>
          </div>
        </div>

        <div class="glass-card p-5 rounded-2xl cursor-pointer" onclick="switchTab('vendors')">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Vendor Partners</span>
            <span class="text-amber-400 text-lg">👥</span>
          </div>
          <div class="mt-3">
            <div class="text-xl sm:text-2xl font-black text-white">
              ${bookedVendors} / ${evt.vendors.length} Booked
            </div>
            <div class="text-xs text-slate-400 mt-1 flex items-center justify-between">
              <span>${evt.vendors.filter(v => v.status !== 'booked').length} discussing</span>
              <span class="font-semibold text-amber-400">${Math.round((bookedVendors / Math.max(evt.vendors.length, 1)) * 100)}%</span>
            </div>
          </div>
          <div class="w-full bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
            <div class="h-full rounded-full bg-gradient-to-r from-amber-500 to-rose-500" style="width: ${Math.round((bookedVendors / Math.max(evt.vendors.length, 1)) * 100)}%"></div>
          </div>
        </div>

        <div class="glass-card p-5 rounded-2xl cursor-pointer" onclick="switchTab('guests')">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">RSVP Attendance</span>
            <span class="text-emerald-400 text-lg">🎟️</span>
          </div>
          <div class="mt-3">
            <div class="text-xl sm:text-2xl font-black text-white">
              ${confirmedGuests} Confirmed
            </div>
            <div class="text-xs text-slate-400 mt-1 flex items-center justify-between">
              <span>Goal: ${evt.guestCount} guests</span>
              <span class="font-semibold text-emerald-400">${Math.round((confirmedGuests / evt.guestCount) * 100)}%</span>
            </div>
          </div>
          <div class="w-full bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
            <div class="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500" style="width: ${Math.min(Math.round((confirmedGuests / evt.guestCount) * 100), 100)}%"></div>
          </div>
        </div>

      </div>

      <!-- Aesthetic & Theme Concept Banner -->
      <div class="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
          <div>
            <h3 class="text-base font-bold text-white">
              Aesthetic Concept: <span class="text-pink-400">${evt.theme.name}</span>
            </h3>
            <p class="text-xs text-slate-400 mt-0.5">${evt.theme.aesthetic}</p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-medium text-slate-400">Palette:</span>
            <div class="flex items-center gap-1.5">
              ${evt.theme.colors.map(c => `
                <div class="w-7 h-7 rounded-full border-2 border-slate-800 shadow-md" style="background-color: ${c}"></div>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-300">
          <div>
            <span class="font-semibold text-slate-200">Dress Code / Styling: </span>
            <span class="text-pink-300 font-medium">${evt.theme.dressCode}</span>
          </div>
          <button onclick="switchTab('invitation')" class="text-pink-400 hover:text-pink-300 font-semibold flex items-center gap-1">
            <span>View Digital Invitation & QR Code →</span>
          </button>
        </div>
      </div>

    </div>
  `;
}

// 2. Budget Tab with Interactive SVG Donut Chart & Analytics
function renderBudgetTab(evt) {
  const totalAllocated = evt.budgetCategories.reduce((a, b) => a + b.allocated, 0);
  const totalSpent = evt.budgetCategories.reduce((a, b) => a + b.spent, 0);
  const remaining = evt.totalBudget - totalSpent;
  const isOver = remaining < 0;
  const costPerGuest = Math.round(totalSpent / Math.max(evt.guestCount, 1));

  // Build SVG Donut Chart
  let cumulativePercent = 0;
  const slices = evt.budgetCategories.map((cat, idx) => {
    const fraction = cat.spent / Math.max(totalSpent, 1);
    const startAngle = cumulativePercent * 360;
    cumulativePercent += fraction;
    const endAngle = cumulativePercent * 360;

    const x1 = 100 + 70 * Math.cos((Math.PI * (startAngle - 90)) / 180);
    const y1 = 100 + 70 * Math.sin((Math.PI * (startAngle - 90)) / 180);
    const x2 = 100 + 70 * Math.cos((Math.PI * (endAngle - 90)) / 180);
    const y2 = 100 + 70 * Math.sin((Math.PI * (endAngle - 90)) / 180);
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    const color = cat.color || ['#ec4899', '#f59e0b', '#8b5cf6', '#3b82f6', '#10b981', '#f43f5e'][idx % 6];

    return {
      path: `M 100 100 L ${x1} ${y1} A 70 70 0 ${largeArc} 1 ${x2} ${y2} Z`,
      color,
      category: cat.category,
      amount: cat.spent,
      pct: Math.round(fraction * 100)
    };
  });

  return `
    <div class="space-y-6">
      
      <!-- Top Financial Metrics -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="glass-panel p-5 rounded-3xl border border-slate-800 space-y-1">
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Event Budget</span>
          <div class="text-2xl font-black text-white">
            ${evt.currency}${evt.totalBudget.toLocaleString()}
          </div>
          <div class="text-xs text-slate-400">
            Target allocated: ${evt.currency}${totalAllocated.toLocaleString()}
          </div>
        </div>

        <div class="glass-panel p-5 rounded-3xl border border-slate-800 space-y-1">
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Actual Committed</span>
          <div class="text-2xl font-black text-pink-400">
            ${evt.currency}${totalSpent.toLocaleString()}
          </div>
          <div class="text-xs text-slate-400">
            ${Math.round((totalSpent / evt.totalBudget) * 100)}% of total fund utilized
          </div>
        </div>

        <div class="glass-panel p-5 rounded-3xl border space-y-1 ${isOver ? 'border-rose-500/40 bg-rose-500/5' : 'border-slate-800'}">
          <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">
            ${isOver ? 'Budget Overrun Deficit' : 'Remaining Buffer'}
          </span>
          <div class="text-2xl font-black ${isOver ? 'text-rose-400' : 'text-emerald-400'}">
            ${isOver ? '-' : '+'}${evt.currency}${Math.abs(remaining).toLocaleString()}
          </div>
          <div class="text-xs text-slate-400">
            ${isOver ? 'Action: AI suggestions recommended' : 'Healthy liquidity available'}
          </div>
        </div>

        <div class="glass-panel p-5 rounded-3xl border border-indigo-500/20 bg-indigo-500/5 space-y-1">
          <span class="text-xs font-bold text-indigo-400 uppercase tracking-wider">Cost Per Guest</span>
          <div class="text-2xl font-black text-indigo-300">
            ${evt.currency}${costPerGuest.toLocaleString()}
          </div>
          <div class="text-xs text-slate-400">
            Based on ${evt.guestCount} projected headcount
          </div>
        </div>
      </div>

      <!-- Visual Donut Chart & Category Breakdown Row -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- SVG Donut Chart Card -->
        <div class="glass-panel p-6 rounded-3xl border border-slate-800 flex flex-col items-center justify-center space-y-4">
          <h3 class="text-sm font-bold text-white uppercase tracking-wider">Expense Allocation Donut</h3>
          
          <div class="relative w-48 h-48">
            <svg viewBox="0 0 200 200" class="w-full h-full transform -rotate-90">
              ${slices.map(s => `
                <path d="${s.path}" fill="${s.color}" opacity="0.9" class="hover:opacity-100 transition-opacity cursor-pointer">
                  <title>${s.category}: ${evt.currency}${s.amount.toLocaleString()} (${s.pct}%)</title>
                </path>
              `).join('')}
              <circle cx="100" cy="100" r="45" fill="#0b0f19" />
            </svg>
            <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span class="text-xs text-slate-400 font-semibold">Total Spent</span>
              <span class="text-sm font-black text-white">${evt.currency}${(totalSpent / 100000).toFixed(1)}L</span>
            </div>
          </div>

          <div class="flex flex-wrap justify-center gap-2 text-[11px] pt-2">
            ${slices.map(s => `
              <div class="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800">
                <span class="w-2 h-2 rounded-full" style="background-color: ${s.color}"></span>
                <span class="text-slate-300">${s.category.split(' ')[0]}</span>
                <span class="font-bold text-white font-mono">${s.pct}%</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Category Progress Bars -->
        <div class="lg:col-span-2 glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-sm font-bold text-white">Category Ledger & Live Invoices</h3>
              <p class="text-xs text-slate-400">Track quotes vs actual payouts</p>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="openCopilotWith('How can I cut 15% costs from my budget without compromising guest experience?')" class="px-3 py-1.5 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 border border-pink-500/30 text-xs font-bold transition-all shadow-glow">
                ✨ AI Cost Cuts
              </button>
              <button onclick="promptAddBudgetCategory()" class="px-3 py-1.5 rounded-xl gradient-btn text-white text-xs font-bold shadow-glow">
                + Add Item
              </button>
            </div>
          </div>

          <div class="space-y-3 max-h-[360px] overflow-y-auto pr-1">
            ${evt.budgetCategories.map(cat => {
              const pct = Math.round((cat.spent / Math.max(cat.allocated, 1)) * 100);
              const over = cat.spent > cat.allocated;

              return `
                <div class="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <div class="flex items-center justify-between text-xs">
                    <span class="font-bold text-white">${cat.category}</span>
                    <div class="flex items-center gap-3">
                      <span class="font-mono text-slate-300 font-bold">${evt.currency}${cat.spent.toLocaleString()} / ${evt.currency}${cat.allocated.toLocaleString()}</span>
                      <button onclick="modifyBudgetSpent('${cat.id}', 5000)" class="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-[10px] text-pink-300 font-semibold border border-slate-700">+5k</button>
                      <button onclick="modifyBudgetSpent('${cat.id}', -5000)" class="px-1.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-[10px] text-slate-400 font-semibold border border-slate-700">-5k</button>
                      <button onclick="deleteBudgetCategory('${cat.id}')" class="text-slate-500 hover:text-rose-400">✕</button>
                    </div>
                  </div>
                  <div class="w-full bg-slate-950 rounded-full h-1.5 overflow-hidden">
                    <div class="h-full rounded-full transition-all duration-500 ${
                      over ? 'bg-rose-500' : pct > 85 ? 'bg-amber-400' : 'bg-gradient-to-r from-pink-500 to-indigo-500'
                    }" style="width: ${Math.min(pct, 100)}%"></div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

      </div>

    </div>
  `;
}

// 3. Timeline Tab with Live Run-of-Show Command Mode
function renderTimelineTab(evt) {
  const displayedPhases = state.timelinePhaseFilter === 'all'
    ? evt.timeline
    : evt.timeline.filter(p => p.id === state.timelinePhaseFilter);

  const dayOfPhase = evt.timeline.find(p => p.phaseName.toLowerCase().includes('day') || p.phaseName.toLowerCase().includes('run-of-show')) || evt.timeline[evt.timeline.length - 1];

  return `
    <div class="space-y-6">
      
      <!-- Top Action Bar -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span>⏱️</span> Milestones & Master Run-of-Show
          </h2>
          <p class="text-xs text-slate-400">Hour-by-hour event coordination & milestone countdowns</p>
        </div>

        <div class="flex items-center gap-2.5">
          <button onclick="toggleLiveRunMode()" class="px-3.5 py-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 ${
            state.isLiveRunMode ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500 shadow-glow' : 'bg-slate-900 text-slate-300 border-slate-700'
          }">
            <span class="w-2 h-2 rounded-full ${state.isLiveRunMode ? 'bg-emerald-400 animate-ping' : 'bg-slate-500'}"></span>
            <span>Live Command Mode</span>
          </button>
          <button onclick="promptAddTimelineTask()" class="px-4 py-2 rounded-xl gradient-btn text-white text-xs font-bold shadow-glow">
            + Add Milestone
          </button>
        </div>
      </div>

      <!-- Live Command Center Banner (When Activated) -->
      ${state.isLiveRunMode && dayOfPhase ? `
        <div class="glass-panel p-6 rounded-3xl border border-emerald-500/40 bg-emerald-500/5 space-y-4 animate-fade-in">
          <div class="flex items-center justify-between pb-3 border-b border-emerald-500/20">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
              <h3 class="text-sm font-bold text-emerald-300 uppercase tracking-widest">
                Event Day Live Coordinator Broadcast
              </h3>
            </div>
            <button onclick="broadcastScheduleWhatsApp()" class="px-3 py-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-glow">
              <span>📲 Dispatch to WhatsApp Team</span>
            </button>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-1">
              <span class="text-[10px] font-bold uppercase text-emerald-400">Current Phase Active</span>
              <div class="text-base font-bold text-white">${dayOfPhase.items[0]?.title || 'Opening Preparations'}</div>
              <p class="text-xs text-slate-400">Scheduled for ${dayOfPhase.items[0]?.timeOrOffset}</p>
            </div>

            <div class="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-1">
              <span class="text-[10px] font-bold uppercase text-amber-400">Next Up on Deck</span>
              <div class="text-base font-bold text-white">${dayOfPhase.items[1]?.title || 'Ceremony Kickoff'}</div>
              <p class="text-xs text-slate-400">Scheduled for ${dayOfPhase.items[1]?.timeOrOffset}</p>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- Phase Tabs -->
      <div class="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-2">
        <button onclick="filterTimelinePhase('all')" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold ${
          state.timelinePhaseFilter === 'all' ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/50' : 'text-slate-400 hover:text-slate-200'
        }">
          All Phases (${evt.timeline.reduce((s, p) => s + p.items.length, 0)})
        </button>
        ${evt.timeline.map(phase => `
          <button onclick="filterTimelinePhase('${phase.id}')" class="px-3.5 py-1.5 rounded-xl text-xs font-semibold ${
            state.timelinePhaseFilter === phase.id ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/50' : 'text-slate-400 hover:text-slate-200'
          }">
            ${phase.phaseName}
          </button>
        `).join('')}
      </div>

      <!-- Phases & Items -->
      <div class="space-y-6">
        ${displayedPhases.map(phase => {
          const completedInPhase = phase.items.filter(i => i.completed).length;
          const isPhaseDone = completedInPhase === phase.items.length && phase.items.length > 0;

          return `
            <div class="glass-panel p-6 rounded-3xl border transition-all space-y-4 ${
              isPhaseDone ? 'border-emerald-500/40 bg-emerald-500/5' : 'border-slate-800'
            }">
              <div class="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div class="space-y-0.5">
                  <h3 class="text-sm font-bold text-white">${phase.phaseName}</h3>
                  <p class="text-xs text-slate-400">${completedInPhase} of ${phase.items.length} milestones accomplished</p>
                </div>
                ${isPhaseDone ? `
                  <span class="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                    🎉 Phase Complete!
                  </span>
                ` : ''}
              </div>

              <div class="space-y-2.5">
                ${phase.items.map(item => `
                  <div onclick="toggleTimelineItem('${phase.id}', '${item.id}')" class="p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                    item.completed ? 'bg-slate-950/40 border-slate-800/60 opacity-60' : 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/40'
                  }">
                    <div class="flex items-start gap-3">
                      <span class="text-base mt-0.5">${item.completed ? '✅' : '⚪'}</span>
                      <div class="space-y-0.5">
                        <div class="text-xs sm:text-sm font-semibold ${item.completed ? 'line-through text-slate-400' : 'text-slate-100'}">
                          ${item.title}
                        </div>
                        ${item.notes ? `<p class="text-xs text-slate-400">${item.notes}</p>` : ''}
                      </div>
                    </div>

                    <div class="flex items-center gap-3 shrink-0">
                      <span class="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 text-indigo-300 border border-slate-700/60">
                        ${item.timeOrOffset}
                      </span>
                      <button onclick="event.stopPropagation(); deleteTimelineItem('${phase.id}', '${item.id}')" class="text-slate-500 hover:text-rose-400">
                        ✕
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>

    </div>
  `;
}

// 4. Vendors Tab
function renderVendorsTab(evt) {
  const categories = ['all', 'Venue', 'Catering', 'Photography', 'Decor & Florist', 'Music & DJ', 'Logistics & Security'];
  const filteredVendors = state.vendorCategoryFilter === 'all'
    ? evt.vendors
    : evt.vendors.filter(v => v.category === state.vendorCategoryFilter);

  return `
    <div class="space-y-6">
      
      <!-- Top Action Bar -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span>👥</span> Vendor Hub & Verification Checklists
          </h2>
          <p class="text-xs text-slate-400">Track deliverables, contracts, payment terms & safety checks</p>
        </div>

        <div class="flex items-center gap-2.5">
          <button onclick="openCopilotWith('Draft a strict vendor contract checklist with cancellation clauses')" class="px-3.5 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold transition-all shadow-glow">
            ✨ AI Contract Script
          </button>
          <button onclick="promptAddVendor()" class="px-4 py-2.5 rounded-xl gradient-btn text-white text-xs font-bold shadow-glow">
            + Add Vendor Partner
          </button>
        </div>
      </div>

      <!-- Categories Filter -->
      <div class="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-2">
        ${categories.map(cat => `
          <button onclick="filterVendorCategory('${cat}')" class="px-3 py-1.5 rounded-xl text-xs font-semibold ${
            state.vendorCategoryFilter === cat ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-slate-400 hover:text-slate-200'
          }">
            ${cat === 'all' ? `All Vendors (${evt.vendors.length})` : cat}
          </button>
        `).join('')}
      </div>

      <!-- Vendor Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        ${filteredVendors.map(v => {
          const checklistDone = v.checklist.filter(c => c.done).length;

          return `
            <div class="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4 flex flex-col justify-between">
              <div class="space-y-3">
                <div class="flex items-start justify-between gap-2">
                  <div>
                    <h3 class="text-base font-bold text-white">${v.name}</h3>
                    <span class="text-xs font-medium text-pink-400">${v.category}</span>
                  </div>

                  <select onchange="updateVendorStatus('${v.id}', this.value)" class="text-xs font-bold px-2.5 py-1 rounded-xl border focus:outline-none cursor-pointer uppercase tracking-wider ${
                    v.status === 'booked' || v.status === 'paid' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'bg-slate-800 text-slate-300 border-slate-700'
                  }">
                    <option value="researching" ${v.status === 'researching' ? 'selected' : ''}>Researching</option>
                    <option value="contacted" ${v.status === 'contacted' ? 'selected' : ''}>Contacted</option>
                    <option value="shortlisted" ${v.status === 'shortlisted' ? 'selected' : ''}>Shortlisted</option>
                    <option value="booked" ${v.status === 'booked' ? 'selected' : ''}>Booked & Locked</option>
                    <option value="paid" ${v.status === 'paid' ? 'selected' : ''}>Fully Paid</option>
                  </select>
                </div>

                <div class="bg-slate-950/60 p-3 rounded-2xl border border-slate-800 space-y-1.5 text-xs text-slate-300">
                  <div class="flex items-center justify-between">
                    <span class="text-slate-400">Contact Person:</span>
                    <span class="font-semibold text-white">${v.contact}</span>
                  </div>
                  ${v.phone ? `
                    <div class="flex items-center justify-between">
                      <span class="text-slate-400">Phone:</span>
                      <span class="font-mono text-emerald-400">${v.phone}</span>
                    </div>
                  ` : ''}
                  <div class="flex items-center justify-between pt-1 border-t border-slate-800">
                    <span class="text-slate-400 font-bold uppercase text-[10px]">Agreed Quote:</span>
                    <span class="font-black text-amber-400 text-sm">${evt.currency}${v.quote.toLocaleString()}</span>
                  </div>
                </div>

                <div>
                  <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Deliverables:</span>
                  <div class="flex flex-wrap gap-1">
                    ${v.deliverables.map(d => `
                      <span class="text-[11px] px-2 py-0.5 rounded-md bg-slate-850 text-slate-300 border border-slate-750">• ${d}</span>
                    `).join('')}
                  </div>
                </div>

                <!-- Checklist -->
                <div class="pt-2">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-bold text-slate-300">Verification Checklist (${checklistDone}/${v.checklist.length})</span>
                  </div>
                  <div class="space-y-1.5">
                    ${v.checklist.map((chk, idx) => `
                      <div onclick="toggleVendorChecklist('${v.id}', ${idx})" class="p-2 rounded-xl border text-xs flex items-center gap-2 cursor-pointer ${
                        chk.done ? 'bg-emerald-500/5 border-emerald-500/20 text-slate-300' : 'bg-slate-900/40 border-slate-800 text-slate-400'
                      }">
                        <span>${chk.done ? '✅' : '⚪'}</span>
                        <span class="${chk.done ? 'line-through text-slate-400' : ''}">${chk.item}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-between pt-3 border-t border-slate-800 mt-2">
                <button onclick="openCopilotWith('Draft a message to ${v.name} for our ${evt.title}')" class="text-xs text-amber-400 hover:text-amber-300 font-semibold">
                  ✨ Draft Message via AI
                </button>
                <button onclick="deleteVendor('${v.id}')" class="text-slate-500 hover:text-rose-400 text-xs">
                  Remove Vendor
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>

    </div>
  `;
}

// 5. Ideas Tab
function renderIdeasTab(evt) {
  return `
    <div class="space-y-6">
      
      <!-- Top Action Bar -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span>💡</span> Creative Suite & Personalized Ideas
          </h2>
          <p class="text-xs text-slate-400">GenAI custom themes, menus, scripts & invitations</p>
        </div>

        <div class="flex items-center gap-2.5">
          <button onclick="openCopilotWith('Generate 3 fresh party games and icebreakers for ${evt.title}')" class="px-3.5 py-2.5 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 border border-pink-500/30 text-xs font-bold transition-all shadow-glow">
            ✨ Generate with AI
          </button>
          <button onclick="promptAddIdea()" class="px-4 py-2.5 rounded-xl gradient-btn text-white text-xs font-bold shadow-glow">
            + Add Idea
          </button>
        </div>
      </div>

      <!-- Ideas Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        ${evt.ideas.map(idea => `
          <div class="glass-panel p-6 rounded-3xl border border-slate-800 space-y-3 flex flex-col justify-between">
            <div class="space-y-3">
              <div class="flex items-start justify-between gap-2">
                <div>
                  <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-pink-300 border border-slate-700">
                    ${idea.category.toUpperCase()}
                  </span>
                  <h3 class="text-base font-bold text-white pt-1">${idea.title}</h3>
                </div>

                <button onclick="copyIdeaText(\`${encodeURIComponent(idea.description)}\`)" title="Copy script" class="px-2 py-1 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800 text-xs">
                  📋 Copy
                </button>
              </div>

              <div class="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line bg-slate-950/50 p-3.5 rounded-2xl border border-slate-800">
                ${idea.description}
              </div>

              ${idea.highlight ? `
                <div class="text-xs text-amber-400 font-medium">✨ ${idea.highlight}</div>
              ` : ''}
            </div>

            <div class="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-800">
              <div class="flex flex-wrap gap-1">
                ${idea.tags.map(t => `<span class="text-[10px] px-2 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-800">#${t}</span>`).join('')}
              </div>
              <button onclick="openCopilotWith('Elaborate in detail on this concept: ${idea.title}')" class="text-xs text-pink-400 hover:text-pink-300 font-semibold">
                Elaborate with AI →
              </button>
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  `;
}

// 6. Brand New Feature: Digital Invitation & QR Studio Tab
function renderInvitationTab(evt) {
  const monogram = evt.theme.monogram || 'E & C';

  return `
    <div class="space-y-6">
      
      <!-- Top Action Bar -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 class="text-lg font-bold text-white flex items-center gap-2">
            <span>💌</span> Digital Invitation & Instant RSVP QR Studio
          </h2>
          <p class="text-xs text-slate-400">Bespoke digital luxury invitation cards with live scannable QR</p>
        </div>

        <div class="flex items-center gap-2">
          <button onclick="window.print()" class="px-4 py-2 rounded-xl gradient-btn text-white text-xs font-bold shadow-glow">
            🖨️ Download / Print Card
          </button>
          <button onclick="copyInvitationWhatsApp()" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-glow flex items-center gap-1.5">
            <span>📲 Copy WhatsApp Blast</span>
          </button>
        </div>
      </div>

      <!-- Preview Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        <!-- Live Invitation Luxury Preview Card -->
        <div class="lg:col-span-2 invitation-card rounded-3xl p-8 sm:p-12 text-center text-slate-100 shadow-2xl relative overflow-hidden">
          
          <div class="invitation-border-ornament space-y-6">
            
            <!-- Monogram Seal -->
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-amber-400/40 bg-amber-400/5 text-amber-300 font-cinzel text-xl font-bold shadow-glow-gold mx-auto">
              ${monogram}
            </div>

            <!-- Introductory Text -->
            <div class="space-y-1">
              <span class="text-xs uppercase tracking-widest text-amber-400/90 font-medium">
                Together With Their Families
              </span>
              <p class="text-xs text-slate-400">Request the honor of your presence to celebrate</p>
            </div>

            <!-- Event Title -->
            <h1 class="text-3xl sm:text-4xl font-extrabold text-white font-serif-luxury tracking-wide">
              ${evt.title}
            </h1>

            <p class="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto italic font-serif">
              “${evt.visionPrompt}”
            </p>

            <!-- Decorative Divider -->
            <div class="flex items-center justify-center gap-3 text-amber-400/60 text-xs">
              <span>✦</span>
              <div class="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>
              <span>✦</span>
            </div>

            <!-- Logistics Detail Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
              <div class="bg-slate-900/60 p-3 rounded-2xl border border-amber-400/20">
                <div class="text-amber-400 font-bold uppercase text-[10px]">Date & Time</div>
                <div class="text-white font-semibold mt-0.5">${evt.date}</div>
              </div>

              <div class="bg-slate-900/60 p-3 rounded-2xl border border-amber-400/20">
                <div class="text-amber-400 font-bold uppercase text-[10px]">Celebration Venue</div>
                <div class="text-white font-semibold mt-0.5">${evt.location}</div>
              </div>

              <div class="bg-slate-900/60 p-3 rounded-2xl border border-amber-400/20">
                <div class="text-amber-400 font-bold uppercase text-[10px]">Dress Code</div>
                <div class="text-white font-semibold mt-0.5">${evt.theme.dressCode}</div>
              </div>
            </div>

            <!-- Live QR RSVP Callout -->
            <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
              <!-- SVG QR Code Generator (Zero External Dependency) -->
              <div class="w-24 h-24 bg-white p-2 rounded-2xl shadow-lg flex items-center justify-center">
                <svg viewBox="0 0 100 100" class="w-full h-full text-slate-950 fill-current">
                  <rect x="0" y="0" width="30" height="30" />
                  <rect x="5" y="5" width="20" height="20" fill="white" />
                  <rect x="9" y="9" width="12" height="12" />
                  
                  <rect x="70" y="0" width="30" height="30" />
                  <rect x="75" y="5" width="20" height="20" fill="white" />
                  <rect x="79" y="9" width="12" height="12" />
                  
                  <rect x="0" y="70" width="30" height="30" />
                  <rect x="5" y="75" width="20" height="20" fill="white" />
                  <rect x="9" y="79" width="12" height="12" />
                  
                  <rect x="35" y="10" width="10" height="10" />
                  <rect x="50" y="15" width="12" height="8" />
                  <rect x="38" y="38" width="24" height="24" />
                  <rect x="42" y="42" width="16" height="16" fill="white" />
                  <rect x="46" y="46" width="8" height="8" />
                  
                  <rect x="70" y="45" width="15" height="10" />
                  <rect x="15" y="45" width="15" height="10" />
                  <rect x="45" y="70" width="15" height="15" />
                  <rect x="70" y="75" width="20" height="15" />
                </svg>
              </div>

              <div class="text-left space-y-1">
                <div class="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>📱 Scan QR for Instant RSVP</span>
                </div>
                <p class="text-xs text-slate-400">
                  Guests scan using phone camera to confirm attendance & dietary needs.
                </p>
                <div class="text-[11px] text-amber-300 font-mono">
                  celebraite.app/rsvp/${evt.id}
                </div>
              </div>
            </div>

          </div>

        </div>

        <!-- Customizer Panel -->
        <div class="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
          <h3 class="text-sm font-bold text-white uppercase tracking-wider">Invitation Settings</h3>
          
          <div class="space-y-3 text-xs">
            <div>
              <label class="block text-slate-400 mb-1">Monogram Initials</label>
              <input type="text" id="inputMonogram" value="${monogram}" onchange="updateMonogram(this.value)" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white font-cinzel font-bold text-center" />
            </div>

            <div>
              <label class="block text-slate-400 mb-1">Dress Code Note</label>
              <input type="text" value="${evt.theme.dressCode}" onchange="updateDressCode(this.value)" class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-white" />
            </div>

            <div class="pt-2">
              <button onclick="openCopilotWith('Draft a formal poetic invitation card text for ${evt.title}')" class="w-full py-2.5 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 border border-pink-500/30 font-bold transition-all">
                ✨ Rewrite Card Copy with AI
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  `;
}

// 7. Brand New Feature: RSVP & Visual Seating Chart Visualizer
function renderGuestsTab(evt) {
  const total = evt.guests.reduce((s, g) => s + 1 + g.plusOnes, 0);
  const confirmed = evt.guests.filter(g => g.status === 'confirmed').reduce((s, g) => s + 1 + g.plusOnes, 0);
  const pending = evt.guests.filter(g => g.status === 'pending').reduce((s, g) => s + 1 + g.plusOnes, 0);
  const declined = evt.guests.filter(g => g.status === 'declined').reduce((s, g) => s + 1 + g.plusOnes, 0);

  const tables = evt.tables || [
    { id: 't1', name: 'Table 1 - Head Table', capacity: 8, vip: true },
    { id: 't2', name: 'Table 2 - Family Lawn', capacity: 8, vip: false }
  ];

  const filteredGuests = evt.guests.filter(g => {
    const match = g.name.toLowerCase().includes(state.guestSearch.toLowerCase());
    const matchStatus = state.guestStatusFilter === 'all' || g.status === state.guestStatusFilter;
    const matchTable = !state.selectedTableId || g.tableId === state.selectedTableId;
    return match && matchStatus && matchTable;
  });

  return `
    <div class="space-y-6">
      
      <!-- Metrics -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div class="glass-panel p-4 rounded-2xl border border-slate-800">
          <span class="text-[11px] font-bold text-slate-400 uppercase">Headcount</span>
          <div class="text-xl sm:text-2xl font-black text-white">${total}</div>
          <p class="text-[11px] text-slate-500">Target: ${evt.guestCount}</p>
        </div>

        <div class="glass-panel p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
          <span class="text-[11px] font-bold text-emerald-400 uppercase">Confirmed</span>
          <div class="text-xl sm:text-2xl font-black text-emerald-400">${confirmed}</div>
          <p class="text-[11px] text-slate-400">${Math.round((confirmed / Math.max(total, 1)) * 100)}% responded</p>
        </div>

        <div class="glass-panel p-4 rounded-2xl border border-amber-500/20 bg-amber-500/5">
          <span class="text-[11px] font-bold text-amber-400 uppercase">Pending RSVP</span>
          <div class="text-xl sm:text-2xl font-black text-amber-400">${pending}</div>
          <p class="text-[11px] text-slate-400">Follow-up</p>
        </div>

        <div class="glass-panel p-4 rounded-2xl border border-rose-500/20 bg-rose-500/5">
          <span class="text-[11px] font-bold text-rose-400 uppercase">Declined</span>
          <div class="text-xl sm:text-2xl font-black text-rose-400">${declined}</div>
          <p class="text-[11px] text-slate-400">Seats freed</p>
        </div>
      </div>

      <!-- Visual Seating Layout Pods (Interactive Table Visualizer) -->
      <div class="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div>
            <h3 class="text-sm font-bold text-white flex items-center gap-2">
              <span>🪑</span> Interactive Table & Seating Chart
            </h3>
            <p class="text-xs text-slate-400">Click a table to filter and seat guests</p>
          </div>

          <div class="flex items-center gap-2">
            ${state.selectedTableId ? `
              <button onclick="selectTable(null)" class="text-xs text-pink-400 hover:text-white font-semibold">
                Show All Tables
              </button>
            ` : ''}
            <button onclick="promptAddTable()" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200">
              + New Table
            </button>
          </div>
        </div>

        <!-- Tables Horizontal Row -->
        <div class="flex items-center gap-4 overflow-x-auto pb-3 pt-2">
          ${tables.map(tbl => {
            const seatedCount = evt.guests.filter(g => g.tableId === tbl.id).reduce((s, g) => s + 1 + g.plusOnes, 0);
            const isSelected = state.selectedTableId === tbl.id;

            return `
              <div onclick="selectTable('${tbl.id}')" class="p-4 rounded-2xl border cursor-pointer transition-all flex flex-col items-center justify-center shrink-0 min-w-[130px] ${
                isSelected 
                  ? 'bg-pink-500/20 border-pink-500 shadow-glow' 
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }">
                <span class="text-xs font-bold text-white text-center truncate max-w-[110px]">${tbl.name}</span>
                <span class="text-[10px] font-mono mt-1 ${tbl.vip ? 'text-amber-400 font-bold' : 'text-slate-400'}">
                  ${tbl.vip ? '⭐ VIP' : 'General'}
                </span>
                <div class="mt-2 text-xs font-black ${seatedCount >= tbl.capacity ? 'text-rose-400' : 'text-emerald-400'}">
                  ${seatedCount} / ${tbl.capacity} Seats
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Controls -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <input 
          type="text" 
          value="${state.guestSearch}" 
          oninput="handleGuestSearch(this.value)"
          placeholder="Search guest name..."
          class="bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2 text-xs text-slate-100 focus:outline-none"
        />

        <div class="flex items-center gap-2">
          <select onchange="handleGuestStatusFilter(this.value)" class="bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none">
            <option value="all" ${state.guestStatusFilter === 'all' ? 'selected' : ''}>All RSVP Statuses</option>
            <option value="confirmed" ${state.guestStatusFilter === 'confirmed' ? 'selected' : ''}>Confirmed</option>
            <option value="pending" ${state.guestStatusFilter === 'pending' ? 'selected' : ''}>Pending</option>
            <option value="declined" ${state.guestStatusFilter === 'declined' ? 'selected' : ''}>Declined</option>
          </select>

          <button onclick="promptAddGuest()" class="px-4 py-2 rounded-xl gradient-btn text-white text-xs font-bold shadow-glow">
            + Add Guest
          </button>
        </div>
      </div>

      <!-- Table -->
      <div class="glass-panel rounded-3xl border border-slate-800 overflow-hidden">
        <table class="w-full text-left text-xs">
          <thead class="bg-slate-900/80 border-b border-slate-800 text-slate-400 uppercase tracking-wider font-semibold">
            <tr>
              <th class="py-3 px-4">Guest Name</th>
              <th class="py-3 px-4">Circle</th>
              <th class="py-3 px-4">Dietary</th>
              <th class="py-3 px-4">Plus-Ones</th>
              <th class="py-3 px-4">Assigned Table</th>
              <th class="py-3 px-4">RSVP Status</th>
              <th class="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/60">
            ${filteredGuests.map(g => {
              const assignedTbl = tables.find(t => t.id === g.tableId);

              return `
                <tr class="hover:bg-slate-900/40">
                  <td class="py-3 px-4 font-bold text-white">${g.name}</td>
                  <td class="py-3 px-4"><span class="px-2 py-0.5 rounded-md bg-slate-850 text-slate-300 border border-slate-750">${g.category}</span></td>
                  <td class="py-3 px-4 text-pink-400 font-medium">${g.dietary}</td>
                  <td class="py-3 px-4 font-mono">+${g.plusOnes}</td>
                  <td class="py-3 px-4">
                    <select onchange="updateGuestTable('${g.id}', this.value)" class="bg-slate-850 border border-slate-750 text-slate-200 rounded-lg px-2 py-1 text-xs">
                      ${tables.map(t => `<option value="${t.id}" ${t.id === g.tableId ? 'selected' : ''}>${t.name}</option>`).join('')}
                    </select>
                  </td>
                  <td class="py-3 px-4">
                    <select onchange="updateGuestStatus('${g.id}', this.value)" class="text-xs font-semibold px-2 py-1 rounded-lg border focus:outline-none cursor-pointer ${
                      g.status === 'confirmed' ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' : g.status === 'declined' ? 'bg-rose-500/10 text-rose-300 border-rose-500/30' : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                    }">
                      <option value="confirmed" ${g.status === 'confirmed' ? 'selected' : ''}>Confirmed</option>
                      <option value="pending" ${g.status === 'pending' ? 'selected' : ''}>Pending</option>
                      <option value="declined" ${g.status === 'declined' ? 'selected' : ''}>Declined</option>
                    </select>
                  </td>
                  <td class="py-3 px-4 text-right">
                    <button onclick="deleteGuest('${g.id}')" class="text-slate-500 hover:text-rose-400">✕</button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>

    </div>
  `;
}

// Modals
function renderNewEventModal() {
  if (!state.isNewEventModalOpen) return '';

  return `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div class="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        
        <div class="flex items-center justify-between pb-4 border-b border-slate-800">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 font-bold">
              ✨
            </div>
            <div>
              <h2 class="text-xl font-bold text-white">GenAI Event Architect</h2>
              <p class="text-xs text-slate-400">Synthesize tailored budgets, timelines & vendor checklists</p>
            </div>
          </div>
          <button onclick="closeNewEventModal()" class="p-2 text-slate-400 hover:text-white">✕</button>
        </div>

        <form id="formGenAIEvent" class="space-y-5">
          <div>
            <label class="block text-xs font-semibold text-slate-300 uppercase mb-2">Select Event Category</label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
              ${[
                { type: 'wedding', label: 'Wedding 💍' },
                { type: 'birthday', label: 'Birthday 🎂' },
                { type: 'community', label: 'Community 🎪' },
                { type: 'festival', label: 'Festival ✨' }
              ].map(cat => `
                <label class="flex items-center justify-center p-2.5 rounded-xl border border-slate-800 text-xs font-semibold cursor-pointer has-[:checked]:border-pink-500 has-[:checked]:bg-pink-500/10 has-[:checked]:text-pink-300">
                  <input type="radio" name="event_category" value="${cat.type}" class="hidden" ${cat.type === 'wedding' ? 'checked' : ''} />
                  <span>${cat.label}</span>
                </label>
              `).join('')}
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-300 uppercase mb-2">Celebration Title (Optional)</label>
            <input type="text" id="inputNewTitle" placeholder="e.g. Maya & Kabir’s Sunset Wedding" class="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-pink-500" />
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-300 uppercase mb-2">Your Vision & Requirements</label>
            <textarea id="inputNewPrompt" rows="3" placeholder="e.g. Plan a 2-day beach sunset wedding in Goa for 180 guests with ₹25 Lakhs budget. We want boho vows, seafood grill feast, and acoustic sundowner..." class="w-full bg-slate-950 border border-slate-700/80 rounded-xl p-3.5 text-sm text-slate-100 focus:outline-none focus:border-pink-500 resize-none" required></textarea>
          </div>

          <button type="submit" class="w-full py-3.5 rounded-2xl gradient-btn text-white font-bold text-sm tracking-wide shadow-glow">
            Generate Complete Event Architecture with GenAI ✨
          </button>
        </form>

      </div>
    </div>
  `;
}

function renderCopilotDrawer(evt) {
  if (!state.isCopilotOpen) return '';

  return `
    <div class="fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] bg-slate-950/95 backdrop-blur-2xl border-l border-slate-800 shadow-2xl flex flex-col animate-slide-in">
      
      <div class="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-2xl gradient-btn flex items-center justify-center text-white shadow-glow">
            🤖
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h3 class="text-sm font-bold text-white font-serif-luxury">CelebrAIte Copilot</h3>
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <p class="text-[11px] text-slate-400 truncate max-w-[220px]">Active: ${evt.title}</p>
          </div>
        </div>

        <button onclick="closeCopilot()" class="p-2 text-slate-400 hover:text-white">✕</button>
      </div>

      <!-- Quick Prompts -->
      <div class="p-3 bg-slate-900/40 border-b border-slate-800 flex gap-2 overflow-x-auto text-[11px]">
        <button onclick="openCopilotWith('How do I cut 15% budget?')" class="px-2.5 py-1.5 rounded-xl bg-slate-850 text-slate-300 border border-slate-750 shrink-0">
          💡 Cut 15% Budget
        </button>
        <button onclick="openCopilotWith('Draft a polite follow-up message to caterer')" class="px-2.5 py-1.5 rounded-xl bg-slate-850 text-slate-300 border border-slate-750 shrink-0">
          📋 Caterer Follow-up
        </button>
        <button onclick="openCopilotWith('Generate an emcee opening script & party games')" class="px-2.5 py-1.5 rounded-xl bg-slate-850 text-slate-300 border border-slate-750 shrink-0">
          🎤 Host Opening Script
        </button>
      </div>

      <!-- Chat Body -->
      <div id="copilotChatBody" class="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
        ${evt.copilotHistory.map(msg => `
          <div class="flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}">
            ${msg.sender === 'assistant' ? '<div class="w-7 h-7 rounded-lg gradient-btn flex items-center justify-center text-xs shrink-0 mt-0.5">🤖</div>' : ''}
            <div class="max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
              msg.sender === 'user' ? 'gradient-btn text-white' : 'bg-slate-900 border border-slate-800 text-slate-200'
            }">
              ${msg.text}
              <div class="text-[10px] mt-1 text-right text-slate-400">${msg.timestamp}</div>
            </div>
          </div>
        `).join('')}

        ${state.isCopilotTyping ? `
          <div class="flex gap-2 items-center text-xs text-slate-400">
            <span class="w-2 h-2 rounded-full bg-pink-400 animate-bounce"></span>
            <span class="w-2 h-2 rounded-full bg-indigo-400 animate-bounce"></span>
            <span class="text-[11px]">GenAI is thinking...</span>
          </div>
        ` : ''}
      </div>

      <!-- Chat Input -->
      <div class="p-4 border-t border-slate-800 bg-slate-900/80">
        <form id="formCopilotChat" class="flex items-center gap-2">
          <input 
            type="text" 
            id="inputCopilotQuery"
            value="${state.copilotInput}" 
            placeholder="Ask Copilot (e.g. Budget tips, speech)..."
            class="flex-1 bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-pink-500"
          />
          <button type="submit" class="px-4 py-2 rounded-xl gradient-btn text-white text-xs font-bold shadow-glow">
            Send
          </button>
        </form>
      </div>

    </div>
  `;
}

function renderDossierModal(evt) {
  if (!state.isDossierOpen) return '';

  const totalSpent = evt.budgetCategories.reduce((s, b) => s + b.spent, 0);

  return `
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div class="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 my-8">
        
        <div class="flex items-center justify-between pb-4 border-b border-slate-800 print:hidden">
          <span class="text-xs font-bold uppercase tracking-wider text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">
            Executive Event Dossier
          </span>
          <div class="flex items-center gap-2">
            <button onclick="window.print()" class="px-4 py-2 rounded-xl gradient-btn text-white text-xs font-bold shadow-glow">
              🖨️ Print / Save PDF
            </button>
            <button onclick="closeDossierModal()" class="p-2 text-slate-400 hover:text-white">✕</button>
          </div>
        </div>

        <div class="space-y-6 text-slate-200">
          <div class="border-b border-slate-800 pb-4 space-y-2">
            <h1 class="text-3xl font-extrabold text-white font-serif-luxury">${evt.title}</h1>
            <p class="text-sm text-slate-300 italic">“${evt.visionPrompt}”</p>
            <div class="flex flex-wrap gap-4 text-xs text-slate-400 pt-1">
              <span>📅 Date: ${evt.date}</span>
              <span>📍 Location: ${evt.location}</span>
              <span>👥 Target Guests: ${evt.guestCount}</span>
              <span>💰 Total Fund: ${evt.currency}${evt.totalBudget.toLocaleString()}</span>
            </div>
          </div>

          <!-- Budget Summary -->
          <div class="space-y-2">
            <h3 class="text-xs font-bold uppercase text-pink-400">Budget Breakdown (Committed: ${evt.currency}${totalSpent.toLocaleString()})</h3>
            <div class="rounded-xl border border-slate-800 overflow-hidden">
              <table class="w-full text-left text-xs">
                <thead class="bg-slate-950 text-slate-400">
                  <tr>
                    <th class="py-2 px-3">Category</th>
                    <th class="py-2 px-3">Allocated</th>
                    <th class="py-2 px-3">Spent</th>
                    <th class="py-2 px-3">Status</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-800/60">
                  ${evt.budgetCategories.map(b => `
                    <tr>
                      <td class="py-2 px-3 font-semibold text-white">${b.category}</td>
                      <td class="py-2 px-3">${evt.currency}${b.allocated.toLocaleString()}</td>
                      <td class="py-2 px-3">${evt.currency}${b.spent.toLocaleString()}</td>
                      <td class="py-2 px-3 uppercase text-[10px]">${b.status}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Timeline -->
          <div class="space-y-2">
            <h3 class="text-xs font-bold uppercase text-pink-400">Master Run-of-Show & Milestones</h3>
            <div class="space-y-3">
              ${evt.timeline.map(p => `
                <div class="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
                  <div class="text-xs font-bold text-indigo-300">${p.phaseName}</div>
                  ${p.items.map(i => `
                    <div class="flex items-center justify-between text-xs text-slate-300">
                      <span>${i.completed ? '✅' : '⚪'} ${i.title}</span>
                      <span class="font-mono text-slate-400 text-[11px]">${i.timeOrOffset}</span>
                    </div>
                  `).join('')}
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Vendors -->
          <div class="space-y-2">
            <h3 class="text-xs font-bold uppercase text-pink-400">Key Vendors Directory</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              ${evt.vendors.map(v => `
                <div class="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <div class="font-bold text-white">${v.name} (${v.category})</div>
                  <div class="text-slate-400">Contact: ${v.contact} - ${v.phone || ''}</div>
                  <div class="text-amber-400 font-bold mt-1">Quote: ${evt.currency}${v.quote.toLocaleString()}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}

// Global Event Listeners & Interaction Dispatchers
function attachEventListeners() {
  const eventSelector = document.getElementById('eventSelector');
  if (eventSelector) {
    eventSelector.onchange = (e) => {
      state.activeEventId = e.target.value;
      saveEvents();
      renderApp();
    };
  }

  const btnNewEvent = document.getElementById('btnNewEvent');
  if (btnNewEvent) {
    btnNewEvent.onclick = () => {
      state.isNewEventModalOpen = true;
      renderApp();
    };
  }

  const btnToggleCopilot = document.getElementById('btnToggleCopilot');
  if (btnToggleCopilot) {
    btnToggleCopilot.onclick = () => {
      state.isCopilotOpen = !state.isCopilotOpen;
      renderApp();
    };
  }

  const btnFloatingCopilot = document.getElementById('btnFloatingCopilot');
  if (btnFloatingCopilot) {
    btnFloatingCopilot.onclick = () => {
      state.isCopilotOpen = true;
      renderApp();
    };
  }

  const btnOpenDossier = document.getElementById('btnOpenDossier');
  if (btnOpenDossier) {
    btnOpenDossier.onclick = () => {
      state.isDossierOpen = true;
      renderApp();
    };
  }

  const btnExportJson = document.getElementById('btnExportJson');
  if (btnExportJson) {
    btnExportJson.onclick = exportJson;
  }

  // Tab Buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = () => {
      state.activeTab = btn.getAttribute('data-tab');
      renderApp();
    };
  });

  // New Event Form
  const formGenAIEvent = document.getElementById('formGenAIEvent');
  if (formGenAIEvent) {
    formGenAIEvent.onsubmit = (e) => {
      e.preventDefault();
      const cat = document.querySelector('input[name="event_category"]:checked')?.value || 'wedding';
      const prompt = document.getElementById('inputNewPrompt')?.value || '';
      const customTitle = document.getElementById('inputNewTitle')?.value || '';

      const newPlan = generateEventPlanWithAI(prompt, cat, customTitle);
      state.events.unshift(newPlan);
      state.activeEventId = newPlan.id;
      state.isNewEventModalOpen = false;
      state.activeTab = 'overview';
      saveEvents();
      triggerCelebration();
      renderApp();
    };
  }

  // Copilot Form
  const formCopilotChat = document.getElementById('formCopilotChat');
  if (formCopilotChat) {
    formCopilotChat.onsubmit = (e) => {
      e.preventDefault();
      const input = document.getElementById('inputCopilotQuery');
      const val = input ? input.value : '';
      if (!val.trim()) return;

      const evt = getActiveEvent();
      const userMsg = {
        id: `m-${Date.now()}`,
        sender: 'user',
        text: val.trim(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      evt.copilotHistory.push(userMsg);
      state.copilotInput = '';
      state.isCopilotTyping = true;
      saveEvents();
      renderApp();

      setTimeout(() => {
        const reply = getCopilotReply(val, evt);
        const botMsg = {
          id: `m-${Date.now() + 1}`,
          sender: 'assistant',
          text: reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        evt.copilotHistory.push(botMsg);
        state.isCopilotTyping = false;
        saveEvents();
        renderApp();
      }, 600);
    };
  }
}

// Helpers Exposed on Window for Inline Handlers
window.triggerCelebration = triggerConfetti;

window.switchTab = function(tab) {
  state.activeTab = tab;
  renderApp();
};

window.closeNewEventModal = function() {
  state.isNewEventModalOpen = false;
  renderApp();
};

window.closeCopilot = function() {
  state.isCopilotOpen = false;
  renderApp();
};

window.closeDossierModal = function() {
  state.isDossierOpen = false;
  renderApp();
};

window.openCopilotWith = function(promptText) {
  state.isCopilotOpen = true;
  state.copilotInput = promptText;
  renderApp();
};

window.toggleLiveRunMode = function() {
  state.isLiveRunMode = !state.isLiveRunMode;
  renderApp();
};

window.broadcastScheduleWhatsApp = function() {
  const evt = getActiveEvent();
  const dayOfPhase = evt.timeline.find(p => p.phaseName.toLowerCase().includes('day') || p.phaseName.toLowerCase().includes('run-of-show')) || evt.timeline[0];
  const itemsText = dayOfPhase.items.map(i => `• ${i.timeOrOffset}: ${i.title} (${i.notes || ''})`).join('\n');
  const broadcastText = `📢 *COORDINATOR RUN-OF-SHOW SCHEDULE: ${evt.title}*\n\n${itemsText}\n\n*Please ensure all teams report 15 mins prior!*`;

  navigator.clipboard.writeText(broadcastText);
  alert('✨ Coordinator schedule copied to clipboard! Ready to paste into WhatsApp team group.');
};

window.modifyBudgetSpent = function(catId, delta) {
  const evt = getActiveEvent();
  const cat = evt.budgetCategories.find(c => c.id === catId);
  if (cat) {
    cat.spent = Math.max(0, cat.spent + delta);
    saveEvents();
    renderApp();
  }
};

window.deleteBudgetCategory = function(catId) {
  const evt = getActiveEvent();
  evt.budgetCategories = evt.budgetCategories.filter(c => c.id !== catId);
  saveEvents();
  renderApp();
};

window.promptAddBudgetCategory = function() {
  const name = prompt('Enter new category name:');
  if (!name) return;
  const allocated = parseInt(prompt('Allocated Budget amount in ₹:')) || 50000;
  const evt = getActiveEvent();
  evt.budgetCategories.push({
    id: `b-${Date.now()}`,
    category: name,
    allocated,
    spent: 0,
    notes: 'Custom budget line item',
    status: 'on_track',
    color: '#f59e0b'
  });
  saveEvents();
  renderApp();
};

window.toggleTimelineItem = function(phaseId, itemId) {
  const evt = getActiveEvent();
  const phase = evt.timeline.find(p => p.id === phaseId);
  if (phase) {
    const item = phase.items.find(i => i.id === itemId);
    if (item) {
      item.completed = !item.completed;
      if (phase.items.every(i => i.completed)) {
        triggerConfetti();
      }
      saveEvents();
      renderApp();
    }
  }
};

window.deleteTimelineItem = function(phaseId, itemId) {
  const evt = getActiveEvent();
  const phase = evt.timeline.find(p => p.id === phaseId);
  if (phase) {
    phase.items = phase.items.filter(i => i.id !== itemId);
    saveEvents();
    renderApp();
  }
};

window.filterTimelinePhase = function(phaseId) {
  state.timelinePhaseFilter = phaseId;
  renderApp();
};

window.promptAddTimelineTask = function() {
  const title = prompt('Milestone / Schedule Activity:');
  if (!title) return;
  const time = prompt('Time or countdown (e.g. 10:30 AM or 2 Weeks Out):') || '10:00 AM';
  const evt = getActiveEvent();
  if (evt.timeline[0]) {
    evt.timeline[0].items.push({
      id: `t-${Date.now()}`,
      title,
      timeOrOffset: time,
      completed: false,
      notes: 'Custom milestone'
    });
    saveEvents();
    renderApp();
  }
};

window.filterVendorCategory = function(cat) {
  state.vendorCategoryFilter = cat;
  renderApp();
};

window.updateVendorStatus = function(vendorId, newStatus) {
  const evt = getActiveEvent();
  const v = evt.vendors.find(item => item.id === vendorId);
  if (v) {
    v.status = newStatus;
    saveEvents();
    renderApp();
  }
};

window.toggleVendorChecklist = function(vendorId, idx) {
  const evt = getActiveEvent();
  const v = evt.vendors.find(item => item.id === vendorId);
  if (v && v.checklist[idx]) {
    v.checklist[idx].done = !v.checklist[idx].done;
    saveEvents();
    renderApp();
  }
};

window.deleteVendor = function(vendorId) {
  const evt = getActiveEvent();
  evt.vendors = evt.vendors.filter(v => v.id !== vendorId);
  saveEvents();
  renderApp();
};

window.promptAddVendor = function() {
  const name = prompt('Vendor Agency Name:');
  if (!name) return;
  const category = prompt('Category (Venue, Catering, Photography, Decor & Florist, Music & DJ):') || 'Catering';
  const quote = parseInt(prompt('Quote in ₹:')) || 50000;
  const evt = getActiveEvent();
  evt.vendors.push({
    id: `v-${Date.now()}`,
    name,
    category,
    contact: 'Manager Lead',
    phone: '+91 98000 00000',
    email: 'contact@vendor.in',
    status: 'contacted',
    quote,
    deliverables: ['Custom service agreement deliverables'],
    checklist: [
      { item: 'Sign formal service contract with penalty terms', done: false },
      { item: 'Advance payment invoice cleared', done: false }
    ],
    rating: 4.8
  });
  saveEvents();
  renderApp();
};

window.copyIdeaText = function(encodedText) {
  const text = decodeURIComponent(encodedText);
  navigator.clipboard.writeText(text);
  alert('✨ Copied to clipboard!');
};

window.copyInvitationWhatsApp = function() {
  const evt = getActiveEvent();
  const text = `✨ *You are cordially invited to celebrate ${evt.title}!*

📍 *Venue:* ${evt.location}
📅 *Date:* ${evt.date}
👗 *Dress Code:* ${evt.theme.dressCode}

Please confirm your presence & dietary preference here:
👉 https://celebraite.app/rsvp/${evt.id}

We look forward to celebrating with you! 🥂`;

  navigator.clipboard.writeText(text);
  alert('✨ WhatsApp Invitation message copied to clipboard!');
};

window.updateMonogram = function(val) {
  const evt = getActiveEvent();
  evt.theme.monogram = val.trim();
  saveEvents();
  renderApp();
};

window.updateDressCode = function(val) {
  const evt = getActiveEvent();
  evt.theme.dressCode = val.trim();
  saveEvents();
  renderApp();
};

window.promptAddIdea = function() {
  const title = prompt('Idea Title:');
  if (!title) return;
  const description = prompt('Idea Details & Description:') || 'Custom creative concept';
  const evt = getActiveEvent();
  evt.ideas.push({
    id: `i-${Date.now()}`,
    category: 'theme',
    title,
    description,
    highlight: 'Curated by Organizer',
    tags: ['Custom', 'Creative']
  });
  saveEvents();
  renderApp();
};

window.handleGuestSearch = function(val) {
  state.guestSearch = val;
  renderApp();
};

window.handleGuestStatusFilter = function(val) {
  state.guestStatusFilter = val;
  renderApp();
};

window.selectTable = function(tblId) {
  state.selectedTableId = tblId;
  renderApp();
};

window.updateGuestStatus = function(guestId, status) {
  const evt = getActiveEvent();
  const g = evt.guests.find(item => item.id === guestId);
  if (g) {
    g.status = status;
    saveEvents();
    renderApp();
  }
};

window.updateGuestTable = function(guestId, tableId) {
  const evt = getActiveEvent();
  const g = evt.guests.find(item => item.id === guestId);
  if (g) {
    g.tableId = tableId;
    saveEvents();
    renderApp();
  }
};

window.deleteGuest = function(guestId) {
  const evt = getActiveEvent();
  evt.guests = evt.guests.filter(g => g.id !== guestId);
  saveEvents();
  renderApp();
};

window.promptAddTable = function() {
  const name = prompt('Table Name / Pod Zone:');
  if (!name) return;
  const cap = parseInt(prompt('Seating Capacity (e.g. 8 or 10):')) || 8;
  const isVip = confirm('Is this a VIP / High Table?');

  const evt = getActiveEvent();
  if (!evt.tables) evt.tables = [];
  evt.tables.push({
    id: `tb-${Date.now()}`,
    name,
    capacity: cap,
    vip: isVip
  });
  saveEvents();
  renderApp();
};

window.promptAddGuest = function() {
  const name = prompt('Guest or Family Name:');
  if (!name) return;
  const category = prompt('Category (Family, Friends, VIP, Colleagues):') || 'Friends';
  const dietary = prompt('Dietary (Veg, Non-Veg, Jain, Vegan):') || 'Veg';
  const plusOnes = parseInt(prompt('Plus-Ones count (0-5):')) || 0;

  const evt = getActiveEvent();
  const defaultTableId = (evt.tables && evt.tables[0]) ? evt.tables[0].id : 't1';

  evt.guests.push({
    id: `g-${Date.now()}`,
    name,
    category,
    status: 'pending',
    dietary,
    plusOnes,
    tableId: defaultTableId
  });
  saveEvents();
  renderApp();
};

function exportJson() {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state.events, null, 2));
  const a = document.createElement('a');
  a.setAttribute('href', dataStr);
  a.setAttribute('download', `CelebrAIte_Backup_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(a);
  a.click();
  a.remove();
}

// Initial Mount
renderApp();
