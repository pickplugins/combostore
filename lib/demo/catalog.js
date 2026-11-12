/*
	A template's demo catalog: its products, product categories / tags /
	brands, and blog posts, for the storefront and the builder in demo mode.

	Each template ships a small spec beside its pages
	(components/PageBuilder/templates/<Name>/demo.js); buildCatalog() turns
	it into records in the shapes the combo-store/v2 endpoints return - the
	same shapes as lib/demo/data.js - and queryPosts() / queryTerms() answer
	the storefront's get_posts / get_terms the way the plugin does, tax query
	included, so a template's "Smartphones" slider shows its smartphones.

	The dashboard keeps the store in lib/demo/data.js (it has the orders,
	customers and reports); see lib/demo/templates.js for which pages get
	which.

	SPEC (every key but products optional)

	  about:       one line on the shop, used in descriptions
	  colors:      tile backgrounds (hex, no #); ink: tile text colour
	  lang:        'bn' writes the product and post bodies in Bangla
	  categories:  [name, slug?]            - slug defaults to slugify(name)
	  tags:        [name, slug?]
	  brands:      [name, slug?]
	  options:     { key: [label, [value | [value, priceDelta, slug?]]] }
	  products:    [title, 'cat-slug other-slug', price, extra?]
	                 extra: sale, brand (slug), tags ('a b'), vary ('key' or
	                 'key1 key2'), stock (0 = sold out), featured, desc,
	                 slug, img (the picture's label)
	  blogCategories: [name, slug?]
	  posts:       [title, 'blog-cat-slug', excerpt, slug?]

	Names in another script (Bangla) need a slug: slugify keeps a-z and 0-9
	only, so a URL stays plain ASCII. The placeholder pictures then show the
	slug as words, since placehold.co's font has no Bangla glyphs.

	Images are placehold.co tiles (already allowed in next.config.mjs), so
	nothing here is anyone's photo.
*/

/* ---- seeded random, per template ---- */
function mulberry32(seed) {
	return function () {
		seed |= 0; seed = seed + 0x6D2B79F5 | 0;
		var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
const hash = (s) => [...String(s)].reduce((h, c) => Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0, 2166136261);

const DAY = 86400000;
const pad = (n) => String(n).padStart(2, '0');
const sqlDate = (ms) => {
	var d = new Date(ms);
	return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
};
const money = (n) => Number(n || 0).toFixed(2);
const lower = (v) => String(v ?? '').toLowerCase();
export const slugify = (s) => String(s).toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const words = (s) => String(s ?? '').split(/\s+/).filter(Boolean);
const tile = (text, bg, fg, size) =>
	`https://placehold.co/${size}/${bg}/${fg}/png?text=${encodeURIComponent(String(text).slice(0, 26)).replace(/%20/g, '+')}`;
const shortTitle = (title) => String(title).split(/[,(|–-]/)[0].trim();
/* A picture label placehold.co can draw: the text itself if it is ASCII, else the slug as words. */
const tileLabel = (text, slug) => /[^\x00-\x7F]/.test(text) ? String(slug || 'Demo').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()) : text;

const COPY = {
	en: {
		by: (b) => ` by ${b}`, stop: '.', highlights: 'Highlights', points: ['Carefully checked before it ships', 'Easy returns within 7 days', 'Cash on delivery available'],
		note: 'Demo product: the name, price and picture are invented to show the template.', detail: 'Detail view',
		postHead: 'What to know', postBody: 'We put this short guide together so you can choose with confidence.',
		postPoints: ['Start with what you need most', 'Compare a few options side by side', 'Ask us on chat if you are unsure'],
		postNote: 'Demo post: written to show how the blog looks in this template.', author: 'Demo Editor',
	},
	bn: {
		by: (b) => ` - ${b}`, stop: '।', highlights: 'বিশেষত্ব', points: ['পাঠানোর আগে ভালো করে যাচাই করা', '৭ দিনের মধ্যে সহজ রিটার্ন', 'ক্যাশ অন ডেলিভারি সুবিধা'],
		note: 'ডেমো পণ্য: টেমপ্লেটটি দেখানোর জন্য নাম, দাম ও ছবি বানানো।', detail: 'Detail view',
		postHead: 'যা জানা দরকার', postBody: 'নিশ্চিন্তে বেছে নিতে আমরা এই ছোট গাইডটি তৈরি করেছি।',
		postPoints: ['সবচেয়ে বেশি যা দরকার, তা দিয়ে শুরু করুন', 'কয়েকটি অপশন পাশাপাশি তুলনা করুন', 'নিশ্চিত না হলে চ্যাটে আমাদের জিজ্ঞেস করুন'],
		postNote: 'ডেমো পোস্ট: এই টেমপ্লেটে ব্লগ কেমন দেখায় তা দেখাতে লেখা।', author: 'ডেমো সম্পাদক',
	},
};

const DEFAULT_COLORS = ['F3F4F6', 'E0E7FF', 'FCE7F3', 'DCFCE7', 'FEF3C7', 'E0F2FE'];

export function buildCatalog(spec, name = 'demo') {
	var rand = mulberry32(hash(name));
	var int = (min, max) => Math.floor(rand() * (max - min + 1)) + min;
	var colors = spec?.colors?.length ? spec.colors : DEFAULT_COLORS;
	var ink = spec?.ink ?? '1F2937';
	var color = (i) => colors[i % colors.length];
	var about = spec?.about ?? 'Picked for the demo store.';
	var copy = COPY[spec?.lang] ?? COPY.en;
	var now = Date.now();
	var daysAgo = (min, max) => now - int(min, max) * DAY - int(0, 86399) * 1000;

	/* ---- terms ---- */
	var termId = 3000;
	var makeTerms = (list, taxonomy) => (list ?? []).map((entry, i) => {
		var [termName, slug] = Array.isArray(entry) ? entry : [entry];
		var id = ++termId;
		slug = slug || slugify(termName);
		var src = tile(tileLabel(termName, slug), color(i), ink, '400x400');
		return {
			term_id: id, name: termName, slug, term_group: 0, term_taxonomy_id: id,
			taxonomy, description: `${termName} - ${about}`, parent: 0, count: 0, filter: 'raw',
			thumbnail: { id: 0, title: termName, src }, thumbnail_url: src,
		};
	});
	var terms = {
		product_cat: makeTerms(spec?.categories, 'product_cat'),
		product_tag: makeTerms(spec?.tags, 'product_tag'),
		product_brand: makeTerms(spec?.brands, 'product_brand'),
		category: makeTerms(spec?.blogCategories ?? [['Guides', 'guides'], ['News', 'news']], 'category'),
		post_tag: [],
	};
	var termRef = (t) => ({ term_id: t.term_id, name: t.name, slug: t.slug });
	var findTerms = (taxonomy, slugs) => words(slugs).map(s => terms[taxonomy].find(t => t.slug === s)).filter(Boolean);

	/* ---- products ---- */
	var options = spec?.options ?? {};
	var products = (spec?.products ?? []).map(([title, catSlugs, price, extra = {}], i) => {
		var id = 20000 + i;
		var bg = color(i);
		var slug = extra.slug || slugify(title);
		var image = { id: 90000 + i * 2, title, src: tile(extra.img ?? tileLabel(shortTitle(title), slug), bg, ink, '600x600') };
		var gallery = [image, { id: 90001 + i * 2, title: `${title} (detail)`, src: tile(copy.detail, bg, ink, '600x600') }];
		var regular = Number(price);
		var sale = extra.sale != null ? Number(extra.sale) : regular;
		var stockCount = extra.stock != null ? Number(extra.stock) : int(8, 90);

		var cats = findTerms('product_cat', catSlugs);
		var tags = findTerms('product_tag', extra.tags);
		var brands = findTerms('product_brand', extra.brand);
		[...cats, ...tags, ...brands].forEach(t => t.count++);

		/* Attributes in the shape the variation picker reads: items carry slug/name, a variation's attributes map attr -> { slug, name }. */
		var attributeKeys = words(extra.vary).filter(k => options[k]);
		var attributes = attributeKeys.map(key => {
			var [label, values] = options[key];
			return {
				title: label, attr: key, type: 'button',
				items: values.map(v => { var [value, , vslug] = Array.isArray(v) ? v : [v]; return { slug: vslug || slugify(value), name: value }; }),
			};
		});
		var combos = attributeKeys.reduce((acc, key) => {
			var values = options[key][1].map(v => Array.isArray(v) ? v : [v, 0]);
			return acc.flatMap(c => values.map(([value, delta, vslug]) => ({ ...c, attrs: { ...c.attrs, [key]: { slug: vslug || slugify(value), name: value } }, delta: c.delta + Number(delta || 0), names: [...c.names, value] })));
		}, [{ attrs: {}, delta: 0, names: [] }]);
		var variations = attributeKeys.length ? combos.map((c, k) => {
			var count = stockCount === 0 ? 0 : (k % 7 === 5 ? 0 : int(3, 30));
			return {
				id: String(id * 100 + k), product_id: String(id), thumbnail: image, title: c.names.join(' / '), description: '',
				sku: `DEMO-${id}-${k + 1}`, enable: 'yes', downloadable: 'no',
				stock_status: count > 0 ? 'instock' : 'outofstock', stock_count: String(count),
				regular_price: money(regular + c.delta), sale_price: money(sale + c.delta), trade_price: money((sale + c.delta) * 0.65),
				weight: null, height: null, width: null, length: null, backorders: 'no', shipping_class: '',
				attributes: c.attrs, meta: '',
			};
		}) : [];

		var created = daysAgo(2, 240);
		var brandName = brands[0]?.name;
		var excerpt = extra.desc ?? about;
		var content = `<p>${title}${brandName ? copy.by(brandName) : ''}${copy.stop} ${extra.desc ?? about}</p>`
			+ `<h3>${copy.highlights}</h3><ul>${copy.points.map(p => `<li>${p}</li>`).join('')}</ul>`
			+ `<p>${copy.note}</p>`;
		var rating = (4 + rand()).toFixed(1);
		var reviews = int(0, 140);

		return {
			id, post_id: id, product_id: String(id), post_type: 'cmb_product',
			title, slug, status: 'publish', postStatus: 'publish',
			post_content: content, post_content_html: content, post_excerpt: excerpt, excerpt,
			sku: variations.length ? '' : `DEMO-${id}`,
			post_thumbnail: image, post_thumbnail_url: image.src,
			featured: extra.featured || i % 5 === 0 ? 'yes' : '',
			categories: cats.map(termRef), tags: tags.map(termRef), brands: brands.map(termRef), badges: [], visibility: [],
			price: money(variations.length ? Math.min(...variations.map(v => Number(v.sale_price))) : sale),
			variations, gallery, menu_order: null,
			stock_status: stockCount > 0 ? 'instock' : 'outofstock', stock_count: String(stockCount),
			weight: money(0.2 + rand() * 2), height: '0.00', width: '0.00', length: '0.00',
			price_type: variations.length ? 'variable' : 'simple',
			regular_price: money(regular), sale_price: money(sale), bulk_prices: [],
			pwyw_min_price: null, pwyw_default_price: null, bargain_min_price: null, bargain_default_price: null,
			trade_price: money(sale * 0.65),
			addons: variations.length ? ['manageStock', 'variations'] : ['manageStock'],
			downloads: [], upsells: [], crosssells: [], faq: [], related_products: [], product_template: null,
			attributes, total_rate: String(reviews), avg_rating: reviews ? rating : '0.00',
			created_at: sqlDate(created), updated_at: sqlDate(created + int(0, 5) * DAY), post_date: sqlDate(created), slugLock: false,
		};
	});

	/* ---- posts ---- */
	var posts = (spec?.posts ?? []).map(([title, catSlug, excerpt, postSlug], i) => {
		var slug = postSlug || slugify(title);
		var id = 60000 + i;
		var cats = findTerms('category', catSlug);
		if (!cats.length && terms.category[0]) cats = [terms.category[i % terms.category.length]];
		cats.forEach(t => t.count++);
		var src = tile(tileLabel(shortTitle(title), slug), color(i + 2), ink, '1200x675');
		var date = daysAgo(1, 120);
		var content = `<p>${excerpt}</p><h2>${copy.postHead}</h2><p>${about} ${copy.postBody}</p>`
			+ `<ul>${copy.postPoints.map(p => `<li>${p}</li>`).join('')}</ul>`
			+ `<p>${copy.postNote}</p>`;
		return {
			id, title, post_type: 'post', slug,
			content, post_content: content, post_content_html: content, excerpt, post_excerpt: excerpt,
			status: 'publish', postStatus: 'publish', post_status: 'publish',
			post_thumbnail: { id: String(80000 + i), title, src }, post_thumbnail_url: src,
			featured: i === 0 ? 'yes' : '',
			author: { name: copy.author, id: 501, avatar: tile('DE', 'E5E7EB', '374151', '96x96') },
			categories: cats.map(termRef), tags: [],
			gallery: [], addons: [], downloads: '', related_posts: [],
			voteCount: int(0, 40), viewCount: int(40, 2400), loveCount: int(0, 90), downloadCount: 0,
			faq: '', relatedPrompts: '', variations: [], menu_order: 0,
			post_date: sqlDate(date), created_at: sqlDate(date),
		};
	});

	return { terms, products, posts };
}

/* ======================================================= QUERIES */

const TAXONOMY_FIELD = { product_cat: 'categories', product_tag: 'tags', product_brand: 'brands', category: 'categories', post_tag: 'tags' };

/* Does a record carry any (or, with AND, all) of these terms? `values` are slugs, ids or { slug } objects. */
function hasTerms(record, taxonomy, values, operator = 'IN') {
	var list = record?.[TAXONOMY_FIELD[taxonomy]] ?? [];
	var wanted = [].concat(values ?? []).map(v => v?.slug ?? v?.term_id ?? v?.id ?? v).filter(v => v !== '' && v != null).map(String);
	if (!wanted.length) return true;
	var has = (w) => list.some(t => t.slug === w || String(t.term_id) === w);
	if (operator === 'NOT IN') return !wanted.some(has);
	if (operator === 'AND') return wanted.every(has);
	return wanted.some(has);
}

/* The builder's taxQuery: groups ANDed together, each group's collections joined by its relation. */
function matchesTaxQuery(record, taxQuery) {
	return [].concat(taxQuery ?? []).every(group => {
		var rules = (group?.collections ?? (group?.taxonomy ? [group] : [])).filter(c => c?.taxonomy && [].concat(c.terms ?? []).length);
		if (!rules.length) return true;
		var results = rules.map(c => hasTerms(record, c.taxonomy, c.terms, c.operator));
		return lower(group?.relation) === 'and' ? results.every(Boolean) : results.some(Boolean);
	});
}

function sortRecords(list, orderby, order) {
	var dir = lower(order) === 'asc' ? 1 : -1;
	var key = lower(orderby);
	var by = {
		title: (r) => lower(r.title), name: (r) => lower(r.title),
		price: (r) => Number(r.price || 0),
		popularity: (r) => Number(r.total_rate || 0), rating: (r) => Number(r.avg_rating || 0),
		menu_order: (r) => Number(r.menu_order || 0),
	}[key] ?? ((r) => String(r.post_date ?? r.created_at ?? ''));
	if (key === 'rand') return [...list].sort((a, b) => (hash(a.id) % 97) - (hash(b.id) % 97));
	return [...list].sort((a, b) => { var x = by(a), y = by(b); return (x < y ? -1 : x > y ? 1 : 0) * dir; });
}

function paginate(items, body, fallback) {
	var raw = parseInt(body?.posts_per_page ?? body?.per_page ?? body?.number ?? fallback, 10);
	var size = raw === -1 ? Math.max(items.length, 1) : (raw > 0 ? Math.min(raw, 200) : fallback);
	var paged = Math.max(1, parseInt(body?.paged ?? body?.page ?? 1, 10) || 1);
	return { total: items.length, max_pages: Math.ceil(items.length / size), items: items.slice((paged - 1) * size, paged * size) };
}

/* get_posts: blog posts, products (post_type cmb_product) or both. */
export function queryPosts(store, body) {
	var types = [].concat(body?.post_type ?? 'post');
	var pool = [
		...(types.includes('cmb_product') || types.includes('product') ? store.products : []),
		...(types.includes('post') || types.includes('any') ? store.posts : []),
	];
	var keyword = lower(body?.keyword ?? body?.s).trim();
	var list = pool.filter(r =>
		r.status === 'publish' &&
		matchesTaxQuery(r, body?.taxQuery ?? body?.tax_query) &&
		hasTerms(r, 'product_cat', body?.categories) &&
		hasTerms(r, 'product_tag', body?.tags) &&
		hasTerms(r, 'product_brand', body?.brands) &&
		(!keyword || lower(r.title).includes(keyword)) &&
		(!body?.featured || r.featured === 'yes'));
	var { items, total, max_pages } = paginate(sortRecords(list, body?.orderby, body?.order), body, 10);
	return { total, max_pages, posts: items };
}

/* get_products: the shop's own product list (lib/getProducts and the dashboard-style filters). */
export function queryProducts(store, body) {
	var cat = body?.category ?? body?.categories, brand = body?.brand ?? body?.brands, tag = body?.tag ?? body?.tags;
	var keyword = lower(body?.keyword).trim();
	var stock = body?.stock_status ? [].concat(body.stock_status) : null;
	var list = store.products.filter(p =>
		hasTerms(p, 'product_cat', cat) && hasTerms(p, 'product_brand', brand) && hasTerms(p, 'product_tag', tag) &&
		matchesTaxQuery(p, body?.taxQuery) &&
		(!stock || stock.includes(p.stock_status)) &&
		(!keyword || lower(p.title).includes(keyword) || lower(p.sku).includes(keyword)));
	var { items, total, max_pages } = paginate(sortRecords(list, body?.orderby, body?.order), body, 20);
	return { total, max_pages, posts: items };
}

/* get_terms: one taxonomy's terms, by count or name, optionally only those in use. */
export function queryTerms(store, body) {
	var list = store.terms[body?.taxonomy ?? 'product_cat'] ?? [];
	var keyword = lower(body?.keyword).trim();
	var hideEmpty = body?.hide_empty === true || body?.hide_empty === 'true' || body?.hide_empty === 1;
	list = list.filter(t => (!hideEmpty || t.count > 0) && (!keyword || lower(t.name).includes(keyword)));
	var key = lower(body?.orderby);
	var dir = lower(body?.order) === 'asc' ? 1 : -1;
	if (key === 'count') list = [...list].sort((a, b) => (a.count - b.count) * dir);
	else if (key === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name) * dir);
	var { items, total, max_pages } = paginate(list, body, 100);
	return { total, max_pages, terms: items };
}

export function findProduct(store, body) {
	return store.products.find(p => String(p.id) === String(body?.id) || p.slug === body?.slug) ?? null;
}

export function findPost(store, body) {
	return store.posts.find(p => String(p.id) === String(body?.id) || p.slug === body?.slug) ?? null;
}

export function findTerm(store, body) {
	var all = body?.taxonomy ? (store.terms[body.taxonomy] ?? []) : Object.values(store.terms).flat();
	return all.find(t => String(t.term_id) === String(body?.id ?? body?.term_id) || t.slug === body?.slug) ?? null;
}
