/**
 * Oushodh Pharmacy's demo catalog (lib/demo/catalog.js builds it). Slugs
 * match the template's sixteen health categories and the deals tag; most
 * products sit in two of them, as in a real pharmacy.
 */
export default {
  about: 'Genuine medicines and health essentials from a licensed pharmacy.',
  colors: ['CCFBF1', 'E0F2FE', 'ECFEFF', 'F0FDFA', 'F1F5F9'],
  ink: '0F4F48',
  categories: [['OTC Medicines', 'otc-medicines'], ['Vitamins & Supplements', 'vitamins-supplements'], ['Diabetes Care', 'diabetes-care'], ['Health Devices', 'health-devices'], ['Personal Care', 'personal-care'], ['Baby & Mother', 'baby-mother'], ['Fever & Pain', 'fever-pain'], ['Cold & Flu', 'cold-flu'], ['Heart & BP', 'heart-bp'], ['Skin Care', 'skin-care'], ['First Aid', 'first-aid'], ['Digestive Health', 'digestive-health'], ['Respiratory', 'respiratory'], ['Women\'s Health', 'womens-health'], ['Bone & Joint', 'bone-joint'], ['Eye & Ear', 'eye-ear']],
  tags: [['Deals', 'deals'], ['Bestseller', 'bestseller']],
  brands: [['Square', 'square'], ['Beximco', 'beximco'], ['Incepta', 'incepta'], ['Omron', 'omron'], ['Accu-Chek', 'accu-chek'], ['Himalaya', 'himalaya']],
  options: {
    pack: ['Pack', [['1 strip', 0], ['5 strips', 40]]],
  },
  products: [
    ['Paracetamol 500mg (10 tabs)', 'otc-medicines fever-pain', 12, { brand: 'square', tags: 'bestseller', vary: 'pack', featured: true }],
    ['Ibuprofen 400mg (10 tabs)', 'otc-medicines fever-pain bone-joint', 25, { brand: 'beximco', vary: 'pack' }],
    ['Antihistamine 10mg (10 tabs)', 'otc-medicines cold-flu', 35, { brand: 'incepta', tags: 'deals' }],
    ['Cough Syrup 100ml', 'cold-flu respiratory', 85, { sale: 75, brand: 'square', tags: 'deals' }],
    ['Steam Inhaler', 'respiratory health-devices', 1450, { brand: 'omron' }],
    ['Vitamin C 1000mg (30)', 'vitamins-supplements cold-flu', 450, { sale: 390, brand: 'incepta', tags: 'bestseller deals' }],
    ['Calcium + D3 (30)', 'vitamins-supplements bone-joint womens-health', 380, { brand: 'square' }],
    ['Multivitamin Daily (30)', 'vitamins-supplements', 520, { brand: 'beximco', tags: 'bestseller' }],
    ['Glucometer Starter Kit', 'diabetes-care health-devices', 2450, { sale: 2190, brand: 'accu-chek', tags: 'deals' }],
    ['Test Strips (50)', 'diabetes-care', 1650, { brand: 'accu-chek', tags: 'bestseller' }],
    ['Digital BP Monitor', 'heart-bp health-devices', 4290, { sale: 3890, brand: 'omron', tags: 'bestseller deals' }],
    ['Omega-3 Fish Oil (60)', 'heart-bp vitamins-supplements', 890, { brand: 'incepta' }],
    ['Digital Thermometer', 'health-devices fever-pain', 290, { brand: 'omron' }],
    ['Antiseptic Liquid 500ml', 'first-aid personal-care', 210, { brand: 'square', tags: 'bestseller' }],
    ['First Aid Kit (Home)', 'first-aid', 990, { brand: 'beximco' }],
    ['Elastic Bandage', 'first-aid bone-joint', 120, { brand: 'beximco' }],
    ['Moisturising Cream 100g', 'skin-care personal-care', 320, { brand: 'himalaya' }],
    ['Sunscreen SPF50 50ml', 'skin-care', 690, { sale: 590, brand: 'himalaya', tags: 'deals' }],
    ['Oral Saline (20 sachets)', 'digestive-health', 120, { brand: 'square', tags: 'bestseller' }],
    ['Antacid Suspension 200ml', 'digestive-health', 140, { brand: 'incepta' }],
    ['Prenatal Vitamins (30)', 'womens-health baby-mother', 650, { brand: 'square' }],
    ['Baby Diaper Rash Cream', 'baby-mother skin-care', 280, { brand: 'himalaya' }],
    ['Baby Massage Oil 200ml', 'baby-mother', 260, { brand: 'himalaya', stock: 0 }],
    ['Lubricating Eye Drops 10ml', 'eye-ear', 180, { brand: 'incepta' }],
    ['Ear Drops 10ml', 'eye-ear', 95, { brand: 'square' }],
    ['Hand Sanitiser 250ml', 'personal-care', 160, { sale: 140, brand: 'beximco', tags: 'deals' }],
  ],
  blogCategories: [['Health Tips', 'health-tips'], ['Medicine Guide', 'medicine-guide'], ['News', 'news']],
  posts: [
    ['Managing a Fever at Home', 'health-tips', 'When to rest, what to take and when to see a doctor.'],
    ['How to Read Your BP Monitor', 'medicine-guide', 'Systolic, diastolic and what a normal reading looks like.'],
    ['Staying Healthy in Flu Season', 'health-tips', 'Simple habits that keep the whole family well.'],
    ['How We Keep Every Medicine Genuine', 'news', 'Licensed suppliers, cold chain and batch checks.'],
  ],
};
