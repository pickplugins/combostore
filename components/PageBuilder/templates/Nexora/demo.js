/**
 * Nexora's demo catalog (lib/demo/catalog.js builds it). The template
 * queries no categories by slug, so these are a general tech shop's.
 */
export default {
  about: 'Laptops, monitors and smart tech for work and play.',
  colors: ['E0E7FF', 'EEF2FF', 'EDE9FE', 'E0F2FE', 'F1F5F9'],
  ink: '312E81',
  categories: [['Laptops', 'laptops'], ['Monitors', 'monitors'], ['Smart Home', 'smart-home'], ['Audio', 'audio'], ['Accessories', 'accessories'], ['Smartphones', 'smartphones']],
  tags: [['New', 'new'], ['Bestseller', 'bestseller'], ['Deals', 'deals']],
  brands: [['Lenovo', 'lenovo'], ['ASUS', 'asus'], ['Dell', 'dell'], ['Logitech', 'logitech'], ['Xiaomi', 'xiaomi'], ['Sony', 'sony']],
  options: {
    ram: ['Memory', [['8GB', 0], ['16GB', 9000]]],
    color: ['Colour', ['Graphite', 'Silver']],
  },
  products: [
    ['Lenovo IdeaPad Slim 5 14"', 'laptops', 84999, { sale: 79999, brand: 'lenovo', tags: 'bestseller deals', vary: 'ram', featured: true }],
    ['ASUS Vivobook 15 OLED', 'laptops', 72999, { brand: 'asus', tags: 'new', vary: 'ram' }],
    ['Dell Inspiron 14 2-in-1', 'laptops', 96999, { sale: 89999, brand: 'dell', tags: 'deals' }],
    ['ASUS ROG Strix G16', 'laptops', 189999, { brand: 'asus', tags: 'new' }],
    ['Dell 27" 4K USB-C Monitor', 'monitors', 54999, { sale: 49999, brand: 'dell', tags: 'deals' }],
    ['ASUS 24" 165Hz Gaming Monitor', 'monitors', 22999, { brand: 'asus', tags: 'bestseller' }],
    ['Xiaomi Smart Camera C300', 'smart-home', 4290, { brand: 'xiaomi', tags: 'bestseller' }],
    ['Xiaomi Robot Vacuum S10', 'smart-home', 32999, { sale: 28999, brand: 'xiaomi', tags: 'deals' }],
    ['Smart LED Bulb (2 pack)', 'smart-home', 1590, { brand: 'xiaomi' }],
    ['Sony WH-1000XM5', 'audio', 42999, { brand: 'sony', tags: 'new', vary: 'color' }],
    ['Sony SRS-XB100 Speaker', 'audio', 6490, { brand: 'sony', tags: 'bestseller' }],
    ['Logitech MX Master 3S', 'accessories', 12990, { sale: 11490, brand: 'logitech', tags: 'bestseller deals', vary: 'color' }],
    ['Logitech MX Keys Mini', 'accessories', 11490, { brand: 'logitech' }],
    ['USB-C 7-in-1 Hub', 'accessories', 3490, { brand: 'asus', stock: 0 }],
    ['Xiaomi 14 5G', 'smartphones', 99999, { brand: 'xiaomi', tags: 'new' }],
  ],
  blogCategories: [['Guides', 'guides'], ['Reviews', 'reviews'], ['News', 'news']],
  posts: [
    ['How Much RAM Does Your Laptop Need?', 'guides', '8GB, 16GB or more - what actually matters for work, study and gaming.'],
    ['Building a Calm Home Office Desk', 'guides', 'The monitor, mouse and keyboard combo we keep recommending.'],
    ['Sony WH-1000XM5 Long-Term Review', 'reviews', 'Six months later: noise cancelling, comfort and battery.'],
    ['Nexora Opens a Service Centre in Uttara', 'news', 'Walk-in repairs and warranty claims, six days a week.'],
  ],
};
