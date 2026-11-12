/**
 * Nolen Gur Co.'s demo catalog (lib/demo/catalog.js builds it). Slugs match
 * the template: patali-gur, jhola-gur, dana-gur, gift-boxes and the
 * this-week / nolen / pre-order tags.
 */
export default {
  about: 'Pure date-palm jaggery from Jessore\'s gachhis, made each winter.',
  colors: ['F5E1C8', 'FBEEDD', 'EED9BF', 'FAF3E8', 'E7E5E4'],
  ink: '4A2C1A',
  categories: [['Patali Gur', 'patali-gur'], ['Jhola Gur', 'jhola-gur'], ['Dana Gur', 'dana-gur'], ['Gift Boxes', 'gift-boxes'], ['Sweets', 'sweets']],
  tags: [['This Week', 'this-week'], ['Bestseller', 'bestseller'], ['Nolen', 'nolen'], ['Pre-order', 'pre-order']],
  brands: [['Nolen Gur Co.', 'nolen-gur-co'], ['Jessore Gachhi', 'jessore-gachhi']],
  options: {
    weight: ['Weight', [['500g', 0], ['1kg', 520]]],
  },
  products: [
    ['Nolen Patali Gur', 'patali-gur', 650, { brand: 'jessore-gachhi', tags: 'nolen bestseller this-week', vary: 'weight', featured: true }],
    ['Khejur Patali, Classic', 'patali-gur', 520, { sale: 480, brand: 'jessore-gachhi', tags: 'bestseller', vary: 'weight' }],
    ['Mini Patali Discs (20)', 'patali-gur', 590, { brand: 'nolen-gur-co', tags: 'this-week' }],
    ['Nolen Jhola Gur (Liquid) 500g', 'jhola-gur', 720, { brand: 'jessore-gachhi', tags: 'nolen pre-order' }],
    ['Jhola Gur Squeeze Bottle', 'jhola-gur', 450, { sale: 420, brand: 'nolen-gur-co', tags: 'bestseller' }],
    ['First Tap Jhola Gur', 'jhola-gur', 990, { brand: 'jessore-gachhi', tags: 'pre-order nolen', stock: 0 }],
    ['Dana Gur (Granular) 500g', 'dana-gur', 480, { brand: 'jessore-gachhi', tags: 'this-week', vary: 'weight' }],
    ['Dana Gur for Tea & Baking', 'dana-gur', 390, { brand: 'nolen-gur-co' }],
    ['Winter Gift Box', 'gift-boxes', 1890, { sale: 1690, brand: 'nolen-gur-co', tags: 'bestseller nolen' }],
    ['Gur Lover\'s Hamper', 'gift-boxes sweets', 2990, { brand: 'nolen-gur-co', tags: 'pre-order' }],
    ['Nolen Gur Sandesh (12)', 'sweets', 690, { brand: 'nolen-gur-co', tags: 'this-week nolen' }],
    ['Gur Payesh Mix', 'sweets', 350, { brand: 'nolen-gur-co' }],
  ],
  blogCategories: [['Stories', 'stories'], ['Recipes', 'recipes'], ['Season', 'season']],
  posts: [
    ['How Nolen Gur Is Made', 'stories', 'From the gachhi\'s night climb to the morning boil.'],
    ['Patali, Jhola or Dana: Which to Buy?', 'season', 'Three forms of the same winter treasure, and what each is for.'],
    ['Nolen Gur Payesh', 'recipes', 'The winter rice pudding every Bengali home waits for.'],
    ['Spotting Pure Gur', 'stories', 'Colour, smell and texture - how to tell it is the real thing.'],
  ],
};
