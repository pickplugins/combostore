/**
 * Muthofon's demo catalog: products, categories, tags, brands and blog
 * posts for the storefront in demo mode. lib/demo/catalog.js documents the
 * spec and builds the records. The slugs match the ones the template's
 * sliders and links use (smartphones, tablets, the budget tags, the brands).
 */
export default {
  about: 'Official-warranty phones and gadgets with EMI and trade-in.',
  colors: ['EDE7FE', 'E0E7FF', 'F3E8FF', 'DBEAFE', 'F5F3FF'],
  ink: '3B1D8F',
  categories: [['Smartphones', 'smartphones'], ['Tablets', 'tablets'], ['Accessories', 'accessories'], ['Refurbished', 'refurbished']],
  tags: [['Deal', 'deal'], ['New Launch', 'new-launch'], ['Bestseller', 'bestseller'], ['Under ৳10k', 'budget-under-10k'], ['Under ৳15k', 'budget-under-15k'], ['৳10k-20k', 'budget-10k-20k'], ['৳20k-40k', 'budget-20k-40k'], ['৳40k-80k', 'budget-40k-80k'], ['৳80k+', 'budget-80k-plus']],
  brands: [['Samsung', 'samsung'], ['Apple', 'apple'], ['Xiaomi', 'xiaomi'], ['Realme', 'realme'], ['OPPO', 'oppo'], ['vivo', 'vivo'], ['OnePlus', 'oneplus']],
  options: {
    storage: ['Storage', [['128GB', 0], ['256GB', 6000]]],
    color: ['Colour', ['Midnight', 'Silver', 'Lavender']],
  },
  products: [
    ['Samsung Galaxy S24 Ultra 5G', 'smartphones', 154999, { sale: 144999, brand: 'samsung', tags: 'bestseller budget-80k-plus', vary: 'storage color', featured: true }],
    ['iPhone 15 Pro 128GB', 'smartphones', 159999, { brand: 'apple', tags: 'new-launch budget-80k-plus', vary: 'color' }],
    ['Samsung Galaxy A55 5G', 'smartphones', 47999, { sale: 44999, brand: 'samsung', tags: 'deal budget-40k-80k', vary: 'storage' }],
    ['Xiaomi Redmi Note 13 Pro', 'smartphones', 34999, { sale: 31999, brand: 'xiaomi', tags: 'bestseller deal budget-20k-40k', vary: 'storage' }],
    ['Realme 12 Pro+ 5G', 'smartphones', 42999, { brand: 'realme', tags: 'new-launch budget-40k-80k' }],
    ['OPPO Reno 11 F', 'smartphones', 36999, { sale: 33999, brand: 'oppo', tags: 'deal budget-20k-40k' }],
    ['vivo Y28 8/128GB', 'smartphones', 21999, { brand: 'vivo', tags: 'budget-20k-40k' }],
    ['OnePlus Nord CE4', 'smartphones', 39999, { brand: 'oneplus', tags: 'new-launch budget-20k-40k' }],
    ['Xiaomi Redmi 13C', 'smartphones', 14499, { sale: 13499, brand: 'xiaomi', tags: 'bestseller budget-10k-20k budget-under-15k' }],
    ['Realme C53 6/128GB', 'smartphones', 15999, { brand: 'realme', tags: 'budget-10k-20k' }],
    ['Samsung Galaxy A05', 'smartphones', 9999, { brand: 'samsung', tags: 'budget-under-10k budget-under-15k deal' }],
    ['Samsung Galaxy Tab S9 FE', 'tablets', 54999, { sale: 49999, brand: 'samsung', tags: 'deal budget-40k-80k', vary: 'color' }],
    ['iPad 10th Gen Wi-Fi 64GB', 'tablets', 62999, { brand: 'apple', tags: 'bestseller budget-40k-80k' }],
    ['Xiaomi Pad 6', 'tablets', 39999, { brand: 'xiaomi', tags: 'budget-20k-40k' }],
    ['25W Super Fast Charger', 'accessories', 1990, { sale: 1590, brand: 'samsung', tags: 'deal budget-under-10k' }],
    ['MagSafe Clear Case', 'accessories', 2490, { brand: 'apple', tags: 'budget-under-10k' }],
    ['Redmi Buds 5 Pro', 'accessories', 5990, { sale: 4990, brand: 'xiaomi', tags: 'bestseller budget-under-10k' }],
    ['20000mAh Power Bank', 'accessories', 2990, { brand: 'xiaomi', tags: 'budget-under-10k', stock: 0 }],
    ['iPhone 13 128GB (Refurbished)', 'refurbished smartphones', 64999, { sale: 58999, brand: 'apple', tags: 'deal budget-40k-80k' }],
    ['Galaxy S22 (Refurbished)', 'refurbished smartphones', 44999, { sale: 39999, brand: 'samsung', tags: 'budget-20k-40k' }],
    ['OnePlus 10 Pro (Refurbished)', 'refurbished', 41999, { brand: 'oneplus', tags: 'budget-40k-80k' }],
  ],
  blogCategories: [['Buying Guides', 'buying-guides'], ['Reviews', 'reviews'], ['Tips', 'tips']],
  posts: [
    ['Best Phones Under ৳20,000 This Month', 'buying-guides', 'Our shortlist of value phones with good cameras, big batteries and official warranty.'],
    ['Galaxy S24 Ultra Review: Worth the Upgrade?', 'reviews', 'Two weeks with Samsung\'s flagship - camera, battery and AI features tested.'],
    ['How Trade-In Works at Muthofon', 'tips', 'Bring your old phone, get an instant price and pay the difference - here is how.'],
    ['5 Ways to Make Your Battery Last Longer', 'tips', 'Simple settings that add hours to your phone\'s battery life every day.'],
  ],
};
