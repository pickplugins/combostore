/**
 * Jhola Bags & Leather's demo catalog (lib/demo/catalog.js builds it). Slugs
 * match the template: the bag categories and the size / material tags.
 */
export default {
  about: 'Hand-stitched leather and canvas bags, built to last.',
  colors: ['F5E6D8', 'FDF2E9', 'EDE0D4', 'F3F4F6', 'E7E5E4'],
  ink: '5C2E14',
  categories: [['Handbags', 'handbags'], ['Backpacks', 'backpacks'], ['Travel', 'travel'], ['Laptop Bags', 'laptop-bags'], ['Wallets', 'wallets'], ['Office Bags', 'office-bags'], ['School Bags', 'school-bags'], ['Kids Bags', 'kids-bags']],
  tags: [['Bestseller', 'bestseller'], ['Sale', 'sale'], ['Mini', 'size-mini'], ['Everyday', 'size-everyday'], ['Work', 'size-work'], ['Travel Size', 'size-travel'], ['Full Grain', 'full-grain'], ['Top Grain', 'top-grain'], ['Vegan', 'vegan'], ['Canvas', 'canvas'], ['Nylon', 'nylon'], ['Monogram', 'monogram'], ['Gift', 'gift']],
  brands: [['Jhola', 'jhola'], ['Tannery Row', 'tannery-row'], ['Nomad', 'nomad']],
  options: {
    color: ['Colour', ['Tan', 'Chocolate', 'Black']],
  },
  products: [
    ['Everyday Leather Tote', 'handbags', 5490, { sale: 4790, brand: 'jhola', tags: 'bestseller size-everyday full-grain monogram', vary: 'color', featured: true }],
    ['Mini Crossbody Saddle Bag', 'handbags', 3290, { brand: 'jhola', tags: 'size-mini top-grain gift', vary: 'color' }],
    ['Vegan Leather Shoulder Bag', 'handbags', 2790, { sale: 2390, brand: 'nomad', tags: 'sale size-everyday vegan' }],
    ['Roll-Top Canvas Backpack', 'backpacks', 3490, { brand: 'nomad', tags: 'bestseller size-everyday canvas' }],
    ['Leather Commuter Backpack', 'backpacks laptop-bags', 7990, { brand: 'tannery-row', tags: 'size-work full-grain', vary: 'color' }],
    ['Weekender Duffel', 'travel', 8990, { sale: 7990, brand: 'tannery-row', tags: 'size-travel full-grain monogram' }],
    ['Nylon Cabin Backpack 35L', 'travel backpacks', 4290, { brand: 'nomad', tags: 'size-travel nylon' }],
    ['Passport & Travel Wallet', 'travel wallets', 1290, { brand: 'jhola', tags: 'gift top-grain' }],
    ['15" Laptop Messenger', 'laptop-bags office-bags', 5990, { brand: 'tannery-row', tags: 'size-work top-grain', vary: 'color' }],
    ['Padded Laptop Sleeve', 'laptop-bags', 1690, { brand: 'nomad', tags: 'canvas sale' }],
    ['Slim Bifold Wallet', 'wallets', 1490, { sale: 1190, brand: 'jhola', tags: 'bestseller gift full-grain monogram', vary: 'color' }],
    ['Card Holder', 'wallets', 790, { brand: 'jhola', tags: 'size-mini gift' }],
    ['Leather Briefcase', 'office-bags', 9490, { brand: 'tannery-row', tags: 'size-work full-grain' }],
    ['School Backpack with Rain Cover', 'school-bags', 2290, { brand: 'nomad', tags: 'nylon bestseller' }],
    ['Kids Animal Backpack', 'kids-bags school-bags', 1290, { brand: 'nomad', tags: 'canvas gift' }],
    ['Kids Mini Sling', 'kids-bags', 690, { brand: 'jhola', tags: 'size-mini vegan', stock: 0 }],
  ],
  blogCategories: [['Leather Care', 'leather-care'], ['Guides', 'guides'], ['Workshop', 'workshop']],
  posts: [
    ['Full Grain vs Top Grain Leather', 'guides', 'What the labels mean and how each one ages.'],
    ['Caring for a Leather Bag', 'leather-care', 'Clean, condition and store it so it lasts decades.'],
    ['Picking the Right Laptop Bag', 'guides', 'Size, padding and straps for your daily commute.'],
    ['Inside the Jhola Workshop', 'workshop', 'Meet the hands that cut and stitch every bag.'],
  ],
};
