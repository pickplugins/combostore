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

/*
	The dashboard's date range, the way combo-store/v2 reads it: `range` is
	7days / 15days / 30days / 6months / 1year (7days when unset) counting back
	from today, or custom with first_date / last_date. The chart, the overview
	cards and the top-products / top-customers lists all answer for it.
*/
const RANGE_DAYS = { '7days': 7, '15days': 15, '30days': 30, '6months': 180, '1year': 365 };
function rangeWindow(body) {
	var DAY = 86400000;
	var range = body?.range || '7days';
	var endOfToday = new Date(); endOfToday.setHours(23, 59, 59, 999);
	if (range === 'custom' && body?.first_date && body?.last_date) {
		var a = new Date(String(body.first_date).slice(0, 10) + 'T00:00:00');
		var b = new Date(String(body.last_date).slice(0, 10) + 'T23:59:59');
		if (!isNaN(a) && !isNaN(b)) return { range, start: Math.min(a, b), end: Math.max(a, b) };
	}
	var days = RANGE_DAYS[range] ?? 7;
	var start = new Date(endOfToday.getTime() - days * DAY); start.setHours(0, 0, 0, 0);
	return { range: RANGE_DAYS[range] ? range : '7days', days, start: start.getTime(), end: endOfToday.getTime() };
}
const timeOf = (sql) => Date.parse(String(sql).replace(' ', 'T'));
/* A one-argument test, so it can go straight into .filter() (whose second argument is the index). */
const inWindow = (w, key = 'created_at') => (row) => { var t = timeOf(row?.[key]); return t >= w.start && t <= w.end; };

const countedOrders = (w) => db.orders.filter(o => !['cancelled', 'refunded', 'failed'].includes(o.status) && (!w || inWindow(w)(o)));

function overviews(body) {
	var w = rangeWindow(body);
	var inRange = inWindow(w);
	var list = countedOrders(w);
	var sum = (k) => list.reduce((s, o) => s + Number(o[k] || 0), 0);
	var refunded = db.orders.filter(o => o.status === 'refunded' && inRange(o));
	return {
		total_products: db.products.length,
		total_customers: db.customers().length,
		total_orders: String(db.orders.filter(inRange).length),
		total_subscriptions: String(db.subscriptions.filter(s => s.status === 'active').length),
		total_orders_amount: sum('total_amount'),
		avg_order_value: list.length ? Math.round(sum('total_amount') / list.length) : 0,
		avg_order_profit: list.length ? Math.round(sum('net_profit') / list.length) : 0,
		total_discount_amount: sum('discount_amount'),
		total_tax_amount: 0,
		total_trade_price: sum('trade_price'),
		total_gross_profit_amount: sum('gross_profit'),
		total_net_profit_amount: sum('net_profit'),
		total_shipping_amount: sum('shipping_amount'),
		total_refunded_amount: refunded.reduce((s, o) => s + Number(o.total_amount), 0),
		total_purchase_amount: db.purchases.filter(p => p.status !== 'canceled' && inRange(p)).reduce((s, p) => s + Number(p.total_amount), 0),
		total_expenses_amount: db.expenses.filter(inRange).reduce((s, e) => s + Number(e.total_amount), 0),
		total_due_amount: list.filter(o => o.payment_status !== 'paid').reduce((s, o) => s + Number(o.total_amount), 0),
		total_pending_amount: db.orders.filter(o => o.status === 'pending' && inRange(o)).reduce((s, o) => s + Number(o.total_amount), 0),
	};
}

/*
	get_chart_data, as ComboStoreStats builds it: for each day (7 / 15 / 30
	days, and custom ranges up to two months) or each month (6 months, 1
	year, longer custom ranges), the NUMBER of orders, purchases, expenses
	and refunded orders - counts, not amounts - oldest first.
*/
function chartData(body) {
	var w = rangeWindow(body);
	var DAY = 86400000;
	var pad = (n) => String(n).padStart(2, '0');
	var monthly = w.range === '6months' || w.range === '1year' || (w.range === 'custom' && (w.end - w.start) / DAY > 62);
	var labels = [];
	if (monthly) {
		var months = w.range === '6months' ? 6 : w.range === '1year' ? 12 : null;
		var cursor = new Date(w.end);
		var first = months ? null : new Date(w.start);
		for (var i = 0; months ? i < months : true; i++) {
			var m = new Date(cursor.getFullYear(), cursor.getMonth() - i, 1);
			if (first && m < new Date(first.getFullYear(), first.getMonth(), 1)) break;
			labels.unshift(`${m.getFullYear()}-${pad(m.getMonth() + 1)}`);
		}
	} else {
		var days = w.range === 'custom' ? Math.floor((w.end - w.start) / DAY) + 1 : w.days;
		for (var d = days - 1; d >= 0; d--) labels.push(db.sqlDate(w.end - d * DAY).slice(0, 10));
	}
	var keyOf = (sql) => (monthly ? String(sql).slice(0, 7) : String(sql).slice(0, 10));
	var count = (rows, keep = () => true) => {
		var tally = Object.fromEntries(labels.map(l => [l, 0]));
		rows.forEach(r => { var k = keyOf(r.created_at); if (k in tally && keep(r)) tally[k]++; });
		return labels.map(l => tally[l]);
	};
	return {
		labels,
		orders: { label: 'Orders', data: count(db.orders) },
		purchases: { label: 'Purchases', data: count(db.purchases) },
		expenses: { label: 'Expenses', data: count(db.expenses) },
		refunds: { label: 'Refunds', data: count(db.orders, o => o.status === 'refunded') },
	};
}

/*
	get_stats_all - the dashboard's Sales Performance chart (components/
	OrderStats.jsx). One row per day (7 / 15 / 30 days, custom ranges up to
	two months) or per month (6 months, 1 year, longer custom ranges) from the
	range's first day to today, each with the orders' money totals, plus a
	purchases and an expenses row for the same periods - the chart takes its
	labels from the orders rows and lines the other two up by index, so all
	three are filled for every period, empty ones as zeros.

	The panel's filters, as ComboStoreStats::get_orders_stats reads them:
	orderStatus (completed by default) and paymentStatus (paid by default),
	paymentMethod, customer_id and product_id.
*/
function statsAll(body) {
	var w = rangeWindow(body);
	var DAY = 86400000;
	var monthly = w.range === '6months' || w.range === '1year' || (w.range === 'custom' && (w.end - w.start) / DAY > 62);
	var keyOf = (sql) => String(sql).slice(0, monthly ? 7 : 10);

	var periods = [];
	if (monthly) {
		var m = new Date(w.start); m = new Date(m.getFullYear(), m.getMonth(), 1);
		var last = new Date(w.end);
		while (m <= last) { periods.push(db.sqlDate(m.getTime()).slice(0, 7)); m = new Date(m.getFullYear(), m.getMonth() + 1, 1); }
	} else {
		for (var t = new Date(w.start).setHours(12, 0, 0, 0); t <= w.end; t += DAY) periods.push(db.sqlDate(t).slice(0, 10));
	}

	var orderStatus = body?.orderStatus ?? 'completed';
	var paymentStatus = body?.paymentStatus ?? 'paid';
	var inRange = inWindow(w);
	var orders = db.orders.filter(o =>
		inRange(o) &&
		(!orderStatus || o.status === orderStatus) &&
		(!paymentStatus || o.payment_status === paymentStatus) &&
		(!body?.paymentMethod || o.payment_method === body.paymentMethod) &&
		(!body?.customer_id || o.userid === String(body.customer_id)) &&
		(!body?.product_id || o._items.some(i => i.product_id === String(body.product_id))));

	var MONEY = ['total_amount', 'subtotal_amount', 'discount_amount', 'shipping_amount', 'tax_amount', 'gross_profit', 'net_profit'];
	var orderRows = Object.fromEntries(periods.map(p => [p, { order_date: p, total_orders: 0, ...Object.fromEntries(MONEY.map(k => [k, 0])) }]));
	orders.forEach(o => {
		var row = orderRows[keyOf(o.created_at)];
		if (!row) return;
		row.total_orders++;
		MONEY.forEach(k => { row[k] += Number(o[k] || 0); });
	});

	var totalsFor = (list) => {
		var rows = Object.fromEntries(periods.map(p => [p, { order_date: p, total_orders: 0, total_amount: 0 }]));
		list.filter(inRange).forEach(x => { var row = rows[keyOf(x.created_at)]; if (row) { row.total_orders++; row.total_amount += Number(x.total_amount || 0); } });
		return periods.map(p => ({ order_date: p, total_orders: String(rows[p].total_orders), total_amount: money(rows[p].total_amount) }));
	};

	return {
		orders: periods.map(p => {
			var r = orderRows[p];
			return { order_date: p, total_orders: String(r.total_orders), ...Object.fromEntries(MONEY.map(k => [k, money(r[k])])) };
		}),
		purchases: totalsFor(db.purchases.filter(p => p.status !== 'canceled')),
		expenses: totalsFor(db.expenses),
	};
}

function topSelling(body) {
	var map = new Map();
	countedOrders(rangeWindow(body)).forEach(o => o._items.forEach(i => {
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
	countedOrders(rangeWindow(body)).filter(o => o.userid !== '0').forEach(o => {
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
	get_stats_all: statsAll,

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
	/* Expenses */
	get_expenses: (b) => {
		var list = db.expenses.filter(e =>
			(!b?.payment_status || e.payment_status === b.payment_status) &&
			(!b?.payment_method || e.payment_method === b.payment_method) &&
			(!b?.category || e.category === b.category) &&
			(!b?.start_date || e.created_at >= b.start_date) &&
			(!b?.end_date || e.created_at.slice(0, 10) <= b.end_date) &&
			matches(b?.keyword, e.id, e.title, e.category, e.note));
		return page(sortByDate(list, b), b, 10);
	},
	get_expense: (b) => {
		var e = db.expenses.find(x => x.id === String(b?.id));
		if (!e) return fail('Expense not found.');
		var { lineItems, ...expense } = e;
		return { expense: { ...expense, created_by: String(expense.created_by?.id ?? '') }, lineItems };
	},
	create_expense: (b) => {
		var id = String(Math.max(...db.expenses.map(x => Number(x.id))) + 1);
		db.expenses.unshift({ ...db.expenses[0], id, title: b?.title || 'New expense', total_amount: money(b?.total_amount), category: b?.category ?? '', subcategory: b?.subcategory ?? '', payment_method: b?.payment_method ?? '', payment_status: b?.payment_status ?? 'pending', note: b?.note ?? '', created_at: now(), updated_at: now(), lineItems: [] });
		return ok({ id });
	},
	update_expense: (b) => {
		var e = db.expenses.find(x => x.id === String(b?.id));
		if (!e) return fail('Expense not found.');
		['title', 'category', 'subcategory', 'payment_method', 'payment_status', 'transaction_id', 'note'].forEach(k => { if (b?.[k] != null) e[k] = b[k]; });
		var items = b?.lineItems ?? b?.line_items;
		if (Array.isArray(items)) {
			e.lineItems = items.map((l, i) => ({ id: String(l.id ?? `${e.id}${i}`), expense_id: e.id, product_id: '0', product_name: l.product_name ?? l.title ?? '', sku: '', quantity: String(l.quantity ?? 1), price: money(l.price), subtotal: money(Number(l.price) * Number(l.quantity ?? 1)), tax: '0.00', total: money(Number(l.price) * Number(l.quantity ?? 1)), meta: null, title: l.title ?? l.product_name ?? '' }));
			e.total_amount = money(e.lineItems.reduce((s, l) => s + Number(l.total), 0));
		} else if (b?.total_amount != null) e.total_amount = money(b.total_amount);
		e.updated_at = now();
		return ok({ id: e.id });
	},
	delete_expenses: (b) => ok({ deleted: removeWhere(db.expenses, e => e.id, idsOf(b)) }),

	/* Purchases */
	get_purchases: (b) => {
		var supplier = b?.supplier?.id ?? b?.supplier_id;
		var list = db.purchases.filter(p =>
			(!b?.status || p.status === b.status) &&
			(!b?.payment_status || p.payment_status === b.payment_status) &&
			(!supplier || p.supplier_id === String(supplier)) &&
			(!b?.start_date || p.created_at >= b.start_date) &&
			(!b?.end_date || p.created_at.slice(0, 10) <= b.end_date) &&
			matches(b?.keyword, p.id, p.billing_name, p.billing_phone, ...p.purchase_items.map(i => i.product_name)));
		return page(sortByDate(list, b).map(({ advance_payment_note, ...p }) => ({ ...p, purchase_items: p.purchase_items.map(({ title, variation_id, ...i }) => i) })), b, 10);
	},
	get_purchase: (b) => {
		var p = db.purchases.find(x => x.id === String(b?.id));
		if (!p) return fail('Purchase not found.');
		var { purchase_items, ...purchase } = p;
		return { lineItems: purchase_items, purchase };
	},
	create_purchase: () => {
		var id = String(Math.max(...db.purchases.map(x => Number(x.id))) + 1);
		var s = db.suppliers()[0];
		db.purchases.unshift({ ...db.purchases[0], id, status: 'pending', total_amount: '0.00', subtotal_amount: '0.00', discount_amount: '0.00', shipping_amount: '0.00', payment_method: '', payment_status: 'unpaid', supplier_id: String(s?.id ?? ''), billing_name: s?.name ?? '', created_at: now(), updated_at: now(), purchase_items: [] });
		return ok({ id });
	},
	update_purchase: (b) => {
		var p = db.purchases.find(x => x.id === String(b?.id));
		if (!p) return fail('Purchase not found.');
		['status', 'payment_method', 'payment_status', 'note', 'supplier_id', 'billing_name', 'billing_phone', 'billing_email', 'billing_address'].forEach(k => { if (b?.[k] != null) p[k] = String(b[k]); });
		p.updated_at = now();
		return ok({ id: p.id });
	},
	delete_purchases: (b) => ok({ deleted: removeWhere(db.purchases, p => p.id, idsOf(b)) }),

	/* Stock history: the same filters and in/out totals as ComboStoreStocks::get_stocks_histories. */
	get_stocks_histories: (b) => {
		var delta = (h) => Number(h.stock_after) - Number(h.stock_before);
		var list = db.stockHistory.filter(h =>
			(!b?.product_id || h.product_id === String(b.product_id)) &&
			(!b?.variation_id || h.variation_id === String(b.variation_id)) &&
			(!b?.event_type || h.event_type === b.event_type) &&
			(!b?.reference_type || h.reference_type === b.reference_type) &&
			(b?.direction !== 'in' || delta(h) > 0) &&
			(b?.direction !== 'out' || delta(h) < 0) &&
			(!b?.start_date || h.created_at >= b.start_date) &&
			(!b?.end_date || h.created_at.slice(0, 10) <= b.end_date) &&
			matches(b?.keyword, h.product_title, h.note, h.reference_id));
		var units_in = list.reduce((s, h) => s + Math.max(0, delta(h)), 0);
		var units_out = list.reduce((s, h) => s + Math.max(0, -delta(h)), 0);
		return { units_in, units_out, ...page(sortByDate(list, b), b, 20) };
	},

	/* The one demo template (WonderJoy) and its parts; edits to a part last until reload. */
	get_templates: async (b) => page([await demoTemplate()], b, 20),
	get_active_template: async () => demoTemplate(),
	get_template: async (b) => {
		var t = await demoTemplate();
		return String(b?.id ?? t.id) === t.id ? { ...t } : { pages: [] };
	},
	get_template_parts: async (b) => {
		var t = await demoTemplate();
		var list = (!b?.template_id || String(b.template_id) === t.id) ? t.pages : [];
		return page(list.filter(p => !b?.type || p.type === b.type), b, 50);
	},
	get_template_part: async (b) => {
		var t = await demoTemplate();
		var part = t.pages.find(p => p.id === String(b?.id) || (b?.type && p.type === b.type));
		if (!part) return fail('Template part not found.');
		var asString = (p) => p ? { ...p, content: JSON.stringify(p.content), meta: '' } : null;
		return { ...part, header: asString(t.pages.find(p => p.type === 'header')), footer: asString(t.pages.find(p => p.type === 'footer')) };
	},
	update_template_part: async (b) => {
		var t = await demoTemplate();
		var part = t.pages.find(p => p.id === String(b?.id));
		if (!part) return fail('Template part not found.');
		if (b?.content != null) part.content = typeof b.content === 'string' ? (() => { try { return JSON.parse(b.content); } catch { return part.content; } })() : b.content;
		if (b?.title != null) part.title = b.title;
		if (b?.meta != null) part.meta = b.meta;
		part.datetime = now();
		return ok({ id: part.id });
	},
	update_template: async (b) => {
		var t = await demoTemplate();
		if (b?.name != null) t.name = b.name;
		if (b?.description != null) t.description = b.description;
		if (b?.meta != null) t.meta = typeof b.meta === 'string' ? b.meta : JSON.stringify(b.meta);
		return ok({ id: t.id });
	},
	get_template_settings: async () => {
		var t = await demoTemplate();
		var meta = {}; try { meta = JSON.parse(t.meta || '{}'); } catch { }
		return { id: Number(t.id), meta };
	},
	active_template: () => ok(),
	delete_template: () => fail('The demo template cannot be deleted (demo mode).'),
};

/*
	The demo store's site template: WonderJoy (components/PageBuilder/templates),
	all sixteen page types, in the shape get_templates returns. Imported on
	first use - it is half a megabyte the rest of the demo does not need - and
	kept, so part edits stay until the page reloads.
*/
let templatePromise = null;
function demoTemplate() {
	templatePromise ??= import('@/components/PageBuilder/templates/WonderJoy').then(m => {
		var src = m.default?.[0] ?? { name: 'Demo template', description: '', meta: {}, pages: [] };
		var at = db.sqlDate(Date.now() - 30 * 86400000);
		return {
			id: '1',
			name: src.name,
			description: src.description,
			thumbnail: '0',
			style: null,
			meta: typeof src.meta === 'string' ? src.meta : JSON.stringify(src.meta ?? {}),
			datetime: at,
			pages: (src.pages ?? []).map((p, i) => ({
				id: String(101 + i), template_id: '1', title: p.title, slug: p.type, type: p.type,
				content: JSON.parse(JSON.stringify(p.content ?? [])), style: '', meta: null, datetime: at,
			})),
		};
	});
	return templatePromise;
}

/*
	The answer for one request. `endpoint` is the path after wp-json/ with the
	combo-store/v2/ prefix removed ("get_orders", "jwt-auth/v1/token").
	The template endpoints answer with a promise; everything else directly.
*/
export function demoResponse(endpoint, body) {
	var handler = handlers[endpoint];
	if (handler) return handler(body ?? {});
	var name = endpoint.split('/').pop();
	if (/^get_/.test(name)) return /s$/.test(name) ? { total: 0, max_pages: 0, posts: [] } : {};
	return ok();
}
