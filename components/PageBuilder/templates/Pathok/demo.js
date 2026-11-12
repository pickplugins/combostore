/**
 * Pathok Books' demo catalog (lib/demo/catalog.js builds it). Slugs match
 * the template's genres and the bestseller / pre-order /
 * book-of-the-month / staff-picks tags. The authors are the "brands".
 */
export default {
  about: 'Bangla and English books, delivered across the country.',
  colors: ['FDE2DD', 'FEF3C7', 'E0F2FE', 'F3E8FF', 'DCFCE7'],
  ink: '7A1F12',
  categories: [['Bangla Sahitya', 'bangla-sahitya'], ['Fiction', 'fiction'], ['Children\'s', 'childrens'], ['Academic', 'academic'], ['Non-Fiction', 'non-fiction'], ['Mystery & Thriller', 'mystery-thriller'], ['Poetry', 'poetry'], ['History', 'history'], ['Self-Help', 'self-help'], ['Science', 'science'], ['Comics', 'comics']],
  tags: [['Bestseller', 'bestseller'], ['Pre-order', 'pre-order'], ['Book of the Month', 'book-of-the-month'], ['Staff Picks', 'staff-picks']],
  brands: [['Pathok Prokashoni', 'pathok-prokashoni'], ['Nodi Books', 'nodi-books'], ['Shapla Press', 'shapla-press'], ['Kitab Ghar', 'kitab-ghar']],
  options: {
    format: ['Format', [['Paperback', 0], ['Hardcover', 180]]],
  },
  products: [
    ['Nodir Opare Gram (Novel)', 'bangla-sahitya fiction', 450, { sale: 380, brand: 'pathok-prokashoni', tags: 'bestseller book-of-the-month', vary: 'format', featured: true }],
    ['Shohorer Golpo (Short Stories)', 'bangla-sahitya fiction', 350, { brand: 'shapla-press', tags: 'staff-picks' }],
    ['The Monsoon Letters', 'fiction', 690, { brand: 'nodi-books', tags: 'bestseller', vary: 'format' }],
    ['Last Train to Sylhet', 'mystery-thriller fiction', 520, { sale: 450, brand: 'nodi-books', tags: 'staff-picks' }],
    ['Kuasha (Detective Series 1)', 'mystery-thriller bangla-sahitya', 300, { brand: 'kitab-ghar', tags: 'bestseller' }],
    ['The Silent Ledger', 'mystery-thriller', 590, { brand: 'nodi-books', tags: 'pre-order', stock: 0 }],
    ['Brishti Diner Kobita', 'poetry bangla-sahitya', 280, { brand: 'shapla-press', tags: 'staff-picks' }],
    ['Selected Poems of the Delta', 'poetry', 420, { brand: 'nodi-books' }],
    ['Bengal Through the Ages', 'history non-fiction', 850, { brand: 'pathok-prokashoni', tags: 'book-of-the-month', vary: 'format' }],
    ['1971: Voices of Freedom', 'history', 650, { sale: 580, brand: 'pathok-prokashoni', tags: 'bestseller' }],
    ['Small Habits, Big Change', 'self-help non-fiction', 480, { sale: 420, brand: 'kitab-ghar', tags: 'bestseller' }],
    ['Focus in a Noisy World', 'self-help', 520, { brand: 'kitab-ghar', tags: 'pre-order' }],
    ['The Universe in Simple Words', 'science non-fiction', 590, { brand: 'nodi-books', tags: 'staff-picks' }],
    ['Biggan Moja (Kids Science)', 'science childrens', 320, { brand: 'shapla-press' }],
    ['Thakurmar Jhuli (Illustrated)', 'childrens bangla-sahitya', 390, { brand: 'shapla-press', tags: 'bestseller' }],
    ['The Clever Little Fox', 'childrens', 250, { brand: 'nodi-books' }],
    ['HSC Physics First Paper', 'academic science', 380, { brand: 'pathok-prokashoni', tags: 'bestseller' }],
    ['English Grammar Made Easy', 'academic', 320, { brand: 'kitab-ghar' }],
    ['Tintin-Style Adventures Vol. 1', 'comics childrens', 450, { brand: 'kitab-ghar', tags: 'staff-picks' }],
    ['Dhaka Graphic Stories', 'comics', 550, { brand: 'shapla-press', tags: 'pre-order' }],
  ],
  blogCategories: [['Reading Lists', 'reading-lists'], ['Author Talks', 'author-talks'], ['News', 'news']],
  posts: [
    ['Ten Bangla Novels Everyone Should Read', 'reading-lists', 'From classics to new voices - our staff\'s all-time list.'],
    ['In Conversation with a First-Time Novelist', 'author-talks', 'How a short story became this month\'s bestseller.'],
    ['Building a Reading Habit With Kids', 'reading-lists', 'Picture books to chapter books, one page at a time.'],
    ['Book Fair Pre-orders Are Open', 'news', 'Reserve the season\'s new releases before they sell out.'],
  ],
};
