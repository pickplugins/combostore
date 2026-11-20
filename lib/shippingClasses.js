/*
	Shipping classes live in their own tables (ComboStoreShippingClasses on the
	server): cstore_shipping_classes { id, slug, name, description, cost, type,
	priority, status } and cstore_shipping_class_rates { method_id, class_id,
	cost, type }.

	A product picks a class by slug with its "Shipping" addon
	(cstore_products.shipping_class); a variation's own class wins. Per method,
	a class costs the method's rate for it or else the class's default. The
	most expensive class in the cart is charged once per order on top of the
	method: `fixed` is the cost itself, `percent` is that share of the subtotal.

	The server works out which classes are in the cart from the products
	themselves: checkout sends find_shipping_methods its lines ({ product_id,
	variation_id }) and subtotal, and each method comes back with
	class_rates, class_charge and total.
*/

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

/* POST to a staff shipping-class route; resolves to the JSON body. */
export async function shippingClassRequest(route, token, body = {}) {
	const response = await fetch(`${serverUrl}wp-json/combo-store/v2/${route}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
		body: JSON.stringify(body),
	});
	const data = await response.json().catch(() => null);
	if (!response.ok || !data || data.errors || data.status === 'failed') {
		throw new Error(data?.message || 'The server refused the request.');
	}
	return data;
}

/* What one rate adds to an order with this items subtotal. */
export function shippingClassCharge(rate, subtotal) {
	var cost = parseFloat(rate?.cost);
	if (!(cost > 0)) return 0;
	if (rate.type === 'percent') return Math.round((parseFloat(subtotal) || 0) * cost) / 100;
	return Math.round(cost * 100) / 100;
}

/* A find_shipping_methods method's class charge for this subtotal: its most expensive class rate, once. */
export function methodClassCharge(method, subtotal) {
	var rates = Array.isArray(method?.class_rates) ? method.class_rates : [];
	return rates.reduce((highest, rate) => Math.max(highest, shippingClassCharge(rate, subtotal)), 0);
}

/* "+ 50" or "+ 5% of subtotal", for pickers. */
export function shippingClassCostLabel(rate, currency = '') {
	var cost = parseFloat(rate?.cost);
	if (!(cost > 0)) return 'No extra cost';
	return rate.type === 'percent' ? `+ ${cost}% of subtotal` : `+ ${currency}${cost}`;
}

/* The cart lines the server needs to price classes, plus a key that changes only when they do. */
export function shippingClassItems(cartItems) {
	var items = (Array.isArray(cartItems) ? cartItems : [])
		.map(item => ({ product_id: parseInt(item?.product_id ?? item?.id, 10) || 0, variation_id: parseInt(item?.variation_id, 10) || 0 }))
		.filter(item => item.product_id > 0);
	var key = items.map(i => `${i.product_id}:${i.variation_id}`).sort().join(',');
	return { items, key };
}
