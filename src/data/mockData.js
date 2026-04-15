// ============================================
// VRIHI-SKYDECK — Mock Data
// All static content, image URLs, and lists
// ============================================

export const SITE = {
  name: 'Vrihi-Skydeck',
  tagline: "Patna's premier rooftop dining destination. Where the sky is your ceiling and the city is your backdrop.",
  phone: '+91 612 345 6789',
  phoneTel: '+916123456789',
  whatsapp: 'https://wa.me/916123456789?text=Hi%2C%20I%20want%20to%20book%20a%20table%20at%20Vrihi-Skydeck.%20Please%20share%20availability.',
  email: 'reservations@vrihiskydeck.com',
  address: {
    line1: '14th Floor, Skyline Plaza',
    line2: 'Fraser Road, Patna',
    city: 'Bihar 800001',
  },
  hours: [
    { days: 'Mon – Thu', time: '12:00 – 23:00' },
    { days: 'Fri – Sat', time: '12:00 – 01:00' },
    { days: 'Sunday', time: '11:00 – 23:00' },
  ],
  social: {
    instagram: '#',
    facebook: '#',
  },
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Events', href: '/events' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

// Unsplash curated URLs for rooftop
export const IMAGES = {
  // ── Hero & key backgrounds ──
  hero:         'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80',
  heroAlt:      'Rooftop restaurant with city lights at night',

  // ── Home sections ──
  rooftopDining:      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80',
  liveMusic:          'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=900&q=80',
  privateCelebration: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80',

  // ── About / Story ──
  story:      'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=900&q=80',
  chef:       'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=900&q=80',
  interior:   'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80',
  about:      'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80',

  // ── Events ──
  eventsBg:    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=80',
  birthday:    'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80',
  anniversary: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=900&q=80',
  corporate:   'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
  weddingSetup:'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
  fireLounge:  'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80',
  wineGlass:   'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80',

  // ── Page heroes ──
  contactHero: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  menuHero:    'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=1200&q=80',
  galleryHero: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
  eventsHero:  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80',
  blogHero:    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
  aboutHero:   'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1200&q=80',

  // ── Menu dishes ── (all verified photo IDs)
  cocktail:   'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=700&q=80',
  scallops:   'https://images.unsplash.com/photo-1481931098730-318b6f776db0?auto=format&fit=crop&w=700&q=80',
  lambChop:   'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80',
  seaBass:    'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=700&q=80',
  risotto:    'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=700&q=80',
  fondantChoc:'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=80',
  cheesecake: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80',
  iceCream:   'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=700&q=80',
  starters:   'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80',

  // ── Gallery ── (8 distinct well-known photos)
  gal1: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80',
  gal2: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=700&q=80',
  gal3: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=700&q=80',
  gal4: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80',
  gal5: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?auto=format&fit=crop&w=700&q=80',
  gal6: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=80',
  gal7: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=700&q=80',
  gal8: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=700&q=80',

  // ── Blog ──
  blog1: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=700&q=80',
  blog2: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80',
  blog3: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=700&q=80',
};

export const TRUST_STATS = [
  {
    value: '50,000',
    suffix: '+',
    label: 'Happy Guests',
    type: 'count',
  },
  {
    stars: '★★★★★',
    quote: '"An experience unparalleled in Patna. The service and ambiance are extraordinary."',
    author: '— Rohit Sharma, Google Review',
    type: 'testimonial',
  },
  {
    value: '4.8',
    label: 'Google Rating',
    sublabel: 'Based on 2,400+ reviews',
    type: 'rating',
  },
];

export const EXPERIENCES = [
  {
    title: 'Rooftop Dining',
    text: 'An open-air sanctuary above the city. Savour each bite as Patna\'s skyline becomes your canvas.',
    img: IMAGES.rooftopDining,
  },
  {
    title: 'Live Music',
    text: 'Hand-picked artists perform live every Friday and Saturday, setting the tone for an unforgettable evening.',
    img: IMAGES.liveMusic,
  },
  {
    title: 'Private Celebrations',
    text: 'Birthdays, anniversaries or corporate triumphs — our dedicated team crafts bespoke experiences for every occasion.',
    img: IMAGES.privateCelebration,
  },
];

export const SIGNATURE_DISHES = [
  {
    name: 'Smoked Himalayan Lamb',
    desc: 'Slow-roasted in tandoor spices, paired with a mint-coriander reduction and handcrafted saffron bread.',
    price: '₹2,400',
    img: IMAGES.lambChop,
  },
  {
    name: 'Saffron Sea Scallops',
    desc: 'Butter-seared Canadian scallops, saffron beurre blanc, and micro amaranth garnish.',
    price: '₹1,800',
    img: IMAGES.scallops,
  },
  {
    name: 'Truffle Forest Pasta',
    desc: 'House-made pappardelle with porcini cream, aged parmesan, and truffle shavings.',
    price: '₹1,450',
    img: IMAGES.risotto,
  },
  {
    name: 'Gilded Chocolate Fondant',
    desc: 'Molten 70% dark chocolate with salted caramel core and edible gold leaf.',
    price: '₹650',
    img: IMAGES.fondantChoc,
  },
];

export const MENU_SECTIONS = [
  {
    id: 'cocktails',
    label: 'Signature Cocktails',
    img: IMAGES.cocktail,
    imgAlt: 'Signature cocktail',
    items: [
      { name: 'Vrihi Sunset', desc: 'Saffron-infused gin, elderflower liqueur, sparkling rosé, and gold leaf garnish.', price: '₹950' },
      { name: 'Midnight Mist', desc: 'Smoked bourbon, activated charcoal, maple syrup, and orange zest expression.', price: '₹850' },
      { name: 'Skydeck Sour', desc: 'Japanese whisky, yuzu juice, honey water, and vegan foaming bitters.', price: '₹750' },
      { name: 'Patna Rose', desc: 'Rose-infused vodka, lychee, tamarind aperitif, sparkling water.', price: '₹800' },
    ],
  },
  {
    id: 'starters',
    label: 'Exotic Starters',
    img: IMAGES.starters,
    imgAlt: 'Exotic starters',
    items: [
      { name: 'Truffle Edamame Hummus', desc: 'Creamy edamame purée, white truffle oil, served with lotus stem chips.', price: '₹680' },
      { name: 'Spiced Atlantic Scallops', desc: 'Pan-seared scallops with cauliflower silk and curried raisin emulsion.', price: '₹1,200' },
      { name: 'Burrata & Heirloom Peach', desc: 'Creamy burrata, balsamic reduction, pistachios, and grilled summer peaches.', price: '₹860' },
      { name: 'Crispy Calamari Rings', desc: 'Tagarashi-spiced, served with a lime-wasabi aoli dipping sauce.', price: '₹750' },
    ],
  },
  {
    id: 'mains',
    label: 'Main Course',
    img: IMAGES.lambChop,
    imgAlt: 'Main course dishes',
    items: [
      { name: 'New Zealand Lamb Chops', desc: 'Herb-crusted lamb, mint pea purée, fondant potatoes, and a red wine jus.', price: '₹2,400' },
      { name: 'Chilean Sea Bass', desc: 'Miso-glazed sea bass, bok choy, ginger-soy broth, and jasmine rice crisps.', price: '₹2,800' },
      { name: 'Wild Mushroom Risotto', desc: 'Porcini and chanterelle mushrooms, aged parmesan, drizzle of truffle essence.', price: '₹1,450' },
      { name: 'Smoked Himalayan Lamb', desc: 'Slow-roasted in tandoor spices with saffron bread and mint-coriander reduction.', price: '₹2,600' },
    ],
  },
  {
    id: 'desserts',
    label: 'Artisanal Desserts',
    img: IMAGES.fondantChoc,
    imgAlt: 'Artisanal desserts',
    items: [
      { name: 'The Gilded Cacao', desc: '70% dark chocolate fondant, hot caramel pour, edible gold leaf.', price: '₹650' },
      { name: 'Yuzu Cheesecake', desc: 'Creamy Japanese yuzu curd, speculoos crust, and dehydrated raspberries.', price: '₹550' },
      { name: 'Skydeck Sorbet Trio', desc: 'Hibiscus, Mango-Chili, and Lychee-Rose house-made sorbets.', price: '₹450' },
      { name: 'Saffron Kheer Brûlée', desc: 'Traditional Indian kheer elevated with a caramelised brûlée crust.', price: '₹480' },
    ],
  },
];

export const EVENT_TYPES = [
  {
    name: 'Birthday Celebrations',
    desc: 'Personalised décor, curated multi-course menus, and a dedicated host to ensure your special day is spectacular.',
    img: IMAGES.birthday,
    features: ['Custom Floral Arrangements', 'Signature Welcome Cocktails', 'Personalised Cake Setup', 'Dedicated Event Manager'],
  },
  {
    name: 'Anniversaries',
    desc: 'Rediscover romance with a candlelit sanctuary above the city. Private corner booths and bespoke wine pairings.',
    img: IMAGES.anniversary,
    features: ['Private Corner Booths', 'Live String Musicians', 'Champagne Welcome', 'Personalised Menu Cards'],
  },
  {
    name: 'Corporate Parties',
    desc: 'Impress clients and celebrate team success with professional service and sophisticated AV capabilities.',
    img: IMAGES.corporate,
    features: ['Premium Bar Packages', 'Projector & Sound Setup', 'Branding Opportunities', 'Corporate Menu Pricing'],
  },
];

export const GALLERY_IMAGES = [
  { id: 1, src: IMAGES.gal1, alt: 'Rooftop dining setup at night', category: 'ambiance' },
  { id: 2, src: IMAGES.gal2, alt: 'Chef plating a dish', category: 'cuisine' },
  { id: 3, src: IMAGES.gal3, alt: 'Private event setup', category: 'events' },
  { id: 4, src: IMAGES.gal4, alt: 'Fine dining experience', category: 'ambiance' },
  { id: 5, src: IMAGES.gal5, alt: 'Live music evening', category: 'events' },
  { id: 6, src: IMAGES.gal6, alt: 'Wine glasses on rooftop', category: 'cuisine' },
  { id: 7, src: IMAGES.gal7, alt: 'Restaurant interior lighting', category: 'ambiance' },
  { id: 8, src: IMAGES.gal8, alt: 'Chef at work', category: 'cuisine' },
];

export const BLOG_POSTS = [
  {
    id: 1,
    date: 'March 28, 2025',
    title: 'Why Rooftop Dining is the Future of Fine Dining in India',
    excerpt: 'From Mumbai to Patna, elevated dining experiences are redefining India\'s culinary landscape. We explore why the sky is no longer the limit.',
    img: IMAGES.blog1,
    slug: '#',
  },
  {
    id: 2,
    date: 'February 14, 2025',
    title: 'Hosting the Perfect Anniversary Dinner: A Complete Guide',
    excerpt: 'Creating an unforgettable evening for your partner requires attention to detail, from venue selection to the final dessert course.',
    img: IMAGES.blog2,
    slug: '#',
  },
  {
    id: 3,
    date: 'January 10, 2025',
    title: 'Behind the Menu: The Story of Our Signature Saffron Sea Scallops',
    excerpt: 'Executive Chef Arjun Singh shares the inspiration and technique behind Vrihi-Skydeck\'s most celebrated dish.',
    img: IMAGES.blog3,
    slug: '#',
  },
];
