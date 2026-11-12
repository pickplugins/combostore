/**
 * Ashbab Furniture Market's demo catalog (lib/demo/catalog.js builds it).
 * Slugs match the template's rooms and the material / deal tags.
 */
export default {
  about: 'Solid-wood and modern furniture with free delivery and assembly in Dhaka.',
  colors: ['E0E7EF', 'F1F5F9', 'EDE7DD', 'E2E8F0', 'F5EFE6'],
  ink: '1B2B4B',
  categories: [['Living Room', 'living-room'], ['Bedroom', 'bedroom'], ['Office', 'office'], ['Decor', 'decor'], ['Dining', 'dining'], ['Kids Room', 'kids-room'], ['Outdoor', 'outdoor'], ['Lighting', 'lighting']],
  tags: [['Deal of the Week', 'deal-of-the-week'], ['Bestseller', 'bestseller'], ['Teak', 'teak'], ['Mahogany', 'mahogany'], ['Gamari', 'gamari'], ['Engineered Wood', 'engineered-wood'], ['Metal', 'metal'], ['Cane', 'cane']],
  brands: [['Ashbab', 'ashbab'], ['Hatil Style', 'hatil-style'], ['Otobi Line', 'otobi-line'], ['CaneCraft', 'canecraft']],
  options: {
    finish: ['Finish', ['Natural', 'Walnut', 'Espresso']],
    size: ['Size', [['Single', 0], ['Double', 9000], ['King', 16000]]],
  },
  products: [
    ['3-Seater Teak Sofa', 'living-room', 68000, { sale: 59900, brand: 'ashbab', tags: 'deal-of-the-week teak bestseller', vary: 'finish', featured: true }],
    ['Mahogany Coffee Table', 'living-room', 18500, { brand: 'hatil-style', tags: 'mahogany' }],
    ['TV Cabinet, Engineered Wood', 'living-room', 15900, { sale: 13900, brand: 'otobi-line', tags: 'engineered-wood' }],
    ['Gamari Wood Bed', 'bedroom', 42000, { brand: 'ashbab', tags: 'gamari bestseller', vary: 'size' }],
    ['Teak Wardrobe, 3 Door', 'bedroom', 64900, { brand: 'ashbab', tags: 'teak' }],
    ['Bedside Table Pair', 'bedroom', 9800, { sale: 8500, brand: 'otobi-line', tags: 'deal-of-the-week engineered-wood' }],
    ['Ergonomic Office Chair', 'office', 14500, { brand: 'otobi-line', tags: 'metal bestseller' }],
    ['Executive Desk, Walnut', 'office', 29900, { brand: 'hatil-style', tags: 'mahogany', vary: 'finish' }],
    ['6-Seater Dining Set', 'dining', 78000, { sale: 69900, brand: 'ashbab', tags: 'teak deal-of-the-week' }],
    ['Cane Dining Chairs (Pair)', 'dining', 12500, { brand: 'canecraft', tags: 'cane' }],
    ['Kids Study Table', 'kids-room', 8900, { brand: 'otobi-line', tags: 'engineered-wood' }],
    ['Bunk Bed with Storage', 'kids-room bedroom', 38500, { brand: 'hatil-style', tags: 'gamari', stock: 0 }],
    ['Cane Swing Chair', 'outdoor', 16900, { brand: 'canecraft', tags: 'cane bestseller' }],
    ['Metal Balcony Set', 'outdoor', 11900, { sale: 9900, brand: 'otobi-line', tags: 'metal' }],
    ['Brass Floor Lamp', 'lighting decor', 7900, { brand: 'hatil-style', tags: 'metal' }],
    ['Cane Pendant Light', 'lighting', 4500, { brand: 'canecraft', tags: 'cane' }],
    ['Jute Area Rug 5x7', 'decor', 5900, { brand: 'ashbab', tags: 'bestseller' }],
    ['Wall Mirror, Teak Frame', 'decor', 6500, { brand: 'ashbab', tags: 'teak' }],
  ],
  blogCategories: [['Room Ideas', 'room-ideas'], ['Wood Guide', 'wood-guide'], ['Care', 'care']],
  posts: [
    ['Teak, Mahogany or Gamari?', 'wood-guide', 'How the three woods differ in look, strength and price.'],
    ['Making a Small Living Room Feel Bigger', 'room-ideas', 'Layout, colour and furniture tricks that open up the space.'],
    ['Caring for Solid Wood Furniture', 'care', 'Polish, protect and keep it looking new for years.'],
    ['Planning a Kids Room That Grows', 'room-ideas', 'Pieces that work from toddler to teen.'],
  ],
};
