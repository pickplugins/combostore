/**
 * Khelaghor's demo catalog (lib/demo/catalog.js builds it). Names are
 * Bangla, so every product and post carries a plain ASCII slug, and the
 * slugs match the template: the eight categories, the flash-sale / new /
 * bestseller / gift / under-299 tags, the age tags and the Mall brands.
 */
export default {
  lang: 'bn',
  about: 'শিশুদের জন্য যাচাই করা, নিরাপদ ও আসল পণ্য।',
  colors: ['EFE9FE', 'FFE9E3', 'FFF6DA', 'DDF6EC', 'E1F1FC', 'FFE6F1'],
  ink: '231A3D',
  categories: [
    ['খেলনা', 'toys'], ['বেবি কেয়ার', 'baby-care'], ['ডায়াপার ও ওয়াইপস', 'diapering'], ['খাবার ও ফিডিং', 'feeding'],
    ['শিশুর পোশাক', 'kids-fashion'], ['জুতা ও ব্যাগ', 'shoes-bags'], ['স্কুল ও বই', 'school-books'], ['রাইড ও সাইকেল', 'ride-ons'],
  ],
  tags: [
    ['ফ্ল্যাশ সেল', 'flash-sale'], ['নতুন', 'new'], ['বেস্টসেলার', 'bestseller'], ['উপহার', 'gift'], ['২৯৯৳ এর নিচে', 'under-299'],
    ['০-১ বছর', 'age-0-1'], ['১-৩ বছর', 'age-1-3'], ['৩-৫ বছর', 'age-3-5'], ['৬-৮ বছর', 'age-6-8'], ['৯-১২ বছর', 'age-9-12'],
  ],
  brands: [
    ['খেলাঘর বেসিকস', 'khelaghor-basics'], ['টিনি টটস', 'tiny-tots'], ['ব্রাইট ব্লকস', 'bright-blocks'],
    ['সফটি বেবি', 'softy-baby'], ['লিটল স্টেপস', 'little-steps'], ['পাঠশালা', 'pathshala'],
  ],
  options: {
    color: ['রং', [['লাল', 0, 'red'], ['নীল', 0, 'blue'], ['হলুদ', 0, 'yellow']]],
    size: ['সাইজ', [['২-৩ বছর', 0, '2-3y'], ['৪-৫ বছর', 0, '4-5y'], ['৬-৭ বছর', 50, '6-7y']]],
    diaper: ['সাইজ', [['S', 0, 's'], ['M', 0, 'm'], ['L', 100, 'l'], ['XL', 150, 'xl']]],
  },
  products: [
    ['রঙিন বিল্ডিং ব্লক সেট (১০০ পিস)', 'toys', 1290, { sale: 990, slug: 'building-blocks-100', brand: 'bright-blocks', tags: 'flash-sale bestseller age-3-5 gift', featured: true }],
    ['রিমোট কন্ট্রোল রেসিং কার', 'toys', 1850, { sale: 1490, slug: 'rc-racing-car', brand: 'tiny-tots', tags: 'flash-sale age-6-8 gift', vary: 'color' }],
    ['কাঠের বাংলা বর্ণমালা পাজল', 'toys school-books', 690, { sale: 590, slug: 'bangla-alphabet-puzzle', brand: 'pathshala', tags: 'bestseller new age-3-5' }],
    ['নরম টেডি বিয়ার (৪০ সেমি)', 'toys', 950, { slug: 'teddy-bear-40cm', brand: 'softy-baby', tags: 'gift bestseller age-0-1' }],
    ['জুনিয়র বিজ্ঞান কিট', 'toys', 1590, { sale: 1350, slug: 'junior-science-kit', brand: 'bright-blocks', tags: 'new gift age-9-12' }],
    ['মিউজিক্যাল র‍্যাটল সেট', 'toys baby-care', 290, { sale: 249, slug: 'musical-rattle-set', brand: 'softy-baby', tags: 'flash-sale under-299 age-0-1' }],
    ['রান্নাবাটি কিচেন সেট', 'toys', 1190, { slug: 'kitchen-play-set', brand: 'tiny-tots', tags: 'gift age-3-5' }],
    ['ডাক্তার খেলার সেট', 'toys', 790, { sale: 650, slug: 'doctor-play-set', brand: 'tiny-tots', tags: 'age-3-5' }],
    ['বাবল মেশিন', 'toys', 390, { sale: 280, slug: 'bubble-machine', brand: 'khelaghor-basics', tags: 'flash-sale under-299 age-3-5' }],
    ['রোবট বিল্ডিং কিট', 'toys', 2490, { sale: 2190, slug: 'robot-building-kit', brand: 'bright-blocks', tags: 'bestseller age-9-12' }],
    ['বেবি লোশন ও শ্যাম্পু কম্বো', 'baby-care', 890, { sale: 749, slug: 'baby-lotion-shampoo', brand: 'softy-baby', tags: 'flash-sale bestseller age-0-1' }],
    ['নরম সুতির বেবি তোয়ালে (২ পিস)', 'baby-care', 550, { slug: 'baby-towel-2pc', brand: 'softy-baby', tags: 'new age-0-1' }],
    ['বেবি নেইল কাটার সেট', 'baby-care', 260, { slug: 'baby-nail-cutter', brand: 'khelaghor-basics', tags: 'under-299 age-0-1' }],
    ['বেবি মশারি ও বিছানা সেট', 'baby-care', 1450, { sale: 1250, slug: 'baby-net-bed-set', brand: 'softy-baby', tags: 'gift age-0-1' }],
    ['প্যান্ট ডায়াপার (৫০ পিস)', 'diapering baby-care', 1350, { sale: 1199, slug: 'pant-diaper-50', brand: 'softy-baby', tags: 'flash-sale bestseller', vary: 'diaper' }],
    ['বেবি ওয়েট ওয়াইপস (৩ প্যাক)', 'diapering baby-care', 420, { sale: 360, slug: 'baby-wipes-3pack', brand: 'softy-baby', tags: 'bestseller' }],
    ['কাপড়ের ডায়াপার (৩ পিস)', 'diapering', 690, { slug: 'cloth-diaper-3pc', brand: 'little-steps', tags: 'new' }],
    ['অ্যান্টি-কলিক ফিডার (২৪০ মিলি)', 'feeding baby-care', 650, { sale: 549, slug: 'anti-colic-feeder', brand: 'softy-baby', tags: 'bestseller age-0-1' }],
    ['সিলিকন বিব ও বাটি সেট', 'feeding', 590, { slug: 'silicone-bib-bowl', brand: 'khelaghor-basics', tags: 'new age-1-3' }],
    ['স্টেইনলেস টিফিন বক্স', 'feeding school-books', 480, { sale: 399, slug: 'steel-tiffin-box', brand: 'pathshala', tags: 'age-6-8' }],
    ['সুতির ফ্রক (ফুলেল প্রিন্ট)', 'kids-fashion', 950, { sale: 790, slug: 'cotton-floral-frock', brand: 'little-steps', tags: 'new gift age-3-5', vary: 'size' }],
    ['ছেলেদের পাঞ্জাবি সেট', 'kids-fashion', 1450, { sale: 1190, slug: 'boys-panjabi-set', brand: 'little-steps', tags: 'bestseller gift age-6-8', vary: 'size' }],
    ['নাইটওয়্যার সেট (২ পিস)', 'kids-fashion', 790, { slug: 'nightwear-set-2pc', brand: 'little-steps', tags: 'age-3-5', vary: 'size' }],
    ['বেবি রম্পার (৩ পিস)', 'kids-fashion baby-care', 1090, { sale: 899, slug: 'baby-romper-3pc', brand: 'softy-baby', tags: 'flash-sale age-0-1' }],
    ['লাইট-আপ স্নিকার্স', 'shoes-bags kids-fashion', 1290, { sale: 1090, slug: 'light-up-sneakers', brand: 'little-steps', tags: 'new age-6-8', vary: 'color' }],
    ['কার্টুন স্কুল ব্যাগ', 'shoes-bags school-books', 1150, { sale: 950, slug: 'cartoon-school-bag', brand: 'pathshala', tags: 'bestseller age-6-8' }],
    ['নরম বেবি জুতা', 'shoes-bags', 490, { slug: 'baby-soft-shoes', brand: 'little-steps', tags: 'age-0-1', stock: 0 }],
    ['ছড়ার ছবির বই (৫টির সেট)', 'school-books', 450, { sale: 380, slug: 'rhymes-picture-books', brand: 'pathshala', tags: 'bestseller gift age-1-3' }],
    ['ওয়াটার কালার ও রং-পেন্সিল সেট', 'school-books toys', 390, { sale: 290, slug: 'color-pencil-set', brand: 'pathshala', tags: 'flash-sale under-299 age-6-8' }],
    ['ম্যাজিক স্লেট', 'school-books', 250, { slug: 'magic-slate', brand: 'pathshala', tags: 'under-299 age-3-5' }],
    ['ব্যালান্স সাইকেল', 'ride-ons', 3990, { sale: 3490, slug: 'balance-bike', brand: 'tiny-tots', tags: 'gift age-3-5', vary: 'color' }],
    ['ট্রাইসাইকেল (ছাতাসহ)', 'ride-ons', 4590, { slug: 'tricycle-canopy', brand: 'tiny-tots', tags: 'bestseller age-1-3' }],
    ['ইলেকট্রিক রাইড-অন কার', 'ride-ons', 14900, { sale: 12900, slug: 'electric-ride-on-car', brand: 'tiny-tots', tags: 'flash-sale age-6-8' }],
    ['কিক স্কুটার', 'ride-ons', 2690, { sale: 2290, slug: 'kick-scooter', brand: 'khelaghor-basics', tags: 'new age-9-12' }],
  ],
  blogCategories: [['গাইড', 'guides'], ['বেবি কেয়ার', 'baby-care'], ['খেলার আইডিয়া', 'play-ideas']],
  posts: [
    ['বয়স অনুযায়ী খেলনা বাছাইয়ের গাইড', 'guides', '০ থেকে ১২ বছর: কোন বয়সে কোন খেলনা সবচেয়ে কাজে লাগে।', 'toy-guide-by-age'],
    ['নবজাতকের প্রথম মাসের চেকলিস্ট', 'baby-care', 'ডায়াপার থেকে গোসল: নতুন মা-বাবার দরকারি তালিকা।', 'newborn-checklist'],
    ['বৃষ্টির দিনে ঘরে বসে ৫টি খেলা', 'play-ideas', 'বাইরে যাওয়া না গেলেও আনন্দ থামবে না।', 'rainy-day-games'],
    ['স্কুলে ফেরার প্রস্তুতি: যা যা লাগবে', 'guides', 'ব্যাগ, টিফিন, রং-পেন্সিল আর আরও কিছু।', 'back-to-school'],
  ],
};
