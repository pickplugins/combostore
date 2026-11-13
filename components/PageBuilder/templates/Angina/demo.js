/**
 * Angina Home & Garden's demo catalog (lib/demo/catalog.js builds it).
 * Slugs match the template: the room and department categories, the deal,
 * plant-care, budget, style and look tags, and the makers (product_brand).
 * `desc` is the card's maker line (maker and material). The makers are
 * invented.
 */
export default {
  about: 'Home decor and garden from independent makers across Bangladesh.',
  colors: ['EDE5D8', 'F7E4DA', 'E4EBDD', 'F8EDD3', 'E3ECEE'],
  ink: '24201B',
  categories: [['Living Room', 'living'], ['Bedroom', 'bedroom'], ['Dining & Kitchen', 'kitchen-dining'], ['Bath', 'bath'], ['Workspace', 'workspace'], ['Decor & Textiles', 'decor'], ['Lighting', 'lighting'], ['Plants', 'plants'], ['Garden & Balcony', 'garden']],
  tags: [['Shop the Look: Living', 'look-living'], ['Flash Deal', 'flash-deal'], ['New', 'new'], ['Bestseller', 'bestseller'], ['Easy Care', 'easy-care'], ['Pet Safe', 'pet-safe'], ['Low Light', 'low-light'], ['Sun Lovers', 'sun-lovers'], ['Under ৳999', 'under-999'], ['Under ৳2,499', 'under-2499'], ['Under ৳4,999', 'under-4999'], ['Under ৳9,999', 'under-9999'], ['Premium', 'premium'], ['Japandi', 'style-japandi'], ['Boho', 'style-boho'], ['Mid-century', 'style-mid-century'], ['Deshi Craft', 'style-deshi-craft']],
  brands: [['Kaath Studio', 'kaath-studio'], ['Lumen & Co.', 'lumen-co'], ['Sobuj Nursery', 'sobuj-nursery'], ['Rekha Prints', 'rekha-prints'], ['Shatranji House', 'shatranji-house'], ['Rangpur Looms', 'rangpur-looms'], ['Bijoypur Clay', 'bijoypur-clay'], ['Cane & Co.', 'cane-co']],
  options: {
    colour: ['Colour', [['Terracotta', 0], ['Sage', 0], ['Oat', 0]]],
    size: ['Size', [['Small', 0], ['Medium', 450], ['Large', 950]]],
    rug: ['Size', [['120 × 180 cm', 0], ['160 × 230 cm', 3200], ['200 × 300 cm', 6900]]],
  },
  products: [
    ['Mira 3-Seat Sofa', 'living', 52000, { sale: 48500, brand: 'kaath-studio', tags: 'look-living bestseller premium style-mid-century', vary: 'colour', desc: 'by Kaath Studio · mango wood, linen', featured: true }],
    ['Brass Dome Floor Lamp', 'lighting living', 6900, { brand: 'lumen-co', tags: 'look-living bestseller under-9999 style-mid-century', desc: 'by Lumen & Co. · brass, 160 cm' }],
    ['Monstera in Ceramic Pot', 'plants', 2450, { brand: 'sobuj-nursery', tags: 'look-living easy-care low-light under-2499', vary: 'size', desc: 'by Sobuj Nursery · 90 cm tall' }],
    ['Sun & Arch Print Set (2)', 'decor living', 3200, { brand: 'rekha-prints', tags: 'look-living new under-4999 style-boho', desc: 'by Rekha Prints · A3, framed' }],
    ['Handwoven Jute Rug', 'decor living', 7800, { brand: 'shatranji-house', tags: 'look-living style-deshi-craft under-9999', vary: 'rug', desc: 'by Shatranji House · jute' }],
    ['Teak Coffee Table, Round', 'living', 14500, { sale: 12900, brand: 'kaath-studio', tags: 'flash-deal style-mid-century premium', desc: 'by Kaath Studio · teak, 90 cm' }],
    ['Rattan Accent Chair', 'living', 11900, { brand: 'cane-co', tags: 'bestseller style-boho premium', desc: 'by Cane & Co. · rattan, cotton' }],
    ['Linen Cushion Cover (2)', 'decor bedroom', 1290, { sale: 990, brand: 'rangpur-looms', tags: 'flash-deal under-999 style-japandi', vary: 'colour', desc: 'by Rangpur Looms · 45 × 45 cm' }],
    ['Nakshi Kantha Bedcover', 'bedroom decor', 6400, { brand: 'rangpur-looms', tags: 'bestseller style-deshi-craft under-9999', desc: 'by Rangpur Looms · hand-stitched' }],
    ['Oak Platform Bed, Queen', 'bedroom', 38500, { brand: 'kaath-studio', tags: 'new premium style-japandi', desc: 'by Kaath Studio · oak, 5 × 6.5 ft' }],
    ['Cotton Bedsheet Set', 'bedroom', 2890, { sale: 2290, brand: 'rangpur-looms', tags: 'flash-deal under-2499', vary: 'colour', desc: 'by Rangpur Looms · 300 TC, king' }],
    ['Cane Bedside Table', 'bedroom', 5400, { brand: 'cane-co', tags: 'style-boho under-9999', desc: 'by Cane & Co. · cane, mango wood' }],
    ['Terracotta Dinner Set (16)', 'kitchen-dining', 4200, { brand: 'bijoypur-clay', tags: 'bestseller style-deshi-craft under-4999', desc: 'by Bijoypur Clay · glazed' }],
    ['Mango Wood Serving Board', 'kitchen-dining', 1450, { sale: 1190, brand: 'kaath-studio', tags: 'flash-deal under-2499', desc: 'by Kaath Studio · 45 cm' }],
    ['Jute Placemats (6)', 'kitchen-dining decor', 890, { brand: 'shatranji-house', tags: 'under-999 style-deshi-craft', desc: 'by Shatranji House · jute' }],
    ['Stoneware Mug Set (4)', 'kitchen-dining', 1690, { brand: 'bijoypur-clay', tags: 'new under-2499 style-japandi', desc: 'by Bijoypur Clay · 350 ml' }],
    ['Waffle Bath Towel Set', 'bath', 1990, { brand: 'rangpur-looms', tags: 'under-2499 style-japandi', desc: 'by Rangpur Looms · cotton' }],
    ['Clay Soap Dish & Tumbler', 'bath', 790, { brand: 'bijoypur-clay', tags: 'under-999 new', desc: 'by Bijoypur Clay · terracotta' }],
    ['Floating Desk, Walnut', 'workspace', 9800, { sale: 8400, brand: 'kaath-studio', tags: 'flash-deal style-japandi', desc: 'by Kaath Studio · 100 cm' }],
    ['Woven Desk Lamp', 'lighting workspace', 3400, { brand: 'cane-co', tags: 'new style-boho under-4999', desc: 'by Cane & Co. · rattan shade' }],
    ['Rice-Paper Pendant', 'lighting', 2900, { brand: 'lumen-co', tags: 'bestseller style-japandi under-4999', vary: 'size', desc: 'by Lumen & Co. · 50 cm' }],
    ['Snake Plant (Sansevieria)', 'plants garden', 950, { brand: 'sobuj-nursery', tags: 'easy-care low-light pet-safe under-999 bestseller', desc: 'by Sobuj Nursery · 60 cm' }],
    ['Areca Palm', 'plants', 1850, { brand: 'sobuj-nursery', tags: 'pet-safe easy-care under-2499', desc: 'by Sobuj Nursery · 120 cm' }],
    ['Fiddle Leaf Fig', 'plants', 3400, { sale: 2900, brand: 'sobuj-nursery', tags: 'flash-deal sun-lovers', desc: 'by Sobuj Nursery · 110 cm' }],
    ['Bougainvillea, Balcony Size', 'garden plants', 690, { brand: 'sobuj-nursery', tags: 'sun-lovers under-999 new', desc: 'by Sobuj Nursery · flowering' }],
    ['Balcony Starter Set (6 plants)', 'garden plants', 4900, { sale: 4200, brand: 'sobuj-nursery', tags: 'bestseller easy-care', desc: 'by Sobuj Nursery · pots + soil' }],
    ['Terracotta Planter Trio', 'garden decor', 1590, { brand: 'bijoypur-clay', tags: 'bestseller under-2499 style-deshi-craft', vary: 'size', desc: 'by Bijoypur Clay · 3 sizes' }],
    ['Railing Planter Box (2)', 'garden', 1290, { brand: 'cane-co', tags: 'new under-2499', desc: 'by Cane & Co. · fits 2-4 in rail' }],
    ['Hanging Macramé Planter', 'garden decor', 650, { brand: 'shatranji-house', tags: 'under-999 style-boho', desc: 'by Shatranji House · cotton rope' }],
    ['Self-Watering Pot, 30 cm', 'garden plants', 1150, { brand: 'bijoypur-clay', tags: 'easy-care under-2499', stock: 0, desc: 'by Bijoypur Clay · 14-day reservoir' }],
  ],
  blogCategories: [['Room Ideas', 'room-ideas'], ['Plant Care', 'plant-care'], ['Maker Stories', 'maker-stories']],
  posts: [
    ['A Warm Living Room on a ৳70,000 Budget', 'room-ideas', 'The five pieces from our hero room, and where to save and splurge.'],
    ['Six Plants That Survive a North-Facing Flat', 'plant-care', 'Low light, forgetful watering, and still green in March.'],
    ['Inside a Rangpur Loom', 'maker-stories', 'How a nakshi kantha bedcover goes from cotton to your bed in three weeks.'],
    ['Small Balcony, Big Garden', 'plant-care', 'Railing planters, hanging pots and the best sun-loving plants for Dhaka.'],
  ],
};
