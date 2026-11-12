/**
 * Dutipata Tea's demo catalog (lib/demo/catalog.js builds it). Slugs match
 * the template's tea categories and the new-flush / bestseller tags.
 */
export default {
  about: 'Garden-fresh tea from Sylhet and beyond, packed at source.',
  colors: ['DCFCE7', 'ECFDF5', 'F0FDF4', 'FEF9C3', 'E7E5E4'],
  ink: '1F3D2B',
  categories: [['Black Tea', 'black-tea'], ['Green Tea', 'green-tea'], ['White Tea', 'white-tea'], ['Oolong', 'oolong'], ['Masala Chai', 'masala-chai'], ['Herbal', 'herbal'], ['Teaware', 'teaware'], ['Gift Tins', 'gift-tins']],
  tags: [['New Flush', 'new-flush'], ['Bestseller', 'bestseller'], ['Organic', 'organic']],
  brands: [['Dutipata Estates', 'dutipata-estates'], ['Malnicherra', 'malnicherra'], ['Sreemangal Gardens', 'sreemangal-gardens']],
  options: {
    weight: ['Weight', [['100g', 0], ['250g', 380]]],
  },
  products: [
    ['Sylhet Golden Tips', 'black-tea', 690, { brand: 'malnicherra', tags: 'new-flush bestseller', vary: 'weight', featured: true }],
    ['Sreemangal Breakfast Tea', 'black-tea', 420, { sale: 380, brand: 'sreemangal-gardens', tags: 'bestseller', vary: 'weight' }],
    ['Second Flush Muscatel', 'black-tea', 850, { brand: 'dutipata-estates', tags: 'new-flush' }],
    ['Organic Green Tea', 'green-tea', 520, { brand: 'dutipata-estates', tags: 'organic bestseller', vary: 'weight' }],
    ['Jasmine Green Pearls', 'green-tea', 790, { brand: 'dutipata-estates' }],
    ['Silver Needle White Tea', 'white-tea', 1450, { brand: 'malnicherra', tags: 'new-flush' }],
    ['White Peony', 'white-tea', 990, { sale: 890, brand: 'malnicherra' }],
    ['Milky Oolong', 'oolong', 1190, { brand: 'dutipata-estates' }],
    ['Roasted Oolong', 'oolong', 1090, { brand: 'dutipata-estates', stock: 0 }],
    ['Classic Masala Chai', 'masala-chai', 480, { sale: 420, brand: 'sreemangal-gardens', tags: 'bestseller' }],
    ['Ginger Cardamom Chai', 'masala-chai', 520, { brand: 'sreemangal-gardens' }],
    ['Tulsi & Lemongrass', 'herbal', 450, { brand: 'dutipata-estates', tags: 'organic' }],
    ['Chamomile Calm', 'herbal', 490, { brand: 'dutipata-estates' }],
    ['Glass Teapot with Infuser', 'teaware', 1690, { brand: 'dutipata-estates' }],
    ['Clay Cup Set (4)', 'teaware', 790, { brand: 'dutipata-estates', tags: 'bestseller' }],
    ['Estate Gift Tin Trio', 'gift-tins', 1890, { sale: 1690, brand: 'dutipata-estates', tags: 'bestseller' }],
    ['First Flush Gift Tin', 'gift-tins black-tea', 1290, { brand: 'malnicherra', tags: 'new-flush' }],
  ],
  blogCategories: [['Tea Guides', 'tea-guides'], ['From the Garden', 'from-the-garden'], ['Recipes', 'recipes']],
  posts: [
    ['How to Brew the Perfect Cup of Black Tea', 'tea-guides', 'Water temperature, timing and how much leaf to use.'],
    ['What Is a First Flush?', 'from-the-garden', 'The spring pluck that tea lovers wait all year for.'],
    ['Masala Chai From Scratch', 'recipes', 'Spice, simmer and strain - the Dhaka street-stall way.'],
    ['A Morning in Malnicherra', 'from-the-garden', 'Walking the oldest tea garden in the subcontinent.'],
  ],
};
