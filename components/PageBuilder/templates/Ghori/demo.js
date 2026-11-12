/**
 * Ghori Fine Watches' demo catalog (lib/demo/catalog.js builds it). Slugs
 * match the template: men, women, smartwatches, pair-watches and the
 * movement / style tags.
 */
export default {
  about: 'Authentic watches with official warranty and free servicing.',
  colors: ['F5EBDD', 'EDE7DD', 'F3F4F6', 'E7E5E4', 'FAF5EE'],
  ink: '2B2112',
  categories: [['Men', 'men'], ['Women', 'women'], ['Smartwatches', 'smartwatches'], ['Pair Watches', 'pair-watches']],
  tags: [['Bestseller', 'bestseller'], ['Gift', 'gift'], ['Sale', 'sale'], ['Automatic', 'automatic'], ['Quartz', 'quartz'], ['Chronograph', 'chronograph'], ['Smartwatch', 'smartwatch'], ['Solar', 'solar'], ['Diver', 'diver']],
  brands: [['Seiko', 'seiko'], ['Casio', 'casio'], ['Citizen', 'citizen'], ['Tissot', 'tissot'], ['Fossil', 'fossil'], ['Amazfit', 'amazfit']],
  options: {
    strap: ['Strap', [['Leather', 0], ['Steel Bracelet', 1500]]],
    color: ['Dial', ['Black', 'Blue', 'Silver']],
  },
  products: [
    ['Seiko 5 Sports Automatic', 'men', 32500, { sale: 29900, brand: 'seiko', tags: 'bestseller automatic', vary: 'color', featured: true }],
    ['Seiko Prospex Diver 200m', 'men', 68500, { brand: 'seiko', tags: 'automatic diver' }],
    ['Citizen Eco-Drive Chronograph', 'men', 38900, { sale: 34900, brand: 'citizen', tags: 'solar chronograph sale', vary: 'strap' }],
    ['Tissot PRX Quartz 40mm', 'men', 52900, { brand: 'tissot', tags: 'quartz bestseller', vary: 'color' }],
    ['Casio Edifice Chronograph', 'men', 14900, { sale: 12900, brand: 'casio', tags: 'quartz chronograph sale' }],
    ['Casio G-Shock GA-2100', 'men', 13500, { brand: 'casio', tags: 'quartz diver bestseller' }],
    ['Tissot Lovely Square', 'women', 28900, { brand: 'tissot', tags: 'quartz gift' }],
    ['Citizen Eco-Drive Rose Gold', 'women', 26500, { brand: 'citizen', tags: 'solar gift', vary: 'strap' }],
    ['Fossil Carlie Mini', 'women', 14900, { sale: 12500, brand: 'fossil', tags: 'quartz sale' }],
    ['Seiko Presage Ladies Automatic', 'women', 45900, { brand: 'seiko', tags: 'automatic', stock: 0 }],
    ['Amazfit Balance', 'smartwatches', 24900, { brand: 'amazfit', tags: 'smartwatch' }],
    ['Fossil Gen 6 Hybrid', 'smartwatches', 27900, { sale: 23900, brand: 'fossil', tags: 'smartwatch sale' }],
    ['Casio G-Shock Move', 'smartwatches men', 19900, { brand: 'casio', tags: 'smartwatch' }],
    ['Fossil His & Hers Gift Set', 'pair-watches', 29900, { sale: 26900, brand: 'fossil', tags: 'gift bestseller quartz' }],
    ['Citizen Eco-Drive Pair Set', 'pair-watches', 49900, { brand: 'citizen', tags: 'gift solar' }],
  ],
  blogCategories: [['Watch Guides', 'watch-guides'], ['Care', 'care'], ['News', 'news']],
  posts: [
    ['Automatic vs Quartz: Which Is for You?', 'watch-guides', 'How each movement works, and what that means day to day.'],
    ['Picking a Watch for Your Wrist Size', 'watch-guides', 'Case size, lug width and strap - a quick guide.'],
    ['Servicing an Automatic Watch', 'care', 'How often, what it costs and why it matters.'],
    ['Five Gift Watches Under ৳30,000', 'news', 'Timeless picks for birthdays and anniversaries.'],
  ],
};
