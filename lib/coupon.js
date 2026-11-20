/*
	What a coupon does to a cart.

	Coupon types (the `couponType` meta):
	  percent       - amount% off the qualifying items, optionally capped by maxDiscount
	  fixed         - a flat amount off the qualifying items
	  free_shipping - no money off; delivery is free

	Any type can also carry `freeShipping` (percent / fixed that also make
	delivery free), plus the restrictions its addons switch on:

	  products    - products: [{ id, title }]           only these lines qualify
	  categories  - categories: [{ term_id, name, slug }] lines in these categories qualify
	                (with both, a line qualifies by matching either)
	  spend       - minSpend / maxSpend on the cart subtotal
	  expiry      - startDate / endDate               (checked by the server)
	  customer    - customerRule: logged_in | new | returning (checked by the server)
	  user        - users: [{ id, name, email }]      (checked by the server)

	The editor clears a restriction's fields when its addon is switched off, so
	the fields alone say what applies and nothing here needs the addons list.

	The cart and checkout both price with this, so the discount follows the
	cart as it changes instead of being frozen at the moment the code was
	applied.
*/

export const couponTypes = [
	{ value: 'percent', label: 'Percentage discount', hint: 'A % off the cart subtotal' },
	{ value: 'fixed', label: 'Flat discount', hint: 'A fixed amount off the cart' },
	{ value: 'free_shipping', label: 'Free delivery', hint: 'Delivery charge is waived' },
];

export const couponAddons = [
	{ value: 'products', label: 'Products', hint: 'Only for chosen products' },
	{ value: 'categories', label: 'Categories', hint: 'Only for chosen categories' },
	{ value: 'spend', label: 'Spend', hint: 'Minimum / maximum cart' },
	{ value: 'expiry', label: 'Expiry', hint: 'Start and end date' },
	{ value: 'customer', label: 'Customer', hint: 'New, returning or signed in' },
	{ value: 'user', label: 'User', hint: 'Only for chosen people' },
];

export const customerRules = [
	{ value: 'logged_in', label: 'Signed-in customers' },
	{ value: 'new', label: 'New customers (first order)' },
	{ value: 'returning', label: 'Returning customers' },
];

/* Fields each addon owns, cleared when it is switched off. */
export const couponAddonFields = {
	products: { products: [] },
	categories: { categories: [] },
	spend: { minSpend: '', maxSpend: '' },
	expiry: { startDate: '', endDate: '' },
	customer: { customerRule: '' },
	user: { users: [] },
};

const num = (value) => {
	var n = parseFloat(value);
	return Number.isFinite(n) && n > 0 ? n : 0;
};

export const isOn = (value) => value === true || value === 'true' || value === 1 || value === '1' || value === 'yes';

const lower = (v) => String(v ?? '').trim().toLowerCase();

/* The category slugs on a cart line (strings, or term objects). */
function lineCategories(item) {
	var raw = item?.categories ?? [];
	if (!Array.isArray(raw)) return [];
	return raw.map((c) => lower(typeof c === 'string' ? c : c?.slug ?? c?.name)).filter(Boolean);
}

const lineTotal = (item) => (parseFloat(item?.price) || 0) * (parseInt(item?.quantity) || 0);

/* Does this coupon only cover some products? */
export function couponIsRestricted(coupon) {
	return (coupon?.products?.length ?? 0) > 0 || (coupon?.categories?.length ?? 0) > 0;
}

/* Does one cart line qualify? Lines carry product_id (the parent for a variation). */
export function couponCoversItem(coupon, item) {
	if (!couponIsRestricted(coupon)) return true;

	var productIds = (coupon?.products ?? []).map((p) => String(p?.id ?? p));
	var id = String(item?.product_id ?? item?.id ?? '');
	if (id && productIds.includes(id)) return true;

	var slugs = (coupon?.categories ?? []).map((c) => lower(typeof c === 'string' ? c : c?.slug));
	var own = lineCategories(item);
	return slugs.some((slug) => slug && own.includes(slug));
}

/*
	{ eligible, reason, amount, freeShipping, shortBy, overBy, coveredTotal }

	reason: '' | 'min_spend' | 'max_spend' | 'no_items'
	`shortBy` is how much more the shopper has to add to reach minSpend, so the
	cart can say so instead of silently dropping the coupon.

	cartItems is optional: without it (the editor's preview) the whole subtotal
	is treated as qualifying.
*/
export function couponEffect(coupon, subtotal, cartItems = null) {

	var total = num(subtotal);
	var none = { eligible: false, amount: 0, freeShipping: false, shortBy: 0, overBy: 0, coveredTotal: 0 };

	var minSpend = num(coupon?.minSpend);
	if (minSpend > 0 && total < minSpend) {
		return { ...none, reason: 'min_spend', shortBy: minSpend - total };
	}

	var maxSpend = num(coupon?.maxSpend);
	if (maxSpend > 0 && total > maxSpend) {
		return { ...none, reason: 'max_spend', overBy: total - maxSpend };
	}

	/* The part of the cart the coupon covers. */
	var covered = total;
	if (Array.isArray(cartItems) && couponIsRestricted(coupon)) {
		covered = cartItems.filter((item) => couponCoversItem(coupon, item)).reduce((sum, item) => sum + lineTotal(item), 0);
		if (covered <= 0) return { ...none, reason: 'no_items' };
	}

	var type = coupon?.couponType;
	var amount = 0;

	if (type === 'percent') {
		amount = (covered * Math.min(num(coupon?.amount), 100)) / 100;
		var cap = num(coupon?.maxDiscount);
		if (cap > 0) amount = Math.min(amount, cap);
	}
	if (type === 'fixed') {
		amount = num(coupon?.amount);
	}

	/* Never more off than the covered items cost. */
	amount = Math.round(Math.min(amount, covered) * 100) / 100;

	var freeShipping = type === 'free_shipping' || isOn(coupon?.freeShipping);

	return { eligible: true, reason: '', amount, freeShipping, shortBy: 0, overBy: 0, coveredTotal: covered };
}

/* A short line for the shopper: "10% off", "Tk 50 off + free delivery", "Free delivery". */
export function couponSummary(coupon, wrapCurrency = (v) => v) {

	var type = coupon?.couponType;
	var parts = [];

	if (type === 'percent') parts.push(`${num(coupon?.amount)}% off`);
	if (type === 'fixed') parts.push(`${wrapCurrency(num(coupon?.amount))} off`);
	if (type === 'free_shipping' || isOn(coupon?.freeShipping)) parts.push(parts.length ? 'free delivery' : 'Free delivery');

	return parts.join(' + ');
}

/* Why an applied coupon is not taking anything off right now, for the cart. */
export function couponHoldMessage(coupon, wrapCurrency = (v) => v) {
	if (coupon?.reason === 'min_spend') return `Add ${wrapCurrency(Math.ceil(num(coupon?.shortBy) * 100) / 100)} more to use this coupon`;
	if (coupon?.reason === 'max_spend') return `Only for carts up to ${wrapCurrency(num(coupon?.maxSpend))}`;
	if (coupon?.reason === 'no_items') return 'None of the items in your cart qualify';
	return '';
}
