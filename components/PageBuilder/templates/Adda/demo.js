/**
 * Adda Coffee's demo catalog (lib/demo/catalog.js builds it). Slugs match
 * the template's categories and the roast-level tags.
 */
export default {
  about: 'Small-batch coffee roasted fresh every week in Dhaka.',
  colors: ['EFE4D8', 'F5EDE3', 'E7DCCF', 'FAF3EA', 'E7E5E4'],
  ink: '2A1810',
  categories: [['Single Origin', 'single-origin'], ['Espresso Blends', 'espresso-blends'], ['Brewing Gear', 'brewing-gear'], ['Gift Sets', 'gift-sets'], ['Filter Coffee', 'filter-coffee'], ['Cold Brew', 'cold-brew'], ['Decaf', 'decaf'], ['Mugs & Merch', 'mugs-merch']],
  tags: [['Fresh Roast', 'fresh-roast'], ['Bestseller', 'bestseller'], ['Light Roast', 'light-roast'], ['Medium-Light Roast', 'medium-light-roast'], ['Medium Roast', 'medium-roast'], ['Medium-Dark Roast', 'medium-dark-roast'], ['Dark Roast', 'dark-roast']],
  brands: [['Adda Roasters', 'adda-roasters'], ['Hario', 'hario'], ['AeroPress', 'aeropress']],
  options: {
    grind: ['Grind', ['Whole Bean', 'Espresso', 'Filter', 'French Press']],
    weight: ['Weight', [['250g', 0], ['500g', 850]]],
  },
  products: [
    ['Ethiopia Yirgacheffe', 'single-origin filter-coffee', 1250, { brand: 'adda-roasters', tags: 'fresh-roast light-roast bestseller', vary: 'grind weight', featured: true }],
    ['Colombia Huila', 'single-origin', 1150, { sale: 990, brand: 'adda-roasters', tags: 'medium-roast fresh-roast', vary: 'grind' }],
    ['Kenya AA Nyeri', 'single-origin filter-coffee', 1390, { brand: 'adda-roasters', tags: 'medium-light-roast', vary: 'grind' }],
    ['Bandarban Hill Coffee', 'single-origin', 1450, { brand: 'adda-roasters', tags: 'medium-roast bestseller' }],
    ['House Espresso Blend', 'espresso-blends', 1050, { sale: 950, brand: 'adda-roasters', tags: 'bestseller medium-dark-roast', vary: 'grind weight' }],
    ['Dark Night Espresso', 'espresso-blends', 990, { brand: 'adda-roasters', tags: 'dark-roast' }],
    ['Breakfast Filter Blend', 'filter-coffee', 890, { brand: 'adda-roasters', tags: 'medium-roast fresh-roast', vary: 'grind' }],
    ['Cold Brew Bags (6 pack)', 'cold-brew', 790, { brand: 'adda-roasters', tags: 'medium-dark-roast bestseller' }],
    ['Cold Brew Concentrate 500ml', 'cold-brew', 650, { brand: 'adda-roasters', tags: 'dark-roast' }],
    ['Swiss Water Decaf', 'decaf', 1190, { brand: 'adda-roasters', tags: 'medium-roast' }],
    ['Hario V60 Dripper', 'brewing-gear', 1890, { brand: 'hario', tags: 'bestseller' }],
    ['AeroPress Original', 'brewing-gear', 4490, { sale: 3990, brand: 'aeropress' }],
    ['Hand Grinder Ceramic Burr', 'brewing-gear', 3290, { brand: 'hario', stock: 0 }],
    ['Brew Starter Gift Box', 'gift-sets brewing-gear', 3990, { sale: 3490, brand: 'adda-roasters', tags: 'bestseller' }],
    ['Origins Tasting Set (3 x 100g)', 'gift-sets single-origin', 1590, { brand: 'adda-roasters', tags: 'fresh-roast' }],
    ['Adda Enamel Mug', 'mugs-merch', 690, { brand: 'adda-roasters' }],
    ['Canvas Tote, Adda Logo', 'mugs-merch', 590, { brand: 'adda-roasters' }],
  ],
  blogCategories: [['Brew Guides', 'brew-guides'], ['Origins', 'origins'], ['News', 'news']],
  posts: [
    ['How to Brew a Great V60', 'brew-guides', 'Ratio, grind and pour - a simple recipe for a clean cup.'],
    ['Light vs Dark Roast, Explained', 'origins', 'What roast level does to flavour, body and caffeine.'],
    ['Cold Brew at Home in 12 Hours', 'brew-guides', 'Smooth iced coffee with no special equipment.'],
    ['Meet Our Bandarban Growers', 'origins', 'Coffee from the hills of Bangladesh, from cherry to cup.'],
  ],
};
