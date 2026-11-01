import type { EventPlan, EventType, BudgetItem, TimelinePhase, VendorItem, PersonalizedIdea, GuestItem } from '../types';

export const INITIAL_EVENTS: EventPlan[] = [
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
      dressCode: 'Royal Indian Festive / Bandhgala & Zardozi Lehengas'
    },
    budgetCategories: [
      { id: 'b1', category: 'Venue & Palace Rentals (3 Days)', allocated: 1800000, spent: 1750000, notes: 'Main Courtyard, Banquet Lawn & Island Boat Transfers', status: 'on_track' },
      { id: 'b2', category: 'Catering & Royal Mewari Dining', allocated: 1200000, spent: 1100000, notes: 'Includes welcome dinners, live chaat stalls, 5-course banquet', status: 'on_track' },
      { id: 'b3', category: 'Decor, Mandap & Royal Florals', allocated: 650000, spent: 700000, notes: 'Custom floating floral mandap on lake edge', status: 'warning' },
      { id: 'b4', category: 'Cinematography & Pre-Wedding Film', allocated: 350000, spent: 350000, notes: 'Drone team, 4K multi-cam + 60s teaser reels', status: 'on_track' },
      { id: 'b5', category: 'Entertainment, Sangeet DJ & Folk Artists', allocated: 250000, spent: 220000, notes: 'Manganiyar folk troupe + Bollywood DJ', status: 'on_track' },
      { id: 'b6', category: 'Bridal Couture & Styling', allocated: 150000, spent: 160000, notes: 'Bridal zardozi lehenga & groom sherwani', status: 'on_track' },
      { id: 'b7', category: 'Guest Welcome Kits & Hampers', allocated: 100000, spent: 90000, notes: 'Handcrafted jharokha boxes with local sweets & organic mist', status: 'on_track' }
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
          { item: 'Sound curfew permit till 11 PM', done: true },
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
          { item: 'Tasting session signoff', done: true },
          { item: 'Zero-food waste donation tie-up', done: true },
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
        category: 'entertainment',
        title: 'Sunset Kalbelia & Fire Dancers during High Tea',
        description: 'Surprise guests as the sun sets over the Aravalli hills with authentic Rajasthani folk music, ghungroo rhythms, and daring fire performances.',
        highlight: 'Interactive guest experience',
        tags: ['Cultural', 'Music', 'High Tea']
      },
      {
        id: 'i3',
        category: 'menu',
        title: 'Mewari Royal Thali with Modern Molecular Twist',
        description: 'Include traditional Dal Baati Churma served with edible silver leaf, paired with modern nitrogen-chilled rose-petal kulfi and saffron thandai cocktails.',
        highlight: 'Unforgettable culinary journey',
        tags: ['Gourmet', 'Dessert', 'Signature Drink']
      },
      {
        id: 'i4',
        category: 'invitation',
        title: 'Royal Regal Wax-Sealed Farman Invite',
        description: 'Scroll-style invitation in rich crimson parchment with calligraphy poetry, sealed with a brass royal monogram seal and accompanied by saffron-infused attar.',
        highlight: 'Collectible Keepsake',
        tags: ['Calligraphy', 'Monogram', 'Poetry']
      }
    ],
    guests: [
      { id: 'g1', name: 'Rameshwar & Sunita Sharma', category: 'Family', status: 'confirmed', dietary: 'Veg', plusOnes: 1, table: 'Table 1 - Royal Gazebo' },
      { id: 'g2', name: 'Vikram & Radhika Singhania', category: 'VIP', status: 'confirmed', dietary: 'Jain', plusOnes: 2, table: 'Table 2 - High Table' },
      { id: 'g3', name: 'Kabir Mehta', category: 'Friends', status: 'confirmed', dietary: 'Non-Veg', plusOnes: 0, table: 'Table 7 - Groom Squad' },
      { id: 'g4', name: 'Dr. Neha Kulkarni', category: 'Friends', status: 'pending', dietary: 'Vegan', plusOnes: 1, table: 'Table 8 - Bride Tribe' },
      { id: 'g5', name: 'Sanjay Aggarwal', category: 'Colleagues', status: 'confirmed', dietary: 'Veg', plusOnes: 1, table: 'Table 5 - Executive Table' }
    ],
    copilotHistory: [
      {
        id: 'c1',
        sender: 'assistant',
        text: 'Namaste Anuj! I am your CelebrAIte Wedding Concierge. I have calibrated Arjun & Ananya’s royal celebration in Udaipur. Your decor budget has a slight 7.7% overage due to lake-edge floating florals. Would you like me to suggest 3 tasteful ways to rebalance costs without reducing aesthetics?',
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
      dressCode: 'Futuristic Cyberpunk / Neon Glam / All Black with Neon Accents'
    },
    budgetCategories: [
      { id: 'bb1', category: 'Rooftop Penthouse Venue', allocated: 60000, spent: 55000, notes: 'Panoramic glass terrace with soundproof indoor lounge', status: 'on_track' },
      { id: 'bb2', category: 'Liquid Nitrogen Cocktails & Gourmet Sliders', allocated: 55000, spent: 52000, notes: 'Craft mixologist + Asian bao & slider stations', status: 'on_track' },
      { id: 'bb3', category: 'UV Neon Decor, Laser Projections & Glow Lights', allocated: 30000, spent: 34000, notes: 'Custom neon sign “Level 30 Unlocked”', status: 'warning' },
      { id: 'bb4', category: 'Synthwave / Tech-House DJ & Sound Gear', allocated: 20000, spent: 20000, notes: 'Pioneer CDJ setup + bass subwoofers', status: 'on_track' },
      { id: 'bb5', category: 'Cyberpunk Photobooth & 360 Spin Cam', allocated: 15000, spent: 15000, notes: 'With laser tunnel background and prop blasters', status: 'on_track' }
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
          { item: 'Liquid nitrogen safety cert', done: true },
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
    guests: [
      { id: 'gb1', name: 'Tanya Sengupta', category: 'Friends', status: 'confirmed', dietary: 'Veg', plusOnes: 1, table: 'Lounge Pod A' },
      { id: 'gb2', name: 'Karthik Raman', category: 'Friends', status: 'confirmed', dietary: 'Non-Veg', plusOnes: 0, table: 'Arcade Zone' },
      { id: 'gb3', name: 'Zoya Khan', category: 'VIP', status: 'confirmed', dietary: 'Vegan', plusOnes: 1, table: 'Lounge Pod B' }
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
    title: 'Silicon Valley of India Tech Innovation Hackathon & Fest',
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
      dressCode: 'Developer Casual / Hackathon Hoodies & Tech Merch'
    },
    budgetCategories: [
      { id: 'cb1', category: 'Exhibition Hall & 10Gbps Internet Lease', allocated: 380000, spent: 380000, notes: 'Dual redundant fiber optic lines + AC hall', status: 'on_track' },
      { id: 'cb2', category: '24/7 Food, Energy Drinks & Midnight Pizza', allocated: 260000, spent: 245000, notes: 'Continuous coffee, 4 meals for 500 hackers', status: 'on_track' },
      { id: 'cb3', category: 'Cash Prizes, Hardware Swag & Trophies', allocated: 150000, spent: 150000, notes: 'Grand prize 1L + hardware kits for winners', status: 'on_track' },
      { id: 'cb4', category: 'Stage AV, LED Walls & Livestream Gear', allocated: 100000, spent: 95000, notes: 'Giant 30ft LED screen + multicam YouTube broadcast', status: 'on_track' },
      { id: 'cb5', category: 'Medical EMT, Security & Volunteer Logistics', allocated: 60000, spent: 48000, notes: '24hr paramedic van on standby + volunteer kits', status: 'on_track' }
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
        category: 'entertainment',
        title: '3 AM Synthwave Lo-Fi Live Jam & Chill Zone',
        description: 'Set up beanbags in the corner zone with a live acoustic synth musician playing ambient coding beats to help developers debug without burnout.',
        highlight: 'Mental wellness & cozy vibe',
        tags: ['Wellness', 'Music', 'Coding']
      },
      {
        id: 'ic2',
        category: 'speech_games',
        title: '“Worst Bug That Ever Shipped” Lightning Talks',
        description: 'An informal 15-minute mic session where senior mentors and CTOs share their most catastrophic production bugs and lessons learned.',
        highlight: 'High audience laughter & empathy',
        tags: ['Mentorship', 'Humor', 'Lightning Talk']
      }
    ],
    guests: [
      { id: 'gc1', name: 'Tanmay Bhat (Keynote Speaker)', category: 'VIP', status: 'confirmed', dietary: 'Non-Veg', plusOnes: 1, table: 'VIP Speaker Lounge' },
      { id: 'gc2', name: 'Team NeuralHack (4 members)', category: 'Community', status: 'confirmed', dietary: 'Veg', plusOnes: 0, table: 'Pod 14' },
      { id: 'gc3', name: 'Pooja Hegde (Judge & VC)', category: 'VIP', status: 'confirmed', dietary: 'Vegan', plusOnes: 1, table: 'Jury Desk' }
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

// Helper to simulate deep GenAI generation based on user input
export function generateEventPlanWithAI(prompt: string, eventType: EventType, customTitle?: string): EventPlan {
  const p = prompt.toLowerCase();
  const id = `evt-${Date.now()}`;
  
  // Extract or guess budget
  let budget = 250000;
  if (p.includes('lakh') || p.includes('lac')) {
    const match = p.match(/(\d+)\s*(lakh|lac)/);
    if (match) budget = parseInt(match[1]) * 100000;
  } else if (p.includes('k') || p.includes('thousand')) {
    const match = p.match(/(\d+)\s*(k|thousand)/);
    if (match) budget = parseInt(match[1]) * 1000;
  } else if (p.includes('crore')) {
    const match = p.match(/(\d+)\s*crore/);
    if (match) budget = parseInt(match[1]) * 10000000;
  } else if (eventType === 'wedding') {
    budget = 1500000;
  } else if (eventType === 'community' || eventType === 'festival') {
    budget = 400000;
  } else if (eventType === 'birthday') {
    budget = 80000;
  }

  // Guess guest count
  let guests = 100;
  const guestMatch = p.match(/(\d+)\s*(guest|people|attendee|person|friend)/);
  if (guestMatch) {
    guests = parseInt(guestMatch[1]);
  } else if (eventType === 'wedding') {
    guests = 250;
  } else if (eventType === 'community') {
    guests = 350;
  } else if (eventType === 'birthday') {
    guests = 45;
  }

  const title = customTitle || (
    eventType === 'wedding' ? 'Eternal Romance: Grand Celebration' :
    eventType === 'birthday' ? 'Vibrant Milestone Celebration' :
    eventType === 'community' ? 'Community Unity & Culture Festival' :
    'Grand Gala & Celebration'
  );

  // Generate customized budget breakdown
  const budgetCategories: BudgetItem[] = [
    { id: 'bg1', category: 'Venue & Infrastructure', allocated: Math.round(budget * 0.38), spent: Math.round(budget * 0.35), notes: 'Primary grounds, seating, security, audio-visual foundation', status: 'on_track' },
    { id: 'bg2', category: 'Catering & Beverages', allocated: Math.round(budget * 0.28), spent: Math.round(budget * 0.26), notes: `Tailored feast for ${guests} guests including welcome drinks and dessert bar`, status: 'on_track' },
    { id: 'bg3', category: 'Thematic Decor & Lighting', allocated: Math.round(budget * 0.16), spent: Math.round(budget * 0.17), notes: 'Custom entrance arch, centerpieces, ambient lighting & stage styling', status: 'warning' },
    { id: 'bg4', category: 'Media (Photo & Film)', allocated: Math.round(budget * 0.08), spent: Math.round(budget * 0.08), notes: 'Professional photography coverage, highlight reel, candid portraits', status: 'on_track' },
    { id: 'bg5', category: 'Entertainment & Performances', allocated: Math.round(budget * 0.06), spent: Math.round(budget * 0.05), notes: 'Live DJ, anchor/emcee, special guest acts or interactive games', status: 'on_track' },
    { id: 'bg6', category: 'Contingency & Hospitality Buffer', allocated: Math.round(budget * 0.04), spent: Math.round(budget * 0.02), notes: 'Emergency fund, guest welcome gifts, permits', status: 'on_track' }
  ];

  // Generate customized timeline
  const timeline: TimelinePhase[] = [
    {
      id: 'tp-ai-1',
      phaseName: 'Phase 1: Planning Milestones & Bookings',
      items: [
        { id: 'ti-1', title: 'Lock Down Ideal Venue & Contract Permits', timeOrOffset: '2 Months Out', completed: true, notes: 'Confirmed booking with advance deposit' },
        { id: 'ti-2', title: `Menu Tasting & Finalization for ${guests} Attendees`, timeOrOffset: '1 Month Out', completed: false, notes: 'Finalize dietary tags (Veg, Non-Veg, Jain)' },
        { id: 'ti-3', title: 'Dispatch Digital & Print Invitations with RSVP Link', timeOrOffset: '3 Weeks Out', completed: false, notes: 'Collect guest confirmations & special requirements' }
      ]
    },
    {
      id: 'tp-ai-2',
      phaseName: 'Phase 2: Final Countdown & Logistics',
      items: [
        { id: 'ti-4', title: 'Finalize Decor Moodboard & Floral Palette', timeOrOffset: '10 Days Out', completed: false, notes: 'Review 3D render and fabric swatches' },
        { id: 'ti-5', title: 'Vendor Alignment Meeting & Contact Matrix', timeOrOffset: '3 Days Out', completed: false, notes: 'Sync sound, electricity, caterer setup slots' }
      ]
    },
    {
      id: 'tp-ai-3',
      phaseName: 'Phase 3: Day-of Event (Run-of-Show)',
      items: [
        { id: 'ti-6', title: 'Venue Open & Vendor Load-in Check', timeOrOffset: '08:00 AM', completed: false, notes: 'Sound check, lighting, floral freshness check' },
        { id: 'ti-7', title: 'Welcome Desk Opens & Welcome Drinks Service', timeOrOffset: '11:00 AM', completed: false, notes: 'Hand out badges/gifts, usher guests to seating' },
        { id: 'ti-8', title: 'Main Ceremony / Grand Program Unveiling', timeOrOffset: '12:30 PM', completed: false, notes: 'Host introduction, milestone celebration moment' },
        { id: 'ti-9', title: 'Feast & Networking Banquet Dining', timeOrOffset: '01:30 PM', completed: false, notes: 'Live cooking counters and beverage bar' },
        { id: 'ti-10', title: 'Evening Entertainment, Dance & Cake/Toast', timeOrOffset: '04:00 PM', completed: false, notes: 'Open dance floor and commemorative photo session' }
      ]
    }
  ];

  // Customized vendors
  const vendors: VendorItem[] = [
    {
      id: 'v-ai-1',
      name: 'Grand Horizon Spaces',
      category: 'Venue',
      contact: 'Ananya Deshmukh',
      phone: '+91 98200 44321',
      status: 'booked',
      quote: Math.round(budget * 0.36),
      deliverables: ['Full venue access', 'Valet parking facility', 'Basic stage & generator power'],
      checklist: [
        { item: 'Advance deposit paid', done: true },
        { item: 'Clean up policy signed', done: false }
      ],
      rating: 4.8
    },
    {
      id: 'v-ai-2',
      name: 'Epicurean Feast Catering Co.',
      category: 'Catering',
      contact: 'Chef Rahul',
      phone: '+91 98199 12340',
      status: 'shortlisted',
      quote: Math.round(budget * 0.27),
      deliverables: [`Multi-course buffet for ${guests} pax`, 'Live mocktail / beverage bar', 'Dessert counter'],
      checklist: [
        { item: 'Tasting appointment scheduled', done: true },
        { item: 'Dietary breakdown submitted', done: false }
      ],
      rating: 4.9
    },
    {
      id: 'v-ai-3',
      name: 'Aura Bloom Decorators',
      category: 'Decor & Florist',
      contact: 'Priya Sen',
      phone: '+91 97690 98765',
      status: 'contacted',
      quote: Math.round(budget * 0.16),
      deliverables: ['Main stage focal installation', 'Custom entrance archway', 'Ambient uplighting'],
      checklist: [
        { item: 'Moodboard approved', done: true },
        { item: 'Sample flower quality verified', done: false }
      ],
      rating: 4.7
    }
  ];

  // Personalized ideas
  const ideas: PersonalizedIdea[] = [
    {
      id: 'id-ai-1',
      category: 'theme',
      title: 'Curated Aesthetic Vibe & Color Harmony',
      description: `Tailored for "${prompt}": Blend warm gold accents, organic botanical greens, and soft champagne textiles to establish a welcoming, luxurious atmosphere.`,
      highlight: 'Warm & Photogenic Ambience',
      tags: ['Aesthetic', 'Lighting', 'Theme']
    },
    {
      id: 'id-ai-2',
      category: 'menu',
      title: 'Interactive Live Food Stations',
      description: `Engage ${guests} guests with a mix of artisanal small plates, customizable skewers, and an interactive liquid dessert counter.`,
      highlight: 'Crowd-favorite culinary experience',
      tags: ['Catering', 'Interactive', 'Gourmet']
    },
    {
      id: 'id-ai-3',
      category: 'invitation',
      title: 'AI Smart WhatsApp & Animated Digital Card',
      description: 'A responsive digital invite featuring countdown clock, Google Maps directions, Spotify curated playlist preview, and one-tap WhatsApp RSVP confirmation.',
      highlight: '95%+ RSVP response rate',
      tags: ['Digital', 'RSVP', 'WhatsApp']
    },
    {
      id: 'id-ai-4',
      category: 'speech_games',
      title: 'Commemorative Toast & Live Memory Projection Wall',
      description: 'Guests can scan a QR code to upload photos from their phones in real-time, instantly appearing on the main ambient display screen during dinner.',
      highlight: 'Interactive storytelling',
      tags: ['Memories', 'Projection', 'Engaging']
    }
  ];

  const guestsList: GuestItem[] = [
    { id: 'g-ai-1', name: 'VIP Dignitary / Family Elder', category: 'VIP', status: 'confirmed', dietary: 'Veg', plusOnes: 1, table: 'Table 1' },
    { id: 'g-ai-2', name: 'Primary Organizers Core Group', category: 'Family', status: 'confirmed', dietary: 'Non-Veg', plusOnes: 2, table: 'Table 2' },
    { id: 'g-ai-3', name: 'Key Friends & Associates', category: 'Friends', status: 'pending', dietary: 'Vegan', plusOnes: 0, table: 'Table 3' }
  ];

  return {
    id,
    title,
    type: eventType,
    date: '2026-12-25',
    daysRemaining: 54,
    location: 'Metropolitan Celebration Hall & Gardens',
    guestCount: guests,
    totalBudget: budget,
    currency: '₹',
    visionPrompt: prompt,
    theme: {
      name: 'Modern Celebration & Harmony',
      colors: ['#ec4899', '#8b5cf6', '#f59e0b', '#10b981', '#1e293b'],
      aesthetic: 'Contemporary elegance with dynamic lighting, lush greenery, and celebratory accents.',
      dressCode: 'Smart Festive / Elegant Cocktail'
    },
    budgetCategories,
    timeline,
    vendors,
    ideas,
    guests: guestsList,
    copilotHistory: [
      {
        id: 'c-init',
        sender: 'assistant',
        text: `✨ I have synthesized your vision into a comprehensive event plan: "${title}". I have structured your ₹${budget.toLocaleString()} budget across 6 categories, configured ${timeline.length} timeline phases, prepared vendor checklists, and generated personalized ideas. How would you like to refine it?`,
        timestamp: 'Just now'
      }
    ]
  };
}

// AI Copilot response generator
export function getCopilotResponse(query: string, currentEvent: EventPlan): string {
  const q = query.toLowerCase();
  
  if (q.includes('budget') || q.includes('cost') || q.includes('save') || q.includes('paisa') || q.includes('kam')) {
    const totalSpent = currentEvent.budgetCategories.reduce((acc, b) => acc + b.spent, 0);
    const pct = Math.round((totalSpent / currentEvent.totalBudget) * 100);
    return `💰 **Budget Optimization Advisory for "${currentEvent.title}"**:
- Currently, you have committed **${currentEvent.currency}${totalSpent.toLocaleString()}** out of **${currentEvent.currency}${currentEvent.totalBudget.toLocaleString()}** (${pct}% utilized).
- **3 Strategic Cost Reduction Recommendations:**
  1. *Catering Repackaging*: Switch from an elaborate 7-dessert spread to 2 live signature stations (cuts dessert costs by ~25% with higher guest delight).
  2. *Seasonal Flora & Lighting*: Substitute imported cut flowers for reusable architectural lighting, warm fairy canopies, and local seasonal blooms (saves up to ₹80,000 in decor).
  3. *Consolidated Photography*: Hire a single agency handling both photo & drone reel rather than two separate teams (saves 15-20% multi-vendor overhead).`;
  }

  if (q.includes('timeline') || q.includes('schedule') || q.includes('time') || q.includes('der')) {
    return `⏱️ **Run-of-Show Protocol Advisory**:
- With **${currentEvent.daysRemaining} days remaining** until the big date (${currentEvent.date}), here is the crucial focus:
  1. Verify vendor load-in permissions with the venue manager 48 hours prior.
  2. Designate a dedicated "Stage & Timekeeper" so activities don't bleed past scheduled hours.
  3. Ensure a 30-minute buffer window between the main ceremony and dinner opening to avoid guest crowding at the buffet.`;
  }

  if (q.includes('vendor') || q.includes('caterer') || q.includes('photographer') || q.includes('dj')) {
    return `📋 **Vendor Negotiation & Checklist Guide**:
- You have **${currentEvent.vendors.length} vendors** in your tracker.
- **Key Clauses to Lock in Right Now:**
  - *Caterer*: Guarantee a +10% guest food buffer at agreed per-plate cost in case of surprise arrivals.
  - *DJ & Audio*: Verify indoor/outdoor dB sound curfew licenses to avoid midnight shutdown by local authorities.
  - *Photographer*: Require delivery milestones: 48-hr sneak peek reel (for Instagram/WhatsApp) and 3-week final high-res gallery.`;
  }

  if (q.includes('invite') || q.includes('message') || q.includes('whatsapp') || q.includes('script')) {
    return `💌 **Draft WhatsApp Broadcast Invite**:
*"✨ Together with our families, we joyfully invite you to celebrate with us at ${currentEvent.title}!*

📍 **Venue**: ${currentEvent.location}
📅 **Date**: ${currentEvent.date}
👗 **Dress Code**: ${currentEvent.theme.dressCode}

Join us for an unforgettable evening of joy, delicious food, and celebration! 🥂
Please tap the link below to confirm your presence by next week:
👉 [Tap here to RSVP & see event details]

With warm regards,*
*The Organizing Family*"`;
  }

  if (q.includes('speech') || q.includes('toast') || q.includes('anchor')) {
    return `🎤 **Emcee / Host Opening Script**:
*"Good evening ladies, gentlemen, and dear friends! Welcome to this magnificent evening of celebration for ${currentEvent.title}! 

Tonight isn't just about marking a date on the calendar; it's about honoring love, laughter, shared memories, and the wonderful people gathered in this room. We have an extraordinary evening planned for you—spectacular food, soulful music, and moments that will live in our hearts forever.

Please sit back, raise a toast, and let the celebration begin!"*`;
  }

  return `🎉 **CelebrAIte Assistant Insights for "${currentEvent.title}"**:
I am actively monitoring your event plan across:
- **Budget**: ${currentEvent.currency}${currentEvent.totalBudget.toLocaleString()} total
- **Guests**: ${currentEvent.guestCount} projected attendees
- **Timeline**: ${currentEvent.timeline.length} structured planning phases
- **Vendors**: ${currentEvent.vendors.length} tracked partners

You can ask me to:
- *"Draft a vendor negotiation message"*
- *"Suggest 5 cost-cutting tweaks"*
- *"Create a backup plan for bad weather"*
- *"Generate funny party games for guests"*`;
}

