/**
 * Sugondhi Perfumery's demo catalog (lib/demo/catalog.js builds it). Slugs
 * match the template: men, women, attar, oud, decants, gift-sets and the
 * scent-family tags.
 */
export default {
  about: 'Original perfumes, attars and decants - every bottle verified.',
  colors: ['F5E1CC', 'FBEFE3', 'EFE3D3', 'F3E8DC', 'E7E5E4'],
  ink: '5A3210',
  categories: [['Men', 'men'], ['Women', 'women'], ['Attar', 'attar'], ['Oud', 'oud'], ['Decants', 'decants'], ['Gift Sets', 'gift-sets']],
  tags: [['Bestseller', 'bestseller'], ['Floral', 'floral'], ['Fresh', 'fresh'], ['Woody', 'woody'], ['Amber', 'amber'], ['Oud', 'oud'], ['Musk', 'musk']],
  brands: [['Sugondhi', 'sugondhi'], ['Ajmal', 'ajmal'], ['Lattafa', 'lattafa'], ['Armaf', 'armaf'], ['Rasasi', 'rasasi']],
  options: {
    size: ['Size', [['50ml', 0], ['100ml', 2200]]],
    decant: ['Decant', [['5ml', 0], ['10ml', 450]]],
  },
  products: [
    ['Club de Nuit Intense Man', 'men', 4890, { sale: 4390, brand: 'armaf', tags: 'bestseller woody', vary: 'size', featured: true }],
    ['Asad Eau de Parfum', 'men', 3290, { brand: 'lattafa', tags: 'amber bestseller' }],
    ['Hawas for Him', 'men', 6490, { brand: 'rasasi', tags: 'fresh' }],
    ['Yara Eau de Parfum', 'women', 3490, { sale: 2990, brand: 'lattafa', tags: 'bestseller floral', vary: 'size' }],
    ['Club de Nuit Woman', 'women', 4690, { brand: 'armaf', tags: 'floral' }],
    ['Sugondhi Jasmine Mist', 'women', 1890, { brand: 'sugondhi', tags: 'floral fresh' }],
    ['Dehn Al Oudh Attar 3ml', 'attar oud', 5900, { brand: 'ajmal', tags: 'oud woody' }],
    ['White Musk Attar 6ml', 'attar', 690, { sale: 590, brand: 'sugondhi', tags: 'musk bestseller' }],
    ['Rose Taifi Attar 6ml', 'attar', 1290, { brand: 'sugondhi', tags: 'floral' }],
    ['Amber Wood Attar 6ml', 'attar', 990, { brand: 'ajmal', tags: 'amber woody' }],
    ['Oud Mood Eau de Parfum', 'oud', 3990, { brand: 'lattafa', tags: 'oud amber' }],
    ['Royal Oud Bakhoor', 'oud', 1490, { brand: 'ajmal', tags: 'oud', stock: 0 }],
    ['Bestseller Decant Set', 'decants', 1290, { brand: 'sugondhi', tags: 'bestseller', vary: 'decant' }],
    ['Oud Discovery Decants (4)', 'decants oud', 1890, { sale: 1590, brand: 'sugondhi', tags: 'oud' }],
    ['His & Hers Gift Set', 'gift-sets', 6990, { sale: 5990, brand: 'armaf', tags: 'bestseller' }],
    ['Attar Gift Box (3 x 6ml)', 'gift-sets attar', 2490, { brand: 'sugondhi', tags: 'musk floral' }],
  ],
  blogCategories: [['Scent Guides', 'scent-guides'], ['Attar', 'attar-journal'], ['News', 'news']],
  posts: [
    ['Attar vs Perfume: What Is the Difference?', 'attar-journal', 'Oil or spray, how long each lasts and how to wear them.'],
    ['Finding Your Scent Family', 'scent-guides', 'Floral, woody, fresh or amber - a quick quiz.'],
    ['Why Try a Decant First', 'scent-guides', 'Test a fragrance for a week before buying the bottle.'],
    ['How We Verify Every Bottle', 'news', 'Batch codes, sealed stock and our authenticity promise.'],
  ],
};
