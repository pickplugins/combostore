/**
 * WonderJoy's demo catalog (lib/demo/catalog.js builds it). Slugs match the
 * template: the play categories, the age bands and the trending tag.
 */
export default {
  about: 'Safe, joyful toys that grow with your child.',
  colors: ['FFF0F0', 'E6FAF6', 'FFF9EB', 'EEF2FF', 'FCE7F3'],
  ink: '1D1E2C',
  categories: [['STEM & Science', 'stem-science'], ['Eco Wooden', 'eco-wooden'], ['Arts & Crafts', 'arts-crafts'], ['Outdoor & Sports', 'outdoor-sports'], ['Plush & Pretend', 'plush-pretend'], ['Play Kits', 'play-kits'], ['Ages 0-2', 'ages-0-2'], ['Ages 3-5', 'ages-3-5'], ['Ages 6-8', 'ages-6-8'], ['Ages 9+', 'ages-9-plus']],
  tags: [['Trending', 'trending'], ['New', 'new'], ['Gift Idea', 'gift-idea']],
  brands: [['Brightbox', 'brightbox'], ['Tiny Tinker', 'tiny-tinker'], ['Leafy Toys', 'leafy-toys'], ['Moonbeam', 'moonbeam']],
  options: {
    color: ['Colour', ['Coral', 'Teal', 'Sunny']],
    size: ['Size', ['Small', 'Large']],
  },
  products: [
    ['Junior Robotics Kit', 'stem-science ages-9-plus', 3490, { sale: 2990, brand: 'tiny-tinker', tags: 'trending', featured: true }],
    ['Volcano Science Lab', 'stem-science ages-6-8', 1590, { brand: 'tiny-tinker', tags: 'trending gift-idea' }],
    ['Magnetic Building Tiles (60 pcs)', 'stem-science ages-3-5', 2890, { sale: 2490, brand: 'brightbox', tags: 'trending' }],
    ['Kids Microscope Starter Set', 'stem-science ages-9-plus', 2290, { brand: 'tiny-tinker', tags: 'new' }],
    ['Wooden Rainbow Stacker', 'eco-wooden ages-0-2', 1290, { brand: 'leafy-toys', tags: 'trending' }],
    ['Wooden Shape Sorter', 'eco-wooden ages-0-2', 990, { sale: 850, brand: 'leafy-toys' }],
    ['Bamboo Train Set', 'eco-wooden ages-3-5', 2490, { brand: 'leafy-toys', tags: 'gift-idea' }],
    ['Washable Paint Studio', 'arts-crafts ages-3-5', 1190, { brand: 'brightbox', tags: 'new' }],
    ['Bead & Bracelet Craft Box', 'arts-crafts ages-6-8', 890, { sale: 750, brand: 'brightbox', tags: 'trending' }],
    ['Air-Dry Clay Kit', 'arts-crafts ages-6-8', 990, { brand: 'brightbox' }],
    ['Balance Bike', 'outdoor-sports ages-3-5', 4990, { sale: 4490, brand: 'brightbox', tags: 'trending', vary: 'color' }],
    ['Junior Football Set', 'outdoor-sports ages-6-8', 1490, { brand: 'brightbox' }],
    ['Giant Bubble Wand Kit', 'outdoor-sports ages-3-5', 590, { brand: 'moonbeam', stock: 0 }],
    ['Cuddly Elephant Plush', 'plush-pretend ages-0-2', 1090, { brand: 'moonbeam', tags: 'trending', vary: 'size' }],
    ['Pretend Kitchen Play Set', 'plush-pretend ages-3-5', 3990, { sale: 3490, brand: 'moonbeam', tags: 'gift-idea' }],
    ['Doctor Role-Play Kit', 'plush-pretend ages-3-5', 1290, { brand: 'moonbeam' }],
    ['Rainy Day Play Kit', 'play-kits ages-3-5', 1990, { brand: 'brightbox', tags: 'new' }],
    ['Sensory Play Kit for Babies', 'play-kits ages-0-2', 1690, { sale: 1490, brand: 'leafy-toys', tags: 'trending' }],
    ['Coding Board Game', 'play-kits stem-science ages-9-plus', 1890, { brand: 'tiny-tinker' }],
  ],
  blogCategories: [['Play Ideas', 'play-ideas'], ['Parenting', 'parenting'], ['Gift Guides', 'gift-guides']],
  posts: [
    ['10 Toys That Grow With Your Child', 'play-ideas', 'Open-ended toys that stay fun from toddler years to big-kid projects.'],
    ['Why STEM Toys Matter Early', 'parenting', 'Little experiments build big confidence - here is how to start.'],
    ['Birthday Gift Guide by Age', 'gift-guides', 'Our team\'s favourite picks for every age from 0 to 10.'],
    ['Five Rainy Day Activities', 'play-ideas', 'Keep little hands busy indoors with these easy ideas.'],
  ],
};
