/**
 * Tuntuni Kids' demo catalog (lib/demo/catalog.js builds it). Slugs match
 * the template: baby, girls, boys, school-wear, nightwear, matching-sets and
 * the age tags.
 */
export default {
  about: 'Soft, playful kidswear in pure cotton.',
  colors: ['E0E7FF', 'FCE7F3', 'FEF3C7', 'DCFCE7', 'E0F2FE'],
  ink: '1E2A78',
  categories: [['Baby', 'baby'], ['Girls', 'girls'], ['Boys', 'boys'], ['School Wear', 'school-wear'], ['Nightwear', 'nightwear'], ['Matching Sets', 'matching-sets']],
  tags: [['Bestseller', 'bestseller'], ['Festive', 'festive'], ['Sale', 'sale'], ['0-12 months', 'age-0-12m'], ['1-3 years', 'age-1-3y'], ['4-6 years', 'age-4-6y'], ['7-10 years', 'age-7-10y'], ['11-14 years', 'age-11-14y']],
  brands: [['Tuntuni', 'tuntuni'], ['Little Doel', 'little-doel'], ['Kolkoli', 'kolkoli']],
  options: {
    age: ['Age', ['1-2Y', '3-4Y', '5-6Y', '7-8Y']],
    baby: ['Age', ['0-3M', '3-6M', '6-12M']],
    color: ['Colour', ['Sky', 'Blush', 'Mint']],
  },
  products: [
    ['Organic Cotton Romper', 'baby', 890, { sale: 750, brand: 'tuntuni', tags: 'bestseller age-0-12m', vary: 'baby', featured: true }],
    ['Baby Muslin Jhabla Set (3)', 'baby', 1190, { brand: 'kolkoli', tags: 'age-0-12m', vary: 'baby' }],
    ['Knit Booties & Cap', 'baby', 590, { brand: 'little-doel', tags: 'sale age-0-12m' }],
    ['Floral Frock with Bow', 'girls', 1450, { sale: 1250, brand: 'tuntuni', tags: 'festive bestseller age-4-6y', vary: 'age color' }],
    ['Girls Denim Pinafore', 'girls', 1290, { brand: 'little-doel', tags: 'age-7-10y', vary: 'age' }],
    ['Embroidered Kurti for Girls', 'girls', 1650, { brand: 'kolkoli', tags: 'festive age-11-14y' }],
    ['Boys Cotton Panjabi', 'boys', 1550, { sale: 1350, brand: 'kolkoli', tags: 'festive bestseller age-7-10y', vary: 'age' }],
    ['Dino Print T-Shirt (2 pack)', 'boys', 890, { brand: 'tuntuni', tags: 'sale age-1-3y', vary: 'age' }],
    ['Boys Jogger Pants', 'boys', 790, { brand: 'little-doel', tags: 'age-4-6y' }],
    ['School Shirt White (2 pack)', 'school-wear', 990, { brand: 'tuntuni', tags: 'bestseller age-7-10y', vary: 'age' }],
    ['Navy School Shorts', 'school-wear', 650, { brand: 'tuntuni', tags: 'age-11-14y' }],
    ['Moon & Stars Pajama Set', 'nightwear', 990, { sale: 850, brand: 'little-doel', tags: 'bestseller age-1-3y', vary: 'age' }],
    ['Cotton Night Frock', 'nightwear girls', 790, { brand: 'kolkoli', tags: 'age-4-6y' }],
    ['Mother & Daughter Saree Set', 'matching-sets girls', 3490, { brand: 'kolkoli', tags: 'festive age-4-6y' }],
    ['Father & Son Panjabi Set', 'matching-sets boys', 3990, { sale: 3490, brand: 'kolkoli', tags: 'festive sale age-7-10y' }],
    ['Sibling Tee Set', 'matching-sets', 1490, { brand: 'tuntuni', tags: 'age-1-3y', stock: 0 }],
  ],
  blogCategories: [['Size Guides', 'size-guides'], ['Parenting', 'parenting'], ['Festive', 'festive-edit']],
  posts: [
    ['How to Pick the Right Kids Size', 'size-guides', 'Measure once, shop with confidence - our simple age-to-size chart.'],
    ['Eid Outfits for the Whole Family', 'festive-edit', 'Matching panjabis and frocks the little ones will love.'],
    ['Caring for Pure Cotton Clothes', 'parenting', 'Wash tips that keep colours bright and fabric soft.'],
    ['Back-to-School Uniform Checklist', 'parenting', 'Everything for the first day, in one list.'],
  ],
};
