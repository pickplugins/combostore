/*
	The demo store's records, in the shapes the combo-store/v2 endpoints
	return them (captured from a local install). Built once, from a seeded
	random generator, so every visitor sees the same shop; lib/demo/api.js
	edits these arrays in memory, and a page reload starts again from here.

	Everything is invented: the names, emails and phone numbers belong to
	nobody, and the images are placehold.co tiles (already allowed in
	next.config.mjs).
*/

/* ---- seeded random ---- */
function mulberry32(seed) {
	return function () {
		seed |= 0; seed = seed + 0x6D2B79F5 | 0;
		var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
const rand = mulberry32(20261109);
const int = (min, max) => Math.floor(rand() * (max - min + 1)) + min;
const pick = (arr) => arr[Math.floor(rand() * arr.length)];
const money = (n) => Number(n).toFixed(2);

/* Dates relative to now, so the dashboard's "last 30 days" always has data. */
const NOW = Date.now();
const DAY = 86400000;
const pad = (n) => String(n).padStart(2, '0');
export function sqlDate(ms) {
	var d = new Date(ms);
	return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}
const daysAgo = (min, max) => NOW - int(min, max) * DAY - int(0, 86399) * 1000;

const slugify = (s) => String(s).toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const tile = (text, bg = 'EEF2FF', fg = '4338CA', size = '600x600') =>
	`https://placehold.co/${size}/${bg}/${fg}/png?text=${encodeURIComponent(text).replace(/%20/g, '+')}`;
const avatar = (name) => {
	var initials = name.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
	return tile(initials, pick(['FDE68A', 'BBF7D0', 'BFDBFE', 'FBCFE8', 'DDD6FE', 'FED7AA']), '1F2937', '96x96');
};

/* =================================================================== TERMS */

const CATEGORY_NAMES = ['Baby Care', 'Diapers & Wipes', 'Feeding', 'Toys & Games', 'Kids Clothing', 'Bath & Skin', 'Health & Safety', 'School Supplies'];
const TAG_NAMES = ['New Arrival', 'Best Seller', 'Organic', 'Gift Idea', 'On Sale', 'Eco Friendly', 'Imported', 'Limited'];
const BRAND_NAMES = ['LittleLeaf', 'SoftNest', 'Brightbox', 'Tiny Steps', 'Moonbeam', 'Puddle & Co'];
const POST_CATEGORY_NAMES = ['Parenting Tips', 'Product Guides', 'Store News', 'Health'];

let termId = 100;
const makeTerms = (names, taxonomy, colors) => names.map((name, i) => ({
	term_id: ++termId,
	name,
	slug: slugify(name),
	term_group: 0,
	term_taxonomy_id: termId,
	taxonomy,
	description: `${name} picked for the demo store.`,
	parent: 0,
	count: 0,
	filter: 'raw',
	thumbnail: { id: 0, title: name, src: tile(name, colors[i % colors.length], '1F2937', '300x300') },
	thumbnail_url: tile(name, colors[i % colors.length], '1F2937', '300x300'),
}));

export const terms = {
	product_cat: makeTerms(CATEGORY_NAMES, 'product_cat', ['FDE68A', 'BFDBFE', 'BBF7D0', 'FBCFE8', 'DDD6FE', 'FED7AA']),
	product_tag: makeTerms(TAG_NAMES, 'product_tag', ['E5E7EB']),
	product_brand: makeTerms(BRAND_NAMES, 'product_brand', ['F3F4F6']),
	category: makeTerms(POST_CATEGORY_NAMES, 'category', ['E0E7FF']),
	post_tag: makeTerms(['Newborn', 'Toddler', 'Sleep', 'Nutrition', 'Play'], 'post_tag', ['E5E7EB']),
};
const termRef = (t) => ({ term_id: t.term_id, name: t.name, slug: t.slug });

/* =================================================================== USERS */

const FIRST = ['Ayesha', 'Rahim', 'Nusrat', 'Tanvir', 'Farhana', 'Imran', 'Sadia', 'Arif', 'Mitu', 'Kamal', 'Jannat', 'Rafiq', 'Tania', 'Sohel', 'Lamia', 'Hasan', 'Riya', 'Nabil', 'Shapla', 'Fahim', 'Mim', 'Zubair', 'Puja', 'Shakil', 'Anika', 'Rakib', 'Sumaiya', 'Joy'];
const LAST = ['Rahman', 'Hossain', 'Akter', 'Islam', 'Chowdhury', 'Ahmed', 'Khan', 'Sarker', 'Begum', 'Das', 'Mia', 'Uddin'];
const CITIES = ['Dhaka', 'Chattogram', 'Rangpur', 'Sylhet', 'Khulna', 'Rajshahi', 'Barishal', 'Mymensingh', 'Cumilla', 'Gazipur'];
const STREETS = ['Road 12, Dhanmondi', 'House 5, Mirpur 10', 'Station Road', 'College Para', 'Lake View Lane', 'Shaheb Bazar', 'Zindabazar', 'Agrabad C/A', 'Uttara Sector 7', 'Kazir Dewri'];

/* 01700-000001 ... : the 0170000xxxx block, so no number here is anyone's. */
const phone = (n) => `0170000${String(n).padStart(4, '0')}`;

const STAFF = [
	['Demo', 'Admin', 'administrator', 'demo'],
	['Sabrina', 'Manager', 'store_manager', 'store_manager'],
	['Karim', 'Rider', 'rider', 'rider_karim'],
	['Mahin', 'Rider', 'rider', 'rider_mahin'],
	['Nadia', 'Support', 'support_agent', 'support_nadia'],
	['Faisal', 'Supplier', 'supplier', 'supplier_faisal'],
	['Rehana', 'Traders', 'supplier', 'supplier_rehana'],
	['Babul', 'Distributors', 'supplier', 'supplier_babul'],
];

let userSeq = 0;
function makeUser(first, last, role, login, registeredMs) {
	var id = 500 + (++userSeq);
	var name = `${first} ${last}`;
	var email = `${login}@example.com`;
	var city = pick(CITIES);
	return {
		id,
		user_login: login,
		user_nicename: login,
		user_email: email,
		description: '',
		display_name: name,
		name,
		first_name: first,
		last_name: last,
		roles: [role],
		url: '',
		avatar: avatar(name),
		phone: phone(id),
		addresses: [],
		phones: [],
		billing_email: email,
		billing_phone: phone(id),
		billing_name: name,
		billing_city: city,
		billing_country: 'BD',
		/* Used by get_customer / get_user, not by the list. */
		_extra: {
			billing_address1: `${pick(STREETS)}`,
			billing_address2: '',
			zip_code: String(int(1000, 9400)),
			delivery_location: '',
			registered: sqlDate(registeredMs),
		},
	};
}

export const users = [
	...STAFF.map(([f, l, role, login]) => makeUser(f, l, role, login, NOW - 400 * DAY)),
	...Array.from({ length: 34 }, (_, i) => {
		var first = FIRST[i % FIRST.length];
		var last = LAST[(i * 7) % LAST.length];
		return makeUser(first, last, 'customer', `${slugify(first)}.${slugify(last)}${i + 1}`, daysAgo(2, 360));
	}),
];
export const demoAdmin = users[0];
export const customers = () => users.filter(u => u.roles.includes('customer'));
export const riders = () => users.filter(u => u.roles.includes('rider'));
export const suppliers = () => users.filter(u => u.roles.includes('supplier'));

/* =================================================================== PRODUCTS */

const PRODUCT_NAMES = [
	['Organic Cotton Baby Romper', 'Kids Clothing', 'SoftNest', 850, true],
	['Ultra Soft Diapers, Size M (40 pcs)', 'Diapers & Wipes', 'LittleLeaf', 1290, true],
	['Fragrance-Free Baby Wipes (3 x 80)', 'Diapers & Wipes', 'LittleLeaf', 420, false],
	['Anti-Colic Feeding Bottle 260ml', 'Feeding', 'Tiny Steps', 690, true],
	['Silicone Suction Plate Set', 'Feeding', 'Tiny Steps', 750, false],
	['Wooden Rainbow Stacker', 'Toys & Games', 'Brightbox', 1150, true],
	['Soft Plush Elephant', 'Toys & Games', 'Moonbeam', 980, false],
	['Musical Activity Cube', 'Toys & Games', 'Brightbox', 1650, true],
	['Gentle Baby Shampoo 200ml', 'Bath & Skin', 'Puddle & Co', 380, false],
	['Calendula Diaper Rash Cream', 'Bath & Skin', 'Puddle & Co', 450, false],
	['Hooded Bath Towel, Bunny', 'Bath & Skin', 'SoftNest', 720, true],
	['Digital Ear Thermometer', 'Health & Safety', 'Tiny Steps', 2450, false],
	['Cabinet Safety Locks (10 pack)', 'Health & Safety', 'Brightbox', 540, false],
	['Baby Nail Clipper Set', 'Health & Safety', 'Tiny Steps', 360, false],
	['Muslin Swaddle Blankets (3 pack)', 'Baby Care', 'SoftNest', 1390, true],
	['Portable Changing Mat', 'Baby Care', 'Moonbeam', 890, false],
	['Teething Ring, Fruit Shapes', 'Baby Care', 'Tiny Steps', 320, false],
	['Glow-in-the-Dark Star Projector', 'Toys & Games', 'Moonbeam', 1890, true],
	['Kids Backpack, Dino Print', 'School Supplies', 'Brightbox', 1250, true],
	['Washable Crayons (24 colours)', 'School Supplies', 'Brightbox', 450, false],
	['Lunch Box with Dividers', 'School Supplies', 'Tiny Steps', 680, false],
	['Cotton Kids T-Shirt (2 pack)', 'Kids Clothing', 'SoftNest', 790, true],
	['Rain Boots, Frog Design', 'Kids Clothing', 'Puddle & Co', 1350, true],
	['Baby Food Maker & Steamer', 'Feeding', 'Tiny Steps', 4950, false],
	['Stroller Organizer Bag', 'Baby Care', 'Moonbeam', 1100, false],
	['Bath Toys Boat Set', 'Toys & Games', 'Puddle & Co', 560, false],
	['Baby Sunscreen SPF 50', 'Bath & Skin', 'Puddle & Co', 890, false],
	['Night Light Bunny Lamp', 'Baby Care', 'Moonbeam', 1450, false],
	['Shape Sorter Puzzle Box', 'Toys & Games', 'Brightbox', 820, false],
	['Sippy Cup with Handles', 'Feeding', 'LittleLeaf', 420, false],
];
const SIZES = ['S', 'M', 'L', 'XL'];
const PRODUCT_COLORS = ['FDE68A', 'BFDBFE', 'BBF7D0', 'FBCFE8', 'DDD6FE', 'FED7AA', 'CCFBF1', 'FEE2E2'];

let mediaSeq = 9000;
export const medias = [];
function addMedia(title, src) {
	var id = ++mediaSeq;
	medias.push({ id, title, src, date: sqlDate(daysAgo(1, 200)) });
	return { id, title, src };
}

const catBy = (name) => terms.product_cat.find(t => t.name === name);
const brandBy = (name) => terms.product_brand.find(t => t.name === name);

export const products = PRODUCT_NAMES.map(([title, catName, brandName, base, hasSizes], i) => {
	var id = 10100 + i;
	var color = PRODUCT_COLORS[i % PRODUCT_COLORS.length];
	var image = addMedia(title, tile(title.split(',')[0].split('(')[0].trim(), color, '1F2937'));
	var gallery = [image, addMedia(`${title} (detail)`, tile('Detail', color, '374151'))];
	var regular = base;
	var onSale = rand() < 0.45;
	var sale = onSale ? Math.round(base * (0.75 + rand() * 0.15) / 10) * 10 : base;
	var trade = Math.round(sale * (0.55 + rand() * 0.15) / 5) * 5;
	var stock = i % 9 === 4 ? int(0, 4) : int(6, 120);
	var status = i === 27 ? 'draft' : i === 28 ? 'pending' : 'publish';
	var tags = [pick(terms.product_tag), ...(rand() < 0.4 ? [pick(terms.product_tag)] : [])]
		.filter((t, k, a) => a.indexOf(t) === k);
	var variations = hasSizes ? SIZES.map((size, k) => ({
		id: String(id * 10 + k),
		product_id: String(id),
		thumbnail: image,
		title: size,
		description: '',
		sku: `DEMO-${id}-${size}`,
		enable: 'yes',
		downloadable: 'no',
		stock_status: 'instock',
		stock_count: String(int(3, 40)),
		regular_price: money(regular + k * 50),
		sale_price: money(sale + k * 50),
		trade_price: money(trade + k * 30),
		weight: null, height: null, width: null, length: null,
		backorders: 'no',
		shipping_class: '',
		attributes: { size: { label: 'Size', value: size } },
		meta: '',
	})) : [];
	var created = daysAgo(20, 300);
	var cat = catBy(catName), brand = brandBy(brandName);
	cat.count++; brand.count++; tags.forEach(t => t.count++);
	return {
		id,
		post_id: id,
		product_id: String(id),
		post_type: 'cmb_product',
		title,
		slug: slugify(title),
		status,
		postStatus: status,
		post_content: `<p>${title} from ${brandName}. Made for everyday family life, gentle on little ones and easy to care for.</p><ul><li>Tested for safety</li><li>Easy to clean</li><li>Ships within 24 hours</li></ul>`,
		post_excerpt: `${brandName} quality in our ${catName.toLowerCase()} range.`,
		sku: hasSizes ? '' : `DEMO-${id}`,
		post_thumbnail: image,
		post_thumbnail_url: image.src,
		featured: i % 6 === 0 ? 'yes' : '',
		categories: [termRef(cat)],
		tags: tags.map(termRef),
		brands: [termRef(brand)],
		badges: [],
		visibility: [],
		price: money(sale),
		variations,
		gallery,
		menu_order: null,
		stock_status: stock > 0 ? 'instock' : 'outofstock',
		stock_count: String(stock),
		weight: money(rand() * 2), height: '0.00', width: '0.00', length: '0.00',
		price_type: hasSizes ? 'variable' : 'simple',
		regular_price: money(regular),
		sale_price: money(sale),
		bulk_prices: [],
		pwyw_min_price: null, pwyw_default_price: null, bargain_min_price: null, bargain_default_price: null,
		trade_price: money(trade),
		addons: ['manageStock'],
		downloads: [], upsells: [], crosssells: [], faq: [], related_products: [],
		product_template: [],
		attributes: hasSizes ? [{ title: 'Size', attr: 'size', type: 'button', items: SIZES.map(s => ({ label: s, value: s })) }] : [],
		total_rate: '0',
		avg_rating: '0.00',
		created_at: sqlDate(created),
		updated_at: sqlDate(created + int(0, 10) * DAY),
		slugLock: false,
	};
});

/* =================================================================== ORDERS */

const ORDER_STATUSES = ['completed', 'completed', 'completed', 'processing', 'processing', 'pending', 'on-hold', 'shipped', 'cancelled', 'refunded'];
const PAYMENTS = [['cod', 'Cash on delivery'], ['cod', ''], ['bkash', ''], ['nagad', ''], ['bank_transfer', '']];

let lineSeq = 30000;
export const orders = Array.from({ length: 64 }, (_, i) => {
	var id = 2001 + i;
	var customer = rand() < 0.85 ? pick(customers()) : null;
	var name = customer ? customer.name : `${pick(FIRST)} ${pick(LAST)}`;
	var city = customer ? customer.billing_city : pick(CITIES);
	var created = i < 6 ? daysAgo(0, 1) : daysAgo(0, 60);
	var status = i < 3 ? 'pending' : pick(ORDER_STATUSES);
	var [method] = pick(PAYMENTS);
	var paid = status === 'completed' || (method !== 'cod' && status !== 'pending' && status !== 'cancelled');
	var items = Array.from({ length: int(1, 3) }, () => {
		var p = pick(products.filter(x => x.status === 'publish'));
		var v = p.variations.length ? pick(p.variations) : null;
		var qty = int(1, 3);
		var price = Number(v ? v.sale_price : p.sale_price);
		var tradeP = Number(v ? v.trade_price : p.trade_price);
		return {
			id: String(++lineSeq),
			order_id: String(id),
			product_id: String(p.id),
			variation_id: String(v ? v.id : p.id),
			product_name: v ? `${p.title} - ${v.title}` : p.title,
			sku: v ? v.sku : p.sku,
			quantity: String(qty),
			price: money(price),
			trade_price: money(tradeP),
			subtotal: money(price * qty),
			tax: '0.00',
			discount_type: '',
			discount_amount: '0.00',
			total: money(price * qty),
			attributes: v ? [{ label: 'Size', value: v.title }] : [],
			meta: null,
			thumbnail: p.post_thumbnail.src,
		};
	});
	var subtotal = items.reduce((s, x) => s + Number(x.total), 0);
	var shipping = city === 'Dhaka' ? 70 : 130;
	var discount = rand() < 0.15 ? Math.round(subtotal * 0.1) : 0;
	var total = subtotal + shipping - discount;
	var tradeTotal = items.reduce((s, x) => s + Number(x.trade_price) * Number(x.quantity), 0);
	var address = `${pick(STREETS)}, ${city}`;
	return {
		id: String(id),
		userid: String(customer ? customer.id : 0),
		status,
		currency: 'BDT',
		total_amount: money(total),
		subtotal_amount: money(subtotal),
		discount_amount: money(discount),
		tax_amount: '0.00',
		shipping_amount: money(shipping),
		advance_payment: '0',
		trade_price: money(tradeTotal),
		gross_profit: money(subtotal - tradeTotal),
		net_profit: money(subtotal - tradeTotal - discount),
		payment_method: method,
		payment_status: paid ? 'paid' : status === 'refunded' ? 'refunded' : 'unpaid',
		transaction_id: method === 'cod' ? '' : `TRX${id}${int(1000, 9999)}`,
		shipping_method: city === 'Dhaka' ? 'Inside Dhaka' : 'Outside Dhaka',
		billing_name: name,
		billing_email: customer ? customer.user_email : '',
		billing_phone: customer ? customer.billing_phone : phone(9000 + i),
		billing_address: address,
		billing_city: city,
		billing_country: 'BD',
		shipping_name: name,
		shipping_phone: customer ? customer.billing_phone : phone(9000 + i),
		shipping_address: address,
		shipping_city: city,
		shipping_country: 'BD',
		assign_to: '[]',
		meta: '""',
		scheduled_at: null,
		created_at: sqlDate(created),
		updated_at: sqlDate(created + int(0, 2) * 3600000),
		completed_at: status === 'completed' ? sqlDate(created + int(1, 3) * DAY) : '',
		delivery_location: null,
		advance_payment_note: '',
		_items: items,
	};
});

/* =================================================================== DELIVERIES & TRACKING */

const DELIVERY_STATUS = { shipped: 'started', completed: 'delivered', processing: 'pending' };
let deliverySeq = 300;
let trackingSeq = 7000;
export const trackings = [];
export const deliveries = orders
	.filter(o => DELIVERY_STATUS[o.status])
	.slice(0, 24)
	.map(o => {
		var id = String(++deliverySeq);
		var rider = pick(riders());
		var status = DELIVERY_STATUS[o.status];
		var start = Date.parse(o.created_at.replace(' ', 'T')) + 6 * 3600000;
		var courier = rand() < 0.6 ? 'combostore' : 'steadfast';
		var steps = status === 'delivered' ? ['order_placed', 'picked_up', 'in_transit', 'delivered'] : status === 'started' ? ['order_placed', 'picked_up', 'in_transit'] : ['order_placed'];
		steps.forEach((s, k) => trackings.push({
			id: String(++trackingSeq),
			order_id: o.id,
			delivery_id: id,
			consignment_id: '',
			status: s,
			latlng: JSON.stringify({ lat: 23.75 + rand() * 0.1, lng: 90.36 + rand() * 0.1 }),
			notes: { order_placed: 'Order handed to the delivery team.', picked_up: 'Parcel picked up from the store.', in_transit: 'On the way to the customer.', delivered: 'Delivered and paid.' }[s],
			datetime: sqlDate(start + k * 5 * 3600000),
		}));
		return {
			id,
			customer_id: o.userid,
			order_id: o.id,
			rider_id: courier === 'combostore' ? String(rider.id) : '',
			courier,
			consignment_id: courier === 'steadfast' ? `SF${int(100000, 999999)}` : '',
			tracking_code: courier === 'steadfast' ? `TRK${int(100000, 999999)}` : '',
			tracking_link: null,
			courier_data: 'null',
			type: 'normal',
			status,
			startLatLng: JSON.stringify({ lat: 23.7808, lng: 90.4153 }),
			endLatLng: 'null',
			datetime: sqlDate(start),
		};
	});

/* =================================================================== SHIPPING */

export const shippingZones = [
	{ id: '1', name: 'Bangladesh', description: 'Home delivery anywhere in Bangladesh', region: 'include', countries: '["BD"]', settings: '{"countries":["BD"]}', priority: '1', status: '1' },
	{ id: '2', name: 'Dhaka Metro Express', description: 'Same-day delivery inside Dhaka city', region: 'include', countries: '["BD"]', settings: '{"countries":["BD"]}', priority: '2', status: '1' },
	{ id: '3', name: 'South Asia', description: 'International parcels to neighbouring countries', region: 'include', countries: '["IN","NP","BT","LK"]', settings: '{"countries":["IN","NP","BT","LK"]}', priority: '3', status: '1' },
	{ id: '4', name: 'Rest of the World', description: 'Paused for now', region: 'exclude', countries: '["BD"]', settings: '{"countries":["BD"]}', priority: '9', status: '0' },
].map(z => ({ ...z, created_at: sqlDate(NOW - 200 * DAY), updated_at: sqlDate(NOW - 30 * DAY) }));

export const shippingMethods = [
	['1', 'Inside Dhaka', 'flat_rate', '70.00', 'Delivered in 1-2 days', '["BD-13"]'],
	['1', 'Outside Dhaka', 'flat_rate', '130.00', 'Delivered in 2-4 days', '[]'],
	['1', 'Free over 3,000', 'free_shipping', '0.00', 'Orders above 3,000 BDT', '[]'],
	['2', 'Same-day Express', 'flat_rate', '150.00', 'Order before 1 PM', '["BD-13"]'],
	['3', 'International Standard', 'flat_rate', '1200.00', '7-12 business days', '[]'],
].map(([zone_id, name, type, amount, description, states], i) => ({
	id: String(i + 1), zone_id, name, type, amount, description, states, settings: '[]', priority: '1', status: '1',
	created_at: sqlDate(NOW - 150 * DAY), updated_at: sqlDate(NOW - 30 * DAY),
}));

/* =================================================================== POSTS & COMMENTS */

const POST_TITLES = [
	'How to Choose the Right Diaper Size',
	'10 Toys That Grow With Your Child',
	'A Gentle Bedtime Routine for Toddlers',
	'Our Summer Collection Has Arrived',
	'Introducing Solids: A First-Week Plan',
	'Keeping Baby Skin Calm in Hot Weather',
	'Back-to-School Checklist for Little Ones',
	'Why We Love Wooden Toys',
	'Safe Sleep Basics Every Parent Should Know',
	'Store Update: Faster Delivery Outside Dhaka',
	'Five Easy Sensory Play Ideas',
	'What to Pack in a Hospital Bag',
];
export const posts = POST_TITLES.map((title, i) => {
	var id = 4100 + i;
	var cat = terms.category[i % terms.category.length];
	var tag = terms.post_tag[i % terms.post_tag.length];
	cat.count++; tag.count++;
	var image = addMedia(title, tile(title.split(':')[0].slice(0, 28), pick(['E0E7FF', 'FCE7F3', 'DCFCE7', 'FEF3C7']), '1F2937', '1200x675'));
	var status = i === 10 ? 'draft' : i === 11 ? 'pending' : 'publish';
	var date = daysAgo(3, 240);
	var content = `<p>${title}. A short guide from the demo store team, written to show how posts look in the dashboard.</p><h2>The basics</h2><p>Start small, watch what works for your family, and adjust as your child grows.</p><ul><li>Keep it simple</li><li>Stay consistent</li><li>Ask for help when you need it</li></ul>`;
	return {
		id, title, post_type: 'post', slug: slugify(title),
		content, post_content: content, excerpt: `A quick read on ${title.toLowerCase()}.`, post_excerpt: `A quick read on ${title.toLowerCase()}.`,
		status, postStatus: status, post_status: status,
		post_thumbnail: { id: String(image.id), title: image.title, src: image.src },
		post_thumbnail_url: image.src,
		featured: i === 1 ? 'yes' : '',
		author: { name: demoAdmin.name, id: demoAdmin.id, avatar: demoAdmin.avatar },
		categories: [termRef(cat)], tags: [termRef(tag)],
		gallery: [], addons: [], downloads: '', related_posts: [],
		voteCount: int(0, 40), viewCount: int(40, 2400), loveCount: int(0, 90), downloadCount: 0,
		faq: '', relatedPrompts: '', variations: [], menu_order: 0,
		post_date: sqlDate(date),
	};
});

const COMMENT_TEXTS = [
	['Great quality, my daughter loves it!', 5], ['Arrived quickly and well packed.', 5], ['Good value for the price.', 4],
	['Size runs a little small, order one up.', 4], ['Exactly as described. Will buy again.', 5], ['Colour is slightly different from the photo.', 3],
	['Very soft material, no rashes at all.', 5], ['Took a week to arrive outside Dhaka.', 3], ['Perfect gift for a baby shower.', 5],
	['Useful article, thank you!', 5], ['Could you write more about sleep training?', 4], ['The checklist helped a lot.', 5],
];
let commentSeq = 800;
export const comments = Array.from({ length: 28 }, (_, i) => {
	var onProduct = i % 3 !== 2;
	var target = onProduct ? pick(products.filter(p => p.status === 'publish')) : pick(posts.filter(p => p.status === 'publish'));
	var author = pick(customers());
	var [text, rate] = onProduct ? COMMENT_TEXTS[i % 9] : COMMENT_TEXTS[9 + (i % 3)];
	var date = daysAgo(0, 90);
	if (onProduct) {
		target.total_rate = String(Number(target.total_rate) + 1);
		target._rates = [...(target._rates ?? []), rate];
		target.avg_rating = money(target._rates.reduce((a, b) => a + b, 0) / target._rates.length);
	}
	return {
		comment_ID: String(++commentSeq),
		comment_post_ID: String(target.id),
		comment_author: author.name,
		comment_author_email: author.user_email,
		comment_author_url: '',
		comment_author_IP: '',
		comment_date: sqlDate(date),
		comment_date_gmt: sqlDate(date),
		comment_content: text,
		comment_karma: '0',
		comment_approved: i % 7 === 3 ? '0' : '1',
		comment_agent: '',
		comment_type: onProduct ? 'review' : 'comment',
		comment_parent: '0',
		user_id: String(author.id),
		avatar: author.avatar,
		rate: onProduct ? String(rate) : '',
		post_title: target.title,
		post_type: onProduct ? 'cmb_product' : 'post',
	};
});
products.forEach(p => { delete p._rates; });

/* =================================================================== TICKETS */

const TICKETS = [
	['Order #2004 not delivered yet', 'It has been five days and the tracking has not moved.', 'open', '2'],
	['Wrong size received', 'I ordered size M but got size S. Can I exchange it?', 'open', '1'],
	['bKash payment failed but money deducted', 'The payment shows deducted from my account but the order says unpaid.', 'open', '3'],
	['Request for an invoice copy', 'Please send me the invoice for my last order for office reimbursement.', 'resolved', '1'],
	['Damaged packaging', 'The box was crushed, the product seems fine though.', 'resolved', '1'],
	['How do I cancel my subscription?', 'I want to pause the monthly diaper box for two months.', 'open', '2'],
	['Coupon code not working', 'WELCOME10 says it is invalid at checkout.', 'closed', '1'],
	['Bulk order for a daycare', 'We would like 20 packs of wipes every month. Do you offer a discount?', 'open', '2'],
	['Change delivery address', 'Please deliver order #2010 to my office instead.', 'resolved', '2'],
	['Product question: is the bottle BPA free?', 'Want to confirm before ordering.', 'closed', '1'],
];
export const tickets = TICKETS.map(([title, content, markedAs, priority], i) => {
	var author = pick(customers());
	return {
		id: 6100 + i, title, content, excerpt: '',
		status: markedAs === 'open' ? 'pending' : 'publish', post_status: markedAs === 'open' ? 'pending' : 'publish',
		featured: '', priority, markedAs,
		author: { name: author.name, id: String(author.id), avatar: author.avatar },
		categories: [], tags: [], voteCount: 0, viewCount: int(1, 20), loveCount: 0, downloadCount: 0,
		post_thumbnail: { id: 0, src: false }, post_thumbnail_url: false,
		post_date: sqlDate(daysAgo(0, 45)),
	};
});

/* =================================================================== EXTRAS */

export const coupons = [
	['WELCOME10', 'percent', '10', 'publish'], ['FREESHIP', 'fixed', '130', 'publish'], ['EID500', 'fixed', '500', 'draft'],
].map(([code, type, amount, status], i) => ({
	id: 7100 + i, title: code, post_status: status, couponCode: code, couponType: type,
	startDate: sqlDate(NOW - 20 * DAY).slice(0, 10), endDate: sqlDate(NOW + 40 * DAY).slice(0, 10), limit: '100', amount,
}));

export const subscriptions = customers().slice(0, 5).map((c, i) => {
	var order = orders.find(o => o.userid === String(c.id)) ?? orders[i];
	var statuses = ['active', 'active', 'active', 'paused', 'canceled'];
	return {
		id: String(i + 1), userid: String(c.id), order_id: order.id, plan_id: '0', status: statuses[i],
		start_date: sqlDate(NOW - (60 + i * 10) * DAY).slice(0, 10), end_date: null,
		next_billing_date: statuses[i] === 'active' ? sqlDate(NOW + (5 + i * 3) * DAY).slice(0, 10) : null,
		cancel_at_period_end: '0', renewal_interval: 'month', interval_count: '1', trial_start: null, trial_end: null,
		payment_method_id: '0', last_payment_date: sqlDate(NOW - (25 - i) * DAY).slice(0, 10),
		total_amount: money(1290 + 130), subtotal_amount: money(1290),
		created_at: sqlDate(NOW - (60 + i * 10) * DAY), updated_at: sqlDate(NOW - 3 * DAY),
		billing_name: c.name, billing_email: c.user_email, billing_phone: c.billing_phone,
		customer_name: c.name, customer_email: c.user_email,
	};
});

export const activities = orders.slice(0, 20).map((o, i) => ({
	id: String(i + 1), userid: o.userid, object_type: 'order', object_id: o.id,
	activity: i % 3 === 0 ? 'order_status_changed' : 'order_created',
	title: i % 3 === 0 ? `Order #${o.id} marked ${o.status}` : `New order #${o.id} from ${o.billing_name}`,
	datetime: o.created_at,
}));

/* =================================================================== EXPENSES */

const EXPENSE_ROWS = [
	['Shop rent', 'Rent', '', [['Monthly rent', 1, 25000]]],
	['Electricity bill', 'Utilities', 'Electricity', [['DESCO prepaid recharge', 1, 3200]]],
	['Internet', 'Utilities', 'Internet', [['Fiber 50 Mbps', 1, 1500]]],
	['Staff salaries', 'Salaries', '', [['Store manager', 1, 22000], ['Packing assistant', 1, 12000]]],
	['Facebook ads', 'Marketing', 'Ads', [['Boosted posts', 3, 1500], ['Page likes campaign', 1, 2000]]],
	['Packaging materials', 'Packaging', '', [['Cartons (100)', 2, 1800], ['Bubble wrap roll', 3, 450], ['Packing tape', 10, 60]]],
	['Courier top-up', 'Delivery', 'Courier', [['Steadfast balance', 1, 5000]]],
	['Rider fuel', 'Delivery', 'Fuel', [['Octane', 12, 130]]],
	['Office tea & snacks', 'Office', '', [['Tea, sugar, biscuits', 1, 850]]],
	['Product photography', 'Marketing', 'Content', [['Photo session (30 items)', 1, 6000]]],
	['Printer ink', 'Office', '', [['Ink cartridges', 2, 1200]]],
	['Electricity bill', 'Utilities', 'Electricity', [['DESCO prepaid recharge', 1, 2900]]],
	['Internet', 'Utilities', 'Internet', [['Fiber 50 Mbps', 1, 1500]]],
	['Shop rent', 'Rent', '', [['Monthly rent', 1, 25000]]],
	['Domain & hosting', 'Software', '', [['Hosting renewal', 1, 4500]]],
	['SMS credits', 'Software', 'SMS', [['5,000 SMS', 1, 1750]]],
	['Rider fuel', 'Delivery', 'Fuel', [['Octane', 15, 130]]],
	['Cleaning service', 'Office', '', [['Monthly cleaning', 1, 2000]]],
];

let expenseLineSeq = 500;
export const expenses = EXPENSE_ROWS.map(([title, category, subcategory, lines], i) => {
	var id = String(301 + i);
	var created = NOW - (58 - i * 3.2) * DAY - int(0, 20000) * 1000;
	var lineItems = lines.map(([name, qty, price]) => ({
		id: String(++expenseLineSeq), expense_id: id, product_id: '0', product_name: name, sku: '',
		quantity: String(qty), price: money(price), subtotal: money(qty * price), tax: '0.00', total: money(qty * price), meta: null, title: name,
	}));
	var total = lineItems.reduce((s, l) => s + Number(l.total), 0);
	var unpaid = i >= EXPENSE_ROWS.length - 3;
	return {
		id, title, total_amount: money(total), category, subcategory,
		payment_method: pick(['cash', 'cash', 'bkash', 'bank_transfer']),
		payment_status: unpaid ? (i % 2 ? 'pending' : 'unpaid') : 'paid',
		transaction_id: '', created_by: { name: demoAdmin.name, id: demoAdmin.id }, created_for: '0',
		billing_name: '', billing_email: '', billing_phone: '', billing_address: '', note: '',
		created_at: sqlDate(created), updated_at: sqlDate(created + 3600000),
		lineItems,
	};
});

/* =================================================================== PURCHASES */

let purchaseLineSeq = 900;
export const purchases = Array.from({ length: 12 }, (_, i) => {
	var id = String(401 + i);
	var supplier = suppliers()[i % suppliers().length];
	var created = NOW - (55 - i * 4.5) * DAY;
	var status = i >= 10 ? 'pending' : i === 9 ? 'processing' : i === 4 ? 'canceled' : 'completed';
	var picked = [];
	while (picked.length < int(2, 4)) { var p = pick(products); if (!picked.includes(p)) picked.push(p); }
	var purchase_items = picked.map(p => {
		var v = p.variations.length ? pick(p.variations) : null;
		var qty = int(6, 30);
		var price = Number(v ? v.trade_price : p.trade_price);
		return {
			id: String(++purchaseLineSeq), purchase_id: id, product_id: String(p.id), variation_id: v ? v.id : '',
			product_name: v ? `${p.title} - ${v.title}` : p.title, sku: v ? v.sku : p.sku,
			quantity: String(qty), price: money(price), subtotal: money(qty * price), tax: '0.00', total: money(qty * price), meta: null,
			title: v ? `${p.title} - ${v.title}` : p.title,
		};
	});
	var subtotal = purchase_items.reduce((s, l) => s + Number(l.total), 0);
	var shipping = pick([0, 150, 300]);
	var discount = i % 3 === 0 ? Math.round(subtotal * 0.03) : 0;
	return {
		id, status, category: 'Stock', total_amount: money(subtotal + shipping - discount), subtotal_amount: money(subtotal),
		discount_amount: money(discount), tax_amount: '0.00', shipping_amount: money(shipping), advance_payment: '0.00',
		payment_method: status === 'completed' ? pick(['cash', 'bank_transfer']) : '', payment_status: status === 'completed' ? 'paid' : status === 'canceled' ? '' : 'unpaid',
		transaction_id: '', user_id: String(demoAdmin.id), supplier_id: String(supplier.id),
		billing_name: supplier.name, billing_email: supplier.user_email, billing_phone: supplier.billing_phone,
		billing_address: `${supplier._extra.billing_address1}, ${supplier.billing_city}`, note: '',
		created_at: sqlDate(created), updated_at: sqlDate(created + 2 * DAY), advance_payment_note: '0',
		purchase_items,
	};
});

/* =================================================================== STOCK HISTORY */

/*
	Every movement behind today's stock: completed orders took units out
	(sale), refunded ones put them back (return), completed purchases brought
	them in (purchase), plus a few hand adjustments. Built per product - or
	per variation - from the oldest event forward, starting from an opening
	count chosen so the last stock_after is the stock the product shows now.
*/
export const stockHistory = (() => {
	var events = [];
	var push = (product, variationId, event_type, delta, at, reference_type, reference_id, note, unit_cost = 0) => events.push({
		product, variationId: variationId ? String(variationId) : null, event_type, delta, at, reference_type, reference_id: String(reference_id ?? ''), note, unit_cost,
	});
	var productOf = (id) => products.find(p => String(p.id) === String(id));

	orders.forEach(o => {
		if (!['completed', 'refunded'].includes(o.status)) return;
		var soldAt = Date.parse(o.created_at.replace(' ', 'T')) + DAY;
		o._items.forEach(item => {
			var p = productOf(item.product_id);
			if (!p) return;
			var variationId = p.variations.length ? item.variation_id : null;
			push(p, variationId, 'sale', -Number(item.quantity), soldAt, 'order', o.id, `Order #${o.id} completed`);
			if (o.status === 'refunded') push(p, variationId, 'return', Number(item.quantity), soldAt + 3 * DAY, 'order', o.id, `Order #${o.id} refunded`);
		});
	});
	purchases.filter(pu => pu.status === 'completed').forEach(pu => {
		var at = Date.parse(pu.created_at.replace(' ', 'T')) + DAY;
		pu.purchase_items.forEach(item => {
			var p = productOf(item.product_id);
			if (p) push(p, item.variation_id || null, 'purchase', Number(item.quantity), at, 'purchase', pu.id, `Purchase #${pu.id} received`, Number(item.price));
		});
	});
	products.filter((p, i) => !p.variations.length && i % 5 === 1).forEach((p, k) => {
		push(p, null, k % 2 ? 'adjustment_out' : 'adjustment_in', k % 2 ? -int(1, 3) : int(2, 6), NOW - int(2, 20) * DAY, 'manual', '', k % 2 ? 'Damaged in storage' : 'Found during stock count');
	});

	var rows = [];
	var groups = new Map();
	events.forEach(e => {
		var key = `${e.product.id}:${e.variationId ?? ''}`;
		if (!groups.has(key)) groups.set(key, []);
		groups.get(key).push(e);
	});
	groups.forEach(list => {
		list.sort((a, b) => a.at - b.at);
		var { product, variationId } = list[0];
		var variation = variationId ? product.variations.find(v => v.id === variationId) : null;
		var current = Number(variation ? variation.stock_count : product.stock_count) || 0;
		var opening = current - list.reduce((s, e) => s + e.delta, 0);
		if (opening < 0) {
			/* More sold than the opening count allows: the shelf held more than it shows now. */
			current += -opening;
			opening = 0;
			if (variation) variation.stock_count = String(current);
			else { product.stock_count = String(current); product.stock_status = current > 0 ? 'instock' : 'outofstock'; }
		}
		var level = opening;
		list.forEach(e => {
			var before = level; level += e.delta;
			rows.push({
				product_id: String(product.id), variation_id: variationId, warehouse_id: null, event_type: e.event_type,
				unit_cost: e.unit_cost.toFixed(3), quantity: Math.abs(e.delta).toFixed(3),
				stock_before: before.toFixed(3), stock_after: level.toFixed(3),
				reference_type: e.reference_type, reference_id: e.reference_id,
				event_id: `${e.reference_type}-${e.reference_id || 'manual'}-${product.id}-${variationId ?? 0}-${e.event_type}`,
				note: e.note, created_by: String(demoAdmin.id), created_at: sqlDate(e.at), created_by_name: demoAdmin.name,
				product_title: product.title, product_thumbnail: product.post_thumbnail.src, variation_title: variation ? variation.title : '',
			});
		});
	});
	rows.sort((a, b) => (a.created_at < b.created_at ? -1 : 1));
	return rows.map((r, i) => ({ id: String(i + 1), ...r }));
})();

/* What /api/settings and get_settings return. Payment secrets are blank, like a fresh install. */
export const settings = {
	site_title: 'ComboStore Demo',
	site_tagline: 'Everything for little ones',
	address: 'House 12, Road 5, Dhanmondi, Dhaka',
	email: 'hello@example.com',
	phone: '01700000000',
	mobilebanking: '',
	whatsapp: '',
	currency: 'BDT',
	couriers: { combostore: { enabled: true }, steadfast: { enabled: true } },
	apiKeys: { apiToken: { key: '' } },
	socialLinks: [],
	emailTemplates: [],
	smsTemplates: [],
	productAttributes: [{ label: 'Size', slug: 'size', args: { public: true, publicly_queryable: true, hierarchical: false, show_in_rest: true }, conditions: { post_type: ['product'], categories: [] } }],
	shippingClasses: [],
	paymentGateways: {
		cod: { enable: true, logo: { id: 0, title: '', src: '' } },
		bank_transfer: { enable: true, logo: { id: 0, title: '', src: '' } },
	},
	/* The demo template (lib/demo/api.js builds it from WonderJoy). */
	site_template: { template_id: '1' },
};
