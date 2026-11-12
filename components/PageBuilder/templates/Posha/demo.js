/**
 * Posha Pet Shop's demo catalog (lib/demo/catalog.js builds it). Slugs match
 * the template: food, toys, the pet types, pharmacy, grooming and the new /
 * bestseller / deals tags.
 */
export default {
  about: 'Food, care and toys for happy, healthy pets.',
  colors: ['DBEAFE', 'E0E7FF', 'FEF3C7', 'DCFCE7', 'FCE7F3'],
  ink: '1E3A8A',
  categories: [['Dog Food', 'dog-food'], ['Cat Food', 'cat-food'], ['Toys', 'toys'], ['Dogs', 'dogs'], ['Cats', 'cats'], ['Birds', 'birds'], ['Fish', 'fish'], ['Small Pets', 'small-pets'], ['Pharmacy', 'pharmacy'], ['Grooming', 'grooming']],
  tags: [['New', 'new'], ['Bestseller', 'bestseller'], ['Deals', 'deals']],
  brands: [['Royal Canin', 'royal-canin'], ['Whiskas', 'whiskas'], ['Pedigree', 'pedigree'], ['Drools', 'drools'], ['Posha', 'posha']],
  options: {
    bag: ['Bag', [['1.2kg', 0], ['3kg', 1400], ['7kg', 3900]]],
    size: ['Size', ['S', 'M', 'L']],
  },
  products: [
    ['Adult Dog Food, Chicken & Rice', 'dog-food dogs', 1450, { sale: 1290, brand: 'pedigree', tags: 'bestseller deals', vary: 'bag', featured: true }],
    ['Puppy Starter Food', 'dog-food dogs', 1850, { brand: 'royal-canin', tags: 'new', vary: 'bag' }],
    ['Grain-Free Dog Food, Lamb', 'dog-food dogs', 2450, { brand: 'drools' }],
    ['Adult Cat Food, Ocean Fish', 'cat-food cats', 1190, { sale: 1050, brand: 'whiskas', tags: 'bestseller deals', vary: 'bag' }],
    ['Kitten Food, Mother & Babycat', 'cat-food cats', 1690, { brand: 'royal-canin', tags: 'new' }],
    ['Wet Cat Food Pouches (12)', 'cat-food cats', 990, { brand: 'whiskas', tags: 'bestseller' }],
    ['Rope Tug Toy', 'toys dogs', 390, { brand: 'posha', vary: 'size' }],
    ['Squeaky Bone Toy', 'toys dogs', 290, { sale: 240, brand: 'posha', tags: 'deals' }],
    ['Feather Wand Cat Toy', 'toys cats', 350, { brand: 'posha', tags: 'bestseller' }],
    ['Cat Scratching Post', 'cats toys', 1890, { brand: 'posha', tags: 'new' }],
    ['Adjustable Dog Harness', 'dogs', 990, { brand: 'posha', vary: 'size' }],
    ['Bird Seed Mix 1kg', 'birds', 390, { brand: 'posha' }],
    ['Bird Cage, Medium', 'birds', 2490, { brand: 'posha', stock: 0 }],
    ['Tropical Fish Flakes', 'fish', 290, { brand: 'posha' }],
    ['Aquarium Filter', 'fish', 1290, { sale: 1090, brand: 'posha', tags: 'deals' }],
    ['Rabbit & Guinea Pig Pellets', 'small-pets', 650, { brand: 'posha', tags: 'new' }],
    ['Tick & Flea Spot-On (Dogs)', 'pharmacy dogs', 890, { brand: 'drools', tags: 'bestseller' }],
    ['Deworming Tablets (Cats)', 'pharmacy cats', 450, { brand: 'drools' }],
    ['Gentle Pet Shampoo', 'grooming', 490, { brand: 'posha' }],
    ['Deshedding Brush', 'grooming', 690, { sale: 590, brand: 'posha', tags: 'deals' }],
  ],
  blogCategories: [['Pet Care', 'pet-care'], ['Nutrition', 'nutrition'], ['News', 'news']],
  posts: [
    ['How Much Should You Feed Your Dog?', 'nutrition', 'Portion sizes by weight, age and activity.'],
    ['Bringing Home a New Kitten', 'pet-care', 'A first-week checklist for food, litter and play.'],
    ['Keeping Pets Cool in Summer', 'pet-care', 'Water, shade and signs of heat stress to watch for.'],
    ['Posha Now Delivers Pet Pharmacy Items', 'news', 'Vet-recommended medicines, delivered with care.'],
  ],
};
