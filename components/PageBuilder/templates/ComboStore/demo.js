/**
 * ComboStore's demo catalog (lib/demo/catalog.js builds it). The template is
 * the platform's marketing site, so its Home shows no products; the plans
 * are listed here only so a demo store running it has something on its shop
 * pages.
 */
export default {
  about: 'Headless ecommerce for Bangladeshi sellers, built on WordPress and Next.js.',
  colors: ['ECFDF5', 'D1FAE5', 'F4F4F5', 'E4E4E7'],
  ink: '09090B',
  categories: [['Plans', 'plans'], ['Services', 'services']],
  tags: [['Most popular', 'popular']],
  brands: [['ComboStore', 'combostore']],
  products: [
    ['Starter plan (monthly)', 'plans', 499, { brand: 'combostore', desc: 'One website · up to 300 products' }],
    ['Business plan (monthly)', 'plans', 1900, { brand: 'combostore', tags: 'popular', desc: 'Up to five websites · unlimited products', featured: true }],
    ['Starter plan (yearly)', 'plans', 4990, { brand: 'combostore', desc: 'Two months free' }],
    ['Business plan (yearly)', 'plans', 19000, { brand: 'combostore', desc: 'Two months free' }],
    ['Guided store migration', 'services', 5000, { brand: 'combostore', desc: 'Products, categories and customers moved over' }],
  ],
  blogCategories: [['Guides', 'guides']],
  posts: [
    ['Deploying your store to Vercel', 'guides', 'From the onboarding wizard to your own domain in an afternoon.'],
  ],
};
