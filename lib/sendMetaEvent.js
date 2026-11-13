/*
	One Meta event, sent twice: from the browser (fbq) and from our server
	(/api/meta-event, the Conversions API). Both carry the same event ID, so
	Meta keeps one and merges what each knew about the customer.

	Pass `user` (email, phone, name, city, country, external_id) whenever the
	customer is known - checkout and the thank-you page know them. The server
	hashes it; that is what raises Event Match Quality.

	Give Purchase a stable eventId such as `purchase-<order id>`: if the
	checkout and the thank-you page both report the same order, Meta still
	counts it once.
*/

const STANDARD_EVENTS = new Set([
	'AddPaymentInfo', 'AddToCart', 'AddToWishlist', 'CompleteRegistration', 'Contact', 'CustomizeProduct',
	'Donate', 'FindLocation', 'InitiateCheckout', 'Lead', 'PageView', 'Purchase', 'Schedule', 'Search',
	'StartTrial', 'SubmitApplication', 'Subscribe', 'ViewContent',
]);

const newId = () => (window.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`);

/* A reload of the same page must not report the same order again. */
function alreadySent(eventName, eventId) {
	try {
		const key = `meta-event:${eventName}:${eventId}`;
		if (window.sessionStorage.getItem(key)) return true;
		window.sessionStorage.setItem(key, '1');
	} catch {
		/* Storage switched off: Meta's own deduplication on event_id still applies. */
	}
	return false;
}

export function trackMetaEvent({ eventName, eventId, customData = {}, user = {}, once = false }) {

	if (typeof window === 'undefined' || !eventName) return null;

	const id = eventId || newId();

	if (once && alreadySent(eventName, id)) return id;

	if (typeof window.fbq === 'function') {
		window.fbq(STANDARD_EVENTS.has(eventName) ? 'track' : 'trackCustom', eventName, customData, { eventID: id });
	}

	fetch('/api/meta-event', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		/* The checkout navigates to the thank-you page straight after; keepalive lets this finish. */
		keepalive: true,
		body: JSON.stringify({
			event_name: eventName,
			event_id: id,
			event_source_url: window.location.href,
			custom_data: customData,
			user,
		}),
	}).catch(() => { });

	return id;
}

/* The older call shape, still used by a few pages: { event_name, value, currency, content_name, eventId, user }. */
export async function sendMetaEvent(prams = {}) {
	return trackMetaEvent({
		eventName: prams.event_name,
		eventId: prams.eventId,
		user: prams.user,
		once: prams.once,
		customData: {
			value: Number(prams.value) || 0,
			currency: prams.currency || 'BDT',
			...(prams.content_name ? { content_name: prams.content_name } : {}),
			...(prams.customData ?? {}),
		},
	});
}
