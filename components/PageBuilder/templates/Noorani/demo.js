/**
 * Noorani Panjabi House's demo catalog (lib/demo/catalog.js builds it).
 * Slugs match the template: panjabi, jubba-thobe, kabli-pathani,
 * attar-tupi, eid-collection.
 */
export default {
  about: 'Tailored panjabis and modest menswear for every occasion.',
  colors: ['DCFCE7', 'ECFDF5', 'FEF3C7', 'F5F5F4', 'E0F2FE'],
  ink: '0B3D2E',
  categories: [['Panjabi', 'panjabi'], ['Jubba & Thobe', 'jubba-thobe'], ['Kabli & Pathani', 'kabli-pathani'], ['Attar & Tupi', 'attar-tupi'], ['Eid Collection', 'eid-collection']],
  tags: [['Bestseller', 'bestseller'], ['New', 'new'], ['Premium', 'premium']],
  brands: [['Noorani', 'noorani'], ['Al Rawdah', 'al-rawdah'], ['Kaftan House', 'kaftan-house']],
  options: {
    size: ['Size', ['38', '40', '42', '44', '46']],
    color: ['Colour', ['White', 'Off-White', 'Navy']],
  },
  products: [
    ['Cotton Panjabi, Classic White', 'panjabi', 2450, { sale: 2150, brand: 'noorani', tags: 'bestseller', vary: 'size', featured: true }],
    ['Embroidered Panjabi, Navy', 'panjabi eid-collection', 3850, { brand: 'noorani', tags: 'new', vary: 'size' }],
    ['Linen Panjabi, Sand', 'panjabi', 2950, { brand: 'noorani', vary: 'size' }],
    ['Silk Panjabi, Gold Neck Work', 'panjabi eid-collection', 5950, { sale: 5450, brand: 'noorani', tags: 'premium' }],
    ['Saudi Thobe, Pure White', 'jubba-thobe', 3450, { brand: 'al-rawdah', tags: 'bestseller', vary: 'size' }],
    ['Moroccan Jubba, Olive', 'jubba-thobe', 3950, { brand: 'kaftan-house', tags: 'new', vary: 'size' }],
    ['Emirati Kandura', 'jubba-thobe eid-collection', 4250, { brand: 'al-rawdah', tags: 'premium' }],
    ['Kabli Set, Charcoal', 'kabli-pathani', 3650, { sale: 3250, brand: 'kaftan-house', tags: 'bestseller', vary: 'size' }],
    ['Pathani Suit, Ivory', 'kabli-pathani eid-collection', 3950, { brand: 'kaftan-house', vary: 'color' }],
    ['Pathani Suit, Black', 'kabli-pathani', 3950, { brand: 'kaftan-house', stock: 0 }],
    ['Oud Attar 6ml', 'attar-tupi', 1250, { brand: 'al-rawdah', tags: 'bestseller' }],
    ['White Musk Attar 6ml', 'attar-tupi', 850, { sale: 750, brand: 'al-rawdah' }],
    ['Knitted Tupi, White', 'attar-tupi', 350, { brand: 'noorani' }],
    ['Embroidered Tupi, Gold', 'attar-tupi eid-collection', 550, { brand: 'noorani', tags: 'new' }],
  ],
  blogCategories: [['Style', 'style'], ['Eid', 'eid'], ['Care', 'care']],
  posts: [
    ['How to Find Your Panjabi Size', 'style', 'Chest, length and sleeve - measure at home in five minutes.'],
    ['Eid Outfit Ideas for Men', 'eid', 'From classic white to rich embroidered silks.'],
    ['Choosing an Attar That Lasts', 'style', 'Oud, musk or floral - what suits the season.'],
    ['Keeping White Panjabis Bright', 'care', 'Wash and iron tips our tailors swear by.'],
  ],
};
