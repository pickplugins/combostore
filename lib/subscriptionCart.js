/*
	Per-product subscriptions on the storefront.

	A product whose `subscription` attribute is enabled (set in the product
	editor: { enable, interval, interval_count, setup_fee, discount }) can be
	bought once or subscribed to. A subscribed cart line carries
	purchase_type "subscription" and its price after the subscribe discount;
	its setup fee is charged once, as its own order line, added when the order
	is submitted (withSetupFeeLines). The server takes the billing cycle from
	the product itself, never from the cart.
*/

const INTERVALS = ["day", "week", "month", "year"];

/** The product's subscribe option, normalised, or null when it has none. */
export function productSubscription(product) {
	var settings = product?.subscription;
	if (typeof settings === "string") {
		try { settings = JSON.parse(settings); } catch (e) { settings = null; }
	}
	if (!settings || !settings.enable || settings.enable === "false") return null;

	var interval = INTERVALS.includes(settings.interval) ? settings.interval : "month";
	return {
		interval,
		interval_count: Math.max(1, parseInt(settings.interval_count) || 1),
		setup_fee: Math.max(0, parseFloat(settings.setup_fee) || 0),
		discount: Math.min(100, Math.max(0, parseFloat(settings.discount) || 0)),
	};
}

/** "every month", "every 2 weeks". */
export function subscriptionCycle(subscription) {
	if (!subscription) return "";
	var count = Math.max(1, parseInt(subscription.interval_count) || 1);
	var unit = subscription.interval || "month";
	return count === 1 ? `every ${unit}` : `every ${count} ${unit}s`;
}

/** A unit price after the subscribe discount, to 2 decimals. */
export function subscriptionPrice(price, subscription) {
	var value = parseFloat(price) || 0;
	var discount = parseFloat(subscription?.discount) || 0;
	return Math.round(value * (1 - discount / 100) * 100) / 100;
}

export function isSubscriptionLine(item) {
	return item?.purchase_type === "subscription";
}

/** One-time setup fees owed by the subscribed lines in a cart. */
export function cartSetupFees(cartItems) {
	return (cartItems ?? []).reduce((sum, item) => {
		return isSubscriptionLine(item) ? sum + (parseFloat(item?.subscription?.setup_fee) || 0) : sum;
	}, 0);
}

/**
 * The cart as it is sent with the order: every line, plus one "Setup fee"
 * line (product 0, so stock, licenses and downloads ignore it) for each
 * subscribed line that has a fee.
 */
export function withSetupFeeLines(cartItems) {
	var lines = [...(cartItems ?? [])];
	for (var item of cartItems ?? []) {
		var fee = isSubscriptionLine(item) ? parseFloat(item?.subscription?.setup_fee) || 0 : 0;
		if (fee > 0) {
			lines.push({
				id: 0,
				product_id: 0,
				variation_id: 0,
				title: `Setup fee: ${item?.title ?? "subscription"}`,
				quantity: 1,
				price: fee,
				regular_price: fee,
				subtotal: fee,
				total: fee,
				meta: { setup_fee_for: item?.product_id ?? item?.id },
			});
		}
	}
	return lines;
}
