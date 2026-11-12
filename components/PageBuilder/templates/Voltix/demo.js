/**
 * Voltix's demo catalog (lib/demo/catalog.js builds it). Slugs match the
 * template's sliders: smartphones, audio, wearables, accessories, gaming.
 */
export default {
  about: 'Genuine gadgets, fast delivery and a 1-year warranty.',
  colors: ['DBEAFE', 'E0F2FE', 'E0E7FF', 'F1F5F9', 'CCFBF1'],
  ink: '1E3A8A',
  categories: [['Smartphones', 'smartphones'], ['Audio', 'audio'], ['Wearables', 'wearables'], ['Accessories', 'accessories'], ['Gaming', 'gaming']],
  tags: [['Deals', 'deals'], ['New', 'new'], ['Bestseller', 'bestseller']],
  brands: [['Samsung', 'samsung'], ['Xiaomi', 'xiaomi'], ['JBL', 'jbl'], ['Anker', 'anker'], ['Amazfit', 'amazfit'], ['Sony', 'sony']],
  options: {
    color: ['Colour', ['Black', 'White', 'Blue']],
    storage: ['Storage', [['128GB', 0], ['256GB', 5000]]],
  },
  products: [
    ['Galaxy A35 5G', 'smartphones', 39999, { sale: 36999, brand: 'samsung', tags: 'deals', vary: 'storage', featured: true }],
    ['Redmi Note 13 5G', 'smartphones', 29999, { brand: 'xiaomi', tags: 'bestseller', vary: 'storage' }],
    ['Poco X6 Pro', 'smartphones', 38999, { sale: 35999, brand: 'xiaomi', tags: 'deals new' }],
    ['Galaxy S23 FE', 'smartphones', 64999, { brand: 'samsung', tags: 'new' }],
    ['JBL Tune 520BT Headphones', 'audio', 5990, { sale: 4790, brand: 'jbl', tags: 'deals bestseller', vary: 'color' }],
    ['Sony WH-CH720N ANC Headphones', 'audio', 14990, { brand: 'sony', tags: 'new', vary: 'color' }],
    ['JBL Flip 6 Speaker', 'audio', 13990, { sale: 11990, brand: 'jbl', tags: 'deals' }],
    ['Soundcore Life P3 Earbuds', 'audio', 7490, { brand: 'anker', tags: 'bestseller' }],
    ['Amazfit GTS 4 Mini', 'wearables', 9990, { sale: 8490, brand: 'amazfit', tags: 'deals', vary: 'color' }],
    ['Galaxy Watch6 40mm', 'wearables', 29990, { brand: 'samsung', tags: 'new' }],
    ['Xiaomi Smart Band 8', 'wearables', 4290, { brand: 'xiaomi', tags: 'bestseller' }],
    ['Anker 65W GaN Charger', 'accessories', 4990, { sale: 3990, brand: 'anker', tags: 'deals' }],
    ['Anker 10000mAh Power Bank', 'accessories', 2990, { brand: 'anker', tags: 'bestseller' }],
    ['Braided USB-C Cable 2m', 'accessories', 790, { brand: 'anker' }],
    ['Wireless Gaming Controller', 'gaming', 4490, { sale: 3790, brand: 'xiaomi', tags: 'deals', vary: 'color' }],
    ['RGB Gaming Headset', 'gaming audio', 3990, { brand: 'jbl', tags: 'new' }],
    ['Phone Cooling Fan', 'gaming accessories', 1890, { brand: 'xiaomi', stock: 0 }],
  ],
  blogCategories: [['Guides', 'guides'], ['Reviews', 'reviews'], ['News', 'news']],
  posts: [
    ['Best Earbuds Under ৳8,000', 'guides', 'Five pairs that sound great, fit well and last all day.'],
    ['GaN Chargers Explained', 'guides', 'Why the tiny new chargers are faster, cooler and worth the switch.'],
    ['Galaxy Watch6 Review', 'reviews', 'Sleep tracking, battery and the new bezel - a week on the wrist.'],
    ['Voltix Now Delivers Same Day in Dhaka', 'news', 'Order before 2pm and get your gadget the same evening.'],
  ],
};
