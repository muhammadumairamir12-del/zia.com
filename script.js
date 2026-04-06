/* ================================================================
   SkyEagle Real Estate — Main JavaScript
   Lahore, Pakistan
   ================================================================ */

// ═══════════════ PROPERTY DATABASE ═══════════════
const PROPERTIES = [
  // HOUSES
  {
    id: 1, type: 'house', status: 'sale', title: 'Modern Villa in DHA Phase 6',
    price: 75000000, priceLabel: 'Rs 7.5 Crore', area: '1 Kanal', beds: 5, baths: 6, floors: 2,
    location: 'DHA Phase 6, Lahore', lat: 31.4697, lng: 74.4023,
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    imgs: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
      'https://images.unsplash.com/photo-1600573472551-4f88befc547b?w=800',
    ],
    badge: 'sale', featured: true, parking: 3, furnished: 'Semi-Furnished',
    agent: { name: 'Tariq Mehmood', role: 'Senior Agent', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200', phone: '03184195665' },
    desc: 'A magnificent modern villa in the heart of DHA Phase 6. This stunning 1-Kanal property boasts a grand entrance with double-height ceiling, Italian marble flooring throughout, a state-of-the-art gourmet kitchen, and a rooftop terrace with panoramic city views. The landscaped garden with a swimming pool makes it Lahore\'s premier luxury residence.',
    amenities: ['Swimming Pool', 'Rooftop Terrace', 'Home Theater', 'Smart Home System', 'Generator Backup', 'CCTV Security', 'Staff Quarters', 'BBQ Area'],
    year: 2022
  },
  {
    id: 2, type: 'house', status: 'sale', title: 'Elegant House in Bahria Town',
    price: 45000000, priceLabel: 'Rs 4.5 Crore', area: '10 Marla', beds: 4, baths: 4, floors: 2,
    location: 'Bahria Town, Sector E, Lahore', lat: 31.3866, lng: 74.2105,
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    imgs: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
    ],
    badge: 'sale', featured: false, parking: 2, furnished: 'Furnished',
    agent: { name: 'Sana Khalid', role: 'Property Consultant', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200', phone: '03188791637' },
    desc: 'Beautiful 10-Marla house in Bahria Town\'s prime Sector E. Fully furnished with modern interiors, wooden flooring in bedrooms, open-plan living area, a modular kitchen, and a lovely garden. Gated community with 24/7 security, parks, and all amenities nearby.',
    amenities: ['Gated Community', 'Park Facing', 'Generator', 'CCTV', 'Servant Quarter', 'Car Porch'],
    year: 2020
  },
  {
    id: 3, type: 'house', status: 'rent', title: 'Luxurious Bungalow in Gulberg III',
    price: 350000, priceLabel: 'Rs 3.5 Lac/month', area: '2 Kanal', beds: 6, baths: 7, floors: 2,
    location: 'Gulberg III, Lahore', lat: 31.5080, lng: 74.3464,
    img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800',
    imgs: ['https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800'],
    badge: 'rent', featured: true, parking: 4, furnished: 'Fully Furnished',
    agent: { name: 'Tariq Mehmood', role: 'Senior Agent', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200', phone: '03184195665' },
    desc: 'Grand 2-Kanal bungalow for rent in prestigious Gulberg III. Lavishly furnished with top-of-the-line fittings, multiple living areas, a formal dining hall, large terrace garden, private gym, and a fully equipped kitchen. Corporate & diplomatic community preferred.',
    amenities: ['Private Gym', 'Garden', 'Multiple Living Areas', 'Staff Quarters', 'Generator', 'Smart Home'],
    year: 2019
  },
  {
    id: 4, type: 'house', status: 'sale', title: 'Contemporary Home in Model Town',
    price: 38000000, priceLabel: 'Rs 3.8 Crore', area: '10 Marla', beds: 4, baths: 4, floors: 2,
    location: 'Model Town, Lahore', lat: 31.4923, lng: 74.3252,
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
    imgs: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800'],
    badge: 'new', featured: false, parking: 2, furnished: 'Un-Furnished',
    agent: { name: 'Usman Qureshi', role: 'Property Expert', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200', phone: '03184195665' },
    desc: 'Brand new contemporary house in the heart of Model Town. Double-height entrance foyer, open kitchen with island, underfloor heating, solar panels pre-installed, rainwater harvesting system, and energy-efficient design throughout.',
    amenities: ['Solar Panels', 'Underfloor Heating', 'Rain Harvesting', 'Car Porch', 'Garden'],
    year: 2024
  },
  // APARTMENTS
  {
    id: 5, type: 'apartment', status: 'sale', title: 'Penthouse Apartment — Gulberg Galleria',
    price: 35000000, priceLabel: 'Rs 3.5 Crore', area: '4,200 Sq.Ft', beds: 3, baths: 4, floors: 1,
    location: 'Gulberg Galleria, Lahore', lat: 31.5130, lng: 74.3560,
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
    imgs: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800'],
    badge: 'sale', featured: true, parking: 2, furnished: 'Fully Furnished',
    agent: { name: 'Sana Khalid', role: 'Property Consultant', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200', phone: '03188791637' },
    desc: 'Ultra-luxury penthouse apartment offering breathtaking panoramic views of Lahore. Private rooftop pool, chef\'s kitchen with imported appliances, 12-foot ceilings, floor-to-ceiling windows, and a private elevator. The ultimate urban lifestyle experience.',
    amenities: ['Private Rooftop Pool', 'Private Elevator', 'Concierge', 'Gym', 'Parking', '24/7 Security'],
    year: 2023
  },
  {
    id: 6, type: 'apartment', status: 'rent', title: '3-Bed Apartment — Emaar Canyon Views',
    price: 150000, priceLabel: 'Rs 1.5 Lac/month', area: '2,100 Sq.Ft', beds: 3, baths: 3, floors: 1,
    location: 'Emaar Canyon Views, DHA, Lahore', lat: 31.4600, lng: 74.3900,
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
    imgs: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'],
    badge: 'rent', featured: false, parking: 1, furnished: 'Semi-Furnished',
    agent: { name: 'Usman Qureshi', role: 'Property Expert', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200', phone: '03184195665' },
    desc: 'Spacious 3-bedroom apartment in the prestigious Emaar Canyon Views. Stunning golf course views, built-in wardrobe system, modern kitchen with granite countertops, large balcony, and access to a world-class amenities club.',
    amenities: ['Golf Course View', 'Swimming Pool', 'Gym', 'Kids Area', 'Concierge'],
    year: 2021
  },
  {
    id: 7, type: 'apartment', status: 'sale', title: 'Studio Apartment — Johar Town',
    price: 9500000, priceLabel: 'Rs 95 Lac', area: '650 Sq.Ft', beds: 1, baths: 1, floors: 1,
    location: 'Johar Town, Lahore', lat: 31.4697, lng: 74.2700,
    img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800',
    imgs: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800'],
    badge: 'new', featured: false, parking: 1, furnished: 'Fully Furnished',
    agent: { name: 'Sana Khalid', role: 'Property Consultant', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200', phone: '03188791637' },
    desc: 'Modern studio apartment ideal for young professionals and investors. Smart storage solutions, built-in kitchen, modern bathroom, dedicated parking, and access to communal gym and rooftop lounge.',
    amenities: ['Rooftop Lounge', 'Gym', 'Parking', 'Elevator', '24/7 Security'],
    year: 2023
  },
  // COMMERCIAL
  {
    id: 8, type: 'commercial', status: 'rent', title: 'Prime Office Space — MM Alam Road',
    price: 500000, priceLabel: 'Rs 5 Lac/month', area: '8,000 Sq.Ft', beds: 0, baths: 6, floors: 1,
    location: 'MM Alam Road, Gulberg, Lahore', lat: 31.5143, lng: 74.3459,
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    imgs: ['https://images.unsplash.com/photo-1497366216548-37526070297c?w=800'],
    badge: 'rent', featured: true, parking: 20, furnished: 'Shell & Core',
    agent: { name: 'Tariq Mehmood', role: 'Senior Agent', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200', phone: '03184195665' },
    desc: 'Premium grade-A office space on Lahore\'s most prestigious commercial street — MM Alam Road. Open floor plan, natural light from all sides, raised flooring for cable management, central air conditioning, backup generator, and VIP parking.',
    amenities: ['Grade-A Office', 'VIP Parking', 'Generator', 'Central AC', '24/7 Security', 'Reception Lobby'],
    year: 2018
  },
  {
    id: 9, type: 'commercial', status: 'sale', title: 'Retail Shop — Emporium Mall Area',
    price: 25000000, priceLabel: 'Rs 2.5 Crore', area: '1,200 Sq.Ft', beds: 0, baths: 2, floors: 1,
    location: 'Johar Town, near Emporium, Lahore', lat: 31.4700, lng: 74.2725,
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
    imgs: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800'],
    badge: 'sale', featured: false, parking: 5, furnished: 'Shell & Core',
    agent: { name: 'Usman Qureshi', role: 'Property Expert', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200', phone: '03184195665' },
    desc: 'Prime retail shop in the heart of Johar Town\'s most active commercial zone. Ground floor with double-height ceiling, floor-to-ceiling glass facade, extremely high footfall location, perfect for fashion brands, restaurants, or banking branches.',
    amenities: ['High Footfall', 'Glass Facade', 'Double Height', 'Parking', 'Corner Plot'],
    year: 2020
  },
  // PLOTS
  {
    id: 10, type: 'plot', status: 'sale', title: 'Residential Plot — DHA Phase 9 Prism',
    price: 55000000, priceLabel: 'Rs 5.5 Crore', area: '1 Kanal', beds: 0, baths: 0, floors: 0,
    location: 'DHA Phase 9 Prism, Lahore', lat: 31.3730, lng: 74.3040,
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
    imgs: ['https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800'],
    badge: 'sale', featured: false, parking: 0, furnished: 'Plot Only',
    agent: { name: 'Tariq Mehmood', role: 'Senior Agent', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200', phone: '03184195665' },
    desc: 'Prime 1-Kanal residential plot in DHA Phase 9 Prism — Lahore\'s fastest appreciating locality. Corner plot with extra-wide road, all utilities available, possession in hand, ideal for immediate construction or long-term investment.',
    amenities: ['Corner Plot', 'Possession Ready', 'Wide Road', 'All Utilities', 'Park Nearby'],
    year: 2023
  },
  {
    id: 11, type: 'plot', status: 'sale', title: 'Commercial Plot — Bahria Town',
    price: 18000000, priceLabel: 'Rs 1.8 Crore', area: '5 Marla', beds: 0, baths: 0, floors: 0,
    location: 'Bahria Town Commercial Zone, Lahore', lat: 31.3880, lng: 74.2120,
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800',
    imgs: ['https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800'],
    badge: 'sale', featured: false, parking: 0, furnished: 'Plot Only',
    agent: { name: 'Sana Khalid', role: 'Property Consultant', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200', phone: '03188791637' },
    desc: 'Valuable commercial plot in Bahria Town\'s dedicated commercial zone. Main road frontage, approved for up to 6 floors construction, excellent investment opportunity with rapidly growing community surrounding it.',
    amenities: ['Main Road', '6-Floor Allowed', 'Commercial Zone', 'Investment Grade'],
    year: 2022
  },
  // VILLA
  {
    id: 12, type: 'villa', status: 'sale', title: 'Luxury Villa — Wapda Town Extension',
    price: 62000000, priceLabel: 'Rs 6.2 Crore', area: '1 Kanal', beds: 5, baths: 6, floors: 2,
    location: 'Wapda Town Extension, Lahore', lat: 31.4500, lng: 74.2450,
    img: 'https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?w=800',
    imgs: ['https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?w=800'],
    badge: 'new', featured: true, parking: 3, furnished: 'Fully Furnished',
    agent: { name: 'Usman Qureshi', role: 'Property Expert', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200', phone: '03184195665' },
    desc: 'Spectacular newly-built luxury villa in Wapda Town Extension. Custom-designed interiors with premium German and Italian finishes, home automation system, large heated swimming pool, private cinema room, and a state-of-the-art security system.',
    amenities: ['Heated Pool', 'Home Cinema', 'Automation', 'Staff Quarters', 'Generator', 'Smart Security'],
    year: 2024
  },
];

const AGENTS = [
  { id: 1, name: 'Tariq Mehmood', role: 'Senior Property Consultant', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400', exp: '12 Years', deals: '340+', rating: '4.9', phone: '03184195665', wa: '03188791637', area: 'DHA · Gulberg · Model Town', bio: 'Pakistan\'s most awarded real estate consultant with over 12 years of experience in Lahore\'s premium markets.' },
  { id: 2, name: 'Sana Khalid', role: 'Residential Property Expert', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400', exp: '8 Years', deals: '210+', rating: '4.8', phone: '03188791637', wa: '03188791637', area: 'Bahria Town · Emaar · Defense', bio: 'Specialist in high-end residential properties and expatriate relocation services across Lahore.' },
  { id: 3, name: 'Usman Qureshi', role: 'Commercial Property Specialist', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400', exp: '10 Years', deals: '290+', rating: '4.9', phone: '03184195665', wa: '03188791637', area: 'Johar Town · MM Alam · LDA', bio: 'Expert in commercial real estate, retail spaces, office leasing, and investment portfolio management.' },
  { id: 4, name: 'Ayesha Mirza', role: 'Investment & Plot Consultant', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400', exp: '6 Years', deals: '165+', rating: '4.7', phone: '03184195665', wa: '03188791637', area: 'DHA Phase 9 · Bahria Orchard', bio: 'Dedicated to helping clients build wealth through strategic property investment in Lahore\'s emerging zones.' },
];

// ═══════════════ HERO SLIDES ═══════════════
const HERO_SLIDES = [
  { tag: 'Lahore\'s Premier Real Estate', title: 'Find Your Dream', em: 'Home in Lahore', sub: 'Premium properties in DHA, Bahria Town, Gulberg, and all of Lahore\'s finest addresses.', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400', b1: { t: 'Browse Properties', h: 'properties.html' }, b2: { t: 'Contact Us', h: 'contact.html' } },
  { tag: 'Exclusive Listings', title: 'Luxury Villas &', em: 'Prime Apartments', sub: 'Discover Lahore\'s most exclusive residences, from grand villas in DHA to elegant apartments in Gulberg.', img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1400', b1: { t: 'View Listings', h: 'properties.html' }, b2: { t: 'Our Agents', h: 'agents.html' } },
  { tag: 'Commercial Real Estate', title: 'Premium Office &', em: 'Retail Spaces', sub: 'Best commercial properties in MM Alam Road, Johar Town, and Bahria Town — for businesses that mean business.', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400', b1: { t: 'Commercial', h: 'commercial.html' }, b2: { t: 'Get Valuation', h: 'contact.html' } },
  { tag: 'Smart Investment', title: 'Invest in Lahore\'s', em: 'Best Plots', sub: 'DHA Phase 9, Bahria Orchard, and LDA Avenue — secure your land in the city\'s fastest-growing zones.', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400', b1: { t: 'Investment Plots', h: 'plots.html' }, b2: { t: 'Free Consultation', h: 'contact.html' } },
];

// ═══════════════ HERO SLIDER ═══════════════
let slideIdx = 0, slideTimer;
function initSlider() {
  const track = document.getElementById('hero-track');
  const dotsEl = document.getElementById('hero-dots');
  if (!track) return;
  HERO_SLIDES.forEach((s, i) => {
    const div = document.createElement('div');
    div.className = 'hero-slide';
    div.innerHTML = `<img src="${s.img}" alt="${s.em}" loading="${i === 0 ? 'eager' : 'lazy'}">
      <div class="hero-content">
        <div class="hero-eyebrow"><i class="fas fa-building"></i><span>${s.tag}</span></div>
        <h1 class="hero-title">${s.title}<em>${s.em}</em></h1>
        <p class="hero-subtitle">${s.sub}</p>
        <div class="hero-btns">
          <a href="${s.b1.h}" class="btn-primary"><i class="fas fa-search"></i> ${s.b1.t}</a>
          <a href="${s.b2.h}" class="btn-outline-white">${s.b2.t} <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>`;
    track.appendChild(div);
    const dot = document.createElement('button');
    dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goSlide(i);
    dotsEl?.appendChild(dot);
  });
  startSlider();
}
function goSlide(n) {
  slideIdx = (n + HERO_SLIDES.length) % HERO_SLIDES.length;
  const track = document.getElementById('hero-track');
  if (track) track.style.transform = `translateX(-${slideIdx * 100}%)`;
  document.querySelectorAll('.hero-dot').forEach((d, i) => d.classList.toggle('active', i === slideIdx));
}
function startSlider() { clearInterval(slideTimer); slideTimer = setInterval(() => goSlide(slideIdx + 1), 6000); }
function heroNav(d) { goSlide(slideIdx + d); startSlider(); }

// ═══════════════ RENDER PROPERTY CARD ═══════════════
function propCard(p) {
  const isPlot = p.type === 'plot' || p.type === 'commercial';
  return `<div class="property-card aos" data-id="${p.id}" data-type="${p.type}" data-status="${p.status}" data-price="${p.price}" onclick="openProperty(${p.id})" style="cursor:pointer">
    <div class="property-img">
      <img src="${p.img}" alt="${p.title}" loading="lazy">
      <div class="property-type-badge badge-${p.badge}">${p.badge === 'sale' ? 'For Sale' : p.badge === 'rent' ? 'For Rent' : p.badge === 'new' ? 'New' : 'Sold'}</div>
      ${p.featured ? '<div class="property-featured">Featured</div>' : ''}
      <button class="property-save" onclick="event.stopPropagation();this.classList.toggle('saved');showToast(this.classList.contains('saved')?'❤️ Saved to wishlist!':'Removed from wishlist')"><i class="fas fa-heart"></i></button>
    </div>
    <div class="property-info">
      <div class="property-price">${p.priceLabel} ${p.status === 'rent' ? '' : ''}</div>
      <div class="property-title">${p.title}</div>
      <div class="property-location"><i class="fas fa-map-marker-alt"></i> ${p.location}</div>
      ${!isPlot ? `<div class="property-features">
        <span class="prop-feat"><i class="fas fa-bed"></i> ${p.beds} Beds</span>
        <span class="prop-feat"><i class="fas fa-bath"></i> ${p.baths} Baths</span>
        <span class="prop-feat"><i class="fas fa-vector-square"></i> ${p.area}</span>
        ${p.parking ? `<span class="prop-feat"><i class="fas fa-car"></i> ${p.parking} Parking</span>` : ''}
      </div>` : `<div class="property-features"><span class="prop-feat"><i class="fas fa-vector-square"></i> ${p.area}</span><span class="prop-feat"><i class="fas fa-layer-group"></i> ${p.type.charAt(0).toUpperCase() + p.type.slice(1)}</span></div>`}
      <div class="property-footer">
        <div class="agent-mini">
          <img src="${p.agent.img}" alt="${p.agent.name}">
          <div class="agent-mini-name">${p.agent.name}</div>
        </div>
        <button class="prop-detail-btn" onclick="event.stopPropagation();openProperty(${p.id})">View Details</button>
      </div>
    </div>
  </div>`;
}

// ═══════════════ OPEN PROPERTY DETAIL ═══════════════
function openProperty(id) {
  localStorage.setItem('se_prop_id', id);
  window.location.href = 'property-detail.html';
}

// ═══════════════ FILTER & RENDER PROPERTIES ═══════════════
function filterAndRender(selector, opts = {}) {
  let { type, status, minP, maxP, sort } = opts;
  let list = [...PROPERTIES];
  if (type && type !== 'all') list = list.filter(p => p.type === type);
  if (status && status !== 'all') list = list.filter(p => p.status === status);
  if (minP) list = list.filter(p => p.price >= minP);
  if (maxP) list = list.filter(p => p.price <= maxP);
  if (sort === 'asc') list.sort((a, b) => a.price - b.price);
  if (sort === 'desc') list.sort((a, b) => b.price - a.price);
  if (sort === 'new') list.sort((a, b) => (b.year || 0) - (a.year || 0));
  const el = document.querySelector(selector);
  if (!el) return;
  el.innerHTML = list.length
    ? list.map(propCard).join('')
    : `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-light)"><i class="fas fa-search" style="font-size:3rem;margin-bottom:16px;display:block;color:var(--border2)"></i><h3 style="font-size:1.2rem;margin-bottom:8px;color:var(--text-mid)">No Properties Found</h3><p style="font-size:.9rem">Try adjusting your search filters</p><a href="properties.html" style="display:inline-block;margin-top:20px;padding:10px 24px;background:var(--rose);color:#fff;border-radius:8px;font-weight:600">View All Properties</a></div>`;
  initAOS();
}

// ═══════════════ HOMEPAGE RENDER ═══════════════
function renderHomeFeatured() {
  const el = document.getElementById('home-featured');
  if (!el) return;
  const feat = PROPERTIES.filter(p => p.featured).slice(0, 6);
  el.innerHTML = feat.map(propCard).join('');
  initAOS();
}

function renderHomeRecent() {
  const el = document.getElementById('home-recent');
  if (!el) return;
  const recent = [...PROPERTIES].sort((a, b) => (b.year || 0) - (a.year || 0)).slice(0, 6);
  el.innerHTML = recent.map(propCard).join('');
  initAOS();
}

function renderAgentCards(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.innerHTML = AGENTS.map(a => `<div class="agent-card aos">
    <div class="agent-img">
      <img src="${a.img}" alt="${a.name}">
      <div class="agent-overlay"></div>
      <div class="agent-socials">
        <a href="tel:${a.phone}" class="agent-social-btn"><i class="fas fa-phone"></i></a>
        <a href="https://wa.me/92${a.wa.slice(1)}" class="agent-social-btn" target="_blank"><i class="fab fa-whatsapp"></i></a>
        <a href="mailto:infoskyeagle12@gmail.com" class="agent-social-btn"><i class="fas fa-envelope"></i></a>
      </div>
    </div>
    <div class="agent-info">
      <div class="agent-name">${a.name}</div>
      <div class="agent-role">${a.role}</div>
      <div class="agent-stats">
        <div class="agent-stat"><span class="agent-stat-num">${a.deals}</span><span class="agent-stat-lbl">Deals</span></div>
        <div class="agent-stat"><span class="agent-stat-num">${a.exp}</span><span class="agent-stat-lbl">Experience</span></div>
        <div class="agent-stat"><span class="agent-stat-num">${a.rating}★</span><span class="agent-stat-lbl">Rating</span></div>
      </div>
      <div style="font-size:.78rem;color:var(--text-light);margin-bottom:14px"><i class="fas fa-map-marker-alt" style="color:var(--rose);margin-right:4px"></i>${a.area}</div>
      <div class="agent-contact">
        <a href="tel:${a.phone}" class="agent-btn agent-btn-call"><i class="fas fa-phone"></i> Call</a>
        <a href="https://wa.me/92${a.wa.slice(1)}" class="agent-btn agent-btn-wa" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp</a>
      </div>
    </div>
  </div>`).join('');
  initAOS();
}

// ═══════════════ PROPERTY DETAIL PAGE ═══════════════
function renderPropertyDetail() {
  const id = parseInt(localStorage.getItem('se_prop_id'));
  const p = PROPERTIES.find(x => x.id === id);
  const c = document.getElementById('prop-detail-container');
  if (!c || !p) {
    if (c) c.innerHTML = '<div style="text-align:center;padding:80px"><h2>Property not found</h2><a href="properties.html" style="color:var(--rose)">Back to Listings</a></div>';
    return;
  }
  document.title = p.title + ' — SkyEagle Real Estate';
  const isPlot = p.type === 'plot';

  c.innerHTML = `
    <div class="detail-layout">
      <div>
        <div class="detail-gallery">
          <div class="gallery-main-img"><img id="main-gallery-img" src="${p.img}" alt="${p.title}"></div>
          <div class="gallery-thumbs-row">
            ${(p.imgs || [p.img]).map((img, i) => `<div class="gallery-thumb ${i === 0 ? 'active' : ''}" onclick="swapImg(this,'${img}')"><img src="${img}" alt="View ${i+1}"></div>`).join('')}
          </div>
        </div>
        <div style="margin-top:35px">
          <h2 style="font-family:var(--font-display);font-size:1.5rem;font-weight:700;margin-bottom:18px;color:var(--text)">About this Property</h2>
          <p style="color:var(--text-mid);font-size:.92rem;line-height:1.85;font-weight:300">${p.desc}</p>
          ${!isPlot ? `<div class="detail-features-grid" style="margin-top:28px">
            <div class="detail-feat"><div class="detail-feat-label">Bedrooms</div><div class="detail-feat-value">${p.beds}</div></div>
            <div class="detail-feat"><div class="detail-feat-label">Bathrooms</div><div class="detail-feat-value">${p.baths}</div></div>
            <div class="detail-feat"><div class="detail-feat-label">Area</div><div class="detail-feat-value">${p.area}</div></div>
            <div class="detail-feat"><div class="detail-feat-label">Parking</div><div class="detail-feat-value">${p.parking} Space${p.parking > 1 ? 's' : ''}</div></div>
            <div class="detail-feat"><div class="detail-feat-label">Furnished</div><div class="detail-feat-value">${p.furnished}</div></div>
            <div class="detail-feat"><div class="detail-feat-label">Year Built</div><div class="detail-feat-value">${p.year}</div></div>
          </div>` : `<div class="detail-features-grid" style="margin-top:28px">
            <div class="detail-feat"><div class="detail-feat-label">Plot Size</div><div class="detail-feat-value">${p.area}</div></div>
            <div class="detail-feat"><div class="detail-feat-label">Type</div><div class="detail-feat-value">${p.type.charAt(0).toUpperCase() + p.type.slice(1)}</div></div>
          </div>`}
          <div style="margin-top:28px">
            <h3 style="font-weight:700;font-size:1rem;margin-bottom:16px;color:var(--text)">Amenities & Features</h3>
            <div style="display:flex;flex-wrap:wrap;gap:10px">
              ${p.amenities.map(a => `<span style="background:var(--blue-pale);border:1.5px solid var(--blue-soft);color:var(--blue);padding:6px 16px;border-radius:50px;font-size:.8rem;font-weight:600"><i class="fas fa-check" style="margin-right:5px;font-size:.65rem"></i>${a}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
      <div class="detail-sidebar">
        <div class="detail-price-card">
          <div class="detail-price-label">${p.status === 'sale' ? 'Sale Price' : 'Monthly Rent'}</div>
          <div class="detail-price-main">${p.priceLabel}</div>
          <div style="margin:14px 0;padding:14px 0;border-top:1px solid var(--border);border-bottom:1px solid var(--border)">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
              <img src="${p.agent.img}" alt="${p.agent.name}" style="width:44px;height:44px;border-radius:50%;object-fit:cover;border:2px solid var(--rose-soft)">
              <div><div style="font-weight:700;font-size:.92rem;color:var(--text)">${p.agent.name}</div><div style="font-size:.72rem;color:var(--rose);font-weight:600;text-transform:uppercase;letter-spacing:1px">${p.agent.role}</div></div>
            </div>
          </div>
          <div class="detail-contact-btns">
            <a href="tel:${p.agent.phone}" class="btn-blue"><i class="fas fa-phone"></i> Call Agent: ${p.agent.phone}</a>
            <a href="https://wa.me/9203188791637" class="btn-wa" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp Us</a>
            <a href="contact.html" class="btn-primary" style="background:linear-gradient(135deg,var(--rose),var(--rose-mid))"><i class="fas fa-envelope"></i> Enquire Now</a>
          </div>
        </div>
        <div style="background:var(--blue-pale);border:1.5px solid var(--blue-soft);border-radius:var(--radius-lg);padding:22px">
          <div style="font-weight:700;font-size:.9rem;color:var(--blue);margin-bottom:14px"><i class="fas fa-map-marker-alt" style="color:var(--rose);margin-right:6px"></i>Location</div>
          <p style="font-size:.87rem;color:var(--text-mid);margin-bottom:14px">${p.location}</p>
          <div style="background:var(--border);border-radius:10px;height:160px;display:flex;align-items:center;justify-content:center;color:var(--text-light);font-size:.85rem"><i class="fas fa-map" style="font-size:2rem;display:block;margin-bottom:8px;color:var(--blue-light)"></i></div>
        </div>
      </div>
    </div>`;
  initAOS();
}

function swapImg(thumb, src) {
  const main = document.getElementById('main-gallery-img');
  if (main) main.src = src;
  document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

// ═══════════════ SHOP FILTERS ═══════════════
function initFilters(gridId) {
  const applyBtn = document.getElementById('apply-filter');
  const chips = document.querySelectorAll('.chip');
  const getOpts = () => ({
    type: document.getElementById('type-filter')?.value || 'all',
    status: document.getElementById('status-filter')?.value || 'all',
    minP: parseInt(document.getElementById('min-filter')?.value) || null,
    maxP: parseInt(document.getElementById('max-filter')?.value) || null,
    sort: document.getElementById('sort-filter')?.value || ''
  });
  const run = () => {
    const opts = getOpts();
    if (opts.type === 'all') opts.type = null;
    if (opts.status === 'all') opts.status = null;
    filterAndRender('#' + gridId, opts);
  };
  if (applyBtn) applyBtn.onclick = run;
  chips.forEach(chip => {
    chip.onclick = () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const v = chip.dataset.filter;
      if (v === 'all' || !v) {
        const t = document.getElementById('type-filter'), s = document.getElementById('status-filter');
        if (t) t.value = 'all';
        if (s) s.value = 'all';
      } else if (['house','apartment','commercial','plot','villa'].includes(v)) {
        const t = document.getElementById('type-filter');
        if (t) t.value = v;
      } else if (['sale','rent'].includes(v)) {
        const s = document.getElementById('status-filter');
        if (s) s.value = v;
      }
      run();
    };
  });
  run();
}

// ═══════════════ HERO SEARCH ═══════════════
function heroSearch(e) {
  e.preventDefault();
  const type = document.getElementById('hs-type')?.value || 'all';
  const loc = document.getElementById('hs-loc')?.value || '';
  const min = document.getElementById('hs-min')?.value || '';
  const max = document.getElementById('hs-max')?.value || '';
  window.location.href = `properties.html?type=${type}&loc=${loc}&min=${min}&max=${max}`;
}

// ═══════════════ COUNTERS ANIMATION ═══════════════
function animateCounters() {
  document.querySelectorAll('[data-counter]').forEach(el => {
    const target = parseInt(el.dataset.counter);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current).toLocaleString() + suffix;
      if (current >= target) clearInterval(timer);
    }, 20);
  });
}

// ═══════════════ TOAST ═══════════════
function showToast(html, dur = 3000) {
  let box = document.querySelector('.toast-container');
  if (!box) { box = document.createElement('div'); box.className = 'toast-container'; document.body.appendChild(box); }
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `<span class="toast-icon"><i class="fas fa-check-circle"></i></span><span class="toast-msg">${html}</span><button class="toast-close" onclick="this.parentElement.remove()"><i class="fas fa-times"></i></button>`;
  box.appendChild(t);
  requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('show')));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, dur);
}

// ═══════════════ AOS ═══════════════
function initAOS() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.07 });
  document.querySelectorAll('.aos,.aos-left,.aos-right').forEach(el => { if (!el.classList.contains('visible')) obs.observe(el); });
}

// ═══════════════ NAVBAR ═══════════════
function initNavbar() {
  const nav = document.querySelector('.navbar');
  const prog = document.getElementById('scroll-progress');
  const st = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => {
    nav?.classList.toggle('scrolled', window.scrollY > 60);
    if (prog) prog.style.width = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100) + '%';
    if (st) st.classList.toggle('show', window.scrollY > 450);
  }, { passive: true });
}

// ═══════════════ MOBILE MENU ═══════════════
function toggleMenu() {
  const m = document.getElementById('mobile-nav');
  const b = document.getElementById('hamburger');
  if (!m) return;
  m.classList.toggle('open');
  const spans = b?.querySelectorAll('span') || [];
  if (m.classList.contains('open')) {
    spans[0] && (spans[0].style.transform = 'rotate(45deg) translateY(7px)');
    spans[1] && (spans[1].style.opacity = '0');
    spans[2] && (spans[2].style.transform = 'rotate(-45deg) translateY(-7px)');
  } else spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
}

// ═══════════════ LOADER ═══════════════
function initLoader() {
  const l = document.getElementById('loader');
  if (!l) return;
  window.addEventListener('load', () => setTimeout(() => l.classList.add('hidden'), 2000));
}

// ═══════════════ FORMS ═══════════════
function submitContact(e) { e.preventDefault(); showToast('✅ Message sent! Our agent will contact you within 1 hour.'); e.target.reset(); }
function submitSearch(e) { e.preventDefault(); const q = e.target.querySelector('input')?.value; window.location.href = `properties.html?q=${encodeURIComponent(q || '')}`; }

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  initLoader(); initNavbar(); initAOS();
  const st = document.getElementById('scroll-top');
  if (st) st.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const page = document.body.dataset.page;
  if (page === 'home') { initSlider(); renderHomeFeatured(); renderHomeRecent(); renderAgentCards('#home-agents'); }
  if (page === 'properties') initFilters('props-grid');
  if (page === 'agents') renderAgentCards('#all-agents');
  if (page === 'property-detail') renderPropertyDetail();

  // Stats counter trigger
  const statsEl = document.querySelector('.stats-bar');
  if (statsEl) {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { animateCounters(); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(statsEl);
  }
});

// URL param filter on properties page
window.addEventListener('load', () => {
  if (document.body.dataset.page === 'properties') {
    const params = new URLSearchParams(window.location.search);
    const type = params.get('type');
    const status = params.get('status');
    if (type && document.getElementById('type-filter')) document.getElementById('type-filter').value = type;
    if (status && document.getElementById('status-filter')) document.getElementById('status-filter').value = status;
  }
});
