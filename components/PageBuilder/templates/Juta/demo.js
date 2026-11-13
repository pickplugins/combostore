/**
 * Juta Sneaker Store's demo catalog (lib/demo/catalog.js builds it).
 * Slugs match the template: the eight categories, the drop / feel / EU size
 * tags, and the brands. `desc` is the card's mono line (size range and
 * material). The brands are invented.
 */
export default {
  about: 'Genuine sneakers and everyday shoes, sold by EU size.',
  colors: ['EFEDE8', 'D4FF3F', 'FFEDE4', 'E3DFD7', '2A2A2A'],
  ink: '121212',
  categories: [['Sneakers', 'sneakers'], ['Running', 'running'], ['Formal', 'formal'], ['Sandals & Slides', 'sandals'], ['Boots', 'boots'], ['Kids', 'kids'], ['Men', 'men'], ['Women', 'women']],
  tags: [['New', 'new'], ['Bestseller', 'bestseller'], ['Sale', 'sale'], ['Firm', 'firm'], ['Balanced', 'balanced'], ['Plush', 'plush'], ['EU 38', 'eu-38'], ['EU 39', 'eu-39'], ['EU 40', 'eu-40'], ['EU 41', 'eu-41'], ['EU 42', 'eu-42'], ['EU 43', 'eu-43'], ['EU 44', 'eu-44'], ['EU 45', 'eu-45'], ['EU 46', 'eu-46']],
  brands: [['Stride Lab', 'stride-lab'], ['Kinetiq', 'kinetiq'], ['Northpaw', 'northpaw'], ['Velo Court', 'velo-court'], ['Orbit Run', 'orbit-run'], ['Mochi', 'mochi']],
  options: {
    size: ['Size', [['EU 39', 0], ['EU 40', 0], ['EU 41', 0], ['EU 42', 0], ['EU 43', 0], ['EU 44', 0], ['EU 45', 0]]],
    wsize: ['Size', [['EU 36', 0], ['EU 37', 0], ['EU 38', 0], ['EU 39', 0], ['EU 40', 0], ['EU 41', 0]]],
    colour: ['Colour', [['Bone', 0], ['Ink', 0], ['Volt', 200]]],
  },
  products: [
    ['Volt Runner 07', 'running sneakers men', 6490, { brand: 'stride-lab', tags: 'new bestseller plush eu-41 eu-42 eu-43', vary: 'size colour', desc: 'EU 39-46 · Knit upper · 38 mm foam', featured: true }],
    ['Volt Runner 07 W', 'running women', 6490, { brand: 'stride-lab', tags: 'new plush eu-38 eu-39', vary: 'wsize', desc: 'EU 36-41 · Knit upper' }],
    ['Kinetiq Tempo Racer', 'running men', 8990, { sale: 7490, brand: 'kinetiq', tags: 'firm sale eu-42 eu-43', vary: 'size', desc: 'EU 39-45 · Carbon plate' }],
    ['Orbit Run Daily 3', 'running men women', 4990, { brand: 'orbit-run', tags: 'balanced bestseller eu-40 eu-41 eu-42', vary: 'size', desc: 'EU 38-46 · Mesh upper' }],
    ['Orbit Run Trail Grip GTX', 'running boots men', 7990, { sale: 6890, brand: 'orbit-run', tags: 'balanced sale eu-44 eu-45', desc: 'EU 40-46 · Waterproof' }],
    ['Velo Court Low', 'sneakers men women', 4290, { brand: 'velo-court', tags: 'bestseller firm eu-41 eu-42 eu-43', vary: 'size colour', desc: 'EU 38-46 · Leather', featured: true }],
    ['Velo Court Hi', 'sneakers men', 4890, { brand: 'velo-court', tags: 'new firm eu-42 eu-43 eu-44', vary: 'size', desc: 'EU 39-46 · Suede overlays' }],
    ['Stride Lab Chunk 2', 'sneakers women', 5590, { sale: 4790, brand: 'stride-lab', tags: 'sale balanced eu-38 eu-39', vary: 'wsize', desc: 'EU 36-41 · Platform sole' }],
    ['Kinetiq Canvas Classic', 'sneakers men women', 2490, { brand: 'kinetiq', tags: 'bestseller firm eu-40 eu-41 eu-42', vary: 'size', desc: 'EU 36-46 · Cotton canvas' }],
    ['Kinetiq Canvas Hi', 'sneakers women', 2690, { brand: 'kinetiq', tags: 'eu-38 eu-39', desc: 'EU 36-41 · Cotton canvas' }],
    ['Northpaw Skate Pro', 'sneakers men', 3990, { brand: 'northpaw', tags: 'new firm eu-41 eu-42', desc: 'EU 39-45 · Vulcanised' }],
    ['Mochi Cloudstep Slip-on', 'sneakers women', 3290, { sale: 2790, brand: 'mochi', tags: 'plush bestseller sale eu-38', vary: 'wsize', desc: 'EU 36-41 · Stretch knit' }],
    ['Mochi Air Knit Trainer', 'running women', 4490, { brand: 'mochi', tags: 'plush new eu-37 eu-38', desc: 'EU 36-41 · Recycled knit' }],
    ['Classic Oxford, Tan', 'formal men', 5990, { brand: 'northpaw', tags: 'bestseller eu-42 eu-43', vary: 'size', desc: 'EU 39-45 · Full-grain leather' }],
    ['Penny Loafer, Black', 'formal men', 5490, { sale: 4690, brand: 'northpaw', tags: 'sale eu-41 eu-42', desc: 'EU 39-45 · Leather sole' }],
    ['Derby Lite, Brown', 'formal men', 4790, { brand: 'velo-court', tags: 'balanced eu-43', desc: 'EU 39-45 · Cushioned insole' }],
    ['Pointed Ballet Flat', 'formal women', 2990, { brand: 'mochi', tags: 'new eu-37 eu-38', desc: 'EU 36-41 · Soft leather' }],
    ['Block Heel Mule', 'formal women', 3490, { brand: 'mochi', tags: 'eu-38', desc: 'EU 36-41 · 5 cm heel' }],
    ['Recovery Slide', 'sandals men women', 1490, { sale: 1190, brand: 'kinetiq', tags: 'plush sale bestseller eu-41 eu-42', desc: 'EU 36-46 · EVA foam' }],
    ['Strap Sandal Trek', 'sandals men', 2290, { brand: 'orbit-run', tags: 'balanced eu-42 eu-43', desc: 'EU 39-45 · Adjustable straps' }],
    ['Cross Strap Flat Sandal', 'sandals women', 1790, { brand: 'mochi', tags: 'new eu-37 eu-38', desc: 'EU 36-41 · Vegan leather' }],
    ['Chelsea Boot, Suede', 'boots men', 6990, { brand: 'northpaw', tags: 'new eu-42 eu-43', vary: 'size', desc: 'EU 39-45 · Elastic gusset' }],
    ['Work Boot Steel Toe', 'boots men', 7490, { brand: 'northpaw', tags: 'firm eu-43 eu-44', desc: 'EU 40-46 · Steel toe cap' }],
    ['Ankle Boot, Black', 'boots women', 5290, { sale: 4490, brand: 'mochi', tags: 'sale eu-38 eu-39', desc: 'EU 36-41 · Side zip' }],
    ['Kids Velcro Runner', 'kids running', 1990, { brand: 'orbit-run', tags: 'bestseller', desc: 'EU 24-35 · Hook and loop' }],
    ['Kids Light-up Sneaker', 'kids sneakers', 2290, { sale: 1890, brand: 'kinetiq', tags: 'new sale', desc: 'EU 24-33 · LED sole' }],
    ['Kids School Shoe', 'kids formal', 1690, { brand: 'northpaw', desc: 'EU 28-38 · Scuff-proof toe' }],
    ['Toddler First Steps', 'kids', 1290, { brand: 'mochi', tags: 'plush', desc: 'EU 19-24 · Flexible sole' }],
    ['Stride Lab Retro 86', 'sneakers men', 5990, { brand: 'stride-lab', tags: 'new balanced eu-42 eu-44', stock: 0, desc: 'EU 39-46 · Suede & mesh' }],
    ['Velo Court Low, Volt', 'sneakers women men', 4490, { brand: 'velo-court', tags: 'new eu-40 eu-41', desc: 'EU 36-46 · Leather' }],
  ],
  blogCategories: [['Sizing', 'sizing'], ['Shoe Care', 'shoe-care'], ['Drop Notes', 'drop-notes']],
  posts: [
    ['How to Measure Your Foot at Home', 'sizing', 'A pen, a ruler and three minutes: find your EU size before you order.'],
    ['Cleaning White Sneakers Without Ruining Them', 'shoe-care', 'Soap, a soft brush and the one thing never to do: the washing machine.'],
    ['Firm, Balanced or Plush? Picking Your Cushion', 'sizing', 'What our six-bar cushion scale means, and which feel suits your day.'],
    ['Drop 07: The Volt Runner, Explained', 'drop-notes', 'Knit upper, 38 mm of foam and why it runs a little snug.'],
  ],
};
