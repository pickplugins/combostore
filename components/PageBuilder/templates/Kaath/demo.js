/**
 * Kaath & Co. Furniture's demo catalog (lib/demo/catalog.js builds it).
 * Slugs match the template's categories and the sale / bestseller /
 * made-to-order / living-room-look tags.
 */
export default {
  about: 'Handcrafted solid-wood furniture, made to order in our Dhaka workshop.',
  colors: ['F5E2D6', 'FBEFE7', 'EEDFD2', 'F5F5F4', 'E7E5E4'],
  ink: '6B2E14',
  categories: [['Sofas', 'sofas'], ['Beds', 'beds'], ['Dining', 'dining'], ['Office Furniture', 'office-furniture'], ['Tables', 'tables'], ['Outdoor', 'outdoor'], ['Lighting', 'lighting'], ['Decor', 'decor'], ['Decor & Lighting', 'decor-lighting']],
  tags: [['Sale', 'sale'], ['Bestseller', 'bestseller'], ['Made to Order', 'made-to-order'], ['Living Room Look', 'living-room-look']],
  brands: [['Kaath & Co.', 'kaath-and-co'], ['Kaath Studio', 'kaath-studio']],
  options: {
    fabric: ['Fabric', ['Linen Sand', 'Velvet Rust', 'Boucle Cream']],
    size: ['Size', [['Queen', 0], ['King', 12000]]],
  },
  products: [
    ['Mira 3-Seater Sofa', 'sofas', 72000, { sale: 64900, brand: 'kaath-and-co', tags: 'bestseller living-room-look sale', vary: 'fabric', featured: true }],
    ['Ola Lounge Chair', 'sofas', 28500, { brand: 'kaath-studio', tags: 'living-room-look', vary: 'fabric' }],
    ['Modular Corner Sofa', 'sofas', 118000, { brand: 'kaath-and-co', tags: 'made-to-order' }],
    ['Teak Platform Bed', 'beds', 54000, { brand: 'kaath-and-co', tags: 'bestseller made-to-order', vary: 'size' }],
    ['Upholstered Headboard Bed', 'beds', 48000, { sale: 43900, brand: 'kaath-studio', tags: 'sale', vary: 'size' }],
    ['Rafi 6-Seater Dining Table', 'dining tables', 62000, { brand: 'kaath-and-co', tags: 'made-to-order' }],
    ['Woven Seat Dining Chair', 'dining', 9800, { brand: 'kaath-studio', tags: 'bestseller' }],
    ['Walnut Writing Desk', 'office-furniture tables', 34000, { brand: 'kaath-studio', tags: 'made-to-order' }],
    ['Bookcase, 5 Shelf', 'office-furniture', 26500, { sale: 23500, brand: 'kaath-and-co', tags: 'sale' }],
    ['Round Coffee Table', 'tables', 16900, { brand: 'kaath-studio', tags: 'living-room-look' }],
    ['Nesting Side Tables', 'tables', 11500, { brand: 'kaath-studio', tags: 'bestseller' }],
    ['Teak Garden Bench', 'outdoor', 22000, { brand: 'kaath-and-co', stock: 0 }],
    ['Rattan Patio Set', 'outdoor', 38000, { sale: 33900, brand: 'kaath-studio', tags: 'sale' }],
    ['Wooden Arc Floor Lamp', 'lighting decor-lighting', 9500, { brand: 'kaath-studio', tags: 'living-room-look' }],
    ['Paper Pendant Shade', 'lighting decor-lighting', 3900, { brand: 'kaath-studio' }],
    ['Handwoven Jute Rug', 'decor decor-lighting', 7900, { brand: 'kaath-and-co', tags: 'bestseller living-room-look' }],
    ['Terracotta Vase Set', 'decor decor-lighting', 2900, { brand: 'kaath-studio' }],
  ],
  blogCategories: [['Workshop', 'workshop'], ['Room Ideas', 'room-ideas'], ['Care', 'care']],
  posts: [
    ['How Made-to-Order Works at Kaath', 'workshop', 'From your measurements to delivery in about four weeks.'],
    ['Styling a Warm Living Room', 'room-ideas', 'Wood, linen and low light - our living room look, step by step.'],
    ['Choosing a Sofa Fabric', 'care', 'Linen, velvet or boucle - how each wears with kids and pets.'],
    ['Inside the Kaath Workshop', 'workshop', 'Meet the carpenters behind every joint.'],
  ],
};
