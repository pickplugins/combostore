/**
 * Glowbie Beauty's demo catalog (lib/demo/catalog.js builds it). Slugs match
 * the template: skincare, makeup, hair-body and the routine steps.
 */
export default {
  about: '100% authentic K-beauty and skincare, checked batch by batch.',
  colors: ['FCE7F3', 'FFE4E6', 'FDF2F8', 'FAE8FF', 'FFF1F2'],
  ink: '831843',
  categories: [['Skincare', 'skincare'], ['Makeup', 'makeup'], ['Hair & Body', 'hair-body'], ['Cleansers', 'cleansers'], ['Serums', 'serums'], ['Moisturisers', 'moisturisers'], ['Sunscreen', 'sunscreen'], ['Lips', 'lips']],
  tags: [['Bestseller', 'bestseller'], ['New', 'new'], ['Vegan', 'vegan']],
  brands: [['COSRX', 'cosrx'], ['Beauty of Joseon', 'beauty-of-joseon'], ['Some By Mi', 'some-by-mi'], ['Innisfree', 'innisfree'], ['Laneige', 'laneige'], ['Maybelline', 'maybelline']],
  options: {
    shade: ['Shade', ['Rosy', 'Coral', 'Nude', 'Berry']],
    volume: ['Size', [['50ml', 0], ['100ml', 600]]],
  },
  products: [
    ['Low pH Good Morning Gel Cleanser', 'skincare cleansers', 1250, { sale: 1090, brand: 'cosrx', tags: 'bestseller', vary: 'volume', featured: true }],
    ['Green Tea Foam Cleanser', 'skincare cleansers', 990, { brand: 'innisfree', tags: 'vegan' }],
    ['Snail Mucin 96% Essence', 'skincare serums', 1890, { sale: 1690, brand: 'cosrx', tags: 'bestseller' }],
    ['Glow Deep Serum Rice + Arbutin', 'skincare serums', 1650, { brand: 'beauty-of-joseon', tags: 'new' }],
    ['AHA BHA PHA 30 Days Toner', 'skincare serums', 1450, { brand: 'some-by-mi', tags: 'bestseller' }],
    ['Water Sleeping Mask', 'skincare moisturisers', 2450, { sale: 2150, brand: 'laneige', tags: 'bestseller' }],
    ['Oil-Free Ultra Moisturising Lotion', 'skincare moisturisers', 1590, { brand: 'cosrx', tags: 'vegan' }],
    ['Relief Sun: Rice + Probiotics SPF50+', 'skincare sunscreen', 1490, { sale: 1290, brand: 'beauty-of-joseon', tags: 'bestseller' }],
    ['Daily UV Protection Cream', 'skincare sunscreen', 1250, { brand: 'innisfree', tags: 'new' }],
    ['Lip Sleeping Mask Berry', 'lips makeup', 1650, { brand: 'laneige', tags: 'bestseller', vary: 'shade' }],
    ['Super Stay Matte Ink', 'lips makeup', 990, { sale: 850, brand: 'maybelline', vary: 'shade' }],
    ['Fit Me Matte Foundation', 'makeup', 1290, { brand: 'maybelline', tags: 'bestseller' }],
    ['Sky High Mascara', 'makeup', 1150, { brand: 'maybelline', tags: 'new' }],
    ['Camellia Hair Oil', 'hair-body', 1190, { brand: 'innisfree', tags: 'vegan' }],
    ['Damage Repair Shampoo', 'hair-body', 990, { brand: 'some-by-mi', stock: 0 }],
    ['Body Lotion Shea & Rice', 'hair-body moisturisers', 1090, { brand: 'beauty-of-joseon' }],
  ],
  blogCategories: [['Skin School', 'skin-school'], ['Routines', 'routines'], ['New In', 'new-in']],
  posts: [
    ['A Simple 4-Step Routine for Humid Weather', 'routines', 'Cleanse, treat, moisturise, protect - lightweight picks that work.'],
    ['How to Spot Fake Skincare', 'skin-school', 'Batch codes, packaging and price - what to check before you buy.'],
    ['Sunscreen 101: SPF, PA and Reapplying', 'skin-school', 'What the labels mean and how much to use.'],
    ['New In: Rice Serums Everyone Loves', 'new-in', 'Why rice-water skincare is having a moment.'],
  ],
};
