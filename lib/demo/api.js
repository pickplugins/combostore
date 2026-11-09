/*
	The demo server: answers a combo-store/v2 endpoint from lib/demo/data.js,
	in the same shape the WordPress plugin does.

	Reads filter and page through the records the way the dashboard asks
	(keyword, status, paged, per_page / number). Writes - update, delete,
	duplicate, moderate, bulk status - change the in-memory records, so the
	dashboard reacts as it would to a real save; a page reload puts the demo
	store back as it was.

	An endpoint with no handler of its own still answers: a get_* name that
	ends in "s" with an empty list, any other get_* with an empty object, and
	everything else with { success: true }. So nothing in the dashboard waits
	on a request that never comes back.
*/

import * as db from './data';
import { DEMO_TOKEN } from './config';

const money = (n) => Number(n || 0).toFixed(2);
const lower = (v) => String(v ?? '').toLowerCase();
const now = () => db.sqlDate(Date.now());

/* ---- reading helpers ---- */

function perPage(body, fallback = 20) {
	var n = parseInt(body?.per_page ?? body?.number ?? body?.posts_per_page ?? fallback, 10);
	return n > 0 ? Math.min(n, 200) : fallback;
}

function page(items, body, fallback) {
	var size = perPage(body, fallback);
	var paged = Math.max(1, parseInt(body?.paged ?? body?.page ?? 1, 10) || 1);
	var total = items.length;
	return { total, max_pages: Math.ceil(total / size), posts: items.slice((paged - 1) * size, paged * size) };
}

function matches(keyword, ...fields) {
	var k = lower(keyword).trim();
	if (!k) return true;
	return fields.some(f => lower(f).includes(k));
}

function sortByDate(items, body, key = 'created_at') {
	var dir = lower(body?.order) === 'asc' ? 1 : -1;
	return [...items].sort((a, b) => (String(a[key]) < String(b[key]) ? -1 : 1) * dir);
}

const idsOf = (body) => {
	var raw = body?.ids ?? body?.post_ids ?? (body?.id != null ? [body.id] : []);
	return (Array.isArray(raw) ? raw : [raw]).map(String);
};

function removeWhere(list, keyFn, ids) {
	var before = list.length;
	for (var i = list.length - 1; i >= 0; i--) if (ids.includes(String(keyFn(list[i])))) list.splice(i, 1);
	return before - list.length;
}

const ok = (extra = {}) => ({ success: true, status: 'success', message: 'Saved (demo mode: kept until the page reloads).', ...extra });
const fail = (message) => ({ success: false, status: 'failed', message });

/* ---- record shapes ---- */

function userDetail(u) {
	if (!u) return null;
	var { _extra, ...rest } = u;
	return {
		id: u.id, email: u.user_email, name: u.name, avatar: u.avatar, roles: u.roles,
		first_name: u.first_name, last_name: u.last_name, phone: u.phone,
		phones: [], addresses: [], kids: [],
		billing_address1: _extra?.billing_address1 ?? '', billing_address2: '',
		zip_code: _extra?.zip_code ?? '', billing_phone: u.billing_phone, billing_name: u.billing_name,
		billing_email: u.billing_email, billing_city: u.billing_city, billing_country: u.billing_country,
		delivery_location: '', city: u.billing_city, country: 'BD',
		user_login: rest.user_login, registered: _extra?.registered,
	};
}
const userRow = (u) => { var { _extra, ...rest } = u; return { ...rest, user_registered: _extra?.registered }; };

const EMPTY_DELIVERY = { id: null, customer_id: null, order_id: null, rider_id: null, courier: null, consignment_id: null, tracking_code: null, courier_data: null, type: null, status: null, startLatLng: [], endLatLng: [], datetime: '' };

function orderRow(o) {
	var { _items, delivery_location, advance_payment_note, ...rest } = o;
	var d = db.deliveries.find(x => x.order_id === o.id);
	return { ...rest, delivery: d ? { ...d } : EMPTY_DELIVERY, order_items: _items.map(({ thumbnail, ...i }) => i), phones: false };
}

function deliveryDetail(d) {
	if (!d) return null;
	var parse = (v) => { try { return JSON.parse(v); } catch { return null; } };
	return { ...d, startLatLng: parse(d.startLatLng), endLatLng: parse(d.endLatLng) };
}

function productRow(p) {
	return {
		id: p.id, post_type: p.post_type, title: p.title, slug: p.slug, status: p.status, sku: p.sku || null,
		post_thumbnail: p.post_thumbnail, post_thumbnail_url: p.post_thumbnail_url, featured: p.featured,
		categories: p.categories, tags: p.tags, brands: p.brands, visibility: p.visibility, price: p.price,
		variations: p.variations, product_id: p.product_id, gallery: p.gallery, menu_order: p.menu_order,
		stock_status: p.stock_status, stock_count: p.stock_count, weight: p.weight, height: p.height, width: p.width, length: p.length,
		price_type: p.price_type, regular_price: p.regular_price, sale_price: p.sale_price, bulk_prices: p.bulk_prices,
		pwyw_min_price: null, pwyw_default_price: null, bargain_min_price: null, bargain_default_price: null,
		trade_price: p.trade_price, addons: p.addons, downloads: [], upsells: [], crosssells: [], faq: [], related_products: [],
		product_template: null, attributes: p.attributes, total_rate: p.total_rate, avg_rating: p.avg_rating,
		created_at: p.created_at, updated_at: p.updated_at, slugLock: false,
	};
}

const productStock = (p) => p.variations.length ? p.variations.reduce((s, v) => s + Number(v.stock_count || 0), 0) : Number(p.stock_count || 0);

/* ---- reports ---- */

const countedOrders = () => db.orders.filter(o => !['cancelled', 'refunded', 'failed'].includes(o.status));

function overviews() {
	var list = countedOrders();
	var sum = (k) => list.reduce((s, o) => s + Number(o[k] || 0), 0);
	return {
		total_products: db.products.length,
		total_customers: db.customers().length,
		total_orders: String(db.orders.length),
		total_subscriptions: String(db.subscriptions.filter(s => s.status === 'active').length),
		total_orders_amount: sum('total_amount'),
		total_discount_amount: sum('discount_amount'),
		total_tax_amount: 0,
		total_trade_price: sum('trade_price'),
		total_gross_profit_amount: sum('gross_profit'),
		total_net_profit_amount: sum('net_profit'),
		total_shipping_amount: sum('shipping_amount'),
		total_purchase_amount: 185000,
		total_expenses_amount: 42500,
		total_due_amount: list.filter(o => o.payment_status !== 'paid').reduce((s, o) => s + Number(o.total_amount), 0),
		total_pending_amount: db.orders.filter(o => o.status === 'pending').reduce((s, o) => s + Number(o.total_amount), 0),
	};
}

function chartData(body) {
	var days = 30;
	if (body?.start_date && body?.end_date) {
		var span = Math.round((Date.parse(body.end_date) - Date.parse(body.start_date)) / 86400000) + 1;
		if (span > 0 && span <= 366) days = span;
	}
	var end = body?.end_date ? Date.parse(body.end_date) : Date.now();
	var labels = [], ordersData = [], purchases = [], expenses = [], refunds = [];
	for (var i = days - 1; i >= 0; i--) {
		var label = db.sqlDate(end - i * 86400000).slice(0, 10);
		labels.push(label);
		var dayOrders = db.orders.filter(o => o.created_at.startsWith(label));
		ordersData.push(dayOrders.filter(o => !['cancelled', 'refunded'].includes(o.status)).reduce((s, o) => s + Number(o.total_amount), 0));
		refunds.push(dayOrders.filter(o => o.status === 'refunded').reduce((s, o) => s + Number(o.total_amount), 0));
		purchases.push(i % 7 === 3 ? 18000 + (i * 1373) % 9000 : 0);
		expenses.push(i % 5 === 1 ? 1500 + (i * 911) % 2500 : 0);
	}
	return {
		labels,
		orders: { label: 'Orders', data: ordersData },
		purchases: { label: 'Purchases', data: purchases },
		expenses: { label: 'Expenses', data: expenses },
		refunds: { label: 'Refunds', data: refunds },
	};
}

function topSelling(body) {
	var map = new Map();
	countedOrders().forEach(o => o._items.forEach(i => {
		var row = map.get(i.product_id) ?? { product_id: i.product_id, product_name: i.product_name.split(' - ')[0], sku: i.sku, total_units_sold: 0, total_orders: 0, total_revenue: 0 };
		row.total_units_sold += Number(i.quantity); row.total_orders += 1; row.total_revenue += Number(i.total);
		map.set(i.product_id, row);
	}));
	var rows = [...map.values()].sort((a, b) => b.total_units_sold - a.total_units_sold).map(r => {
		var p = db.products.find(x => String(x.id) === r.product_id);
		return { ...r, total_units_sold: String(r.total_units_sold), total_orders: String(r.total_orders), total_revenue: money(r.total_revenue), product_exists: !!p, product_image: p ? p.post_thumbnail.src : false };
	});
	var { posts, ...meta } = page(rows, body, 10);
	return { products: posts, ...meta };
}

function topCustomers(body) {
	var map = new Map();
	countedOrders().filter(o => o.userid !== '0').forEach(o => {
		var row = map.get(o.userid) ?? { userid: o.userid, billing_name: o.billing_name, billing_email: o.billing_email, total_orders: 0, total_spent: 0 };
		row.total_orders += 1; row.total_spent += Number(o.total_amount);
		map.set(o.userid, row);
	});
	var rows = [...map.values()].sort((a, b) => b.total_spent - a.total_spent).map(r => ({ ...r, total_orders: String(r.total_orders), total_spent: money(r.total_spent) }));
	var { posts, ...meta } = page(rows, body, 10);
	return { users: posts, ...meta };
}

/* ---- the endpoints ---- */

const handlers = {

	/* Sign-in: any username and password is accepted. */
	'jwt-auth/v1/token': () => ({ token: DEMO_TOKEN, user_email: db.demoAdmin.user_email, user_nicename: db.demoAdmin.user_login, user_display_name: db.demoAdmin.name }),
	'jwt-auth/v1/token/validate': () => ({ code: 'jwt_auth_valid_token', data: { status: 200 } }),

	get_user: () => ({ success: true, user: userDetail(db.demoAdmin) }),
	get_settings: () => db.settings,
	get_settings_public: () => db.settings,
	update_settings: (b) => { Object.assign(db.settings, b?.settings ?? b ?? {}); return ok(); },

	/* Users and customers */
	get_users: (b) => {
		var role = b?.role ? String(b.role) : '';
		var list = db.users.filter(u => (!role || u.roles.includes(role)) && matches(b?.keyword, u.name, u.user_email, u.billing_phone, u.user_login));
		list = [...list].sort((a, z) => (a._extra.registered < z._extra.registered ? 1 : -1) * (lower(b?.order) === 'asc' ? -1 : 1));
		var res = page(list.map(userRow), b, 20);
		return { noPosts: res.total === 0, ...res };
	},
	get_customer: (b) => {
		var u = db.users.find(x => String(x.id) === String(b?.id ?? b?.userid));
		return u ? { customer: userDetail(u) } : fail('Customer not found.');
	},
	update_user_profile: (b) => {
		var u = db.users.find(x => String(x.id) === String(b?.id ?? b?.userid ?? db.demoAdmin.id));
		if (u) ['first_name', 'last_name', 'phone', 'billing_city'].forEach(k => { if (b?.[k] != null) u[k] = b[k]; });
		return ok();
	},
	register_user: (b) => {
		var id = Math.max(...db.users.map(u => u.id)) + 1;
		var name = `${b?.first_name ?? ''} ${b?.last_name ?? ''}`.trim() || b?.username || `New user ${id}`;
		db.users.push({ ...userRow(db.users[db.users.length - 1]), id, name, display_name: name, user_login: b?.username ?? `user${id}`, user_email: b?.email ?? `user${id}@example.com`, roles: [b?.role ?? 'customer'], _extra: { registered: now() } });
		return ok({ id });
	},
	delete_users: (b) => ok({ deleted: removeWhere(db.users, u => u.id, idsOf(b).filter(id => id !== String(db.demoAdmin.id))) }),

	/* Products */
	get_products: (b) => {
		var status = b?.status ?? b?.post_status;
		var cat = b?.category, brand = b?.brand, tag = b?.tag;
		var stock = b?.stock_status ? [].concat(b.stock_status) : null;
		var hasTerm = (list, v) => !v || (Array.isArray(v) ? v : [v]).some(x => list.some(t => String(t.term_id) === String(x?.term_id ?? x?.id ?? x) || t.slug === (x?.slug ?? x)));
		var list = db.products.filter(p =>
			(!status || status === 'any' || p.status === status) &&
			(b?.is_admin || p.status === 'publish' || status) &&
			hasTerm(p.categories, cat) && hasTerm(p.brands, brand) && hasTerm(p.tags, tag) &&
			(!stock || stock.includes(p.stock_status)) &&
			matches(b?.keyword, p.title, p.sku, p.id));
		var orderby = b?.orderby;
		if (orderby === 'title') list = [...list].sort((a, z) => a.title.localeCompare(z.title) * (lower(b?.order) === 'asc' ? 1 : -1));
		else if (orderby === 'price') list = [...list].sort((a, z) => (Number(a.price) - Number(z.price)) * (lower(b?.order) === 'asc' ? 1 : -1));
		else list = sortByDate(list, b);
		var res = page(list.map(productRow), b, 20);
		return res;
	},
	get_product: (b) => {
		var p = db.products.find(x => String(x.id) === String(b?.id) || x.slug === b?.slug);
		return p ? { product: { ...p, post_content_html: p.post_content } } : fail('Product not found.');
	},
	update_product: (b) => {
		var p = db.products.find(x => String(x.id) === String(b?.id));
		if (!p) return fail('Product not found.');
		Object.assign(p, b, { id: p.id, status: b?.postStatus ?? b?.status ?? p.status, postStatus: b?.postStatus ?? b?.status ?? p.status, updated_at: now() });
		if (b?.sale_price || b?.regular_price) p.price = money(b.sale_price || b.regular_price);
		return ok({ id: p.id });
	},
	add_product: () => {
		var id = Math.max(...db.products.map(p => p.id)) + 1;
		var base = db.products[0];
		db.products.unshift({ ...base, id, post_id: id, product_id: String(id), title: 'New product', slug: `new-product-${id}`, status: 'draft', postStatus: 'draft', sku: '', stock_count: '0', stock_status: 'outofstock', variations: [], attributes: [], price_type: 'simple', regular_price: '0.00', sale_price: '0.00', price: '0.00', total_rate: '0', avg_rating: '0.00', created_at: now(), updated_at: now() });
		return ok({ id });
	},
	duplicate_product: (b) => {
		var p = db.products.find(x => String(x.id) === String(b?.id));
		if (!p) return fail('Product not found.');
		var id = Math.max(...db.products.map(x => x.id)) + 1;
		db.products.unshift({ ...JSON.parse(JSON.stringify(p)), id, post_id: id, product_id: String(id), title: `${p.title} (copy)`, slug: '', status: 'draft', postStatus: 'draft', sku: '', stock_count: '0', stock_status: 'outofstock', total_rate: '0', avg_rating: '0.00', created_at: now(), updated_at: now() });
		return ok({ id });
	},
	delete_products: (b) => ok({ deleted: removeWhere(db.products, p => p.id, idsOf(b)) }),
	get_low_stock_products: (b) => page(db.products.filter(p => p.status === 'publish' && productStock(p) <= Number(b?.min_stock ?? 5)).map(productRow), b, 10),
	query_products_stocks: (b) => page(db.products.map(productRow), b, 20),
	adjust_stock: (b) => {
		var p = db.products.find(x => String(x.id) === String(b?.product_id));
		if (!p) return fail('Product not found.');
		var before = Number(p.stock_count || 0), q = Number(b?.quantity || 0);
		var after = b?.action === 'set' ? q : b?.action === 'decrease' ? before - q : before + q;
		if (after < 0) return fail('There is not that much in stock to remove.');
		p.stock_count = String(after); p.stock_status = after > 0 ? 'instock' : 'outofstock';
		return ok({ stock_before: before, stock_after: after, stock_status: p.stock_status });
	},

	/* Taxonomies */
	get_terms: (b) => {
		var list = (db.terms[b?.taxonomy] ?? db.terms.product_cat).filter(t => matches(b?.keyword, t.name, t.slug));
		var { posts, ...meta } = page(list, b, 100);
		return { ...meta, terms: posts };
	},
	get_term: (b) => {
		var all = Object.values(db.terms).flat();
		var t = all.find(x => String(x.term_id) === String(b?.id ?? b?.term_id) || x.slug === b?.slug);
		return t ? { term: t, ...t } : fail('Term not found.');
	},

	/* Orders */
	get_orders: (b) => {
		var cust = b?.customer?.id ?? b?.userid;
		var list = db.orders.filter(o =>
			(!b?.status || o.status === b.status) &&
			(!b?.payment_status || o.payment_status === b.payment_status) &&
			(!b?.payment_method || o.payment_method === b.payment_method) &&
			(!cust || o.userid === String(cust)) &&
			(!b?.billing_phone || o.billing_phone.includes(b.billing_phone)) &&
			(!b?.start_date || o.created_at >= b.start_date) &&
			(!b?.end_date || o.created_at.slice(0, 10) <= b.end_date) &&
			matches(b?.keyword, o.id, o.billing_name, o.billing_phone, o.billing_email));
		return page(sortByDate(list, b).map(orderRow), b, 10);
	},
	get_order: (b) => {
		var o = db.orders.find(x => x.id === String(b?.id ?? b?.order_id));
		if (!o) return fail('Order not found.');
		var { _items, ...order } = o;
		var d = db.deliveries.find(x => x.order_id === o.id);
		return { line_items: _items, order, coupons: null, subscription: [], delivery: d ? deliveryDetail(d) : [] };
	},
	bulk_update_orders: (b) => {
		var ids = idsOf(b).length ? idsOf(b) : (b?.orders ?? []).map(String);
		var n = 0;
		db.orders.forEach(o => { if (ids.includes(o.id)) { if (b?.status) o.status = b.status; if (b?.payment_status) o.payment_status = b.payment_status; o.updated_at = now(); n++; } });
		return ok({ updated: n });
	},
	duplicate_order: (b) => {
		var o = db.orders.find(x => x.id === String(b?.id));
		if (!o) return fail('Order not found.');
		var id = String(Math.max(...db.orders.map(x => Number(x.id))) + 1);
		db.orders.unshift({ ...JSON.parse(JSON.stringify(o)), id, status: 'pending', payment_status: 'unpaid', created_at: now(), updated_at: now(), completed_at: '' });
		return ok({ id });
	},
	delete_orders: (b) => ok({ deleted: removeWhere(db.orders, o => o.id, idsOf(b)) }),
	get_top_selling_products: topSelling,
	get_top_customers: topCustomers,
	get_top_object_from_orders: () => null,
	get_store_total_overviews: overviews,
	get_chart_data: chartData,

	/* Deliveries */
	get_deliveries: (b) => {
		var list = db.deliveries.filter(d => (!b?.status || d.status === b.status) && matches(b?.keyword, d.order_id, d.tracking_code, d.consignment_id));
		var res = page(sortByDate(list, b, 'datetime'), b, 20);
		return { ...res, total: String(res.total) };
	},
	get_delivery: (b) => {
		var d = db.deliveries.find(x => (b?.order_id && x.order_id === String(b.order_id)) || (b?.id && x.id === String(b.id)));
		return d ? { delivery: deliveryDetail(d) } : { delivery: null };
	},
	update_delivery: (b) => {
		var d = db.deliveries.find(x => x.id === String(b?.id));
		if (d) ['status', 'rider_id', 'courier', 'tracking_code', 'consignment_id'].forEach(k => { if (b?.[k] != null) d[k] = String(b[k]); });
		return ok();
	},
	start_delivery: (b) => {
		var o = db.orders.find(x => x.id === String(b?.order_id));
		if (!o) return fail('Order not found.');
		var existing = db.deliveries.find(x => x.order_id === o.id);
		if (existing) return ok({ id: existing.id });
		var id = String(Math.max(...db.deliveries.map(x => Number(x.id))) + 1);
		db.deliveries.unshift({ id, customer_id: o.userid, order_id: o.id, rider_id: String(b?.rider_id ?? ''), courier: b?.courier ?? 'combostore', consignment_id: '', tracking_code: '', tracking_link: null, courier_data: 'null', type: 'normal', status: 'started', startLatLng: JSON.stringify({ lat: 23.7808, lng: 90.4153 }), endLatLng: 'null', datetime: now() });
		return ok({ id });
	},
	delete_deliveries: (b) => ok({ deleted: removeWhere(db.deliveries, d => d.id, idsOf(b)) }),
	get_trackings: (b) => {
		var list = db.trackings.filter(t => (!b?.order_id || t.order_id === String(b.order_id)) && (!b?.delivery_id || t.delivery_id === String(b.delivery_id)));
		var res = page(sortByDate(list, { order: 'asc' }, 'datetime'), b, 50);
		return { ...res, total: String(res.total) };
	},
	add_tracking: (b) => {
		var id = String(Math.max(...db.trackings.map(t => Number(t.id))) + 1);
		db.trackings.push({ id, order_id: String(b?.order_id ?? ''), delivery_id: String(b?.delivery_id ?? ''), consignment_id: '', status: b?.status ?? 'in_transit', latlng: '', notes: b?.notes ?? '', datetime: now() });
		return ok({ id });
	},
	delete_trackings: (b) => ok({ deleted: removeWhere(db.trackings, t => t.id, idsOf(b)) }),

	/* Shipping */
	get_shipping_zones: (b) => page(db.shippingZones.filter(z => matches(b?.keyword, z.name, z.description)), b, 10),
	get_shipping_zone: (b) => {
		var z = db.shippingZones.find(x => x.id === String(b?.id));
		if (!z) return fail('Zone not found.');
		var parse = (v, d) => { try { return JSON.parse(v); } catch { return d; } };
		return { zone: { ...z, countries: parse(z.countries, []), settings: [] } };
	},
	update_shipping_zone: (b) => {
		var z = db.shippingZones.find(x => x.id === String(b?.id));
		if (z) {
			['name', 'description', 'region', 'priority', 'status'].forEach(k => { if (b?.[k] != null) z[k] = String(b[k]); });
			if (Array.isArray(b?.countries)) { z.countries = JSON.stringify(b.countries); z.settings = JSON.stringify({ countries: b.countries }); }
			z.updated_at = now();
		}
		return ok();
	},
	create_shipping_zone: () => {
		var id = String(Math.max(...db.shippingZones.map(z => Number(z.id))) + 1);
		db.shippingZones.unshift({ id, name: 'New zone', description: '', region: 'include', countries: '[]', settings: '[]', priority: '1', status: '1', created_at: now(), updated_at: now() });
		return ok({ id });
	},
	duplicate_shipping_zone: (b) => {
		var z = db.shippingZones.find(x => x.id === String(b?.id));
		if (!z) return fail('Zone not found.');
		var id = String(Math.max(...db.shippingZones.map(x => Number(x.id))) + 1);
		db.shippingZones.unshift({ ...z, id, name: `${z.name} (copy)`, created_at: now(), updated_at: now() });
		return ok({ id });
	},
	delete_shipping_zones: (b) => ok({ deleted: removeWhere(db.shippingZones, z => z.id, idsOf(b)) }),
	get_shipping_methods: (b) => page(db.shippingMethods.filter(m => !b?.zone_id || m.zone_id === String(b.zone_id)), b, 50),

	/* Posts, comments and tickets */
	get_posts: (b) => {
		var status = b?.post_status ?? b?.status;
		var list = db.posts.filter(p => (!status || status === 'any' || p.status === status) && matches(b?.keyword, p.title, p.excerpt));
		return page(sortByDate(list, b, 'post_date'), b, 10);
	},
	get_post: (b) => {
		var p = db.posts.find(x => String(x.id) === String(b?.id) || x.slug === b?.slug);
		return p ? { success: true, post: { ...p, post_content_html: p.content } } : fail('Post not found.');
	},
	update_post: (b) => {
		var p = db.posts.find(x => String(x.id) === String(b?.id));
		if (!p) return fail('Post not found.');
		Object.assign(p, b, { id: p.id });
		if (b?.post_content != null) p.content = b.post_content;
		if (b?.postStatus) p.status = p.post_status = b.postStatus;
		return ok({ id: p.id });
	},
	get_comments: (b) => {
		var st = lower(b?.status);
		var want = { approved: '1', approve: '1', hold: '0', pending: '0', spam: 'spam', trash: 'trash' }[st];
		var list = db.comments.filter(c =>
			(!want ? !['spam', 'trash'].includes(c.comment_approved) : c.comment_approved === want) &&
			(!b?.post_id || c.comment_post_ID === String(b.post_id)) &&
			matches(b?.keyword, c.comment_content, c.comment_author, c.post_title));
		var { posts, ...meta } = page(sortByDate(list, b, 'comment_date'), b, 20);
		return { comments: posts, ...meta };
	},
	moderate_comments: (b) => {
		var ids = idsOf(b);
		var value = { approve: '1', unapprove: '0', hold: '0', spam: 'spam', trash: 'trash', restore: '0', unspam: '0' }[b?.action];
		var done = 0;
		if (b?.action === 'delete') done = removeWhere(db.comments, c => c.comment_ID, ids);
		else if (value != null) db.comments.forEach(c => { if (ids.includes(c.comment_ID)) { c.comment_approved = value; done++; } });
		return ok({ done });
	},
	get_tickets: (b) => {
		var marked = b?.markedAs ?? b?.marked_as;
		var list = db.tickets.filter(t => (!marked || marked === 'all' || t.markedAs === marked) && matches(b?.keyword, t.title, t.content, t.author.name));
		return page(sortByDate(list, b, 'post_date'), b, 20);
	},
	get_ticket: (b) => {
		var t = db.tickets.find(x => String(x.id) === String(b?.id));
		return t ? { prompt: { ...t } } : fail('Ticket not found.');
	},
	update_ticket: (b) => {
		var t = db.tickets.find(x => String(x.id) === String(b?.id));
		if (!t) return fail('Ticket not found.');
		['title', 'content', 'priority', 'markedAs'].forEach(k => { if (b?.[k] != null) t[k] = b[k]; });
		return ok({ id: t.id });
	},
	add_ticket: (b) => {
		var id = Math.max(...db.tickets.map(t => t.id)) + 1;
		db.tickets.unshift({ ...db.tickets[0], id, title: b?.title ?? 'New ticket', content: b?.content ?? '', markedAs: 'open', priority: '1', author: { name: db.demoAdmin.name, id: String(db.demoAdmin.id), avatar: db.demoAdmin.avatar }, post_date: now() });
		return ok({ id });
	},
	delete_tickets: (b) => ok({ deleted: removeWhere(db.tickets, t => t.id, idsOf(b)) }),

	/* Media */
	get_medias: (b) => page(sortByDate(db.medias.filter(m => matches(b?.keyword, m.title)), b, 'date').map(({ date, ...m }) => m), b, 30),
	duplicate_media: (b) => {
		var m = db.medias.find(x => String(x.id) === String(b?.id));
		if (!m) return fail('Media not found.');
		var id = Math.max(...db.medias.map(x => x.id)) + 1;
		db.medias.unshift({ ...m, id, title: `${m.title} (copy)`, date: now() });
		return ok({ id });
	},
	delete_medias: (b) => ok({ deleted: removeWhere(db.medias, m => m.id, idsOf(b)) }),

	/* The rest of the dashboard */
	get_subscriptions: (b) => {
		var list = db.subscriptions.filter(s => !b?.status || s.status === b.status);
		var counts = { active: 0, paused: 0, canceled: 0, expired: 0 };
		db.subscriptions.forEach(s => { if (s.status in counts) counts[s.status]++; });
		return { ...page(list, b, 20), status_counts: counts };
	},
	get_coupons: (b) => page(db.coupons.filter(c => matches(b?.keyword, c.title)), b, 20),
	get_activities: (b) => {
		var res = page(sortByDate(db.activities, b, 'datetime'), b, 20);
		return { ...res, total: String(res.total) };
	},
	get_templates: (b) => page([], b, 20),
};

/*
	The answer for one request. `endpoint` is the path after wp-json/ with the
	combo-store/v2/ prefix removed ("get_orders", "jwt-auth/v1/token").
*/
export function demoResponse(endpoint, body) {
	var handler = handlers[endpoint];
	if (handler) return handler(body ?? {});
	var name = endpoint.split('/').pop();
	if (/^get_/.test(name)) return /s$/.test(name) ? { total: 0, max_pages: 0, posts: [] } : {};
	return ok();
}
