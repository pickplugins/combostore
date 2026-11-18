/**
 * Shonamoni's demo catalog (lib/demo/catalog.js builds it). Names are Bangla,
 * so every product and post carries a plain ASCII slug, and the slugs match
 * the template: the six essentials categories, the four age bands (they are
 * categories, as in WonderJoy) and the trending tag.
 */
export default {
  lang: 'bn',
  about: 'সোনামণির যত্নে আসল ডায়াপার, ফর্মুলা দুধ, ফিডার ও ফিডিং সেট।',
  colors: ['FFF0F0', 'E6FAF6', 'FFF9EB', 'EEF2FF', 'FCE7F3'],
  ink: '1D1E2C',
  categories: [
    ['ডায়াপার ও ওয়াইপস', 'diapers-wipes'], ['ফর্মুলা দুধ ও শিশুখাদ্য', 'formula-milk'], ['ফিডার ও পানির বোতল', 'feeders-bottles'],
    ['ফিডিং সেট ও বাটি', 'feeding-sets'], ['গোসল ও স্কিনকেয়ার', 'bath-skincare'], ['কম্বো অফার', 'combo-packs'],
    ['০-৬ মাস', 'age-0-6m'], ['৬-১২ মাস', 'age-6-12m'], ['১-২ বছর', 'age-1-2y'], ['২+ বছর', 'age-2-plus'],
  ],
  tags: [['ট্রেন্ডিং', 'trending'], ['নতুন', 'new'], ['উপহার', 'gift']],
  brands: [
    ['সফটি বেবি', 'softy-baby'], ['মমস কেয়ার', 'moms-care'], ['লিটল সিপ', 'little-sip'], ['নুট্রিস্টার্ট', 'nutristart'],
  ],
  options: {
    diaper: ['সাইজ', [['NB', 0, 'nb'], ['S', 0, 's'], ['M', 50, 'm'], ['L', 100, 'l'], ['XL', 150, 'xl']]],
    color: ['রং', [['গোলাপি', 0, 'pink'], ['নীল', 0, 'blue'], ['সবুজ', 0, 'green']]],
  },
  products: [
    ['সফটি বেবি বেল্ট ডায়াপার (৪০ পিস)', 'diapers-wipes age-0-6m', 1150, { sale: 990, slug: 'softy-belt-diaper-40', brand: 'softy-baby', tags: 'trending', vary: 'diaper', featured: true }],
    ['প্রিমিয়াম প্যান্ট ডায়াপার (৫০ পিস)', 'diapers-wipes age-1-2y', 1650, { sale: 1450, slug: 'premium-pant-diaper-50', brand: 'softy-baby', tags: 'trending', vary: 'diaper' }],
    ['নিউবর্ন ডায়াপার (৩০ পিস)', 'diapers-wipes age-0-6m', 790, { slug: 'newborn-diaper-30', brand: 'moms-care', tags: 'new' }],
    ['অ্যালোভেরা বেবি ওয়াইপস (৮০ পিস x ৩)', 'diapers-wipes', 540, { sale: 450, slug: 'aloe-baby-wipes-3pack', brand: 'moms-care', tags: 'trending' }],
    ['ফর্মুলা দুধ স্টেজ ১ (০-৬ মাস, ৪০০ গ্রাম)', 'formula-milk age-0-6m', 1480, { slug: 'formula-stage-1-400g', brand: 'nutristart', tags: 'trending' }],
    ['ফর্মুলা দুধ স্টেজ ২ (৬-১২ মাস, ৪০০ গ্রাম)', 'formula-milk age-6-12m', 1420, { slug: 'formula-stage-2-400g', brand: 'nutristart' }],
    ['গ্রোয়িং-আপ মিল্ক স্টেজ ৩ (১-৩ বছর, ৮০০ গ্রাম)', 'formula-milk age-1-2y', 2390, { sale: 2190, slug: 'growing-up-milk-800g', brand: 'nutristart', tags: 'new' }],
    ['গম ও দুধের সেরেলাক (৪০০ গ্রাম)', 'formula-milk age-6-12m', 620, { slug: 'wheat-milk-cereal-400g', brand: 'nutristart' }],
    ['অ্যান্টি-কোলিক ফিডার (২৫০ মিলি)', 'feeders-bottles age-0-6m', 690, { sale: 590, slug: 'anti-colic-feeder-250ml', brand: 'little-sip', tags: 'trending' }],
    ['গ্লাস ফিডার (১২০ মিলি)', 'feeders-bottles age-0-6m', 550, { slug: 'glass-feeder-120ml', brand: 'little-sip' }],
    ['স্ট্র সহ পানির বোতল (৩০০ মিলি)', 'feeders-bottles age-1-2y age-2-plus', 480, { slug: 'straw-water-bottle-300ml', brand: 'little-sip', tags: 'trending gift', vary: 'color' }],
    ['হাতলওয়ালা সিপি কাপ', 'feeders-bottles age-6-12m', 390, { sale: 340, slug: 'sippy-cup-handles', brand: 'little-sip', vary: 'color' }],
    ['সাকশন বাটি ও চামচ সেট', 'feeding-sets age-6-12m', 850, { sale: 720, slug: 'suction-bowl-spoon-set', brand: 'moms-care', tags: 'trending gift' }],
    ['সিলিকন ফিডিং সেট (৫ পিস)', 'feeding-sets age-6-12m age-1-2y', 1290, { slug: 'silicone-feeding-set-5', brand: 'moms-care', tags: 'new gift' }],
    ['ওয়াটারপ্রুফ বিব (৩ পিস)', 'feeding-sets', 450, { slug: 'waterproof-bibs-3', brand: 'softy-baby' }],
    ['ইনসুলেটেড লাঞ্চবক্স', 'feeding-sets age-2-plus', 990, { slug: 'insulated-lunchbox', brand: 'little-sip', stock: 0 }],
    ['টিয়ার-ফ্রি বেবি শ্যাম্পু (২০০ মিলি)', 'bath-skincare', 420, { slug: 'tear-free-shampoo-200ml', brand: 'softy-baby' }],
    ['ডায়াপার র‍্যাশ ক্রিম (৫০ গ্রাম)', 'bath-skincare diapers-wipes', 360, { sale: 320, slug: 'diaper-rash-cream-50g', brand: 'moms-care', tags: 'trending' }],
    ['নিউবর্ন কেয়ার কম্বো', 'combo-packs age-0-6m', 2490, { sale: 2190, slug: 'newborn-care-combo', brand: 'softy-baby', tags: 'gift' }],
    ['মাসিক ডায়াপার ও ওয়াইপস কম্বো', 'combo-packs diapers-wipes', 3290, { sale: 2890, slug: 'monthly-diaper-combo', brand: 'softy-baby', tags: 'new' }],
  ],
  blogCategories: [['ফিডিং', 'feeding'], ['শিশুযত্ন', 'baby-care'], ['মা-বাবার গাইড', 'parent-guides']],
  posts: [
    ['কোন বয়সে কোন স্টেজের ফর্মুলা?', 'feeding', 'স্টেজ ১ থেকে গ্রোয়িং-আপ মিল্ক: কখন বদলাবেন আর কীভাবে।', 'formula-stage-guide'],
    ['ডায়াপারের সঠিক সাইজ বুঝবেন যেভাবে', 'baby-care', 'ওজন দেখে সাইজ বাছাই আর র‍্যাশ এড়ানোর সহজ উপায়।', 'diaper-size-guide'],
    ['প্রথম খাবার: ৬ মাসের সোনামণির জন্য', 'feeding', 'সেরেলাক, খিচুড়ি আর ফলের পিউরি দিয়ে শুরু করার টিপস।', 'first-foods-6-months'],
    ['ফিডার জীবাণুমুক্ত করার নিয়ম', 'parent-guides', 'ফুটানো, স্টিম আর রোদে শুকানো: কোনটা কখন।', 'sterilise-feeders'],
  ],
};
