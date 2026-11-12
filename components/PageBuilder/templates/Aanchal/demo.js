/**
 * Aanchal Saree House's demo catalog (lib/demo/catalog.js builds it). Slugs
 * match the template: jamdani, tant-cotton, silk-katan, blouse-jewellery,
 * lal-paar.
 */
export default {
  about: 'Handwoven sarees straight from Bangladesh\'s weaving villages.',
  colors: ['FDE2E4', 'FCE7F3', 'FEF3C7', 'FFE4E6', 'F5E6D3'],
  ink: '7A0C1F',
  categories: [['Jamdani', 'jamdani'], ['Tant & Cotton', 'tant-cotton'], ['Silk & Katan', 'silk-katan'], ['Blouse & Jewellery', 'blouse-jewellery'], ['Lal Paar', 'lal-paar']],
  tags: [['New Arrival', 'new-arrival'], ['Bestseller', 'bestseller'], ['Festive', 'festive']],
  brands: [['Aanchal Looms', 'aanchal-looms'], ['Tangail Weavers', 'tangail-weavers'], ['Rajshahi Silk', 'rajshahi-silk']],
  options: {
    blouse: ['Blouse Size', ['32', '34', '36', '38', '40']],
    color: ['Colour', ['Crimson', 'Ivory', 'Emerald']],
  },
  products: [
    ['Dhakai Jamdani, Ivory & Gold', 'jamdani', 14500, { sale: 12900, brand: 'aanchal-looms', tags: 'bestseller festive', featured: true }],
    ['Half-Silk Jamdani, Peacock Blue', 'jamdani', 8900, { brand: 'aanchal-looms', tags: 'new-arrival' }],
    ['Cotton Jamdani, Mint Butidar', 'jamdani tant-cotton', 5400, { sale: 4800, brand: 'aanchal-looms', tags: 'bestseller' }],
    ['Tangail Tant, Mustard', 'tant-cotton', 2200, { brand: 'tangail-weavers', tags: 'bestseller' }],
    ['Handloom Cotton, Indigo Check', 'tant-cotton', 1850, { brand: 'tangail-weavers', vary: 'color' }],
    ['Tant with Temple Border', 'tant-cotton lal-paar', 2450, { brand: 'tangail-weavers', tags: 'festive' }],
    ['Rajshahi Silk, Rani Pink', 'silk-katan', 9800, { sale: 8900, brand: 'rajshahi-silk', tags: 'festive' }],
    ['Banarasi Katan, Maroon Zari', 'silk-katan', 18500, { brand: 'rajshahi-silk', tags: 'festive new-arrival' }],
    ['Soft Silk, Sage Green', 'silk-katan', 7600, { brand: 'rajshahi-silk' }],
    ['Lal Paar Garad, Classic', 'lal-paar silk-katan', 6900, { brand: 'rajshahi-silk', tags: 'festive bestseller' }],
    ['Lal Paar Cotton, Puja Edit', 'lal-paar', 2650, { sale: 2350, brand: 'tangail-weavers', tags: 'festive' }],
    ['Lal Paar Jamdani', 'lal-paar jamdani', 11500, { brand: 'aanchal-looms', stock: 0 }],
    ['Ready Blouse, Gold Brocade', 'blouse-jewellery', 1650, { brand: 'aanchal-looms', vary: 'blouse' }],
    ['Cotton Blouse, Black', 'blouse-jewellery', 950, { brand: 'aanchal-looms', vary: 'blouse' }],
    ['Oxidised Jhumka Earrings', 'blouse-jewellery', 690, { sale: 590, brand: 'aanchal-looms', tags: 'bestseller' }],
    ['Kundan Choker Set', 'blouse-jewellery', 2450, { brand: 'aanchal-looms', tags: 'festive' }],
  ],
  blogCategories: [['Saree Stories', 'saree-stories'], ['Care', 'care'], ['Styling', 'styling']],
  posts: [
    ['How a Jamdani Is Woven', 'saree-stories', 'Weeks at the loom, one motif at a time - inside a Rupganj workshop.'],
    ['Caring for Silk and Katan', 'care', 'Fold, store and freshen your silks so they last generations.'],
    ['Five Ways to Drape a Lal Paar', 'styling', 'From Puja mornings to evening weddings.'],
    ['Picking a Blouse for Every Saree', 'styling', 'Contrast, match or go bold - a quick guide.'],
  ],
};
