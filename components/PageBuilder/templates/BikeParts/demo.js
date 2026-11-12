/**
 * BikeParts Pro's demo catalog (lib/demo/catalog.js builds it). Slugs match
 * the template: engine-parts, brakes-clutch, tyres-tubes, riding-gear and
 * the honda / yamaha / suzuki / bajaj brands.
 */
export default {
  about: 'Genuine and OEM-grade motorcycle parts, delivered nationwide.',
  colors: ['FEE2E2', 'F3F4F6', 'FEF3C7', 'E5E7EB', 'FFEDD5'],
  ink: '111827',
  categories: [['Engine Parts', 'engine-parts'], ['Brakes & Clutch', 'brakes-clutch'], ['Tyres & Tubes', 'tyres-tubes'], ['Riding Gear', 'riding-gear'], ['Lights & Electricals', 'lights-electricals']],
  tags: [['Genuine', 'genuine'], ['Bestseller', 'bestseller'], ['Deals', 'deals']],
  brands: [['Honda', 'honda'], ['Yamaha', 'yamaha'], ['Suzuki', 'suzuki'], ['Bajaj', 'bajaj'], ['TVS', 'tvs']],
  options: {
    size: ['Size', ['M', 'L', 'XL']],
    tyre: ['Tyre Size', [['90/90-17', 0], ['100/80-17', 400], ['110/70-17', 900]]],
  },
  products: [
    ['Piston Kit 150cc (Std)', 'engine-parts', 3450, { sale: 3150, brand: 'honda', tags: 'genuine bestseller', featured: true }],
    ['Cam Chain Kit', 'engine-parts', 1850, { brand: 'yamaha', tags: 'genuine' }],
    ['Air Filter Element', 'engine-parts', 650, { brand: 'suzuki', tags: 'bestseller' }],
    ['Spark Plug Iridium', 'engine-parts', 890, { sale: 750, brand: 'bajaj', tags: 'deals' }],
    ['Engine Oil 10W-40 (1L)', 'engine-parts', 980, { brand: 'yamaha', tags: 'bestseller' }],
    ['Front Brake Pads', 'brakes-clutch', 750, { sale: 650, brand: 'honda', tags: 'deals bestseller' }],
    ['Disc Rotor 276mm', 'brakes-clutch', 3250, { brand: 'yamaha', tags: 'genuine' }],
    ['Clutch Plate Set', 'brakes-clutch', 2150, { brand: 'bajaj', tags: 'genuine' }],
    ['Clutch Cable', 'brakes-clutch', 420, { brand: 'suzuki' }],
    ['Tubeless Rear Tyre', 'tyres-tubes', 4250, { sale: 3950, brand: 'tvs', tags: 'deals', vary: 'tyre' }],
    ['Front Tyre Sport Grip', 'tyres-tubes', 3650, { brand: 'tvs', vary: 'tyre' }],
    ['Heavy Duty Inner Tube', 'tyres-tubes', 520, { brand: 'bajaj', stock: 0 }],
    ['Full Face Helmet DOT', 'riding-gear', 4890, { sale: 4290, brand: 'yamaha', tags: 'bestseller', vary: 'size' }],
    ['Mesh Riding Jacket', 'riding-gear', 6490, { brand: 'suzuki', vary: 'size' }],
    ['Riding Gloves Knuckle Guard', 'riding-gear', 1290, { sale: 990, brand: 'honda', tags: 'deals', vary: 'size' }],
    ['LED Headlight H4', 'lights-electricals', 1650, { brand: 'honda' }],
    ['12V Maintenance-Free Battery', 'lights-electricals', 2850, { brand: 'yamaha', tags: 'genuine' }],
  ],
  blogCategories: [['Maintenance', 'maintenance'], ['Riding Tips', 'riding-tips'], ['News', 'news']],
  posts: [
    ['When to Change Your Brake Pads', 'maintenance', 'The sounds, the feel and the mileage that tell you it is time.'],
    ['Choosing the Right Engine Oil', 'maintenance', '10W-30 or 10W-40? What the numbers mean for your bike.'],
    ['Monsoon Riding Checklist', 'riding-tips', 'Tyres, lights and gear to check before the rains.'],
    ['Genuine vs OEM Parts: What You Get', 'news', 'How we source parts and how to spot a fake.'],
  ],
};
