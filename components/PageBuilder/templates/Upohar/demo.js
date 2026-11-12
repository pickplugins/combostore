/**
 * Upohar Gift Shop's demo catalog (lib/demo/catalog.js builds it). Slugs
 * match the template: for-her, for-him, hampers, personalised, for-kids and
 * the occasion / recipient / budget tags.
 */
export default {
  about: 'Thoughtful gifts, beautifully wrapped and delivered on the day.',
  colors: ['D1FAE5', 'FEF3C7', 'FCE7F3', 'E0F2FE', 'F5F5F4'],
  ink: '0B4536',
  categories: [['For Her', 'for-her'], ['For Him', 'for-him'], ['Hampers', 'hampers'], ['Personalised', 'personalised'], ['For Kids', 'for-kids']],
  tags: [['Bestseller', 'bestseller'], ['Birthday', 'birthday'], ['Anniversary', 'anniversary'], ['For Her', 'for-her'], ['For Him', 'for-him'], ['For Kids', 'for-kids'], ['For Parents', 'for-parents'], ['For Couples', 'for-couples'], ['For Colleagues', 'for-colleagues'], ['Eid', 'eid'], ['Wedding', 'wedding'], ['Thank You', 'thank-you'], ['Under ৳500', 'under-500'], ['Under ৳1000', 'under-1000'], ['Under ৳2500', 'under-2500'], ['Under ৳5000', 'under-5000'], ['Luxe', 'luxe'], ['New Baby', 'new-baby'], ['Get Well', 'get-well'], ['Graduation', 'graduation']],
  brands: [['Upohar', 'upohar'], ['Petals & Co', 'petals-and-co'], ['Craft Corner', 'craft-corner']],
  options: {
    wrap: ['Gift Wrap', [['Classic', 0], ['Premium Box', 250]]],
  },
  products: [
    ['Red Rose Bouquet (12)', 'for-her', 1890, { sale: 1690, brand: 'petals-and-co', tags: 'bestseller anniversary for-her for-couples under-2500', vary: 'wrap', featured: true }],
    ['Pamper Spa Box', 'for-her hampers', 3490, { brand: 'upohar', tags: 'birthday for-her under-5000' }],
    ['Silver Initial Necklace', 'for-her personalised', 2290, { brand: 'craft-corner', tags: 'birthday anniversary for-her under-2500' }],
    ['Leather Wallet, Engraved', 'for-him personalised', 1890, { brand: 'craft-corner', tags: 'bestseller for-him under-2500', vary: 'wrap' }],
    ['Grooming Kit for Him', 'for-him', 2690, { sale: 2390, brand: 'upohar', tags: 'birthday for-him under-2500' }],
    ['Coffee Lover\'s Box', 'for-him hampers', 1990, { brand: 'upohar', tags: 'thank-you for-colleagues under-2500' }],
    ['Eid Sweets & Dates Hamper', 'hampers', 2990, { brand: 'upohar', tags: 'eid for-parents bestseller under-5000' }],
    ['Luxe Celebration Hamper', 'hampers', 7990, { brand: 'upohar', tags: 'luxe wedding anniversary for-couples' }],
    ['Get Well Fruit Basket', 'hampers', 1690, { brand: 'upohar', tags: 'get-well for-parents under-2500' }],
    ['Desk Plant & Card', 'hampers', 890, { brand: 'petals-and-co', tags: 'thank-you for-colleagues under-1000' }],
    ['Custom Name Mug', 'personalised', 590, { sale: 490, brand: 'craft-corner', tags: 'under-500 under-1000 for-colleagues birthday' }],
    ['Photo Frame, Engraved', 'personalised', 1290, { brand: 'craft-corner', tags: 'wedding for-couples under-1000 graduation' }],
    ['Graduation Memory Box', 'personalised', 1890, { brand: 'craft-corner', tags: 'graduation under-2500' }],
    ['New Baby Welcome Box', 'for-kids hampers', 2490, { brand: 'upohar', tags: 'new-baby under-2500 bestseller' }],
    ['Kids Name Puzzle', 'for-kids personalised', 990, { brand: 'craft-corner', tags: 'for-kids birthday under-1000' }],
    ['Plush Teddy with Ribbon', 'for-kids', 450, { brand: 'upohar', tags: 'for-kids under-500', stock: 0 }],
  ],
  blogCategories: [['Gift Guides', 'gift-guides'], ['Occasions', 'occasions'], ['News', 'news']],
  posts: [
    ['Birthday Gifts by Budget', 'gift-guides', 'Great picks under ৳500, ৳1000 and ৳2500.'],
    ['What to Send for Eid', 'occasions', 'Hampers, sweets and gifts the whole family will share.'],
    ['Personalised Gifts That Feel Special', 'gift-guides', 'Names, dates and photos turned into keepsakes.'],
    ['Same-Day Delivery in Dhaka', 'news', 'Order before noon and we deliver the same evening.'],
  ],
};
