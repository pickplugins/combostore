/*
	What a shopper has typed at checkout, kept in the browser so that going back
	to the cart, or reloading, does not make them type it again.

	This is a name, phone number and address on the shopper's own device, so it
	holds no more than the form needs, expires, and goes when the order is placed
	or the shopper logs out. Totals, order status, the shipping and payment
	choices and the delivery location are left out on purpose: the first three
	must be worked out again from the current cart and shipping rates, and the
	map cannot show a saved location, so it would be sent without being seen.
*/

const STORAGE_KEY = "checkout:draft";
const MAX_AGE_MS = 24 * 60 * 60 * 1000;

const FIELDS = [
	"billing_name",
	"billing_phone",
	"billing_email",
	"billing_address",
	"billing_country",
	"billing_city",
	"order_note",
	"shipping_name",
	"shipping_phone",
	"shipping_address",
	"shipping_address1",
	"shipping_address2",
	"shipping_country",
	"shipping_city",
];

const isFilled = (value) => typeof value === "string" && value !== "";


/** The saved fields, or an empty object if there are none this user may see. */
export function loadCheckoutDraft(userId) {

	try {
		const draft = JSON.parse(window.localStorage.getItem(STORAGE_KEY));

		if (!draft) {
			return {};
		}

		const expired = !(Date.now() - draft.savedAt < MAX_AGE_MS);

		/* The user can still be loading, so only two known ids can disagree. */
		const someoneElse = draft.userId && userId && draft.userId !== userId;

		if (expired || someoneElse) {
			window.localStorage.removeItem(STORAGE_KEY);
			return {};
		}

		return Object.fromEntries(
			FIELDS.filter(field => isFilled(draft.fields?.[field])).map(field => [field, draft.fields[field]])
		);

	} catch (error) {
		/* Private mode, storage switched off, or an unreadable entry. */
		return {};
	}
}


export function saveCheckoutDraft(userId, checkoutData) {

	try {
		const fields = Object.fromEntries(
			FIELDS.filter(field => isFilled(checkoutData?.[field])).map(field => [field, checkoutData[field]])
		);

		window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ userId, savedAt: Date.now(), fields }));

	} catch (error) {
		/* The form still works; it just will not be remembered. */
	}
}


export function clearCheckoutDraft() {

	try {
		window.localStorage.removeItem(STORAGE_KEY);
	} catch (error) {
	}
}
