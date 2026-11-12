/**
 * Pauruti Bakery Market's demo catalog (lib/demo/catalog.js builds it).
 * Slugs match the template's categories and the tonight-deal / bestseller
 * tags.
 */
export default {
  about: 'Baked fresh every morning and delivered warm across Dhaka.',
  colors: ['F5E6D3', 'FDF0E1', 'FCE7D6', 'FAF3EA', 'FEF3C7'],
  ink: '3B2416',
  categories: [['Breads', 'breads'], ['Cakes', 'cakes'], ['Pastries', 'pastries'], ['Pitha', 'pitha'], ['Cookies', 'cookies'], ['Savoury', 'savoury'], ['Healthy', 'healthy'], ['Party Boxes', 'party-boxes']],
  tags: [['Tonight\'s Deal', 'tonight-deal'], ['Bestseller', 'bestseller'], ['Eggless', 'eggless']],
  brands: [['Pauruti', 'pauruti'], ['Pauruti Patisserie', 'pauruti-patisserie']],
  options: {
    cake: ['Size', [['1 lb', 0], ['2 lb', 650]]],
    flavour: ['Flavour', ['Chocolate', 'Vanilla', 'Red Velvet']],
  },
  products: [
    ['Butter Milk Bread', 'breads', 120, { brand: 'pauruti', tags: 'bestseller', featured: true }],
    ['Sourdough Country Loaf', 'breads healthy', 380, { brand: 'pauruti', tags: 'bestseller' }],
    ['Whole Wheat Sandwich Loaf', 'breads healthy', 160, { sale: 140, brand: 'pauruti', tags: 'tonight-deal' }],
    ['Classic Chocolate Cake', 'cakes', 850, { brand: 'pauruti-patisserie', tags: 'bestseller', vary: 'cake flavour' }],
    ['Red Velvet Cake', 'cakes', 950, { sale: 850, brand: 'pauruti-patisserie', tags: 'tonight-deal', vary: 'cake' }],
    ['Eggless Black Forest', 'cakes', 900, { brand: 'pauruti-patisserie', tags: 'eggless', vary: 'cake' }],
    ['Butter Croissant', 'pastries', 120, { brand: 'pauruti-patisserie', tags: 'bestseller' }],
    ['Chocolate Danish', 'pastries', 140, { sale: 110, brand: 'pauruti-patisserie', tags: 'tonight-deal' }],
    ['Bhapa Pitha (4 pcs)', 'pitha', 160, { brand: 'pauruti' }],
    ['Patishapta (4 pcs)', 'pitha', 200, { brand: 'pauruti', tags: 'bestseller' }],
    ['Chocolate Chip Cookies (250g)', 'cookies', 290, { brand: 'pauruti', tags: 'bestseller' }],
    ['Oat & Raisin Cookies', 'cookies healthy', 260, { brand: 'pauruti', tags: 'eggless' }],
    ['Chicken Patties', 'savoury', 90, { sale: 75, brand: 'pauruti', tags: 'tonight-deal' }],
    ['Vegetable Puff', 'savoury', 70, { brand: 'pauruti' }],
    ['Birthday Party Box (12)', 'party-boxes', 1490, { brand: 'pauruti', tags: 'bestseller' }],
    ['Office Snack Box (20)', 'party-boxes savoury', 1990, { brand: 'pauruti', stock: 0 }],
  ],
  blogCategories: [['From the Oven', 'from-the-oven'], ['Recipes', 'recipes'], ['News', 'news']],
  posts: [
    ['Why Our Sourdough Takes 36 Hours', 'from-the-oven', 'Slow fermentation, better flavour and an easier bread to digest.'],
    ['Ordering a Birthday Cake: A Quick Guide', 'news', 'Sizes, flavours and how far ahead to order.'],
    ['Winter Pitha Season Is Here', 'from-the-oven', 'Bhapa, patishapta and chitoi - fresh every morning.'],
    ['Keeping Bread Fresh at Home', 'recipes', 'Store, freeze and revive your loaf.'],
  ],
};
