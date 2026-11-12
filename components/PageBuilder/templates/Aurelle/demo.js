/**
 * Aurelle Fine Jewellery's demo catalog (lib/demo/catalog.js builds it).
 * Slugs match the template: rings, earrings, necklaces, bracelets, gifts.
 */
export default {
  about: 'Fine jewellery in 18k gold and sterling silver, made to be worn every day.',
  colors: ['F5EEE6', 'FBF7F2', 'EFE6DA', 'F3E8E2', 'E7E5E4'],
  ink: '1E1416',
  categories: [['Rings', 'rings'], ['Earrings', 'earrings'], ['Necklaces', 'necklaces'], ['Bracelets', 'bracelets'], ['Gifts', 'gifts']],
  tags: [['Bestseller', 'bestseller'], ['New', 'new'], ['Bridal', 'bridal']],
  brands: [['Aurelle', 'aurelle'], ['Aurelle Atelier', 'aurelle-atelier']],
  options: {
    ring: ['Ring Size', ['6', '7', '8', '9']],
    metal: ['Metal', [['Sterling Silver', 0], ['18k Gold Vermeil', 2500]]],
  },
  products: [
    ['Solitaire Promise Ring', 'rings', 12500, { brand: 'aurelle', tags: 'bestseller bridal', vary: 'ring metal', featured: true }],
    ['Stacking Band Trio', 'rings', 6900, { sale: 5900, brand: 'aurelle', tags: 'new', vary: 'ring' }],
    ['Emerald Cut Halo Ring', 'rings', 24500, { brand: 'aurelle-atelier', tags: 'bridal', vary: 'ring' }],
    ['Pearl Drop Earrings', 'earrings', 5900, { brand: 'aurelle', tags: 'bestseller', vary: 'metal' }],
    ['Mini Gold Huggies', 'earrings gifts', 3900, { sale: 3400, brand: 'aurelle', tags: 'new' }],
    ['Chandelier Bridal Earrings', 'earrings', 15900, { brand: 'aurelle-atelier', tags: 'bridal' }],
    ['Initial Pendant Necklace', 'necklaces gifts', 4900, { brand: 'aurelle', tags: 'bestseller', vary: 'metal' }],
    ['Layered Chain Necklace', 'necklaces', 6500, { brand: 'aurelle', tags: 'new' }],
    ['Diamond Station Necklace', 'necklaces', 32000, { brand: 'aurelle-atelier', tags: 'bridal', stock: 0 }],
    ['Tennis Bracelet', 'bracelets', 18900, { sale: 16900, brand: 'aurelle-atelier', tags: 'bestseller' }],
    ['Charm Bangle', 'bracelets gifts', 5400, { brand: 'aurelle', vary: 'metal' }],
    ['Beaded Gold Bracelet', 'bracelets', 4200, { brand: 'aurelle', tags: 'new' }],
    ['Gift Set: Studs & Pendant', 'gifts', 7900, { sale: 6900, brand: 'aurelle', tags: 'bestseller' }],
    ['Jewellery Travel Case', 'gifts', 1900, { brand: 'aurelle' }],
  ],
  blogCategories: [['Journal', 'journal'], ['Care', 'care'], ['Bridal', 'bridal-journal']],
  posts: [
    ['How to Find Your Ring Size', 'journal', 'Three easy ways to measure at home - no jeweller needed.'],
    ['Caring for Gold Vermeil', 'care', 'Keep the shine with a soft cloth and a little care.'],
    ['Bridal Jewellery, Piece by Piece', 'bridal-journal', 'Building a look for the big day, from earrings to bangles.'],
    ['Gifts She Will Wear Every Day', 'journal', 'Small, meaningful pieces under ৳8,000.'],
  ],
};
