/**
 * Fashora's demo catalog (lib/demo/catalog.js builds it). Slugs match the
 * template: women, men, kids, shoes, bags, ethnic-wear, new-arrivals and the
 * price / sale tags.
 */
export default {
  about: 'Everyday fashion at marketplace prices, delivered fast.',
  colors: ['FEE2E2', 'FFE4E6', 'FEF3C7', 'F3F4F6', 'E0F2FE'],
  ink: '7F1D1D',
  categories: [['Women', 'women'], ['Men', 'men'], ['Kids', 'kids'], ['Shoes', 'shoes'], ['Bags', 'bags'], ['Ethnic Wear', 'ethnic-wear'], ['New Arrivals', 'new-arrivals']],
  tags: [['Flash Sale', 'flash-sale'], ['Trending', 'trending'], ['Sale', 'sale'], ['Under ৳499', 'under-499'], ['Under ৳999', 'under-999'], ['Under ৳1999', 'under-1999'], ['Premium', 'premium']],
  brands: [['Urban Thread', 'urban-thread'], ['Desh Style', 'desh-style'], ['Mono', 'mono'], ['StepUp', 'stepup']],
  options: {
    size: ['Size', ['S', 'M', 'L', 'XL']],
    shoe: ['Size', ['39', '40', '41', '42', '43']],
    color: ['Colour', ['Black', 'Beige', 'Olive']],
  },
  products: [
    ['Women Oversized Cotton Tee', 'women new-arrivals', 690, { sale: 449, brand: 'urban-thread', tags: 'flash-sale under-499 trending', vary: 'size color', featured: true }],
    ['Printed Three-Piece Lawn Set', 'women ethnic-wear', 2450, { sale: 1890, brand: 'desh-style', tags: 'sale under-1999 trending', vary: 'size' }],
    ['High-Rise Wide Leg Jeans', 'women', 1790, { brand: 'mono', tags: 'under-1999', vary: 'size' }],
    ['Satin Party Kurti', 'women ethnic-wear new-arrivals', 1590, { brand: 'desh-style', tags: 'trending under-1999' }],
    ['Men Slim Fit Oxford Shirt', 'men', 1390, { sale: 990, brand: 'mono', tags: 'flash-sale under-999', vary: 'size' }],
    ['Men Cotton Panjabi', 'men ethnic-wear', 1850, { brand: 'desh-style', tags: 'trending under-1999', vary: 'size' }],
    ['Men Cargo Joggers', 'men new-arrivals', 1290, { brand: 'urban-thread', tags: 'under-1999', vary: 'size' }],
    ['Basic Crew Neck Tee (3 pack)', 'men', 990, { sale: 799, brand: 'urban-thread', tags: 'sale under-999' }],
    ['Kids Graphic T-Shirt', 'kids', 490, { sale: 399, brand: 'urban-thread', tags: 'under-499 flash-sale' }],
    ['Girls Party Frock', 'kids ethnic-wear', 1290, { brand: 'desh-style', tags: 'under-1999' }],
    ['Classic White Sneakers', 'shoes', 2490, { sale: 1990, brand: 'stepup', tags: 'trending sale under-1999', vary: 'shoe' }],
    ['Leather Loafers', 'shoes', 3490, { brand: 'stepup', tags: 'premium', vary: 'shoe' }],
    ['Flat Sandals', 'shoes women', 890, { brand: 'stepup', tags: 'under-999' }],
    ['Mini Crossbody Bag', 'bags women', 1190, { sale: 890, brand: 'mono', tags: 'flash-sale under-999', vary: 'color' }],
    ['Canvas Tote Bag', 'bags', 450, { brand: 'urban-thread', tags: 'under-499' }],
    ['Premium Leather Backpack', 'bags new-arrivals', 5490, { brand: 'mono', tags: 'premium' }],
    ['Silk Blend Saree', 'women ethnic-wear', 4990, { brand: 'desh-style', tags: 'premium', stock: 0 }],
  ],
  blogCategories: [['Style Guides', 'style-guides'], ['Trends', 'trends'], ['News', 'news']],
  posts: [
    ['5 Outfits From 10 Basics', 'style-guides', 'Build a week of looks from the pieces you already own.'],
    ['This Season\'s Colour Trends', 'trends', 'Olive, butter and rust - how to wear them now.'],
    ['How to Find Your Jeans Size Online', 'style-guides', 'Measure at home and order with confidence.'],
    ['Fashora Flash Sale Every Friday', 'news', 'New deals drop at 8pm every Friday - here is how it works.'],
  ],
};
