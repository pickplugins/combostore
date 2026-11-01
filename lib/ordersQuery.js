/*
	The orders list's filters, search and page, kept so that opening an order and
	coming back shows the same results.

	This is sessionStorage on purpose. A filter that outlived the tab would come
	back days later and make orders look missing, and the filters can name a
	customer, so they go when the tab closes or the user logs out.
*/

const STORAGE_KEY = "orders:query";


/** The saved query, or null if there is nothing usable. */
export function loadOrdersQuery() {

	try {
		const saved = JSON.parse(window.sessionStorage.getItem(STORAGE_KEY));

		return saved && typeof saved === "object" && !Array.isArray(saved) ? saved : null;

	} catch (error) {
		/* Storage switched off, or an unreadable entry. */
		return null;
	}
}


export function saveOrdersQuery(query) {

	try {
		window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(query));
	} catch (error) {
		/* The list still works; it just will not be remembered. */
	}
}


export function clearOrdersQuery() {

	try {
		window.sessionStorage.removeItem(STORAGE_KEY);
	} catch (error) {
	}
}
