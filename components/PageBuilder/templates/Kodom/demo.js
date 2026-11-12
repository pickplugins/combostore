/**
 * Kodom Footwear's demo catalog (lib/demo/catalog.js builds it). Slugs match
 * the template: sneakers, formal, sandals, men, women, kids and the EU size
 * tags.
 */
export default {
  about: 'Comfortable, well-made shoes for every step of the day.',
  colors: ['FEE2E2', 'F3F4F6', 'FFE4E6', 'E5E7EB', 'FEF3C7'],
  ink: '7F0016',
  categories: [['Sneakers', 'sneakers'], ['Formal', 'formal'], ['Sandals', 'sandals'], ['Men', 'men'], ['Women', 'women'], ['Kids', 'kids']],
  tags: [['New Drop', 'new-drop'], ['Bestseller', 'bestseller'], ['Sale', 'sale'], ['EU 36', 'eu-36'], ['EU 37', 'eu-37'], ['EU 38', 'eu-38'], ['EU 39', 'eu-39'], ['EU 40', 'eu-40'], ['EU 41', 'eu-41'], ['EU 42', 'eu-42'], ['EU 43', 'eu-43'], ['EU 44', 'eu-44'], ['EU 45', 'eu-45'], ['EU 46', 'eu-46']],
  brands: [['Kodom', 'kodom'], ['Stride', 'stride'], ['Apex', 'apex']],
  options: {
    men: ['Size', ['40', '41', '42', '43', '44']],
    women: ['Size', ['36', '37', '38', '39', '40']],
    color: ['Colour', ['Black', 'White', 'Tan']],
  },
  products: [
    ['Kodom Runner Knit Sneaker', 'sneakers men', 4290, { sale: 3690, brand: 'kodom', tags: 'bestseller new-drop eu-40 eu-41 eu-42 eu-43 eu-44', vary: 'men color', featured: true }],
    ['Court Classic Leather Sneaker', 'sneakers men', 4990, { brand: 'apex', tags: 'eu-41 eu-42 eu-43 eu-45 eu-46', vary: 'men' }],
    ['Chunky Platform Sneaker', 'sneakers women', 3990, { sale: 3390, brand: 'stride', tags: 'new-drop sale eu-36 eu-37 eu-38 eu-39', vary: 'women' }],
    ['Slip-On Canvas', 'sneakers women', 1890, { brand: 'kodom', tags: 'eu-37 eu-38 eu-39 eu-40' }],
    ['Oxford Brogue, Brown', 'formal men', 5490, { brand: 'apex', tags: 'bestseller eu-41 eu-42 eu-43 eu-44', vary: 'men' }],
    ['Penny Loafer, Black', 'formal men', 4790, { sale: 4290, brand: 'apex', tags: 'sale eu-40 eu-42 eu-44 eu-45' }],
    ['Block Heel Pump', 'formal women', 3290, { brand: 'stride', tags: 'eu-36 eu-37 eu-38', vary: 'women' }],
    ['Pointed Ballet Flat', 'formal women', 2490, { brand: 'stride', tags: 'new-drop eu-37 eu-38 eu-39' }],
    ['Leather Kolhapuri Sandal', 'sandals men', 1990, { sale: 1690, brand: 'kodom', tags: 'bestseller sale eu-41 eu-42 eu-43', vary: 'men' }],
    ['Strappy Flat Sandal', 'sandals women', 1590, { brand: 'kodom', tags: 'eu-36 eu-37 eu-38 eu-39 eu-40', vary: 'women' }],
    ['Sport Slide', 'sandals men women', 990, { brand: 'stride', tags: 'eu-39 eu-40 eu-41 eu-42 eu-43 eu-44 eu-45 eu-46' }],
    ['Kids Light-Up Sneaker', 'kids sneakers', 1890, { sale: 1590, brand: 'kodom', tags: 'bestseller new-drop' }],
    ['Kids School Shoe', 'kids formal', 1690, { brand: 'apex' }],
    ['Kids Velcro Sandal', 'kids sandals', 990, { brand: 'stride', stock: 0 }],
  ],
  blogCategories: [['Fit Guides', 'fit-guides'], ['Care', 'care'], ['Drops', 'drops']],
  posts: [
    ['How to Measure Your Shoe Size at Home', 'fit-guides', 'A ruler, a sheet of paper and our EU size chart.'],
    ['Breaking In Leather Shoes Without Blisters', 'care', 'Simple tricks to make new leather comfortable fast.'],
    ['The Runner Knit Is Back in Three Colours', 'drops', 'Our bestseller returns in black, white and tan.'],
    ['Cleaning White Sneakers', 'care', 'Keep them fresh with things you already have.'],
  ],
};
